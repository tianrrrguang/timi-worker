import { makeIframeHtml } from './iframe-html';
import { Stat } from './declare';
import { uuid, resolve } from './utils';

// console.warn(iframeHtml);

export class FakeWorker {

    private jspath: string = '';
    private iframe: any = null;
    private _stat: Stat = Stat.IDLE;
    private msgQueue: any[] = [];
    private uuid: string = uuid();
    private _onmessage: Function = (() => { });
    private _messages: Function[] = [];

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
            this._onmessage(evt.data);
            this._messages.forEach((cb) => {
                cb(evt.data);
            });
        }, false);
    }

    private parseImportScripts(cb: Function): void {
        this.asyncLoadTxt(this.jspath, (txt) => {
            let list = [];
            const reg = /importScripts\(\s*([\'\"].+\.js[\'\"])\s*\)/g;
            let arr;
            while ((arr = reg.exec(txt)) != null) {
                const str = arr[1].replace(/[\'\"\s]/g, '');
                const jsArr = str.split(',');
                jsArr.forEach((js) => {
                    list.push(resolve(this.jspath, js));
                });
            }
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
        const xhr = <any>(new XMLHttpRequest());
        xhr.responseType = "text";
        xhr.open('GET', path, true);
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

    private boardMsgQueue(): void {
        this.msgQueue.forEach((msg) => {
            this.postMessage(msg);
        });
    }

}