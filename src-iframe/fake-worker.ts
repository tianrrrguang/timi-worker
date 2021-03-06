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
    private _errors: Function[] = [];

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
        if (this.errorQueue.length) {
            this.errorQueue = [];
            this.fireError();
        }
    }

    postMessage(msg: any): void {
        if (this.stat == Stat.READY)
            this.iframe.contentWindow.postMessageOrigin(msg, '*');
        else
            this.msgQueue.push(msg);
    }

    addEventListener(name, cb): void {
        switch (name) {
            case 'message':
                this._messages.push(cb);
                break;
            case 'error':
                this._errors.push(cb);
                break;
        }
    }

    removeEventListener(name, callback): void {
        switch (name) {
            case 'message':
                this.removeUnitFromList(this._messages, callback);
                break;
            case 'error':
                this.removeUnitFromList(this._errors, callback);
                break;
        }
    }

    terminate(): void {
        document.body.removeChild(this.iframe);
    }

    setLoading(): void {
        this.stat = Stat.LOADING;
    }

    private bindMessageListener(msg): void {
        if (!msg) {
            return;
        }
        if (msg == '$$isReady') {
            this.stat = Stat.READY;
            this.boardMsgQueue();
            return;
        }
        if (msg == '$$isLoading') {
            this.stat = Stat.LOADING;
            return;
        }
        if (msg == '$$error') {
            this.fireError();
            return;
        }
        if (msg == '$$close') {
            this.stat = Stat.IDLE;
            this.terminate();
            return;
        }
        this._onmessage({data:msg});
        this._messages.forEach((cb) => {
            cb({data:msg});
        });
    }

    private parseImportScripts(cb: Function): void {
        this.asyncLoadTxt(this.jspath, (txt) => {
            const list = getImportsList(txt, this.jspath) || [];
            cb(list);
        });
    }

    private createIframeContext(list): void {
        const iframe: any = this.iframe = document.createElement('iframe');
        iframe.style.width = '0px';
        iframe.style.height = '0px';
        iframe.style.display = 'none';
        iframe.setAttribute('uuid', this.uuid);
        iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
        iframe.srcdoc = makeIframeHtml(this.uuid, this.jspath, list);
        window[this.uuid] = this.bindMessageListener.bind(this);
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
                else if (this.status == 404) {
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
        if (this._onerror) {
            this._onerror({});
            this._errors.forEach((cb) => {
                cb({});
            });
        }
        else {
            this.errorQueue.push(1);
        }
    }

    private removeUnitFromList(list: any[], unit: any): void {
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            if (item == unit) {
                list.splice(i, 1);
                return;
            }
        }
    }

}