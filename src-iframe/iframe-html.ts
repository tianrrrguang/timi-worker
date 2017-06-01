export const makeIframeHtml = function (uuid:string, jspath:string, importsList: string[]=[]) {
    const _importScripts = {};
    let importScriptList = '';
    importsList.forEach((js)=>{
        importScriptList += `<script src="${js}"></script>\n`;
        _importScripts[js] = true;
    });
    const str = `<!DOCTYPE html>
<html>
    <head></head>
    <body></body>
</html>
<script>
window._importScripts = ${JSON.stringify(_importScripts)};
window._uuid = '${uuid}';
window._jspath = '${jspath}';
window._importQueue = [];
//resolve
window._resolve = function(from, to) {
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
};
//IE不允许重写window.postMessage()
window.postMessage = function(msg){
    window.parent.postMessage({
        uuid: _uuid,
        data: msg
    },'*');
};
//文件导入
window.importScripts = function(){
    var len = arguments.length;
    var i = 0;
    var list = [];
    for(; i<len; i++){
        var js = _resolve(_jspath, arguments[i]);
        if( _importScripts[js] ){
            // console.log(js+'已加载过!');
        }
        else{
            _importQueue.push(js);
            _loopLoadScripts();
        }
    }
};
//引入依赖
window._loopLoadScripts = function(){
    _loading();
    if( window._importTimer ){
        clearTimeout( window._importTimer);
    }
    window._importTimer = setTimeout(_doLoopLoadScripts, 20);
};
window._doLoopLoadScripts = function(){
    if(_importQueue.length){
        var js = _importQueue.shift();
        _loadScripts(js, function(){
            _doLoopLoadScripts();
        });
    }
    else{
        _ready();
    }
};
//脚本导入
window._loadScripts = function(js, cb){
    var script = document.createElement("script");
    script.onload = function(){
        cb();
    };
    script.src = js;
    document.body.appendChild(script);
};
//ready ok
window._ready = function(){
    window.parent.postMessage({
        uuid: _uuid,
        isReady: true
    },'*');
};
//ready not
window._loading = function(){
    window.parent.postMessage({
        uuid: _uuid,
        isLoading: true
    },'*');
};
</script>
${importScriptList}
<script src="${jspath}"></script>
<script>
_ready();
</script>`;
    return 'data:text/html;charset=utf-8,' + encodeURI(str);
}