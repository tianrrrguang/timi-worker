import { Stat } from './declare';
import { WorkerEvent } from './worker-event';
import { FakeContext } from './fake-context';
import { defaultListenerList, resolve } from './utils';
import * as async from './async';

export class FakeWorker {

    /**
     * 当前线程状态
     */
    private _stat: Stat = Stat.IDLE;

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
    private fakeWorker: any = null;

    /**
     * 主页面发送的消息队列
     * 在fake线程尚未就绪时的消息需要保存到此队列中，在fake线程就绪后一次性全量发送给fake线程
     * 若fake线程使用importScripts，则也需要全量发送
     */
    private MainMsgQueue: WorkerEvent[] = [];

    private importScriptsCache: any = {};
    private importScriptsQueue: string[] = [];

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

    set stat(val) {
        this._stat = val;
        if (this._stat == Stat.READY) {
            this._boardMsgQueueToThread(this.MainMsgQueue);
        }
    }

    get stat() {
        return this._stat;
    }

    /**
     * 从主页面向fake线程传递消息
     */
    postMessage(data): void {
        const evt: WorkerEvent = new WorkerEvent(data);
        if (this.stat != Stat.READY) {
            this.MainMsgQueue.push(evt);
        }
        else {
            this._boardMsgQueueToThread([evt]);
        }
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

    _importScripts(jspath: string): void {
        this.stat = Stat.LOADING;
        const p = resolve(this.jspath, jspath);
        this.importScriptsQueue.push(p);
        this._importScriptsQueueList((codeStringList) => {
            const context = this.fakeContext;
            const worker = this.fakeWorker;

            console.warn(codeStringList);

            eval(`
                (function(){
                    console.error(1111);
                    var my2 = 23;
                    with(context){
                        var my2 = 22;
                    }
                }).call(worker);
            `);
            this.stat = Stat.READY;
            console.warn('ok');
        });
    }

    /**
     * 异步加载js代码（以文本形式）
     */
    private _loadJsCode(): void {

        this.stat = Stat.LOADING;
        this._asyncLoadTxt(this.jspath, (txt) => {
            this.jscode = txt;
            this._evalJsCodeWithContext();
        });

    }

    private _asyncLoadTxt(path: string, success: Function, fail: Function = (() => { })): void {
        const xhr = <any>(new XMLHttpRequest());
        xhr.responseType = "text";
        xhr.open('GET', path, true);
        //注册相关事件回调处理函数
        xhr.onload = function (e) {
            if (this.readyState == 4) {
                if (this.status == 200 || this.status == 304) {
                    success(this.responseText);
                }
            }
        };
        xhr.ontimeout = function (e) {

        };
        xhr.onerror = function (e) {

        };

        //发送数据
        xhr.send(null);
    }

    private _importScriptsQueueList(final: Function): void {
        const codeStringList: string[] = [];
        this._doImportScriptsQueueList((codeString) => {
            if (codeString) {
                codeStringList.push(codeString);
            }
            else if (false === codeString) {
                final(codeStringList);
            }
        });
    }

    private _doImportScriptsQueueList(cb: Function): void {
        if (this.importScriptsQueue.length) {
            const jspath = this.importScriptsQueue.shift();
            if (this.importScriptsCache[jspath]) {
                cb('');
            }
            else {
                this.importScriptsCache[jspath] = true;
                this._asyncLoadTxt(jspath, (txt) => {
                    cb(txt);
                    this._doImportScriptsQueueList(cb);
                });
            }
        }
        else {
            cb(false);
        }
    }

    /**
     * 在fakeContext上下文环境下执行fake线程js代码
     * 在执行完毕之后需要再次执行消息广播
     */
    private _evalJsCodeWithContext(): void {

        //找到直接importScripts
        const reg = /importScripts\(\s*[\'\"](.+\.js)[\'\"]\s*\)/g;
        let arr;
        while ((arr = reg.exec(this.jscode)) != null) {
            this.importScriptsQueue.push(resolve(this.jspath, arr[1]));
        }
        this._importScriptsQueueList((codeStringList) => {
            const context = this.fakeContext;
            const importCode = `\n\n${codeStringList.join('\n')}\n\n`;

            // console.warn(importCode);
            const script = document.createElement('script');
            script.innerHTML = `
                var a = 1;
                setInterval(function(){
                    console.warn(a, b);
                }, 3000);
            `; 

            document.body.appendChild(script);

            const script2 = document.createElement('script');
            script2.innerHTML = `
                window.b = 2;
            `; 

            setTimeout(function(){
                document.body.appendChild(script2);
            }, 5000);

            setTimeout(function(){
                document.body.removeChild(script);
            }, 15000);
            

            // const code = `(function(){

         
                
            //         var my2 = -1;
            //         ${importCode}${this.jscode}
                
            //     return this;
            // }).call(context)`;

            // console.warn(code);

            // const worker = this.fakeWorker;
            // console.warn(worker);

            // eval(`
            //     (function(){
            //         var my2 = 23;
            //         with(context){
            //             var my2 = 22;
            //         }
            //     }).call(worker);
            // `);

            this.stat = Stat.READY;
        });

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