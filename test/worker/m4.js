var worker = new TimiWorker('./worker/w4.js');
wList.push(worker);//方便后续自动terminate

worker.addEventListener('message', function(evt){
    console.log(evt.data);
});

setTimeout(function(){
    worker.postMessage({
        act: 'import',
        url1: './import1.js',
        url2: './import2.js'
    });
    //当条件import之后调用，保证import有反应时间
    //若时间差较大，可不调用
    worker.execImportScripts();
    worker.postMessage({
        act: 'xxx'
    });
}, 1000);