console.debug('[线程]进入TimiWorker');
console.debug('[线程]尝试importScript超大文件(4.9mb)');

importScripts('./im.js' );
importScripts(  "./im2.js" );

if( my && my2 ){
    console.debug('[线程]importScript加载完毕('+my.length+')('+my2.length+')');

    self.addEventListener('message', function(evt){
        console.debug('[线程][回调]收到消息: '+evt.data);
        var msg = new Date();
        console.debug('[线程][回调]发送消息: '+msg );
        self.postMessage(msg);

        if( evt.data = 'xcvxcv' ){
            importScripts(evt.data);
        }

    });
}
else{
    console.error('[线程]importScript加载错误!');
}
