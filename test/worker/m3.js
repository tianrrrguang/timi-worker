var worker = new TimiWorker('./worker/w3.js');
wList.push(worker);//方便后续自动terminate

worker.addEventListener('message', function(evt){
    console.log(evt.data);
});