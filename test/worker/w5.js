console.debug('[线程]进入TimiWorker');

importScripts('./import0.js' );
console.warn('my0: '+my0);

this.onerror = function(){
    console.warn('线程错误');
};

aaa();