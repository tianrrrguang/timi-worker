console.debug('[线程]进入TimiWorker');

importScripts('./import0.js' );
console.warn('my0: '+my0);

this.addEventListener('message', function(evt){
    switch(evt.data.act){
        case 'import':
            console.warn('import');
            importScripts(evt.data.url1);
            importScripts(evt.data.url2);
            break;
        default:
            console.warn('default');
            setInterval(function(){
                postMessage(my1.length+'/'+my2.length+'/'+performance.now());
            }, 200);
    }
});