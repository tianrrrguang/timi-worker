import { FakeWorker } from './fake-worker';

class TimiWorker {

    public isNativeWorker: boolean = false;
    public jspath: string = '';

    private worker: any;

    set onmessage(val) {
        this.worker.onmessage = val;
    }

    set onerror(val) {
        this.worker.onerror = val;
    }

    constructor(jspath) {
        this.jspath = jspath;
        this._initWorker();
    }

    postMessage(data): void {
        this.worker.postMessage(data);
    }

    terminate(): void {
        this.worker.terminate();
        this.worker = null;
    }

    addEventListener(...args: any[]): void {
        this.worker.addEventListener.apply(this.worker, args);
    }

    removeEventListener(...args: any[]): void {
        this.worker.removeEventListener.apply(this.worker, args);
    }

    dispatchEvent(...args: any[]): void {
        this.worker.dispatchEvent.apply(this.worker, args);
    }

    private _initWorker(): void {
        try {
            if (window && window['Worker']) {
                this.isNativeWorker = true;
            }
        }
        catch (error) {
            this.isNativeWorker = false;
        }
        if (this.isNativeWorker) {
            this.worker = new Worker(this.jspath);
        }
        else {
            this.worker = new FakeWorker(this.jspath);
        }
    }

}

export = TimiWorker;