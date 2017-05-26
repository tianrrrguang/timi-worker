console.debug('[线程]进入TimiWorker');
console.debug('[线程]创建self.onmessage');
self.onmessage = function(evt){
    console.debug('[线程][回调]收到消息: '+evt.data);
}