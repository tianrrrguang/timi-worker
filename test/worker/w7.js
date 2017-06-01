console.debug('[线程]进入TimiWorker');

this.onerror = function(){
    console.warn('线程-error');
};

importScripts('./import00.js' );
console.warn('my0: '+my0);