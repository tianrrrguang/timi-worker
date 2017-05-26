import { WorkerEvent } from './worker-event';

export class FakeContext {

    private fakeWorker: any = null;

    get self() {
        return this;
    }

    set onmessage(val) {
        this.fakeWorker.ThreadListenerList.onmessage = val;
    }

    constructor(fakeWorker) {
        this.fakeWorker = fakeWorker;
    }

    importScripts(){
        
    }

    postMessage(msg = null) {
        const evt: WorkerEvent = new WorkerEvent(msg);
        this.fakeWorker._boardMsgQueueToMain([evt]);
    }
    addEventListener(eventName, cb) {
        try{
            this.fakeWorker.ThreadListenerList[eventName].push(cb);
        }
        catch(error){
            console.error(`无效的事件名称: ${eventName}`);
        }
    }

}