console.debug('[线程]进入TimiWorker');


self.addEventListener('message', function (evt) {
    console.debug('[线程][回调]收到消息: ', evt.data);

    if ((typeof evt.data == 'object') && evt.data.importScripts) {
        console.debug('[线程]开始importScripts='+evt.data.importScripts);
        importScripts(evt.data.importScripts);
    }

    if( (typeof evt.data == 'object') && evt.data.testImportScripts ){
        console.debug('[线程]以下是importScripts的内容: '+my2);
    }

});

setInterval(function(){
    console.warn(my2);
}, 5000);