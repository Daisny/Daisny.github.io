(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["D"] = factory();
	else
		root["D"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isFn = isFn;
exports.isStr = isStr;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isUndefined = isUndefined;
exports.each = each;
exports.camelize = camelize;
exports.trim = trim;
exports.noop = noop;


function typeEqual(obj, type) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

function isFn(obj) {
    return typeEqual(obj, 'Function');
};

function isStr(obj) {
    return typeEqual(obj, 'String');
};

function isObj(obj) {
    return typeEqual(obj, 'Object');
};

function isArray(obj) {
    return typeEqual(obj, 'Array');
};

function isUndefined(obj) {
    return typeEqual(obj, 'Undefined');
};

function each(obj, fn, context) {
    if (!obj || !isFn(fn)) {
        return;
    }
    context = context || obj;

    if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
            if (fn.call(context, obj[i], i, obj) === false) {
                return;
            }
        }
    } else if (isObj(obj)) {
        for (var n in obj) {
            if (fn.call(context, obj[n], n, obj) === false) {
                return;
            }
        }
    }
};

var camelizeRE = /_(\w)/g;
function camelize(str) {
    return str.replace(camelizeRE, toUpper);
}

function trim(val) {
    return val ? (val + '').replace(/^\s+|\s+$/g, '') : '';
}

function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
}

function noop() {};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = exports.UA = undefined;
exports.initApp = initApp;
exports.isAndroid = isAndroid;
exports.isIos = isIos;
exports.isFusionKit = isFusionKit;
exports.inApp = inApp;
exports.compareAppVersion = compareAppVersion;
exports.compareSysVersion = compareSysVersion;
exports.compare = compare;

var _lang = __webpack_require__(0);

var _env = __webpack_require__(3);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UA = exports.UA = window.navigator.userAgent.toLowerCase();

var regs = {
    'android': /android/i,
    'ios': /iphone/i,

    'weixin': /micromessenger/i,
    'mqq': /QQ\//i,
    'alipay': /aliapp/i,
    'ding': /dingtalk/i,
    'passenger': /didi.passenger/i,
    'lite': /didi.lite/i,
    'sdk': /didi.sdk/i,
    'driverAndroid': /didigsui/i,
    'driverIOS': /ddudriver/i,
    'chrome': /chrome\//i,
    'fusion': /fusionkit/i,
    'guarana': /guarana/i

};

var versionRegs = {
    'passenger': /didi.passenger.*?\/([\d\.]+)/i,
    'lite': /didi.lite\/(.+)$/i,
    'driverAndroid': /didigsui.*_(.+)_\d+_*/i,
    'driverIOS': /ddudriver.*\d_(\d+\.\d+\.\d+)_*/i,
    'android': /android ([\d\.]+)/i,
    'ios': /iphone os ([\d_]+)/i,
    'fusion': /fusionkit\/([\d\.]+)/i
};

var UNKNOWN = 'others';

var app = exports.app = {};

function initApp(DDBridge) {
    var ret = {};
    var version = {};

    (0, _lang.each)(regs, function (value, key) {
        ret[key] = value.test(UA);
    });

    if (ret.lite) {
        ret.lite = true;
    }

    if (ret.driverAndroid || ret.driverIOS) {
        ret.driver = true;
    };

    (0, _lang.each)(versionRegs, function (value, key) {
        if (ret[key]) {
            var match = value.exec(UA);

            var res = 'unkown';
            if (match) {
                res = match[1];
            } else {}
            version[key] = res;
        }
    });
    version.driver = version.driverAndroid || version.driverIOS;

    DDBridge.ua = ret;
    DDBridge.app = exports.app = app = {
        env: ret.lite ? 'lite' : ret.passenger ? 'passenger' : ret.driver ? 'driver' : UNKNOWN,
        version: version.passenger || version.driver,
        system: ret.ios ? 'ios' : ret.android ? 'android' : UNKNOWN,
        sysVersion: version.ios || version.android,
        fusionKit: ret.fusion,
        guarana: ret.guarana,
        third: {
            weixin: ret.weixin,
            mqq: ret.mqq,
            alipay: ret.alipay,
            ding: ret.ding
        }

    };
};
function isAndroid() {
    return app.system === 'android';
};

function isIos() {
    return app.system === 'ios';
};
function isFusionKit() {
    return app.fusionKit;
};

function inApp() {
    return app.env !== UNKNOWN;
};

function compareAppVersion() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    switch (args.length) {
        case 2:
            return compare(app.version, args[0], args[1]);
        case 3:
            return compare.apply(null, args);
    }
};
function compareSysVersion() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    switch (args.length) {
        case 2:
            return compare(app.sysVersion, args[0], args[1]);
        case 3:
            return compare.apply(null, args);
    }
};

function compare(v1, symbol, v2) {
    v1 = parse(v1);
    v2 = parse(v2);
    if (symbol.indexOf('=') !== -1 && v1 === v2) {
        return true;
    }
    if (symbol.indexOf('>') !== -1 && v1 > v2) {
        return true;
    }
    if (symbol.indexOf('<') !== -1 && v1 < v2) {
        return true;
    }
    return false;
};

function parse() {
    var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    version = version.split('.');
    version.length = 4;

    var ret = [];
    (0, _lang.each)(version, function (n) {
        n = n * 1;
        if (n) {
            ret.push(n >= 10 ? n : '0' + n);
        } else {
            ret.push('00');
        }
    });
    return parseInt(ret.join(''), 10);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lang = __webpack_require__(0);

function parseUserAgent() {

    var regs = {
        'android': /android/i,
        'iphone': /iphone/i,
        'ipad': /ipad/i,
        'ipod': /ipod/i,
        'weixin': /micromessenger/i,
        'mqq': /QQ\//i,
        'alipay': /aliapp/i,
        'ding': /dingtalk/i,
        'passenger': /didi.passenger/i,
        'lite': /didi.lite/i,
        'sdk': /didi.sdk/i,
        'driver': /didigsui|ddudriver/i,
        'chrome': /chrome\//i,
        'fusion': /fusionkit/i,
        'guarana': /guarana/i
    };

    var ret = {},
        ua = window.navigator.userAgent;

    for (var key in regs) {
        ret[key] = regs[key].test(ua);
    }

    ret.ios = ret.iphone || ret.ipad || ret.ipod;

    ret.mobile = ret.ios || ret.android;
    ret.pc = !ret.mobile;

    ret.prod = /(udache.com|diditaxi.com.cn|xiaojukeji.com)\//.test(window.location.href);
    ret.dev = !ret.prod;

    ret.dingding = ret.ding;

    if (ret.ding) {
        ret.alipay = false;
    }

    if (window.chrome && window.chrome) {
        ret.chrome = true;
    }

    return ret;
};

function isEnv(strs) {

    var str = strs.split(","),
        ua = parseUserAgent();

    var check = function check(rote) {
        rote = (0, _lang.trim)(rote) || "";
        if (!rote) {
            return false;
        }

        var rotes = rote.split(".");
        var ret = true;

        (0, _lang.each)(rotes, function (r, i) {
            if (!ua[r]) {
                ret = false;
                return false;
            }
            console.log(i);
        });

        return ret;
    };

    var ret = false;

    (0, _lang.each)(str, function (s, i) {
        if (check(s)) {
            ret = true;
            return false;
        }
    });

    return ret;
};

function parseVersion(version) {
    version = version || "";
    version = version.split(".");
    version.length = 4;

    var ret = [];

    $.each(version, function (i, n) {
        n = n * 1;
        if (n) {
            ret.push(n > 10 ? n : "0" + n);
        } else {
            ret.push("00");
        }
    });

    return parseInt(ret.join(""), 10);
};

function compare(v1, reg, v2) {

    v1 = parseVersion(v1);
    v2 = parseVersion(v2);
    reg = $.trim(reg) || "";
    if (reg.indexOf("=") !== -1 && v1 === v2) {
        return true;
    }
    if (reg.indexOf(">") !== -1 && v1 > v2) {
        return true;
    }
    if (reg.indexOf("<") !== -1 && v1 < v2) {
        return true;
    }
    return false;
};

exports.default = {
    ua: parseUserAgent,
    is: isEnv,
    comparex: compare
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lang = __webpack_require__(0);

module.exports = function loadScript(urlOpts, scriptOpts, cb) {
    var src = '';
    if ((0, _lang.isObj)(urlOpts)) {
        src = urlOpts.url || urlOpts.src;

        if (urlOpts.reg) {
            if (hasScript(urlOpts.reg)) {

                return;
            }
        }
    } else {
        src = urlOpts;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var script = document.createElement('script');

    if ((0, _lang.isFn)(scriptOpts)) {
        cb = scriptOpts;
        scriptOpts = {};
    }

    scriptOpts = scriptOpts || {};
    cb = cb || function () {};

    script.type = scriptOpts.type || 'text/javascript';
    script.charset = scriptOpts.charset || 'utf8';
    script.async = 'async' in scriptOpts ? !!scriptOpts.async : true;
    script.src = src;

    if (scriptOpts.attrs) {
        setAttributes(script, scriptOpts.attrs);
    }

    if (scriptOpts.text) {
        script.text = '' + scriptOpts.text;
    }

    var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
    onend(script, cb);

    if (!script.onload) {
        stdOnEnd(script, cb);
    }

    head.appendChild(script);
};

function setAttributes(script, attrs) {
    for (var attr in attrs) {
        script.setAttribute(attr, attrs[attr]);
    }
}

function stdOnEnd(script, cb) {
    script.onload = function () {
        this.onerror = this.onload = null;
        cb(null, script);
    };
    script.onerror = function () {
        this.onerror = this.onload = null;
        cb(new Error('Failed to load ' + this.src), script);
    };
}

function ieOnEnd(script, cb) {
    script.onreadystatechange = function () {
        if (this.readyState != 'complete' && this.readyState != 'loaded') return;
        this.onreadystatechange = null;
        cb(null, script);
    };
}

function hasScript(srcReg) {
    var ret = false;
    for (var s in document.scripts) {
        var src = document.scripts[s].src;
        if (src !== '') {
            if (new RegExp(srcReg).exec(src)) {
                ret = true;
            }
        }
    }
    return ret;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var sdkUrlConfig = {
    login: {
        url: '//webapp.didistatic.com/static/webapp/shield/z/login/login/0.3.21/login.min.js',
        reg: /static\/webapp\/shield\/z\/login\/login/
    },
    shareLocation: {
        url: '//webapp.didistatic.com/static/webapp/shield/z/didi-sdk/didi-sdk/0.1.12/sdk.min.js',
        reg: /static\/webapp\/shield\/z\/didi-sdk\/didi-sdk/
    },
    shareInte: {
        url: '//static.galileo.xiaojukeji.com/static/tms/shield/z/didi-intsdk/didi-intsdk/0.0.1/intsdk.min.js'
    },
    driverBridge: {
        url: '//static.udache.com/gulfstream/webapp/js/didi.dbridge.new.js',
        reg: /webapp\/js\/didi\.dbridge\.new\.js/
    }
};

exports.default = sdkUrlConfig;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ERR_OK = exports.ERR_OK = 0;

var ERR_FUNCTION_NOT_EXIST = exports.ERR_FUNCTION_NOT_EXIST = 1001;

var ERR_CALLBACK_ERROR = exports.ERR_CALLBACK_ERROR = 1002;

var ERR_ENV_ERROR = exports.ERR_ENV_ERROR = 2001;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _listenerMap = {};

function call(callback, args) {
    var fn = callback[0];
    var context = callback[1];
    args = callback[2].concat(args);
    try {
        return fn.apply(context, args);
    } catch (e) {
        setTimeout(function () {
            throw e;
        }, 0);
    }
}

function arrayClone(arr, len) {
    var copy = new Array(len);
    while (len--) {
        copy[len] = arr[len];
    }
    return copy;
}

function _emit(type) {
    var listenerList = _listenerMap[type];
    if (!listenerList) {
        return true;
    }
    var len = listenerList.cbs.length;
    var cbs = arrayClone(listenerList.cbs, len);
    var ret = true;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    for (var index = 0; index < len; index++) {
        if (!cbs[index]) {
            continue;
        }
        ret = call(cbs[index], args) !== false && ret;
    }
    return !!ret;
}

var events = exports.events = {
    on: function on(type, fn, context) {
        var listenerList = _listenerMap[type];
        if (!listenerList) {
            _listenerMap[type] = listenerList = {
                args: null,
                cbs: []
            };
        }

        for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
            rest[_key2 - 3] = arguments[_key2];
        }

        var callback = [fn, context, rest];
        var args = listenerList.args;
        if (args) {
            call(callback, args);
        } else {
            listenerList.cbs.push(callback);
        }
    },
    un: function un(type, fn) {
        var listenerList = _listenerMap[type];
        if (!listenerList) {
            return true;
        }
        if (arguments.length === 1) {
            listenerList.cbs = [];
        } else {
            var cbs = listenerList.cbs;
            var count = cbs.length;
            while (count--) {
                if (cbs[count] && cbs[count][0] === fn) {
                    cbs.splice(count, 1);
                }
            }
        }
    },
    emit: function emit(type, args) {
        return _emit.apply(this, arguments);
    },
    done: function done(type) {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
        }

        var listenerList = _listenerMap[type];
        if (!listenerList) {
            _listenerMap[type] = listenerList = {
                args: args,
                cbs: []
            };
        }
        var cbs = listenerList.cbs;
        var count = cbs.length;
        _emit.apply(this, arguments);

        listenerList.args = args;
        listenerList.cbs = cbs.slice(count);
    },
    undo: function undo(type) {
        var listenerList = _listenerMap[type];
        if (!listenerList) {
            return false;
        }
        listenerList.args = null;
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(1);

var _assign2 = _interopRequireDefault(_assign);

var _lang = __webpack_require__(0);

var D = _interopRequireWildcard(_lang);

var _app = __webpack_require__(2);

var app = _interopRequireWildcard(_app);

var _events = __webpack_require__(8);

var events = _interopRequireWildcard(_events);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _assign2.default)(D, app, events);
module.exports = D;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _2 = __webpack_require__(16);

var _3 = _interopRequireDefault(_2);

var _lang = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseUserAgent() {

	var regs = {
		'android': /android/i,

		'iphone': /iphone/i,
		'ipad': /ipad/i,
		'ipod': /ipod/i,

		'weixin': /micromessenger/i,
		'mqq': /QQ\//i,
		'app': /didi.passenger/i,
		'sdk': /didi.sdk/i,
		'driver': /didigsui|ddudriver/i,
		'flusion': /fusionkit/i,
		'alipay': /aliapp/i,
		'ding': /dingtalk/i,

		'chrome': /chrome\//i
	};

	var ret = {},
	    ua = window.navigator.userAgent;

	for (var key in regs) {
		ret[key] = regs[key].test(ua);
	}

	ret.ios = ret.iphone || ret.ipad || ret.ipod;

	ret.mobile = ret.ios || ret.android;
	ret.pc = !ret.mobile;

	ret.prod = /(udache.com|diditaxi.com.cn|xiaojukeji.com)\//.test(window.location.href);
	ret.dev = !ret.prod;

	ret.dingding = ret.ding;

	if (ret.ding) {
		ret.alipay = false;
	}

	if (window.chrome && window.chrome) {
		ret.chrome = true;
	}

	if (!ret.app) {
		ret.app = !!window.DidiJSBridge && !ret.driver;
	}

	ret.didi = ret.app;

	ret.passenger = ret.didi;

	return ret;
};

function isEnv(strs) {

	var str = strs.split(","),
	    ua = parseUserAgent();

	var check = function check(rote) {
		rote = (0, _lang.trim)(rote) || "";
		if (!rote) {
			return false;
		}

		var rotes = rote.split(".");
		var ret = true;

		(0, _lang.each)(rotes, function (r, i) {
			if (!ua[r]) {
				ret = false;
				return false;
			}
			console.log(i);
		});

		return ret;
	};

	var ret = false;

	(0, _lang.each)(str, function (s, i) {
		if (check(s)) {
			ret = true;
			return false;
		}
	});

	return ret;
};

exports.default = {
	ua: parseUserAgent,
	is: isEnv
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createFrame = createFrame;
function createFrame(src) {
	var frame = document.createElement('IFRAME');
	frame.style.display = 'none';
	frame.src = src;
	document.body.appendChild(frame);
	return frame;
};

function _require(url, key, callback) {
	if (typeof window.define == 'function' && (window.define.amd || window.define.cmd) && window.require) {
		window.require.config({
			paths: {
				wx: url
			}
		});
		window.require([key], function (obj) {
			window[key] = obj;
			callback(obj);
		});
	} else {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = url + ".js";
		document.getElementsByTagName("head")[0].appendChild(script);
		script.onload = function () {
			callback(window[key]);
		};
	}
};

function getScript(url, callback) {
	var sc = document.createElement("script");
	sc.type = "text/javascript";
	sc.src = url;
	document.getElementsByTagName("head")[0].appendChild(sc);

	sc.onload = sc.onreadystatechange = function () {

		if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
			if (typeof callback === "function") {
				callback();
			}
		}
	};
};

exports.default = {
	createFrame: createFrame,
	require: _require,
	getScript: getScript
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(43);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(18)
  , defined = __webpack_require__(17);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(1);

var _assign2 = _interopRequireDefault(_assign);

var _env = __webpack_require__(3);

var _env2 = _interopRequireDefault(_env);

var _share = __webpack_require__(37);

var _share2 = __webpack_require__(35);

var _share3 = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	title: '滴滴出行',
	content: '滴滴一下，美好出行',
	url: location.href.replace(/token=[^&]*/, ''),
	icon: 'http://static.udache.com/gulfstream/webapp/css/image/share-icon.png'
};

function prepareCfg() {
	var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	cfg = (0, _assign2.default)(_default, cfg);

	(0, _assign2.default)(cfg, {
		content: cfg.content || cfg.desc || cfg.text,
		icon: cfg.icon || cfg.imgUrl,
		url: cfg.url || cfg.link || cfg.href
	});

	return cfg;
}

function setShare(cfg) {
	if (cfg !== false) {
		cfg = prepareCfg(cfg);
	}

	if (_env2.default.is('passenger,driver')) {
		(0, _share2.setShareNative)(cfg);
	} else {
		(0, _share.setShareOutApp)(cfg);
	}

	_default = cfg;
}

function shareOneChannel(channel, cfg) {
	var data = prepareCfg(cfg);

	if (_env2.default.is('passenger,driver')) {
		(0, _share2.shareNative)(channel, data);
	} else {
		(0, _share3.setShareInte)(channel, data);
	}
}

function share(channel, cfg) {
	if (arguments.length == 2) {
		shareOneChannel(channel, cfg);
	} else {
		(0, _share2.shareNative)();
	}
}

module.exports = {
	setShare: setShare,
	share: share,
	setShareInte: _share3.setShareInte
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOldParamAlias = getOldParamAlias;
exports.alias = alias;
function getOldParamAlias(param) {
    if (param.type && param.type === 'image') {} else {
        param.share_title = param.title;
        param.share_content = param.content;
        param.share_url = param.url;
        param.share_icon_url = param.icon;
    }

    return param;
}
function alias(name, param, conf, allConf) {
    if (name.indexOf('share') === 0) {
        name = conf.alias ? conf.alias : conf.fn;
        param = getOldParamAlias(param);
    } else if (name === 'setTitle') {
        name = conf.alias ? conf.alias : conf.fn;
        param.navi_title = param.title;
    } else {
        conf ? name = conf.alias ? conf.alias : conf.fn : name;
    }
    return {
        name: name,
        param: param
    };
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(6);

var _stringify2 = _interopRequireDefault(_stringify);

exports.callAndroid = callAndroid;

var _err = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __uid = 0;

function callAndroid(fn, param, callback) {
    var id = __uid++;
    var callbackName = '__bridgeCall__' + id;

    var message = (0, _stringify2.default)({
        cmd: fn,
        id: id,
        params: param,
        callback: callbackName
    });

    window[callbackName] = function (retData) {
        var errno = retData.errno;
        var err = null;
        if (errno !== _err.ERR_OK) {
            var msg = retData.errmsg;
            err = new Error(msg);
        }
        delete window[callbackName];

        callback(err, retData.result);
    };

    window.prompt(message);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var config = {
    debug: false,

    api: {
        initEntrance: {
            fn: 'initEntrance',
            alias: 'init_entrance'
        },

        invokeEntrance: {
            fn: 'invokeEntrance',
            alias: 'invoke_entrance'
        },

        showEntrance: {
            fn: 'showEntrance',
            alias: 'show_entrance'
        },

        hideEntrance: {
            fn: 'hideEntrance',
            alias: 'hide_entrance'
        },

        shareWeixinTimeline: {
            fn: 'shareWeixinTimeline',
            alias: 'share_weixin_timeline'
        },

        shareWeixinAppmsg: {
            fn: 'shareWeixinAppmsg',
            alias: 'share_weixin_appmsg'
        },

        shareAlipayLife: {
            fn: 'shareAlipayLife'
        },

        shareAlipayFriend: {
            fn: 'shareAlipayFriend'
        },

        shareQzone: {
            fn: 'shareQzone',
            alias: 'share_qzone'
        },

        shareQqAppmsg: {
            fn: 'shareQqAppmsg',
            alias: 'share_qq_appmsg'
        },

        shareSinaWeibo: {
            fn: 'shareSinaWeibo',
            alias: 'share_sina_weibo'
        },
        shareFacebook: {
            fn: 'shareFacebook'
        },
        shareLine: {
            fn: 'shareLine'
        },
        shareWhatsApp: {
            fn: 'shareWhatsApp'
        },
        shareTwitter: {
            fn: 'shareTwitter'
        },
        shareEmail: {
            fn: 'shareEmail'
        },
        shareSMS: {
            fn: 'shareSMS'
        },

        getUserInfo: {
            fn: 'getUserInfo'
        },

        getSystemInfo: {
            fn: 'getSystemInfo'
        },

        getLocationInfo: {
            fn: 'getLocationInfo'
        },

        apolloGetToggle: {
            fn: 'apolloGetToggle'
        },

        refreshPage: {
            fn: 'refreshPage',
            alias: 'page_refresh'
        },

        closePage: {
            fn: 'closePage',
            alias: 'page_close'
        },

        openPage: {
            fn: 'openPage',
            alias: 'open_url'
        },
        clearCache: {
            fn: 'clearCache',
            support: '5.0.10'
        },
        launchScan: {
            fn: 'launchScan',
            support: '5.0.20'
        },

        requestLogin: {
            fn: 'requestLogin',
            alias: 'callNativeLogin',
            support: '5.0.10'
        },

        setTitle: {
            fn: 'setTitle',
            alias: 'updateNaviTitle',
            paramsAlias: 'navi_title'
        },

        photograph: {
            fn: 'photograph',
            support: '5.0.12'

        },
        commonPay: {
            fn: 'commonPay',
            alias: ['payByWX', 'payByAli'],
            support: '5.0.10'

        }
    }
};

exports.default = config;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDBridge = getDBridge;

var _loader = __webpack_require__(4);

var _loader2 = _interopRequireDefault(_loader);

var _sdkUrlConfig = __webpack_require__(5);

var _sdkUrlConfig2 = _interopRequireDefault(_sdkUrlConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = [];
var isBridgeReady = false;
var isLoaded = false;

document.addEventListener('DidiJSBridgeReady', function () {
	$log('DidiJSBridgeReady');
	isBridgeReady = true;

	callHandlers();
});

function callHandlers() {

	if (isBridgeReady && isLoaded) {
		while (handlers.length) {
			var fn = handlers.shift();

			fn.call(null, didi.dbridge);
		}
	}
}

function getDBridge(cb) {
	handlers.push(cb);

	if (isLoaded) {
		callHandlers();
		return false;
	}

	(0, _loader2.default)(_sdkUrlConfig2.default.driverBridge.url, function () {

		if (!didi.dbridge) {
			return false;
		}

		isLoaded = true;

		callHandlers();
	});
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(1);

var _assign2 = _interopRequireDefault(_assign);

var _entry = __webpack_require__(14);

var D = _interopRequireWildcard(_entry);

var _init = __webpack_require__(27);

var _env = __webpack_require__(3);

var _env2 = _interopRequireDefault(_env);

var _loader = __webpack_require__(4);

var _loader2 = _interopRequireDefault(_loader);

var _sdkUrlConfig = __webpack_require__(5);

var _sdkUrlConfig2 = _interopRequireDefault(_sdkUrlConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('D.bridge');


(0, _init.initGlobalAPI)(D);


(0, _assign2.default)(D, _env2.default, { loadScript: _loader2.default }, { sdkUrlConfig: _sdkUrlConfig2.default });

module.exports = D;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initGlobalAPI = initGlobalAPI;

var _lang = __webpack_require__(0);

var _events = __webpack_require__(8);

var _old_bridge = __webpack_require__(30);

var _makeBridge = __webpack_require__(29);

var _app = __webpack_require__(2);

var _env = __webpack_require__(3);

var _env2 = _interopRequireDefault(_env);

var _config = __webpack_require__(24);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeBridgeFunction = _makeBridge.makeBridgeFn;

function initGlobalAPI(DDBridge) {
    (0, _app.initApp)(DDBridge);
    initBaseCall(DDBridge);
    proxy(DDBridge);
    initSupport(DDBridge);

    if (!_env2.default.is("driver") && !(0, _app.isFusionKit)() && (0, _app.compareAppVersion)('<', '5.0.0')) {
        makeBridgeFunction = _old_bridge.oldMakeBridgeFn;
        oldInitEvents(DDBridge);
    } else {
        initEvents(DDBridge);
    }
};

function initBaseCall(DDBridge) {
    DDBridge.call = function (name, param, callback) {
        var conf = _config2.default.api[name];
        var bridgeFn = makeBridgeFunction(name, conf, _config2.default);
        if (!callback && (0, _lang.isFn)(param)) {
            callback = param;
            param = {};
        }
        return bridgeFn(param, callback);
    };
}

function initEvents(DDBridge) {
    DDBridge.on = function (eventName, callback) {
        _events.events.on(eventName, callback);
    };

    DDBridge.off = function (eventName, callback) {
        _events.events.un(eventName, callback);
    };
}

function initSupport(DDBridge) {
    DDBridge.support = function (fn, cpVersion) {
        if (!_app.inApp || !DDBridge[fn]) {
            return false;
        }
        var support = DDBridge[fn].support;
        if (!support || (0, _app.compareAppVersion)(cpVersion || _app.app.version, '>=', support)) {
            return true;
        }
        return false;
    };
}

function proxy(DDBridge) {
    (0, _lang.each)(_config2.default.api, function (conf, name) {
        DDBridge[name] = makeBridgeFunction(name, conf);
        DDBridge[name].support = conf.support;
    });
}

function oldInitEvents(DDBridge) {
    if (_app.isAndroid) {
        DDBridge.on = function (eventName, callback) {
            _events.events.on(eventName, callback);
        };

        DDBridge.off = function (eventName, callback) {
            _events.events.un(eventName, callback);
        };

        DDBridge._trigger = _events.events.emit;
    } else {
        DDBridge.on = _old_bridge.registerHandler;

        DDBridge.off = _lang.noop;
    }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(6);

var _stringify2 = _interopRequireDefault(_stringify);

exports.callIOS = callIOS;

var _ = __webpack_require__(16);

var utils = _interopRequireWildcard(_);

var _lang = __webpack_require__(0);

var _err = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = 'didibridge://BRIDGE_CALL?callback=';
var msgFrame = null;

var __uid = 0;

function callIOS(fn, param, callback) {
    var id = __uid++;
    var callbackName = '__bridgeCall__' + id;

    var callData = (0, _stringify2.default)({
        cmd: fn,
        id: id,
        params: param,
        callback: callbackName
    });

    var callDataName = '__getCallData__' + id;
    window[callDataName] = function () {
        delete window[callDataName];
        return callData;
    };

    window[callbackName] = function (retData) {
        if ((0, _lang.isStr)(retData)) {
            try {
                retData = JSON.parse(retData);
            } catch (e) {
                retData = {};
            }
        }
        var errno = retData.errno;
        var err = null;
        if (errno !== _err.ERR_OK) {
            var msg = retData.errmsg;
            err = new Error(msg);
        }
        delete window[callbackName];

        callback(err, retData.result);
    };

    var src = schema + callDataName;
    send(src);
};

function send(src) {
    if (!msgFrame) {
        msgFrame = (0, _.createFrame)(src);
    } else {
        msgFrame.src = src;
    }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.makeBridgeFn = makeBridgeFn;

var _lang = __webpack_require__(0);

var _events = __webpack_require__(8);

var _err = __webpack_require__(7);

var _app = __webpack_require__(2);

var _ios = __webpack_require__(28);

var _android = __webpack_require__(23);

function makeBridgeFn(name, conf) {
    return function () {
        var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _lang.noop;

        if (arguments.length === 1 && (0, _lang.isFn)(param)) {
            callback = param;
            param = {};
        }

        var fn = conf ? conf.fn : name;
        call(fn, param, callback);
    };
};

function init() {
    var triggerName = '__bridgeTrigger__';

    window[triggerName] = function (retData) {
        if ((0, _lang.isStr)(retData)) {
            try {
                retData = JSON.parse(retData);
            } catch (e) {
                retData = {};
            }
        }
        var eventName = retData.eventname;
        var errno = retData.errno;
        var err = null;
        if (errno !== _err.ERR_OK) {
            var msg = retData.errmsg;
            err = new Error(msg);
        }
        _events.events.emit(eventName, err, retData.result);
    };

    call('initConfig', {
        handler: triggerName
    }, _lang.noop);
}

function call(fn, param, callback) {
    if ((0, _app.inApp)()) {
        if ((0, _app.isFusionKit)()) {
            var triggerName = '__fusionBridgeCall__';

            window[triggerName] = function (ret) {
                if (ret.hasOwnProperty('errno') && ret.hasOwnProperty('errmsg') && ret.hasOwnProperty('result')) {
                    callback({ errno: ret.errno, errmsg: ret.msg }, ret.result);
                } else {
                    var err = {
                        errno: 0,
                        errmsg: ''
                    };
                    callback(err, ret);
                }
            };
            window.Fusion[fn](param, window[triggerName]);
        } else {
            if ((0, _app.isAndroid)()) {
                (0, _android.callAndroid)(fn, param, callback);
            } else {
                (0, _ios.callIOS)(fn, param, callback);
            }
        }
    }
}

init();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bridgeReady = bridgeReady;
exports.oldMakeBridgeFn = oldMakeBridgeFn;
exports.registerHandler = registerHandler;

var _lang = __webpack_require__(0);

var _old_prompt = __webpack_require__(31);

var _alias = __webpack_require__(22);

var cbs = [];

function init() {
    if ((0, _lang.isUndefined)(window.DidiJSBridge)) {
        document.addEventListener('DidiJSBridgeReady', onBridgeReady, false);
    } else {
        window.DidiJSBridge.init && window.DidiJSBridge.init();
    }
}

function onBridgeReady() {
    window.DidiJSBridge.init && window.DidiJSBridge.init();

    (0, _lang.each)(cbs, function (cb) {
        cb(window.DidiJSBridge);
    });
}

init();

function bridgeReady(callback) {
    if ((0, _lang.isUndefined)(window.DidiJSBridge)) {
        cbs.push(callback);
    } else {
        callback(window.DidiJSBridge);
    }
}

function oldMakeBridgeFn(name, conf, allConf) {
    return function () {
        var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _lang.noop;

        if (arguments.length === 1 && (0, _lang.isFn)(param)) {
            callback = param;
            param = '';
        }

        var nameParams = (0, _alias.alias)(name, param, conf, allConf);

        if ((0, _old_prompt.supportPrompt)()) {
            (0, _old_prompt.promptSend)(nameParams.name, nameParams.param, callback);
        } else {
            bridgeReady(function (bridge) {
                bridge.callHandler(nameParams.name, nameParams.param, function (data) {
                    if ((0, _lang.isStr)(data)) {
                        data = JSON.parse(data);
                    }
                    callback(null, data);
                });
            });
        }
    };
};

function registerHandler(fn, callback) {
    bridgeReady(function (bridge) {
        bridge.registerHandler(fn, callback);
    });
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(6);

var _stringify2 = _interopRequireDefault(_stringify);

exports.promptSend = promptSend;
exports.supportPrompt = supportPrompt;

var _lang = __webpack_require__(0);

var _app = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __uid = 0;
var callbacks = {};

function initPrompt() {
    if (!(0, _lang.isUndefined)(window.didi) && !(0, _lang.isUndefined)(window.didi.bridge)) {
        window.didi.bridge._callback = promptCallback;
    } else {
        if ((0, _lang.isUndefined)(window.didi)) {
            window.didi = {};
        }
        window.didi.bridge = {};
        window.didi.bridge._callback = promptCallback;
    }
}

function promptCallback(obj) {
    if ((0, _lang.isStr)(obj)) {
        obj = JSON.parse(obj);
    }
    var _obj = obj,
        id = _obj.id,
        result = _obj.result;

    var callback = callbacks[id];
    if ((0, _lang.isFn)(callback)) {
        callback(null, result);
    }
}

initPrompt();

function promptSend(fn, param, callback) {
    var id = __uid++;
    var message = (0, _stringify2.default)({
        cmd: fn,
        id: id,
        params: param
    });
    callbacks[id] = callback;
    window.prompt(message);
};

function supportPrompt() {
    return (0, _app.isAndroid)() && (0, _app.compareAppVersion)('>', '4.2.0');
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(1);

var _assign2 = _interopRequireDefault(_assign);

var _entry = __webpack_require__(14);

var D = _interopRequireWildcard(_entry);

var _env = __webpack_require__(15);

var _env2 = _interopRequireDefault(_env);

var _share = __webpack_require__(21);

var Share = _interopRequireWildcard(_share);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _assign2.default)(D, Share, {
	invokeShare: Share.share
});

module.exports = D;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ready = ready;
exports.setShare = setShare;

var _loader = __webpack_require__(4);

var _loader2 = _interopRequireDefault(_loader);

var _sdkUrlConfig = __webpack_require__(5);

var _sdkUrlConfig2 = _interopRequireDefault(_sdkUrlConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHARE_SDK = _sdkUrlConfig2.default.shareInte.url;

var fns = [];

function callHandlers() {
	while (fns.length) {
		var fn = fns.shift();

		fn.call(null, window.sdk);
	}
}

function ready(cb) {
	fns.push(cb);

	if (window.sdk) {
		return callHandlers();
	}

	(0, _loader2.default)(SHARE_SDK, function () {
		if (!window.sdk) {
			return false;
		}

		callHandlers();
	});
}

function setShare(cfg) {
	ready(function (sdk) {
		sdk.setShare(cfg);
	});
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ready = ready;
exports.getGeolocation = getGeolocation;
exports.setShare = setShare;

var _loader = __webpack_require__(4);

var _loader2 = _interopRequireDefault(_loader);

var _sdkUrlConfig = __webpack_require__(5);

var _sdkUrlConfig2 = _interopRequireDefault(_sdkUrlConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHARE_SDK = _sdkUrlConfig2.default.shareLocation.url;

var fns = [];

function callHandlers() {
	while (fns.length) {
		var fn = fns.shift();

		fn.call(null, window.sdk);
	}
}

function ready(cb) {
	fns.push(cb);

	if (window.sdk) {
		return callHandlers();
	}

	(0, _loader2.default)(SHARE_SDK, function () {
		if (!window.sdk) {
			return false;
		}

		callHandlers();
	});
}

function getGeolocation(cb) {
	ready(function (sdk) {
		sdk.geoLocation(function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			cb && cb.apply(null, args);
		});
	});
}

function setShare(cfg) {
	ready(function (sdk) {
		sdk.setShare(cfg);
	});
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(6);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(1);

var _assign2 = _interopRequireDefault(_assign);

var _entry = __webpack_require__(26);

var Bridge = _interopRequireWildcard(_entry);

var _dbridge = __webpack_require__(25);

var _env = __webpack_require__(15);

var _env2 = _interopRequireDefault(_env);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entranceCfg = {
	entrance: {
		'icon': 'http://static.xiaojukeji.com/api/img/i-webview-entrance.png'
	},
	buttons: [],
	windowCallBack: '__showEntranceCallBack__'
};

var channelMaps = {
	weixin_timeline: {
		type: 'shareWeixinTimeline',
		name: '微信朋友圈'
	},
	weixin_appmsg: {
		type: 'shareWeixinAppmsg',
		name: '微信好友'
	},
	qzone: {
		type: 'shareQzone',
		name: 'QQ空间'
	},
	qq_appmsg: {
		type: 'shareQqAppmsg',
		name: 'QQ好友'
	},
	alipay_timeline: {
		type: 'shareAlipayLife',
		name: '生活圈'
	},
	alipay_appmsg: {
		type: 'shareAlipayFriend',
		name: '支付宝好友'
	},
	sina_weibo: {
		type: 'shareSinaWeibo',
		name: '新浪微博'
	},
	facebook: {
		type: 'shareFacebook',
		name: 'Facebook'
	},
	twitter: {
		type: 'shareTwitter',
		name: 'Twitter'
	},
	line: {
		type: 'shareLine',
		name: 'Line'
	},
	whatsapp: {
		type: 'shareWhatsApp',
		name: 'WhatsApp'
	},
	sms: {
		type: 'shareSMS',
		name: 'SMS'
	},
	email: {
		type: 'shareEmail',
		name: 'Email'
	},
	messenger: {
		type: 'shareMessenger',
		name: 'Messenger'
	}
};

function formatButtons(cfg) {
	var buttons = [];

	for (var channel in channelMaps) {
		var channelCfg = channelMaps[channel],
		    data = getShareData(channel, cfg);

		buttons.push({
			type: channelCfg.type,
			name: channelCfg.name,
			data: data
		});
	}

	if (cfg.refresh !== false) {
		buttons.push({
			type: 'refreshPage',
			name: '刷新'
		});
	}

	return buttons;
}

function getShareData(channel, cfg) {
	var data = {};

	(0, _assign2.default)(data, cfg);

	if (cfg.type == 'image') {
		return {
			type: 'image',
			image: cfg.image
		};
	}

	if (channel == 'weixin_timeline') {
		data.title = data.weixin_timeline_title || data.content;
	}

	if (channel == 'sina_weibo') {
		data.title = data.sina_weibo_title || data.title;
		data.content = data.sina_weibo_content || data.content;
	}

	return data;
}

function log(msg) {
	var img = new Image();

	img.src = 'http://www.xiaojukeji.com/i.gif?msg=' + (0, _stringify2.default)(msg || {});
}

window.onerror = function (msg) {
	log(msg);
};

function setShareNative(cfg) {
	if (cfg === false && _env2.default.is('passenger')) {
		Bridge.call('hideEntrance', {}, function () {});
		return false;
	}

	if (_env2.default.is('driver')) {
		if (cfg.type == 'image') return;

		(0, _dbridge.getDBridge)(function (dbridge) {
			var driverShareData = {
				'share_weixin_appmsg': cfg,
				'share_weixin_timeline': cfg
			};

			if (cfg.sms !== false) {
				driverShareData['share_sms'] = {
					phone: '',
					content: cfg.sms_content || cfg.content
				};
			}

			$log(driverShareData);

			dbridge.initEntrance(driverShareData);

			dbridge.addCornerButton({
				btnName: '...'
			}, function () {
				invokeEntrance();
			});
		});
		return;
	}

	entranceCfg.buttons = formatButtons(cfg);

	Bridge.call('showEntrance', entranceCfg, function (err, ret) {
		log(ret);
	});
}

function invokeEntrance() {
	if (_env2.default.is('app')) {
		Bridge.call('invokeEntrance');
	} else {
		(0, _dbridge.getDBridge)(function (dbridge) {
			dbridge.invokeEntrance();
		});
	}
}

function shareDriverNative(channel, cfg) {
	var allowed = 'weixin_timeline,weixin_appmsg,share_sms';

	if (allowed.indexOf(channel) != -1) {
		(0, _dbridge.getDBridge)(function (dbridge) {
			dbridge.share(channel, cfg);
		});
	}
}

function shareNative(channel, cfg) {
	if (!arguments.length) {
		invokeEntrance();
		return false;
	}

	if (_env2.default.is('driver')) {
		return shareDriverNative(channel, cfg);
	}

	var shareData = getShareData(channel, cfg),
	    cmd = '';

	if (channelMaps[channel]) {
		cmd = channelMaps[channel].type;
	}

	cmd && Bridge.call(cmd, shareData);
}

module.exports = {
	setShareNative: setShareNative,
	shareNative: shareNative
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setShareInte = setShareInte;

var _sdk = __webpack_require__(33);

var sdk = _interopRequireWildcard(_sdk);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setShareInte(channel, opt) {
  var cfg = {
    shareUrl: opt.url,
    platform: channel
  };

  $log(cfg);

  sdk.setShare(cfg);
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setShareOutApp = setShareOutApp;

var _sdk = __webpack_require__(34);

var sdk = _interopRequireWildcard(_sdk);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setShareOutApp(cfg) {
	var _cfg = cfg;

	if (_cfg) {
		_cfg = {
			title: cfg.title,
			desc: cfg.content,
			shareUrl: cfg.url,
			imgUrl: cfg.icon
		};

		_cfg.desc = cfg.weixin_timeline_title || _cfg.desc;
	}

	sdk.setShare(cfg);
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(9)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
module.exports = __webpack_require__(9).Object.assign;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(20)
  , toLength  = __webpack_require__(61)
  , toIndex   = __webpack_require__(60);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(40);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13)
  , document = __webpack_require__(12).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(12)
  , core      = __webpack_require__(9)
  , ctx       = __webpack_require__(44)
  , hide      = __webpack_require__(49)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(52)
  , createDesc = __webpack_require__(57);
module.exports = __webpack_require__(10) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(45)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(55)
  , gOPS     = __webpack_require__(53)
  , pIE      = __webpack_require__(56)
  , toObject = __webpack_require__(62)
  , IObject  = __webpack_require__(18)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(41)
  , IE8_DOM_DEFINE = __webpack_require__(50)
  , toPrimitive    = __webpack_require__(63)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(48)
  , toIObject    = __webpack_require__(20)
  , arrayIndexOf = __webpack_require__(42)(false)
  , IE_PROTO     = __webpack_require__(58)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(54)
  , enumBugKeys = __webpack_require__(46);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(59)('keys')
  , uid    = __webpack_require__(64);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(47);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(51)});

/***/ })
/******/ ]);
});
