var worker = new TimiWorker('./worker/w6-error-path.js');
wList.push(worker);//方便后续自动terminate

worker.onerror = function(){
    console.log('main-onerror');
};