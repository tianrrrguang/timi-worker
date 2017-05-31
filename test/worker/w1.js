console.warn('[线程]进入TimiWorker');
console.warn('[线程]创建onmessage');

this.onmessage = function(evt){
    console.warn('[线程][回调1]收到消息: '+evt.data);
}

this.addEventListener('message', function(evt){
    console.warn('[线程][回调2]收到消息: '+evt.data);
});