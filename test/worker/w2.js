console.warn('[线程]进入TimiWorker');

var count = 0;
setInterval(function(){
    postMessage(count++);
}, 1000);

setInterval(function(){
    postMessage('o'+count);
}, 400);