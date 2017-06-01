console.debug('[线程]进入TimiWorker');

this.onerror = function(){
    console.warn('线程-error1');
};

var errorCb = function(){
    console.warn('线程-error2');
};

self.addEventListener('error', errorCb);
// self.removeEventListener('error', errorCb);

importScripts('./import00.js' );
console.warn('my0: '+my0);