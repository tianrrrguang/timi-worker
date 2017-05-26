(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TimiWorker", [], factory);
	else if(typeof exports === 'object')
		exports["TimiWorker"] = factory();
	else
		root["TimiWorker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var fake_worker_1 = __webpack_require__(1);
	var TimiWorker = (function () {
	    function TimiWorker(jspath) {
	        this.isNativeWorker = false;
	        this.jspath = '';
	        this.jspath = jspath;
	        this._initWorker();
	    }
	    Object.defineProperty(TimiWorker.prototype, "onmessage", {
	        set: function (val) {
	            this.worker.onmessage = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimiWorker.prototype, "onerror", {
	        set: function (val) {
	            this.worker.onerror = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimiWorker.prototype.postMessage = function (data) {
	        this.worker.postMessage(data);
	    };
	    TimiWorker.prototype.terminate = function () {
	        this.worker.terminate();
	        this.worker = null;
	    };
	    TimiWorker.prototype.addEventListener = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        this.worker.addEventListener.apply(this.worker, args);
	    };
	    TimiWorker.prototype.removeEventListener = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        this.worker.removeEventListener.apply(this.worker, args);
	    };
	    TimiWorker.prototype.dispatchEvent = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        this.worker.dispatchEvent.apply(this.worker, args);
	    };
	    TimiWorker.prototype._initWorker = function () {
	        try {
	            if (window && window['Worker']) {
	                this.isNativeWorker = true;
	            }
	        }
	        catch (error) {
	            this.isNativeWorker = false;
	        }
	        if (this.isNativeWorker && !TimiWorker.forceFake) {
	            TimiWorker.DEBUG && console.warn('TimiWorker(native) ready!');
	            this.worker = new Worker(this.jspath);
	        }
	        else {
	            TimiWorker.DEBUG && console.warn('TimiWorker(fake) ready!');
	            this.worker = new fake_worker_1.FakeWorker(this.jspath);
	        }
	    };
	    return TimiWorker;
	}());
	TimiWorker.forceFake = false;
	TimiWorker.DEBUG = false;
	module.exports = TimiWorker;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var declare_1 = __webpack_require__(5);
	var worker_event_1 = __webpack_require__(2);
	var fake_context_1 = __webpack_require__(3);
	var utils_1 = __webpack_require__(4);
	var FakeWorker = (function () {
	    //构造函数
	    function FakeWorker(jspath) {
	        /**
	         * 当前线程状态
	         */
	        this.stat = declare_1.Stat.IDLE;
	        /**
	         * 线程js文件路径
	         */
	        this.jspath = '';
	        /**
	         * 使用xhr下载下来的线程js文件代码
	         */
	        this.jscode = '';
	        /**
	         * fake线程的上下文
	         */
	        this.fakeContext = null;
	        /**
	         * fake线程实例
	         */
	        this.fakeWorker = null;
	        /**
	         * 主页面发送的消息队列
	         * 在fake线程尚未就绪时的消息需要保存到此队列中，在fake线程就绪后一次性全量发送给fake线程
	         * 若fake线程使用importScripts，则也需要全量发送
	         */
	        this.MainMsgQueue = [];
	        /**
	         * 主页面的消息监听函数列队
	         */
	        this.MainListenerList = utils_1.defaultListenerList();
	        /**
	         * fake线程的消息监听函数队列
	         */
	        this.ThreadListenerList = utils_1.defaultListenerList();
	        this.jspath = jspath;
	        this.fakeContext = new fake_context_1.FakeContext(this);
	        this._loadJsCode();
	    }
	    Object.defineProperty(FakeWorker.prototype, "onmessage", {
	        /**
	         * 主页面通过xx.onmessage方法设定消息监听函数
	         * 该方法会覆盖其他通过onmessage/addEventListener增加的监听函数
	         */
	        set: function (val) {
	            this.MainListenerList.onmessage = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 从主页面向fake线程传递消息
	     */
	    FakeWorker.prototype.postMessage = function (data) {
	        var evt = new worker_event_1.WorkerEvent(data);
	        if (this.stat != declare_1.Stat.READY) {
	            this.MainMsgQueue.push(evt);
	        }
	        this._boardMsgQueueToThread([evt]);
	    };
	    /**
	     * 终止fake线程
	     */
	    FakeWorker.prototype.terminate = function () {
	        this.ThreadListenerList.onexit && this.ThreadListenerList.onexit();
	        this.MainListenerList = utils_1.defaultListenerList();
	        this.ThreadListenerList = utils_1.defaultListenerList();
	    };
	    /**
	     * 主页面增加监听函数
	     */
	    FakeWorker.prototype.addEventListener = function (eventName, cb) {
	        try {
	            this.MainListenerList[eventName].push(cb);
	        }
	        catch (error) {
	            console.error("\u65E0\u6548\u7684\u4E8B\u4EF6\u540D\u79F0: " + eventName);
	        }
	    };
	    /**
	     * 异步加载js代码（以文本形式）
	     */
	    FakeWorker.prototype._loadJsCode = function () {
	        var self = this;
	        var xhr = (new XMLHttpRequest());
	        xhr.responseType = "text";
	        xhr.open('GET', this.jspath, true);
	        //注册相关事件回调处理函数
	        xhr.onload = function (e) {
	            if (this.readyState == 4) {
	                if (this.status == 200 || this.status == 304) {
	                    self.jscode = this.responseText;
	                    self._evalJsCodeWithContext();
	                }
	            }
	        };
	        // xhr.ontimeout = function (e) { };
	        // xhr.onerror = function (e) { };
	        // xhr.upload.onprogress = function (e) { };
	        //发送数据
	        xhr.send(null);
	        //改变状态
	        this.stat = declare_1.Stat.LOADING;
	    };
	    /**
	     * 在fakeContext上下文环境下执行fake线程js代码
	     * 在执行完毕之后需要再次执行消息广播
	     */
	    FakeWorker.prototype._evalJsCodeWithContext = function () {
	        // const reg = /importScripts\((.+)\)/g;
	        // var arr;
	        // while((arr = reg.exec(this.jscode)) !=null){
	        //     console.warn(arr);
	        // }
	        // const self = this;
	        // (function () {
	        //     eval(self.jscode);
	        // }).call(self.fakeContext);
	        var context = this.fakeContext;
	        var code = "(function(){with(context){" + this.jscode + "};}).call(context)";
	        this.fakeWorker = eval(code);
	        this._boardMsgQueueToThread(this.MainMsgQueue);
	    };
	    /**
	     * 向fake线程广播消息
	     */
	    FakeWorker.prototype._boardMsgQueueToThread = function (EvtQueue) {
	        var _this = this;
	        //通过嵌套setTimeout:0，使得执行顺序移至最后，最大限度模拟线程
	        setTimeout(function () {
	            var tl = _this.ThreadListenerList;
	            EvtQueue.forEach(function (evt) {
	                tl.message.forEach(function (cb) {
	                    cb && cb(evt);
	                });
	                tl.onmessage && tl.onmessage(evt);
	            });
	        }, 0);
	    };
	    /**
	     * 向主页面广播消息
	     */
	    FakeWorker.prototype._boardMsgQueueToMain = function (EvtQueue) {
	        var _this = this;
	        //通过嵌套setTimeout:0，使得执行顺序移至最后，最大限度模拟线程
	        setTimeout(function () {
	            var ml = _this.MainListenerList;
	            EvtQueue.forEach(function (evt) {
	                ml.message.forEach(function (cb) {
	                    cb && cb(evt);
	                });
	                ml.onmessage && ml.onmessage(evt);
	            });
	        }, 0);
	    };
	    return FakeWorker;
	}());
	exports.FakeWorker = FakeWorker;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var WorkerEvent = (function () {
	    function WorkerEvent(msg) {
	        this.data = null;
	        this.data = msg;
	    }
	    return WorkerEvent;
	}());
	exports.WorkerEvent = WorkerEvent;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var worker_event_1 = __webpack_require__(2);
	var FakeContext = (function () {
	    function FakeContext(fakeWorker) {
	        this.fakeWorker = null;
	        this.fakeWorker = fakeWorker;
	    }
	    Object.defineProperty(FakeContext.prototype, "self", {
	        get: function () {
	            return this;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FakeContext.prototype, "onmessage", {
	        set: function (val) {
	            this.fakeWorker.ThreadListenerList.onmessage = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FakeContext.prototype.importScripts = function () {
	    };
	    FakeContext.prototype.postMessage = function (msg) {
	        if (msg === void 0) { msg = null; }
	        var evt = new worker_event_1.WorkerEvent(msg);
	        this.fakeWorker._boardMsgQueueToMain([evt]);
	    };
	    FakeContext.prototype.addEventListener = function (eventName, cb) {
	        try {
	            this.fakeWorker.ThreadListenerList[eventName].push(cb);
	        }
	        catch (error) {
	            console.error("\u65E0\u6548\u7684\u4E8B\u4EF6\u540D\u79F0: " + eventName);
	        }
	    };
	    return FakeContext;
	}());
	exports.FakeContext = FakeContext;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	function defaultListenerList() {
	    return {
	        onmessage: null,
	        onerror: null,
	        onexit: null,
	        message: [],
	        error: []
	    };
	}
	exports.defaultListenerList = defaultListenerList;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var Stat;
	(function (Stat) {
	    Stat[Stat["IDLE"] = 0] = "IDLE";
	    Stat[Stat["LOADING"] = 1] = "LOADING";
	    Stat[Stat["IMPORTING"] = 2] = "IMPORTING";
	    Stat[Stat["READY"] = 3] = "READY";
	})(Stat = exports.Stat || (exports.Stat = {}));


/***/ })
/******/ ])
});
;