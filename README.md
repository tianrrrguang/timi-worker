# timi-worker
WebWorker兼容垫片
>请在移动端使用，PC不保证兼容性

## 1. Web Workers API Support

| API | 支持 | 备注 |
|---|---|---|
|postMessage|Yes||
|onmessage|Yes||
|onerror|Yes|Web Worker文件加载错误, Dedicated Worker执行错误, importScripts加载错误时响应|
|terminate|Yes||
|addEventListener|Yes|message, error|
|removeEventListener|No||
|dispatchEvent|No||

例子:
```html
<!-- 方式1，通过script使用 -->
<script src="xxxx/timi-worker.js"></script>
```
```javascript
//方式2，通过commonjs方式使用
const TimiWorker = require('xxx/timi-worker.js');
```
```javascript
//无需判断当前浏览器是否支持Worker
var w = new TimiWorker('xxxxx.js');
//接受Dedicated Workers的消息
w.onmessage = function(evt){
    console.log(evt.data);
}
//向Dedicated Workers发送消息
w.postMessage(...);
//终止
w.terminate();
```

## 2. Dedicated Workers API Support

| API | 支持 | 备注 |
|---|---|---|
|importScripts|Yes|[详见importScripts说明](#importScripts)|
|postMessage|Yes||
|onmessage|Yes||
|onerror|Yes|Dedicated Worker执行错误, importScripts加载错误时响应|
|addEventListener|Yes|message, error|
|removeEventListener|Yes||
|dispatchEvent|Yes||
|close|Yes|[详见close说明](#close)|
|self|Yes|Dedicated Worker Context|
|TimiWorker|No|嵌套TimiWorker|

例子:
```javascript
//直接importScripts时请使用字符串字面量，勿使用变量
importScripts('./aa.js', './bb.js');

this.onmessage = function(evt){
    console.log('[线程]收到消息: '+evt.data);
}

this.addEventListener('message', function(evt){
    console.log('[线程]收到消息: '+evt.data);
    switch(evt.data.act){
        case 'import':
            importScripts(evt.data.url);
            break;
        case 'xxx':
            //TODO
            break;
        default:
            //TODO
            break
    }
});

postMessage(...);//ok
this.postMessage(...);//ok
```
## 3. 技术实现

在最初设想的实现方式中，`eval`是作为首选的方案的，因为TimiWorker被设计为高性能`H5游戏`及其jsb的逻辑运算容器，所以需要一种完全不依赖dom的方案，但`eval`方案在处理`terminate`和`importScripts`时遇到极大的问题，尤其是`terminate`，几乎无法实现。

无奈之下，改用`iframe`实现，这样就不得不放弃jsb平台，基于`iframe`的特性，各种WebWorker的API得以很好的polyfill，基本表现已经没有任何区别，尤其是`importScripts`，这个功能的实现是最麻烦的，`TimiWorker`也较好的实现了兼容，当然，无论怎样兼容都不可能实现真正的多线程效果，但至少在写法上，可以让开发者保持高度一致。

<span id="importScripts"></span>
## 4. importScripts的使用说明

### 4-1. 直接importScripts

即在worker的开始的位置，无偏差的引入，例如：
```javascript
importScripts('a.js', 'b.js');
importScripts('c.js');
```
这种importScripts是支持的，唯独需要注意的是，脚本路径需要为字面常量，不可以是变量或者拼接，如
```javascript
var jspath = 'path/a';
importScripts('a.js', 'b.js'); //ok
importScripts(jspath + '.js'); //no
```

### 4-2. 条件importScripts

即worker在满足一定条件时，触发importScripts，之后再执行其他代码，例如:
```javascript
//Dedicated Workers
this.onmessage = function(evt){
    switch(evt.data.act){
        case 'import':
            importScripts(evt.data.url);
            break;
        case 'xxx':
            //TODO
            break;
    }
};
```
这种情况也是支持的，但有2点需要注意:
>1. 不可以在条件importScripts之后，立即跟随依赖代码，例如:
```javascript
this.onmessage = function(evt){
    switch(evt.data.act){
        case 'import':
            importScripts(evt.data.url);//假设引入了lodash
            lodash.xxxx();//立即调用lodash，不可
            break;
    }
};
```
>2. 由于iframe的postMessage有一定的时间差，所以iframe可能无法立刻知道Dedicated Workers已经进入条件importScripts了，这个时间差可能导致某些问题，此时可以使用TimiWorker特有的`execImportScripts`方法，手动通知iframe，例如：
```javascript
var w = new TimiWorker('xxx.js');
//Dedicated Workers收到该消息后开始条件importScripts，并通知iframe该动作
w.postMessage({
    act: 'import',
    ur1: './import1.js'
});
w.execImportScripts();//避免下一次postMessage之前，iframe没来得及变更状态
w.postMessage({
    act: 'xxx'
});
```
```javascript
//或者可以使用看起来更优雅的方法，设置postMessage的第2个参数trun2loading为true
w.postMessage({
    act: 'import',
    ur1: './import1.js'
}, true);
w.postMessage({
    act: 'xxx'
});
```

<span id="close"></span>
## 5. close的使用说明

由于iframe的`postMessage`有一定的时间差，所以在Dedicated Workers通知iframe执行`terminate`时，依然会在短事件内响应message事件，所以请尽量使用Web Worker的`terminate`，Dedicated Workers的`close`不能保证立即停止。