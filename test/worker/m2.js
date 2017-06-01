var worker = new TimiWorker('./worker/w2.js');
wList.push(worker);//方便后续自动terminate

worker.onmessage = function(evt){
    console.log(evt.data);
};