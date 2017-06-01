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
	        this.isUrl = true;
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
	    Object.defineProperty(TimiWorker, "enableNative", {
	        get: function () {
	            try {
	                if (window && window['Worker']) {
	                    return true;
	                }
	                else {
	                    return false;
	                }
	            }
	            catch (error) {
	                return false;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimiWorker.prototype.postMessage = function (data) {
	        this.worker && this.worker.postMessage(data);
	    };
	    TimiWorker.prototype.terminate = function () {
	        try {
	            this.worker.terminate();
	            this.worker = null;
	        }
	        catch (err) {
	            this.worker = null;
	        }
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
	    TimiWorker.prototype.execImportScripts = function () {
	        this.worker.setLoading && this.worker.setLoading();
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
	var iframe_html_1 = __webpack_require__(2);
	var declare_1 = __webpack_require__(3);
	var utils_1 = __webpack_require__(4);
	// console.warn(iframeHtml);
	var FakeWorker = (function () {
	    function FakeWorker(jspath) {
	        var _this = this;
	        this.jspath = '';
	        this.iframe = null;
	        this._stat = declare_1.Stat.IDLE;
	        this.msgQueue = [];
	        this.uuid = utils_1.uuid();
	        this._onmessage = (function () { });
	        this._messages = [];
	        this.jspath = utils_1.resolve(location.href, jspath);
	        this.stat = declare_1.Stat.LOADING;
	        this.bindMessageListener();
	        this.parseImportScripts(function (list) {
	            _this.createIframeContext(list);
	        });
	    }
	    Object.defineProperty(FakeWorker.prototype, "stat", {
	        get: function () { return this._stat; },
	        set: function (val) {
	            this._stat = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FakeWorker.prototype, "onmessage", {
	        set: function (val) {
	            this._onmessage = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FakeWorker.prototype.postMessage = function (msg) {
	        if (this.stat == declare_1.Stat.READY)
	            this.iframe.contentWindow.postMessage(msg, '*');
	        else
	            this.msgQueue.push(msg);
	    };
	    FakeWorker.prototype.addEventListener = function (name, cb) {
	        switch (name) {
	            case 'message':
	                this._messages.push(cb);
	                break;
	        }
	    };
	    FakeWorker.prototype.terminate = function () {
	        document.body.removeChild(this.iframe);
	    };
	    FakeWorker.prototype.setLoading = function () {
	        this.stat = declare_1.Stat.LOADING;
	    };
	    FakeWorker.prototype.bindMessageListener = function () {
	        var _this = this;
	        window.addEventListener('message', function (evt) {
	            if (evt.data.uuid !== _this.uuid) {
	                return;
	            }
	            if (evt.data.isReady) {
	                _this.stat = declare_1.Stat.READY;
	                _this.boardMsgQueue();
	                return;
	            }
	            if (evt.data.isLoading) {
	                _this.stat = declare_1.Stat.LOADING;
	                return;
	            }
	            _this._onmessage(evt.data);
	            _this._messages.forEach(function (cb) {
	                cb(evt.data);
	            });
	        }, false);
	    };
	    FakeWorker.prototype.parseImportScripts = function (cb) {
	        var _this = this;
	        this.asyncLoadTxt(this.jspath, function (txt) {
	            var list = [];
	            var reg = /importScripts\(\s*([\'\"].+\.js[\'\"])\s*\)/g;
	            var arr;
	            while ((arr = reg.exec(txt)) != null) {
	                var str = arr[1].replace(/[\'\"\s]/g, '');
	                var jsArr = str.split(',');
	                jsArr.forEach(function (js) {
	                    list.push(utils_1.resolve(_this.jspath, js));
	                });
	            }
	            cb(list);
	        });
	    };
	    FakeWorker.prototype.createIframeContext = function (list) {
	        var iframe = this.iframe = document.createElement('iframe');
	        iframe.style.width = '0px';
	        iframe.style.height = '0px';
	        iframe.style.display = 'none';
	        iframe.setAttribute('uuid', this.uuid);
	        iframe.src = iframe_html_1.makeIframeHtml(this.uuid, this.jspath, list);
	        document.body.appendChild(iframe);
	    };
	    FakeWorker.prototype.asyncLoadTxt = function (path, success, fail) {
	        if (fail === void 0) { fail = (function () { }); }
	        var xhr = (new XMLHttpRequest());
	        xhr.responseType = "text";
	        xhr.open('GET', path, true);
	        xhr.onload = function (e) {
	            if (this.readyState == 4) {
	                if (this.status == 200 || this.status == 304) {
	                    success(this.responseText);
	                }
	            }
	        };
	        xhr.ontimeout = function (e) {
	        };
	        xhr.onerror = function (e) {
	        };
	        //发送数据
	        xhr.send(null);
	    };
	    FakeWorker.prototype.boardMsgQueue = function () {
	        var _this = this;
	        this.msgQueue.forEach(function (msg) {
	            _this.postMessage(msg);
	        });
	    };
	    return FakeWorker;
	}());
	exports.FakeWorker = FakeWorker;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.makeIframeHtml = function (uuid, jspath, importsList) {
	    if (importsList === void 0) { importsList = []; }
	    var _importScripts = {};
	    var importScriptList = '';
	    importsList.forEach(function (js) {
	        importScriptList += "<script src=\"" + js + "\"></script>\n";
	        _importScripts[js] = true;
	    });
	    var str = "<!DOCTYPE html>\n<html>\n    <head></head>\n    <body></body>\n</html>\n<script>\nwindow._importScripts = " + JSON.stringify(_importScripts) + ";\nwindow._uuid = '" + uuid + "';\nwindow._jspath = '" + jspath + "';\nwindow._importQueue = [];\n//resolve\nwindow._resolve = function(from, to) {\n    var arrFrom = from.split('/');\n    var arrTo = to.split('/');\n    var arrPath = [];\n    var prev = 1;\n    for(var i=0; i<arrTo.length; i++){\n        if( arrTo[i] == '..' ){\n            prev++;\n        }\n        else if( arrTo[i] == '.' ){\n            continue;\n        }\n        else{\n            arrPath.push(arrTo[i]);\n        }\n    }\n    arrFrom.length-=prev;\n    return arrFrom.join('/')+'/'+arrPath.join('/');\n};\n//IE\u4E0D\u5141\u8BB8\u91CD\u5199window.postMessage()\nwindow.postMessage = function(msg){\n    window.parent.postMessage({\n        uuid: _uuid,\n        data: msg\n    },'*');\n};\n//\u6587\u4EF6\u5BFC\u5165\nwindow.importScripts = function(){\n    var len = arguments.length;\n    var i = 0;\n    var list = [];\n    for(; i<len; i++){\n        var js = _resolve(_jspath, arguments[i]);\n        if( _importScripts[js] ){\n            // console.log(js+'\u5DF2\u52A0\u8F7D\u8FC7!');\n        }\n        else{\n            _importQueue.push(js);\n            _loopLoadScripts();\n        }\n    }\n};\n//\u5F15\u5165\u4F9D\u8D56\nwindow._loopLoadScripts = function(){\n    _loading();\n    if( window._importTimer ){\n        clearTimeout( window._importTimer);\n    }\n    window._importTimer = setTimeout(_doLoopLoadScripts, 20);\n};\nwindow._doLoopLoadScripts = function(){\n    if(_importQueue.length){\n        var js = _importQueue.shift();\n        _loadScripts(js, function(){\n            _doLoopLoadScripts();\n        });\n    }\n    else{\n        _ready();\n    }\n};\n//\u811A\u672C\u5BFC\u5165\nwindow._loadScripts = function(js, cb){\n    var script = document.createElement(\"script\");\n    script.onload = function(){\n        cb();\n    };\n    script.src = js;\n    document.body.appendChild(script);\n};\n//ready ok\nwindow._ready = function(){\n    window.parent.postMessage({\n        uuid: _uuid,\n        isReady: true\n    },'*');\n};\n//ready not\nwindow._loading = function(){\n    window.parent.postMessage({\n        uuid: _uuid,\n        isLoading: true\n    },'*');\n};\n</script>\n" + importScriptList + "\n<script src=\"" + jspath + "\"></script>\n<script>\n_ready();\n</script>";
	    return 'data:text/html;charset=utf-8,' + encodeURI(str);
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var Stat;
	(function (Stat) {
	    Stat[Stat["IDLE"] = 0] = "IDLE";
	    Stat[Stat["LOADING"] = 1] = "LOADING";
	    Stat[Stat["READY"] = 2] = "READY";
	})(Stat = exports.Stat || (exports.Stat = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	function resolve(from, to) {
	    var arrFrom = from.split('/');
	    var arrTo = to.split('/');
	    var arrPath = [];
	    var prev = 1;
	    for (var i = 0; i < arrTo.length; i++) {
	        if (arrTo[i] == '..') {
	            prev++;
	        }
	        else if (arrTo[i] == '.') {
	            continue;
	        }
	        else {
	            arrPath.push(arrTo[i]);
	        }
	    }
	    arrFrom.length -= prev;
	    return arrFrom.join('/') + '/' + arrPath.join('/');
	}
	exports.resolve = resolve;
	function uuid() {
	    var s1 = Math.ceil(Math.random() * 10000);
	    var s2 = Math.ceil(Math.random() * 10000);
	    var s3 = Math.ceil(Math.random() * 10000);
	    var s4 = Math.ceil(Math.random() * 10000);
	    return "uuid_" + s1 + "_" + s2 + "_" + s3 + "_" + s4;
	}
	exports.uuid = uuid;


/***/ })
/******/ ])
});
;