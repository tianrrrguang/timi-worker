function importIt(importsList) {
    const cache = {};
    let str = '';
    importsList.forEach((js) => {
        str += `<script src="${js}" onerror="_timi.error()"></script>`;
        cache[js] = true;
    });
    return [str, cache];
}

export const makeIframeHtml = function (uuid: string, jspath: string, importsList: string[] = []) {
    const [imports, cache] = importIt(importsList);
    const str = `
<!DOCTYPE html>
<html>
    <head></head>
    <body></body>
</html>
<script>
window._timi = {
    importScriptsCache: ${JSON.stringify(cache)},
    uuid: '${uuid}',
    jspath: '${jspath}',
    importQueue: [],
    ready:  function(){
        window.parent.postMessage({uuid: _timi.uuid, isReady: true},'*');
    },
    loading: function(){
        window.parent.postMessage({uuid: _timi.uuid, isLoading: true},'*');
    },
    error: function(){
        window.parent.postMessage({uuid: _timi.uuid, error: true},'*');
    },
    close: function(){
        window.parent.postMessage({uuid: _timi.uuid, close: true},'*');
    },
    resolve: function(from, to) {
        var arrFrom = from.split('/');
        var arrTo = to.split('/');
        var arrPath = [];
        var prev = 1;
        for(var i=0; i<arrTo.length; i++){
            if( arrTo[i] == '..' ){
                prev++;
            }
            else if( arrTo[i] == '.' ){
                continue;
            }
            else{
                arrPath.push(arrTo[i]);
            }
        }
        arrFrom.length-=prev;
        return arrFrom.join('/')+'/'+arrPath.join('/');
    },
    loopLoadScripts: function(){
        _timi.loading();
        if( window._importTimer ){
            clearTimeout( window._importTimer);
        }
        window._importTimer = setTimeout(_timi.doLoopLoadScripts, 20);
    },
    doLoopLoadScripts: function(){
        if(_timi.importQueue.length){
            var js = _timi.importQueue.shift();
            _timi.loadScripts(js, function(){
                _timi.doLoopLoadScripts();
            });
        }
        else{
            _timi.ready();
        }
    },
    loadScripts: function(js, cb){
        var script = document.createElement("script");
        script.onload = function(){
            _timi.importScriptsCache[js] = true;
            cb();
        };
        script.onerror = function(){
            _timi.error();
        };
        script.src = js;
        document.body.appendChild(script);
    }
};

//错误监听
window.addEventListener('error', function(){
    _timi.error();
});
//postMessage重写
window.postMessage = function(msg){
    window.parent.postMessage({uuid: _timi.uuid, data: msg},'*');
};
//importScripts重写
window.importScripts = function(){
    var len = arguments.length;
    var i = 0;
    var list = [];
    for(; i<len; i++){
        var js = _timi.resolve(_timi.jspath, arguments[i]);
        if( _timi.importScriptsCache[js] ){
            // console.log(js+'已加载过!');
        }
        else{
            _timi.importQueue.push(js);
            _timi.loopLoadScripts();
        }
    }
};
//close重写
window.close = function(){
    _timi.close();
};
//self重写
try{
    window.self = window;
}catch(error){}


</script>
${imports}
<script src="${jspath}" onerror="_timi.error()"></script>
<script>_timi.ready();</script>
`;
    return 'data:text/html;charset=utf-8,' + encodeURI(str);
}