console.debug('[线程]进入TimiWorker');
self.addEventListener('message', function(evt){
    console.debug('[线程][回调]收到消息: '+evt.data);
    var msg = new Date();
    console.debug('[线程][回调]发送消息: '+msg );
    self.postMessage(msg);
});