var tpl = [
    function () {
        console.clear();
        console.log('[主页面]准备创建TimiWorker...');
    },
    function (worker) {

        const msg = 'hello worker';
        const msg2 = '2000ms延迟消息';
        const msg3 = '3000ms延迟消息';

        console.log('[主页面]postMessage("' + msg + '")');
        worker.postMessage(msg);
        setTimeout(function () { 
            console.log('[主页面]postMessage("' + msg2 + '")');
            worker.postMessage(msg2); 
        }, 2000);
        setTimeout(function () { 
            console.log('[主页面]postMessage("' + msg3 + '")');
            worker.postMessage(msg3); 
        }, 3000);
    }
];