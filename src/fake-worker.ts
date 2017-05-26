import { Stat } from './declare';
import { WorkerEvent } from './worker-event';
import { FakeContext } from './fake-context';
import { defaultListenerList } from './utils';

export class FakeWorker {

    /**
     * 当前线程状态
     */
    private stat: Stat = Stat.IDLE;

    /**
     * 线程js文件路径
     */
    private jspath: string = '';

    /**
     * 使用xhr下载下来的线程js文件代码
     */
    private jscode: string = '';

    /**
     * fake线程的上下文
     */
    private fakeContext: FakeContext = null;

    /**
     * fake线程实例
     */
    private fakeWorker: any = null;

    /**
     * 主页面发送的消息队列
     * 在fake线程尚未就绪时的消息需要保存到此队列中，在fake线程就绪后一次性全量发送给fake线程
     * 若fake线程使用importScripts，则也需要全量发送
     */
    private MainMsgQueue: WorkerEvent[] = [];

    /**
     * 主页面的消息监听函数列队
     */
    public MainListenerList: any = defaultListenerList();

    /**
     * fake线程的消息监听函数队列
     */
    public ThreadListenerList: any = defaultListenerList();

    //构造函数
    constructor(jspath) {
        this.jspath = jspath;
        this.fakeContext = new FakeContext(this);
        this._loadJsCode();
    }

    /**
     * 主页面通过xx.onmessage方法设定消息监听函数
     * 该方法会覆盖其他通过onmessage/addEventListener增加的监听函数
     */
    set onmessage(val) {
        this.MainListenerList.onmessage = val;
    }

    /**
     * 从主页面向fake线程传递消息
     */
    postMessage(data): void {
        const evt: WorkerEvent = new WorkerEvent(data);
        if (this.stat != Stat.READY) {
            this.MainMsgQueue.push(evt);
        }
        this._boardMsgQueueToThread([evt]);
    }

    /**
     * 终止fake线程
     */
    terminate(): void {
        this.ThreadListenerList.onexit && this.ThreadListenerList.onexit();
        this.MainListenerList = defaultListenerList();
        this.ThreadListenerList = defaultListenerList();
    }

    /**
     * 主页面增加监听函数
     */
    addEventListener(eventName, cb) {
        try {
            this.MainListenerList[eventName].push(cb);
        }
        catch (error) {
            console.error(`无效的事件名称: ${eventName}`);
        }
    }

    /**
     * 异步加载js代码（以文本形式）
     */
    private _loadJsCode(): void {
        const self = this;
        const xhr = <any>(new XMLHttpRequest());
        xhr.responseType = "text";
        xhr.open('GET', this.jspath, true);
        //注册相关事件回调处理函数
        xhr.onload = function (e) {
            if (this.readyState == 4) {
                if (this.status == 200 || this.status == 304) {
                    self.jscode = this.responseText;
                    self._evalJsCodeWithContext();
                }
            }
        };
        // xhr.ontimeout = function (e) { };
        // xhr.onerror = function (e) { };
        // xhr.upload.onprogress = function (e) { };

        //发送数据
        xhr.send(null);
        //改变状态
        this.stat = Stat.LOADING;
    }

    /**
     * 在fakeContext上下文环境下执行fake线程js代码
     * 在执行完毕之后需要再次执行消息广播
     */
    private _evalJsCodeWithContext(): void {

        // const reg = /importScripts\((.+)\)/g;
        // var arr;
        // while((arr = reg.exec(this.jscode)) !=null){
        //     console.warn(arr);
        // }
        // const self = this;
        // (function () {
        //     eval(self.jscode);
        // }).call(self.fakeContext);

        const context = this.fakeContext;
        const code = `(function(){with(context){${this.jscode}};}).call(context)`;
        this.fakeWorker = eval(code);
        this._boardMsgQueueToThread(this.MainMsgQueue);
    }

    /**
     * 向fake线程广播消息
     */
    private _boardMsgQueueToThread(EvtQueue: WorkerEvent[]): void {
        //通过嵌套setTimeout:0，使得执行顺序移至最后，最大限度模拟线程
        setTimeout(() => {
            const tl = this.ThreadListenerList;
            EvtQueue.forEach((evt) => {
                tl.message.forEach((cb) => {
                    cb && cb(evt);
                });
                tl.onmessage && tl.onmessage(evt);
            });

        }, 0);
    }

    /**
     * 向主页面广播消息
     */
    private _boardMsgQueueToMain(EvtQueue: WorkerEvent[]): void {
        //通过嵌套setTimeout:0，使得执行顺序移至最后，最大限度模拟线程
        setTimeout(() => {
            const ml = this.MainListenerList;
            EvtQueue.forEach((evt) => {
                ml.message.forEach((cb) => {
                    cb && cb(evt);
                });
                ml.onmessage && ml.onmessage(evt);
            });

        }, 0);
    }

}