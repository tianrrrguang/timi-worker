console.warn('[线程]进入TimiWorker');

importScripts('./import0.js' );
importScripts('./import1.js', './import2.js');

var count = 0;
setInterval(function(){
    postMessage(my0+'/'+my1.length+'/'+my2.length+'/'+(count++));
}, 200);
