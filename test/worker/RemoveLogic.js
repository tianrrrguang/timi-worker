(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("protobufjs"), require("path"), require("fs"));
	else if(typeof define === 'function' && define.amd)
		define("RemoveLogic", ["protobufjs", "path", "fs"], factory);
	else if(typeof exports === 'object')
		exports["RemoveLogic"] = factory(require("protobufjs"), require("path"), require("fs"));
	else
		root["RemoveLogic"] = factory(root["protobufjs"], root["path"], root["fs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__) {
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (typeof window === 'undefined') {
		__webpack_require__(2);
	}
	var PuzzleGame = __webpack_require__(6);
	module.exports = PuzzleGame;

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * https://github.com/es-shims/es5-shim
	 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
	 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
	 */

	// vim: ts=4 sts=4 sw=4 expandtab

	// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
	;

	// UMD (Universal Module Definition)
	// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
	(function (root, factory) {
	    'use strict';

	    /* global define, exports, module */

	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like enviroments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.returnExports = factory();
	    }
	})(undefined, function () {
	    /**
	     * Brings an environment as close to ECMAScript 5 compliance
	     * as is possible with the facilities of erstwhile engines.
	     *
	     * Annotated ES5: http://es5.github.com/ (specific links below)
	     * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
	     * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
	     */

	    // Shortcut to an often accessed properties, in order to avoid multiple
	    // dereference that costs universally. This also holds a reference to known-good
	    // functions.
	    var $Array = Array;
	    var ArrayPrototype = $Array.prototype;
	    var $Object = Object;
	    var ObjectPrototype = $Object.prototype;
	    var $Function = Function;
	    var FunctionPrototype = $Function.prototype;
	    var $String = String;
	    var StringPrototype = $String.prototype;
	    var $Number = Number;
	    var NumberPrototype = $Number.prototype;
	    var array_slice = ArrayPrototype.slice;
	    var array_splice = ArrayPrototype.splice;
	    var array_push = ArrayPrototype.push;
	    var array_unshift = ArrayPrototype.unshift;
	    var array_concat = ArrayPrototype.concat;
	    var array_join = ArrayPrototype.join;
	    var call = FunctionPrototype.call;
	    var apply = FunctionPrototype.apply;
	    var max = Math.max;
	    var min = Math.min;

	    // Having a toString local variable name breaks in Opera so use to_string.
	    var to_string = ObjectPrototype.toString;

	    /* global Symbol */
	    /* eslint-disable one-var-declaration-per-line, no-redeclare, max-statements-per-line */
	    var hasToStringTag = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';
	    var isCallable; /* inlined from https://npmjs.com/is-callable */var fnToStr = Function.prototype.toString,
	        constructorRegex = /^\s*class /,
	        isES6ClassFn = function isES6ClassFn(value) {
	        try {
	            var fnStr = fnToStr.call(value);var singleStripped = fnStr.replace(/\/\/.*\n/g, '');var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');return constructorRegex.test(spaceStripped);
	        } catch (e) {
	            return false; /* not a function */
	        }
	    },
	        tryFunctionObject = function tryFunctionObject(value) {
	        try {
	            if (isES6ClassFn(value)) {
	                return false;
	            }fnToStr.call(value);return true;
	        } catch (e) {
	            return false;
	        }
	    },
	        fnClass = '[object Function]',
	        genClass = '[object GeneratorFunction]',
	        isCallable = function isCallable(value) {
	        if (!value) {
	            return false;
	        }if (typeof value !== 'function' && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
	            return false;
	        }if (hasToStringTag) {
	            return tryFunctionObject(value);
	        }if (isES6ClassFn(value)) {
	            return false;
	        }var strClass = to_string.call(value);return strClass === fnClass || strClass === genClass;
	    };

	    var isRegex; /* inlined from https://npmjs.com/is-regex */var regexExec = RegExp.prototype.exec,
	        tryRegexExec = function tryRegexExec(value) {
	        try {
	            regexExec.call(value);return true;
	        } catch (e) {
	            return false;
	        }
	    },
	        regexClass = '[object RegExp]';isRegex = function isRegex(value) {
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
	            return false;
	        }return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass;
	    };
	    var isString; /* inlined from https://npmjs.com/is-string */var strValue = String.prototype.valueOf,
	        tryStringObject = function tryStringObject(value) {
	        try {
	            strValue.call(value);return true;
	        } catch (e) {
	            return false;
	        }
	    },
	        stringClass = '[object String]';isString = function isString(value) {
	        if (typeof value === 'string') {
	            return true;
	        }if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
	            return false;
	        }return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass;
	    };
	    /* eslint-enable one-var-declaration-per-line, no-redeclare, max-statements-per-line */

	    /* inlined from http://npmjs.com/define-properties */
	    var supportsDescriptors = $Object.defineProperty && function () {
	        try {
	            var obj = {};
	            $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
	            for (var _ in obj) {
	                // jscs:ignore disallowUnusedVariables
	                return false;
	            }
	            return obj.x === obj;
	        } catch (e) {
	            /* this is ES3 */
	            return false;
	        }
	    }();
	    var defineProperties = function (has) {
	        // Define configurable, writable, and non-enumerable props
	        // if they don't exist.
	        var defineProperty;
	        if (supportsDescriptors) {
	            defineProperty = function defineProperty(object, name, method, forceAssign) {
	                if (!forceAssign && name in object) {
	                    return;
	                }
	                $Object.defineProperty(object, name, {
	                    configurable: true,
	                    enumerable: false,
	                    writable: true,
	                    value: method
	                });
	            };
	        } else {
	            defineProperty = function defineProperty(object, name, method, forceAssign) {
	                if (!forceAssign && name in object) {
	                    return;
	                }
	                object[name] = method;
	            };
	        }
	        return function defineProperties(object, map, forceAssign) {
	            for (var name in map) {
	                if (has.call(map, name)) {
	                    defineProperty(object, name, map[name], forceAssign);
	                }
	            }
	        };
	    }(ObjectPrototype.hasOwnProperty);

	    //
	    // Util
	    // ======
	    //

	    /* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
	    var isPrimitive = function isPrimitive(input) {
	        var type = typeof input === 'undefined' ? 'undefined' : _typeof(input);
	        return input === null || type !== 'object' && type !== 'function';
	    };

	    var isActualNaN = $Number.isNaN || function isActualNaN(x) {
	        return x !== x;
	    };

	    var ES = {
	        // ES5 9.4
	        // http://es5.github.com/#x9.4
	        // http://jsperf.com/to-integer
	        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
	        ToInteger: function ToInteger(num) {
	            var n = +num;
	            if (isActualNaN(n)) {
	                n = 0;
	            } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
	                n = (n > 0 || -1) * Math.floor(Math.abs(n));
	            }
	            return n;
	        },

	        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
	        ToPrimitive: function ToPrimitive(input) {
	            var val, valueOf, toStr;
	            if (isPrimitive(input)) {
	                return input;
	            }
	            valueOf = input.valueOf;
	            if (isCallable(valueOf)) {
	                val = valueOf.call(input);
	                if (isPrimitive(val)) {
	                    return val;
	                }
	            }
	            toStr = input.toString;
	            if (isCallable(toStr)) {
	                val = toStr.call(input);
	                if (isPrimitive(val)) {
	                    return val;
	                }
	            }
	            throw new TypeError();
	        },

	        // ES5 9.9
	        // http://es5.github.com/#x9.9
	        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
	        ToObject: function ToObject(o) {
	            if (o == null) {
	                // this matches both null and undefined
	                throw new TypeError("can't convert " + o + ' to object');
	            }
	            return $Object(o);
	        },

	        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
	        ToUint32: function ToUint32(x) {
	            return x >>> 0;
	        }
	    };

	    //
	    // Function
	    // ========
	    //

	    // ES-5 15.3.4.5
	    // http://es5.github.com/#x15.3.4.5

	    var Empty = function Empty() {};

	    defineProperties(FunctionPrototype, {
	        bind: function bind(that) {
	            // .length is 1
	            // 1. Let Target be the this value.
	            var target = this;
	            // 2. If IsCallable(Target) is false, throw a TypeError exception.
	            if (!isCallable(target)) {
	                throw new TypeError('Function.prototype.bind called on incompatible ' + target);
	            }
	            // 3. Let A be a new (possibly empty) internal list of all of the
	            //   argument values provided after thisArg (arg1, arg2 etc), in order.
	            // XXX slicedArgs will stand in for "A" if used
	            var args = array_slice.call(arguments, 1); // for normal call
	            // 4. Let F be a new native ECMAScript object.
	            // 11. Set the [[Prototype]] internal property of F to the standard
	            //   built-in Function prototype object as specified in 15.3.3.1.
	            // 12. Set the [[Call]] internal property of F as described in
	            //   15.3.4.5.1.
	            // 13. Set the [[Construct]] internal property of F as described in
	            //   15.3.4.5.2.
	            // 14. Set the [[HasInstance]] internal property of F as described in
	            //   15.3.4.5.3.
	            var bound;
	            var binder = function binder() {

	                if (this instanceof bound) {
	                    // 15.3.4.5.2 [[Construct]]
	                    // When the [[Construct]] internal method of a function object,
	                    // F that was created using the bind function is called with a
	                    // list of arguments ExtraArgs, the following steps are taken:
	                    // 1. Let target be the value of F's [[TargetFunction]]
	                    //   internal property.
	                    // 2. If target has no [[Construct]] internal method, a
	                    //   TypeError exception is thrown.
	                    // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
	                    //   property.
	                    // 4. Let args be a new list containing the same values as the
	                    //   list boundArgs in the same order followed by the same
	                    //   values as the list ExtraArgs in the same order.
	                    // 5. Return the result of calling the [[Construct]] internal
	                    //   method of target providing args as the arguments.

	                    var result = apply.call(target, this, array_concat.call(args, array_slice.call(arguments)));
	                    if ($Object(result) === result) {
	                        return result;
	                    }
	                    return this;
	                } else {
	                    // 15.3.4.5.1 [[Call]]
	                    // When the [[Call]] internal method of a function object, F,
	                    // which was created using the bind function is called with a
	                    // this value and a list of arguments ExtraArgs, the following
	                    // steps are taken:
	                    // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
	                    //   property.
	                    // 2. Let boundThis be the value of F's [[BoundThis]] internal
	                    //   property.
	                    // 3. Let target be the value of F's [[TargetFunction]] internal
	                    //   property.
	                    // 4. Let args be a new list containing the same values as the
	                    //   list boundArgs in the same order followed by the same
	                    //   values as the list ExtraArgs in the same order.
	                    // 5. Return the result of calling the [[Call]] internal method
	                    //   of target providing boundThis as the this value and
	                    //   providing args as the arguments.

	                    // equiv: target.call(this, ...boundArgs, ...args)
	                    return apply.call(target, that, array_concat.call(args, array_slice.call(arguments)));
	                }
	            };

	            // 15. If the [[Class]] internal property of Target is "Function", then
	            //     a. Let L be the length property of Target minus the length of A.
	            //     b. Set the length own property of F to either 0 or L, whichever is
	            //       larger.
	            // 16. Else set the length own property of F to 0.

	            var boundLength = max(0, target.length - args.length);

	            // 17. Set the attributes of the length own property of F to the values
	            //   specified in 15.3.5.1.
	            var boundArgs = [];
	            for (var i = 0; i < boundLength; i++) {
	                array_push.call(boundArgs, '$' + i);
	            }

	            // XXX Build a dynamic function with desired amount of arguments is the only
	            // way to set the length property of a function.
	            // In environments where Content Security Policies enabled (Chrome extensions,
	            // for ex.) all use of eval or Function costructor throws an exception.
	            // However in all of these environments Function.prototype.bind exists
	            // and so this code will never be executed.
	            bound = $Function('binder', 'return function (' + array_join.call(boundArgs, ',') + '){ return binder.apply(this, arguments); }')(binder);

	            if (target.prototype) {
	                Empty.prototype = target.prototype;
	                bound.prototype = new Empty();
	                // Clean up dangling references.
	                Empty.prototype = null;
	            }

	            // TODO
	            // 18. Set the [[Extensible]] internal property of F to true.

	            // TODO
	            // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
	            // 20. Call the [[DefineOwnProperty]] internal method of F with
	            //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
	            //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
	            //   false.
	            // 21. Call the [[DefineOwnProperty]] internal method of F with
	            //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
	            //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
	            //   and false.

	            // TODO
	            // NOTE Function objects created using Function.prototype.bind do not
	            // have a prototype property or the [[Code]], [[FormalParameters]], and
	            // [[Scope]] internal properties.
	            // XXX can't delete prototype in pure-js.

	            // 22. Return F.
	            return bound;
	        }
	    });

	    // _Please note: Shortcuts are defined after `Function.prototype.bind` as we
	    // use it in defining shortcuts.
	    var owns = call.bind(ObjectPrototype.hasOwnProperty);
	    var toStr = call.bind(ObjectPrototype.toString);
	    var arraySlice = call.bind(array_slice);
	    var arraySliceApply = apply.bind(array_slice);
	    var strSlice = call.bind(StringPrototype.slice);
	    var strSplit = call.bind(StringPrototype.split);
	    var strIndexOf = call.bind(StringPrototype.indexOf);
	    var pushCall = call.bind(array_push);
	    var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
	    var arraySort = call.bind(ArrayPrototype.sort);

	    //
	    // Array
	    // =====
	    //

	    var isArray = $Array.isArray || function isArray(obj) {
	        return toStr(obj) === '[object Array]';
	    };

	    // ES5 15.4.4.12
	    // http://es5.github.com/#x15.4.4.13
	    // Return len+argCount.
	    // [bugfix, ielt8]
	    // IE < 8 bug: [].unshift(0) === undefined but should be "1"
	    var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
	    defineProperties(ArrayPrototype, {
	        unshift: function unshift() {
	            array_unshift.apply(this, arguments);
	            return this.length;
	        }
	    }, hasUnshiftReturnValueBug);

	    // ES5 15.4.3.2
	    // http://es5.github.com/#x15.4.3.2
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
	    defineProperties($Array, { isArray: isArray });

	    // The IsCallable() check in the Array functions
	    // has been replaced with a strict check on the
	    // internal class of the object to trap cases where
	    // the provided function was actually a regular
	    // expression literal, which in V8 and
	    // JavaScriptCore is a typeof "function".  Only in
	    // V8 are regular expression literals permitted as
	    // reduce parameters, so it is desirable in the
	    // general case for the shim to match the more
	    // strict and common behavior of rejecting regular
	    // expressions.

	    // ES5 15.4.4.18
	    // http://es5.github.com/#x15.4.4.18
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

	    // Check failure of by-index access of string characters (IE < 9)
	    // and failure of `0 in boxedString` (Rhino)
	    var boxedString = $Object('a');
	    var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

	    var properlyBoxesContext = function properlyBoxed(method) {
	        // Check node 0.6.21 bug where third parameter is not boxed
	        var properlyBoxesNonStrict = true;
	        var properlyBoxesStrict = true;
	        var threwException = false;
	        if (method) {
	            try {
	                method.call('foo', function (_, __, context) {
	                    if ((typeof context === 'undefined' ? 'undefined' : _typeof(context)) !== 'object') {
	                        properlyBoxesNonStrict = false;
	                    }
	                });

	                method.call([1], function () {
	                    'use strict';

	                    properlyBoxesStrict = typeof this === 'string';
	                }, 'x');
	            } catch (e) {
	                threwException = true;
	            }
	        }
	        return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
	    };

	    defineProperties(ArrayPrototype, {
	        forEach: function forEach(callbackfn /*, thisArg*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var i = -1;
	            var length = ES.ToUint32(self.length);
	            var T;
	            if (arguments.length > 1) {
	                T = arguments[1];
	            }

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.forEach callback must be a function');
	            }

	            while (++i < length) {
	                if (i in self) {
	                    // Invoke the callback function with call, passing arguments:
	                    // context, property value, property key, thisArg object
	                    if (typeof T === 'undefined') {
	                        callbackfn(self[i], i, object);
	                    } else {
	                        callbackfn.call(T, self[i], i, object);
	                    }
	                }
	            }
	        }
	    }, !properlyBoxesContext(ArrayPrototype.forEach));

	    // ES5 15.4.4.19
	    // http://es5.github.com/#x15.4.4.19
	    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
	    defineProperties(ArrayPrototype, {
	        map: function map(callbackfn /*, thisArg*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);
	            var result = $Array(length);
	            var T;
	            if (arguments.length > 1) {
	                T = arguments[1];
	            }

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.map callback must be a function');
	            }

	            for (var i = 0; i < length; i++) {
	                if (i in self) {
	                    if (typeof T === 'undefined') {
	                        result[i] = callbackfn(self[i], i, object);
	                    } else {
	                        result[i] = callbackfn.call(T, self[i], i, object);
	                    }
	                }
	            }
	            return result;
	        }
	    }, !properlyBoxesContext(ArrayPrototype.map));

	    // ES5 15.4.4.20
	    // http://es5.github.com/#x15.4.4.20
	    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
	    defineProperties(ArrayPrototype, {
	        filter: function filter(callbackfn /*, thisArg*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);
	            var result = [];
	            var value;
	            var T;
	            if (arguments.length > 1) {
	                T = arguments[1];
	            }

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.filter callback must be a function');
	            }

	            for (var i = 0; i < length; i++) {
	                if (i in self) {
	                    value = self[i];
	                    if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
	                        pushCall(result, value);
	                    }
	                }
	            }
	            return result;
	        }
	    }, !properlyBoxesContext(ArrayPrototype.filter));

	    // ES5 15.4.4.16
	    // http://es5.github.com/#x15.4.4.16
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
	    defineProperties(ArrayPrototype, {
	        every: function every(callbackfn /*, thisArg*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);
	            var T;
	            if (arguments.length > 1) {
	                T = arguments[1];
	            }

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.every callback must be a function');
	            }

	            for (var i = 0; i < length; i++) {
	                if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }, !properlyBoxesContext(ArrayPrototype.every));

	    // ES5 15.4.4.17
	    // http://es5.github.com/#x15.4.4.17
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
	    defineProperties(ArrayPrototype, {
	        some: function some(callbackfn /*, thisArg */) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);
	            var T;
	            if (arguments.length > 1) {
	                T = arguments[1];
	            }

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.some callback must be a function');
	            }

	            for (var i = 0; i < length; i++) {
	                if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }, !properlyBoxesContext(ArrayPrototype.some));

	    // ES5 15.4.4.21
	    // http://es5.github.com/#x15.4.4.21
	    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
	    var reduceCoercesToObject = false;
	    if (ArrayPrototype.reduce) {
	        reduceCoercesToObject = _typeof(ArrayPrototype.reduce.call('es5', function (_, __, ___, list) {
	            return list;
	        })) === 'object';
	    }
	    defineProperties(ArrayPrototype, {
	        reduce: function reduce(callbackfn /*, initialValue*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.reduce callback must be a function');
	            }

	            // no value to return if no initial value and an empty array
	            if (length === 0 && arguments.length === 1) {
	                throw new TypeError('reduce of empty array with no initial value');
	            }

	            var i = 0;
	            var result;
	            if (arguments.length >= 2) {
	                result = arguments[1];
	            } else {
	                do {
	                    if (i in self) {
	                        result = self[i++];
	                        break;
	                    }

	                    // if array contains no values, no initial value to return
	                    if (++i >= length) {
	                        throw new TypeError('reduce of empty array with no initial value');
	                    }
	                } while (true);
	            }

	            for (; i < length; i++) {
	                if (i in self) {
	                    result = callbackfn(result, self[i], i, object);
	                }
	            }

	            return result;
	        }
	    }, !reduceCoercesToObject);

	    // ES5 15.4.4.22
	    // http://es5.github.com/#x15.4.4.22
	    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
	    var reduceRightCoercesToObject = false;
	    if (ArrayPrototype.reduceRight) {
	        reduceRightCoercesToObject = _typeof(ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) {
	            return list;
	        })) === 'object';
	    }
	    defineProperties(ArrayPrototype, {
	        reduceRight: function reduceRight(callbackfn /*, initial*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.reduceRight callback must be a function');
	            }

	            // no value to return if no initial value, empty array
	            if (length === 0 && arguments.length === 1) {
	                throw new TypeError('reduceRight of empty array with no initial value');
	            }

	            var result;
	            var i = length - 1;
	            if (arguments.length >= 2) {
	                result = arguments[1];
	            } else {
	                do {
	                    if (i in self) {
	                        result = self[i--];
	                        break;
	                    }

	                    // if array contains no values, no initial value to return
	                    if (--i < 0) {
	                        throw new TypeError('reduceRight of empty array with no initial value');
	                    }
	                } while (true);
	            }

	            if (i < 0) {
	                return result;
	            }

	            do {
	                if (i in self) {
	                    result = callbackfn(result, self[i], i, object);
	                }
	            } while (i--);

	            return result;
	        }
	    }, !reduceRightCoercesToObject);

	    // ES5 15.4.4.14
	    // http://es5.github.com/#x15.4.4.14
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
	    var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
	    defineProperties(ArrayPrototype, {
	        indexOf: function indexOf(searchElement /*, fromIndex */) {
	            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
	            var length = ES.ToUint32(self.length);

	            if (length === 0) {
	                return -1;
	            }

	            var i = 0;
	            if (arguments.length > 1) {
	                i = ES.ToInteger(arguments[1]);
	            }

	            // handle negative indices
	            i = i >= 0 ? i : max(0, length + i);
	            for (; i < length; i++) {
	                if (i in self && self[i] === searchElement) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	    }, hasFirefox2IndexOfBug);

	    // ES5 15.4.4.15
	    // http://es5.github.com/#x15.4.4.15
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
	    var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
	    defineProperties(ArrayPrototype, {
	        lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
	            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
	            var length = ES.ToUint32(self.length);

	            if (length === 0) {
	                return -1;
	            }
	            var i = length - 1;
	            if (arguments.length > 1) {
	                i = min(i, ES.ToInteger(arguments[1]));
	            }
	            // handle negative indices
	            i = i >= 0 ? i : length - Math.abs(i);
	            for (; i >= 0; i--) {
	                if (i in self && searchElement === self[i]) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	    }, hasFirefox2LastIndexOfBug);

	    // ES5 15.4.4.12
	    // http://es5.github.com/#x15.4.4.12
	    var spliceNoopReturnsEmptyArray = function () {
	        var a = [1, 2];
	        var result = a.splice();
	        return a.length === 2 && isArray(result) && result.length === 0;
	    }();
	    defineProperties(ArrayPrototype, {
	        // Safari 5.0 bug where .splice() returns undefined
	        splice: function splice(start, deleteCount) {
	            if (arguments.length === 0) {
	                return [];
	            } else {
	                return array_splice.apply(this, arguments);
	            }
	        }
	    }, !spliceNoopReturnsEmptyArray);

	    var spliceWorksWithEmptyObject = function () {
	        var obj = {};
	        ArrayPrototype.splice.call(obj, 0, 0, 1);
	        return obj.length === 1;
	    }();
	    defineProperties(ArrayPrototype, {
	        splice: function splice(start, deleteCount) {
	            if (arguments.length === 0) {
	                return [];
	            }
	            var args = arguments;
	            this.length = max(ES.ToInteger(this.length), 0);
	            if (arguments.length > 0 && typeof deleteCount !== 'number') {
	                args = arraySlice(arguments);
	                if (args.length < 2) {
	                    pushCall(args, this.length - start);
	                } else {
	                    args[1] = ES.ToInteger(deleteCount);
	                }
	            }
	            return array_splice.apply(this, args);
	        }
	    }, !spliceWorksWithEmptyObject);
	    var spliceWorksWithLargeSparseArrays = function () {
	        // Per https://github.com/es-shims/es5-shim/issues/295
	        // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
	        var arr = new $Array(1e5);
	        // note: the index MUST be 8 or larger or the test will false pass
	        arr[8] = 'x';
	        arr.splice(1, 1);
	        // note: this test must be defined *after* the indexOf shim
	        // per https://github.com/es-shims/es5-shim/issues/313
	        return arr.indexOf('x') === 7;
	    }();
	    var spliceWorksWithSmallSparseArrays = function () {
	        // Per https://github.com/es-shims/es5-shim/issues/295
	        // Opera 12.15 breaks on this, no idea why.
	        var n = 256;
	        var arr = [];
	        arr[n] = 'a';
	        arr.splice(n + 1, 0, 'b');
	        return arr[n] === 'a';
	    }();
	    defineProperties(ArrayPrototype, {
	        splice: function splice(start, deleteCount) {
	            var O = ES.ToObject(this);
	            var A = [];
	            var len = ES.ToUint32(O.length);
	            var relativeStart = ES.ToInteger(start);
	            var actualStart = relativeStart < 0 ? max(len + relativeStart, 0) : min(relativeStart, len);
	            var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

	            var k = 0;
	            var from;
	            while (k < actualDeleteCount) {
	                from = $String(actualStart + k);
	                if (owns(O, from)) {
	                    A[k] = O[from];
	                }
	                k += 1;
	            }

	            var items = arraySlice(arguments, 2);
	            var itemCount = items.length;
	            var to;
	            if (itemCount < actualDeleteCount) {
	                k = actualStart;
	                var maxK = len - actualDeleteCount;
	                while (k < maxK) {
	                    from = $String(k + actualDeleteCount);
	                    to = $String(k + itemCount);
	                    if (owns(O, from)) {
	                        O[to] = O[from];
	                    } else {
	                        delete O[to];
	                    }
	                    k += 1;
	                }
	                k = len;
	                var minK = len - actualDeleteCount + itemCount;
	                while (k > minK) {
	                    delete O[k - 1];
	                    k -= 1;
	                }
	            } else if (itemCount > actualDeleteCount) {
	                k = len - actualDeleteCount;
	                while (k > actualStart) {
	                    from = $String(k + actualDeleteCount - 1);
	                    to = $String(k + itemCount - 1);
	                    if (owns(O, from)) {
	                        O[to] = O[from];
	                    } else {
	                        delete O[to];
	                    }
	                    k -= 1;
	                }
	            }
	            k = actualStart;
	            for (var i = 0; i < items.length; ++i) {
	                O[k] = items[i];
	                k += 1;
	            }
	            O.length = len - actualDeleteCount + itemCount;

	            return A;
	        }
	    }, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

	    var originalJoin = ArrayPrototype.join;
	    var hasStringJoinBug;
	    try {
	        hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
	    } catch (e) {
	        hasStringJoinBug = true;
	    }
	    if (hasStringJoinBug) {
	        defineProperties(ArrayPrototype, {
	            join: function join(separator) {
	                var sep = typeof separator === 'undefined' ? ',' : separator;
	                return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
	            }
	        }, hasStringJoinBug);
	    }

	    var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
	    if (hasJoinUndefinedBug) {
	        defineProperties(ArrayPrototype, {
	            join: function join(separator) {
	                var sep = typeof separator === 'undefined' ? ',' : separator;
	                return originalJoin.call(this, sep);
	            }
	        }, hasJoinUndefinedBug);
	    }

	    var pushShim = function push(item) {
	        var O = ES.ToObject(this);
	        var n = ES.ToUint32(O.length);
	        var i = 0;
	        while (i < arguments.length) {
	            O[n + i] = arguments[i];
	            i += 1;
	        }
	        O.length = n + i;
	        return n + i;
	    };

	    var pushIsNotGeneric = function () {
	        var obj = {};
	        var result = Array.prototype.push.call(obj, undefined);
	        return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
	    }();
	    defineProperties(ArrayPrototype, {
	        push: function push(item) {
	            if (isArray(this)) {
	                return array_push.apply(this, arguments);
	            }
	            return pushShim.apply(this, arguments);
	        }
	    }, pushIsNotGeneric);

	    // This fixes a very weird bug in Opera 10.6 when pushing `undefined
	    var pushUndefinedIsWeird = function () {
	        var arr = [];
	        var result = arr.push(undefined);
	        return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
	    }();
	    defineProperties(ArrayPrototype, { push: pushShim }, pushUndefinedIsWeird);

	    // ES5 15.2.3.14
	    // http://es5.github.io/#x15.4.4.10
	    // Fix boxed string bug
	    defineProperties(ArrayPrototype, {
	        slice: function slice(start, end) {
	            var arr = isString(this) ? strSplit(this, '') : this;
	            return arraySliceApply(arr, arguments);
	        }
	    }, splitString);

	    var sortIgnoresNonFunctions = function () {
	        try {
	            [1, 2].sort(null);
	            [1, 2].sort({});
	            return true;
	        } catch (e) {}
	        return false;
	    }();
	    var sortThrowsOnRegex = function () {
	        // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
	        try {
	            [1, 2].sort(/a/);
	            return false;
	        } catch (e) {}
	        return true;
	    }();
	    var sortIgnoresUndefined = function () {
	        // applies in IE 8, for one.
	        try {
	            [1, 2].sort(undefined);
	            return true;
	        } catch (e) {}
	        return false;
	    }();
	    defineProperties(ArrayPrototype, {
	        sort: function sort(compareFn) {
	            if (typeof compareFn === 'undefined') {
	                return arraySort(this);
	            }
	            if (!isCallable(compareFn)) {
	                throw new TypeError('Array.prototype.sort callback must be a function');
	            }
	            return arraySort(this, compareFn);
	        }
	    }, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);

	    //
	    // Object
	    // ======
	    //

	    // ES5 15.2.3.14
	    // http://es5.github.com/#x15.2.3.14

	    // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
	    var hasDontEnumBug = !isEnum({ 'toString': null }, 'toString');
	    var hasProtoEnumBug = isEnum(function () {}, 'prototype');
	    var hasStringEnumBug = !owns('x', '0');
	    var equalsConstructorPrototype = function equalsConstructorPrototype(o) {
	        var ctor = o.constructor;
	        return ctor && ctor.prototype === o;
	    };
	    var excludedKeys = {
	        $window: true,
	        $console: true,
	        $parent: true,
	        $self: true,
	        $frame: true,
	        $frames: true,
	        $frameElement: true,
	        $webkitIndexedDB: true,
	        $webkitStorageInfo: true,
	        $external: true,
	        $width: true,
	        $height: true
	    };
	    var hasAutomationEqualityBug = function () {
	        /* globals window */
	        if (typeof window === 'undefined') {
	            return false;
	        }
	        for (var k in window) {
	            try {
	                if (!excludedKeys['$' + k] && owns(window, k) && window[k] !== null && _typeof(window[k]) === 'object') {
	                    equalsConstructorPrototype(window[k]);
	                }
	            } catch (e) {
	                return true;
	            }
	        }
	        return false;
	    }();
	    var equalsConstructorPrototypeIfNotBuggy = function equalsConstructorPrototypeIfNotBuggy(object) {
	        if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
	            return equalsConstructorPrototype(object);
	        }
	        try {
	            return equalsConstructorPrototype(object);
	        } catch (e) {
	            return false;
	        }
	    };
	    var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
	    var dontEnumsLength = dontEnums.length;

	    // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
	    // can be replaced with require('is-arguments') if we ever use a build process instead
	    var isStandardArguments = function isArguments(value) {
	        return toStr(value) === '[object Arguments]';
	    };
	    var isLegacyArguments = function isArguments(value) {
	        return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.length === 'number' && value.length >= 0 && !isArray(value) && isCallable(value.callee);
	    };
	    var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

	    defineProperties($Object, {
	        keys: function keys(object) {
	            var isFn = isCallable(object);
	            var isArgs = isArguments(object);
	            var isObject = object !== null && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
	            var isStr = isObject && isString(object);

	            if (!isObject && !isFn && !isArgs) {
	                throw new TypeError('Object.keys called on a non-object');
	            }

	            var theKeys = [];
	            var skipProto = hasProtoEnumBug && isFn;
	            if (isStr && hasStringEnumBug || isArgs) {
	                for (var i = 0; i < object.length; ++i) {
	                    pushCall(theKeys, $String(i));
	                }
	            }

	            if (!isArgs) {
	                for (var name in object) {
	                    if (!(skipProto && name === 'prototype') && owns(object, name)) {
	                        pushCall(theKeys, $String(name));
	                    }
	                }
	            }

	            if (hasDontEnumBug) {
	                var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	                for (var j = 0; j < dontEnumsLength; j++) {
	                    var dontEnum = dontEnums[j];
	                    if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
	                        pushCall(theKeys, dontEnum);
	                    }
	                }
	            }
	            return theKeys;
	        }
	    });

	    var keysWorksWithArguments = $Object.keys && function () {
	        // Safari 5.0 bug
	        return $Object.keys(arguments).length === 2;
	    }(1, 2);
	    var keysHasArgumentsLengthBug = $Object.keys && function () {
	        var argKeys = $Object.keys(arguments);
	        return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
	    }(1);
	    var originalKeys = $Object.keys;
	    defineProperties($Object, {
	        keys: function keys(object) {
	            if (isArguments(object)) {
	                return originalKeys(arraySlice(object));
	            } else {
	                return originalKeys(object);
	            }
	        }
	    }, !keysWorksWithArguments || keysHasArgumentsLengthBug);

	    //
	    // Date
	    // ====
	    //

	    var hasNegativeMonthYearBug = new Date(-3509827329600292).getUTCMonth() !== 0;
	    var aNegativeTestDate = new Date(-1509842289600292);
	    var aPositiveTestDate = new Date(1449662400000);
	    var hasToUTCStringFormatBug = aNegativeTestDate.toUTCString() !== 'Mon, 01 Jan -45875 11:59:59 GMT';
	    var hasToDateStringFormatBug;
	    var hasToStringFormatBug;
	    var timeZoneOffset = aNegativeTestDate.getTimezoneOffset();
	    if (timeZoneOffset < -720) {
	        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Tue Jan 02 -45875';
	        hasToStringFormatBug = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(aPositiveTestDate));
	    } else {
	        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Mon Jan 01 -45875';
	        hasToStringFormatBug = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(aPositiveTestDate));
	    }

	    var originalGetFullYear = call.bind(Date.prototype.getFullYear);
	    var originalGetMonth = call.bind(Date.prototype.getMonth);
	    var originalGetDate = call.bind(Date.prototype.getDate);
	    var originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear);
	    var originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth);
	    var originalGetUTCDate = call.bind(Date.prototype.getUTCDate);
	    var originalGetUTCDay = call.bind(Date.prototype.getUTCDay);
	    var originalGetUTCHours = call.bind(Date.prototype.getUTCHours);
	    var originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes);
	    var originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds);
	    var originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds);
	    var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	    var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	    var daysInMonth = function daysInMonth(month, year) {
	        return originalGetDate(new Date(year, month, 0));
	    };

	    defineProperties(Date.prototype, {
	        getFullYear: function getFullYear() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetFullYear(this);
	            if (year < 0 && originalGetMonth(this) > 11) {
	                return year + 1;
	            }
	            return year;
	        },
	        getMonth: function getMonth() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetFullYear(this);
	            var month = originalGetMonth(this);
	            if (year < 0 && month > 11) {
	                return 0;
	            }
	            return month;
	        },
	        getDate: function getDate() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetFullYear(this);
	            var month = originalGetMonth(this);
	            var date = originalGetDate(this);
	            if (year < 0 && month > 11) {
	                if (month === 12) {
	                    return date;
	                }
	                var days = daysInMonth(0, year + 1);
	                return days - date + 1;
	            }
	            return date;
	        },
	        getUTCFullYear: function getUTCFullYear() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetUTCFullYear(this);
	            if (year < 0 && originalGetUTCMonth(this) > 11) {
	                return year + 1;
	            }
	            return year;
	        },
	        getUTCMonth: function getUTCMonth() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetUTCFullYear(this);
	            var month = originalGetUTCMonth(this);
	            if (year < 0 && month > 11) {
	                return 0;
	            }
	            return month;
	        },
	        getUTCDate: function getUTCDate() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetUTCFullYear(this);
	            var month = originalGetUTCMonth(this);
	            var date = originalGetUTCDate(this);
	            if (year < 0 && month > 11) {
	                if (month === 12) {
	                    return date;
	                }
	                var days = daysInMonth(0, year + 1);
	                return days - date + 1;
	            }
	            return date;
	        }
	    }, hasNegativeMonthYearBug);

	    defineProperties(Date.prototype, {
	        toUTCString: function toUTCString() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var day = originalGetUTCDay(this);
	            var date = originalGetUTCDate(this);
	            var month = originalGetUTCMonth(this);
	            var year = originalGetUTCFullYear(this);
	            var hour = originalGetUTCHours(this);
	            var minute = originalGetUTCMinutes(this);
	            var second = originalGetUTCSeconds(this);
	            return dayName[day] + ', ' + (date < 10 ? '0' + date : date) + ' ' + monthName[month] + ' ' + year + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second) + ' GMT';
	        }
	    }, hasNegativeMonthYearBug || hasToUTCStringFormatBug);

	    // Opera 12 has `,`
	    defineProperties(Date.prototype, {
	        toDateString: function toDateString() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var day = this.getDay();
	            var date = this.getDate();
	            var month = this.getMonth();
	            var year = this.getFullYear();
	            return dayName[day] + ' ' + monthName[month] + ' ' + (date < 10 ? '0' + date : date) + ' ' + year;
	        }
	    }, hasNegativeMonthYearBug || hasToDateStringFormatBug);

	    // can't use defineProperties here because of toString enumeration issue in IE <= 8
	    if (hasNegativeMonthYearBug || hasToStringFormatBug) {
	        Date.prototype.toString = function toString() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var day = this.getDay();
	            var date = this.getDate();
	            var month = this.getMonth();
	            var year = this.getFullYear();
	            var hour = this.getHours();
	            var minute = this.getMinutes();
	            var second = this.getSeconds();
	            var timezoneOffset = this.getTimezoneOffset();
	            var hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
	            var minutesOffset = Math.floor(Math.abs(timezoneOffset) % 60);
	            return dayName[day] + ' ' + monthName[month] + ' ' + (date < 10 ? '0' + date : date) + ' ' + year + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second) + ' GMT' + (timezoneOffset > 0 ? '-' : '+') + (hoursOffset < 10 ? '0' + hoursOffset : hoursOffset) + (minutesOffset < 10 ? '0' + minutesOffset : minutesOffset);
	        };
	        if (supportsDescriptors) {
	            $Object.defineProperty(Date.prototype, 'toString', {
	                configurable: true,
	                enumerable: false,
	                writable: true
	            });
	        }
	    }

	    // ES5 15.9.5.43
	    // http://es5.github.com/#x15.9.5.43
	    // This function returns a String value represent the instance in time
	    // represented by this Date object. The format of the String is the Date Time
	    // string format defined in 15.9.1.15. All fields are present in the String.
	    // The time zone is always UTC, denoted by the suffix Z. If the time value of
	    // this object is not a finite Number a RangeError exception is thrown.
	    var negativeDate = -62198755200000;
	    var negativeYearString = '-000001';
	    var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1; // eslint-disable-line max-len
	    var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

	    var getTime = call.bind(Date.prototype.getTime);

	    defineProperties(Date.prototype, {
	        toISOString: function toISOString() {
	            if (!isFinite(this) || !isFinite(getTime(this))) {
	                // Adope Photoshop requires the second check.
	                throw new RangeError('Date.prototype.toISOString called on non-finite value.');
	            }

	            var year = originalGetUTCFullYear(this);

	            var month = originalGetUTCMonth(this);
	            // see https://github.com/es-shims/es5-shim/issues/111
	            year += Math.floor(month / 12);
	            month = (month % 12 + 12) % 12;

	            // the date time string format is specified in 15.9.1.15.
	            var result = [month + 1, originalGetUTCDate(this), originalGetUTCHours(this), originalGetUTCMinutes(this), originalGetUTCSeconds(this)];
	            year = (year < 0 ? '-' : year > 9999 ? '+' : '') + strSlice('00000' + Math.abs(year), 0 <= year && year <= 9999 ? -4 : -6);

	            for (var i = 0; i < result.length; ++i) {
	                // pad months, days, hours, minutes, and seconds to have two digits.
	                result[i] = strSlice('00' + result[i], -2);
	            }
	            // pad milliseconds to have three digits.
	            return year + '-' + arraySlice(result, 0, 2).join('-') + 'T' + arraySlice(result, 2).join(':') + '.' + strSlice('000' + originalGetUTCMilliseconds(this), -3) + 'Z';
	        }
	    }, hasNegativeDateBug || hasSafari51DateBug);

	    // ES5 15.9.5.44
	    // http://es5.github.com/#x15.9.5.44
	    // This function provides a String representation of a Date object for use by
	    // JSON.stringify (15.12.3).
	    var dateToJSONIsSupported = function () {
	        try {
	            return Date.prototype.toJSON && new Date(NaN).toJSON() === null && new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 && Date.prototype.toJSON.call({ // generic
	                toISOString: function toISOString() {
	                    return true;
	                }
	            });
	        } catch (e) {
	            return false;
	        }
	    }();
	    if (!dateToJSONIsSupported) {
	        Date.prototype.toJSON = function toJSON(key) {
	            // When the toJSON method is called with argument key, the following
	            // steps are taken:

	            // 1.  Let O be the result of calling ToObject, giving it the this
	            // value as its argument.
	            // 2. Let tv be ES.ToPrimitive(O, hint Number).
	            var O = $Object(this);
	            var tv = ES.ToPrimitive(O);
	            // 3. If tv is a Number and is not finite, return null.
	            if (typeof tv === 'number' && !isFinite(tv)) {
	                return null;
	            }
	            // 4. Let toISO be the result of calling the [[Get]] internal method of
	            // O with argument "toISOString".
	            var toISO = O.toISOString;
	            // 5. If IsCallable(toISO) is false, throw a TypeError exception.
	            if (!isCallable(toISO)) {
	                throw new TypeError('toISOString property is not callable');
	            }
	            // 6. Return the result of calling the [[Call]] internal method of
	            //  toISO with O as the this value and an empty argument list.
	            return toISO.call(O);

	            // NOTE 1 The argument is ignored.

	            // NOTE 2 The toJSON function is intentionally generic; it does not
	            // require that its this value be a Date object. Therefore, it can be
	            // transferred to other kinds of objects for use as a method. However,
	            // it does require that any such object have a toISOString method. An
	            // object is free to use the argument key to filter its
	            // stringification.
	        };
	    }

	    // ES5 15.9.4.2
	    // http://es5.github.com/#x15.9.4.2
	    // based on work shared by Daniel Friesen (dantman)
	    // http://gist.github.com/303249
	    var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
	    var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
	    var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
	    if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
	        // XXX global assignment won't work in embeddings that use
	        // an alternate object for the context.
	        /* global Date: true */
	        var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
	        var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
	        // eslint-disable-next-line no-implicit-globals, no-global-assign
	        Date = function (NativeDate) {
	            // Date.length === 7
	            var DateShim = function Date(Y, M, D, h, m, s, ms) {
	                var length = arguments.length;
	                var date;
	                if (this instanceof NativeDate) {
	                    var seconds = s;
	                    var millis = ms;
	                    if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
	                        // work around a Safari 8/9 bug where it treats the seconds as signed
	                        var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
	                        var sToShift = Math.floor(msToShift / 1e3);
	                        seconds += sToShift;
	                        millis -= sToShift * 1e3;
	                    }
	                    date = length === 1 && $String(Y) === Y ? // isString(Y)
	                    // We explicitly pass it through parse:
	                    new NativeDate(DateShim.parse(Y)) :
	                    // We have to manually make calls depending on argument
	                    // length here
	                    length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) : length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) : length >= 5 ? new NativeDate(Y, M, D, h, m) : length >= 4 ? new NativeDate(Y, M, D, h) : length >= 3 ? new NativeDate(Y, M, D) : length >= 2 ? new NativeDate(Y, M) : length >= 1 ? new NativeDate(Y instanceof NativeDate ? +Y : Y) : new NativeDate();
	                } else {
	                    date = NativeDate.apply(this, arguments);
	                }
	                if (!isPrimitive(date)) {
	                    // Prevent mixups with unfixed Date object
	                    defineProperties(date, { constructor: DateShim }, true);
	                }
	                return date;
	            };

	            // 15.9.1.15 Date Time String Format.
	            var isoDateExpression = new RegExp('^' + '(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
	            // 6-digit extended year
	            '(?:-(\\d{2})' + // optional month capture
	            '(?:-(\\d{2})' + // optional day capture
	            '(?:' + // capture hours:minutes:seconds.milliseconds
	            'T(\\d{2})' + // hours capture
	            ':(\\d{2})' + // minutes capture
	            '(?:' + // optional :seconds.milliseconds
	            ':(\\d{2})' + // seconds capture
	            '(?:(\\.\\d{1,}))?' + // milliseconds capture
	            ')?' + '(' + // capture UTC offset component
	            'Z|' + // UTC capture
	            '(?:' + // offset specifier +/-hours:minutes
	            '([-+])' + // sign capture
	            '(\\d{2})' + // hours offset capture
	            ':(\\d{2})' + // minutes offset capture
	            ')' + ')?)?)?)?' + '$');

	            var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

	            var dayFromMonth = function dayFromMonth(year, month) {
	                var t = month > 1 ? 1 : 0;
	                return months[month] + Math.floor((year - 1969 + t) / 4) - Math.floor((year - 1901 + t) / 100) + Math.floor((year - 1601 + t) / 400) + 365 * (year - 1970);
	            };

	            var toUTC = function toUTC(t) {
	                var s = 0;
	                var ms = t;
	                if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
	                    // work around a Safari 8/9 bug where it treats the seconds as signed
	                    var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
	                    var sToShift = Math.floor(msToShift / 1e3);
	                    s += sToShift;
	                    ms -= sToShift * 1e3;
	                }
	                return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
	            };

	            // Copy any custom methods a 3rd party library may have added
	            for (var key in NativeDate) {
	                if (owns(NativeDate, key)) {
	                    DateShim[key] = NativeDate[key];
	                }
	            }

	            // Copy "native" methods explicitly; they may be non-enumerable
	            defineProperties(DateShim, {
	                now: NativeDate.now,
	                UTC: NativeDate.UTC
	            }, true);
	            DateShim.prototype = NativeDate.prototype;
	            defineProperties(DateShim.prototype, { constructor: DateShim }, true);

	            // Upgrade Date.parse to handle simplified ISO 8601 strings
	            var parseShim = function parse(string) {
	                var match = isoDateExpression.exec(string);
	                if (match) {
	                    // parse months, days, hours, minutes, seconds, and milliseconds
	                    // provide default values if necessary
	                    // parse the UTC offset component
	                    var year = $Number(match[1]),
	                        month = $Number(match[2] || 1) - 1,
	                        day = $Number(match[3] || 1) - 1,
	                        hour = $Number(match[4] || 0),
	                        minute = $Number(match[5] || 0),
	                        second = $Number(match[6] || 0),
	                        millisecond = Math.floor($Number(match[7] || 0) * 1000),

	                    // When time zone is missed, local offset should be used
	                    // (ES 5.1 bug)
	                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
	                    isLocalTime = Boolean(match[4] && !match[8]),
	                        signOffset = match[9] === '-' ? 1 : -1,
	                        hourOffset = $Number(match[10] || 0),
	                        minuteOffset = $Number(match[11] || 0),
	                        result;
	                    var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
	                    if (hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) && minute < 60 && second < 60 && millisecond < 1000 && month > -1 && month < 12 && hourOffset < 24 && minuteOffset < 60 && // detect invalid offsets
	                    day > -1 && day < dayFromMonth(year, month + 1) - dayFromMonth(year, month)) {
	                        result = ((dayFromMonth(year, month) + day) * 24 + hour + hourOffset * signOffset) * 60;
	                        result = ((result + minute + minuteOffset * signOffset) * 60 + second) * 1000 + millisecond;
	                        if (isLocalTime) {
	                            result = toUTC(result);
	                        }
	                        if (-8.64e15 <= result && result <= 8.64e15) {
	                            return result;
	                        }
	                    }
	                    return NaN;
	                }
	                return NativeDate.parse.apply(this, arguments);
	            };
	            defineProperties(DateShim, { parse: parseShim });

	            return DateShim;
	        }(Date);
	        /* global Date: false */
	    }

	    // ES5 15.9.4.4
	    // http://es5.github.com/#x15.9.4.4
	    if (!Date.now) {
	        Date.now = function now() {
	            return new Date().getTime();
	        };
	    }

	    //
	    // Number
	    // ======
	    //

	    // ES5.1 15.7.4.5
	    // http://es5.github.com/#x15.7.4.5
	    var hasToFixedBugs = NumberPrototype.toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128 .toFixed(0) !== '1000000000000000128');

	    var toFixedHelpers = {
	        base: 1e7,
	        size: 6,
	        data: [0, 0, 0, 0, 0, 0],
	        multiply: function multiply(n, c) {
	            var i = -1;
	            var c2 = c;
	            while (++i < toFixedHelpers.size) {
	                c2 += n * toFixedHelpers.data[i];
	                toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
	                c2 = Math.floor(c2 / toFixedHelpers.base);
	            }
	        },
	        divide: function divide(n) {
	            var i = toFixedHelpers.size;
	            var c = 0;
	            while (--i >= 0) {
	                c += toFixedHelpers.data[i];
	                toFixedHelpers.data[i] = Math.floor(c / n);
	                c = c % n * toFixedHelpers.base;
	            }
	        },
	        numToString: function numToString() {
	            var i = toFixedHelpers.size;
	            var s = '';
	            while (--i >= 0) {
	                if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
	                    var t = $String(toFixedHelpers.data[i]);
	                    if (s === '') {
	                        s = t;
	                    } else {
	                        s += strSlice('0000000', 0, 7 - t.length) + t;
	                    }
	                }
	            }
	            return s;
	        },
	        pow: function pow(x, n, acc) {
	            return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	        },
	        log: function log(x) {
	            var n = 0;
	            var x2 = x;
	            while (x2 >= 4096) {
	                n += 12;
	                x2 /= 4096;
	            }
	            while (x2 >= 2) {
	                n += 1;
	                x2 /= 2;
	            }
	            return n;
	        }
	    };

	    var toFixedShim = function toFixed(fractionDigits) {
	        var f, x, s, m, e, z, j, k;

	        // Test for NaN and round fractionDigits down
	        f = $Number(fractionDigits);
	        f = isActualNaN(f) ? 0 : Math.floor(f);

	        if (f < 0 || f > 20) {
	            throw new RangeError('Number.toFixed called with invalid number of decimals');
	        }

	        x = $Number(this);

	        if (isActualNaN(x)) {
	            return 'NaN';
	        }

	        // If it is too big or small, return the string value of the number
	        if (x <= -1e21 || x >= 1e21) {
	            return $String(x);
	        }

	        s = '';

	        if (x < 0) {
	            s = '-';
	            x = -x;
	        }

	        m = '0';

	        if (x > 1e-21) {
	            // 1e-21 < x < 1e21
	            // -70 < log2(x) < 70
	            e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
	            z = e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1);
	            z *= 0x10000000000000; // Math.pow(2, 52);
	            e = 52 - e;

	            // -18 < e < 122
	            // x = z / 2 ^ e
	            if (e > 0) {
	                toFixedHelpers.multiply(0, z);
	                j = f;

	                while (j >= 7) {
	                    toFixedHelpers.multiply(1e7, 0);
	                    j -= 7;
	                }

	                toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
	                j = e - 1;

	                while (j >= 23) {
	                    toFixedHelpers.divide(1 << 23);
	                    j -= 23;
	                }

	                toFixedHelpers.divide(1 << j);
	                toFixedHelpers.multiply(1, 1);
	                toFixedHelpers.divide(2);
	                m = toFixedHelpers.numToString();
	            } else {
	                toFixedHelpers.multiply(0, z);
	                toFixedHelpers.multiply(1 << -e, 0);
	                m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
	            }
	        }

	        if (f > 0) {
	            k = m.length;

	            if (k <= f) {
	                m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
	            } else {
	                m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
	            }
	        } else {
	            m = s + m;
	        }

	        return m;
	    };
	    defineProperties(NumberPrototype, { toFixed: toFixedShim }, hasToFixedBugs);

	    var hasToPrecisionUndefinedBug = function () {
	        try {
	            return 1.0.toPrecision(undefined) === '1';
	        } catch (e) {
	            return true;
	        }
	    }();
	    var originalToPrecision = NumberPrototype.toPrecision;
	    defineProperties(NumberPrototype, {
	        toPrecision: function toPrecision(precision) {
	            return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
	        }
	    }, hasToPrecisionUndefinedBug);

	    //
	    // String
	    // ======
	    //

	    // ES5 15.5.4.14
	    // http://es5.github.com/#x15.5.4.14

	    // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
	    // Many browsers do not split properly with regular expressions or they
	    // do not perform the split correctly under obscure conditions.
	    // See http://blog.stevenlevithan.com/archives/cross-browser-split
	    // I've tested in many browsers and this seems to cover the deviant ones:
	    //    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
	    //    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
	    //    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
	    //       [undefined, "t", undefined, "e", ...]
	    //    ''.split(/.?/) should be [], not [""]
	    //    '.'.split(/()()/) should be ["."], not ["", "", "."]

	    if ('ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 || 'tesst'.split(/(s)*/)[1] === 't' || 'test'.split(/(?:)/, -1).length !== 4 || ''.split(/.?/).length || '.'.split(/()()/).length > 1) {
	        (function () {
	            var compliantExecNpcg = typeof /()??/.exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
	            var maxSafe32BitInt = Math.pow(2, 32) - 1;

	            StringPrototype.split = function (separator, limit) {
	                var string = String(this);
	                if (typeof separator === 'undefined' && limit === 0) {
	                    return [];
	                }

	                // If `separator` is not a regex, use native split
	                if (!isRegex(separator)) {
	                    return strSplit(this, separator, limit);
	                }

	                var output = [];
	                var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + ( // in ES6
	                separator.sticky ? 'y' : ''),
	                    // Firefox 3+ and ES6
	                lastLastIndex = 0,

	                // Make `global` and avoid `lastIndex` issues by working with a copy
	                separator2,
	                    match,
	                    lastIndex,
	                    lastLength;
	                var separatorCopy = new RegExp(separator.source, flags + 'g');
	                if (!compliantExecNpcg) {
	                    // Doesn't need flags gy, but they don't hurt
	                    separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	                }
	                /* Values for `limit`, per the spec:
	                 * If undefined: 4294967295 // maxSafe32BitInt
	                 * If 0, Infinity, or NaN: 0
	                 * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	                 * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	                 * If other: Type-convert, then use the above rules
	                 */
	                var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
	                match = separatorCopy.exec(string);
	                while (match) {
	                    // `separatorCopy.lastIndex` is not reliable cross-browser
	                    lastIndex = match.index + match[0].length;
	                    if (lastIndex > lastLastIndex) {
	                        pushCall(output, strSlice(string, lastLastIndex, match.index));
	                        // Fix browsers whose `exec` methods don't consistently return `undefined` for
	                        // nonparticipating capturing groups
	                        if (!compliantExecNpcg && match.length > 1) {
	                            /* eslint-disable no-loop-func */
	                            match[0].replace(separator2, function () {
	                                for (var i = 1; i < arguments.length - 2; i++) {
	                                    if (typeof arguments[i] === 'undefined') {
	                                        match[i] = void 0;
	                                    }
	                                }
	                            });
	                            /* eslint-enable no-loop-func */
	                        }
	                        if (match.length > 1 && match.index < string.length) {
	                            array_push.apply(output, arraySlice(match, 1));
	                        }
	                        lastLength = match[0].length;
	                        lastLastIndex = lastIndex;
	                        if (output.length >= splitLimit) {
	                            break;
	                        }
	                    }
	                    if (separatorCopy.lastIndex === match.index) {
	                        separatorCopy.lastIndex++; // Avoid an infinite loop
	                    }
	                    match = separatorCopy.exec(string);
	                }
	                if (lastLastIndex === string.length) {
	                    if (lastLength || !separatorCopy.test('')) {
	                        pushCall(output, '');
	                    }
	                } else {
	                    pushCall(output, strSlice(string, lastLastIndex));
	                }
	                return output.length > splitLimit ? arraySlice(output, 0, splitLimit) : output;
	            };
	        })();

	        // [bugfix, chrome]
	        // If separator is undefined, then the result array contains just one String,
	        // which is the this value (converted to a String). If limit is not undefined,
	        // then the output array is truncated so that it contains no more than limit
	        // elements.
	        // "0".split(undefined, 0) -> []
	    } else if ('0'.split(void 0, 0).length) {
	        StringPrototype.split = function split(separator, limit) {
	            if (typeof separator === 'undefined' && limit === 0) {
	                return [];
	            }
	            return strSplit(this, separator, limit);
	        };
	    }

	    var str_replace = StringPrototype.replace;
	    var replaceReportsGroupsCorrectly = function () {
	        var groups = [];
	        'x'.replace(/x(.)?/g, function (match, group) {
	            pushCall(groups, group);
	        });
	        return groups.length === 1 && typeof groups[0] === 'undefined';
	    }();

	    if (!replaceReportsGroupsCorrectly) {
	        StringPrototype.replace = function replace(searchValue, replaceValue) {
	            var isFn = isCallable(replaceValue);
	            var hasCapturingGroups = isRegex(searchValue) && /\)[*?]/.test(searchValue.source);
	            if (!isFn || !hasCapturingGroups) {
	                return str_replace.call(this, searchValue, replaceValue);
	            } else {
	                var wrappedReplaceValue = function wrappedReplaceValue(match) {
	                    var length = arguments.length;
	                    var originalLastIndex = searchValue.lastIndex;
	                    searchValue.lastIndex = 0;
	                    var args = searchValue.exec(match) || [];
	                    searchValue.lastIndex = originalLastIndex;
	                    pushCall(args, arguments[length - 2], arguments[length - 1]);
	                    return replaceValue.apply(this, args);
	                };
	                return str_replace.call(this, searchValue, wrappedReplaceValue);
	            }
	        };
	    }

	    // ECMA-262, 3rd B.2.3
	    // Not an ECMAScript standard, although ECMAScript 3rd Edition has a
	    // non-normative section suggesting uniform semantics and it should be
	    // normalized across all browsers
	    // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
	    var string_substr = StringPrototype.substr;
	    var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
	    defineProperties(StringPrototype, {
	        substr: function substr(start, length) {
	            var normalizedStart = start;
	            if (start < 0) {
	                normalizedStart = max(this.length + start, 0);
	            }
	            return string_substr.call(this, normalizedStart, length);
	        }
	    }, hasNegativeSubstrBug);

	    // ES5 15.5.4.20
	    // whitespace from: http://es5.github.io/#x15.5.4.20
	    var ws = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
	    var zeroWidth = '\u200B';
	    var wsRegexChars = '[' + ws + ']';
	    var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
	    var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
	    var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
	    defineProperties(StringPrototype, {
	        // http://blog.stevenlevithan.com/archives/faster-trim-javascript
	        // http://perfectionkills.com/whitespace-deviations/
	        trim: function trim() {
	            if (typeof this === 'undefined' || this === null) {
	                throw new TypeError("can't convert " + this + ' to object');
	            }
	            return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
	        }
	    }, hasTrimWhitespaceBug);
	    var trim = call.bind(String.prototype.trim);

	    var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcあい'.lastIndexOf('あい', 2) !== -1;
	    defineProperties(StringPrototype, {
	        lastIndexOf: function lastIndexOf(searchString) {
	            if (typeof this === 'undefined' || this === null) {
	                throw new TypeError("can't convert " + this + ' to object');
	            }
	            var S = $String(this);
	            var searchStr = $String(searchString);
	            var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
	            var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
	            var start = min(max(pos, 0), S.length);
	            var searchLen = searchStr.length;
	            var k = start + searchLen;
	            while (k > 0) {
	                k = max(0, k - searchLen);
	                var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
	                if (index !== -1) {
	                    return k + index;
	                }
	            }
	            return -1;
	        }
	    }, hasLastIndexBug);

	    var originalLastIndexOf = StringPrototype.lastIndexOf;
	    defineProperties(StringPrototype, {
	        lastIndexOf: function lastIndexOf(searchString) {
	            return originalLastIndexOf.apply(this, arguments);
	        }
	    }, StringPrototype.lastIndexOf.length !== 1);

	    // ES-5 15.1.2.2
	    // eslint-disable-next-line radix
	    if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
	        /* global parseInt: true */
	        parseInt = function (origParseInt) {
	            var hexRegex = /^[-+]?0[xX]/;
	            return function parseInt(str, radix) {
	                var string = trim(String(str));
	                var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
	                return origParseInt(string, defaultedRadix);
	            };
	        }(parseInt);
	    }

	    // https://es5.github.io/#x15.1.2.3
	    if (1 / parseFloat('-0') !== -Infinity) {
	        /* global parseFloat: true */
	        parseFloat = function (origParseFloat) {
	            return function parseFloat(string) {
	                var inputString = trim(String(string));
	                var result = origParseFloat(inputString);
	                return result === 0 && strSlice(inputString, 0, 1) === '-' ? -0 : result;
	            };
	        }(parseFloat);
	    }

	    if (String(new RangeError('test')) !== 'RangeError: test') {
	        var errorToStringShim = function toString() {
	            if (typeof this === 'undefined' || this === null) {
	                throw new TypeError("can't convert " + this + ' to object');
	            }
	            var name = this.name;
	            if (typeof name === 'undefined') {
	                name = 'Error';
	            } else if (typeof name !== 'string') {
	                name = $String(name);
	            }
	            var msg = this.message;
	            if (typeof msg === 'undefined') {
	                msg = '';
	            } else if (typeof msg !== 'string') {
	                msg = $String(msg);
	            }
	            if (!name) {
	                return msg;
	            }
	            if (!msg) {
	                return name;
	            }
	            return name + ': ' + msg;
	        };
	        // can't use defineProperties here because of toString enumeration issue in IE <= 8
	        Error.prototype.toString = errorToStringShim;
	    }

	    if (supportsDescriptors) {
	        var ensureNonEnumerable = function ensureNonEnumerable(obj, prop) {
	            if (isEnum(obj, prop)) {
	                var desc = Object.getOwnPropertyDescriptor(obj, prop);
	                if (desc.configurable) {
	                    desc.enumerable = false;
	                    Object.defineProperty(obj, prop, desc);
	                }
	            }
	        };
	        ensureNonEnumerable(Error.prototype, 'message');
	        if (Error.prototype.message !== '') {
	            Error.prototype.message = '';
	        }
	        ensureNonEnumerable(Error.prototype, 'name');
	    }

	    if (String(/a/mig) !== '/a/gim') {
	        var regexToString = function toString() {
	            var str = '/' + this.source + '/';
	            if (this.global) {
	                str += 'g';
	            }
	            if (this.ignoreCase) {
	                str += 'i';
	            }
	            if (this.multiline) {
	                str += 'm';
	            }
	            return str;
	        };
	        // can't use defineProperties here because of toString enumeration issue in IE <= 8
	        RegExp.prototype.toString = regexToString;
	    }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	//Object polyfill
	if (typeof Object.assign != 'function') {
	  Object.assign = function (target) {
	    'use strict';
	    // We must check against these specific cases.

	    if (target === undefined || target === null) {
	      throw new TypeError('Cannot convert undefined or null to object');
	    }
	    var output = Object(target);
	    for (var index = 1; index < arguments.length; index++) {
	      var source = arguments[index];
	      if (source !== undefined && source !== null) {
	        for (var nextKey in source) {
	          if (source.hasOwnProperty(nextKey)) {
	            output[nextKey] = source[nextKey];
	          }
	        }
	      }
	    }
	    return output;
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	//防止rosin报错
	var oldStringify = JSON.stringify;
	JSON.stringify = function (str) {
	    try {
	        return oldStringify.apply(JSON, arguments);
	    } catch (e) {
	        return '';
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/10/25.
	 */

	var Modules = Modules || __webpack_require__(7);
	var Mgr = Mgr || __webpack_require__(14);
	var EventId = Modules.eventId;
	var PuzzleChessBoard = PuzzleChessBoard || __webpack_require__(27);
	var ModuleManager = ModuleManager || __webpack_require__(44);
	var puzzle_resolver = puzzle_resolver || __webpack_require__(28);
	var TableManager = TableManager || __webpack_require__(54);
	var puzzle_rule = puzzle_rule || __webpack_require__(30);
	var puzzle_env = puzzle_env || __webpack_require__(55);
	var DataCollector = DataCollector || __webpack_require__(56);
	var puzzle_item = puzzle_item || __webpack_require__(57);
	var TimeStat = TimeStat || __webpack_require__(23);
	var module_icebear = module_icebear || __webpack_require__(39);

	var specialStage = [108];

	var PuzzleGame = function () {
	    function PuzzleGame(workerMode) {
	        _classCallCheck(this, PuzzleGame);

	        this._workerMode = workerMode;

	        console.log("new PuzzleGame");
	        //if(workerMode){
	        //    postMessage({
	        //        msg: "LogPanel",
	        //        data: "new PuzzleGame"
	        //    });
	        //}

	        Mgr.curBoard = this.curBoard = new PuzzleChessBoard(this);
	        Mgr.dataEventManager = this.eventManager = new Modules.eventManager(this);
	        Mgr.scoreManager = this.scoreManager = new Modules.scoreManager(this);
	        Mgr.stageManager = this.stageManager = new Modules.stageManager(this);
	        Mgr.aniManager = this.aniManager = new Modules.aniManager(this);
	        Mgr.passConditionManager = this.passConditionManager = new Modules.passConditionManager(this);
	        Mgr.moduleManager = this.moduleManager = new ModuleManager();
	        Mgr.stateMachine = this.stateMachine = new puzzle_resolver.PuzzleChessResolver();
	        Mgr.tableManager = this.tableManager = new TableManager.TableManager();
	        Mgr.ruleManager = this.ruleManager = new puzzle_rule.RuleManager_();
	        Mgr.envManager = this.envManager = new puzzle_env.EnvManager_();
	        Mgr.dataCollector = this.dataCollector = new DataCollector();
	        Mgr.itemManager = this.itemManager = new puzzle_item.ItemManager_();
	        Mgr.recordManager = this.recordManager = new Modules.recordManager(this);
	        Mgr.statManager = this.statManager = new Modules.statManager(this);

	        TimeStat.reset();

	        //this.boardViewer = null;
	        this.eventManager.globalBind();

	        Mgr.envManager.SetIsWorkerMode(workerMode);
	    }

	    _createClass(PuzzleGame, [{
	        key: "Release",
	        value: function Release() {
	            TimeStat.reset();
	            Mgr.moduleManager.showAllModuleNewCount();
	            Mgr.Release();
	            this.curBoard = null;
	            this.eventManager = null;
	            this.scoreManager = null;
	            this.stageManager = null;
	            this.aniManager = null;
	            this.passConditionManager = null;
	            this.moduleManager = null;
	            this.stateMachine = null;
	            this.tableManager = null;
	            this.ruleManager = null;
	            this.envManager = null;
	            this.dataCollector = null;
	            this.itemManager = null;
	            this.recordManager = null;
	            this.statManager = null;
	        }

	        //加载关卡

	    }, {
	        key: "loadStage",
	        value: function loadStage(stageId, callback, errCallback) {
	            var basePath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	            this.stageManager.loadStage(stageId, function (stageData) {
	                callback && callback(stageData);
	            }, errCallback, basePath);
	        }

	        //是否node环境

	    }, {
	        key: "isNode",
	        value: function isNode() {
	            return typeof window === 'undefined' && !this.isWorkerMode();
	        }
	    }, {
	        key: "isWorkerMode",
	        value: function isWorkerMode() {
	            return this._workerMode;
	        }

	        //获取动画

	    }, {
	        key: "getAnimation",
	        value: function getAnimation() {
	            return this.aniManager.getAnimation();
	        }
	    }, {
	        key: "getAnimationNum",
	        value: function getAnimationNum() {
	            return this.aniManager.getAnimationQueue().length;
	        }
	    }, {
	        key: "getAnimationQueue",
	        value: function getAnimationQueue() {
	            return this.aniManager.getAnimationQueue();
	        }

	        //获取剩余步数

	    }, {
	        key: "getStep",
	        value: function getStep() {
	            return this.stageManager.getStep();
	        }

	        //获取胜利时的剩余步数

	    }, {
	        key: "getSuccessStep",
	        value: function getSuccessStep() {
	            return this.stageManager.getSuccessStep();
	        }

	        //获取关卡信息

	    }, {
	        key: "getStage",
	        value: function getStage(stageId) {
	            return this.stageManager.getStage(stageId);
	        }

	        //获取封装过的简单关卡信息

	    }, {
	        key: "simple_stage_info",
	        value: function simple_stage_info() {
	            return this.stageManager.simple_stage_info();
	        }

	        //获取关卡中包含的棋子类型

	    }, {
	        key: "getContainChessType",
	        value: function getContainChessType(stageId) {
	            return this.stageManager.getContainChessType(stageId);
	        }

	        //检测是否过关

	    }, {
	        key: "checkPass",
	        value: function checkPass() {
	            return this.passConditionManager.getStatus();
	        }
	    }, {
	        key: "GetSodaLine",
	        value: function GetSodaLine() {
	            return this.envManager.GetSodaLine();
	        }
	    }, {
	        key: "GetStartRow",
	        value: function GetStartRow() {
	            return this.curBoard.GetStartRow();
	        }
	    }, {
	        key: "IsSodaGame",
	        value: function IsSodaGame() {
	            return this.stageManager.IsSodaGame();
	        }

	        /**
	         * 开始运行加载过的关卡
	         * @param info --
	         * info格式: {stage_id: {id: 1, sub_id: 0}, random_seed: 123, item_id_list: []}
	         */

	    }, {
	        key: "run",
	        value: function run(info, errCallback) {
	            var _this = this;

	            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	            var basePath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	            //console.log("run puzzleGame");

	            this.loadStage(info.stage_id, function () {
	                if (_this.isSpecialStage(info.stage_id.id)) {
	                    console.log("这是一个特殊关卡");
	                    _this.envManager.isCollectSkidding = false;
	                }

	                _this.stageManager.SaveStartInfo(info);
	                _this.recordManager.SetStarInfo(info);

	                //console.log("appear_rule :" + JSON.stringify(Mgr.stageManager.data.appear_rule));
	                _this.curBoard.Initializie();
	                callback && callback();
	            }, errCallback, basePath);
	            return true;
	        }

	        //根据日志运行

	    }, {
	        key: "runWithRecord",
	        value: function runWithRecord(record) {
	            var _this2 = this;

	            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

	            //console.log("runWithRecord")
	            var info = record.start_info;

	            //console.log(JSON.stringify(info));
	            //console.log(info)
	            console.log("timePoint num is " + TimeStat.data.length);
	            console.log("random num is " + TimeStat.randNumList.length);
	            this.loadStage(info.stage_id, function () {
	                TimeStat.startPoint("一次record耗时");
	                //TimeStat.startPoint("初始化耗时");
	                _this2.stageManager.SaveStartInfo(info);
	                _this2.recordManager.SetStarInfo(info);

	                _this2.curBoard.Initializie();

	                var result = _this2.stateMachine.RunCycleReqStep(record);

	                TimeStat.endPoint();

	                console.log("runLogic Times: " + TimeStat.runLogicTimes);

	                if (result != 0) {
	                    callback(false, TimeStat.data);
	                } else {
	                    callback(true, TimeStat.data);
	                }
	            });
	        }

	        //获取玩家record数据

	    }, {
	        key: "getRecord",
	        value: function getRecord() {
	            return this.recordManager.GetRecordOut();
	        }

	        //

	    }, {
	        key: "reset",
	        value: function reset() {}

	        //停止游戏

	    }, {
	        key: "stop",
	        value: function stop() {}

	        //复活

	    }, {
	        key: "respawn",
	        value: function respawn(info) {
	            Mgr.curBoard.OnRespawn(info);
	            return true;
	        }

	        //当前输入是否有效

	    }, {
	        key: "isValidInput",
	        value: function isValidInput(input) {}

	        //用户输入

	    }, {
	        key: "input",
	        value: function input(_input) {
	            //console.log("puzzle Game input");
	            if (!this.validInput(_input)) {
	                return false;
	            }
	            return this.stateMachine.Input(_input);
	        }
	    }, {
	        key: "validInput",
	        value: function validInput(input) {
	            switch (input.op) {
	                case Modules.we4Proto.InputOp.kOpUseItem:
	                    return Mgr.itemManager.ValidItemInput(input);

	                case Modules.we4Proto.InputOp.kOpSlide:
	                    var deltaRow = Math.abs(input.from.row - input.to.row);
	                    var deltaCol = Math.abs(input.from.col - input.to.col);
	                    if (deltaRow == 0 && deltaCol == 1 || deltaRow == 1 && deltaCol == 0) {
	                        return true;
	                    }
	                default:
	                    break;
	            }

	            return false;
	        }

	        //动画数据开关

	    }, {
	        key: "enableAnimation",
	        value: function enableAnimation(flag) {}

	        //返回游戏的运行结果

	    }, {
	        key: "getGameStatus",
	        value: function getGameStatus() {
	            return Mgr.curBoard.GetGameState();
	        }

	        //继续运行游戏

	    }, {
	        key: "continue_",
	        value: function continue_() {
	            return Mgr.stateMachine.Continue();
	        }

	        //释放游戏实例

	    }, {
	        key: "release_",
	        value: function release_() {
	            Mgr.curBoard = this.curBoard = null;
	            Mgr.dataEventManager = this.eventManager = null;
	            Mgr.scoreManager = this.scoreManager = null;
	            Mgr.stageManager = this.stageManager = null;
	            Mgr.aniManager = this.aniManager = null;
	            Mgr.passConditionManager = this.passConditionManager = null;
	            Mgr.moduleManager = this.moduleManager = null;
	            Mgr.stateMachine = this.stateMachine = null;
	            Mgr.tableManager = this.tableManager = null;
	            Mgr.ruleManager = this.ruleManager = null;
	            Mgr.envManager = this.envManager = null;
	            Mgr.dataCollector = this.dataCollector = null;
	            Mgr.itemManager = this.itemManager = null;
	            Mgr.recordManager = this.recordManager = null;
	            Mgr.statManager = this.statManager = null;
	            Mgr.eventManager = null;
	            Mgr.boardViewer = null;
	        }

	        //获取运行时棋盘信息

	    }, {
	        key: "getBoardInfo",
	        value: function getBoardInfo() {}

	        //获取玩法相关数据

	    }, {
	        key: "getModuleData",
	        value: function getModuleData(module_name) {}

	        //获取游戏运行时通关条件的完成数量

	    }, {
	        key: "getPassCondition",
	        value: function getPassCondition() {}

	        /**
	         * 在棋盤上找一种可以消除的划动位置
	         * @param slide_pos : (Array)可消除的划动位置数组
	         * @param crush_pos : (Array)划动以后产生消除的位置数组
	         * @returns {boolean} :
	         */

	    }, {
	        key: "findActive",
	        value: function findActive(slide_pos, crush_pos) {
	            if (slide_pos == null) return false;
	            slide_pos = slide_pos || [];
	            crush_pos = crush_pos || [];

	            return Mgr.boardViewer.FindActiveItem(slide_pos, crush_pos);
	        }

	        /**
	         * 获取棋盘的棋格数据列表
	         * @returns {Array}
	         */

	    }, {
	        key: "getNodeDataList",
	        value: function getNodeDataList() {
	            var dataList = [];
	            //var nodeList = this.curBoard.world_board_;
	            //var size = nodeList.length;
	            //
	            //for(var i = 0; i < size; i++){
	            //    var data = null;
	            //    if(nodeList[i] && nodeList[i].IsAvailable()){
	            //        data = nodeList[i].ToNodeData();
	            //    }
	            //    dataList.push(data);
	            //}

	            //返回给ui屏幕上可见的棋盘
	            var boardViewer = Mgr.boardViewer;
	            var count = boardViewer.NodeCount();
	            for (var i = 0; i < count; i++) {
	                var node = boardViewer.GetNodeIndex(i);
	                var data = null;
	                if (node && node.IsAvailable()) {
	                    data = node.ToNodeData();
	                }
	                dataList.push(data);
	            }

	            return dataList;
	        }

	        /**
	         * 获取全局棋盘的棋格数据列表
	         * @returns {Array}
	         */

	    }, {
	        key: "getWorldNodeDataList",
	        value: function getWorldNodeDataList() {
	            var dataList = [];
	            var nodeList = this.curBoard.world_board_;
	            var size = nodeList.length;

	            for (var i = 0; i < size; i++) {
	                var data = null;
	                if (nodeList[i] && nodeList[i].IsAvailable()) {
	                    data = nodeList[i].ToNodeData();
	                }
	                dataList.push(data);
	            }

	            return dataList;
	        }

	        /**
	         * 屏幕棋格坐标转全局棋格坐标
	         * @param pos
	         * @returns {*|GridPosition}
	         * @constructor
	         */

	    }, {
	        key: "Local2World",
	        value: function Local2World(pos) {
	            return this.curBoard.Local2World(pos);
	        }

	        /**
	         * 全局棋格坐标转屏幕棋格坐标
	         * @param pos
	         * @returns {*|GridPosition}
	         * @constructor
	         */

	    }, {
	        key: "World2Local",
	        value: function World2Local(pos) {
	            return this.curBoard.World2Local(pos);
	        }

	        /**
	         * 是否是挖掘机玩法
	         * @returns {*}
	         * @constructor
	         */

	    }, {
	        key: "IsDiggerType",
	        value: function IsDiggerType() {
	            return this.stageManager.IsDiggerType();
	        }

	        /**
	         * 是否是普通挖掘机（甜甜圈）
	         * @returns {*}
	         * @constructor
	         */

	    }, {
	        key: "IsNormalDigger",
	        value: function IsNormalDigger() {
	            return this.stageManager.IsNormalDigger();
	        }

	        /**
	         * 是否是苏打挖掘机玩法
	         * @returns {*}
	         * @constructor
	         */

	    }, {
	        key: "IsSodaDigger",
	        value: function IsSodaDigger() {
	            return this.stageManager.IsSodaDigger();
	        }

	        /**
	         * 打印输入记录
	         */

	    }, {
	        key: "logInputRecord",
	        value: function logInputRecord() {
	            var record = this.getRecord();

	            console.log("Input Record:");
	            console.log("________________________________________________________________");
	            console.log("random_seed: " + record.start_info.random_seed);
	            console.log("stage_id: " + record.start_info.stage_id.id);
	            console.log("*****************************************************************");

	            var input = record.input;
	            var len = input.length;
	            for (var i = 0; i < len; i++) {
	                var item = input[i];
	                var type = item.op;
	                var fromPos = item.from;
	                var toPos = item.to;
	                var item_type = item.item_type;
	                var value1 = item.value1;
	                var value2 = item.value2;

	                console.log("input<" + (i + 1) + ">: [type:" + type + "  (" + fromPos.row + "," + fromPos.col + ")->(" + toPos.row + "," + toPos.col + ")  item_type:" + item_type + "  val1:" + value1 + "  val2:" + value2 + "]");
	            }

	            console.log("*****************************************************************");
	        }
	    }, {
	        key: "logRecordString",
	        value: function logRecordString() {
	            var record = this.getRecord();
	            var sampleRecord = {
	                start_info: record.start_info,
	                input: record.input
	            };
	            var str = JSON.stringify(sampleRecord);
	            console.log("Recrod Json String-------------------");
	            console.log(str);
	        }
	    }, {
	        key: "logFullRecordString",
	        value: function logFullRecordString() {
	            var record = this.getRecord();
	            var str = JSON.stringify(record);
	            console.log("FullRecrod Json String-------------------");
	            console.log(str);

	            this.logRandNumList();
	        }
	    }, {
	        key: "logRandNumList",
	        value: function logRandNumList() {
	            var str = JSON.stringify(TimeStat.randNumList);

	            console.log("Rand Num List -------------" + TimeStat.randNumList.length);
	            console.log(str);
	        }
	    }, {
	        key: "getChessboardLog",
	        value: function getChessboardLog() {
	            return TimeStat.randNumList;
	        }

	        /**
	         * 获取冰块小熊数据列表
	         */

	    }, {
	        key: "getCollectUnderIceList",
	        value: function getCollectUnderIceList() {
	            return module_icebear.PuzzleIceBearUtil.GetInstance().m_VecCollectUnderIce;
	        }

	        //缩放比

	    }, {
	        key: "GetScale",
	        value: function GetScale() {
	            return 8 / this.stageManager.Col();
	        }

	        //缩放时的位置调整

	    }, {
	        key: "GetScalePositionAdd",
	        value: function GetScalePositionAdd() {
	            var scale = this.GetScale();
	            if (scale >= 1.0) {
	                return { x: 0, y: 0 };
	            } else {
	                return { x: -2, y: 7 };
	            }
	        }

	        //是否特殊关卡

	    }, {
	        key: "isSpecialStage",
	        value: function isSpecialStage(stageId) {
	            var flag = false;
	            for (var i = 0; i < specialStage.length; i++) {
	                if (specialStage[i] == stageId) {
	                    flag = true;
	                    break;
	                }
	            }

	            return flag;
	        }
	    }]);

	    return PuzzleGame;
	}();

	module.exports = {
	    PuzzleGame: PuzzleGame,
	    configProto: Modules.configProto,
	    we4Proto: Modules.we4Proto,
	    weTypeModule: Modules.weTypeModule
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by billbao on 2016/10/25.
	 */

	var Modules = {
	    eventManager: __webpack_require__(8),
	    stageManager: __webpack_require__(10),
	    scoreManager: __webpack_require__(18),
	    aniManager: __webpack_require__(19),
	    passConditionManager: __webpack_require__(24),
	    recordManager: __webpack_require__(25),
	    statManager: __webpack_require__(26),
	    eventId: __webpack_require__(9),
	    configProto: __webpack_require__(12),
	    we4Proto: __webpack_require__(13),
	    weTypeModule: __webpack_require__(20)
	};

	module.exports = Modules;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by evanyuan
	 * 事件管理器
	 */

	var Config = __webpack_require__(9);

	var EventManager = function () {
		function EventManager(gameIns) {
			_classCallCheck(this, EventManager);

			this.gameIns = gameIns;
		}

		_createClass(EventManager, [{
			key: 'bind',
			value: function bind(event, fct) {
				this._events = this._events || {};
				this._events[event] = this._events[event] || [];
				this._events[event].push(fct);
				return fct;
			}
		}, {
			key: 'unbind',
			value: function unbind(event, fct) {
				this._events = this._events || {};
				if (event in this._events === false) return;
				this._events[event].splice(this._events[event].indexOf(fct), 1);
			}
		}, {
			key: 'trigger',
			value: function trigger(event /* , args... */) {
				this._events = this._events || {};
				if (event in this._events === false) return;
				for (var i = 0; i < this._events[event].length; i++) {
					this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
				}
			}

			//初始全局事件绑定

		}, {
			key: 'globalBind',
			value: function globalBind() {

				var scoreManager = this.gameIns.scoreManager;
				var passConditionManager = this.gameIns.passConditionManager;
				var aniManager = this.gameIns.aniManager;
				var stageManager = this.gameIns.stageManager;
				var statManager = this.gameIns.statManager;

				var orderModule = [scoreManager, stageManager, passConditionManager, aniManager, statManager];

				this.bind(Config.SWAP, function (data) {
					stageManager.responseEvent(Config.SWAP, data);
					aniManager.responseEvent(Config.SWAP, data);
					statManager.responseEvent(Config.SWAP, data);
				});

				this.bind(Config.END_ONE_REMOVE_ROUND, function (data) {
					aniManager.responseEvent(Config.END_ONE_REMOVE_ROUND, data);
				});

				this.bind(Config.REMOVE, function (data) {
					orderModule.forEach(function (_module) {
						_module.responseEvent(Config.REMOVE, data.data || {});
					});
				});

				this.bind(Config.DROP, function (data) {
					aniManager.responseEvent(Config.DROP, data);
				});
			}
		}]);

		return EventManager;
	}();

	module.exports = EventManager;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by evanyuan
	 * 事件相关配置
	 */

	var Config = {
		DATACHANGE: 'DATACHANGE',
		GAMESTART: 'GAMESTART',
		SWAP: 'SWAP',
		REMOVE: 'REMOVE',
		DROP: 'DROP',
		PASSCONDITION: 'PASSCONDITION',
		START_ANIMATION: "START_ANIMATION",
		ALL_ANIMATION_PLAY_COMPLETE: "ALL_ANIMATION_PLAY_COMPLETE",
		END_ONE_REMOVE_ROUND: 'END_ONE_REMOVE_ROUND',
		START_PLAY_PROP_ANIMATION: 'START_PLAY_PROP_ANIMATION',
		PROP_ANIMATION_PLAY_COMPLETE: 'PROP_ANIMATION_PLAY_COMPLETE'
	};

	module.exports = Config;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by evanyuan
	 * 关卡管理器
	 */

	var ProtoBuf = __webpack_require__(11);
	var EventId = __webpack_require__(9);
	var ConfigProto = __webpack_require__(12);
	var we4p = __webpack_require__(13);
	var Mgr = __webpack_require__(14);
	var ProtoBuilder = __webpack_require__(15);

	var StageLoaded = {};

	var useTestStage = false;

	var testStage = {
	    "game_id": 1,
	    "cursh_method": 1,
	    "puzzle_purpose": 1,
	    "puzzle_stage": 1,
	    "puzzle_ver": 0,
	    "puzzle_degree": 1,
	    "play_type": 1,
	    "step_num": 15,
	    "time_num": 60,
	    "board_row": 8,
	    "board_col": 8,
	    "chess_color": 5,
	    "onestar_score": 1500,
	    "twostar_score": 7500,
	    "threestar_score": 15000,
	    "puzzle_desc": [],
	    "pass_condition": [{
	        "cond_type": 1,
	        "cond_data1": 1500,
	        "cond_data2": null
	    }, {
	        "cond_type": 3,
	        "cond_data1": 15,
	        "cond_data2": null
	    }],
	    "board_grid": [{
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }, {
	            "element_id": 1010,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4011,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }, {
	            "element_id": 1010,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }, {
	            "element_id": 1010,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }, {
	            "element_id": 1010,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }, {
	            "element_id": 1010,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }, {
	            "element_id": 1010,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4501,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4501,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4011,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 4018,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }, {
	        "one_grid": [{
	            "element_id": 1,
	            "element_data1": null,
	            "element_data2": null,
	            "element_data3": null
	        }]
	    }],
	    "appear_rule": [],
	    "word_to_user": "",
	    "modify_username": "kratosli"
	};

	var StageManager = function () {
	    function StageManager(gameIns) {
	        _classCallCheck(this, StageManager);

	        this.gameIns = gameIns;
	        this.data = {};
	        this.step = 0;
	        this.step_success = 0;

	        //关卡信息
	        this.simple_stage_info_ = new we4p.SimpleStageInfo();
	        // 开局信息
	        this.start_info_ = new we4p.StartInfo();
	        // 除了滑动以外, 额外消耗的步数, 比如lastpang
	        this.extra_used_step_ = 0;
	    }

	    _createClass(StageManager, [{
	        key: 'init',
	        value: function init() {
	            this.step = this.data.step_num;
	            this.condition = this.data.pass_condition;
	            this.parseInternal();
	        }
	    }, {
	        key: 'Decode',
	        value: function Decode() {
	            var max_col = this.data.board_col;
	            var row = 0;
	            var col = 0;

	            var glassCount = 0;
	            var boardViewer = Mgr.worldViewer;
	            var board_grids = this.data.board_grid;
	            var size = board_grids.length;
	            for (var i = 0; i < size; i++) {
	                var grid = board_grids[i];
	                row = Math.floor(i / max_col);
	                col = i % max_col;
	                var node = boardViewer.GetNode(row, col);
	                if (node == null) continue;

	                var one_grid = grid.one_grid;
	                var one_grid_size = one_grid.length;
	                for (var j = 0; j < one_grid_size; j++) {
	                    var elem = one_grid[j];
	                    node.AddChessByElement(elem);
	                    var desc = Mgr.tableManager.ElementToChess(elem);
	                    if (desc.type == we4p.ChessType.STIT_BLUEBERRY) {
	                        glassCount++;
	                    }
	                }
	            }
	            if (glassCount) {
	                Mgr.passConditionManager.initGLassCount(glassCount);
	            }

	            return true;
	        }
	    }, {
	        key: 'SaveStartInfo',
	        value: function SaveStartInfo(info) {
	            this.start_info_ = info;
	        }
	    }, {
	        key: 'start_info',
	        value: function start_info() {
	            return this.start_info_;
	        }

	        // 获取棋盘配置的原始数据

	    }, {
	        key: 'config',
	        value: function config() {
	            return this.data;
	        }

	        // 棋盘行列

	    }, {
	        key: 'Row',
	        value: function Row() {
	            return this.data.board_row;
	        }
	    }, {
	        key: 'Col',
	        value: function Col() {
	            return this.data.board_col;
	        }
	    }, {
	        key: 'ScreenRow',
	        value: function ScreenRow() {
	            return this.simple_stage_info_.screen_row;
	        }
	    }, {
	        key: 'ScreenCol',
	        value: function ScreenCol() {
	            return this.simple_stage_info_.screen_col;
	        }

	        // 棋盘棋子颜色种类

	    }, {
	        key: 'MaxColorCount',
	        value: function MaxColorCount() {
	            return this.data.chess_color;
	        }

	        // 简单关卡信息
	        // 用于大地图和开局前的信息展示

	    }, {
	        key: 'simple_stage_info',
	        value: function simple_stage_info() {
	            return this.simple_stage_info_;
	        }
	    }, {
	        key: 'parseInternal',
	        value: function parseInternal() {
	            // 填充简单关卡信息
	            this.simple_stage_info_.board_row = this.data.board_row;
	            this.simple_stage_info_.board_col = this.data.board_col;
	            this.simple_stage_info_.color_num = this.data.chess_color;
	            this.simple_stage_info_.screen_row = this.data.board_col;
	            this.simple_stage_info_.screen_col = this.data.board_col;
	            this.simple_stage_info_.time_limit = this.data.time_num;
	            this.simple_stage_info_.step_limit = this.data.step_num;
	            this.simple_stage_info_.play_type = this.data.play_type;
	            this.simple_stage_info_.puzzle_stage = this.data.puzzle_stage;

	            // 分数
	            this.simple_stage_info_.star_score = [this.data.onestar_score, this.data.twostar_score, this.data.threestar_score];

	            // 通关条件
	            this.simple_stage_info_.pass_condition = this.gameIns.passConditionManager.parsePassCondition(this.data);

	            //解析棋盘描述
	            this.fillSimpleInfoWidthDesc();
	        }
	    }, {
	        key: 'fillSimpleInfoWidthDesc',
	        value: function fillSimpleInfoWidthDesc() {
	            if (this.data.puzzle_desc && this.data.puzzle_desc.length) {
	                for (var i = 0, item; item = this.data.puzzle_desc[i]; i++) {
	                    if (item.desc_type == ConfigProto.DESC_TYPE.DESC_NEW_GUILD) {
	                        this.simple_stage_info_.newbie_id = item.desc_data1;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'responseEvent',
	        value: function responseEvent(type, data) {
	            if (type == EventId.SWAP) {
	                if (data.result == 3 && !data.item) {
	                    this.reduceStep(1);
	                }
	            }
	        }
	    }, {
	        key: 'IsDiggerType',
	        value: function IsDiggerType() {
	            var type = this.data.play_type;

	            if (ConfigProto.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_SODA == type || ConfigProto.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_MOSHING == type || ConfigProto.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_ONEBYONE == type) return true;

	            return false;
	        }
	    }, {
	        key: 'IsStoneDigger',
	        value: function IsStoneDigger() {
	            return this.data.play_type == ConfigProto.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_ONEBYONE;
	        }
	    }, {
	        key: 'IsNormalDigger',
	        value: function IsNormalDigger() {
	            return this.data.play_type == ConfigProto.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_MOSHING;
	        }
	    }, {
	        key: 'IsSodaGame',
	        value: function IsSodaGame() {
	            return this.data.play_type == ConfigProto.PUZZLE_PLAYTYPE.PLAY_TYPE_SODA || this.data.play_type == ConfigProto.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_SODA;
	        }
	    }, {
	        key: 'IsSodaDigger',
	        value: function IsSodaDigger() {
	            return this.data.play_type == ConfigProto.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_SODA;
	        }
	    }, {
	        key: 'PlayType',
	        value: function PlayType() {
	            return this.data.play_type;
	        }
	    }, {
	        key: 'GetDescValue',
	        value: function GetDescValue(type) {
	            var repeated_desc = this.data.puzzle_desc;
	            var len = repeated_desc.length;
	            for (var i = 0; i < len; i++) {
	                var item = repeated_desc[i];
	                if (item.desc_type == type) return item.desc_data1;
	            }
	            return -1;
	        }
	    }, {
	        key: 'loadStage',
	        value: function loadStage(stageId) {
	            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (p) {};

	            var _this = this;

	            var errCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
	            var basePath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;


	            var stageKey = stageId.id + '_' + stageId.sub_id;

	            console.log("loadStage " + stageKey);

	            var _cb = function _cb(data) {
	                _this.data = data;
	                StageLoaded[stageKey] = _this.data;
	                _this.init();

	                callback && callback(_this.data);
	            };

	            if (useTestStage) {
	                _cb(testStage);
	            } else if (StageLoaded[stageKey]) {
	                _cb(StageLoaded[stageKey]);
	            } else {

	                if (this.gameIns.isNode()) {
	                    //console.log("node");

	                    var Message = ProtoBuilder.PuzzleConfig;

	                    /*let http = require('http');
	                    http.get('http://h5game.qq.com/hpang/config/stage/' + this.getStageFileName(stageId), function(res) {
	                        let data = [];
	                        res.on("data", function(chunk) {
	                            data.push(chunk);
	                        });
	                        res.on("end", function() {
	                            data = Buffer.concat(data);
	                            let msg = Message.decode(data);
	                            _cb(msg);
	                        });
	                    });*/
	                    var path = __webpack_require__(16);
	                    // var getStagePath = function(){
	                    //     return path.resolve(__dirname,'../../../design/res/StageData/Normal')
	                    // }
	                    var fs = __webpack_require__(17);
	                    var stagePath = getStagePath && getStagePath() || '';
	                    var pbBinPath = path.resolve(stagePath, this.getStageFileName(stageId));

	                    var readStream = fs.createReadStream(pbBinPath);
	                    var data = [];
	                    // console.log('pbBinPath',pbBinPath)
	                    readStream.on('data', function (chunk) {
	                        data.push(chunk);
	                    }).on('end', function () {
	                        data = Buffer.concat(data);
	                        var msg = Message.decode(data);
	                        _cb(msg);
	                        //console.log(JSON.stringify(msg, null, 4));
	                    });
	                } else {
	                    var retryCount = 5;
	                    var reloadCount = 0;
	                    var reloadStage = function reloadStage() {
	                        if (reloadCount < retryCount) {
	                            reloadCount++;
	                            setTimeout(function () {
	                                _loadClientStage2();
	                            }, 1000);
	                        } else {
	                            errCallback && errCallback();
	                        }
	                    };

	                    var _loadClientStage2 = function _loadClientStage2() {
	                        var baseCdnPath = basePath ? basePath : '../';
	                        var configPath = baseCdnPath + 'config/stage/';
	                        var Message = ProtoBuilder.PuzzleConfig;
	                        var xhr = ProtoBuf.Util.XHR();
	                        xhr.open("GET", configPath + _this.getStageFileName(stageId), true);
	                        xhr.responseType = "arraybuffer";
	                        xhr.onload = function (evt) {
	                            try {
	                                var msg = Message.decode(xhr.response);
	                                _cb(msg);
	                            } catch (e) {
	                                if (Mgr.envManager.GetIsWorkerMode()) {
	                                    postMessage({
	                                        msg: "LogPanel",
	                                        data: "Stage parse failed"
	                                    });
	                                } else {
	                                    typeof LogPanel != 'undefined' && LogPanel.addInfo('Stage parse failed');
	                                }
	                                console.log("Stage parse failed");
	                                reloadStage();
	                            }
	                        };
	                        xhr.onerror = function (evt) {
	                            console.log("xhr.onerror");
	                            reloadStage();
	                        };

	                        xhr.send(null);
	                    };

	                    _loadClientStage2();
	                }
	            }
	        }
	    }, {
	        key: 'getFragmentName',
	        value: function getFragmentName(num) {
	            var fileName = [0, 0, 0, 0];
	            num = num.toString().split('');
	            var len = num.length;

	            for (var i = 0; i < len; i++) {
	                var idx = fileName.length - (i + 1);
	                var pop = num.pop();

	                if (idx >= 0) {
	                    fileName[idx] = pop;
	                } else {
	                    fileName.unshift(pop);
	                }
	            }

	            return fileName.join('');
	        }
	    }, {
	        key: 'getStageFileName',
	        value: function getStageFileName(stageId) {
	            var id = this.getFragmentName(stageId.id);
	            var subId = this.getFragmentName(stageId.sub_id);
	            return 'stage_' + id + '_' + subId + '.bin';
	            //return "stage_0217_0000.bin";
	        }
	    }, {
	        key: 'getStage',
	        value: function getStage(stageId) {
	            if (stageId) {
	                var stageKey = stageId.id + '_' + stageId.sub_id;
	                return StageLoaded[stageKey];
	            } else {
	                return this.data;
	            }
	        }
	    }, {
	        key: 'getContainChessType',
	        value: function getContainChessType(stageId) {
	            var chessType = {};
	            var data = this.getStage(stageId);
	            var board_grids = data.board_grid;
	            var size = board_grids.length;
	            for (var i = 0; i < size; i++) {
	                var grid = board_grids[i];
	                var one_grid = grid.one_grid;
	                var one_grid_size = one_grid.length;
	                for (var j = 0; j < one_grid_size; j++) {
	                    var elem = one_grid[j];
	                    var desc = Mgr.tableManager.ElementToChess(elem);
	                    if (desc && desc.type) {
	                        var _type = desc.type;
	                        if (chessType[_type] == undefined) {
	                            chessType[_type] = 1;
	                        } else {
	                            chessType[_type] += 1;
	                        }
	                    }
	                }
	            }

	            for (var i = 0; i < data.pass_condition.length; i++) {
	                var item = data.pass_condition[i];
	                if (item.cond_type == ConfigProto.PASS_CONDITION_TYPE.PASS_CONDITION_AIBAO) {
	                    chessType[we4p.ChessType.STIT_ICE_BEAR_UNDER] = 1;
	                }
	            }

	            return chessType;
	        }
	    }, {
	        key: 'RecordSuccessStep',
	        value: function RecordSuccessStep() {
	            this.step_success = 0 + this.step;
	            if (Mgr.envManager.GetIsWorkerMode()) {
	                postMessage({
	                    msg: "UpdateData",
	                    data: [{
	                        key: "getSuccessStep",
	                        data: this.step_success
	                    }]
	                });
	            }
	        }
	    }, {
	        key: 'getSuccessStep',
	        value: function getSuccessStep() {
	            return this.step_success;
	        }
	    }, {
	        key: 'getStep',
	        value: function getStep() {
	            return this.step;
	        }
	    }, {
	        key: 'addStep',
	        value: function addStep(num) {
	            this.step += num;
	        }
	    }, {
	        key: 'reduceStep',
	        value: function reduceStep(num) {
	            this.step -= num;
	        }
	    }, {
	        key: 'GetMaxStep',
	        value: function GetMaxStep() {
	            return this.data.step_num + Mgr.envManager.GetAdditionSteps();
	        }
	    }, {
	        key: 'GetRemainStep',
	        value: function GetRemainStep() {
	            return this.step;
	        }
	    }, {
	        key: 'AddMaxStep',
	        value: function AddMaxStep(add) {
	            Mgr.envManager.SetAdditionSteps(Mgr.envManager.GetAdditionSteps() + add);
	        }
	    }, {
	        key: 'ConsumeStep',
	        value: function ConsumeStep(num) {
	            this.extra_used_step_ += num;
	            this.reduceStep(num);
	        }
	    }, {
	        key: 'OnRespawn',
	        value: function OnRespawn() {
	            // 复活后, 最大步数+5
	            this.AddMaxStep(5 + Mgr.envManager.GetPetTalentRespawnAddSteps());
	            this.addStep(5 + Mgr.envManager.GetPetTalentRespawnAddSteps());
	            Mgr.aniManager.GenerateAddFiveStepAnimation();
	            // 更新简单关卡信息
	            this.simple_stage_info_.set_step_limit = this.GetMaxStep();

	            //// 更新通关条件
	            //we4::PassCondition *pass = simple_stage_info_.mutable_pass_condition();
	            //for (int i = 0; i < pass->data_size(); i++) {
	            //    we4::PassConditionData *data = pass->mutable_data(i);
	            //    if (data->pass_type() == we4::kPassCondLimitedStep) {
	            //            data->set_value1(GetMaxStep());
	            //        continue;
	            //    }
	            //    if (data->pass_type() == we4::kPassCondAllStep) {
	            //            data->set_value1(GetMaxStep());
	            //        continue;
	            //    }
	            //}
	        }
	    }]);

	    return StageManager;
	}();

	module.exports = StageManager;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by brandyxie
	 * config
	 */

	/**
	 *enum枚举定义 Start---------------------------------------------
	 */

	//游戏的ID
	var PUZZLE_GAME_ID = {
	    //无效描述
	    GAME_ID_INVALID: 0,
	    //微胖的4变形
	    GAME_ID_WEPANG: 1,
	    //游戏ID数组长度，如果增加了GAME ID，请递增，
	    GAME_ID_ARRAY_LEN: 3
	};

	//消除方式
	var PUZZLE_CRUSH_METHOD = {
	    //消除方式
	    CRUSH_METHOD_INVALID: 0,
	    //3消消除
	    CRUSH_METHOD_3_MATCH: 1,
	    //点击消除
	    CRUSH_METHOD_TOUCH: 2,
	    //连线消除
	    CRUSH_METHOD_LINECONNECTION: 3
	};

	//关卡用途
	var PUZZLE_PURPOSE = {
	    //无效
	    PUZZLE_PURPOSE_INVALID: 0,
	    //普通
	    PUZZLE_PURPOSE_NORMAL: 1,
	    //活动
	    PUZZLE_PURPOSE_ACTIVITY: 2,
	    //周赛
	    PUZZLE_PURPOSE_WEEKLY: 3
	};

	//玩法
	var PUZZLE_PLAYTYPE = {
	    //玩法，无
	    PLAYTYPE_INVALID: 0,
	    //玩法，限制步
	    PLAYTYPE_LIMITED_STEP: 1,
	    //玩法，步数走完，主要用于新手
	    NOUSE_PLAYTYPE_STEP_OVER: 2,
	    //玩法限制时间
	    PLAYTYPE_LIMITED_TIME: 3,
	    ///SODA
	    PLAY_TYPE_SODA: 4,
	    ///挖掘机，类似MOSHING,甜甜圈的关卡
	    PLAY_TYPE_DIGGER_MOSHING: 5,
	    ///SODA 挖掘
	    PLAY_TYPE_DIGGER_SODA: 6,
	    ///新挖掘机，类似开心消消乐，放云朵的关
	    PLAY_TYPE_DIGGER_ONEBYONE: 7,
	    ///周赛2：送宠物回
	    PLAY_TYPE_WEEKLY2_PETS_GO_HOME: 8,
	    ///周赛3：AI 对战，ALPHA GO
	    PLAY_TYPE_WEEKLY3_AI_ALPHAGO: 9,
	    ///周赛1：打一个BOSS
	    PLAY_TYPE_WEEKLY1_KO_BOSS: 10
	};

	//对于棋盘的补充描述，不是每个棋局都有的部分，
	//描述类型
	var DESC_TYPE = {
	    //无效描述
	    DESC_INVALID: 0,
	    //BOSS ID
	    NOUSE_DESC_BOSS_ID: 1,
	    //BOSS的血
	    NOUSE_DESC_BOSS_BLOOD: 2,
	    //新手引导
	    DESC_NEW_GUILD: 3,

	    //SODA水线
	    DESC_SODA_LINE: 4,

	    //如果分屏显示，在行上使用多少分屏
	    DESC_SCREEN_ROW: 5,
	    //如果分屏显示，在列上使用多少分屏
	    DESC_SCREEN_COL: 6,

	    //周赛BOSS的血，目前主要用于周赛
	    DESC_WEEKLY_BOSS_BLOOD: 7,

	    //随机冰熊小的数量
	    DESC_ICE_BEAR_LITTLE_NUM: 10,
	    //随机冰熊中的数量
	    DESC_ICE_BEAR_MIDDLE_NUM: 11,
	    //随机冰熊大的数量
	    DESC_ICE_BEAR_BIG_NUM: 12,

	    //第三代的周赛的AI智商，阿尔法狗的智商
	    DESC_WEELY_AI_INTELLIGENCE: 13,

	    //随机布置位置3节毛毛虫的数量
	    DESC_3_PIECE_MAOMAOCHONG: 15,
	    //随机布置位置4节毛毛虫的数量
	    DESC_4_PIECE_MAOMAOCHONG: 16,
	    //随机布置位置5节毛毛虫的数量
	    DESC_5_PIECE_MAOMAOCHONG: 17,
	    //随机布置位置6节毛毛虫的数量
	    DESC_6_PIECE_MAOMAOCHONG: 18,
	    //是否有个新的玩法
	    DESC_NEW_PLAYING: 19,
	    //强制指定棋盘掉落颜色，不再让程序自动选择，自动选择:比如5种，最后2种不选择。而手动强制制定，就指明5种颜色
	    DESC_FORCE_SPECIFY_CHESS_COLOR: 20,
	    //孵化蛋的优先概率孵化点的棋子落下概率，
	    DESC_EGG_NEST_SPECIFY_GRID_PRIOR_PROBABILITY: 21,

	    //万能孵化蛋的高概率区的棋子掉落概率
	    DESC_POWERFUL_EGG_NEST_SPECIFY_GRID_PRIOR_PROBABILITY: 22,

	    //和外部BOSS欢快的玩耍的小动物
	    DESC_OUTSIDE_MONSTER_PK_PET: 23
	};

	//通关完成条件类型
	var PASS_CONDITION_TYPE = {
	    //收集无效
	    PASS_CONDITION_INVALID: 0,

	    //分数条件，算一个内部条件
	    PASS_CONDITION_SCORE: 1,
	    //打败BOSS，算一个内部条件
	    PASS_CONDITION_BOSS: 2,
	    //完成条件，步数走完
	    PASS_CONDITION_STEP_OVER: 3,

	    //收集掉落物，气球
	    PASS_CONDITION_COLLECT_BALLOON: 10,
	    //收集糖果
	    PASS_CONDITION_COLLECT_CANDY: 11,
	    //收集晴天娃娃
	    PASS_CONDITION_COLLECT_SUNNY_DOLL: 12,

	    //收集棋子黄
	    PASS_CONDITION_COLLECT_NORMAL_1: 21,
	    //收集棋子红
	    PASS_CONDITION_COLLECT_NORMAL_2: 22,
	    //收集棋子棕
	    PASS_CONDITION_COLLECT_NORMAL_3: 23,
	    //收集棋子绿
	    PASS_CONDITION_COLLECT_NORMAL_4: 24,
	    //收集棋子蓝
	    PASS_CONDITION_COLLECT_NORMAL_5: 25,
	    //收集棋子紫
	    PASS_CONDITION_COLLECT_NORMAL_6: 26,
	    //收集棋子白
	    PASS_CONDITION_COLLECT_NORMAL_7: 27,

	    //收集4消生成的任意颜色冲击波
	    PASS_CONDITION_COLLECT_QIZI_SHOCKWAVE: 30,
	    //收集5消生成的任意颜色爆炸棋子
	    PASS_CONDITION_COLLECT_QIZI_BLAST: 31,
	    //收集5消产生的幽灵
	    PASS_CONDITION_COLLECT_QIZI_GHOST: 32,

	    //收集冰块
	    PASS_CONDITION_COLLECT_BOTTOM_ICE: 40,
	    //收集木箱子
	    PASS_CONDITION_COLLECT_WOODENBOX: 41,
	    //生成草地
	    PASS_CONDITION_GENERATE_GRASS: 42,
	    //解救阿宝
	    PASS_CONDITION_AIBAO: 43,
	    //收集汽水瓶
	    PASS_CONDITION_SODA_QIZI: 44,
	    //消灭毛球
	    PASS_CONDITION_WIPEOUT_MAOQIU: 45,
	    //收集糖果纸
	    PASS_CONDITION_COLLECT_PAPER: 46,
	    //收集云朵中的宝石
	    PASS_CONDITION_COLLECT_CLOUD_JEWEL: 47,
	    //收集云朵中的红包
	    PASS_CONDITION_COLLECT_CLOUD_REDPACKET: 48,
	    //收集四叶草
	    PASS_CONDITION_COLLECT_4COLOR_CLOVER: 49,
	    //搜集5片花瓣的花
	    PASS_CONDITION_COLLECT_5COLOR_FLOWER: 50,

	    //搜集波波头
	    PASS_CONDITION_COLLECT_BOBOTOU: 51,
	    //收集樱花
	    PASS_CONDITION_COLLECT_YINGHUA: 52,
	    //收集毛毛虫
	    PASS_CONDITION_COLLECT_MAOMAOCHONG: 53,
	    //收集铃铛棋子
	    PASS_CONDITION_COLLECT_JINGLE_BELL: 54,
	    //收集老鹰抓小鸡的小鸡
	    PASS_CONDITION_COLLECT_HAWK_AND_CHICKEN_CHICKEN: 55,
	    //完成铺路机铺路数量
	    PASS_CONDITION_PAVER_PATH: 56,
	    //消灭大蘑菇
	    PASS_CONDITION_ELIMINATE_MUSHROOM_BIG: 57,
	    //收集甜甜圈
	    PASS_CONDITION_COLLECT_DOUGHNUT: 58,
	    //收集星星罐的星星
	    PASS_CONDITION_COLLECT_STAR_TANK_STAR: 59,
	    //摧毁泡沫枪
	    PASS_CONDITION_ELIMINATE_FOAM_GUN: 60,
	    //收集太阳罐的太阳
	    PASS_CONDITION_COLLECT_SUN_TANK_SUN: 61,

	    //摧毁WE6的大BOSS
	    PASS_CONDITION_ELIMINATE_WE6_HEXAGON_MONSTER: 62,

	    //
	    PASS_CONDITION_ELIMINATE_WEP_SQUARE_MONSTER_STAGE: 63,
	    //
	    PASS_CONDITION_ELIMINATE_WEP_SQUARE_MONSTER_WEEKLY: 64,
	    //
	    PASS_CONDITION_ELIMINATE_WEP_SQUARE_SONW_MONSTER: 65,

	    //收集金币，
	    PASS_CONDITION_COLLECT_GOLD_COIN: 66,

	    //摧毁盾牌
	    PASS_CONDITION_ELIMINATE_SHIELD: 67
	};

	var GRID_ELEMENT_ID = {
	    ELEMENT_ID_INVALID: 0,
	    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	    //棋格,可以容纳其他棋子  0001-0999
	    ///镂空格子，不能棋子
	    ELEMENT_QIGE_NULL: 1,

	    //容器格子，没用实用，非NULL就是容器
	    ELEMENT_QIGE_CONTAINER: 2,
	    //棋格,编辑器显示使用
	    ELEMENT_QIGE_CONTAINER_1: 3,
	    ELEMENT_QIGE_CONTAINER_2: 4,

	    //水线，显示作用,编辑器显示使用
	    ELEMENT_QIGE_SODALINE: 6,
	    //棋格,水线以下,可以容纳其他棋子,编辑器显示使用
	    ELEMENT_QIGE_SODALINE_1: 7,
	    ELEMENT_QIGE_SODALINE_2: 8,

	    //清理棋格，小泽希望增加，本着满足群众需求的目的增加
	    ELEMENT_QIGE_CLEAR: 100,

	    //结束标识
	    ELEMENT_QIGE_END: 199,
	    //============================================================================================
	    //（棋格附加的）功能  1001-1999，功能如果不够可以前移很多
	    //开始标识
	    ELEMENT_GONGNENG_BEGIN: 1000,

	    //虫洞出
	    ELEMENT_GONGNENG_WORMHOLE_START: 1001,
	    //虫洞入
	    ELEMENT_GONGNENG_WORMHOLE_END: 1002,

	    ///栅栏右上
	    ELEMENT_GONGNENG_BARRIER_RIGHTUP: 1003,
	    //栅栏右下
	    ELEMENT_GONGNENG_BARRIER_RIGHTDOWN: 1004,
	    ///栅栏下
	    ELEMENT_GONGNENG_BARRIER_DOWN: 1005,
	    ///栅栏右
	    ELEMENT_GONGNENG_BARRIER_RIGHT: 1006,

	    //隧道出口，一个看上去是虫洞，但可能不显示的东西，必须配置在同一行
	    ELEMENT_GONGNENG_VERTICAL_TUNNEL_START: 1007,
	    //隧道入口，一个看上去是虫洞，但可能不显示的东西，必须配置在同一行
	    ELEMENT_GONGNENG_VERTICAL_TUNNEL_END: 1008,

	    ///棋子下落点
	    ELEMENT_GONGNENG_DROPPIONT_NORMAL: 1010,
	    ///特殊物品的下落点
	    ELEMENT_GONGNENG_DROPPIONT_SPECIAL: 1011,
	    //SODA玩法中的上浮点
	    ELEMENT_GONGNENG_APPEARPIONT_UP: 1012,
	    //概率掉落的下落点，其实就是个显示，目前所有的掉落点都可以配置概率掉落,
	    ELEMENT_GONGNENG_DROPPIONT_VALVEGATE: 1013,
	    //概率掉落的上浮点，其实就是个显示，目前所有的掉落点都可以配置概率掉落,
	    ELEMENT_GONGNENG_APPEARPIONT_UP_VALVEGATE: 1014,

	    //搜集点.汽球
	    ELEMENT_GONGNENG_COLLECTPIONT_BALLOON: 1020,
	    //搜集点.糖果
	    ELEMENT_GONGNENG_COLLECTPIONT_SUGAR: 1021,
	    //搜集点.水下
	    ELEMENT_GONGNENG_COLLECTPIONT_SODA: 1022,

	    //草榴元素，致敬
	    ELEMENT_GONGNENG_COLLECTPIONT_CAOLIU: 1024,

	    ///翻板正面
	    ELEMENT_GONGNENG_TRAPDOOR_FRONT: 1030,
	    ///翻板反面
	    ELEMENT_GONGNENG_TRAPDOOR_BACK: 1031,

	    //交换黑洞队列，
	    ELEMENT_GONGNENG_BLACKHOLE_ARRAY: 1032,

	    ///毛毛虫接小虫，
	    ELEMENT_GONGNENG_MAOMAOCHONG: 1040,

	    //传送带
	    ELEMENT_GONGNENG_CONVEYOR: 1060,
	    //传送带的显示图标
	    ELEMENT_GONGNENG_CONVEYOR_UP: 1061,
	    ELEMENT_GONGNENG_CONVEYOR_DOWN: 1062,
	    ELEMENT_GONGNENG_CONVEYOR_RIGHT: 1063,
	    ELEMENT_GONGNENG_CONVEYOR_LEFT: 1064,
	    ELEMENT_GONGNENG_CONVEYOR_UP_RIGHT: 1065,
	    ELEMENT_GONGNENG_CONVEYOR_DOWN_RIGHT: 1066,
	    ELEMENT_GONGNENG_CONVEYOR_UP_LEFT: 1067,
	    ELEMENT_GONGNENG_CONVEYOR_DOWN_LEFT: 1068,

	    //宠物回家的路径
	    ELEMENT_GONGNENG_GOHOME_PATH: 1080,

	    //铺路机的路径
	    ELEMENT_GONGNENG_PAVER_PATH: 1100,

	    //结束标识
	    ELEMENT_GONGNENG_END: 1999,

	    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	    //棋子底部（的功能）  2001-2999
	    //开始标识
	    ELEMENT_QIDI_BEGIN: 2000,
	    //草地
	    ELEMENT_QIDI_GRASSLAND: 2001,
	    //枯草地
	    ELEMENT_QIDI_WITHERED_GRASS: 2002,

	    //棋子底部的冰层，1-5级别
	    ELEMENT_QIDI_ICE_1L: 2005,
	    ELEMENT_QIDI_ICE_2L: 2006,
	    ELEMENT_QIDI_ICE_3L: 2007,
	    ELEMENT_QIDI_ICE_4L: 2008,
	    ELEMENT_QIDI_ICE_5L: 2009,

	    //阿宝，
	    ELEMENT_QIDI_ABAO: 2010,
	    //阿宝，小，2X1
	    ELEMENT_QIDI_ABAO_LITTLE: 2011,
	    //阿宝，中，2X3
	    ELEMENT_QIDI_ABAO_MIDDLE: 2012,
	    //阿宝, 大，3X4
	    ELEMENT_QIDI_ABAO_BIG: 2013,

	    //蜂蜜
	    ELEMENT_QIDI_HONEY: 2020,

	    //结束标识
	    ELEMENT_QIDI_END: 2999,

	    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	    //棋子表面（的功能）  3001-3999
	    //开始标识
	    ELEMENT_QIMIAN_BEGIN: 3000,
	    ///牢笼,1-5级别
	    ELEMENT_QIMIAN_CAGE_1L: 3005,
	    ELEMENT_QIMIAN_CAGE_2L: 3006,
	    ELEMENT_QIMIAN_CAGE_3L: 3007,
	    ELEMENT_QIMIAN_CAGE_4L: 3008,
	    ELEMENT_QIMIAN_CAGE_5L: 3009,

	    ///糖果纸。1-5级别
	    ELEMENT_QIMIAN_PAPER_1L: 3010,
	    ELEMENT_QIMIAN_PAPER_2L: 3011,
	    ELEMENT_QIMIAN_PAPER_3L: 3012,
	    ELEMENT_QIMIAN_PAPER_4L: 3013,
	    ELEMENT_QIMIAN_PAPER_5L: 3014,

	    ///毛球，1-5级别
	    ELEMENT_QIMIAN_MAOQIU_1L: 3015,
	    ELEMENT_QIMIAN_MAOQIU_2L: 3016,
	    ELEMENT_QIMIAN_MAOQIU_3L: 3017,
	    ELEMENT_QIMIAN_MAOQIU_4L: 3018,
	    ELEMENT_QIMIAN_MAOQIU_5L: 3019,

	    //泡沫，射出去的泡沫
	    ELEMENT_QIMIAN_FOAM: 3020,
	    //蜗牛的便便轨迹
	    ELEMENT_QIMIAN_SNAIL_POO: 3021,

	    //蜗牛
	    ELEMENT_QIMIAN_SNAIL: 3030,
	    //蜗牛若干个方向
	    ELEMENT_QIMIAN_SNAIL_LEFT: 3031,
	    ELEMENT_QIMIAN_SNAIL_RIGHT: 3032,
	    ELEMENT_QIMIAN_SNAIL_UP: 3033,
	    ELEMENT_QIMIAN_SNAIL_DOWN: 3034,
	    ELEMENT_QIMIAN_SNAIL_LEFTUP: 3035,
	    ELEMENT_QIMIAN_SNAIL_LEFTDOWN: 3036,
	    ELEMENT_QIMIAN_SNAIL_RIGHTUP: 3037,
	    ELEMENT_QIMIAN_SNAIL_RIGHTDOWN: 3038,

	    //结束标识
	    ELEMENT_QIMIAN_END: 3999,

	    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	    //棋子  4000-9999
	    //开始标识
	    ELEMENT_QIZI_BEGIN: 4000,

	    //所有多个颜色序列的棋子，枚举ID尾数都从0开始 ,尾数1-7表示各种颜色，尾数8表示随机，
	    //普通棋子，后缀1-7是颜色棋子，8是随机颜色棋子，随机颜色棋子在开局使用
	    ELEMENT_QIZI_NORMAL: 4010,
	    ELEMENT_QIZI_NORMAL_1: 4011,
	    ELEMENT_QIZI_NORMAL_2: 4012,
	    ELEMENT_QIZI_NORMAL_3: 4013,
	    ELEMENT_QIZI_NORMAL_4: 4014,
	    ELEMENT_QIZI_NORMAL_5: 4015,
	    ELEMENT_QIZI_NORMAL_6: 4016,
	    ELEMENT_QIZI_NORMAL_7: 4017,
	    ELEMENT_QIZI_NORMAL_RANDOM: 4018,

	    //竖向上下冲击波，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_SHOCKWAVE_UP_DOWN: 4020,
	    ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_1: 4021,
	    ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_2: 4022,
	    ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_3: 4023,
	    ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_4: 4024,
	    ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_5: 4025,
	    ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_6: 4026,
	    ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_7: 4027,
	    ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_RANDOM: 4028,

	    //Wepeng:横向左右冲击波，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT: 4030,
	    ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_1: 4031,
	    ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_2: 4032,
	    ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_3: 4033,
	    ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_4: 4034,
	    ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_5: 4035,
	    ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_6: 4036,
	    ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_7: 4037,
	    ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_RANDOM: 4038,

	    //左上，右下冲击波，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN: 4040,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_1: 4041,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_2: 4042,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_3: 4043,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_4: 4044,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_5: 4045,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_6: 4046,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_7: 4047,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_RANDOM: 4048,

	    //左下，右上冲击波，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP: 4050,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_1: 4051,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_2: 4052,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_3: 4053,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_4: 4054,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_5: 4055,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_6: 4056,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_7: 4057,
	    ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_RANDOM: 4058,

	    //Wepeng:旋风爆炸棋子，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_BLAST_CYCLONE: 4060,
	    ELEMENT_QIZI_BLAST_CYCLONE_1: 4061,
	    ELEMENT_QIZI_BLAST_CYCLONE_2: 4062,
	    ELEMENT_QIZI_BLAST_CYCLONE_3: 4063,
	    ELEMENT_QIZI_BLAST_CYCLONE_4: 4064,
	    ELEMENT_QIZI_BLAST_CYCLONE_5: 4065,
	    ELEMENT_QIZI_BLAST_CYCLONE_6: 4066,
	    ELEMENT_QIZI_BLAST_CYCLONE_7: 4067,
	    ELEMENT_QIZI_BLAST_CYCLONE_RANDOM: 4068,

	    //三角爆炸棋子，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_BLAST_TRIANGLE: 4070,
	    ELEMENT_QIZI_BLAST_TRIANGLE_1: 4071,
	    ELEMENT_QIZI_BLAST_TRIANGLE_2: 4072,
	    ELEMENT_QIZI_BLAST_TRIANGLE_3: 4073,
	    ELEMENT_QIZI_BLAST_TRIANGLE_4: 4074,
	    ELEMENT_QIZI_BLAST_TRIANGLE_5: 4075,
	    ELEMENT_QIZI_BLAST_TRIANGLE_6: 4076,
	    ELEMENT_QIZI_BLAST_TRIANGLE_7: 4077,
	    ELEMENT_QIZI_BLAST_TRIANGLE_RANDOM: 4078,

	    //雪花爆炸棋子，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_BLAST_SNOWFLAKE: 4080,
	    ELEMENT_QIZI_BLAST_SNOWFLAKE_1: 4081,
	    ELEMENT_QIZI_BLAST_SNOWFLAKE_2: 4082,
	    ELEMENT_QIZI_BLAST_SNOWFLAKE_3: 4083,
	    ELEMENT_QIZI_BLAST_SNOWFLAKE_4: 4084,
	    ELEMENT_QIZI_BLAST_SNOWFLAKE_5: 4085,
	    ELEMENT_QIZI_BLAST_SNOWFLAKE_6: 4086,
	    ELEMENT_QIZI_BLAST_SNOWFLAKE_7: 4087,
	    ELEMENT_QIZI_BLAST_SNOWFLAKE_RANDOM: 4088,

	    //太阳花爆炸棋子，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_BLAST_SUNFLOWER: 4090,
	    ELEMENT_QIZI_BLAST_SUNFLOWER_1: 4091,
	    ELEMENT_QIZI_BLAST_SUNFLOWER_2: 4092,
	    ELEMENT_QIZI_BLAST_SUNFLOWER_3: 4093,
	    ELEMENT_QIZI_BLAST_SUNFLOWER_4: 4094,
	    ELEMENT_QIZI_BLAST_SUNFLOWER_5: 4095,
	    ELEMENT_QIZI_BLAST_SUNFLOWER_6: 4096,
	    ELEMENT_QIZI_BLAST_SUNFLOWER_7: 4097,
	    ELEMENT_QIZI_BLAST_SUNFLOWER_RANDOM: 4098,

	    //定步炸弹棋子，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_STEPBOMB: 4100,
	    ELEMENT_QIZI_STEPBOMB_1: 4101,
	    ELEMENT_QIZI_STEPBOMB_2: 4102,
	    ELEMENT_QIZI_STEPBOMB_3: 4103,
	    ELEMENT_QIZI_STEPBOMB_4: 4104,
	    ELEMENT_QIZI_STEPBOMB_5: 4105,
	    ELEMENT_QIZI_STEPBOMB_6: 4106,
	    ELEMENT_QIZI_STEPBOMB_7: 4107,
	    ELEMENT_QIZI_STEPBOMB_RANDOM: 4108,

	    //加步棋子，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_EXTRASTEP: 4110,
	    ELEMENT_QIZI_EXTRASTEP_1: 4111,
	    ELEMENT_QIZI_EXTRASTEP_2: 4112,
	    ELEMENT_QIZI_EXTRASTEP_3: 4113,
	    ELEMENT_QIZI_EXTRASTEP_4: 4114,
	    ELEMENT_QIZI_EXTRASTEP_5: 4115,
	    ELEMENT_QIZI_EXTRASTEP_6: 4116,
	    ELEMENT_QIZI_EXTRASTEP_7: 4117,
	    ELEMENT_QIZI_EXTRASTEP_RANDOM: 4118,

	    //Wepeng:加时棋子,时长局用，后缀1-7是颜色棋子，8是随机颜色棋子，
	    ELEMENT_QIZI_EXTRATIME: 4120,
	    ELEMENT_QIZI_EXTRATIME_1: 4121,
	    ELEMENT_QIZI_EXTRATIME_2: 4122,
	    ELEMENT_QIZI_EXTRATIME_3: 4123,
	    ELEMENT_QIZI_EXTRATIME_4: 4124,
	    ELEMENT_QIZI_EXTRATIME_5: 4125,
	    ELEMENT_QIZI_EXTRATIME_6: 4126,
	    ELEMENT_QIZI_EXTRATIME_7: 4127,
	    ELEMENT_QIZI_EXTRATIME_RANDOM: 4128,

	    //SODA 泡泡棋子，
	    ELEMENT_QIZI_SODA_BUBBLE: 4130,
	    ELEMENT_QIZI_SODA_BUBBLE_1: 4131,
	    ELEMENT_QIZI_SODA_BUBBLE_2: 4132,
	    ELEMENT_QIZI_SODA_BUBBLE_3: 4133,
	    ELEMENT_QIZI_SODA_BUBBLE_4: 4134,
	    ELEMENT_QIZI_SODA_BUBBLE_5: 4135,
	    ELEMENT_QIZI_SODA_BUBBLE_6: 4136,
	    ELEMENT_QIZI_SODA_BUBBLE_7: 4137,
	    ELEMENT_QIZI_SODA_BUBBLE_RANDOM: 4138,

	    //宠物回家小怪
	    ELEMENT_QIZI_GOHOME_SMALL_MONSTER: 4140,
	    ELEMENT_QIZI_GOHOME_SMALL_MONSTER_1: 4141,
	    ELEMENT_QIZI_GOHOME_SMALL_MONSTER_2: 4142,
	    ELEMENT_QIZI_GOHOME_SMALL_MONSTER_3: 4143,
	    ELEMENT_QIZI_GOHOME_SMALL_MONSTER_4: 4144,
	    ELEMENT_QIZI_GOHOME_SMALL_MONSTER_5: 4145,
	    ELEMENT_QIZI_GOHOME_SMALL_MONSTER_6: 4146,
	    ELEMENT_QIZI_GOHOME_SMALL_MONSTER_7: 4147,
	    ELEMENT_QIZI_GOHOME_SMALL_MONSTER_RANDOM: 4148,

	    //宠物回家大怪
	    ELEMENT_QIZI_GOHOME_BIG_MONSTER: 4150,
	    ELEMENT_QIZI_GOHOME_BIG_MONSTER_1: 4151,
	    ELEMENT_QIZI_GOHOME_BIG_MONSTER_2: 4152,
	    ELEMENT_QIZI_GOHOME_BIG_MONSTER_3: 4153,
	    ELEMENT_QIZI_GOHOME_BIG_MONSTER_4: 4154,
	    ELEMENT_QIZI_GOHOME_BIG_MONSTER_5: 4155,
	    ELEMENT_QIZI_GOHOME_BIG_MONSTER_6: 4156,
	    ELEMENT_QIZI_GOHOME_BIG_MONSTER_7: 4157,
	    ELEMENT_QIZI_GOHOME_BIG_MONSTER_RANDOM: 4158,

	    //铺路机
	    ELEMENT_QIZI_PAVER: 4160,
	    ELEMENT_QIZI_PAVER_1: 4161,
	    ELEMENT_QIZI_PAVER_2: 4162,
	    ELEMENT_QIZI_PAVER_3: 4163,
	    ELEMENT_QIZI_PAVER_4: 4164,
	    ELEMENT_QIZI_PAVER_5: 4165,
	    ELEMENT_QIZI_PAVER_6: 4166,
	    ELEMENT_QIZI_PAVER_7: 4167,
	    ELEMENT_QIZI_PAVER_RANDOM: 4168,

	    //一级铃铛棋子
	    ELEMENT_QIZI_JINGLE_BELL_1L: 4170,
	    ELEMENT_QIZI_JINGLE_BELL_1L_1: 4171,
	    ELEMENT_QIZI_JINGLE_BELL_1L_2: 4172,
	    ELEMENT_QIZI_JINGLE_BELL_1L_3: 4173,
	    ELEMENT_QIZI_JINGLE_BELL_1L_4: 4174,
	    ELEMENT_QIZI_JINGLE_BELL_1L_5: 4175,
	    ELEMENT_QIZI_JINGLE_BELL_1L_6: 4176,
	    ELEMENT_QIZI_JINGLE_BELL_1L_7: 4177,
	    ELEMENT_QIZI_JINGLE_BELL_1L_RANDOM: 4178,

	    //二级铃铛棋子
	    ELEMENT_QIZI_JINGLE_BELL_2L: 4180,
	    ELEMENT_QIZI_JINGLE_BELL_2L_1: 4181,
	    ELEMENT_QIZI_JINGLE_BELL_2L_2: 4182,
	    ELEMENT_QIZI_JINGLE_BELL_2L_3: 4183,
	    ELEMENT_QIZI_JINGLE_BELL_2L_4: 4184,
	    ELEMENT_QIZI_JINGLE_BELL_2L_5: 4185,
	    ELEMENT_QIZI_JINGLE_BELL_2L_6: 4186,
	    ELEMENT_QIZI_JINGLE_BELL_2L_7: 4187,
	    ELEMENT_QIZI_JINGLE_BELL_2L_RANDOM: 4188,

	    //随机宝箱
	    ELEMENT_QIZI_TREASURE_BOX: 4190,
	    ELEMENT_QIZI_TREASURE_BOX_1: 4191,
	    ELEMENT_QIZI_TREASURE_BOX_2: 4192,
	    ELEMENT_QIZI_TREASURE_BOX_3: 4193,
	    ELEMENT_QIZI_TREASURE_BOX_4: 4194,
	    ELEMENT_QIZI_TREASURE_BOX_5: 4195,
	    ELEMENT_QIZI_TREASURE_BOX_6: 4196,
	    ELEMENT_QIZI_TREASURE_BOX_7: 4197,
	    ELEMENT_QIZI_TREASURE_BOX_RANDOM: 4198,

	    //宠物蛋窝的1级，
	    ELEMENT_QIZI_EGG_NEST_1L: 4200,
	    ELEMENT_QIZI_EGG_NEST_1L_1: 4201,
	    ELEMENT_QIZI_EGG_NEST_1L_2: 4202,
	    ELEMENT_QIZI_EGG_NEST_1L_3: 4203,
	    ELEMENT_QIZI_EGG_NEST_1L_4: 4204,
	    ELEMENT_QIZI_EGG_NEST_1L_5: 4205,
	    ELEMENT_QIZI_EGG_NEST_1L_6: 4206,
	    ELEMENT_QIZI_EGG_NEST_1L_7: 4207,
	    ELEMENT_QIZI_EGG_NEST_1L_RANDOM: 4208,

	    //宠物蛋窝的2级，
	    ELEMENT_QIZI_EGG_NEST_2L: 4210,
	    ELEMENT_QIZI_EGG_NEST_2L_1: 4211,
	    ELEMENT_QIZI_EGG_NEST_2L_2: 4212,
	    ELEMENT_QIZI_EGG_NEST_2L_3: 4213,
	    ELEMENT_QIZI_EGG_NEST_2L_4: 4214,
	    ELEMENT_QIZI_EGG_NEST_2L_5: 4215,
	    ELEMENT_QIZI_EGG_NEST_2L_6: 4216,
	    ELEMENT_QIZI_EGG_NEST_2L_7: 4217,
	    ELEMENT_QIZI_EGG_NEST_2L_RANDOM: 4218,

	    //幽灵棋子
	    ELEMENT_QIZI_GHOST: 4501,
	    //变色
	    ELEMENT_QIZI_CHANGE_COLOR: 4502,
	    //金币(WE6原来的风车)
	    ELEMENT_QIZI_GOLD_COIN: 4503,
	    //4色4叶草
	    ELEMENT_QIZI_4COLOR_CLOVER: 4504,
	    //5色5片花瓣
	    ELEMENT_QIZI_5COLOR_FLOWER: 4505,

	    //回家宠物中追杀的怪物的巢穴
	    ELEMENT_QIZI_GOHOME_MONSTER_NEST: 4506,

	    //SM铃铛的变色棋子,一级
	    ELEMENT_QIZI_CHANGE_COLOR_JINGLE_BELL_1L: 4507,
	    //SM铃铛的变色棋子,二级
	    ELEMENT_QIZI_CHANGE_COLOR_JINGLE_BELL_2L: 4508,
	    //SM铃铛的变色棋子,二级
	    ELEMENT_QIZI_CHANGE_COLOR_JINGLE_BELL_3L: 4509,

	    ///木箱,1-5级别
	    ELEMENT_QIZI_WOODENBOX_1L: 4510,
	    ELEMENT_QIZI_WOODENBOX_2L: 4511,
	    ELEMENT_QIZI_WOODENBOX_3L: 4512,
	    ELEMENT_QIZI_WOODENBOX_4L: 4513,
	    ELEMENT_QIZI_WOODENBOX_5L: 4514,

	    ///挖掘机用的土块，巧克力，当然非挖掘机后来也用了这个元素
	    ELEMENT_QIZI_DIGGER_CHOCOLATE_1L: 4515,
	    ELEMENT_QIZI_DIGGER_CHOCOLATE_2L: 4516,
	    ELEMENT_QIZI_DIGGER_CHOCOLATE_3L: 4517,
	    ELEMENT_QIZI_DIGGER_CHOCOLATE_4L: 4518,
	    ELEMENT_QIZI_DIGGER_CHOCOLATE_5L: 4519,

	    ///新挖掘机用的云朵
	    ELEMENT_QIZI_DIGGER_CLOUD_1L: 4520,
	    ELEMENT_QIZI_DIGGER_CLOUD_2L: 4521,
	    ELEMENT_QIZI_DIGGER_CLOUD_3L: 4522,
	    ELEMENT_QIZI_DIGGER_CLOUD_4L: 4523,
	    ELEMENT_QIZI_DIGGER_CLOUD_5L: 4524,

	    ///新挖掘机用的云朵+宝石，
	    ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_1L: 4525,
	    ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_2L: 4526,
	    ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_3L: 4527,
	    ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_4L: 4528,
	    ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_5L: 4529,

	    ///新挖掘机用的云朵+红包，
	    ELEMENT_QIZI_DIGGER_CLOUD_REDPACKET_1L: 4530,
	    ELEMENT_QIZI_DIGGER_CLOUD_REDPACKET_2L: 4531,
	    ELEMENT_QIZI_DIGGER_CLOUD_REDPACKET_3L: 4532,
	    ELEMENT_QIZI_DIGGER_CLOUD_REDPACKET_4L: 4533,
	    ELEMENT_QIZI_DIGGER_CLOUD_REDPACKET_5L: 4534,

	    ///扣子，就是那个一串串消除的花朵
	    ELEMENT_QIZI_YINGHUACHUAN_1P: 4535,
	    ELEMENT_QIZI_YINGHUACHUAN_2P: 4536,
	    ELEMENT_QIZI_YINGHUACHUAN_3P: 4537,
	    ELEMENT_QIZI_YINGHUACHUAN_4P: 4538,
	    ELEMENT_QIZI_YINGHUACHUAN_5P: 4539,

	    //合体波波头的3个级别
	    ELEMENT_ID_QIZI_BOBOTOU_1L: 4540,
	    ELEMENT_ID_QIZI_BOBOTOU_2L: 4541,
	    ELEMENT_ID_QIZI_BOBOTOU_3L: 4542,
	    ELEMENT_ID_QIZI_BOBOTOU_4L: 4543,
	    ELEMENT_ID_QIZI_BOBOTOU_5L: 4544,

	    // 收集物：气球
	    ELEMENT_QIZI_COLLECT_BALLOON: 4550,
	    ///糖果
	    ELEMENT_QIZI_COLLECT_CANDY: 4551,
	    //晴天娃娃
	    ELEMENT_QIZI_SUNNY_DOLL_1: 4552,
	    ELEMENT_QIZI_SUNNY_DOLL_2: 4553,
	    ELEMENT_QIZI_SUNNY_DOLL_3: 4554,

	    ELEMENT_QIZI_COLLECT_4: 4555,
	    ELEMENT_QIZI_COLLECT_5: 4556,
	    ELEMENT_QIZI_COLLECT_6: 4557,
	    ELEMENT_QIZI_COLLECT_7: 4558,
	    ELEMENT_QIZI_COLLECT_8: 4559,

	    //水桶
	    ELEMENT_QIZI_BUCKET: 4560,
	    //水
	    ELEMENT_QIZI_WATER: 4561,
	    //大蘑菇
	    ELEMENT_QIZI_MUSHROOM_BIG: 4562,
	    //小蘑菇
	    ELEMENT_QIZI_MUSHROOM_SMALL: 4563,

	    //宠物回家的起点
	    ELEMENT_QIZI_GOHOME_START: 4564,
	    //宠物回家的终点
	    ELEMENT_QIZI_GOHOME_END: 4565,

	    //甜甜圈
	    ELEMENT_QIZI_DOUGHNUT: 4566,
	    //糖果罐子
	    ELEMENT_QIZI_CANDY_JAR: 4567,
	    //老鹰
	    ELEMENT_QIZI_HAWK_AND_CHICKEN_HAWK: 4568,
	    //老鹰抓小鸡里面的小鸡
	    ELEMENT_QIZI_HAWK_AND_CHICKEN_CHICKEN: 4569,
	    //老鹰抓小鸡里面的大鸡，据说没有用
	    ELEMENT_QIZI_HAWK_AND_CHICKEN_BIGCHICKEN: 4570,

	    //星星罐子的罐子
	    ELEMENT_QIZI_STAR_TANK_TANK: 4571,
	    //星星罐子的星星
	    ELEMENT_QIZI_STAR_TANK_STAR: 4572,
	    //太阳罐子的罐子
	    ELEMENT_QIZI_SUN_TANK_TANK: 4573,
	    //太阳罐子的太阳
	    ELEMENT_QIZI_SUN_TANK_SUN: 4574,
	    //阻挡冲击波的石头
	    ELEMENT_QIZI_ANTI_SHOCKWAVE_STONE: 4575,

	    //这是叫粘色孵化蛋,蓉儿的文学水平，看似也……一般
	    ELEMENT_QIZI_COLOR_HATCHING_EGG: 4576,

	    //宠物护送回家的怒气果实，消除后增加怒气
	    ELEMENT_QIZI_GOHOME_ANGER_FRUIT: 4577,

	    //泡沫枪
	    ELEMENT_QIZI_FOAM_GUN: 4580,
	    //泡沫枪若干个方向
	    ELEMENT_QIZI_FOAM_GUN_LEFT: 4581,
	    ELEMENT_QIZI_FOAM_GUN_RIGHT: 4582,
	    ELEMENT_QIZI_FOAM_GUN_UP: 4583,
	    ELEMENT_QIZI_FOAM_GUN_DOWN: 4584,
	    ELEMENT_QIZI_FOAM_GUN_LEFTUP: 4585,
	    ELEMENT_QIZI_FOAM_GUN_LEFTDOWN: 4586,
	    ELEMENT_QIZI_FOAM_GUN_RIGHTUP: 4587,
	    ELEMENT_QIZI_FOAM_GUN_RIGHTDOWN: 4588,

	    //WE4方向防御木箱
	    ELEMENT_QIZI_WEP_WOODENBOX_STONE_12: 4590,
	    ELEMENT_QIZI_WEP_WOODENBOX_STONE_23: 4591,
	    ELEMENT_QIZI_WEP_WOODENBOX_STONE_34: 4592,
	    ELEMENT_QIZI_WEP_WOODENBOX_STONE_41: 4593,

	    //WE6方向防御木箱
	    ELEMENT_QIZI_WE6_WOODENBOX_STONE_123: 4594,
	    ELEMENT_QIZI_WE6_WOODENBOX_STONE_234: 4595,
	    ELEMENT_QIZI_WE6_WOODENBOX_STONE_345: 4596,
	    ELEMENT_QIZI_WE6_WOODENBOX_STONE_456: 4597,
	    ELEMENT_QIZI_WE6_WOODENBOX_STONE_561: 4598,
	    ELEMENT_QIZI_WE6_WOODENBOX_STONE_612: 4599,

	    //WE6的6边形怪物
	    ELEMENT_QIZI_WE6_HEXAGON_MONSTER_CENTER_1L: 4600,
	    ELEMENT_QIZI_WE6_HEXAGON_MONSTER_EDGE_1L: 4601,

	    ELEMENT_QIZI_WE6_HEXAGON_MONSTER_CENTER_2L: 4602,
	    ELEMENT_QIZI_WE6_HEXAGON_MONSTER_EDGE_2L: 4603,
	    ELEMENT_QIZI_WE6_HEXAGON_MONSTER_CENTER_3L: 4604,
	    ELEMENT_QIZI_WE6_HEXAGON_MONSTER_EDGE_3L: 4605,
	    ELEMENT_QIZI_WE6_HEXAGON_MONSTER_CENTER_4L: 4606,
	    ELEMENT_QIZI_WE6_HEXAGON_MONSTER_EDGE_4L: 4607,
	    ELEMENT_QIZI_WE6_HEXAGON_MONSTER_CENTER_5L: 4608,
	    ELEMENT_QIZI_WE6_HEXAGON_MONSTER_EDGE_5L: 4609,

	    //WE4的4边形怪物
	    //普通关卡
	    ELEMENT_QIZI_WEP_SQUARE_MONSTER_STAGE_CENTER: 4610,
	    ELEMENT_QIZI_WEP_SQUARE_MONSTER_STAGE_EDGE: 4611,
	    //后面2个是图标
	    ELEMENT_QIZI_WEP_SQUARE_MONSTER_STAGE_1: 4612,
	    ELEMENT_QIZI_WEP_SQUARE_MONSTER_STAGE_2: 4613,

	    //周赛
	    ELEMENT_QIZI_WEP_SQUARE_MONSTER_WEEKLY_CENTER: 4615,
	    ELEMENT_QIZI_WEP_SQUARE_MONSTER_WEEKLY_EDGE: 4616,
	    //后面2个是图标
	    ELEMENT_QIZI_WEP_SQUARE_MONSTER_WEEKLY_1: 4617,
	    ELEMENT_QIZI_WEP_SQUARE_MONSTER_WEEKLY_2: 4618,

	    //雪怪
	    ELEMENT_QIZI_WEP_SQUARE_SNOW_MONSTER_CENTER: 4620,
	    ELEMENT_QIZI_WEP_SQUARE_SNOW_MONSTER_EDGE: 4621,
	    //后面2个是图标
	    ELEMENT_QIZI_WEP_SQUARE_SNOW_MONSTER_1: 4622,
	    ELEMENT_QIZI_WEP_SQUARE_SNOW_MONSTER_2: 4623,

	    //超级冲击波大炮
	    ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON: 4630,
	    //超级冲击波大炮的若干个方向
	    ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_LEFT: 4631,
	    ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_RIGHT: 4632,
	    ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_UP: 4633,
	    ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_DOWN: 4634,
	    ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_LEFTUP: 4635,
	    ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_LEFTDOWN: 4636,
	    ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_RIGHTUP: 4637,
	    ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_RIGHTDOWN: 4638,

	    //盾牌，阻挡冲击波，5级别
	    ELEMENT_ID_QIZI_SHIELD_1L: 4640,
	    ELEMENT_ID_QIZI_SHIELD_2L: 4641,
	    ELEMENT_ID_QIZI_SHIELD_3L: 4642,
	    ELEMENT_ID_QIZI_SHIELD_4L: 4643,
	    ELEMENT_ID_QIZI_SHIELD_5L: 4644,

	    //结束标识
	    ELEMENT_QIZI_END: 9999
	};

	//掉落和出现规
	//把概率和步分开，这样更加容易实现和统一
	var APPEAR_RULE_TYPE = {
	    //无效的掉落出现规则，
	    APPEAR_RULE_INVALID: 0,

	    //掉落物某步掉落
	    APPEAR_COLLECT_STEP: 1,
	    //掉落物剩余掉落
	    APPEAR_COLLECT_REMAIN: 2,

	    //加步棋子某步掉落
	    APPEAR_EXTRASTEP_STEP: 3,
	    //加步棋子概率掉落
	    APPEAR_EXTRASTEP_PROBABILITY: 4,

	    //变色棋子某步掉落
	    APPEAR_CHANGE_COLOR_STEP: 5,
	    //变色棋子概率掉落
	    APPEAR_CHANGE_COLOR_PROBABILITY: 6,

	    //波波头某步掉落
	    APPEAR_BOBOTOU_STEP: 7,
	    //波波头概率掉落
	    APPEAR_BOBOTOU_PROBABILITY: 8,

	    //加时间棋子棋子步数掉落
	    APPEAR_EXTRATIME_STEP: 9,
	    //加时间棋子概率掉落
	    APPEAR_EXTRATIME_PROBABILITY: 10,

	    //定步炸弹步数掉落
	    APPEAR_STEPBOMB_STEP: 11,
	    //定步炸弹概率掉落
	    APPEAR_STEPBOMB_PROBABILITY: 12,

	    //气泡某步掉落
	    APPEAR_SODA_BUBBLE_STEP: 13,
	    //气泡剩余掉落
	    APPEAR_SODA_BUBBLE_REMAIN: 14,

	    //怪物巢穴-死而复生
	    APPEAR_GOHOME_MOSTER_RISE_AGAIN: 15,
	    //怪物巢穴-宠物每走几格产怪
	    APPEAR_GOHOME_MOSTER_PER_PET_WALKSTEP: 16,
	    //怪物巢穴-用户每滑动N步产怪
	    APPEAR_GOHOME_MOSTER_PER_USER_FINGERSLIDING: 17,
	    //怪物巢穴-用户滑动第N步产怪
	    APPEAR_GOHOME_MOSTER_USER_FINGERSLIDING: 18,

	    //铃铛棋子棋子步数掉落
	    APPEAR_JINGLE_BELL_STEP: 19,
	    //铃铛棋子概率掉落
	    APPEAR_JINGLE_BELL_PROBABILITY: 20,
	    //铃铛棋子循环掉落，不够就补
	    APPEAR_JINGLE_BELL_CIRCLE: 21,

	    //气泡循环掉落，不够就补
	    APPEAR_SODA_BUBBLE_CIRCLE: 22,

	    //金币某步掉落
	    APPEAR_GOLD_COIN_STEP: 23,
	    //金币概率掉落
	    APPEAR_GOLD_COIN_PROBABILITY: 24,

	    //宝箱某步掉落
	    APPEAR_TREASURE_BOX_STEP: 25,
	    //宝箱概率掉落
	    APPEAR_TREASURE_BOX_PROBABILITY: 26,

	    //宝箱变身某个棋子以及变身概率
	    APPEAR_TREASURE_BOX_TRANSFORMATION: 27

	};

	//棋子颜色
	var CHESS_COLOR = {
	    //无效棋子颜色，也表示随机颜色
	    CHESS_COLOR_INVALID: 0,
	    //棋子颜色
	    CHESS_COLOR_1: 1,
	    CHESS_COLOR_2: 2,
	    CHESS_COLOR_3: 3,
	    CHESS_COLOR_4: 4,
	    CHESS_COLOR_5: 5,
	    CHESS_COLOR_6: 6,
	    CHESS_COLOR_7: 7,
	    //棋子随机颜色
	    CHESS_COLOR_RANDOM: 8
	};

	//联通方向
	var CONNECTED_DIRECTION = {
	    //无效的联通方向
	    CONNECTED_DIRECTION_INVALID: 0,
	    //
	    CONNECTED_DIRECTION_LEFT: 1,
	    //
	    CONNECTED_DIRECTION_RIGHT: 2,
	    //
	    CONNECTED_DIRECTION_UP: 3,
	    //
	    CONNECTED_DIRECTION_DOWN: 4,
	    //
	    CONNECTED_DIRECTION_LEFTUP: 5,
	    //
	    CONNECTED_DIRECTION_LEFTDOWN: 6,
	    //
	    CONNECTED_DIRECTION_RIGHTUP: 7,
	    //
	    CONNECTED_DIRECTION_RIGHTDOWN: 8
	};

	/**
	 *enum枚举定义 End---------------------------------------------
	 */

	var DescItem = function DescItem() {
	    //关卡描述类型
	    this.desc_type = 0; //DESC_TYPE类型
	    //描述类型数据
	    this.desc_data1 = 0;
	    this.desc_data2 = 0;
	};

	//通关条件
	var PassConditionItem = function PassConditionItem() {
	    //关卡描述类型
	    this.cond_type = 0; //PASS_CONDITION_TYPE类型
	    //通关条件数据1,2
	    this.cond_data1 = 0;
	    this.cond_data2 = 0;
	};

	//棋子元素
	var GridElement = function GridElement() {
	    //关卡描述类型
	    this.element_id = 0; //GRID_ELEMENT_ID类型
	    //元素数据1,2,3，这3个字段的的含义请参考编辑器里面的 grid_elements.json
	    this.element_data1 = 0;
	    this.element_data2 = 0;
	    this.element_data3 = 0;

	    //如果以后还有实在有this.一些不能想象的东西，就只有做个repeated 的数据放着备用
	    //repeated int32 element_data4 = 5;
	};

	//棋盘的一个格子，由多个元素构
	var BoardOneGrid = function BoardOneGrid() {
	    this.one_grid = []; //GridElement对象数组
	};

	var BoardAppearRule = function BoardAppearRule() {
	    //出现的类,见参考appear_chess.json文件里面的type字段
	    this.appear_type = 1; //APPEAR_RULE_TYPE类型

	    //出现的元素，就是棋子元素的结构，
	    this.appear_element = new GridElement(); //GridElement对象

	    //出现的棋子的位置，数组下标，为了剩空间，不使用行，列
	    this.appear_pos = 0;

	    //出现，掉落的数据1,2，根据type解释
	    this.appear_data1 = 0;
	    this.appear_data2 = 0;
	};

	//棋局配置
	var PuzzleConfig = function PuzzleConfig() {
	    //关卡的游戏ID，
	    this.game_id = 1; //PUZZLE_GAME_ID枚举类型
	    //关卡的消除方式
	    this.cursh_method = 0; //PUZZLE_CRUSH_METHOD枚举类型
	    //关卡作用
	    this.puzzle_purpose = 0; //PUZZLE_PURPOSE类型
	    //关卡号
	    this.puzzle_stage = 0;
	    //关卡的版
	    this.puzzle_ver = 0;

	    //关卡难度
	    this.puzzle_degree = 0;

	    //玩法
	    this.play_type = 0; //PUZZLE_PLAYTYPE类型
	    //限制步数
	    this.step_num = 0;
	    //限制时间
	    this.time_num = 0;

	    //棋盘的长宽高
	    this.board_row = 9; //默认为9
	    this.board_col = 9; //默认为9

	    //棋子数量
	    this.chess_color = 7; //颜色种类

	    //分数
	    this.onestar_score = 1200;
	    this.twostar_score = 2400;
	    this.threestar_score = 3600;

	    //棋盘配置描述部分，由多项组成
	    this.puzzle_desc = []; //DescItem对象数组

	    //棋盘的完成条
	    this.pass_condition = []; //PassConditionItem对象数组

	    //棋盘的格子配
	    this.board_grid = []; //BoardOneGrid对象数组

	    //棋盘掉落规则
	    this.appear_rule = []; //BoardAppearRule对象数组

	    //关卡的说明，给用户的一句话
	    this.word_to_user = "";

	    //增加字段可以增加在前面
	    //修改说的用户名称
	    this.modify_username = "";
	};

	module.exports = {
	    //游戏的ID
	    PUZZLE_GAME_ID: PUZZLE_GAME_ID,
	    //消除方式
	    PUZZLE_CRUSH_METHOD: PUZZLE_CRUSH_METHOD,
	    //关卡用途
	    PUZZLE_PURPOSE: PUZZLE_PURPOSE,
	    //玩法
	    PUZZLE_PLAYTYPE: PUZZLE_PLAYTYPE,
	    //对于棋盘的补充描述，不是每个棋局都有的部分，
	    //描述类型
	    DESC_TYPE: DESC_TYPE,
	    //通关完成条件类型
	    PASS_CONDITION_TYPE: PASS_CONDITION_TYPE,
	    GRID_ELEMENT_ID: GRID_ELEMENT_ID,
	    //掉落和出现规
	    //把概率和步分开，这样更加容易实现和统一
	    APPEAR_RULE_TYPE: APPEAR_RULE_TYPE,
	    //棋子颜色
	    CHESS_COLOR: CHESS_COLOR,
	    //联通方向
	    CONNECTED_DIRECTION: CONNECTED_DIRECTION,

	    DescItem: DescItem,
	    //通关条件
	    PassConditionItem: PassConditionItem,
	    //棋子元素
	    GridElement: GridElement,
	    //棋盘的一个格子，由多个元素构
	    BoardOneGrid: BoardOneGrid,
	    BoardAppearRule: BoardAppearRule,
	    //棋局配置
	    PuzzleConfig: PuzzleConfig

	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Created by brandyxie
	 * 从proto获取定义
	 */

	var config = __webpack_require__(12);

	/**
	 *enum枚举定义 Start---------------------------------------------
	 */

	//滑动结果
	var SlideResult = {
	    kInvalid: 1, //无效
	    kFail: 2, //无法交换, 换回来
	    kSwap: 3 //可交换
	};

	var InputOp = {
	    kOpSlide: 0,
	    kOpUseItem: 1,
	    kOpRespawn: 2
	};

	var InputResult = {
	    // 操作成功
	    kInputSucc: 0,
	    // 滑动时因为没有产生消除失败
	    kInputFail: 1,
	    // 滑动时因为栅栏阻挡失败
	    kInputFailFence: 2,
	    // 该操作在当前位置不可用
	    kInputForbidden: 3
	};

	var AnimationId = {
	    empty: 0, //空动画
	    swap: 1, //滑动
	    score: 2, //分数
	    pass_condition: 3, //过关条件
	    step: 4, //步数
	    remove: 5, //消除
	    drop: 6, //掉落
	    itemStep: 7, //加步道具
	    itemGlass: 8, //眼镜道具
	    itemRearrange: 9, //重排道具
	    itemSwap: 10, //交换道具
	    pass_through: 11, //冒险成功
	    step_reward_begin: 12, //步数奖励开始
	    step_reward_end: 13, //步数奖励结束
	    gas_special_end: 14, //特殊棋子和幽灵棋子交换结束
	    gas_to_gas: 15, //两个幽灵棋子交换动画
	    rolling_board: 16, //滚屏动画
	    generate_attack: 17, // 某种功能棋子（糖果罐、毛球）被攻击
	    replace_chess: 18, // 吞噬棋子
	    collect_ice_bear: 19, //收集冰块小熊
	    chess_move: 20, //棋子移动动画
	    maoqiu_split: 21 };

	var GameStatus = {
	    kGameRunning: 0,
	    kGamePass: 1,
	    kGameFail: 2
	};

	var ChessLayer = {
	    kChessLayer0: 0,
	    kChessLayer1: 1,
	    kChessLayer2: 2,
	    kChessLayer3: 3,
	    kChessLayer4: 4,
	    kChessLayerNum: 5,
	    kChessLayerFeature: 2000
	};

	var ChessType = {
	    STIT_NONE: 0,
	    CT_START: 1,
	    CT_None: 2,
	    CT_NormalUnit: 3, //普通动物棋子
	    CT_SpecialVerticalShockWave: 4, //纵向射线棋子
	    CT_SpecialHorizontalShockWave: 5, //横向射线棋子
	    CT_SpecialHurricane: 6, //旋风棋子
	    CT_SpecialGas: 7, //幽灵棋子
	    CT_COLLECTBALLOON: 8, //气球棋子
	    CT_COLLECTCANDY: 9, // 糖果
	    CT_CLODS0: 10, //挖掘机巧克力1
	    CT_CLODS1: 11, //挖掘机巧克力2
	    CT_GIFT: 12,
	    CT_TICKBOMB: 13,
	    CT_TIMEBONUS: 14,
	    CT_SodaBottle: 15, //苏打气泡
	    CT_COMBINATION1: 18, //求合体1
	    CT_COMBINATION2: 19, //求合体2
	    CT_COMBINATION3: 20, //求合体3
	    STIT_DROP_POINT: 24, //原有的棋子掉落点，被汽水淹没后，不会再产生新棋子
	    STIT_COLLECTBALLOON_POINT: 25, //气球收集点
	    STIT_COLLECTCANDY_POINT: 26, // 糖果收集点
	    STIT_DROP_POINT_IN_SODA: 27, //汽水中的掉落点，有汽水淹没此棋格，棋格为空时，会产生新棋子
	    STIT_COLLECT_POINT_IN_SODA: 28, //汽水关中的气球收集点，表现为一个冲线的棋子，其他表现同STIT_COLLECT_POINT。该棋子两边都不是收集点
	    STIT_COLLECT_POINT_IN_SODA_LEFT: 29, //同上，该棋子左边也是收集点
	    STIT_COLLECT_POINT_IN_SODA_RIGHT: 30, //同上，该棋子右边也是收集点
	    STIT_COLLECT_POINT_IN_SODA_BOTH: 31, //同上，该棋子两边也是收集点
	    STIT_CHONGDONG1: 32, //上虫洞
	    STIT_CHONGDONG2: 33, //下虫洞
	    STIT_FENCE_RIGHT: 39,
	    STIT_FENCE_BOTTOM: 40,
	    STIT_COLLECT_UNDER_ICE: 41, // 冰块下有小熊
	    STIT_LOCKER: 43, // 翻转棋子
	    STIT_NOUSE: 51, // 当前棋格没有使用, 不能放置任何东西
	    STIT_BLUEBERRY: 52, // 蓝莓(绿草地)
	    STIT_BAD_BLUEBERRY: 53, // 坏掉的蓝莓(枯草地)
	    STIT_ICE: 54, //冰
	    STIT_DEEPICE: 55, //深冰
	    STIT_ICE_BEAR_UNDER: 56, //有小熊在其下的一级冰.逻辑上应和  STIT_ICE
	    STIT_BOX: 63, //木箱
	    STIT_BOX_TWO: 64, //2级木箱
	    STIT_BOX_THREE: 65, //3级木箱
	    STIT_BOX_FOUR: 66, //4级木箱
	    STIT_CANDYPOT: 67, // 糖果罐
	    STIT_DONUTSBOMB: 68, //甜甜圈
	    STIT_HUGEMUSHROOM: 69, // 大蘑菇
	    STIT_LITTLEMUSHROOM: 70, // 小蘑菇
	    STIT_COMMONCLOUD1: 71, //一级普通白云
	    STIT_COMMONCLOUD2: 72, //二级普通白云
	    STIT_STONECLOUD1: 73, //一级云石
	    STIT_STONECLOUD2: 74, //二级云石
	    STIT_COLORCOLLECTION: 75, // 颜色收集物
	    STIT_ANIMAL_GO_HOME_ANIMAL: 76,
	    STIT_REDPACKET1: 77,
	    STIT_REDPACKET2: 78,
	    STIT_SOKOBAN_MAN: 84,
	    STIT_SOKOBAN_BOX: 85,
	    STIT_SUNNYDOLL1: 87, // 晴天娃娃1
	    STIT_SMALL_BELL: 90, // 铃铛
	    STIT_MAOQIU1: 91, //毛球1
	    STIT_MAOQIU2: 92, //毛球2
	    STIT_CAGE: 93, //1级牢笼
	    STIT_CAGE2: 94, //2级牢笼
	    STIT_CANDYPAPER1: 95, // 糖果纸1
	    STIT_CANDYPAPER2: 96, // 糖果纸2
	    STIT_CANDYPAPER3: 97, // 糖果纸3
	    STIT_CANDYPAPER4: 98, // 糖果纸4
	    STIT_CANDYPAPER5: 99, // 糖果纸5
	    STIT_BIG_BELL: 100,
	    STIT_Chameleon_SMALL_BELL: 101,
	    STIT_Chameleon_BIG_BELL: 102,
	    STIT_FOAM_CELL: 108,
	    STIT_FOAM_MACHINE: 109,
	    STIT_STONE: 126, //石头棋子
	    STIT_CANNON: 132, //大炮
	    STIT_EGG_NEST1: 133, //宠物蛋窝的1级
	    STIT_EGG_NEST2: 134, //宠物蛋窝的2级
	    STIT_DROP_VALVE: 136, //掉落阀门
	    STIT_ANIMAL_GO_HOME_NEST: 139, //动物回家玩法的怪物洞穴，旧版过于冗余
	    STIT_DROP_VALVE_IN_SODA: 143 };

	var ChessColor = {
	    kChessColorYellow: 0,
	    kChessColorRed: 1,
	    kChessColorBrown: 2,
	    kChessColorGreen: 3,
	    kChessColorBlue: 4,
	    kChessColorPurple: 5,
	    kChessColorWhite: 6,
	    kChessColorRandom: 7,
	    kChessColorTransparent: 8,
	    kChessColorNone: 9,

	    kChessColorCombination1: 101,
	    kChessColorCombination2: 102,
	    kChessColorCombination3: 103
	};

	var AttackType = {
	    Attack_None: 0,
	    Attack_Normal: 1,
	    Attack_VerticalShockWave: 2,
	    Attack_HorizontalShockWave: 3,
	    Attack_Hurricane: 4,
	    Attack_CrossShockWave: 5,
	    Attack_ThickCrossShockWave: 6,
	    Attack_BigHurricane: 7,
	    Attack_Gas: 8,
	    Attack_Gas2Gas: 9,
	    Attack_Disappear: 10,
	    Attack_Bomb: 11,
	    Attack_Lastpang: 12,
	    Attack_GasSpecial: 13,
	    Attack_GasShockSave: 14,
	    Attack_GasHurricane: 15,
	    Attack_ShockWave: 16
	};

	var ItemId = {
	    itemStepOut: 1, //加3步(局外)
	    itemGas: 2, //暴走幽灵(局外)
	    itemShockWave: 3, //目镜射线(局外)

	    itemHammer: 4, //消除魔棒
	    itemSwap: 5, //交换位置
	    itemGlass: 6, //神奇目镜
	    itemRearrange: 7, //重新排列
	    itemRollback: 8, //后退一步
	    itemStepInner: 9, //加3步

	    itemRespawn: 11, //加5步复活

	    itemRandom: 12, //随机骰子

	    itemAddStep_1: 13, //加1步（局外）
	    itemAddStep_2: 14, //加2步（局外）
	    itemScoreAdd_5: 15, //分数加5%
	    itemScoreAdd_7: 16, //分数加7%
	    itemScoreAdd_9: 17, //分数加9%
	    itemHurricane: 18 };

	var CollectType = {
	    // 不需要收集
	    kCollectNoUse: 1,
	    // 收集消除(普通收集都是这个类型)
	    kCollectCrush: 2,
	    // 收集增加(比如蓝莓)
	    kCollectAdd: 3
	};

	var PassConditionType = {
	    // 收集指定类型棋子
	    kPassCondCollectChess: 1,
	    // 分数
	    kPassCondScore: 2,
	    // 击败boss
	    kPassCondBoss: 3,
	    // 周赛1
	    kPassCondWeekGame1: 4,
	    // 周赛2
	    kPassCondWeekGame2: 5,
	    // 周赛3
	    kPassCondWeekGame3: 6,
	    // 走完所有步数
	    kPassCondAllStep: 7,
	    // 收集指定颜色
	    kPassCondCollectColor: 8,
	    // 步数限制
	    kPassCondLimitedStep: 9,
	    // 失败条件, 死局
	    kPassCondDeadGame: 11,
	    // 失败条件, 炸弹爆炸
	    kPassCondTickBomb: 12
	};

	var CrushRule = {
	    kCrushNone: 0,
	    // 直接攻击消除
	    kCrushRule1: 1,
	    // 冰块的消除规则
	    kCrushRule2: 2,
	    // 收集物的消除规则
	    kCrushRule3: 3
	};

	var DropRule = {
	    kDropNone: 0,
	    // 普通掉落
	    kDropRule1: 1,
	    // 只可以垂直掉落, 不允许侧掉落
	    kDropRule2: 2,
	    // 普通掉落, 但是可以侧掉落时, 优先侧掉落
	    kDropRule3: 3
	};

	/**
	 *enum枚举定义 End---------------------------------------------
	 */

	var Position = function Position() {
	    this.row = 0;
	    this.col = 0;
	};

	var Input = function Input() {
	    this.op = 0; //InputOp枚举类型
	    this.from = new Position(); //
	    this.to = new Position();
	    this.item_id = 0; //ItemId类型
	    this.value1 = 0; //参数1
	    this.value2 = 0; //参数2
	};

	///棋子数据，描述某种棋子所需要的数据，某些特殊类型的可能包含对应的optional数据
	var ChessData = function ChessData() {
	    this.layer = -1; //ChessLayer类型
	    this.type = 0; //ChessType类型
	    this.color = 0; //ChessColor类型
	    this.value = [];
	    this.pos = new Position();
	    //optional TickBombData bomb_data= 5;
	    //optional StepBonusData step_bonus_data= 6;
	    this.mushroom_data = new MushroomData();
	    //optional GiftData gift_data = 8;
	    //optional CommonBossData common_boss_data = 9;
	    //optional WoodChuckData wood_chuck_data = 10;
	    //optional FoamMechineData foam_mechine_data = 11;
	    //optional SendAnimalMonsterData send_animal_monster_data = 12;
	    this.ice_bear_data = new IceBearData();
	    //optional DestroyableFenceData destroyable_fence_data = 14;
	};

	//蘑菇的额外数据
	var MushroomData = function MushroomData() {
	    this.max_health = 0;
	    this.current_health = 0;
	    this.attack_value = 0;
	};

	// 收集阿宝
	var IceBearData = function IceBearData() {
	    this.type = 0;
	    this.horizontal = 0;
	};

	var NodeData = function NodeData() {
	    this.chess_data = []; //ChessData数组
	    this.pos = new Position();
	};

	var StageID = function StageID() {
	    // 实际关卡ID
	    this.id = 0;
	    // 关卡子id
	    this.sub_id = 0;
	};

	// 游戏开局信息, 游戏开始前必须准备好
	var StartInfo = function StartInfo() {
	    this.random_seed = 0;
	    this.item_id_list = [];
	    this.stage_id = new StageID();
	};

	// 复活信息, 玩家单局失败, 花钱复活后需要填充
	var RespawnInfo = function RespawnInfo() {
	    this.bullet_attack = 0;
	};

	var ChessCountItem = function ChessCountItem(type, count) {
	    this.type = type;
	    this.count = count;
	};

	var ColorCountItem = function ColorCountItem(color, count) {
	    this.color = color;
	    this.count = count;
	};

	var AttackCountItem = function AttackCountItem(attack, count) {
	    this.attack = attack;
	    this.count = count;
	};

	// 游戏结束信息, 游戏结束后通关接口获取
	var GameInfo = function GameInfo() {
	    this.crush_chess_count = [];
	    this.crush_color_count = [];
	    this.add_chess_count = [];
	    this.add_color_count = [];
	    this.slide_count = 0;
	    this.attack_count = [];
	    this.drop_round_count = [];
	    //this.extra_statistics = [];
	    //optional RedPacketInfo redpacket_info = 10;
	    //repeated HelpItemInfo help_item_info = 11;
	    //repeated HelpItemInfo used_help_item_info = 12;
	    this.used_item = [];
	    this.score = 0;
	};

	var PassConditionData = function PassConditionData() {
	    // optional WePuzzle.PassConditionItem item = 1;
	    // 通关条件类型
	    this.pass_type = 0; //PassConditionType类型
	    // 条件参数1, 来自编辑器
	    this.value1 = 0;
	    // 条件参数2, 来自编辑器
	    this.value2 = 0;
	    // 如果条件为指定收集某种棋子或者颜色, 则类型放这里
	    this.collect_type = 0;
	    // 当前完成数据1, 比如收集棋子, 这里保存了实际收集的数量
	    this.result1 = 0;
	    // 当前完成数据2.
	    this.result2 = 0;
	    // 当前条件是否已经失败(不使用)
	    this.is_fail = false;
	    // 当前通关条件是否被忽略掉
	    this.is_ignore = false;
	    // 当前通关条件状态
	    this.status = 0;

	    //棋子的收集类型
	    this.CollectType = 0;
	};

	var PassCondition = function PassCondition() {
	    this.data = []; //PassConditionData对象数组
	    // repeated PassConditionType failed_data = 2;
	    this.game_status = 0;
	};

	var SimpleStageInfo = function SimpleStageInfo() {
	    // 通关条件
	    this.pass_condition = []; //PassConditionData对象数组//new PassCondition();
	    // 限制步数
	    this.step_limit = 0;
	    // 限制时间
	    this.time_limit = 0;
	    // 玩法
	    this.play_type = 0;
	    // 当前关卡颜色种类
	    this.color_num = 0;
	    // 棋盘大小
	    this.board_row = 0;
	    this.board_col = 0;
	    // 屏幕大小
	    this.screen_row = 0;
	    this.screen_col = 0;
	    // bossid
	    this.boss_id = 0;
	    // 1,2,3星分数
	    this.star_score = [];
	    // 新手关卡ID
	    this.newbie_id = 0;
	    // 当前关卡是否有新棋子元素
	    this.new_chess_type = 0;
	    // 一句话介绍新元素
	    this.new_chess_desc = "";
	};

	var StatisticData = function StatisticData() {
	    this.CrushChessCount = [];
	    this.CrushColorCount = [];
	    this.AddChessCount = [];
	    this.AddColorCount = [];
	    this.slide_count = 0;
	};

	var Record = function Record() {
	    // 游戏开局信息
	    this.start_info = new StartInfo();
	    // 玩家输入序列
	    this.input = []; //Input对象数组
	    // 玩家购买的+5步信息
	    //this.respawn_info = [];
	    // 游戏结果
	    this.game_result = 0;
	    // 游戏统计数据
	    this.game_info = new GameInfo();
	};

	var ChessProperties = function ChessProperties() {
	    // 对棋子有效的直接攻击
	    this.attack_type = []; //
	    // 对棋子有效的周边攻击
	    // std::vector<AttackType> around_attack_type = 2;
	    // 棋子所在的layer
	    this.Layer = 0;
	    // 掉落规则
	    this.drop_rule = 0;
	    // 消除规则
	    this.crush_rule = 0;
	    // 是否能参与重排
	    this.UseRearrange = false;
	    // 是否阻止棋格掉落
	    this.StopDrop = false;
	    // 是否阻止其它棋子掉入当前棋格
	    this.StopDropIn = false;
	    // 是否阻止棋格内所以棋子滑动
	    this.StopSlide = false;
	    // 禁止棋格内棋子参与消除
	    this.StopJoin = false;
	    // 是否能用于眼镜道具
	    this.UseSpecial = false;
	    // 是否能交换
	    this.UseSwap = false;
	    // 是否能被锤子/鱼天赋攻击
	    this.CanUseHammer = false;
	    // 消除时是否影响周边
	    this.CanCrushAround = false;
	    // 是否禁止一个批次内多次消除
	    this.ForbidContinuousCrush = false;
	    // 是否为收集物(即要到达棋盘上指定位置被收集的棋子)
	    this.IsCollection = false;
	    // 是否能被替换(比如生成小蘑菇或者小怪物从巢穴出来)
	    this.CanBeReplace = false;
	    // 是否能被糖果替换
	    this.CanSetCandy = false;
	    // 是否能覆盖毛球
	    this.CanSetMaoqiu = false;
	    // 是否可以放置蓝莓
	    this.CanSetBlueberry = false;
	    // 是否可以跟幽灵交换
	    this.CanSwapGhost = false;
	    // 是否可以被开局特殊棋子替换
	    this.CanSetStartItem = false;
	    // 颜色是否可以被修改
	    this.CanChangeColor = false;
	    // 颜色是否可以随机
	    this.CanRandomColor = false;
	    // 被消除时是否攻击棋格内的冰块
	    this.CanAttackIce = false;
	    // 能否参与lastpang
	    this.CanUseLastpang = false;
	    // 是否属于特殊棋子1
	    // 特殊棋子可以直接交换产生消除
	    this.IsSpecialChess1 = false;
	    // 是否属于特殊棋子2
	    // 特殊棋子可以直接交换产生消除
	    // 特殊棋子2可以直接跟普通棋子交换产生消除
	    this.IsSpecialChess2 = false;
	    // 被消除后的下一个形态
	    this.NextType = 0; //ChessType类型
	    // 棋子血量(如果有)
	    this.HP = 0;
	    // 棋子自定义颜色
	    this.Color = 0;
	    // 分数
	    this.Score = 0;
	    // 棋子类型
	    this.ChessType = 0; //ChessType类型
	    // 是否能被周边的消除棋子攻击
	    this.CanBeAroundCrushed = false;
	    // 是否允许棋格内棋子滑动
	    this.CanSlide = false;
	    // 棋子的收集类型
	    this.collect_type = 0; //CollectType类型
	    // 是否兼容4格BOSS
	    this.Compatible4GridBoss = false;
	};

	var ChessPropertiesArray = function ChessPropertiesArray() {
	    this.items = []; //ChessProperties对象数组
	};

	// 用于Module对外抛出数据
	var ModuleData = function ModuleData() {
	    this.value = [];
	};

	module.exports = {

	    //枚举enum
	    SlideResult: SlideResult,
	    InputOp: InputOp,
	    InputResult: InputResult,
	    GameStatus: GameStatus,
	    ChessLayer: ChessLayer,
	    ChessType: ChessType,
	    ChessColor: ChessColor,
	    AttackType: AttackType,
	    ItemId: ItemId,
	    CollectType: CollectType,
	    PassConditionType: PassConditionType,
	    CrushRule: CrushRule,
	    DropRule: DropRule,
	    AnimationId: AnimationId,

	    //结构struct
	    Position: Position,
	    Input: Input,
	    ChessData: ChessData,
	    NodeData: NodeData,
	    StageID: StageID,
	    ChessCountItem: ChessCountItem,
	    ColorCountItem: ColorCountItem,
	    AttackCountItem: AttackCountItem,
	    StartInfo: StartInfo,
	    RespawnInfo: RespawnInfo,
	    GameInfo: GameInfo,
	    PassConditionData: PassConditionData,
	    PassCondition: PassCondition,
	    SimpleStageInfo: SimpleStageInfo,
	    StatisticData: StatisticData,
	    Record: Record,
	    ChessProperties: ChessProperties,
	    ChessPropertiesArray: ChessPropertiesArray,
	    ModuleData: ModuleData
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by billbao on 2016/10/26.
	 */

	var Mgr_ = {
	    curBoard: null,
	    boardViewer: null,
	    worldViewer: null,
	    eventManager: null,
	    moduleManager: null,
	    stateMachine: null,
	    stageManager: null,
	    scoreManager: null,
	    tableManager: null,
	    passConditionManager: null,
	    aniManager: null,
	    envManager: null,
	    ruleManager: null,
	    dataEventManager: null,
	    dataCollector: null,
	    itemManager: null,
	    recordManager: null,
	    statManager: null
	};

	Mgr_.Release = function () {
	    console.log("Mgr Release");
	    this.curBoard = null;
	    this.boardViewer = null;
	    this.worldViewer = null;
	    this.eventManager = null;
	    this.moduleManager = null;
	    this.stateMachine = null;
	    this.stageManager = null;
	    this.scoreManager = null;
	    this.tableManager = null;
	    this.passConditionManager = null;
	    this.aniManager = null;
	    this.envManager = null;
	    this.ruleManager = null;
	    this.dataEventManager = null;
	    this.dataCollector = null;
	    this.itemManager = null;
	    this.recordManager = null;
	    this.statManager = null;
	};

	module.exports = Mgr_;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(11).newBuilder({})['import']({
	    "package": null,
	    "messages": [{
	        "name": "DescItem",
	        "fields": [{
	            "rule": "optional",
	            "type": "DESC_TYPE",
	            "name": "desc_type",
	            "id": 1
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "desc_data1",
	            "id": 2
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "desc_data2",
	            "id": 3
	        }]
	    }, {
	        "name": "PassConditionItem",
	        "fields": [{
	            "rule": "optional",
	            "type": "PASS_CONDITION_TYPE",
	            "name": "cond_type",
	            "id": 1
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "cond_data1",
	            "id": 2
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "cond_data2",
	            "id": 3
	        }]
	    }, {
	        "name": "BoardOneGrid",
	        "fields": [{
	            "rule": "repeated",
	            "type": "GridElement",
	            "name": "one_grid",
	            "id": 1
	        }]
	    }, {
	        "name": "GridElement",
	        "fields": [{
	            "rule": "optional",
	            "type": "GRID_ELEMENT_ID",
	            "name": "element_id",
	            "id": 1
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "element_data1",
	            "id": 2
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "element_data2",
	            "id": 3
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "element_data3",
	            "id": 4
	        }]
	    }, {
	        "name": "BoardAppearRule",
	        "fields": [{
	            "rule": "optional",
	            "type": "APPEAR_RULE_TYPE",
	            "name": "appear_type",
	            "id": 1
	        }, {
	            "rule": "optional",
	            "type": "GridElement",
	            "name": "appear_element",
	            "id": 2
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "appear_pos",
	            "id": 3
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "appear_data1",
	            "id": 4
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "appear_data2",
	            "id": 5
	        }]
	    }, {
	        "name": "PuzzleConfig",
	        "fields": [{
	            "rule": "optional",
	            "type": "PUZZLE_GAME_ID",
	            "name": "game_id",
	            "id": 1,
	            "options": {
	                "default": "GAME_ID_WEPANG"
	            }
	        }, {
	            "rule": "optional",
	            "type": "PUZZLE_CRUSH_METHOD",
	            "name": "cursh_method",
	            "id": 2,
	            "options": {
	                "default": "CRUSH_METHOD_3_MATCH"
	            }
	        }, {
	            "rule": "optional",
	            "type": "PUZZLE_PURPOSE",
	            "name": "puzzle_purpose",
	            "id": 3
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "puzzle_stage",
	            "id": 4,
	            "options": {
	                "default": 88
	            }
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "puzzle_ver",
	            "id": 5
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "puzzle_degree",
	            "id": 6
	        }, {
	            "rule": "optional",
	            "type": "PUZZLE_PLAYTYPE",
	            "name": "play_type",
	            "id": 7
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "step_num",
	            "id": 8
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "time_num",
	            "id": 9
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "board_row",
	            "id": 10,
	            "options": {
	                "default": 9
	            }
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "board_col",
	            "id": 11,
	            "options": {
	                "default": 9
	            }
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "chess_color",
	            "id": 12,
	            "options": {
	                "default": 7
	            }
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "onestar_score",
	            "id": 13,
	            "options": {
	                "default": 1200
	            }
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "twostar_score",
	            "id": 14,
	            "options": {
	                "default": 2400
	            }
	        }, {
	            "rule": "optional",
	            "type": "int32",
	            "name": "threestar_score",
	            "id": 15,
	            "options": {
	                "default": 3600
	            }
	        }, {
	            "rule": "repeated",
	            "type": "DescItem",
	            "name": "puzzle_desc",
	            "id": 21
	        }, {
	            "rule": "repeated",
	            "type": "PassConditionItem",
	            "name": "pass_condition",
	            "id": 22
	        }, {
	            "rule": "repeated",
	            "type": "BoardOneGrid",
	            "name": "board_grid",
	            "id": 23
	        }, {
	            "rule": "repeated",
	            "type": "BoardAppearRule",
	            "name": "appear_rule",
	            "id": 24
	        }, {
	            "rule": "optional",
	            "type": "string",
	            "name": "word_to_user",
	            "id": 25
	        }, {
	            "rule": "optional",
	            "type": "string",
	            "name": "modify_username",
	            "id": 50
	        }]
	    }],
	    "enums": [{
	        "name": "PUZZLE_GAME_ID",
	        "values": [{
	            "name": "GAME_ID_INVALID",
	            "id": 0
	        }, {
	            "name": "GAME_ID_WEPANG",
	            "id": 1
	        }, {
	            "name": "GAME_ID_WE6",
	            "id": 2
	        }, {
	            "name": "GAME_ID_ARRAY_LEN",
	            "id": 3
	        }]
	    }, {
	        "name": "PUZZLE_CRUSH_METHOD",
	        "values": [{
	            "name": "CRUSH_METHOD_INVALID",
	            "id": 0
	        }, {
	            "name": "CRUSH_METHOD_3_MATCH",
	            "id": 1
	        }, {
	            "name": "CRUSH_METHOD_TOUCH",
	            "id": 2
	        }, {
	            "name": "CRUSH_METHOD_LINECONNECTION",
	            "id": 3
	        }]
	    }, {
	        "name": "PUZZLE_PURPOSE",
	        "values": [{
	            "name": "PUZZLE_PURPOSE_INVALID",
	            "id": 0
	        }, {
	            "name": "PUZZLE_PURPOSE_NORMAL",
	            "id": 1
	        }, {
	            "name": "PUZZLE_PURPOSE_ACTIVITY",
	            "id": 2
	        }, {
	            "name": "PUZZLE_PURPOSE_WEEKLY",
	            "id": 3
	        }]
	    }, {
	        "name": "PUZZLE_PLAYTYPE",
	        "values": [{
	            "name": "PLAYTYPE_INVALID",
	            "id": 0
	        }, {
	            "name": "PLAYTYPE_LIMITED_STEP",
	            "id": 1
	        }, {
	            "name": "NOUSE_PLAYTYPE_STEP_OVER",
	            "id": 2
	        }, {
	            "name": "PLAYTYPE_LIMITED_TIME",
	            "id": 3
	        }, {
	            "name": "PLAY_TYPE_SODA",
	            "id": 4
	        }, {
	            "name": "PLAY_TYPE_DIGGER_MOSHING",
	            "id": 5
	        }, {
	            "name": "PLAY_TYPE_DIGGER_SODA",
	            "id": 6
	        }, {
	            "name": "PLAY_TYPE_DIGGER_ONEBYONE",
	            "id": 7
	        }, {
	            "name": "PLAY_TYPE_WEEKLY2_PETS_GO_HOME",
	            "id": 8
	        }, {
	            "name": "PLAY_TYPE_WEEKLY3_AI_ALPHAGO",
	            "id": 9
	        }, {
	            "name": "PLAY_TYPE_WEEKLY1_KO_BOSS",
	            "id": 10
	        }]
	    }, {
	        "name": "DESC_TYPE",
	        "values": [{
	            "name": "DESC_INVALID",
	            "id": 0
	        }, {
	            "name": "NOUSE_DESC_BOSS_ID",
	            "id": 1
	        }, {
	            "name": "NOUSE_DESC_BOSS_BLOOD",
	            "id": 2
	        }, {
	            "name": "DESC_NEW_GUILD",
	            "id": 3
	        }, {
	            "name": "DESC_SODA_LINE",
	            "id": 4
	        }, {
	            "name": "DESC_SCREEN_ROW",
	            "id": 5
	        }, {
	            "name": "DESC_SCREEN_COL",
	            "id": 6
	        }, {
	            "name": "DESC_WEEKLY_BOSS_BLOOD",
	            "id": 7
	        }, {
	            "name": "DESC_ICE_BEAR_LITTLE_NUM",
	            "id": 10
	        }, {
	            "name": "DESC_ICE_BEAR_MIDDLE_NUM",
	            "id": 11
	        }, {
	            "name": "DESC_ICE_BEAR_BIG_NUM",
	            "id": 12
	        }, {
	            "name": "DESC_WEELY_AI_INTELLIGENCE",
	            "id": 13
	        }, {
	            "name": "DESC_3_PIECE_MAOMAOCHONG",
	            "id": 15
	        }, {
	            "name": "DESC_4_PIECE_MAOMAOCHONG",
	            "id": 16
	        }, {
	            "name": "DESC_5_PIECE_MAOMAOCHONG",
	            "id": 17
	        }, {
	            "name": "DESC_6_PIECE_MAOMAOCHONG",
	            "id": 18
	        }, {
	            "name": "DESC_NEW_PLAYING",
	            "id": 19
	        }]
	    }, {
	        "name": "PASS_CONDITION_TYPE",
	        "values": [{
	            "name": "PASS_CONDITION_INVALID",
	            "id": 0
	        }, {
	            "name": "PASS_CONDITION_SCORE",
	            "id": 1
	        }, {
	            "name": "PASS_CONDITION_BOSS",
	            "id": 2
	        }, {
	            "name": "PASS_CONDITION_STEP_OVER",
	            "id": 3
	        }, {
	            "name": "PASS_CONDITION_COLLECT_BALLOON",
	            "id": 10
	        }, {
	            "name": "PASS_CONDITION_COLLECT_CANDY",
	            "id": 11
	        }, {
	            "name": "PASS_CONDITION_COLLECT_SUNNY_DOLL",
	            "id": 12
	        }, {
	            "name": "PASS_CONDITION_COLLECT_NORMAL_1",
	            "id": 21
	        }, {
	            "name": "PASS_CONDITION_COLLECT_NORMAL_2",
	            "id": 22
	        }, {
	            "name": "PASS_CONDITION_COLLECT_NORMAL_3",
	            "id": 23
	        }, {
	            "name": "PASS_CONDITION_COLLECT_NORMAL_4",
	            "id": 24
	        }, {
	            "name": "PASS_CONDITION_COLLECT_NORMAL_5",
	            "id": 25
	        }, {
	            "name": "PASS_CONDITION_COLLECT_NORMAL_6",
	            "id": 26
	        }, {
	            "name": "PASS_CONDITION_COLLECT_NORMAL_7",
	            "id": 27
	        }, {
	            "name": "PASS_CONDITION_COLLECT_QIZI_SHOCKWAVE",
	            "id": 30
	        }, {
	            "name": "PASS_CONDITION_COLLECT_QIZI_BLAST",
	            "id": 31
	        }, {
	            "name": "PASS_CONDITION_COLLECT_QIZI_GHOST",
	            "id": 32
	        }, {
	            "name": "PASS_CONDITION_COLLECT_BOTTOM_ICE",
	            "id": 40
	        }, {
	            "name": "PASS_CONDITION_COLLECT_WOODENBOX",
	            "id": 41
	        }, {
	            "name": "PASS_CONDITION_GENERATE_GRASS",
	            "id": 42
	        }, {
	            "name": "PASS_CONDITION_AIBAO",
	            "id": 43
	        }, {
	            "name": "PASS_CONDITION_SODA_QIZI",
	            "id": 44
	        }, {
	            "name": "PASS_CONDITION_WIPEOUT_MAOQIU",
	            "id": 45
	        }, {
	            "name": "PASS_CONDITION_COLLECT_PAPER",
	            "id": 46
	        }, {
	            "name": "PASS_CONDITION_COLLECT_CLOUD_JEWEL",
	            "id": 47
	        }, {
	            "name": "PASS_CONDITION_COLLECT_CLOUD_REDPACKET",
	            "id": 48
	        }, {
	            "name": "PASS_CONDITION_COLLECT_4COLOR_CLOVER",
	            "id": 49
	        }, {
	            "name": "PASS_CONDITION_COLLECT_5COLOR_FLOWER",
	            "id": 50
	        }, {
	            "name": "PASS_CONDITION_COLLECT_BOBOTOU",
	            "id": 51
	        }, {
	            "name": "PASS_CONDITION_COLLECT_YINGHUA",
	            "id": 52
	        }, {
	            "name": "PASS_CONDITION_COLLECT_MAOMAOCHONG",
	            "id": 53
	        }, {
	            "name": "PASS_CONDITION_COLLECT_JINGLE_BELL",
	            "id": 54
	        }, {
	            "name": "PASS_CONDITION_COLLECT_HAWK_AND_CHICKEN_CHICKEN",
	            "id": 55
	        }, {
	            "name": "PASS_CONDITION_PAVER_PATH",
	            "id": 56
	        }, {
	            "name": "PASS_CONDITION_ELIMINATE_MUSHROOM_BIG",
	            "id": 57
	        }, {
	            "name": "PASS_CONDITION_COLLECT_DOUGHNUT",
	            "id": 58
	        }, {
	            "name": "PASS_CONDITION_COLLECT_STAR_TANK_STAR",
	            "id": 59
	        }, {
	            "name": "PASS_CONDITION_ELIMINATE_FOAM_GUN",
	            "id": 60
	        }, {
	            "name": "PASS_CONDITION_COLLECT_SUN_TANK_SUN",
	            "id": 61
	        }, {
	            "name": "PASS_CONDITION_ELIMINATE_WE6_HEXAGON_MONSTER",
	            "id": 62
	        }, {
	            "name": "PASS_CONDITION_ELIMINATE_WEP_SQUARE_MONSTER_STAGE",
	            "id": 63
	        }, {
	            "name": "PASS_CONDITION_ELIMINATE_WEP_SQUARE_MONSTER_WEEKLY",
	            "id": 64
	        }, {
	            "name": "PASS_CONDITION_ELIMINATE_WEP_SQUARE_SONW_MONSTER",
	            "id": 65
	        }, {
	            "name": "PASS_CONDITION_COLLECT_GOLD_COIN",
	            "id": 66
	        }, {
	            "name": "PASS_CONDITION_ELIMINATE_SHIELD",
	            "id": 67
	        }]
	    }, {
	        "name": "GRID_ELEMENT_ID",
	        "values": [{
	            "name": "ELEMENT_ID_INVALID",
	            "id": 0
	        }, {
	            "name": "ELEMENT_QIGE_NULL",
	            "id": 1
	        }, {
	            "name": "ELEMENT_QIGE_CONTAINER",
	            "id": 2
	        }, {
	            "name": "ELEMENT_QIGE_CONTAINER_1",
	            "id": 3
	        }, {
	            "name": "ELEMENT_QIGE_CONTAINER_2",
	            "id": 4
	        }, {
	            "name": "ELEMENT_QIGE_SODALINE",
	            "id": 6
	        }, {
	            "name": "ELEMENT_QIGE_SODALINE_1",
	            "id": 7
	        }, {
	            "name": "ELEMENT_QIGE_SODALINE_2",
	            "id": 8
	        }, {
	            "name": "ELEMENT_QIGE_CLEAR",
	            "id": 100
	        }, {
	            "name": "ELEMENT_QIGE_END",
	            "id": 199
	        }, {
	            "name": "ELEMENT_GONGNENG_BEGIN",
	            "id": 1000
	        }, {
	            "name": "ELEMENT_GONGNENG_WORMHOLE_START",
	            "id": 1001
	        }, {
	            "name": "ELEMENT_GONGNENG_WORMHOLE_END",
	            "id": 1002
	        }, {
	            "name": "ELEMENT_GONGNENG_BARRIER_RIGHTUP",
	            "id": 1003
	        }, {
	            "name": "ELEMENT_GONGNENG_BARRIER_RIGHTDOWN",
	            "id": 1004
	        }, {
	            "name": "ELEMENT_GONGNENG_BARRIER_DOWN",
	            "id": 1005
	        }, {
	            "name": "ELEMENT_GONGNENG_BARRIER_RIGHT",
	            "id": 1006
	        }, {
	            "name": "ELEMENT_GONGNENG_VERTICAL_TUNNEL_START",
	            "id": 1007
	        }, {
	            "name": "ELEMENT_GONGNENG_VERTICAL_TUNNEL_END",
	            "id": 1008
	        }, {
	            "name": "ELEMENT_GONGNENG_DROPPIONT_NORMAL",
	            "id": 1010
	        }, {
	            "name": "ELEMENT_GONGNENG_DROPPIONT_SPECIAL",
	            "id": 1011
	        }, {
	            "name": "ELEMENT_GONGNENG_APPEARPIONT_UP",
	            "id": 1012
	        }, {
	            "name": "ELEMENT_GONGNENG_COLLECTPIONT_BALLOON",
	            "id": 1020
	        }, {
	            "name": "ELEMENT_GONGNENG_COLLECTPIONT_SUGAR",
	            "id": 1021
	        }, {
	            "name": "ELEMENT_GONGNENG_COLLECTPIONT_SODA",
	            "id": 1022
	        }, {
	            "name": "ELEMENT_GONGNENG_COLLECTPIONT_CAOLIU",
	            "id": 1024
	        }, {
	            "name": "ELEMENT_GONGNENG_TRAPDOOR_FRONT",
	            "id": 1030
	        }, {
	            "name": "ELEMENT_GONGNENG_TRAPDOOR_BACK",
	            "id": 1031
	        }, {
	            "name": "ELEMENT_GONGNENG_BLACKHOLE_ARRAY",
	            "id": 1032
	        }, {
	            "name": "ELEMENT_GONGNENG_MAOMAOCHONG",
	            "id": 1040
	        }, {
	            "name": "ELEMENT_GONGNENG_CONVEYOR",
	            "id": 1060
	        }, {
	            "name": "ELEMENT_GONGNENG_CONVEYOR_UP",
	            "id": 1061
	        }, {
	            "name": "ELEMENT_GONGNENG_CONVEYOR_DOWN",
	            "id": 1062
	        }, {
	            "name": "ELEMENT_GONGNENG_CONVEYOR_RIGHT",
	            "id": 1063
	        }, {
	            "name": "ELEMENT_GONGNENG_CONVEYOR_LEFT",
	            "id": 1064
	        }, {
	            "name": "ELEMENT_GONGNENG_CONVEYOR_UP_RIGHT",
	            "id": 1065
	        }, {
	            "name": "ELEMENT_GONGNENG_CONVEYOR_DOWN_RIGHT",
	            "id": 1066
	        }, {
	            "name": "ELEMENT_GONGNENG_CONVEYOR_UP_LEFT",
	            "id": 1067
	        }, {
	            "name": "ELEMENT_GONGNENG_CONVEYOR_DOWN_LEFT",
	            "id": 1068
	        }, {
	            "name": "ELEMENT_GONGNENG_GOHOME_PATH",
	            "id": 1080
	        }, {
	            "name": "ELEMENT_GONGNENG_PAVER_PATH",
	            "id": 1100
	        }, {
	            "name": "ELEMENT_GONGNENG_END",
	            "id": 1999
	        }, {
	            "name": "ELEMENT_QIDI_BEGIN",
	            "id": 2000
	        }, {
	            "name": "ELEMENT_QIDI_GRASSLAND",
	            "id": 2001
	        }, {
	            "name": "ELEMENT_QIDI_WITHERED_GRASS",
	            "id": 2002
	        }, {
	            "name": "ELEMENT_QIDI_ICE_1L",
	            "id": 2005
	        }, {
	            "name": "ELEMENT_QIDI_ICE_2L",
	            "id": 2006
	        }, {
	            "name": "ELEMENT_QIDI_ICE_3L",
	            "id": 2007
	        }, {
	            "name": "ELEMENT_QIDI_ICE_4L",
	            "id": 2008
	        }, {
	            "name": "ELEMENT_QIDI_ICE_5L",
	            "id": 2009
	        }, {
	            "name": "ELEMENT_QIDI_END",
	            "id": 2999
	        }, {
	            "name": "ELEMENT_QIMIAN_BEGIN",
	            "id": 3000
	        }, {
	            "name": "ELEMENT_QIMIAN_CAGE_1L",
	            "id": 3005
	        }, {
	            "name": "ELEMENT_QIMIAN_CAGE_2L",
	            "id": 3006
	        }, {
	            "name": "ELEMENT_QIMIAN_CAGE_3L",
	            "id": 3007
	        }, {
	            "name": "ELEMENT_QIMIAN_CAGE_4L",
	            "id": 3008
	        }, {
	            "name": "ELEMENT_QIMIAN_CAGE_5L",
	            "id": 3009
	        }, {
	            "name": "ELEMENT_QIMIAN_PAPER_1L",
	            "id": 3010
	        }, {
	            "name": "ELEMENT_QIMIAN_PAPER_2L",
	            "id": 3011
	        }, {
	            "name": "ELEMENT_QIMIAN_PAPER_3L",
	            "id": 3012
	        }, {
	            "name": "ELEMENT_QIMIAN_PAPER_4L",
	            "id": 3013
	        }, {
	            "name": "ELEMENT_QIMIAN_PAPER_5L",
	            "id": 3014
	        }, {
	            "name": "ELEMENT_QIMIAN_MAOQIU_1L",
	            "id": 3015
	        }, {
	            "name": "ELEMENT_QIMIAN_MAOQIU_2L",
	            "id": 3016
	        }, {
	            "name": "ELEMENT_QIMIAN_MAOQIU_3L",
	            "id": 3017
	        }, {
	            "name": "ELEMENT_QIMIAN_MAOQIU_4L",
	            "id": 3018
	        }, {
	            "name": "ELEMENT_QIMIAN_MAOQIU_5L",
	            "id": 3019
	        }, {
	            "name": "ELEMENT_QIMIAN_FOAM",
	            "id": 3020
	        }, {
	            "name": "ELEMENT_QIMIAN_SNAIL_POO",
	            "id": 3021
	        }, {
	            "name": "ELEMENT_QIMIAN_SNAIL",
	            "id": 3030
	        }, {
	            "name": "ELEMENT_QIMIAN_SNAIL_LEFT",
	            "id": 3031
	        }, {
	            "name": "ELEMENT_QIMIAN_SNAIL_RIGHT",
	            "id": 3032
	        }, {
	            "name": "ELEMENT_QIMIAN_SNAIL_UP",
	            "id": 3033
	        }, {
	            "name": "ELEMENT_QIMIAN_SNAIL_DOWN",
	            "id": 3034
	        }, {
	            "name": "ELEMENT_QIMIAN_SNAIL_LEFTUP",
	            "id": 3035
	        }, {
	            "name": "ELEMENT_QIMIAN_SNAIL_LEFTDOWN",
	            "id": 3036
	        }, {
	            "name": "ELEMENT_QIMIAN_SNAIL_RIGHTUP",
	            "id": 3037
	        }, {
	            "name": "ELEMENT_QIMIAN_SNAIL_RIGHTDOWN",
	            "id": 3038
	        }, {
	            "name": "ELEMENT_QIMIAN_END",
	            "id": 3999
	        }, {
	            "name": "ELEMENT_QIZI_BEGIN",
	            "id": 4000
	        }, {
	            "name": "ELEMENT_QIZI_NORMAL",
	            "id": 4010
	        }, {
	            "name": "ELEMENT_QIZI_NORMAL_1",
	            "id": 4011
	        }, {
	            "name": "ELEMENT_QIZI_NORMAL_2",
	            "id": 4012
	        }, {
	            "name": "ELEMENT_QIZI_NORMAL_3",
	            "id": 4013
	        }, {
	            "name": "ELEMENT_QIZI_NORMAL_4",
	            "id": 4014
	        }, {
	            "name": "ELEMENT_QIZI_NORMAL_5",
	            "id": 4015
	        }, {
	            "name": "ELEMENT_QIZI_NORMAL_6",
	            "id": 4016
	        }, {
	            "name": "ELEMENT_QIZI_NORMAL_7",
	            "id": 4017
	        }, {
	            "name": "ELEMENT_QIZI_NORMAL_RANDOM",
	            "id": 4018
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_UP_DOWN",
	            "id": 4020
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_1",
	            "id": 4021
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_2",
	            "id": 4022
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_3",
	            "id": 4023
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_4",
	            "id": 4024
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_5",
	            "id": 4025
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_6",
	            "id": 4026
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_7",
	            "id": 4027
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_RANDOM",
	            "id": 4028
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT",
	            "id": 4030
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_1",
	            "id": 4031
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_2",
	            "id": 4032
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_3",
	            "id": 4033
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_4",
	            "id": 4034
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_5",
	            "id": 4035
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_6",
	            "id": 4036
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_7",
	            "id": 4037
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_RANDOM",
	            "id": 4038
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN",
	            "id": 4040
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_1",
	            "id": 4041
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_2",
	            "id": 4042
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_3",
	            "id": 4043
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_4",
	            "id": 4044
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_5",
	            "id": 4045
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_6",
	            "id": 4046
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_7",
	            "id": 4047
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTUP_RINGHTDOWN_RANDOM",
	            "id": 4048
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP",
	            "id": 4050
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_1",
	            "id": 4051
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_2",
	            "id": 4052
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_3",
	            "id": 4053
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_4",
	            "id": 4054
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_5",
	            "id": 4055
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_6",
	            "id": 4056
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_7",
	            "id": 4057
	        }, {
	            "name": "ELEMENT_QIZI_SHOCKWAVE_LEFTDOWN_RINGHTUP_RANDOM",
	            "id": 4058
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_CYCLONE",
	            "id": 4060
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_CYCLONE_1",
	            "id": 4061
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_CYCLONE_2",
	            "id": 4062
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_CYCLONE_3",
	            "id": 4063
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_CYCLONE_4",
	            "id": 4064
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_CYCLONE_5",
	            "id": 4065
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_CYCLONE_6",
	            "id": 4066
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_CYCLONE_7",
	            "id": 4067
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_CYCLONE_RANDOM",
	            "id": 4068
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_TRIANGLE",
	            "id": 4070
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_TRIANGLE_1",
	            "id": 4071
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_TRIANGLE_2",
	            "id": 4072
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_TRIANGLE_3",
	            "id": 4073
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_TRIANGLE_4",
	            "id": 4074
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_TRIANGLE_5",
	            "id": 4075
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_TRIANGLE_6",
	            "id": 4076
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_TRIANGLE_7",
	            "id": 4077
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_TRIANGLE_RANDOM",
	            "id": 4078
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SNOWFLAKE",
	            "id": 4080
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SNOWFLAKE_1",
	            "id": 4081
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SNOWFLAKE_2",
	            "id": 4082
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SNOWFLAKE_3",
	            "id": 4083
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SNOWFLAKE_4",
	            "id": 4084
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SNOWFLAKE_5",
	            "id": 4085
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SNOWFLAKE_6",
	            "id": 4086
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SNOWFLAKE_7",
	            "id": 4087
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SNOWFLAKE_RANDOM",
	            "id": 4088
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SUNFLOWER",
	            "id": 4090
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SUNFLOWER_1",
	            "id": 4091
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SUNFLOWER_2",
	            "id": 4092
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SUNFLOWER_3",
	            "id": 4093
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SUNFLOWER_4",
	            "id": 4094
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SUNFLOWER_5",
	            "id": 4095
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SUNFLOWER_6",
	            "id": 4096
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SUNFLOWER_7",
	            "id": 4097
	        }, {
	            "name": "ELEMENT_QIZI_BLAST_SUNFLOWER_RANDOM",
	            "id": 4098
	        }, {
	            "name": "ELEMENT_QIZI_STEPBOMB",
	            "id": 4100
	        }, {
	            "name": "ELEMENT_QIZI_STEPBOMB_1",
	            "id": 4101
	        }, {
	            "name": "ELEMENT_QIZI_STEPBOMB_2",
	            "id": 4102
	        }, {
	            "name": "ELEMENT_QIZI_STEPBOMB_3",
	            "id": 4103
	        }, {
	            "name": "ELEMENT_QIZI_STEPBOMB_4",
	            "id": 4104
	        }, {
	            "name": "ELEMENT_QIZI_STEPBOMB_5",
	            "id": 4105
	        }, {
	            "name": "ELEMENT_QIZI_STEPBOMB_6",
	            "id": 4106
	        }, {
	            "name": "ELEMENT_QIZI_STEPBOMB_7",
	            "id": 4107
	        }, {
	            "name": "ELEMENT_QIZI_STEPBOMB_RANDOM",
	            "id": 4108
	        }, {
	            "name": "ELEMENT_QIZI_EXTRASTEP",
	            "id": 4110
	        }, {
	            "name": "ELEMENT_QIZI_EXTRASTEP_1",
	            "id": 4111
	        }, {
	            "name": "ELEMENT_QIZI_EXTRASTEP_2",
	            "id": 4112
	        }, {
	            "name": "ELEMENT_QIZI_EXTRASTEP_3",
	            "id": 4113
	        }, {
	            "name": "ELEMENT_QIZI_EXTRASTEP_4",
	            "id": 4114
	        }, {
	            "name": "ELEMENT_QIZI_EXTRASTEP_5",
	            "id": 4115
	        }, {
	            "name": "ELEMENT_QIZI_EXTRASTEP_6",
	            "id": 4116
	        }, {
	            "name": "ELEMENT_QIZI_EXTRASTEP_7",
	            "id": 4117
	        }, {
	            "name": "ELEMENT_QIZI_EXTRASTEP_RANDOM",
	            "id": 4118
	        }, {
	            "name": "ELEMENT_QIZI_EXTRATIME",
	            "id": 4120
	        }, {
	            "name": "ELEMENT_QIZI_EXTRATIME_1",
	            "id": 4121
	        }, {
	            "name": "ELEMENT_QIZI_EXTRATIME_2",
	            "id": 4122
	        }, {
	            "name": "ELEMENT_QIZI_EXTRATIME_3",
	            "id": 4123
	        }, {
	            "name": "ELEMENT_QIZI_EXTRATIME_4",
	            "id": 4124
	        }, {
	            "name": "ELEMENT_QIZI_EXTRATIME_5",
	            "id": 4125
	        }, {
	            "name": "ELEMENT_QIZI_EXTRATIME_6",
	            "id": 4126
	        }, {
	            "name": "ELEMENT_QIZI_EXTRATIME_7",
	            "id": 4127
	        }, {
	            "name": "ELEMENT_QIZI_EXTRATIME_RANDOM",
	            "id": 4128
	        }, {
	            "name": "ELEMENT_QIZI_SODA_BUBBLE",
	            "id": 4130
	        }, {
	            "name": "ELEMENT_QIZI_SODA_BUBBLE_1",
	            "id": 4131
	        }, {
	            "name": "ELEMENT_QIZI_SODA_BUBBLE_2",
	            "id": 4132
	        }, {
	            "name": "ELEMENT_QIZI_SODA_BUBBLE_3",
	            "id": 4133
	        }, {
	            "name": "ELEMENT_QIZI_SODA_BUBBLE_4",
	            "id": 4134
	        }, {
	            "name": "ELEMENT_QIZI_SODA_BUBBLE_5",
	            "id": 4135
	        }, {
	            "name": "ELEMENT_QIZI_SODA_BUBBLE_6",
	            "id": 4136
	        }, {
	            "name": "ELEMENT_QIZI_SODA_BUBBLE_7",
	            "id": 4137
	        }, {
	            "name": "ELEMENT_QIZI_SODA_BUBBLE_RANDOM",
	            "id": 4138
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_SMALL_MONSTER",
	            "id": 4140
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_SMALL_MONSTER_1",
	            "id": 4141
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_SMALL_MONSTER_2",
	            "id": 4142
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_SMALL_MONSTER_3",
	            "id": 4143
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_SMALL_MONSTER_4",
	            "id": 4144
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_SMALL_MONSTER_5",
	            "id": 4145
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_SMALL_MONSTER_6",
	            "id": 4146
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_SMALL_MONSTER_7",
	            "id": 4147
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_SMALL_MONSTER_RANDOM",
	            "id": 4148
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_BIG_MONSTER",
	            "id": 4150
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_BIG_MONSTER_1",
	            "id": 4151
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_BIG_MONSTER_2",
	            "id": 4152
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_BIG_MONSTER_3",
	            "id": 4153
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_BIG_MONSTER_4",
	            "id": 4154
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_BIG_MONSTER_5",
	            "id": 4155
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_BIG_MONSTER_6",
	            "id": 4156
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_BIG_MONSTER_7",
	            "id": 4157
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_BIG_MONSTER_RANDOM",
	            "id": 4158
	        }, {
	            "name": "ELEMENT_QIZI_PAVER",
	            "id": 4160
	        }, {
	            "name": "ELEMENT_QIZI_PAVER_1",
	            "id": 4161
	        }, {
	            "name": "ELEMENT_QIZI_PAVER_2",
	            "id": 4162
	        }, {
	            "name": "ELEMENT_QIZI_PAVER_3",
	            "id": 4163
	        }, {
	            "name": "ELEMENT_QIZI_PAVER_4",
	            "id": 4164
	        }, {
	            "name": "ELEMENT_QIZI_PAVER_5",
	            "id": 4165
	        }, {
	            "name": "ELEMENT_QIZI_PAVER_6",
	            "id": 4166
	        }, {
	            "name": "ELEMENT_QIZI_PAVER_7",
	            "id": 4167
	        }, {
	            "name": "ELEMENT_QIZI_PAVER_RANDOM",
	            "id": 4168
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_1L",
	            "id": 4170
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_1L_1",
	            "id": 4171
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_1L_2",
	            "id": 4172
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_1L_3",
	            "id": 4173
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_1L_4",
	            "id": 4174
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_1L_5",
	            "id": 4175
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_1L_6",
	            "id": 4176
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_1L_7",
	            "id": 4177
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_1L_RANDOM",
	            "id": 4178
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_2L",
	            "id": 4180
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_2L_1",
	            "id": 4181
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_2L_2",
	            "id": 4182
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_2L_3",
	            "id": 4183
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_2L_4",
	            "id": 4184
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_2L_5",
	            "id": 4185
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_2L_6",
	            "id": 4186
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_2L_7",
	            "id": 4187
	        }, {
	            "name": "ELEMENT_QIZI_JINGLE_BELL_2L_RANDOM",
	            "id": 4188
	        }, {
	            "name": "ELEMENT_QIZI_TREASURE_BOX",
	            "id": 4190
	        }, {
	            "name": "ELEMENT_QIZI_TREASURE_BOX_1",
	            "id": 4191
	        }, {
	            "name": "ELEMENT_QIZI_TREASURE_BOX_2",
	            "id": 4192
	        }, {
	            "name": "ELEMENT_QIZI_TREASURE_BOX_3",
	            "id": 4193
	        }, {
	            "name": "ELEMENT_QIZI_TREASURE_BOX_4",
	            "id": 4194
	        }, {
	            "name": "ELEMENT_QIZI_TREASURE_BOX_5",
	            "id": 4195
	        }, {
	            "name": "ELEMENT_QIZI_TREASURE_BOX_6",
	            "id": 4196
	        }, {
	            "name": "ELEMENT_QIZI_TREASURE_BOX_7",
	            "id": 4197
	        }, {
	            "name": "ELEMENT_QIZI_TREASURE_BOX_RANDOM",
	            "id": 4198
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_1L",
	            "id": 4200
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_1L_1",
	            "id": 4201
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_1L_2",
	            "id": 4202
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_1L_3",
	            "id": 4203
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_1L_4",
	            "id": 4204
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_1L_5",
	            "id": 4205
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_1L_6",
	            "id": 4206
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_1L_7",
	            "id": 4207
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_1L_RANDOM",
	            "id": 4208
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_2L",
	            "id": 4210
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_2L_1",
	            "id": 4211
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_2L_2",
	            "id": 4212
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_2L_3",
	            "id": 4213
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_2L_4",
	            "id": 4214
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_2L_5",
	            "id": 4215
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_2L_6",
	            "id": 4216
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_2L_7",
	            "id": 4217
	        }, {
	            "name": "ELEMENT_QIZI_EGG_NEST_2L_RANDOM",
	            "id": 4218
	        }, {
	            "name": "ELEMENT_QIZI_GHOST",
	            "id": 4501
	        }, {
	            "name": "ELEMENT_QIZI_CHANGE_COLOR",
	            "id": 4502
	        }, {
	            "name": "ELEMENT_QIZI_GOLD_COIN",
	            "id": 4503
	        }, {
	            "name": "ELEMENT_QIZI_4COLOR_CLOVER",
	            "id": 4504
	        }, {
	            "name": "ELEMENT_QIZI_5COLOR_FLOWER",
	            "id": 4505
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_MONSTER_NEST",
	            "id": 4506
	        }, {
	            "name": "ELEMENT_QIZI_CHANGE_COLOR_JINGLE_BELL_1L",
	            "id": 4507
	        }, {
	            "name": "ELEMENT_QIZI_CHANGE_COLOR_JINGLE_BELL_2L",
	            "id": 4508
	        }, {
	            "name": "ELEMENT_QIZI_CHANGE_COLOR_JINGLE_BELL_3L",
	            "id": 4509
	        }, {
	            "name": "ELEMENT_QIZI_WOODENBOX_1L",
	            "id": 4510
	        }, {
	            "name": "ELEMENT_QIZI_WOODENBOX_2L",
	            "id": 4511
	        }, {
	            "name": "ELEMENT_QIZI_WOODENBOX_3L",
	            "id": 4512
	        }, {
	            "name": "ELEMENT_QIZI_WOODENBOX_4L",
	            "id": 4513
	        }, {
	            "name": "ELEMENT_QIZI_WOODENBOX_5L",
	            "id": 4514
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CHOCOLATE_1L",
	            "id": 4515
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CHOCOLATE_2L",
	            "id": 4516
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CHOCOLATE_3L",
	            "id": 4517
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CHOCOLATE_4L",
	            "id": 4518
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CHOCOLATE_5L",
	            "id": 4519
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_1L",
	            "id": 4520
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_2L",
	            "id": 4521
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_3L",
	            "id": 4522
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_4L",
	            "id": 4523
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_5L",
	            "id": 4524
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_1L",
	            "id": 4525
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_2L",
	            "id": 4526
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_3L",
	            "id": 4527
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_4L",
	            "id": 4528
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_5L",
	            "id": 4529
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_REDPACKET_1L",
	            "id": 4530
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_REDPACKET_2L",
	            "id": 4531
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_REDPACKET_3L",
	            "id": 4532
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_REDPACKET_4L",
	            "id": 4533
	        }, {
	            "name": "ELEMENT_QIZI_DIGGER_CLOUD_REDPACKET_5L",
	            "id": 4534
	        }, {
	            "name": "ELEMENT_QIZI_YINGHUACHUAN_1P",
	            "id": 4535
	        }, {
	            "name": "ELEMENT_QIZI_YINGHUACHUAN_2P",
	            "id": 4536
	        }, {
	            "name": "ELEMENT_QIZI_YINGHUACHUAN_3P",
	            "id": 4537
	        }, {
	            "name": "ELEMENT_QIZI_YINGHUACHUAN_4P",
	            "id": 4538
	        }, {
	            "name": "ELEMENT_QIZI_YINGHUACHUAN_5P",
	            "id": 4539
	        }, {
	            "name": "ELEMENT_ID_QIZI_BOBOTOU_1L",
	            "id": 4540
	        }, {
	            "name": "ELEMENT_ID_QIZI_BOBOTOU_2L",
	            "id": 4541
	        }, {
	            "name": "ELEMENT_ID_QIZI_BOBOTOU_3L",
	            "id": 4542
	        }, {
	            "name": "ELEMENT_ID_QIZI_BOBOTOU_4L",
	            "id": 4543
	        }, {
	            "name": "ELEMENT_ID_QIZI_BOBOTOU_5L",
	            "id": 4544
	        }, {
	            "name": "ELEMENT_QIZI_COLLECT_BALLOON",
	            "id": 4550
	        }, {
	            "name": "ELEMENT_QIZI_COLLECT_CANDY",
	            "id": 4551
	        }, {
	            "name": "ELEMENT_QIZI_SUNNY_DOLL_1",
	            "id": 4552
	        }, {
	            "name": "ELEMENT_QIZI_SUNNY_DOLL_2",
	            "id": 4553
	        }, {
	            "name": "ELEMENT_QIZI_SUNNY_DOLL_3",
	            "id": 4554
	        }, {
	            "name": "ELEMENT_QIZI_COLLECT_4",
	            "id": 4555
	        }, {
	            "name": "ELEMENT_QIZI_COLLECT_5",
	            "id": 4556
	        }, {
	            "name": "ELEMENT_QIZI_COLLECT_6",
	            "id": 4557
	        }, {
	            "name": "ELEMENT_QIZI_COLLECT_7",
	            "id": 4558
	        }, {
	            "name": "ELEMENT_QIZI_COLLECT_8",
	            "id": 4559
	        }, {
	            "name": "ELEMENT_QIZI_BUCKET",
	            "id": 4560
	        }, {
	            "name": "ELEMENT_QIZI_WATER",
	            "id": 4561
	        }, {
	            "name": "ELEMENT_QIZI_MUSHROOM_BIG",
	            "id": 4562
	        }, {
	            "name": "ELEMENT_QIZI_MUSHROOM_SMALL",
	            "id": 4563
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_START",
	            "id": 4564
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_END",
	            "id": 4565
	        }, {
	            "name": "ELEMENT_QIZI_DOUGHNUT",
	            "id": 4566
	        }, {
	            "name": "ELEMENT_QIZI_CANDY_JAR",
	            "id": 4567
	        }, {
	            "name": "ELEMENT_QIZI_HAWK_AND_CHICKEN_HAWK",
	            "id": 4568
	        }, {
	            "name": "ELEMENT_QIZI_HAWK_AND_CHICKEN_CHICKEN",
	            "id": 4569
	        }, {
	            "name": "ELEMENT_QIZI_HAWK_AND_CHICKEN_BIGCHICKEN",
	            "id": 4570
	        }, {
	            "name": "ELEMENT_QIZI_STAR_TANK_TANK",
	            "id": 4571
	        }, {
	            "name": "ELEMENT_QIZI_STAR_TANK_STAR",
	            "id": 4572
	        }, {
	            "name": "ELEMENT_QIZI_SUN_TANK_TANK",
	            "id": 4573
	        }, {
	            "name": "ELEMENT_QIZI_SUN_TANK_SUN",
	            "id": 4574
	        }, {
	            "name": "ELEMENT_QIZI_ANTI_SHOCKWAVE_STONE",
	            "id": 4575
	        }, {
	            "name": "ELEMENT_QIZI_COLOR_HATCHING_EGG",
	            "id": 4576
	        }, {
	            "name": "ELEMENT_QIZI_GOHOME_ANGER_FRUIT",
	            "id": 4577
	        }, {
	            "name": "ELEMENT_QIZI_FOAM_GUN",
	            "id": 4580
	        }, {
	            "name": "ELEMENT_QIZI_FOAM_GUN_LEFT",
	            "id": 4581
	        }, {
	            "name": "ELEMENT_QIZI_FOAM_GUN_RIGHT",
	            "id": 4582
	        }, {
	            "name": "ELEMENT_QIZI_FOAM_GUN_UP",
	            "id": 4583
	        }, {
	            "name": "ELEMENT_QIZI_FOAM_GUN_DOWN",
	            "id": 4584
	        }, {
	            "name": "ELEMENT_QIZI_FOAM_GUN_LEFTUP",
	            "id": 4585
	        }, {
	            "name": "ELEMENT_QIZI_FOAM_GUN_LEFTDOWN",
	            "id": 4586
	        }, {
	            "name": "ELEMENT_QIZI_FOAM_GUN_RIGHTUP",
	            "id": 4587
	        }, {
	            "name": "ELEMENT_QIZI_FOAM_GUN_RIGHTDOWN",
	            "id": 4588
	        }, {
	            "name": "ELEMENT_QIZI_WEP_WOODENBOX_STONE_12",
	            "id": 4590
	        }, {
	            "name": "ELEMENT_QIZI_WEP_WOODENBOX_STONE_23",
	            "id": 4591
	        }, {
	            "name": "ELEMENT_QIZI_WEP_WOODENBOX_STONE_34",
	            "id": 4592
	        }, {
	            "name": "ELEMENT_QIZI_WEP_WOODENBOX_STONE_41",
	            "id": 4593
	        }, {
	            "name": "ELEMENT_QIZI_WE6_WOODENBOX_STONE_123",
	            "id": 4594
	        }, {
	            "name": "ELEMENT_QIZI_WE6_WOODENBOX_STONE_234",
	            "id": 4595
	        }, {
	            "name": "ELEMENT_QIZI_WE6_WOODENBOX_STONE_345",
	            "id": 4596
	        }, {
	            "name": "ELEMENT_QIZI_WE6_WOODENBOX_STONE_456",
	            "id": 4597
	        }, {
	            "name": "ELEMENT_QIZI_WE6_WOODENBOX_STONE_561",
	            "id": 4598
	        }, {
	            "name": "ELEMENT_QIZI_WE6_WOODENBOX_STONE_612",
	            "id": 4599
	        }, {
	            "name": "ELEMENT_QIZI_WE6_HEXAGON_MONSTER_CENTER_1L",
	            "id": 4600
	        }, {
	            "name": "ELEMENT_QIZI_WE6_HEXAGON_MONSTER_EDGE_1L",
	            "id": 4601
	        }, {
	            "name": "ELEMENT_QIZI_WE6_HEXAGON_MONSTER_CENTER_2L",
	            "id": 4602
	        }, {
	            "name": "ELEMENT_QIZI_WE6_HEXAGON_MONSTER_EDGE_2L",
	            "id": 4603
	        }, {
	            "name": "ELEMENT_QIZI_WE6_HEXAGON_MONSTER_CENTER_3L",
	            "id": 4604
	        }, {
	            "name": "ELEMENT_QIZI_WE6_HEXAGON_MONSTER_EDGE_3L",
	            "id": 4605
	        }, {
	            "name": "ELEMENT_QIZI_WE6_HEXAGON_MONSTER_CENTER_4L",
	            "id": 4606
	        }, {
	            "name": "ELEMENT_QIZI_WE6_HEXAGON_MONSTER_EDGE_4L",
	            "id": 4607
	        }, {
	            "name": "ELEMENT_QIZI_WE6_HEXAGON_MONSTER_CENTER_5L",
	            "id": 4608
	        }, {
	            "name": "ELEMENT_QIZI_WE6_HEXAGON_MONSTER_EDGE_5L",
	            "id": 4609
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_MONSTER_STAGE_CENTER",
	            "id": 4610
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_MONSTER_STAGE_EDGE",
	            "id": 4611
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_MONSTER_STAGE_1",
	            "id": 4612
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_MONSTER_STAGE_2",
	            "id": 4613
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_MONSTER_WEEKLY_CENTER",
	            "id": 4615
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_MONSTER_WEEKLY_EDGE",
	            "id": 4616
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_MONSTER_WEEKLY_1",
	            "id": 4617
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_MONSTER_WEEKLY_2",
	            "id": 4618
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_SNOW_MONSTER_CENTER",
	            "id": 4620
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_SNOW_MONSTER_EDGE",
	            "id": 4621
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_SNOW_MONSTER_1",
	            "id": 4622
	        }, {
	            "name": "ELEMENT_QIZI_WEP_SQUARE_SNOW_MONSTER_2",
	            "id": 4623
	        }, {
	            "name": "ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON",
	            "id": 4630
	        }, {
	            "name": "ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_LEFT",
	            "id": 4631
	        }, {
	            "name": "ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_RIGHT",
	            "id": 4632
	        }, {
	            "name": "ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_UP",
	            "id": 4633
	        }, {
	            "name": "ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_DOWN",
	            "id": 4634
	        }, {
	            "name": "ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_LEFTUP",
	            "id": 4635
	        }, {
	            "name": "ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_LEFTDOWN",
	            "id": 4636
	        }, {
	            "name": "ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_RIGHTUP",
	            "id": 4637
	        }, {
	            "name": "ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_RIGHTDOWN",
	            "id": 4638
	        }, {
	            "name": "ELEMENT_ID_QIZI_SHIELD_1L",
	            "id": 4640
	        }, {
	            "name": "ELEMENT_ID_QIZI_SHIELD_2L",
	            "id": 4641
	        }, {
	            "name": "ELEMENT_ID_QIZI_SHIELD_3L",
	            "id": 4642
	        }, {
	            "name": "ELEMENT_ID_QIZI_SHIELD_4L",
	            "id": 4643
	        }, {
	            "name": "ELEMENT_ID_QIZI_SHIELD_5L",
	            "id": 4644
	        }, {
	            "name": "ELEMENT_QIZI_END",
	            "id": 9999
	        }]
	    }, {
	        "name": "APPEAR_RULE_TYPE",
	        "values": [{
	            "name": "APPEAR_RULE_INVALID",
	            "id": 0
	        }, {
	            "name": "APPEAR_COLLECT_STEP",
	            "id": 1
	        }, {
	            "name": "APPEAR_COLLECT_REMAIN",
	            "id": 2
	        }, {
	            "name": "APPEAR_EXTRASTEP_STEP",
	            "id": 3
	        }, {
	            "name": "APPEAR_EXTRASTEP_PROBABILITY",
	            "id": 4
	        }, {
	            "name": "APPEAR_CHANGE_COLOR_STEP",
	            "id": 5
	        }, {
	            "name": "APPEAR_CHANGE_COLOR_PROBABILITY",
	            "id": 6
	        }, {
	            "name": "APPEAR_BOBOTOU_STEP",
	            "id": 7
	        }, {
	            "name": "APPEAR_BOBOTOU_PROBABILITY",
	            "id": 8
	        }, {
	            "name": "APPEAR_EXTRATIME_STEP",
	            "id": 9
	        }, {
	            "name": "APPEAR_EXTRATIME_PROBABILITY",
	            "id": 10
	        }, {
	            "name": "APPEAR_STEPBOMB_STEP",
	            "id": 11
	        }, {
	            "name": "APPEAR_STEPBOMB_PROBABILITY",
	            "id": 12
	        }, {
	            "name": "APPEAR_SODA_BUBBLE_STEP",
	            "id": 13
	        }, {
	            "name": "APPEAR_SODA_BUBBLE_REMAIN",
	            "id": 14
	        }, {
	            "name": "APPEAR_GOHOME_MOSTER_RISE_AGAIN",
	            "id": 15
	        }, {
	            "name": "APPEAR_GOHOME_MOSTER_PER_PET_WALKSTEP",
	            "id": 16
	        }, {
	            "name": "APPEAR_GOHOME_MOSTER_PER_USER_FINGERSLIDING",
	            "id": 17
	        }, {
	            "name": "APPEAR_GOHOME_MOSTER_USER_FINGERSLIDING",
	            "id": 18
	        }, {
	            "name": "APPEAR_JINGLE_BELL_STEP",
	            "id": 19
	        }, {
	            "name": "APPEAR_JINGLE_BELL_PROBABILITY",
	            "id": 20
	        }, {
	            "name": "APPEAR_JINGLE_BELL_CIRCLE",
	            "id": 21
	        }, {
	            "name": "APPEAR_SODA_BUBBLE_CIRCLE",
	            "id": 22
	        }, {
	            "name": "APPEAR_GOLD_COIN_STEP",
	            "id": 23
	        }, {
	            "name": "APPEAR_GOLD_COIN_PROBABILITY",
	            "id": 24
	        }, {
	            "name": "APPEAR_TREASURE_BOX_STEP",
	            "id": 25
	        }, {
	            "name": "APPEAR_TREASURE_BOX_PROBABILITY",
	            "id": 26
	        }, {
	            "name": "APPEAR_TREASURE_BOX_TRANSFORMATION",
	            "id": 27
	        }]
	    }]
	}).build();

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by evanyuan
	 * 分数管理器
	 */

	var EventId = __webpack_require__(9);
	var We4Proto = __webpack_require__(13);
	var Mgr = __webpack_require__(14);

	//攻击类型加成
	var AttachTypeAdd = {};
	var __ = We4Proto.AttackType;
	AttachTypeAdd[__.Attack_CrossShockWave] = 5000;
	AttachTypeAdd[__.Attack_ThickCrossShockWave] = 10000;
	AttachTypeAdd[__.Attack_BigHurricane] = 15000;
	AttachTypeAdd[__.Attack_Gas2Gas] = 20000;
	AttachTypeAdd[__.Attack_GasSpecial] = 20000;
	AttachTypeAdd[__.Attack_Lastpang] = 1400;
	AttachTypeAdd[__.Attack_Hurricane] = 2500;
	AttachTypeAdd[__.Attack_HorizontalShockWave] = 1000;
	AttachTypeAdd[__.Attack_VerticalShockWave] = 1000;
	AttachTypeAdd[__.Attack_Gas] = 5000;

	//收集物加成
	var CollectColorAdd = 10000;
	var CollectTypeAdd = {};
	var __type = We4Proto.ChessType;
	CollectTypeAdd[__type.CT_COLLECTBALLOON] = 10000;
	CollectTypeAdd[__type.CT_COLLECTCANDY] = 10000;

	//轮次加成
	var RoundAdd = {
		1: 0,
		2: 100,
		3: 200,
		4: 500,
		5: 1000
	};

	var ScoreManager = function () {
		function ScoreManager(gameIns) {
			_classCallCheck(this, ScoreManager);

			this.gameIns = gameIns;
			this.score = 0;
			this.lastRound = 1;
		}

		_createClass(ScoreManager, [{
			key: 'responseEvent',
			value: function responseEvent(type, data) {
				if (type == EventId.REMOVE) {
					this.resolve(data);
				}
			}
		}, {
			key: 'resolve',
			value: function resolve(data) {

				var bomb_chess = data.bomb_chess;
				var score = 0;
				var roundAdd = 0;
				var attachTypeAdd = AttachTypeAdd[data.attack_type] || 0;

				var rounds = data.rounds;
				if (rounds > 1 && this.lastRound != rounds) {
					roundAdd = rounds > 5 ? RoundAdd[5] : RoundAdd[rounds] || 0;
				}
				this.lastRound = rounds;

				bomb_chess.forEach(function (chess) {

					var chessType = chess.type;
					var chessColor = chess.color;

					if (chessType == We4Proto.ChessType.CT_NormalUnit) {
						score += 100;

						var collectColor = Mgr.passConditionManager.getCollectColor();
						if (collectColor && collectColor == chessColor) {
							score += CollectColorAdd;
						}
					} else {
						if (CollectTypeAdd[chessType]) {
							score += CollectTypeAdd[chessType];
						}
					}
				});

				this.score += Math.round((score + roundAdd + attachTypeAdd) * (1 + Mgr.envManager.GetAdditionScoreRate()));
			}
		}, {
			key: 'getScore',
			value: function getScore() {
				return this.score;
			}
		}, {
			key: 'addScore',
			value: function addScore(score) {
				this.score += Math.round(score * (1 + Mgr.envManager.GetAdditionScoreRate()));
			}
		}, {
			key: 'getStar',
			value: function getStar() {
				var score = this.score;
				var simple_stage_info_ = Mgr.stageManager.simple_stage_info();
				var star_score = simple_stage_info_.star_score;
				var star = 1;
				if (score >= star_score[1] && score < star_score[2]) {
					star = 2;
				} else if (score >= star_score[2]) {
					star = 3;
				}
				return star;
			}
		}, {
			key: 'AddScoreAddition',
			value: function AddScoreAddition(rate) {
				Mgr.envManager.SetAdditionScoreRate(Mgr.envManager.GetAdditionScoreRate() + rate / 100);
			}
		}]);

		return ScoreManager;
	}();

	module.exports = ScoreManager;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventId = __webpack_require__(9);
	var We4Proto = __webpack_require__(13);
	var WeType = __webpack_require__(20);
	var Util = __webpack_require__(21);
	var Mgr = __webpack_require__(14);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);

	var AnimationId = We4Proto.AnimationId;
	var DEBUG = WeType.DEBUG;

	/**
	 * Created by evanyuan
	 * 动画管理器
	 */

	var AniManager = function () {
		function AniManager(gameIns) {
			_classCallCheck(this, AniManager);

			this.gameIns = gameIns;
			this.queue = [];
			this.removeCache = [];
		}

		_createClass(AniManager, [{
			key: 'responseEvent',
			value: function responseEvent(type, data) {
				//console.log('Animation::' + type + '-----'); console.log(data);

				if (this.gameIns.isNode()) {
					return;
				}

				switch (type) {
					case EventId.SWAP:
						this.pushSingleAnimation(AnimationId.swap, data);
						break;

					case EventId.REMOVE:
						this.resolveRemove(data);
						break;

					case EventId.DROP:
						this.pushSingleAnimation(AnimationId.drop, data);
						break;

					case EventId.END_ONE_REMOVE_ROUND:
						this.triggerRemoveAnimation();
						break;

					default:

				}
			}
		}, {
			key: 'pushSingleAnimation',
			value: function pushSingleAnimation(id, data) {

				if (this.gameIns.isNode()) {
					return;
				}

				var aniData = this.generateAnimation(id, data);
				this.pushAnimation([aniData]);
			}
		}, {
			key: 'pushBatchAnimation',
			value: function pushBatchAnimation(dataArr) {
				if (this.gameIns.isNode()) {
					return;
				}

				var aniArr = [];
				for (var i = 0; i < dataArr.length; i++) {
					var item = dataArr[i];
					aniArr.push(this.generateAnimation(item.id, item.data));
				}
				this.pushAnimation(aniArr);
			}
		}, {
			key: 'generateAnimation',
			value: function generateAnimation(id, data) {
				return Object.assign({ animation_id: id }, data);
			}
		}, {
			key: 'resolveRemove',
			value: function resolveRemove(data) {

				var aniRemove = this.generateAnimation(AnimationId.remove, { data: data });

				if (DEBUG) {
					this.triggerRemoveAnimation(aniRemove);
				} else {
					this.removeCache.push(aniRemove);
				}
			}
		}, {
			key: 'triggerRemoveAnimation',
			value: function triggerRemoveAnimation(aniRemove) {

				var score = this.gameIns.scoreManager.getScore();
				var passCondition = Util.clone(this.gameIns.passConditionManager.getPassCondition());
				var step = this.gameIns.stageManager.getStep();

				var aniStep = this.generateAnimation(AnimationId.step, { step: step });
				var aniPassCon = this.generateAnimation(AnimationId.pass_condition, { data: passCondition });
				var aniScore = this.generateAnimation(AnimationId.score, { score: score });

				if (aniRemove && DEBUG) {
					// 调试模式
					this.pushAnimation([aniStep, aniRemove, aniPassCon, aniScore]);
				} else {
					if (!this.removeCache.length) {
						return;
					}
					var batchArr = [];
					batchArr.push(aniStep);
					batchArr = batchArr.concat(this.removeCache);
					batchArr.push(aniPassCon);
					batchArr.push(aniScore);
					this.pushAnimation(batchArr);
					this.removeCache = [];
				}
			}
		}, {
			key: 'getAnimation',
			value: function getAnimation() {
				return this.queue.shift();
			}
		}, {
			key: 'pushAnimation',
			value: function pushAnimation(ani) {
				if (Mgr.envManager.GetIsWorkerMode()) {
					postMessage({
						msg: "addAnimation",
						data: { aniData: ani, state: Mgr.curBoard.GetGameState() }
					});
				} else {
					this.queue.push(ani);
				}
			}
		}, {
			key: 'getAnimationQueue',
			value: function getAnimationQueue() {
				return this.queue;
			}
		}, {
			key: 'logAniQueue',
			value: function logAniQueue() {
				var len = this.queue.length;
				var q = this.queue;
				for (var i = 0; i < len; i++) {
					console.log(q[i]);
				}
			}

			//道具步数

		}, {
			key: 'GenerateItemStepAnimation',
			value: function GenerateItemStepAnimation(data) {
				this.pushSingleAnimation(AnimationId.itemStep, data);
			}

			//道具眼镜

		}, {
			key: 'GenerateItemGlassAnimation',
			value: function GenerateItemGlassAnimation(data) {
				this.pushSingleAnimation(AnimationId.itemGlass, data);
			}

			//道具交换

		}, {
			key: 'GenerateItemSwapAnimation',
			value: function GenerateItemSwapAnimation(data) {
				this.pushSingleAnimation(AnimationId.itemSwap, data);
			}

			//生成重排动画

		}, {
			key: 'GenerateItemRearrangeAnimation',
			value: function GenerateItemRearrangeAnimation() {

				//收集数据
				var _getData = function _getData() {
					var rowCount = Mgr.boardViewer.Row();
					var colCount = Mgr.boardViewer.Col();
					var movingItemVec = [];
					var data = [];
					for (var row = 0; row < rowCount; row++) {
						for (var col = 0; col < colCount; col++) {
							var node = Mgr.boardViewer.GetNode(row, col);
							if (node && node.NeedReArrange()) {
								movingItemVec.push(node);
							}
						}
					}
					var iTotalReArrangeCount = movingItemVec.length;

					if (iTotalReArrangeCount == 0) {
						return {};
					}
					//生成重排的飞行目标
					var randFlag = parseInt(iTotalReArrangeCount / 4 + Math.random() * iTotalReArrangeCount / 2); //(1/4) to (3/4)

					for (var i = 0; i < iTotalReArrangeCount; ++i) {
						var target = (i + randFlag) % iTotalReArrangeCount;
						data.push({
							chessData: movingItemVec[i].ToChessData(),
							position: new WeType.GridPosition(movingItemVec[target].GetPosition())
						});
					}
					return data;
				};

				this.pushSingleAnimation(AnimationId.itemRearrange, {
					data: _getData()
				});
			}

			//冒险成功

		}, {
			key: 'GeneratePassThroughAnimation',
			value: function GeneratePassThroughAnimation(data) {
				this.pushSingleAnimation(AnimationId.pass_through, data);
			}

			//步数奖励开始

		}, {
			key: 'GenerateStepRewardBeginAnimation',
			value: function GenerateStepRewardBeginAnimation(data) {
				console.log("步数奖励开始");
				this.pushSingleAnimation(AnimationId.step_reward_begin, data);
			}

			//步数奖励结束

		}, {
			key: 'GenerateStepRewardEndAnimation',
			value: function GenerateStepRewardEndAnimation(data) {
				console.log("步数奖励结束");
				this.pushSingleAnimation(AnimationId.step_reward_end, data);
			}
		}, {
			key: 'GenerateReplace',
			value: function GenerateReplace(data) {
				this.pushSingleAnimation(AnimationId.replace_chess, data);
			}

			// 糖果罐旋转动画，data包含糖果罐棋子STIT_CANDYPOT和糖果棋子CT_COLLECTCANDY数据
			// Mgr.aniManager.GenerateCandyRotation({
			//        CT_COLLECTCANDY: node.ToChessData(0),
			//        STIT_CANDYPOT: this.ToChessData(0)
			//    })


			// 某种功能棋子被攻击

		}, {
			key: 'GenerateAttack',
			value: function GenerateAttack(data) {

				this.pushSingleAnimation(AnimationId.generate_attack, data);
			}

			//处理lastpang剩余步数动画

		}, {
			key: 'handleOverageStep',
			value: function handleOverageStep() {
				var score = this.gameIns.scoreManager.getScore();
				var step = this.gameIns.stageManager.getStep();

				var aniStep = this.generateAnimation(AnimationId.step, { step: step });
				var aniScore = this.generateAnimation(AnimationId.score, { score: score });

				this.pushAnimation([aniStep, aniScore]);
			}

			//加5步动画

		}, {
			key: 'GenerateAddFiveStepAnimation',
			value: function GenerateAddFiveStepAnimation(data) {
				var step = this.gameIns.stageManager.getStep();
				var aniStep = this.generateAnimation(AnimationId.step, { step: step });

				this.pushAnimation([aniStep]);
			}

			//幽灵和特殊棋子交换结束

		}, {
			key: 'GenerateGasSpecialEndAnimation',
			value: function GenerateGasSpecialEndAnimation(data) {
				this.pushSingleAnimation(AnimationId.gas_special_end, data);
			}

			//两个幽灵棋子交换动画

		}, {
			key: 'GenerateGas2GasAnimation',
			value: function GenerateGas2GasAnimation(data) {
				this.pushSingleAnimation(AnimationId.gas_to_gas, { data: data });
			}

			//滚屏动画

		}, {
			key: 'GenerateRollingBoardAni',
			value: function GenerateRollingBoardAni(startRow, newStartRow) {
				if (Mgr.envManager.GetIsWorkerMode()) {
					postMessage({
						msg: "UpdateData",
						data: [{
							key: "GetStartRow",
							data: newStartRow
						}
						//{
						//	key: "getNodeDataList",
						//	data: this.gameIns.getNodeDataList()
						//},
						//{
						//	key: "getWorldNodeDataList",
						//	data: this.gameIns.getWorldNodeDataList()
						//}
						]
					});
				}

				this.pushSingleAnimation(AnimationId.rolling_board, { startRow: startRow, newStartRow: newStartRow, nodeDataList: this.gameIns.getWorldNodeDataList() });
			}

			//收集冰块小熊动画

		}, {
			key: 'GenerateCollectIceBearAni',
			value: function GenerateCollectIceBearAni(id) {
				this.pushSingleAnimation(AnimationId.collect_ice_bear, { id: id });
			}

			////棋子移动动画
			//GenerateChessMoveAni(layer, chess, srcPos, destPos){
			//	this.pushSingleAnimation(AnimationId.chess_move, {
			//		chess_layer: layer,
			//		chess_data: chess,
			//		src_pos: srcPos,
			//		dest_pos: destPos
			//	});
			//}

			//毛球移动动画

		}, {
			key: 'GenerateMaoQiuJumpAni',
			value: function GenerateMaoQiuJumpAni(layer, chess, srcPos, destPos) {
				Mgr.dataCollector.addAniCollect("maoqiu", AnimationId.chess_move, {
					chess_layer: layer,
					chess_data: chess,
					src_pos: srcPos,
					dest_pos: destPos
				});
				//this.pushSingleAnimation(AnimationId.chess_move, {
				//	chess_layer: layer,
				//	chess_data: chess,
				//	src_pos: srcPos,
				//	dest_pos: destPos
				//});
			}

			//毛球分裂动画

		}, {
			key: 'GenerateMaoQiuSplitAni',
			value: function GenerateMaoQiuSplitAni(srcChess, splitList) {
				Mgr.dataCollector.addAniCollect("maoqiu", AnimationId.maoqiu_split, {
					src_chess: srcChess,
					split_chess: splitList
				});
				//this.pushSingleAnimation(AnimationId.maoqiu_split, {
				//	src_chess: srcChess,
				//	split_chess: splitList
				//})
			}

			//生成一个空动画（特殊情况下用于触发ui端调用Continue逻辑）

		}, {
			key: 'GenerateEmptyAni',
			value: function GenerateEmptyAni() {
				this.pushSingleAnimation(AnimationId.empty, null);
			}
		}]);

		return AniManager;
	}();

	module.exports = AniManager;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by brandyxie
	 * 基本定义
	 */
	var we4p = we4p || __webpack_require__(13);

	var DEBUG = false;

	var GridDirection = {
	    kUnknown: 0,
	    kUp: 1,
	    kDown: 2,
	    kLeft: 3,
	    kRight: 4,
	    kLeftUp: 5,
	    kRightUp: 6,
	    kLeftDown: 7,
	    kRightDown: 8
	};

	var GridPosition = function () {
	    function GridPosition() {
	        var rowPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
	        var colPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

	        _classCallCheck(this, GridPosition);

	        if ((typeof rowPos === 'undefined' ? 'undefined' : _typeof(rowPos)) == 'object') {
	            var pos = rowPos;
	            this.row = pos.row;
	            this.col = pos.col;
	        } else {
	            this.row = rowPos;
	            this.col = colPos;
	        }
	    }

	    _createClass(GridPosition, [{
	        key: 'copyData',
	        value: function copyData(pos) {
	            this.row = pos.row;
	            this.col = pos.col;
	        }
	    }, {
	        key: 'isEqual',
	        value: function isEqual(other) {
	            return this.row == other.row && this.col == other.col;
	        }
	    }, {
	        key: 'isNotEqual',
	        value: function isNotEqual(other) {
	            return !this.isEqual(other);
	        }
	    }, {
	        key: 'isLessThan',
	        value: function isLessThan(other) {
	            if (this.row == other.row) {
	                return this.col < other.col;
	            } else {
	                return this.row < other.row;
	            }
	        }
	    }, {
	        key: 'addPos',
	        value: function addPos(v) {
	            var result = new GridPosition(this);
	            result.row += v.row;
	            result.col += v.col;
	            return result;
	        }
	    }, {
	        key: 'minuPos',
	        value: function minuPos(v) {
	            var result = new GridPosition(this);
	            result.row -= v.row;
	            result.col -= v.col;
	            return result;
	        }
	    }, {
	        key: 'Swap',
	        value: function Swap(other) {
	            var nRow = this.row;
	            var nCol = this.col;
	            this.row = other.row;
	            this.col = other.col;
	            other.row = nRow;
	            other.col = nCol;
	        }

	        //brief 位置是否有效，(-1, -1)表示无效位置

	    }, {
	        key: 'IsValid',
	        value: function IsValid() {
	            return this.row != -1 && this.col != -1;
	        }
	    }, {
	        key: 'Reset',
	        value: function Reset() {
	            this.row = -1;
	            this.col = -1;
	        }

	        // 获取other位置在当前位置上、下、左、右哪个方向
	        // 除此之外返回kUnknown

	    }, {
	        key: 'Direction',
	        value: function Direction(other) {
	            if (this.row == other.row) {
	                if (this.col + 1 == other.col) {
	                    return GridDirection.kRight;
	                } else if (this.col - 1 == other.col) {
	                    return GridDirection.kLeft;
	                }
	            } else if (this.col == other.col) {
	                if (this.row + 1 == other.row) {
	                    return GridDirection.kDown;
	                } else if (this.row - 1 == other.row) {
	                    return GridDirection.kUp;
	                }
	            }
	            return GridDirection.kUnknown;
	        }
	    }, {
	        key: 'ToPosition',
	        value: function ToPosition() {
	            var p = new we4p.Position();
	            p.row = this.row;
	            p.col = this.col;
	            return p;
	        }
	    }]);

	    return GridPosition;
	}();

	var Ref_Adapter = function Ref_Adapter(_val) {
	    _classCallCheck(this, Ref_Adapter);

	    this.val = _val;
	};

	//消除逻辑产生的大批次里的小批次序号结构


	var LittleBatchIndexStruct = function LittleBatchIndexStruct() {
	    _classCallCheck(this, LittleBatchIndexStruct);

	    this.m_extra_intervalue_value = 0;
	    this.m_parent_batch_index = 0;
	    this.m_self_batch_index = 0;
	};

	module.exports = {

	    DEBUG: DEBUG,

	    GridDirection: GridDirection,

	    "GridPosition": GridPosition,

	    Ref_Adapter: Ref_Adapter,

	    ChessLayer: we4p.ChessLayer,
	    kChessLayerBottom: we4p.ChessLayer.kChessLayer0,
	    kChessLayerChess: we4p.ChessLayer.kChessLayer1,

	    StaticItemType: we4p.ChessType,

	    "MovingItemType": {
	        MIT_0: we4p.ChessColor.kChessColorYellow, // 小鸡
	        MIT_1: we4p.ChessColor.kChessColorRed, // 红狐狸
	        MIT_2: we4p.ChessColor.kChessColorBrown, // 熊
	        MIT_3: we4p.ChessColor.kChessColorGreen, // 绿兔子
	        MIT_4: we4p.ChessColor.kChessColorBlue, // 蓝老鼠
	        MIT_5: we4p.ChessColor.kChessColorPurple, // 喵星星
	        MIT_6: we4p.ChessColor.kChessColorWhite, // 6边形的白色棋子
	        MIT_NONE: we4p.ChessColor.kChessColorNone,
	        MIT_RANDOM: we4p.ChessColor.kChessColorRandom,
	        MIT_TRANSPARENT: we4p.ChessColor.kChessColorTransparent
	    },

	    "DropWay": {
	        DropWay_Fall: 0, //从上往下掉，row++
	        DropWay_Float: 1, //从下往上掉，row--
	        DropWay_Path: 2, //沿既定的掉落路径
	        DropWay_L2R: 3, //从左到右
	        DropWay_R2L: 4, //从右到左
	        DropWay_Teleport: 5 // 瞬移
	    },

	    AttackItemType: we4p.AttackType,
	    ItemId: we4p.ItemId,

	    ExchangItemResult: {
	        EIR_None: 0,
	        EIR_NormalExchangeSucc: 1,
	        EIR_ExchangeFailed: 2,
	        // EIR_BothSpecialItemExchange,
	        // EIR_OneGasExchange,
	        ERI_ExchangeFailedFence: 3
	    },

	    "IceCollectType": {
	        None: 0,
	        One_And_Two: 1,
	        Two_And_Three: 2,
	        Three_And_Five: 3
	    },

	    "RayFaceType ": {
	        LastPangRay: 0,
	        BulletRay: 1,
	        WeekGameSkillChess: 2
	    },

	    //@brief 颜色收集物颜色,颜色是按策划设计递增的，顺序不能乱
	    "CollectionColor": {
	        CCC_NONE: -1,
	        // 红色
	        CCC_RED: 0,
	        // 黄色
	        CCC_YELLOW: 1,
	        // 绿色
	        CCC_GREEN: 2,
	        // 蓝色
	        CCC_BLUE: 3,
	        // 棕色
	        CCC_BROWN: 4,
	        //
	        CCC_COUNT: 5
	    },

	    //@brief 颜色收集物类型，如4色搜集还是5色搜集
	    "CollectionColorType": {
	        CCCT_NONE: 0,
	        CCCT_1: 1,
	        CCCT_2: 2,
	        CCCT_3: 3,
	        CCCT_4: 4,
	        CCCT_5: 5
	    },

	    "LittleBatchIndexStruct": LittleBatchIndexStruct,

	    "PuzzleGameState": {
	        PGS_NONE: 0,
	        // PGS_READYGO,  // readygo动画状态
	        // PGS_NEWBIE,   //新手状态
	        PGS_PLAYING: 1, //游戏内状态，所有游戏状态机状态都属于这个状态
	        // PGS_PAUSE,        //暂停状态
	        // PGS_BUYTOOL,      //购买道具状态，包括购买5步
	        PGS_LASTPANG: 2, //通关成功后结束状态
	        PGS_SUCCESS_END: 3, //通关成功后结束状态
	        PGS_FAIL_END: 4 //通关失败后结束状态
	    },

	    "BackGroundItemType": {
	        BGIT_BLANK: 1, // 空棋格
	        BGIT_NONE: -1 // 镂空,不能放置棋子
	    },

	    PointBombType: {
	        Bomb_NormalUnit_type: 0, // 普通爆炸
	        Bomb_VerticalShockWave_type: 1, // 垂直冲击波爆炸
	        Bomb_HorizontalShockWave_type: 2, // 水平冲击波爆炸
	        Bomb_Hurricane_type: 3, // 旋风爆炸
	        Bomb_Gas_type: 4, // 幽灵同普通棋子交换点爆炸
	        Bomb_Gas_Gas_type: 5,
	        Bomb_Special_Gas_type: 6, // 幽灵同特殊棋子交换点爆炸
	        Bomb_CrossShockWave_type: 7, // 十字冲击波爆炸
	        Bomb_BigHurricane_type: 8, // 巨炸: 0,两个旋风交换爆炸
	        Bomb_ThickCrossShock_type: 9, // 粗十字冲击波爆炸
	        Bomb_LastPang_type: 10, // LastPang引起的爆炸
	        Bomb_Unit_Fly_Gas_type: 11, // 普通点飞向幽灵点爆炸
	        AttachCount_Minus: 12 // 倒计时棋子倒计数下标减一
	    },

	    // 幽灵与其他特效棋子爆炸批次，额外的时间间隔,单位毫秒
	    GAS_GAS_BATCH_EXTRA_INTER_VALUE: 500,

	    // 特效棋子额外的间隔，特效棋子包含冲击波，幽灵，gas
	    SPECIAL_ITEM_BATCH_EXTRA_INTER_VALUE: 100,

	    // 幽灵与其他特效棋子爆炸时，需要标记产生很多的特效棋子，额外的时间间隔，单位毫秒
	    GAS_MARK_OTHER_ITEM_EXTRA_INTER_VALUE: 300,

	    // 礼盒棋子包含的道具种类最多为三种
	    GIFT_ITEM_INCLUDE_MAX_TOOL_TYPE: 3

	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Created by billbao on 2016/10/31.
	 */
	var Util = {
	    clone: function clone(obj) {
	        if (null == obj || "object" != (typeof obj === "undefined" ? "undefined" : _typeof(obj))) return obj;
	        var newObj = obj.constructor ? new obj.constructor() : {};
	        for (var k in obj) {
	            var copy = obj[k];
	            if ((typeof copy === "undefined" ? "undefined" : _typeof(copy)) === "object") {
	                newObj[k] = Util.clone(copy);
	            } else {
	                newObj[k] = copy;
	            }
	        }
	        return newObj;
	    },
	    isArray: function isArray(object) {
	        return Object.prototype.toString.call(object) === '[object Array]';
	    },

	    isObject: function isObject(object) {
	        return (typeof object === "undefined" ? "undefined" : _typeof(object)) === "object";
	    },

	    getRandom: function getRandom(min, max) {
	        var range = max - min;
	        var rand = Math.random();
	        return min + Math.round(rand * range);
	    },

	    arrayCopy: function arrayCopy(target, src) {
	        if (target == null || src == null) {
	            return;
	        }

	        target.splice(0, target.length);
	        var len = src.length;
	        for (var i = 0; i < len; i++) {
	            target.push(src[i]);
	        }
	    },

	    arrayDeepCopy: function arrayDeepCopy(target, src) {
	        if (target == null || src == null) {
	            return;
	        }

	        target.splice(0, target.length);
	        var len = src.length;
	        for (var i = 0; i < len; i++) {
	            if (this.isObject(src[i])) {
	                target.push(Util.clone(src[i]));
	            } else {
	                target.push(src[i]);
	            }
	        }
	    },

	    //数组去重
	    // 思路：获取没重复的最右一值放入新数组
	    unique: function unique(array, isEqual) {
	        var r = [];
	        for (var i = 0, l = array.length; i < l; i++) {
	            for (var j = i + 1; j < l; j++) {
	                if (isEqual(array[i], array[j])) {
	                    j = ++i;
	                }
	            }
	            r.push(array[i]);
	        }
	        Util.arrayCopy(array, r);
	    },

	    //删除数组中满足条件的元素
	    removeElement: function removeElement(array, isTarget) {
	        var r = [];
	        for (var i = 0, l = array.length; i < l; i++) {
	            if (!isTarget(array[i])) {
	                //不满足条件的元素
	                r.push(array[i]);
	            }
	        }
	        Util.arrayCopy(array, r);
	    },

	    findEleInArr: function findEleInArr(array, isTarget) {
	        for (var i = 0, l = array.length; i < l; i++) {
	            if (isTarget(array[i])) {
	                return true;
	            }
	        }
	        return false;
	    }
	};

	module.exports = Util;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Created by billbao on 2016/10/25.
	 */

	var TimeStat = TimeStat || __webpack_require__(23);

	var g_puzzle_state_arr = new Array(624);
	var g_puzzle_index = 0;
	// 用于备份随机数
	var g_puzzle_state_arr_stack = new Array(624);
	var g_puzzle_index_stack = 0;

	function array_copy(dest_arr, src_arr, n) {
	    for (var i = 0; i < n; i++) {
	        dest_arr[i] = src_arr[i];
	    }
	}

	function PuzzleGenerateNumbers() {
	    console.log("PuzzleGenerateNumbers");
	    for (var i = 0; i < 624; ++i) {
	        var y = (g_puzzle_state_arr[i] & 0x8000) + (g_puzzle_state_arr[(i + 1) % 624] & 0x7fff);
	        g_puzzle_state_arr[i] = g_puzzle_state_arr[(i + 397) % 624] ^ y >> 1;

	        if (y % 2 == 1) // y is odd
	            {
	                g_puzzle_state_arr[i] = g_puzzle_state_arr[i] ^ 2567483615;
	            }
	    }
	}

	module.exports = {
	    RandPushBack: function RandPushBack() {
	        g_puzzle_index_stack = g_puzzle_index;
	        array_copy(g_puzzle_state_arr_stack, g_puzzle_state_arr, 624);
	    },

	    RandPopUp: function RandPopUp() {
	        g_puzzle_index = g_puzzle_index_stack;
	        array_copy(g_puzzle_state_arr, g_puzzle_state_arr_stack, 624);
	    },

	    GetCurPuzzleSeed: function GetCurPuzzleSeed(origSeed, index) {
	        g_puzzle_state_arr[0] = origSeed;

	        for (var i = 1; i < 624; ++i) {
	            g_puzzle_state_arr[i] = 1812433253 * (g_puzzle_state_arr[i - 1] ^ g_puzzle_state_arr[i - 1] >> 30) + i;
	        }

	        var count = index / 624 + 1;
	        for (var i = 0; i < count; ++i) {
	            PuzzleGenerateNumbers();
	        }

	        var newIndex = index % 624;

	        var y = g_puzzle_state_arr[newIndex];
	        y = y ^ y >> 11;
	        y = y ^ y << 7 & 2636928640;
	        y = y ^ y << 15 & 4022730752;
	        y = y ^ y >> 18;

	        return y;
	    },

	    PuzzleSrand: function PuzzleSrand(seed) {
	        console.log("PuzzleSrand : " + seed);
	        TimeStat.curRandNumCount = 0;
	        TimeStat.randNumList = [];

	        g_puzzle_index = 0;
	        g_puzzle_state_arr[0] = seed;

	        for (var i = 1; i < 624; ++i) {
	            g_puzzle_state_arr[i] = 1812433253 * (g_puzzle_state_arr[i - 1] ^ g_puzzle_state_arr[i - 1] >> 30) + i;
	        }
	    },

	    PuzzleRand: function PuzzleRand(tag) {
	        if (g_puzzle_index == 0) {
	            PuzzleGenerateNumbers();
	        }

	        var y = g_puzzle_state_arr[g_puzzle_index];
	        y = y ^ y >> 11;
	        y = y ^ y << 7 & 2636928640;
	        y = y ^ y << 15 & 4022730752;
	        y = y ^ y >> 18;

	        g_puzzle_index = (g_puzzle_index + 1) % 624;

	        TimeStat.CountARandNum(y, tag);
	        //console.log("PuzzleRand: " + tag + ", " + y);

	        return y;
	    }

	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by billbao on 2016/12/9.
	 */

	var TimeStat = {
	    data: [],
	    curStatItem: null,
	    runLogicTimes: 0,

	    randNumList: [],
	    curRandNumCount: 0,
	    logicLog: {
	        initBoard: "",
	        dropList: []
	    }
	};

	TimeStat.reset = function () {
	    this.data = [];
	    this.curStatItem = null;
	    this.runLogicTimes = 0;

	    this.randNumList = [];
	    this.curRandNumCount = 0;
	};

	TimeStat.startPoint = function (tag) {
	    if (this.curStatItem) {
	        this.endPoint();
	    }
	    this.curStatItem = {
	        tag: tag,
	        startTime: new Date().getTime(),
	        endTime: 0,
	        cousumedTime: 0
	    };
	};

	TimeStat.endPoint = function () {
	    var curItem = this.curStatItem;
	    if (curItem) {
	        var curTime = new Date().getTime();
	        curItem.endTime = curTime;
	        curItem.cousumedTime = curTime - curItem.startTime;
	        this.data.push(curItem);
	    }
	    this.curStatItem = null;
	};

	TimeStat.addItem = function (item) {
	    this.data.push(item);
	};

	TimeStat.clear = function () {
	    this.data.splice(0, this.data.length);
	};

	TimeStat.CountARandNum = function (num, tag) {
	    this.randNumList.push([tag, num]);
	    this.curRandNumCount++;
	};

	TimeStat.recordInitBoard = function (curBoard) {
	    var len = curBoard.world_node_count_;
	    var node_arr = curBoard.world_board_;
	    var logStr = "";
	    for (var i = 0; i < len; i++) {
	        var n = node_arr[i];
	        var type = n.ChessType();
	        var color = n.ChessColor();
	        logStr += "(" + type + "," + color + ")";
	    }

	    this.logicLog.initBoard = logStr;
	};

	TimeStat.recordOneDrop = function (usedRandNum, dropData) {
	    this.logicLog.dropList.push({ randCount: usedRandNum, data: dropData });
	};

	module.exports = TimeStat;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventId = __webpack_require__(9);
	var Mgr = __webpack_require__(14);
	var ConfigProto = __webpack_require__(12);
	var we4p = __webpack_require__(13);

	/**
	 * Created by evanyuan
	 * 过关条件管理器
	 */

	var PassConditionManager = function () {
	    function PassConditionManager(gameIns) {
	        _classCallCheck(this, PassConditionManager);

	        this.gameIns = gameIns;
	        this.passStatus = we4p.GameStatus.kGameRunning;
	        this.passCon_list = [];
	    }

	    _createClass(PassConditionManager, [{
	        key: 'responseEvent',
	        value: function responseEvent(type, data) {
	            this.update(type, data);
	        }
	    }, {
	        key: 'getPassCondition',
	        value: function getPassCondition() {
	            return this.passCon_list;
	        }
	    }, {
	        key: 'update',
	        value: function update(type, data) {

	            if (type == 'REMOVE') {
	                var top_chess = data.top_chess || [];
	                var bomb_chess = data.bomb_chess || [];
	                var bg_chess = data.bg_chess || [];
	                var add_bg_chess = data.add_bg_chess || [];
	                var step = Mgr.stageManager.getStep();

	                this.passCon_list.forEach(function (passCon) {

	                    var pass_type = passCon.pass_type;

	                    if (pass_type == we4p.PassConditionType.kPassCondScore) {
	                        passCon.result1 = Mgr.scoreManager.getScore();
	                    } else if (pass_type == we4p.PassConditionType.kPassCondAllStep) {
	                        passCon.result1 = step;
	                    } else {
	                        top_chess.forEach(function (chess) {
	                            if (pass_type == we4p.PassConditionType.kPassCondCollectChess) {
	                                if (chess.type == passCon.collect_type) {
	                                    passCon.result1 += 1;
	                                }
	                            }
	                        });

	                        bomb_chess.forEach(function (chess) {
	                            if (pass_type == we4p.PassConditionType.kPassCondCollectChess) {
	                                if (chess.type == passCon.collect_type) {
	                                    passCon.result1 += 1;
	                                }
	                            } else if (pass_type == we4p.PassConditionType.kPassCondCollectColor) {
	                                if (chess.color == passCon.collect_type) {
	                                    passCon.result1 += 1;
	                                }
	                            }
	                        });

	                        bg_chess.forEach(function (chess) {
	                            if (pass_type == we4p.PassConditionType.kPassCondCollectChess) {
	                                if (chess.type == passCon.collect_type) {
	                                    passCon.result1 += 1;
	                                }
	                            }
	                        });

	                        add_bg_chess.forEach(function (chess) {
	                            if (pass_type == we4p.PassConditionType.kPassCondCollectChess) {
	                                if (chess.type == passCon.collect_type) {
	                                    passCon.result1 += 1;
	                                }
	                            }
	                        });
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'specialCollect',
	        value: function specialCollect(type, count) {
	            this.passCon_list.forEach(function (item) {
	                if (item.pass_type == we4p.PassConditionType.kPassCondCollectChess) {
	                    if (item.collect_type == type) {
	                        item.result1 += count;
	                    }
	                }
	            });
	        }

	        // 将初始的草地数量，加入到过关条件中统计的数量

	    }, {
	        key: 'initGLassCount',
	        value: function initGLassCount(glassCount) {
	            glassCount && this.passCon_list.forEach(function (item) {
	                if (item.pass_type == we4p.PassConditionType.kPassCondCollectChess) {
	                    if (item.collect_type === we4p.ChessType.STIT_BLUEBERRY) {
	                        item.result1 += glassCount;
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'parsePassCondition',
	        value: function parsePassCondition(stageData) {

	            // 填充编辑器内的通关条件
	            var pass_condition = stageData.pass_condition;
	            var len = pass_condition.length;
	            var passConTable = Mgr.tableManager.PassConditionTable_;
	            var chessPropertiesTable = Mgr.tableManager.ChessPropertiesTable();
	            this.passCon_list = [];

	            for (var i = 0; i < len; i++) {
	                var item = pass_condition[i];
	                if (item.cond_type == ConfigProto.PASS_CONDITION_TYPE.PASS_CONDITION_INVALID) continue;

	                var data = new we4p.PassConditionData();
	                // init
	                data.collect_type = we4p.ChessType.STIT_NONE;
	                data.value1 = item.cond_data1;
	                data.value2 = item.cond_data2;
	                data.result1 = 0;
	                data.result2 = 0;

	                var desc = passConTable[item.cond_type];
	                data.pass_type = desc.pass_type;

	                if (desc.pass_type == we4p.PassConditionType.kPassCondCollectChess) {
	                    data.collect_type = desc.chess_type;
	                    data.CollectType = chessPropertiesTable[desc.chess_type].collect_type;
	                } else if (desc.pass_type == we4p.PassConditionType.kPassCondCollectColor) {
	                    data.collect_type = desc.chess_color;
	                    data.CollectType = chessPropertiesTable[desc.chess_type].collect_type;
	                    this.collect_chess_color = desc.chess_color;
	                }

	                this.passCon_list.push(data);
	            }

	            return this.passCon_list;
	        }
	    }, {
	        key: 'getCollectColor',
	        value: function getCollectColor() {
	            return this.collect_chess_color;
	        }
	    }, {
	        key: 'getStatus',
	        value: function getStatus() {

	            var passStatus = we4p.GameStatus.kGameRunning;
	            var flag = [];
	            var step = Mgr.stageManager.getStep();

	            this.passCon_list.forEach(function (passCon) {

	                var pass_type = passCon.pass_type;

	                //判断游戏状态
	                if (pass_type == we4p.PassConditionType.kPassCondAllStep) {
	                    if (step <= 0) {
	                        flag.push(1);
	                    } else {
	                        flag.push(0);
	                    }
	                } else {
	                    if (passCon.result1 >= passCon.value1) {
	                        flag.push(1);
	                    } else {
	                        flag.push(0);
	                    }
	                }
	            });

	            var isAllPass = flag.indexOf(0) < 0;

	            if (isAllPass) {
	                passStatus = we4p.GameStatus.kGamePass;
	            } else {
	                passStatus = step <= 0 ? we4p.GameStatus.kGameFail : we4p.GameStatus.kGameRunning;
	            }

	            return passStatus;
	        }
	    }, {
	        key: 'UpdatePassCondition',
	        value: function UpdatePassCondition() {
	            //if (!enable_)
	            //    return;
	            //for (size_t i = 0; i < detector_list_.size(); i++) {
	            //    detector_list_[i]->Update();
	            //}
	            // update game status
	            //game_status_ = UpdateStatus();
	            //    pass_cond_->set_game_status(game_status_);
	            //Animation().GeneratePassShowBigBatch(true);
	        }
	    }]);

	    return PassConditionManager;
	}();

	module.exports = PassConditionManager;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var we4p = __webpack_require__(13);
	var Mgr = __webpack_require__(14);

	var RecordManager = function () {
		function RecordManager(gameIns) {
			_classCallCheck(this, RecordManager);

			this.gameIns = gameIns;
			this.record_out_ = new we4p.Record();
		}

		_createClass(RecordManager, [{
			key: "SetStarInfo",
			value: function SetStarInfo(start_info) {
				this.record_out_['start_info'] = start_info;
			}
		}, {
			key: "AddInput",
			value: function AddInput() {
				if (this.gameIns.isNode()) {
					return;
				}
				if (arguments.length == 1) {
					this.record_out_['input'].push(arguments[0]);
				} else {
					var from = arguments[0];
					var to = arguments[1];
					var input = new we4p.Input();

					input.op = we4p.InputOp.kOpSlide;
					input.from = Object.assign({}, from);
					input.to = Object.assign({}, to);

					this.AddInput(input);
				}
			}
		}, {
			key: "AddRespawnInfo",
			value: function AddRespawnInfo(respawn) {
				//后台暂时不想要
				/*var info = new we4p.RespawnInfo();
	   info.bullet_attack = respawn.bullet_attack;
	   this.record_out_["respawn_info"].push(info);
	   		// +5步也需要记录到操作序列中
	   var input = new we4p.Input();
	   input.op = we4p.InputOp.kOpRespawn;
	   this.AddInput(input);
	   this.Flush();*/

				// +5步记录成item模式
				var input = new we4p.Input();
				input.op = we4p.InputOp.kOpUseItem;
				input.item_id = we4p.ItemId.itemRespawn;
				this.AddInput(input);

				Mgr.statManager.AddUsedItem(we4p.ItemId.itemRespawn);
			}

			// 返回日志record

		}, {
			key: "GetRecordOut",
			value: function GetRecordOut() {

				var gameStatus = Mgr.passConditionManager.getStatus();
				this.record_out_.game_result = gameStatus;
				this.record_out_.game_info = Mgr.statManager.getGameInfo();
				//this.record_out_.pass_cond.data = Mgr.passConditionManager.getPassCondition()
				//this.record_out_.pass_cond.game_status = gameStatus

				return this.record_out_;
			}
		}, {
			key: "Flush",
			value: function Flush() {}
		}]);

		return RecordManager;
	}();

	module.exports = RecordManager;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by evanyuan
	 * 统计结束上报
	 */

	var EventId = __webpack_require__(9);
	var we4p = __webpack_require__(13);
	var Mgr = __webpack_require__(14);

	var StatManager = function () {
		function StatManager(gameIns) {
			_classCallCheck(this, StatManager);

			this.gameIns = gameIns;
			this.gameInfo = new we4p.GameInfo();
			this.infoMap = {
				crush_chess_count: {},
				crush_color_count: {},
				add_chess_count: {},
				add_color_count: {},
				attack_count: {}
			};
		}

		_createClass(StatManager, [{
			key: 'responseEvent',
			value: function responseEvent(type, data) {
				if (this.gameIns.isNode()) {
					return;
				}
				if (type == EventId.SWAP) {
					this.resolveSwap(data);
				} else if (type == EventId.REMOVE) {
					this.resolveRemove(data);
				}
			}
		}, {
			key: 'resolveSwap',
			value: function resolveSwap(data) {
				if (data.result == 3 && !data.item) {
					this.gameInfo.slide_count++;
				}
			}
		}, {
			key: 'resolveRemove',
			value: function resolveRemove(data) {
				var _this = this;

				var bomb_chess = data.bomb_chess;
				var add_chess = data.add_chess;
				var attack_type = data.attack_type;

				bomb_chess.forEach(function (chess) {
					var _type = chess.type;
					var _color = chess.color;

					if (_this.infoMap.crush_chess_count[_type]) {
						_this.infoMap.crush_chess_count[_type] += 1;
					} else {
						_this.infoMap.crush_chess_count[_type] = 1;
					}

					if (_this.infoMap.crush_color_count[_color]) {
						_this.infoMap.crush_color_count[_color] += 1;
					} else {
						_this.infoMap.crush_color_count[_color] = 1;
					}
				});

				add_chess.forEach(function (chess) {
					var _type = chess.type;
					var _color = chess.color;

					if (_this.infoMap.add_chess_count[_type]) {
						_this.infoMap.add_chess_count[_type] += 1;
					} else {
						_this.infoMap.add_chess_count[_type] = 1;
					}

					if (_this.infoMap.add_color_count[_color]) {
						_this.infoMap.add_color_count[_color] += 1;
					} else {
						_this.infoMap.add_color_count[_color] = 1;
					}
				});

				if (this.infoMap.attack_count[attack_type]) {
					this.infoMap.attack_count[attack_type] += 1;
				} else {
					this.infoMap.attack_count[attack_type] = 1;
				}

				if (data.rounds > 1) {
					var _round = data.rounds;
					if (_round > 5) {
						_round = 5;
					}

					_round = _round - 2;

					if (this.gameInfo.drop_round_count[_round]) {
						this.gameInfo.drop_round_count[_round] += 1;
					} else {
						this.gameInfo.drop_round_count[_round] = 1;
					}
				}
			}
		}, {
			key: 'AddUsedItem',
			value: function AddUsedItem(item_id) {
				this.gameInfo.used_item.push(item_id);
			}
		}, {
			key: 'getGameInfo',
			value: function getGameInfo() {

				for (var key in this.infoMap.crush_chess_count) {
					this.gameInfo.crush_chess_count.push(new we4p.ChessCountItem(parseInt(key), this.infoMap.crush_chess_count[key]));
				}
				for (var key in this.infoMap.crush_color_count) {
					this.gameInfo.crush_color_count.push(new we4p.ColorCountItem(parseInt(key), this.infoMap.crush_color_count[key]));
				}
				for (var key in this.infoMap.add_chess_count) {
					this.gameInfo.add_chess_count.push(new we4p.ChessCountItem(parseInt(key), this.infoMap.add_chess_count[key]));
				}
				for (var key in this.infoMap.add_color_count) {
					this.gameInfo.add_color_count.push(new we4p.ColorCountItem(parseInt(key), this.infoMap.add_color_count[key]));
				}
				for (var key in this.infoMap.attack_count) {
					this.gameInfo.attack_count.push(new we4p.AttackCountItem(parseInt(key), this.infoMap.attack_count[key]));
				}

				this.gameInfo.score = Mgr.scoreManager.getScore();
				this.gameInfo.star_level = Mgr.scoreManager.getStar();

				return this.gameInfo;
			}
		}]);

		return StatManager;
	}();

	module.exports = StatManager;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/10/25.
	 */
	var puzzle_rand = puzzle_rand || __webpack_require__(22);
	var we4p = we4p || __webpack_require__(13);
	var Mgr = Mgr || __webpack_require__(14);
	var puzzle_resolver = puzzle_resolver || __webpack_require__(28);
	var PuzzleChessNode = PuzzleChessNode || __webpack_require__(33);
	var weType = weType || __webpack_require__(20);
	var board_viewer = board_viewer || __webpack_require__(29);
	var EventId = EventId || __webpack_require__(9);
	var puzzle_event = puzzle_event || __webpack_require__(32);
	var PuzzleChessDrop = PuzzleChessDrop || __webpack_require__(40);
	var PuzzleRearrange = PuzzleRearrange || __webpack_require__(41);
	var LastPang = LastPang || __webpack_require__(42);
	var PuzzleChessDropNew = PuzzleChessDropNew || __webpack_require__(43);

	var TimeStat = TimeStat || __webpack_require__(23);

	var PuzzleChessBoard = function () {
	    function PuzzleChessBoard(gameIns) {
	        _classCallCheck(this, PuzzleChessBoard);

	        this.gameIns = gameIns;
	        //是否初始化
	        this.inited_ = false;
	        // 显示棋盘在逻辑棋盘的开始位置
	        this.start_row_ = 0;
	        // 逻辑上真实的棋盘大小
	        this.world_row_ = 0;
	        this.world_col_ = 0;
	        this.world_node_count_ = 0;

	        // 世界棋盘
	        this.world_board_ = [];

	        // 数据备份
	        this.board_data_backup_ = [];

	        // 引用备份
	        this.board_ref_backup_ = [];

	        // 默认当前可视棋盘的最底下一行
	        // 当不为-1时, 棋子掉落到该值指定的行就停止掉落
	        this.drop_stop_row_;

	        //this.state_;
	        // 状态机状态
	        this.remove_state_;

	        // 游戏状态
	        this.game_state_;

	        // 用户滑动之后的掉落轮数
	        this.drop_round_ = 0;

	        //特殊棋子爆炸
	        this.special_bomb = [];

	        // 因为错误滑动, 使用道具等进入round_end的话, 要忽略
	        this.ignore_round_ = false;

	        //this.board_info_ = new we4p.B;

	        //LastPang *last_pang_;


	        this.inited_ = false;

	        //BlackholeGroup m_BlackholeGroup;

	        //we4::ErrorCollector *err_collector_;

	        this.local_ = null;
	        this.world_ = null;
	    }

	    //初始化


	    _createClass(PuzzleChessBoard, [{
	        key: "Initializie",
	        value: function Initializie() {
	            if (this.inited_) {
	                return;
	            }

	            //console.log(Mgr.stageManager);
	            puzzle_rand.PuzzleSrand(Mgr.stageManager.start_info().random_seed);
	            this.SetRemoveState(puzzle_resolver.RemoveLogicState.REMOVE_INITIAL_STATE);
	            this.drop_round_ = 0;
	            this.ignore_round_ = false;

	            //ResourceManager()->Init();
	            Mgr.tableManager.Init();
	            //Mgr.envManager.Init();
	            //Mgr.passConManager.Init();


	            //TimeStat.startPoint("分配棋格");
	            // 全局棋盘大小
	            var row = this.world_row_ = Mgr.stageManager.Row();
	            var col = this.world_col_ = Mgr.stageManager.Col();

	            var count = this.world_node_count_ = row * col;

	            // 分配棋格
	            var w_board = this.world_board_;
	            for (var i = 0; i < count; i++) {
	                w_board.push(new PuzzleChessNode());
	            }
	            //TimeStat.endPoint();

	            // 初始化首屏位置
	            this.start_row_ = 0;

	            // 默认停止掉落的线设置为屏幕最底端
	            this.drop_stop_row_ = row;

	            // 初始化其它变量
	            this.break_balance_ = false;
	            this.game_state_ = weType.PuzzleGameState.PGS_NONE;

	            // 初始化玩家管理器
	            //player_manager_.Init();

	            //TimeStat.startPoint("InitBoardViewer");
	            // 初始化可视区域
	            this.InitBoardViewer();
	            //TimeStat.endPoint();

	            //TimeStat.startPoint("InitEmptyNode");
	            // 初始化空棋格
	            this.InitEmptyNode();
	            //TimeStat.endPoint();

	            // 初始化事件管理器
	            Mgr.eventManager = new puzzle_event.EventManager_();

	            //m_BlackholeGroup.clear();

	            //PuzzleScoreInit();

	            //rule_manager_.Init();
	            //TimeStat.startPoint("初始化玩法模块");
	            // 初始化所有的玩法模块
	            Mgr.moduleManager.Init(this);
	            //TimeStat.endPoint();

	            //TimeStat.startPoint("解析关卡配置");
	            // 解析关卡配置，初始化关卡棋盘
	            Mgr.stageManager.Decode();
	            //console.log("Decode done");
	            //TimeStat.endPoint();

	            //TimeStat.startPoint("填充随机棋子");
	            // 填充随机棋子
	            this.world_.GenerateRandom(Mgr.stageManager.MaxColorCount());
	            //TimeStat.endPoint();

	            //TimeStat.startPoint("检查死局");
	            this.CheckDeadGame();
	            //TimeStat.endPoint();
	            //console.log("GenerateRandom done");

	            //TimeStat.startPoint("初始化棋格内的棋子");
	            // 初始化棋格内的棋子
	            this.InitBoardNodeData(this.GetStartRow());
	            //TimeStat.endPoint();

	            //TimeStat.startPoint("根据起始行滚屏");
	            // 根据起始行滚屏
	            this.RollingBoard(this.GetStartRow());
	            //TimeStat.endPoint();

	            //TimeStat.startPoint("初始化道具管理器");
	            // 初始化道具管理器
	            Mgr.itemManager.Init();
	            //TimeStat.endPoint();

	            //last_pang_ = NULL;


	            // 初始化状态机
	            Mgr.stateMachine.Initialize();

	            //预先计算掉落填充标志
	            var drop = new PuzzleChessDropNew();
	            drop.firstCalculFillMode(Mgr.worldViewer);

	            this.SetGameState(weType.PuzzleGameState.PGS_PLAYING);

	            // 初始化动画数据管理器
	            //ani_manager_.Initialize();

	            // 移动到动画管理内部
	            //ani_manager_.CreateAnimation(
	            //    BatchData(true),
	            //    AFUN_1(AnimationFunMgr::InitBoard, StageManager()->ScreenRow(),
	            //    StageManager()->ScreenCol()));

	            // 对Compute数据拍快照，用于计算动物移动步数
	            //PuzzleCompute::GetInstance().Snapshoot("animalgohome");

	            //Mgr.envManager.SetSodaLine(this.world_row_);

	            this.inited_ = true;

	            // 发送游戏开始事件
	            this.OnGameStart();

	            //console.log(this.world_board_);
	        }

	        //释放

	    }, {
	        key: "Release",
	        value: function Release() {
	            if (!this.inited_) return;

	            // 转发游戏结束事件
	            this.OnGameRelease();

	            // 清除动画数据
	            //Animation().DestoryAnimationBatch();

	            if (this.last_pang_) {
	                //delete last_pang_;
	                this.last_pang_ = null;
	            }

	            //item_manager_.Release();

	            // 释放备份棋盘
	            //delete[] board_data_backup_;
	            //delete[] board_ref_backup_;

	            // 释放棋盘
	            var limit = this.world_row_ * this.world_col_;
	            for (var i = 0; i < limit; i++) {
	                this.world_board_[i] = null;
	            }
	            //delete[] world_board_;
	            this.world_board_ = null;

	            //this.PuzzleScoreRelease();

	            Mgr.moduleManager.Release();
	            Mgr.ruleManager.Release();
	            //m_BlackholeGroup.clear();

	            //player_manager_.Release();
	            //delete event_manager_;

	            //REMOVE_SAFE_DELETE(local_);
	            //REMOVE_SAFE_DELETE(world_);

	            //resource_manager_.Release();
	            //PassCondManager()->Release();
	            Mgr.envManager.Release();
	            //SaveLoaderManager()->Release();
	            Mgr.tableManager.Release();
	            //puzzle_board_instance = NULL;
	            //delete this;
	        }

	        //重置

	    }, {
	        key: "Reset",
	        value: function Reset() {}

	        //获取开始的行

	    }, {
	        key: "GetStartRow",
	        value: function GetStartRow() {
	            return this.start_row_;
	        }

	        //棋盘开局给棋盘中随机增加一个幽灵棋子

	    }, {
	        key: "ApplyAddGasProp",
	        value: function ApplyAddGasProp() {
	            this.ApplyAddSpecialItemProp(we4p.ChessType.CT_SpecialGas);
	        }

	        /**
	         * 棋盘开局中给棋盘中随机增加一个带眼睛的棋子
	         * @param waveType : 0表示方向随机，1表示水平，2表示垂直
	         */

	    }, {
	        key: "ApplyAddWaveProp",
	        value: function ApplyAddWaveProp() {
	            var waveType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	            var wave = we4p.ChessType.CT_SpecialHorizontalShockWave;
	            if (waveType == 0) {
	                wave = puzzle_rand.PuzzleRand("cb(258)") % 2 == 0 ? we4p.ChessType.CT_SpecialHorizontalShockWave : we4p.ChessType.CT_SpecialVerticalShockWave;
	            } else if (waveType == 1) {
	                wave = we4p.ChessType.CT_SpecialHorizontalShockWave;
	            } else if (waveType == 2) {
	                wave = we4p.ChessType.CT_SpecialVerticalShockWave;
	            }
	            this.ApplyAddSpecialItemProp(wave);
	        }

	        // 给棋盘随机增加一个旋风特殊棋子

	    }, {
	        key: "ApplyAddHurricanProp",
	        value: function ApplyAddHurricanProp() {
	            this.ApplyAddSpecialItemProp(we4p.ChessType.CT_SpecialHurricane);
	        }

	        // 判断某点能否使用锤子道具, 返回值为true表示可以使用锤子道具，false表示不能

	    }, {
	        key: "JudgeCanUserDisappearItem",
	        value: function JudgeCanUserDisappearItem(row, col) {
	            if (!Mgr.boardViewer.ValidPos(row, col)) {
	                return false;
	            }
	            var puzzleChessNode = Mgr.boardViewer.GetNode(row, col);
	            // 锤子直接作用于最顶层的棋子
	            var chess = puzzleChessNode.GetTop();
	            // 没有棋子
	            if (chess == null) {
	                return false;
	            }
	            var prop = chess.Attribute();
	            // 没有属性数据?
	            if (prop == null) {
	                //WE4_ASSERT(0);
	                return false;
	            }
	            if (!prop.CanUseHammer) return false;

	            var attack_type_size = prop.attack_type.length;
	            for (var i = 0; i < attack_type_size; i++) {
	                if (we4p.AttackType.Attack_Disappear == prop.attack_type[i]) return true;
	            }
	            return false;
	        }

	        //判断某点能否使用交换道具

	    }, {
	        key: "JudgeCanUserChangeItem",
	        value: function JudgeCanUserChangeItem(row, col) {
	            if (!Mgr.boardViewer.ValidPos(row, col)) {
	                return false;
	            }
	            var puzzleChessNode = Mgr.boardViewer.GetNode(row, col);
	            return puzzleChessNode.CanUseSwap();
	        }

	        //判断某点能否使用带眼睛道具

	    }, {
	        key: "JudgeCanUserSpecialItem",
	        value: function JudgeCanUserSpecialItem(row, col) {
	            if (!Mgr.boardViewer.ValidPos(row, col)) {
	                return false;
	            }
	            var puzzleChessNode = Mgr.boardViewer.GetNode(row, col);
	            return puzzleChessNode.CanUseSpecial();
	        }

	        //判断是不是合法的世界坐标

	    }, {
	        key: "IsValidWorldPos",
	        value: function IsValidWorldPos(pos) {
	            if (pos.row < 0 || pos.row >= this.world_row_) {
	                return false;
	            }
	            if (pos.col < 0 || pos.col >= this.world_col_) {
	                return false;
	            }

	            return true;
	        }
	    }, {
	        key: "InitBoardNodeData",
	        value: function InitBoardNodeData(start_row) {
	            var page_row = Mgr.stageManager.simple_stage_info().screen_row;
	            //// 当前显示的行列数据
	            //local_board_ = &world_board_[start_row * world_col_];
	            // printf("init board (%d, %d), start (%d, %d)\n", world_row, world_col,
	            // start_row, page_row);
	            // 初始化所有棋格
	            var row_count = this.world_row_;
	            var col_count = this.world_col_;
	            var board_nodes = this.world_board_;
	            for (var row = 0; row < row_count; row++) {
	                for (var col = 0; col < col_count; col++) {
	                    var n = board_nodes[row * col_count + col];

	                    if (row >= start_row && row < start_row + page_row) {
	                        // 棋盘内的棋格立即激活
	                        n.InitAllChess();
	                        n.SetActive(true);
	                        // printf("active chess (%d, %d)\n", n->GetWorldPosition().row,
	                        // n->GetWorldPosition().col);
	                    } else {
	                        // 棋格不在屏幕内, 暂时都设置为-1,-1
	                        n.InitAllChess();
	                        n.SetActive(false);
	                        // printf("inactive chess (%d, %d)\n", n->GetWorldPosition().row,
	                        // n->GetWorldPosition().col);
	                    }
	                }
	            }

	            // 分配空间用于备份
	            var count = row_count * col_count;
	            var board_data_backup_ = this.board_data_backup_;
	            var board_ref_backup_ = this.board_ref_backup_;
	            for (var i = 0; i < count; i++) {
	                board_data_backup_.push(new PuzzleChessNode());
	                board_ref_backup_.push(new PuzzleChessNode());
	            }
	        }
	    }, {
	        key: "RollingBoard",
	        value: function RollingBoard(start_row) {
	            var page_row = Mgr.stageManager.simple_stage_info().screen_row;

	            // if (start_row == start_row_)
	            //   return;
	            // printf("rolling board %d -> %d\n", start_row_, start_row);
	            var start = this.start_row_ * this.world_col_;
	            var end = start + page_row * this.world_col_;
	            var limit = this.world_row_ * this.world_col_;

	            // 先将前一屏幕内的棋格设置为不可见
	            while (start < end && start < limit) {
	                var n = this.world_board_[start];
	                n.SetVisible(false);
	                start++;
	                // printf("inactive chess (%d, %d)\n", n->GetWorldPosition().row,
	                // n->GetWorldPosition().col);
	            }

	            // 更新start_row
	            this.start_row_ = start_row;
	            start = this.start_row_ * this.world_col_;
	            end = start + page_row * this.world_col_;

	            // 更新local_board_
	            //local_board_ = &world_board_[start_row_ * world_col_];

	            while (start < end && start < limit) {
	                var n = this.world_board_[start];
	                n.SetVisible(true);
	                start++;
	                // printf("active chess (%d, %d)\n", n->GetWorldPosition().row,
	                // n->GetWorldPosition().col);
	            }

	            var local_row = Mgr.stageManager.simple_stage_info().screen_row;
	            var local_col = Mgr.stageManager.simple_stage_info().screen_col;

	            start = this.start_row_ * this.world_col_;
	            this.local_.SetRange(start, local_row, local_col, this.start_row_, 0);
	        }
	    }, {
	        key: "Local2World",
	        value: function Local2World(pos) {
	            return new weType.GridPosition(pos.row + this.start_row_, pos.col);
	        }
	    }, {
	        key: "World2Local",
	        value: function World2Local(pos) {
	            return new weType.GridPosition(pos.row - this.start_row_, pos.col);
	        }
	    }, {
	        key: "GetWorldNode",
	        value: function GetWorldNode(pos) {
	            return this.world_.GetNode(pos);
	        }

	        //根据索引获取棋格对象

	    }, {
	        key: "GetNodeIndex",
	        value: function GetNodeIndex(index) {
	            return this.local_.GetNodeIndex(index);
	        }
	    }, {
	        key: "GetWorldNodeIndex",
	        value: function GetWorldNodeIndex(index) {
	            return this.world_.GetNodeIndex(index);
	        }
	    }, {
	        key: "OnGameStart",
	        value: function OnGameStart() {
	            var e = new puzzle_event.PuzzleEvent();
	            e.event_id = puzzle_event.PuzzleEvent.kEventGameStart;
	            Mgr.eventManager.Forward(e);
	            Mgr.passConditionManager.UpdatePassCondition();
	            this.SetGameState(weType.PuzzleGameState.PGS_PLAYING);
	            //var data = {
	            //    data: [
	            //    ],
	            //
	            //    //过关条件当前数量
	            //    cond: Mgr.stageManager.simple_stage_info_.pass_condition.data,
	            //
	            //    //消除行为的轮次
	            //    rounds: 0,
	            //
	            //    //消除行为的类型
	            //    // 101: 普通 102: 冲击波 103: 爆炸
	            //    // 201: 冲击波 + 冲击波 202: 爆炸 + 冲击波 203: 爆炸 + 爆炸
	            //    type: 0
	            //};
	            Mgr.dataEventManager.trigger(EventId.GAMESTART);
	            //TimeStat.recordInitBoard(this);
	            //这里打印一下棋盘的棋子颜色阵列
	            this.logChessBoardColor();
	            //打印冰块位置
	            this.logChessBoardIce();
	        }
	    }, {
	        key: "OnGameEnd",
	        value: function OnGameEnd() {
	            // 游戏结束
	            // 注意不是游戏对象释放
	            // 玩家可以通过+5步复活后继续游戏
	            // 所以单局可能多次调用OnGameEnd()

	            // 确保record数据被记录和刷新
	            //PassCondManager()->UpdatePassCondition();
	            Mgr.envManager.Update();
	            //RecordManager()->Flush();
	        }
	    }, {
	        key: "OnGameRelease",
	        value: function OnGameRelease() {
	            //GameEndEvent e;
	            //e.event_id = PuzzleEvent::kEventGameRelease;
	            //e.game_state_ = game_state_;
	            //CurrentBoard()->event_manager()->Forward(&e);
	        }
	    }, {
	        key: "OnGameFail",
	        value: function OnGameFail() {
	            this.SetGameState(weType.PuzzleGameState.PGS_FAIL_END);
	            //Animation().CreateAnimation(BatchData(false, true),
	            //    AFUN_1(AnimationFunMgr::FailedAni));

	            this.OnGameEnd();
	        }
	    }, {
	        key: "OnGameSuccess",
	        value: function OnGameSuccess() {
	            this.SetGameState(weType.PuzzleGameState.PGS_SUCCESS_END);
	            //Animation().CreateAnimation(BatchData(false, true),
	            //    AFUN_1(AnimationFunMgr::WeekGameWinAni));
	            //Animation().CreateAnimation(BatchData(false, true),
	            //    AFUN_1(AnimationFunMgr::WeekGameLevelComplete));
	            //Animation().CreateAnimation(BatchData(false, true),
	            //    AFUN_1(AnimationFunMgr::GameOver));
	            this.OnGameEnd();
	        }
	    }, {
	        key: "OnUseItem",
	        value: function OnUseItem(input) {
	            //console.log("OnUseItem");
	            //console.log("curScore: " + Mgr.scoreManager.getScore())
	            //this.logChessBoardColor();
	            var e = new puzzle_event.UseItemEvent();
	            e.itemid = input.item_type;
	            Mgr.eventManager.Forward(e);
	            this.ignore_round_ = true;

	            Mgr.recordManager.AddInput(input);
	            Mgr.statManager.AddUsedItem(input.item_id);

	            //UseItemEvent e;
	            //e.event_id = PuzzleEvent::kEventUseItem;
	            //e.itemid = input.item_type();
	            //    event_manager_->Forward(&e);
	            //ignore_round_ = true;
	            //
	            //PassCondManager()->UpdatePassCondition();
	            //RecordManager()->AddInput(input);
	            //if (!RecordManager()->GetCloseRecordFlag()) {
	            //    CurrentScoreManager()->AddUsedItem(input.item_type());
	            //}
	            //
	            //// 使用完道具就关闭回退一步
	            //SaveLoaderManager()->set_enable(false);
	            //SaveLoaderManager()->set_enable_week3(false);
	        }
	    }, {
	        key: "OnBalanceState",
	        value: function OnBalanceState() {
	            // 通知每个棋格来处理平衡态事件
	            // 平衡态的处理, 根据目前的玩法
	            // 应该是同一类型的棋子在同一批次处理
	            // 并且不同的类型是有优先级的
	            var e = new puzzle_event.PuzzleEvent();
	            e.event_id = puzzle_event.PuzzleEvent.kEventBalanceState;

	            Mgr.dataCollector.beginOnceAniCollect("maoqiu");

	            Mgr.eventManager.Forward(e);

	            Mgr.dataCollector.endOnceAniCollect("maoqiu");

	            // 平衡态被破坏
	            if (this.break_balance_) {
	                Mgr.aniManager.GenerateEmptyAni();
	                this.break_balance_ = false;
	                return 1;
	            }

	            // 游戏已经结束
	            if (this.GetGameState() == weType.PuzzleGameState.PGS_FAIL_END || this.GetGameState() == weType.PuzzleGameState.PGS_SUCCESS_END) {
	                return 0;
	            }

	            // lastpang
	            if (this.GetGameState() == weType.PuzzleGameState.PGS_LASTPANG) {
	                if (this.StartLastPang() == 0) {
	                    this.OnGameSuccess();
	                    return 0;
	                }
	                return 1;
	            }

	            this.CheckGameOver();
	            if (this.GetGameState() == weType.PuzzleGameState.PGS_LASTPANG) {
	                return 1;
	            }

	            return 0;
	        }
	    }, {
	        key: "OnCrushDropState",
	        value: function OnCrushDropState() {
	            var e = new puzzle_event.PuzzleEvent();
	            e.event_id = puzzle_event.PuzzleEvent.kEventCrushDropState;
	            Mgr.eventManager.Forward(e);

	            //PassCondManager()->UpdatePassCondition();
	        }
	    }, {
	        key: "OnSlide",
	        value: function OnSlide(fromPos, toPos) {

	            var e = new puzzle_event.SlideEvent();
	            e.from.copyData(fromPos);
	            e.to.copyData(toPos);
	            Mgr.eventManager.Forward(e);

	            Mgr.recordManager.AddInput(fromPos, toPos);

	            //CurrentScoreManager()->AddSlide(from, to);
	            //PassCondManager()->UpdatePassCondition();
	        }
	    }, {
	        key: "OnReArrange",
	        value: function OnReArrange() {
	            //PuzzleEvent e;
	            //e.event_id = PuzzleEvent::kEventReArrange;
	            //    event_manager_->Forward(&e);
	            var e = new puzzle_event.PuzzleEvent();
	            e.event_id = puzzle_event.PuzzleEvent.kEventReArrange;
	            Mgr.eventManager.Forward(e);
	        }
	    }, {
	        key: "OnLastpang",
	        value: function OnLastpang() {
	            //GameEndEvent e;
	            //e.event_id = PuzzleEvent::kEventLastpang;
	            //CurrentBoard()->event_manager()->Forward(&e);
	        }
	    }, {
	        key: "OnRespawn",
	        value: function OnRespawn(respawnInfo) {
	            //StageManager()->SaveRespawnInfo(info);

	            // PuzzleCrushDataStatistic::GetInstance().DisableRollBack();
	            //SaveLoaderManager()->set_enable(false);
	            this.SetGameState(weType.PuzzleGameState.PGS_PLAYING);

	            // 复活后如果是死局要重排
	            this.CheckToReArrange();

	            Mgr.stageManager.OnRespawn();
	            var e = new puzzle_event.RespawnEvent();
	            e.respawn_type_ = puzzle_event.RespawnEvent.kRespawnEnd;
	            Mgr.eventManager.Forward(e);

	            // 清理和重刷棋盘
	            //Animation().CreateAnimation(
	            //    BatchData(true), AFUN_1(AnimationFunMgr::ClearBoardAnimation, true));
	            //Animation().GeneratorPuzzleDataAnimation();

	            Mgr.passConditionManager.UpdatePassCondition();
	            this.CheckGameOver();
	            if (this.GetGameState() == weType.PuzzleGameState.PGS_LASTPANG) {
	                this.SetRemoveState(puzzle_resolver.RemoveLogicState.REMOVE_CRUSH_DROP_STATE);
	            }

	            Mgr.recordManager.AddRespawnInfo(respawnInfo);
	        }
	    }, {
	        key: "OnStop",
	        value: function OnStop() {
	            this.OnGameEnd();
	        }

	        // 取消后续的平衡态事件通知
	        // 因为当前平衡态已经被破坏了

	    }, {
	        key: "BreakBalance",
	        value: function BreakBalance() {
	            if (this.GetRemoveState() == puzzle_resolver.RemoveLogicState.REMOVE_BANLANCE_STATE || this.GetRemoveState() == puzzle_resolver.RemoveLogicState.REMOVE_INITIAL_STATE) {
	                this.break_balance_ = true;
	            }
	        }
	    }, {
	        key: "IsBalanceBreak",
	        value: function IsBalanceBreak() {
	            return this.break_balance_;
	        }
	    }, {
	        key: "SetGameState",
	        value: function SetGameState(s) {
	            this.game_state_ = s;
	        }
	    }, {
	        key: "GetGameState",
	        value: function GetGameState() {
	            return this.game_state_;
	        }
	    }, {
	        key: "SetRemoveState",
	        value: function SetRemoveState(s) {
	            this.remove_state_ = s;
	        }
	    }, {
	        key: "GetRemoveState",
	        value: function GetRemoveState() {
	            return this.remove_state_;
	        }
	    }, {
	        key: "set_dropround",
	        value: function set_dropround(d) {
	            this.drop_round_ = d;
	        }
	    }, {
	        key: "get_dropround",
	        value: function get_dropround() {
	            return this.drop_round_;
	        }
	    }, {
	        key: "DoDrop",
	        value: function DoDrop() {
	            //var drop = new PuzzleChessDrop();
	            var drop = new PuzzleChessDropNew();

	            drop.DoDrop(Mgr.worldViewer);
	            //这里生成掉落动画
	            Mgr.dataCollector.collectOneDropData(this.drop_round_ + 1);
	        }
	    }, {
	        key: "board_info",
	        value: function board_info() {
	            return this.board_info_;
	        }

	        //GetNextPhase(){
	        //    return this.next_phase_;
	        //}


	    }, {
	        key: "ReArrange",
	        value: function ReArrange() {
	            //if (Animation().Enable()) {
	            //    // 重排后，不允许回退
	            //    SaveLoaderManager()->set_enable(false);
	            //    SaveLoaderManager()->set_enable_week3(false);
	            //}
	            //Animation().CreateAnimation(
	            //    BatchData(true), AFUN_1(AnimationFunMgr::ClearAllSubPointAnimation));
	            //

	            var rearrange = new PuzzleRearrange(Mgr.boardViewer);
	            rearrange.Rearrange();
	            this.OnReArrange();
	        }
	    }, {
	        key: "CheckToReArrange",
	        value: function CheckToReArrange() {
	            console.log("检查是否需要重排");
	            typeof LogPanel != 'undefined' && LogPanel.addInfo('检查重排');
	            if (this.GetGameState() != weType.PuzzleGameState.PGS_PLAYING) return;

	            var activeItems = [];
	            var vecTargetItems = [];
	            if (!Mgr.boardViewer.FindActiveItem(activeItems, vecTargetItems)) {
	                console.log("没有可消除的，尝试重排");
	                typeof LogPanel != 'undefined' && LogPanel.addInfo('尝试重排');
	                // 没有可消除的，直接重排
	                //Animation().CreateAnimation(BatchData(false, true),
	                //    AFUN_1(AnimationFunMgr::RearrangeUi));

	                //int iReArrangeBatch = Animation().GenerateReArrangeSingleChessAnimation();
	                this.ReArrange();
	                //CurrentScoreManager()->AddStatistics(we4::kStatAutoRearrange, 1);
	                if (!Mgr.boardViewer.FindActiveItem(activeItems, vecTargetItems)) {
	                    // PuzzleEvaluateStatis::Instance().SetEvaluatePassType(
	                    //     EvaluatePassDieFailed);
	                    //Animation().ClearAnimationBatch();  //清空所有动画
	                    //                                    // PassGameFail(&PassInfoVec, true);
	                    //PassCondManager()->GameFail(we4::kPassCondDeadGame);
	                    console.log("重排以后还是没有可消除的，游戏只能结束");
	                    typeof LogPanel != 'undefined' && LogPanel.addInfo('重排以后还是没有可消除的，游戏只能结束');
	                    Mgr.curBoard.OnGameFail();
	                } else {
	                    Mgr.aniManager.GenerateItemRearrangeAnimation();
	                    console.log("重排成功");
	                    typeof LogPanel != 'undefined' && LogPanel.addInfo('重排成功');
	                    //Animation().GeneratorRerrangeAnimation(iReArrangeBatch);
	                    //Animation().GenerateRefreshChessAnimation();
	                    this.SetRemoveState(puzzle_resolver.RemoveLogicState.REMOVE_INITIAL_STATE);
	                }
	            }
	        }

	        // 初始化棋格
	        // 此时棋格内都应该为空

	    }, {
	        key: "InitEmptyNode",
	        value: function InitEmptyNode() {
	            // 初始化空棋格
	            var row_count = this.world_row_;
	            var col_count = this.world_col_;
	            var node_arr = this.world_board_;
	            for (var row = 0; row < row_count; row++) {
	                for (var col = 0; col < col_count; col++) {
	                    var n = node_arr[row * col_count + col];
	                    n.SetPosition(new weType.GridPosition(row, col));
	                }
	            }
	        }
	    }, {
	        key: "InitBoardViewer",
	        value: function InitBoardViewer() {
	            this.world_ = new board_viewer.BoardViewer(this.world_board_);
	            this.local_ = new board_viewer.BoardViewer(this.world_board_);
	            Mgr.boardViewer = this.local_;
	            Mgr.worldViewer = this.world_;

	            var local_row = Mgr.stageManager.simple_stage_info().screen_row;
	            var local_col = Mgr.stageManager.simple_stage_info().screen_col;

	            this.local_.SetRange(0, local_row, local_col, this.start_row_, 0);
	            this.world_.SetRange(0, this.world_row_, this.world_col_, 0, 0);
	        }
	    }, {
	        key: "StartLastPang",
	        value: function StartLastPang() {
	            //console.log("StartLastPang")
	            if (this.last_pang_ == null) {
	                this.SetGameState(weType.PuzzleGameState.PGS_LASTPANG);
	                this.OnLastpang();
	                this.last_pang_ = new LastPang(Mgr.boardViewer);
	                Mgr.stateMachine.ResetDropTime();
	            }
	            return this.last_pang_.Do();
	            //return 0;
	        }
	    }, {
	        key: "CheckGameOver",
	        value: function CheckGameOver() {
	            //console.log("CheckGameOver");
	            //PassCondManager()->UpdatePassCondition();
	            var status = Mgr.passConditionManager.getStatus();
	            //console.log("status is : " + status);

	            // 游戏失败
	            if (status == we4p.GameStatus.kGameFail) {
	                this.OnGameFail();
	                return;
	            }

	            // 游戏正常通关
	            if (status == we4p.GameStatus.kGamePass) {
	                Mgr.stageManager.RecordSuccessStep();
	                if (this.last_pang_ == null) {
	                    // 胜利动画
	                    Mgr.aniManager.GeneratePassThroughAnimation();
	                    // Animation().CreateAnimation(BatchData(false, true),
	                    //    AFUN_1(AnimationFunMgr::WinAni));
	                }

	                // 启动lastpang
	                if (this.StartLastPang() == 0) {
	                    this.OnGameSuccess();
	                    return;
	                }
	                this.SetGameState(weType.PuzzleGameState.PGS_LASTPANG);
	            }
	        }

	        // 检查初始棋盘是否是死局
	        // 如果是则重排

	    }, {
	        key: "CheckDeadGame",
	        value: function CheckDeadGame() {
	            var activeItems = [];
	            var vecTargetItems = [];
	            if (Mgr.boardViewer.FindActiveItem(activeItems, vecTargetItems)) {
	                return;
	            }
	            this.ReArrange();
	        }

	        /**
	         * 棋盘开局棋盘中，给棋盘随机增加一个特殊棋子
	         * @param specialAttr 为特殊棋子的类型
	         **/

	    }, {
	        key: "ApplyAddSpecialItemProp",
	        value: function ApplyAddSpecialItemProp(specialAttr) {
	            var sumNum = Mgr.boardViewer.Row() * Mgr.boardViewer.Col();
	            var randNum = puzzle_rand.PuzzleRand("cb(807)") % sumNum; //增加随机
	            for (var i = 0; i < sumNum; i++, randNum++) {
	                var row = Math.floor(randNum % sumNum / Mgr.boardViewer.Col());
	                var col = randNum % sumNum % Mgr.boardViewer.Col();
	                var chessNode = Mgr.boardViewer.GetNode(row, col);
	                //可参与重排的为普通棋子且无棋面，可替换为特殊棋子
	                if (chessNode && chessNode.GetChessByType(we4p.ChessType.CT_NormalUnit) && chessNode.NeedReArrange()) {
	                    chessNode.AddChess(specialAttr, chessNode.ChessColor());
	                    return;
	                }
	            }
	        }

	        /**
	         * 打印棋盘的棋子颜色
	         */

	    }, {
	        key: "logChessBoardColor",
	        value: function logChessBoardColor() {
	            return;
	            console.log("logChessBoardColor");
	            var row_count = this.world_row_;
	            var col_count = this.world_col_;
	            var node_arr = this.world_board_;
	            for (var row = 0; row < row_count; row++) {
	                var rowLog = "";
	                for (var col = 0; col < col_count; col++) {
	                    var n = node_arr[row * col_count + col];
	                    var color = n.ChessColor();
	                    rowLog += (color == 9 ? "*" : color) + ",";
	                }
	                console.log(rowLog);
	            }

	            //var nodeDataList = this.gameIns.getNodeDataList();
	            //console.log(nodeDataList);
	        }
	    }, {
	        key: "logChessBoardIce",
	        value: function logChessBoardIce() {
	            return;

	            var row_count = this.world_row_;
	            var col_count = this.world_col_;
	            var node_arr = this.world_board_;
	            for (var row = 0; row < row_count; row++) {
	                var rowLog = "" + row;
	                for (var col = 0; col < col_count; col++) {
	                    var n = node_arr[row * col_count + col];
	                    var chess = n.GetChess(weType.kChessLayerBottom);
	                    rowLog += (!chess ? "*" : "I") + ",";
	                }
	                console.log(rowLog);
	            }
	        }

	        /**
	         * 清空特殊棋子爆炸列表
	         */

	    }, {
	        key: "clearSpecialBombList",
	        value: function clearSpecialBombList() {
	            this.special_bomb = [];
	        }

	        /**
	         * 缓存特殊棋子爆炸攻击
	         * @param bomb
	         */

	    }, {
	        key: "cacheSpecialBomb",
	        value: function cacheSpecialBomb(bomb) {
	            this.special_bomb.push(bomb);
	        }

	        /**
	         * 处理特殊棋子爆炸消除逻辑
	         */

	    }, {
	        key: "handleSpecialBomb",
	        value: function handleSpecialBomb(round) {
	            var q = this.special_bomb;
	            while (q.length > 0) {
	                var bomb = q.shift();
	                Mgr.dataCollector.startOneRemove(bomb.info.attack_type, bomb.info.attack_type, round, bomb.info.src, bomb.info.other);
	                bomb.Bomb();
	                Mgr.dataCollector.endOneRemove();
	            }
	        }
	    }]);

	    return PuzzleChessBoard;
	}();

	module.exports = PuzzleChessBoard;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/10/26.
	 */
	var Mgr = Mgr || __webpack_require__(14);
	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	var board_viewer = board_viewer || __webpack_require__(29);
	var ChessInterface = ChessInterface || __webpack_require__(31);
	var Util = Util || __webpack_require__(21);
	var EventId = EventId || __webpack_require__(9);
	var puzzle_event = puzzle_event || __webpack_require__(32);
	var TimeStat = TimeStat || __webpack_require__(23);

	var RemoveLogicState = {
	    REMOVE_INITIAL_STATE: 0,
	    REMOVE_GENERAL_MOVE_STATE: 1,
	    REMOVE_BANLANCE_STATE: 2,
	    REMOVE_CRUSH_DROP_STATE: 3,
	    REMOVE_END_STATE: 4,
	    DIGGER_BOARD_MOVE_STATE: 5,
	    REMOVE_WAIT_INPUT_STATE: 6
	};

	var PuzzleChessResolver = function () {
	    function PuzzleChessResolver(gameIns) {
	        _classCallCheck(this, PuzzleChessResolver);

	        this.gameIns = gameIns;
	        // 当前掉落的轮数
	        this.m_DropTimes = 0;
	        // 当前combo数
	        this.m_iComboTimes = 0;

	        this.m_keepAnimationFlg = false;

	        // Notice:
	        // 记录当前这次平衡态是不是因为错误滑动导致的
	        // 如果是, BoardEvent将会忽略掉这次平衡态事件
	        // 因为服务端强校验是不会执行错误滑动操作
	        this.error_slide_balance_ = false;

	        this.slide_from_ = new weType.GridPosition(); //GridPosition对象
	        this.slide_to_ = new weType.GridPosition(); //GridPosition对象

	        // 一次执行的掉落轮数
	        // 目前游戏内设置为1
	        this.cycle_drop_round_ = 1;

	        this.gas_special_swap_flag = false;
	    }

	    /**
	     ** 初始化
	     **/


	    _createClass(PuzzleChessResolver, [{
	        key: "Initialize",
	        value: function Initialize() {
	            this.m_DropTimes = 0;
	            this.m_iComboTimes = 0;
	            this.m_keepAnimationFlg = false;
	        }

	        // 处理用户输入

	    }, {
	        key: "Input",
	        value: function Input(input) {
	            //console.log("Input");

	            var _state = this.GetGameState();
	            if (_state == weType.PuzzleGameState.PGS_LASTPANG || _state == weType.PuzzleGameState.PGS_SUCCESS_END) {
	                console.log('错误输入');
	                return false;
	            }
	            this.ResetDropTime();
	            var result = false;
	            switch (input.op) {
	                case we4p.InputOp.kOpSlide:
	                    {
	                        result = this.RunOneSlideStep(input);
	                        if (result) {
	                            this.SetRemoveLogicStage(RemoveLogicState.REMOVE_GENERAL_MOVE_STATE);
	                        }
	                        break;
	                    }
	                case we4p.InputOp.kOpUseItem:
	                    //console.log("item input: " + JSON.stringify(input))
	                    result = Mgr.itemManager.ItemInput(input);
	                    if (result) {
	                        Mgr.curBoard.OnUseItem(input);
	                        if (Mgr.curBoard.IsBalanceBreak()) {
	                            //console.log("balance break")
	                            Mgr.curBoard.break_balance_ = false;
	                            this.SetRemoveLogicStage(RemoveLogicState.REMOVE_CRUSH_DROP_STATE);
	                        }
	                    }
	                    break;
	                default:
	                    break;
	            }
	            if (Mgr.envManager.GetIsWorkerMode()) {
	                this.cycle_drop_round_ = 0;
	                this.CycleRunRemoveLogicMachine(this.cycle_drop_round_);
	            }
	            return result;
	        }

	        /**
	         * 运行一步滑动操作，判断是否有消除产生
	         * @return 返回值表示两个棋子是否能滑动成功，产生消除
	         **/

	    }, {
	        key: "RunOneSlideStep",
	        value: function RunOneSlideStep(input) {
	            this.ResetDropTime();

	            var pos = new weType.GridPosition(input.from.row, input.from.col);
	            var otherPos = new weType.GridPosition(input.to.row, input.to.col);

	            var exResult = this.JudgeOneSlide(pos, otherPos);

	            // 取消选中
	            var node = Mgr.boardViewer.GetNode(pos.row, pos.col);
	            var otherNode = Mgr.boardViewer.GetNode(otherPos.row, otherPos.col);
	            var chessData = null,
	                otherChessData = null;

	            if (node) {
	                chessData = node.ToChessData();
	                //这里会创建一个动画
	                //Animation().CreateAnimation(
	                //    BatchData(false),
	                //    AFUN_1(AnimationFunMgr::SingleChessStableAnim, chessData));
	            }
	            if (otherNode) {
	                otherChessData = otherNode.ToChessData();
	                //这里会创建一个动画
	                //Animation().CreateAnimation(
	                //    BatchData(false),
	                //    AFUN_1(AnimationFunMgr::SingleChessStableAnim, otherChessData));
	            }

	            if (exResult == weType.ExchangItemResult.EIR_ExchangeFailed) {
	                this.SetRemoveLogicStage(RemoveLogicState.REMOVE_BANLANCE_STATE);
	                this.error_slide_balance_ = true;

	                // 两个棋子移动失败的动画序列
	                //Animation().GenerateExchangeFailedAnimationBatch(pos, otherPos);
	                Mgr.dataEventManager.trigger(EventId.SWAP, {
	                    from: input.from,
	                    to: input.to,
	                    result: 2
	                });
	                //console.log("swap failed");

	                return false;
	            }

	            if (exResult == weType.ExchangItemResult.EIR_None) {
	                this.SetRemoveLogicStage(RemoveLogicState.REMOVE_BANLANCE_STATE);
	                this.error_slide_balance_ = true;

	                // 两个棋子无法移动 暂无动画表现
	                return false;
	            }

	            if (exResult == weType.ExchangItemResult.ERI_ExchangeFailedFence) {
	                this.SetRemoveLogicStage(RemoveLogicState.REMOVE_BANLANCE_STATE);
	                this.error_slide_balance_ = true;

	                // 两个棋子因为栅栏无法移动的动画序列
	                //Animation().CreateAnimation(
	                //    BatchData(false), AFUN_1(AnimationFunMgr::ExchangeFailedByBarrierAnim,
	                //    chessData, otherChessData));
	                return false;
	            }

	            this.SaveSlide(pos, otherPos);

	            //// 可以交换, 备份数据
	            //SaveLoaderManager()->Save();
	            //// 步数动画
	            //Animation().CreateAnimation(
	            //    BatchData(false, true),
	            //    AFUN_1(AnimationFunMgr::StepChanged, StageManager()->GetRemainStep()));
	            //
	            //// 产生交换成功的动画序列
	            //Animation().CreateAnimation(
	            //    BatchData(true), AFUN_1(AnimationFunMgr::ExchangeSuccessAnimationBatch,
	            //    chessData, otherChessData));
	            //
	            Mgr.dataEventManager.trigger(EventId.SWAP, {
	                from: input.from,
	                to: input.to,
	                result: 3
	            });
	            //console.log("swap ok");
	            //Animation().GenerateUIToolUseShowPointsAnimation();
	            // PuzzleEvaluateStatis::Instance().SetEvaluatePassType(EvaluatePassInitial);
	            this.SetRemoveLogicStage(RemoveLogicState.REMOVE_GENERAL_MOVE_STATE);
	            return true;
	        }

	        /**
	         * 循环运行消除逻辑状态机
	         * @param recursive
	         *表示是否递归运行，如果为0表示永久递归(掉落完成后会继续判断是否有消除，若有，继续驱动)
	         * 其他值表示驱动的次数，至少为1;1表示，消除一轮且有一轮drop
	         * recursiveNum 若为n（n>=1)表示最多消除n轮和drop n轮
	         **/

	    }, {
	        key: "CycleRunRemoveLogicMachine",
	        value: function CycleRunRemoveLogicMachine(recursiveNum) {
	            //console.log("CycleRunRemoveLogicMachine")
	            // 掉落的轮数
	            var dropRund = 0;
	            for (;;) {
	                switch (Mgr.curBoard.GetRemoveState()) {
	                    case RemoveLogicState.REMOVE_GENERAL_MOVE_STATE:
	                        {
	                            //TimeStat.startPoint("1次消除耗时");
	                            this.RemoveGeneralMoveStateFunction();
	                            //TimeStat.endPoint();
	                            break;
	                        }
	                    case RemoveLogicState.REMOVE_BANLANCE_STATE:
	                        {
	                            //if (this.m_keepAnimationFlg && recursiveNum != 0) {
	                            //    this.m_keepAnimationFlg = false;
	                            //    return false;
	                            //}

	                            //Animation().ClearAnimationBatch();
	                            this.RemoveBalanceStateFunction();
	                            break;
	                        }
	                    case RemoveLogicState.REMOVE_CRUSH_DROP_STATE:
	                        {
	                            //Mgr.curBoard.logChessBoardColor();
	                            //TimeStat.startPoint("1次掉落耗时");
	                            this.RemoveCrushDropStateFunction();
	                            //Mgr.curBoard.logChessBoardColor();
	                            dropRund++;
	                            //TimeStat.endPoint();
	                            TimeStat.runLogicTimes++;
	                            if (recursiveNum != 0) {
	                                if (dropRund == recursiveNum) {
	                                    // 如果不为永久的递归的掉落消除，掉落值得轮数就退出
	                                    //console.log("这一轮产生的动画队列：");
	                                    //Mgr.aniManager.logAniQueue();
	                                    console.log("PuzzleChessResolver.JumpOut");
	                                    typeof LogPanel != 'undefined' && LogPanel.addInfo('JO');
	                                    return false;
	                                }
	                            }

	                            break;
	                        }
	                    case RemoveLogicState.DIGGER_BOARD_MOVE_STATE:
	                        {
	                            this.SetRemoveLogicStage(RemoveLogicState.REMOVE_BANLANCE_STATE);
	                            if (recursiveNum != 0) {
	                                return false;
	                            }
	                        }break;

	                    case RemoveLogicState.REMOVE_INITIAL_STATE:
	                        {
	                            Mgr.curBoard.logChessBoardIce();
	                            if (Mgr.envManager.GetIsWorkerMode()) {
	                                var ani = Mgr.aniManager.GenerateEmptyAni();
	                                postMessage({
	                                    msg: "addAnimation",
	                                    data: { aniData: ani, state: Mgr.curBoard.GetGameState() }
	                                });
	                            }
	                            return true;
	                        }break;

	                    case RemoveLogicState.REMOVE_END_STATE:
	                        {
	                            return true;
	                            break;
	                        }

	                    default:
	                        {
	                            return true;
	                            break;
	                        }
	                }
	            }
	        }
	    }, {
	        key: "Continue",
	        value: function Continue() {
	            console.log("PuzzleChessResolver.Continue");
	            typeof LogPanel != 'undefined' && LogPanel.addInfo('CT');
	            return this.CycleRunRemoveLogicMachine(this.cycle_drop_round_);
	        }

	        // 后台校验时循环运行滑动步骤,返回值为0表示校验ok

	    }, {
	        key: "RunCycleReqStep",
	        value: function RunCycleReqStep(record) {
	            TimeStat.runLogicTimes = 0;
	            var calcScore = 0;
	            this.cycle_drop_round_ = 0;

	            // int currentBuyTime = 0;
	            var should_score = record.game_info.score;
	            var should_star = record.game_info.star_level;
	            var input_size = record.input.length;

	            for (var i = 0; i < input_size; i++) {
	                //console.log("run one Step")
	                var input = record.input[i];
	                var from = new weType.GridPosition(),
	                    to = new weType.GridPosition();
	                if (input.from) {
	                    from.row = input.from.row;
	                    from.col = input.from.col;
	                }
	                if (input.to) {
	                    to.row = input.to.row;
	                    to.col = input.to.col;
	                }

	                switch (input.op) {
	                    case we4p.InputOp.kOpSlide:
	                        {
	                            var runOneFlag = this.RunOneSlideStep(input);
	                            if (!runOneFlag) {
	                                calcScore = Mgr.scoreManager.getScore();

	                                if (calcScore >= should_score - 100 && calcScore <= should_score + 100) {
	                                    return 0;
	                                }
	                                console.log("这步运行失败，直接退出");
	                                return 3; // 这步运行失败，直接退出
	                            } else {
	                                var flag = this.CycleRunRemoveLogicMachine(this.cycle_drop_round_);
	                                //while(!flag){
	                                //    flag = this.Continue();
	                                //}
	                            }
	                            break;
	                        }

	                    case we4p.InputOp.kOpUseItem:
	                        {
	                            switch (input.item_id) {
	                                //case we4p.ItemId.itemRollback:
	                                case we4p.ItemId.itemRearrange:
	                                case we4p.ItemId.itemSwap:
	                                case we4p.ItemId.itemHammer:
	                                case we4p.ItemId.itemStepInner:
	                                case we4p.ItemId.itemGlass:
	                                    {
	                                        var result = this.Input(input);
	                                        if (result) {
	                                            this.CycleRunRemoveLogicMachine(0);
	                                        }
	                                        break;
	                                    }
	                                case we4p.ItemId.itemRespawn:
	                                    {
	                                        var info = new we4p.RespawnInfo();
	                                        // 每次复合, 给子弹的攻击力加成
	                                        info.bullet_attack = 5;
	                                        Mgr.curBoard.OnRespawn(info);
	                                        this.CycleRunRemoveLogicMachine(0);
	                                    }

	                                default:
	                                    break;
	                            }
	                            break;
	                        }

	                    case we4p.InputOp.kOpRespawn:
	                        {
	                            var info = new we4p.RespawnInfo();
	                            // 每次复合, 给子弹的攻击力加成
	                            info.bullet_attack = 5;
	                            Mgr.curBoard.OnRespawn(info);
	                            this.CycleRunRemoveLogicMachine(0);
	                            break;
	                        }
	                    default:
	                        break;
	                }
	            }

	            var compute_score = Mgr.scoreManager.getScore();

	            if (compute_score < should_score - 1000) {
	                return 1;
	            }

	            if (Mgr.passConditionManager.getStatus() != record.game_result) {
	                return 2;
	            }

	            var compute_star = Mgr.scoreManager.getStar();

	            if (compute_star < should_star) {
	                return 3;
	            }

	            return 0;
	        }
	    }, {
	        key: "SetRemoveLogicStage",
	        value: function SetRemoveLogicStage(remove_state) {
	            //console.log("SetRemoveLogicStage to " + remove_state);
	            Mgr.curBoard.SetRemoveState(remove_state);
	        }
	    }, {
	        key: "GetGameState",
	        value: function GetGameState() {
	            return Mgr.curBoard.GetGameState();
	        }

	        /**
	         * 判断相邻两个棋子的滑动操作
	         * @param pos 为滑动第一个点
	         * @param otherPos 为滑动第二个点
	         * @return 返回值表示两个棋子是否能滑动成功，产生消除
	         **/

	    }, {
	        key: "JudgeOneSlide",
	        value: function JudgeOneSlide(pos, otherPos) {
	            var reason = board_viewer.FailReason.kFailSwapUnknown;
	            if (!Mgr.boardViewer.CanSlideSwap(pos, otherPos, reason)) {
	                //if (reason == board_viewer.FailReason.kFailSwapFence) {
	                //    return weType.ExchangItemResult.ERI_ExchangeFailedFence;
	                //}
	                return weType.ExchangItemResult.EIR_None;
	            }

	            var from = new weType.GridPosition(pos);
	            var to = new weType.GridPosition(otherPos);

	            // 可以交换形成普通消除
	            if (Mgr.boardViewer.CheckSwap(from, to, null)) return weType.ExchangItemResult.EIR_NormalExchangeSucc;

	            // 特殊棋子交换
	            if (Mgr.boardViewer.CheckSpecialSwap(from, to)) return weType.ExchangItemResult.EIR_NormalExchangeSucc;

	            // 不能交换
	            return weType.ExchangItemResult.EIR_ExchangeFailed;
	        }
	    }, {
	        key: "SaveSlide",
	        value: function SaveSlide(from, to) {
	            this.slide_from_.copyData(from);
	            this.slide_to_.copyData(to);
	        }
	    }, {
	        key: "IsSpecialSwap",
	        value: function IsSpecialSwap(from, to) {
	            var n1 = Mgr.boardViewer.GetNode(from.row, from.col);
	            var n2 = Mgr.boardViewer.GetNode(to.row, to.col);
	            var c1 = n1.GetChess();
	            var c2 = n2.GetChess();

	            if (c1 == null || c2 == null) {
	                //WE4_ASSERT(0);
	                return false;
	            }

	            // 2个都是特殊棋子
	            if (c1.Attribute().IsSpecialChess1 && c2.Attribute().IsSpecialChess1) {
	                return true;
	            }

	            // 有一个是特殊棋子2(幽灵)
	            if (c1.Attribute().IsSpecialChess2 && c2.Attribute().CanSwapGhost) return true;
	            if (c2.Attribute().IsSpecialChess2 && c1.Attribute().CanSwapGhost) return true;

	            // 按普通棋子交换处理
	            return false;
	        }
	        // 滑动真实交换棋盘中的两个棋子

	    }, {
	        key: "ExchangeGridChessman",
	        value: function ExchangeGridChessman(pos1, pos2, parentBatch) {
	            if (typeof pos1 == "number") {
	                parentBatch = pos1;
	                pos1 = this.slide_from_;
	                pos2 = this.slide_to_;
	            }
	            var batchNum = 1 /*Animation().GetOneAnimationBatch(BatchData(parentBatch, BatchData::RELATION_END, 0))*/;
	            Mgr.boardViewer.SlideSwap(pos1, pos2);
	            Mgr.boardViewer.CollectSomething(batchNum, pos1);
	            Mgr.boardViewer.CollectSomething(batchNum, pos2);
	        }
	    }, {
	        key: "SlideNormalChess",
	        value: function SlideNormalChess(parentBatch) {
	            //console.log("PuzzleChessResolver.SlideNormalChess");
	            var littleBatchIndexStruct = new weType.LittleBatchIndexStruct();
	            littleBatchIndexStruct.m_self_batch_index = 1 /*Animation().GetOneAnimationBatch(
	                                                          BatchData(parentBatch, BatchData::RELATION_END, 0))*/;
	            littleBatchIndexStruct.m_parent_batch_index = parentBatch;
	            Mgr.curBoard.clearSpecialBombList();
	            var round = 1;
	            Mgr.dataCollector.startOneRemove(we4p.AttackType.Attack_Normal, 1, round);
	            this.MatchAt(littleBatchIndexStruct, this.slide_from_);
	            this.MatchAt(littleBatchIndexStruct, this.slide_to_);
	            Mgr.dataCollector.endOneRemove();
	            Mgr.curBoard.handleSpecialBomb(round);

	            //一轮消除结束，发送一条消息
	            Mgr.dataEventManager.trigger(EventId.END_ONE_REMOVE_ROUND);
	        }
	    }, {
	        key: "SlideSpecialChess",
	        value: function SlideSpecialChess() {
	            //console.log("PuzzleChessResolver.SlideSpecialChess");
	            var littleBattleIndex = 1 /*Animation().GetIncrementCrushLittleBatchIndex()*/;
	            var batchIndexStruct = new weType.LittleBatchIndexStruct();
	            batchIndexStruct.m_parent_batch_index = 0;
	            batchIndexStruct.m_self_batch_index = littleBattleIndex;

	            var info = new ChessInterface.AttackInfo();
	            info.attack_type = we4p.AttackType.Attack_Normal;
	            info.other = new weType.GridPosition(this.slide_from_);
	            info.src = new weType.GridPosition(this.slide_to_);
	            info.join = 1; // PuzzleCrushDataStatistic::GetInstance().GetCurJoinIndex();;
	            info.special_bomb = true;
	            info.batch = batchIndexStruct;

	            var ev = new puzzle_event.CrushNodeEvent();
	            ev.attack_type = we4p.AttackType.Attack_Normal;
	            ev.ani_batch_id = batchIndexStruct.m_self_batch_index;
	            ev.src = new weType.GridPosition(this.slide_to_);
	            ev.nodes.push(new weType.GridPosition(info.src));
	            ev.nodes.push(new weType.GridPosition(info.other));

	            var n1 = Mgr.boardViewer.GetNode(info.src.row, info.src.col);
	            var n2 = Mgr.boardViewer.GetNode(info.other.row, info.other.col);
	            var c2 = n2.GetChess();

	            this.gas_special_swap_flag = false;
	            var round = 1;
	            Mgr.curBoard.clearSpecialBombList();
	            Mgr.dataCollector.startOneRemove(we4p.AttackType.Attack_Normal, 1, round);

	            //console.log(this.slide_from_);
	            //console.log(this.slide_to_);

	            if (c2.Attribute().IsSpecialChess2) {
	                n2.Crush(info);
	            } else {
	                n1.Crush(info);
	            }

	            // CurrentScoreManager()->AddStatistics(kStatSlideCrushCount, 1);

	            Mgr.eventManager.Forward(ev);

	            Mgr.dataCollector.endOneRemove();
	            Mgr.curBoard.handleSpecialBomb(round);

	            //一轮消除结束，发送一条消息
	            Mgr.dataEventManager.trigger(EventId.END_ONE_REMOVE_ROUND);

	            if (this.gas_special_swap_flag) {
	                Mgr.aniManager.GenerateGasSpecialEndAnimation();
	            }
	        }
	    }, {
	        key: "MatchAt",
	        value: function MatchAt(littleBatchIndexStruct, pos) {
	            var allJoinItems = [];
	            Mgr.boardViewer.FindJoinPosition(pos, allJoinItems);
	            //console.log(allJoinItems);
	            if (allJoinItems.length < 3) {
	                return false;
	            }

	            // 插入声音
	            //Animation().PushAnimationFun(littleBatchIndexStruct.m_self_batch_index,
	            //    AFUN_1(AnimationFunMgr::CrushSoundAnim, 0));

	            var info = new ChessInterface.AttackInfo();
	            info.attack_type = we4p.AttackType.Attack_Normal;
	            info.batch = littleBatchIndexStruct;
	            info.depth = 0;
	            info.join = 1;
	            info.src = pos;
	            var size = allJoinItems.length;
	            for (var n = 0; n < size; n++) {
	                var puzzleChessNode = Mgr.boardViewer.GetNode(allJoinItems[n].row, allJoinItems[n].col);
	                if (puzzleChessNode) {
	                    puzzleChessNode.Crush(info);
	                }
	            }

	            //CurrentScoreManager()->AddStatistics(kStatSlideCrushCount, 1);

	            var e = new puzzle_event.CrushNodeEvent();
	            e.src = pos;
	            e.nodes = allJoinItems;
	            e.attack_type = we4p.AttackType.Attack_Normal;
	            e.ani_batch_id = 1 /*littleBatchIndexStruct.m_self_batch_index*/;
	            Mgr.eventManager.Forward(e);
	            return true;
	        }
	    }, {
	        key: "MatchAll",
	        value: function MatchAll(iDropTimes) {
	            var batchIndexStruct = new weType.LittleBatchIndexStruct();
	            batchIndexStruct.m_self_batch_index = 1 /*Animation().GetIncrementCrushLittleBatchIndex()*/;

	            //BatchParentRelationStruct parentRelationStruct;
	            //Animation().CreateCrushLittleBatch(batchIndexStruct.m_self_batch_index,
	            //    parentRelationStruct,
	            //    Animation_Batch_Default);
	            //
	            //int collectBattleIndex = Animation().GetIncrementCrushLittleBatchIndex();
	            //Animation().CreateCrushLittleBatch(collectBattleIndex, parentRelationStruct,
	            //    Animation_Batch_Default);

	            var events_vec = [];
	            var allDropJoinItems = [];

	            var allRow = Mgr.boardViewer.Row();
	            var allCol = Mgr.boardViewer.Col();
	            for (var row = allRow - 1; row >= 0; row--) {
	                for (var col = 0; col < allCol; col++) {
	                    var pos = new weType.GridPosition(row, col);
	                    var puzzleOneChessNode = Mgr.boardViewer.GetNode(pos.row, pos.col);

	                    if (puzzleOneChessNode.IsChessGridEmpty() || puzzleOneChessNode.GetMark()) {
	                        continue;
	                    }

	                    if (Util.findEleInArr(allDropJoinItems, function (ele) {
	                        return pos.isEqual(ele);
	                    })) {
	                        //if (std::find(allDropJoinItems.begin(), allDropJoinItems.end(), pos) !=
	                        //allDropJoinItems.end()) {
	                        continue;
	                    }

	                    if (Mgr.boardViewer.CollectSomething(1 /*collectBattleIndex*/, pos)) {
	                        // 判断是否有收集物
	                        continue;
	                    }

	                    var allJoinItems = [];
	                    Mgr.boardViewer.FindJoinPosition(pos, allJoinItems);

	                    if (allJoinItems.length >= 3) {
	                        // 插入声音的点动画
	                        //Animation().PushAnimationFun(
	                        //    batchIndexStruct.m_self_batch_index,
	                        //    AFUN_1(AnimationFunMgr::CrushSoundAnim, iDropTimes));
	                        //
	                        var ev = new puzzle_event.CrushNodeEvent();
	                        ev.src = pos;
	                        ev.nodes = allJoinItems;
	                        ev.ani_batch_id = batchIndexStruct.m_self_batch_index;
	                        events_vec.push(ev);
	                    }

	                    if (allJoinItems.length > 3) {}
	                    //CurrentScoreManager()->AddStatistics(kStatDropSpecialCount, 1);

	                    //CurrentScoreManager()->AddStatistics(kStatDropCrushCount, 1);

	                    var len = allJoinItems.length;
	                    for (var i = 0; i < len; i++) {
	                        allDropJoinItems.push(allJoinItems[i]);
	                    }
	                }
	            }

	            if (allDropJoinItems.length == 0) {
	                return;
	            }
	            this.m_iComboTimes++;

	            var round = 1 + this.m_iComboTimes;
	            Mgr.curBoard.clearSpecialBombList();
	            Mgr.dataCollector.startOneRemove(we4p.AttackType.Attack_Normal, 1, round);
	            var info = new ChessInterface.AttackInfo();
	            info.attack_type = we4p.AttackType.Attack_Normal;
	            info.batch = batchIndexStruct;
	            info.depth = 0;
	            info.join = 1;
	            var size = allDropJoinItems.length;
	            for (var n = 0; n < size; n++) {
	                var puzzleChessNode = Mgr.boardViewer.GetNode(allDropJoinItems[n].row, allDropJoinItems[n].col);
	                if (puzzleChessNode) {
	                    puzzleChessNode.Crush(info);
	                }
	            }

	            for (var i = 0; i < events_vec.length; i++) {
	                Mgr.eventManager.Forward(events_vec[i]);
	            }
	            Mgr.dataCollector.endOneRemove();
	            Mgr.curBoard.handleSpecialBomb(round);
	        }
	        // 重置掉落的轮数

	    }, {
	        key: "ResetDropTime",
	        value: function ResetDropTime() {
	            this.m_DropTimes = 0;
	            this.m_iComboTimes = 0;
	            Mgr.curBoard.set_dropround(0);
	        }
	    }, {
	        key: "RemoveGeneralMoveStateFunction",
	        value: function RemoveGeneralMoveStateFunction() {
	            var lastBatchIndex = 1 /*Animation().GetBatchVectorLastBatchIndex()*/;
	            this.ExchangeGridChessman(lastBatchIndex);
	            Mgr.curBoard.OnSlide(this.slide_from_, this.slide_to_);
	            if (this.IsSpecialSwap(this.slide_from_, this.slide_to_)) {
	                this.SlideSpecialChess();
	            } else {
	                this.SlideNormalChess(lastBatchIndex);
	            }

	            Mgr.boardViewer.Sweep();
	            this.SetRemoveLogicStage(RemoveLogicState.REMOVE_CRUSH_DROP_STATE);
	        }
	    }, {
	        key: "RemoveBalanceStateFunction",
	        value: function RemoveBalanceStateFunction() {
	            //console.log("RemoveBalanceStateFunction");

	            this.MatchAll(this.m_DropTimes);

	            var nCrushcount = Mgr.boardViewer.Sweep();
	            if (nCrushcount > 0) {
	                //一轮消除结束，发送一条消息
	                Mgr.dataEventManager.trigger(EventId.END_ONE_REMOVE_ROUND);

	                // 有掉落产生了三消除，又进入消除操作
	                this.SetRemoveLogicStage(RemoveLogicState.REMOVE_CRUSH_DROP_STATE);

	                // TODO(andrewli):
	                // 哎呀呀, 目前没有这个事件
	                // 只能把掉落分数计算插到这里了
	                // 只能把掉落分数计算插到这里了
	                //CurrentScoreManager()->AddDropCrushBonus();
	                return;
	            }
	            // 棋盘处理平衡态
	            /// CurrentBoard()->set_gamestate(m_GameState);
	            // 如果当前这次平衡态事件是因为错误滑动导致则忽略
	            //if (this.error_slide_balance_) {
	            //    console.log("错误滑动导致则忽略")
	            //    this.error_slide_balance_ = false;
	            //    this.SetRemoveLogicStage(RemoveLogicState.REMOVE_INITIAL_STATE);
	            //    return;
	            //}

	            if (Mgr.curBoard.OnBalanceState() != 0) {
	                // 有掉落产生了三消除，又进入消除操作
	                this.SetRemoveLogicStage(RemoveLogicState.REMOVE_CRUSH_DROP_STATE);
	                return;
	            }

	            this.SetRemoveLogicStage(RemoveLogicState.REMOVE_INITIAL_STATE);

	            //#pragma WARNING("@andrewli, ReArrage move to PuzzleChessBoard.cpp?")
	            // 这里会判断关卡是否结束
	            // 会检查是否死局并重排等等
	            // 移动到board的OnBalanceState()里面处理
	            // balanceFunction();
	            // 只有玩家回合才提示combo特效
	            //这里处理重排
	            Mgr.curBoard.CheckToReArrange();
	            //if (PlayerManager()->current_player() == PlayerManager()->default_player()) {
	            //    if (CurrentBoard()->GetGameState() == PGS_PLAYING) {
	            //        Animation().CreateAnimation(
	            //            BatchData(false, true),
	            //            AFUN_1(AnimationFunMgr::PlayDropEndComboSound, m_iComboTimes));
	            //    }
	            //}
	            this.ResetDropTime();
	            //PlayerManager()->Run();
	        }
	    }, {
	        key: "RemoveCrushDropStateFunction",
	        value: function RemoveCrushDropStateFunction() {
	            Mgr.curBoard.OnCrushDropState();

	            // 获取之前因为掉落产生的消除次数
	            //var count = CurrentScoreManager()->GetStatistics(kStatDropCrushCount);

	            // 这个动画是干啥?
	            //Animation().CreateAnimation(BatchData(true),
	            //    AFUN_1(AnimationFunMgr::ClearGasAnim));

	            // 执行掉落逻辑
	            Mgr.curBoard.DoDrop();
	            //Animation().GeneratePassShowBigBatch(true);

	            // 更新当前回合掉落轮数
	            this.m_DropTimes += 1;
	            Mgr.curBoard.set_dropround(this.m_DropTimes);

	            // 更新累积掉落轮数
	            Mgr.envManager.SetDropSequence(Mgr.envManager.GetDropSequence() + 1);

	            // 如果掉落后,掉落消除的次数增加了,则计算combo数
	            //if (CurrentScoreManager()->GetStatistics(kStatDropCrushCount) > count) {
	            //    m_iComboTimes += 1;
	            //}

	            this.SetRemoveLogicStage(RemoveLogicState.REMOVE_BANLANCE_STATE);
	        }
	    }]);

	    return PuzzleChessResolver;
	}();

	module.exports = {
	    RemoveLogicState: RemoveLogicState,

	    PuzzleChessResolver: PuzzleChessResolver
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var we4p = we4p || __webpack_require__(13);
	var weType = weType || __webpack_require__(20);
	var Util = Util || __webpack_require__(21);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);
	var Mgr = Mgr || __webpack_require__(14);
	var puzzle_rule = puzzle_rule || __webpack_require__(30);
	var ChessInterface = ChessInterface || __webpack_require__(31);
	var EventId = EventId || __webpack_require__(9);

	var FailReason = {
		kFailSwapUnknown: 0,
		kFailSwapFence: 1
	};

	function CanSwapGas(node) {
		if (!node.CanSlide()) return false;
		if (node.HasCollectChess() || node.IsCombinationChess()) {
			return false;
		}
		var color = node.ChessColor();
		if (color >= weType.MovingItemType.MIT_0 && color <= weType.MovingItemType.MIT_6) return true;
		return false;
	}

	// BoardViewer 集合了大部分对棋盘操作的逻辑
	// 不在Board里面直接做的原因是:
	//   BoardViewer对逻辑屏蔽了当前到底是全局棋盘还是仅仅是屏幕内棋盘
	//   BoardViewer有能力对全局棋盘进行任意的切割为1个或多个子棋盘而不影响逻辑
	//   不仅兼容挖掘机, 并可方便以后处理大棋盘(行列都超过9).

	var BoardViewer = function () {
		function BoardViewer(board) {
			_classCallCheck(this, BoardViewer);

			this.board_ = board;
			this.start_ = 0;
			this.row_ = 0;
			this.col_ = 0;
			this.row_offset_ = 0;
			this.col_offset_ = 0;
		}

		_createClass(BoardViewer, [{
			key: "ValidPos",
			value: function ValidPos(row, col) {
				return row >= 0 && row < this.row_ && col >= 0 && col < this.col_;
			}
		}, {
			key: "GetColorByPos",
			value: function GetColorByPos(pos) {
				var node = this.GetNode(pos.row, pos.col);
				if (node) return node.Color();
				return weType.MovingItemType.MIT_NONE;
			}
			// 根据Viewer内的坐标和索引获取Node

		}, {
			key: "GetNode",
			value: function GetNode(row, col) {

				var arg0 = arguments[0];
				if ((typeof arg0 === "undefined" ? "undefined" : _typeof(arg0)) == 'object') {
					row = arg0['row'];
					col = arg0['col'];
				}
				if (!this.ValidPos(row, col)) return null;

				return this.board_[this.start_ + row * this.col_ + col];
			}
		}, {
			key: "GetNodeIndex",
			value: function GetNodeIndex(index) {
				return index >= 0 && (index < this.NodeCount() ? this.board_[this.start_ + index] : null);
			}
		}, {
			key: "GetAroundNode",
			value: function GetAroundNode(center, around) {
				var around_pos = [new weType.GridPosition(-1, 0), new weType.GridPosition(+1, 0), new weType.GridPosition(0, -1), new weType.GridPosition(0, +1)];

				var row, col;
				for (var i = 0; i < 4; i++) {
					row = center.row + around_pos[i].row;
					col = center.col + around_pos[i].col;

					var node = this.GetNode(row, col);
					if (node == null) continue;
					around.push(node);
				}
			}
		}, {
			key: "AddChess",
			value: function AddChess(pos, type) {
				var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : weType.MovingItemType.MIT_NONE;
				var attach = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				var node = this.GetNode(pos);
				if (node == null) return;
				node.AddChessType(type, attach, color);
			}
		}, {
			key: "CrushNode",
			value: function CrushNode(node, iAttackType, batchIndexStruct) {
				//PrepareNextPhase();
				var round = 1;
				Mgr.dataCollector.startOneRemove(iAttackType, 1, round);
				var info = new ChessInterface.AttackInfo();
				info.batch = batchIndexStruct;
				info.attack_type = iAttackType;
				info.depth = 0;
				info.join = 1;
				info.src = node.GetPosition();
				var res = node.Crush(info);
				//RunNextPhase();
				Mgr.dataCollector.endOneRemove();
				Mgr.curBoard.handleSpecialBomb(round);

				//一轮消除结束，发送一条消息
				Mgr.dataEventManager.trigger(EventId.END_ONE_REMOVE_ROUND);
				return res;
			}
		}, {
			key: "RemoveChess",
			value: function RemoveChess(pos, type) {
				var node = this.GetNode(pos);
				if (node == null) return;
				node.RemoveChess(type);
			}
		}, {
			key: "HasChessType",
			value: function HasChessType(pos, type) {
				var node = this.GetNode(pos);
				if (node == null) return false;
				return node.HasChessType(type);
			}
			//CollectCollection(row, col){
			//
			//}

			// 将全局坐标转换为Viewer内坐标

		}, {
			key: "Position",
			value: function Position(worldPos) {
				return new weType.GridPosition(worldPos.row - this.row_offset_, worldPos.col - this.col_offset_);
			}

			//将index转换为Viewer内坐标

		}, {
			key: "GetPosByIndex",
			value: function GetPosByIndex(index) {
				var this_col = this.col_;
				index -= this.row_offset_ * this_col;
				if (index < 0 || index >= this.NodeCount()) return new weType.GridPosition(-1, -1);
				var row = Math.floor(index / this_col);
				var col = index % this_col;
				return new weType.GridPosition(row, col);
			}

			//判断坐标是否在Viewer

		}, {
			key: "IsPosInViewer",
			value: function IsPosInViewer(pos) {
				if (pos.row < 0 || pos.row >= this.row_ || pos.col < 0 || pos.col >= this.col_) return false;
				return true;
			}

			// 获取Viewer的范围

		}, {
			key: "NodeCount",
			value: function NodeCount() {
				return this.row_ * this.col_;
			}
		}, {
			key: "Row",
			value: function Row() {
				return this.row_;
			}
		}, {
			key: "Col",
			value: function Col() {
				return this.col_;
			}

			// 设置Viewer的范围

		}, {
			key: "SetRange",
			value: function SetRange(start, row, col, row_offset, col_offset) {
				this.start_ = start;
				this.row_ = row;
				this.col_ = col;
				this.row_offset_ = row_offset;
				this.col_offset_ = col_offset;
			}

			// 判断2个棋格是否能交换

		}, {
			key: "CanSlideSwap",
			value: function CanSlideSwap(p1, p2) {
				var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

				if (p1.isEqual(p2)) {
					return false;
				}
				var n1 = this.GetNode(p1.row, p1.col);
				var n2 = this.GetNode(p2.row, p2.col);
				if (n1 == null || n2 == null) {
					return false;
				}

				// 有棋格不能slide
				if (!(n1.CanSlide() && n2.CanSlide())) {
					return false;
				}

				// 判断栅栏
				// 栅栏需要播放特定动画
				if (p1.row > p2.row) {
					if (n2.HasChessType(we4p.ChessType.STIT_FENCE_BOTTOM)) {
						//if (reason)
						//	*reason = kFailSwapFence;
						return false;
					}
				}
				if (p1.row < p2.row) {
					if (n1.HasChessType(we4p.ChessType.STIT_FENCE_BOTTOM)) {
						//if (reason)
						//	*reason = kFailSwapFence;
						return false;
					}
				}

				if (p1.col > p2.col) {
					if (n2.HasChessType(we4p.ChessType.STIT_FENCE_RIGHT)) {
						//if (reason)
						//	*reason = kFailSwapFence;
						return false;
					}
				}
				if (p1.col < p2.col) {
					if (n1.HasChessType(we4p.ChessType.STIT_FENCE_RIGHT)) {
						//if (reason)
						//	*reason = kFailSwapFence;
						return false;
					}
				}
				return true;
			}

			// 交换2个棋格棋子

		}, {
			key: "SlideSwap",
			value: function SlideSwap(from, to) {
				var n1 = this.GetNode(from.row, from.col);
				var n2 = this.GetNode(to.row, to.col);
				if (n1 == null || n2 == null) return false;

				n1.SlideSwap(n2);
				return true;
			}

			// 判断2个棋子交换后是否能产生消除, 如果能, 将消除的位置保存在target
			// p1是起手位置, p2是离手位置
			// 函数可能会交换p1和p2的值, 用来保证:
			// p2位置总是产生消除的位置

		}, {
			key: "CheckSwap",
			value: function CheckSwap(pos1, pos2, pTargetVec) {
				if (!this.CanSlideSwap(pos1, pos2)) {
					return false;
				}

				var pos1Node = this.GetNode(pos1.row, pos1.col);
				var pos2Node = this.GetNode(pos2.row, pos2.col);

				// 交换并获取参与消除的棋格
				this.SlideSwap(pos1, pos2);
				var vecRow1Item = [];
				var vecCol1Item = [];
				var nRowJoin = this.CheckRowJoin(pos1, pos1Node.ChessColor(), vecRow1Item);
				var nColJoin = this.CheckColJoin(pos1, pos1Node.ChessColor(), vecCol1Item);

				var vecRow2Item = [];
				var vecCol2Item = [];
				var nRowJoin2 = this.CheckRowJoin(pos2, pos2Node.ChessColor(), vecRow2Item);
				var nColJoin2 = this.CheckColJoin(pos2, pos2Node.ChessColor(), vecCol2Item);
				// 再次交换将棋盘数据还原
				this.SlideSwap(pos1, pos2);

				if (pTargetVec != null) {
					pTargetVec.splice(0, pTargetVec.length);
				}
				if (nRowJoin >= 3) {
					// 交换pos1,pos2的值，保证pos1是同类棋子
					pos1.Swap(pos2);
					if (pTargetVec) {
						Util.arrayCopy(pTargetVec, vecRow1Item);
					}
					return true;
				}

				if (nColJoin >= 3) {
					// 交换pos1,pos2的值，保证pos1是同类棋子
					pos1.Swap(pos2);
					if (pTargetVec) {
						Util.arrayCopy(pTargetVec, vecCol1Item);
					}
					return true;
				}

				if (nRowJoin2 >= 3) {
					if (pTargetVec) {
						Util.arrayCopy(pTargetVec, vecRow2Item);
					}
					return true;
				}

				if (nColJoin2 >= 3) {
					if (pTargetVec) {
						Util.arrayCopy(pTargetVec, vecCol2Item);
					}
					return true;
				}

				return false;
			}

			// 判断2个棋子交换后是否能产生消除, 并且至少其中1个是特殊棋子
			// deprecated

		}, {
			key: "CheckSpecialSwap",
			value: function CheckSpecialSwap(pos1, pos2) {
				if (!this.CanSlideSwap(pos1, pos2)) {
					return false;
				}

				var pos1Node = this.GetNode(pos1.row, pos1.col);
				var pos2Node = this.GetNode(pos2.row, pos2.col);

				if (pos1Node.HasSpecialChess() && pos2Node.HasSpecialChess()) {
					return true;
				}

				if (pos1Node.HasChessType(we4p.ChessType.CT_SpecialGas)) {
					return CanSwapGas(pos2Node);
				}

				if (pos2Node.HasChessType(we4p.ChessType.CT_SpecialGas)) {
					if (CanSwapGas(pos1Node)) {
						// 交换pos1,pos2的值，保证pos1是特效棋子
						pos1.row += pos2.row;
						pos1.col += pos2.col;
						pos2.row = pos1.row - pos2.row;
						pos2.col = pos1.col - pos2.col;
						pos1.row = pos1.row - pos2.row;
						pos1.col = pos1.col - pos2.col;
						return true;
					} else {
						return false;
					}
				}

				return false;
			}

			// 判断从p1->p2是否为一次有效的用户滑动
			//  如果是, 则说明:
			//    1. p1 -> p2是可滑动的
			//	2. p1 -> p2形成了一次3消 或者
			//    3. p1 -> p2形成了一次特殊棋子消除

		}, {
			key: "ValidUserSlide",
			value: function ValidUserSlide(p1, p2) {
				return this.CheckSwap(p1, p2, null) || this.CheckSpecialSwap(p1, p2);
			}

			// 在viewer内寻找任意一个可消除的位置
			// 交换的位置放在activeItems, 发生消除的位置放在pTargetVec

		}, {
			key: "FindActiveItem",
			value: function FindActiveItem(activeItems, pTargetVec) {

				// 人机对战按玩法需要提示
				//if (StageManager()->IsAlphaGo()) {
				//	PlayerVsAlphaGo* player_vs_alphago = dynamic_cast<PlayerVsAlphaGo*>(
				//		EventManager()->FindListener(kEventKeyPlayerVsAlphaGo));
				//	if (player_vs_alphago != NULL) {
				//		return player_vs_alphago->FindActiveItem(activeItems, pTargetVec);
				//	}
				//}
				return this.FindActiveItemInternal(activeItems, pTargetVec);
			}

			// 收集所有可以产生的滑动可能，并将其全部存入activeItems

		}, {
			key: "CollectActiveItem",
			value: function CollectActiveItem(activeItems) {
				var is_arr = activeItems instanceof Array;
				if (is_arr) {
					activeItems.splice(0, activeItems.length);
				}
				var Rows = this.Row();
				var Cols = this.Col();
				for (var row = 0; row < Rows; row++) {
					for (var col = 0; col < Cols; col++) {
						var basePos = new weType.GridPosition(row, col);
						var pos1 = new weType.GridPosition(row, col);
						var pos2 = new weType.GridPosition(row, col);

						var crush_vec = [];
						pos2.row += 1;
						if (this.CheckSwap(pos1, pos2, crush_vec)) {
							if (is_arr) {
								activeItems.push(pos1);
								activeItems.push(pos2);
							} else {
								activeItems(pos1, pos2, crush_vec);
							}
						}
						pos1.row = pos2.row = basePos.row;
						pos1.col = pos2.col = basePos.col;

						pos2.col += 1;
						if (this.CheckSwap(pos1, pos2, crush_vec)) {
							if (is_arr) {
								activeItems.push(pos1);
								activeItems.push(pos2);
							} else {
								activeItems(pos1, pos2, crush_vec);
							}
						}
						var around = [];
						this.GetAroundNode(basePos, around);
						var size = around.length;
						for (var i = 0; i < size; ++i) {
							var node = around[i];
							if (null == node) {
								continue;
							}
							pos1.row = basePos.row;
							pos1.col = basePos.col;
							var node_pos = node.GetPosition();
							pos2.row = node_pos.row;
							pos2.col = node_pos.col;
							// 左上不用遍历，只遍历右下，不然会出现重复的结果
							if (pos1.Direction(pos2) == weType.GridDirection.kLeft || pos1.Direction(pos2) == weType.GridDirection.kUp) {
								continue;
							}
							if (this.CheckSpecialSwap(pos1, pos2)) {
								if (is_arr) {
									activeItems.push(pos1);
									activeItems.push(pos2);
								}
							}
						}
					}
				}
			}

			// 获取参与滑动消除的棋子集合（只算最初的消除棋子,特殊棋子和后续掉落不算）

		}, {
			key: "GetAllCrush",
			value: function GetAllCrush(slide_from, slide_to, ret_vec) {
				var contain_slide_pos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

				var node_from = this.GetNode(slide_from.row, slide_from.col);
				var node_to = this.GetNode(slide_to.row, slide_to.col);
				if (null == node_from || null == node_to) {
					return;
				}
				var checkjoin_row_vec = [];
				var checkjoin_col_vec = [];
				var all_join_vec = [];
				this.SlideSwap(slide_from, slide_to);
				// 检测slide_from是否产生3消
				if (this.CheckJoin(slide_from, node_from.Color(), checkjoin_row_vec, checkjoin_col_vec, all_join_vec)) {
					Util.arrayCopy(ret_vec, all_join_vec);
					//ret_vec->assign(all_join_vec.begin(), all_join_vec.end());
				}
				checkjoin_row_vec.splice(0, checkjoin_row_vec.length);
				checkjoin_col_vec.splice(0, checkjoin_col_vec.length);
				all_join_vec.splice(0, all_join_vec.length);
				// 检测slide_to是否产生3消
				if (this.CheckJoin(slide_to, node_to.Color(), checkjoin_row_vec, checkjoin_col_vec, all_join_vec)) {
					Util.arrayCopy(ret_vec, all_join_vec);
					//	ret_vec->assign(all_join_vec.begin(), all_join_vec.end());
				}
				this.SlideSwap(slide_from, slide_to);
				// 去重
				Util.unique(ret_vec, function (pos1, pos2) {
					return pos1.isEqual(pos2);
				});

				// 是否包含探测位置本身
				if (!contain_slide_pos) {
					Util.removeElement(ret_vec, function (pos) {
						return slide_from.isEqual(pos) || slide_to.isEqual(pos);
					});
				}
			}
		}, {
			key: "CanDropTo",
			value: function CanDropTo(from, to) {
				var n1 = this.GetNode(from.row, from.col);
				var n2 = this.GetNode(to.row, to.col);

				if (n1 == null || n2 == null) return false;
				return n1.CanDropTo(n2);
			}
		}, {
			key: "DropTo",
			value: function DropTo(from, to) {
				if (!this.CanDropTo(from, to)) return false;

				var n1 = this.GetNode(from.row, from.col);
				var n2 = this.GetNode(to.row, to.col);

				if (n1 == null || n2 == null) return false;
				return n1.DropTo(n2);
			}

			// 判断指定位置如果是指定颜色的话, 是否能形成消除
			// 指定join_row和join_col的话, 会保存形成消除的位置

		}, {
			key: "CheckJoin",
			value: function CheckJoin(pos) {
				var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
				var join_row = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var join_col = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
				var join_all = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

				pos = new weType.GridPosition(pos.row, pos.col);
				if (-1 == color) {
					var node = this.GetNode(pos.row, pos.col);
					if (!node || !node.GetChess()) {
						return false;
					}
					color = node.ChessColor();
				}

				// 棋子本身不参与消除直接返回false
				var node = this.GetNode(pos.row, pos.col);
				if (node != null && node.GetChess() != null && node.GetChess().Attribute().StopJoin) {
					return false;
				}
				if (this.CheckRowJoin(pos, color, join_row) < 3 && this.CheckColJoin(pos, color, join_col) < 3) {
					return false;
				}
				// join_all包含自己和行列所有参与消除的位置
				if (join_all != null) {
					join_all.splice(0, join_all.length);
					if (join_row != null && join_row.length >= 2) {
						Util.arrayCopy(join_all, join_row);
					}
					if (join_col != null && join_col.length >= 2) {
						Util.arrayCopy(join_all, join_col);
					}
					join_all.push(pos);
				}
				return true;
			}

			// 指定位置点，指定类型的棋子，竖成一条线棋子的个数

		}, {
			key: "CheckColJoin",
			value: function CheckColJoin(pos, color, pTargetVec) {
				var iTotalRow = this.Row();
				var beginRow = pos.row;
				var endRow = pos.row;
				for (var curRow = pos.row - 1; curRow >= 0; curRow--) {
					if (!this.CheckPosJoin(curRow, pos.col, color)) {
						break;
					}
					beginRow = curRow;

					if (pTargetVec) {
						pTargetVec.push(new weType.GridPosition(curRow, pos.col));
					}
				}

				for (var curRow = pos.row + 1; curRow < iTotalRow; curRow++) {
					if (!this.CheckPosJoin(curRow, pos.col, color)) {
						break;
					}
					endRow = curRow;

					if (pTargetVec) {
						pTargetVec.push(new weType.GridPosition(curRow, pos.col));
					}
				}

				return endRow - beginRow + 1;
			}

			// 指定位置点，指定类型的棋子，横成一条线棋子的个数

		}, {
			key: "CheckRowJoin",
			value: function CheckRowJoin(pos, color, pTargetVec) {
				if (pTargetVec != null) {
					pTargetVec.splice(0, pTargetVec.length);
				}
				var beginCol = pos.col;
				var endCol = pos.col;
				for (var curCol = pos.col - 1; curCol >= 0; curCol--) {
					if (!this.CheckPosJoin(pos.row, curCol, color)) {
						break;
					}
					beginCol = curCol;

					if (pTargetVec) {
						pTargetVec.push(new weType.GridPosition(pos.row, curCol));
					}
				}

				var iTotalCol = this.Col();
				for (var curCol = pos.col + 1; curCol < iTotalCol; curCol++) {
					if (!this.CheckPosJoin(pos.row, curCol, color)) {
						break;
					}
					endCol = curCol;

					if (pTargetVec) {
						pTargetVec.push(new weType.GridPosition(pos.row, curCol));
					}
				}

				return endCol - beginCol + 1;
			}
			// 这都是判断消除的辅组函数
			// 哎呀能不能少一点简单一点啊...

		}, {
			key: "CheckPosJoin",
			value: function CheckPosJoin(row, col, color) {
				var node = this.GetNode(row, col);
				if (node == null) return false;
				return node.CheckMovingItemPosJoin(color);
			}

			// 查找并返回以pos为起点, 所有能参与消除的棋格位置

		}, {
			key: "FindJoinPosition",
			value: function FindJoinPosition(pos, out) {
				var rule = Mgr.ruleManager.GetRule(puzzle_rule.RuleType.kCoreRule);
				if (rule) {
					rule.FindJoinPosition(pos, out);
				}
			}

			// 为Viewer内的随机颜色棋子填充颜色, 并保证
			// 1. 一定有可滑动消除棋子
			// 2. 一定没有不滑动即形成消除的棋子
			// Notice:
			//   当前的随机棋盘的产生非常非常的简单, 实际上只有几行独有的代码,
			//   其它都是调用原来的逻辑接口, 实现的思路就是: 随机乱放
			//   放完以后再遍历所有随机棋子看是否满足条件1和2, 如果不满足就换个颜色再试试.

		}, {
			key: "GenerateRandom",
			value: function GenerateRandom(count) {
				var color_table = [weType.MovingItemType.MIT_0, weType.MovingItemType.MIT_1, weType.MovingItemType.MIT_2, weType.MovingItemType.MIT_3, weType.MovingItemType.MIT_4, weType.MovingItemType.MIT_5];
				if (count > color_table.length) {
					count = color_table.length;
				}

				var randnode = [];
				// 先随便填满颜色棋子
				var node = null;
				var size = this.NodeCount();
				var nodes_arr = this.board_;
				for (var i = this.start_; i < size; i++) {
					node = nodes_arr[i];
					if (node.ChessColor() != weType.MovingItemType.MIT_RANDOM) continue;
					node.SetChessColor(color_table[puzzle_rand.PuzzleRand("bv(623)") % count]);
					randnode.push(node);
				}
				//console.log("Fill rand color done!");

				// 然后我们再找找那个棋格不满足需求
				// 不满足的就随便换个颜色再检查...
				this.CheckJoinNode(randnode);
				//console.log("CheckJoinNode done!");

				// ok, 能到这说明至少产生了一个没有不滑动就消除的棋盘
				// 接着我们看看, 这是不是死局呀...
				// 是死局我们就.... 随便重排一下....
				//this.CheckAndFixDeadGame();
			}

			// 检查当前Viewer范围内是否为死局, 如果是则修复
			// Notice:
			//   虽然GenerateRandom能保证不是死局, 但是考虑挖掘机的情况,
			//   有可能出现全局棋盘不是死局, 但是局部可视棋盘为死局的情况.
			//   严格来说, 每次挖掘机滚屏, 都有判断新的屏幕内棋盘是否为死局.

		}, {
			key: "CheckAndFixDeadGame",
			value: function CheckAndFixDeadGame() {}

			// 掉落停止线
			// 正常情况下, 等于当前viewer的最底下一行
			// 如果有水线, 且水线高于最底下一行的时候, 等于水线在当前viewer的高度

		}, {
			key: "DropStopRow",
			value: function DropStopRow() {
				var row = Mgr.envManager.GetSodaLine();
				var pos = this.Position(new weType.GridPosition(row, 0));
				return pos.row;
			}

			// 从start开始寻找相邻的颜色一致的node

		}, {
			key: "FindConnectedNode",
			value: function FindConnectedNode(start, nodes) {
				var center = this.GetNode(start.row, start.col);
				if (center == null) return;

				this.FindNodeRecursion(center, nodes);

				// clear mark
				var size = nodes.length;
				for (var i = 0; i < size; i++) {
					var n = nodes[i];
					n.SetSearchFlag(0);
				}
			}

			// 从start开始寻找满足消除条件的node

		}, {
			key: "FindCrushNode",
			value: function FindCrushNode(start, nodes) {}
		}, {
			key: "Sweep",
			value: function Sweep() {
				var count = 0;
				var node = null;
				var len = this.NodeCount();
				for (var i = 0; i < len; i++) {
					node = this.GetNodeIndex(i);
					count += node.Sweep();
				}
				return count;
			}
			// 指定位置判断是否要收集物品

		}, {
			key: "CollectSomething",
			value: function CollectSomething(littleBatch, pos) {
				var puzzleChessNode = Mgr.boardViewer.GetNode(pos.row, pos.col);

				if (puzzleChessNode.HasChessType(we4p.ChessType.CT_COMBINATION3)) {
					return this.CollectCombination(littleBatch, pos);
				}

				//判断是否应该被收集
				if (!puzzleChessNode.HasCollectChess() || puzzleChessNode.HasChessSurface()) return false;

				var bWaterCollectPoint = puzzleChessNode.HasOneOf(we4p.ChessType.STIT_COLLECTCANDY_POINT);
				var bCollectPoint = puzzleChessNode.HasOneOf(we4p.ChessType.STIT_COLLECTBALLOON_POINT) || puzzleChessNode.IsStaticItemCollectPointInSoda();
				if (!(bCollectPoint || bWaterCollectPoint)) {
					return false;
				}

				puzzleChessNode.MarkChess(1);

				// PuzzleMovingItemData* pMovingItemData = puzzleChessNode->GetMovingItemP();
				var isUnderWater = puzzleChessNode.IsStaticItemCollectPointInSoda();
				var isballon = puzzleChessNode.HasChessType(we4p.ChessType.CT_COLLECTBALLOON);
				var isCandy = puzzleChessNode.HasChessType(we4p.ChessType.CT_COLLECTCANDY);
				var isSunnyDoll = puzzleChessNode.HasChessType(we4p.ChessType.STIT_SUNNYDOLL1);

				// if (isballon) {
				//   PuzzleCompute::GetInstance().AdditionCollect1();
				// }
				// else if (isCandy) {
				//   PuzzleCompute::GetInstance().AdditionCollect2();
				// }

				if (isballon || isCandy) {
					//if (littleBatch != 0) {
					//Animation().PushAnimationFun(
					//	littleBatch, AFUN_1(AnimationFunMgr::CollectAnim,
					//		puzzleChessNode->ToChessData(), isUnderWater));
					//console.log("收集");
					Mgr.dataCollector.startOneRemove(we4p.AttackType.Attack_Normal, 1, 0);
					Mgr.dataCollector.addCrushChess(puzzleChessNode.ToChessData());
					Mgr.dataCollector.endOneRemove();
					return true;
					//}
				} else if (isSunnyDoll) {
					// PuzzleCrushDataStatistic::GetInstance().GenResolvePackIndex();
					if (littleBatch != 0) {
						//Animation().PushAnimationFun(littleBatch,
						//	AFUN_1(AnimationFunMgr::CommonCollectAnim,
						//		puzzleChessNode->ToChessData(), 0));
						return true;
					}
				}

				return false;
			}
		}, {
			key: "CollectCombination",
			value: function CollectCombination(littleBatch, pos) {
				var puzzleChessNode = Mgr.boardViewer.GetNode(pos.row, pos.col);

				//WE4_ASSERT(puzzleChessNode->HasChessType(CT_COMBINATION3));
				var info = new ChessInterface.AttackInfo();
				info.batch.m_self_batch_index = littleBatch;
				info.attack_type = we4p.AttackType.Attack_Normal;
				info.depth = 0;
				info.join = 1;
				info.src = pos;
				puzzleChessNode.Crush(info);
				//Animation().PushAnimationFun(littleBatch,
				//	AFUN_1(AnimationFunMgr::CollectAnim,
				//		puzzleChessNode->ToChessData(), false));
				return true;
			}
		}, {
			key: "SetNewColor",
			value: function SetNewColor(node) {
				var rule = Mgr.ruleManager.GetRule(puzzle_rule.RuleType.kCoreRule);
				var color_table = [weType.MovingItemType.MIT_0, weType.MovingItemType.MIT_1, weType.MovingItemType.MIT_2, weType.MovingItemType.MIT_3, weType.MovingItemType.MIT_4, weType.MovingItemType.MIT_5];
				var old_color = node.ChessColor();
				var size = color_table.length;
				for (var i = 0; i < size; i++) {
					if (color_table[i] == old_color) continue;
					node.SetChessColor(color_table[i]);
					if (!rule.CheckJoin(this, new weType.GridPosition(node.GetWorldPosition()), node.ChessColor())) {
						return;
					}
				}
			}
		}, {
			key: "CheckJoinNode",
			value: function CheckJoinNode(randnode) {
				var rule = Mgr.ruleManager.GetRule(puzzle_rule.RuleType.kCoreRule);

				//console.log("start CheckJoin");
				var size = randnode.length;
				for (var i = 0; i < size; i++) {
					var node = randnode[i];
					if (rule.CheckJoin(this, new weType.GridPosition(node.GetWorldPosition()), node.ChessColor())) {
						//console.log("CheckJoin in Node: " + i);
						// 哎呀, 这个棋子形成消除了, 再随便换一个吧...
						this.SetNewColor(node);
					}
				}
			}
		}, {
			key: "FindNodeRecursion",
			value: function FindNodeRecursion(start, nodes) {
				if (start.SearchFlag() != 0) return;

				var around = [];
				this.GetAroundNode(start.GetPosition(), around);

				nodes.push(start);
				start.SetSearchFlag(1);
				var color = start.Color();

				var size = around.length;
				for (var i = 0; i < size; i++) {
					if (around[i] == null) continue;

					if (around[i].GetChess() == null) continue;

					if (!around[i].CheckMovingItemPosJoin(color)) continue;

					this.FindNodeRecursion(around[i], nodes);
				}
			}
		}, {
			key: "FindActiveItemInternal",
			value: function FindActiveItemInternal(activeItems, pTargetVec) {
				if (pTargetVec == null) {
					return false;
				}

				var dir = Util.getRandom(0, 1) % 2;
				// row是自底向上
				// 列是左右随机
				for (var row = this.Row() - 1; row >= 0; row--) {
					for (var col = 0; col <= this.Col(); col++) {
						var real_col = dir == 0 ? col : this.Col() - col - 1;
						var pos1 = new weType.GridPosition(row, real_col);
						var pos2 = new weType.GridPosition(pos1.row, pos1.col);

						pos2.row -= 1;
						var specialCheck = this.CheckSpecialSwap(pos1, pos2);
						if (specialCheck) {
							activeItems.push(pos1);
							activeItems.push(pos2);
							return true;
						}

						pos2.copyData(pos1);
						pos2.col += 1;
						specialCheck = this.CheckSpecialSwap(pos1, pos2);
						if (specialCheck) {
							activeItems.push(pos1);
							activeItems.push(pos2);
							return true;
						}

						pos2.copyData(pos1);
						pos2.row -= 1;
						var downCheck = this.CheckSwap(pos1, pos2, pTargetVec);
						if (downCheck) {
							activeItems.push(pos1);
							activeItems.push(pos2);
							return true;
						}

						pos2.copyData(pos1);
						pos2.col += 1;
						var rightCheck = this.CheckSwap(pos1, pos2, pTargetVec);
						if (rightCheck) {
							activeItems.push(pos1);
							activeItems.push(pos2);
							return true;
						}
					}
				}

				return false;
			}
		}]);

		return BoardViewer;
	}();

	module.exports = {
		FailReason: FailReason,
		BoardViewer: BoardViewer
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/11/1.
	 */
	var Mgr = Mgr || __webpack_require__(14);

	var RuleType = {
	    kCoreRule: 0,
	    kInputRule: 1,
	    kRuleNum: 2
	};

	function ClearSearchFlag(nodes) {
	    var size = nodes.length;
	    for (var i = 0; i < size; i++) {
	        var node = Mgr.boardViewer.GetNode(nodes[i].row, nodes[i].col);
	        if (node) {
	            node.SetSearchFlag(0);
	        }
	    }
	}

	var Rule = function () {
	    function Rule() {
	        _classCallCheck(this, Rule);

	        this.rule_type_ = 0;
	    }

	    _createClass(Rule, [{
	        key: "set_rule_type",
	        value: function set_rule_type(type) {
	            this.rule_type_ = type;
	        }
	    }, {
	        key: "rule_type",
	        value: function rule_type() {
	            return this.rule_type_;
	        }
	    }]);

	    return Rule;
	}();

	var RuleAttribute = function RuleAttribute() {
	    this.EnableSideFall = false;
	};

	// 核心消除/掉落规则

	var CoreRule = function (_Rule) {
	    _inherits(CoreRule, _Rule);

	    function CoreRule() {
	        _classCallCheck(this, CoreRule);

	        return _possibleConstructorReturn(this, (CoreRule.__proto__ || Object.getPrototypeOf(CoreRule)).call(this));
	    }
	    // 指定位置和颜色, 判断当前棋格是否能产生消除
	    // 如果能, 返回true, 并将参与消除的棋格位置填入 join
	    // 否则返回false.


	    _createClass(CoreRule, [{
	        key: "CheckJoin",
	        value: function CheckJoin(viewer, pos, color) {
	            var join = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	        }

	        // 查找并返回以pos为起点, 所有能参与消除的棋格位置

	    }, {
	        key: "FindJoinPosition",
	        value: function FindJoinPosition(pos, out) {
	            this.FindJoinPositionR(pos, out);
	            ClearSearchFlag(out);
	        }

	        // 获取指定位置的下一个掉落位置

	    }, {
	        key: "NextDropPosition",
	        value: function NextDropPosition(pos) {}

	        // 如果支持侧掉落的话, 获取下一个侧掉落的位置

	    }, {
	        key: "NextSideDropPosition",
	        value: function NextSideDropPosition(pos) {}

	        // 获取周边所有棋格

	    }, {
	        key: "GetAround",
	        value: function GetAround(pos, out) {}
	    }, {
	        key: "GetDirectionCount",
	        value: function GetDirectionCount() {}
	    }, {
	        key: "FindJoinPositionR",
	        value: function FindJoinPositionR(pos, out) {
	            var node = Mgr.boardViewer.GetNode(pos.row, pos.col);
	            if (node == null) return;
	            if (node.SearchFlag() == 2) return;

	            var tmp = [];
	            if (!this.CheckJoin(Mgr.boardViewer, pos, node.ChessColor(), tmp)) return;

	            if (node.SearchFlag() == 0) {
	                out.push(pos);
	            }
	            // 将node标记为已经处理
	            node.SetSearchFlag(2);

	            var tmp_size = tmp.length;
	            for (var i = 0; i < tmp_size; i++) {
	                var n = Mgr.boardViewer.GetNode(tmp[i].row, tmp[i].col);
	                if (n == null) continue;
	                // 已经标记过
	                if (n.SearchFlag() >= 1) continue;
	                n.SetSearchFlag(1);
	                out.push(tmp[i]);
	            }

	            for (var i = 0; i < tmp_size; i++) {
	                this.FindJoinPositionR(tmp[i], out);
	            }
	        }
	    }]);

	    return CoreRule;
	}(Rule);

	var RuleManager_ = function () {
	    function RuleManager_() {
	        _classCallCheck(this, RuleManager_);

	        this.rules_ = new Array(RuleType.kRuleNum);
	    }

	    _createClass(RuleManager_, [{
	        key: "Init",
	        value: function Init() {}
	    }, {
	        key: "Release",
	        value: function Release() {}
	    }, {
	        key: "AddRule",
	        value: function AddRule(rule) {
	            if (rule.rule_type() < 0 || rule.rule_type() >= RuleType.kRuleNum) return false;
	            this.rules_[rule.rule_type()] = rule;
	            return true;
	        }
	    }, {
	        key: "GetRule",
	        value: function GetRule(rule_type) {
	            if (rule_type < 0 || rule_type >= RuleType.kRuleNum) return null;
	            return this.rules_[rule_type];
	        }
	    }]);

	    return RuleManager_;
	}();

	module.exports = {
	    RuleType: RuleType,
	    Rule: Rule,
	    RuleAttribute: RuleAttribute,
	    CoreRule: CoreRule,
	    RuleManager_: RuleManager_
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by brandyxie
	 * 棋子接口类
	 */

	var we4p = we4p || __webpack_require__(13);
	var weType = weType || __webpack_require__(20);

	var PuzzleStaticItemAttachData = function () {
	    /*
	     * 如果存储的为大蘑菇时候
	     * iVal1表示为大蘑菇总血量
	     * ival2表示大蘑菇是否收到攻击，0表示没有收到攻击，1表示有，默认为0
	     * ival3表示大蘑菇当前血量，当该值小于等于0时，大蘑菇挂了
	     * 如果是颜色收集物，iVal1代表当前以搜集的颜色，iVal2备份iVal1上一次消除的值，iVal3表
	     * 示收集的总颜色，如4页花是4，五页花为5
	     */
	    function PuzzleStaticItemAttachData(ob) {
	        _classCallCheck(this, PuzzleStaticItemAttachData);

	        this.iVal1 = 0;
	        this.iVal2 = 0;
	        this.iVal3 = 0;
	        this.iElementId = 0;
	    }

	    _createClass(PuzzleStaticItemAttachData, [{
	        key: 'copyDataFrom',
	        value: function copyDataFrom(ob) {
	            if (ob != null) {
	                this.iVal1 = ob.iVal1;
	                this.iVal2 = ob.iVal1;
	                this.iVal3 = ob.iVal1;
	                this.iElementId = ob.iVal1;
	            }
	        }
	    }]);

	    return PuzzleStaticItemAttachData;
	}();

	var AttackInfo = function () {
	    function AttackInfo() {
	        _classCallCheck(this, AttackInfo);

	        // 攻击类型
	        this.attack_type = we4p.AttackType.Attack_Normal;
	        this.src = new weType.GridPosition();
	        this.other = new weType.GridPosition();
	        this.join = 0;
	        this.depth = 0;
	        // 2个特殊棋子交换产生的攻击
	        this.special_bomb = false;
	        this.around_attack = false;

	        this.batch = new weType.LittleBatchIndexStruct();
	    }

	    _createClass(AttackInfo, [{
	        key: 'copyDataFrom',
	        value: function copyDataFrom(other) {
	            this.attack_type = other.attack_type;
	            this.src = new weType.GridPosition(other.src);
	            this.other = new weType.GridPosition(other.other);
	            this.join = other.join;
	            this.depth = other.depth;
	            // 2个特殊棋子交换产生的攻击
	            this.special_bomb = other.special_bomb;
	            this.around_attack = other.around_attack;

	            //this.batch = new weType.LittleBatchIndexStruct();
	        }
	    }]);

	    return AttackInfo;
	}();

	var ChessDesc = function ChessDesc(from) {
	    _classCallCheck(this, ChessDesc);

	    this.type = 0; //ChessType
	    this.color = 0; //MovingItemType
	    this.attach = new PuzzleStaticItemAttachData(); //PuzzleStaticItemAttachData
	    if (from != null) {
	        this.type = from.type; //ChessType
	        this.color = from.type; //MovingItemType
	        this.attach.copyDataFrom(from); //PuzzleStaticItemAttachData
	    }
	};

	var ChessInterface = function () {
	    function ChessInterface() {
	        _classCallCheck(this, ChessInterface);
	    }

	    _createClass(ChessInterface, [{
	        key: 'PreInit',
	        value: function PreInit(type) {}
	    }, {
	        key: 'Release',
	        value: function Release() {}

	        // 备份还原

	    }, {
	        key: 'Backup',
	        value: function Backup() {
	            return null;
	        }
	    }, {
	        key: 'Restore',
	        value: function Restore(from) {}
	    }, {
	        key: 'SetActive',
	        value: function SetActive(active) {}
	    }, {
	        key: 'Active',
	        value: function Active() {
	            return false;
	        }
	    }, {
	        key: 'GetAttach',
	        value: function GetAttach() {
	            return null;
	        }
	    }, {
	        key: 'SetAttach',
	        value: function SetAttach(attach) {}

	        // 棋子被创建时调用

	    }, {
	        key: 'OnCreate',
	        value: function OnCreate() {}

	        // 棋子被滑动时调用

	    }, {
	        key: 'OnSlide',
	        value: function OnSlide(from, to) {}

	        // 棋子从棋盘消除/清理时调用

	    }, {
	        key: 'OnDestroy',
	        value: function OnDestroy() {}

	        // 当前棋子从from掉入到to

	    }, {
	        key: 'OnDrop',
	        value: function OnDrop(from, to) {}

	        // 从掉落点生成时被调用

	    }, {
	        key: 'OnGenerated',
	        value: function OnGenerated() {}

	        // 将棋子从棋格/棋盘移除

	    }, {
	        key: 'Remove',
	        value: function Remove() {}

	        // 棋子首次被加入到棋盘时调用

	    }, {
	        key: 'Init',
	        value: function Init(attachData) {}

	        // 获取棋子属性

	    }, {
	        key: 'Attribute',
	        value: function Attribute() {
	            return null;
	        }
	        // 当前的AttackInfo是否能够消除当前棋子

	    }, {
	        key: 'CanCrush',
	        value: function CanCrush(info) {
	            return true;
	        }
	        // 消除当前棋子

	    }, {
	        key: 'Crush',
	        value: function Crush(info) {
	            return true;
	        }
	        // 激活棋子自带的buffer

	    }, {
	        key: 'ActiveChessBuffer',
	        value: function ActiveChessBuffer(batch) {
	            var crushFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            return true;
	        }

	        // 当前棋子是否是指定类型

	    }, {
	        key: 'IsType',
	        value: function IsType(type) {
	            return true;
	        }
	        // 返回当前棋子类型

	    }, {
	        key: 'Type',
	        value: function Type() {
	            return 0;
	        }

	        // 创建棋子消除动画

	    }, {
	        key: 'CreateChangeAnim',
	        value: function CreateChangeAnim(attackInfo) {}
	        // deprecated 对当前棋子使用fish missle天赋
	        // virtual bool FishMissle(AttackInfo *) = 0;
	        // 返回当前棋子所在的棋格

	    }, {
	        key: 'GetNode',
	        value: function GetNode() {
	            return null;
	        }
	        // 设置当前棋子所在棋格

	    }, {
	        key: 'SetNode',
	        value: function SetNode(node) {}
	        // 填充chessdata

	    }, {
	        key: 'ToChessData',
	        value: function ToChessData() {
	            return null;
	        }
	    }, {
	        key: 'GetEmptyChessData',
	        value: function GetEmptyChessData() {
	            return null;
	        }
	        // 获取crush mark标记

	    }, {
	        key: 'CrushMark',
	        value: function CrushMark() {
	            return 0;
	        }
	        // 设置/清除crush mark标记

	    }, {
	        key: 'SetCrushMark',
	        value: function SetCrushMark(mark) {}
	        // 返回棋子颜色

	    }, {
	        key: 'Color',
	        value: function Color() {
	            return 0;
	        }
	    }, {
	        key: 'SetColor',
	        value: function SetColor(color) {}

	        // 获取棋子的下一形态

	    }, {
	        key: 'NextChess',
	        value: function NextChess() {
	            return null;
	        }
	        // 设置棋子的下一形态

	    }, {
	        key: 'SetNextChess',
	        value: function SetNextChess(chess) {}
	        // 如果棋子被攻击后有下一个形态, 这里就返回下一个形态的类型, 否则STIT_NONE

	    }, {
	        key: 'NextType',
	        value: function NextType() {
	            return 0;
	        }
	    }]);

	    return ChessInterface;
	}();

	module.exports = {
	    "PuzzleStaticItemAttachData": PuzzleStaticItemAttachData,

	    "ChessDesc": ChessDesc,

	    "AttackInfo": AttackInfo,

	    "ChessInterface": ChessInterface

	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/10/26.
	 */

	var weType = __webpack_require__(20);
	var we4p = __webpack_require__(13);
	var Mgr = Mgr || __webpack_require__(14);

	// pre-defined listener priority
	var EventPri = {
	    kEventPriDropPoint: 0,
	    kEventPriPuzzleItemGuide: 1,
	    kEventPriPuzzleHelper: 2,
	    kEventPriTickBomb: 0x100,
	    kEventPriPetTalent: 0x101,
	    kEventPriDigger: 0x102,
	    kEventPriMushroom: 0x103,
	    kEventPriSunEnergyWell: 0x104,
	    kEventPriSunEnergyWellBegin: 0x105,
	    kEventPriStuckMonster: 0x106,
	    kEvent4GridBossPlaceholder: 0x107,
	    kEvent4GridBoss: 0x108,
	    kEventPriIceBear: 0x109,
	    kEventPriStarPot: 0x10a,
	    kEventPriCandyPot: 0x10b,
	    kEventPriAnimal: 0x10c,
	    kEventPriMonster: 0x10d,
	    kEventPriAniGoHome: 0x10e,
	    kEventPriNest: 0x10f,
	    kEventMaoMaoChong: 0x110,
	    kEventAllLockerDone: 0x111, // 所有上锁棋子逻辑处理结束后的事件
	    kEventLocker: 0x112,
	    kEventPriSokoban: 0x113,
	    kEventPaverGlobalEnd: 0x114,
	    kEventPaver: 0x115,
	    kEventPaverRoad: 0x116,
	    kEventPaverGlobalBegin: 0x117,
	    kEventPriMaoqiuSplit: 0x118,
	    kEventPriMaoqiuJump: 0x119,
	    kEventPriChameleon: 0x11a,
	    kEventPriBlackhole: 0x11b,
	    kEventPriConveyer: 0x11c,
	    kEventPriBlueberry: 0x11d,
	    kEventPriGlobalBlueberry: 0x11e,
	    kEventPriSpecialChess: 0x11f,
	    kEventPriCombination: 0x120,
	    kEventPriRobot: 0x121,
	    kEventPriAlphaGoPlayer: 0x122,
	    kEventPriUserPlayer: 0x123,
	    kEventPriPlayerVsAlphaGo: 0x124,
	    kEventPriBoss: 0x125,
	    kEventPriFoamMachine: 0x126,
	    // 自定义优先级最大值
	    kEventPriMax: 0x4000
	};

	// pre-defined listener key
	var EventKey = {
	    kEventKeyMushroom: 1,
	    kEventKeyFoamMachine: 2,
	    kEventKeyIceBear: 3,
	    kEventKeyRedPacket: 4,
	    kEventKeyMaoqiuJump: 5,
	    kEventKeyMaoqiuSplit: 6,
	    kEventKeyAllLockerDone: 7,
	    kEventKeyDigger: 8,
	    kEventkeySunEnergyWellBegin: 9,
	    kEventKeyPaverGlobalEnd: 10,
	    kEventKeyPaverGlobalBegin: 11,
	    kEventKeyScore: 12,
	    kEventKeyAlphaGoPlayer: 13,
	    kEventKeyUserPlayer: 14,
	    kEventKeyPlayerVsAlphaGo: 15,
	    kEventKeyTickBomb: 16,
	    kEventKeyPuzzleHelper: 17,
	    kEventKeyChameleon: 18,
	    kEventKeyConveyer: 19
	};

	var PuzzleEvent = function PuzzleEvent() {
	    _classCallCheck(this, PuzzleEvent);

	    this.event_id = 0;
	};

	PuzzleEvent.kEventSlide = 0x01;
	PuzzleEvent.kEventGameStart = 0x02;
	PuzzleEvent.kEventGameRelease = 0x04;
	PuzzleEvent.kEventUseItem = 0x08;
	PuzzleEvent.kEventBalanceState = 0x10;
	PuzzleEvent.kEventCrushDropState = 0x20;
	PuzzleEvent.kEventBackup = 0x40;
	PuzzleEvent.kEventRollback = 0x80;
	PuzzleEvent.kEventDiggerMove = 0x100;
	// PuzzleEvent.kEventCrushChess = 0x200;
	PuzzleEvent.kEventCrushNode = 0x400;
	PuzzleEvent.kEventPetTalent = 0x800;
	PuzzleEvent.kEventAddSpecialChess = 0x1000;
	PuzzleEvent.kEventSweepChess = 0x2000;
	PuzzleEvent.kEventRoundEnd = 0x4000;
	PuzzleEvent.kEventReArrange = 0x8000;
	PuzzleEvent.kEventLastpang = 0x10000;
	PuzzleEvent.kEventRespawn = 0x20000;

	var ComparePriority = function ComparePriority(w1, w2) {
	    return w1.priority > w2.priority;
	};

	var DiggerMoveEvent = function (_PuzzleEvent) {
	    _inherits(DiggerMoveEvent, _PuzzleEvent);

	    function DiggerMoveEvent() {
	        _classCallCheck(this, DiggerMoveEvent);

	        var _this = _possibleConstructorReturn(this, (DiggerMoveEvent.__proto__ || Object.getPrototypeOf(DiggerMoveEvent)).call(this));

	        _this.event_id = PuzzleEvent.kEventDiggerMove;
	        // 0, move start, 1 move end
	        _this.move_state = 0;
	        return _this;
	    }

	    return DiggerMoveEvent;
	}(PuzzleEvent);

	var SlideEvent = function (_PuzzleEvent2) {
	    _inherits(SlideEvent, _PuzzleEvent2);

	    function SlideEvent() {
	        _classCallCheck(this, SlideEvent);

	        var _this2 = _possibleConstructorReturn(this, (SlideEvent.__proto__ || Object.getPrototypeOf(SlideEvent)).call(this));

	        _this2.event_id = PuzzleEvent.kEventSlide;
	        _this2.from = new weType.GridPosition();
	        _this2.to = new weType.GridPosition();
	        return _this2;
	    }

	    return SlideEvent;
	}(PuzzleEvent);

	var SweepChessEvent = function (_PuzzleEvent3) {
	    _inherits(SweepChessEvent, _PuzzleEvent3);

	    function SweepChessEvent() {
	        _classCallCheck(this, SweepChessEvent);

	        var _this3 = _possibleConstructorReturn(this, (SweepChessEvent.__proto__ || Object.getPrototypeOf(SweepChessEvent)).call(this));

	        _this3.event_id = PuzzleEvent.kEventSweepChess;
	        _this3.chess = null;
	        return _this3;
	    }

	    return SweepChessEvent;
	}(PuzzleEvent);

	var AddSpecialChessEvent = function (_PuzzleEvent4) {
	    _inherits(AddSpecialChessEvent, _PuzzleEvent4);

	    function AddSpecialChessEvent() {
	        _classCallCheck(this, AddSpecialChessEvent);

	        var _this4 = _possibleConstructorReturn(this, (AddSpecialChessEvent.__proto__ || Object.getPrototypeOf(AddSpecialChessEvent)).call(this));

	        _this4.event_id = PuzzleEvent.kEventAddSpecialChess;
	        _this4.pos = new weType.GridPosition();
	        return _this4;
	    }

	    return AddSpecialChessEvent;
	}(PuzzleEvent);

	var CrushNodeEvent = function (_PuzzleEvent5) {
	    _inherits(CrushNodeEvent, _PuzzleEvent5);

	    function CrushNodeEvent() {
	        _classCallCheck(this, CrushNodeEvent);

	        // 攻击源
	        var _this5 = _possibleConstructorReturn(this, (CrushNodeEvent.__proto__ || Object.getPrototypeOf(CrushNodeEvent)).call(this));

	        _this5.src = new weType.GridPosition();
	        // 被攻击的node
	        _this5.nodes = [];
	        _this5.event_id = PuzzleEvent.kEventCrushNode;
	        // 攻击类型
	        _this5.attack_type = we4p.AttackType.Attack_Normal;
	        _this5.ani_batch_id = -1;
	        _this5.around_attack = false;
	        return _this5;
	    }

	    return CrushNodeEvent;
	}(PuzzleEvent);

	var UseItemEvent = function (_PuzzleEvent6) {
	    _inherits(UseItemEvent, _PuzzleEvent6);

	    function UseItemEvent() {
	        _classCallCheck(this, UseItemEvent);

	        var _this6 = _possibleConstructorReturn(this, (UseItemEvent.__proto__ || Object.getPrototypeOf(UseItemEvent)).call(this));

	        _this6.event_id = PuzzleEvent.kEventUseItem;
	        _this6.itemid = 0;
	        return _this6;
	    }

	    return UseItemEvent;
	}(PuzzleEvent);

	var GameEndEvent = function (_PuzzleEvent7) {
	    _inherits(GameEndEvent, _PuzzleEvent7);

	    function GameEndEvent() {
	        _classCallCheck(this, GameEndEvent);

	        var _this7 = _possibleConstructorReturn(this, (GameEndEvent.__proto__ || Object.getPrototypeOf(GameEndEvent)).call(this));

	        _this7.game_state_ = 0;
	        return _this7;
	    }

	    return GameEndEvent;
	}(PuzzleEvent);

	var RespawnEvent = function (_PuzzleEvent8) {
	    _inherits(RespawnEvent, _PuzzleEvent8);

	    function RespawnEvent() {
	        _classCallCheck(this, RespawnEvent);

	        var _this8 = _possibleConstructorReturn(this, (RespawnEvent.__proto__ || Object.getPrototypeOf(RespawnEvent)).call(this));

	        _this8.event_id = PuzzleEvent.kEventRespawn;
	        _this8.respawn_type_ = PuzzleEvent.kRespawnStart;
	        return _this8;
	    }

	    return RespawnEvent;
	}(PuzzleEvent);

	RespawnEvent.kRespawnStart = 1;
	RespawnEvent.kRespawnEnd = 2;
	RespawnEvent.kRespawnCancel = 3;

	var BuyStepEvent = function (_PuzzleEvent9) {
	    _inherits(BuyStepEvent, _PuzzleEvent9);

	    function BuyStepEvent() {
	        _classCallCheck(this, BuyStepEvent);

	        var _this9 = _possibleConstructorReturn(this, (BuyStepEvent.__proto__ || Object.getPrototypeOf(BuyStepEvent)).call(this));

	        _this9.success_ = 0;
	        return _this9;
	    }

	    return BuyStepEvent;
	}(PuzzleEvent);

	//=============================================================================================

	var EventQueue = function () {
	    function EventQueue() {
	        _classCallCheck(this, EventQueue);

	        this.in_forward_ = 0;
	        this.queue_ = [];
	    }

	    _createClass(EventQueue, [{
	        key: "AddWrapper",
	        value: function AddWrapper(w) {
	            this.queue_.push(w);
	            this.queue_.sort(ComparePriority);
	        }
	    }, {
	        key: "UnrefWrapper",
	        value: function UnrefWrapper(w) {
	            var index = this.queue_.indexOf(w);
	            if (index >= 0) {
	                this.queue_.splice(index, 1);
	            }
	        }
	    }, {
	        key: "RemoveWrapper",
	        value: function RemoveWrapper(w) {
	            w.is_deleated = true;
	            if (this.in_forward_ == 0) {
	                this.UnrefWrapper(w);
	            }
	        }
	    }, {
	        key: "ForwardEvent",
	        value: function ForwardEvent(e) {

	            this.in_forward_++;

	            for (var i = 0, wrapper; wrapper = this.queue_[i]; i++) {

	                if (!wrapper || wrapper.is_deleated || !wrapper.listener) {
	                    continue;
	                }

	                // 目标不接收当前事件
	                if (!(wrapper.listener.events() & e.event_id)) {
	                    continue;
	                }

	                // GameStart事件无视active状态
	                if (e.event_id == PuzzleEvent.kEventGameStart) {
	                    wrapper.listener.OnEvent(e);
	                } else {
	                    var act = wrapper.listener.GetActiver();
	                    // 如果没有Activer, 默认一直接收event
	                    // 如果有, 则只有在Active状态才接收
	                    if (!act || act && act.Active()) {
	                        wrapper.listener.OnEvent(e);
	                    }
	                }

	                if (e.event_id == PuzzleEvent.kEventBalanceState) {
	                    // 如果破坏了平衡态, 则直接跳出
	                    if (Mgr.curBoard.IsBalanceBreak()) {
	                        break;
	                    }
	                }
	            }

	            this.in_forward_--;
	            if (this.in_forward_ == 0) {
	                for (var _i = 0, _wrapper; _wrapper = this.queue_[_i]; _i++) {
	                    if (_wrapper.is_deleated) {
	                        this.UnrefWrapper(_wrapper);
	                    }
	                }
	            }
	        }
	    }]);

	    return EventQueue;
	}();

	var EventListener = function () {
	    function EventListener() {
	        var key_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
	        var em_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	        var events_ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ~0;

	        _classCallCheck(this, EventListener);

	        this.key_ = key_;
	        this.em_ = em_;
	        this.events_ = events_;
	        this.RemoveFromEventQueue();
	    }

	    _createClass(EventListener, [{
	        key: "RemoveFromEventQueue",
	        value: function RemoveFromEventQueue() {
	            if (this.em_) {
	                this.em_.RemoveListener(this);
	            }
	        }
	    }, {
	        key: "OnEvent",
	        value: function OnEvent(e) {}
	    }, {
	        key: "RequestEvent",
	        value: function RequestEvent(events) {
	            this.events_ = events;
	        }
	    }, {
	        key: "events",
	        value: function events() {
	            return this.events_;
	        }
	    }, {
	        key: "GetActiver",
	        value: function GetActiver() {
	            return null;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {}
	    }]);

	    return EventListener;
	}();

	var EventListenerWrapper = function EventListenerWrapper() {
	    _classCallCheck(this, EventListenerWrapper);

	    this.listener = null;
	    this.priority = 0;
	    this.key = 0;
	    this.is_deleated = false;
	};

	var EventManager_ = function () {
	    function EventManager_() {
	        _classCallCheck(this, EventManager_);

	        this.queue_ = [];
	        this.listener_map_ = {};
	        for (var i = 0; i < EventManager_.kMaxQueueNum; i++) {
	            this.queue_[i] = new EventQueue();
	        }
	        this.next_key_ = EventManager_.kEventMaxKey;
	    }

	    _createClass(EventManager_, [{
	        key: "AddEventListener",
	        value: function AddEventListener() {
	            var q = void 0,
	                l = void 0,
	                priority = void 0,
	                key = 0;

	            if (arguments.length > 3) {
	                q = arguments.length <= 0 ? undefined : arguments[0];
	                l = arguments.length <= 1 ? undefined : arguments[1];
	                priority = arguments.length <= 2 ? undefined : arguments[2];
	                key = (arguments.length <= 3 ? undefined : arguments[3]) || 0;
	            } else {
	                q = this.queue_[0];
	                l = arguments.length <= 0 ? undefined : arguments[0];
	                priority = arguments.length <= 1 ? undefined : arguments[1];
	                key = (arguments.length <= 2 ? undefined : arguments[2]) || 0;
	            }

	            // key 已经存在
	            if (key != 0 && this.FindListener(key)) {
	                return false;
	            }

	            if (key >= EventManager_.kEventMaxKey || key < 0) {
	                return false;
	            }

	            // l 已经被注册过了?
	            if (l.key_ != -1) {
	                return false;
	            }

	            l.em_ = this;

	            // add to queue
	            var wrapper = new EventListenerWrapper();
	            wrapper.listener = l;
	            wrapper.priority = priority;
	            wrapper.key = key == 0 ? this.GenerateNewKey() : key;
	            l.key_ = wrapper.key;
	            q.AddWrapper(wrapper);

	            // add to map
	            this.listener_map_[wrapper.key] = wrapper;
	            return true;
	        }
	    }, {
	        key: "RemoveListener",
	        value: function RemoveListener(key) {

	            if (typeof key == 'number') {
	                var wrapper = this.listener_map_[key];
	                if (wrapper) {
	                    var q = this.queue_[0];
	                    q.RemoveWrapper(wrapper);

	                    var l = wrapper.listener;
	                    l.key_ = -1;
	                    l.Release();

	                    delete this.listener_map_[key];
	                }
	            } else {
	                var _l = key;
	                var ll = this.FindListener(_l.key_);
	                if (ll == _l) {
	                    this.RemoveListener(_l.key_);
	                }
	            }
	        }
	    }, {
	        key: "FindListener",
	        value: function FindListener(key) {
	            return this.listener_map_[key] && this.listener_map_[key]['listener'];
	        }
	    }, {
	        key: "Forward",
	        value: function Forward(e) {
	            return this.queue_[0].ForwardEvent(e);
	        }
	    }, {
	        key: "GenerateNewKey",
	        value: function GenerateNewKey() {
	            return ++this.next_key_;
	        }
	    }]);

	    return EventManager_;
	}();

	EventManager_.kEventMaxKey = 10000;
	EventManager_.kMaxQueueNum = 1;

	var BoardEventListener = function (_EventListener) {
	    _inherits(BoardEventListener, _EventListener);

	    function BoardEventListener() {
	        _classCallCheck(this, BoardEventListener);

	        return _possibleConstructorReturn(this, (BoardEventListener.__proto__ || Object.getPrototypeOf(BoardEventListener)).call(this));
	    }

	    _createClass(BoardEventListener, [{
	        key: "OnEvent",
	        value: function OnEvent() {}
	    }]);

	    return BoardEventListener;
	}(EventListener);

	module.exports = {
	    EventPri: EventPri,
	    EventKey: EventKey,
	    PuzzleEvent: PuzzleEvent,
	    DiggerMoveEvent: DiggerMoveEvent,
	    SlideEvent: SlideEvent,
	    SweepChessEvent: SweepChessEvent,
	    AddSpecialChessEvent: AddSpecialChessEvent,
	    CrushNodeEvent: CrushNodeEvent,
	    UseItemEvent: UseItemEvent,
	    GameEndEvent: GameEndEvent,
	    RespawnEvent: RespawnEvent,
	    BuyStepEvent: BuyStepEvent,
	    EventQueue: EventQueue,
	    EventListener: EventListener,
	    EventListenerWrapper: EventListenerWrapper,
	    EventManager_: EventManager_,
	    BoardEventListener: BoardEventListener
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/10/28.
	 */

	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	var config_p = config_p || __webpack_require__(12);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);
	var Mgr = Mgr || __webpack_require__(14);
	var ChessInterface = ChessInterface || __webpack_require__(31);
	var moving_item = moving_item || __webpack_require__(34);
	var puzzle_event = puzzle_event || __webpack_require__(32);
	var NodeAdapter = NodeAdapter || __webpack_require__(35);
	var module_wormhole = module_wormhole || __webpack_require__(36);
	var module_icebear = module_icebear || __webpack_require__(39);

	var PuzzleChessNode = function () {
	    function PuzzleChessNode() {
	        _classCallCheck(this, PuzzleChessNode);

	        // Warning:
	        // 增加成员请修改BackupTo and RollbackFrom
	        this.chesses_ = []; //棋子列表

	        this.search_flag_ = 0;
	        this.m_movingItemData = new moving_item.PuzzleMovingItemData(); //PuzzleMovingItemData对象
	        this.last_drop_sequence_ = 0;
	        this.is_backup_node_ = false;

	        // 该棋格的坐标
	        this.pos_ = new weType.GridPosition();
	        this.adapter_ = new NodeAdapter(); //NodeAdapter对象
	        this.chess_generator_ = null; //ChessGenerator对象
	        this.chess_bits_ = new Array(136);

	        this.available_ = true;

	        this._fillMode = 0;

	        this.Init();
	    }

	    _createClass(PuzzleChessNode, [{
	        key: "copyFrom",
	        value: function copyFrom(from) {
	            this.m_movingItemData = from.m_movingItemData;
	            this.last_drop_sequence_ = from.last_drop_sequence_;
	            this.pos_ = new weType.GridPosition(from.pos_);
	            this.search_flag_ = from.search_flag_;
	            this.CopyChessTypeBit(from.chess_bits_);
	            // clear self
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < len; i++) {
	                this.ClearChessPtr(i);
	                chess_arr[i] = null;
	            }
	            this.chesses_ = [];

	            // copy
	            var from_len = from.chesses_.length;
	            var from_chesse_arr = from.chesses_;
	            chess_arr = this.chesses_;
	            for (var i = 0; i < from_len; i++) {
	                chess_arr.push(from_chesse_arr[i]);
	            }
	        }
	    }, {
	        key: "Init",
	        value: function Init() {
	            this.last_drop_sequence_ = -1;
	            this.search_flag_ = 0;
	            this.is_backup_node_ = false;
	            this.chess_generator_ = null;
	            this.available_ = true;
	            // 保留用来放棋子
	            this.chesses_ = new Array(we4p.ChessLayer.kChessLayerNum);
	            var bit_arr = this.chess_bits_;
	            for (var i in bit_arr) {
	                bit_arr[i] = false;
	            }
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            this.m_movingItemData.ReturnObject();

	            var chess = null;
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < len; i++) {
	                chess = chess_arr[i];
	                if (chess == null) continue;
	                // 备份用的节点不能调用SetActive,会导致
	                if (!this.IsBackupNode()) {
	                    chess.SetActive(false);
	                }
	                chess.OnDestroy();
	                chess_arr[i] = null;
	            }

	            this.chesses_ = [];
	        }

	        // 清理该棋格内容

	    }, {
	        key: "Clear",
	        value: function Clear() {
	            this.m_movingItemData.ReturnObject();
	            this.RemoveAll();
	        }

	        // 判断静态层元素是否为蓝莓

	    }, {
	        key: "IsStaticBlueBerry",
	        value: function IsStaticBlueBerry() {
	            return this.HasChessType(we4p.ChessType.STIT_BLUEBERRY);
	        }
	    }, {
	        key: "GetJustDrop",
	        value: function GetJustDrop() {
	            return this.m_movingItemData.m_bJustDrop;
	        }
	    }, {
	        key: "SetJustDrop",
	        value: function SetJustDrop(bDrop) {
	            this.m_movingItemData.m_bJustDrop = bDrop;
	        }
	    }, {
	        key: "GetDropPath",
	        value: function GetDropPath() {
	            return this.m_movingItemData.m_DropPath;
	        }
	    }, {
	        key: "SetDropPath",
	        value: function SetDropPath(v) {
	            this.m_movingItemData.m_DropPath = v;
	        }
	    }, {
	        key: "ClearDropPath",
	        value: function ClearDropPath() {
	            this.m_movingItemData.m_DropPath = [];
	        }
	    }, {
	        key: "AddPathPoint",
	        value: function AddPathPoint(pos) {
	            this.m_movingItemData.m_DropPath.push(pos);
	        }
	    }, {
	        key: "GetDropNewFlag",
	        value: function GetDropNewFlag() {
	            return this.m_movingItemData.m_drop_new_flag;
	        }
	    }, {
	        key: "SetDropNewFlag",
	        value: function SetDropNewFlag(flag) {
	            this.m_movingItemData.m_drop_new_flag = flag;
	        }
	    }, {
	        key: "SetAttachStaticType",
	        value: function SetAttachStaticType(t) {
	            this.m_movingItemData.m_attachStaticType = t;
	        }
	    }, {
	        key: "GetAttachStaticType",
	        value: function GetAttachStaticType() {
	            return this.m_movingItemData.m_attachStaticType;
	        }
	    }, {
	        key: "SetGiftAttr",
	        value: function SetGiftAttr(giftattr) {
	            this.m_movingItemData.m_GiftAttr = giftattr;
	        }
	    }, {
	        key: "GetGiftAttr",
	        value: function GetGiftAttr() {
	            return this.m_movingItemData.m_GiftAttr;
	        }

	        // 判断棋格中的某点，是否为指定的moving层类型，且能与其他棋子形成消除

	    }, {
	        key: "CheckMovingItemPosJoin",
	        value: function CheckMovingItemPosJoin(itemType) {
	            if (itemType == weType.MovingItemType.MIT_RANDOM || itemType == weType.MovingItemType.MIT_NONE || itemType == weType.MovingItemType.MIT_TRANSPARENT) {
	                return false;
	            }

	            // 棋格内存在禁止棋格参与消除的属性
	            var chess = null;
	            var chess_arr = this.chesses_;
	            for (var i in chess_arr) {
	                chess = chess_arr[i];
	                if (chess == null) continue;
	                if (chess.Attribute().StopJoin) return false;
	                // if (chess && chess.Attribute()) if (chess->Attribute()
	                //->stopjoin()) return false;
	            }
	            // 判断当前棋格颜色是否于目标一致
	            return this.Color() == itemType;
	        }
	    }, {
	        key: "CopyMovigItemData",
	        value: function CopyMovigItemData(from) {
	            this.m_movingItemData.CopyOtherMovingItemData(from);
	        }

	        // 判断棋格类棋子类型

	    }, {
	        key: "IsChessGridEmpty",
	        value: function IsChessGridEmpty() {
	            return this.GetChess() == null;
	        }
	    }, {
	        key: "IsCombinationChess",
	        value: function IsCombinationChess() {
	            return this.HasOneOf(we4p.ChessType.CT_COMBINATION1) || this.HasOneOf(we4p.ChessType.CT_COMBINATION2) || this.HasOneOf(we4p.ChessType.CT_COMBINATION3);
	        }
	    }, {
	        key: "IsMovingItemClods",
	        value: function IsMovingItemClods() {
	            var chess = this.GetChess();
	            if (chess == null) return false;
	            if (chess.Type() == we4p.ChessType.CT_CLODS0 || chess.Type() == we4p.ChessType.CT_CLODS1) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: "IsNormalItem",
	        value: function IsNormalItem() {
	            return this.ChessColor() >= weType.MovingItemType.MIT_0 && this.ChessColor() <= weType.MovingItemType.MIT_5;
	        }
	    }, {
	        key: "HasShockWave",
	        value: function HasShockWave() {
	            return this.HasOneOf(we4p.ChessType.CT_SpecialHorizontalShockWave) || this.HasOneOf(we4p.ChessType.CT_SpecialVerticalShockWave);
	        }

	        // 当前棋格不能使用, 镂空?
	        // bool IsNone() { return HasChessType(STIT_NOUSE); }

	    }, {
	        key: "IsAvailable",
	        value: function IsAvailable() {
	            return this.available_;
	        }

	        /**
	         * 是否能放糖果
	         * @returns {boolean}
	         * @constructor
	         */

	    }, {
	        key: "CanGenerateCandy",
	        value: function CanGenerateCandy() {
	            if (!this.available_) return false;

	            var chess = null;
	            var chess_arr = this.chesses_;
	            for (var i in chess_arr) {
	                chess = chess_arr[i];
	                if (chess == null) continue;
	                if (!chess.Attribute().CanSetCandy) return false;
	            }
	            // 空棋格允许放
	            return true;
	        }
	    }, {
	        key: "CanBeReplace",
	        value: function CanBeReplace() {
	            if (!this.available_) return false;

	            var chess = null;
	            var chess_arr = this.chesses_;
	            for (var i in chess_arr) {
	                chess = chess_arr[i];
	                if (chess == null) continue;
	                if (!chess.Attribute().CanBeReplace) return false;
	            }
	            // 空棋格允许放
	            return true;
	        }
	    }, {
	        key: "Compatible4GridBoss",
	        value: function Compatible4GridBoss() {
	            if (!this.available_) {
	                return false;
	            }
	            var chess = null;
	            var chess_arr = this.chesses_;
	            for (var i in chess_arr) {
	                chess = chess_arr[i];
	                if (chess == null) {
	                    continue;
	                }
	                if (!chess.Attribute().Compatible4GridBoss) {
	                    return false;
	                }
	            }
	            return true;
	        }
	        // 判断该棋格棋子，是否能被开局特殊道具棋子所替换

	    }, {
	        key: "CanReplaceByStartProps",
	        value: function CanReplaceByStartProps() {
	            var c = this.GetTop();
	            if (c == null) return false;
	            return c.Attribute().CanSetStartItem;
	        }
	    }, {
	        key: "CanUseSpecial",
	        value: function CanUseSpecial() {
	            if (!this.available_) return false;
	            if (this.GetChess() == null) return false;

	            var chess = null;
	            var chess_arr = this.chesses_;
	            for (var i in chess_arr) {
	                chess = chess_arr[i];
	                if (chess == null) continue;
	                if (!chess.Attribute().UseSpecial) return false;
	            }
	            return true;
	        }
	    }, {
	        key: "CanUseSwap",
	        value: function CanUseSwap() {
	            if (!this.available_) return false;
	            if (this.GetChess() == null) return false;

	            var chess = null;
	            var chess_arr = this.chesses_;
	            for (var i in chess_arr) {
	                chess = chess_arr[i];
	                if (chess == null) continue;
	                if (!chess.Attribute().UseSwap) return false;
	            }
	            return true;
	        }
	    }, {
	        key: "CanUseLastpang",
	        value: function CanUseLastpang() {
	            if (!this.available_) return false;
	            if (this.GetChess() == null) return false;

	            var chess = null;
	            var chess_arr = this.chesses_;
	            for (var i in chess_arr) {
	                chess = chess_arr[i];
	                if (chess == null) continue;
	                if (!chess.Attribute().CanUseLastpang) return false;
	            }
	            return true;
	        }
	    }, {
	        key: "CanSetBlueberry",
	        value: function CanSetBlueberry() {
	            if (!this.available_) return false;

	            var chess = null;
	            var chess_arr = this.chesses_;
	            for (var i in chess_arr) {
	                chess = chess_arr[i];
	                if (chess == null) continue;
	                if (!chess.Attribute().CanSetBlueberry) return false;
	            }
	            // 空棋格允许放
	            return true;
	        }
	    }, {
	        key: "CanBlockBlueberry",
	        value: function CanBlockBlueberry() {
	            // 如果是镂空, 不阻挡
	            if (!this.available_) return false;
	            // 否则不能设置就会阻挡
	            return !this.CanSetBlueberry();
	        }
	    }, {
	        key: "NeedReArrange",
	        value: function NeedReArrange() {
	            var resortType = [we4p.ChessType.CT_NormalUnit, we4p.ChessType.CT_COMBINATION1, we4p.ChessType.CT_COMBINATION2, we4p.ChessType.CT_COMBINATION3, we4p.ChessType.CT_SpecialVerticalShockWave, we4p.ChessType.CT_SpecialHorizontalShockWave, we4p.ChessType.CT_SpecialHurricane, we4p.ChessType.CT_SpecialGas];
	            // 无棋子不参与
	            var chess = this.GetChess();
	            if (chess == null) return false;
	            // 有棋面不参与重排
	            if (this.HasChessSurface()) return false;

	            var len = resortType.length;
	            for (var i = 0; i < len; i++) {
	                if (chess.Type() == resortType[i]) return true;
	            }
	            return false;
	        }
	    }, {
	        key: "CanGenerateNewChess",
	        value: function CanGenerateNewChess() {
	            // 没有生成器
	            if (this.chess_generator_ == null) return false;
	            // 棋子不为空
	            if (this.GetChess() != null) return false;
	            // 棋面不为空
	            if (this.HasChessSurface()) return false;
	            // TODO(andrewli):
	            // 设计上来说, 棋格不允许掉入棋子, 那也不能生成新棋子
	            return true;
	        }
	    }, {
	        key: "GenerateNewChess",
	        value: function GenerateNewChess(d, isFloat, isModel) {
	            if (this.chess_generator_ == null) return false;

	            var ret = this.chess_generator_.Generate(this, isFloat);
	            if (!ret) return false;

	            while (d >= 1) {
	                // 记录掉落路径
	                var newDropPoint = null;
	                if (isFloat) {
	                    newDropPoint = new weType.GridPosition(this.GetWorldPosition().row + d, this.GetWorldPosition().col);
	                } else {
	                    newDropPoint = new weType.GridPosition(this.GetWorldPosition().row - d, this.GetWorldPosition().col);
	                }
	                d--;
	                this.AddPathPoint(Mgr.curBoard.World2Local(newDropPoint));
	            }
	            this.SetJustDrop(true);
	            // 路径起始点
	            this.AddPathPoint(Mgr.curBoard.World2Local(this.GetWorldPosition()));

	            this.SetDropNewFlag(true);
	            // LOG_DEBUG("GenearateChess (%d,%d) color %d\n", GetWorldPosition().row,
	            //           GetWorldPosition().col, this->Color());
	            return true;
	        }

	        // 棋子层上是否有覆盖棋子棋子

	    }, {
	        key: "HasChessSurface",
	        value: function HasChessSurface() {
	            for (var i = we4p.ChessLayer.kChessLayer2; i < we4p.ChessLayer.kChessLayerNum; i++) {
	                if (this.GetLayer(i) != null) return true;
	            }
	            return false;
	        }

	        // 获取该棋格的坐标

	    }, {
	        key: "GetPosition",
	        value: function GetPosition() {
	            return Mgr.curBoard.World2Local(this.pos_);;
	        }
	    }, {
	        key: "GetPositionInBoard",
	        value: function GetPositionInBoard(boardView) {
	            return boardView.Position(this.pos_);
	        }
	    }, {
	        key: "GetWorldPosition",
	        value: function GetWorldPosition() {
	            return this.pos_;
	        }

	        // 设置该棋格的坐标

	    }, {
	        key: "SetPosition",
	        value: function SetPosition(pos) {
	            this.pos_ = pos;
	        }

	        // 对当前棋格执行一次消除操作

	    }, {
	        key: "Crush",
	        value: function Crush(info) {
	            return this.CommonCrush(info);
	        }
	    }, {
	        key: "UserDisappearItem",
	        value: function UserDisappearItem(info, useType) {
	            return this.CommonCrush(info);
	        }
	        // 当前棋格消除是否对周边产生影响
	        // TODO(andrewli):
	        // 当前因为动态层棋子跟静态层是分开处理的
	        // 这里需要提前知道动态层棋子是否能被消除

	    }, {
	        key: "CanCrushAround",
	        value: function CanCrushAround(mark) {
	            var chess = this.GetTop();
	            if (chess == null) return false;
	            var prop = chess.Attribute();
	            // 没有属性数据?
	            if (prop == null) {
	                //WE4_ASSERT(0);
	                return false;
	            }
	            return prop.CanCrushAround;
	        }
	        // 当前棋格内的棋子是否能掉落

	    }, {
	        key: "CanDrop",
	        value: function CanDrop(way) {
	            if (!this.available_) return false;

	            var need = false;
	            var c = null;
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < len; i++) {
	                c = chess_arr[i];
	                if (c == null) continue;
	                if (c.Attribute().drop_rule != we4p.DropRule.kDropNone) {
	                    need = true;
	                    continue;
	                }
	                // 棋格内存在阻止整个棋格掉落的棋子或功能
	                if (c.Attribute().StopDrop) {
	                    return false;
	                }
	            }

	            // 如果是向下掉落且有栅栏, 则禁止
	            if (way == weType.DropWay.DropWay_Fall && this.HasChessType(we4p.ChessType.STIT_FENCE_BOTTOM)) {
	                return false;
	            }

	            // 收集物到达收集点,不能再掉落
	            if (this.HasCollectChess() && (this.HasOneOf(we4p.ChessType.STIT_COLLECTCANDY_POINT) || this.HasOneOf(we4p.ChessType.STIT_COLLECTBALLOON_POINT) || this.HasOneOf(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA) || this.HasOneOf(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA_BOTH) || this.HasOneOf(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA_LEFT) || this.HasOneOf(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA_RIGHT))) {
	                return false;
	            }

	            return need;
	        }
	        // 当前棋格是否允许上面的棋子掉进来
	        // 掉落目前来说, 还是针对棋子层来说的
	        // 棋面和棋底目前都不存在"掉落"的概念

	    }, {
	        key: "CanDropIn",
	        value: function CanDropIn(way, sodaDropCheck) {
	            if (!this.available_) return false;
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            if (len < we4p.ChessLayer.kChessLayerNum) return false;
	            // 棋子层不为空
	            if (chess_arr[weType.kChessLayerChess]) return false;
	            // 默认允许掉入
	            // 寻找有没有不让掉入的棋子或者功能
	            for (var i = 0; i < len; i++) {
	                if (!chess_arr[i] || i == weType.kChessLayerChess) continue;
	                // 棋格内存在阻止整个棋格掉落的棋子或功能
	                if (chess_arr[i].Attribute().StopDropIn) return false;
	            }
	            if (this.HasChessType(we4p.ChessType.STIT_FENCE_BOTTOM) && way == weType.DropWay.DropWay_Float) {
	                if (sodaDropCheck) return this.HasChessType(we4p.ChessType.STIT_DROP_POINT_IN_SODA);else return false;
	            }
	            return true;
	        }
	        // 当前棋格是否能掉落到指定目标

	    }, {
	        key: "CanDropTo",
	        value: function CanDropTo(dest) {
	            var to = null;
	            if (dest instanceof weType.GridPosition) {
	                to = Mgr.boardViewer.GetNode(dest.row, dest.col);
	            } else {
	                to = dest;
	            }
	            if (!to) return false;
	            ////判断虫洞
	            if (module_wormhole.WormholeModule.GetExitPos(this).isEqual(to.GetWorldPosition())) {
	                return this.CanDropAcrossWormhole(to);
	            }
	            // 垂直掉落
	            if (this.GetPosition().col == to.GetPosition().col) {
	                return this.CanVerticalDropTo(to);
	            }
	            // 侧掉落
	            return this.CanSideDropTo(to);
	        }

	        // 执行掉落

	    }, {
	        key: "DropTo",
	        value: function DropTo(dest) {
	            var to = null;
	            if (dest instanceof weType.GridPosition) {
	                to = Mgr.boardViewer.GetNode(dest.row, dest.col);
	            } else {
	                to = dest;
	            }

	            if (!to) return false;
	            if (!this.CanDropTo(to)) return false;

	            var chess = this.GetChess();

	            // 虽然是swap, 但其实目标node的ChessLayer应该是NULL
	            // 否则不能掉落
	            this.SwapLayer(to, weType.kChessLayerChess);

	            // 设置掉落路径
	            if (to.GetDropPath().length == 0) {
	                //路径起始点
	                var p = this.GetPosition();
	                to.AddPathPoint(new weType.GridPosition(p.row, p.col));
	            }
	            to.AddPathPoint(new weType.GridPosition(to.GetPosition()));
	            // 这里设置为justdrop的目的是为了将目标棋格设置为justdrop
	            // 因为数据会copy过去
	            to.SetJustDrop(true);
	            // reset当前动态层数据
	            this.m_movingItemData.ReturnObject();

	            // 静态层的毛球也掉落
	            if (this.HasChessType(we4p.ChessType.STIT_MAOQIU1)) {
	                this.MoveChessTo(we4p.ChessType.STIT_MAOQIU1, to);
	                to.GetMovingItemP().m_attachStaticType = we4p.ChessType.STIT_MAOQIU1;
	            }
	            if (this.HasChessType(we4p.ChessType.STIT_MAOQIU2)) {
	                this.MoveChessTo(we4p.ChessType.STIT_MAOQIU2, to);
	                to.GetMovingItemP().m_attachStaticType = we4p.ChessType.STIT_MAOQIU2;
	            }

	            if (chess) {
	                chess.OnDrop(this.GetPosition(), to.GetPosition());
	            }

	            return true;
	        }

	        // 判断棋格是否能滑动

	    }, {
	        key: "CanSlide",
	        value: function CanSlide() {
	            if (!this.available_) return false;
	            if (this.GetChess() == null) return false;

	            var chess = null;
	            var chess_arr = this.chesses_;
	            for (var i in chess_arr) {
	                chess = chess_arr[i];
	                if (chess == null) continue;
	                if (!chess.Attribute().CanSlide) return false;
	            }
	            return true;
	        }

	        /**
	         * // 滑动交换2个棋子
	         * @param dest  -- GridPosition对象或者ChessNode对象
	         * @constructor
	         */

	    }, {
	        key: "SlideSwap",
	        value: function SlideSwap(dest) {
	            var dest_node = null;
	            if (dest instanceof weType.GridPosition) {
	                dest_node = Mgr.boardViewer.GetNode(dest);
	            } else {
	                dest_node = dest;
	            }
	            if (!dest_node) return;
	            var tmp = new PuzzleChessNode();

	            // do slide
	            this.SlideTo(tmp);
	            dest_node.SlideTo(this);
	            tmp.SlideTo(dest_node);
	        }

	        // 当前棋格是否能参与3消
	        // 包含求合体...

	    }, {
	        key: "CanJoin3Crush",
	        value: function CanJoin3Crush() {
	            var chess = null;

	            // 棋子层为空一定不能参与消除
	            if (this.chesses_[1] == null) return false;

	            var need = false;
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = we4p.ChessLayer.kChessLayerNum - 1; i >= 0; i--) {
	                chess = chess_arr[i];
	                if (chess == null) continue;

	                // 存在阻止棋格参与消除的属性
	                if (chess.Attribute().StopJoin) return false;

	                // top棋子无色
	                if (chess.Color() == weType.MovingItemType.MIT_NONE && !need) {
	                    return false;
	                }

	                // 透明棋子忽略, 要看下一层
	                if (chess.Color() == weType.MovingItemType.MIT_TRANSPARENT) continue;

	                need = true;
	            }

	            return need;
	        }

	        // 备份棋格和棋子数据

	    }, {
	        key: "BackupTo",
	        value: function BackupTo(dest, dest_ref) {
	            dest.RemoveAll();
	            dest.m_movingItemData = this.m_movingItemData;
	            dest.last_drop_sequence_ = this.last_drop_sequence_;
	            dest.pos_ = new weType.GridPosition(this.pos_);
	            dest.chess_generator_ = this.chess_generator_;
	            dest.CopyChessTypeBit(this.chess_bits_);

	            // backup features
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < len; i++) {
	                var c = chess_arr[i];
	                if (c == null) continue;
	                var backup = c.Backup();
	                dest.AddChessPtr(backup);
	            }

	            if (dest_ref) {
	                this.ShallowCopyTo(dest_ref);
	            }
	        }
	        // 从备份数据还原

	    }, {
	        key: "RollbackFrom",
	        value: function RollbackFrom(from, from_ref) {
	            this.RemoveAll();

	            // rollback node data
	            this.m_movingItemData = from.m_movingItemData;
	            this.last_drop_sequence_ = from.last_drop_sequence_;
	            this.pos_ = new weType.GridPosition(from.pos_);
	            this.chess_generator_ = from.chess_generator_;
	            this.CopyChessTypeBit(from.chess_bits_);

	            // rollback chess
	            // 从ref获得原来的chess pointer
	            if (from_ref) {
	                this.ShallowCopyFrom(from_ref);
	            }

	            // 从from获得原来的棋子数据
	            //WE4_ASSERT(chesses_.size() == from->chesses_.size());

	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < len; i++) {
	                var c = chess_arr[i];
	                if (c == null) continue;
	                c.SetNode(this);
	                c.Restore(from.chesses_[i]);
	                // 不需要主动设置为active
	                // BasicChess内会将其还原到备份前的状态
	                // c->SetActive(true);
	            }

	            // release backup data
	            from.RemoveAll();
	            if (from_ref) {
	                from_ref.RemoveAll();
	            }
	        }
	    }, {
	        key: "AllocChessType",
	        value: function AllocChessType(type) {
	            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	            var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : weType.MovingItemType.MIT_NONE;
	            var from_model = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	            if (type == we4p.ChessType.CT_None || type == we4p.ChessType.STIT_NONE) return null;

	            // clear all chess
	            if (type == we4p.ChessType.STIT_NOUSE) {
	                var len = this.chesses_.length;
	                for (var i = 0; i < len; i++) {
	                    this.ClearChessPtr(i);
	                }
	                this.chesses_ = new Array(we4p.ChessLayer.kChessLayerNum);
	            }

	            // printf("AddChessType %d, %d at pos %d, %d\n",
	            //  (int)type, (int)color, (int)m_gridPosition.row, (int)m_gridPosition.col);
	            switch (type) {
	                case we4p.ChessType.CT_NormalUnit:
	                case we4p.ChessType.CT_SpecialHorizontalShockWave:
	                case we4p.ChessType.CT_SpecialVerticalShockWave:
	                case we4p.ChessType.CT_SpecialHurricane:
	                    //WE4_ASSERT((color >= MIT_0 && color <= MIT_5) || color == MIT_RANDOM);
	                    break;

	                case we4p.ChessType.CT_SpecialGas:
	                    color = weType.MovingItemType.MIT_NONE;
	                    break;

	                default:
	                    break;
	            }

	            //// 禁止重复添加blueberry
	            if (type == we4p.ChessType.STIT_BLUEBERRY && this.HasChessType(we4p.ChessType.STIT_BLUEBERRY) || type == we4p.ChessType.STIT_BAD_BLUEBERRY && this.HasChessType(we4p.ChessType.STIT_BAD_BLUEBERRY)) {
	                return null;
	            }

	            var chess = Mgr.moduleManager.NewChess(type);
	            if (!chess) {
	                //WE4_ASSERT(0);
	                return null;
	            }

	            chess.SetColor(color);
	            chess.SetAttach(data);
	            return chess;
	        }

	        // 在棋格中加入一个棋子

	    }, {
	        key: "AddChessType",
	        value: function AddChessType(type) {
	            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	            var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : weType.MovingItemType.MIT_NONE;
	            var from_model = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	            //console.log("type: " + type);
	            var chess = this.AllocChessType(type, data, color, from_model);
	            //console.log(chess);
	            if (chess) {
	                this.InitChess(chess);
	            }
	        }

	        /**
	         * 使用配置表的棋子元素数据
	         * @param element   -- 棋子元素数据（config_p.GridElement)
	         * @param checkRandom   -- 颜色是否随机？
	         * @returns {boolean}
	         * @constructor
	         */

	    }, {
	        key: "AddChessByElement",
	        value: function AddChessByElement(element) {
	            var checkRandom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            if (!Mgr.tableManager.VaildElement(element)) return false;

	            var desc = Mgr.tableManager.ElementToChess(element);
	            if (desc.type == we4p.ChessType.STIT_NONE) return false;

	            if (checkRandom && desc.color == weType.MovingItemType.MIT_RANDOM) desc.color = puzzle_rand.PuzzleRand("cn(788)") % Mgr.stageManager.MaxColorCount();

	            this.AddChessType(desc.type, desc.attach, desc.color, true);
	            return true;
	        }

	        // new api to add chess

	    }, {
	        key: "AddChess",
	        value: function AddChess(type) {
	            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : weType.MovingItemType.MIT_NONE;
	            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	            if (type instanceof ChessInterface.ChessInterface) {
	                this.InitChess(type);
	            } else {
	                this.AddChessType(type, data, color);
	            }
	        }
	    }, {
	        key: "SetChessTypeBit",
	        value: function SetChessTypeBit(type) {
	            this.chess_bits_[type] = true;
	            this.available_ = !this.HasChessType(we4p.ChessType.STIT_NOUSE);
	        }
	    }, {
	        key: "ClearChessTypeBit",
	        value: function ClearChessTypeBit(type) {
	            this.chess_bits_[type] = false;
	            this.available_ = !this.HasChessType(we4p.ChessType.STIT_NOUSE);
	        }
	    }, {
	        key: "CopyChessTypeBit",
	        value: function CopyChessTypeBit(bit) {
	            var len = this.chess_bits_.length;
	            var bit_arr = this.chess_bits_;
	            for (var i = 0; i < len; i++) {
	                bit_arr[i] = bit[i];
	            }
	            this.available_ = !this.HasChessType(we4p.ChessType.STIT_NOUSE);
	        }

	        // 如果当前棋格是掉落点, 则在当前棋格生成一个新棋子

	    }, {
	        key: "DropNewChess",
	        value: function DropNewChess(type, color) {
	            //判断是否包含掉落点棋子
	            if (!HasOneOf(we4p.ChessType.STIT_DROP_POINT)) return;

	            this.AddChess(type, color);
	        }

	        // 获取当前棋格内的棋子, 默认获取棋子层

	    }, {
	        key: "GetChess",
	        value: function GetChess() {
	            var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : weType.kChessLayerChess;

	            //WE4_ASSERT(layer < kChessLayerNum);
	            //WE4_ASSERT(layer >= kChessLayer0);
	            return this.GetLayer(layer);
	        }

	        // 获取某层的棋子数据，如果没有，则返回空值（stit_none什么的）

	    }, {
	        key: "ToChessData",
	        value: function ToChessData() {
	            var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : weType.kChessLayerChess;

	            var data = null;
	            //WE4_ASSERT(layer < kChessLayerNum);
	            //WE4_ASSERT(layer >= kChessLayer0);
	            var pChess = this.GetLayer(layer);
	            if (pChess) data = pChess.ToChessData();else {
	                data = new we4p.ChessData();
	                data.type = we4p.ChessType.STIT_NONE;
	                data.color = weType.MovingItemType.MIT_NONE;
	                data.pos.row = this.pos_.row;
	                data.pos.col = this.pos_.col;
	            }
	            return data;
	        }
	    }, {
	        key: "GetEmptyChessData",
	        value: function GetEmptyChessData() {
	            var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : weType.kChessLayerChess;

	            var data = new we4p.ChessData();
	            //WE4_ASSERT(layer < kChessLayerNum);
	            //WE4_ASSERT(layer >= kChessLayer0);
	            var pChess = this.GetLayer(layer);
	            if (pChess) return pChess.GetEmptyChessData();else {
	                data.type = we4p.ChessType.STIT_NONE;
	                data.color = weType.MovingItemType.MIT_NONE;
	                data.pos.row = this.pos_.row;
	                data.pos.col = this.pos_.col;
	            }

	            return data;
	        }

	        // 获取棋格内指定类型的棋子

	    }, {
	        key: "GetChessByType",
	        value: function GetChessByType(type) {
	            return this.FindChess(type);
	        }

	        // 获取最顶层的棋子类型

	    }, {
	        key: "GetTop",
	        value: function GetTop() {
	            var chess_arr = this.chesses_;
	            for (var i = we4p.ChessLayer.kChessLayerNum - 1; i >= we4p.ChessLayer.kChessLayer0; i--) {
	                if (chess_arr[i] != null) return chess_arr[i];
	            }
	            return null;
	        }

	        // 获取指定的功能

	    }, {
	        key: "GetFeature",
	        value: function GetFeature(f) {
	            var i = this.FindFeautre(f);
	            if (i == -1) return null;
	            return this.chesses_[i];
	        }

	        // 获取layer层棋子, 不含功能

	    }, {
	        key: "GetAllChess",
	        value: function GetAllChess(c) {
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < we4p.ChessLayer.kChessLayerNum; i++) {
	                c.push(chess_arr[i]);
	            }
	        }

	        // 获取所有棋子和功能

	    }, {
	        key: "GetAll",
	        value: function GetAll(dest) {
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < len; i++) {
	                if (chess_arr[i] == null) continue;
	                dest.push(chess_arr[i]);
	            }
	        }

	        // 获取指定类型棋子的 attach data

	    }, {
	        key: "FindAttach",
	        value: function FindAttach(type) {
	            var c = this.FindChess(type);
	            if (c == null) return null;
	            return c.GetAttach();
	        }

	        // 移除棋子

	    }, {
	        key: "ClearChess",
	        value: function ClearChess() {
	            var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : weType.kChessLayerChess;

	            //WE4_ASSERT(layer < kChessLayerNum);
	            //WE4_ASSERT(layer >= kChessLayer0);
	            var chess = this.GetLayer(layer);
	            if (chess == null) return;
	            this.RemoveLayer(layer);

	            if (layer == weType.kChessLayerChess) {
	                this.m_movingItemData.ReturnObject();
	            }
	        }

	        /**
	         *move移交chess的所有权给dest
	         * @param dest -- 目标棋格
	         * @returns {boolean}
	         * @constructor
	         */

	    }, {
	        key: "MoveTo",
	        value: function MoveTo(dest) {
	            // save position
	            var p1 = dest.GetWorldPosition();
	            dest.Clear();
	            dest.copyFrom(this);
	            this.Clear();

	            // restore position
	            dest.SetPosition(p1);

	            // 改变宿主
	            var len = dest.chesses_.length;
	            var chess_arr = dest.chesses_;
	            for (var i = 0; i < len; i++) {
	                var c = chess_arr[i];
	                if (c == null) continue;
	                c.SetNode(dest);
	            }
	            return true;
	        }

	        /**
	         * 移动指定层给目标
	         * @param layer     -- 指定层id
	         * @param dest      -- 目标节点
	         * @returns {boolean}
	         * @constructor
	         */

	    }, {
	        key: "MoveLayerTo",
	        value: function MoveLayerTo(layer, dest) {
	            var c = this.GetLayer(layer);
	            if (c == null) return false;
	            if (dest.GetLayer(layer)) {
	                dest.RemoveLayer(layer);
	            }
	            this.SwapLayer(dest, layer);
	            return true;
	        }

	        /**
	         * 移动指定类型棋子给目标
	         * @param type      -- 棋子类型
	         * @param dest  -- 目标节点
	         * @returns {boolean}
	         * @constructor
	         */

	    }, {
	        key: "MoveChessTo",
	        value: function MoveChessTo(type, dest) {
	            var c = this.FindChess(type);
	            if (c == null) {
	                //WE4_ASSERT(0);
	                return false;
	            }

	            if (dest.FindChess(type)) {
	                //WE4_ASSERT(0);
	                return false;
	            }

	            var layer = c.Attribute().Layer;

	            // 移动功能
	            if (layer == we4p.ChessLayer.kChessLayerFeature) {
	                this.RemoveChess(c);
	                dest.AddChessPtr(c);
	                return true;
	            }
	            // 移动3层棋子中的1层
	            if (dest.chesses_[layer] != null) return false;
	            this.SwapLayer(dest, layer);
	            return true;
	        }

	        // 浅copy

	    }, {
	        key: "CopyTo",
	        value: function CopyTo(dest) {
	            return false;
	        }
	    }, {
	        key: "CopyLayerTo",
	        value: function CopyLayerTo(layer, dest) {
	            return false;
	        }
	    }, {
	        key: "CopyChessTo",
	        value: function CopyChessTo(type, dest) {
	            return false;
	        }

	        // 深copy

	    }, {
	        key: "DeepCopyTo",
	        value: function DeepCopyTo(dest) {
	            this.BackupTo(dest, null);
	            return true;
	        }
	    }, {
	        key: "DeepCopyLayerTo",
	        value: function DeepCopyLayerTo(layer, dest) {
	            var c = this.GetLayer(layer);
	            if (c == null) return false;
	            if (dest.GetLayer(layer)) return false;

	            dest.AddChessPtr(c.Backup());
	            return true;
	        }
	    }, {
	        key: "DeepCopyChessTo",
	        value: function DeepCopyChessTo(type, dest) {
	            // 目标棋子内已有同类型的chess
	            var c = dest.FindChess(type);
	            if (c != null) return false;
	            c = this.FindChess(type);
	            if (c == null) return false;
	            dest.AddChessPtr(c.Backup());
	            return true;
	        }

	        //// discard

	    }, {
	        key: "MarkChess",
	        value: function MarkChess(join) {
	            var chess = this.GetLayer(weType.kChessLayerChess);
	            if (chess == null) return;
	            chess.SetCrushMark(join);
	        }
	        //// discard

	    }, {
	        key: "GetMark",
	        value: function GetMark() {
	            var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : weType.kChessLayerChess;

	            var chess = this.GetLayer(layer);
	            if (chess == null) return 0;
	            return chess.CrushMark();
	        }

	        // 获取当前棋格内的棋子类型, 默认获取棋子层

	    }, {
	        key: "ChessType",
	        value: function ChessType() {
	            var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : weType.kChessLayerChess;

	            var c = this.GetChess(layer);
	            return c == null ? weType.MovingItemType.STIT_NONE : c.Type();
	        }

	        // 获取当前棋格内的棋子颜色, 默认获取棋子层

	    }, {
	        key: "ChessColor",
	        value: function ChessColor() {
	            var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : weType.kChessLayerChess;

	            var c = this.GetChess(layer);
	            return c == null ? weType.MovingItemType.MIT_NONE : c.Color();
	        }
	    }, {
	        key: "SetChessColor",
	        value: function SetChessColor(color) {
	            var layer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : weType.kChessLayerChess;

	            var c = this.GetChess(layer);
	            if (c) {
	                c.SetColor(color);
	            }
	        }
	    }, {
	        key: "Color",
	        value: function Color() {
	            var start = we4p.ChessLayer.kChessLayerNum;
	            var chess_arr = this.chesses_;
	            while (--start > 0) {
	                var c = chess_arr[start];
	                if (c == null) continue;
	                if (c.Color() == weType.MovingItemType.MIT_NONE) return weType.MovingItemType.MIT_NONE;
	                if (c.Color() == weType.MovingItemType.MIT_TRANSPARENT) continue;

	                return c.Color();
	            }
	            return weType.MovingItemType.MIT_NONE;
	        }
	    }, {
	        key: "SetActive",
	        value: function SetActive(active) {
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < len; i++) {
	                var c = chess_arr[i];
	                if (c == null) continue;
	                c.SetActive(active);
	            }
	        }
	    }, {
	        key: "SetVisible",
	        value: function SetVisible(visible) {
	            if (visible) {
	                this.SetActive(true);
	            } else {
	                this.SetActive(false);
	            }
	        }
	    }, {
	        key: "InitAllChess",
	        value: function InitAllChess() {
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < len; i++) {
	                var c = chess_arr[i];
	                if (c == null) continue;
	                var attach = c.GetAttach();
	                c.SetNode(this);
	                c.OnCreate();
	                c.Init(attach);
	            }
	        }
	    }, {
	        key: "HasChessType",
	        value: function HasChessType(type) {
	            return this.chess_bits_[type];
	        }
	    }, {
	        key: "HasOneOf",
	        value: function HasOneOf(type) {
	            return this.HasChessType(type);
	        }

	        // 针对部分棋子的判断

	    }, {
	        key: "HasSpecialChess",
	        value: function HasSpecialChess() {
	            return this.HasOneOf(we4p.ChessType.CT_SpecialVerticalShockWave) || this.HasOneOf(we4p.ChessType.CT_SpecialHorizontalShockWave) || this.HasOneOf(we4p.ChessType.CT_SpecialHurricane) || this.HasOneOf(we4p.ChessType.CT_SpecialGas);
	            /*
	                || this.HasOneOf(we4p.ChessType.Special_FourVrt) ||
	                this.HasOneOf(we4p.ChessType.Special_FourAsc) ||  this.HasOneOf(we4p.ChessType.Special_FourDsc) || this.HasOneOf(we4p.ChessType.Special_Triangle) ||
	                this.HasOneOf(we4p.ChessType.Special_IceFlower) ||  this.HasOneOf(we4p.ChessType.Special_SunFlower);*/
	        }

	        //HasCollectChess() {
	        //    var chess = this.GetChess();
	        //    if (chess == null)
	        //        return false;
	        //    return chess.Attribute().IsCollection;
	        //}

	    }, {
	        key: "HasCollectChess",
	        value: function HasCollectChess(type) {
	            var chess = this.GetChess();
	            if (chess == null) return false;
	            return chess.Attribute().IsCollection && (type ? chess.Type() == type : true);
	        }
	    }, {
	        key: "HasClods",
	        value: function HasClods() {
	            return this.HasOneOf(we4p.ChessType.CT_CLODS0) || this.HasOneOf(we4p.ChessType.CT_CLODS1);
	        }
	    }, {
	        key: "GetLayer",
	        value: function GetLayer(i) {
	            return this.chesses_[i];
	        }
	    }, {
	        key: "SetLayer",
	        value: function SetLayer(layer, chess) {
	            //WE4_ASSERT(layer >= kChessLayerBottom && layer < kChessLayerFeature);
	            if (this.chesses_[layer]) {
	                this.chesses_[layer].SetActive(false);
	                this.ClearChessPtr(layer);
	            }
	            this.SetChessPtr(layer, chess);
	        }

	        // 删除棋子
	        // 不影响统计, 不会调用棋子的OnDestroy

	    }, {
	        key: "RemoveChess",
	        value: function RemoveChess(chessOrType) {
	            var isChess = chessOrType instanceof ChessInterface.ChessInterface;
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < we4p.ChessLayer.kChessLayerNum; i++) {
	                if (chess_arr[i] == null) continue;
	                if (isChess) {
	                    if (chess_arr[i] == chessOrType) {
	                        this.ClearChessPtr(i);
	                    }
	                } else {
	                    if (chess_arr[i].Type() == chessOrType) {
	                        this.ClearChessPtr(i);
	                    }
	                }
	            }
	            for (var i = we4p.ChessLayer.kChessLayerNum; i < len; i++) {
	                if (chess_arr[i] == null) continue;
	                if (isChess) {
	                    if (chess_arr[i] == chessOrType) {
	                        this.ClearChessPtr(i);
	                        chess_arr.splice(i, 1);
	                    }
	                } else {
	                    if (chess_arr[i].Type() == chessOrType) {
	                        this.ClearChessPtr(i);
	                        chess_arr.splice(i, 1);
	                    }
	                }
	            }
	        }

	        // 标记并立即清理指定层的棋子
	        // 影响统计, 会调用棋子的OnDestroy

	    }, {
	        key: "MarkSweepByLayer",
	        value: function MarkSweepByLayer() {
	            var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : weType.kChessLayerChess;

	            if (layer < we4p.ChessLayer.kChessLayer0 || layer >= we4p.ChessLayer.kChessLayerNum) return;
	            var c = this.GetLayer(layer);
	            if (c == null) return;
	            c.SetCrushMark(1);
	            this.SweepChess(c);
	        }
	    }, {
	        key: "MarkSweepByType",
	        value: function MarkSweepByType(type) {
	            var chess = this.FindChess(type);
	            if (chess == null) return;
	            chess.SetCrushMark(1);
	            this.SweepChess(chess);
	        }
	    }, {
	        key: "MarkSweepByChess",
	        value: function MarkSweepByChess(chess) {
	            if (chess == null) return;
	            chess.SetCrushMark(1);
	            this.SweepChess(chess);
	        }

	        // 清理棋格内所有被mark过的棋子
	        // 影响统计, 会调用棋子的OnDestroy
	        // 清理之前mark过的棋子

	    }, {
	        key: "Sweep",
	        value: function Sweep() {
	            var chess = null;
	            var count = 0;
	            for (var i = we4p.ChessLayer.kChessLayerNum - 1; i >= we4p.ChessLayer.kChessLayer0; i--) {
	                if ((chess = this.GetLayer(i)) == null) {
	                    continue;
	                }
	                if (!this.SweepChess(chess)) {
	                    continue;
	                }
	                count++;
	            }
	            return count;
	        }
	    }, {
	        key: "SearchFlag",
	        value: function SearchFlag() {
	            return this.search_flag_;
	        }
	    }, {
	        key: "SetSearchFlag",
	        value: function SetSearchFlag(f) {
	            this.search_flag_ = f;
	        }
	    }, {
	        key: "adapter",
	        value: function adapter() {
	            return this.adapter_;
	        }
	        // 标记为备份专用棋格

	    }, {
	        key: "MarkAsBackupNode",
	        value: function MarkAsBackupNode() {
	            this.is_backup_node_ = true;
	        }
	    }, {
	        key: "IsBackupNode",
	        value: function IsBackupNode() {
	            return this.is_backup_node_;
	        }
	    }, {
	        key: "SetChessGenerator",
	        value: function SetChessGenerator(g) {
	            this.chess_generator_ = g;
	        }
	    }, {
	        key: "InitChess",
	        value: function InitChess(chess) {
	            var from_model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	            var generated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	            var layer = chess.Attribute().Layer;
	            if (layer < 0) {
	                //chess.release();
	                return;
	            }

	            if (layer == we4p.ChessLayer.kChessLayerFeature) {
	                this.AddFeautrePtr(chess);
	            } else {
	                this.SetLayer(layer, chess);
	            }

	            chess.SetNode(this);
	            chess.OnCreate();
	            chess.Init(chess.GetAttach());
	            chess.SetActive(true);

	            if (generated) {
	                chess.OnGenerated();
	            }

	            //分数管理器要记录生成的棋子，这里先注释
	            //CurrentScoreManager()->AddChess(chess);

	            // @TODO Blueberry
	            //if (chess.Type() == STIT_BLUEBERRY) {
	            //    // 蓝莓统计数量增加1
	            //    PuzzleCompute::GetInstance().AdditionStaticCount(STIT_BLUEBERRY);
	            //} else if (chess->Type() == STIT_BAD_BLUEBERRY) {
	            //    // 坏莓统计数量增加1
	            //    PuzzleCompute::GetInstance().AdditionStaticCount(STIT_BAD_BLUEBERRY);
	            //}

	            if (!from_model) {
	                if (we4p.ChessType.STIT_COLLECT_UNDER_ICE == chess.Type()) {
	                    var pos = this.GetPosition();
	                    module_icebear.PuzzleIceBearUtil.GetInstance().InsertCollectUnderIceThing(pos.row, pos.col);
	                }
	                // 非初始化棋盘的情况下
	                // 特殊棋子产生需要抛出event
	                var prop = chess.Attribute();
	                if (prop && (prop.IsSpecialChess1 || prop.IsSpecialChess2)) {
	                    //这里要抛一个特殊棋子产生的事件，这里先注释
	                    //AddSpecialChessEvent ev;
	                    //ev.pos = GetPosition();
	                    //CurrentBoard()->event_manager()->Forward(&ev);
	                }
	            }
	        }
	    }, {
	        key: "ToNodeData",
	        value: function ToNodeData() {
	            if (!this.IsAvailable()) return new we4p.NodeData();

	            var chess = null;
	            var data = new we4p.NodeData();
	            var chess_arr = data.chess_data;
	            var chesses = this.chesses_;
	            var size = chesses.length;
	            for (var i = 0; i < size; i++) {
	                chess = chesses[i];
	                if (chess) {
	                    chess_arr.push(chess.ToChessData());
	                } else {
	                    chess_arr.push(null);
	                }
	            }
	            var local_pos = this.GetPosition();
	            data.pos.row = local_pos.row;
	            data.pos.col = local_pos.col;

	            return data;
	        }

	        // 获取moving层的引用

	    }, {
	        key: "GetMovingItemDataCite",
	        value: function GetMovingItemDataCite() {
	            return this.m_movingItemData;
	        }
	    }, {
	        key: "GetMovingItemP",
	        value: function GetMovingItemP() {
	            return this.m_movingItemData;
	        }
	    }, {
	        key: "LayerOfChess",
	        value: function LayerOfChess(c) {
	            return c.Attribute().Layer;
	        }

	        /**
	         *
	         * @param ptr -- ChessInterface类型
	         * @constructor
	         */

	    }, {
	        key: "AddChessPtr",
	        value: function AddChessPtr(ptr) {
	            ptr.SetNode(this);
	            var l = this.LayerOfChess(ptr);
	            if (l == we4p.ChessLayer.kChessLayerFeature) {
	                this.AddFeautrePtr(ptr);
	                return;
	            }
	            //WE4_ASSERT(chesses_[l] == NULL);
	            this.SetChessPtr(l, ptr);
	        }
	        // 移除所有棋子和功能

	    }, {
	        key: "RemoveAll",
	        value: function RemoveAll() {
	            this.ReleaseAllChess();
	            this.m_movingItemData.ReturnObject();
	        }

	        /**
	         * 查找棋格内是否有对应类型的棋子并返回
	         * @param type
	         * @returns {*}
	         * @constructor
	         */

	    }, {
	        key: "FindChess",
	        value: function FindChess(type) {
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            for (var i = 0; i < len; i++) {
	                var c = chess_arr[i];
	                if (c == null) continue;
	                if (c.Type() == type) {
	                    return c;
	                }
	            }
	            return null;
	        }

	        /**
	         * 查找对应类型功能棋子在棋子列表的索引并返回，没有找到则返回-1
	         * @param type
	         * @returns {number}
	         * @constructor
	         */

	    }, {
	        key: "FindFeautre",
	        value: function FindFeautre(type) {
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            if (len <= we4p.ChessLayer.kChessLayerNum) return -1;
	            var c;
	            for (var i = we4p.ChessLayer.kChessLayerNum; i < len; i++) {
	                c = chess_arr[i];
	                if (c == null) {
	                    break;
	                }
	                if (c.Type() == type) {
	                    return i;
	                }
	            }
	            return -1;
	        }

	        /**
	         *
	         * @param chess -- ChessInterface类型
	         * @constructor
	         */

	    }, {
	        key: "AddFeautrePtr",
	        value: function AddFeautrePtr(chess) {
	            var i = this.FindFeautre(chess.Type());
	            // 重复添加feature!?
	            if (i != -1) {
	                //WE4_ASSERT(false);
	                this.SetChessPtr(i, chess);
	                return;
	            }
	            this.chesses_.push(chess);
	            this.SetChessPtr(this.chesses_.length - 1, chess);
	            chess.SetNode(this);
	        }

	        // 处理消除, 周边消除, 锤子, 鱼天赋这4种消除行为

	    }, {
	        key: "CommonCrush",
	        value: function CommonCrush(info) {
	            var result = false;
	            var next_info = new ChessInterface.AttackInfo();
	            next_info.copyDataFrom(info);

	            for (var i = we4p.ChessLayer.kChessLayerNum - 1; i >= we4p.ChessLayer.kChessLayer0; i--) {
	                var chess = this.GetLayer(i);
	                if (chess && this.CommonCrushChess(chess, next_info)) result = true;
	            }

	            // 至少产生了一次攻击
	            if (result) {
	                this.last_drop_sequence_ = Mgr.envManager.GetDropSequence();
	                //Mgr.scoreManager.AddCrushNode(this);
	            }

	            return result;
	        }
	    }, {
	        key: "InternalCrush",
	        value: function InternalCrush(c, info) {
	            //console.log("InternalCrush");
	            return c.Crush(info);
	        }
	        // 判断棋子是否能消除, 如果能则mark

	    }, {
	        key: "CommonCrushChess",
	        value: function CommonCrushChess(chess, info) {

	            var prop = chess.Attribute();
	            if (!chess.CanCrush(info)) return false;

	            // 禁止连续消除
	            if (prop.ForbidContinuousCrush) {
	                if (Mgr.envManager.GetDropSequence() == this.last_drop_sequence_) {
	                    return false;
	                }
	            }

	            // 在棋子本身的逻辑处理全部完成之前, 保证其什么周期不结束
	            // chess.retain();
	            // 通知棋子对象,发生消除事件
	            if (!this.InternalCrush(chess, info)) {
	                //chess->release();
	                return false;
	            }
	            // 标记棋子消除
	            chess.SetCrushMark(info.join);

	            // 允许连续消除
	            if (!prop.ForbidContinuousCrush && prop.NextType != we4p.ChessType.STIT_NONE) {
	                console.log("棋子允许被连续消除");
	                // 立即从棋盘清理, 但对象不会被立即销毁
	                this.SweepChess(chess);
	            }

	            // 消除周边棋子
	            if (chess.Attribute().CanCrushAround) {
	                //console.log("攻击周边棋子 type :" + chess.Type());
	                this.DoCrushAround(info, this.GetPosition());
	            }

	            // 逻辑完成, 释放引用计数
	            //chess->release();
	            return true;
	        }
	    }, {
	        key: "CommonSweepChess",
	        value: function CommonSweepChess(chess, batch, attack_type) {
	            if (chess.CrushMark() == 0) {
	                return false;
	            }

	            var prop = chess.Attribute();

	            //if (CurrentPlayer() == DefaultPlayer()) {
	            //    // 老的统计
	            //    PuzzleCompute::GetInstance().AdditionStaticCount(chess->Type());
	            //    PuzzleCompute::GetInstance().AdditionColorCount(chess->Color());
	            //    PuzzleCompute::GetInstance().AdditionCollectionCount(chess->Type());
	            //}

	            // 新的统计
	            Mgr.scoreManager.AddCrushChess(chess);
	            chess.SetActive(false);

	            //SweepChessEvent e;
	            //e.chess = chess;
	            //EventManager()->Forward(&e);

	            // 取得下阶段棋子
	            var next_chess = chess.NextChess();

	            chess.OnDestroy();
	            this.RemoveChess(chess);

	            if (next_chess != null) {
	                this.AddChess(next_chess);
	            }

	            // discard
	            // 清除原动态层数据
	            if (prop.Layer == weType.kChessLayerChess && this.GetLayer(prop.Layer) == null) {
	                this.m_movingItemData.ReturnObject();
	            }

	            return true;
	        }
	        // 交换2个node之间的layer

	    }, {
	        key: "SwapLayer",
	        value: function SwapLayer(dest, layer) {
	            //WE4_ASSERT(layer >= kChessLayerBottom && layer < kChessLayerFeature);
	            // WE4_ASSERT(chesses_[layer] != NULL);
	            // WE4_ASSERT(dest->chesses_[layer] != NULL);

	            var dest_chess_arr = dest.chesses_;
	            var chess_arr = this.chesses_;
	            var tmp = dest_chess_arr[layer];
	            dest.SetChessPtr(layer, chess_arr[layer]);
	            this.SetChessPtr(layer, tmp);

	            if (chess_arr[layer]) {
	                chess_arr[layer].SetNode(this);
	            }

	            if (dest_chess_arr[layer]) {
	                dest_chess_arr[layer].SetNode(dest);
	            }

	            // 棋子的层话, 也要交换动态层数据
	            if (layer == weType.kChessLayerChess) {
	                var tmp2 = new moving_item.PuzzleMovingItemData();
	                tmp2.CopyOtherMovingItemData(this.m_movingItemData);
	                this.m_movingItemData.CopyOtherMovingItemData(dest.m_movingItemData);
	                dest.m_movingItemData.CopyOtherMovingItemData(tmp2);
	            }
	        }
	    }, {
	        key: "DoCrushAround",
	        value: function DoCrushAround(info, pos) {
	            var row = pos.row;
	            var col = pos.col;
	            var around = [];
	            around.push(new weType.GridPosition(row - 1, col));
	            around.push(new weType.GridPosition(row + 1, col));
	            around.push(new weType.GridPosition(row, col - 1));
	            around.push(new weType.GridPosition(row, col + 1));

	            var next_info = new ChessInterface.AttackInfo();
	            next_info.copyDataFrom(info);
	            next_info.src = new weType.GridPosition(pos);
	            // Notice:
	            // Around attack 都视作Attack_Normal ?
	            next_info.attack_type = we4p.AttackType.Attack_Normal;
	            next_info.around_attack = true;

	            var ev = new puzzle_event.CrushNodeEvent();
	            ev.attack_type = we4p.AttackType.Attack_Normal;
	            ev.src = new weType.GridPosition(pos);
	            ev.ani_batch_id = info.batch.m_self_batch_index;
	            ev.around_attack = true;

	            var len = around.length;
	            for (var i = 0; i < len; i++) {
	                var item = around[i];
	                var rowTemp = item.row;
	                var colTemp = item.col;

	                if (!Mgr.boardViewer.ValidPos(rowTemp, colTemp)) {
	                    continue;
	                }

	                var node = Mgr.boardViewer.GetNode(rowTemp, colTemp);
	                //console.log("around crush");
	                node.Crush(next_info);
	                ev.nodes.push(new weType.GridPosition(node.GetPosition()));
	            }

	            Mgr.eventManager.Forward(ev);
	        }
	    }, {
	        key: "SweepChess",
	        value: function SweepChess(chess) {
	            if (chess.CrushMark() == 0) {
	                return false;
	            }

	            var prop = chess.Attribute();

	            //if (CurrentPlayer() == DefaultPlayer()) {
	            //    // 老的统计
	            //    PuzzleCompute::GetInstance().AdditionStaticCount(chess->Type());
	            //    PuzzleCompute::GetInstance().AdditionColorCount(chess->Color());
	            //    PuzzleCompute::GetInstance().AdditionCollectionCount(chess->Type());
	            //}

	            // 新的统计
	            //CurrentScoreManager()->AddCrushChess(chess);
	            chess.SetActive(false);

	            var e = new puzzle_event.SweepChessEvent();
	            e.chess = chess;
	            Mgr.eventManager.Forward(e);

	            // 取得下阶段棋子
	            var next_chess = chess.NextChess();

	            chess.OnDestroy();
	            this.RemoveChess(chess);

	            if (next_chess != null) {
	                this.AddChess(next_chess);
	            }

	            // discard
	            // 清除原动态层数据
	            if (prop.Layer == we4p.ChessLayer.kChessLayerChess && this.GetLayer(prop.Layer) == null) {
	                this.m_movingItemData.ReturnObject();
	            }

	            return true;
	        }
	    }, {
	        key: "SlideTo",
	        value: function SlideTo(dest) {
	            if (this.chesses_[weType.kChessLayerChess] == null) return;
	            this.SwapLayer(dest, weType.kChessLayerChess);
	        }
	    }, {
	        key: "ReleaseAllChess",
	        value: function ReleaseAllChess() {
	            var len = this.chesses_.length;
	            for (var i = 0; i < len; i++) {
	                this.ClearChessPtr(i);
	            }
	            this.chesses_ = [] /*new Array(we4p.ChessLayer.kChessLayerNum)*/;
	        }
	    }, {
	        key: "SendBoardEvent",
	        value: function SendBoardEvent(e) {
	            Mgr.eventManager.Forward(e);
	        }

	        /**
	         * 是否可以掉进虫洞
	         * @param to -- 要掉入的node对象
	         * @returns {boolean}
	         * @constructor
	         */

	    }, {
	        key: "CanDropAcrossWormhole",
	        value: function CanDropAcrossWormhole(to) {
	            if (!this.CanDrop(weType.DropWay.DropWay_Teleport)) return false;
	            if (!to.CanDropIn(weType.DropWay.DropWay_Teleport)) return false;
	            return true;
	        }

	        /**
	         * 是否可以垂直掉落到目标棋格
	         * @param to    -- 目标棋格对象
	         * @returns {boolean}
	         * @constructor
	         */

	    }, {
	        key: "CanVerticalDropTo",
	        value: function CanVerticalDropTo(to) {
	            var way = weType.DropWay.DropWay_Fall;
	            if (to.GetPosition().row < this.GetPosition().row) {
	                way = weType.DropWay.DropWay_Float;
	            }

	            if (!this.CanDrop(way)) return false;
	            if (!to.CanDropIn(way)) return false;

	            if (to.GetPosition().row > this.GetPosition().row) {
	                if (this.HasOneOf(we4p.ChessType.STIT_FENCE_BOTTOM)) return false;
	            }
	            if (to.GetPosition().row < this.GetPosition().row) {
	                if (to.HasOneOf(we4p.ChessType.STIT_FENCE_BOTTOM)) return false;
	            }

	            return true;
	        }

	        /**
	         * 是否可以侧落到目标棋格
	         * @param to -- 目标棋格对象
	         * @constructor
	         */

	    }, {
	        key: "CanSideDropTo",
	        value: function CanSideDropTo(to) {
	            var way = weType.DropWay.DropWay_Fall;
	            if (to.GetPosition().row < this.GetPosition().row) {
	                way = weType.DropWay.DropWay_Float;
	            }

	            if (this.HasOneOf(we4p.ChessType.CT_CLODS0) || this.HasOneOf(we4p.ChessType.CT_CLODS1)) {
	                return false;
	            }

	            if (!this.CanDrop(way)) return false;
	            if (!to.CanDropIn(way)) return false;

	            var from_pos = this.GetPosition();
	            var to_pos = to.GetPosition();

	            // 处理栅栏
	            // 栅栏的拦截是单向, 只会拦截掉落方

	            // 如果往右下掉落
	            if (to_pos.col > from_pos.col && way == weType.DropWay.DropWay_Fall) {
	                // 有右侧栅栏
	                if (this.HasOneOf(we4p.ChessType.STIT_FENCE_RIGHT) || this.HasOneOf(we4p.ChessType.STIT_FENCE_BOTTOM)) {
	                    return false;
	                }
	            }
	            // 如果往左下掉落
	            if (to_pos.col < from_pos.col && way == weType.DropWay.DropWay_Fall) {
	                if (this.HasOneOf(we4p.ChessType.STIT_FENCE_BOTTOM)) return false;
	                var n1_left = Mgr.boardViewer.GetNode(from_pos.row, from_pos.col - 1);
	                if (n1_left && n1_left.HasOneOf(we4p.ChessType.STIT_FENCE_RIGHT)) {
	                    return false;
	                }
	            }
	            // 如果往右上掉落
	            if (to_pos.col > from_pos.col && way == weType.DropWay.DropWay_Float) {
	                // 有右侧栅栏
	                if (this.HasChessType(we4p.ChessType.STIT_FENCE_RIGHT)) {
	                    return false;
	                }
	                // 获取上面棋子
	                var n1_up = Mgr.boardViewer.GetNode(from_pos.row - 1, from_pos.col);
	                // 如果上面棋子有右侧栅栏, 禁止
	                if (n1_up && n1_up.HasChessType(we4p.ChessType.STIT_FENCE_BOTTOM)) {
	                    return false;
	                }
	            }
	            // 如果往左上掉落
	            if (to_pos.col < from_pos.col && way == weType.DropWay.DropWay_Float) {
	                // 获取左侧棋子
	                var n1_left = Mgr.boardViewer.GetNode(from_pos.row, from_pos.col - 1);
	                if (n1_left && n1_left.HasChessType(we4p.ChessType.STIT_FENCE_RIGHT)) {
	                    return false;
	                }
	                // 获取上面棋子
	                var n1_up = Mgr.boardViewer.GetNode(from_pos.row - 1, from_pos.col);
	                if (n1_up && n1_up.HasChessType(we4p.ChessType.STIT_FENCE_BOTTOM)) {
	                    return false;
	                }
	            }

	            return true;
	        }
	    }, {
	        key: "SetChessPtr",
	        value: function SetChessPtr(i) {
	            var ptr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	            if (this.chesses_[i]) this.ClearChessTypeBit(this.chesses_[i].Type());
	            if (ptr) this.SetChessTypeBit(ptr.Type());
	            this.chesses_[i] = ptr;
	        }
	    }, {
	        key: "ClearChessPtr",
	        value: function ClearChessPtr(i) {
	            if (this.chesses_[i]) {
	                this.ClearChessTypeBit(this.chesses_[i].Type());
	                //这里把棋子对象释放掉
	                this.chesses_[i].Release();
	                this.chesses_[i] = null;
	            }
	        }
	    }, {
	        key: "ShallowCopyTo",
	        value: function ShallowCopyTo(dest) {
	            dest.ReleaseAllChess();
	            // copy
	            var len = this.chesses_.length;
	            var chess_arr = this.chesses_;
	            var dest_chesse_arr = dest.chesses_;
	            for (var i = 0; i < len; i++) {
	                dest_chesse_arr.push(chess_arr[i]);
	            }
	        }
	    }, {
	        key: "ShallowCopyFrom",
	        value: function ShallowCopyFrom(dest) {
	            this.ReleaseAllChess();
	            var chess_arr = this.chesses_;
	            var dest_len = dest.chesses_.length;
	            var dest_chesse_arr = dest.chesses_;
	            for (var i = 0; i < dest_len; i++) {
	                chess_arr.push(dest_chesse_arr[i]);
	            }
	        }
	    }, {
	        key: "RemoveLayer",
	        value: function RemoveLayer(i) {
	            //WE4_ASSERT(i >= kChessLayerBottom && i < kChessLayerFeature);
	            this.ClearChessPtr(i);
	        }

	        // 判断指定点静态层是否为糖果纸

	    }, {
	        key: "IsStaticItemCandyPaper",
	        value: function IsStaticItemCandyPaper() {
	            return this.HasChessType(we4p.ChessType.STIT_CANDYPAPER1) || this.HasChessType(we4p.ChessType.STIT_CANDYPAPER2) || this.HasChessType(we4p.ChessType.STIT_CANDYPAPER3) || this.HasChessType(we4p.ChessType.STIT_CANDYPAPER4) || this.HasChessType(we4p.ChessType.STIT_CANDYPAPER5);
	        }

	        // 判断指定点静态层是否为毛球

	    }, {
	        key: "IsStaticItemMaoQiu",
	        value: function IsStaticItemMaoQiu() {
	            return this.HasChessType(we4p.ChessType.STIT_MAOQIU1) || this.HasChessType(we4p.ChessType.STIT_MAOQIU2);
	        }
	    }, {
	        key: "IsStaticItemCollectPointInSoda",
	        value: function IsStaticItemCollectPointInSoda() {
	            var rt = this.HasChessType(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA) || this.HasChessType(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA_LEFT) || this.HasChessType(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA_RIGHT) || this.HasChessType(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA_BOTH);
	            return rt;
	        }
	    }, {
	        key: "IsStaticItemCollectUnderIce",
	        value: function IsStaticItemCollectUnderIce() {
	            return this.HasChessType(we4p.ChessType.STIT_COLLECT_UNDER_ICE);
	        }
	    }, {
	        key: "IsStaticIceArea",
	        value: function IsStaticIceArea() {
	            return this.IsStaticItemIce() || this.IsStaticItemDeepIce();
	        }
	        // 判断指定点静态层是否为一层冰块

	    }, {
	        key: "IsStaticItemIce",
	        value: function IsStaticItemIce() {
	            return this.IsStaticItemIceWithBearUnder() || this.IsStaticItemIceWithoutBearUnder();
	        }
	    }, {
	        key: "IsStaticItemIceWithBearUnder",
	        value: function IsStaticItemIceWithBearUnder() {
	            return this.HasChessType(we4p.ChessType.STIT_ICE_BEAR_UNDER);
	        }
	    }, {
	        key: "IsStaticItemIceWithoutBearUnder",
	        value: function IsStaticItemIceWithoutBearUnder() {
	            return this.HasChessType(we4p.ChessType.STIT_ICE);
	        }
	        // 判断指定点静态层是否为深冰

	    }, {
	        key: "IsStaticItemDeepIce",
	        value: function IsStaticItemDeepIce() {
	            return this.HasChessType(we4p.ChessType.STIT_DEEPICE);
	        }
	        // 判断指定点静态层是否为一层木箱

	    }, {
	        key: "IsStaticItemBox",
	        value: function IsStaticItemBox() {
	            return this.HasChessType(we4p.ChessType.STIT_BOX);
	        }
	        // 判断指定点静态层是否为两层木箱

	    }, {
	        key: "IsStaticItemBoxTwo",
	        value: function IsStaticItemBoxTwo() {
	            return this.HasChessType(we4p.ChessType.STIT_BOX_TWO);
	        }
	        // 判断指定点静态层是否为三层木箱

	    }, {
	        key: "IsStaticItemBoxThree",
	        value: function IsStaticItemBoxThree() {
	            return this.HasChessType(we4p.ChessType.STIT_BOX_THREE);
	        }
	        // 判断指定点静态层是否为四层木箱

	    }, {
	        key: "IsStaticItemBoxFour",
	        value: function IsStaticItemBoxFour() {
	            return this.HasChessType(we4p.ChessType.STIT_BOX_FOUR);
	        }
	        // 判断指定点静态层是否为牢笼

	    }, {
	        key: "IsStaticItemCage",
	        value: function IsStaticItemCage() {
	            return this.HasOneOf(we4p.ChessType.STIT_CAGE) || this.HasOneOf(we4p.ChessType.STIT_CAGE2);
	        }

	        // 判断指定点静态层是否为箱子或牢笼

	    }, {
	        key: "IsStaticItemBoxOrCage",
	        value: function IsStaticItemBoxOrCage() {
	            return this.HasOneOf(we4p.ChessType.STIT_CAGE) || this.HasOneOf(we4p.ChessType.STIT_CAGE2) || this.HasChessType(we4p.ChessType.STIT_BOX) || this.HasChessType(we4p.ChessType.STIT_BOX_TWO) || this.HasChessType(we4p.ChessType.STIT_BOX_THREE) || this.HasChessType(we4p.ChessType.STIT_BOX_FOUR);
	        }
	    }, {
	        key: "GetTickbombTick",
	        value: function GetTickbombTick() {
	            var c = this.GetChess();
	            if (c == null) return 0;
	            if (c.Type() != we4p.ChessType.CT_TICKBOMB) return 0;
	            //TickBomb *bomb = dynamic_cast<TickBomb *>(c);
	            //return bomb->tick();
	            return 0;
	        }
	    }, {
	        key: "setFillMode",
	        value: function setFillMode(fillmode) {
	            this._fillMode = fillmode;
	        }
	    }, {
	        key: "getFillMode",
	        value: function getFillMode() {
	            return this._fillMode;
	        }
	    }]);

	    return PuzzleChessNode;
	}();

	module.exports = PuzzleChessNode;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/10/30.
	 */
	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	///一个礼盒棋子中包含的道具种类最多为3
	//var sMax_GIFTITEM_TOOLTYPE_SIZE = 3;
	//class CMovingItemGiftAttr {
	//    var toolID = new [sMax_GIFTITEM_TOOLTYPE_SIZE];
	//    int toolCount[sMax_GIFTITEM_TOOLTYPE_SIZE];
	//
	//    CMovingItemGiftAttr() {
	//        for (int i = 0; i < sMax_GIFTITEM_TOOLTYPE_SIZE; ++i) {
	//            toolID[i] = -1;
	//            toolCount[i] = -1;
	//        }
	//    }
	//
	//    void reset() {
	//        for (int i = 0; i < sMax_GIFTITEM_TOOLTYPE_SIZE; ++i) {
	//            toolID[i] = -1;
	//            toolCount[i] = -1;
	//        }
	//    }
	//};

	//在移动棋盘上的棋子信息

	var PuzzleMovingItemData = function () {
	    function PuzzleMovingItemData() {
	        _classCallCheck(this, PuzzleMovingItemData);

	        this.m_GiftAttr = null;
	        this.m_nStepBonus = 0; //加步数棋子

	        this.m_bJustDrop = false;
	        this.m_drop_new_flag = false; //棋子掉落时，标记是否为新的棋子
	        this.m_attachStaticType = 0; // 掉落带静态层
	        //棋子下落路径
	        this.m_DropPath = []; //GridPosition对象数组

	        this.ReturnObject();
	    }

	    _createClass(PuzzleMovingItemData, [{
	        key: "ReturnObject",
	        value: function ReturnObject() {
	            this.m_DropPath = [];
	            this.m_bJustDrop = false;
	            this.m_drop_new_flag = false;
	            //this.m_GiftAttr.reset();
	            this.m_attachStaticType = we4p.ChessType.STIT_NONE;
	            this.m_nStepBonus = 0;
	        }
	    }, {
	        key: "ResetDropPath",
	        value: function ResetDropPath() {
	            this.m_DropPath = [];
	        }
	    }, {
	        key: "AddPathPoint",
	        value: function AddPathPoint(pos) {
	            var p = new weType.GridPosition(pos);
	            this.m_DropPath.push(p);
	        }
	    }, {
	        key: "GetDropDepth",
	        value: function GetDropDepth() {
	            return this.m_DropPath;
	        }
	    }, {
	        key: "ClearDropDepth",
	        value: function ClearDropDepth() {
	            this.m_DropPath = [];
	        }
	    }, {
	        key: "GetJustDrop",
	        value: function GetJustDrop() {
	            return this.m_bJustDrop;
	        }
	    }, {
	        key: "SetJustDrop",
	        value: function SetJustDrop(bDrop) {
	            this.m_bJustDrop = bDrop;
	        }
	    }, {
	        key: "CopyOtherMovingItemData",
	        value: function CopyOtherMovingItemData(pOtherMovingItemData) {
	            this.ReturnObject();
	            if (!pOtherMovingItemData) {
	                return;
	            }
	            this.m_bJustDrop = pOtherMovingItemData.m_bJustDrop;
	            var this_path = this.m_DropPath;
	            var other_path = pOtherMovingItemData.m_DropPath;
	            var other_len = other_path.length;
	            for (var i = 0; i < other_len; i++) {
	                this_path.push(other_path[i]);
	            }
	            this.m_drop_new_flag = pOtherMovingItemData.m_drop_new_flag;

	            //m_GiftAttr = pOtherMovingItemData->m_GiftAttr;
	            this.m_attachStaticType = pOtherMovingItemData.m_attachStaticType;
	            this.m_nStepBonus = pOtherMovingItemData.m_nStepBonus;
	            // SetUserData(pOtherMovingItemData->GetUserData());
	        }
	    }, {
	        key: "SetGiftAttr",
	        value: function SetGiftAttr(attr) {
	            this.m_GiftAttr = attr;
	        }
	    }, {
	        key: "GetGiftAttr",
	        value: function GetGiftAttr() {
	            return this.m_GiftAttr;
	        }
	    }, {
	        key: "SlideSwap",
	        value: function SlideSwap(dst) {
	            var tmp = new PuzzleMovingItemData();
	            tmp.CopyOtherMovingItemData(this);
	            CopyOtherMovingItemData(dst);
	            dst.CopyOtherMovingItemData(tmp);
	        }
	    }]);

	    return PuzzleMovingItemData;
	}();

	module.exports = {
	    PuzzleMovingItemData: PuzzleMovingItemData
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by billbao on 2016/11/15.
	 */
	var NodeAdapter = function NodeAdapter() {
	  this.NextNode = null;
	};

	module.exports = NodeAdapter;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by billbao on 2016/11/15.
	 */
	var PModule = PModule || __webpack_require__(37);
	var Module_Basic = Module_Basic || __webpack_require__(38);
	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	var Mgr = Mgr || __webpack_require__(14);

	function WormholeNextNode(node, next) {
	    if (node.HasChessType(we4p.ChessType.STIT_CHONGDONG1)) {
	        next = Wormhole1NextNode(node, next);
	    }
	    if (node.HasChessType(we4p.ChessType.STIT_CHONGDONG2)) {
	        next = Wormhole2NextNode(node, next);
	    }
	    return next;
	}

	/*
	 虫洞的历史:
	 1指上虫洞，2指下虫洞
	 第一版本虫洞:支持水面上1掉到2,不支持水下
	 第二版本虫洞:支持水面上1掉到2,支持水下2掉到1，开始做的很复杂,考虑了各种情况，比如1和2
	 同列死循环问题，不同列侧滑死循环问题，1和2一个在水上，一个在水下，谁是入口谁是出口，该
	 不该继续掉落问题，垂直掉落，侧滑，虫洞谁优先等，搞出来发现老版本地图存在一些坑，如老地图
	 已存在虫洞2在上,虫洞1在下的地图，据策划回忆还不止一张，修复死循环的bug就会导致老地图失
	 效，两难，最后简化功能，简单做，由策划来规避死循环风险，如棋格中间配置一行镂空棋格,出现
	 死循环问题找策划改地图，如果将来策划要更新虫洞功能，请让策划先理清上面的问题再改
	 第三版本虫洞:和策划砍需求，策划保证虫洞入口下方一定是镂空，虫洞出口上方一定是镂空，上方
	 下方是以虫洞穿越的方向来定义的，顺着穿越的方向为下方，反方向为上方
	 */
	function Wormhole1NextNode(node, next) {
	    var hole = node.GetFeature(we4p.ChessType.STIT_CHONGDONG1);
	    if (hole == null) {
	        return next;
	    }
	    //WE4_ASSERT(hole != NULL);

	    var attach = hole.GetAttach();
	    var from = new weType.GridPosition(node.GetWorldPosition());
	    var surface = Mgr.envManager.GetSodaLine();
	    var chongDong2Row = Mgr.worldViewer.GetPosByIndex(attach.iVal1).row;
	    var chongDong2Col = Mgr.worldViewer.GetPosByIndex(attach.iVal1).col;

	    // 虫洞1在水面上
	    if (from.row < surface) {
	        // 如果虫洞2也在水面上
	        if (chongDong2Row < surface) {
	            next.row = chongDong2Row;
	            next.col = chongDong2Col;
	        }
	        // 虫洞1在水面上,虫洞2在水下虫洞失效
	        else {
	                // nothing
	            }
	    }

	    return next;
	}

	function Wormhole2NextNode(node, next) {
	    var hole = node.GetFeature(we4p.ChessType.STIT_CHONGDONG2);
	    if (hole == null) {
	        return next;
	    }
	    //WE4_ASSERT(hole != NULL);

	    var attach = hole.GetAttach();
	    var from = new weType.GridPosition(node.GetWorldPosition());
	    var surface = Mgr.envManager.GetSodaLine();
	    var chongDong1Row = Mgr.worldViewer.GetPosByIndex(attach.iVal1).row;
	    var chongDong1Col = Mgr.worldViewer.GetPosByIndex(attach.iVal1).col;
	    // 虫洞2在水面下
	    if (from.row >= surface) {
	        // 如果虫洞1也在水面下
	        if (chongDong1Row >= surface) {
	            next.row = chongDong1Row;
	            next.col = chongDong1Col;
	        }
	        // 虫洞1在水面上,虫洞2在水下虫洞失效
	        else {
	                // nothing
	            }
	    }
	    return next;
	}

	var Wormhole1 = function (_Module_Basic$BasicCh) {
	    _inherits(Wormhole1, _Module_Basic$BasicCh);

	    function Wormhole1() {
	        _classCallCheck(this, Wormhole1);

	        var _this = _possibleConstructorReturn(this, (Wormhole1.__proto__ || Object.getPrototypeOf(Wormhole1)).call(this, we4p.ChessType.STIT_CHONGDONG1));

	        _this.save_ = null;
	        return _this;
	    }
	    //PreInit(){
	    //    super.PreInit();
	    //}
	    //
	    //Release(){
	    //
	    //}


	    _createClass(Wormhole1, [{
	        key: "Init",
	        value: function Init(attach) {
	            _get(Wormhole1.prototype.__proto__ || Object.getPrototypeOf(Wormhole1.prototype), "Init", this).call(this, attach);

	            var adapter = this.GetNodeAdapter();
	            this.save_ = adapter.NextNode;
	            adapter.NextNode = WormholeNextNode;
	        }
	    }]);

	    return Wormhole1;
	}(Module_Basic.BasicChess);

	var Wormhole2 = function (_Module_Basic$BasicCh2) {
	    _inherits(Wormhole2, _Module_Basic$BasicCh2);

	    function Wormhole2() {
	        _classCallCheck(this, Wormhole2);

	        var _this2 = _possibleConstructorReturn(this, (Wormhole2.__proto__ || Object.getPrototypeOf(Wormhole2)).call(this, we4p.ChessType.STIT_CHONGDONG2));

	        _this2.save_ = null;
	        return _this2;
	    }
	    //PreInit(){
	    //    super.PreInit();
	    //}
	    //
	    //Release(){
	    //
	    //}


	    _createClass(Wormhole2, [{
	        key: "Init",
	        value: function Init(attach) {
	            _get(Wormhole2.prototype.__proto__ || Object.getPrototypeOf(Wormhole2.prototype), "Init", this).call(this, attach);

	            var adapter = this.GetNodeAdapter();
	            this.save_ = adapter.NextNode;
	            adapter.NextNode = WormholeNextNode;
	        }
	    }]);

	    return Wormhole2;
	}(Module_Basic.BasicChess);

	var WormholeModule = function (_PModule) {
	    _inherits(WormholeModule, _PModule);

	    function WormholeModule() {
	        _classCallCheck(this, WormholeModule);

	        return _possibleConstructorReturn(this, (WormholeModule.__proto__ || Object.getPrototypeOf(WormholeModule)).call(this));
	    }

	    _createClass(WormholeModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(WormholeModule.prototype.__proto__ || Object.getPrototypeOf(WormholeModule.prototype), "Init", this).call(this, board);
	            this.RegisterChess(we4p.ChessType.STIT_CHONGDONG1);
	            this.RegisterChess(we4p.ChessType.STIT_CHONGDONG2);
	            return true;
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            if (type == we4p.ChessType.STIT_CHONGDONG1) {
	                this.newChessCount++;
	                return new Wormhole1();
	            } else if (type == we4p.ChessType.STIT_CHONGDONG2) {
	                this.newChessCount++;
	                return new Wormhole2();
	            } else return null;
	        }
	    }], [{
	        key: "GetExitPos",
	        value: function GetExitPos(node) {
	            var exitPos = new weType.GridPosition(-1, -1);
	            return WormholeNextNode(node, exitPos);
	        }
	    }]);

	    return WormholeModule;
	}(PModule);

	module.exports = {
	    Wormhole1: Wormhole1,
	    Wormhole2: Wormhole2,
	    WormholeModule: WormholeModule
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/11/2.
	 */

	var Mgr = Mgr || __webpack_require__(14);

	var PuzzleModule = function () {
	    function PuzzleModule() {
	        _classCallCheck(this, PuzzleModule);

	        this.board_ = null; //PuzzleChessBoard对象

	        this.newChessCount = 0; //新分配的棋子数量
	        this.chessesPool = []; //模块相关棋子池
	        this.isUsePool = false;
	    }

	    _createClass(PuzzleModule, [{
	        key: "Init",
	        value: function Init(board) {
	            this.board_ = board;
	            return true;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {}
	    }, {
	        key: "showNewCount",
	        value: function showNewCount(key) {
	            console.log(key + " new ches count is : " + this.newChessCount);
	        }

	        // 根据逻辑内棋子类型创建新棋子

	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            return null;
	        }

	        // 注册棋子类型

	    }, {
	        key: "RegisterChess",
	        value: function RegisterChess(type) {
	            //Mgr.tableManager.RegisterElementIdByModule(type, this);
	            return Mgr.moduleManager.RegisterChess(type, this);
	        }

	        // 注册编辑器端的棋子类型
	        //RegisterElementID(id){
	        //    return Mgr.moduleManager.RegisterElementID(id, this);
	        //}

	    }, {
	        key: "SetModuleData",
	        value: function SetModuleData(cmd, data) {}
	    }, {
	        key: "GetModuleData",
	        value: function GetModuleData(cmd) {
	            return null;
	        }
	    }, {
	        key: "PreAllocChess",
	        value: function PreAllocChess(num, builder) {
	            var pool = this.chessesPool;
	            for (var i = 0; i < num; i++) {
	                pool.push(builder());
	            }
	        }
	    }, {
	        key: "GetChessFromPool",
	        value: function GetChessFromPool() {
	            return this.chessesPool.shift();
	        }
	    }, {
	        key: "RecycleChess",
	        value: function RecycleChess(chess) {
	            if (this.isUsePool) {
	                this.chessesPool.push(chess);
	            }
	        }
	    }]);

	    return PuzzleModule;
	}();

	module.exports = PuzzleModule;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by billbao on 2016/10/31.
	 */

	var ChessInterface = ChessInterface || __webpack_require__(31);
	var Util = Util || __webpack_require__(21);
	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	var Mgr = Mgr || __webpack_require__(14);
	var PModule = PModule || __webpack_require__(37);
	//console.log(PModule);
	//console.log(we4p);

	// 最基本的棋子功能

	var BasicChess = function (_ChessInterface$Chess) {
	    _inherits(BasicChess, _ChessInterface$Chess);

	    function BasicChess(type) {
	        _classCallCheck(this, BasicChess);

	        var _this = _possibleConstructorReturn(this, (BasicChess.__proto__ || Object.getPrototypeOf(BasicChess)).call(this));

	        _this.color_ = weType.MovingItemType.MIT_NONE; //
	        _this.node_ = null; //chessNode
	        _this.attach_ = new ChessInterface.PuzzleStaticItemAttachData();
	        _this.active_ = false;
	        _this.is_backup_ = false;
	        _this.crush_mark_ = 0;
	        _this.next_chess_ = null;
	        _this.attr_ = null;
	        if (type != null) {
	            _this.attr_ = Mgr.tableManager.ChessPropertiesTable()[type];
	            _this.InitWithAttr();
	            Mgr.moduleManager.module_types_[type].newChessCount++;
	        }
	        return _this;
	    }

	    _createClass(BasicChess, [{
	        key: "copyDataFrom",
	        value: function copyDataFrom(other) {
	            this.attr_ = other.attr_;
	            this.color_ = other.color_;
	            this.attach_.copyDataFrom(other.attach_);
	            this.active_ = other.active_;
	            this.crush_mark_ = other.crush_mark_;
	            this.next_chess_ = other.next_chess_;
	        }
	    }, {
	        key: "PreInit",
	        value: function PreInit(type) {
	            this.color_ = weType.MovingItemType.MIT_NONE; //
	            this.node_ = null; //chessNode
	            this.active_ = false;
	            this.is_backup_ = false;
	            this.crush_mark_ = 0;
	            this.next_chess_ = null;
	            this.attr_ = Mgr.tableManager.ChessPropertiesTable()[type];
	            this.InitWithAttr();
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            Mgr.moduleManager.module_types_[this.Type()].RecycleChess(this);
	        }

	        // 如果子类有自己的成员变量
	        // 就必须重载Backup和Restore

	    }, {
	        key: "Backup",
	        value: function Backup() {
	            var c = Mgr.moduleManager.NewChess(this.attr_.ChessType, true);
	            c.copyDataFrom(this);
	            return c;
	        }
	    }, {
	        key: "Restore",
	        value: function Restore(other) {
	            this.copyDataFrom(other);
	        }

	        // 设置棋子的状态
	        // 如果棋子的active为false
	        // 那即使对象还存在, 也不会显示在棋盘上

	    }, {
	        key: "SetActive",
	        value: function SetActive(active) {
	            this.active_ = active;
	        }
	    }, {
	        key: "Active",
	        value: function Active() {
	            return this.active_;
	        }
	        // 棋子被创建时调用

	    }, {
	        key: "OnCreate",
	        value: function OnCreate() {}
	    }, {
	        key: "OnSlide",
	        value: function OnSlide(from, to) {}
	        // 棋子从棋盘消除/清理时调用

	    }, {
	        key: "OnDestroy",
	        value: function OnDestroy() {}
	    }, {
	        key: "OnDrop",
	        value: function OnDrop(from, to) {}
	    }, {
	        key: "OnGenerated",
	        value: function OnGenerated() {}
	    }, {
	        key: "Remove",
	        value: function Remove() {
	            this.GetNode().RemoveChess(this);
	        }
	    }, {
	        key: "ToChessData",
	        value: function ToChessData() {
	            var data = new we4p.ChessData();
	            data.layer = this.attr_.Layer;
	            data.type = this.Type();
	            data.color = this.Color();
	            var pos = this.GetNode().GetPosition();
	            data.pos.row = pos.row;
	            data.pos.col = pos.col;

	            //if (Type() == CT_STEPBONUS) {
	            //        data->mutable_step_bonus_data()->set_step_bonus(GetNode()->GetStepBonus());
	            //}

	            return data;
	        }
	    }, {
	        key: "GetEmptyChessData",
	        value: function GetEmptyChessData() {
	            ///这样做允许用户定制自己棋子类型的缺省值
	            var chessData = new we4p.ChessData();
	            var pos = this.GetNode().GetPosition();
	            chessData.pos.row = pos.row;
	            chessData.pos.col = pos.col;

	            return chessData;
	        }
	    }, {
	        key: "Init",
	        value: function Init(attach) {
	            if (attach) {
	                this.attach_.copyDataFrom(attach);
	            }
	            //if (this.Type() == CT_STEPBONUS) {
	            //    GetNode()->SetStepBonus(attach_.iVal1);
	            //}
	            this.active_ = true;
	        }
	    }, {
	        key: "NextType",
	        value: function NextType() {
	            return this.Attribute().NextType;
	        }
	    }, {
	        key: "GetAttach",
	        value: function GetAttach() {
	            return this.attach_;
	        }
	    }, {
	        key: "SetAttach",
	        value: function SetAttach(attach) {
	            if (attach) {
	                this.attach_.copyDataFrom(attach);
	            }
	        }
	    }, {
	        key: "Attribute",
	        value: function Attribute() {
	            return this.attr_;
	        }
	        //crushFlag: true->表示由crush事件引起; false->表示非crush事件引起

	    }, {
	        key: "GiftChessCrush",
	        value: function GiftChessCrush(batch, crushFlag) {
	            var attr = this.attr_;
	            if (attr.ChessType != we4p.ChessType.CT_GIFT) return false;

	            //var gif = this.node_.GetGiftAttr();
	            //for (var i = 0; i < sMax_GIFTITEM_TOOLTYPE_SIZE; ++i) {
	            //    if (gif.toolID[i] != -1 && gif.toolCount[i] != -1) {
	            //        bool isExistSameItemId = false;
	            //        we4::GameInfo *gameInfo = EnvManager()->MutableGameInfo();
	            //        int helpItemInfoSize = gameInfo->help_item_info_size();
	            //        for (int j = 0; j < helpItemInfoSize; ++j) {
	            //            we4::HelpItemInfo *helpItemInfo = gameInfo->mutable_help_item_info(j);
	            //            if (gif.toolID[i] == helpItemInfo->itemid()) {
	            //                    helpItemInfo->set_count(helpItemInfo->count() + gif.toolCount[i]);
	            //                isExistSameItemId = true;
	            //                break;
	            //            }
	            //        }
	            //        if (!isExistSameItemId) {
	            //            we4::HelpItemInfo *helpItemInfo = gameInfo->add_help_item_info();
	            //                helpItemInfo->set_itemid(gif.toolID[i]);
	            //                helpItemInfo->set_count(gif.toolCount[i]);
	            //        }
	            //    }
	            //}
	            //if (!Animation().findAnimationBatch(batch))
	            //    return true;
	            //
	            ////礼盒棋子打开动画
	            //int giftOpenBatch = Animation().GetOneAnimationBatch(
	            //    BatchData(batch, BatchData::RELATION_END, 0));
	            ////礼盒棋子打开后播放飞到底部道具的射线动画
	            //int giftFlyBatch = Animation().GetOneAnimationBatch(
	            //    BatchData(batch, BatchData::RELATION_END, 0));
	            //int giftAddBatch = Animation().GetOneAnimationBatch(
	            //    BatchData(giftFlyBatch, BatchData::RELATION_END, 0));
	            //
	            //for (int i = 0; i < sMax_GIFTITEM_TOOLTYPE_SIZE; ++i) {
	            //    int giftID = GetNode()->GetGiftAttr().toolID[i];
	            //    int giftCount = GetNode()->GetGiftAttr().toolCount[i];
	            //    GiftItemFlyAnimation giftAnim(GetPosition(), Color(), giftID, giftCount);
	            //    if (giftID > 0) {
	            //        if (crushFlag)
	            //            Animation().PushAnimationFun(
	            //                giftOpenBatch,
	            //                AFUN_1(AnimationFunMgr::GiftItemOpenGiftAnim, giftAnim));
	            //        Animation().PushAnimationFun(
	            //            giftFlyBatch, AFUN_1(AnimationFunMgr::GiftItemFlyAnim, giftAnim));
	            //        Animation().PushAnimationFun(
	            //            giftAddBatch,
	            //            AFUN_1(AnimationFunMgr::GiftItemAddCountAnim, giftAnim));
	            //    }
	            //}
	            //Animation().CreateAnimation(BatchData(false, true),
	            //    AFUN_1(AnimationFunMgr::RefreshItemUI));
	            return true;
	        }
	    }, {
	        key: "ActiveChessBuffer",
	        value: function ActiveChessBuffer(batch) {
	            var crushFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            //if (Mgr.passConManager.GetStatus() == we4p.GameStatus.kGamePass)
	            //    return false;

	            var ret = false;
	            var StageManager = Mgr.stageManager;
	            var EnvManager = Mgr.envManager;

	            switch (this.attr_.ChessType) {
	                //case CT_STEPBONUS:
	                //    StageManager_().AddMaxStep(attach_.iVal1);
	                //    CurrentScoreManager()->AddStatistics(we4::kStatStepChessStep,
	                //    attach_.iVal1);
	                //    if (!crushFlag) {
	                //        CurrentScoreManager()->AddCrushChess(this);
	                //    }
	                //    break;
	                //
	                case we4p.ChessType.CT_SodaBottle:
	                    {
	                        if (StageManager.IsSodaGame()) {
	                            var sodaLine = EnvManager.GetSodaLine() - 1;
	                            EnvManager.SetSodaLine(sodaLine < 0 ? 0 : sodaLine);
	                            //Animation().m_iSodaRow = sodaLine < 0 ? 0 : sodaLine;
	                            //Animation().m_iStartRow = CurrentBoard()->GetStartRow();
	                            //Mgr.curBoard.BreakBalance();
	                        }
	                        //if (!crushFlag) {
	                        // CurrentScoreManager()->AddCrushChess(this);
	                        //}
	                    }break;
	                //
	                //case STIT_SMALL_BELL:
	                //case STIT_Chameleon_SMALL_BELL:
	                //    if (!crushFlag) {
	                //        PuzzleCompute::GetInstance().AdditionCollectionCount(Type());
	                //        CurrentScoreManager()->AddCrushChess(this);
	                //    }
	                //    break;
	                //
	                //case CT_GIFT:
	                //    ret = GiftChessCrush(batch, crushFlag);
	                //    break;

	                default:
	                    break;
	            }
	            return ret;
	        }
	        // DirectCrush
	        // CrushAround
	        // UseItemHammer
	        // FishMissle
	        // 这4个函数最后都调用Crush完成消除
	        // 如果子类的行为不一致, 请重载

	    }, {
	        key: "Crush",
	        value: function Crush(info) {
	            //console.log("basic chess crush");
	            if (this.ActiveChessBuffer(info.batch.m_self_batch_index)) return true;
	            this.CreateNextChess();
	            this.CreateChangeAnim(info);
	            return true;
	        }
	    }, {
	        key: "CanCrush",
	        value: function CanCrush(info) {
	            var attr = this.attr_;
	            if (attr.crush_rule == we4p.CrushRule.kCrushNone) return false;
	            // 已经被crush
	            if (this.CrushMark() > 0 || this.CrushMark() == info.join) return false;

	            if (!this.ValidAttack(info)) return false;

	            // 获取上一层
	            var up = attr.Layer + 1;
	            // 如果上层大于棋面, 说明当前棋子就是棋面
	            if (up >= we4p.ChessLayer.kChessLayerNum) {
	                return true;
	            }

	            // 如果上层不存在其它棋子
	            if (this.node_.GetChess(up) == null) {
	                return true;
	            }

	            return false;
	        }
	    }, {
	        key: "CrushMark",
	        value: function CrushMark() {
	            return this.crush_mark_;
	        }
	    }, {
	        key: "SetCrushMark",
	        value: function SetCrushMark(flag) {
	            this.crush_mark_ = flag;
	        }
	    }, {
	        key: "ToChangedData",
	        value: function ToChangedData() {
	            var chessData = this.ToChessData();
	            var nextChessData = Util.clone(chessData);
	            nextChessData.type = this.NextType();
	            return [chessData, nextChessData];
	        }

	        // 创建棋子消除动画

	    }, {
	        key: "CreateChangeAnim",
	        value: function CreateChangeAnim(info) {
	            var batch = info.batch.m_self_batch_index;
	            switch (this.attr_.ChessType) {
	                case we4p.ChessType.STIT_STONECLOUD1:
	                    //Animation().PushAnimationFun(
	                    //    batch, AFUN_1(AnimationFunMgr::StoneCollectAnim, GetPosition()));
	                    Mgr.dataCollector.addCrushChess(this.ToChessData());
	                    break;
	                case we4p.ChessType.STIT_STONECLOUD2:
	                    Mgr.dataCollector.addChangedChess(this.ToChangedData());
	                    break;
	                case we4p.ChessType.CT_CLODS0:
	                    Mgr.dataCollector.addCrushChess(this.ToChessData());
	                    break;
	                // case we4p.ChessType.STIT_HUGEMUSHROOM:
	                case we4p.ChessType.STIT_LITTLEMUSHROOM:
	                    Mgr.dataCollector.addCrushChess(this.ToChessData());
	                    break;
	                case we4p.ChessType.CT_CLODS1:
	                    Mgr.dataCollector.addChangedChess(this.ToChangedData());
	                    break;

	                case we4p.ChessType.CT_NormalUnit:
	                case we4p.ChessType.STIT_BOX:
	                //case CT_Chameleon:
	                //case CT_ANIMAL_GO_HOME_MONSTER1:
	                //case CT_ANIMAL_GO_HOME_MONSTER2:
	                //case CT_STEPBONUS:
	                //case CT_TIMEBONUS:
	                //case CT_TICKBOMB:
	                case we4p.ChessType.CT_SodaBottle:
	                    //case CT_GIFT:
	                    Mgr.dataCollector.addCrushChess(this.ToChessData());
	                    break;

	                case we4p.ChessType.STIT_CANDYPAPER1:
	                case we4p.ChessType.STIT_CAGE:
	                    Mgr.dataCollector.addCrushTopChess(this.ToChessData());
	                    break;

	                case we4p.ChessType.STIT_CANDYPAPER2:
	                case we4p.ChessType.STIT_CANDYPAPER3:
	                case we4p.ChessType.STIT_CANDYPAPER4:
	                case we4p.ChessType.STIT_CANDYPAPER5:
	                case we4p.ChessType.STIT_CAGE2:
	                    Mgr.dataCollector.addChangedTopChess(this.ToChangedData());
	                    break;

	                case we4p.ChessType.STIT_BOX_TWO:
	                case we4p.ChessType.STIT_BOX_THREE:
	                case we4p.ChessType.STIT_BOX_FOUR:
	                    Mgr.dataCollector.addChangedChess(this.ToChangedData());
	                    break;

	                default:
	                    break;
	            }

	            // 如果是原动态层棋子
	            /*we4::ChessData chessData, nextChessData;
	            ToChessData(&chessData);
	            nextChessData = chessData;
	            nextChessData.set_type(attr_->nexttype());
	              if (attr_->chesstype() == CT_CLODS0 || attr_->chesstype() == CT_CLODS1) {
	                if (attr_->nexttype() == STIT_NONE) {
	                  Animation().PushAnimationData(batch, ANI_DATA(kAniIDBomb, chessData, 0, 0,
	                    Bomb_NormalUnit_type, true));
	                } else {
	                  Animation().PushAnimationData(
	                      batch, ANI_DATA(kAniIDMovingChange, chessData, nextChessData));
	                }
	            } else {
	                Animation().PushAnimationData(info->batch, ANI_DATA(kAniIDStaticExchange,
	                  chessData, nextChessData));
	                  if (attr_->chesstype() == STIT_STAR) {
	                  Animation().PushAnimationData(
	                    info->batch, ANI_DATA(kAniIDCommonCollect, chessData, 0U));
	                }
	            }*/

	            return 0;
	        }

	        // 当前棋子是否是指定类型

	    }, {
	        key: "IsType",
	        value: function IsType(type) {
	            return this.attr_.ChessType == type;
	        }
	        // 返回当前棋子类型

	    }, {
	        key: "Type",
	        value: function Type() {
	            return this.attr_.ChessType;
	        }
	        // 返回当前棋子所在的棋格

	    }, {
	        key: "GetNode",
	        value: function GetNode() {
	            return this.node_;
	        }
	        // 返回四周的棋格

	    }, {
	        key: "GetAroundNode",
	        value: function GetAroundNode(around) {
	            var pos = this.GetPosition();
	            var row = pos.row;
	            var col = pos.col;

	            around.push(Mgr.boardViewer.GetNode(new weType.GridPosition(row - 1, col)));
	            around.push(Mgr.boardViewer.GetNode(new weType.GridPosition(row + 1, col)));
	            around.push(Mgr.boardViewer.GetNode(new weType.GridPosition(row, col - 1)));
	            around.push(Mgr.boardViewer.GetNode(new weType.GridPosition(row, col + 1)));
	        }
	        // 设置当前棋子所在棋格

	    }, {
	        key: "SetNode",
	        value: function SetNode(n) {
	            this.node_ = n;
	        }
	        // 默认无色

	    }, {
	        key: "Color",
	        value: function Color() {
	            return this.color_;
	        }
	    }, {
	        key: "SetColor",
	        value: function SetColor(color) {
	            if (!this.attr_.CanChangeColor) return;

	            if (this.color == weType.MovingItemType.MIT_RANDOM && !this.attr_.CanChangeColor) return;

	            this.color_ = color;
	        }
	    }, {
	        key: "GetPosition",
	        value: function GetPosition() {
	            return this.node_.GetPosition();
	        }
	        // 获取棋子的下一形态

	    }, {
	        key: "NextChess",
	        value: function NextChess() {
	            return this.next_chess_;
	        }
	        // 设置棋子的下一形态

	    }, {
	        key: "SetNextChess",
	        value: function SetNextChess(chess) {
	            this.next_chess_ = chess;
	        }

	        // 返回当前棋盘

	    }, {
	        key: "GetBoard",
	        value: function GetBoard() {
	            return Mgr.curBoard;
	        }
	    }, {
	        key: "GetEventManager",
	        value: function GetEventManager() {
	            return Mgr.envManager;
	        }
	    }, {
	        key: "AddEventListener",
	        value: function AddEventListener(l, priority) {
	            var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	            var board = this.GetBoard();
	            if (board == null) return false;
	            return Mgr.eventManager.AddEventListener(l, priority, key);
	        }
	    }, {
	        key: "RemoveListener",
	        value: function RemoveListener(l) {
	            Mgr.eventManager.RemoveListener(l);
	        }

	        // 将自己从棋盘移除

	    }, {
	        key: "RemoveSelf",
	        value: function RemoveSelf() {
	            var node = this.node_;
	            if (node) {
	                node.RemoveChess(this.Type());
	            }
	        }
	        // 棋盘若处于平衡态, 则通知棋盘结束当前状态

	    }, {
	        key: "BreakBalance",
	        value: function BreakBalance() {
	            var b = this.GetBoard();
	            if (b) {
	                b.BreakBalance();
	            }
	        }
	    }, {
	        key: "GetNodeAdapter",
	        value: function GetNodeAdapter() {
	            return this.GetNode().adapter();
	        }
	    }, {
	        key: "ValidAttack",
	        value: function ValidAttack(info) {
	            // 不能被around_attack
	            if (info.around_attack) {
	                if (!this.Attribute().CanBeAroundCrushed) return false;
	                return true;
	            }

	            var attack_arr = this.attr_.attack_type;
	            var len = attack_arr.length;
	            for (var i = 0; i < len; i++) {
	                if (info.attack_type == attack_arr[i]) {
	                    return true;
	                }
	            }
	            return false;
	        }
	        // 修改棋子属性时可能同时修改了棋子类型
	        // 需要同步修改node内的bitmap

	    }, {
	        key: "SetAttribute",
	        value: function SetAttribute(attr) {
	            var type = this.attr_.ChessType;
	            this.attr_ = Util.clone(attr);
	            this.InitWithAttr();
	            this.node_.ClearChessTypeBit(type);
	            this.node_.SetChessTypeBit(this.attr_.ChessType);
	        }
	    }, {
	        key: "CreateNextChess",
	        value: function CreateNextChess() {
	            if (this.NextType() != we4p.ChessType.STIT_NONE) {
	                var chess = this.node_.AllocChessType(this.NextType(), this.attach_, this.Color(), false);
	                if (chess) {
	                    this.SetNextChess(chess);
	                }
	            }
	        }
	    }, {
	        key: "InitWithAttr",
	        value: function InitWithAttr() {
	            // 棋子有用户自定义颜色
	            if (this.attr_.hasOwnProperty("Color")) {
	                this.color_ = this.attr_.Color;
	            }
	        }

	        // int PlayHammerDownAnimation(int batch, const GridPosition &pos);

	    }]);

	    return BasicChess;
	}(ChessInterface.ChessInterface);

	// 在基本棋子的基础上, 增加了接收棋盘事件的能力


	var BasicEventChess = function (_BasicChess) {
	    _inherits(BasicEventChess, _BasicChess);

	    function BasicEventChess(type, event_priority) {
	        _classCallCheck(this, BasicEventChess);

	        var _this2 = _possibleConstructorReturn(this, (BasicEventChess.__proto__ || Object.getPrototypeOf(BasicEventChess)).call(this, type));

	        _this2.key_ = -1;
	        _this2.em_ = null;
	        _this2.events_ = ~0;
	        _this2.RemoveFromEventQueue();

	        _this2.event_priority_ = event_priority;
	        return _this2;
	    }

	    _createClass(BasicEventChess, [{
	        key: "PreInit",
	        value: function PreInit(type) {
	            _get(BasicEventChess.prototype.__proto__ || Object.getPrototypeOf(BasicEventChess.prototype), "PreInit", this).call(this, type);
	        }
	    }, {
	        key: "Release",
	        value: function Release() {}
	    }, {
	        key: "copyData",
	        value: function copyData(other) {
	            this.copyDataFrom(other);
	            this.event_priority_ = other.event_priority_;
	        }
	    }, {
	        key: "Init",
	        value: function Init(attach) {
	            _get(BasicEventChess.prototype.__proto__ || Object.getPrototypeOf(BasicEventChess.prototype), "Init", this).call(this, attach);
	            this.AddEventListener(this, this.event_priority_);
	        }
	    }, {
	        key: "OnDestroy",
	        value: function OnDestroy() {}
	    }, {
	        key: "Backup",
	        value: function Backup() {
	            var c = _get(BasicEventChess.prototype.__proto__ || Object.getPrototypeOf(BasicEventChess.prototype), "Backup", this).call(this);
	            c.event_priority_ = this.event_priority_;
	            return c;
	        }
	    }, {
	        key: "Restore",
	        value: function Restore(other) {
	            _get(BasicEventChess.prototype.__proto__ || Object.getPrototypeOf(BasicEventChess.prototype), "Restore", this).call(this, other);
	            this.event_priority_ = other.event_priority_;
	        }
	    }, {
	        key: "GetActiver",
	        value: function GetActiver() {
	            return this;
	        }
	    }, {
	        key: "RemoveFromEventQueue",
	        value: function RemoveFromEventQueue() {
	            if (this.em_) {
	                this.em_.RemoveListener(this);
	            }
	        }
	    }, {
	        key: "OnEvent",
	        value: function OnEvent(e) {}
	    }, {
	        key: "RequestEvent",
	        value: function RequestEvent(events) {
	            this.events_ = events;
	        }
	    }, {
	        key: "events",
	        value: function events() {
	            return this.events_;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {}
	    }]);

	    return BasicEventChess;
	}(BasicChess);

	var BasicModule = function (_PModule) {
	    _inherits(BasicModule, _PModule);

	    function BasicModule() {
	        _classCallCheck(this, BasicModule);

	        // 指定过关条件是否已经完成
	        //map(PASS_CONDITION_TYPE, ChessDesc)
	        var _this3 = _possibleConstructorReturn(this, (BasicModule.__proto__ || Object.getPrototypeOf(BasicModule)).call(this));

	        _this3.pass_contidition_to_chess_map_ = {};
	        return _this3;
	    }

	    _createClass(BasicModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(BasicModule.prototype.__proto__ || Object.getPrototypeOf(BasicModule.prototype), "Init", this).call(this, board);

	            // 注册棋子类型
	            this.RegisterChess(we4p.ChessType.STIT_CANDYPAPER5);
	            this.RegisterChess(we4p.ChessType.STIT_CANDYPAPER4);
	            this.RegisterChess(we4p.ChessType.STIT_CANDYPAPER3);
	            this.RegisterChess(we4p.ChessType.STIT_CANDYPAPER2);
	            this.RegisterChess(we4p.ChessType.STIT_CANDYPAPER1);

	            this.RegisterChess(we4p.ChessType.STIT_CAGE);
	            this.RegisterChess(we4p.ChessType.STIT_CAGE2);
	            this.RegisterChess(we4p.ChessType.STIT_COMMONCLOUD2);
	            this.RegisterChess(we4p.ChessType.STIT_COMMONCLOUD1);
	            this.RegisterChess(we4p.ChessType.STIT_STONECLOUD1);
	            this.RegisterChess(we4p.ChessType.STIT_STONECLOUD2);
	            //RegisterChess(STIT_REDPACKET2);
	            this.RegisterChess(we4p.ChessType.STIT_BOX);
	            this.RegisterChess(we4p.ChessType.STIT_BOX_TWO);
	            this.RegisterChess(we4p.ChessType.STIT_BOX_THREE);
	            this.RegisterChess(we4p.ChessType.STIT_BOX_FOUR);
	            this.RegisterChess(we4p.ChessType.STIT_COLLECT_UNDER_ICE);

	            this.RegisterChess(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA);
	            this.RegisterChess(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA_LEFT);
	            this.RegisterChess(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA_RIGHT);
	            this.RegisterChess(we4p.ChessType.STIT_COLLECT_POINT_IN_SODA_BOTH);

	            this.RegisterChess(we4p.ChessType.STIT_COLLECTBALLOON_POINT);
	            this.RegisterChess(we4p.ChessType.STIT_COLLECTCANDY_POINT);
	            this.RegisterChess(we4p.ChessType.STIT_FENCE_BOTTOM);
	            this.RegisterChess(we4p.ChessType.STIT_FENCE_RIGHT);
	            this.RegisterChess(we4p.ChessType.STIT_NOUSE);
	            this.RegisterChess(we4p.ChessType.STIT_BLUEBERRY);
	            this.RegisterChess(we4p.ChessType.STIT_BAD_BLUEBERRY);
	            this.RegisterChess(we4p.ChessType.CT_NormalUnit);
	            this.RegisterChess(we4p.ChessType.CT_COLLECTBALLOON);
	            this.RegisterChess(we4p.ChessType.CT_CLODS0);
	            this.RegisterChess(we4p.ChessType.CT_CLODS1);
	            //RegisterChess(CT_GIFT);
	            //RegisterChess(CT_TIMEBONUS);
	            //RegisterChess(CT_STEPBONUS);
	            //RegisterChess(CT_COMBINATION1);
	            //RegisterChess(CT_COMBINATION2);
	            //RegisterChess(CT_COMBINATION3);
	            //RegisterChess(STIT_STAR);
	            //RegisterChess(STIT_TEST1);
	            //RegisterChess(STIT_SUN_ENERGY);
	            this.RegisterChess(we4p.ChessType.CT_SodaBottle);

	            this.isUsePool = true;
	            if (this.isUsePool) {
	                this.PreAllocChess(150, function () {
	                    return new BasicChess(null);
	                });
	            }

	            return true;
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            var chess = null;
	            if (this.isUsePool) {
	                chess = this.GetChessFromPool();
	                if (!chess) {
	                    //this.newChessCount ++;
	                    chess = new BasicChess(type);
	                } else {
	                    chess.PreInit(type);
	                }
	            } else {
	                //this.newChessCount ++;
	                chess = new BasicChess(type);
	            }
	            return chess;
	        }
	    }]);

	    return BasicModule;
	}(PModule);

	module.exports = {
	    BasicChess: BasicChess,

	    BasicEventChess: BasicEventChess,

	    BasicModule: BasicModule
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2017/3/14.
	 */
	var PModule = PModule || __webpack_require__(37);

	var we4p = we4p || __webpack_require__(13);
	var config_p = config_p || __webpack_require__(12);
	var weType = weType || __webpack_require__(20);
	var Mgr = Mgr || __webpack_require__(14);
	var puzzle_event = puzzle_event || __webpack_require__(32);
	var Util = Util || __webpack_require__(21);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);

	var IceArea = function () {
	    function IceArea() {
	        _classCallCheck(this, IceArea);

	        this.iBiggestType = weType.IceCollectType.None; //冰块下收集物类型
	        this.m_BeginGridPos = new weType.GridPosition(); //开始坐标
	        this.m_EndGridPos = new weType.GridPosition(); //结束坐标
	        this.iRowCount = 0; //行数
	        this.iColCount = 0; //列数
	    }

	    _createClass(IceArea, [{
	        key: "copyDataFrom",
	        value: function copyDataFrom(target) {
	            this.iBiggestType = target.iBiggestType;
	            this.m_BeginGridPos.row = target.m_BeginGridPos.row;
	            this.m_BeginGridPos.col = target.m_BeginGridPos.col;
	            this.m_EndGridPos.row = target.m_EndGridPos.row;
	            this.m_EndGridPos.col = target.m_EndGridPos.col;
	            this.iRowCount = target.iRowCount; //行数
	            this.iColCount = target.iColCount; //列数
	        }
	    }]);

	    return IceArea;
	}();

	var CollectUnderIce = function CollectUnderIce() {
	    _classCallCheck(this, CollectUnderIce);

	    this.iType = weType.IceCollectType.None; //冰块下收集物类型
	    this.StartRow = -1; //开始行
	    this.StartCol = -1; //开始列
	    this.bHorizontal = false; //是否垂直
	    this.bShow = false; //是否显示，因为是多个点表示一个
	    this.iCount = 0; //由多少块组成
	};

	var DirectionType = {
	    Direction_None: 0,
	    Direction_Left: 1,
	    Direction_UpLeft: 2,
	    Direction_Up: 3,
	    Direction_UpRight: 4,
	    Direction_Right: 5,
	    Direction_RightDown: 6,
	    Direction_Down: 7,
	    Direction_DownLeft: 8

	};

	// 判断指定点静态层是否为深冰
	function IsStaticItemDeepIce(row, col) {
	    var node = Mgr.boardViewer.GetNode(row, col);
	    if (node == null) return false;
	    return node.HasChessType(we4p.ChessType.STIT_DEEPICE);
	}

	function IsStaticItemIceWithBearUnder(row, col) {
	    var node = Mgr.boardViewer.GetNode(row, col);
	    if (node == null) return false;
	    return node.HasChessType(we4p.ChessType.STIT_ICE_BEAR_UNDER);
	}
	function IsStaticItemIceWithoutBearUnder(row, col) {
	    var node = Mgr.boardViewer.GetNode(row, col);
	    if (node == null) return false;
	    return node.HasChessType(we4p.ChessType.STIT_ICE);
	}

	// 判断指定点静态层是否为一层冰块
	function IsStaticItemIce(row, col) {
	    return IsStaticItemIceWithBearUnder(row, col) || IsStaticItemIceWithoutBearUnder(row, col);
	}

	function IsStaticIceArea(row, col) {
	    return IsStaticItemIce(row, col) || IsStaticItemDeepIce(row, col);
	}

	function lessSort(collectUnderIce1, collectUnderIce2) {
	    return collectUnderIce1.iType > collectUnderIce2.iType ? -1 : 1;
	}

	var PuzzleIceBearUtil = function () {
	    _createClass(PuzzleIceBearUtil, null, [{
	        key: "GetInstance",
	        value: function GetInstance() {
	            if (!PuzzleIceBearUtil._instance) {
	                PuzzleIceBearUtil._instance = new PuzzleIceBearUtil();
	            }
	            return PuzzleIceBearUtil._instance;
	        }
	    }]);

	    function PuzzleIceBearUtil() {
	        _classCallCheck(this, PuzzleIceBearUtil);

	        this.m_VecCollectUnderIce = [];
	        this.m_pPuzzleChessBoard = null;
	        this.m_IceArea = [];
	    }

	    // 清除冰块小熊数据


	    _createClass(PuzzleIceBearUtil, [{
	        key: "ClearData",
	        value: function ClearData() {
	            this.m_VecCollectUnderIce = [];
	        }

	        // 初始化

	    }, {
	        key: "Initialize",
	        value: function Initialize(pPuzzleChessBoard) {
	            var collectNum = 3;
	            var configType = [config_p.DESC_TYPE.DESC_ICE_BEAR_LITTLE_NUM, config_p.DESC_TYPE.DESC_ICE_BEAR_MIDDLE_NUM, config_p.DESC_TYPE.DESC_ICE_BEAR_BIG_NUM];
	            var collectType = [weType.IceCollectType.One_And_Two, weType.IceCollectType.Two_And_Three, weType.IceCollectType.Three_And_Five];

	            for (var i = 0; i < collectNum; i++) {
	                var configValue = Mgr.stageManager.GetDescValue(configType[i]);
	                for (var n = 0; n < configValue; n++) {
	                    var pCollectUnderIce = new CollectUnderIce();
	                    pCollectUnderIce.iType = collectType[i];
	                    PuzzleIceBearUtil.GetInstance().PushCollectUnderIce(pCollectUnderIce);
	                }
	            }
	            this.m_pPuzzleChessBoard = pPuzzleChessBoard;
	        }
	    }, {
	        key: "PushCollectUnderIce",
	        value: function PushCollectUnderIce(pCollectUnderIce) {
	            this.m_VecCollectUnderIce.push(pCollectUnderIce);
	        }
	    }, {
	        key: "SortCollectUnderIce",
	        value: function SortCollectUnderIce() {
	            this.m_VecCollectUnderIce.sort(lessSort);
	        }
	    }, {
	        key: "GetCollectUnderIceCount",
	        value: function GetCollectUnderIceCount() {
	            return this.m_VecCollectUnderIce.length;
	        }
	    }, {
	        key: "GetCollectUnderIce",
	        value: function GetCollectUnderIce(index) {
	            if (index > this.m_VecCollectUnderIce.length - 1) {
	                return null;
	            }

	            return this.m_VecCollectUnderIce[index];
	        }
	    }, {
	        key: "SetCollectUnderIceValue",
	        value: function SetCollectUnderIceValue(index, StartRow, StartCol, bHorizontal) {
	            if (index > this.m_VecCollectUnderIce.length - 1) {
	                return;
	            }

	            var item = this.m_VecCollectUnderIce[index];
	            item.StartRow = StartRow;
	            item.StartCol = StartCol;
	            item.bHorizontal = bHorizontal;
	        }

	        //为棋格添加冰块下收集物属性

	    }, {
	        key: "AddAllCollectUnderIce",
	        value: function AddAllCollectUnderIce() {
	            var len = this.m_VecCollectUnderIce.length;

	            for (var i = 0; i < len; i++) {
	                var pCollectUnderIce = this.m_VecCollectUnderIce[i];
	                this.AddCollectUnderIce(pCollectUnderIce);
	            }
	        }

	        //触发收集冰块下收集物

	    }, {
	        key: "CollectUnderIceThing",
	        value: function CollectUnderIceThing(iRow, iCol, iBatchId) {
	            var len = this.m_VecCollectUnderIce.length;

	            for (var i = 0; i < len; i++) {
	                var pCollectUnderIce = this.m_VecCollectUnderIce[i];
	                var iRowCount = new weType.Ref_Adapter(-1);
	                var iColCount = new weType.Ref_Adapter(-1);
	                this.GetCollectUnderIceHeightAndWidth(pCollectUnderIce.iType, pCollectUnderIce.bHorizontal, iRowCount, iColCount);
	                if (iRow >= pCollectUnderIce.StartRow && iCol >= pCollectUnderIce.StartCol && iRow <= pCollectUnderIce.StartRow + (iRowCount.val - 1) && iCol <= pCollectUnderIce.StartCol + (iColCount.val - 1)) {
	                    pCollectUnderIce.iCount--;
	                    if (pCollectUnderIce.iCount == 0) {
	                        ///这里不知道从哪来的，先伪造吧
	                        //var chessData = new we4p.ChessData();
	                        //var emptyChessData = null;
	                        //
	                        //var pos = chessData.pos;
	                        //pos.row = pCollectUnderIce.StartRow;
	                        //pos.col = pCollectUnderIce.StartCol;
	                        //var icrBearData = chessData.ice_bear_data;
	                        //icrBearData.type = pCollectUnderIce.iType;
	                        //icrBearData.horizontal = pCollectUnderIce.bHorizontal;
	                        //emptyChessData = Util.clone(chessData);
	                        //chessData.type = we4p.ChessType.STIT_COLLECT_UNDER_ICE;
	                        //emptyChessData.type = we4p.ChessType.STIT_NONE;

	                        //Animation().PushAnimationData(iBatchId, ANI_DATA(kAniIDStaticExchange,
	                        //    chessData, emptyChessData));
	                        //CurrentScoreManager()->AddCrushChess(STIT_ICE_BEAR_UNDER, 1);
	                        Mgr.aniManager.GenerateCollectIceBearAni(i);
	                        Mgr.passConditionManager.specialCollect(we4p.ChessType.STIT_COLLECT_UNDER_ICE, 1);
	                    }
	                }
	            }
	        }
	    }, {
	        key: "ShowCollectUnderIceThing",
	        value: function ShowCollectUnderIceThing(iRow, iCol, iStartRow, iStartCol, bHorizontal, iType) {
	            var len = this.m_VecCollectUnderIce.length;
	            for (var i = 0; i < len; i++) {
	                var pCollectUnderIce = this.m_VecCollectUnderIce[i];
	                var iRowCount = new weType.Ref_Adapter(-1);
	                var iColCount = new weType.Ref_Adapter(-1);
	                this.GetCollectUnderIceHeightAndWidth(pCollectUnderIce.iType, pCollectUnderIce.bHorizontal, iRowCount, iColCount);
	                if (pCollectUnderIce.StartRow >= 0 && pCollectUnderIce.StartCol >= 0 && !pCollectUnderIce.bShow && iRow >= pCollectUnderIce.StartRow && iCol >= pCollectUnderIce.StartCol && iRow <= pCollectUnderIce.StartRow + (iRowCount.val - 1) && iCol <= pCollectUnderIce.StartCol + (iColCount.val - 1)) {
	                    pCollectUnderIce.bShow = true; //只显示一次
	                    iStartRow.val = pCollectUnderIce.StartRow;
	                    iStartCol.val = pCollectUnderIce.StartCol;
	                    iType.val = pCollectUnderIce.iType;
	                    bHorizontal.val = pCollectUnderIce.bHorizontal;
	                    return true;
	                }
	            }

	            return false;
	        }

	        //重新初始化冰块小熊显示

	    }, {
	        key: "ReSetAllCollectUnderIceThing",
	        value: function ReSetAllCollectUnderIceThing() {
	            var len = this.m_VecCollectUnderIce.length;

	            for (var i = 0; i < len; i++) {
	                var pCollectUnderIce = this.m_VecCollectUnderIce[i];
	                pCollectUnderIce.bShow = false;
	                pCollectUnderIce.iCount = 0;
	            }
	        }
	    }, {
	        key: "GetCollectUnderIceHeightAndWidth",
	        value: function GetCollectUnderIceHeightAndWidth(iType, bHorizontal, iRowCount, iColCount) {
	            switch (iType) {
	                case weType.IceCollectType.One_And_Two:
	                    {
	                        if (bHorizontal) {
	                            iRowCount.val = 1;
	                            iColCount.val = 2;
	                        } else {
	                            iRowCount.val = 2;
	                            iColCount.val = 1;
	                        }
	                    }break;
	                case weType.IceCollectType.Two_And_Three:
	                    {
	                        if (bHorizontal) {
	                            iRowCount.val = 2;
	                            iColCount.val = 3;
	                        } else {
	                            iRowCount.val = 3;
	                            iColCount.val = 2;
	                        }
	                    }break;
	                case weType.IceCollectType.Three_And_Five:
	                    {
	                        if (bHorizontal) {
	                            iRowCount.val = 3;
	                            iColCount.val = 5;
	                        } else {
	                            iRowCount.val = 5;
	                            iColCount.val = 3;
	                        }
	                    }break;

	                default:
	                    break;
	            }
	        }

	        //可能是回退造成以收集的冰块未搜

	    }, {
	        key: "InsertCollectUnderIceThing",
	        value: function InsertCollectUnderIceThing(iRow, iCol) {
	            var len = this.m_VecCollectUnderIce.length;

	            for (var i = 0; i < len; i++) {
	                var pCollectUnderIce = this.m_VecCollectUnderIce[i];
	                var iRowCount = new weType.Ref_Adapter(-1);
	                var iColCount = new weType.Ref_Adapter(-1);
	                this.GetCollectUnderIceHeightAndWidth(pCollectUnderIce.iType, pCollectUnderIce.bHorizontal, iRowCount, iColCount);
	                if (iRow >= pCollectUnderIce.StartRow && iCol >= pCollectUnderIce.StartCol && iRow <= pCollectUnderIce.StartRow + (iRowCount.val - 1) && iCol <= pCollectUnderIce.StartCol + (iColCount.val - 1)) {
	                    pCollectUnderIce.iCount++;
	                }
	            }
	        }
	    }, {
	        key: "AgainStatisticsIceBearData",
	        value: function AgainStatisticsIceBearData() {
	            var rowCount = Mgr.boardViewer.Row();
	            var colCount = Mgr.boardViewer.Col();
	            for (var row = 0; row < rowCount; row++) {
	                for (var col = 0; col < colCount; col++) {
	                    var posNode = Mgr.boardViewer.GetNode(row, col);
	                    if (posNode.IsStaticItemCollectUnderIce()) {
	                        this.InsertCollectUnderIceThing(row, col);
	                    }
	                }
	            }
	        }
	    }, {
	        key: "AddCollectUnderIce",
	        value: function AddCollectUnderIce(pCollectUnderIce) {
	            var iRowCount = new weType.Ref_Adapter(0);
	            var iColCount = new weType.Ref_Adapter(0);
	            this.GetCollectUnderIceHeightAndWidth(pCollectUnderIce.iType, pCollectUnderIce.bHorizontal, iRowCount, iColCount);
	            if (pCollectUnderIce.StartRow < 0 || pCollectUnderIce.StartCol < 0) {
	                return;
	            }

	            for (var iRow = 0; iRow < iRowCount.val; iRow++) {
	                for (var iCol = 0; iCol < iColCount.val; iCol++) {
	                    var pos = new weType.GridPosition(iRow + pCollectUnderIce.StartRow, iCol + pCollectUnderIce.StartCol);
	                    var node = Mgr.boardViewer.GetNode(pos);
	                    if (node == null) continue;
	                    if (!node.HasChessType(we4p.ChessType.STIT_COLLECT_UNDER_ICE)) {
	                        node.AddChess(we4p.ChessType.STIT_COLLECT_UNDER_ICE);
	                    }

	                    if (IsStaticItemIce(iRow + pCollectUnderIce.StartRow, iCol + pCollectUnderIce.StartCol)) {
	                        node.RemoveChess(we4p.ChessType.STIT_ICE);
	                        node.AddChess(we4p.ChessType.STIT_ICE_BEAR_UNDER);
	                    }
	                }
	            }
	        }

	        // 下面的为generate里面的冰块小熊逻辑

	    }, {
	        key: "FindAllIceArea",
	        value: function FindAllIceArea() {
	            this.m_IceArea = [];

	            //找出所有冰块
	            var vectGridPos = [];
	            var pageRow = Mgr.boardViewer.Row();
	            var pageCol = Mgr.boardViewer.Col();

	            for (var iRow = 0; iRow < pageRow; iRow++) {
	                for (var iCol = 0; iCol < pageCol; iCol++) {
	                    if (IsStaticIceArea(iRow, iCol)) {
	                        var gridPos = new weType.GridPosition(iRow, iCol);
	                        vectGridPos.push(gridPos);
	                    }
	                }
	            }

	            do //找出所有 冰块能行成的矩形区域
	            {
	                var iceArea = this.FindGreatestIceArea(vectGridPos);
	                if (iceArea.iColCount >= 0 && iceArea.iRowCount >= 0) {
	                    this.m_IceArea.push(iceArea);
	                }

	                for (var i = 0; i < vectGridPos.length;) {
	                    var bInArea = false;
	                    var itr = vectGridPos[i];
	                    for (var j = 0; j < this.m_IceArea.length; j++) {
	                        var itrArea = this.m_IceArea[j];
	                        if (itr.row >= itrArea.m_BeginGridPos.row && itr.col >= itrArea.m_BeginGridPos.col && itr.row <= itrArea.m_EndGridPos.row && itr.col <= itrArea.m_EndGridPos.col) {
	                            bInArea = true;
	                            break;
	                        }
	                    }
	                    if (bInArea) {
	                        vectGridPos.splice(i, 1);
	                    } else {
	                        i++;
	                    }
	                }
	            } while (vectGridPos.length > 0);
	        }
	    }, {
	        key: "PushAllCollectUnderIceArea",
	        value: function PushAllCollectUnderIceArea() {
	            var vIceAreaStates = [];

	            for (var i = 0; i < this.m_IceArea.length; i++) {
	                var itrIceArea = this.m_IceArea[i];
	                var vState = [];
	                vState.push(itrIceArea);
	                vIceAreaStates.push(vState);
	            }

	            var iSize = this.GetCollectUnderIceCount();
	            for (var i = 0; i < iSize; i++) {
	                var pCollectUnderIce = this.GetCollectUnderIce(i);
	                var iRowCount = 0;
	                var iColCount = 0;
	                if (pCollectUnderIce.iType == weType.IceCollectType.Three_And_Five) {
	                    iRowCount = 3;
	                    iColCount = 5;
	                } else if (pCollectUnderIce.iType == weType.IceCollectType.Two_And_Three) {
	                    iRowCount = 2;
	                    iColCount = 3;
	                } else if (pCollectUnderIce.iType == weType.IceCollectType.One_And_Two) {
	                    iRowCount = 1;
	                    iColCount = 2;
	                }
	                var iAreaIndex = new weType.Ref_Adapter(0);
	                var iColPos = new weType.Ref_Adapter(-1);
	                var iRowPos = new weType.Ref_Adapter(-1);
	                var bHorizontal = new weType.Ref_Adapter(false);
	                //要求按照埋藏物的体积从大到小调用
	                if (this.PushCollectUnderIceArea(iRowCount, iColCount, iAreaIndex, iRowPos, iColPos, bHorizontal, vIceAreaStates)) {
	                    this.SetCollectUnderIceValue(i, iRowPos.val, iColPos.val, bHorizontal.val);
	                }
	            }

	            return true;
	        }

	        //随机移动冰块小熊的位

	    }, {
	        key: "RandomSetCollectUnderIceArea",
	        value: function RandomSetCollectUnderIceArea() {
	            //找出所有冰块
	            var vectGridPos = [];
	            var pageRow = Mgr.boardViewer.Row();
	            var pageCol = Mgr.boardViewer.Col();
	            for (var iRow = 0; iRow < pageRow; iRow++) {
	                for (var iCol = 0; iCol < pageCol; iCol++) {
	                    if (IsStaticIceArea(iRow, iCol)) {
	                        var gridPos = new weType.GridPosition(iRow, iCol);
	                        vectGridPos.push(gridPos);
	                    }
	                }
	            }

	            var iNumber = this.GetCollectUnderIceCount();
	            for (var i = 0; i < iNumber; i++) {
	                var iRowCount = new weType.Ref_Adapter(0);
	                var iColCount = new weType.Ref_Adapter(0);
	                var pCollectUnderIce = this.GetCollectUnderIce(i);
	                this.GetCollectUnderIceHeightAndWidth(pCollectUnderIce.iType, pCollectUnderIce.bHorizontal, iRowCount, iColCount);
	                for (var iRow = 0; iRow < iRowCount.val; iRow++) {
	                    for (var iCol = 0; iCol < iColCount.val; iCol++) {
	                        this.ClearGridInCollectUnderIce(vectGridPos, pCollectUnderIce);
	                    }
	                }
	            }
	            for (var i = 0; i < iNumber; i++) {
	                var pCollectUnderIce = this.GetCollectUnderIce(i);
	                var pCollectUnderIceTemp = Util.clone(pCollectUnderIce);
	                this.AddGridInCollectUnderIce(vectGridPos, pCollectUnderIce);
	                if (this.RandomSetPosition(vectGridPos, pCollectUnderIceTemp)) {
	                    if (pCollectUnderIceTemp.StartRow < 0 || pCollectUnderIceTemp.StartCol < 0) {
	                        //WE4_ASSERT(false);
	                    }
	                    this.ClearGridInCollectUnderIce(vectGridPos, pCollectUnderIceTemp);
	                    this.SetCollectUnderIceValue(i, pCollectUnderIceTemp.StartRow, pCollectUnderIceTemp.StartCol, pCollectUnderIceTemp.bHorizontal);
	                }
	            }
	            return true;
	        }

	        //找出当前最大的冰块区域

	    }, {
	        key: "FindGreatestIceArea",
	        value: function FindGreatestIceArea(gridPos) {
	            //var greatestRect = new weType.GridPosition();
	            var greatestIceArea = new IceArea();
	            var bFirst = true;
	            var len = gridPos.length;

	            for (var i = 0; i < len; i++) {
	                var itrIce = gridPos[i];
	                var iceArea = new IceArea();
	                this.FindMaxArea(gridPos, itrIce.row, itrIce.col, iceArea);
	                if (bFirst) {
	                    greatestIceArea.copyDataFrom(iceArea);
	                    bFirst = false;
	                } else {
	                    if (greatestIceArea.iColCount * greatestIceArea.iRowCount < iceArea.iRowCount * iceArea.iColCount && iceArea.iRowCount != 1 && iceArea.iColCount != 1) {
	                        greatestIceArea.copyDataFrom(iceArea);
	                    }
	                }
	            }
	            return greatestIceArea;
	        }
	    }, {
	        key: "FindMaxArea",
	        value: function FindMaxArea(gridPos, StartRow, StartCol, pIceArea) {
	            var gridOriglePos = [];
	            gridOriglePos.push(new weType.GridPosition(StartRow, StartCol));
	            var searchDirection = {};
	            searchDirection[DirectionType.Direction_Left] = true;
	            searchDirection[DirectionType.Direction_Up] = true;
	            searchDirection[DirectionType.Direction_Right] = true;
	            searchDirection[DirectionType.Direction_Down] = true;
	            searchDirection[DirectionType.Direction_UpLeft] = true;
	            searchDirection[DirectionType.Direction_UpRight] = true;
	            searchDirection[DirectionType.Direction_RightDown] = true;
	            searchDirection[DirectionType.Direction_DownLeft] = true;

	            var gridLeftPos = [];
	            var gridUpPos = [];
	            var gridRightPos = [];
	            var gridDownPos = [];

	            var gridTempLeftPos = []; //用于临时搜索的范围，避免影响当前的搜索
	            var gridTempUpPos = [];
	            var gridTempRightPos = [];
	            var gridTempDownPos = [];

	            gridLeftPos.push(new weType.GridPosition(StartRow, StartCol));
	            gridUpPos.push(new weType.GridPosition(StartRow, StartCol));
	            gridRightPos.push(new weType.GridPosition(StartRow, StartCol));
	            gridDownPos.push(new weType.GridPosition(StartRow, StartCol));

	            var LeftSide = -1;
	            if (!IsStaticIceArea(StartRow, StartCol)) {
	                return false;
	            }

	            var Up = new weType.Ref_Adapter(StartRow);
	            var Left = new weType.Ref_Adapter(StartCol);
	            var Right = new weType.Ref_Adapter(StartCol);
	            var Down = new weType.Ref_Adapter(StartRow);

	            do {
	                gridTempLeftPos = [];
	                gridTempUpPos = [];
	                gridTempRightPos = [];
	                gridTempDownPos = [];
	                if (searchDirection[DirectionType.Direction_Left]) //向左找
	                    {
	                        var len = gridLeftPos.length;

	                        var isize = 0;

	                        for (var i = 0; i < len; i++) {
	                            var itr = gridLeftPos[i];
	                            if (!this.LeftFind(gridPos, itr.row, itr.col)) {
	                                searchDirection[DirectionType.Direction_DownLeft] = false;
	                                searchDirection[DirectionType.Direction_Left] = false; //左边出现不是冰块的位置
	                                this.ClearCol(gridTempLeftPos, itr.col - 1); //找到边界以后清除之前插入的左边的点
	                                LeftSide = itr.col - 1;
	                                break;
	                            } else {
	                                if (searchDirection[DirectionType.Direction_Left]) //可能被上面设置Direction_Left为false终止
	                                    {
	                                        gridTempLeftPos.push(new weType.GridPosition(itr.row, itr.col - 1));
	                                    }
	                                if (isize == gridLeftPos.length - 1 && searchDirection[DirectionType.Direction_UpLeft]) //插入一个棋子即能向左扩展又能向上扩展
	                                    {
	                                        if (this.IsIceCanUse(gridPos, itr.row - 1, itr.col - 1)) {
	                                            gridTempLeftPos.push(new weType.GridPosition(itr.row - 1, itr.col - 1));
	                                            gridTempUpPos.unshift(new weType.GridPosition(itr.row - 1, itr.col - 1));
	                                        } else {
	                                            searchDirection[DirectionType.Direction_UpLeft] = false;
	                                            searchDirection[DirectionType.Direction_Up] = false;
	                                        }
	                                    }
	                            }
	                            isize++;
	                        }
	                    }
	                if (searchDirection[DirectionType.Direction_Up]) //向上找
	                    {
	                        var len = gridUpPos.length;

	                        var isize = 0;

	                        for (var i = 0; i < len; i++) {
	                            var itr = gridUpPos[i];
	                            if (!this.UpFind(gridPos, itr.row, itr.col)) {
	                                searchDirection[DirectionType.Direction_UpLeft] = false;
	                                searchDirection[DirectionType.Direction_Up] = false;
	                                this.ClearRow(gridTempUpPos, itr.row - 1); //找到边界以后清除之前插入的上边的点
	                                this.ClearRow(gridTempLeftPos, itr.row - 1); //找左边界中超出的项
	                                break;
	                            }
	                            if (searchDirection[DirectionType.Direction_Up]) //可能被上面设置Direction_Up为false终止
	                                {
	                                    gridTempUpPos.push(new weType.GridPosition(itr.row - 1, itr.col));
	                                }
	                            if (isize == gridUpPos.length - 1 && searchDirection[DirectionType.Direction_UpRight]) //插入一个棋子即能向右扩展又能向上扩展
	                                {
	                                    if (this.IsIceCanUse(gridPos, itr.row - 1, itr.col + 1)) {
	                                        gridTempUpPos.push(new weType.GridPosition(itr.row - 1, itr.col + 1));
	                                        gridTempRightPos.unshift(new weType.GridPosition(itr.row - 1, itr.col + 1));
	                                    } else {
	                                        searchDirection[DirectionType.Direction_UpRight] = false;
	                                        searchDirection[DirectionType.Direction_Right] = false;
	                                    }
	                                }

	                            isize++;
	                        }
	                    }
	                if (searchDirection[DirectionType.Direction_Right]) //向右找
	                    {
	                        var len = gridRightPos.length;
	                        //std::list<GridPosition>::iterator itr = gridRightPos.begin();
	                        var isize = 0;

	                        for (var i = 0; i < len; i++) {
	                            var itr = gridRightPos[i];
	                            if (!this.RightFind(gridPos, itr.row, itr.col)) {
	                                searchDirection[DirectionType.Direction_UpRight] = false;
	                                searchDirection[DirectionType.Direction_Right] = false;
	                                this.ClearCol(gridTempRightPos, itr.col + 1); //找到边界以后清除之前插入的右边的点
	                                this.ClearCol(gridTempUpPos, itr.col + 1); //找上边界中超出的项
	                                break;
	                            } else {
	                                if (searchDirection[DirectionType.Direction_Right]) //可能被上面设置Direction_Right为false终止
	                                    {
	                                        gridTempRightPos.push(new weType.GridPosition(itr.row, itr.col + 1));
	                                    }
	                                if (isize == gridRightPos.length - 1 && searchDirection[DirectionType.Direction_RightDown]) //插入一个棋子即能向右扩展又能向下扩展
	                                    {
	                                        if (this.IsIceCanUse(gridPos, itr.row + 1, itr.col + 1)) {
	                                            gridTempRightPos.push(new weType.GridPosition(itr.row + 1, itr.col + 1));
	                                            gridTempDownPos.unshift(new weType.GridPosition(itr.row + 1, itr.col + 1));
	                                        } else {
	                                            searchDirection[DirectionType.Direction_RightDown] = false;
	                                            searchDirection[DirectionType.Direction_Down] = false;
	                                        }
	                                    }
	                            }
	                            isize++;
	                        }
	                    }
	                if (searchDirection[DirectionType.Direction_Down]) //向下找
	                    {
	                        var len = gridDownPos.length;

	                        var isize = 0;
	                        for (var i = 0; i < len; i++) {
	                            var itr = gridDownPos[i];
	                            if (!this.DownFind(gridPos, itr.row, itr.col)) {
	                                searchDirection[DirectionType.Direction_RightDown] = false;
	                                searchDirection[DirectionType.Direction_Down] = false;
	                                this.ClearRow(gridTempDownPos, itr.row + 1); //找到边界以后清除之前插入的下边的点
	                                this.ClearRow(gridTempRightPos, itr.row + 1); //找上边界中超出的项
	                                break;
	                            }
	                            if (searchDirection[DirectionType.Direction_Down]) //可能被上面设置Direction_Down为false终止
	                                {
	                                    gridTempDownPos.push(new weType.GridPosition(itr.row + 1, itr.col));
	                                }
	                            if (isize == gridDownPos.length - 1 && searchDirection[DirectionType.Direction_DownLeft]) //插入一个棋子即能向左扩展又能向下扩展
	                                {
	                                    if (this.IsIceCanUse(gridPos, itr.row + 1, itr.col - 1)) {
	                                        gridTempLeftPos.unshift(new weType.GridPosition(itr.row + 1, itr.col - 1));
	                                        gridTempDownPos.push(new weType.GridPosition(itr.row + 1, itr.col - 1));
	                                    } else {
	                                        searchDirection[DirectionType.Direction_DownLeft] = false;
	                                        searchDirection[DirectionType.Direction_Left] = false;
	                                        this.ClearCol(gridTempLeftPos, itr.col - 1); //找到边界以后清除之前插入的左边的点(因为下边是最后处理，所以不会在处理左边）
	                                        this.ClearCol(gridTempUpPos, itr.col - 1);
	                                    }
	                                    if (LeftSide != -1) //因为向下是4个方向的最后.插入的值，可能是左方向扩展的边界
	                                        {
	                                            this.ClearCol(gridTempLeftPos, LeftSide); //找到边界以后清除之前插入的左边的点
	                                            this.ClearCol(gridTempDownPos, LeftSide);
	                                        }
	                                }
	                            isize++;
	                        }
	                    }
	                if (gridTempLeftPos.length > 0 || gridTempUpPos.length > 0 || gridTempRightPos.length > 0 || gridTempDownPos.length > 0) {
	                    gridLeftPos = []; //内圈的东西可以删除
	                    gridUpPos = [];
	                    gridRightPos = [];
	                    gridDownPos = [];
	                    var itrTemp = null;
	                    for (var i = 0; i < gridTempLeftPos.length; i++) {
	                        itrTemp = gridTempLeftPos[i];
	                        gridLeftPos.push(itrTemp);
	                    }
	                    for (var i = 0; i < gridTempUpPos.length; i++) {
	                        itrTemp = gridTempUpPos[i];
	                        gridUpPos.push(itrTemp);
	                    }
	                    for (var i = 0; i < gridTempRightPos.length; i++) {
	                        itrTemp = gridTempRightPos[i];
	                        gridRightPos.push(itrTemp);
	                    }
	                    for (var i = 0; i < gridTempDownPos.length; i++) {
	                        itrTemp = gridTempDownPos[i];
	                        gridDownPos.push(itrTemp);
	                    }

	                    this.FindRect(gridOriglePos, Up, Left, Down, Right);
	                    this.FindRect(gridLeftPos, Up, Left, Down, Right);
	                    this.FindRect(gridUpPos, Up, Left, Down, Right);
	                    this.FindRect(gridRightPos, Up, Left, Down, Right);
	                    this.FindRect(gridDownPos, Up, Left, Down, Right);
	                }
	            } while (searchDirection[DirectionType.Direction_Left] || searchDirection[DirectionType.Direction_Up] || searchDirection[DirectionType.Direction_Right] || searchDirection[DirectionType.Direction_Down]); //所有方向都不能扩张

	            var iceArea = new IceArea();
	            iceArea.iColCount = Right.val - Left.val + 1;
	            iceArea.iRowCount = Down.val - Up.val + 1;
	            iceArea.m_BeginGridPos.row = Up.val;
	            iceArea.m_BeginGridPos.col = Left.val;
	            iceArea.m_EndGridPos.row = Down.val;
	            iceArea.m_EndGridPos.col = Right.val;

	            if (iceArea.iColCount >= 3 && iceArea.iRowCount >= 5 || iceArea.iRowCount >= 3 && iceArea.iColCount >= 5) {
	                iceArea.iBiggestType = weType.IceCollectType.Three_And_Five;
	            } else if (iceArea.iColCount >= 2 && iceArea.iRowCount >= 3 || iceArea.iRowCount >= 2 && iceArea.iColCount >= 3) {
	                iceArea.iBiggestType = weType.IceCollectType.Two_And_Three;
	            } else if (iceArea.iColCount >= 1 && iceArea.iRowCount >= 2 || iceArea.iRowCount >= 1 && iceArea.iColCount >= 2) {
	                iceArea.iBiggestType = weType.IceCollectType.One_And_Two;
	            } else {
	                iceArea.iBiggestType = weType.IceCollectType.None;
	            }
	            pIceArea.copyDataFrom(iceArea);
	            return true;
	        }
	    }, {
	        key: "ClearRow",
	        value: function ClearRow(gridList, iRow) {
	            for (var i = 0; i < gridList.length;) {
	                var itr = gridList[i];
	                if (itr.row == iRow) {
	                    gridList.splice(i, 1);
	                } else {
	                    i++;
	                }
	            }
	        }
	    }, {
	        key: "ClearCol",
	        value: function ClearCol(gridList, iCol) {
	            for (var i = 0; i < gridList.length;) {
	                var itr = gridList[i];
	                if (itr.col == iCol) {
	                    gridList.splice(i, 1);
	                } else {
	                    i++;
	                }
	            }
	        }
	    }, {
	        key: "LeftFind",
	        value: function LeftFind(gridPos, StartRow, StartCol) {
	            if (StartCol - 1 < 0) {
	                return false;
	            }
	            return this.IsIceCanUse(gridPos, StartRow, StartCol - 1);
	        }
	    }, {
	        key: "UpFind",
	        value: function UpFind(gridPos, StartRow, StartCol) {
	            if (StartRow - 1 < 0) {
	                return false;
	            }
	            return this.IsIceCanUse(gridPos, StartRow - 1, StartCol);
	        }
	    }, {
	        key: "RightFind",
	        value: function RightFind(gridPos, StartRow, StartCol) {
	            if (StartCol + 1 > Mgr.boardViewer.Col()) {
	                return false;
	            }
	            return this.IsIceCanUse(gridPos, StartRow, StartCol + 1);
	        }
	    }, {
	        key: "DownFind",
	        value: function DownFind(gridPos, StartRow, StartCol) {
	            if (StartRow + 1 > Mgr.boardViewer.Row()) {
	                return false;
	            }
	            return this.IsIceCanUse(gridPos, StartRow + 1, StartCol);
	        }
	        //判断是否是冰块

	    }, {
	        key: "IsIceCanUse",
	        value: function IsIceCanUse(gridPos, iRow, iCol) {
	            if (iRow < 0 || iCol < 0 || iCol > Mgr.boardViewer.Col() || iRow > Mgr.boardViewer.Row()) {
	                return false;
	            }
	            var bFind = false;
	            var len = gridPos.length;

	            for (var i = 0; i < len; i++) {
	                var itr = gridPos[i];
	                if (itr.row == iRow && itr.col == iCol) {
	                    bFind = true;
	                    break;
	                }
	            }
	            if (!bFind) {
	                return false;
	            }
	            if (!IsStaticIceArea(iRow, iCol)) {
	                return false;
	            }
	            return true;
	        }

	        //清冰块下收集物的位置

	    }, {
	        key: "ClearGridInCollectUnderIce",
	        value: function ClearGridInCollectUnderIce(vectGridPos, pCollectUnderIce) {

	            for (var i = 0; i < vectGridPos.length;) {
	                var itr = vectGridPos[i];
	                var iRowCount = new weType.Ref_Adapter(0);
	                var iColCount = new weType.Ref_Adapter(0);
	                this.GetCollectUnderIceHeightAndWidth(pCollectUnderIce.iType, pCollectUnderIce.bHorizontal, iRowCount, iColCount);
	                if (itr.row >= pCollectUnderIce.StartRow && itr.col >= pCollectUnderIce.StartCol && itr.row <= pCollectUnderIce.StartRow + (iRowCount.val - 1) && itr.col <= pCollectUnderIce.StartCol + (iColCount.val - 1)) {
	                    vectGridPos.splice(i, 1);
	                } else {
	                    i++;
	                }
	            }
	        }

	        //本函数的前置条件，小熊的列数大于行数，也就是按平躺时候来计算rowsize和colsize

	    }, {
	        key: "PushCollectUnderIceArea",
	        value: function PushCollectUnderIceArea(RowSize, ColSize, iAreaIndex, iRowPos, iColPos, bHorizontal, vIceAreaStates) {
	            var IsOk = false;
	            var subindex = 0,
	                index = 0;
	            for (index = 0; index < vIceAreaStates.length; index++) {
	                for (var i = 0; i < vIceAreaStates[index].length; i++) {
	                    if (vIceAreaStates[index][i].iRowCount > vIceAreaStates[index][i].iColCount) {
	                        //先尝试横着摆
	                        if (vIceAreaStates[index][i].iColCount >= ColSize) {
	                            bHorizontal.val = true; //横着摆或者倒着摆的时候为true,不要搞反了
	                            iAreaIndex.val = index;
	                            iRowPos.val = vIceAreaStates[index][i].m_BeginGridPos.row;
	                            iColPos.val = vIceAreaStates[index][i].m_BeginGridPos.col;
	                            IsOk = true;
	                            subindex = i;
	                        } else if (vIceAreaStates[index][i].iColCount >= RowSize && vIceAreaStates[index][i].iRowCount >= ColSize)
	                            //否则竖着摆
	                            {
	                                bHorizontal.val = false; //横着摆或者倒着摆的时候为true,不要搞反了
	                                iAreaIndex.val = index;
	                                iRowPos.val = vIceAreaStates[index][i].m_BeginGridPos.row;
	                                iColPos.val = vIceAreaStates[index][i].m_BeginGridPos.col;
	                                IsOk = true;
	                                subindex = i;
	                            }
	                    } else {
	                        //先尝试竖着摆
	                        if (vIceAreaStates[index][i].iRowCount >= ColSize) {
	                            bHorizontal.val = false; //横着摆或者倒着摆的时候为true,不要搞反了
	                            iAreaIndex.val = index;
	                            iRowPos.val = vIceAreaStates[index][i].m_BeginGridPos.row;
	                            iColPos.val = vIceAreaStates[index][i].m_BeginGridPos.col;
	                            IsOk = true;
	                            subindex = i;
	                        } else if (vIceAreaStates[index][i].iColCount >= ColSize && vIceAreaStates[index][i].iRowCount >= RowSize)
	                            //否则横着摆
	                            {
	                                bHorizontal.val = true; //横着摆或者倒着摆的时候为true,不要搞反了
	                                iAreaIndex.val = index;
	                                iRowPos.val = vIceAreaStates[index][i].m_BeginGridPos.row;
	                                iColPos.val = vIceAreaStates[index][i].m_BeginGridPos.col;
	                                IsOk = true;
	                                subindex = i;
	                            }
	                    }
	                    if (IsOk) break;
	                }
	                if (IsOk) break;
	            }
	            //判断是否需要调整vIceAreaStates
	            if (IsOk) {
	                var newArea1 = new IceArea();
	                var newArea2 = new IceArea();
	                var OldArea = vIceAreaStates[index][subindex];
	                vIceAreaStates[index].splice(subindex, 1);
	                if (bHorizontal.val && (OldArea.iColCount - ColSize) * OldArea.iRowCount > (OldArea.iRowCount - RowSize) * OldArea.iColCount) {
	                    newArea1.iColCount = OldArea.iColCount - ColSize;
	                    newArea1.iRowCount = OldArea.iRowCount;
	                    newArea1.m_BeginGridPos.col = OldArea.m_BeginGridPos.col + ColSize;
	                    newArea1.m_BeginGridPos.row = OldArea.m_BeginGridPos.row;
	                    newArea1.m_EndGridPos.col = OldArea.m_EndGridPos.col;
	                    newArea1.m_EndGridPos.row = OldArea.m_EndGridPos.row;

	                    newArea2.iColCount = ColSize;
	                    newArea2.iRowCount = OldArea.iRowCount - RowSize;
	                    newArea2.m_BeginGridPos.col = OldArea.m_BeginGridPos.col;
	                    newArea2.m_BeginGridPos.row = OldArea.m_BeginGridPos.row + RowSize;
	                    newArea2.m_EndGridPos.col = OldArea.m_BeginGridPos.col + ColSize;
	                    newArea2.m_EndGridPos.row = OldArea.m_EndGridPos.row;
	                } else if (bHorizontal.val && (OldArea.iColCount - ColSize) * OldArea.iRowCount <= (OldArea.iRowCount - RowSize) * OldArea.iColCount) {
	                    newArea2.iColCount = OldArea.iColCount - ColSize;
	                    newArea2.iRowCount = RowSize;
	                    newArea2.m_BeginGridPos.col = OldArea.m_BeginGridPos.col + ColSize;
	                    newArea2.m_BeginGridPos.row = OldArea.m_BeginGridPos.row;
	                    newArea2.m_EndGridPos.col = OldArea.m_EndGridPos.col;
	                    newArea2.m_EndGridPos.row = OldArea.m_BeginGridPos.row + RowSize;

	                    newArea1.iColCount = OldArea.iColCount;
	                    newArea1.iRowCount = OldArea.iRowCount - RowSize;
	                    newArea1.m_BeginGridPos.col = OldArea.m_BeginGridPos.col;
	                    newArea1.m_BeginGridPos.row = OldArea.m_BeginGridPos.row + RowSize;
	                    newArea1.m_EndGridPos.col = OldArea.m_EndGridPos.col;
	                    newArea1.m_EndGridPos.row = OldArea.m_EndGridPos.row;
	                } else if (!bHorizontal.val && (OldArea.iColCount - RowSize) * OldArea.iRowCount <= (OldArea.iRowCount - ColSize) * OldArea.iColCount) {
	                    newArea2.iColCount = OldArea.iColCount - RowSize;
	                    newArea2.iRowCount = ColSize;
	                    newArea2.m_BeginGridPos.col = OldArea.m_BeginGridPos.col + RowSize;
	                    newArea2.m_BeginGridPos.row = OldArea.m_BeginGridPos.row;
	                    newArea2.m_EndGridPos.col = OldArea.m_EndGridPos.col;
	                    newArea2.m_EndGridPos.row = OldArea.m_BeginGridPos.row + ColSize;

	                    newArea1.iColCount = OldArea.iColCount;
	                    newArea1.iRowCount = OldArea.iRowCount - ColSize;
	                    newArea1.m_BeginGridPos.col = OldArea.m_BeginGridPos.col;
	                    newArea1.m_BeginGridPos.row = OldArea.m_BeginGridPos.row + ColSize;
	                    newArea1.m_EndGridPos.col = OldArea.m_EndGridPos.col;
	                    newArea1.m_EndGridPos.row = OldArea.m_EndGridPos.row;
	                } else if (!bHorizontal.val && (OldArea.iColCount - RowSize) * OldArea.iRowCount > (OldArea.iRowCount - ColSize) * OldArea.iColCount) {
	                    newArea1.iColCount = OldArea.iColCount - RowSize;
	                    newArea1.iRowCount = OldArea.iRowCount;
	                    newArea1.m_BeginGridPos.col = OldArea.m_BeginGridPos.col + RowSize;
	                    newArea1.m_BeginGridPos.row = OldArea.m_BeginGridPos.row;
	                    newArea1.m_EndGridPos.col = OldArea.m_EndGridPos.col;
	                    newArea1.m_EndGridPos.row = OldArea.m_EndGridPos.row;

	                    newArea2.iColCount = RowSize;
	                    newArea2.iRowCount = OldArea.iRowCount - ColSize;
	                    newArea2.m_BeginGridPos.col = OldArea.m_BeginGridPos.col;
	                    newArea2.m_BeginGridPos.row = OldArea.m_BeginGridPos.row + ColSize;
	                    newArea2.m_EndGridPos.col = OldArea.m_BeginGridPos.col + RowSize;
	                    newArea2.m_EndGridPos.row = OldArea.m_EndGridPos.row;
	                }
	                if (newArea1.iColCount > 1 && newArea1.iRowCount > 0 || newArea1.iRowCount > 1 && newArea1.iColCount > 0) vIceAreaStates[index].push(newArea1);
	                if (newArea2.iColCount > 1 && newArea2.iRowCount > 0 || newArea2.iRowCount > 1 && newArea2.iColCount > 0) vIceAreaStates[index].push(newArea2);
	            }
	            return IsOk;
	        }

	        //位置改变以后新位置可以放其他冰块下收集物

	    }, {
	        key: "AddGridInCollectUnderIce",
	        value: function AddGridInCollectUnderIce(vectGridPos, pCollectUnderIce) {
	            var iRowCount = new weType.Ref_Adapter(0);
	            var iColCount = new weType.Ref_Adapter(0);
	            this.GetCollectUnderIceHeightAndWidth(pCollectUnderIce.iType, pCollectUnderIce.bHorizontal, iRowCount, iColCount);
	            for (var iRow = 0; iRow < iRowCount.val; iRow++) {
	                for (var iCol = 0; iCol < iColCount.val; iCol++) {
	                    vectGridPos.push(new weType.GridPosition(pCollectUnderIce.StartRow + iRow, pCollectUnderIce.StartCol + iCol));
	                }
	            }
	        }
	    }, {
	        key: "RandomSetPosition",
	        value: function RandomSetPosition(vectGridPos, pCollectUnderIce) {
	            var canotUseIndexs = [];
	            var gridPosTemp = [];
	            Util.arrayDeepCopy(gridPosTemp, vectGridPos);

	            do {
	                var rindex = puzzle_rand.PuzzleRand("ib(645)") % gridPosTemp.length;
	                var gridpos = gridPosTemp[rindex];

	                var iRowCount = new weType.Ref_Adapter(0);
	                var iColCount = new weType.Ref_Adapter(0);
	                var isHorizontal = puzzle_rand.PuzzleRand("ib(650)") % 2;
	                var bHorizontal;
	                if (isHorizontal == 1) {
	                    bHorizontal = false;
	                } else {
	                    bHorizontal = true;
	                }

	                this.GetCollectUnderIceHeightAndWidth(pCollectUnderIce.iType, bHorizontal, iRowCount, iColCount);
	                if (this.CanSetCollectUnderIce(vectGridPos, gridpos, iRowCount.val, iColCount.val)) {
	                    pCollectUnderIce.StartRow = gridpos.row;
	                    pCollectUnderIce.StartCol = gridpos.col;
	                    pCollectUnderIce.bHorizontal = bHorizontal;
	                    return true;
	                }
	                this.GetCollectUnderIceHeightAndWidth(pCollectUnderIce.iType, !bHorizontal, iRowCount, iColCount);
	                if (this.CanSetCollectUnderIce(vectGridPos, gridpos, iRowCount.val, iColCount.val)) {
	                    pCollectUnderIce.StartRow = gridpos.row;
	                    pCollectUnderIce.StartCol = gridpos.col;
	                    pCollectUnderIce.bHorizontal = !bHorizontal;
	                    return true;
	                }
	                gridPosTemp.splice(rindex, 1);
	            } while (gridPosTemp.length > 0);
	            return false;
	        }
	    }, {
	        key: "CanSetCollectUnderIce",
	        value: function CanSetCollectUnderIce(vectGridPos, gridposTest, iRowCount, iColCount) {
	            for (var iRow = 0; iRow < iRowCount; iRow++) {
	                for (var iCol = 0; iCol < iColCount; iCol++) {
	                    var gridPosCollect = new weType.GridPosition();
	                    gridPosCollect.row = gridposTest.row + iRow;
	                    gridPosCollect.col = gridposTest.col + iCol;
	                    var len = vectGridPos.length;

	                    var bCanSet = false;
	                    for (var i = 0; i < len; i++) {
	                        var itr = vectGridPos[i];
	                        if (gridPosCollect.isEqual(itr)) {
	                            bCanSet = true;
	                            continue;
	                        }
	                    }
	                    if (!bCanSet) {
	                        return false;
	                    }
	                }
	            }
	            return true;
	        }
	    }, {
	        key: "FindRect",
	        value: function FindRect(gridList, StartRow, StartCol, EndRow, EndCol) {
	            var len = gridList.length;

	            for (var i = 0; i < len; i++) {
	                var itr = gridList[i];
	                if (StartRow.val > itr.row) {
	                    StartRow.val = itr.row;
	                }
	                if (StartCol.val > itr.col) {
	                    StartCol.val = itr.col;
	                }
	                if (EndRow.val < itr.row) {
	                    EndRow.val = itr.row;
	                }
	                if (EndCol.val < itr.col) {
	                    EndCol.val = itr.col;
	                }
	            }
	            return true;
	        }
	    }]);

	    return PuzzleIceBearUtil;
	}();

	var IceBearModule = function (_PModule) {
	    _inherits(IceBearModule, _PModule);

	    function IceBearModule() {
	        _classCallCheck(this, IceBearModule);

	        return _possibleConstructorReturn(this, (IceBearModule.__proto__ || Object.getPrototypeOf(IceBearModule)).call(this));
	    }

	    _createClass(IceBearModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(IceBearModule.prototype.__proto__ || Object.getPrototypeOf(IceBearModule.prototype), "Init", this).call(this, board);
	            Mgr.eventManager.AddEventListener(new IceBearListener(Mgr.curBoard), puzzle_event.EventPri.kEventPriIceBear, puzzle_event.EventKey.kEventKeyIceBear);
	            return true;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            Mgr.eventManager.RemoveListener(puzzle_event.EventKey.kEventKeyIceBear);
	            _get(IceBearModule.prototype.__proto__ || Object.getPrototypeOf(IceBearModule.prototype), "Release", this).call(this);
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            return null;
	        }
	    }], [{
	        key: "InitializeIceBearSite",
	        value: function InitializeIceBearSite() {
	            PuzzleIceBearUtil.GetInstance().ClearData();
	            PuzzleIceBearUtil.GetInstance().Initialize(Mgr.curBoard);

	            PuzzleIceBearUtil.GetInstance().FindAllIceArea();
	            PuzzleIceBearUtil.GetInstance().SortCollectUnderIce();
	            PuzzleIceBearUtil.GetInstance().PushAllCollectUnderIceArea();
	            PuzzleIceBearUtil.GetInstance().RandomSetCollectUnderIceArea();
	            PuzzleIceBearUtil.GetInstance().AddAllCollectUnderIce();
	        }
	    }]);

	    return IceBearModule;
	}(PModule);

	var IceBearListener = function (_puzzle_event$BoardEv) {
	    _inherits(IceBearListener, _puzzle_event$BoardEv);

	    function IceBearListener(board) {
	        _classCallCheck(this, IceBearListener);

	        var _this2 = _possibleConstructorReturn(this, (IceBearListener.__proto__ || Object.getPrototypeOf(IceBearListener)).call(this));

	        _this2.RequestEvent(puzzle_event.PuzzleEvent.kEventGameStart | puzzle_event.PuzzleEvent.kEventRollback | puzzle_event.PuzzleEvent.kEventRespawn);
	        return _this2;
	    }

	    _createClass(IceBearListener, [{
	        key: "Release",
	        value: function Release() {
	            delete this;
	        }
	    }, {
	        key: "OnEvent",
	        value: function OnEvent(e) {
	            switch (e.event_id) {
	                case puzzle_event.PuzzleEvent.kEventGameStart:
	                    IceBearModule.InitializeIceBearSite();
	                    break;

	                case puzzle_event.PuzzleEvent.kEventRollback:
	                case puzzle_event.PuzzleEvent.kEventRespawn:
	                    PuzzleIceBearUtil.GetInstance().ReSetAllCollectUnderIceThing();
	                    PuzzleIceBearUtil.GetInstance().AgainStatisticsIceBearData();
	                    break;
	            }
	        }
	    }]);

	    return IceBearListener;
	}(puzzle_event.BoardEventListener);

	module.exports = {
	    IceArea: IceArea,
	    CollectUnderIce: CollectUnderIce,
	    PuzzleIceBearUtil: PuzzleIceBearUtil,
	    IceBearModule: IceBearModule,
	    IceBearListener: IceBearListener
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var weType = weType || __webpack_require__(20);
	//var PuzzleChessBoard = PuzzleChessBoard || require("./PuzzleChessBoard");
	var board_viewer = board_viewer || __webpack_require__(29);
	var Mgr = Mgr || __webpack_require__(14);
	var we4p = we4p || __webpack_require__(13);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);

	var DropDirection = {
	    DIRECTION_LEFT_TO_RIGHT: 0,
	    DIRECTION_RIGHT_TO_LEFT: 1
	};

	var PuzzleChessDrop = function () {
	    function PuzzleChessDrop() {
	        _classCallCheck(this, PuzzleChessDrop);

	        //是否初始化
	        this.mSodaRow = 0;
	        this.mMaxDropRow = 0;
	        this.mDropWay = 0;
	        this.mBoardView = null;
	        //掉落过程中，各个掉落点 掉落元素 的个数
	        this.mDropPointCountVec = [];
	    }

	    _createClass(PuzzleChessDrop, [{
	        key: "DoDrop",
	        value: function DoDrop(boardView) {
	            console.log("DoDrop");
	            this.DoDropByDropWay(weType.DropWay.DropWay_Fall, boardView);
	            this.DoDropByDropWay(weType.DropWay.DropWay_Float, boardView);
	        }
	    }, {
	        key: "DoDropByDropWay",
	        value: function DoDropByDropWay(dropWay, boardView) {
	            //console.log("DoDropByDropWay : " + dropWay)
	            if (dropWay != weType.DropWay.DropWay_Fall && dropWay != weType.DropWay.DropWay_Float) return;

	            this.mDropWay = dropWay;
	            this.mBoardView = boardView;
	            this.mSodaRow = Mgr.envManager.GetSodaLine();
	            this.mDropPointCountVec = [];

	            while (1) {
	                if (!this.DoVerticalDrop()) {
	                    if (!this.DoObliqueDrop()) {
	                        break;
	                    }
	                }
	            }
	        }

	        // 格子是否为empty

	    }, {
	        key: "IsNodeStopCollectChess",
	        value: function IsNodeStopCollectChess(pos) {
	            var node = this.mBoardView.GetNode(pos.row, pos.col);

	            if (!node || !node.IsAvailable()) return true;

	            var stopType = [we4p.ChessType.STIT_CANNON, we4p.ChessType.STIT_STONE, we4p.ChessType.STIT_CANDYPOT, we4p.ChessType.STIT_EGG_NEST1, we4p.ChessType.STIT_EGG_NEST2, we4p.ChessType.STIT_ANIMAL_GO_HOME_NEST];
	            for (var i = stopType.length - 1; i >= 0; i--) {
	                if (node.HasChessType(stopType[i])) return true;
	            }
	            return false;
	        }

	        // 棋子属性是否为empty

	    }, {
	        key: "IsChessEmpty",
	        value: function IsChessEmpty(pos) {
	            var node = this.mBoardView.GetNode(pos.row, pos.col);
	            return node && node.GetChess() == null;
	        }

	        //是否是掉落点

	    }, {
	        key: "IsDropPoint",
	        value: function IsDropPoint(chessNode) {
	            if (this.mDropWay == weType.DropWay.DropWay_Fall && chessNode.HasOneOf(we4p.ChessType.STIT_DROP_POINT) || this.mDropWay == weType.DropWay.DropWay_Fall && chessNode.HasOneOf(we4p.ChessType.STIT_DROP_VALVE) || this.mDropWay == weType.DropWay.DropWay_Float && chessNode.HasOneOf(we4p.ChessType.STIT_DROP_POINT_IN_SODA) || this.mDropWay == weType.DropWay.DropWay_Float && chessNode.HasOneOf(we4p.ChessType.STIT_DROP_VALVE_IN_SODA)) return true;
	            return false;
	        }

	        //棋子node到达了pos是否会被收集

	    }, {
	        key: "IsCollectObjectReach",
	        value: function IsCollectObjectReach(chessNode, pos) {
	            var posNode = this.mBoardView.GetNode(pos.row, pos.col);
	            if (!posNode) return false;

	            var bCollectBallonPoint = posNode.HasChessType(we4p.ChessType.STIT_COLLECTBALLOON_POINT) || posNode.IsStaticItemCollectPointInSoda();
	            var bCollectCandyPoint = posNode.HasChessType(we4p.ChessType.STIT_COLLECTCANDY_POINT);

	            if (chessNode.HasChessType(we4p.ChessType.CT_COLLECTBALLOON) && bCollectBallonPoint || chessNode.HasChessType(we4p.ChessType.STIT_SUNNYDOLL1) && bCollectBallonPoint || chessNode.HasChessType(we4p.ChessType.CT_COLLECTCANDY) && bCollectCandyPoint) return true;

	            return false;
	        }
	    }, {
	        key: "IsNodeCanDrop",
	        value: function IsNodeCanDrop(chesNode) {
	            if (!chesNode) return false;

	            if (chesNode.CanDrop(this.mDropWay) || chesNode.CanDropIn(this.mDropWay, true) || chesNode.HasOneOf(we4p.ChessType.STIT_CHONGDONG1) || chesNode.HasOneOf(we4p.ChessType.STIT_CHONGDONG2)) return true;

	            return false;
	        }
	    }, {
	        key: "GetDropRowStart",
	        value: function GetDropRowStart() {
	            var bInScrren = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            var retRow = this.mDropWay == weType.DropWay.DropWay_Fall ? this.mSodaRow - 1 : this.mSodaRow;
	            if (bInScrren && this.mBoardView == Mgr.worldViewer) {
	                //console.log("drop in sreen");
	                var startRow = Mgr.curBoard.GetStartRow();
	                var endRow = startRow + Mgr.boardViewer.Row() - 1;
	                if (this.mDropWay == weType.DropWay.DropWay_Fall && retRow > endRow) retRow = endRow;else if (this.mDropWay == weType.DropWay.DropWay_Float && retRow < startRow) retRow = startRow;
	            }
	            return retRow;
	        }
	    }, {
	        key: "GetDropRowEnd",
	        value: function GetDropRowEnd() {
	            return this.mDropWay == weType.DropWay.DropWay_Fall ? -1 : this.mBoardView.Row();
	        }
	    }, {
	        key: "GetDropRowVar",
	        value: function GetDropRowVar() {
	            return this.mDropWay == weType.DropWay.DropWay_Fall ? -1 : 1;
	        }
	    }, {
	        key: "GetDropColStart",
	        value: function GetDropColStart(direction) {
	            return direction == DropDirection.DIRECTION_LEFT_TO_RIGHT ? 0 : this.mBoardView.Col() - 1;
	        }
	    }, {
	        key: "GetDropColEnd",
	        value: function GetDropColEnd(direction) {
	            return direction == DropDirection.DIRECTION_LEFT_TO_RIGHT ? this.mBoardView.Col() : -1;
	        }
	    }, {
	        key: "GetDropColVar",
	        value: function GetDropColVar(direction) {
	            return direction == DropDirection.DIRECTION_LEFT_TO_RIGHT ? 1 : -1;
	        }
	    }, {
	        key: "GetNextDropRow",
	        value: function GetNextDropRow(nCurGridRow) {
	            if (this.mDropWay == weType.DropWay.DropWay_Fall && nCurGridRow + 1 < this.mSodaRow) return nCurGridRow + 1;else if (this.mDropWay == weType.DropWay.DropWay_Float && nCurGridRow - 1 >= this.mSodaRow) return nCurGridRow - 1;
	            return -1;
	        }
	    }, {
	        key: "SetMaxDropRow",
	        value: function SetMaxDropRow(row) {
	            this.mMaxDropRow = row;
	        }
	    }, {
	        key: "IsUnderMaxDropRow",
	        value: function IsUnderMaxDropRow(row) {
	            if (this.mDropWay == weType.DropWay.DropWay_Fall && row <= this.mMaxDropRow) return true;
	            if (this.mDropWay == weType.DropWay.DropWay_Float && row >= this.mMaxDropRow) return true;
	            return false;
	        }
	    }, {
	        key: "DoVerticalDrop",
	        value: function DoVerticalDrop() {
	            console.log("DoVerticalDrop");
	            var direction = puzzle_rand.PuzzleRand("d(124)") % 2; // ? DropDirection.DIRECTION_LEFT_TO_RIGHT : DropDirection.DIRECTION_RIGHT_TO_LEFT;
	            var mDropStartRow = this.GetDropRowStart();
	            var mDropEndRow = this.GetDropRowEnd();
	            var mDropVarRow = this.GetDropRowVar();
	            var mDropStartCol = this.GetDropColStart(direction);
	            var mDropEndCol = this.GetDropColEnd(direction);
	            var mDropVarCol = this.GetDropColVar(direction);
	            this.SetMaxDropRow(mDropStartRow);

	            var isDrop = false;
	            var row = mDropStartRow;
	            var col = mDropStartCol;
	            while (row != mDropEndRow) {
	                while (col != mDropEndCol) {
	                    var bDropFromDropPoint = false;
	                    var curPos = new weType.GridPosition(row, col);
	                    var curChessNode = this.mBoardView.GetNode(curPos.row, curPos.col);
	                    if (this.IsNodeCanDrop(curChessNode)) {
	                        bDropFromDropPoint = this.TryToCreateChess(curChessNode, bDropFromDropPoint);
	                        var ret = this.TryToDropChess(curPos, bDropFromDropPoint, isDrop);
	                        bDropFromDropPoint = ret.isDropFromPoint;
	                        isDrop = ret.isDrop;
	                        isDrop = this.TryToSlideCollectChess(curChessNode, isDrop);
	                    }
	                    if (!bDropFromDropPoint) col += mDropVarCol;
	                }
	                row += mDropVarRow;
	                col = mDropStartCol;
	            }
	            return isDrop;
	        }
	    }, {
	        key: "DoObliqueDrop",
	        value: function DoObliqueDrop() {
	            console.log("DoObliqueDrop");
	            var direction = puzzle_rand.PuzzleRand("d(157)") % 2; // ? DropDirection.DIRECTION_LEFT_TO_RIGHT : DropDirection.DIRECTION_RIGHT_TO_LEFT;
	            var mDropStartRow = this.GetDropRowStart();
	            var mDropEndRow = this.GetDropRowEnd();
	            var mDropVarRow = this.GetDropRowVar();
	            var mDropStartCol = this.GetDropColStart(direction);
	            var mDropEndCol = this.GetDropColEnd(direction);
	            var mDropVarCol = this.GetDropColVar(direction);
	            this.SetMaxDropRow(mDropStartRow);

	            var row = mDropStartRow;
	            var col = mDropStartCol;

	            while (row != mDropEndRow) {
	                while (col != mDropEndCol) {
	                    do {
	                        var chessPos = new weType.GridPosition(row, col);
	                        var chessNode = this.mBoardView.GetNode(chessPos.row, chessPos.col);
	                        if (!chessNode || !chessNode.CanDrop(this.mDropWay)) break;

	                        if (this.IsCollectObjectReach(chessNode, chessPos)) break;

	                        var nextRow = this.GetNextDropRow(row);
	                        if (this.mBoardView.DropTo(chessPos, new weType.GridPosition(nextRow, chessPos.col - 1)) || this.mBoardView.DropTo(chessPos, new weType.GridPosition(nextRow, chessPos.col + 1))) return true;
	                    } while (0);
	                    col += mDropVarCol;
	                }
	                row += mDropVarRow;
	                col = mDropStartCol;
	            }
	            return false;
	        }
	    }, {
	        key: "TryToCreateChess",
	        value: function TryToCreateChess(chesNode, isDropFromPoint) {
	            if (!chesNode.IsChessGridEmpty() || !chesNode.CanDropIn(this.mDropWay, true)) return isDropFromPoint;

	            if (this.IsDropPoint(chesNode)) {
	                var newDropPoint = new weType.GridPosition(chesNode.GetPosition());
	                this.mDropPointCountVec.push(newDropPoint);
	                //此次掉落过程，获取该掉落点产生棋子个数
	                var len = this.mDropPointCountVec.length;
	                var count = 0;
	                for (var i = 0; i < len; i++) {
	                    if (this.mDropPointCountVec[i].isEqual(newDropPoint)) count++;
	                }
	                chesNode.GenerateNewChess(count, this.mDropWay == weType.DropWay.DropWay_Float, false);
	                isDropFromPoint = true;
	            }
	            return isDropFromPoint;
	        }
	    }, {
	        key: "TryToDropChess",
	        value: function TryToDropChess(curPos, isDropFromPoint, isDrop) {

	            var nextPos = this.GetNextDropNode(this.mBoardView, curPos);

	            while (this.IsUnderMaxDropRow(nextPos.row)) {

	                var chesNode = this.mBoardView.GetNode(curPos.row, curPos.col);

	                //如果气球掉落到收集点就不再移动
	                if (this.IsCollectObjectReach(chesNode, curPos)) {
	                    break;
	                }

	                //掉落到NextGrid
	                if (!this.mBoardView.DropTo(curPos, nextPos)) break;

	                if (this.IsDropPoint(chesNode)) isDropFromPoint = true;

	                curPos.copyData(nextPos);
	                nextPos = this.GetNextDropNode(this.mBoardView, curPos);
	                isDrop = true;

	                //if(chesNode.ChessType() == we4p.ChessType.CT_COLLECTBALLOON){
	                //    console.log(chesNode.GetDropPath());
	                //}
	            }

	            return { isDropFromPoint: isDropFromPoint, isDrop: isDrop };
	        }
	    }, {
	        key: "TryToSlideCollectChess",
	        value: function TryToSlideCollectChess(chessNode, isDrop) {
	            var curPos = chessNode.GetPositionInBoard(this.mBoardView);
	            var nextRow = this.GetNextDropRow(curPos.row);
	            if (!this.IsUnderMaxDropRow(nextRow)) return isDrop;
	            if (!chessNode.HasCollectChess() || !this.IsNodeStopCollectChess(new weType.GridPosition(nextRow, curPos.col))) return isDrop;
	            if (this.IsCollectObjectReach(chessNode, curPos)) return isDrop;

	            //下滑有两个方向
	            var nextPos = [];
	            nextPos[0] = new weType.GridPosition(nextRow, curPos.col + 1);
	            nextPos[1] = new weType.GridPosition(nextRow, curPos.col - 1);

	            for (var i = 0; i < 2; i++) {
	                if (this.IsChessEmpty(nextPos[i]) && this.mBoardView.CanDropTo(curPos, nextPos[i])) {
	                    this.mBoardView.DropTo(curPos, nextPos[i]);
	                    isDrop = true;
	                    return isDrop;
	                }
	            }

	            return isDrop;
	        }
	    }, {
	        key: "GetNextDropNode",
	        value: function GetNextDropNode(boardViewer, pos) {
	            var next = new weType.GridPosition(-1, pos.col);

	            // 首先计算默认的掉落位置
	            if (this.mDropWay == weType.DropWay.DropWay_Fall) {
	                next.row = pos.row + 1;
	                if (next.row >= boardViewer.DropStopRow()) {
	                    next.row = -1;
	                }
	            } else if (this.mDropWay == weType.DropWay.DropWay_Float) {
	                next.row = pos.row - 1;
	                if (next.row < boardViewer.DropStopRow()) {
	                    next.row = -1;
	                }
	            }

	            // 当前棋格上是否有影响掉落的功能
	            var node = boardViewer.GetNode(pos);
	            var adapter = node.adapter();
	            if (adapter.NextNode) {
	                next = adapter.NextNode(node, next);
	                next = boardViewer.Position(next);
	            }
	            return next;
	        }
	    }]);

	    return PuzzleChessDrop;
	}();

	module.exports = PuzzleChessDrop;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);
	var Mgr = Mgr || __webpack_require__(14);

	var ResortSpecialStr = function ResortSpecialStr(t, c) {
	    _classCallCheck(this, ResortSpecialStr);

	    this.type = t;
	    this.color = c;
	};

	var PuzzleRearrange = function () {
	    function PuzzleRearrange(boardView) {
	        _classCallCheck(this, PuzzleRearrange);

	        this.mResortBoardView = boardView;
	        this.mResortFlag = [];
	        this.mResortSpecial = [];
	        this.mPosDispel = [new weType.GridPosition(), new weType.GridPosition(), new weType.GridPosition()];
	        this.mResortNormalNum = 0;
	        this.mColorDispel = 0;
	        this.mChessTypeCount = Mgr.stageManager.MaxColorCount();
	    }

	    _createClass(PuzzleRearrange, [{
	        key: "Rearrange",
	        value: function Rearrange() {
	            this.mResortFlag = new Array(this.mResortBoardView.NodeCount());

	            this.RearrangeBoardInit();
	            var ret = this.FindAndSetDispel();
	            this.ResetSpecialChess();
	            this.ResetNormalChess();
	            return ret;
	        }
	    }, {
	        key: "RearrangeBoardInit",
	        value: function RearrangeBoardInit() {
	            //标记棋格是否需要重排
	            this.mResortNormalNum = 0;
	            this.mResortSpecial = [];
	            for (var row = 0; row < this.mResortBoardView.Row(); row++) {
	                for (var col = 0; col < this.mResortBoardView.Col(); col++) {
	                    var chessNode = this.mResortBoardView.GetNode(row, col);
	                    if (chessNode && chessNode.NeedReArrange()) {
	                        var type = chessNode.GetChess().Type();
	                        var color = chessNode.GetChess().Color();
	                        this.SetResortFlag(row, col, true);
	                        if (type == we4p.ChessType.CT_NormalUnit) {
	                            this.mResortNormalNum++;
	                            chessNode.SetChessColor(weType.MovingItemType.MIT_NONE);
	                        } else {
	                            var specialStr = new ResortSpecialStr(type, color);
	                            this.mResortSpecial.push(specialStr);
	                            chessNode.AddChessType(we4p.ChessType.CT_NormalUnit, null, weType.MovingItemType.MIT_NONE);
	                            chessNode.SetChessColor(weType.MovingItemType.MIT_NONE);
	                        }
	                    } else {
	                        this.SetResortFlag(row, col, false);
	                    }
	                }
	            }
	        }
	    }, {
	        key: "FindAndSetDispel",
	        value: function FindAndSetDispel() {
	            var sumNum = this.mResortBoardView.Row() * this.mResortBoardView.Col();
	            var randNum = puzzle_rand.PuzzleRand("rge(64)") % sumNum;
	            //增加随机
	            for (var i = 0; i < sumNum; i++, randNum++) {
	                var row = Math.floor(randNum % sumNum / this.mResortBoardView.Col());
	                var col = randNum % sumNum % this.mResortBoardView.Col();
	                var pos = new weType.GridPosition(row, col);
	                if (this.CheckDispelAndSetColor(pos, true) || this.CheckDispelAndSetColor(pos, false)) return true;
	            }
	            return false;
	        }
	    }, {
	        key: "CheckDispelAndSetColor",
	        value: function CheckDispelAndSetColor(pos, horizontal) {
	            if (this.CheckDispelPos(pos, horizontal)) if (this.IsStableUnitSameColor(this.mPosDispel, 3)) if (this.SetDispelColor()) return true;
	            return false;
	        }
	    }, {
	        key: "GetSpecialCountByColor",
	        value: function GetSpecialCountByColor(color) {
	            var ret = 0;
	            var len = this.mResortSpecial.length;
	            for (var i = 0; i < len; i++) {
	                if (this.mResortSpecial[i].color == color) ret++;
	            }return ret;
	        }
	    }, {
	        key: "PopSpecialTypeByColor",
	        value: function PopSpecialTypeByColor(color) {
	            var ret = we4p.ChessType.CT_NormalUnit;
	            var len = this.mResortSpecial.length;
	            for (var i = 0; i < len; i++) {
	                if (this.mResortSpecial[i].color == color) {
	                    ret = this.mResortSpecial[i].type;
	                    this.mResortSpecial.splice(i, 1);
	                    break;
	                }
	            }
	            return ret;
	        }
	    }, {
	        key: "SetDispelColor",
	        value: function SetDispelColor() {
	            //可选颜色数量
	            var colorChoice = 1;
	            //如果消除颜色未初始化，则所有颜色都可用
	            if (this.mColorDispel == -1) {
	                this.mColorDispel = puzzle_rand.PuzzleRand("rge(112)") % this.mChessTypeCount;
	                colorChoice = this.mChessTypeCount;
	            }
	            var ret = false;
	            for (var n = 0; n < colorChoice; n++) {
	                var chessNode = new Array(3);
	                var fillChessNum = 0;
	                //尝试填充指定颜色
	                for (var i = 0; i < 3; i++) {
	                    if (this.GetResortFlag(this.mPosDispel[i].row, this.mPosDispel[i].col)) {
	                        chessNode[i] = this.mResortBoardView.GetNode(this.mPosDispel[i]);
	                        chessNode[i].SetChessColor(this.mColorDispel);
	                        fillChessNum++;
	                    } else {
	                        chessNode[i] = null;
	                    }
	                }

	                //预先填充的3个位置不会与周边其他棋子造成消除，则返回成功
	                if (!this.mResortBoardView.CheckJoin(this.mPosDispel[0]) && !this.mResortBoardView.CheckJoin(this.mPosDispel[1]) && !this.mResortBoardView.CheckJoin(this.mPosDispel[2])) {
	                    if (fillChessNum > this.mResortNormalNum) {
	                        var varNum = fillChessNum - this.mResortNormalNum;
	                        if (this.GetSpecialCountByColor(this.mColorDispel) < varNum) continue;
	                        for (var i = 0; i < 3; i++) {
	                            if (chessNode[i]) {
	                                var specialType = this.PopSpecialTypeByColor(this.mColorDispel);
	                                chessNode[i].AddChessType(specialType, null, this.mColorDispel);
	                                if (--varNum <= 0) break;
	                            }
	                        }
	                    }
	                    ret = true;
	                    break;
	                }
	                //未能成功，尝试下一个颜色
	                this.mColorDispel = (this.mColorDispel + 1) % this.mChessTypeCount;
	            }
	            if (!ret && colorChoice == this.mChessTypeCount) {
	                //尝试填充卜卜头
	                var typeArray = [101, 102];
	                for (var t = 0; t < 2; t++) {
	                    if (this.GetSpecialCountByColor(typeArray[t]) >= 3) {
	                        for (var i = 0; i < 3; i++) {
	                            var chessNode = this.mResortBoardView.GetNode(this.mPosDispel[i]);
	                            var specialType = this.PopSpecialTypeByColor(typeArray[t]);
	                            chessNode.AddChessType(specialType);
	                        }
	                        ret = true;
	                        break;
	                    }
	                }
	            }

	            for (var i = 0; i < 3; i++) {
	                if (ret) {
	                    this.SetResortFlag(this.mPosDispel[i].row, this.mPosDispel[i].col, false);
	                } else {
	                    if (this.GetResortFlag(this.mPosDispel[i].row, this.mPosDispel[i].col)) {
	                        var chessNode = this.mResortBoardView.GetNode(this.mPosDispel[i]);
	                        chessNode.SetChessColor(weType.MovingItemType.MIT_NONE);
	                    }
	                }
	            }

	            return ret;
	        }
	    }, {
	        key: "ResetSpecialChess",
	        value: function ResetSpecialChess() {
	            var sumNum = this.mResortBoardView.Row() * this.mResortBoardView.Col();
	            var specialSize = this.mResortSpecial.length;
	            for (var index = 0; index < specialSize; index++) {
	                var special = this.mResortSpecial[index];
	                var randNum = puzzle_rand.PuzzleRand("rge(188)") % sumNum;
	                for (var i = 0; i < sumNum; i++, randNum++) {
	                    var row = Math.floor(randNum % sumNum / this.mResortBoardView.Col());
	                    var col = randNum % sumNum % this.mResortBoardView.Col();
	                    if (!this.GetResortFlag(row, col)) continue;
	                    var chessNode = this.mResortBoardView.GetNode(row, col);
	                    chessNode.AddChessType(special.type, null, special.color);
	                    if (this.mResortBoardView.CheckJoin(new weType.GridPosition(row, col), special.color)) {
	                        chessNode.RemoveChess(special.type);
	                    } else {
	                        this.SetResortFlag(row, col, false);
	                        break;
	                    }
	                }
	            }
	            this.mResortSpecial = [];
	            return true;
	        }
	    }, {
	        key: "ResetNormalChess",
	        value: function ResetNormalChess() {
	            for (var row = 0; row < this.mResortBoardView.Row(); row++) {
	                for (var col = 0; col < this.mResortBoardView.Col(); col++) {
	                    if (this.GetResortFlag(row, col)) {
	                        var color = puzzle_rand.PuzzleRand("rge(212)") % this.mChessTypeCount;
	                        var colorCount = 0;
	                        while (1) {
	                            var chessNode = this.mResortBoardView.GetNode(row, col);
	                            if (chessNode.GetChessByType(we4p.ChessType.CT_NormalUnit)) chessNode.SetChessColor(color);else chessNode.AddChessType(we4p.ChessType.CT_NormalUnit, null, color);
	                            if (!this.mResortBoardView.CheckJoin(new weType.GridPosition(row, col), color)) break;

	                            color = (color + 1) % this.mChessTypeCount;
	                            if (colorCount++ > this.mChessTypeCount) break;
	                        }
	                    }
	                }
	            }return true;
	        }
	    }, {
	        key: "CheckDispelPos",
	        value: function CheckDispelPos(pos, horizontal) {
	            var rowVal = horizontal ? 0 : 1;
	            var colVal = horizontal ? 1 : 0;
	            for (var i = 0; i < 3; i++) {
	                this.mPosDispel[i] = new weType.GridPosition(pos.row + i * rowVal, pos.col + i * colVal);
	                var chessNode = this.mResortBoardView.GetNode(this.mPosDispel[i]);
	                if (!chessNode || !chessNode.GetChess(weType.kChessLayerChess)) return false;
	            }

	            var tempPos1 = this.mPosDispel[0].addPos(new weType.GridPosition(-rowVal, -colVal));
	            var tempPos2 = this.mPosDispel[2].addPos(new weType.GridPosition(rowVal, colVal));
	            if (this.mResortBoardView.CanSlideSwap(this.mPosDispel[0], tempPos1)) {
	                //判断第一个格子是否可左移一位(横向情况)或上移一位(纵向情况)
	                this.mPosDispel[0] = tempPos1;
	                return true;
	            } else if (this.mResortBoardView.CanSlideSwap(this.mPosDispel[2], tempPos2)) {
	                //判断第三个格子是否可右移一位(横向情况)或下移一位(纵向情况)
	                this.mPosDispel[2] = tempPos2;
	                return true;
	            } else {
	                //判断三个格子是否可上下移一位(横向情况)或左右移一位(纵向情况)
	                for (var i = 0; i < 3; i++) {
	                    var temp1 = this.mPosDispel[i].addPos(new weType.GridPosition(-colVal, -rowVal));
	                    var temp2 = this.mPosDispel[i].addPos(new weType.GridPosition(colVal, rowVal));
	                    if (this.mResortBoardView.CanSlideSwap(this.mPosDispel[i], temp1)) {
	                        this.mPosDispel[i] = temp1;
	                        return true;
	                    } else if (this.mResortBoardView.CanSlideSwap(this.mPosDispel[i], temp2)) {
	                        this.mPosDispel[i] = temp2;
	                        return true;
	                    }
	                }
	            }
	            return false;
	        }
	    }, {
	        key: "IsStableUnitSameColor",
	        value: function IsStableUnitSameColor(pos, num) {
	            this.mColorDispel = -1;
	            for (var i = 0; i < num; i++) {
	                //如果是可重排，那就是普通元素，不用特殊处理
	                if (this.GetResortFlag(pos[i].row, pos[i].col)) continue;

	                var chessNode = this.mResortBoardView.GetNode(pos[i]);
	                //如果格子不含可消除的普通元素，则获取的消除位置不成功
	                if (!chessNode || !chessNode.CanJoin3Crush()) return false;

	                if (this.mColorDispel == -1) this.mColorDispel = chessNode.ChessColor();else if (chessNode.ChessColor() != this.mColorDispel) return false;
	            }
	            return true;
	        }
	    }, {
	        key: "SetResortFlag",
	        value: function SetResortFlag(row, col, flag) {
	            var index = row * this.mResortBoardView.Col() + col;
	            this.mResortFlag[index] = flag;
	        }
	    }, {
	        key: "GetResortFlag",
	        value: function GetResortFlag(row, col) {
	            var index = row * this.mResortBoardView.Col() + col;
	            return this.mResortFlag[index];
	        }
	    }]);

	    return PuzzleRearrange;
	}();

	module.exports = PuzzleRearrange;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/11/30.
	 */
	var Mgr = Mgr || __webpack_require__(14);
	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);

	// lastpang

	var LastPang = function () {
	    function LastPang(viewer) {
	        _classCallCheck(this, LastPang);

	        this.viewer_ = viewer;
	        this.current_phase_ = 0;
	    }

	    // 在指定的区域内执行lastpang


	    _createClass(LastPang, [{
	        key: "Do",
	        value: function Do() {
	            var res = 0;

	            // 阶段1, 引爆特殊棋子
	            if (this.current_phase_ == 0) {
	                res = this.Phase1();
	                if (res != 0) {
	                    return res;
	                } else {
	                    // 无特殊棋子, 直接进入下一阶段
	                    this.current_phase_++;
	                }
	            }

	            // 阶段2, 射线
	            if (this.current_phase_ == 1) {
	                this.current_phase_++;
	                res = this.Phase2();
	                if (res != 0) return res;
	            }

	            // 阶段3, 引爆特殊棋子
	            if (this.current_phase_ == 2) {
	                console.log("阶段三");
	                res = this.Phase1();
	                if (res != 0) {
	                    return res;
	                } else {
	                    this.current_phase_++;
	                }
	            }

	            return 0;
	        }

	        // 阶段1
	        // 引爆区域内所有特殊棋子

	    }, {
	        key: "Phase1",
	        value: function Phase1() {
	            //console.log("collectOneDropData Phase1")
	            var node = null;
	            var res = 0;
	            var _v = this.viewer_;
	            var count = _v.NodeCount();
	            for (var i = 0; i < count; i++) {
	                node = _v.GetNodeIndex(i);
	                if (node.HasChessSurface()) continue;
	                var chess = node.GetChess();
	                if (chess == null) continue;
	                if (chess.Attribute().IsSpecialChess1 || chess.Attribute().IsSpecialChess2) {
	                    if (this.CrushNode(node)) {
	                        res++;
	                        break;
	                    }
	                }
	            }
	            return res;
	        }

	        // 阶段2
	        // 射线

	    }, {
	        key: "Phase2",
	        value: function Phase2() {
	            //console.log("collectOneDropData Phase2")
	            var nSteps = Mgr.stageManager.GetRemainStep();

	            // 没有剩余步数
	            if (nSteps == 0) return 0;

	            // 获取所有node
	            var all = [];
	            var node = null;
	            var _v = this.viewer_;
	            var count = _v.NodeCount();
	            for (var i = 0; i < count; i++) {
	                node = _v.GetNodeIndex(i);
	                if (node != null) {
	                    all.push(node);
	                }
	            }

	            //步数奖励UI动画
	            Mgr.aniManager.GenerateStepRewardBeginAnimation();
	            //Animation().CreateAnimation(BatchData(false, true),
	            //    AFUN_1(AnimationFunMgr::LastPangAni));

	            var rayCount = 0;
	            var lastIndex = -1;
	            while (rayCount < nSteps * 2) {
	                if (++rayCount % 2 == 0) Mgr.stageManager.ConsumeStep(1);

	                var targetNode = this.PopRandTargetNode(all);
	                if (!targetNode) break;
	                lastIndex = this.LaunchRayToNode(targetNode, lastIndex);
	            }

	            Mgr.aniManager.GenerateStepRewardEndAnimation();

	            while (Mgr.stageManager.GetRemainStep() > 0) {
	                var remainStep = Mgr.stageManager.GetRemainStep();
	                Mgr.stageManager.ConsumeStep(remainStep);
	                Mgr.scoreManager.addScore(3000 * remainStep);
	                //Animation().CreateAnimation(BatchData(false, true),
	                //    AFUN_1(AnimationFunMgr::LastPangStepChanged,
	                //    StageManager()->GetRemainStep()));
	                //CurrentScoreManager()->AddAttackBonus(Attack_Lastpang);
	                Mgr.aniManager.handleOverageStep();
	            }

	            //Animation().CreateAnimation(BatchData(true),
	            //    AFUN_1(AnimationFunMgr::ActiveAllDestroyAnim));
	            this.viewer_.Sweep();

	            //console.log("collectOneDropData reset round")
	            Mgr.stateMachine.m_DropTimes = -1;
	            Mgr.curBoard.set_dropround(-1);

	            return rayCount;
	        }
	    }, {
	        key: "CrushNode",
	        value: function CrushNode(node) {
	            var batchIndexStruct = new weType.LittleBatchIndexStruct();
	            batchIndexStruct.m_parent_batch_index = 0;
	            //Animation().GetBatchVectorLastBatchIndex();
	            batchIndexStruct.m_self_batch_index = 0;
	            //Animation().GetOneAnimationBatch(BatchData(false, true));
	            var res = this.viewer_.CrushNode(node, we4p.AttackType.Attack_Normal, batchIndexStruct);
	            if (res) {
	                this.viewer_.Sweep();
	            }
	            return res;
	        }
	    }, {
	        key: "PopRandTargetNode",
	        value: function PopRandTargetNode(nodeVec) {
	            var nodeSize = nodeVec.length;
	            var randNum = puzzle_rand.PuzzleRand("lp(151)");
	            for (var i = 0; i < nodeSize; i++) {
	                var index = (randNum + i) % nodeSize;
	                var node = nodeVec[index];
	                node.Sweep(); //例：若表面的糖果纸被消除了，先sweep糖果纸
	                if (node.CanUseLastpang()) {
	                    nodeVec[index] = nodeVec[nodeSize - 1];
	                    nodeVec.pop();
	                    return node;
	                }
	            }
	            return null;
	        }
	    }, {
	        key: "LaunchRayToNode",
	        value: function LaunchRayToNode(targetNode, lastIndex) {
	            var targetType = targetNode.ChessColor();
	            var targetAttr = targetNode.ChessType();
	            var row = targetNode.GetPosition().row;
	            var col = targetNode.GetPosition().col;
	            var nTickCount = targetNode.GetTickbombTick();

	            //var iPointAnimationIdParent = Animation().GetIncrementPointAnimationId();
	            //lastIndex = Animation().GenerateLastPangBigAnimationBatch(
	            //    lastIndex, iPointAnimationIdParent, -5, 0, row, col, LastPangRay,
	            //    targetType, targetAttr, nTickCount);
	            //
	            //Animation().CreateAnimation(BatchData(false, true),
	            //    AFUN_1(AnimationFunMgr::LastPangStepChanged,
	            //    StageManager()->GetRemainStep()));
	            //
	            //// LastPang加分显示
	            //DisplayNumStr str = {row, col, 1500, 1.0f, 1.0f, 1.0f};
	            //Animation().CreateAnimation(BatchData(false, true),
	            //    AFUN_1(AnimationFunMgr::ShowNumOnBoard, str));
	            //Animation().CreateAnimation(
	            //    BatchData(false, true),
	            //    AFUN_1(AnimationFunMgr::SoundAnim, Sound_LastPang_ChessCrush, MIT_NONE,
	            //    CT_None, STIT_NONE));

	            /// = Animation().GetIncrementCrushLittleBatchIndex();
	            //int iPointAnimationId = Animation().GetIncrementPointAnimationId();
	            //int littleBattleIndex = Animation().CreateAnimation(
	            //    BatchData(false, true), AFUN_1(AnimationFunMgr::RayCrushAnim, row, col,
	            //    LastPangRay, iPointAnimationId));

	            var batchIndexStruct = new weType.LittleBatchIndexStruct();
	            batchIndexStruct.m_parent_batch_index = 0;
	            batchIndexStruct.m_self_batch_index = 0;

	            if (this.viewer_.CrushNode(targetNode, we4p.AttackType.Attack_Lastpang, batchIndexStruct)) {
	                //CurrentScoreManager()->AddAttackBonus(Attack_Lastpang);

	            }

	            return lastIndex;
	        }
	    }]);

	    return LastPang;
	}();

	module.exports = LastPang;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var weType = weType || __webpack_require__(20);
	//var PuzzleChessBoard = PuzzleChessBoard || require("./PuzzleChessBoard");
	var board_viewer = board_viewer || __webpack_require__(29);
	var Mgr = Mgr || __webpack_require__(14);
	var we4p = we4p || __webpack_require__(13);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);

	var DropDirection = {
	    DIRECTION_LEFT_TO_RIGHT: 0,
	    DIRECTION_RIGHT_TO_LEFT: 1
	};

	var NodeFillMode = {
	    NFM_Unknow: 0, //未确定

	    NFM_Vertical: 1, //垂直掉
	    NFM_Sideslip: 2, //侧滑（左右皆可）
	    NFM_Sideslip_Left: 3, //左侧滑
	    NFM_Sideslip_Right: 4 };

	var PuzzleChessDropNew = function () {
	    function PuzzleChessDropNew() {
	        _classCallCheck(this, PuzzleChessDropNew);

	        //是否初始化
	        this.mSodaRow = 0;
	        this.mMaxDropRow = 0;
	        this.mDropWay = 0;
	        this.mBoardView = null;
	        //掉落过程中，各个掉落点 掉落元素 的个数
	        this.mDropPointCountVec = [];

	        this.needReCalculate = false;
	    }

	    _createClass(PuzzleChessDropNew, [{
	        key: "resetFillModeFlag",
	        value: function resetFillModeFlag() {
	            if (!PuzzleChessDropNew.isNeedCalculFillMode) {
	                return;
	            }

	            var count = Mgr.worldViewer.NodeCount();
	            for (var i = 0; i < count; i++) {
	                var node = Mgr.worldViewer.GetNodeIndex(i);
	                node.setFillMode(NodeFillMode.NFM_Unknow);
	            }
	        }
	    }, {
	        key: "firstCalculFillMode",
	        value: function firstCalculFillMode(boardView) {
	            PuzzleChessDropNew.isNeedCalculFillMode = true;

	            this.mDropWay = weType.DropWay.DropWay_Fall;
	            this.mBoardView = boardView;
	            this.mSodaRow = Mgr.envManager.GetSodaLine();

	            var mDropStartRow = this.GetDropRowStart();
	            var mDropEndRow = this.GetDropRowEnd();
	            var mDropVarRow = this.GetDropRowVar();

	            this.SetMaxDropRow(mDropStartRow);
	            this.needReCalculate = false;
	            this.CalculateFillModeFlag(this.mDropWay, mDropEndRow - mDropVarRow, mDropStartRow - mDropVarRow, -mDropVarRow);

	            if (Mgr.envManager.GetIsHaveStopDropChess() || Mgr.stageManager.IsSodaGame() || Mgr.stageManager.IsDiggerType()) {
	                PuzzleChessDropNew.isNeedCalculFillMode = true;
	            } else {
	                PuzzleChessDropNew.isNeedCalculFillMode = false;
	            }
	        }
	    }, {
	        key: "DoDrop",
	        value: function DoDrop(boardView) {
	            //console.log("DoDrop");
	            this.resetFillModeFlag();
	            this.DoDropByDropWay(weType.DropWay.DropWay_Fall, boardView);
	            if (Mgr.stageManager.IsSodaGame()) {
	                this.DoDropByDropWay(weType.DropWay.DropWay_Float, boardView);
	            }
	        }
	    }, {
	        key: "DoDropByDropWay",
	        value: function DoDropByDropWay(dropWay, boardView) {
	            //console.log("DoDropByDropWay : " + dropWay)
	            if (dropWay != weType.DropWay.DropWay_Fall && dropWay != weType.DropWay.DropWay_Float) return;

	            this.mDropWay = dropWay;
	            this.mBoardView = boardView;
	            this.mSodaRow = Mgr.envManager.GetSodaLine();
	            this.mDropPointCountVec = [];

	            this.DoVerticalDrop();
	        }

	        // 格子是否为empty

	    }, {
	        key: "IsNodeStopCollectChess",
	        value: function IsNodeStopCollectChess(pos) {
	            var node = this.mBoardView.GetNode(pos.row, pos.col);

	            if (!node || !node.IsAvailable()) return true;

	            var stopType = [we4p.ChessType.STIT_CANNON, we4p.ChessType.STIT_STONE, we4p.ChessType.STIT_CANDYPOT, we4p.ChessType.STIT_EGG_NEST1, we4p.ChessType.STIT_EGG_NEST2, we4p.ChessType.STIT_ANIMAL_GO_HOME_NEST];
	            for (var i = stopType.length - 1; i >= 0; i--) {
	                if (node.HasChessType(stopType[i])) return true;
	            }
	            return false;
	        }

	        // 棋子属性是否为empty

	    }, {
	        key: "IsChessEmpty",
	        value: function IsChessEmpty(pos) {
	            var node = this.mBoardView.GetNode(pos.row, pos.col);
	            return node && node.GetChess() == null;
	        }

	        //是否是掉落点

	    }, {
	        key: "IsDropPoint",
	        value: function IsDropPoint(chessNode) {
	            if (this.mDropWay == weType.DropWay.DropWay_Fall && chessNode.HasOneOf(we4p.ChessType.STIT_DROP_POINT) || this.mDropWay == weType.DropWay.DropWay_Fall && chessNode.HasOneOf(we4p.ChessType.STIT_DROP_VALVE) || this.mDropWay == weType.DropWay.DropWay_Float && chessNode.HasOneOf(we4p.ChessType.STIT_DROP_POINT_IN_SODA) || this.mDropWay == weType.DropWay.DropWay_Float && chessNode.HasOneOf(we4p.ChessType.STIT_DROP_VALVE_IN_SODA)) return true;
	            return false;
	        }

	        //棋子node到达了pos是否会被收集

	    }, {
	        key: "IsCollectObjectReach",
	        value: function IsCollectObjectReach(chessNode, pos) {
	            var posNode = this.mBoardView.GetNode(pos.row, pos.col);
	            if (!posNode) return false;

	            var bCollectBallonPoint = posNode.HasChessType(we4p.ChessType.STIT_COLLECTBALLOON_POINT) || posNode.IsStaticItemCollectPointInSoda();
	            var bCollectCandyPoint = posNode.HasChessType(we4p.ChessType.STIT_COLLECTCANDY_POINT);

	            if (chessNode.HasChessType(we4p.ChessType.CT_COLLECTBALLOON) && bCollectBallonPoint || chessNode.HasChessType(we4p.ChessType.STIT_SUNNYDOLL1) && bCollectBallonPoint || chessNode.HasChessType(we4p.ChessType.CT_COLLECTCANDY) && bCollectCandyPoint) return true;

	            return false;
	        }
	    }, {
	        key: "IsNodeCanDrop",
	        value: function IsNodeCanDrop(chesNode) {
	            if (!chesNode) return false;

	            if (chesNode.CanDrop(this.mDropWay) || chesNode.CanDropIn(this.mDropWay, true) || chesNode.HasOneOf(we4p.ChessType.STIT_CHONGDONG1) || chesNode.HasOneOf(we4p.ChessType.STIT_CHONGDONG2)) return true;

	            return false;
	        }
	    }, {
	        key: "GetDropRowStart",
	        value: function GetDropRowStart() {
	            var bInScrren = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            var retRow = this.mDropWay == weType.DropWay.DropWay_Fall ? this.mSodaRow - 1 : this.mSodaRow;
	            if (bInScrren && this.mBoardView == Mgr.worldViewer) {
	                //console.log("drop in sreen");
	                var startRow = Mgr.curBoard.GetStartRow();
	                var endRow = startRow + Mgr.boardViewer.Row() - 1;
	                if (this.mDropWay == weType.DropWay.DropWay_Fall && retRow > endRow) retRow = endRow;else if (this.mDropWay == weType.DropWay.DropWay_Float && retRow < startRow) retRow = startRow;
	            }
	            return retRow;
	        }
	    }, {
	        key: "GetDropRowEnd",
	        value: function GetDropRowEnd() {
	            return this.mDropWay == weType.DropWay.DropWay_Fall ? -1 : this.mBoardView.Row();
	        }
	    }, {
	        key: "GetDropRowVar",
	        value: function GetDropRowVar() {
	            return this.mDropWay == weType.DropWay.DropWay_Fall ? -1 : 1;
	        }
	    }, {
	        key: "GetDropColStart",
	        value: function GetDropColStart(direction) {
	            return direction == DropDirection.DIRECTION_LEFT_TO_RIGHT ? 0 : this.mBoardView.Col() - 1;
	        }
	    }, {
	        key: "GetDropColEnd",
	        value: function GetDropColEnd(direction) {
	            return direction == DropDirection.DIRECTION_LEFT_TO_RIGHT ? this.mBoardView.Col() : -1;
	        }
	    }, {
	        key: "GetDropColVar",
	        value: function GetDropColVar(direction) {
	            return direction == DropDirection.DIRECTION_LEFT_TO_RIGHT ? 1 : -1;
	        }
	    }, {
	        key: "GetNextDropRow",
	        value: function GetNextDropRow(nCurGridRow) {
	            if (this.mDropWay == weType.DropWay.DropWay_Fall && nCurGridRow + 1 < this.mSodaRow) return nCurGridRow + 1;else if (this.mDropWay == weType.DropWay.DropWay_Float && nCurGridRow - 1 >= this.mSodaRow) return nCurGridRow - 1;
	            return -1;
	        }
	    }, {
	        key: "SetMaxDropRow",
	        value: function SetMaxDropRow(row) {
	            this.mMaxDropRow = row;
	        }
	    }, {
	        key: "IsUnderMaxDropRow",
	        value: function IsUnderMaxDropRow(row) {
	            if (this.mDropWay == weType.DropWay.DropWay_Fall && row <= this.mMaxDropRow) return true;
	            if (this.mDropWay == weType.DropWay.DropWay_Float && row >= this.mMaxDropRow) return true;
	            return false;
	        }
	    }, {
	        key: "DoVerticalDrop",
	        value: function DoVerticalDrop() {
	            //console.log("DoVerticalDrop");
	            var direction = puzzle_rand.PuzzleRand("d(124)") % 2; // ? DropDirection.DIRECTION_LEFT_TO_RIGHT : DropDirection.DIRECTION_RIGHT_TO_LEFT;
	            var mDropStartRow = this.GetDropRowStart();
	            var mDropEndRow = this.GetDropRowEnd();
	            var mDropVarRow = this.GetDropRowVar();
	            var mDropStartCol = this.GetDropColStart(direction);
	            var mDropEndCol = this.GetDropColEnd(direction);
	            var mDropVarCol = this.GetDropColVar(direction);
	            this.SetMaxDropRow(mDropStartRow);
	            this.needReCalculate = false;
	            this.CalculateFillModeFlag(this.mDropWay, mDropEndRow - mDropVarRow, mDropStartRow - mDropVarRow, -mDropVarRow);

	            var isDrop = false;
	            var row = mDropStartRow;
	            var col = mDropStartCol;
	            while (row != mDropEndRow) {
	                while (col != mDropEndCol) {
	                    var bDropFromDropPoint = false;
	                    var curPos = new weType.GridPosition(row, col);
	                    var curChessNode = this.mBoardView.GetNode(curPos.row, curPos.col);
	                    if (this.IsNodeCanDrop(curChessNode)) {
	                        bDropFromDropPoint = this.TryToCreateChess(curChessNode, bDropFromDropPoint);
	                        var ret = this.TryToDropChess(curPos, bDropFromDropPoint, isDrop, curChessNode.HasCollectChess());
	                        bDropFromDropPoint = ret.isDropFromPoint;
	                        isDrop = ret.isDrop;
	                        //isDrop = this.TryToSlideCollectChess(curChessNode, isDrop);
	                    }
	                    if (!bDropFromDropPoint) col += mDropVarCol;
	                }
	                row += mDropVarRow;
	                col = mDropStartCol;
	            }
	            if (this.needReCalculate) {
	                console.log("触发二次掉落逻辑");
	                isDrop = false;
	                row = mDropStartRow;
	                col = mDropStartCol;
	                while (row != mDropEndRow) {
	                    while (col != mDropEndCol) {
	                        var bDropFromDropPoint = false;
	                        var curPos = new weType.GridPosition(row, col);
	                        var curChessNode = this.mBoardView.GetNode(curPos.row, curPos.col);
	                        if (this.IsNodeCanDrop(curChessNode)) {
	                            bDropFromDropPoint = this.TryToCreateChess(curChessNode, bDropFromDropPoint);
	                            var ret = this.TryToDropChess(curPos, bDropFromDropPoint, isDrop);
	                            bDropFromDropPoint = ret.isDropFromPoint;
	                            isDrop = ret.isDrop;
	                            //isDrop = this.TryToSlideCollectChess(curChessNode, isDrop);
	                        }
	                        if (!bDropFromDropPoint) col += mDropVarCol;
	                    }
	                    row += mDropVarRow;
	                    col = mDropStartCol;
	                }
	            }
	            return isDrop;
	        }
	    }, {
	        key: "DoObliqueDrop",
	        value: function DoObliqueDrop() {
	            console.log("DoObliqueDrop");
	            var direction = puzzle_rand.PuzzleRand("d(157)") % 2; // ? DropDirection.DIRECTION_LEFT_TO_RIGHT : DropDirection.DIRECTION_RIGHT_TO_LEFT;
	            var mDropStartRow = this.GetDropRowStart();
	            var mDropEndRow = this.GetDropRowEnd();
	            var mDropVarRow = this.GetDropRowVar();
	            var mDropStartCol = this.GetDropColStart(direction);
	            var mDropEndCol = this.GetDropColEnd(direction);
	            var mDropVarCol = this.GetDropColVar(direction);
	            this.SetMaxDropRow(mDropStartRow);

	            var row = mDropStartRow;
	            var col = mDropStartCol;

	            while (row != mDropEndRow) {
	                while (col != mDropEndCol) {
	                    do {
	                        var chessPos = new weType.GridPosition(row, col);
	                        var chessNode = this.mBoardView.GetNode(chessPos.row, chessPos.col);
	                        if (!chessNode || !chessNode.CanDrop(this.mDropWay)) break;

	                        if (this.IsCollectObjectReach(chessNode, chessPos)) break;

	                        var nextRow = this.GetNextDropRow(row);
	                        if (this.mBoardView.DropTo(chessPos, new weType.GridPosition(nextRow, chessPos.col - 1)) || this.mBoardView.DropTo(chessPos, new weType.GridPosition(nextRow, chessPos.col + 1))) return true;
	                    } while (0);
	                    col += mDropVarCol;
	                }
	                row += mDropVarRow;
	                col = mDropStartCol;
	            }
	            return false;
	        }
	    }, {
	        key: "TryToCreateChess",
	        value: function TryToCreateChess(chesNode, isDropFromPoint) {
	            if (!chesNode.IsChessGridEmpty() || !chesNode.CanDropIn(this.mDropWay, true)) return isDropFromPoint;

	            if (this.IsDropPoint(chesNode)) {
	                var newDropPoint = new weType.GridPosition(chesNode.GetPosition());
	                this.mDropPointCountVec.push(newDropPoint);
	                //此次掉落过程，获取该掉落点产生棋子个数
	                var len = this.mDropPointCountVec.length;
	                var count = 0;
	                for (var i = 0; i < len; i++) {
	                    if (this.mDropPointCountVec[i].isEqual(newDropPoint)) count++;
	                }
	                chesNode.GenerateNewChess(count, this.mDropWay == weType.DropWay.DropWay_Float, false);
	                isDropFromPoint = true;
	            }
	            return isDropFromPoint;
	        }
	    }, {
	        key: "TryToDropChess",
	        value: function TryToDropChess(curPos, isDropFromPoint, isDrop, hasCollectChess) {

	            var nextPos = this.GetNextDropNode(this.mBoardView, curPos);

	            while (this.IsUnderMaxDropRow(nextPos.row)) {

	                var chesNode = this.mBoardView.GetNode(curPos.row, curPos.col);

	                //如果气球掉落到收集点就不再移动
	                if (this.IsCollectObjectReach(chesNode, curPos)) {
	                    break;
	                }

	                //掉落到NextGrid
	                if (!this.mBoardView.DropTo(curPos, nextPos)) {
	                    if (!this.TryToSideSlipDrop(curPos, nextPos, hasCollectChess)) {
	                        break;
	                    }
	                }

	                if (this.IsDropPoint(chesNode)) isDropFromPoint = true;

	                curPos.copyData(nextPos);
	                nextPos = this.GetNextDropNode(this.mBoardView, curPos);
	                isDrop = true;

	                //if(chesNode.ChessType() == we4p.ChessType.CT_COLLECTBALLOON){
	                //    console.log(chesNode.GetDropPath());
	                //}
	            }

	            return { isDropFromPoint: isDropFromPoint, isDrop: isDrop };
	        }
	    }, {
	        key: "TryToSideSlipDrop",
	        value: function TryToSideSlipDrop(curPos, nextPos, hasCollectChes) {
	            var nextRow = this.GetNextDropRow(curPos.row);
	            //下滑有两个方向
	            var sideSlipPos = [];
	            sideSlipPos[0] = new weType.GridPosition(nextRow, curPos.col - 1);
	            sideSlipPos[1] = new weType.GridPosition(nextRow, curPos.col + 1);

	            for (var i = 0; i < 2; i++) {
	                var node = this.mBoardView.GetNode(sideSlipPos[i]);
	                if (node && (node.getFillMode() != NodeFillMode.NFM_Vertical || hasCollectChes && Mgr.envManager.isCollectSkidding) && this.IsChessEmpty(sideSlipPos[i]) && this.mBoardView.CanDropTo(curPos, sideSlipPos[i])) {
	                    this.mBoardView.DropTo(curPos, sideSlipPos[i]);
	                    nextPos.row = sideSlipPos[i].row;
	                    nextPos.col = sideSlipPos[i].col;
	                    return true;
	                }
	            }

	            return false;
	        }
	    }, {
	        key: "TryToSlideCollectChess",
	        value: function TryToSlideCollectChess(chessNode, isDrop) {
	            var curPos = chessNode.GetPositionInBoard(this.mBoardView);
	            var nextRow = this.GetNextDropRow(curPos.row);
	            if (!this.IsUnderMaxDropRow(nextRow)) return isDrop;
	            if (!chessNode.HasCollectChess() || !this.IsNodeStopCollectChess(new weType.GridPosition(nextRow, curPos.col))) return isDrop;
	            if (this.IsCollectObjectReach(chessNode, curPos)) return isDrop;

	            //下滑有两个方向
	            var nextPos = [];
	            nextPos[0] = new weType.GridPosition(nextRow, curPos.col + 1);
	            nextPos[1] = new weType.GridPosition(nextRow, curPos.col - 1);

	            for (var i = 0; i < 2; i++) {
	                if (this.IsChessEmpty(nextPos[i]) && this.mBoardView.CanDropTo(curPos, nextPos[i])) {
	                    this.mBoardView.DropTo(curPos, nextPos[i]);
	                    isDrop = true;
	                    return isDrop;
	                }
	            }

	            return isDrop;
	        }
	    }, {
	        key: "GetNextDropNode",
	        value: function GetNextDropNode(boardViewer, pos) {
	            var next = new weType.GridPosition(-1, pos.col);

	            // 首先计算默认的掉落位置
	            if (this.mDropWay == weType.DropWay.DropWay_Fall) {
	                next.row = pos.row + 1;
	                if (next.row >= boardViewer.DropStopRow()) {
	                    next.row = -1;
	                }
	            } else if (this.mDropWay == weType.DropWay.DropWay_Float) {
	                next.row = pos.row - 1;
	                if (next.row < boardViewer.DropStopRow()) {
	                    next.row = -1;
	                }
	            }

	            // 当前棋格上是否有影响掉落的功能
	            var node = boardViewer.GetNode(pos);
	            var adapter = node.adapter();
	            if (adapter.NextNode) {
	                next = adapter.NextNode(node, next);
	                next = boardViewer.Position(next);
	            }
	            return next;
	        }
	    }, {
	        key: "logFillModeFlag",
	        value: function logFillModeFlag() {
	            var boardView = this.mBoardView;
	            console.log("填充模式阵列：");
	            var row_count = boardView.Row();
	            var col_count = boardView.Col();
	            for (var row = 0; row < row_count; row++) {
	                var rowLog = "" + row + ": ";
	                for (var col = 0; col < col_count; col++) {
	                    var n = boardView.GetNode(row, col);
	                    var flag = n.getFillMode();
	                    rowLog += flag + ",";
	                }
	                console.log(rowLog);
	            }
	        }
	    }, {
	        key: "IsChessCanDropFromNode",
	        value: function IsChessCanDropFromNode(node, way) {
	            if (!node.available_) return false;

	            var flag = true;
	            var c = null;
	            var len = node.chesses_.length;
	            var chess_arr = node.chesses_;
	            for (var i = 0; i < len; i++) {
	                c = chess_arr[i];
	                if (c == null) continue;
	                if (1 == i && c.Attribute().drop_rule == we4p.DropRule.kDropNone) {
	                    flag = false;
	                    break;
	                }
	                // 棋格内存在阻止整个棋格掉落的棋子或功能
	                if (c.Attribute().StopDrop) {
	                    flag = false;
	                    break;
	                }
	            }

	            // 如果是向下掉落且有栅栏, 则禁止
	            if (flag && way == weType.DropWay.DropWay_Fall && node.HasChessType(we4p.ChessType.STIT_FENCE_BOTTOM)) {
	                flag = false;
	            }

	            if (!flag) {
	                Mgr.envManager.SetIsHaveStopDropChess(true);
	            }

	            return flag;
	        }
	    }, {
	        key: "IsChessCanSlideFromNode",
	        value: function IsChessCanSlideFromNode(node, way) {
	            if (!node.available_) return false;

	            var flag = true;

	            if (node.HasOneOf(we4p.ChessType.CT_CLODS0) || node.HasOneOf(we4p.ChessType.CT_CLODS1)) {
	                return false;
	            }

	            return flag;
	        }
	    }, {
	        key: "CalculateFillModeFlag",
	        value: function CalculateFillModeFlag(dropWay, startRow, endRow, varRow) {
	            //先判断是否需要重新计算
	            if (!PuzzleChessDropNew.isNeedCalculFillMode) {
	                return;
	            }

	            console.log("CalculateFillModeFlag");
	            var boardView = this.mBoardView;

	            var startCol = 0;
	            var endCol = boardView.Col();
	            var varCol = 1;

	            var isSecondCalculate = false;
	            if (this.needReCalculate) {
	                isSecondCalculate = true;
	            }

	            var row = startRow;
	            var col = startCol;
	            while (row != endRow) {
	                while (col != endCol) {

	                    do {
	                        var curChessNode = boardView.GetNode(row, col);
	                        var curPos = new weType.GridPosition(row, col);

	                        if (!curChessNode || !curChessNode.IsAvailable()) {
	                            break;
	                        }

	                        if (curChessNode.getFillMode() != NodeFillMode.NFM_Vertical && this.IsDropPoint(curChessNode)) {
	                            curChessNode.setFillMode(NodeFillMode.NFM_Vertical);
	                        }

	                        var nodeCanDropChess = this.IsChessCanDropFromNode(curChessNode, dropWay);

	                        if (curChessNode.getFillMode() == NodeFillMode.NFM_Unknow && !curChessNode.CanDrop(dropWay)) {
	                            break;
	                        }

	                        var nextPos = this.GetNextDropNode(this.mBoardView, curPos);
	                        if (nextPos.row >= 0) {
	                            if (dropWay == weType.DropWay.DropWay_Fall && nextPos.row <= curPos.row) {
	                                this.needReCalculate = true;
	                            } else if (dropWay == weType.DropWay.DropWay_Float && nextPos.row >= curPos.row) {
	                                this.needReCalculate = true;
	                            }
	                        }

	                        if (this.IsUnderMaxDropRow(nextPos.row)) {
	                            var nextNode = boardView.GetNode(nextPos.row, nextPos.col);
	                            if (nextNode && nextNode.IsAvailable() && nextNode.getFillMode() != NodeFillMode.NFM_Vertical) {
	                                if (nodeCanDropChess) {
	                                    //尝试方案（如果上一个格子是可侧滑掉落，下一个格子判定为可侧滑掉落，否则为垂直掉落）
	                                    //if(curChessNode.getFillMode() == NodeFillMode.NFM_Sideslip){
	                                    //    nextNode.setFillMode(NodeFillMode.NFM_Sideslip);
	                                    //}else{
	                                    //    nextNode.setFillMode(NodeFillMode.NFM_Vertical);
	                                    //}
	                                    //原方案（只要上一个格子可以掉落，下一个格子都判定为要垂直掉落）
	                                    nextNode.setFillMode(NodeFillMode.NFM_Vertical);
	                                }
	                            }
	                        }

	                        var nextRow = this.GetNextDropRow(curPos.row);
	                        if (!this.IsUnderMaxDropRow(nextRow)) break;

	                        //下滑有两个方向
	                        var sideSlipPos = [];
	                        sideSlipPos[0] = new weType.GridPosition(nextRow, curPos.col + 1);
	                        sideSlipPos[1] = new weType.GridPosition(nextRow, curPos.col - 1);

	                        for (var i = 0; i < 2; i++) {
	                            var sideSlipNode = boardView.GetNode(sideSlipPos[i]);
	                            if (sideSlipNode && sideSlipNode.IsAvailable() && sideSlipNode.getFillMode() == NodeFillMode.NFM_Unknow) {
	                                if (nodeCanDropChess && this.IsChessCanSlideFromNode(curChessNode, dropWay)) {
	                                    sideSlipNode.setFillMode(NodeFillMode.NFM_Sideslip);
	                                }
	                            }
	                        }
	                    } while (0);

	                    col += varCol;
	                }
	                row += varRow;
	                col = startCol;
	            }

	            if (!isSecondCalculate && this.needReCalculate) {
	                console.log("二次计算填充标志");
	                this.CalculateFillModeFlag(dropWay, startRow, endRow, varRow);
	            }

	            this.logFillModeFlag();
	        }
	    }]);

	    return PuzzleChessDropNew;
	}();

	PuzzleChessDropNew.isNeedCalculFillMode = true;

	module.exports = PuzzleChessDropNew;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/10/30.
	 */

	var PuzzleChessBoard = PuzzleChessBoard || __webpack_require__(27);
	var config_p = config_p || __webpack_require__(12);
	var Mgr = Mgr || __webpack_require__(14);
	var ChessInterface = ChessInterface || __webpack_require__(31);
	var Module_Basic = Module_Basic || __webpack_require__(38);
	var module_special = module_special || __webpack_require__(45);
	var module_we4core = module_we4core || __webpack_require__(46);
	var module_droppoint = module_droppoint || __webpack_require__(47);
	var module_ice = module_ice || __webpack_require__(48);
	var module_wormhole = module_wormhole || __webpack_require__(36);
	var module_digger = module_digger || __webpack_require__(49);
	var module_blueberry = module_blueberry || __webpack_require__(50);
	var module_candypot = module_candypot || __webpack_require__(51);
	var module_icebear = module_icebear || __webpack_require__(39);
	var module_maoqiu = module_maoqiu || __webpack_require__(52);
	var module_mushroom = module_mushroom || __webpack_require__(53);

	var ModuleManager_ = function () {
	    function ModuleManager_() {
	        _classCallCheck(this, ModuleManager_);

	        this.module_map_ = {};
	        this.module_types_ = {};
	        //this.module_id_ = {};
	        this.module_pass_condition_ = {};
	    }

	    _createClass(ModuleManager_, [{
	        key: "Init",
	        value: function Init(board) {
	            // 注册玩法模块
	            var m = null;
	            m = new Module_Basic.BasicModule();
	            m.Init(board);
	            this.AddModule("BasicModule", m);

	            m = new module_special.SpecialChessModule();
	            m.Init(board);
	            this.AddModule("SpecialChessModule", m);

	            m = new module_we4core.WE4CoreModule();
	            m.Init(board);
	            this.AddModule("WE4CoreModule", m);

	            m = new module_droppoint.DropPointModule();
	            m.Init(board);
	            this.AddModule("DropPointModule", m);

	            m = new module_ice.IceModule();
	            m.Init(board);
	            this.AddModule("IceModule", m);

	            m = new module_wormhole.WormholeModule();
	            m.Init(board);
	            this.AddModule("WormholeModule", m);

	            m = new module_blueberry.BlueberryModule();
	            m.Init(board);
	            this.AddModule("BlueberryModule", m);

	            m = new module_mushroom.MushroomModule();
	            m.Init(board);
	            this.AddModule("MushroomModule", m);

	            m = new module_candypot.CandyPotModule();
	            m.Init(board);
	            this.AddModule('CandyPotModule', m);

	            m = new module_digger.DiggerModule();
	            m.Init(board);
	            this.AddModule(module_digger.DiggerModule.sModuleName, m);

	            m = new module_icebear.IceBearModule();
	            m.Init(board);
	            this.AddModule("IceBearModule", m);

	            m = new module_maoqiu.MaoqiuModule();
	            m.Init(board);
	            this.AddModule("MaoqiuModule", m);

	            //std::map<std::string, Module *>::iterator iter = module_map_.begin();
	            //while (iter != module_map_.end()) {
	            //    // 初始化返回false直接释放，如果模块和本玩法不相关可直接返回false
	            //    if (!iter->second->Init(board)) {
	            //            iter->second->Release();
	            //        module_map_.erase(iter++);
	            //    } else {
	            //        iter++;
	            //    }
	            //}
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            this.module_map_ = {};
	            this.module_types_ = {};
	            //this.module_id_ = {};
	        }
	    }, {
	        key: "AddModule",
	        value: function AddModule(module_name, m) {
	            var module_map = this.module_map_;
	            if (!module_map[module_name]) {
	                module_map[module_name] = m;
	            }
	        }
	    }, {
	        key: "FindModule",
	        value: function FindModule() {
	            var module_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

	            return this.module_map_[module_name];
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type) {
	            var backup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            var m = this.module_types_[type];
	            if (m != null) {
	                return m.NewChess(type, backup);
	            }
	            return null;
	        }
	        //NewChessElementID(id, attach) {
	        //
	        //}

	    }, {
	        key: "RegisterChess",
	        value: function RegisterChess(type, m) {
	            var module_types = this.module_types_;
	            if (!module_types[type]) {
	                module_types[type] = m;
	                return true;
	            }
	            return false;
	        }
	        //RegisterElementID(id, m) {
	        //    var module_id = this.module_id_;
	        //    if (!module_id[id]) {
	        //        module_id[id] = m;
	        //        return true;
	        //    }
	        //    return false;
	        //}

	    }, {
	        key: "AddElementMap",
	        value: function AddElementMap(id, type) {}
	    }, {
	        key: "GetModuleData",
	        value: function GetModuleData(name, cmd) {
	            var m = this.FindModule(name);
	            if (m == null) return null;
	            return m.GetModuleData(cmd);
	        }
	    }, {
	        key: "showAllModuleNewCount",
	        value: function showAllModuleNewCount() {
	            var module_map = this.module_map_;
	            module_map["BasicModule"].showNewCount("BasicModule");
	            module_map["SpecialChessModule"].showNewCount("SpecialChessModule");
	            module_map["DropPointModule"].showNewCount("DropPointModule");
	            module_map["IceModule"].showNewCount("IceModule");
	            module_map["WormholeModule"].showNewCount("WormholeModule");
	            module_map["BlueberryModule"].showNewCount("BlueberryModule");
	            module_map["CandyPotModule"].showNewCount("CandyPotModule");
	            module_map["MushroomModule"].showNewCount("MushroomModule");
	        }
	    }]);

	    return ModuleManager_;
	}();

	//module.exports = {
	//    PModule: PModule,
	//
	//    ModuleManager_: ModuleManager_
	//};

	module.exports = ModuleManager_;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by billbao on 2016/10/31.
	 */

	var PModule = PModule || __webpack_require__(37);
	var Module_Basic = Module_Basic || __webpack_require__(38);
	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);
	var Mgr = Mgr || __webpack_require__(14);
	var Util = Util || __webpack_require__(21);
	var puzzle_event = puzzle_event || __webpack_require__(32);
	var EventId = EventId || __webpack_require__(9);

	var LineDirection = {
	    LD_HORIZONTAL: 0,
	    LD_VERTICAL: 1
	};

	var AttackDirection = { AD_LEFT: 0, AD_RIGHT: 1, AD_UP: 2, AD_DOWN: 3, AD_NUM: 4 };

	var SpecialCrushData = function SpecialCrushData() {
	    this.attackType = 0;
	    this.chessColor = 0;
	    this.chessSpecial = 0;
	};

	var DirectionPos = [];
	DirectionPos.push(new weType.GridPosition(0, -1));
	DirectionPos.push(new weType.GridPosition(0, 1));
	DirectionPos.push(new weType.GridPosition(-1, 0));
	DirectionPos.push(new weType.GridPosition(1, 0));

	function CrushGasPhase2(c, info) {
	    var chess = c;
	    var ev = new puzzle_event.CrushNodeEvent();
	    ev.src = new weType.GridPosition(info.src);
	    ev.attack_type = we4p.AttackType.Attack_Gas;
	    ev.ani_batch_id = info.batch.m_self_batch_index;

	    var color = puzzle_rand.PuzzleRand("sp(41)") % Mgr.stageManager.MaxColorCount();

	    var pos = chess.GetPosition();
	    var row = pos.row;
	    var col = pos.col;
	    var iTotalRow = Mgr.boardViewer.Row();
	    var iTotalCol = Mgr.boardViewer.Col();

	    for (var tarRow = 0; tarRow < iTotalRow; tarRow++) {
	        for (var tarCol = 0; tarCol < iTotalCol; tarCol++) {
	            if (tarRow == row && tarCol == col) {
	                continue; //特效棋子本身
	            }

	            var puzzleThisChessNode = Mgr.boardViewer.GetNode(tarRow, tarCol);
	            if (puzzleThisChessNode.IsChessGridEmpty() || color != puzzleThisChessNode.ChessColor()) {
	                continue; //不是指定的棋子种类
	            }

	            // 不攻击已经被攻击过的棋子
	            if (puzzleThisChessNode.GetMark() > 0) {
	                continue;
	            }

	            if (puzzleThisChessNode.ChessColor() == color) {
	                if (we4p.ChessType.CT_NormalUnit == puzzleThisChessNode.ChessType() || we4p.ChessType.CT_SodaBottle == puzzleThisChessNode.ChessType()
	                /*
	                CT_TIMEBONUS == puzzleThisChessNode->ChessType() ||
	                CT_TICKBOMB == puzzleThisChessNode->ChessType() ||
	                CT_GIFT == puzzleThisChessNode->ChessType() ||
	                CT_STEPBONUS == puzzleThisChessNode->ChessType() ||
	                CT_Chameleon == puzzleThisChessNode->ChessType() ||
	                CT_ANIMAL_GO_HOME_MONSTER1 == puzzleThisChessNode->ChessType() ||
	                CT_ANIMAL_GO_HOME_MONSTER2 == puzzleThisChessNode->ChessType()*/
	                ) {
	                        // 播放飞的动画
	                        if (puzzleThisChessNode.Crush(info) && puzzleThisChessNode.GetMark()) {
	                            //Animation().PushBombOnePointAnimation(
	                            //        info->batch.m_self_batch_index,
	                            //        puzzleThisChessNode->ToChessData(), row, col,
	                            //    Bomb_Unit_Fly_Gas_type);
	                        }
	                    } else {
	                    puzzleThisChessNode.Crush(info);
	                }

	                ev.nodes.push(new weType.GridPosition(puzzleThisChessNode.GetPosition()));
	            }
	        }
	    }

	    Mgr.eventManager.Forward(ev);
	}

	function SingleCrushPhase2(c, info) {
	    var ev = new puzzle_event.CrushNodeEvent();
	    var chess = c;
	    if (!chess) {
	        //WE4_ASSERT(false);
	        return;
	    }

	    switch (info.attack_type) {
	        case we4p.AttackType.Attack_Hurricane:
	        case we4p.AttackType.Attack_HorizontalShockWave:
	        case we4p.AttackType.Attack_VerticalShockWave:
	            ev.src = new weType.GridPosition(chess.GetPosition());
	            ev.attack_type = info.attack_type;
	            ev.ani_batch_id = info.batch.m_self_batch_index;
	            ev.nodes = SpecialMethod.GetAttackRange(ev.attack_type, info.src);
	            SpecialMethod.CrushNodesByPosVec(info, ev.nodes);
	            Mgr.eventManager.Forward(ev);
	            break;
	        case we4p.AttackType.Attack_Gas:
	            CrushGasPhase2(c, info);
	            break;
	        default:
	            break;
	    }
	}

	function CombinationCrushPhase2(c, info, data) {
	    var chess = c;
	    switch (data.attackType) {
	        case we4p.AttackType.Attack_GasSpecial:
	            chess.MarkAllSpecial(info, data.chessColor, data.chessSpecial);
	            break;

	        case we4p.AttackType.Attack_Gas2Gas:
	            chess.MarkGas2Gas(info);
	            break;

	        case we4p.AttackType.Attack_Gas:
	            chess.MarkGasExplosion(info, data.chessColor);
	            break;

	        case we4p.AttackType.Attack_CrossShockWave:
	        case we4p.AttackType.Attack_BigHurricane:
	        case we4p.AttackType.Attack_ThickCrossShockWave:
	            chess.MarkByAttackType(info, data.attackType);
	            break;
	        default:
	            break;
	    }
	}

	// 判断当前棋格能否被幽灵+特殊棋子攻击
	// 返回true表示该棋格的棋子需要被替换为特殊棋子
	function MarkGasSpeicalChess(node, info, color, specialVec, posVec) {
	    if (node.ChessColor() != color || node.IsStaticItemCandyPaper()) return false;

	    if (node.GetMark() /* || node->HasChessType(STIT_PAVER)*/) return false;

	    var next_info = Util.clone(info);
	    next_info.attack_type = we4p.AttackType.Attack_GasSpecial;

	    var has_surface = node.HasChessSurface();
	    if (has_surface) {
	        if (node.Crush(next_info)) posVec.push(new weType.GridPosition(node.GetPosition()));
	        return false;
	    }

	    var chess = node.GetLayer(weType.kChessLayerChess);
	    if (chess.Attribute().IsSpecialChess1) {
	        node.MarkChess(info.join); //防止被其他冲击波再次冲击
	        specialVec.push(node);
	        posVec.push(new weType.GridPosition(node.GetPosition()));
	        return false;
	    } else if (node.CanUseSpecial()) {
	        chess.ActiveChessBuffer(info.batch.m_self_batch_index, false);
	        specialVec.push(node);
	        posVec.push(new weType.GridPosition(node.GetPosition()));
	        return true;
	    } else {
	        if (node.Crush(next_info)) {
	            node.Sweep();
	            posVec.push(new weType.GridPosition(node.GetPosition()));
	        }
	        return false;
	    }
	}

	//主要功能：接收消除棋子信息，如消除四个或以上棋子，生成特殊棋子

	var SpecialChessListener = function (_puzzle_event$BoardEv) {
	    _inherits(SpecialChessListener, _puzzle_event$BoardEv);

	    function SpecialChessListener() {
	        _classCallCheck(this, SpecialChessListener);

	        //这里要监听的是kEventCrushNode消息
	        var _this = _possibleConstructorReturn(this, (SpecialChessListener.__proto__ || Object.getPrototypeOf(SpecialChessListener)).call(this));

	        _this.RequestEvent(puzzle_event.PuzzleEvent.kEventCrushNode);
	        return _this;
	    }

	    _createClass(SpecialChessListener, [{
	        key: "OnEvent",
	        value: function OnEvent(e) {
	            //console.log("SpecialChessListener.OnEvent ");
	            //console.log(e);
	            switch (e.event_id) {
	                case puzzle_event.PuzzleEvent.kEventCrushNode:
	                    this.OnCrushNode(e);
	                    break;
	            }
	        }
	    }, {
	        key: "OnCrushNode",
	        value: function OnCrushNode(ev) {
	            if (ev.attack_type != we4p.AttackType.Attack_Normal || ev.around_attack) return;

	            if (ev.nodes.length < 4) return;

	            var src_node = Mgr.boardViewer.GetNode(ev.src.row, ev.src.col);
	            if (!src_node || src_node.ChessColor() < weType.MovingItemType.MIT_0 || src_node.ChessColor() > weType.MovingItemType.MIT_5) return;

	            this.AddSpecialChess(ev.src, ev.nodes, ev.ani_batch_id);
	        }
	    }, {
	        key: "AddSpecialChess",
	        value: function AddSpecialChess(src, posVec, batch) {
	            //console.log("调用合成特殊棋子逻辑");
	            var specialType = this.TryGeneralSpecialChess(posVec);
	            if (specialType == we4p.ChessType.STIT_NONE) return;

	            // 优先使用specialPos, 如果不行, 就再在nodes里面选一个合适的
	            var specialNode = this.TryFindNoSpeicalItemData(src, posVec);
	            if (!specialNode) return;

	            //console.log("AddSpecialChess type:" + specialType);
	            //if (batch == -1)
	            //    batch = Animation().GetBatchVectorLastBatchIndex();

	            var oldChessDATA, newChessData;
	            oldChessDATA = specialNode.ToChessData();

	            // 清理之前的棋子
	            var color = specialNode.ChessColor();
	            specialNode.MarkSweepByLayer();
	            specialNode.AddChess(specialType, color);

	            newChessData = specialNode.ToChessData();
	            Mgr.dataCollector.addSpecialChess(newChessData);
	            //Animation().PushAnimationFun(batch, AFUN_1(AnimationFunMgr::MovingChangeAnim,
	            //    oldChessDATA, newChessData));
	        }
	    }, {
	        key: "CanGenerateSpecial",
	        value: function CanGenerateSpecial(node) {
	            if (!node) return false;
	            if (node.HasSpecialChess() || node.HasChessType(we4p.ChessType.CT_GIFT) ||
	            /*node.IsAnimalGoHomeNest() ||*/node.HasChessSurface() /*|| node.HasOneOf(STIT_BIG_BELL, STIT_Chameleon_BIG_BELL)*/) return false;
	            return true;
	        }
	    }, {
	        key: "TryFindNoSpeicalItemData",
	        value: function TryFindNoSpeicalItemData(pos, CandidateItems) {
	            var sizeNum = CandidateItems.length;
	            var randIndex = puzzle_rand.PuzzleRand("sp(260)");
	            for (var i = 0; i <= sizeNum; i++, randIndex++) {
	                var posNode = Mgr.boardViewer.GetNode(pos.row, pos.col);
	                if (this.CanGenerateSpecial(posNode)) return posNode;
	                randIndex = randIndex % sizeNum;
	                pos = CandidateItems[randIndex];
	            }
	            return null;
	        }
	    }, {
	        key: "GeneralSpecialChess",
	        value: function GeneralSpecialChess(pos) {
	            var specialType = we4p.ChessType.STIT_NONE;
	            var color = Mgr.boardViewer.GetColorByPos(pos);
	            var up = pos.row;
	            var down = pos.row;
	            var left = pos.col;
	            var right = pos.col;
	            while (Mgr.boardViewer.GetColorByPos(new weType.GridPosition(pos.row, left - 1)) == color) {
	                --left;
	            }while (Mgr.boardViewer.GetColorByPos(new weType.GridPosition(pos.row, right + 1)) == color) {
	                ++right;
	            }while (Mgr.boardViewer.GetColorByPos(new weType.GridPosition(up - 1, pos.col)) == color) {
	                --up;
	            }while (Mgr.boardViewer.GetColorByPos(new weType.GridPosition(down + 1, pos.col)) == color) {
	                ++down;
	            }if (right - left >= 4 || down - up >= 4) specialType = we4p.ChessType.CT_SpecialGas;else if (right - left >= 2 && down - up >= 2) specialType = we4p.ChessType.CT_SpecialHurricane;else if (right - left >= 3) specialType = we4p.ChessType.CT_SpecialVerticalShockWave;else if (down - up >= 3) specialType = we4p.ChessType.CT_SpecialHorizontalShockWave;
	            return specialType;
	        }
	    }, {
	        key: "TryGeneralSpecialChess",
	        value: function TryGeneralSpecialChess(posVec) {
	            var maxSpecialType = we4p.ChessType.STIT_NONE;
	            var posSize = posVec.length;
	            for (var i = 0; i < posSize; i++) {
	                var specialType = this.GeneralSpecialChess(posVec[i]);
	                if (specialType > maxSpecialType) maxSpecialType = specialType;
	            }
	            return maxSpecialType;
	        }
	    }]);

	    return SpecialChessListener;
	}(puzzle_event.BoardEventListener);

	var SpecialMethod = {
	    mCheckStopAttackFlag: false,

	    //计算特殊棋子或特殊组合的攻击范围
	    GetAttackRange: function GetAttackRange(attackType, src) {
	        var posVec = [];
	        var flagSave = this.mCheckStopAttackFlag;
	        this.mCheckStopAttackFlag = true;
	        if (attackType == we4p.AttackType.Attack_HorizontalShockWave) {
	            this.GetAttackRangeInLine(src, LineDirection.LD_HORIZONTAL, posVec);
	        } else if (attackType == we4p.AttackType.Attack_VerticalShockWave) {
	            this.GetAttackRangeInLine(src, LineDirection.LD_VERTICAL, posVec);
	        } else if (attackType == we4p.AttackType.Attack_CrossShockWave) {
	            this.GetAttackRangeInLine(src, LineDirection.LD_HORIZONTAL, posVec);
	            this.GetAttackRangeByDirection(src, AttackDirection.AD_UP, posVec);
	            this.GetAttackRangeByDirection(src, AttackDirection.AD_DOWN, posVec);
	        } else if (attackType == we4p.AttackType.Attack_ThickCrossShockWave) {
	            this.GetAttackRangeInLine(src, LineDirection.LD_HORIZONTAL, posVec);
	            this.GetAttackRangeInLine(new weType.GridPosition(src.row - 1, src.col), LineDirection.LD_HORIZONTAL, posVec);
	            this.GetAttackRangeInLine(new weType.GridPosition(src.row + 1, src.col), LineDirection.LD_HORIZONTAL, posVec);
	            this.GetAttackRangeByDirection(new weType.GridPosition(src.row - 1, src.col - 1), AttackDirection.AD_UP, posVec, true);
	            this.GetAttackRangeByDirection(new weType.GridPosition(src.row - 1, src.col), AttackDirection.AD_UP, posVec, true);
	            this.GetAttackRangeByDirection(new weType.GridPosition(src.row - 1, src.col + 1), AttackDirection.AD_UP, posVec, true);
	            this.GetAttackRangeByDirection(new weType.GridPosition(src.row + 1, src.col - 1), AttackDirection.AD_DOWN, posVec, true);
	            this.GetAttackRangeByDirection(new weType.GridPosition(src.row + 1, src.col), AttackDirection.AD_DOWN, posVec, true);
	            this.GetAttackRangeByDirection(new weType.GridPosition(src.row + 1, src.col + 1), AttackDirection.AD_DOWN, posVec, true);
	        } else if (attackType == we4p.AttackType.Attack_Hurricane) {
	            var attackRadius = 2;
	            var attackSize = attackRadius * 2 + 1;
	            var attackValue = [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0];
	            this.GetAttackRangeByArray(src, attackValue, attackSize, posVec);
	        } else if (attackType == we4p.AttackType.Attack_BigHurricane) {
	            var attackRadius = 4;
	            var attackSize = attackRadius * 2 + 1;
	            var attackValue = [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
	            this.GetAttackRangeByArray(src, attackValue, attackSize, posVec);
	        }
	        this.mCheckStopAttackFlag = flagSave;
	        return posVec;
	    },

	    GetAttackRangeByDirection: function GetAttackRangeByDirection(startPos, direction, posVec, checkStart) {
	        if (direction < 0 || direction >= AttackDirection.AD_NUM) return;

	        if (checkStart) {
	            //if (ScreenViewer()->HasChessType(startPos, STIT_COIN) ||
	            //ScreenViewer()->HasChessType(startPos, STIT_STONE)) {
	            //    posVec.push_back(startPos);
	            //    return;
	            //}
	        }

	        var targetPos = startPos.addPos(DirectionPos[direction]);
	        while (Mgr.boardViewer.IsPosInViewer(targetPos)) {
	            posVec.push(targetPos);
	            if (this.mCheckStopAttackFlag) {
	                //var node = Mgr.boardViewer.GetNode(targetPos);
	                //if (node && node->HasOneOf(STIT_STONE, STIT_COIN))
	                //break;
	            }
	            targetPos = targetPos.addPos(DirectionPos[direction]);
	        }
	    },

	    GetAttackRangeInLine: function GetAttackRangeInLine(pos, lineDirection, posVec) {
	        posVec.push(pos);
	        if (lineDirection == LineDirection.LD_HORIZONTAL) {
	            this.GetAttackRangeByDirection(pos, AttackDirection.AD_LEFT, posVec);
	            this.GetAttackRangeByDirection(pos, AttackDirection.AD_RIGHT, posVec);
	        } else if (lineDirection == LineDirection.LD_VERTICAL) {
	            this.GetAttackRangeByDirection(pos, AttackDirection.AD_UP, posVec);
	            this.GetAttackRangeByDirection(pos, AttackDirection.AD_DOWN, posVec);
	        }
	    },

	    GetAttackRangeByArray: function GetAttackRangeByArray(startPos, arry, arrySize, posVec) {
	        var offsetPos = new weType.GridPosition(-Math.floor(arrySize / 2), -Math.floor(arrySize / 2));
	        for (var row = 0; row < arrySize; row++) {
	            for (var col = 0; col < arrySize; col++) {
	                if (arry[row * arrySize + col] == 1) {
	                    var targetPos = new weType.GridPosition(startPos.row + row + offsetPos.row, startPos.col + col + offsetPos.col);
	                    posVec.push(targetPos);
	                }
	            }
	        }
	    },

	    //刷新批次数据
	    RefreshBatchData: function RefreshBatchData(info) {
	        //BatchParentRelationStruct parentRelationStruct(
	        //        info->batch.m_parent_batch_index, BatchData::RELATION_BEGIN,
	        //        info->batch.m_extra_intervalue_value);
	        //Animation().CreateCrushLittleBatch(info->batch.m_self_batch_index,
	        //    parentRelationStruct,
	        //    Animation_Batch_Default, waitLittle);

	        var waitLittle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    },
	    //将棋子替换为普通棋子并crush，用于组合
	    ChangeNormalAndCrush: function ChangeNormalAndCrush(info, pos) {
	        //console.log(pos);
	        var node = Mgr.boardViewer.GetNode(pos);
	        if (!node) return;

	        var color = node.ChessColor();
	        if (color < weType.MovingItemType.MIT_0 || color > weType.MovingItemType.MIT_5)
	            //color = weType.MovingItemType.MIT_RANDOM;
	            color = puzzle_rand.PuzzleRand("sp(440)") % Mgr.stageManager.MaxColorCount();

	        node.MarkSweepByLayer();
	        node.AddChess(we4p.ChessType.CT_NormalUnit, color);
	        //console.log(node);
	        node.Crush(info);
	    },
	    //遍历posVec,对每个成员做一次crush
	    CrushNodesByPosVec: function CrushNodesByPosVec(info, posVec) {
	        var len = posVec.length;
	        var boardViewer = Mgr.boardViewer;
	        for (var i = 0; i < len; i++) {
	            var node = boardViewer.GetNode(posVec[i].row, posVec[i].col);
	            if (node) node.Crush(info);
	        }
	    }
	};

	var CombinationSpecial = {
	    CombinationWithGas: function CombinationWithGas(info, crushChess) {
	        console.log("CombinationSpecial.CombinationWithGas");

	        var boardViewer = Mgr.boardViewer;
	        var n1 = boardViewer.GetNode(info.src);
	        var n2 = boardViewer.GetNode(info.other);
	        var gasNode = n1.HasChessType(we4p.ChessType.CT_SpecialGas) ? n1 : n2;
	        var otherNode = n1.HasChessType(we4p.ChessType.CT_SpecialGas) ? n2 : n1;
	        var currentCrushPos = new weType.GridPosition(crushChess.GetPosition());
	        var otherCrushPos = new weType.GridPosition(currentCrushPos.isEqual(info.src) ? info.other : info.src);
	        var bombType = weType.PointBombType.Bomb_Gas_type;
	        var data = new SpecialCrushData();
	        data.chessColor = otherNode.ChessColor();

	        //console.log(info.other);
	        //console.log(info.src);
	        //
	        //console.log(otherCrushPos);
	        //console.log(currentCrushPos);

	        if (otherNode.HasShockWave()) {
	            bombType = weType.PointBombType.Bomb_Special_Gas_type;
	            data.attackType = we4p.AttackType.Attack_GasSpecial;
	            data.chessSpecial = we4p.ChessType.CT_SpecialHorizontalShockWave;
	        } else if (otherNode.HasChessType(we4p.ChessType.CT_SpecialHurricane)) {
	            bombType = weType.PointBombType.Bomb_Special_Gas_type;
	            data.attackType = we4p.AttackType.Attack_GasSpecial;
	            data.chessSpecial = we4p.ChessType.CT_SpecialHurricane;
	        } else if (otherNode.HasChessType(we4p.ChessType.CT_SpecialGas)) {
	            data.attackType = we4p.AttackType.Attack_Gas2Gas;
	        } else {
	            data.attackType = we4p.AttackType.Attack_Gas;
	        }

	        // 播放幽灵爆炸动画
	        Mgr.dataCollector.addCrushChess(crushChess.ToChessData());
	        //Animation().PushBombOnePointAnimation(info->batch.m_self_batch_index,
	        //        gasNode->ToChessData(), 0, 0, bombType);

	        if (data.attackType != we4p.AttackType.Attack_Gas) {
	            SpecialMethod.ChangeNormalAndCrush(info, otherCrushPos); // currentCrushPos 走crush销毁
	        }

	        if (data.attackType == we4p.AttackType.Attack_Gas2Gas) {
	            //Animation().PushBombOnePointAnimation(info->batch.m_self_batch_index,
	            //        otherNode->ToChessData(), 0, 0,
	            //    Bomb_Gas_Gas_type);
	            Mgr.aniManager.GenerateGas2GasAnimation([new weType.GridPosition(crushChess.GetPosition()), new weType.GridPosition(otherCrushPos)]);
	            Mgr.dataEventManager.trigger(EventId.END_ONE_REMOVE_ROUND);
	        }

	        var nextInfo = Util.clone(info);
	        nextInfo.src = new weType.GridPosition(crushChess.GetPosition());
	        nextInfo.other = new weType.GridPosition(otherCrushPos);
	        nextInfo.attack_type = data.attackType;
	        //NextPhase2<SpecialCrushData> *np = new NextPhase2<SpecialCrushData>(
	        //    CombinationCrushPhase2, crushChess, nextInfo, data);
	        //NextPhaseCall2(np);
	        Mgr.curBoard.cacheSpecialBomb(new SpecialChessBomb(CombinationCrushPhase2, crushChess, nextInfo, data));

	        return data.attackType;
	    },

	    CombinationWithoutGas: function CombinationWithoutGas(info, crushChess) {
	        var bombType = weType.PointBombType.Bomb_NormalUnit_type;
	        var n1 = Mgr.boardViewer.GetNode(info.src);
	        var n2 = Mgr.boardViewer.GetNode(info.other);
	        var data = new SpecialCrushData();
	        data.attackType = we4p.AttackType.Attack_None;

	        // 十字冲击波
	        if (n1.HasShockWave() && n2.HasShockWave()) {
	            data.attackType = we4p.AttackType.Attack_CrossShockWave;
	            bombType = weType.PointBombType.Bomb_CrossShockWave_type;
	        }
	        // 巨炸
	        else if (n1.HasChessType(we4p.ChessType.CT_SpecialHurricane) && n2.HasChessType(we4p.ChessType.CT_SpecialHurricane)) {
	                data.attackType = we4p.AttackType.Attack_BigHurricane;
	                bombType = weType.PointBombType.Bomb_BigHurricane_type;
	            }
	            // 粗十字冲击波
	            else if (n1.HasShockWave() && n2.HasChessType(we4p.ChessType.CT_SpecialHurricane) || n2.HasShockWave() && n1.HasChessType(we4p.ChessType.CT_SpecialHurricane)) {
	                    data.attackType = we4p.AttackType.Attack_ThickCrossShockWave;
	                    bombType = weType.PointBombType.Bomb_ThickCrossShock_type;
	                }
	        if (data.attackType != we4p.AttackType.Attack_None) {
	            SpecialMethod.ChangeNormalAndCrush(info, info.other);
	            Mgr.dataCollector.addCrushChess(crushChess.ToChessData());
	            //Animation().PushBombOnePointAnimation(info->batch.m_self_batch_index,
	            //        crushChess->ToChessData(), 0, 0,
	            //    bombType);
	            var next_info = Util.clone(info);
	            next_info.attack_type = data.attackType;
	            Mgr.curBoard.cacheSpecialBomb(new SpecialChessBomb(CombinationCrushPhase2, crushChess, next_info, data));
	            //NextPhase2<SpecialCrushData> *np = new NextPhase2<SpecialCrushData>(
	            //    CombinationCrushPhase2, crushChess, *info, data);
	            //NextPhaseCall2(np);
	        }
	        return data.attackType;
	    },

	    Combination: function Combination(info, crushChess) {
	        var n1 = Mgr.boardViewer.GetNode(info.src);
	        var n2 = Mgr.boardViewer.GetNode(info.other);
	        var attackType = we4p.AttackType.Attack_None;
	        SpecialMethod.RefreshBatchData(info, true);

	        if (n1.HasChessType(we4p.ChessType.CT_SpecialGas) || n2.HasChessType(we4p.ChessType.CT_SpecialGas)) {
	            attackType = this.CombinationWithGas(info, crushChess);
	        } else if (n1.HasSpecialChess() && n2.HasSpecialChess()) {
	            attackType = this.CombinationWithoutGas(info, crushChess);
	        }

	        //Mgr.scoreManager.AddAttackBonus(attackType);
	        return attackType != we4p.AttackType.Attack_None;
	    }
	};

	var SpecialChess = function (_Module_Basic$BasicCh) {
	    _inherits(SpecialChess, _Module_Basic$BasicCh);

	    function SpecialChess(type) {
	        _classCallCheck(this, SpecialChess);

	        return _possibleConstructorReturn(this, (SpecialChess.__proto__ || Object.getPrototypeOf(SpecialChess)).call(this, type));
	    }

	    _createClass(SpecialChess, [{
	        key: "PreInit",
	        value: function PreInit(type) {
	            _get(SpecialChess.prototype.__proto__ || Object.getPrototypeOf(SpecialChess.prototype), "PreInit", this).call(this, type);
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            _get(SpecialChess.prototype.__proto__ || Object.getPrototypeOf(SpecialChess.prototype), "Release", this).call(this);
	        }
	    }, {
	        key: "Crush",
	        value: function Crush(info) {
	            if (info.special_bomb) {
	                info.special_bomb = false;
	                return CombinationSpecial.Combination(info, this);
	            } else {
	                return this.SingleCrush(info);
	            }
	        }
	    }, {
	        key: "SingleCrush",
	        value: function SingleCrush(info) {
	            var attackType = we4p.AttackType.Attack_None;
	            var bombType = weType.PointBombType.Bomb_NormalUnit_type;
	            switch (this.Attribute().ChessType) {
	                case we4p.ChessType.CT_SpecialHorizontalShockWave:
	                    attackType = we4p.AttackType.Attack_HorizontalShockWave;
	                    bombType = weType.PointBombType.Bomb_HorizontalShockWave_type;
	                    break;
	                case we4p.ChessType.CT_SpecialVerticalShockWave:
	                    attackType = we4p.AttackType.Attack_VerticalShockWave;
	                    bombType = weType.PointBombType.Bomb_VerticalShockWave_type;
	                    break;
	                case we4p.ChessType.CT_SpecialHurricane:
	                    attackType = we4p.AttackType.Attack_Hurricane;
	                    bombType = weType.PointBombType.Bomb_Hurricane_type;
	                    break;
	                case we4p.ChessType.CT_SpecialGas:
	                    if (info.attack_type == we4p.AttackType.Attack_Disappear) return false;
	                    attackType = we4p.AttackType.Attack_Gas;
	                    bombType = weType.PointBombType.Bomb_Gas_type;
	                    break;
	                default:
	                    return false;
	            }

	            var next_info = Util.clone(info);
	            next_info.attack_type = attackType;
	            next_info.src = new weType.GridPosition(this.GetPosition());
	            // Attack_GasSpecial的棋子延时由外部指定
	            //if (info.attack_type != we4p.AttackType.Attack_GasSpecial) {
	            //    next_info.batch.m_parent_batch_index = info.batch.m_self_batch_index;
	            //    //next_info.batch.m_self_batch_index =
	            //    //    Animation().GetIncrementCrushLittleBatchIndex();
	            //
	            //    var src = Mgr.boardViewer.GetNode(info.src);
	            //    if (src && src.HasSpecialChess())
	            //        next_info.batch.m_extra_intervalue_value = weType.SPECIAL_ITEM_BATCH_EXTRA_INTER_VALUE;
	            //}

	            SpecialMethod.RefreshBatchData(next_info, false);
	            Mgr.dataCollector.addCrushChess(this.ToChessData());
	            //Animation().PushBombOnePointAnimation(info->batch.m_self_batch_index,
	            //    ToChessData(), 0, 0, bombType);
	            //
	            //NextPhaseCall(SingleCrushPhase2, this, next_info);
	            Mgr.curBoard.cacheSpecialBomb(new SpecialChessBomb(SingleCrushPhase2, this, next_info));
	            //Mgr.scoreManager.AddAttackBonus(attackType);
	            return true;
	        }
	    }, {
	        key: "MarkGas2Gas",
	        value: function MarkGas2Gas(info) {
	            var nextInfo = Util.clone(info);
	            //nextInfo.batch.m_self_batch_index =
	            //    Animation().GetOneAnimationBatch(BatchData(true));
	            nextInfo.attack_type = we4p.AttackType.Attack_Gas2Gas;
	            nextInfo.depth++;

	            var ev = new puzzle_event.CrushNodeEvent();
	            ev.src = new weType.GridPosition(info.src);
	            ev.attack_type = we4p.AttackType.Attack_Gas2Gas;
	            ev.ani_batch_id = nextInfo.batch.m_self_batch_index;

	            var node;
	            var boardViewer = Mgr.boardViewer;
	            var len = boardViewer.NodeCount();
	            for (var i = 0; i < len; i++) {
	                node = boardViewer.GetNodeIndex(i);
	                if (!node) continue;
	                if (node.Crush(nextInfo)) ev.nodes.push(new weType.GridPosition(node.GetPosition()));
	            }
	            Mgr.eventManager.Forward(ev);
	        }
	    }, {
	        key: "MarkByAttackType",
	        value: function MarkByAttackType(info, attackType) {
	            var next_info = Util.clone(info);
	            next_info.attack_type = attackType;
	            next_info.depth++;

	            var ev = new puzzle_event.CrushNodeEvent();
	            ev.src = new weType.GridPosition(info.src);
	            ev.attack_type = attackType;
	            ev.ani_batch_id = info.batch.m_self_batch_index;
	            ev.nodes = SpecialMethod.GetAttackRange(attackType, info.src);
	            SpecialMethod.CrushNodesByPosVec(next_info, ev.nodes);
	            Mgr.eventManager.Forward(ev);
	        }
	    }, {
	        key: "MarkAllSpecial",
	        value: function MarkAllSpecial(info, color, special) {
	            var specialNodeVec = [];
	            var crushPosVec = [];
	            var node;
	            var boardViewer = Mgr.boardViewer;
	            var len = boardViewer.NodeCount();
	            for (var i = 0; i < len; i++) {
	                node = boardViewer.GetNodeIndex(i);
	                var chessData, nextChessData;
	                chessData = node.ToChessData();
	                nextChessData = Util.clone(chessData);
	                if (special == we4p.ChessType.CT_SpecialHorizontalShockWave || special == we4p.ChessType.CT_SpecialVerticalShockWave) {
	                    special = puzzle_rand.PuzzleRand("sp(695)") % 2 == 0 ? we4p.ChessType.CT_SpecialHorizontalShockWave : we4p.ChessType.CT_SpecialVerticalShockWave;
	                }
	                nextChessData.type = special;
	                if (MarkGasSpeicalChess(node, info, color, specialNodeVec, crushPosVec)) {
	                    //Animation().PushAnimationFun(
	                    //        info->batch.m_self_batch_index,
	                    //    AFUN_1(AnimationFunMgr::MovingChangeAnim, chessData, nextChessData));
	                    node.AddChess(special, color);
	                    node.MarkChess(info.join);
	                    Mgr.dataCollector.addSpecialChess(node.ToChessData());
	                }
	            }

	            var ev = new puzzle_event.CrushNodeEvent();
	            ev.src = new weType.GridPosition(info.src);
	            ev.attack_type = we4p.AttackType.Attack_GasSpecial;
	            ev.ani_batch_id = info.batch.m_self_batch_index;
	            ev.nodes = crushPosVec;
	            Mgr.eventManager.Forward(ev);

	            var delay = weType.GAS_MARK_OTHER_ITEM_EXTRA_INTER_VALUE;
	            var vecSize = specialNodeVec.length;
	            for (var index = 0; index < vecSize; index++) {
	                //LittleBatchIndexStruct batchIndexStruct;
	                //batchIndexStruct.m_parent_batch_index = info->batch.m_self_batch_index;
	                //batchIndexStruct.m_self_batch_index =
	                //    Animation().GetIncrementCrushLittleBatchIndex();
	                //batchIndexStruct.m_extra_intervalue_value = delay;

	                //先把当前批次的消除动画发出去
	                Mgr.dataCollector.endOneRemove();
	                Mgr.dataEventManager.trigger(EventId.END_ONE_REMOVE_ROUND);
	                var next_info = Util.clone(info);
	                next_info.attack_type = we4p.AttackType.Attack_GasSpecial;
	                //next_info.batch = batchIndexStruct;
	                next_info.depth++;
	                next_info.other = new weType.GridPosition(-1, -1);
	                //var newChessData = specialNodeVec[index].ToChessData();
	                //Mgr.dataCollector.addSpecialChess(newChessData);
	                Mgr.dataCollector.startOneRemove(next_info.attack_type, 1, 1);
	                specialNodeVec[index].MarkChess(0);
	                specialNodeVec[index].Crush(next_info);
	                Mgr.dataCollector.endOneRemove();
	                //Mgr.dataEventManager.trigger(EventId.END_ONE_REMOVE_ROUND);
	                //RunNextPhase();
	                Mgr.curBoard.handleSpecialBomb(1);
	                delay += weType.GAS_MARK_OTHER_ITEM_EXTRA_INTER_VALUE;
	            }

	            Mgr.stateMachine.gas_special_swap_flag = true;
	        }
	    }, {
	        key: "MarkGasExplosion",
	        value: function MarkGasExplosion(info, color) {
	            //console.log("MarkGasExplosion color : " + color);
	            var ev = new puzzle_event.CrushNodeEvent();
	            ev.src = new weType.GridPosition(info.src);
	            ev.attack_type = we4p.AttackType.Attack_Gas;
	            ev.ani_batch_id = info.batch.m_self_batch_index;

	            var node;
	            var boardViewer = Mgr.boardViewer;
	            var len = boardViewer.NodeCount();
	            for (var i = 0; i < len; i++) {
	                node = boardViewer.GetNodeIndex(i);
	                if (!node || node.ChessColor() != color) continue;
	                if (node.IsStaticItemCandyPaper()) continue;
	                if (node.GetMark()) continue;
	                if (we4p.ChessType.CT_NormalUnit == node.ChessType() || we4p.ChessType.CT_SodaBottle == node.ChessType()
	                /*    ||
	                CT_TIMEBONUS == node->ChessType() || CT_TICKBOMB == node->ChessType() ||
	                CT_GIFT == node->ChessType() ||
	                CT_STEPBONUS == node->ChessType() ||
	                CT_Chameleon == node->ChessType() ||
	                CT_ANIMAL_GO_HOME_MONSTER1 == node->ChessType() ||
	                CT_ANIMAL_GO_HOME_MONSTER2 == node->ChessType()*/
	                ) {
	                        if (node.Crush(info) && node.GetMark()) {
	                            //console.log("node rush index: " + i);
	                            //Animation().PushBombOnePointAnimation(
	                            //        info->batch.m_self_batch_index, node->ToChessData(),
	                            //    GetPosition().row, GetPosition().col, Bomb_Unit_Fly_Gas_type);
	                        }
	                    } else {
	                    node.Crush(info);
	                }
	                ev.nodes.push(new weType.GridPosition(node.GetPosition()));
	            }
	            Mgr.eventManager.Forward(ev);
	        }
	    }]);

	    return SpecialChess;
	}(Module_Basic.BasicChess);

	var SpecialChessBomb = function () {
	    function SpecialChessBomb() {
	        var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	        var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	        var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	        _classCallCheck(this, SpecialChessBomb);

	        this.func = f;
	        this.chess = c;
	        this.info = i;
	        this.data = data;
	    }

	    _createClass(SpecialChessBomb, [{
	        key: "Bomb",
	        value: function Bomb() {
	            if (this.data) {
	                this.func(this.chess, this.info, this.data);
	            } else {
	                this.func(this.chess, this.info);
	            }
	        }
	    }]);

	    return SpecialChessBomb;
	}();

	var SpecialChessModule = function (_PModule) {
	    _inherits(SpecialChessModule, _PModule);

	    function SpecialChessModule() {
	        _classCallCheck(this, SpecialChessModule);

	        var _this3 = _possibleConstructorReturn(this, (SpecialChessModule.__proto__ || Object.getPrototypeOf(SpecialChessModule)).call(this));

	        _this3.listener_ = null;
	        return _this3;
	    }

	    _createClass(SpecialChessModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(SpecialChessModule.prototype.__proto__ || Object.getPrototypeOf(SpecialChessModule.prototype), "Init", this).call(this, board);
	            this.RegisterChess(we4p.ChessType.CT_SpecialHorizontalShockWave);
	            this.RegisterChess(we4p.ChessType.CT_SpecialVerticalShockWave);
	            this.RegisterChess(we4p.ChessType.CT_SpecialGas);
	            this.RegisterChess(we4p.ChessType.CT_SpecialHurricane);

	            this.listener_ = new SpecialChessListener();
	            Mgr.eventManager.AddEventListener(this.listener_, puzzle_event.EventPri.kEventPriSpecialChess);
	            this.isUsePool = true;
	            if (this.isUsePool) {
	                this.PreAllocChess(10, function () {
	                    return new SpecialChess(null);
	                });
	            }

	            return true;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            Mgr.eventManager.RemoveListener(this.listener_);
	            this.listener_ = null;
	            _get(SpecialChessModule.prototype.__proto__ || Object.getPrototypeOf(SpecialChessModule.prototype), "Release", this).call(this);
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            //this.newChessCount ++;
	            //return new SpecialChess(type);
	            var chess = null;
	            if (this.isUsePool) {
	                chess = this.GetChessFromPool();
	                if (!chess) {
	                    //this.newChessCount ++;
	                    chess = new SpecialChess(type);
	                } else {
	                    chess.PreInit(type);
	                }
	            } else {
	                //this.newChessCount ++;
	                chess = new SpecialChess(type);
	            }
	            return chess;
	        }
	    }]);

	    return SpecialChessModule;
	}(PModule);

	module.exports = {
	    SpecialChessListener: SpecialChessListener,

	    SpecialMethod: SpecialMethod,

	    CombinationSpecial: CombinationSpecial,

	    SpecialChess: SpecialChess,

	    SpecialChessBomb: SpecialChessBomb,

	    SpecialChessModule: SpecialChessModule
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by billbao on 2016/11/2.
	 */
	var PModule = PModule || __webpack_require__(37);
	var puzzle_rule = puzzle_rule || __webpack_require__(30);
	var weType = weType || __webpack_require__(20);
	var Mgr = Mgr || __webpack_require__(14);

	var GameRule4 = function (_puzzle_rule$CoreRule) {
	    _inherits(GameRule4, _puzzle_rule$CoreRule);

	    function GameRule4() {
	        _classCallCheck(this, GameRule4);

	        return _possibleConstructorReturn(this, (GameRule4.__proto__ || Object.getPrototypeOf(GameRule4)).call(this));
	    }

	    _createClass(GameRule4, [{
	        key: "CheckJoin",
	        value: function CheckJoin(viewer, pos, color, join) {
	            //console.log("GameRule4.CheckJoin");
	            // 棋子本身不参与消除直接返回false
	            var node = viewer.GetNode(pos.row, pos.col);
	            if (!node.CanJoin3Crush()) {
	                //console.log("cannot join 3 Crush");
	                return false;
	            }
	            var result = false;
	            if (this.CheckRowJoin(viewer, pos, color, join) >= 3) {
	                result = true;
	            } else if (join) {
	                join.splice(0, join.length);
	            }

	            var n = 0;
	            if (join) n = join.length;

	            if (this.CheckColJoin(viewer, pos, color, join) >= 3) {
	                result = true;
	            } else if (join) {
	                var delNum = join.length - n;
	                join.splice(n, delNum);
	            }

	            return result;
	        }
	    }, {
	        key: "GetDirectionCount",
	        value: function GetDirectionCount() {
	            return 4;
	        }
	    }, {
	        key: "GetAround",
	        value: function GetAround(center, around) {
	            var around_pos = [new weType.GridPosition(-1, 0), new weType.GridPosition(+1, 0), new weType.GridPosition(0, -1), new weType.GridPosition(0, +1)];

	            var row, col;
	            for (var i = 0; i < 4; i++) {
	                row = center.row + around_pos[i].row;
	                col = center.col + around_pos[i].col;
	                around.push(new weType.GridPosition(row, col));
	            }
	        }
	    }, {
	        key: "NextDropPosition",
	        value: function NextDropPosition(pos) {
	            return new weType.GridPosition(pos.row + 1, pos.col);
	        }
	    }, {
	        key: "NextSideDropPosition",
	        value: function NextSideDropPosition(pos) {
	            return new weType.GridPosition(pos.row + 1, pos.col);
	        }

	        // 指定位置点，指定类型的棋子，横成一条线棋子的个数

	    }, {
	        key: "CheckRowJoin",
	        value: function CheckRowJoin(viewer, pos, color, pTargetVec) {
	            //console.log("GameRule4.CheckRowJoin");
	            var beginCol = pos.col;
	            var endCol = pos.col;
	            //console.log("Check left of row");
	            for (var curCol = pos.col - 1; curCol >= 0; curCol--) {
	                //console.log("curCol " + curCol);
	                if (!viewer.CheckPosJoin(pos.row, curCol, color)) {
	                    break;
	                }
	                beginCol = curCol;

	                if (pTargetVec) {
	                    pTargetVec.push(new weType.GridPosition(pos.row, curCol));
	                }
	            }

	            //console.log("Check Right of row");
	            var iTotalCol = viewer.Col();
	            for (var curCol = pos.col + 1; curCol < iTotalCol; curCol++) {
	                if (!viewer.CheckPosJoin(pos.row, curCol, color)) {
	                    break;
	                }
	                endCol = curCol;

	                if (pTargetVec) {
	                    pTargetVec.push(new weType.GridPosition(pos.row, curCol));
	                }
	            }

	            return endCol - beginCol + 1;
	        }

	        // 指定位置点，指定类型的棋子，竖成一条线棋子的个数

	    }, {
	        key: "CheckColJoin",
	        value: function CheckColJoin(viewer, pos, color, pTargetVec) {
	            var iTotalRow = viewer.Row();
	            var beginRow = pos.row;
	            var endRow = pos.row;
	            for (var curRow = pos.row - 1; curRow >= 0; curRow--) {
	                if (!viewer.CheckPosJoin(curRow, pos.col, color)) {
	                    break;
	                }
	                beginRow = curRow;

	                if (pTargetVec) {
	                    pTargetVec.push(new weType.GridPosition(curRow, pos.col));
	                }
	            }

	            for (var curRow = pos.row + 1; curRow < iTotalRow; curRow++) {
	                if (!viewer.CheckPosJoin(curRow, pos.col, color)) {
	                    break;
	                }
	                endRow = curRow;

	                if (pTargetVec) {
	                    pTargetVec.push(new weType.GridPosition(curRow, pos.col));
	                }
	            }

	            return endRow - beginRow + 1;
	        }
	    }]);

	    return GameRule4;
	}(puzzle_rule.CoreRule);

	var WE4CoreModule = function (_PModule) {
	    _inherits(WE4CoreModule, _PModule);

	    function WE4CoreModule() {
	        _classCallCheck(this, WE4CoreModule);

	        var _this2 = _possibleConstructorReturn(this, (WE4CoreModule.__proto__ || Object.getPrototypeOf(WE4CoreModule)).call(this));

	        _this2.rule_ = null;
	        return _this2;
	    }

	    _createClass(WE4CoreModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(WE4CoreModule.prototype.__proto__ || Object.getPrototypeOf(WE4CoreModule.prototype), "Init", this).call(this, board);
	            this.rule_ = new GameRule4();
	            this.rule_.set_rule_type(puzzle_rule.RuleType.kCoreRule);
	            Mgr.ruleManager.AddRule(this.rule_);
	            return true;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {}
	    }]);

	    return WE4CoreModule;
	}(PModule);

	module.exports = {
	    GameRule4: GameRule4,
	    WE4CoreModule: WE4CoreModule
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by billbao on 2016/11/4.
	 */
	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	var config_p = config_p || __webpack_require__(12);
	var Mgr = Mgr || __webpack_require__(14);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);
	var Module_Basic = Module_Basic || __webpack_require__(38);
	var PModule = PModule || __webpack_require__(37);
	var Util = Util || __webpack_require__(21);
	var puzzle_event = puzzle_event || __webpack_require__(32);

	var DropListener = function (_puzzle_event$EventLi) {
	    _inherits(DropListener, _puzzle_event$EventLi);

	    function DropListener() {
	        _classCallCheck(this, DropListener);

	        var _this = _possibleConstructorReturn(this, (DropListener.__proto__ || Object.getPrototypeOf(DropListener)).call(this));

	        _this.m_iCurCollect = 0;
	        _this.m_iCurBubble = 0;
	        _this.m_iCurBell = 0;
	        _this.m_iGeIndex = 0;
	        _this.m_iCurRand = 0;

	        _this.m_bCollectRemainDopped = false;
	        _this.m_bSodaBubbleRemainDopped = false;
	        _this.m_bBellCycleDopped = false;
	        _this.m_bSodaBubbleCycleDopped = false;
	        return _this;
	    }

	    _createClass(DropListener, [{
	        key: "OnEvent",
	        value: function OnEvent(e) {
	            switch (e.event_id) {
	                case puzzle_event.PuzzleEvent.kEventSlide:
	                case puzzle_event.PuzzleEvent.kEventUseItem:
	                    this.ResetStepDropFlg();
	                    break;
	                case puzzle_event.PuzzleEvent.kEventCrushDropState:
	                    this.CalcuCurRemainChess();
	                    break;
	                default:
	                    break;
	            }
	        }
	    }, {
	        key: "CalcuCurRemainChess",
	        value: function CalcuCurRemainChess() {
	            this.m_iCurCollect = 0;
	            this.m_iCurBubble = 0;
	            this.m_iCurBell = 0;

	            this.m_iGeIndex = 0;
	            this.m_iCurRand = 0;

	            var geCount = 0;

	            var node = null;
	            var len = Mgr.boardViewer.NodeCount();
	            for (var i = 0; i < len; i++) {
	                node = Mgr.boardViewer.GetNodeIndex(i);
	                if (node.HasChessType(we4p.ChessType.CT_SodaBottle)) {
	                    this.m_iCurBubble++;
	                } else if (node.HasChessType(we4p.ChessType.CT_COLLECTBALLOON)) {
	                    this.m_iCurCollect++;
	                } else if (node.HasOneOf(we4p.ChessType.STIT_SMALL_BELL) || node.HasOneOf(we4p.ChessType.STIT_BIG_BELL) || node.HasOneOf(we4p.ChessType.STIT_Chameleon_SMALL_BELL) || node.HasOneOf(we4p.ChessType.STIT_Chameleon_BIG_BELL)) {
	                    this.m_iCurBell++;
	                } else if (node.IsChessGridEmpty() && node.IsAvailable()) {
	                    geCount++;
	                }
	            }

	            if (geCount > 3) {
	                geCount = 3;
	                this.m_iCurRand = puzzle_rand.PuzzleRand("dp(73)") % geCount;
	            }
	        }
	    }, {
	        key: "ResetStepDropFlg",
	        value: function ResetStepDropFlg() {
	            this.m_bCollectRemainDopped = false;
	            this.m_bSodaBubbleRemainDopped = false;
	            this.m_bBellCycleDopped = false;
	            this.m_bSodaBubbleCycleDopped = false;
	        }
	    }, {
	        key: "MatchRand",
	        value: function MatchRand() {
	            return this.m_iGeIndex >= this.m_iCurRand;
	        }
	    }, {
	        key: "GetCurCollect",
	        value: function GetCurCollect() {
	            return this.m_iCurCollect;
	        }
	    }, {
	        key: "GetCurBubble",
	        value: function GetCurBubble() {
	            return this.m_iCurBubble;
	        }
	    }, {
	        key: "GetCurBell",
	        value: function GetCurBell() {
	            return this.m_iCurBell;
	        }
	    }, {
	        key: "IncGeIndex",
	        value: function IncGeIndex() {
	            this.m_iGeIndex++;
	        }
	    }]);

	    return DropListener;
	}(puzzle_event.EventListener);

	var DropPoint = function (_Module_Basic$BasicCh) {
	    _inherits(DropPoint, _Module_Basic$BasicCh);

	    function DropPoint(type, m) {
	        _classCallCheck(this, DropPoint);

	        var _this2 = _possibleConstructorReturn(this, (DropPoint.__proto__ || Object.getPrototypeOf(DropPoint)).call(this, type));

	        _this2.dropModule = m;
	        _this2.listenner_ = null;
	        _this2.m_bIsFloat = false;
	        return _this2;
	    }

	    _createClass(DropPoint, [{
	        key: "PreInit",
	        value: function PreInit(type) {
	            _get(DropPoint.prototype.__proto__ || Object.getPrototypeOf(DropPoint.prototype), "PreInit", this).call(this, type);
	        }
	    }, {
	        key: "Release",
	        value: function Release() {}
	        // 实现棋子生成器
	        // 当DropPoint所在棋格需要生成新棋子时,
	        // 该函数会被调用, 返回新棋子的类型和颜色

	    }, {
	        key: "Generate",
	        value: function Generate(node, isFloat) {
	            var res = this.InternalGenerate(node, isFloat);
	            if (res) {
	                this.listenner_.IncGeIndex();
	            }
	            return res;
	        }
	    }, {
	        key: "Backup",
	        value: function Backup() {
	            var c = _get(DropPoint.prototype.__proto__ || Object.getPrototypeOf(DropPoint.prototype), "Backup", this).call(this);
	            // 当前棋子如果没有额外数据需要备份, 就直接返回
	            return c;
	        }
	    }, {
	        key: "Restore",
	        value: function Restore(from) {
	            _get(DropPoint.prototype.__proto__ || Object.getPrototypeOf(DropPoint.prototype), "Restore", this).call(this, from);
	        }
	    }, {
	        key: "SetNode",
	        value: function SetNode(n) {
	            _get(DropPoint.prototype.__proto__ || Object.getPrototypeOf(DropPoint.prototype), "SetNode", this).call(this, n);
	            // 注册棋子生成器
	            n.SetChessGenerator(this);
	        }
	    }, {
	        key: "SetListenner",
	        value: function SetListenner(l) {
	            this.listenner_ = l;
	        }
	    }, {
	        key: "NeedDrop",
	        value: function NeedDrop(pos, curIndexPos, type) {
	            var posMatch = false;

	            if (-1 == pos && !this.m_bIsFloat || -2 == pos && this.m_bIsFloat || -10 == pos) {
	                posMatch = true;
	            } else if (curIndexPos == pos) {
	                posMatch = true;
	            }

	            if (posMatch) {
	                if (this.listenner_ && this.listenner_.MatchRand()) {
	                    switch (type) {
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_COLLECT_STEP:
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_EXTRASTEP_STEP:
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_CHANGE_COLOR_STEP:
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_BOBOTOU_STEP:
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_EXTRATIME_STEP:
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_STEPBOMB_STEP:
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_SODA_BUBBLE_STEP:
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_JINGLE_BELL_STEP:
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_GOLD_COIN_STEP:
	                            return true;
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_COLLECT_REMAIN:
	                            return !this.listenner_.m_bCollectRemainDopped;
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_SODA_BUBBLE_REMAIN:
	                            return !this.listenner_.m_bSodaBubbleRemainDopped;
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_JINGLE_BELL_CIRCLE:
	                            return !this.listenner_.m_bBellCycleDopped;
	                        case config_p.APPEAR_RULE_TYPE.APPEAR_SODA_BUBBLE_CIRCLE:
	                            return !this.listenner_.m_bSodaBubbleCycleDopped;
	                        default:
	                            return false;
	                    }
	                }
	            }

	            return false;
	        }
	    }, {
	        key: "NeedProbDrop",
	        value: function NeedProbDrop(pos, curIndexPos) {
	            // -1任意位置上浮 -2任意位置下落
	            if (-1 == pos) {
	                if (!this.m_bIsFloat) {
	                    return true;
	                }
	            } else if (-2 == pos) {
	                if (this.m_bIsFloat) {
	                    return true;
	                }
	            } else if (curIndexPos == pos || -10 == pos) {
	                return true;
	            }

	            return false;
	        }
	    }, {
	        key: "AddNormalOrGiftChessType",
	        value: function AddNormalOrGiftChessType(node, colorTable, ChessTypeCount) {
	            if (!this.CanDropGift()) {
	                node.AddChessType(we4p.ChessType.CT_NormalUnit, null, colorTable[puzzle_rand.PuzzleRand("dp(202)") % ChessTypeCount]);
	                return;
	            }

	            //var startInfo = Mgr.stageManager.start_info();
	            //var helpItemInfoSize = startInfo.help_item_info_size();
	            //map<int, int> toolInfoMap;
	            //map<int, int>::iterator it;
	            //if (helpItemInfoSize > 0) {
	            //    int curStep = CurrentScoreManager()->GetCurrentStep();
	            //    ///先判断
	            //    for (int i = 0; i < helpItemInfoSize; ++i) {
	            //        we4::HelpItemInfo helpItemInfo = startInfo.help_item_info(i);
	            //        if (curStep == helpItemInfo.step()) {
	            //            it = toolInfoMap.find(helpItemInfo.itemid());
	            //            if (it != toolInfoMap.end()) {
	            //                    it->second += helpItemInfo.count();
	            //            } else {
	            //                toolInfoMap.insert(
	            //                    make_pair(helpItemInfo.itemid(), helpItemInfo.count()));
	            //            }
	            //        }
	            //    }
	            //}
	            //
	            //if (toolInfoMap.size() > 0) {
	            //    CMovingItemGiftAttr giftAttr;
	            //    int toolItemCount = -1;
	            //    for (it = toolInfoMap.begin(); it != toolInfoMap.end(); ++it) {
	            //        ++toolItemCount;
	            //        giftAttr.toolID[toolItemCount] = it->first;
	            //        giftAttr.toolCount[toolItemCount] = it->second;
	            //    }
	            //        node->AddGiftChess(colorTable[PuzzleRand() % ChessTypeCount], giftAttr);
	            //    toolInfoMap.clear();
	            //    startInfo.clear_help_item_info();
	            //} else {
	            //        node->AddChessType(CT_NormalUnit, NULL,
	            //        colorTable[PuzzleRand() % ChessTypeCount]);
	            //}
	        }
	    }, {
	        key: "InternalGenerate",
	        value: function InternalGenerate(node, isFloat) {
	            var color_table = [weType.MovingItemType.MIT_0, weType.MovingItemType.MIT_1, weType.MovingItemType.MIT_2, weType.MovingItemType.MIT_3, weType.MovingItemType.MIT_4, weType.MovingItemType.MIT_5];
	            this.m_bIsFloat = isFloat;
	            var config = Mgr.stageManager.config();

	            var ChessTypeCount = config.chess_color;
	            if (ChessTypeCount <= 0 || ChessTypeCount > color_table.length) {
	                ChessTypeCount = color_table.length;
	                //WE4_ASSERT(false);
	            }

	            var star3Score = config.threestar_score;
	            var curScore = 0 /*CurrentScoreManager()->GetScore()*/;

	            if (curScore >= star3Score && Mgr.curBoard.GetGameState() == weType.PuzzleGameState.PGS_LASTPANG) {
	                ChessTypeCount = color_table.length;
	            }

	            if (config.appear_rule.length <= 0) {
	                this.AddNormalOrGiftChessType(node, color_table, ChessTypeCount);
	                return true;
	            }

	            var col = Mgr.boardViewer.Col();

	            var curPos = new weType.GridPosition(node.GetWorldPosition());
	            var curIndexPos = curPos.row * col + curPos.col;

	            var curStep = Mgr.stageManager.GetMaxStep() - Mgr.stageManager.GetRemainStep();
	            //console.log("curStep: " + curStep);

	            //WE4_ASSERT(listenner_ != NULL);

	            var curCollect = this.listenner_.GetCurCollect();
	            var curBubble = this.listenner_.GetCurBubble();
	            var curBell = this.listenner_.GetCurBell();

	            var appear_rule_list = this.dropModule.GetCopyRule();
	            var len = appear_rule_list.length;
	            //console.log("appear_rule_list : " + JSON.stringify(appear_rule_list))
	            for (var i = 0; i < len; i++) {
	                var rule = appear_rule_list[i];
	                var mRule = appear_rule_list[i];
	                switch (rule.appear_type) {
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_EXTRASTEP_STEP:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_CHANGE_COLOR_STEP:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_BOBOTOU_STEP:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_EXTRATIME_STEP:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_STEPBOMB_STEP:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_SODA_BUBBLE_STEP:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_JINGLE_BELL_STEP:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_GOLD_COIN_STEP:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_COLLECT_STEP:
	                        {
	                            if (curStep >= rule.appear_data1) {
	                                var pos = rule.appear_pos;
	                                //console.log("collect step ok");
	                                if (this.NeedDrop(pos, curIndexPos, rule.appear_type)) {
	                                    //console.log("needDrop");
	                                    var element = rule.appear_element;
	                                    if (node.AddChessByElement(element, true)) {
	                                        mRule.appear_type = config_p.APPEAR_RULE_TYPE.APPEAR_RULE_INVALID;
	                                        return true;
	                                    }
	                                }
	                            }
	                        }break;

	                    case config_p.APPEAR_RULE_TYPE.APPEAR_SODA_BUBBLE_REMAIN:
	                        {
	                            if (curBubble <= rule.appear_data1 && curStep >= rule.appear_data2) {
	                                var pos = rule.appear_pos;
	                                if (this.NeedDrop(pos, curIndexPos, rule.appear_type)) {
	                                    var element = rule.appear_element;
	                                    if (node.AddChessByElement(element, true)) {
	                                        this.listenner_.m_bSodaBubbleRemainDopped = true;
	                                        return true;
	                                    }
	                                }
	                            }
	                        }break;
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_COLLECT_REMAIN:
	                        {
	                            if (curCollect <= rule.appear_data1 && curStep >= rule.appear_data2) {
	                                var element = rule.appear_element;
	                                var pos = rule.appear_pos;
	                                if (this.NeedDrop(pos, curIndexPos, rule.appear_type)) {
	                                    if (node.AddChessByElement(element, true)) {
	                                        this.listenner_.m_bCollectRemainDopped = true;
	                                        return true;
	                                    }
	                                }
	                            }
	                        }break;

	                    case config_p.APPEAR_RULE_TYPE.APPEAR_CHANGE_COLOR_PROBABILITY:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_BOBOTOU_PROBABILITY:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_EXTRATIME_PROBABILITY:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_STEPBOMB_PROBABILITY:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_JINGLE_BELL_PROBABILITY:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_GOLD_COIN_PROBABILITY:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_EXTRASTEP_PROBABILITY:
	                        {
	                            var rand = puzzle_rand.PuzzleRand("dp(351)") % 100;
	                            if (rand < rule.appear_data1) {
	                                var pos = rule.appear_pos;
	                                if (this.NeedProbDrop(pos, curIndexPos)) {
	                                    var element = rule.appear_element;
	                                    if (node.AddChessByElement(element, true)) {
	                                        return true;
	                                    }
	                                }
	                            }
	                        }break;

	                    case config_p.APPEAR_RULE_TYPE.APPEAR_GOHOME_MOSTER_RISE_AGAIN:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_GOHOME_MOSTER_PER_PET_WALKSTEP:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_GOHOME_MOSTER_PER_USER_FINGERSLIDING:
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_GOHOME_MOSTER_USER_FINGERSLIDING:
	                        break;

	                    case config_p.APPEAR_RULE_TYPE.APPEAR_SODA_BUBBLE_CIRCLE:
	                        {
	                            if (curBubble <= rule.appear_data1) {
	                                var pos = rule.appear_pos;
	                                if (this.NeedDrop(pos, curIndexPos, rule.appear_type)) {
	                                    var element = rule.appear_element;
	                                    if (node.AddChessByElement(element, true)) {
	                                        this.listenner_.m_bSodaBubbleCycleDopped = true;
	                                        return true;
	                                    }
	                                }
	                            }
	                        }break;
	                    case config_p.APPEAR_RULE_TYPE.APPEAR_JINGLE_BELL_CIRCLE:
	                        {
	                            if (curBell <= rule.appear_data1) {
	                                var pos = rule.appear_pos;
	                                if (this.NeedDrop(pos, curIndexPos, rule.appear_type)) {
	                                    var element = rule.appear_element;
	                                    if (node.AddChessByElement(element, true)) {
	                                        this.listenner_.m_bBellCycleDopped = true;
	                                        return true;
	                                    }
	                                }
	                            }
	                        }break;

	                    default:
	                        break;
	                }
	            }

	            this.AddNormalOrGiftChessType(node, color_table, ChessTypeCount);
	            return true;
	        }
	    }, {
	        key: "CanDropGift",
	        value: function CanDropGift() {
	            // 已经掉过就不掉
	            var giftCount = 1 /*CurrentScoreManager()->GetScoreData().add_chess_type_count[CT_GIFT]*/;
	            if (giftCount >= 1) {
	                return false;
	            }
	            // 周赛不掉
	            //var play_type = StageManager()->PlayType();
	            //if (play_type == PLAY_TYPE_WEEKLY1_KO_BOSS ||
	            //    play_type == PLAY_TYPE_WEEKLY2_PETS_GO_HOME ||
	            //    play_type == PLAY_TYPE_WEEKLY3_AI_ALPHAGO) {
	            //    return false;
	            //}

	            return true;
	        }
	    }]);

	    return DropPoint;
	}(Module_Basic.BasicChess);

	var DropPointModule = function (_PModule) {
	    _inherits(DropPointModule, _PModule);

	    function DropPointModule() {
	        _classCallCheck(this, DropPointModule);

	        var _this3 = _possibleConstructorReturn(this, (DropPointModule.__proto__ || Object.getPrototypeOf(DropPointModule)).call(this));

	        _this3.copyAppearRule = [];

	        _this3.appear_rule_backup_ = [];

	        _this3.listenner_ = null;
	        return _this3;
	    }

	    _createClass(DropPointModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(DropPointModule.prototype.__proto__ || Object.getPrototypeOf(DropPointModule.prototype), "Init", this).call(this, board);
	            this.listenner_ = null;
	            this.copyAppearRule = [];
	            Util.arrayDeepCopy(this.copyAppearRule, Mgr.stageManager.config().appear_rule);
	            this.RegisterChess(we4p.ChessType.STIT_DROP_POINT);
	            this.RegisterChess(we4p.ChessType.STIT_DROP_POINT_IN_SODA);
	            //SaveLoaderManager()->AddSaveLoader(this);
	            return true;
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            this.newChessCount++;
	            if (this.listenner_ == null) {
	                this.listenner_ = new DropListener();
	                if (this.listenner_) {
	                    Mgr.eventManager.AddEventListener(this.listenner_, puzzle_event.EventPri.kEventPriDropPoint);
	                }
	            }
	            var c = new DropPoint(type, this);
	            if (c) {
	                c.SetListenner(this.listenner_);
	            }
	            return c;
	        }
	    }, {
	        key: "GetCopyRule",
	        value: function GetCopyRule() {
	            return this.copyAppearRule;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            //SaveLoaderManager()->RemoveSaveLoader(this);
	            if (this.listenner_) {
	                //delete listenner_;
	                this.listenner_ = null;
	            }
	            _get(DropPointModule.prototype.__proto__ || Object.getPrototypeOf(DropPointModule.prototype), "Release", this).call(this);
	        }
	    }, {
	        key: "Save",
	        value: function Save() {
	            //appear_rule_backup_.clear();
	            //for (int i = 0; i < copyAppearRule.size(); i++) {
	            //    appear_rule_backup_.push_back(copyAppearRule.Get(i).appear_type());
	            //}
	        }
	    }, {
	        key: "Load",
	        value: function Load() {
	            //WE4_ASSERT((int)appear_rule_backup_.size() == copyAppearRule.size());
	            //for (int i = 0; i < copyAppearRule.size(); i++) {
	            //    copyAppearRule.Mutable(i)->set_appear_type(appear_rule_backup_[i]);
	            //}
	        }
	    }]);

	    return DropPointModule;
	}(PModule);

	module.exports = {
	    DropListener: DropListener,
	    DropPoint: DropPoint,
	    DropPointModule: DropPointModule
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PModule = PModule || __webpack_require__(37);
	var Module_Basic = Module_Basic || __webpack_require__(38);
	var we4p = we4p || __webpack_require__(13);
	var Mgr = Mgr || __webpack_require__(14);
	var module_icebear = module_icebear || __webpack_require__(39);

	// 冰块的基类

	var IceChess = function (_Module_Basic$BasicCh) {
		_inherits(IceChess, _Module_Basic$BasicCh);

		function IceChess(type) {
			_classCallCheck(this, IceChess);

			return _possibleConstructorReturn(this, (IceChess.__proto__ || Object.getPrototypeOf(IceChess)).call(this, type));
		}

		_createClass(IceChess, [{
			key: "PreInit",
			value: function PreInit(type) {
				_get(IceChess.prototype.__proto__ || Object.getPrototypeOf(IceChess.prototype), "PreInit", this).call(this, type);
			}
		}, {
			key: "Release",
			value: function Release() {}
		}, {
			key: "CanCrush",
			value: function CanCrush(info) {
				if (this.CrushMark() == info.join || this.CrushMark() > 0) {
					return false;
				}

				if (!this.ValidAttack(info)) {
					return false;
				}

				// 获取上一层
				var up = this.Attribute().Layer + 1;
				// 如果上层大于棋面, 说明当前棋子就是棋面
				if (up >= we4p.ChessLayer.kChessLayerNum) {
					return false;
				}

				// 如果上层不存在其它棋子
				var upchess = this.GetNode().GetChess(up);
				if (upchess == null) {
					return false;
				}
				// 如果上层棋子不能攻击冰块
				if (!upchess.Attribute().CanAttackIce) {
					return false;
				}
				// 上层棋子没有被消除
				if (upchess.CrushMark() == 0) {
					return false;
				}
				return true;
			}
		}]);

		return IceChess;
	}(Module_Basic.BasicChess);

	var DeepIce = function (_IceChess) {
		_inherits(DeepIce, _IceChess);

		function DeepIce() {
			_classCallCheck(this, DeepIce);

			return _possibleConstructorReturn(this, (DeepIce.__proto__ || Object.getPrototypeOf(DeepIce)).call(this, we4p.ChessType.STIT_DEEPICE));
		}

		_createClass(DeepIce, [{
			key: "NextType",
			value: function NextType() {
				if (this.GetNode().HasChessType(we4p.ChessType.STIT_COLLECT_UNDER_ICE)) {
					return we4p.ChessType.STIT_ICE_BEAR_UNDER;
				}
				return we4p.ChessType.STIT_ICE;
			}
		}, {
			key: "Crush",
			value: function Crush(info) {
				this.CreateNextChess();
				Mgr.dataCollector.addChangedBgChess(this.ToChangedData());
				return true;
			}
		}]);

		return DeepIce;
	}(IceChess);

	var NormalIce = function (_IceChess2) {
		_inherits(NormalIce, _IceChess2);

		function NormalIce(type) {
			_classCallCheck(this, NormalIce);

			return _possibleConstructorReturn(this, (NormalIce.__proto__ || Object.getPrototypeOf(NormalIce)).call(this, type));
		}

		_createClass(NormalIce, [{
			key: "Crush",
			value: function Crush(info) {
				//console.log("NormalIce Crush");
				var res = _get(NormalIce.prototype.__proto__ || Object.getPrototypeOf(NormalIce.prototype), "Crush", this).call(this, info);
				if (res) {
					Mgr.dataCollector.addCrushBgChess(this.ToChessData());
					var pos = this.GetPosition();
					// 消除冰块同时消除下面的收集物
					this.GetNode().RemoveChess(we4p.ChessType.STIT_COLLECT_UNDER_ICE);
					// 周赛局，生成子弹攻击BOSS
					// PuzzleDataCommunicate::GetInstance().ChessCrashNotifyWeekGame(batch,
					// pos.row, pos.col, STIT_ICE);

					module_icebear.PuzzleIceBearUtil.GetInstance().CollectUnderIceThing(pos.row, pos.col, info.batch.m_self_batch_index);
				}
				return res;
			}
		}]);

		return NormalIce;
	}(IceChess);

	var IceModule = function (_PModule) {
		_inherits(IceModule, _PModule);

		function IceModule() {
			_classCallCheck(this, IceModule);

			return _possibleConstructorReturn(this, (IceModule.__proto__ || Object.getPrototypeOf(IceModule)).call(this));
		}

		_createClass(IceModule, [{
			key: "Init",
			value: function Init(board) {
				_get(IceModule.prototype.__proto__ || Object.getPrototypeOf(IceModule.prototype), "Init", this).call(this, board);
				this.RegisterChess(we4p.ChessType.STIT_ICE);
				this.RegisterChess(we4p.ChessType.STIT_DEEPICE);
				this.RegisterChess(we4p.ChessType.STIT_ICE_BEAR_UNDER);
			}
		}, {
			key: "NewChess",
			value: function NewChess(type, backup) {
				if (type == we4p.ChessType.STIT_ICE || type == we4p.ChessType.STIT_ICE_BEAR_UNDER) {
					this.newChessCount++;
					return new NormalIce(type);
				} else if (type == we4p.ChessType.STIT_DEEPICE) {
					this.newChessCount++;
					return new DeepIce();
				} else {
					return null;
				}
			}
		}]);

		return IceModule;
	}(PModule);

	module.exports = {
		IceChess: IceChess,
		DeepIce: DeepIce,
		NormalIce: NormalIce,
		IceModule: IceModule
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by billbao on 2017/2/15.
	 */
	var Module_Basic = Module_Basic || __webpack_require__(38);
	var module_special = module_special || __webpack_require__(45);
	var Util = Util || __webpack_require__(21);
	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	var config_p = config_p || __webpack_require__(12);
	var Mgr = Mgr || __webpack_require__(14);
	var PModule = PModule || __webpack_require__(37);
	var puzzle_event = puzzle_event || __webpack_require__(32);

	var DiggerType = {
	    kDiggerNormal: 0,
	    kDiggerSokoban: 1
	};

	var DiggerListener = function (_puzzle_event$BoardEv) {
	    _inherits(DiggerListener, _puzzle_event$BoardEv);

	    function DiggerListener(board) {
	        _classCallCheck(this, DiggerListener);

	        var _this = _possibleConstructorReturn(this, (DiggerListener.__proto__ || Object.getPrototypeOf(DiggerListener)).call(this));

	        _this.need_handle_ = false;
	        _this.board_ = board;

	        _this.m_StartRow = 0;
	        _this.m_StartRowBack = 0;

	        _this.m_HeighestBalloonRow = Mgr.worldViewer.Row();

	        //DiggerSaveLoad saveload_;

	        _this.notify_move_ = false;
	        _this.notify_new_start_ = 0;

	        _this.digger_type_ = DiggerType.kDiggerNormal;
	        return _this;
	    }

	    _createClass(DiggerListener, [{
	        key: "OnEvent",
	        value: function OnEvent(e) {
	            //console.log("DiggerListener.OnEvent ");
	            switch (e.event_id) {
	                case puzzle_event.PuzzleEvent.kEventSlide:
	                case puzzle_event.PuzzleEvent.kEventUseItem:
	                case puzzle_event.PuzzleEvent.kEventPetTalent:
	                case puzzle_event.PuzzleEvent.kEventCrushNode:
	                    this.need_handle_ = true;
	                    break;
	                case puzzle_event.PuzzleEvent.kEventBalanceState:
	                    if (this.need_handle_) {
	                        this.OnBalanceState();
	                        this.need_handle_ = false;
	                    }
	                    break;
	                case puzzle_event.PuzzleEvent.kEventGameStart:
	                    this.OnGameStart();
	                    break;
	                default:
	                    return;
	            }
	        }
	    }, {
	        key: "Save",
	        value: function Save() {
	            this.m_StartRowBack = this.m_StartRow;
	        }
	    }, {
	        key: "Load",
	        value: function Load() {
	            this.m_StartRow = this.m_StartRowBack;
	            this.board_.RollingBoard(this.m_StartRow);
	        }
	    }, {
	        key: "SetNeedHandle",
	        value: function SetNeedHandle(b) {
	            this.need_handle_ = b;
	        }
	    }, {
	        key: "NotifyMove",
	        value: function NotifyMove(newline) {
	            if (newline < 0) newline = 0;
	            var endline = Mgr.stageManager.Row() - Mgr.stageManager.ScreenRow();
	            if (newline > endline) newline = endline;
	            this.notify_move_ = true;
	            this.notify_new_start_ = newline;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            //delete this;
	        }
	    }, {
	        key: "OnGameStart",
	        value: function OnGameStart() {
	            this.RefreshData();
	            this.board_.RollingBoard(this.m_StartRow);
	        }
	    }, {
	        key: "OnBalanceState",
	        value: function OnBalanceState() {
	            // 下面逻辑表示，棋子掉落后，没有掉落消除产生
	            var startRow = 0;
	            var newStartRow_obj = { newStartRow: 0 };
	            var needDiggerFlg = false;
	            var sodaNeedDigger = this.GetSodaMoveNewStartRow(newStartRow_obj);
	            var stoneNeedDigger = this.GetStoneMoveNewStartRow(newStartRow_obj);

	            if (sodaNeedDigger || stoneNeedDigger) {
	                startRow = this.board_.GetStartRow();
	                needDiggerFlg = true;
	            } else if (this.notify_move_) {
	                startRow = this.m_StartRow;
	                this.notify_move_ = false;
	                newStartRow_obj.newStartRow = this.notify_new_start_;
	                if (startRow != newStartRow_obj.newStartRow) needDiggerFlg = true;
	                this.m_StartRow = newStartRow_obj.newStartRow;
	            }

	            if (!needDiggerFlg) {
	                return;
	            }

	            // TODO(andrewli):
	            // 为啥这里又算?
	            this.m_StartRow = this.CalculateBoardStartRow();

	            var ev = new puzzle_event.DiggerMoveEvent();
	            Mgr.eventManager.Forward(ev);

	            this.board_.RollingBoard(newStartRow_obj.newStartRow);

	            //下面是一些挖掘机相关动画
	            Mgr.aniManager.GenerateRollingBoardAni(startRow, newStartRow_obj.newStartRow);
	            //Animation().CreateAnimation(BatchData(BATCH_WAIT_LAST),
	            //    ANI_DATA(kAniIDSodaRasing));
	            //Animation().CreateAnimation(BatchData(BATCH_WAIT_LAST),
	            //    ANI_DATA(kAniIDClearBoard, false));
	            //
	            //PuzzleBoardAnimation::CraeteBoardByRow(startRow, newStartRow_obj.newStartRow);
	            //PuzzleBoardAnimation::MoveBoardByRow(startRow, newStartRow_obj.newStartRow);
	            //Animation().CreateAnimation(BatchData(BATCH_WAIT_LITTLE),
	            //    ANI_DATA(kAniIDClearBoard, false));
	            //int gereralBathcId = PuzzleBoardAnimation::CraeteBoardInScreen();
	            if (sodaNeedDigger) {
	                var rowCount = Mgr.boardViewer.Row();
	                var colCount = Mgr.boardViewer.Col();

	                var backGroundState = [];
	                for (var row = 0; row < rowCount; ++row) {
	                    for (var col = 0; col < colCount; ++col) {
	                        var posNode = Mgr.boardViewer.GetNode(row, col);
	                        var bIsEmpty = true;
	                        if (posNode) {
	                            if (posNode.HasChessType(we4p.ChessType.STIT_LOCKER)) {
	                                bIsEmpty = false;
	                            } else {
	                                bIsEmpty = !posNode.IsAvailable();
	                            }
	                        }
	                        backGroundState.push(bIsEmpty);
	                    }
	                }
	                //Animation().CreateAnimation(
	                //    BatchData(gereralBathcId, BATCH_RELATION_BEGIN, 0),
	                //    ANI_DATA(kAniIDSodaLayerChange, EnvManager()->GetSodaLine(),
	                //    CurrentBoard()->GetStartRow(), backGroundState));
	            }

	            ev.move_state = 1;
	            Mgr.eventManager.Forward(ev);

	            this.board_.BreakBalance();
	            // TODO(andrewli):
	            // 一定要进入这个状态么???
	            // *pLogicState = DIGGER_BOARD_MOVE_STATE;
	            return;
	        }

	        /*!
	         * @brief      获取当前屏幕内及以下的第一个云的行数
	         * @return     int -1 没有找到
	         * @note
	         */

	    }, {
	        key: "GetFirstCloudLine",
	        value: function GetFirstCloudLine() {
	            var totalRow = Mgr.stageManager.Row();
	            var totalCol = Mgr.stageManager.Col();

	            for (var i = this.m_StartRow; i < totalRow; i++) {
	                for (var j = 0; j < totalCol; j++) {
	                    var data = this.board_.GetWorldNode(new weType.GridPosition(i, j));
	                    if (data.HasOneOf(we4p.ChessType.STIT_COMMONCLOUD1) || data.HasOneOf(we4p.ChessType.STIT_COMMONCLOUD2) || data.HasOneOf(we4p.ChessType.STIT_STONECLOUD1) || data.HasOneOf(we4p.ChessType.STIT_STONECLOUD2) || data.HasOneOf(we4p.ChessType.STIT_REDPACKET1) || data.HasOneOf(we4p.ChessType.STIT_REDPACKET2)) {
	                        return i;
	                    }
	                }
	            }
	            return -1;
	        }

	        /*!
	         * @brief      获取当前屏幕内及以下的第一个甜甜圈的行数
	         * @return     int -1 没有找到
	         * @note
	         */

	    }, {
	        key: "GetFirstBombLine",
	        value: function GetFirstBombLine() {
	            var totalRow = Mgr.stageManager.Row();
	            var totalCol = Mgr.stageManager.Col();

	            for (var i = this.m_StartRow; i < totalRow; i++) {
	                for (var j = 0; j < totalCol; j++) {
	                    var data = this.board_.GetWorldNode(new weType.GridPosition(i, j));
	                    if (data.HasChessType(we4p.ChessType.STIT_DONUTSBOMB)) return i;
	                }
	            }
	            return -1;
	        }
	    }, {
	        key: "CalculateSodaStartRow",
	        value: function CalculateSodaStartRow() {
	            var boardType = Mgr.stageManager.PlayType();
	            if (config_p.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_SODA != boardType) return -1;

	            if (this.m_HeighestBalloonRow == Mgr.stageManager.Row()) return -1;

	            var keepBallonInRow; //最高气球所处屏幕行数
	            if (this.m_HeighestBalloonRow < Mgr.envManager.GetSodaLine()) {
	                keepBallonInRow = 2; // 水上 倒数第三行
	            } else {
	                keepBallonInRow = Mgr.stageManager.ScreenRow() - 3; //水下，正数第三行
	            }

	            var startRow = this.m_HeighestBalloonRow - keepBallonInRow;
	            if (startRow + Mgr.stageManager.ScreenRow() > Mgr.stageManager.Row()) startRow = Mgr.stageManager.Row() - Mgr.stageManager.ScreenRow();
	            if (startRow < 0) startRow = 0;

	            return startRow;
	        }
	    }, {
	        key: "RefreshHeighestBalloonRow",
	        value: function RefreshHeighestBalloonRow() {
	            this.m_HeighestBalloonRow = Mgr.stageManager.Row();
	            var node = null;
	            var worldViewer = Mgr.worldViewer;
	            var count = worldViewer.NodeCount();
	            for (var i = 0; i < count; i++) {
	                node = worldViewer.GetNodeIndex(i);
	                if (node.ChessType() != we4p.ChessType.CT_COLLECTBALLOON) {
	                    // 可能会出现上锁棋子把气球隐藏了，所以这里要判断被锁住的棋子有没有气球
	                    if (node.HasChessType(we4p.ChessType.STIT_LOCKER)) {
	                        //Locker* locker =
	                        //    dynamic_cast<Locker*>(node->GetChessByType(STIT_LOCKER));
	                        //if (!locker->IsLock() ||
	                        //locker->GetLockerNode()->ChessType() != CT_COLLECTBALLOON)
	                        //continue;
	                    } else {
	                        continue;
	                    }
	                }
	                if (this.m_HeighestBalloonRow > node.GetWorldPosition().row) this.m_HeighestBalloonRow = node.GetWorldPosition().row;
	            }
	        }
	    }, {
	        key: "CalculateStoneStartRow",
	        value: function CalculateStoneStartRow() {
	            if (Mgr.stageManager.PlayType() != config_p.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_ONEBYONE && Mgr.stageManager.PlayType() != config_p.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_MOSHING) {
	                //WE4_ASSERT(0);
	                return -1;
	            }

	            var totalRow = Mgr.stageManager.Row();
	            var pageRow = Mgr.stageManager.ScreenRow();

	            //新挖掘机开局总是在第一行
	            if (this.m_StartRow == -1) {
	                return 0;
	            }

	            var firstCloudRow = this.GetFirstCloudLine();
	            var firstBombRow = this.GetFirstBombLine();
	            var startRow = -1;

	            if (-1 != firstCloudRow) {
	                if (this.m_StartRow + pageRow - firstCloudRow > 4) return this.m_StartRow;else if (-1 != firstBombRow && firstCloudRow + 3 >= firstBombRow) startRow = firstBombRow - pageRow + 1;else startRow = firstCloudRow + 3 - pageRow + 1;
	            } else {
	                if (-1 != firstBombRow) startRow = firstBombRow - pageRow + 1;else startRow = totalRow - pageRow;
	            }

	            if (startRow < 0) return this.m_StartRow;

	            if (startRow + pageRow - 1 >= totalRow) {
	                startRow = totalRow - pageRow;
	                if (startRow < 0) {
	                    //WE4_ASSERT(false);
	                    return 0;
	                }
	            }

	            return startRow;
	        }
	    }, {
	        key: "GetSodaMoveNewStartRow",
	        value: function GetSodaMoveNewStartRow() {
	            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { newStartRow: 0 };

	            var boardType = Mgr.stageManager.PlayType();
	            if (config_p.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_SODA != boardType) {
	                return false;
	            }
	            this.RefreshHeighestBalloonRow();

	            data.newStartRow = this.CalculateSodaStartRow();
	            if (data.newStartRow == this.m_StartRow || data.newStartRow < 0) {
	                return false;
	            }
	            return true;
	        }

	        /// @brief      获取云石挖掘机新的起始行
	        /// @return     bool 如果有新的起始行，则返回true
	        /// @param      newStartRow
	        /// @note       如果新的起始行与原来的起始行相等，则表示不需要挖掘

	    }, {
	        key: "GetStoneMoveNewStartRow",
	        value: function GetStoneMoveNewStartRow() {
	            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { newStartRow: 0 };

	            if (Mgr.stageManager.PlayType() != config_p.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_ONEBYONE && Mgr.stageManager.PlayType() != config_p.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_MOSHING) return false;

	            data.newStartRow = this.CalculateStoneStartRow();
	            if (data.newStartRow == this.m_StartRow || data.newStartRow < 0) {
	                return false;
	            }
	            return true;
	        }
	    }, {
	        key: "CalculateBoardStartRow",
	        value: function CalculateBoardStartRow() {
	            var retRow = 0;
	            switch (Mgr.stageManager.PlayType()) {
	                case config_p.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_SODA:
	                    retRow = this.CalculateSodaStartRow();
	                    break;
	                case config_p.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_ONEBYONE:
	                case config_p.PUZZLE_PLAYTYPE.PLAY_TYPE_DIGGER_MOSHING:
	                    retRow = this.CalculateStoneStartRow();
	                    break;
	                default:
	                    break;
	            }

	            if (this.digger_type_ == DiggerType.kDiggerSokoban) retRow = this.notify_new_start_;

	            //if (retRow < 0)
	            //    WE4_ASSERT(false);
	            //
	            //if (retRow > Mgr.stageManager.Row() - Mgr.stageManager.ScreenRow())
	            //WE4_ASSERT(false);

	            return retRow;
	        }
	    }, {
	        key: "RefreshData",
	        value: function RefreshData() {
	            if (!Mgr.stageManager.IsDiggerType()) return;

	            var node = null;
	            var worldViewer = Mgr.worldViewer;
	            var count = worldViewer.NodeCount();
	            for (var i = 0; i < count; i++) {
	                node = worldViewer.GetNodeIndex(i);
	                if (node.HasChessType(we4p.ChessType.STIT_SOKOBAN_MAN)) {
	                    this.digger_type_ = DiggerType.kDiggerSokoban;
	                    break;
	                }
	            }
	            this.RefreshHeighestBalloonRow();
	            this.m_StartRow = this.CalculateBoardStartRow();
	        }
	    }, {
	        key: "GetStartRow",
	        value: function GetStartRow() {
	            return this.m_StartRow;
	        }
	    }], [{
	        key: "MoveScreen",
	        value: function MoveScreen(from, to) {
	            if (from.isEqual(to)) return;
	            //滚屏动画
	            //Animation().CreateAnimation(BatchData(BATCH_WAIT_LITTLE),
	            //    ANI_DATA(kAniIDClearBoard, false));
	            //PuzzleBoardAnimation::CraeteBoardByRow(from, to);
	            //PuzzleBoardAnimation::MoveBoardByRow(from, to);
	            //Animation().CreateAnimation(BatchData(BATCH_WAIT_LITTLE),
	            //    ANI_DATA(kAniIDClearBoard, false));
	            //PuzzleBoardAnimation::CraeteBoardInScreen();
	        }
	    }]);

	    return DiggerListener;
	}(puzzle_event.BoardEventListener);

	function CrushDonutsBombPhase2(c, info) {
	    var chess = c;

	    var row = chess.GetPosition().row;
	    var col = chess.GetPosition().col;

	    // clear around
	    var maxCol = Mgr.boardViewer.Col();
	    var rowTL = row - 2;
	    if (rowTL < 0) {
	        rowTL = 0;
	    }

	    var colTL = col - 2;
	    if (colTL < 0) {
	        colTL = 0;
	    }

	    var colBack = colTL;
	    var rowBR = row;

	    var colBR = col + 2;
	    if (colBR > maxCol) {
	        colBR = maxCol - 1;
	    }

	    info.attack_type = we4p.AttackType.Attack_Bomb;
	    for (; rowTL <= rowBR; rowTL++) {
	        for (colTL = colBack; colTL <= colBR; colTL++) {
	            if (row == rowTL && col == colTL) {
	                continue;
	            }

	            var posNode = Mgr.boardViewer.GetNode(rowTL, colTL);
	            if (posNode == null) continue;

	            posNode.Crush(info);
	        }
	    }
	}

	var DonutsBomb = function (_Module_Basic$BasicCh) {
	    _inherits(DonutsBomb, _Module_Basic$BasicCh);

	    function DonutsBomb() {
	        _classCallCheck(this, DonutsBomb);

	        return _possibleConstructorReturn(this, (DonutsBomb.__proto__ || Object.getPrototypeOf(DonutsBomb)).call(this, we4p.ChessType.STIT_DONUTSBOMB));
	    }

	    _createClass(DonutsBomb, [{
	        key: "PreInit",
	        value: function PreInit(type) {
	            _get(DonutsBomb.prototype.__proto__ || Object.getPrototypeOf(DonutsBomb.prototype), "PreInit", this).call(this, type);
	        }
	    }, {
	        key: "Release",
	        value: function Release() {}
	    }, {
	        key: "Crush",
	        value: function Crush(info) {
	            var chessData = this.ToChessData();
	            Mgr.dataCollector.addCrushChess(chessData);
	            //Animation().PushAnimationData(info->batch, ANI_DATA(kAniIDStaticExchange,
	            //    chessData, GetEmptyChessData()));

	            // 通知挖掘机滚屏
	            var digger = Mgr.eventManager.FindListener(puzzle_event.EventKey.kEventKeyDigger);
	            if (digger) {
	                digger.SetNeedHandle(true);
	            }
	            // PuzzleCompute::GetInstance().AdditionExplodedBoobCount();
	            var next_info = Util.clone(info);
	            next_info.around_attack = false;
	            //NextPhaseCall(CrushDonutsBombPhase2, this, next_info);
	            Mgr.curBoard.cacheSpecialBomb(new module_special.SpecialChessBomb(CrushDonutsBombPhase2, this, next_info));
	            return true;
	        }
	    }]);

	    return DonutsBomb;
	}(Module_Basic.BasicChess);

	var DiggerModule = function (_PModule) {
	    _inherits(DiggerModule, _PModule);

	    function DiggerModule() {
	        _classCallCheck(this, DiggerModule);

	        var _this3 = _possibleConstructorReturn(this, (DiggerModule.__proto__ || Object.getPrototypeOf(DiggerModule)).call(this));

	        _this3.listener_ = null;
	        return _this3;
	    }

	    _createClass(DiggerModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(DiggerModule.prototype.__proto__ || Object.getPrototypeOf(DiggerModule.prototype), "Init", this).call(this, board);

	            this.RegisterChess(we4p.ChessType.STIT_DONUTSBOMB);

	            if (Mgr.stageManager.IsDiggerType()) {
	                this.listener_ = new DiggerListener(board);
	                //WE4_ASSERT(listener_ != NULL);
	                Mgr.eventManager.AddEventListener(this.listener_, puzzle_event.EventPri.kEventPriDigger, puzzle_event.EventKey.kEventKeyDigger);
	            } else {
	                this.listener_ = null;
	            }

	            // soda关卡, 初始化水线
	            Mgr.envManager.SetSodaLine(Mgr.stageManager.Row());
	            if (Mgr.stageManager.IsSodaGame()) {
	                var line = Mgr.stageManager.GetDescValue(config_p.DESC_TYPE.DESC_SODA_LINE);
	                // 没有设置水线?
	                if (line == -1) {
	                    line = 0;
	                }
	                // 关卡配置内的水线不是行列, 但实际使用中我们更关心行数
	                var row = Mgr.stageManager.Row() - line;
	                Mgr.envManager.SetSodaLine(row);
	            }
	            return true;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            if (this.listener_) {
	                Mgr.eventManager.RemoveListener(this.listener_);
	            }
	            this.listener_ = null;
	            _get(DiggerModule.prototype.__proto__ || Object.getPrototypeOf(DiggerModule.prototype), "Release", this).call(this);
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            if (type == we4p.ChessType.STIT_DONUTSBOMB) {
	                this.newChessCount++;
	                return new DonutsBomb();
	            }

	            return null;
	        }
	    }], [{
	        key: "GetBoardStartRow",
	        value: function GetBoardStartRow() {
	            var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            var m = Mgr.moduleManager.FindModule(DiggerModule.sModuleName);
	            if (m && m.listener_) {
	                if (refresh) m.listener_.RefreshData();
	                return m.listener_.GetStartRow();
	            }
	            return 0;
	        }

	        //static sModuleName = "DiggerModule";

	    }]);

	    return DiggerModule;
	}(PModule);

	DiggerModule.sModuleName = "DiggerModule";

	module.exports = {
	    DiggerListener: DiggerListener,
	    DonutsBomb: DonutsBomb,
	    DiggerModule: DiggerModule
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * 蓝莓草地玩法
	 */

	var puzzle_event = puzzle_event || __webpack_require__(32);
	var we4p = we4p || __webpack_require__(13);
	var weType = weType || __webpack_require__(20);
	var PModule = PModule || __webpack_require__(37);
	var Mgr = Mgr || __webpack_require__(14);
	var Module_Basic = Module_Basic || __webpack_require__(38);
	var Util = Util || __webpack_require__(21);

	///单个方向的冲击波影响节点 - index 为 0时最靠近src
	//   typedef std::vector<GridPosition> SingleDirectionNodes;
	///所有攻击节点，按照行列分好
	//   typedef std::vector<SingleDirectionNodes> AttackLines;
	function LeftUpSortComp(a, b) {
	    // bool operator()(const GridPosition a, const GridPosition b) const
	    if (a.row > b.row) {
	        return -1;
	    } else if (a.row < b.row) {
	        return 1;
	    }

	    if (a.col > b.col) {
	        return -1;
	    } else if (a.col < b.col) {
	        return 1;
	    }

	    return 0;
	}

	function RightDownSortComp(a, b) {
	    if (a.row < b.row) {
	        return -1;
	    } else if (a.row > b.row) {
	        return 1;
	    }
	    if (a.col < b.col) {
	        return -1;
	    } else if (a.col > b.col) {
	        return 1;
	    }

	    return 0;
	}

	var BlueberryListener = function (_puzzle_event$BoardEv) {
	    _inherits(BlueberryListener, _puzzle_event$BoardEv);

	    function BlueberryListener(board) {
	        _classCallCheck(this, BlueberryListener);

	        var _this = _possibleConstructorReturn(this, (BlueberryListener.__proto__ || Object.getPrototypeOf(BlueberryListener)).call(this));

	        _this.RequestEvent(puzzle_event.PuzzleEvent.kEventCrushNode);
	        return _this;
	    }

	    _createClass(BlueberryListener, [{
	        key: "OnEvent",
	        value: function OnEvent(e) {
	            //console.log("BlueberryListener.OnEvent ");
	            if (Mgr.curBoard.GetGameState() == weType.PuzzleGameState.PGS_LASTPANG) {
	                return;
	            }

	            if (e.event_id != puzzle_event.PuzzleEvent.kEventCrushNode) {
	                return;
	            }

	            // let ev = dynamic_cast <CrushNodeEvent *> (e);
	            var ev = e;
	            if (ev.around_attack) {
	                return;
	            }

	            var src_node = Mgr.boardViewer.GetNode(ev.src);
	            var cur_blueberry_type = we4p.ChessType.STIT_BLUEBERRY;
	            // 人机对战的alpha狗铺的是坏蓝莓(枯草坪)
	            // if (Mgr.stageManager.IsAlphaGo() &&
	            //     "AlphaGo" == PlayerManager().current_player().Properties().Name) {
	            //     cur_blueberry_type = we4p.ChessType.STIT_BAD_BLUEBERRY;
	            // }
	            var opposite_blueberry_type = this.GetOppositeBlueberry(cur_blueberry_type);
	            if (ev.attack_type == we4p.AttackType.Attack_Normal) {
	                // 普通消除里面有可能同时存在蓝莓和坏蓝莓，如果是用户消除则蓝莓覆盖坏蓝莓
	                // 如果是AlphaGo消除则坏蓝莓覆盖蓝莓，调用两次AddNormal是一种取巧的方法，
	                // 一种类型铺满以后，在调用AddNormal相当于什么都不做
	                this.AddNormal(ev, cur_blueberry_type);
	                this.AddNormal(ev, opposite_blueberry_type);
	                return;
	            }
	            // 特殊消除看源头是什么类型就变什么类型
	            if (src_node.HasChessType(we4p.ChessType.STIT_BLUEBERRY)) {
	                cur_blueberry_type = we4p.ChessType.STIT_BLUEBERRY;
	            } else if (src_node.HasChessType(we4p.ChessType.STIT_BAD_BLUEBERRY)) {
	                cur_blueberry_type = we4p.ChessType.STIT_BAD_BLUEBERRY;
	            } else {
	                return;
	            }
	            // 重新计算相反类型
	            opposite_blueberry_type = this.GetOppositeBlueberry(cur_blueberry_type);
	            var allAttackLines = [];

	            if (ev.attack_type == we4p.AttackType.Attack_HorizontalShockWave || ev.attack_type == we4p.AttackType.Attack_VerticalShockWave || ev.attack_type == we4p.AttackType.Attack_CrossShockWave) {
	                allAttackLines = this.ClassifyNodesByDirection(ev.src, ev.nodes, allAttackLines);
	                this.HandleDirectionalCrush(ev.ani_batch_id, allAttackLines, cur_blueberry_type);
	            } else if (ev.attack_type == we4p.AttackType.Attack_ThickCrossShockWave) {
	                ///三线性
	                ///先取出中心点
	                var centerPoints = [];
	                centerPoints.push(Util.clone(ev.src)); ///中间
	                centerPoints.push(new weType.GridPosition(ev.src.row - 1, ev.src.col));
	                centerPoints.push(new weType.GridPosition(ev.src.row + 1, ev.src.col));
	                centerPoints.push(new weType.GridPosition(ev.src.row, ev.src.col + 1));
	                centerPoints.push(new weType.GridPosition(ev.src.row, ev.src.col - 1));

	                ///类似5个位置的十字冲击波
	                allAttackLines = new Array(5);
	                for (var i = 0; i < 5; ++i) {
	                    allAttackLines[i] = [];
	                    allAttackLines[i] = this.ClassifyNodesByDirection(centerPoints[i], ev.nodes, allAttackLines[i]);
	                    this.HandleDirectionalCrush(ev.ani_batch_id, allAttackLines[i], cur_blueberry_type);
	                }
	            } else {
	                ///其他是不阻挡的
	                for (var _i = 0; _i < ev.nodes.length; _i++) {
	                    var n = Mgr.boardViewer.GetNode(ev.nodes[_i]);
	                    if (n == null) continue;
	                    if (!n.CanSetBlueberry()) continue;
	                    if (!n.HasChessType(cur_blueberry_type)) {
	                        // 把蓝莓的相反状态清除
	                        this.RemoveOppositeBlueberry(n, cur_blueberry_type);
	                        n.AddChess(cur_blueberry_type);

	                        Mgr.dataCollector.addBgChess(n.ToChessData(0));
	                        // play_ani_add_chess(ev.ani_batch_id, n.ToChessData(0));
	                    }
	                }
	            }
	        }
	        // 平均蓝莓和坏蓝莓

	    }, {
	        key: "AverageBlueberry",
	        value: function AverageBlueberry() {}
	    }, {
	        key: "AddNormal",
	        value: function AddNormal(ev, cur_blueberry_type) {
	            var set_blue = false,
	                i,
	                len = ev.nodes.length,
	                node;
	            for (i = 0; i < len; i++) {
	                node = Mgr.boardViewer.GetNode(ev.nodes[i]);
	                if (node.HasChessType(cur_blueberry_type) && !(node.HasOneOf(we4p.ChessType.STIT_CAGE) || node.HasOneOf(we4p.ChessType.STIT_CAGE2) || node.HasOneOf(we4p.ChessType.STIT_FOAM_CELL))) {
	                    set_blue = true;
	                    break;
	                }
	            }
	            if (!set_blue) return;
	            for (i = 0; i < len; i++) {
	                node = Mgr.boardViewer.GetNode(ev.nodes[i]);
	                if (!node.CanSetBlueberry()) continue;
	                if (!node.HasChessType(cur_blueberry_type)) {
	                    // 把蓝莓的相反状态清除
	                    this.RemoveOppositeBlueberry(node, cur_blueberry_type);
	                    node.AddChess(cur_blueberry_type);
	                    Mgr.dataCollector.addBgChess(node.ToChessData(0));
	                    // play_ani_add_chess(ev.ani_batch_id, node.ToChessData(0));
	                }
	            }
	        }

	        ///把以srcNode为中心的的一系列点（allAtkNodes）
	        ///按照 上（0） 下（1） 左（2） 右（3）

	    }, {
	        key: "ClassifyNodesByDirection",
	        value: function ClassifyNodesByDirection(srcNode, allAtkNodes, classifiedNodes) {
	            ///上半边 - 按照中心辐射向外排序
	            // let upDiretion
	            // ///下半边 - 按照中心辐射向外排序
	            // let downDiretion
	            // ///左半边 - 按照中心辐射向外排序
	            // let leftDiretion
	            // ///右半边 - 按照中心辐射向外排序
	            // let rightDiretion

	            ///上半边 - 按照中心辐射向外排序
	            var upDiretion = [];
	            ///下半边 - 按照中心辐射向外排序
	            var downDiretion = [];
	            ///左半边 - 按照中心辐射向外排序
	            var leftDiretion = [];
	            ///右半边 - 按照中心辐射向外排序
	            var rightDiretion = [];

	            ///遍历，分类
	            for (var nodeCnt = 0; nodeCnt < allAtkNodes.length; nodeCnt++) {
	                var currentAtkNode = allAtkNodes[nodeCnt];
	                if (currentAtkNode.isEqual(srcNode)) {
	                    ///自身，不处理
	                } else if (currentAtkNode.col == srcNode.col) {
	                    ///同一列，分上下
	                    if (currentAtkNode.row < srcNode.row) {
	                        ///上边
	                        upDiretion.push(new weType.GridPosition(currentAtkNode));
	                    } else if (currentAtkNode.row > srcNode.row) {
	                        ///下边
	                        downDiretion.push(new weType.GridPosition(currentAtkNode));
	                    }
	                } else if (currentAtkNode.row == srcNode.row) {
	                    ///同一行，分左右
	                    if (currentAtkNode.col < srcNode.col) {
	                        ///左边
	                        leftDiretion.push(new weType.GridPosition(currentAtkNode));
	                    } else if (currentAtkNode.col > srcNode.col) {
	                        ///右边
	                        rightDiretion.push(new weType.GridPosition(currentAtkNode));
	                    }
	                }
	            }

	            // 这又是什么鬼 @TODO

	            // std::stable_sort(upDiretion.begin(), upDiretion.end(), LeftUpSortComp);
	            // std::stable_sort(leftDiretion.begin(), leftDiretion.end(), LeftUpSortComp);
	            // std::stable_sort(rightDiretion.begin(), rightDiretion.end(),
	            //                 RightDownSortComp());
	            // std::stable_sort(downDiretion.begin(), downDiretion.end(),
	            //                 RightDownSortComp());
	            upDiretion.sort(LeftUpSortComp);
	            leftDiretion.sort(LeftUpSortComp);
	            rightDiretion.sort(RightDownSortComp);
	            downDiretion.sort(RightDownSortComp);

	            classifiedNodes.push(upDiretion);
	            classifiedNodes.push(downDiretion);
	            classifiedNodes.push(leftDiretion);
	            classifiedNodes.push(rightDiretion);

	            return classifiedNodes;
	        }
	        ///处理线性带方向的引爆

	    }, {
	        key: "HandleDirectionalCrush",
	        value: function HandleDirectionalCrush(iBatchID, allAttackLines, cur_blueberry_type) {
	            ///线性的
	            var lineCnt = allAttackLines.length;
	            for (var i = 0; i < lineCnt; i++) {
	                var pointCnt = allAttackLines[i].length;
	                for (var j = 0; j < pointCnt; j++) {
	                    var n = Mgr.boardViewer.GetNode(allAttackLines[i][j]);
	                    if (n == null) continue;
	                    ///阻挡蓝莓
	                    // if (n.CanBlockBlueberry()) continue;
	                    if (!n.CanSetBlueberry()) continue;
	                    if (!n.HasChessType(cur_blueberry_type)) {
	                        // 把蓝莓的相反状态清除
	                        this.RemoveOppositeBlueberry(n, cur_blueberry_type);
	                        n.AddChess(cur_blueberry_type);
	                        // @TODO 动画？
	                        Mgr.dataCollector.addBgChess(n.ToChessData(0));
	                        // play_ani_add_chess(iBatchID, n.ToChessData(0))
	                    }
	                }
	            }
	        }
	        // 获取蓝莓的相反状态，蓝莓返回坏蓝莓，坏蓝莓返回蓝莓

	    }, {
	        key: "GetOppositeBlueberry",
	        value: function GetOppositeBlueberry(type) {
	            if (type == we4p.ChessType.STIT_BLUEBERRY) {
	                return we4p.ChessType.STIT_BAD_BLUEBERRY;
	            } else if (type == we4p.ChessType.STIT_BAD_BLUEBERRY) {
	                return we4p.ChessType.STIT_BLUEBERRY;
	            } else {
	                // WE4_ASSERT(false)
	                return we4p.ChessType.STIT_NONE;
	            }
	        }
	        // 把蓝莓的相反状态清除

	    }, {
	        key: "RemoveOppositeBlueberry",
	        value: function RemoveOppositeBlueberry(node, blueberry_type) {
	            if (null == node) {
	                return false;
	            }
	            var opposite_blueberry_type = this.GetOppositeBlueberry(blueberry_type);
	            if (!node.HasChessType(opposite_blueberry_type)) {
	                return false;
	            }

	            // @TODO 动画处理？
	            // int last_batch_num = Animation().GetBatchVectorLastBatchIndex();

	            // we4::ChessData chessData;
	            // chessData = node - > ToChessData(0);
	            // Animation().PushAnimationData(last_batch_num, ANI_DATA(kAniIDStaticExchange,
	            //     chessData, node - > GetEmptyChessData(0)));
	            // node - > RemoveChess(opposite_blueberry_type);
	            // PuzzleCompute::GetInstance().DecreaseStaticCount(opposite_blueberry_type);

	            var chessData = node.ToChessData(0);
	            node.RemoveChess(opposite_blueberry_type);

	            return true;
	        }
	    }]);

	    return BlueberryListener;
	}(puzzle_event.BoardEventListener);

	// node不需要这么遍历
	// #define for_each_node_pos_vec(vec, node)                                       \
	//   for (size_t __i = 0;                                                         \
	//        __i < (vec).size() && (node = Mgr.boardViewer->GetNode(vec[__i]), true); \
	//        __i++)

	// @TODO 动画？
	// static void play_ani_add_chess(int batch, we4::ChessData chessData)
	// {
	//   we4::ChessData emptyChess = we4::ChessData::default_instance();
	//   emptyChess.mutable_pos()->set_row(chessData.pos().row());
	//   emptyChess.mutable_pos()->set_col(chessData.pos().col());
	//   Animation().PushAnimationData(batch, ANI_DATA(kAniIDStaticExchange,
	//                                                 emptyChess, chessData));
	// }
	// function play_ani_add_chess(chessData) {
	//     Mgr.dataCollector.addBgChess(chessData)
	// }


	var BlueberryModule = function (_PModule) {
	    _inherits(BlueberryModule, _PModule);

	    function BlueberryModule() {
	        _classCallCheck(this, BlueberryModule);

	        var _this2 = _possibleConstructorReturn(this, (BlueberryModule.__proto__ || Object.getPrototypeOf(BlueberryModule)).call(this));

	        _this2.listener_ = null;
	        return _this2;
	    }

	    _createClass(BlueberryModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(BlueberryModule.prototype.__proto__ || Object.getPrototypeOf(BlueberryModule.prototype), "Init", this).call(this, board);
	            this.RegisterChess(we4p.ChessType.STIT_BLUEBERRY);
	            this.RegisterChess(we4p.ChessType.STIT_BAD_BLUEBERRY);
	            this.listener_ = new BlueberryListener(board);
	            Mgr.eventManager.AddEventListener(this.listener_, puzzle_event.EventPri.kEventPriGlobalBlueberry);
	            return true;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            Mgr.eventManager.RemoveListener(this.listener_);
	            this.listener_ = null;
	            _get(BlueberryModule.prototype.__proto__ || Object.getPrototypeOf(BlueberryModule.prototype), "Release", this).call(this);
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            this.newChessCount++;
	            return new Blueberry(type);
	        }
	    }]);

	    return BlueberryModule;
	}(PModule);

	var Blueberry = function (_Module_Basic$BasicEv) {
	    _inherits(Blueberry, _Module_Basic$BasicEv);

	    function Blueberry(type) {
	        _classCallCheck(this, Blueberry);

	        return _possibleConstructorReturn(this, (Blueberry.__proto__ || Object.getPrototypeOf(Blueberry)).call(this, type, puzzle_event.EventPri.kEventPriBlueberry));
	    }

	    _createClass(Blueberry, [{
	        key: "PreInit",
	        value: function PreInit(type) {
	            _get(Blueberry.prototype.__proto__ || Object.getPrototypeOf(Blueberry.prototype), "PreInit", this).call(this, type);
	        }
	    }, {
	        key: "Release",
	        value: function Release() {}
	    }, {
	        key: "Init",
	        value: function Init(attach) {}
	    }, {
	        key: "OnEvent",
	        value: function OnEvent(e) {}
	    }, {
	        key: "Backup",
	        value: function Backup() {
	            // @TODO 这什么鬼
	            // let c = new Blueberry(this.Type());
	            // Object.assign(c, this)
	            // * c = * this;
	            // return c;
	        }
	    }, {
	        key: "Restore",
	        value: function Restore(from) {
	            // @TODO 不懂
	            // Blueberry * c = dynamic_cast < Blueberry * > (from);
	            // * this = * c;
	        }
	    }, {
	        key: "PostInit",
	        value: function PostInit() {}
	    }]);

	    return Blueberry;
	}(Module_Basic.BasicEventChess);

	module.exports = {
	    Blueberry: Blueberry,
	    BlueberryModule: BlueberryModule,
	    BlueberryListener: BlueberryListener
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var puzzle_event = puzzle_event || __webpack_require__(32);
	var we4p = we4p || __webpack_require__(13);
	var weType = weType || __webpack_require__(20);
	var PModule = PModule || __webpack_require__(37);
	var Mgr = Mgr || __webpack_require__(14);
	var Module_Basic = Module_Basic || __webpack_require__(38);

	var CandyPot = function (_Module_Basic$BasicEv) {
	    _inherits(CandyPot, _Module_Basic$BasicEv);

	    function CandyPot(type) {
	        _classCallCheck(this, CandyPot);

	        return _possibleConstructorReturn(this, (CandyPot.__proto__ || Object.getPrototypeOf(CandyPot)).call(this, type, puzzle_event.EventPri.kEventPriCandyPot));
	    }

	    _createClass(CandyPot, [{
	        key: "Init",
	        value: function Init(attach) {
	            _get(CandyPot.prototype.__proto__ || Object.getPrototypeOf(CandyPot.prototype), "Init", this).call(this, attach);
	        }
	    }, {
	        key: "Backup",
	        value: function Backup() {}
	    }, {
	        key: "Restore",
	        value: function Restore() {}
	    }, {
	        key: "OnEvent",
	        value: function OnEvent(e) {
	            if (e.event_id !== puzzle_event.PuzzleEvent.kEventCrushDropState) {
	                return;
	            }
	            if (!this.need_put_candy_) {
	                return;
	            }
	            this.need_put_candy_ = false;
	            var node = Mgr.boardViewer.GetNode(this.candy_pos_);
	            if (!node.CanGenerateCandy()) {
	                return;
	            }
	            var oldNodeData = node.ToChessData();
	            node.AddChess(we4p.ChessType.CT_COLLECTCANDY);
	            Mgr.aniManager.GenerateReplace({
	                replaceList: [{
	                    from: this.ToChessData(),
	                    removed: [oldNodeData],
	                    created: [node.ToChessData()]
	                }]
	            });
	        }
	    }, {
	        key: "Crush",
	        value: function Crush(info) {
	            var batch = info.batch;
	            var pos = this.GetPosition();
	            var candy_pos_ = new weType.GridPosition(pos.row + 1, pos.col);
	            var candy_node = Mgr.boardViewer.GetNode(candy_pos_);
	            if (candy_node) {
	                this.need_put_candy_ = true;
	                this.candy_pos_ = candy_pos_;
	            }
	            Mgr.aniManager.GenerateAttack(this.ToChessData());
	            return false;
	        }
	    }]);

	    return CandyPot;
	}(Module_Basic.BasicEventChess);

	var CandyPotModule = function (_PModule) {
	    _inherits(CandyPotModule, _PModule);

	    function CandyPotModule(props) {
	        _classCallCheck(this, CandyPotModule);

	        return _possibleConstructorReturn(this, (CandyPotModule.__proto__ || Object.getPrototypeOf(CandyPotModule)).call(this, props));
	    }

	    _createClass(CandyPotModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(CandyPotModule.prototype.__proto__ || Object.getPrototypeOf(CandyPotModule.prototype), "Init", this).call(this, board);
	            this.RegisterChess(we4p.ChessType.STIT_CANDYPOT);
	            this.RegisterChess(we4p.ChessType.CT_COLLECTCANDY);
	            return true;
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            if (type == we4p.ChessType.STIT_CANDYPOT) {
	                this.newChessCount++;
	                // kEventPriCandyPot
	                return new CandyPot(type);
	            }
	            if (type == we4p.ChessType.CT_COLLECTCANDY) {
	                this.newChessCount++;
	                return new Module_Basic.BasicChess(type);
	            }
	            return null;
	        }
	    }]);

	    return CandyPotModule;
	}(PModule);

	module.exports = {
	    CandyPotModule: CandyPotModule,
	    CandyPot: CandyPot
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by billbao on 2017/3/16.
	 */
	var PModule = PModule || __webpack_require__(37);

	var we4p = we4p || __webpack_require__(13);
	var config_p = config_p || __webpack_require__(12);
	var weType = weType || __webpack_require__(20);
	var Mgr = Mgr || __webpack_require__(14);
	var puzzle_event = puzzle_event || __webpack_require__(32);
	var Util = Util || __webpack_require__(21);
	var puzzle_rand = puzzle_rand || __webpack_require__(22);
	var Module_Basic = Module_Basic || __webpack_require__(38);

	function CanSetMaoqiu(row, col) {
	    var node = Mgr.boardViewer.GetNode(row, col);
	    if (node == null) return false;
	    if (!node.IsAvailable()) return false;
	    if (node.GetChess() == null) return false;
	    var c = [];
	    node.GetAllChess(c);
	    for (var i = 0; i < we4p.ChessLayer.kChessLayerNum; i++) {
	        if (c[i] && c[i].Attribute()) {
	            if (!c[i].Attribute().CanSetMaoqiu) return false;
	        }
	    }

	    return true;
	}

	function GetCanBeMaoQiuVec(board, row, col, canUseVec) {
	    if (CanSetMaoqiu(row - 1, col)) {
	        canUseVec.push(new weType.GridPosition(row - 1, col));
	    }

	    if (CanSetMaoqiu(row + 1, col)) {
	        canUseVec.push(new weType.GridPosition(row + 1, col));
	    }

	    if (CanSetMaoqiu(row, col - 1)) {
	        canUseVec.push(new weType.GridPosition(row, col - 1));
	    }

	    if (CanSetMaoqiu(row, col + 1)) {
	        canUseVec.push(new weType.GridPosition(row, col + 1));
	    }
	}

	var MaoqiuJumpListener = function (_puzzle_event$BoardEv) {
	    _inherits(MaoqiuJumpListener, _puzzle_event$BoardEv);

	    function MaoqiuJumpListener(board) {
	        _classCallCheck(this, MaoqiuJumpListener);

	        var _this = _possibleConstructorReturn(this, (MaoqiuJumpListener.__proto__ || Object.getPrototypeOf(MaoqiuJumpListener)).call(this));

	        _this.board_ = board;
	        _this.need_handle_ = false;
	        _this.jump_list_ = {};
	        return _this;
	    }

	    _createClass(MaoqiuJumpListener, [{
	        key: "OnEvent",
	        value: function OnEvent(e) {
	            switch (e.event_id) {
	                case puzzle_event.PuzzleEvent.kEventSlide:
	                    this.need_handle_ = true;
	                    break;
	                case puzzle_event.PuzzleEvent.kEventBalanceState:
	                    this.OnBalanceState();
	                    break;
	                case puzzle_event.PuzzleEvent.kEventGameRelease:
	                    delete this;
	                    return;
	                default:
	                    return;
	            }
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            delete this;
	        }
	    }, {
	        key: "OnBalanceState",
	        value: function OnBalanceState() {
	            if (!this.need_handle_) {
	                // 不需要处理
	                return;
	            }
	            if (this.board_.GetGameState() == weType.PuzzleGameState.PGS_LASTPANG) return;
	            this.need_handle_ = false;

	            var selfIndex = 0; //Animation().GetOneAnimationBatch(BatchData(BATCH_WAIT_LAST));
	            var maoQiuPosVec = [];

	            var node = null;
	            var count = Mgr.boardViewer.NodeCount();
	            for (var i = 0; i < count; i++) {
	                node = Mgr.boardViewer.GetNodeIndex(i);
	                if (node.HasChessType(we4p.ChessType.STIT_MAOQIU1)) {
	                    maoQiuPosVec.push(node.GetPosition());
	                    continue;
	                }
	                if (node.HasChessType(we4p.ChessType.STIT_MAOQIU2)) {
	                    var m = node.GetChess(we4p.ChessLayer.kChessLayer2);
	                    if (m == null) continue;
	                    if (m.need_split()) continue;
	                    maoQiuPosVec.push(node.GetPosition());
	                }
	            }

	            if (maoQiuPosVec.length == 0) return;

	            var len = maoQiuPosVec.length;

	            for (var i = 0; i < len; i++) {
	                var it = maoQiuPosVec[i];
	                var row = it.row;
	                var col = it.col;

	                var canUseVec = [];
	                GetCanBeMaoQiuVec(this.board_, row, col, canUseVec);
	                if (canUseVec.length <= 0) {
	                    continue;
	                }

	                var randnum = puzzle_rand.PuzzleRand("mq(115)");
	                var size = canUseVec.length;
	                var index = randnum % size;
	                var destPos = canUseVec[index];
	                var staticItemType = we4p.ChessType.STIT_MAOQIU1;
	                if (Mgr.boardViewer.HasChessType(it, we4p.ChessType.STIT_MAOQIU2)) {
	                    staticItemType = we4p.ChessType.STIT_MAOQIU2;
	                }
	                // board_->ClearStaticItemType(row, col, staticItemType);
	                // board_->AddStaticItemType(destPos.row, destPos.col, staticItemType);
	                var n1 = Mgr.boardViewer.GetNode(new weType.GridPosition(row, col));
	                var n2 = Mgr.boardViewer.GetNode(new weType.GridPosition(destPos));
	                if (n1 == null || n2 == null) {
	                    continue;
	                }

	                //Animation().PushAnimationData(
	                //    selfIndex, ANI_DATA(kAniIDStaticItemWalk, n1->ToChessData(2), destPos));
	                Mgr.aniManager.GenerateMaoQiuJumpAni(2, n1.ToChessData(2), n1.GetPosition(), destPos);

	                n1.MoveChessTo(staticItemType, n2);
	            }

	            this.board_.BreakBalance();

	            return;
	        }
	    }]);

	    return MaoqiuJumpListener;
	}(puzzle_event.BoardEventListener);

	var MaoqiuSplitListener = function (_puzzle_event$BoardEv2) {
	    _inherits(MaoqiuSplitListener, _puzzle_event$BoardEv2);

	    function MaoqiuSplitListener(board) {
	        _classCallCheck(this, MaoqiuSplitListener);

	        var _this2 = _possibleConstructorReturn(this, (MaoqiuSplitListener.__proto__ || Object.getPrototypeOf(MaoqiuSplitListener)).call(this));

	        _this2.board_ = board;
	        _this2.split_list_ = {};
	        return _this2;
	    }

	    _createClass(MaoqiuSplitListener, [{
	        key: "OnEvent",
	        value: function OnEvent(e) {
	            switch (e.event_id) {
	                case puzzle_event.PuzzleEvent.kEventBalanceState:
	                    this.OnBalanceState();
	                    break;
	                case puzzle_event.PuzzleEvent.kEventGameRelease:
	                    delete this;
	                    return;
	                default:
	                    return;
	            }
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            delete this;
	        }
	    }, {
	        key: "OnBalanceState",
	        value: function OnBalanceState() {
	            if (this.board_.GetGameState() == weType.PuzzleGameState.PGS_LASTPANG) return;

	            var maoQiuPosVec = [];
	            var node = null;

	            var count = Mgr.boardViewer.NodeCount();
	            for (var i = 0; i < count; i++) {
	                node = Mgr.boardViewer.GetNodeIndex(i);
	                if (!node.HasChessType(we4p.ChessType.STIT_MAOQIU2)) continue;
	                var m = node.GetChess(we4p.ChessLayer.kChessLayer2);
	                if (m == null) continue;
	                if (m.need_split()) {
	                    maoQiuPosVec.push(node.GetPosition());
	                    m.set_need_split(false);
	                }
	            }

	            var selfIndex = 0; //Animation().GetOneAnimationBatch(BatchData(BATCH_WAIT_LAST));
	            var len = maoQiuPosVec.length;

	            for (var i = 0; i < len; i++) {
	                var it = maoQiuPosVec[i];
	                var row = it.row;
	                var col = it.col;

	                var canUseVec = [];
	                GetCanBeMaoQiuVec(this.board_, row, col, canUseVec);

	                var srcChess = Mgr.boardViewer.GetNode(it).ToChessData(2);
	                var splitList = [];
	                // 移除maoqiu2并就地放一个maoqiu1
	                Mgr.boardViewer.RemoveChess(it, we4p.ChessType.STIT_MAOQIU2);
	                if (CanSetMaoqiu(row, col)) {
	                    Mgr.boardViewer.AddChess(it, we4p.ChessType.STIT_MAOQIU1);
	                    splitList.push(Mgr.boardViewer.GetNode(it).ToChessData(2));
	                    ///这里也先伪造吧，
	                    //var chessData = new we4p.ChessData();
	                    //var emptyChessData = new we4p.ChessData();
	                    //
	                    //var pos = chessData.pos;
	                    //pos.row = row;
	                    //pos.col = col;
	                    //chessData.type = we4p.ChessType.STIT_MAOQIU2;
	                    //
	                    //emptyChessData = Util.clone(chessData);
	                    //emptyChessData.type = we4p.ChessType.STIT_NONE;
	                    //Animation().PushAnimationData(selfIndex, ANI_DATA(kAniIDStaticExchange,
	                    //    chessData, emptyChessData));
	                }

	                // 在周边可放maoqiu1的格子再放一个maoqiu1
	                if (canUseVec.length > 0) {
	                    var index = puzzle_rand.PuzzleRand("mq(219)") % canUseVec.length;
	                    var destPos = canUseVec[index];
	                    Mgr.boardViewer.AddChess(destPos, we4p.ChessType.STIT_MAOQIU1);
	                    splitList.push(Mgr.boardViewer.GetNode(destPos).ToChessData(2));
	                    ///继续伪造
	                    //var chessData = new we4p.ChessData();
	                    //var emptyChessData = new we4p.ChessData();
	                    //
	                    //var pos = chessData.pos;
	                    //pos.row = destPos.row;
	                    //pos.col = destPos.col;
	                    //chessData.type = we4p.ChessType.STIT_MAOQIU1;
	                    //
	                    //emptyChessData = Util.clone(chessData);
	                    //emptyChessData.type = we4p.ChessType.STIT_NONE;
	                    //Animation().PushAnimationData(selfIndex, ANI_DATA(kAniIDStaticExchange,
	                    //    emptyChessData, chessData));
	                }

	                if (splitList.length > 0) {
	                    Mgr.aniManager.GenerateMaoQiuSplitAni(srcChess, splitList);
	                }
	            }

	            return;
	        }
	    }]);

	    return MaoqiuSplitListener;
	}(puzzle_event.BoardEventListener);

	var Maoqiu = function (_Module_Basic$BasicCh) {
	    _inherits(Maoqiu, _Module_Basic$BasicCh);

	    function Maoqiu(type) {
	        _classCallCheck(this, Maoqiu);

	        var _this3 = _possibleConstructorReturn(this, (Maoqiu.__proto__ || Object.getPrototypeOf(Maoqiu)).call(this, type));

	        _this3.spliter_ = null;
	        _this3.jumper_ = null;
	        return _this3;
	    }

	    _createClass(Maoqiu, [{
	        key: "Init",
	        value: function Init() {
	            var l = null;
	            if (this.Type() == we4p.ChessType.STIT_MAOQIU2) {
	                l = Mgr.eventManager.FindListener(puzzle_event.EventKey.kEventKeyMaoqiuSplit);
	                if (l == null) {
	                    // 如果处理毛球分裂的事件listener没有准备好
	                    // 就初始化一个
	                    this.spliter_ = new MaoqiuSplitListener(Mgr.curBoard);
	                    this.AddEventListener(this.spliter_, puzzle_event.EventKey.kEventPriMaoqiuSplit, puzzle_event.EventKey.kEventKeyMaoqiuSplit);
	                    // spliter_->Add(this);
	                } else {
	                    this.spliter_ = l;
	                    // spliter_->Add(this);
	                }
	            }

	            l = Mgr.eventManager.FindListener(puzzle_event.EventKey.kEventKeyMaoqiuJump);
	            if (l == null) {
	                this.jumper_ = new MaoqiuJumpListener(Mgr.curBoard);
	                this.AddEventListener(this.jumper_, puzzle_event.EventKey.kEventPriMaoqiuJump, puzzle_event.EventKey.kEventKeyMaoqiuJump);
	                // jumper_->Add(this);
	            } else {
	                this.jumper_ = l;
	                // jumper_->Add(this);
	            }
	        }
	    }, {
	        key: "Backup",
	        value: function Backup() {
	            //Maoqiu *m = dynamic_cast<Maoqiu *>(BasicChess::Backup());
	            //    m->spliter_ = spliter_;
	            //    m->jumper_ = jumper_;
	            //return m;
	        }
	    }, {
	        key: "Restore",
	        value: function Restore(from) {
	            //BasicChess::Restore(from);
	            //Maoqiu *m = dynamic_cast<Maoqiu *>(from);
	            //spliter_ = m->spliter_;
	            //jumper_ = m->jumper_;
	        }
	    }]);

	    return Maoqiu;
	}(Module_Basic.BasicChess);

	// 2级毛球类


	var Maoqiu2 = function (_Maoqiu) {
	    _inherits(Maoqiu2, _Maoqiu);

	    function Maoqiu2() {
	        _classCallCheck(this, Maoqiu2);

	        var _this4 = _possibleConstructorReturn(this, (Maoqiu2.__proto__ || Object.getPrototypeOf(Maoqiu2)).call(this, we4p.ChessType.STIT_MAOQIU2));

	        _this4.need_split_ = false;
	        return _this4;
	    }

	    _createClass(Maoqiu2, [{
	        key: "need_split",
	        value: function need_split() {
	            return this.need_split_;
	        }
	    }, {
	        key: "set_need_split",
	        value: function set_need_split(b) {
	            this.need_split_ = b;
	        }
	    }, {
	        key: "Crush",
	        value: function Crush(info) {
	            var batch = info.batch;
	            if (this.need_split_) return false;
	            this.need_split_ = true;
	            //Animation().PushAnimationData(batch, ANI_DATA(kAniIDGenerateAttack, ToChessData()));
	            Mgr.aniManager.GenerateAttack(this.ToChessData());
	            // 毛球2不能被直接消除
	            return false;
	        }
	    }, {
	        key: "Backup",
	        value: function Backup() {
	            //    Maoqiu2 *m = new Maoqiu2();
	            //*m = *this;
	            //    return m;
	        }
	    }, {
	        key: "Restore",
	        value: function Restore(from) {
	            //    Maoqiu2 *c = dynamic_cast<Maoqiu2 *>(from);
	            //*this = *c;
	        }
	    }]);

	    return Maoqiu2;
	}(Maoqiu);

	// 1级毛球类


	var Maoqiu1 = function (_Maoqiu2) {
	    _inherits(Maoqiu1, _Maoqiu2);

	    function Maoqiu1() {
	        _classCallCheck(this, Maoqiu1);

	        return _possibleConstructorReturn(this, (Maoqiu1.__proto__ || Object.getPrototypeOf(Maoqiu1)).call(this, we4p.ChessType.STIT_MAOQIU1));
	    }

	    _createClass(Maoqiu1, [{
	        key: "Crush",
	        value: function Crush(info) {

	            var res = _get(Maoqiu1.prototype.__proto__ || Object.getPrototypeOf(Maoqiu1.prototype), "Crush", this).call(this, info);
	            if (res) {
	                Mgr.dataCollector.addCrushTopChess(this.ToChessData());
	            }
	            return res;
	        }
	    }]);

	    return Maoqiu1;
	}(Maoqiu);

	var MaoqiuModule = function (_PModule) {
	    _inherits(MaoqiuModule, _PModule);

	    function MaoqiuModule() {
	        _classCallCheck(this, MaoqiuModule);

	        return _possibleConstructorReturn(this, (MaoqiuModule.__proto__ || Object.getPrototypeOf(MaoqiuModule)).call(this));
	    }

	    _createClass(MaoqiuModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(MaoqiuModule.prototype.__proto__ || Object.getPrototypeOf(MaoqiuModule.prototype), "Init", this).call(this, board);
	            this.RegisterChess(we4p.ChessType.STIT_MAOQIU1);
	            this.RegisterChess(we4p.ChessType.STIT_MAOQIU2);
	            return true;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            Mgr.eventManager.RemoveListener(puzzle_event.EventKey.kEventKeyMaoqiuSplit);
	            Mgr.eventManager.RemoveListener(puzzle_event.EventKey.kEventKeyMaoqiuJump);
	            _get(MaoqiuModule.prototype.__proto__ || Object.getPrototypeOf(MaoqiuModule.prototype), "Release", this).call(this);
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            if (type == we4p.ChessType.STIT_MAOQIU1) return new Maoqiu1();else if (type == we4p.ChessType.STIT_MAOQIU2) return new Maoqiu2();else return null;
	        }
	    }]);

	    return MaoqiuModule;
	}(PModule);

	module.exports = {
	    MaoqiuJumpListener: MaoqiuJumpListener,
	    MaoqiuSplitListener: MaoqiuSplitListener,
	    Maoqiu: Maoqiu,
	    Maoqiu2: Maoqiu2,
	    Maoqiu1: Maoqiu1,
	    MaoqiuModule: MaoqiuModule
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var puzzle_event = puzzle_event || __webpack_require__(32);
	var we4p = we4p || __webpack_require__(13);
	var weType = weType || __webpack_require__(20);
	var PModule = PModule || __webpack_require__(37);
	var Mgr = Mgr || __webpack_require__(14);
	var Module_Basic = Module_Basic || __webpack_require__(38);

	var MushroomListener = function (_puzzle_event$BoardEv) {
	    _inherits(MushroomListener, _puzzle_event$BoardEv);

	    function MushroomListener(props) {
	        _classCallCheck(this, MushroomListener);

	        return _possibleConstructorReturn(this, (MushroomListener.__proto__ || Object.getPrototypeOf(MushroomListener)).call(this, props));
	    }

	    _createClass(MushroomListener, [{
	        key: "OnEvent",
	        value: function OnEvent(e) {
	            switch (e.event_id) {
	                case puzzle_event.PuzzleEvent.kEventBalanceState:
	                    this.MushroomAction();
	                    this.need_handle_ = false;
	                    break;
	                case puzzle_event.PuzzleEvent.kEventSlide:
	                    this.need_handle_ = true;
	                    break;
	                case puzzle_event.PuzzleEvent.kEventUseItem:
	                    this.need_handle_ = false;
	                    break;
	                default:
	                    return;
	            }
	        }
	    }, {
	        key: "MushroomAction",
	        value: function MushroomAction() {
	            if (!this.need_handle_) return;

	            // lastpang不产生小蘑菇
	            if (Mgr.curBoard.GetGameState() == weType.PuzzleGameState.PGS_LASTPANG) {
	                return;
	            }

	            this.CreateLittleMushroomInBoard();
	        }
	    }, {
	        key: "SetNeedHandle",
	        value: function SetNeedHandle(b) {
	            this.need_handle_ = b;
	        }
	    }, {
	        key: "CreateLittleMushroomInBoard",
	        value: function CreateLittleMushroomInBoard() {
	            var allRow = Mgr.boardViewer.Row();
	            var allCol = Mgr.boardViewer.Col();
	            var replaceList = [];
	            for (var iRow = 0; iRow < allRow; iRow++) {
	                for (var iCol = 0; iCol < allCol; iCol++) {
	                    var puzzleChessNode = Mgr.boardViewer.GetNode(iRow, iCol);
	                    if (!puzzleChessNode.HasOneOf(we4p.ChessType.STIT_HUGEMUSHROOM)) {
	                        continue;
	                    }
	                    var node = this.CreateLittleMushroom(iRow, iCol);
	                    if (node) {
	                        var oldNodeData = node.ToChessData();

	                        // 清除原来的棋子
	                        node.ClearChess();

	                        // 放上小蘑菇
	                        node.AddChess(we4p.ChessType.STIT_LITTLEMUSHROOM);
	                        replaceList.push({
	                            from: puzzleChessNode.ToChessData(),
	                            removed: [oldNodeData],
	                            created: [node.ToChessData()]
	                        });

	                        //大蘑菇跳一跳
	                        // Animation().PushAnimationData(iBatchId, ANI_DATA(kAniIDGenerateAnimationBigMushRoomPart,
	                        //         puzzleChessNode - > ToChessData()))
	                        //还原
	                        // Animation().CreateAnimation(BatchData(iChildBatchId, BATCH_RELATION_END, 0),
	                        //     ANI_DATA(kAniIDStaticRecover, puzzleChessNode - > ToChessData(), false, false));
	                    }
	                }
	            }
	            if (replaceList.length) {
	                Mgr.aniManager.GenerateReplace({
	                    replaceList: replaceList
	                });
	            }
	        }
	    }, {
	        key: "PositionCanCreateLittleMushroom",
	        value: function PositionCanCreateLittleMushroom(tempRow, tempCol) {
	            var node = Mgr.boardViewer.GetNode(tempRow, tempCol);
	            if (!node) return false;
	            if (!node.CanBeReplace()) return false;
	            return node;
	        }

	        // 棋子周围设置小蘑菇

	    }, {
	        key: "CreateLittleMushroom",
	        value: function CreateLittleMushroom(row, col) {
	            var aroundPos = [new weType.GridPosition(-1, 0), new weType.GridPosition(-1, 1), new weType.GridPosition(0, 1), new weType.GridPosition(1, 1), new weType.GridPosition(1, 0), new weType.GridPosition(1, -1), new weType.GridPosition(0, -1), new weType.GridPosition(-1, -1)];
	            for (var i = 0; i < 8; i++) {
	                var tempRow = row + aroundPos[i].row;
	                var tempCol = col + aroundPos[i].col;
	                var node = this.PositionCanCreateLittleMushroom(tempRow, tempCol);
	                if (node) return node;
	            }
	            return false;
	        }
	    }]);

	    return MushroomListener;
	}(puzzle_event.BoardEventListener);

	var Mushroom = function (_Module_Basic$BasicCh) {
	    _inherits(Mushroom, _Module_Basic$BasicCh);

	    function Mushroom(props) {
	        _classCallCheck(this, Mushroom);

	        return _possibleConstructorReturn(this, (Mushroom.__proto__ || Object.getPrototypeOf(Mushroom)).call(this, props));
	    }

	    _createClass(Mushroom, [{
	        key: "Init",
	        value: function Init(attach) {
	            _get(Mushroom.prototype.__proto__ || Object.getPrototypeOf(Mushroom.prototype), "Init", this).call(this, attach);
	            this.attach_.iVal1 = 30;
	            this.attach_.iVal2 = 30;
	            this.attach_.iVal3 = 30;
	        }
	    }, {
	        key: "ToChessData",
	        value: function ToChessData(props) {
	            var data = _get(Mushroom.prototype.__proto__ || Object.getPrototypeOf(Mushroom.prototype), "ToChessData", this).call(this, props);

	            var mushroomData = data.mushroom_data;
	            mushroomData.max_health = this.attach_.iVal1;
	            mushroomData.current_health = this.attach_.iVal3;
	            mushroomData.attack_value = this.attach_.iVal2;

	            return data;
	        }
	    }, {
	        key: "Backup",
	        value: function Backup() {}
	    }, {
	        key: "Crush",
	        value: function Crush(info) {
	            return this.Attack(info);
	        }
	    }, {
	        key: "UseItemHammer",
	        value: function UseItemHammer(info) {
	            return this.Attack(info);
	        }
	    }, {
	        key: "FishMissle",
	        value: function FishMissle(info) {
	            return this.Attack(info);
	        }
	    }, {
	        key: "Attack",
	        value: function Attack(info) {
	            var attack_value = 0;
	            switch (info.attack_type) {
	                case we4p.AttackType.Attack_BigHurricane:
	                    attack_value = 20;
	                    break;
	                case we4p.AttackType.Attack_VerticalShockWave:
	                case we4p.AttackType.Attack_HorizontalShockWave:
	                case we4p.AttackType.Attack_ThickCrossShockWave:
	                case we4p.AttackType.Attack_Hurricane:
	                case we4p.AttackType.Attack_CrossShockWave:
	                case we4p.AttackType.Attack_Disappear:
	                case we4p.AttackType.Attack_Gas2Gas:
	                case we4p.AttackType.Attack_Bomb:
	                    attack_value = 10;
	                    break;
	                case we4p.AttackType.Attack_Normal:
	                case we4p.AttackType.Attack_Gas:
	                case we4p.AttackType.Attack_Lastpang:
	                    attack_value = 3;
	                    break;
	                default:
	                    return false;
	            }
	            var batch = info.batch;
	            var pos = this.GetNode().GetPosition();
	            var data = this.GetNode().FindAttach(this.Attribute().ChessType);
	            if (data == null) {
	                return false;
	            }

	            // 被攻击了, 下回合不产生小蘑菇
	            var l = Mgr.eventManager.FindListener(puzzle_event.EventKey.kEventKeyMushroom);
	            if (l) {
	                l.SetNeedHandle(false);
	            }
	            var iTheLeftBlood = data.iVal3 - attack_value;

	            data.iVal3 = iTheLeftBlood <= 0 ? 0 : iTheLeftBlood;
	            data.iVal2 = attack_value;

	            Mgr.aniManager.GenerateAttack(this.ToChessData());
	            if (data.iVal3 <= 0) {
	                Mgr.dataCollector.addCrushChess(this.ToChessData());
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }]);

	    return Mushroom;
	}(Module_Basic.BasicChess);

	var LittleMushroom = function (_Module_Basic$BasicCh2) {
	    _inherits(LittleMushroom, _Module_Basic$BasicCh2);

	    function LittleMushroom(props) {
	        _classCallCheck(this, LittleMushroom);

	        return _possibleConstructorReturn(this, (LittleMushroom.__proto__ || Object.getPrototypeOf(LittleMushroom)).call(this, props));
	    }

	    _createClass(LittleMushroom, [{
	        key: "Crush",
	        value: function Crush(info) {
	            var res = _get(LittleMushroom.prototype.__proto__ || Object.getPrototypeOf(LittleMushroom.prototype), "Crush", this).call(this, info);
	            if (res) {
	                // 被攻击了, 下回合不产生小蘑菇
	                var l = Mgr.eventManager.FindListener(puzzle_event.EventKey.kEventKeyMushroom);
	                if (l) l.SetNeedHandle(false);
	            }
	            return res;
	        }
	    }]);

	    return LittleMushroom;
	}(Module_Basic.BasicChess);

	var MushroomModule = function (_PModule) {
	    _inherits(MushroomModule, _PModule);

	    function MushroomModule(props) {
	        _classCallCheck(this, MushroomModule);

	        return _possibleConstructorReturn(this, (MushroomModule.__proto__ || Object.getPrototypeOf(MushroomModule)).call(this, props));
	    }

	    _createClass(MushroomModule, [{
	        key: "Init",
	        value: function Init(board) {
	            _get(MushroomModule.prototype.__proto__ || Object.getPrototypeOf(MushroomModule.prototype), "Init", this).call(this, board);
	            this.RegisterChess(we4p.ChessType.STIT_HUGEMUSHROOM);
	            this.RegisterChess(we4p.ChessType.STIT_LITTLEMUSHROOM);
	            return true;
	        }
	    }, {
	        key: "Release",
	        value: function Release() {
	            if (this.listenner_) {
	                Mgr.eventManager.RemoveListener(puzzle_event.EventKey.kEventKeyMushroom);
	            }
	            _get(MushroomModule.prototype.__proto__ || Object.getPrototypeOf(MushroomModule.prototype), "Release", this).call(this);
	        }
	    }, {
	        key: "NewChess",
	        value: function NewChess(type, backup) {
	            if (type == we4p.ChessType.STIT_HUGEMUSHROOM) {
	                if (this.listenner_ == null) {
	                    this.listenner_ = new MushroomListener(Mgr.curBoard);
	                    Mgr.eventManager.AddEventListener(this.listenner_, puzzle_event.EventPri.kEventPriMushroom, puzzle_event.EventKey.kEventKeyMushroom);
	                }
	                return new Mushroom(type);
	            } else if (type == we4p.ChessType.STIT_LITTLEMUSHROOM) {
	                return new LittleMushroom(type);
	            } else {
	                return null;
	            }
	        }
	    }]);

	    return MushroomModule;
	}(PModule);

	module.exports = {
	    Mushroom: Mushroom,
	    LittleMushroom: LittleMushroom,
	    MushroomListener: MushroomListener,
	    MushroomModule: MushroomModule
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/11/1.
	 */
	var we4p = __webpack_require__(13);
	var weType = __webpack_require__(20);
	var config_p = __webpack_require__(12);
	var ChessInterface = __webpack_require__(31);

	var chess_prop_table = [{
	    //普通棋子
	    "ChessType": we4p.ChessType.CT_NormalUnit,
	    "attack_type": [we4p.AttackType.Attack_Normal, we4p.AttackType.Attack_VerticalShockWave, we4p.AttackType.Attack_HorizontalShockWave, we4p.AttackType.Attack_Hurricane, we4p.AttackType.Attack_CrossShockWave, we4p.AttackType.Attack_ThickCrossShockWave, we4p.AttackType.Attack_BigHurricane, we4p.AttackType.Attack_Gas, we4p.AttackType.Attack_Gas2Gas, we4p.AttackType.Attack_Disappear, we4p.AttackType.Attack_Bomb, we4p.AttackType.Attack_Lastpang, we4p.AttackType.Attack_GasSpecial, we4p.AttackType.Attack_ShockWave],
	    "Layer": 1,
	    "drop_rule": 1,
	    "crush_rule": 1,
	    "UseRearrange": true,

	    StopDrop: false,
	    StopDropIn: false,
	    StopSlide: false,

	    StopJoin: false,
	    UseSpecial: true,

	    UseSwap: true,
	    CanUseHammer: true,
	    CanCrushAround: true,
	    ForbidContinuousCrush: false,
	    IsCollection: false,
	    CanBeReplace: true,
	    CanSetCandy: true,
	    CanSetMaoqiu: true,
	    CanSetBlueberry: true,
	    CanSwapGhost: true,
	    CanSetStartItem: true,
	    CanChangeColor: true,
	    CanRandomColor: true,
	    CanAttackIce: true,
	    CanUseLastpang: true,
	    IsSpecialChess1: false,

	    IsSpecialChess2: false,
	    NextType: we4p.ChessType.STIT_NONE,
	    HP: 0,
	    Color: -1,
	    Score: 100,
	    CanBeAroundCrushed: false,
	    CanSlide: true,
	    collect_type: we4p.CollectType.kCollectCrush,
	    Compatible4GridBoss: true
	}, {
	    //竖消棋子
	    "ChessType": we4p.ChessType.CT_SpecialVerticalShockWave,
	    "attack_type": [we4p.AttackType.Attack_Normal, we4p.AttackType.Attack_VerticalShockWave, we4p.AttackType.Attack_HorizontalShockWave, we4p.AttackType.Attack_Hurricane, we4p.AttackType.Attack_CrossShockWave, we4p.AttackType.Attack_ThickCrossShockWave, we4p.AttackType.Attack_BigHurricane, we4p.AttackType.Attack_Gas, we4p.AttackType.Attack_Gas2Gas, we4p.AttackType.Attack_Disappear, we4p.AttackType.Attack_Bomb, we4p.AttackType.Attack_Lastpang, we4p.AttackType.Attack_GasSpecial, we4p.AttackType.Attack_ShockWave],
	    "Layer": 1,
	    "drop_rule": 1,
	    "slide_rule": 1,
	    "crush_rule": 1,
	    "bomb_rule": 2,
	    "UseRearrange": true,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": true,
	    "CanBeReplace": true,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": true,
	    "CanAttackIce": true,
	    "IsSpecialChess1": true,
	    "CanCrushAround": true,
	    "CanUseLastpang": true,

	    StopDrop: false,
	    StopDropIn: false,
	    StopSlide: false,

	    StopJoin: false,

	    ForbidContinuousCrush: false,
	    IsCollection: false,
	    CanSetStartItem: false,
	    CanChangeColor: true,
	    CanRandomColor: true,

	    IsSpecialChess2: false,
	    NextType: we4p.ChessType.STIT_NONE,
	    HP: 0,
	    Color: -1,
	    Score: 0,
	    CanBeAroundCrushed: false,
	    CanSlide: true,
	    collect_type: we4p.CollectType.kCollectCrush,
	    Compatible4GridBoss: true
	}, {
	    //横消棋子
	    "ChessType": we4p.ChessType.CT_SpecialHorizontalShockWave,
	    "attack_type": [we4p.AttackType.Attack_Normal, we4p.AttackType.Attack_VerticalShockWave, we4p.AttackType.Attack_HorizontalShockWave, we4p.AttackType.Attack_Hurricane, we4p.AttackType.Attack_CrossShockWave, we4p.AttackType.Attack_ThickCrossShockWave, we4p.AttackType.Attack_BigHurricane, we4p.AttackType.Attack_Gas, we4p.AttackType.Attack_Gas2Gas, we4p.AttackType.Attack_Disappear, we4p.AttackType.Attack_Bomb, we4p.AttackType.Attack_Lastpang, we4p.AttackType.Attack_GasSpecial, we4p.AttackType.Attack_ShockWave],
	    "Layer": 1,
	    "drop_rule": 1,
	    "slide_rule": 1,
	    "crush_rule": 1,
	    "bomb_rule": 3,
	    "UseRearrange": true,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": true,
	    "CanBeReplace": true,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": true,
	    "CanAttackIce": true,
	    "IsSpecialChess1": true,
	    "CanCrushAround": true,
	    "CanUseLastpang": true,

	    StopDrop: false,
	    StopDropIn: false,
	    StopSlide: false,

	    StopJoin: false,

	    ForbidContinuousCrush: false,
	    IsCollection: false,
	    CanSetStartItem: false,
	    CanChangeColor: true,
	    CanRandomColor: true,

	    IsSpecialChess2: false,
	    NextType: we4p.ChessType.STIT_NONE,
	    HP: 0,
	    Color: -1,
	    Score: 0,
	    CanBeAroundCrushed: false,
	    CanSlide: true,
	    collect_type: we4p.CollectType.kCollectCrush,
	    Compatible4GridBoss: true
	}, {
	    //旋风爆炸棋子
	    "ChessType": we4p.ChessType.CT_SpecialHurricane,
	    "attack_type": [we4p.AttackType.Attack_Normal, we4p.AttackType.Attack_VerticalShockWave, we4p.AttackType.Attack_HorizontalShockWave, we4p.AttackType.Attack_Hurricane, we4p.AttackType.Attack_CrossShockWave, we4p.AttackType.Attack_ThickCrossShockWave, we4p.AttackType.Attack_BigHurricane, we4p.AttackType.Attack_Gas, we4p.AttackType.Attack_Gas2Gas, we4p.AttackType.Attack_Disappear, we4p.AttackType.Attack_Bomb, we4p.AttackType.Attack_Lastpang, we4p.AttackType.Attack_GasSpecial, we4p.AttackType.Attack_GasShockSave, we4p.AttackType.Attack_GasHurricane, we4p.AttackType.Attack_ShockWave],
	    "Layer": 1,
	    "drop_rule": 1,
	    "slide_rule": 1,
	    "crush_rule": 1,
	    "bomb_rule": 4,
	    "UseRearrange": true,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": true,
	    "CanBeReplace": true,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": true,
	    "CanAttackIce": true,
	    "IsSpecialChess1": true,
	    "CanCrushAround": true,
	    "CanUseLastpang": true,
	    "Score": 0,

	    StopDrop: false,
	    StopDropIn: false,
	    StopSlide: false,

	    StopJoin: false,

	    ForbidContinuousCrush: false,
	    IsCollection: false,
	    CanSetStartItem: false,
	    CanChangeColor: true,
	    CanRandomColor: true,

	    IsSpecialChess2: false,
	    NextType: we4p.ChessType.STIT_NONE,
	    HP: 0,
	    Color: -1,
	    CanBeAroundCrushed: false,
	    CanSlide: true,
	    collect_type: we4p.CollectType.kCollectCrush,
	    Compatible4GridBoss: true
	}, {
	    //幽灵棋子
	    "ChessType": we4p.ChessType.CT_SpecialGas,
	    "attack_type": [we4p.AttackType.Attack_Normal, we4p.AttackType.Attack_VerticalShockWave, we4p.AttackType.Attack_HorizontalShockWave, we4p.AttackType.Attack_Hurricane, we4p.AttackType.Attack_CrossShockWave, we4p.AttackType.Attack_ThickCrossShockWave, we4p.AttackType.Attack_BigHurricane, we4p.AttackType.Attack_Gas, we4p.AttackType.Attack_Gas2Gas, we4p.AttackType.Attack_Disappear, we4p.AttackType.Attack_Bomb, we4p.AttackType.Attack_Lastpang, we4p.AttackType.Attack_GasSpecial, we4p.AttackType.Attack_GasShockSave, we4p.AttackType.Attack_GasHurricane, we4p.AttackType.Attack_ShockWave],
	    "Layer": 1,
	    "drop_rule": 1,
	    "slide_rule": 1,
	    "crush_rule": 1,
	    "UseRearrange": true,
	    "UseSpecial": false,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanSwapGhost": true,
	    "CanSetMaoqiu": true,
	    "CanSetCandy": true,
	    "CanSetBlueberry": true,
	    "CanBeReplace": true,
	    "CanAttackIce": true,
	    "IsSpecialChess1": true,
	    "IsSpecialChess2": true,
	    "CanChangeColor": false,
	    "CanCrushAround": true,
	    "Score": 5000,

	    StopDrop: false,
	    StopDropIn: false,
	    StopSlide: false,

	    StopJoin: false,

	    ForbidContinuousCrush: false,
	    IsCollection: false,
	    CanSetStartItem: false,
	    CanRandomColor: true,
	    CanUseLastpang: false,
	    NextType: we4p.ChessType.STIT_NONE,
	    HP: 0,
	    Color: -1,
	    CanBeAroundCrushed: false,
	    CanSlide: true,
	    collect_type: we4p.CollectType.kCollectCrush,
	    Compatible4GridBoss: true
	}, {
	    //镂空
	    "ChessType": we4p.ChessType.STIT_NOUSE,
	    "attack_type": [],
	    "CanSetCandy": false,
	    "CanBeReplace": false,
	    "CanSetBlueberry": true,
	    Layer: we4p.ChessLayer.kChessLayerFeature,
	    drop_rule: 0,
	    crush_rule: 0,
	    UseRearrange: false,

	    StopDrop: false,
	    StopDropIn: false,
	    StopSlide: false,

	    StopJoin: false,
	    UseSpecial: false,

	    UseSwap: false,
	    CanUseHammer: false,
	    CanCrushAround: false,
	    ForbidContinuousCrush: false,
	    IsCollection: false,
	    CanSetMaoqiu: false,
	    CanSwapGhost: false,
	    CanSetStartItem: false,
	    CanChangeColor: true,
	    CanRandomColor: true,
	    CanAttackIce: false,
	    CanUseLastpang: false,
	    IsSpecialChess1: false,

	    IsSpecialChess2: false,
	    NextType: we4p.ChessType.STIT_NONE,
	    HP: 0,
	    Color: -1,
	    Score: 0,
	    CanBeAroundCrushed: false,
	    CanSlide: false,
	    collect_type: we4p.CollectType.kCollectCrush,
	    Compatible4GridBoss: true
	}, { //气球收集物
	    "attack_type": [],
	    "Layer": 1,
	    "drop_rule": 1,
	    "crush_rule": 3,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": true,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 10000,
	    "ChessType": 8,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 糖果
	    "attack_type": [],
	    "Layer": 1,
	    "drop_rule": 1,
	    "crush_rule": 3,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": true,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 10000,
	    "ChessType": 9,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //气球收集点
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 25,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 糖果收集点
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 26,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 蓝莓(绿草地)
	    "attack_type": [],
	    "Layer": 0,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": true,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 52,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 3,
	    "Compatible4GridBoss": true
	}, { // 坏掉的蓝莓(枯草地)
	    "attack_type": [],
	    "Layer": 0,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": true,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 53,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 3,
	    "Compatible4GridBoss": true
	}, { //冰
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 0,
	    "drop_rule": 0,
	    "crush_rule": 2,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": true,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 54,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //深冰
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 0,
	    "drop_rule": 0,
	    "crush_rule": 2,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": true,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 54,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 55,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //棋子掉落点
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 24,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //虫洞1
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 32,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //虫洞2
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 33,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //木箱
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 63,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //木箱2
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 63,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 64,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //木箱3
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 64,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 65,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //木箱4
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 65,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 66,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 糖果罐
	    "attack_type": [2, 3, 4, 5, 6, 7, 10, 11, 9],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 67,
	    "CanBeAroundCrushed": false,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //牢笼
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 2,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": true,
	    "StopDropIn": true,
	    "StopSlide": true,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": false,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": 8,
	    "Score": 0,
	    "ChessType": 93,
	    "CanBeAroundCrushed": false,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //二级牢笼
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 2,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": true,
	    "StopDropIn": true,
	    "StopSlide": true,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": false,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 93,
	    "HP": 0,
	    "Color": 8,
	    "Score": 0,
	    "ChessType": 94,
	    "CanBeAroundCrushed": false,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 糖果纸1层
	    "attack_type": [1, 2, 3, 4, 9, 5, 6, 7, 10, 11, 12],
	    "Layer": 2,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": true,
	    "StopDropIn": true,
	    "StopSlide": true,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 95,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 糖果纸2层
	    "attack_type": [1, 2, 3, 4, 9, 5, 6, 7, 10, 11, 12],
	    "Layer": 2,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": true,
	    "StopDropIn": true,
	    "StopSlide": true,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 95,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 96,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 糖果纸3层
	    "attack_type": [1, 2, 3, 4, 9, 5, 6, 7, 10, 11, 12],
	    "Layer": 2,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": true,
	    "StopDropIn": true,
	    "StopSlide": true,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 96,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 97,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 糖果纸4层
	    "attack_type": [1, 2, 3, 4, 9, 5, 6, 7, 10, 11, 12],
	    "Layer": 2,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": true,
	    "StopDropIn": true,
	    "StopSlide": true,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 97,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 98,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 糖果纸5层
	    "attack_type": [1, 2, 3, 4, 9, 5, 6, 7, 10, 11, 12],
	    "Layer": 2,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": true,
	    "StopDropIn": true,
	    "StopSlide": true,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 98,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 99,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //汽水瓶(泡泡)
	    "attack_type": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16],
	    "Layer": 1,
	    "drop_rule": 1,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": true,
	    "CanCrushAround": true,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": true,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": true,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": true,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 100,
	    "ChessType": 15,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //汽水中的掉落点
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 27,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //汽水中的收集点
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 28,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //汽水收集点(左)
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 29,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //汽水收集点(右)
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 30,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //汽水收集点(两边)
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 31,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, {
	    //掉落阀门 in soda
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 143,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //甜甜圈
	    "attack_type": [2, 3, 5, 6, 4, 7, 10, 9],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": true,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 2500,
	    "ChessType": 68,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 大蘑菇
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 100,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 69,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { // 小蘑菇
	    "attack_type": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 70,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //一级普通白云
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 71,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //二级普通白云
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 71,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 72,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //一级云石
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 73,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //二级云石
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 73,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 74,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //挖掘机土块1
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 1,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 10,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //挖掘机土块2
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 1,
	    "drop_rule": 1,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 10,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 11,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //冰下收集物
	    "attack_type": [],
	    "Layer": 2000,
	    "drop_rule": 0,
	    "crush_rule": 0,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": true,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 41,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //有小熊在其下的一级冰
	    "attack_type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 15],
	    "Layer": 0,
	    "drop_rule": 0,
	    "crush_rule": 2,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": false,
	    "StopSlide": false,
	    "StopJoin": false,
	    "UseSpecial": true,
	    "UseSwap": true,
	    "CanUseHammer": false,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": true,
	    "IsCollection": false,
	    "CanBeReplace": true,
	    "CanSetCandy": true,
	    "CanSetMaoqiu": true,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": true,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 56,
	    "CanBeAroundCrushed": false,
	    "CanSlide": true,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //毛球1
	    "attack_type": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16],
	    "Layer": 2,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": true,
	    "StopSlide": true,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 0,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 91,
	    "CanBeAroundCrushed": true,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}, { //毛球2
	    "attack_type": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16],
	    "Layer": 2,
	    "drop_rule": 0,
	    "crush_rule": 1,
	    "UseRearrange": false,
	    "StopDrop": false,
	    "StopDropIn": true,
	    "StopSlide": true,
	    "StopJoin": false,
	    "UseSpecial": false,
	    "UseSwap": false,
	    "CanUseHammer": true,
	    "CanCrushAround": false,
	    "ForbidContinuousCrush": false,
	    "IsCollection": false,
	    "CanBeReplace": false,
	    "CanSetCandy": false,
	    "CanSetMaoqiu": false,
	    "CanSetBlueberry": false,
	    "CanSwapGhost": false,
	    "CanSetStartItem": false,
	    "CanChangeColor": true,
	    "CanRandomColor": true,
	    "CanAttackIce": false,
	    "CanUseLastpang": false,
	    "IsSpecialChess1": false,
	    "IsSpecialChess2": false,
	    "NextType": 91,
	    "HP": 0,
	    "Color": -1,
	    "Score": 0,
	    "ChessType": 92,
	    "CanBeAroundCrushed": false,
	    "CanSlide": false,
	    "collect_type": 2,
	    "Compatible4GridBoss": true
	}];

	/**
	 * 编辑器棋子id和程序内逻辑棋子id的映射表，每一项表示一个映射关系（[0]表示编辑器的棋子id，[1]表示棋子颜色，[2]表示棋子程序逻辑类型）
	 * @type {*[]}
	 */
	var elementMap = [[config_p.GRID_ELEMENT_ID.ELEMENT_QIGE_CONTAINER, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_NONE], // 0,

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_NORMAL_1, weType.MovingItemType.MIT_0, we4p.ChessType.CT_NormalUnit], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_NORMAL_2, weType.MovingItemType.MIT_1, we4p.ChessType.CT_NormalUnit], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_NORMAL_3, weType.MovingItemType.MIT_2, we4p.ChessType.CT_NormalUnit], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_NORMAL_4, weType.MovingItemType.MIT_3, we4p.ChessType.CT_NormalUnit], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_NORMAL_5, weType.MovingItemType.MIT_4, we4p.ChessType.CT_NormalUnit], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_NORMAL_6, weType.MovingItemType.MIT_5, we4p.ChessType.CT_NormalUnit], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_NORMAL_7, weType.MovingItemType.MIT_6, we4p.ChessType.CT_NormalUnit], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_NORMAL_RANDOM, weType.MovingItemType.MIT_RANDOM, we4p.ChessType.CT_NormalUnit], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_1, weType.MovingItemType.MIT_0, we4p.ChessType.CT_SpecialVerticalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_2, weType.MovingItemType.MIT_1, we4p.ChessType.CT_SpecialVerticalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_3, weType.MovingItemType.MIT_2, we4p.ChessType.CT_SpecialVerticalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_4, weType.MovingItemType.MIT_3, we4p.ChessType.CT_SpecialVerticalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_5, weType.MovingItemType.MIT_4, we4p.ChessType.CT_SpecialVerticalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_6, weType.MovingItemType.MIT_5, we4p.ChessType.CT_SpecialVerticalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_7, weType.MovingItemType.MIT_6, we4p.ChessType.CT_SpecialVerticalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_UP_DOWN_RANDOM, weType.MovingItemType.MIT_RANDOM, we4p.ChessType.CT_SpecialVerticalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_1, weType.MovingItemType.MIT_0, we4p.ChessType.CT_SpecialHorizontalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_2, weType.MovingItemType.MIT_1, we4p.ChessType.CT_SpecialHorizontalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_3, weType.MovingItemType.MIT_2, we4p.ChessType.CT_SpecialHorizontalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_4, weType.MovingItemType.MIT_3, we4p.ChessType.CT_SpecialHorizontalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_5, weType.MovingItemType.MIT_4, we4p.ChessType.CT_SpecialHorizontalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_6, weType.MovingItemType.MIT_5, we4p.ChessType.CT_SpecialHorizontalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_7, weType.MovingItemType.MIT_6, we4p.ChessType.CT_SpecialHorizontalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SHOCKWAVE_LEFT_RIGHT_RANDOM, weType.MovingItemType.MIT_RANDOM, we4p.ChessType.CT_SpecialHorizontalShockWave], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_BLAST_CYCLONE_1, weType.MovingItemType.MIT_0, we4p.ChessType.CT_SpecialHurricane], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_BLAST_CYCLONE_2, weType.MovingItemType.MIT_1, we4p.ChessType.CT_SpecialHurricane], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_BLAST_CYCLONE_3, weType.MovingItemType.MIT_2, we4p.ChessType.CT_SpecialHurricane], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_BLAST_CYCLONE_4, weType.MovingItemType.MIT_3, we4p.ChessType.CT_SpecialHurricane], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_BLAST_CYCLONE_5, weType.MovingItemType.MIT_4, we4p.ChessType.CT_SpecialHurricane], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_BLAST_CYCLONE_6, weType.MovingItemType.MIT_5, we4p.ChessType.CT_SpecialHurricane], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_BLAST_CYCLONE_7, weType.MovingItemType.MIT_6, we4p.ChessType.CT_SpecialHurricane], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_BLAST_CYCLONE_RANDOM, weType.MovingItemType.MIT_RANDOM, we4p.ChessType.CT_SpecialHurricane], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_GHOST, weType.MovingItemType.MIT_NONE, we4p.ChessType.CT_SpecialGas], // 7,
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_COLLECT_CANDY, weType.MovingItemType.MIT_NONE, we4p.ChessType.CT_COLLECTCANDY], // 9,
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_DIGGER_CHOCOLATE_1L, weType.MovingItemType.MIT_NONE, we4p.ChessType.CT_CLODS0], // 10,
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_DIGGER_CHOCOLATE_2L, weType.MovingItemType.MIT_NONE, we4p.ChessType.CT_CLODS1], // 11,

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SODA_BUBBLE_1, weType.MovingItemType.MIT_0, we4p.ChessType.CT_SodaBottle], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SODA_BUBBLE_2, weType.MovingItemType.MIT_1, we4p.ChessType.CT_SodaBottle], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SODA_BUBBLE_3, weType.MovingItemType.MIT_2, we4p.ChessType.CT_SodaBottle], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SODA_BUBBLE_4, weType.MovingItemType.MIT_3, we4p.ChessType.CT_SodaBottle], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SODA_BUBBLE_5, weType.MovingItemType.MIT_4, we4p.ChessType.CT_SodaBottle], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SODA_BUBBLE_6, weType.MovingItemType.MIT_5, we4p.ChessType.CT_SodaBottle], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SODA_BUBBLE_7, weType.MovingItemType.MIT_6, we4p.ChessType.CT_SodaBottle], [config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_SODA_BUBBLE_RANDOM, weType.MovingItemType.MIT_RANDOM, we4p.ChessType.CT_SodaBottle], [config_p.GRID_ELEMENT_ID.ELEMENT_GONGNENG_DROPPIONT_NORMAL, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_DROP_POINT], // 24,

	[config_p.GRID_ELEMENT_ID.ELEMENT_GONGNENG_COLLECTPIONT_SUGAR, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_COLLECTCANDY_POINT], // 26,

	[config_p.GRID_ELEMENT_ID.ELEMENT_GONGNENG_APPEARPIONT_UP, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_DROP_POINT_IN_SODA], // 27,
	[config_p.GRID_ELEMENT_ID.ELEMENT_GONGNENG_COLLECTPIONT_SODA, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_COLLECT_POINT_IN_SODA], // 28,

	[config_p.GRID_ELEMENT_ID.ELEMENT_GONGNENG_WORMHOLE_START, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_CHONGDONG1], // 32,
	[config_p.GRID_ELEMENT_ID.ELEMENT_GONGNENG_WORMHOLE_END, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_CHONGDONG2], // 33,

	[config_p.GRID_ELEMENT_ID.ELEMENT_GONGNENG_BARRIER_RIGHT, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_FENCE_RIGHT], // 39
	[config_p.GRID_ELEMENT_ID.ELEMENT_GONGNENG_BARRIER_DOWN, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_FENCE_BOTTOM], // 40,

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIDI_ABAO, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_COLLECT_UNDER_ICE], //

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIGE_NULL, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_NOUSE], // 51

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIDI_GRASSLAND, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_BLUEBERRY], // 52

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIDI_WITHERED_GRASS, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_BAD_BLUEBERRY], //53

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIDI_ICE_1L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_ICE], // 54
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIDI_ICE_2L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_DEEPICE], // 55

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_WOODENBOX_1L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_BOX], // 63
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_WOODENBOX_2L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_BOX_TWO], // 64
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_WOODENBOX_3L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_BOX_THREE], // 65
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_WOODENBOX_4L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_BOX_FOUR], // 66

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_CANDY_JAR, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_CANDYPOT], // 67

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_DOUGHNUT, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_DONUTSBOMB], // 68

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_MUSHROOM_BIG, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_HUGEMUSHROOM], // 69
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_MUSHROOM_SMALL, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_LITTLEMUSHROOM], // 70

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_DIGGER_CLOUD_1L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_COMMONCLOUD1], // 71
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_DIGGER_CLOUD_2L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_COMMONCLOUD2], // 72
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_1L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_STONECLOUD1], // 73
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_DIGGER_CLOUD_JEWEL_2L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_STONECLOUD2], // 74

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIZI_COLLECT_BALLOON, weType.MovingItemType.MIT_NONE, we4p.ChessType.CT_COLLECTBALLOON], [config_p.GRID_ELEMENT_ID.ELEMENT_GONGNENG_COLLECTPIONT_BALLOON, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_COLLECTBALLOON_POINT], [config_p.GRID_ELEMENT_ID.ELEMENT_QIMIAN_MAOQIU_1L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_MAOQIU1], // 91
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIMIAN_MAOQIU_2L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_MAOQIU2], // 92
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIMIAN_CAGE_1L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_CAGE], // 93
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIMIAN_CAGE_2L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_CAGE2], // 94

	[config_p.GRID_ELEMENT_ID.ELEMENT_QIMIAN_PAPER_1L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_CANDYPAPER1], // 95
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIMIAN_PAPER_2L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_CANDYPAPER2], // 96
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIMIAN_PAPER_3L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_CANDYPAPER3], // 97
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIMIAN_PAPER_4L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_CANDYPAPER4], // 98
	[config_p.GRID_ELEMENT_ID.ELEMENT_QIMIAN_PAPER_5L, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_CANDYPAPER5], // 99

	[config_p.GRID_ELEMENT_ID.ELEMENT_GONGNENG_APPEARPIONT_UP_VALVEGATE, weType.MovingItemType.MIT_NONE, we4p.ChessType.STIT_DROP_VALVE_IN_SODA] // 143,

	];

	var PassConditionDesc = function PassConditionDesc() {
	    var p_type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : we4p.PassConditionType.kPassCondScore;
	    var c_type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : we4p.ChessType.STIT_NONE;
	    var c_color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : weType.MovingItemType.MIT_NONE;

	    _classCallCheck(this, PassConditionDesc);

	    this.pass_type = p_type;
	    this.chess_type = c_type;
	    this.chess_color = c_color;
	};

	var TableManager = function () {
	    function TableManager() {
	        _classCallCheck(this, TableManager);

	        this.config = chess_prop_table;
	        this.ChessPropertiesTable_ = {};
	        this.PassConditionTable_ = {};
	        this.mElementToChessMap = {};
	        this.inited_ = false;
	        this.Init();
	    }

	    _createClass(TableManager, [{
	        key: "Init",
	        value: function Init() {
	            if (this.inited_) return;
	            this.ChessPropertiesTableInit();
	            this.PassConditionTableInit();
	            this.InitElementMap();
	            this.inited_ = true;
	        }
	    }, {
	        key: "ChessPropertiesTableInit",
	        value: function ChessPropertiesTableInit() {
	            var len = chess_prop_table.length;
	            for (var i = 0; i < len; i++) {
	                var item = chess_prop_table[i];
	                this.ChessPropertiesTable_[item.ChessType] = item;
	            }
	        }
	    }, {
	        key: "PassConditionTableInit",
	        value: function PassConditionTableInit() {
	            var t = this.PassConditionTable_;
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_STEP_OVER] = new PassConditionDesc(we4p.PassConditionType.kPassCondAllStep);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_SCORE] = new PassConditionDesc(we4p.PassConditionType.kPassCondScore);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_BOSS] = new PassConditionDesc(we4p.PassConditionType.kPassCondBoss);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_BALLOON] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.CT_COLLECTBALLOON);

	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_NORMAL_1] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectColor, we4p.ChessType.CT_NormalUnit, weType.MovingItemType.MIT_0);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_NORMAL_2] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectColor, we4p.ChessType.CT_NormalUnit, weType.MovingItemType.MIT_1);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_NORMAL_3] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectColor, we4p.ChessType.CT_NormalUnit, weType.MovingItemType.MIT_2);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_NORMAL_4] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectColor, we4p.ChessType.CT_NormalUnit, weType.MovingItemType.MIT_3);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_NORMAL_5] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectColor, we4p.ChessType.CT_NormalUnit, weType.MovingItemType.MIT_4);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_NORMAL_6] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectColor, we4p.ChessType.CT_NormalUnit, weType.MovingItemType.MIT_5);

	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_QIZI_SHOCKWAVE] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.CT_SpecialHorizontalShockWave);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_QIZI_BLAST] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.CT_SpecialHurricane);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_QIZI_GHOST] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.CT_SpecialGas);

	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_BOTTOM_ICE] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.STIT_ICE);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_SODA_QIZI] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.CT_SodaBottle);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_WOODENBOX] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.STIT_BOX);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_DOUGHNUT] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.STIT_DONUTSBOMB);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_CLOUD_JEWEL] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.STIT_STONECLOUD1);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_CLOUD_REDPACKET] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.STIT_REDPACKET1);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_GENERATE_GRASS] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.STIT_BLUEBERRY);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_AIBAO] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.STIT_COLLECT_UNDER_ICE);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_CANDY] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.CT_COLLECTCANDY);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_WIPEOUT_MAOQIU] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.STIT_MAOQIU1);
	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_COLLECT_PAPER] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.STIT_CANDYPAPER1);

	            t[config_p.PASS_CONDITION_TYPE.PASS_CONDITION_ELIMINATE_MUSHROOM_BIG] = new PassConditionDesc(we4p.PassConditionType.kPassCondCollectChess, we4p.ChessType.STIT_HUGEMUSHROOM);
	        }

	        //RegisterElementIdByModule(type, m){
	        //    var sizeNum = elementMap.length;
	        //    for (var i = 0; i < sizeNum; i++) {
	        //        var ele = elementMap[i];
	        //        if (ele[2] == type) {
	        //            var desc = new ChessInterface.ChessDesc();
	        //            desc.type = ele[2];
	        //            desc.color = ele[1];
	        //            this.mElementToChessMap[ele[0]] = desc;
	        //            m.RegisterElementID(ele[0]);
	        //        }
	        //    }
	        //}

	    }, {
	        key: "GetElementMap",
	        value: function GetElementMap() {
	            return this.mElementToChessMap;
	        }
	    }, {
	        key: "ChessPropertiesTable",
	        value: function ChessPropertiesTable() {
	            return this.ChessPropertiesTable_;
	        }
	    }, {
	        key: "InitElementMap",
	        value: function InitElementMap() {
	            var sizeNum = elementMap.length;
	            for (var i = 0; i < sizeNum; i++) {
	                var ele = elementMap[i];
	                var desc = new ChessInterface.ChessDesc();
	                desc.type = ele[2];
	                desc.color = ele[1];
	                this.mElementToChessMap[ele[0]] = desc;
	            }
	        }
	    }, {
	        key: "VaildElement",
	        value: function VaildElement(element) {
	            switch (element.element_id) {
	                case config_p.GRID_ELEMENT_ID.ELEMENT_QIGE_CONTAINER:
	                    return false;
	                default:
	                    return true;
	            }
	        }
	    }, {
	        key: "ElementToChess",
	        value: function ElementToChess(element) {
	            var desc = new ChessInterface.ChessDesc();
	            var ele = this.mElementToChessMap[element.element_id];

	            if (ele) {
	                desc.type = ele.type;
	                desc.color = ele.color;
	                desc.attach.iElementId = element.element_id;
	                desc.attach.iVal1 = element.element_data1;
	                desc.attach.iVal2 = element.element_data2;
	                desc.attach.iVal3 = element.element_data3;
	                this.CheckTypeByAttachData(desc.type, desc.attach);
	            }

	            return desc;
	        }
	    }, {
	        key: "ElementIDToChessType",
	        value: function ElementIDToChessType(id) {
	            var type = we4p.ChessType.STIT_NONE;
	            var ele = this.mElementToChessMap[id];
	            if (ele) {
	                type = ele.type;
	            }
	            return type;
	        }
	    }, {
	        key: "CheckTypeByAttachData",
	        value: function CheckTypeByAttachData(type, attach) {
	            //switch (*type) {
	            //case STIT_PAVER_ROAD_BROKEN: {
	            //        if (attach->iVal2 == -1)  // 下一个点为空
	            //            *type = STIT_PAVER_ROAD_END_BROKEN;
	            //    else if (attach->iVal3 == -1)  //上一个点为空
	            //            *type = STIT_PAVER_ROAD_BEGIN_REPAIR;
	            //    else
	            //    *type = STIT_PAVER_ROAD_BROKEN;
	            //    } break;
	            //
	            //case STIT_ANIMAL_GO_HOME_ROAD: {
	            //        if (attach->iVal2 == -1)  // 上一个点为空
	            //            *type = STIT_ANIMAL_GO_HOME_ROAD_BEGIN;
	            //        if (attach->iVal1 == -1)  // 下一个点为空
	            //            *type = STIT_ANIMAL_GO_HOME_ROAD_END;
	            //    } break;
	            //
	            //case STIT_FOAM_MACHINE: {
	            //        if (attach->iElementId == we4::ELEMENT_QIZI_FOAM_GUN_LEFT)
	            //            attach->iVal1 = GridPosition::kLeft;
	            //    else if (attach->iElementId == we4::ELEMENT_QIZI_FOAM_GUN_RIGHT)
	            //            attach->iVal1 = GridPosition::kRight;
	            //    else if (attach->iElementId == we4::ELEMENT_QIZI_FOAM_GUN_UP)
	            //            attach->iVal1 = GridPosition::kUp;
	            //    else if (attach->iElementId == we4::ELEMENT_QIZI_FOAM_GUN_DOWN)
	            //            attach->iVal1 = GridPosition::kDown;
	            //    } break;
	            //
	            //case STIT_CANNON: {
	            //        switch (attach->iElementId) {
	            //            case we4::ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_LEFT:
	            //                    attach->iVal2 = GridPosition::kLeft;
	            //                break;
	            //            case we4::ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_RIGHT:
	            //                    attach->iVal2 = GridPosition::kRight;
	            //                break;
	            //            case we4::ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_UP:
	            //                    attach->iVal2 = GridPosition::kUp;
	            //                break;
	            //            case we4::ELEMENT_QIZI_SUPPER_SHOCKWAVE_CANNON_DOWN:
	            //                    attach->iVal2 = GridPosition::kDown;
	            //                break;
	            //            default:
	            //                break;
	            //        }
	            //    } break;
	            //
	            //case STIT_COLORCOLLECTION: {
	            //        if (attach->iElementId == WePuzzle::ELEMENT_QIZI_4COLOR_CLOVER)
	            //            attach->iVal3 = CCCT_4;
	            //        if (attach->iElementId == WePuzzle::ELEMENT_QIZI_5COLOR_FLOWER)
	            //            attach->iVal3 = CCCT_5;
	            //    } break;
	            //
	            //default:
	            //    break;
	            //}
	        }
	    }]);

	    return TableManager;
	}();

	module.exports = {
	    PassConditionDesc: PassConditionDesc,
	    TableManager: TableManager
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/11/3.
	 */
	var we4p = we4p || __webpack_require__(13);

	// 用于保存多个模块间需要共享
	// 并不好明确归类的数据

	var EnvData = function EnvData() {
	    _classCallCheck(this, EnvData);

	    // soda水线
	    this.SodaLine = 0;
	    // 掉落轮数
	    this.DropSequence = 0;
	    // 道具等额外对最大步数的加成
	    this.AdditionSteps = 0;
	    // 道具宠物等给与的分数加成千分比
	    this.AdditionScoreRate = 0;
	    // 天赋局外道具额外增加的步数
	    this.PetTalentOutAddSteps = 0;
	    // 天赋局内道具额外增加的步数
	    this.PetTalentInAddSteps = 0;
	    // 天赋+5步时额外增加的步数
	    this.PetTalentRespawnAddSteps = 0;
	    // 游戏结束信息
	    this.GameInfo = new we4p.GameInfo();

	    //关卡内是否有妨碍掉落的棋子
	    this.haveStopDropChess = false;
	};

	var EnvManager_ = function () {
	    function EnvManager_() {
	        _classCallCheck(this, EnvManager_);

	        // 数据
	        this.data_ = new EnvData();
	        // 备份数据
	        //EnvData data_back_;
	        this.isWorkerMode = false;
	        //收集物是否可以优先侧滑
	        this.isCollectSkidding = true;
	    }

	    _createClass(EnvManager_, [{
	        key: "SetSodaLine",
	        value: function SetSodaLine(value) {
	            this.data_.SodaLine = value;
	        }
	    }, {
	        key: "GetSodaLine",
	        value: function GetSodaLine() {
	            return this.data_.SodaLine;
	        }
	    }, {
	        key: "SetDropSequence",
	        value: function SetDropSequence(value) {
	            this.data_.DropSequence = value;
	        }
	    }, {
	        key: "GetDropSequence",
	        value: function GetDropSequence() {
	            return this.data_.DropSequence;
	        }
	    }, {
	        key: "SetAdditionSteps",
	        value: function SetAdditionSteps(value) {
	            this.data_.AdditionSteps = value;
	        }
	    }, {
	        key: "GetAdditionSteps",
	        value: function GetAdditionSteps() {
	            return this.data_.AdditionSteps;
	        }
	    }, {
	        key: "SetAdditionScoreRate",
	        value: function SetAdditionScoreRate(value) {
	            this.data_.AdditionScoreRate = value;
	        }
	    }, {
	        key: "GetAdditionScoreRate",
	        value: function GetAdditionScoreRate() {
	            return this.data_.AdditionScoreRate;
	        }
	    }, {
	        key: "SetPetTalentOutAddSteps",
	        value: function SetPetTalentOutAddSteps(value) {
	            this.data_.PetTalentOutAddSteps = value;
	        }
	    }, {
	        key: "GetPetTalentOutAddSteps",
	        value: function GetPetTalentOutAddSteps() {
	            return this.data_.PetTalentOutAddSteps;
	        }
	    }, {
	        key: "SetPetTalentInAddSteps",
	        value: function SetPetTalentInAddSteps(value) {
	            this.data_.PetTalentInAddSteps = value;
	        }
	    }, {
	        key: "GetPetTalentInAddSteps",
	        value: function GetPetTalentInAddSteps() {
	            return this.data_.PetTalentInAddSteps;
	        }
	    }, {
	        key: "SetPetTalentRespawnAddSteps",
	        value: function SetPetTalentRespawnAddSteps(value) {
	            this.data_.PetTalentRespawnAddSteps = value;
	        }
	    }, {
	        key: "GetPetTalentRespawnAddSteps",
	        value: function GetPetTalentRespawnAddSteps() {
	            return this.data_.PetTalentRespawnAddSteps;
	        }
	    }, {
	        key: "SetIsHaveStopDropChess",
	        value: function SetIsHaveStopDropChess(value) {
	            this.data_.haveStopDropChess = value;
	        }
	    }, {
	        key: "GetIsHaveStopDropChess",
	        value: function GetIsHaveStopDropChess() {
	            return this.data_.haveStopDropChess;
	        }
	    }, {
	        key: "SetIsWorkerMode",
	        value: function SetIsWorkerMode(value) {
	            this.isWorkerMode = value;
	        }
	    }, {
	        key: "GetIsWorkerMode",
	        value: function GetIsWorkerMode() {
	            return this.isWorkerMode;
	        }
	    }, {
	        key: "GameInfo",
	        value: function GameInfo() {
	            return this.data_.GameInfo;
	        }
	    }, {
	        key: "Save",
	        value: function Save() {}
	    }, {
	        key: "Load",
	        value: function Load() {}
	    }, {
	        key: "Update",
	        value: function Update() {
	            // update gameinfo
	            var info = this.GameInfo();
	            //var score = ScoreManager()->GetScoreData();
	            //// 棋子统计
	            //    info->mutable_add_chess_count()->Resize(STIT_NUM, 0);
	            //for (int i = 0; i < STIT_NUM; i++) {
	            //        info->set_add_chess_count(i, score.add_chess_type_count[i]);
	            //}
	            //    info->mutable_crush_chess_count()->Resize(STIT_NUM, 0);
	            //for (int i = 0; i < STIT_NUM; i++) {
	            //        info->set_crush_chess_count(i, score.crush_chess_type_count[i]);
	            //}
	            //// 颜色统计
	            //    info->mutable_add_color_count()->Resize(MIT_NUM, 0);
	            //for (int i = 0; i < MIT_NUM; i++) {
	            //        info->set_add_color_count(i, score.add_chess_color_count[i]);
	            //}
	            //    info->mutable_crush_color_count()->Resize(MIT_NUM, 0);
	            //for (int i = 0; i < MIT_NUM; i++) {
	            //        info->set_crush_color_count(i, score.crush_chess_color_count[i]);
	            //}
	            //// 滑动
	            //    info->set_slide_count(score.slide_data.size());
	            //// 攻击类型
	            //    info->mutable_attack_count()->Resize(Attack_Num, 0);
	            //for (int i = 0; i < Attack_Num; i++) {
	            //        info->set_attack_count(i, score.attack_count[i]);
	            //}
	            //// 掉落轮数
	            //    info->mutable_drop_round_count()->Resize(4, 0);
	            //for (int i = 0; i < 4; i++) {
	            //        info->set_drop_round_count(i, score.drop_round_count[i]);
	            //}
	            //// 其它统计数据
	            //    info->mutable_extra_statistics()->Resize(we4::ExtraStatisticsType_ARRAYSIZE,
	            //    0);
	            //for (int i = 0; i < we4::ExtraStatisticsType_ARRAYSIZE; i++) {
	            //        info->set_extra_statistics(i,
	            //        ScoreManager()->GetStatistics(
	            //        static_cast<we4::ExtraStatisticsType>(i)));
	            //}
	            //// 道具使用记录
	            //    info->mutable_used_item()->Resize(score.used_item.size(), 0);
	            //for (size_t i = 0; i < score.used_item.size(); i++) {
	            //        info->set_used_item(i, score.used_item[i]);
	            //}
	            //
	            //    info->mutable_drop_round_count()->Resize(4, 0);
	            //for (int i = 0; i < 4; i++) {
	            //        info->set_drop_round_count(i, score.drop_round_count[i]);
	            //}
	            //// 分数
	            //    info->set_score(score.score);
	        }
	    }, {
	        key: "Init",
	        value: function Init() {}
	    }, {
	        key: "Release",
	        value: function Release() {}
	    }]);

	    return EnvManager_;
	}();

	module.exports = {
	    EnvData: EnvData,
	    EnvManager_: EnvManager_
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by billbao on 2016/11/8.
	 */
	var EventId = EventId || __webpack_require__(9);
	var Mgr = Mgr || __webpack_require__(14);
	var weType = weType || __webpack_require__(20);
	var we4p = we4p || __webpack_require__(13);
	var Util = Util || __webpack_require__(21);

	var DataCollector = function () {
	    function DataCollector() {
	        _classCallCheck(this, DataCollector);

	        //this.collecting = false;
	        //this.dataList = [];
	        this.curRemoveData = null;

	        this.batchAniData = {};
	    }

	    //begin(){
	    //    this.collecting = true;
	    //    this.dataList.splice(0, this.dataList.length);
	    //}
	    //end(){
	    //    this.collecting = false;
	    //}

	    _createClass(DataCollector, [{
	        key: "startOneRemove",
	        value: function startOneRemove(attack_type, bomb_type, round) {
	            var bomb_src = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	            var other = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

	            if (this.curRemoveData) {
	                this.endOneRemove();
	            }
	            this.curRemoveData = {
	                //bomb_type: bomb_type, // 1: 普通消除 2:横消 3:竖消 4:爆炸
	                bg_chess: [], //被爆破的背景层棋
	                bomb_chess: [], //被爆破的棋子
	                top_chess: [], //被爆破的顶层棋子
	                special_pos: bomb_src, //特效棋子位置
	                special_pos2: other, //特效棋子位置2（不一定用得到）
	                add_chess: [], //合成的棋子
	                add_bg_chess: [], // 添加的背景棋子
	                changed_chess: { //被改变的棋子
	                    top: [],
	                    middle: [],
	                    bottom: []
	                },
	                attack_type: attack_type, //攻击类型
	                rounds: round //轮次
	            };
	            //console.log("startOneRemove");
	            //console.log(this.curRemoveData);
	        }
	    }, {
	        key: "addCrushChess",
	        value: function addCrushChess(chessData) {
	            //console.log("addCrushChess");
	            //console.log(chessData);
	            if (this.curRemoveData) {
	                this.curRemoveData.bomb_chess.push(chessData);
	            }
	        }
	    }, {
	        key: "addCrushBgChess",
	        value: function addCrushBgChess(chessData) {
	            if (this.curRemoveData) {
	                this.curRemoveData.bg_chess.push(chessData);
	            }
	        }
	    }, {
	        key: "addCrushTopChess",
	        value: function addCrushTopChess(chessData) {
	            if (this.curRemoveData) {
	                this.curRemoveData.top_chess.push(chessData);
	            }
	        }
	    }, {
	        key: "addChangedChess",
	        value: function addChangedChess(data) {
	            if (this.curRemoveData) {
	                this.curRemoveData.changed_chess.middle.push(data);
	            }
	        }
	    }, {
	        key: "addChangedBgChess",
	        value: function addChangedBgChess(data) {
	            if (this.curRemoveData) {
	                this.curRemoveData.changed_chess.bottom.push(data);
	            }
	        }
	    }, {
	        key: "addChangedTopChess",
	        value: function addChangedTopChess(data) {
	            if (this.curRemoveData) {
	                this.curRemoveData.changed_chess.top.push(data);
	            }
	        }
	    }, {
	        key: "addSpecialChess",
	        value: function addSpecialChess(chessData) {
	            //console.log("addSpecialChess type:" + chessData.type);
	            //console.log(chessData);
	            if (this.curRemoveData) {
	                this.curRemoveData.add_chess.push(chessData);
	            }
	        }
	    }, {
	        key: "addBgChess",
	        value: function addBgChess(chessData) {
	            if (this.curRemoveData) {
	                this.curRemoveData.add_bg_chess.push(chessData);
	            }
	        }
	    }, {
	        key: "endOneRemove",
	        value: function endOneRemove() {
	            //console.log("endOneRemove");
	            //console.log(this.curRemoveData);
	            if (this.curRemoveData) {
	                Mgr.dataEventManager.trigger(EventId.REMOVE, { data: this.curRemoveData });
	            }
	            this.curRemoveData = null;
	        }
	    }, {
	        key: "beginOnceAniCollect",
	        value: function beginOnceAniCollect(dataType) {
	            if (this.batchAniData[dataType]) {
	                this.endOnceAniCollect(dataType);
	            }

	            this.batchAniData[dataType] = [];
	        }
	    }, {
	        key: "addAniCollect",
	        value: function addAniCollect(dataType, ani_id, data) {
	            this.batchAniData[dataType].push({ id: ani_id, data: data });
	        }
	    }, {
	        key: "endOnceAniCollect",
	        value: function endOnceAniCollect(dataType) {
	            if (this.batchAniData[dataType] && this.batchAniData[dataType].length > 0) {
	                Mgr.aniManager.pushBatchAnimation(this.batchAniData[dataType]);
	            }
	            this.batchAniData[dataType] = null;
	        }
	    }, {
	        key: "collectOneDropData",
	        value: function collectOneDropData(round) {

	            var nTotalDropCount = 0;
	            var pageRow = Mgr.stageManager.ScreenRow();
	            var pageCol = Mgr.stageManager.ScreenCol();
	            var totalRow = Mgr.stageManager.Row();

	            var maxPathSize = 128;

	            var dropList = [];

	            var newItemPosVec = [];

	            for (var row = 0; row < totalRow; row++) {
	                for (var col = 0; col < pageCol; col++) {
	                    var node = Mgr.curBoard.GetWorldNode(new weType.GridPosition(row, col));
	                    if (!node) {
	                        continue;
	                    }
	                    if (node.GetJustDrop()) {
	                        var posVec = node.GetDropPath();
	                        var pathSize = posVec.length;
	                        if (pathSize < 2 || pathSize >= maxPathSize) {
	                            //WE4_ASSERT(false);
	                        }
	                        var dropNewFlag = node.GetDropNewFlag();

	                        var pathLastRow = posVec[pathSize - 1].row;
	                        // 不在屏幕内
	                        if (pathLastRow < 0 || pathLastRow >= pageRow) {
	                            node.SetJustDrop(false);
	                            node.SetDropNewFlag(false);
	                            node.ClearDropPath();
	                            continue;
	                        }

	                        for (var i = 0; i < 1; ++i) {
	                            var posIter = posVec[i];
	                            if (posIter.row < 0 || posIter.row >= pageRow) dropNewFlag = true;
	                        }

	                        if (dropNewFlag) {
	                            var newRow = posVec[0].row;
	                            var newCol = posVec[0].col;

	                            var pathLastCol = posVec[pathSize - 1].col;

	                            while (Util.findEleInArr(newItemPosVec, function (ele) {
	                                return ele.isEqual(new weType.GridPosition(newRow, newCol));
	                            })) {
	                                if (newCol != pathLastCol) {
	                                    newCol = pathLastCol;
	                                } else {
	                                    if (posVec[0].row < posVec[1].row) newRow--;else newRow++;
	                                }
	                            }
	                            posVec[0].row = newRow;
	                            posVec[0].col = newCol;
	                            newItemPosVec.push(new weType.GridPosition(newRow, newCol));
	                        }

	                        nTotalDropCount++;
	                        var top_chess = null;
	                        if (node.HasChessType(we4p.ChessType.STIT_MAOQIU1) || node.HasChessType(we4p.ChessType.STIT_MAOQIU2)) {
	                            top_chess = node.ToChessData(2);
	                        }
	                        dropList.push({
	                            chess_data: node.ToChessData(),
	                            top_chess: top_chess,
	                            new_flag: dropNewFlag,
	                            path: posVec
	                        });
	                        node.SetDropNewFlag(false);
	                        node.SetAttachStaticType(0);
	                        node.SetJustDrop(false);
	                        node.ClearDropPath();
	                    }
	                }
	            }

	            if (dropList.length > 0) {
	                Mgr.dataEventManager.trigger(EventId.DROP, { data: { dropList: dropList, rounds: round } });
	                //console.log("collectOneDropData");
	                //console.log(dropList);
	            } else {
	                Mgr.aniManager.GenerateEmptyAni();
	            }

	            return nTotalDropCount;
	        }
	    }]);

	    return DataCollector;
	}();

	module.exports = DataCollector;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by evanyuan on 2016/11/07.
	 *
	 * 道具管理器
	 *
	 */

	var we4p = we4p || __webpack_require__(13);
	var weType = weType || __webpack_require__(20);
	var Mgr = Mgr || __webpack_require__(14);
	var puzzle_event = puzzle_event || __webpack_require__(32);
	var EventId = EventId || __webpack_require__(9);

	// 道具基类

	var PuzzleItem = function () {
	  function PuzzleItem() {
	    _classCallCheck(this, PuzzleItem);

	    this.enable_ = true;
	  }

	  // 使用道具


	  _createClass(PuzzleItem, [{
	    key: "Use",
	    value: function Use(input) {}

	    // 当前输入是否有效

	  }, {
	    key: "Valid",
	    value: function Valid(input) {}

	    // 返回道具ID

	  }, {
	    key: "GetItemId",
	    value: function GetItemId() {}

	    // 启用/禁用道具

	  }, {
	    key: "SetEnable",
	    value: function SetEnable(flag) {
	      this.enable_ = flag;
	    }
	  }, {
	    key: "Enable",
	    value: function Enable() {
	      return this.enable_;
	    }
	  }]);

	  return PuzzleItem;
	}();

	;

	// 锤子

	var ItemHammer = function (_PuzzleItem) {
	  _inherits(ItemHammer, _PuzzleItem);

	  function ItemHammer() {
	    _classCallCheck(this, ItemHammer);

	    return _possibleConstructorReturn(this, (ItemHammer.__proto__ || Object.getPrototypeOf(ItemHammer)).call(this));
	  }

	  // 使用道具


	  _createClass(ItemHammer, [{
	    key: "Use",
	    value: function Use(input) {
	      /*LittleBatchIndexStruct littleBatchIndexStruct;
	      littleBatchIndexStruct.m_parent_batch_index = batch;
	      littleBatchIndexStruct.m_self_batch_index = PrepareAnimation(input, batch);*/
	      return this.UseHammer(input /*, littleBatchIndexStruct*/);
	    }

	    // 当前输入是否有效

	  }, {
	    key: "Valid",
	    value: function Valid(input) {

	      if (!this.Enable()) return false;

	      var puzzleChessNode = Mgr.boardViewer.GetNode(input.from);

	      if (puzzleChessNode == null) return false;

	      // 锤子直接作用于最顶层的棋子
	      var chess = puzzleChessNode.GetTop();
	      // 没有棋子
	      if (chess == null) {
	        return false;
	      }
	      var prop = chess.Attribute();
	      // 没有属性数据?
	      if (prop == null) {
	        return false;
	      }
	      if (!prop.CanUseHammer) return false;

	      var attack_type_size = prop.attack_type.length;

	      for (var i = 0; i < attack_type_size; i++) {
	        if (we4p.AttackType.Attack_Disappear == prop.attack_type[i]) {
	          return true;
	        }
	      }
	      return false;
	    }

	    // 返回道具类型

	  }, {
	    key: "GetItemId",
	    value: function GetItemId() {
	      return we4p.ItemId.itemHammer;
	    }
	  }, {
	    key: "UseHammer",
	    value: function UseHammer(input) {
	      console.log("UseHammer : " + JSON.stringify(input));
	      //PrepareNextPhase();
	      var info = {};
	      //info.batch = lbis;
	      info.attack_type = we4p.AttackType.Attack_Disappear;
	      info.depth = 0;
	      info.join = 1;
	      info.src = new weType.GridPosition(input.from);

	      var round = 1;
	      Mgr.dataCollector.startOneRemove(we4p.AttackType.Attack_Disappear, 1, round);

	      var res = Mgr.boardViewer.GetNode(input.from).Crush(info);

	      // Notice:
	      // 大蘑菇的情况下, 如果大蘑菇没死, 这里会返回false
	      if (res) {
	        var e = new puzzle_event.CrushNodeEvent();
	        // 锤子的话, 目标跟源一致
	        e.src = new weType.GridPosition(input.from);
	        e.nodes.push(new weType.GridPosition(e.src));
	        e.attack_type = we4p.AttackType.Attack_Disappear;
	        //e.ani_batch_id = lbis.m_self_batch_index;
	        Mgr.eventManager.Forward(e);
	      }

	      Mgr.dataCollector.endOneRemove();

	      Mgr.curBoard.handleSpecialBomb(round);

	      //一轮消除结束，发送一条消息
	      Mgr.dataEventManager.trigger(EventId.END_ONE_REMOVE_ROUND);

	      Mgr.boardViewer.Sweep();
	      Mgr.curBoard.BreakBalance();

	      return true;
	    }
	  }]);

	  return ItemHammer;
	}(PuzzleItem);

	;

	//交换道具

	var ItemSwap = function (_PuzzleItem2) {
	  _inherits(ItemSwap, _PuzzleItem2);

	  function ItemSwap() {
	    _classCallCheck(this, ItemSwap);

	    return _possibleConstructorReturn(this, (ItemSwap.__proto__ || Object.getPrototypeOf(ItemSwap)).call(this));
	  }

	  // 使用道具


	  _createClass(ItemSwap, [{
	    key: "Use",
	    value: function Use(input) {
	      //let pFromNode = Mgr.boardViewer.GetNode(input.from());
	      //let pToNode = Mgr.boardViewer.GetNode(input.to());
	      //let batch = Animation().GenerateItemSwapAnimation(pFromNode, pToNode);

	      this.ExchangeGridChessman(new weType.GridPosition(input.from), new weType.GridPosition(input.to) /*, batch*/);

	      var pFromNode = Mgr.boardViewer.GetNode(input.from);
	      var pToNode = Mgr.boardViewer.GetNode(input.to);

	      Mgr.aniManager.GenerateItemSwapAnimation({
	        data: [pFromNode.ToChessData(), pToNode.ToChessData()]
	      });

	      Mgr.curBoard.BreakBalance();
	      return true;
	    }

	    // 当前输入是否有效

	  }, {
	    key: "Valid",
	    value: function Valid(input) {
	      var puzzleChessNode = Mgr.boardViewer.GetNode(input.from);
	      if (!puzzleChessNode) return false;
	      return puzzleChessNode.CanUseSwap();
	    }

	    // 返回道具类型

	  }, {
	    key: "GetItemId",
	    value: function GetItemId() {
	      return we4p.ItemId.itemSwap;
	    }
	  }, {
	    key: "ExchangeGridChessman",
	    value: function ExchangeGridChessman(pos1, pos2, parentBatch) {
	      //int batchNum = Animation().GetOneAnimationBatch(
	      //BatchData(parentBatch, BatchData::RELATION_END, 0));

	      var batchNum = 1;
	      Mgr.boardViewer.SlideSwap(pos1, pos2);
	      var collected = Mgr.boardViewer.CollectSomething(batchNum, pos1);
	      Mgr.boardViewer.CollectSomething(batchNum, pos2) && (collected = true);

	      if (collected) {
	        //console.log("收集气球")
	        //一轮消除结束，发送一条消息
	        Mgr.dataEventManager.trigger(EventId.END_ONE_REMOVE_ROUND);
	      }
	    }
	  }]);

	  return ItemSwap;
	}(PuzzleItem);

	;

	//后退一步 (先不做)

	var ItemRollback = function (_PuzzleItem3) {
	  _inherits(ItemRollback, _PuzzleItem3);

	  function ItemRollback() {
	    _classCallCheck(this, ItemRollback);

	    return _possibleConstructorReturn(this, (ItemRollback.__proto__ || Object.getPrototypeOf(ItemRollback)).call(this));
	  }

	  // 使用道具


	  _createClass(ItemRollback, [{
	    key: "Use",
	    value: function Use(input, batch) {}

	    // 当前输入是否有效

	  }, {
	    key: "Valid",
	    value: function Valid(input) {
	      return true;
	    }

	    // 返回道具类型

	  }, {
	    key: "GetItemId",
	    value: function GetItemId() {
	      return we4p.ItemId.itemRollback;
	    }
	  }]);

	  return ItemRollback;
	}(PuzzleItem);

	;

	//眼镜

	var ItemGlass = function (_PuzzleItem4) {
	  _inherits(ItemGlass, _PuzzleItem4);

	  function ItemGlass() {
	    _classCallCheck(this, ItemGlass);

	    return _possibleConstructorReturn(this, (ItemGlass.__proto__ || Object.getPrototypeOf(ItemGlass)).call(this));
	  }

	  // 使用道具


	  _createClass(ItemGlass, [{
	    key: "Use",
	    value: function Use(input) {

	      var targetNode = Mgr.boardViewer.GetNode(input.from);
	      if (!targetNode || !targetNode.GetChess()) return false;

	      var totype = input.value1;
	      if (totype != we4p.ChessType.CT_SpecialHorizontalShockWave && totype != we4p.ChessType.CT_SpecialVerticalShockWave) return false;

	      targetNode.GetChess().ActiveChessBuffer(0, false);
	      var oldChess = targetNode.ToChessData();
	      targetNode.AddChessType(totype, null, targetNode.ChessColor());
	      var newChess = targetNode.ToChessData();

	      Mgr.aniManager.GenerateItemGlassAnimation({
	        oldChess: oldChess,
	        newChess: newChess
	      });

	      /*Animation().PushAnimationFun(
	          batch, AFUN_1(AnimationFunMgr::MovingChangeAnim, oldChess, newChess));*/
	      return true;
	    }

	    // 当前输入是否有效

	  }, {
	    key: "Valid",
	    value: function Valid(input) {
	      var puzzleChessNode = Mgr.boardViewer.GetNode(input.from);
	      if (!puzzleChessNode) return false;
	      return puzzleChessNode.CanUseSpecial();
	    }

	    // 返回道具类型

	  }, {
	    key: "GetItemId",
	    value: function GetItemId() {
	      return we4p.ItemId.itemGlass;
	    }
	  }]);

	  return ItemGlass;
	}(PuzzleItem);

	;

	//+3步

	var ItemStep = function (_PuzzleItem5) {
	  _inherits(ItemStep, _PuzzleItem5);

	  function ItemStep() {
	    _classCallCheck(this, ItemStep);

	    return _possibleConstructorReturn(this, (ItemStep.__proto__ || Object.getPrototypeOf(ItemStep)).call(this));
	  }

	  // 使用道具


	  _createClass(ItemStep, [{
	    key: "Use",
	    value: function Use(input, batch) {
	      Mgr.stageManager.addStep(3);
	      Mgr.aniManager.GenerateItemStepAnimation({
	        step: 3
	      });
	      return true;
	    }

	    // 当前输入是否有效

	  }, {
	    key: "Valid",
	    value: function Valid(input) {
	      return true;
	    }

	    // 返回道具类型

	  }, {
	    key: "GetItemId",
	    value: function GetItemId() {
	      return we4p.ItemId.itemStepInner;
	    }
	  }]);

	  return ItemStep;
	}(PuzzleItem);

	;

	//重排道具

	var ItemRearrage = function (_PuzzleItem6) {
	  _inherits(ItemRearrage, _PuzzleItem6);

	  function ItemRearrage() {
	    _classCallCheck(this, ItemRearrage);

	    return _possibleConstructorReturn(this, (ItemRearrage.__proto__ || Object.getPrototypeOf(ItemRearrage)).call(this));
	  }

	  // 使用道具


	  _createClass(ItemRearrage, [{
	    key: "Use",
	    value: function Use(input) {
	      Mgr.curBoard.ReArrange();
	      Mgr.aniManager.GenerateItemRearrangeAnimation();
	      return true;
	    }

	    // 当前输入是否有效

	  }, {
	    key: "Valid",
	    value: function Valid(input) {
	      return true;
	    }

	    // 返回道具类型

	  }, {
	    key: "GetItemId",
	    value: function GetItemId() {
	      return we4p.ItemId.itemRearrange;
	    }
	  }]);

	  return ItemRearrage;
	}(PuzzleItem);

	;

	// 道具管理器

	var ItemManager_ = function () {
	  function ItemManager_() {
	    _classCallCheck(this, ItemManager_);

	    this.item_map_ = {};
	  }

	  _createClass(ItemManager_, [{
	    key: "Init",
	    value: function Init() {
	      this.Register(new ItemHammer()); //锤子
	      this.Register(new ItemSwap()); //交换
	      this.Register(new ItemGlass()); //墨镜
	      this.Register(new ItemStep()); //加步数
	      this.Register(new ItemRearrage()); //重排
	      //this.Register(new ItemRollback);
	      //this.Register(new ItemRollback3);

	      var startinfo = Mgr.stageManager.start_info();
	      this.ProcStartItem(startinfo);
	      return true;
	    }
	  }, {
	    key: "Register",
	    value: function Register(item) {
	      var t = item.GetItemId();
	      this.item_map_[t] = item;
	      return true;
	    }
	  }, {
	    key: "Release",
	    value: function Release() {}

	    // 判断能否使用道具

	  }, {
	    key: "ValidItemInput",
	    value: function ValidItemInput(input) {
	      if (!input.item_id) return false;

	      if (input.op != we4p.InputOp.kOpUseItem) return false;

	      var item_id = input.item_id;
	      return this.item_map_[item_id] && this.item_map_[item_id].Valid(input);
	    }
	  }, {
	    key: "EnableItem",
	    value: function EnableItem(item_id, flag) {
	      if (this.item_map_[item_id]) {
	        this.item_map_[item_id].SetEnable(flag);
	      }
	    }

	    // 使用道具

	  }, {
	    key: "ItemInput",
	    value: function ItemInput(input) {
	      if (input.op != we4p.InputOp.kOpUseItem) return false;

	      var item_id = input.item_id;
	      return this.item_map_[item_id] && this.item_map_[item_id].Use(input);
	    }

	    // 处理开局道具

	  }, {
	    key: "ProcStartItem",
	    value: function ProcStartItem(startinfo) {

	      var item_id_list = startinfo.item_id_list || [];

	      for (var i = 0; i < item_id_list.length; i++) {
	        var id = item_id_list[i];

	        // 加3步
	        if (id == we4p.ItemId.itemStepOut) {
	          Mgr.stageManager.AddMaxStep(3);
	          Mgr.stageManager.addStep(3);
	          Mgr.aniManager.GenerateItemStepAnimation({
	            step: 3
	          });
	        } else if (id == we4p.ItemId.itemGas) {
	          //幽灵
	          Mgr.curBoard.ApplyAddGasProp();
	        } else if (id == we4p.ItemId.itemShockWave) {
	          //随机眼镜
	          Mgr.curBoard.ApplyAddWaveProp(0);
	        } else if (id == we4p.ItemId.itemAddStep_1) {
	          //加1步
	          Mgr.stageManager.AddMaxStep(1);
	          Mgr.stageManager.addStep(1);
	          Mgr.aniManager.GenerateItemStepAnimation({
	            step: 1
	          });
	        } else if (id == we4p.ItemId.itemAddStep_2) {
	          //加2步
	          Mgr.stageManager.AddMaxStep(2);
	          Mgr.stageManager.addStep(2);
	          Mgr.aniManager.GenerateItemStepAnimation({
	            step: 2
	          });
	        } else if (id == we4p.ItemId.itemScoreAdd_5) {
	          //分数加5%
	          Mgr.scoreManager.AddScoreAddition(5);
	        } else if (id == we4p.ItemId.itemScoreAdd_7) {
	          //分数加7%
	          Mgr.scoreManager.AddScoreAddition(7);
	        } else if (id == we4p.ItemId.itemScoreAdd_9) {
	          //分数加9%
	          Mgr.scoreManager.AddScoreAddition(9);
	        } else if (id == we4p.ItemId.itemHurricane) {
	          //旋风小丑
	          Mgr.curBoard.ApplyAddHurricanProp();
	        }
	        // 随机加步道具步受天赋影响
	        /*if (data.type() == we4::kRandomStepUp) {
	          StageManager()->AddMaxStep(data.value());
	          continue;
	        }
	        if (data.type() == we4::kStartItemScoreUp) {
	          CurrentScoreManager()->AddScoreAddition(data.value());
	        }
	        if (data.type == we4p.StartItemType.kStartItemChess) {
	          if (data.value == we4p.StartItemChessType.horizontalWave) {
	            //水平眼镜
	            Mgr.curBoard.ApplyAddWaveProp(1);
	          } else if (data.value == we4p.StartItemChessType.verticalWave) {
	            //垂直眼镜
	            Mgr.curBoard.ApplyAddWaveProp(2);
	          } else if (data.value == we4p.StartItemChessType.hurrican) {
	            //爆炸
	            Mgr.curBoard.ApplyAddHurricanProp();
	          } else if (data.value == we4p.StartItemChessType.gas) {
	            //幽灵
	            Mgr.curBoard.ApplyAddGasProp();
	          } else if (data.value == we4p.StartItemChessType.randomWave) {
	            //随机眼镜
	            Mgr.curBoard.ApplyAddWaveProp(0);
	          }
	          continue;
	        }*/
	      }
	    }
	  }]);

	  return ItemManager_;
	}();

	;

	module.exports = {
	  PuzzleItem: PuzzleItem,
	  ItemHammer: ItemHammer,
	  ItemSwap: ItemSwap,
	  ItemGlass: ItemGlass,
	  ItemStep: ItemStep,
	  ItemRearrage: ItemRearrage,
	  ItemManager_: ItemManager_
	};

/***/ }
/******/ ])
});
;