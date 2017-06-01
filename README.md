# timi-worker
A WebWorker Polyfill / WebWorker兼容垫片

## 1. Web Workers API Support

| API | 支持 | 备注 |
|---|---|---|
|postMessage|<span style="color:#00B100">Yes</span>||
|onmessage|<span style="color:#00B100">Yes</span>||
|terminate|<span style="color:#00B100">Yes</span>||
|addEventListener&lt;message>|<span style="color:#00B100">Yes</span>||
例子:
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
|postMessage|<span style="color:#00B100">Yes</span>||
|onmessage|<span style="color:#00B100">Yes</span>||
|addEventListener&lt;message>|<span style="color:#00B100">Yes</span>||
例子:
```javascript

this.onmessage = function(evt){
    console.log('[线程]收到消息: '+evt.data);
}

this.addEventListener('message', function(evt){
    console.log('[线程]收到消息: '+evt.data);
});

postMessage(...);//ok
this.postMessage(...);//ok
```