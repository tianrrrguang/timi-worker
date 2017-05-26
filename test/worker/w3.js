console.debug('[线程]进入TimiWorker');
console.debug('[线程]创建addEventListener');
addEventListener('message', function(evt){
    console.debug('[线程][回调]收到消息: '+evt.data);
});