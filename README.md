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
|addEventListener|Yes|message|
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
|importScripts|Yes|详见importScripts说明|
|postMessage|Yes||
|onmessage|Yes||
|onerror|Yes||
|addEventListener|Yes|message, error|
|removeEventListener|Yes||
|dispatchEvent|Yes|需测试|
|close|No||
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