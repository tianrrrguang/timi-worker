var worker = new TimiWorker('./worker/w8.js');
wList.push(worker);//方便后续自动terminate

worker.postMessage(performance.now());

var maxtry = 10;
var count = 0;
var tryfunc = function () {
    if (maxtry--) {
        worker.postMessage(count++);
        setTimeout(tryfunc, 100);
    }
};
tryfunc();