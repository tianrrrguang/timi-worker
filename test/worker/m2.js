var worker = new TimiWorker('./worker/w2.js');
wList.push(worker);//方便后续自动terminate

worker.onmessage = function(evt){
    console.log(evt.data);
};

function onMessage(evt){
    console.log(2, evt.data);
}

worker.addEventListener('message', onMessage);

setTimeout(function(){
    worker.removeEventListener('message', onMessage);
}, 5000);