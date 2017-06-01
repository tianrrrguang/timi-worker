import { makeIframeHtml } from './iframe-html';
import { Stat } from './declare';
import { uuid, resolve, getImportsList } from './utils';

// console.warn(iframeHtml);

export class FakeWorker {

    private jspath: string = '';
    private iframe: any = null;
    private _stat: Stat = Stat.IDLE;
    private msgQueue: any[] = [];
    private errorQueue: any[] = [];
    private uuid: string = uuid();
    private _onmessage: Function = (() => { });
    private _messages: Function[] = [];
    private _onerror: any = null;

    get stat() { return this._stat; }
    set stat(val) {
        this._stat = val;
    }

    constructor(jspath) {
        this.jspath = resolve(location.href, jspath);
        this.stat = Stat.LOADING;
        this.bindMessageListener();
        this.parseImportScripts((list) => {
            this.createIframeContext(list);
        });
    }

    set onmessage(val) {
        this._onmessage = val;
    }

    set onerror(val) {
        this._onerror = val;
        if( this.errorQueue.length ){
            this.errorQueue = [];
            this.fireError();
        }
    }

    postMessage(msg: any): void {
        if (this.stat == Stat.READY)
            this.iframe.contentWindow.postMessage(msg, '*');
        else
            this.msgQueue.push(msg);
    }

    addEventListener(name, cb): void {
        switch (name) {
            case 'message':
                this._messages.push(cb);
                break;
        }
    }

    terminate(): void {
        document.body.removeChild(this.iframe);
    }

    setLoading(): void {
        this.stat = Stat.LOADING;
    }

    private bindMessageListener(): void {
        window.addEventListener('message', (evt) => {
            if (evt.data.uuid !== this.uuid) {
                return;
            }
            if (evt.data.isReady) {
                this.stat = Stat.READY;
                this.boardMsgQueue();
                return;
            }
            if (evt.data.isLoading) {
                this.stat = Stat.LOADING;
                return;
            }
            if (evt.data.error) {
                this.fireError();
                return;
            }
            if (evt.data.close) {
                this.stat = Stat.IDLE;
                this.terminate();
                return;
            }
            this._onmessage(evt.data);
            this._messages.forEach((cb) => {
                cb(evt.data);
            });
        }, false);
    }

    private parseImportScripts(cb: Function): void {
        this.asyncLoadTxt(this.jspath, (txt) => {
            const list = getImportsList(txt, this.jspath) || [];
            cb(list);
        });
    }

    private createIframeContext(list): void {
        const iframe = this.iframe = document.createElement('iframe');
        iframe.style.width = '0px';
        iframe.style.height = '0px';
        iframe.style.display = 'none';
        iframe.setAttribute('uuid', this.uuid);
        iframe.src = makeIframeHtml(this.uuid, this.jspath, list);
        document.body.appendChild(iframe);
    }

    private asyncLoadTxt(path: string, success: Function, fail: Function = (() => { })): void {
        const self = this;
        const xhr = <any>(new XMLHttpRequest());
        xhr.responseType = "text";
        xhr.open('GET', path, true);
        xhr.onload = function (e) {
            if (this.readyState == 4) {
                if (this.status == 200 || this.status == 304) {
                    success(this.responseText);
                }
                else if( this.status == 404 ){
                    self.fireError();
                }
            }
        };
        xhr.ontimeout = function (e) {
            self.fireError();
        };
        xhr.onerror = function (e) {
            self.fireError();
        };
        //发送数据
        xhr.send(null);
    }

    private boardMsgQueue(): void {
        this.msgQueue.forEach((msg) => {
            this.postMessage(msg);
        });
    }

    private fireError(): void {
        if( this._onerror ){
            this._onerror();
        }
        else{
            this.errorQueue.push(1);
        }
    }

}