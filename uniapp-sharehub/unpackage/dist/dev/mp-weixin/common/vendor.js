(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__CE0D615",
    appName: "ShareHub",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.99",
    uniRuntimeVersion: "3.99",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__CE0D615",
      appName: "ShareHub",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"ShareHub","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"ShareHub","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"ShareHub","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"ShareHub","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"ShareHub","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!*******************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/pages.json ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 279:
/*!******************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/mixin/mpMixin.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // 将自定义节点设置成虚拟的（去掉自定义组件包裹层），更加接近Vue组件的表现，能更好的使用flex属性
  options: {
    virtualHost: true
  }
};
exports.default = _default;

/***/ }),

/***/ 280:
/*!****************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/mixin/mixin.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var index = _interopRequireWildcard(__webpack_require__(/*! ../function/index.js */ 60));
var test = _interopRequireWildcard(__webpack_require__(/*! ../function/test.js */ 61));
var _route = _interopRequireDefault(__webpack_require__(/*! ../util/route.js */ 281));
var _debounce = _interopRequireDefault(__webpack_require__(/*! ../function/debounce.js */ 282));
var _throttle = _interopRequireDefault(__webpack_require__(/*! ../function/throttle.js */ 283));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default2 = {
  // 定义每个组件都可能需要用到的外部样式以及类名
  props: {
    // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return {};
      }
    },
    customClass: {
      type: String,
      default: ''
    },
    // 跳转的页面路径
    url: {
      type: String,
      default: ''
    },
    // 页面跳转的类型
    linkType: {
      type: String,
      default: 'navigateTo'
    }
  },
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$uv上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$uv.getRect = this.$uvGetRect;
  },
  created: function created() {
    // 组件当中，只有created声明周期，为了能在组件使用，故也在created中将方法挂载到$uv
    this.$uv.getRect = this.$uvGetRect;
  },
  computed: {
    $uv: function $uv() {
      var _uni, _uni$$uv, _uni$$uv$config;
      return _objectSpread(_objectSpread({}, index), {}, {
        test: test,
        route: _route.default,
        debounce: _debounce.default,
        throttle: _throttle.default,
        unit: (_uni = uni) === null || _uni === void 0 ? void 0 : (_uni$$uv = _uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$config = _uni$$uv.config) === null || _uni$$uv$config === void 0 ? void 0 : _uni$$uv$config.unit
      });
    },
    /**
     * 生成bem规则类名
     * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
     * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
     * @param {String} name 组件名称
     * @param {Array} fixed 一直会存在的类名
     * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
     * @returns {Array|string}
     */
    bem: function bem() {
      return function (name, fixed, change) {
        var _this = this;
        // 类名前缀
        var prefix = "uv-".concat(name, "--");
        var classes = {};
        if (fixed) {
          fixed.map(function (item) {
            // 这里的类名，会一直存在
            classes[prefix + _this[item]] = true;
          });
        }
        if (change) {
          change.map(function (item) {
            // 这里的类名，会根据this[item]的值为true或者false，而进行添加或者移除某一个类
            _this[item] ? classes[prefix + item] = _this[item] : delete classes[prefix + item];
          });
        }
        return Object.keys(classes);
        // 支付宝，头条小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效
      };
    }
  },

  methods: {
    // 跳转某一个页面
    openPage: function openPage() {
      var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'url';
      var url = this[urlKey];
      if (url) {
        // 执行类似uni.navigateTo的方法
        uni[this.linkType]({
          url: url
        });
      }
    },
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uvGetRect: function $uvGetRect(selector, all) {
      var _this2 = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().in(_this2)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    getParentData: function getParentData() {
      var _this3 = this;
      var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = {};
      // 这里的本质原理是，通过获取父组件实例(也即类似uv-radio的父组件uv-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(uv-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      // 此处并不会自动更新子组件的数据，而是依赖父组件uv-radio-group去监听data的变化，手动调用更新子组件的方法去重新获取
      this.parent = this.$uv.$parent.call(this, parentName);
      if (this.parent.children) {
        // 如果父组件的children不存在本组件的实例，才将本实例添加到父组件的children中
        this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
      }
      if (this.parent && this.parentData) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this3.parentData[key] = _this3.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && typeof e.stopPropagation === 'function' && e.stopPropagation();
    },
    // 空操作
    noop: function noop(e) {
      this.preventEvent(e);
    }
  },
  onReachBottom: function onReachBottom() {
    uni.$emit('uvOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {
    var _this4 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this4) {
          childrenList.splice(index, 1);
        }
      });
    }
  },
  // 兼容vue3
  unmounted: function unmounted() {
    var _this5 = this;
    if (this.parent && test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this5) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 281:
/*!***************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/util/route.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 57));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 59));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _index = __webpack_require__(/*! @/uni_modules/uv-ui-tools/libs/function/index.js */ 60);
/**
 * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
 * 并且带有路由拦截功能
 */
var Router = /*#__PURE__*/function () {
  function Router() {
    (0, _classCallCheck2.default)(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1,
      // navigateBack页面后退时,回退的层数
      params: {},
      // 传递的参数
      animationType: 'pop-in',
      // 窗口动画,只在APP有效
      animationDuration: 300,
      // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false,
      // 是否需要拦截
      events: {} // 页面间通信接口，用于监听被打开页面发送到当前页面的数据。hbuilderx 2.8.9+ 开始支持。
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  (0, _createClass2.default)(Router, [{
    key: "addRootPath",
    value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, {
    key: "mixinParam",
    value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = (0, _index.queryParams)(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&".concat(query);
      }
      // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
      query = (0, _index.queryParams)(params);
      return url += query;
    }

    // 对外的方法名称
  }, {
    key: "route",
    value: function () {
      var _route = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var options,
          params,
          mergeConfig,
          isNext,
          _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};
                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = (0, _index.deepMerge)(this.config, options);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }
                // 如果本次跳转的路径和本页面路径一致，不执行跳转，防止用户快速点击跳转按钮，造成多次跳转同一个页面的问题
                if (!(mergeConfig.url === (0, _index.page)())) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return");
              case 6:
                if (params.intercept) {
                  mergeConfig.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = (0, _index.deepMerge)(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof mergeConfig.intercept === 'function')) {
                  _context.next = 16;
                  break;
                }
                _context.next = 12;
                return new Promise(function (resolve, reject) {
                  mergeConfig.intercept(mergeConfig, resolve);
                });
              case 12:
                isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);
                _context.next = 17;
                break;
              case 16:
                this.openPage(mergeConfig);
              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function route() {
        return _route.apply(this, arguments);
      }
      return route;
    }() // 执行路由跳转
  }, {
    key: "openPage",
    value: function openPage(config) {
      // 解构参数
      var url = config.url,
        type = config.type,
        delta = config.delta,
        animationType = config.animationType,
        animationDuration = config.animationDuration,
        events = config.events;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration,
          events: events
        });
      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url
        });
      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url
        });
      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url
        });
      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta
        });
      }
    }
  }]);
  return Router;
}();
var _default = new Router().route;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 282:
/*!**********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/function/debounce.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}
var _default = debounce;
exports.default = _default;

/***/ }),

/***/ 283:
/*!**********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/function/throttle.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timer;
var flag;
/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    // 如果是非立即执行，则在wait毫秒内的结束处执行
    timer = setTimeout(function () {
      flag = false;
      typeof func === 'function' && func();
    }, wait);
  }
}
var _default = throttle;
exports.default = _default;

/***/ }),

/***/ 284:
/*!************************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-loading-page/components/uv-loading-page/props.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 提示内容
    loadingText: {
      type: [String, Number],
      default: ''
    },
    // 文字上方用于替换loading动画的图片
    image: {
      type: String,
      default: ''
    },
    // 加载动画的模式，circle-圆形，spinner-花朵形，semicircle-半圆形
    loadingMode: {
      type: String,
      default: 'circle'
    },
    // 是否加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 背景色
    bgColor: {
      type: String,
      default: '#fff'
    },
    // 文字颜色
    color: {
      type: String,
      default: '#C8C8C8'
    },
    // 文字大小
    fontSize: {
      type: [String, Number],
      default: 16
    },
    // 图标大小
    iconSize: {
      type: [String, Number],
      default: 26
    },
    // 加载中图标的颜色，只能rgb或者十六进制颜色值
    loadingColor: {
      type: String,
      default: '#C8C8C8'
    },
    // 过渡时间
    duration: {
      type: [String, Number],
      default: 300
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.loadingPage)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 292:
/*!******************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-row/components/uv-row/props.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 给col添加间距，左右边距各占一半
    gutter: {
      type: [String, Number],
      default: 0
    },
    // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
    justify: {
      type: String,
      default: 'start'
    },
    // 垂直对齐方式，可选值为top、center、bottom
    align: {
      type: String,
      default: 'center'
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.row)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 300:
/*!******************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-row/components/uv-col/props.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 占父容器宽度的多少等分，总分为12份
    span: {
      type: [String, Number],
      default: 12
    },
    // 指定栅格左侧的间隔数(总12栏)
    offset: {
      type: [String, Number],
      default: 0
    },
    // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
    justify: {
      type: String,
      default: 'start'
    },
    // 垂直对齐方式，可选值为top、center、bottom、stretch
    align: {
      type: String,
      default: 'stretch'
    },
    // 文字对齐方式
    textAlign: {
      type: String,
      default: 'left'
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.col)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 308:
/*!**********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-input/components/uv-input/props.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    value: {
      type: [String, Number],
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    // 输入框类型
    // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
    // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
    // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
    // text-文本输入键盘
    type: {
      type: String,
      default: 'text'
    },
    // 是否禁用输入框
    disabled: {
      type: Boolean,
      default: false
    },
    // 禁用状态时的背景色
    disabledColor: {
      type: String,
      default: '#f5f7fa'
    },
    // 是否显示清除控件
    clearable: {
      type: Boolean,
      default: false
    },
    // 是否密码类型
    password: {
      type: Boolean,
      default: false
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: -1
    },
    // 	输入框为空时的占位符
    placeholder: {
      type: String,
      default: null
    },
    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: 'input-placeholder'
    },
    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: 'color: #c0c4cc'
    },
    // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
    // https://uniapp.dcloud.io/component/input
    // https://uniapp.dcloud.io/component/textarea
    confirmType: {
      type: String,
      default: 'done'
    },
    // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
    confirmHold: {
      type: Boolean,
      default: false
    },
    // focus时，点击页面的时候不收起键盘，微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    // 自动获取焦点
    // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
    focus: {
      type: Boolean,
      default: false
    },
    // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
    autoBlur: {
      type: Boolean,
      default: false
    },
    // 指定focus时光标的位置
    cursor: {
      type: [String, Number],
      default: -1
    },
    // 输入框聚焦时底部与键盘的距离
    cursorSpacing: {
      type: [String, Number],
      default: 30
    },
    // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
    selectionStart: {
      type: [String, Number],
      default: -1
    },
    // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
    selectionEnd: {
      type: [String, Number],
      default: -1
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: true
    },
    // 输入框内容对齐方式，可选值为：left|center|right
    inputAlign: {
      type: String,
      default: 'left'
    },
    // 输入框字体的大小
    fontSize: {
      type: [String, Number],
      default: '14px'
    },
    // 输入框字体颜色
    color: {
      type: String,
      default: '#303133'
    },
    // 输入框前置图标
    prefixIcon: {
      type: String,
      default: ''
    },
    // 前置图标样式，对象或字符串
    prefixIconStyle: {
      type: [String, Object],
      default: ''
    },
    // 输入框后置图标
    suffixIcon: {
      type: String,
      default: ''
    },
    // 后置图标样式，对象或字符串
    suffixIconStyle: {
      type: [String, Object],
      default: ''
    },
    // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
    border: {
      type: String,
      default: 'surround'
    },
    // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
    readonly: {
      type: Boolean,
      default: false
    },
    // 输入框形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: 'square'
    },
    // 用于处理或者过滤输入框内容的方法
    formatter: {
      type: [Function, null],
      default: null
    },
    // 是否忽略组件内对文本合成系统事件的处理
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.input)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 316:
/*!*****************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/mixin/button.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    lang: String,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    formType: String,
    openType: String
  }
};
exports.default = _default;

/***/ }),

/***/ 317:
/*!*******************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/mixin/openType.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    openType: String
  },
  emits: ['getphonenumber', 'getuserinfo', 'error', 'opensetting', 'launchapp', 'contact', 'chooseavatar', 'addgroupapp', 'chooseaddress', 'subscribe', 'login', 'im'],
  methods: {
    onGetPhoneNumber: function onGetPhoneNumber(event) {
      this.$emit('getphonenumber', event.detail);
    },
    onGetUserInfo: function onGetUserInfo(event) {
      this.$emit('getuserinfo', event.detail);
    },
    onError: function onError(event) {
      this.$emit('error', event.detail);
    },
    onOpenSetting: function onOpenSetting(event) {
      this.$emit('opensetting', event.detail);
    },
    onLaunchApp: function onLaunchApp(event) {
      this.$emit('launchapp', event.detail);
    },
    onContact: function onContact(event) {
      this.$emit('contact', event.detail);
    },
    onChooseavatar: function onChooseavatar(event) {
      this.$emit('chooseavatar', event.detail);
    },
    onAgreeprivacyauthorization: function onAgreeprivacyauthorization(event) {
      this.$emit('agreeprivacyauthorization', event.detail);
    },
    onAddgroupapp: function onAddgroupapp(event) {
      this.$emit('addgroupapp', event.detail);
    },
    onChooseaddress: function onChooseaddress(event) {
      this.$emit('chooseaddress', event.detail);
    },
    onSubscribe: function onSubscribe(event) {
      this.$emit('subscribe', event.detail);
    },
    onLogin: function onLogin(event) {
      this.$emit('login', event.detail);
    },
    onIm: function onIm(event) {
      this.$emit('im', event.detail);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 318:
/*!************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-button/components/uv-button/props.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 是否细边框
    hairline: {
      type: Boolean,
      default: true
    },
    // 按钮的预置样式，info，primary，error，warning，success
    type: {
      type: String,
      default: 'info'
    },
    // 按钮尺寸，large，normal，small，mini
    size: {
      type: String,
      default: 'normal'
    },
    // 按钮形状，circle（两边为半圆），square（带圆角）
    shape: {
      type: String,
      default: 'square'
    },
    // 按钮是否镂空
    plain: {
      type: Boolean,
      default: false
    },
    // 是否禁止状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 加载中提示文字
    loadingText: {
      type: [String, Number],
      default: ''
    },
    // 加载状态图标类型
    loadingMode: {
      type: String,
      default: 'spinner'
    },
    // 加载图标大小
    loadingSize: {
      type: [String, Number],
      default: 14
    },
    // 开放能力，具体请看uniapp稳定关于button组件部分说明
    // https://uniapp.dcloud.io/component/button
    openType: {
      type: String,
      default: ''
    },
    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    // 取值为submit（提交表单），reset（重置表单）
    formType: {
      type: String,
      default: ''
    },
    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    // 只微信小程序、QQ小程序有效
    appParameter: {
      type: String,
      default: ''
    },
    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
    hoverStopPropagation: {
      type: Boolean,
      default: true
    },
    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
    lang: {
      type: String,
      default: 'en'
    },
    // 会话来源，open-type="contact"时有效。只微信小程序有效
    sessionFrom: {
      type: String,
      default: ''
    },
    // 会话内消息卡片标题，open-type="contact"时有效
    // 默认当前标题，只微信小程序有效
    sendMessageTitle: {
      type: String,
      default: ''
    },
    // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
    // 默认当前分享路径，只微信小程序有效
    sendMessagePath: {
      type: String,
      default: ''
    },
    // 会话内消息卡片图片，open-type="contact"时有效
    // 默认当前页面截图，只微信小程序有效
    sendMessageImg: {
      type: String,
      default: ''
    },
    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
    // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
    showMessageCard: {
      type: Boolean,
      default: true
    },
    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
    dataName: {
      type: String,
      default: ''
    },
    // 节流，一定时间内只能触发一次
    throttleTime: {
      type: [String, Number],
      default: 0
    },
    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
      type: [String, Number],
      default: 0
    },
    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
      type: [String, Number],
      default: 200
    },
    // 按钮文字，之所以通过props传入，是因为slot传入的话
    // nvue中无法控制文字的样式
    text: {
      type: [String, Number],
      default: ''
    },
    // 按钮图标
    icon: {
      type: String,
      default: ''
    },
    // 按钮图标大小
    iconSize: {
      type: [String, Number],
      default: ''
    },
    // 按钮图标颜色
    iconColor: {
      type: String,
      default: '#000000'
    },
    // 按钮颜色，支持传入linear-gradient渐变色
    color: {
      type: String,
      default: ''
    },
    // 自定义按钮文本样式
    customTextStyle: {
      type: [Object, String],
      default: ''
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.button)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 32:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 326:
/*!************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-swiper/components/uv-swiper/props.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default2 = {
  props: _objectSpread({
    // 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 是否显示面板指示器
    indicator: {
      type: Boolean,
      default: false
    },
    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: '#fff'
    },
    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: 'rgba(255, 255, 255, 0.35)'
    },
    // 指示器样式，可通过bottom，left，right进行定位
    indicatorStyle: {
      type: [String, Object],
      default: ''
    },
    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: 'line'
    },
    // 是否自动切换
    autoplay: {
      type: Boolean,
      default: true
    },
    // 当前所在滑块的 index
    current: {
      type: [String, Number],
      default: 0
    },
    // 当前所在滑块的 item-id ，不能与 current 被同时指定
    currentItemId: {
      type: String,
      default: ''
    },
    // 滑块自动切换时间间隔
    interval: {
      type: [String, Number],
      default: 3000
    },
    // 滑块切换过程所需时间
    duration: {
      type: [String, Number],
      default: 300
    },
    // 播放到末尾后是否重新回到开头
    circular: {
      type: Boolean,
      default: false
    },
    // 滑动方向是否为纵向
    vertical: {
      type: Boolean,
      default: false
    },
    // 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持
    previousMargin: {
      type: [String, Number],
      default: 0
    },
    // 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持
    nextMargin: {
      type: [String, Number],
      default: 0
    },
    // 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持
    acceleration: {
      type: Boolean,
      default: false
    },
    // 同时显示的滑块数量，nvue、支付宝小程序不支持
    displayMultipleItems: {
      type: Number,
      default: 1
    },
    // 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
    // 只对微信小程序有效
    easingFunction: {
      type: String,
      default: 'default'
    },
    // list数组中指定对象的目标属性名
    keyName: {
      type: String,
      default: 'url'
    },
    // 图片的裁剪模式
    imgMode: {
      type: String,
      default: 'aspectFill'
    },
    // 组件高度
    height: {
      type: [String, Number],
      default: 130
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#f3f4f6'
    },
    // 组件圆角，数值或带单位的字符串
    radius: {
      type: [String, Number],
      default: 4
    },
    // 是否加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 是否显示标题，要求数组对象中有title属性
    showTitle: {
      type: Boolean,
      default: false
    },
    // 显示的标题样式
    titleStyle: {
      type: [Object, String],
      default: ''
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.swiper)
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 33:
/*!***********************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/store/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 34));
var _user = _interopRequireDefault(__webpack_require__(/*! ./modules/user.js */ 35));
_vue.default.use(_vuex.default);
var _default = new _vuex.default.Store({
  state: {
    // 在这里定义应用程序的全局状态
  },
  mutations: {
    // 在这里定义修改状态的方法
  },
  actions: {
    // 在这里定义触发 mutations 的动作
  },
  modules: {
    //模块化
    user: _user.default
  }
});
exports.default = _default;

/***/ }),

/***/ 334:
/*!********************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-notice-bar/components/uv-notice-bar/props.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default2 = {
  props: _objectSpread({
    // 显示的内容，数组
    text: {
      type: [Array, String],
      default: function _default() {
        return [];
      }
    },
    // 通告滚动模式，row-横向滚动，column-竖向滚动
    direction: {
      type: String,
      default: 'row'
    },
    // direction = row时，是否使用步进形式滚动
    step: {
      type: Boolean,
      default: false
    },
    // 是否显示左侧的音量图标
    icon: {
      type: [String, Boolean, null],
      default: 'volume'
    },
    // 通告模式，link-显示右箭头，closable-显示右侧关闭图标
    mode: {
      type: String,
      default: ''
    },
    // 文字颜色，各图标也会使用文字颜色
    color: {
      type: String,
      default: '#f9ae3d'
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#fdf6ec'
    },
    // 水平滚动时的滚动速度，即每秒滚动多少px(px)，这有利于控制文字无论多少时，都能有一个恒定的速度
    speed: {
      type: [String, Number],
      default: 80
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: 14
    },
    // 滚动一个周期的时间长，单位ms
    duration: {
      type: [String, Number],
      default: 2000
    },
    // 跳转的页面路径
    url: {
      type: String,
      default: ''
    },
    // 页面跳转的类型
    linkType: {
      type: String,
      default: 'navigateTo'
    },
    // 是否禁止用手滑动切换
    // 目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序
    disableTouch: {
      type: Boolean,
      default: true
    },
    // 是否禁止滚动，仅`direction="column"生效`
    disableScroll: {
      type: Boolean,
      default: false
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.noticeBar)
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 34:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 342:
/*!**********************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-scroll-list/components/uv-scroll-list/props.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 指示器的整体宽度
    indicatorWidth: {
      type: [String, Number],
      default: 50
    },
    // 滑块的宽度
    indicatorBarWidth: {
      type: [String, Number],
      default: 20
    },
    // 是否显示面板指示器
    indicator: {
      type: Boolean,
      default: true
    },
    // 指示器非激活颜色
    indicatorColor: {
      type: String,
      default: '#f2f2f2'
    },
    // 指示器的激活颜色
    indicatorActiveColor: {
      type: String,
      default: '#3c9cff'
    },
    // 指示器样式，可通过bottom，left，right进行定位
    indicatorStyle: {
      type: [String, Object],
      default: ''
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.scrollList)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 35:
/*!******************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/store/modules/user.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  //命名空间
  namespaced: true,
  state: {
    openid: '',
    username: ''
  },
  mutations: {
    setUsername: function setUsername(state, username) {
      state.username = username;
    },
    setOpenid: function setOpenid(state, openid) {
      state.openid = openid;
    }
  },
  getters: {},
  actions: {}
};
exports.default = _default;

/***/ }),

/***/ 352:
/*!************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-sticky/components/uv-sticky/props.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 吸顶容器到顶部某个距离的时候，进行吸顶，在H5平台，NavigationBar为44px
    offsetTop: {
      type: [String, Number],
      default: 0
    },
    // 自定义导航栏的高度
    customNavHeight: {
      type: [String, Number],
      default: 0
    },
    // 是否禁用吸顶功能
    disabled: {
      type: Boolean,
      default: false
    },
    // 吸顶区域的背景颜色
    bgColor: {
      type: String,
      default: 'transparent'
    },
    // z-index值
    zIndex: {
      type: [String, Number],
      default: ''
    },
    // 列表中的索引值
    index: {
      type: [String, Number],
      default: ''
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.sticky)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 360:
/*!**********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-badge/components/uv-badge/props.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default2 = {
  props: _objectSpread({
    // 是否显示圆点
    isDot: {
      type: Boolean,
      default: false
    },
    // 显示的内容
    value: {
      type: [Number, String],
      default: ''
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 最大值，超过最大值会显示 '{max}+'
    max: {
      type: [Number, String],
      default: 999
    },
    // 主题类型，error|warning|success|primary
    type: {
      type: [String, undefined, null],
      default: 'error'
    },
    // 当数值为 0 时，是否展示 Badge
    showZero: {
      type: Boolean,
      default: false
    },
    // 背景颜色，优先级比type高，如设置，type参数会失效
    bgColor: {
      type: [String, null],
      default: null
    },
    // 字体颜色
    color: {
      type: [String, null],
      default: null
    },
    // 徽标形状，circle-四角均为圆角，horn-左下角为直角
    shape: {
      type: [String, undefined, null],
      default: 'circle'
    },
    // 设置数字的显示方式，overflow|ellipsis|limit
    // overflow会根据max字段判断，超出显示`${max}+`
    // ellipsis会根据max判断，超出显示`${max}...`
    // limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
    numberType: {
      type: [String, undefined, null],
      default: 'overflow'
    },
    // 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
    offset: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 是否反转背景和字体颜色
    inverted: {
      type: Boolean,
      default: false
    },
    // 是否绝对定位
    absolute: {
      type: Boolean,
      default: false
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.badge)
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 361:
/*!********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-tabs/components/uv-tabs/props.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default2 = {
  props: _objectSpread({
    // 滑块的移动过渡时间，单位ms
    duration: {
      type: Number,
      default: 300
    },
    // tabs标签数组
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 滑块颜色
    lineColor: {
      type: String,
      default: '#3c9cff'
    },
    // 菜单选择中时的样式
    activeStyle: {
      type: [String, Object],
      default: function _default() {
        return {
          color: '#303133'
        };
      }
    },
    // 菜单非选中时的样式
    inactiveStyle: {
      type: [String, Object],
      default: function _default() {
        return {
          color: '#606266'
        };
      }
    },
    // 滑块长度
    lineWidth: {
      type: [String, Number],
      default: 20
    },
    // 滑块高度
    lineHeight: {
      type: [String, Number],
      default: 3
    },
    // 滑块背景显示大小，当滑块背景设置为图片时使用
    lineBgSize: {
      type: String,
      default: 'cover'
    },
    // 菜单item的样式
    itemStyle: {
      type: [String, Object],
      default: function _default() {
        return {
          height: '44px'
        };
      }
    },
    // 菜单是否可滚动
    scrollable: {
      type: Boolean,
      default: true
    },
    // 当前选中标签的索引
    current: {
      type: [Number, String],
      default: 0
    },
    // 默认读取的键名
    keyName: {
      type: String,
      default: 'name'
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.tabs)
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 369:
/*!******************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-waterfall/components/uv-waterfall/props.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default2 = {
  props: _objectSpread({
    // 瀑布流数据

    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 数据的id值，根据id值对数据执行删除操作
    // 如数据为：{id: 1, name: 'uv-ui'}，那么该值设置为id
    idKey: {
      type: String,
      default: 'id'
    },
    // 每次插入数据的事件间隔，间隔越长能保证两列高度相近，但是用户体验不好，单位ms
    addTime: {
      type: Number,
      default: 200
    },
    // 瀑布流的列数，默认2，最高为5
    columnCount: {
      type: [Number, String],
      default: 2
    },
    // 列与列的间隙，默认20
    columnGap: {
      type: [Number, String],
      default: 20
    },
    // 左边和列表的间隙
    leftGap: {
      type: [Number, String],
      default: 0
    },
    // 右边和列表的间隙
    rightGap: {
      type: [Number, String],
      default: 0
    },
    // 是否显示滚动条，仅nvue生效
    showScrollbar: {
      type: [Boolean],
      default: false
    },
    // 列宽，nvue生效
    columnWidth: {
      type: [Number, String],
      default: 'auto'
    },
    // 瀑布流的宽度，nvue生效
    width: {
      type: [Number, String],
      default: ''
    },
    // 瀑布流的高度，nvue生效
    height: {
      type: [Number, String],
      default: ''
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.waterfall)
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 377:
/*!********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-tags/components/uv-tags/props.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 标签类型info、primary、success、warning、error
    type: {
      type: String,
      default: 'primary'
    },
    // 不可用
    disabled: {
      type: [Boolean, String],
      default: false
    },
    // 标签的大小，large，medium，mini
    size: {
      type: String,
      default: 'medium'
    },
    // tag的形状，circle（两边半圆形）, square（方形，带圆角）
    shape: {
      type: String,
      default: 'square'
    },
    // 标签文字
    text: {
      type: [String, Number],
      default: ''
    },
    // 背景颜色，默认为空字符串，即不处理
    bgColor: {
      type: String,
      default: ''
    },
    // 标签字体颜色，默认为空字符串，即不处理
    color: {
      type: String,
      default: ''
    },
    // 标签的边框颜色
    borderColor: {
      type: String,
      default: ''
    },
    // 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了
    name: {
      type: [String, Number],
      default: ''
    },
    // 镂空时是否填充背景色
    plainFill: {
      type: Boolean,
      default: false
    },
    // 是否镂空
    plain: {
      type: Boolean,
      default: false
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: false
    },
    // 关闭按钮图标的颜色
    closeColor: {
      type: String,
      default: '#C6C7CB'
    },
    // 关闭按钮图标的位置 right（右边）right-top（右上） 默认right-top
    closePlace: {
      type: String,
      default: 'right-top'
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 内置图标，或绝对路径的图片
    icon: {
      type: String,
      default: ''
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: ''
    },
    // nvue模式下 是否直接显示，在uv-list等cell下面使用就需要设置
    cellChild: {
      type: Boolean,
      default: false
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.tags)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 385:
/*!******************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-load-more/components/uv-load-more/props.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
    status: {
      type: String,
      default: 'loadmore'
    },
    // 组件背景色
    bgColor: {
      type: String,
      default: 'transparent'
    },
    // 是否显示加载中的图标
    icon: {
      type: Boolean,
      default: true
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: 14
    },
    // 图标大小
    iconSize: {
      type: [String, Number],
      default: 16
    },
    // 字体颜色
    color: {
      type: String,
      default: '#606266'
    },
    // 加载中状态的图标，spinner-花朵状图标，circle-圆圈状，semicircle-半圆
    loadingIcon: {
      type: String,
      default: 'spinner'
    },
    // 加载前的提示语
    loadmoreText: {
      type: String,
      default: '加载更多'
    },
    // 加载中提示语
    loadingText: {
      type: String,
      default: '正在加载...'
    },
    // 没有更多的提示语
    nomoreText: {
      type: String,
      default: '没有更多了'
    },
    // 在“没有更多”状态下，是否显示粗点
    isDot: {
      type: Boolean,
      default: false
    },
    // 加载中图标的颜色
    iconColor: {
      type: String,
      default: '#b7b7b7'
    },
    // 上边距
    marginTop: {
      type: [String, Number],
      default: 10
    },
    // 下边距
    marginBottom: {
      type: [String, Number],
      default: 10
    },
    // 高度，单位px
    height: {
      type: [String, Number],
      default: 'auto'
    },
    // 是否显示左边分割线
    line: {
      type: Boolean,
      default: false
    },
    // 线条颜色
    lineColor: {
      type: String,
      default: '#E6E8EB'
    },
    // 是否虚线，true-虚线，false-实线
    dashed: {
      type: Boolean,
      default: false
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.loadmore)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 407:
/*!****************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-radio/components/uv-radio-group/props.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 绑定的值
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    // 是否禁用全部radio
    disabled: {
      type: Boolean,
      default: false
    },
    // 形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: 'circle'
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: '#2979ff'
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: '#c8c9cc'
    },
    // 标识符
    name: {
      type: String,
      default: ''
    },
    // 整个组件的尺寸，默认px
    size: {
      type: [String, Number],
      default: 18
    },
    // 布局方式，row-横向，column-纵向
    placement: {
      type: String,
      default: 'row'
    },
    // label的文本
    label: {
      type: [String],
      default: ''
    },
    // label的颜色 （默认 '#303133' ）
    labelColor: {
      type: [String],
      default: '#303133'
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: 14
    },
    // 是否禁止点击文本操作checkbox(默认 false )
    labelDisabled: {
      type: Boolean,
      default: false
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: '#fff'
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: 12
    },
    // 竖向配列时，是否显示下划线
    borderBottom: {
      type: Boolean,
      default: false
    },
    // 图标与文字的对齐方式
    iconPlacement: {
      type: String,
      default: 'left'
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.radioGroup)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 415:
/*!**********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-radio/components/uv-radio/props.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // radio的名称
    name: {
      type: [String, Number, Boolean],
      default: ''
    },
    // 形状，square为方形，circle为圆型
    shape: {
      type: String,
      default: ''
    },
    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: ''
    },
    // 是否禁止点击提示语选中单选框
    labelDisabled: {
      type: [String, Boolean],
      default: ''
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: ''
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: ''
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: ''
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: ''
    },
    // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    // 整体的大小
    size: {
      type: [String, Number],
      default: ''
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: ''
    },
    // label的颜色
    labelColor: {
      type: String,
      default: ''
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.radio)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 42:
/*!***************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/node_modules/jwt-decode/build/esm/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidTokenError = void 0;
exports.jwtDecode = jwtDecode;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 43));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 44));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 46));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 47));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var InvalidTokenError = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(InvalidTokenError, _Error);
  var _super = _createSuper(InvalidTokenError);
  function InvalidTokenError() {
    (0, _classCallCheck2.default)(this, InvalidTokenError);
    return _super.apply(this, arguments);
  }
  return (0, _createClass2.default)(InvalidTokenError);
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
exports.InvalidTokenError = InvalidTokenError;
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  var pos = options.header === true ? 0 : 1;
  var part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError("Invalid token specified: missing part #".concat(pos + 1));
  }
  var decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError("Invalid token specified: invalid base64 for part #".concat(pos + 1, " (").concat(e.message, ")"));
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError("Invalid token specified: invalid json for part #".concat(pos + 1, " (").concat(e.message, ")"));
  }
}

/***/ }),

/***/ 423:
/*!*******************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/cc-selectDity/components/cc-selectDity/area.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAreas = getAreas;
exports.getAreasCode = getAreasCode;
exports.getMyCity = getMyCity;
exports.getProvinces = getProvinces;
var AreaJson = [{
  "name": "北京",
  "city": [{
    "name": "北京市",
    "area": [{
      "name": "东城区",
      "id": "110101"
    }, {
      "name": "西城区",
      "id": "110102"
    }, {
      "name": "朝阳区",
      "id": "110105"
    }, {
      "name": "丰台区",
      "id": "110106"
    }, {
      "name": "石景山区",
      "id": "110107"
    }, {
      "name": "海淀区",
      "id": "110108"
    }, {
      "name": "门头沟区",
      "id": "110109"
    }, {
      "name": "房山区",
      "id": "110111"
    }, {
      "name": "通州区",
      "id": "110112"
    }, {
      "name": "顺义区",
      "id": "110113"
    }, {
      "name": "昌平区",
      "id": "110114"
    }, {
      "name": "大兴区",
      "id": "110115"
    }, {
      "name": "怀柔区",
      "id": "110116"
    }, {
      "name": "平谷区",
      "id": "110117"
    }, {
      "name": "密云县",
      "id": "110228"
    }, {
      "name": "延庆县",
      "id": "110229"
    }]
  }]
}, {
  "name": "天津",
  "city": [{
    "name": "天津市",
    "area": [{
      "name": "和平区",
      "id": "120101"
    }, {
      "name": "河东区",
      "id": "120102"
    }, {
      "name": "河西区",
      "id": "120103"
    }, {
      "name": "南开区",
      "id": "120104"
    }, {
      "name": "河北区",
      "id": "120105"
    }, {
      "name": "红桥区",
      "id": "120106"
    }, {
      "name": "东丽区",
      "id": "120110"
    }, {
      "name": "西青区",
      "id": "120111"
    }, {
      "name": "津南区",
      "id": "120112"
    }, {
      "name": "北辰区",
      "id": "120113"
    }, {
      "name": "武清区",
      "id": "120114"
    }, {
      "name": "宝坻区",
      "id": "120115"
    }, {
      "name": "滨海新区",
      "id": "120116"
    }, {
      "name": "宁河县",
      "id": "120221"
    }, {
      "name": "静海县",
      "id": "120223"
    }, {
      "name": "蓟县",
      "id": "120225"
    }]
  }]
}, {
  "name": "河北省",
  "city": [{
    "name": "石家庄市",
    "area": [{
      "name": "长安区",
      "id": "130102"
    }, {
      "name": "桥西区",
      "id": "130104"
    }, {
      "name": "新华区",
      "id": "130105"
    }, {
      "name": "井陉矿区",
      "id": "130107"
    }, {
      "name": "裕华区",
      "id": "130108"
    }, {
      "name": "藁城区",
      "id": "130109"
    }, {
      "name": "鹿泉区",
      "id": "130110"
    }, {
      "name": "栾城区",
      "id": "130111"
    }, {
      "name": "井陉县",
      "id": "130121"
    }, {
      "name": "正定县",
      "id": "130123"
    }, {
      "name": "行唐县",
      "id": "130125"
    }, {
      "name": "灵寿县",
      "id": "130126"
    }, {
      "name": "高邑县",
      "id": "130127"
    }, {
      "name": "深泽县",
      "id": "130128"
    }, {
      "name": "赞皇县",
      "id": "130129"
    }, {
      "name": "无极县",
      "id": "130130"
    }, {
      "name": "平山县",
      "id": "130131"
    }, {
      "name": "元氏县",
      "id": "130132"
    }, {
      "name": "赵县",
      "id": "130133"
    }, {
      "name": "辛集市",
      "id": "130181"
    }, {
      "name": "晋州市",
      "id": "130183"
    }, {
      "name": "新乐市",
      "id": "130184"
    }]
  }, {
    "name": "唐山市",
    "area": [{
      "name": "路南区",
      "id": "130202"
    }, {
      "name": "路北区",
      "id": "130203"
    }, {
      "name": "古冶区",
      "id": "130204"
    }, {
      "name": "开平区",
      "id": "130205"
    }, {
      "name": "丰南区",
      "id": "130207"
    }, {
      "name": "丰润区",
      "id": "130208"
    }, {
      "name": "曹妃甸区",
      "id": "130209"
    }, {
      "name": "滦县",
      "id": "130223"
    }, {
      "name": "滦南县",
      "id": "130224"
    }, {
      "name": "乐亭县",
      "id": "130225"
    }, {
      "name": "迁西县",
      "id": "130227"
    }, {
      "name": "玉田县",
      "id": "130229"
    }, {
      "name": "遵化市",
      "id": "130281"
    }, {
      "name": "迁安市",
      "id": "130283"
    }]
  }, {
    "name": "秦皇岛市",
    "area": [{
      "name": "海港区",
      "id": "130302"
    }, {
      "name": "山海关区",
      "id": "130303"
    }, {
      "name": "北戴河区",
      "id": "130304"
    }, {
      "name": "青龙满族自治县",
      "id": "130321"
    }, {
      "name": "昌黎县",
      "id": "130322"
    }, {
      "name": "抚宁县",
      "id": "130323"
    }, {
      "name": "卢龙县",
      "id": "130324"
    }]
  }, {
    "name": "邯郸市",
    "area": [{
      "name": "邯山区",
      "id": "130402"
    }, {
      "name": "丛台区",
      "id": "130403"
    }, {
      "name": "复兴区",
      "id": "130404"
    }, {
      "name": "峰峰矿区",
      "id": "130406"
    }, {
      "name": "邯郸县",
      "id": "130421"
    }, {
      "name": "临漳县",
      "id": "130423"
    }, {
      "name": "成安县",
      "id": "130424"
    }, {
      "name": "大名县",
      "id": "130425"
    }, {
      "name": "涉县",
      "id": "130426"
    }, {
      "name": "磁县",
      "id": "130427"
    }, {
      "name": "肥乡县",
      "id": "130428"
    }, {
      "name": "永年县",
      "id": "130429"
    }, {
      "name": "邱县",
      "id": "130430"
    }, {
      "name": "鸡泽县",
      "id": "130431"
    }, {
      "name": "广平县",
      "id": "130432"
    }, {
      "name": "馆陶县",
      "id": "130433"
    }, {
      "name": "魏县",
      "id": "130434"
    }, {
      "name": "曲周县",
      "id": "130435"
    }, {
      "name": "武安市",
      "id": "130481"
    }]
  }, {
    "name": "邢台市",
    "area": [{
      "name": "桥东区",
      "id": "130502"
    }, {
      "name": "桥西区",
      "id": "130503"
    }, {
      "name": "邢台县",
      "id": "130521"
    }, {
      "name": "临城县",
      "id": "130522"
    }, {
      "name": "内丘县",
      "id": "130523"
    }, {
      "name": "柏乡县",
      "id": "130524"
    }, {
      "name": "隆尧县",
      "id": "130525"
    }, {
      "name": "任县",
      "id": "130526"
    }, {
      "name": "南和县",
      "id": "130527"
    }, {
      "name": "宁晋县",
      "id": "130528"
    }, {
      "name": "巨鹿县",
      "id": "130529"
    }, {
      "name": "新河县",
      "id": "130530"
    }, {
      "name": "广宗县",
      "id": "130531"
    }, {
      "name": "平乡县",
      "id": "130532"
    }, {
      "name": "威县",
      "id": "130533"
    }, {
      "name": "清河县",
      "id": "130534"
    }, {
      "name": "临西县",
      "id": "130535"
    }, {
      "name": "南宫市",
      "id": "130581"
    }, {
      "name": "沙河市",
      "id": "130582"
    }]
  }, {
    "name": "保定市",
    "area": [{
      "name": "新市区",
      "id": "130602"
    }, {
      "name": "北市区",
      "id": "130603"
    }, {
      "name": "南市区",
      "id": "130604"
    }, {
      "name": "满城县",
      "id": "130621"
    }, {
      "name": "清苑县",
      "id": "130622"
    }, {
      "name": "涞水县",
      "id": "130623"
    }, {
      "name": "阜平县",
      "id": "130624"
    }, {
      "name": "徐水县",
      "id": "130625"
    }, {
      "name": "定兴县",
      "id": "130626"
    }, {
      "name": "唐县",
      "id": "130627"
    }, {
      "name": "高阳县",
      "id": "130628"
    }, {
      "name": "容城县",
      "id": "130629"
    }, {
      "name": "涞源县",
      "id": "130630"
    }, {
      "name": "望都县",
      "id": "130631"
    }, {
      "name": "安新县",
      "id": "130632"
    }, {
      "name": "易县",
      "id": "130633"
    }, {
      "name": "曲阳县",
      "id": "130634"
    }, {
      "name": "蠡县",
      "id": "130635"
    }, {
      "name": "顺平县",
      "id": "130636"
    }, {
      "name": "博野县",
      "id": "130637"
    }, {
      "name": "雄县",
      "id": "130638"
    }, {
      "name": "涿州市",
      "id": "130681"
    }, {
      "name": "定州市",
      "id": "130682"
    }, {
      "name": "安国市",
      "id": "130683"
    }, {
      "name": "高碑店市",
      "id": "130684"
    }]
  }, {
    "name": "张家口市",
    "area": [{
      "name": "桥东区",
      "id": "130702"
    }, {
      "name": "桥西区",
      "id": "130703"
    }, {
      "name": "宣化区",
      "id": "130705"
    }, {
      "name": "下花园区",
      "id": "130706"
    }, {
      "name": "宣化县",
      "id": "130721"
    }, {
      "name": "张北县",
      "id": "130722"
    }, {
      "name": "康保县",
      "id": "130723"
    }, {
      "name": "沽源县",
      "id": "130724"
    }, {
      "name": "尚义县",
      "id": "130725"
    }, {
      "name": "蔚县",
      "id": "130726"
    }, {
      "name": "阳原县",
      "id": "130727"
    }, {
      "name": "怀安县",
      "id": "130728"
    }, {
      "name": "万全县",
      "id": "130729"
    }, {
      "name": "怀来县",
      "id": "130730"
    }, {
      "name": "涿鹿县",
      "id": "130731"
    }, {
      "name": "赤城县",
      "id": "130732"
    }, {
      "name": "崇礼县",
      "id": "130733"
    }]
  }, {
    "name": "承德市",
    "area": [{
      "name": "双桥区",
      "id": "130802"
    }, {
      "name": "双滦区",
      "id": "130803"
    }, {
      "name": "鹰手营子矿区",
      "id": "130804"
    }, {
      "name": "承德县",
      "id": "130821"
    }, {
      "name": "兴隆县",
      "id": "130822"
    }, {
      "name": "平泉县",
      "id": "130823"
    }, {
      "name": "滦平县",
      "id": "130824"
    }, {
      "name": "隆化县",
      "id": "130825"
    }, {
      "name": "丰宁满族自治县",
      "id": "130826"
    }, {
      "name": "宽城满族自治县",
      "id": "130827"
    }, {
      "name": "围场满族蒙古族自治县",
      "id": "130828"
    }]
  }, {
    "name": "沧州市",
    "area": [{
      "name": "新华区",
      "id": "130902"
    }, {
      "name": "运河区",
      "id": "130903"
    }, {
      "name": "沧县",
      "id": "130921"
    }, {
      "name": "青县",
      "id": "130922"
    }, {
      "name": "东光县",
      "id": "130923"
    }, {
      "name": "海兴县",
      "id": "130924"
    }, {
      "name": "盐山县",
      "id": "130925"
    }, {
      "name": "肃宁县",
      "id": "130926"
    }, {
      "name": "南皮县",
      "id": "130927"
    }, {
      "name": "吴桥县",
      "id": "130928"
    }, {
      "name": "献县",
      "id": "130929"
    }, {
      "name": "孟村回族自治县",
      "id": "130930"
    }, {
      "name": "泊头市",
      "id": "130981"
    }, {
      "name": "任丘市",
      "id": "130982"
    }, {
      "name": "黄骅市",
      "id": "130983"
    }, {
      "name": "河间市",
      "id": "130984"
    }]
  }, {
    "name": "廊坊市",
    "area": [{
      "name": "安次区",
      "id": "131002"
    }, {
      "name": "广阳区",
      "id": "131003"
    }, {
      "name": "固安县",
      "id": "131022"
    }, {
      "name": "永清县",
      "id": "131023"
    }, {
      "name": "香河县",
      "id": "131024"
    }, {
      "name": "大城县",
      "id": "131025"
    }, {
      "name": "文安县",
      "id": "131026"
    }, {
      "name": "大厂回族自治县",
      "id": "131028"
    }, {
      "name": "霸州市",
      "id": "131081"
    }, {
      "name": "三河市",
      "id": "131082"
    }]
  }, {
    "name": "衡水市",
    "area": [{
      "name": "桃城区",
      "id": "131102"
    }, {
      "name": "枣强县",
      "id": "131121"
    }, {
      "name": "武邑县",
      "id": "131122"
    }, {
      "name": "武强县",
      "id": "131123"
    }, {
      "name": "饶阳县",
      "id": "131124"
    }, {
      "name": "安平县",
      "id": "131125"
    }, {
      "name": "故城县",
      "id": "131126"
    }, {
      "name": "景县",
      "id": "131127"
    }, {
      "name": "阜城县",
      "id": "131128"
    }, {
      "name": "冀州市",
      "id": "131181"
    }, {
      "name": "深州市",
      "id": "131182"
    }]
  }]
}, {
  "name": "山西省",
  "city": [{
    "name": "太原市",
    "area": [{
      "name": "小店区",
      "id": "140105"
    }, {
      "name": "迎泽区",
      "id": "140106"
    }, {
      "name": "杏花岭区",
      "id": "140107"
    }, {
      "name": "尖草坪区",
      "id": "140108"
    }, {
      "name": "万柏林区",
      "id": "140109"
    }, {
      "name": "晋源区",
      "id": "140110"
    }, {
      "name": "清徐县",
      "id": "140121"
    }, {
      "name": "阳曲县",
      "id": "140122"
    }, {
      "name": "娄烦县",
      "id": "140123"
    }, {
      "name": "古交市",
      "id": "140181"
    }]
  }, {
    "name": "大同市",
    "area": [{
      "name": "城区",
      "id": "140202"
    }, {
      "name": "矿区",
      "id": "140203"
    }, {
      "name": "南郊区",
      "id": "140211"
    }, {
      "name": "新荣区",
      "id": "140212"
    }, {
      "name": "阳高县",
      "id": "140221"
    }, {
      "name": "天镇县",
      "id": "140222"
    }, {
      "name": "广灵县",
      "id": "140223"
    }, {
      "name": "灵丘县",
      "id": "140224"
    }, {
      "name": "浑源县",
      "id": "140225"
    }, {
      "name": "左云县",
      "id": "140226"
    }, {
      "name": "大同县",
      "id": "140227"
    }]
  }, {
    "name": "阳泉市",
    "area": [{
      "name": "城区",
      "id": "140302"
    }, {
      "name": "矿区",
      "id": "140303"
    }, {
      "name": "郊区",
      "id": "140311"
    }, {
      "name": "平定县",
      "id": "140321"
    }, {
      "name": "盂县",
      "id": "140322"
    }]
  }, {
    "name": "长治市",
    "area": [{
      "name": "城区",
      "id": "140402"
    }, {
      "name": "郊区",
      "id": "140411"
    }, {
      "name": "长治县",
      "id": "140421"
    }, {
      "name": "襄垣县",
      "id": "140423"
    }, {
      "name": "屯留县",
      "id": "140424"
    }, {
      "name": "平顺县",
      "id": "140425"
    }, {
      "name": "黎城县",
      "id": "140426"
    }, {
      "name": "壶关县",
      "id": "140427"
    }, {
      "name": "长子县",
      "id": "140428"
    }, {
      "name": "武乡县",
      "id": "140429"
    }, {
      "name": "沁县",
      "id": "140430"
    }, {
      "name": "沁源县",
      "id": "140431"
    }, {
      "name": "潞城市",
      "id": "140481"
    }]
  }, {
    "name": "晋城市",
    "area": [{
      "name": "城区",
      "id": "140502"
    }, {
      "name": "沁水县",
      "id": "140521"
    }, {
      "name": "阳城县",
      "id": "140522"
    }, {
      "name": "陵川县",
      "id": "140524"
    }, {
      "name": "泽州县",
      "id": "140525"
    }, {
      "name": "高平市",
      "id": "140581"
    }]
  }, {
    "name": "朔州市",
    "area": [{
      "name": "朔城区",
      "id": "140602"
    }, {
      "name": "平鲁区",
      "id": "140603"
    }, {
      "name": "山阴县",
      "id": "140621"
    }, {
      "name": "应县",
      "id": "140622"
    }, {
      "name": "右玉县",
      "id": "140623"
    }, {
      "name": "怀仁县",
      "id": "140624"
    }]
  }, {
    "name": "晋中市",
    "area": [{
      "name": "榆次区",
      "id": "140702"
    }, {
      "name": "榆社县",
      "id": "140721"
    }, {
      "name": "左权县",
      "id": "140722"
    }, {
      "name": "和顺县",
      "id": "140723"
    }, {
      "name": "昔阳县",
      "id": "140724"
    }, {
      "name": "寿阳县",
      "id": "140725"
    }, {
      "name": "太谷县",
      "id": "140726"
    }, {
      "name": "祁县",
      "id": "140727"
    }, {
      "name": "平遥县",
      "id": "140728"
    }, {
      "name": "灵石县",
      "id": "140729"
    }, {
      "name": "介休市",
      "id": "140781"
    }]
  }, {
    "name": "运城市",
    "area": [{
      "name": "盐湖区",
      "id": "140802"
    }, {
      "name": "临猗县",
      "id": "140821"
    }, {
      "name": "万荣县",
      "id": "140822"
    }, {
      "name": "闻喜县",
      "id": "140823"
    }, {
      "name": "稷山县",
      "id": "140824"
    }, {
      "name": "新绛县",
      "id": "140825"
    }, {
      "name": "绛县",
      "id": "140826"
    }, {
      "name": "垣曲县",
      "id": "140827"
    }, {
      "name": "夏县",
      "id": "140828"
    }, {
      "name": "平陆县",
      "id": "140829"
    }, {
      "name": "芮城县",
      "id": "140830"
    }, {
      "name": "永济市",
      "id": "140881"
    }, {
      "name": "河津市",
      "id": "140882"
    }]
  }, {
    "name": "忻州市",
    "area": [{
      "name": "忻府区",
      "id": "140902"
    }, {
      "name": "定襄县",
      "id": "140921"
    }, {
      "name": "五台县",
      "id": "140922"
    }, {
      "name": "代县",
      "id": "140923"
    }, {
      "name": "繁峙县",
      "id": "140924"
    }, {
      "name": "宁武县",
      "id": "140925"
    }, {
      "name": "静乐县",
      "id": "140926"
    }, {
      "name": "神池县",
      "id": "140927"
    }, {
      "name": "五寨县",
      "id": "140928"
    }, {
      "name": "岢岚县",
      "id": "140929"
    }, {
      "name": "河曲县",
      "id": "140930"
    }, {
      "name": "保德县",
      "id": "140931"
    }, {
      "name": "偏关县",
      "id": "140932"
    }, {
      "name": "原平市",
      "id": "140981"
    }]
  }, {
    "name": "临汾市",
    "area": [{
      "name": "尧都区",
      "id": "141002"
    }, {
      "name": "曲沃县",
      "id": "141021"
    }, {
      "name": "翼城县",
      "id": "141022"
    }, {
      "name": "襄汾县",
      "id": "141023"
    }, {
      "name": "洪洞县",
      "id": "141024"
    }, {
      "name": "古县",
      "id": "141025"
    }, {
      "name": "安泽县",
      "id": "141026"
    }, {
      "name": "浮山县",
      "id": "141027"
    }, {
      "name": "吉县",
      "id": "141028"
    }, {
      "name": "乡宁县",
      "id": "141029"
    }, {
      "name": "大宁县",
      "id": "141030"
    }, {
      "name": "隰县",
      "id": "141031"
    }, {
      "name": "永和县",
      "id": "141032"
    }, {
      "name": "蒲县",
      "id": "141033"
    }, {
      "name": "汾西县",
      "id": "141034"
    }, {
      "name": "侯马市",
      "id": "141081"
    }, {
      "name": "霍州市",
      "id": "141082"
    }]
  }, {
    "name": "吕梁市",
    "area": [{
      "name": "离石区",
      "id": "141102"
    }, {
      "name": "文水县",
      "id": "141121"
    }, {
      "name": "交城县",
      "id": "141122"
    }, {
      "name": "兴县",
      "id": "141123"
    }, {
      "name": "临县",
      "id": "141124"
    }, {
      "name": "柳林县",
      "id": "141125"
    }, {
      "name": "石楼县",
      "id": "141126"
    }, {
      "name": "岚县",
      "id": "141127"
    }, {
      "name": "方山县",
      "id": "141128"
    }, {
      "name": "中阳县",
      "id": "141129"
    }, {
      "name": "交口县",
      "id": "141130"
    }, {
      "name": "孝义市",
      "id": "141181"
    }, {
      "name": "汾阳市",
      "id": "141182"
    }]
  }]
}, {
  "name": "内蒙古自治区",
  "city": [{
    "name": "呼和浩特市",
    "area": [{
      "name": "新城区",
      "id": "150102"
    }, {
      "name": "回民区",
      "id": "150103"
    }, {
      "name": "玉泉区",
      "id": "150104"
    }, {
      "name": "赛罕区",
      "id": "150105"
    }, {
      "name": "土默特左旗",
      "id": "150121"
    }, {
      "name": "托克托县",
      "id": "150122"
    }, {
      "name": "和林格尔县",
      "id": "150123"
    }, {
      "name": "清水河县",
      "id": "150124"
    }, {
      "name": "武川县",
      "id": "150125"
    }]
  }, {
    "name": "包头市",
    "area": [{
      "name": "东河区",
      "id": "150202"
    }, {
      "name": "昆都仑区",
      "id": "150203"
    }, {
      "name": "青山区",
      "id": "150204"
    }, {
      "name": "石拐区",
      "id": "150205"
    }, {
      "name": "白云鄂博矿区",
      "id": "150206"
    }, {
      "name": "九原区",
      "id": "150207"
    }, {
      "name": "土默特右旗",
      "id": "150221"
    }, {
      "name": "固阳县",
      "id": "150222"
    }, {
      "name": "达尔罕茂明安联合旗",
      "id": "150223"
    }]
  }, {
    "name": "乌海市",
    "area": [{
      "name": "海勃湾区",
      "id": "150302"
    }, {
      "name": "海南区",
      "id": "150303"
    }, {
      "name": "乌达区",
      "id": "150304"
    }]
  }, {
    "name": "赤峰市",
    "area": [{
      "name": "红山区",
      "id": "150402"
    }, {
      "name": "元宝山区",
      "id": "150403"
    }, {
      "name": "松山区",
      "id": "150404"
    }, {
      "name": "阿鲁科尔沁旗",
      "id": "150421"
    }, {
      "name": "巴林左旗",
      "id": "150422"
    }, {
      "name": "巴林右旗",
      "id": "150423"
    }, {
      "name": "林西县",
      "id": "150424"
    }, {
      "name": "克什克腾旗",
      "id": "150425"
    }, {
      "name": "翁牛特旗",
      "id": "150426"
    }, {
      "name": "喀喇沁旗",
      "id": "150428"
    }, {
      "name": "宁城县",
      "id": "150429"
    }, {
      "name": "敖汉旗",
      "id": "150430"
    }]
  }, {
    "name": "通辽市",
    "area": [{
      "name": "科尔沁区",
      "id": "150502"
    }, {
      "name": "科尔沁左翼中旗",
      "id": "150521"
    }, {
      "name": "科尔沁左翼后旗",
      "id": "150522"
    }, {
      "name": "开鲁县",
      "id": "150523"
    }, {
      "name": "库伦旗",
      "id": "150524"
    }, {
      "name": "奈曼旗",
      "id": "150525"
    }, {
      "name": "扎鲁特旗",
      "id": "150526"
    }, {
      "name": "霍林郭勒市",
      "id": "150581"
    }]
  }, {
    "name": "鄂尔多斯市",
    "area": [{
      "name": "东胜区",
      "id": "150602"
    }, {
      "name": "达拉特旗",
      "id": "150621"
    }, {
      "name": "准格尔旗",
      "id": "150622"
    }, {
      "name": "鄂托克前旗",
      "id": "150623"
    }, {
      "name": "鄂托克旗",
      "id": "150624"
    }, {
      "name": "杭锦旗",
      "id": "150625"
    }, {
      "name": "乌审旗",
      "id": "150626"
    }, {
      "name": "伊金霍洛旗",
      "id": "150627"
    }]
  }, {
    "name": "呼伦贝尔市",
    "area": [{
      "name": "海拉尔区",
      "id": "150702"
    }, {
      "name": "扎赉诺尔区",
      "id": "150703"
    }, {
      "name": "阿荣旗",
      "id": "150721"
    }, {
      "name": "莫力达瓦达斡尔族自治旗",
      "id": "150722"
    }, {
      "name": "鄂伦春自治旗",
      "id": "150723"
    }, {
      "name": "鄂温克族自治旗",
      "id": "150724"
    }, {
      "name": "陈巴尔虎旗",
      "id": "150725"
    }, {
      "name": "新巴尔虎左旗",
      "id": "150726"
    }, {
      "name": "新巴尔虎右旗",
      "id": "150727"
    }, {
      "name": "满洲里市",
      "id": "150781"
    }, {
      "name": "牙克石市",
      "id": "150782"
    }, {
      "name": "扎兰屯市",
      "id": "150783"
    }, {
      "name": "额尔古纳市",
      "id": "150784"
    }, {
      "name": "根河市",
      "id": "150785"
    }]
  }, {
    "name": "巴彦淖尔市",
    "area": [{
      "name": "临河区",
      "id": "150802"
    }, {
      "name": "五原县",
      "id": "150821"
    }, {
      "name": "磴口县",
      "id": "150822"
    }, {
      "name": "乌拉特前旗",
      "id": "150823"
    }, {
      "name": "乌拉特中旗",
      "id": "150824"
    }, {
      "name": "乌拉特后旗",
      "id": "150825"
    }, {
      "name": "杭锦后旗",
      "id": "150826"
    }]
  }, {
    "name": "乌兰察布市",
    "area": [{
      "name": "集宁区",
      "id": "150902"
    }, {
      "name": "卓资县",
      "id": "150921"
    }, {
      "name": "化德县",
      "id": "150922"
    }, {
      "name": "商都县",
      "id": "150923"
    }, {
      "name": "兴和县",
      "id": "150924"
    }, {
      "name": "凉城县",
      "id": "150925"
    }, {
      "name": "察哈尔右翼前旗",
      "id": "150926"
    }, {
      "name": "察哈尔右翼中旗",
      "id": "150927"
    }, {
      "name": "察哈尔右翼后旗",
      "id": "150928"
    }, {
      "name": "四子王旗",
      "id": "150929"
    }, {
      "name": "丰镇市",
      "id": "150981"
    }]
  }, {
    "name": "兴安盟",
    "area": [{
      "name": "乌兰浩特市",
      "id": "152201"
    }, {
      "name": "阿尔山市",
      "id": "152202"
    }, {
      "name": "科尔沁右翼前旗",
      "id": "152221"
    }, {
      "name": "科尔沁右翼中旗",
      "id": "152222"
    }, {
      "name": "扎赉特旗",
      "id": "152223"
    }, {
      "name": "突泉县",
      "id": "152224"
    }]
  }, {
    "name": "锡林郭勒盟",
    "area": [{
      "name": "二连浩特市",
      "id": "152501"
    }, {
      "name": "锡林浩特市",
      "id": "152502"
    }, {
      "name": "阿巴嘎旗",
      "id": "152522"
    }, {
      "name": "苏尼特左旗",
      "id": "152523"
    }, {
      "name": "苏尼特右旗",
      "id": "152524"
    }, {
      "name": "东乌珠穆沁旗",
      "id": "152525"
    }, {
      "name": "西乌珠穆沁旗",
      "id": "152526"
    }, {
      "name": "太仆寺旗",
      "id": "152527"
    }, {
      "name": "镶黄旗",
      "id": "152528"
    }, {
      "name": "正镶白旗",
      "id": "152529"
    }, {
      "name": "正蓝旗",
      "id": "152530"
    }, {
      "name": "多伦县",
      "id": "152531"
    }]
  }, {
    "name": "阿拉善盟",
    "area": [{
      "name": "阿拉善左旗",
      "id": "152921"
    }, {
      "name": "阿拉善右旗",
      "id": "152922"
    }, {
      "name": "额济纳旗",
      "id": "152923"
    }]
  }]
}, {
  "name": "辽宁省",
  "city": [{
    "name": "沈阳市",
    "area": [{
      "name": "和平区",
      "id": "210102"
    }, {
      "name": "沈河区",
      "id": "210103"
    }, {
      "name": "大东区",
      "id": "210104"
    }, {
      "name": "皇姑区",
      "id": "210105"
    }, {
      "name": "铁西区",
      "id": "210106"
    }, {
      "name": "苏家屯区",
      "id": "210111"
    }, {
      "name": "浑南区",
      "id": "210112"
    }, {
      "name": "沈北新区",
      "id": "210113"
    }, {
      "name": "于洪区",
      "id": "210114"
    }, {
      "name": "辽中县",
      "id": "210122"
    }, {
      "name": "康平县",
      "id": "210123"
    }, {
      "name": "法库县",
      "id": "210124"
    }, {
      "name": "新民市",
      "id": "210181"
    }]
  }, {
    "name": "大连市",
    "area": [{
      "name": "中山区",
      "id": "210202"
    }, {
      "name": "西岗区",
      "id": "210203"
    }, {
      "name": "沙河口区",
      "id": "210204"
    }, {
      "name": "甘井子区",
      "id": "210211"
    }, {
      "name": "旅顺口区",
      "id": "210212"
    }, {
      "name": "金州区",
      "id": "210213"
    }, {
      "name": "长海县",
      "id": "210224"
    }, {
      "name": "瓦房店市",
      "id": "210281"
    }, {
      "name": "普兰店市",
      "id": "210282"
    }, {
      "name": "庄河市",
      "id": "210283"
    }]
  }, {
    "name": "鞍山市",
    "area": [{
      "name": "铁东区",
      "id": "210302"
    }, {
      "name": "铁西区",
      "id": "210303"
    }, {
      "name": "立山区",
      "id": "210304"
    }, {
      "name": "千山区",
      "id": "210311"
    }, {
      "name": "台安县",
      "id": "210321"
    }, {
      "name": "岫岩满族自治县",
      "id": "210323"
    }, {
      "name": "海城市",
      "id": "210381"
    }]
  }, {
    "name": "抚顺市",
    "area": [{
      "name": "新抚区",
      "id": "210402"
    }, {
      "name": "东洲区",
      "id": "210403"
    }, {
      "name": "望花区",
      "id": "210404"
    }, {
      "name": "顺城区",
      "id": "210411"
    }, {
      "name": "抚顺县",
      "id": "210421"
    }, {
      "name": "新宾满族自治县",
      "id": "210422"
    }, {
      "name": "清原满族自治县",
      "id": "210423"
    }]
  }, {
    "name": "本溪市",
    "area": [{
      "name": "平山区",
      "id": "210502"
    }, {
      "name": "溪湖区",
      "id": "210503"
    }, {
      "name": "明山区",
      "id": "210504"
    }, {
      "name": "南芬区",
      "id": "210505"
    }, {
      "name": "本溪满族自治县",
      "id": "210521"
    }, {
      "name": "桓仁满族自治县",
      "id": "210522"
    }]
  }, {
    "name": "丹东市",
    "area": [{
      "name": "元宝区",
      "id": "210602"
    }, {
      "name": "振兴区",
      "id": "210603"
    }, {
      "name": "振安区",
      "id": "210604"
    }, {
      "name": "宽甸满族自治县",
      "id": "210624"
    }, {
      "name": "东港市",
      "id": "210681"
    }, {
      "name": "凤城市",
      "id": "210682"
    }]
  }, {
    "name": "锦州市",
    "area": [{
      "name": "古塔区",
      "id": "210702"
    }, {
      "name": "凌河区",
      "id": "210703"
    }, {
      "name": "太和区",
      "id": "210711"
    }, {
      "name": "黑山县",
      "id": "210726"
    }, {
      "name": "义县",
      "id": "210727"
    }, {
      "name": "凌海市",
      "id": "210781"
    }, {
      "name": "北镇市",
      "id": "210782"
    }]
  }, {
    "name": "营口市",
    "area": [{
      "name": "站前区",
      "id": "210802"
    }, {
      "name": "西市区",
      "id": "210803"
    }, {
      "name": "鲅鱼圈区",
      "id": "210804"
    }, {
      "name": "老边区",
      "id": "210811"
    }, {
      "name": "盖州市",
      "id": "210881"
    }, {
      "name": "大石桥市",
      "id": "210882"
    }]
  }, {
    "name": "阜新市",
    "area": [{
      "name": "海州区",
      "id": "210902"
    }, {
      "name": "新邱区",
      "id": "210903"
    }, {
      "name": "太平区",
      "id": "210904"
    }, {
      "name": "清河门区",
      "id": "210905"
    }, {
      "name": "细河区",
      "id": "210911"
    }, {
      "name": "阜新蒙古族自治县",
      "id": "210921"
    }, {
      "name": "彰武县",
      "id": "210922"
    }]
  }, {
    "name": "辽阳市",
    "area": [{
      "name": "白塔区",
      "id": "211002"
    }, {
      "name": "文圣区",
      "id": "211003"
    }, {
      "name": "宏伟区",
      "id": "211004"
    }, {
      "name": "弓长岭区",
      "id": "211005"
    }, {
      "name": "太子河区",
      "id": "211011"
    }, {
      "name": "辽阳县",
      "id": "211021"
    }, {
      "name": "灯塔市",
      "id": "211081"
    }]
  }, {
    "name": "盘锦市",
    "area": [{
      "name": "双台子区",
      "id": "211102"
    }, {
      "name": "兴隆台区",
      "id": "211103"
    }, {
      "name": "大洼县",
      "id": "211121"
    }, {
      "name": "盘山县",
      "id": "211122"
    }]
  }, {
    "name": "铁岭市",
    "area": [{
      "name": "银州区",
      "id": "211202"
    }, {
      "name": "清河区",
      "id": "211204"
    }, {
      "name": "铁岭县",
      "id": "211221"
    }, {
      "name": "西丰县",
      "id": "211223"
    }, {
      "name": "昌图县",
      "id": "211224"
    }, {
      "name": "调兵山市",
      "id": "211281"
    }, {
      "name": "开原市",
      "id": "211282"
    }]
  }, {
    "name": "朝阳市",
    "area": [{
      "name": "双塔区",
      "id": "211302"
    }, {
      "name": "龙城区",
      "id": "211303"
    }, {
      "name": "朝阳县",
      "id": "211321"
    }, {
      "name": "建平县",
      "id": "211322"
    }, {
      "name": "喀喇沁左翼蒙古族自治县",
      "id": "211324"
    }, {
      "name": "北票市",
      "id": "211381"
    }, {
      "name": "凌源市",
      "id": "211382"
    }]
  }, {
    "name": "葫芦岛市",
    "area": [{
      "name": "连山区",
      "id": "211402"
    }, {
      "name": "龙港区",
      "id": "211403"
    }, {
      "name": "南票区",
      "id": "211404"
    }, {
      "name": "绥中县",
      "id": "211421"
    }, {
      "name": "建昌县",
      "id": "211422"
    }, {
      "name": "兴城市",
      "id": "211481"
    }]
  }, {
    "name": "金普新区",
    "area": [{
      "name": "金州新区",
      "id": "211501"
    }, {
      "name": "普湾新区",
      "id": "211502"
    }, {
      "name": "保税区",
      "id": "211503"
    }]
  }]
}, {
  "name": "吉林省",
  "city": [{
    "name": "长春市",
    "area": [{
      "name": "南关区",
      "id": "220102"
    }, {
      "name": "宽城区",
      "id": "220103"
    }, {
      "name": "朝阳区",
      "id": "220104"
    }, {
      "name": "二道区",
      "id": "220105"
    }, {
      "name": "绿园区",
      "id": "220106"
    }, {
      "name": "双阳区",
      "id": "220112"
    }, {
      "name": "九台区",
      "id": "220113"
    }, {
      "name": "农安县",
      "id": "220122"
    }, {
      "name": "榆树市",
      "id": "220182"
    }, {
      "name": "德惠市",
      "id": "220183"
    }]
  }, {
    "name": "吉林市",
    "area": [{
      "name": "昌邑区",
      "id": "220202"
    }, {
      "name": "龙潭区",
      "id": "220203"
    }, {
      "name": "船营区",
      "id": "220204"
    }, {
      "name": "丰满区",
      "id": "220211"
    }, {
      "name": "永吉县",
      "id": "220221"
    }, {
      "name": "蛟河市",
      "id": "220281"
    }, {
      "name": "桦甸市",
      "id": "220282"
    }, {
      "name": "舒兰市",
      "id": "220283"
    }, {
      "name": "磐石市",
      "id": "220284"
    }]
  }, {
    "name": "四平市",
    "area": [{
      "name": "铁西区",
      "id": "220302"
    }, {
      "name": "铁东区",
      "id": "220303"
    }, {
      "name": "梨树县",
      "id": "220322"
    }, {
      "name": "伊通满族自治县",
      "id": "220323"
    }, {
      "name": "公主岭市",
      "id": "220381"
    }, {
      "name": "双辽市",
      "id": "220382"
    }]
  }, {
    "name": "辽源市",
    "area": [{
      "name": "龙山区",
      "id": "220402"
    }, {
      "name": "西安区",
      "id": "220403"
    }, {
      "name": "东丰县",
      "id": "220421"
    }, {
      "name": "东辽县",
      "id": "220422"
    }]
  }, {
    "name": "通化市",
    "area": [{
      "name": "东昌区",
      "id": "220502"
    }, {
      "name": "二道江区",
      "id": "220503"
    }, {
      "name": "通化县",
      "id": "220521"
    }, {
      "name": "辉南县",
      "id": "220523"
    }, {
      "name": "柳河县",
      "id": "220524"
    }, {
      "name": "梅河口市",
      "id": "220581"
    }, {
      "name": "集安市",
      "id": "220582"
    }]
  }, {
    "name": "白山市",
    "area": [{
      "name": "浑江区",
      "id": "220602"
    }, {
      "name": "江源区",
      "id": "220605"
    }, {
      "name": "抚松县",
      "id": "220621"
    }, {
      "name": "靖宇县",
      "id": "220622"
    }, {
      "name": "长白朝鲜族自治县",
      "id": "220623"
    }, {
      "name": "临江市",
      "id": "220681"
    }]
  }, {
    "name": "松原市",
    "area": [{
      "name": "宁江区",
      "id": "220702"
    }, {
      "name": "前郭尔罗斯蒙古族自治县",
      "id": "220721"
    }, {
      "name": "长岭县",
      "id": "220722"
    }, {
      "name": "乾安县",
      "id": "220723"
    }, {
      "name": "扶余市",
      "id": "220781"
    }]
  }, {
    "name": "白城市",
    "area": [{
      "name": "洮北区",
      "id": "220802"
    }, {
      "name": "镇赉县",
      "id": "220821"
    }, {
      "name": "通榆县",
      "id": "220822"
    }, {
      "name": "洮南市",
      "id": "220881"
    }, {
      "name": "大安市",
      "id": "220882"
    }]
  }, {
    "name": "延边朝鲜族自治州",
    "area": [{
      "name": "延吉市",
      "id": "222401"
    }, {
      "name": "图们市",
      "id": "222402"
    }, {
      "name": "敦化市",
      "id": "222403"
    }, {
      "name": "珲春市",
      "id": "222404"
    }, {
      "name": "龙井市",
      "id": "222405"
    }, {
      "name": "和龙市",
      "id": "222406"
    }, {
      "name": "汪清县",
      "id": "222424"
    }, {
      "name": "安图县",
      "id": "222426"
    }]
  }]
}, {
  "name": "黑龙江省",
  "city": [{
    "name": "哈尔滨市",
    "area": [{
      "name": "道里区",
      "id": "230102"
    }, {
      "name": "南岗区",
      "id": "230103"
    }, {
      "name": "道外区",
      "id": "230104"
    }, {
      "name": "平房区",
      "id": "230108"
    }, {
      "name": "松北区",
      "id": "230109"
    }, {
      "name": "香坊区",
      "id": "230110"
    }, {
      "name": "呼兰区",
      "id": "230111"
    }, {
      "name": "阿城区",
      "id": "230112"
    }, {
      "name": "双城区",
      "id": "230113"
    }, {
      "name": "依兰县",
      "id": "230123"
    }, {
      "name": "方正县",
      "id": "230124"
    }, {
      "name": "宾县",
      "id": "230125"
    }, {
      "name": "巴彦县",
      "id": "230126"
    }, {
      "name": "木兰县",
      "id": "230127"
    }, {
      "name": "通河县",
      "id": "230128"
    }, {
      "name": "延寿县",
      "id": "230129"
    }, {
      "name": "尚志市",
      "id": "230183"
    }, {
      "name": "五常市",
      "id": "230184"
    }]
  }, {
    "name": "齐齐哈尔市",
    "area": [{
      "name": "龙沙区",
      "id": "230202"
    }, {
      "name": "建华区",
      "id": "230203"
    }, {
      "name": "铁锋区",
      "id": "230204"
    }, {
      "name": "昂昂溪区",
      "id": "230205"
    }, {
      "name": "富拉尔基区",
      "id": "230206"
    }, {
      "name": "碾子山区",
      "id": "230207"
    }, {
      "name": "梅里斯达斡尔族区",
      "id": "230208"
    }, {
      "name": "龙江县",
      "id": "230221"
    }, {
      "name": "依安县",
      "id": "230223"
    }, {
      "name": "泰来县",
      "id": "230224"
    }, {
      "name": "甘南县",
      "id": "230225"
    }, {
      "name": "富裕县",
      "id": "230227"
    }, {
      "name": "克山县",
      "id": "230229"
    }, {
      "name": "克东县",
      "id": "230230"
    }, {
      "name": "拜泉县",
      "id": "230231"
    }, {
      "name": "讷河市",
      "id": "230281"
    }]
  }, {
    "name": "鸡西市",
    "area": [{
      "name": "鸡冠区",
      "id": "230302"
    }, {
      "name": "恒山区",
      "id": "230303"
    }, {
      "name": "滴道区",
      "id": "230304"
    }, {
      "name": "梨树区",
      "id": "230305"
    }, {
      "name": "城子河区",
      "id": "230306"
    }, {
      "name": "麻山区",
      "id": "230307"
    }, {
      "name": "鸡东县",
      "id": "230321"
    }, {
      "name": "虎林市",
      "id": "230381"
    }, {
      "name": "密山市",
      "id": "230382"
    }]
  }, {
    "name": "鹤岗市",
    "area": [{
      "name": "向阳区",
      "id": "230402"
    }, {
      "name": "工农区",
      "id": "230403"
    }, {
      "name": "南山区",
      "id": "230404"
    }, {
      "name": "兴安区",
      "id": "230405"
    }, {
      "name": "东山区",
      "id": "230406"
    }, {
      "name": "兴山区",
      "id": "230407"
    }, {
      "name": "萝北县",
      "id": "230421"
    }, {
      "name": "绥滨县",
      "id": "230422"
    }]
  }, {
    "name": "双鸭山市",
    "area": [{
      "name": "尖山区",
      "id": "230502"
    }, {
      "name": "岭东区",
      "id": "230503"
    }, {
      "name": "四方台区",
      "id": "230505"
    }, {
      "name": "宝山区",
      "id": "230506"
    }, {
      "name": "集贤县",
      "id": "230521"
    }, {
      "name": "友谊县",
      "id": "230522"
    }, {
      "name": "宝清县",
      "id": "230523"
    }, {
      "name": "饶河县",
      "id": "230524"
    }]
  }, {
    "name": "大庆市",
    "area": [{
      "name": "萨尔图区",
      "id": "230602"
    }, {
      "name": "龙凤区",
      "id": "230603"
    }, {
      "name": "让胡路区",
      "id": "230604"
    }, {
      "name": "红岗区",
      "id": "230605"
    }, {
      "name": "大同区",
      "id": "230606"
    }, {
      "name": "肇州县",
      "id": "230621"
    }, {
      "name": "肇源县",
      "id": "230622"
    }, {
      "name": "林甸县",
      "id": "230623"
    }, {
      "name": "杜尔伯特蒙古族自治县",
      "id": "230624"
    }]
  }, {
    "name": "伊春市",
    "area": [{
      "name": "伊春区",
      "id": "230702"
    }, {
      "name": "南岔区",
      "id": "230703"
    }, {
      "name": "友好区",
      "id": "230704"
    }, {
      "name": "西林区",
      "id": "230705"
    }, {
      "name": "翠峦区",
      "id": "230706"
    }, {
      "name": "新青区",
      "id": "230707"
    }, {
      "name": "美溪区",
      "id": "230708"
    }, {
      "name": "金山屯区",
      "id": "230709"
    }, {
      "name": "五营区",
      "id": "230710"
    }, {
      "name": "乌马河区",
      "id": "230711"
    }, {
      "name": "汤旺河区",
      "id": "230712"
    }, {
      "name": "带岭区",
      "id": "230713"
    }, {
      "name": "乌伊岭区",
      "id": "230714"
    }, {
      "name": "红星区",
      "id": "230715"
    }, {
      "name": "上甘岭区",
      "id": "230716"
    }, {
      "name": "嘉荫县",
      "id": "230722"
    }, {
      "name": "铁力市",
      "id": "230781"
    }]
  }, {
    "name": "佳木斯市",
    "area": [{
      "name": "向阳区",
      "id": "230803"
    }, {
      "name": "前进区",
      "id": "230804"
    }, {
      "name": "东风区",
      "id": "230805"
    }, {
      "name": "郊区",
      "id": "230811"
    }, {
      "name": "桦南县",
      "id": "230822"
    }, {
      "name": "桦川县",
      "id": "230826"
    }, {
      "name": "汤原县",
      "id": "230828"
    }, {
      "name": "抚远县",
      "id": "230833"
    }, {
      "name": "同江市",
      "id": "230881"
    }, {
      "name": "富锦市",
      "id": "230882"
    }]
  }, {
    "name": "七台河市",
    "area": [{
      "name": "新兴区",
      "id": "230902"
    }, {
      "name": "桃山区",
      "id": "230903"
    }, {
      "name": "茄子河区",
      "id": "230904"
    }, {
      "name": "勃利县",
      "id": "230921"
    }]
  }, {
    "name": "牡丹江市",
    "area": [{
      "name": "东安区",
      "id": "231002"
    }, {
      "name": "阳明区",
      "id": "231003"
    }, {
      "name": "爱民区",
      "id": "231004"
    }, {
      "name": "西安区",
      "id": "231005"
    }, {
      "name": "东宁县",
      "id": "231024"
    }, {
      "name": "林口县",
      "id": "231025"
    }, {
      "name": "绥芬河市",
      "id": "231081"
    }, {
      "name": "海林市",
      "id": "231083"
    }, {
      "name": "宁安市",
      "id": "231084"
    }, {
      "name": "穆棱市",
      "id": "231085"
    }]
  }, {
    "name": "黑河市",
    "area": [{
      "name": "爱辉区",
      "id": "231102"
    }, {
      "name": "嫩江县",
      "id": "231121"
    }, {
      "name": "逊克县",
      "id": "231123"
    }, {
      "name": "孙吴县",
      "id": "231124"
    }, {
      "name": "北安市",
      "id": "231181"
    }, {
      "name": "五大连池市",
      "id": "231182"
    }]
  }, {
    "name": "绥化市",
    "area": [{
      "name": "北林区",
      "id": "231202"
    }, {
      "name": "望奎县",
      "id": "231221"
    }, {
      "name": "兰西县",
      "id": "231222"
    }, {
      "name": "青冈县",
      "id": "231223"
    }, {
      "name": "庆安县",
      "id": "231224"
    }, {
      "name": "明水县",
      "id": "231225"
    }, {
      "name": "绥棱县",
      "id": "231226"
    }, {
      "name": "安达市",
      "id": "231281"
    }, {
      "name": "肇东市",
      "id": "231282"
    }, {
      "name": "海伦市",
      "id": "231283"
    }]
  }, {
    "name": "大兴安岭地区",
    "area": [{
      "name": "加格达奇区",
      "id": "232701"
    }, {
      "name": "新林区",
      "id": "232702"
    }, {
      "name": "松岭区",
      "id": "232703"
    }, {
      "name": "呼中区",
      "id": "232704"
    }, {
      "name": "呼玛县",
      "id": "232721"
    }, {
      "name": "塔河县",
      "id": "232722"
    }, {
      "name": "漠河县",
      "id": "232723"
    }]
  }]
}, {
  "name": "上海",
  "city": [{
    "name": "上海市",
    "area": [{
      "name": "黄浦区",
      "id": "310101"
    }, {
      "name": "徐汇区",
      "id": "310104"
    }, {
      "name": "长宁区",
      "id": "310105"
    }, {
      "name": "静安区",
      "id": "310106"
    }, {
      "name": "普陀区",
      "id": "310107"
    }, {
      "name": "闸北区",
      "id": "310108"
    }, {
      "name": "虹口区",
      "id": "310109"
    }, {
      "name": "杨浦区",
      "id": "310110"
    }, {
      "name": "闵行区",
      "id": "310112"
    }, {
      "name": "宝山区",
      "id": "310113"
    }, {
      "name": "嘉定区",
      "id": "310114"
    }, {
      "name": "浦东新区",
      "id": "310115"
    }, {
      "name": "金山区",
      "id": "310116"
    }, {
      "name": "松江区",
      "id": "310117"
    }, {
      "name": "青浦区",
      "id": "310118"
    }, {
      "name": "奉贤区",
      "id": "310120"
    }, {
      "name": "崇明县",
      "id": "310230"
    }]
  }]
}, {
  "name": "江苏省",
  "city": [{
    "name": "南京市",
    "area": [{
      "name": "玄武区",
      "id": "320102"
    }, {
      "name": "秦淮区",
      "id": "320104"
    }, {
      "name": "建邺区",
      "id": "320105"
    }, {
      "name": "鼓楼区",
      "id": "320106"
    }, {
      "name": "浦口区",
      "id": "320111"
    }, {
      "name": "栖霞区",
      "id": "320113"
    }, {
      "name": "雨花台区",
      "id": "320114"
    }, {
      "name": "江宁区",
      "id": "320115"
    }, {
      "name": "六合区",
      "id": "320116"
    }, {
      "name": "溧水区",
      "id": "320117"
    }, {
      "name": "高淳区",
      "id": "320118"
    }]
  }, {
    "name": "无锡市",
    "area": [{
      "name": "崇安区",
      "id": "320202"
    }, {
      "name": "南长区",
      "id": "320203"
    }, {
      "name": "北塘区",
      "id": "320204"
    }, {
      "name": "锡山区",
      "id": "320205"
    }, {
      "name": "惠山区",
      "id": "320206"
    }, {
      "name": "滨湖区",
      "id": "320211"
    }, {
      "name": "江阴市",
      "id": "320281"
    }, {
      "name": "宜兴市",
      "id": "320282"
    }]
  }, {
    "name": "徐州市",
    "area": [{
      "name": "鼓楼区",
      "id": "320302"
    }, {
      "name": "云龙区",
      "id": "320303"
    }, {
      "name": "贾汪区",
      "id": "320305"
    }, {
      "name": "泉山区",
      "id": "320311"
    }, {
      "name": "铜山区",
      "id": "320312"
    }, {
      "name": "丰县",
      "id": "320321"
    }, {
      "name": "沛县",
      "id": "320322"
    }, {
      "name": "睢宁县",
      "id": "320324"
    }, {
      "name": "新沂市",
      "id": "320381"
    }, {
      "name": "邳州市",
      "id": "320382"
    }]
  }, {
    "name": "常州市",
    "area": [{
      "name": "天宁区",
      "id": "320402"
    }, {
      "name": "钟楼区",
      "id": "320404"
    }, {
      "name": "戚墅堰区",
      "id": "320405"
    }, {
      "name": "新北区",
      "id": "320411"
    }, {
      "name": "武进区",
      "id": "320412"
    }, {
      "name": "溧阳市",
      "id": "320481"
    }, {
      "name": "金坛市",
      "id": "320482"
    }]
  }, {
    "name": "苏州市",
    "area": [{
      "name": "虎丘区",
      "id": "320505"
    }, {
      "name": "吴中区",
      "id": "320506"
    }, {
      "name": "相城区",
      "id": "320507"
    }, {
      "name": "姑苏区",
      "id": "320508"
    }, {
      "name": "吴江区",
      "id": "320509"
    }, {
      "name": "常熟市",
      "id": "320581"
    }, {
      "name": "张家港市",
      "id": "320582"
    }, {
      "name": "昆山市",
      "id": "320583"
    }, {
      "name": "太仓市",
      "id": "320585"
    }]
  }, {
    "name": "南通市",
    "area": [{
      "name": "崇川区",
      "id": "320602"
    }, {
      "name": "港闸区",
      "id": "320611"
    }, {
      "name": "通州区",
      "id": "320612"
    }, {
      "name": "海安县",
      "id": "320621"
    }, {
      "name": "如东县",
      "id": "320623"
    }, {
      "name": "启东市",
      "id": "320681"
    }, {
      "name": "如皋市",
      "id": "320682"
    }, {
      "name": "海门市",
      "id": "320684"
    }]
  }, {
    "name": "连云港市",
    "area": [{
      "name": "连云区",
      "id": "320703"
    }, {
      "name": "海州区",
      "id": "320706"
    }, {
      "name": "赣榆区",
      "id": "320707"
    }, {
      "name": "东海县",
      "id": "320722"
    }, {
      "name": "灌云县",
      "id": "320723"
    }, {
      "name": "灌南县",
      "id": "320724"
    }]
  }, {
    "name": "淮安市",
    "area": [{
      "name": "清河区",
      "id": "320802"
    }, {
      "name": "淮安区",
      "id": "320803"
    }, {
      "name": "淮阴区",
      "id": "320804"
    }, {
      "name": "清浦区",
      "id": "320811"
    }, {
      "name": "涟水县",
      "id": "320826"
    }, {
      "name": "洪泽县",
      "id": "320829"
    }, {
      "name": "盱眙县",
      "id": "320830"
    }, {
      "name": "金湖县",
      "id": "320831"
    }]
  }, {
    "name": "盐城市",
    "area": [{
      "name": "亭湖区",
      "id": "320902"
    }, {
      "name": "盐都区",
      "id": "320903"
    }, {
      "name": "响水县",
      "id": "320921"
    }, {
      "name": "滨海县",
      "id": "320922"
    }, {
      "name": "阜宁县",
      "id": "320923"
    }, {
      "name": "射阳县",
      "id": "320924"
    }, {
      "name": "建湖县",
      "id": "320925"
    }, {
      "name": "东台市",
      "id": "320981"
    }, {
      "name": "大丰市",
      "id": "320982"
    }]
  }, {
    "name": "扬州市",
    "area": [{
      "name": "广陵区",
      "id": "321002"
    }, {
      "name": "邗江区",
      "id": "321003"
    }, {
      "name": "江都区",
      "id": "321012"
    }, {
      "name": "宝应县",
      "id": "321023"
    }, {
      "name": "仪征市",
      "id": "321081"
    }, {
      "name": "高邮市",
      "id": "321084"
    }]
  }, {
    "name": "镇江市",
    "area": [{
      "name": "京口区",
      "id": "321102"
    }, {
      "name": "润州区",
      "id": "321111"
    }, {
      "name": "丹徒区",
      "id": "321112"
    }, {
      "name": "丹阳市",
      "id": "321181"
    }, {
      "name": "扬中市",
      "id": "321182"
    }, {
      "name": "句容市",
      "id": "321183"
    }]
  }, {
    "name": "泰州市",
    "area": [{
      "name": "海陵区",
      "id": "321202"
    }, {
      "name": "高港区",
      "id": "321203"
    }, {
      "name": "姜堰区",
      "id": "321204"
    }, {
      "name": "兴化市",
      "id": "321281"
    }, {
      "name": "靖江市",
      "id": "321282"
    }, {
      "name": "泰兴市",
      "id": "321283"
    }]
  }, {
    "name": "宿迁市",
    "area": [{
      "name": "宿城区",
      "id": "321302"
    }, {
      "name": "宿豫区",
      "id": "321311"
    }, {
      "name": "沭阳县",
      "id": "321322"
    }, {
      "name": "泗阳县",
      "id": "321323"
    }, {
      "name": "泗洪县",
      "id": "321324"
    }]
  }]
}, {
  "name": "浙江省",
  "city": [{
    "name": "杭州市",
    "area": [{
      "name": "上城区",
      "id": "330102"
    }, {
      "name": "下城区",
      "id": "330103"
    }, {
      "name": "江干区",
      "id": "330104"
    }, {
      "name": "拱墅区",
      "id": "330105"
    }, {
      "name": "西湖区",
      "id": "330106"
    }, {
      "name": "滨江区",
      "id": "330108"
    }, {
      "name": "萧山区",
      "id": "330109"
    }, {
      "name": "余杭区",
      "id": "330110"
    }, {
      "name": "桐庐县",
      "id": "330122"
    }, {
      "name": "淳安县",
      "id": "330127"
    }, {
      "name": "建德市",
      "id": "330182"
    }, {
      "name": "富阳区",
      "id": "330183"
    }, {
      "name": "临安市",
      "id": "330185"
    }]
  }, {
    "name": "宁波市",
    "area": [{
      "name": "海曙区",
      "id": "330203"
    }, {
      "name": "江东区",
      "id": "330204"
    }, {
      "name": "江北区",
      "id": "330205"
    }, {
      "name": "北仑区",
      "id": "330206"
    }, {
      "name": "镇海区",
      "id": "330211"
    }, {
      "name": "鄞州区",
      "id": "330212"
    }, {
      "name": "象山县",
      "id": "330225"
    }, {
      "name": "宁海县",
      "id": "330226"
    }, {
      "name": "余姚市",
      "id": "330281"
    }, {
      "name": "慈溪市",
      "id": "330282"
    }, {
      "name": "奉化市",
      "id": "330283"
    }]
  }, {
    "name": "温州市",
    "area": [{
      "name": "鹿城区",
      "id": "330302"
    }, {
      "name": "龙湾区",
      "id": "330303"
    }, {
      "name": "瓯海区",
      "id": "330304"
    }, {
      "name": "洞头县",
      "id": "330322"
    }, {
      "name": "永嘉县",
      "id": "330324"
    }, {
      "name": "平阳县",
      "id": "330326"
    }, {
      "name": "苍南县",
      "id": "330327"
    }, {
      "name": "文成县",
      "id": "330328"
    }, {
      "name": "泰顺县",
      "id": "330329"
    }, {
      "name": "瑞安市",
      "id": "330381"
    }, {
      "name": "乐清市",
      "id": "330382"
    }]
  }, {
    "name": "嘉兴市",
    "area": [{
      "name": "南湖区",
      "id": "330402"
    }, {
      "name": "秀洲区",
      "id": "330411"
    }, {
      "name": "嘉善县",
      "id": "330421"
    }, {
      "name": "海盐县",
      "id": "330424"
    }, {
      "name": "海宁市",
      "id": "330481"
    }, {
      "name": "平湖市",
      "id": "330482"
    }, {
      "name": "桐乡市",
      "id": "330483"
    }]
  }, {
    "name": "湖州市",
    "area": [{
      "name": "吴兴区",
      "id": "330502"
    }, {
      "name": "南浔区",
      "id": "330503"
    }, {
      "name": "德清县",
      "id": "330521"
    }, {
      "name": "长兴县",
      "id": "330522"
    }, {
      "name": "安吉县",
      "id": "330523"
    }]
  }, {
    "name": "绍兴市",
    "area": [{
      "name": "越城区",
      "id": "330602"
    }, {
      "name": "柯桥区",
      "id": "330603"
    }, {
      "name": "上虞区",
      "id": "330604"
    }, {
      "name": "新昌县",
      "id": "330624"
    }, {
      "name": "诸暨市",
      "id": "330681"
    }, {
      "name": "嵊州市",
      "id": "330683"
    }]
  }, {
    "name": "金华市",
    "area": [{
      "name": "婺城区",
      "id": "330702"
    }, {
      "name": "金东区",
      "id": "330703"
    }, {
      "name": "武义县",
      "id": "330723"
    }, {
      "name": "浦江县",
      "id": "330726"
    }, {
      "name": "磐安县",
      "id": "330727"
    }, {
      "name": "兰溪市",
      "id": "330781"
    }, {
      "name": "义乌市",
      "id": "330782"
    }, {
      "name": "东阳市",
      "id": "330783"
    }, {
      "name": "永康市",
      "id": "330784"
    }]
  }, {
    "name": "衢州市",
    "area": [{
      "name": "柯城区",
      "id": "330802"
    }, {
      "name": "衢江区",
      "id": "330803"
    }, {
      "name": "常山县",
      "id": "330822"
    }, {
      "name": "开化县",
      "id": "330824"
    }, {
      "name": "龙游县",
      "id": "330825"
    }, {
      "name": "江山市",
      "id": "330881"
    }]
  }, {
    "name": "舟山市",
    "area": [{
      "name": "定海区",
      "id": "330902"
    }, {
      "name": "普陀区",
      "id": "330903"
    }, {
      "name": "岱山县",
      "id": "330921"
    }, {
      "name": "嵊泗县",
      "id": "330922"
    }]
  }, {
    "name": "台州市",
    "area": [{
      "name": "椒江区",
      "id": "331002"
    }, {
      "name": "黄岩区",
      "id": "331003"
    }, {
      "name": "路桥区",
      "id": "331004"
    }, {
      "name": "玉环县",
      "id": "331021"
    }, {
      "name": "三门县",
      "id": "331022"
    }, {
      "name": "天台县",
      "id": "331023"
    }, {
      "name": "仙居县",
      "id": "331024"
    }, {
      "name": "温岭市",
      "id": "331081"
    }, {
      "name": "临海市",
      "id": "331082"
    }]
  }, {
    "name": "丽水市",
    "area": [{
      "name": "莲都区",
      "id": "331102"
    }, {
      "name": "青田县",
      "id": "331121"
    }, {
      "name": "缙云县",
      "id": "331122"
    }, {
      "name": "遂昌县",
      "id": "331123"
    }, {
      "name": "松阳县",
      "id": "331124"
    }, {
      "name": "云和县",
      "id": "331125"
    }, {
      "name": "庆元县",
      "id": "331126"
    }, {
      "name": "景宁畲族自治县",
      "id": "331127"
    }, {
      "name": "龙泉市",
      "id": "331181"
    }]
  }, {
    "name": "舟山群岛新区",
    "area": [{
      "name": "金塘岛",
      "id": "331201"
    }, {
      "name": "六横岛",
      "id": "331202"
    }, {
      "name": "衢山岛",
      "id": "331203"
    }, {
      "name": "舟山本岛西北部",
      "id": "331204"
    }, {
      "name": "岱山岛西南部",
      "id": "331205"
    }, {
      "name": "泗礁岛",
      "id": "331206"
    }, {
      "name": "朱家尖岛",
      "id": "331207"
    }, {
      "name": "洋山岛",
      "id": "331208"
    }, {
      "name": "长涂岛",
      "id": "331209"
    }, {
      "name": "虾峙岛",
      "id": "331210"
    }]
  }]
}, {
  "name": "安徽省",
  "city": [{
    "name": "合肥市",
    "area": [{
      "name": "瑶海区",
      "id": "340102"
    }, {
      "name": "庐阳区",
      "id": "340103"
    }, {
      "name": "蜀山区",
      "id": "340104"
    }, {
      "name": "包河区",
      "id": "340111"
    }, {
      "name": "长丰县",
      "id": "340121"
    }, {
      "name": "肥东县",
      "id": "340122"
    }, {
      "name": "肥西县",
      "id": "340123"
    }, {
      "name": "庐江县",
      "id": "340124"
    }, {
      "name": "高薪区",
      "id": "340171"
    }, {
      "name": "经开区",
      "id": "340172"
    }, {
      "name": "新站区",
      "id": "340173"
    }, {
      "name": "巢湖市",
      "id": "340181"
    }]
  }, {
    "name": "芜湖市",
    "area": [{
      "name": "镜湖区",
      "id": "340202"
    }, {
      "name": "弋江区",
      "id": "340203"
    }, {
      "name": "鸠江区",
      "id": "340207"
    }, {
      "name": "三山区",
      "id": "340208"
    }, {
      "name": "芜湖县",
      "id": "340221"
    }, {
      "name": "繁昌县",
      "id": "340222"
    }, {
      "name": "南陵县",
      "id": "340223"
    }, {
      "name": "无为县",
      "id": "340225"
    }]
  }, {
    "name": "蚌埠市",
    "area": [{
      "name": "龙子湖区",
      "id": "340302"
    }, {
      "name": "蚌山区",
      "id": "340303"
    }, {
      "name": "禹会区",
      "id": "340304"
    }, {
      "name": "淮上区",
      "id": "340311"
    }, {
      "name": "怀远县",
      "id": "340321"
    }, {
      "name": "五河县",
      "id": "340322"
    }, {
      "name": "固镇县",
      "id": "340323"
    }]
  }, {
    "name": "淮南市",
    "area": [{
      "name": "大通区",
      "id": "340402"
    }, {
      "name": "田家庵区",
      "id": "340403"
    }, {
      "name": "谢家集区",
      "id": "340404"
    }, {
      "name": "八公山区",
      "id": "340405"
    }, {
      "name": "潘集区",
      "id": "340406"
    }, {
      "name": "凤台县",
      "id": "340421"
    }]
  }, {
    "name": "马鞍山市",
    "area": [{
      "name": "花山区",
      "id": "340503"
    }, {
      "name": "雨山区",
      "id": "340504"
    }, {
      "name": "博望区",
      "id": "340506"
    }, {
      "name": "当涂县",
      "id": "340521"
    }, {
      "name": "含山县",
      "id": "340522"
    }, {
      "name": "和县",
      "id": "340523"
    }]
  }, {
    "name": "淮北市",
    "area": [{
      "name": "杜集区",
      "id": "340602"
    }, {
      "name": "相山区",
      "id": "340603"
    }, {
      "name": "烈山区",
      "id": "340604"
    }, {
      "name": "濉溪县",
      "id": "340621"
    }]
  }, {
    "name": "铜陵市",
    "area": [{
      "name": "铜官山区",
      "id": "340702"
    }, {
      "name": "狮子山区",
      "id": "340703"
    }, {
      "name": "郊区",
      "id": "340711"
    }, {
      "name": "铜陵县",
      "id": "340721"
    }]
  }, {
    "name": "安庆市",
    "area": [{
      "name": "迎江区",
      "id": "340802"
    }, {
      "name": "大观区",
      "id": "340803"
    }, {
      "name": "宜秀区",
      "id": "340811"
    }, {
      "name": "怀宁县",
      "id": "340822"
    }, {
      "name": "枞阳县",
      "id": "340823"
    }, {
      "name": "潜山县",
      "id": "340824"
    }, {
      "name": "太湖县",
      "id": "340825"
    }, {
      "name": "宿松县",
      "id": "340826"
    }, {
      "name": "望江县",
      "id": "340827"
    }, {
      "name": "岳西县",
      "id": "340828"
    }, {
      "name": "桐城市",
      "id": "340881"
    }]
  }, {
    "name": "黄山市",
    "area": [{
      "name": "屯溪区",
      "id": "341002"
    }, {
      "name": "黄山区",
      "id": "341003"
    }, {
      "name": "徽州区",
      "id": "341004"
    }, {
      "name": "歙县",
      "id": "341021"
    }, {
      "name": "休宁县",
      "id": "341022"
    }, {
      "name": "黟县",
      "id": "341023"
    }, {
      "name": "祁门县",
      "id": "341024"
    }]
  }, {
    "name": "滁州市",
    "area": [{
      "name": "琅琊区",
      "id": "341102"
    }, {
      "name": "南谯区",
      "id": "341103"
    }, {
      "name": "来安县",
      "id": "341122"
    }, {
      "name": "全椒县",
      "id": "341124"
    }, {
      "name": "定远县",
      "id": "341125"
    }, {
      "name": "凤阳县",
      "id": "341126"
    }, {
      "name": "天长市",
      "id": "341181"
    }, {
      "name": "明光市",
      "id": "341182"
    }]
  }, {
    "name": "阜阳市",
    "area": [{
      "name": "颍州区",
      "id": "341202"
    }, {
      "name": "颍东区",
      "id": "341203"
    }, {
      "name": "颍泉区",
      "id": "341204"
    }, {
      "name": "临泉县",
      "id": "341221"
    }, {
      "name": "太和县",
      "id": "341222"
    }, {
      "name": "阜南县",
      "id": "341225"
    }, {
      "name": "颍上县",
      "id": "341226"
    }, {
      "name": "界首市",
      "id": "341282"
    }]
  }, {
    "name": "宿州市",
    "area": [{
      "name": "埇桥区",
      "id": "341302"
    }, {
      "name": "砀山县",
      "id": "341321"
    }, {
      "name": "萧县",
      "id": "341322"
    }, {
      "name": "灵璧县",
      "id": "341323"
    }, {
      "name": "泗县",
      "id": "341324"
    }]
  }, {
    "name": "六安市",
    "area": [{
      "name": "金安区",
      "id": "341502"
    }, {
      "name": "裕安区",
      "id": "341503"
    }, {
      "name": "寿县",
      "id": "341521"
    }, {
      "name": "霍邱县",
      "id": "341522"
    }, {
      "name": "舒城县",
      "id": "341523"
    }, {
      "name": "金寨县",
      "id": "341524"
    }, {
      "name": "霍山县",
      "id": "341525"
    }]
  }, {
    "name": "亳州市",
    "area": [{
      "name": "谯城区",
      "id": "341602"
    }, {
      "name": "涡阳县",
      "id": "341621"
    }, {
      "name": "蒙城县",
      "id": "341622"
    }, {
      "name": "利辛县",
      "id": "341623"
    }]
  }, {
    "name": "池州市",
    "area": [{
      "name": "贵池区",
      "id": "341702"
    }, {
      "name": "东至县",
      "id": "341721"
    }, {
      "name": "石台县",
      "id": "341722"
    }, {
      "name": "青阳县",
      "id": "341723"
    }]
  }, {
    "name": "宣城市",
    "area": [{
      "name": "宣州区",
      "id": "341802"
    }, {
      "name": "郎溪县",
      "id": "341821"
    }, {
      "name": "广德县",
      "id": "341822"
    }, {
      "name": "泾县",
      "id": "341823"
    }, {
      "name": "绩溪县",
      "id": "341824"
    }, {
      "name": "旌德县",
      "id": "341825"
    }, {
      "name": "宁国市",
      "id": "341881"
    }]
  }]
}, {
  "name": "福建省",
  "city": [{
    "name": "福州市",
    "area": [{
      "name": "鼓楼区",
      "id": "350102"
    }, {
      "name": "台江区",
      "id": "350103"
    }, {
      "name": "仓山区",
      "id": "350104"
    }, {
      "name": "马尾区",
      "id": "350105"
    }, {
      "name": "晋安区",
      "id": "350111"
    }, {
      "name": "闽侯县",
      "id": "350121"
    }, {
      "name": "连江县",
      "id": "350122"
    }, {
      "name": "罗源县",
      "id": "350123"
    }, {
      "name": "闽清县",
      "id": "350124"
    }, {
      "name": "永泰县",
      "id": "350125"
    }, {
      "name": "平潭县",
      "id": "350128"
    }, {
      "name": "福清市",
      "id": "350181"
    }, {
      "name": "长乐市",
      "id": "350182"
    }]
  }, {
    "name": "厦门市",
    "area": [{
      "name": "思明区",
      "id": "350203"
    }, {
      "name": "海沧区",
      "id": "350205"
    }, {
      "name": "湖里区",
      "id": "350206"
    }, {
      "name": "集美区",
      "id": "350211"
    }, {
      "name": "同安区",
      "id": "350212"
    }, {
      "name": "翔安区",
      "id": "350213"
    }]
  }, {
    "name": "莆田市",
    "area": [{
      "name": "城厢区",
      "id": "350302"
    }, {
      "name": "涵江区",
      "id": "350303"
    }, {
      "name": "荔城区",
      "id": "350304"
    }, {
      "name": "秀屿区",
      "id": "350305"
    }, {
      "name": "仙游县",
      "id": "350322"
    }]
  }, {
    "name": "三明市",
    "area": [{
      "name": "梅列区",
      "id": "350402"
    }, {
      "name": "三元区",
      "id": "350403"
    }, {
      "name": "明溪县",
      "id": "350421"
    }, {
      "name": "清流县",
      "id": "350423"
    }, {
      "name": "宁化县",
      "id": "350424"
    }, {
      "name": "大田县",
      "id": "350425"
    }, {
      "name": "尤溪县",
      "id": "350426"
    }, {
      "name": "沙县",
      "id": "350427"
    }, {
      "name": "将乐县",
      "id": "350428"
    }, {
      "name": "泰宁县",
      "id": "350429"
    }, {
      "name": "建宁县",
      "id": "350430"
    }, {
      "name": "永安市",
      "id": "350481"
    }]
  }, {
    "name": "泉州市",
    "area": [{
      "name": "鲤城区",
      "id": "350502"
    }, {
      "name": "丰泽区",
      "id": "350503"
    }, {
      "name": "洛江区",
      "id": "350504"
    }, {
      "name": "泉港区",
      "id": "350505"
    }, {
      "name": "惠安县",
      "id": "350521"
    }, {
      "name": "安溪县",
      "id": "350524"
    }, {
      "name": "永春县",
      "id": "350525"
    }, {
      "name": "德化县",
      "id": "350526"
    }, {
      "name": "金门县",
      "id": "350527"
    }, {
      "name": "石狮市",
      "id": "350581"
    }, {
      "name": "晋江市",
      "id": "350582"
    }, {
      "name": "南安市",
      "id": "350583"
    }]
  }, {
    "name": "漳州市",
    "area": [{
      "name": "芗城区",
      "id": "350602"
    }, {
      "name": "龙文区",
      "id": "350603"
    }, {
      "name": "云霄县",
      "id": "350622"
    }, {
      "name": "漳浦县",
      "id": "350623"
    }, {
      "name": "诏安县",
      "id": "350624"
    }, {
      "name": "长泰县",
      "id": "350625"
    }, {
      "name": "东山县",
      "id": "350626"
    }, {
      "name": "南靖县",
      "id": "350627"
    }, {
      "name": "平和县",
      "id": "350628"
    }, {
      "name": "华安县",
      "id": "350629"
    }, {
      "name": "龙海市",
      "id": "350681"
    }]
  }, {
    "name": "南平市",
    "area": [{
      "name": "延平区",
      "id": "350702"
    }, {
      "name": "建阳区",
      "id": "350703"
    }, {
      "name": "顺昌县",
      "id": "350721"
    }, {
      "name": "浦城县",
      "id": "350722"
    }, {
      "name": "光泽县",
      "id": "350723"
    }, {
      "name": "松溪县",
      "id": "350724"
    }, {
      "name": "政和县",
      "id": "350725"
    }, {
      "name": "邵武市",
      "id": "350781"
    }, {
      "name": "武夷山市",
      "id": "350782"
    }, {
      "name": "建瓯市",
      "id": "350783"
    }]
  }, {
    "name": "龙岩市",
    "area": [{
      "name": "新罗区",
      "id": "350802"
    }, {
      "name": "长汀县",
      "id": "350821"
    }, {
      "name": "永定区",
      "id": "350822"
    }, {
      "name": "上杭县",
      "id": "350823"
    }, {
      "name": "武平县",
      "id": "350824"
    }, {
      "name": "连城县",
      "id": "350825"
    }, {
      "name": "漳平市",
      "id": "350881"
    }]
  }, {
    "name": "宁德市",
    "area": [{
      "name": "蕉城区",
      "id": "350902"
    }, {
      "name": "霞浦县",
      "id": "350921"
    }, {
      "name": "古田县",
      "id": "350922"
    }, {
      "name": "屏南县",
      "id": "350923"
    }, {
      "name": "寿宁县",
      "id": "350924"
    }, {
      "name": "周宁县",
      "id": "350925"
    }, {
      "name": "柘荣县",
      "id": "350926"
    }, {
      "name": "福安市",
      "id": "350981"
    }, {
      "name": "福鼎市",
      "id": "350982"
    }]
  }]
}, {
  "name": "江西省",
  "city": [{
    "name": "南昌市",
    "area": [{
      "name": "东湖区",
      "id": "360102"
    }, {
      "name": "西湖区",
      "id": "360103"
    }, {
      "name": "青云谱区",
      "id": "360104"
    }, {
      "name": "湾里区",
      "id": "360105"
    }, {
      "name": "青山湖区",
      "id": "360111"
    }, {
      "name": "南昌县",
      "id": "360121"
    }, {
      "name": "新建县",
      "id": "360122"
    }, {
      "name": "安义县",
      "id": "360123"
    }, {
      "name": "进贤县",
      "id": "360124"
    }]
  }, {
    "name": "景德镇市",
    "area": [{
      "name": "昌江区",
      "id": "360202"
    }, {
      "name": "珠山区",
      "id": "360203"
    }, {
      "name": "浮梁县",
      "id": "360222"
    }, {
      "name": "乐平市",
      "id": "360281"
    }]
  }, {
    "name": "萍乡市",
    "area": [{
      "name": "安源区",
      "id": "360302"
    }, {
      "name": "湘东区",
      "id": "360313"
    }, {
      "name": "莲花县",
      "id": "360321"
    }, {
      "name": "上栗县",
      "id": "360322"
    }, {
      "name": "芦溪县",
      "id": "360323"
    }]
  }, {
    "name": "九江市",
    "area": [{
      "name": "庐山区",
      "id": "360402"
    }, {
      "name": "浔阳区",
      "id": "360403"
    }, {
      "name": "九江县",
      "id": "360421"
    }, {
      "name": "武宁县",
      "id": "360423"
    }, {
      "name": "修水县",
      "id": "360424"
    }, {
      "name": "永修县",
      "id": "360425"
    }, {
      "name": "德安县",
      "id": "360426"
    }, {
      "name": "星子县",
      "id": "360427"
    }, {
      "name": "都昌县",
      "id": "360428"
    }, {
      "name": "湖口县",
      "id": "360429"
    }, {
      "name": "彭泽县",
      "id": "360430"
    }, {
      "name": "瑞昌市",
      "id": "360481"
    }, {
      "name": "共青城市",
      "id": "360482"
    }]
  }, {
    "name": "新余市",
    "area": [{
      "name": "渝水区",
      "id": "360502"
    }, {
      "name": "分宜县",
      "id": "360521"
    }]
  }, {
    "name": "鹰潭市",
    "area": [{
      "name": "月湖区",
      "id": "360602"
    }, {
      "name": "余江县",
      "id": "360622"
    }, {
      "name": "贵溪市",
      "id": "360681"
    }]
  }, {
    "name": "赣州市",
    "area": [{
      "name": "章贡区",
      "id": "360702"
    }, {
      "name": "南康区",
      "id": "360703"
    }, {
      "name": "赣县",
      "id": "360721"
    }, {
      "name": "信丰县",
      "id": "360722"
    }, {
      "name": "大余县",
      "id": "360723"
    }, {
      "name": "上犹县",
      "id": "360724"
    }, {
      "name": "崇义县",
      "id": "360725"
    }, {
      "name": "安远县",
      "id": "360726"
    }, {
      "name": "龙南县",
      "id": "360727"
    }, {
      "name": "定南县",
      "id": "360728"
    }, {
      "name": "全南县",
      "id": "360729"
    }, {
      "name": "宁都县",
      "id": "360730"
    }, {
      "name": "于都县",
      "id": "360731"
    }, {
      "name": "兴国县",
      "id": "360732"
    }, {
      "name": "会昌县",
      "id": "360733"
    }, {
      "name": "寻乌县",
      "id": "360734"
    }, {
      "name": "石城县",
      "id": "360735"
    }, {
      "name": "瑞金市",
      "id": "360781"
    }]
  }, {
    "name": "吉安市",
    "area": [{
      "name": "吉州区",
      "id": "360802"
    }, {
      "name": "青原区",
      "id": "360803"
    }, {
      "name": "吉安县",
      "id": "360821"
    }, {
      "name": "吉水县",
      "id": "360822"
    }, {
      "name": "峡江县",
      "id": "360823"
    }, {
      "name": "新干县",
      "id": "360824"
    }, {
      "name": "永丰县",
      "id": "360825"
    }, {
      "name": "泰和县",
      "id": "360826"
    }, {
      "name": "遂川县",
      "id": "360827"
    }, {
      "name": "万安县",
      "id": "360828"
    }, {
      "name": "安福县",
      "id": "360829"
    }, {
      "name": "永新县",
      "id": "360830"
    }, {
      "name": "井冈山市",
      "id": "360881"
    }]
  }, {
    "name": "宜春市",
    "area": [{
      "name": "袁州区",
      "id": "360902"
    }, {
      "name": "奉新县",
      "id": "360921"
    }, {
      "name": "万载县",
      "id": "360922"
    }, {
      "name": "上高县",
      "id": "360923"
    }, {
      "name": "宜丰县",
      "id": "360924"
    }, {
      "name": "靖安县",
      "id": "360925"
    }, {
      "name": "铜鼓县",
      "id": "360926"
    }, {
      "name": "丰城市",
      "id": "360981"
    }, {
      "name": "樟树市",
      "id": "360982"
    }, {
      "name": "高安市",
      "id": "360983"
    }]
  }, {
    "name": "抚州市",
    "area": [{
      "name": "临川区",
      "id": "361002"
    }, {
      "name": "南城县",
      "id": "361021"
    }, {
      "name": "黎川县",
      "id": "361022"
    }, {
      "name": "南丰县",
      "id": "361023"
    }, {
      "name": "崇仁县",
      "id": "361024"
    }, {
      "name": "乐安县",
      "id": "361025"
    }, {
      "name": "宜黄县",
      "id": "361026"
    }, {
      "name": "金溪县",
      "id": "361027"
    }, {
      "name": "资溪县",
      "id": "361028"
    }, {
      "name": "东乡县",
      "id": "361029"
    }, {
      "name": "广昌县",
      "id": "361030"
    }]
  }, {
    "name": "上饶市",
    "area": [{
      "name": "信州区",
      "id": "361102"
    }, {
      "name": "上饶县",
      "id": "361121"
    }, {
      "name": "广丰县",
      "id": "361122"
    }, {
      "name": "玉山县",
      "id": "361123"
    }, {
      "name": "铅山县",
      "id": "361124"
    }, {
      "name": "横峰县",
      "id": "361125"
    }, {
      "name": "弋阳县",
      "id": "361126"
    }, {
      "name": "余干县",
      "id": "361127"
    }, {
      "name": "鄱阳县",
      "id": "361128"
    }, {
      "name": "万年县",
      "id": "361129"
    }, {
      "name": "婺源县",
      "id": "361130"
    }, {
      "name": "德兴市",
      "id": "361181"
    }]
  }]
}, {
  "name": "山东省",
  "city": [{
    "name": "济南市",
    "area": [{
      "name": "历下区",
      "id": "370102"
    }, {
      "name": "市中区",
      "id": "370103"
    }, {
      "name": "槐荫区",
      "id": "370104"
    }, {
      "name": "天桥区",
      "id": "370105"
    }, {
      "name": "历城区",
      "id": "370112"
    }, {
      "name": "长清区",
      "id": "370113"
    }, {
      "name": "平阴县",
      "id": "370124"
    }, {
      "name": "济阳县",
      "id": "370125"
    }, {
      "name": "商河县",
      "id": "370126"
    }, {
      "name": "章丘市",
      "id": "370181"
    }]
  }, {
    "name": "青岛市",
    "area": [{
      "name": "市南区",
      "id": "370202"
    }, {
      "name": "市北区",
      "id": "370203"
    }, {
      "name": "黄岛区",
      "id": "370211"
    }, {
      "name": "崂山区",
      "id": "370212"
    }, {
      "name": "李沧区",
      "id": "370213"
    }, {
      "name": "城阳区",
      "id": "370214"
    }, {
      "name": "胶州市",
      "id": "370281"
    }, {
      "name": "即墨市",
      "id": "370282"
    }, {
      "name": "平度市",
      "id": "370283"
    }, {
      "name": "莱西市",
      "id": "370285"
    }, {
      "name": "西海岸新区",
      "id": "370286"
    }]
  }, {
    "name": "淄博市",
    "area": [{
      "name": "淄川区",
      "id": "370302"
    }, {
      "name": "张店区",
      "id": "370303"
    }, {
      "name": "博山区",
      "id": "370304"
    }, {
      "name": "临淄区",
      "id": "370305"
    }, {
      "name": "周村区",
      "id": "370306"
    }, {
      "name": "桓台县",
      "id": "370321"
    }, {
      "name": "高青县",
      "id": "370322"
    }, {
      "name": "沂源县",
      "id": "370323"
    }]
  }, {
    "name": "枣庄市",
    "area": [{
      "name": "市中区",
      "id": "370402"
    }, {
      "name": "薛城区",
      "id": "370403"
    }, {
      "name": "峄城区",
      "id": "370404"
    }, {
      "name": "台儿庄区",
      "id": "370405"
    }, {
      "name": "山亭区",
      "id": "370406"
    }, {
      "name": "滕州市",
      "id": "370481"
    }]
  }, {
    "name": "东营市",
    "area": [{
      "name": "东营区",
      "id": "370502"
    }, {
      "name": "河口区",
      "id": "370503"
    }, {
      "name": "垦利县",
      "id": "370521"
    }, {
      "name": "利津县",
      "id": "370522"
    }, {
      "name": "广饶县",
      "id": "370523"
    }]
  }, {
    "name": "烟台市",
    "area": [{
      "name": "芝罘区",
      "id": "370602"
    }, {
      "name": "福山区",
      "id": "370611"
    }, {
      "name": "牟平区",
      "id": "370612"
    }, {
      "name": "莱山区",
      "id": "370613"
    }, {
      "name": "长岛县",
      "id": "370634"
    }, {
      "name": "龙口市",
      "id": "370681"
    }, {
      "name": "莱阳市",
      "id": "370682"
    }, {
      "name": "莱州市",
      "id": "370683"
    }, {
      "name": "蓬莱市",
      "id": "370684"
    }, {
      "name": "招远市",
      "id": "370685"
    }, {
      "name": "栖霞市",
      "id": "370686"
    }, {
      "name": "海阳市",
      "id": "370687"
    }]
  }, {
    "name": "潍坊市",
    "area": [{
      "name": "潍城区",
      "id": "370702"
    }, {
      "name": "寒亭区",
      "id": "370703"
    }, {
      "name": "坊子区",
      "id": "370704"
    }, {
      "name": "奎文区",
      "id": "370705"
    }, {
      "name": "临朐县",
      "id": "370724"
    }, {
      "name": "昌乐县",
      "id": "370725"
    }, {
      "name": "青州市",
      "id": "370781"
    }, {
      "name": "诸城市",
      "id": "370782"
    }, {
      "name": "寿光市",
      "id": "370783"
    }, {
      "name": "安丘市",
      "id": "370784"
    }, {
      "name": "高密市",
      "id": "370785"
    }, {
      "name": "昌邑市",
      "id": "370786"
    }]
  }, {
    "name": "济宁市",
    "area": [{
      "name": "任城区",
      "id": "370811"
    }, {
      "name": "兖州区",
      "id": "370812"
    }, {
      "name": "微山县",
      "id": "370826"
    }, {
      "name": "鱼台县",
      "id": "370827"
    }, {
      "name": "金乡县",
      "id": "370828"
    }, {
      "name": "嘉祥县",
      "id": "370829"
    }, {
      "name": "汶上县",
      "id": "370830"
    }, {
      "name": "泗水县",
      "id": "370831"
    }, {
      "name": "梁山县",
      "id": "370832"
    }, {
      "name": "曲阜市",
      "id": "370881"
    }, {
      "name": "邹城市",
      "id": "370883"
    }]
  }, {
    "name": "泰安市",
    "area": [{
      "name": "泰山区",
      "id": "370902"
    }, {
      "name": "岱岳区",
      "id": "370911"
    }, {
      "name": "宁阳县",
      "id": "370921"
    }, {
      "name": "东平县",
      "id": "370923"
    }, {
      "name": "新泰市",
      "id": "370982"
    }, {
      "name": "肥城市",
      "id": "370983"
    }]
  }, {
    "name": "威海市",
    "area": [{
      "name": "环翠区",
      "id": "371002"
    }, {
      "name": "文登区",
      "id": "371003"
    }, {
      "name": "荣成市",
      "id": "371082"
    }, {
      "name": "乳山市",
      "id": "371083"
    }]
  }, {
    "name": "日照市",
    "area": [{
      "name": "东港区",
      "id": "371102"
    }, {
      "name": "岚山区",
      "id": "371103"
    }, {
      "name": "五莲县",
      "id": "371121"
    }, {
      "name": "莒县",
      "id": "371122"
    }]
  }, {
    "name": "莱芜市",
    "area": [{
      "name": "莱城区",
      "id": "371202"
    }, {
      "name": "钢城区",
      "id": "371203"
    }]
  }, {
    "name": "临沂市",
    "area": [{
      "name": "兰山区",
      "id": "371302"
    }, {
      "name": "罗庄区",
      "id": "371311"
    }, {
      "name": "河东区",
      "id": "371312"
    }, {
      "name": "沂南县",
      "id": "371321"
    }, {
      "name": "郯城县",
      "id": "371322"
    }, {
      "name": "沂水县",
      "id": "371323"
    }, {
      "name": "兰陵县",
      "id": "371324"
    }, {
      "name": "费县",
      "id": "371325"
    }, {
      "name": "平邑县",
      "id": "371326"
    }, {
      "name": "莒南县",
      "id": "371327"
    }, {
      "name": "蒙阴县",
      "id": "371328"
    }, {
      "name": "临沭县",
      "id": "371329"
    }]
  }, {
    "name": "德州市",
    "area": [{
      "name": "德城区",
      "id": "371402"
    }, {
      "name": "陵城区",
      "id": "371403"
    }, {
      "name": "宁津县",
      "id": "371422"
    }, {
      "name": "庆云县",
      "id": "371423"
    }, {
      "name": "临邑县",
      "id": "371424"
    }, {
      "name": "齐河县",
      "id": "371425"
    }, {
      "name": "平原县",
      "id": "371426"
    }, {
      "name": "夏津县",
      "id": "371427"
    }, {
      "name": "武城县",
      "id": "371428"
    }, {
      "name": "乐陵市",
      "id": "371481"
    }, {
      "name": "禹城市",
      "id": "371482"
    }]
  }, {
    "name": "聊城市",
    "area": [{
      "name": "东昌府区",
      "id": "371502"
    }, {
      "name": "阳谷县",
      "id": "371521"
    }, {
      "name": "莘县",
      "id": "371522"
    }, {
      "name": "茌平县",
      "id": "371523"
    }, {
      "name": "东阿县",
      "id": "371524"
    }, {
      "name": "冠县",
      "id": "371525"
    }, {
      "name": "高唐县",
      "id": "371526"
    }, {
      "name": "临清市",
      "id": "371581"
    }]
  }, {
    "name": "滨州市",
    "area": [{
      "name": "滨城区",
      "id": "371602"
    }, {
      "name": "沾化区",
      "id": "371603"
    }, {
      "name": "惠民县",
      "id": "371621"
    }, {
      "name": "阳信县",
      "id": "371622"
    }, {
      "name": "无棣县",
      "id": "371623"
    }, {
      "name": "博兴县",
      "id": "371625"
    }, {
      "name": "邹平县",
      "id": "371626"
    }, {
      "name": "北海新区",
      "id": "371627"
    }]
  }, {
    "name": "菏泽市",
    "area": [{
      "name": "牡丹区",
      "id": "371702"
    }, {
      "name": "曹县",
      "id": "371721"
    }, {
      "name": "单县",
      "id": "371722"
    }, {
      "name": "成武县",
      "id": "371723"
    }, {
      "name": "巨野县",
      "id": "371724"
    }, {
      "name": "郓城县",
      "id": "371725"
    }, {
      "name": "鄄城县",
      "id": "371726"
    }, {
      "name": "定陶县",
      "id": "371727"
    }, {
      "name": "东明县",
      "id": "371728"
    }]
  }]
}, {
  "name": "河南省",
  "city": [{
    "name": "郑州市",
    "area": [{
      "name": "中原区",
      "id": "410102"
    }, {
      "name": "二七区",
      "id": "410103"
    }, {
      "name": "管城回族区",
      "id": "410104"
    }, {
      "name": "金水区",
      "id": "410105"
    }, {
      "name": "上街区",
      "id": "410106"
    }, {
      "name": "惠济区",
      "id": "410108"
    }, {
      "name": "中牟县",
      "id": "410122"
    }, {
      "name": "巩义市",
      "id": "410181"
    }, {
      "name": "荥阳市",
      "id": "410182"
    }, {
      "name": "新密市",
      "id": "410183"
    }, {
      "name": "新郑市",
      "id": "410184"
    }, {
      "name": "登封市",
      "id": "410185"
    }]
  }, {
    "name": "开封市",
    "area": [{
      "name": "龙亭区",
      "id": "410202"
    }, {
      "name": "顺河回族区",
      "id": "410203"
    }, {
      "name": "鼓楼区",
      "id": "410204"
    }, {
      "name": "禹王台区",
      "id": "410205"
    }, {
      "name": "祥符区",
      "id": "410212"
    }, {
      "name": "杞县",
      "id": "410221"
    }, {
      "name": "通许县",
      "id": "410222"
    }, {
      "name": "尉氏县",
      "id": "410223"
    }, {
      "name": "兰考县",
      "id": "410225"
    }]
  }, {
    "name": "洛阳市",
    "area": [{
      "name": "老城区",
      "id": "410302"
    }, {
      "name": "西工区",
      "id": "410303"
    }, {
      "name": "瀍河回族区",
      "id": "410304"
    }, {
      "name": "涧西区",
      "id": "410305"
    }, {
      "name": "吉利区",
      "id": "410306"
    }, {
      "name": "洛龙区",
      "id": "410311"
    }, {
      "name": "孟津县",
      "id": "410322"
    }, {
      "name": "新安县",
      "id": "410323"
    }, {
      "name": "栾川县",
      "id": "410324"
    }, {
      "name": "嵩县",
      "id": "410325"
    }, {
      "name": "汝阳县",
      "id": "410326"
    }, {
      "name": "宜阳县",
      "id": "410327"
    }, {
      "name": "洛宁县",
      "id": "410328"
    }, {
      "name": "伊川县",
      "id": "410329"
    }, {
      "name": "偃师市",
      "id": "410381"
    }]
  }, {
    "name": "平顶山市",
    "area": [{
      "name": "新华区",
      "id": "410402"
    }, {
      "name": "卫东区",
      "id": "410403"
    }, {
      "name": "石龙区",
      "id": "410404"
    }, {
      "name": "湛河区",
      "id": "410411"
    }, {
      "name": "宝丰县",
      "id": "410421"
    }, {
      "name": "叶县",
      "id": "410422"
    }, {
      "name": "鲁山县",
      "id": "410423"
    }, {
      "name": "郏县",
      "id": "410425"
    }, {
      "name": "舞钢市",
      "id": "410481"
    }, {
      "name": "汝州市",
      "id": "410482"
    }]
  }, {
    "name": "安阳市",
    "area": [{
      "name": "文峰区",
      "id": "410502"
    }, {
      "name": "北关区",
      "id": "410503"
    }, {
      "name": "殷都区",
      "id": "410505"
    }, {
      "name": "龙安区",
      "id": "410506"
    }, {
      "name": "安阳县",
      "id": "410522"
    }, {
      "name": "汤阴县",
      "id": "410523"
    }, {
      "name": "滑县",
      "id": "410526"
    }, {
      "name": "内黄县",
      "id": "410527"
    }, {
      "name": "林州市",
      "id": "410581"
    }]
  }, {
    "name": "鹤壁市",
    "area": [{
      "name": "鹤山区",
      "id": "410602"
    }, {
      "name": "山城区",
      "id": "410603"
    }, {
      "name": "淇滨区",
      "id": "410611"
    }, {
      "name": "浚县",
      "id": "410621"
    }, {
      "name": "淇县",
      "id": "410622"
    }]
  }, {
    "name": "新乡市",
    "area": [{
      "name": "红旗区",
      "id": "410702"
    }, {
      "name": "卫滨区",
      "id": "410703"
    }, {
      "name": "凤泉区",
      "id": "410704"
    }, {
      "name": "牧野区",
      "id": "410711"
    }, {
      "name": "新乡县",
      "id": "410721"
    }, {
      "name": "获嘉县",
      "id": "410724"
    }, {
      "name": "原阳县",
      "id": "410725"
    }, {
      "name": "延津县",
      "id": "410726"
    }, {
      "name": "封丘县",
      "id": "410727"
    }, {
      "name": "长垣县",
      "id": "410728"
    }, {
      "name": "卫辉市",
      "id": "410781"
    }, {
      "name": "辉县市",
      "id": "410782"
    }]
  }, {
    "name": "焦作市",
    "area": [{
      "name": "解放区",
      "id": "410802"
    }, {
      "name": "中站区",
      "id": "410803"
    }, {
      "name": "马村区",
      "id": "410804"
    }, {
      "name": "山阳区",
      "id": "410811"
    }, {
      "name": "修武县",
      "id": "410821"
    }, {
      "name": "博爱县",
      "id": "410822"
    }, {
      "name": "武陟县",
      "id": "410823"
    }, {
      "name": "温县",
      "id": "410825"
    }, {
      "name": "沁阳市",
      "id": "410882"
    }, {
      "name": "孟州市",
      "id": "410883"
    }]
  }, {
    "name": "濮阳市",
    "area": [{
      "name": "华龙区",
      "id": "410902"
    }, {
      "name": "清丰县",
      "id": "410922"
    }, {
      "name": "南乐县",
      "id": "410923"
    }, {
      "name": "范县",
      "id": "410926"
    }, {
      "name": "台前县",
      "id": "410927"
    }, {
      "name": "濮阳县",
      "id": "410928"
    }]
  }, {
    "name": "许昌市",
    "area": [{
      "name": "魏都区",
      "id": "411002"
    }, {
      "name": "许昌县",
      "id": "411023"
    }, {
      "name": "鄢陵县",
      "id": "411024"
    }, {
      "name": "襄城县",
      "id": "411025"
    }, {
      "name": "禹州市",
      "id": "411081"
    }, {
      "name": "长葛市",
      "id": "411082"
    }]
  }, {
    "name": "漯河市",
    "area": [{
      "name": "源汇区",
      "id": "411102"
    }, {
      "name": "郾城区",
      "id": "411103"
    }, {
      "name": "召陵区",
      "id": "411104"
    }, {
      "name": "舞阳县",
      "id": "411121"
    }, {
      "name": "临颍县",
      "id": "411122"
    }]
  }, {
    "name": "三门峡市",
    "area": [{
      "name": "湖滨区",
      "id": "411202"
    }, {
      "name": "渑池县",
      "id": "411221"
    }, {
      "name": "陕县",
      "id": "411222"
    }, {
      "name": "卢氏县",
      "id": "411224"
    }, {
      "name": "义马市",
      "id": "411281"
    }, {
      "name": "灵宝市",
      "id": "411282"
    }]
  }, {
    "name": "南阳市",
    "area": [{
      "name": "宛城区",
      "id": "411302"
    }, {
      "name": "卧龙区",
      "id": "411303"
    }, {
      "name": "南召县",
      "id": "411321"
    }, {
      "name": "方城县",
      "id": "411322"
    }, {
      "name": "西峡县",
      "id": "411323"
    }, {
      "name": "镇平县",
      "id": "411324"
    }, {
      "name": "内乡县",
      "id": "411325"
    }, {
      "name": "淅川县",
      "id": "411326"
    }, {
      "name": "社旗县",
      "id": "411327"
    }, {
      "name": "唐河县",
      "id": "411328"
    }, {
      "name": "新野县",
      "id": "411329"
    }, {
      "name": "桐柏县",
      "id": "411330"
    }, {
      "name": "邓州市",
      "id": "411381"
    }]
  }, {
    "name": "商丘市",
    "area": [{
      "name": "梁园区",
      "id": "411402"
    }, {
      "name": "睢阳区",
      "id": "411403"
    }, {
      "name": "民权县",
      "id": "411421"
    }, {
      "name": "睢县",
      "id": "411422"
    }, {
      "name": "宁陵县",
      "id": "411423"
    }, {
      "name": "柘城县",
      "id": "411424"
    }, {
      "name": "虞城县",
      "id": "411425"
    }, {
      "name": "夏邑县",
      "id": "411426"
    }, {
      "name": "永城市",
      "id": "411481"
    }]
  }, {
    "name": "信阳市",
    "area": [{
      "name": "浉河区",
      "id": "411502"
    }, {
      "name": "平桥区",
      "id": "411503"
    }, {
      "name": "罗山县",
      "id": "411521"
    }, {
      "name": "光山县",
      "id": "411522"
    }, {
      "name": "新县",
      "id": "411523"
    }, {
      "name": "商城县",
      "id": "411524"
    }, {
      "name": "固始县",
      "id": "411525"
    }, {
      "name": "潢川县",
      "id": "411526"
    }, {
      "name": "淮滨县",
      "id": "411527"
    }, {
      "name": "息县",
      "id": "411528"
    }]
  }, {
    "name": "周口市",
    "area": [{
      "name": "川汇区",
      "id": "411602"
    }, {
      "name": "扶沟县",
      "id": "411621"
    }, {
      "name": "西华县",
      "id": "411622"
    }, {
      "name": "商水县",
      "id": "411623"
    }, {
      "name": "沈丘县",
      "id": "411624"
    }, {
      "name": "郸城县",
      "id": "411625"
    }, {
      "name": "淮阳县",
      "id": "411626"
    }, {
      "name": "太康县",
      "id": "411627"
    }, {
      "name": "鹿邑县",
      "id": "411628"
    }, {
      "name": "项城市",
      "id": "411681"
    }]
  }, {
    "name": "驻马店市",
    "area": [{
      "name": "驿城区",
      "id": "411702"
    }, {
      "name": "西平县",
      "id": "411721"
    }, {
      "name": "上蔡县",
      "id": "411722"
    }, {
      "name": "平舆县",
      "id": "411723"
    }, {
      "name": "正阳县",
      "id": "411724"
    }, {
      "name": "确山县",
      "id": "411725"
    }, {
      "name": "泌阳县",
      "id": "411726"
    }, {
      "name": "汝南县",
      "id": "411727"
    }, {
      "name": "遂平县",
      "id": "411728"
    }, {
      "name": "新蔡县",
      "id": "411729"
    }]
  }, {
    "name": "直辖县级",
    "area": [{
      "name": "济源市",
      "id": "419001"
    }]
  }]
}, {
  "name": "湖北省",
  "city": [{
    "name": "武汉市",
    "area": [{
      "name": "江岸区",
      "id": "420102"
    }, {
      "name": "江汉区",
      "id": "420103"
    }, {
      "name": "硚口区",
      "id": "420104"
    }, {
      "name": "汉阳区",
      "id": "420105"
    }, {
      "name": "武昌区",
      "id": "420106"
    }, {
      "name": "青山区",
      "id": "420107"
    }, {
      "name": "洪山区",
      "id": "420111"
    }, {
      "name": "东西湖区",
      "id": "420112"
    }, {
      "name": "汉南区",
      "id": "420113"
    }, {
      "name": "蔡甸区",
      "id": "420114"
    }, {
      "name": "江夏区",
      "id": "420115"
    }, {
      "name": "黄陂区",
      "id": "420116"
    }, {
      "name": "新洲区",
      "id": "420117"
    }]
  }, {
    "name": "黄石市",
    "area": [{
      "name": "黄石港区",
      "id": "420202"
    }, {
      "name": "西塞山区",
      "id": "420203"
    }, {
      "name": "下陆区",
      "id": "420204"
    }, {
      "name": "铁山区",
      "id": "420205"
    }, {
      "name": "阳新县",
      "id": "420222"
    }, {
      "name": "大冶市",
      "id": "420281"
    }]
  }, {
    "name": "十堰市",
    "area": [{
      "name": "茅箭区",
      "id": "420302"
    }, {
      "name": "张湾区",
      "id": "420303"
    }, {
      "name": "郧阳区",
      "id": "420304"
    }, {
      "name": "郧西县",
      "id": "420322"
    }, {
      "name": "竹山县",
      "id": "420323"
    }, {
      "name": "竹溪县",
      "id": "420324"
    }, {
      "name": "房县",
      "id": "420325"
    }, {
      "name": "丹江口市",
      "id": "420381"
    }]
  }, {
    "name": "宜昌市",
    "area": [{
      "name": "西陵区",
      "id": "420502"
    }, {
      "name": "伍家岗区",
      "id": "420503"
    }, {
      "name": "点军区",
      "id": "420504"
    }, {
      "name": "猇亭区",
      "id": "420505"
    }, {
      "name": "夷陵区",
      "id": "420506"
    }, {
      "name": "远安县",
      "id": "420525"
    }, {
      "name": "兴山县",
      "id": "420526"
    }, {
      "name": "秭归县",
      "id": "420527"
    }, {
      "name": "长阳土家族自治县",
      "id": "420528"
    }, {
      "name": "五峰土家族自治县",
      "id": "420529"
    }, {
      "name": "宜都市",
      "id": "420581"
    }, {
      "name": "当阳市",
      "id": "420582"
    }, {
      "name": "枝江市",
      "id": "420583"
    }]
  }, {
    "name": "襄阳市",
    "area": [{
      "name": "襄城区",
      "id": "420602"
    }, {
      "name": "樊城区",
      "id": "420606"
    }, {
      "name": "襄州区",
      "id": "420607"
    }, {
      "name": "南漳县",
      "id": "420624"
    }, {
      "name": "谷城县",
      "id": "420625"
    }, {
      "name": "保康县",
      "id": "420626"
    }, {
      "name": "老河口市",
      "id": "420682"
    }, {
      "name": "枣阳市",
      "id": "420683"
    }, {
      "name": "宜城市",
      "id": "420684"
    }]
  }, {
    "name": "鄂州市",
    "area": [{
      "name": "梁子湖区",
      "id": "420702"
    }, {
      "name": "华容区",
      "id": "420703"
    }, {
      "name": "鄂城区",
      "id": "420704"
    }]
  }, {
    "name": "荆门市",
    "area": [{
      "name": "东宝区",
      "id": "420802"
    }, {
      "name": "掇刀区",
      "id": "420804"
    }, {
      "name": "京山县",
      "id": "420821"
    }, {
      "name": "沙洋县",
      "id": "420822"
    }, {
      "name": "钟祥市",
      "id": "420881"
    }]
  }, {
    "name": "孝感市",
    "area": [{
      "name": "孝南区",
      "id": "420902"
    }, {
      "name": "孝昌县",
      "id": "420921"
    }, {
      "name": "大悟县",
      "id": "420922"
    }, {
      "name": "云梦县",
      "id": "420923"
    }, {
      "name": "应城市",
      "id": "420981"
    }, {
      "name": "安陆市",
      "id": "420982"
    }, {
      "name": "汉川市",
      "id": "420984"
    }]
  }, {
    "name": "荆州市",
    "area": [{
      "name": "沙市区",
      "id": "421002"
    }, {
      "name": "荆州区",
      "id": "421003"
    }, {
      "name": "公安县",
      "id": "421022"
    }, {
      "name": "监利县",
      "id": "421023"
    }, {
      "name": "江陵县",
      "id": "421024"
    }, {
      "name": "石首市",
      "id": "421081"
    }, {
      "name": "洪湖市",
      "id": "421083"
    }, {
      "name": "松滋市",
      "id": "421087"
    }]
  }, {
    "name": "黄冈市",
    "area": [{
      "name": "黄州区",
      "id": "421102"
    }, {
      "name": "团风县",
      "id": "421121"
    }, {
      "name": "红安县",
      "id": "421122"
    }, {
      "name": "罗田县",
      "id": "421123"
    }, {
      "name": "英山县",
      "id": "421124"
    }, {
      "name": "浠水县",
      "id": "421125"
    }, {
      "name": "蕲春县",
      "id": "421126"
    }, {
      "name": "黄梅县",
      "id": "421127"
    }, {
      "name": "麻城市",
      "id": "421181"
    }, {
      "name": "武穴市",
      "id": "421182"
    }]
  }, {
    "name": "咸宁市",
    "area": [{
      "name": "咸安区",
      "id": "421202"
    }, {
      "name": "嘉鱼县",
      "id": "421221"
    }, {
      "name": "通城县",
      "id": "421222"
    }, {
      "name": "崇阳县",
      "id": "421223"
    }, {
      "name": "通山县",
      "id": "421224"
    }, {
      "name": "赤壁市",
      "id": "421281"
    }]
  }, {
    "name": "随州市",
    "area": [{
      "name": "曾都区",
      "id": "421303"
    }, {
      "name": "随县",
      "id": "421321"
    }, {
      "name": "广水市",
      "id": "421381"
    }]
  }, {
    "name": "恩施土家族苗族自治州",
    "area": [{
      "name": "恩施市",
      "id": "422801"
    }, {
      "name": "利川市",
      "id": "422802"
    }, {
      "name": "建始县",
      "id": "422822"
    }, {
      "name": "巴东县",
      "id": "422823"
    }, {
      "name": "宣恩县",
      "id": "422825"
    }, {
      "name": "咸丰县",
      "id": "422826"
    }, {
      "name": "来凤县",
      "id": "422827"
    }, {
      "name": "鹤峰县",
      "id": "422828"
    }]
  }, {
    "name": "直辖县级",
    "area": [{
      "name": "仙桃市",
      "id": "429004"
    }, {
      "name": "潜江市",
      "id": "429005"
    }, {
      "name": "天门市",
      "id": "429006"
    }, {
      "name": "神农架林区",
      "id": "429021"
    }]
  }]
}, {
  "name": "湖南省",
  "city": [{
    "name": "长沙市",
    "area": [{
      "name": "芙蓉区",
      "id": "430102"
    }, {
      "name": "天心区",
      "id": "430103"
    }, {
      "name": "岳麓区",
      "id": "430104"
    }, {
      "name": "开福区",
      "id": "430105"
    }, {
      "name": "雨花区",
      "id": "430111"
    }, {
      "name": "望城区",
      "id": "430112"
    }, {
      "name": "长沙县",
      "id": "430121"
    }, {
      "name": "宁乡县",
      "id": "430124"
    }, {
      "name": "浏阳市",
      "id": "430181"
    }]
  }, {
    "name": "株洲市",
    "area": [{
      "name": "荷塘区",
      "id": "430202"
    }, {
      "name": "芦淞区",
      "id": "430203"
    }, {
      "name": "石峰区",
      "id": "430204"
    }, {
      "name": "天元区",
      "id": "430211"
    }, {
      "name": "株洲县",
      "id": "430221"
    }, {
      "name": "攸县",
      "id": "430223"
    }, {
      "name": "茶陵县",
      "id": "430224"
    }, {
      "name": "炎陵县",
      "id": "430225"
    }, {
      "name": "醴陵市",
      "id": "430281"
    }]
  }, {
    "name": "湘潭市",
    "area": [{
      "name": "雨湖区",
      "id": "430302"
    }, {
      "name": "岳塘区",
      "id": "430304"
    }, {
      "name": "湘潭县",
      "id": "430321"
    }, {
      "name": "湘乡市",
      "id": "430381"
    }, {
      "name": "韶山市",
      "id": "430382"
    }]
  }, {
    "name": "衡阳市",
    "area": [{
      "name": "珠晖区",
      "id": "430405"
    }, {
      "name": "雁峰区",
      "id": "430406"
    }, {
      "name": "石鼓区",
      "id": "430407"
    }, {
      "name": "蒸湘区",
      "id": "430408"
    }, {
      "name": "南岳区",
      "id": "430412"
    }, {
      "name": "衡阳县",
      "id": "430421"
    }, {
      "name": "衡南县",
      "id": "430422"
    }, {
      "name": "衡山县",
      "id": "430423"
    }, {
      "name": "衡东县",
      "id": "430424"
    }, {
      "name": "祁东县",
      "id": "430426"
    }, {
      "name": "耒阳市",
      "id": "430481"
    }, {
      "name": "常宁市",
      "id": "430482"
    }]
  }, {
    "name": "邵阳市",
    "area": [{
      "name": "双清区",
      "id": "430502"
    }, {
      "name": "大祥区",
      "id": "430503"
    }, {
      "name": "北塔区",
      "id": "430511"
    }, {
      "name": "邵东县",
      "id": "430521"
    }, {
      "name": "新邵县",
      "id": "430522"
    }, {
      "name": "邵阳县",
      "id": "430523"
    }, {
      "name": "隆回县",
      "id": "430524"
    }, {
      "name": "洞口县",
      "id": "430525"
    }, {
      "name": "绥宁县",
      "id": "430527"
    }, {
      "name": "新宁县",
      "id": "430528"
    }, {
      "name": "城步苗族自治县",
      "id": "430529"
    }, {
      "name": "武冈市",
      "id": "430581"
    }]
  }, {
    "name": "岳阳市",
    "area": [{
      "name": "岳阳楼区",
      "id": "430602"
    }, {
      "name": "云溪区",
      "id": "430603"
    }, {
      "name": "君山区",
      "id": "430611"
    }, {
      "name": "岳阳县",
      "id": "430621"
    }, {
      "name": "华容县",
      "id": "430623"
    }, {
      "name": "湘阴县",
      "id": "430624"
    }, {
      "name": "平江县",
      "id": "430626"
    }, {
      "name": "汨罗市",
      "id": "430681"
    }, {
      "name": "临湘市",
      "id": "430682"
    }]
  }, {
    "name": "常德市",
    "area": [{
      "name": "武陵区",
      "id": "430702"
    }, {
      "name": "鼎城区",
      "id": "430703"
    }, {
      "name": "安乡县",
      "id": "430721"
    }, {
      "name": "汉寿县",
      "id": "430722"
    }, {
      "name": "澧县",
      "id": "430723"
    }, {
      "name": "临澧县",
      "id": "430724"
    }, {
      "name": "桃源县",
      "id": "430725"
    }, {
      "name": "石门县",
      "id": "430726"
    }, {
      "name": "津市市",
      "id": "430781"
    }]
  }, {
    "name": "张家界市",
    "area": [{
      "name": "永定区",
      "id": "430802"
    }, {
      "name": "武陵源区",
      "id": "430811"
    }, {
      "name": "慈利县",
      "id": "430821"
    }, {
      "name": "桑植县",
      "id": "430822"
    }]
  }, {
    "name": "益阳市",
    "area": [{
      "name": "资阳区",
      "id": "430902"
    }, {
      "name": "赫山区",
      "id": "430903"
    }, {
      "name": "南县",
      "id": "430921"
    }, {
      "name": "桃江县",
      "id": "430922"
    }, {
      "name": "安化县",
      "id": "430923"
    }, {
      "name": "沅江市",
      "id": "430981"
    }]
  }, {
    "name": "郴州市",
    "area": [{
      "name": "北湖区",
      "id": "431002"
    }, {
      "name": "苏仙区",
      "id": "431003"
    }, {
      "name": "桂阳县",
      "id": "431021"
    }, {
      "name": "宜章县",
      "id": "431022"
    }, {
      "name": "永兴县",
      "id": "431023"
    }, {
      "name": "嘉禾县",
      "id": "431024"
    }, {
      "name": "临武县",
      "id": "431025"
    }, {
      "name": "汝城县",
      "id": "431026"
    }, {
      "name": "桂东县",
      "id": "431027"
    }, {
      "name": "安仁县",
      "id": "431028"
    }, {
      "name": "资兴市",
      "id": "431081"
    }]
  }, {
    "name": "永州市",
    "area": [{
      "name": "零陵区",
      "id": "431102"
    }, {
      "name": "冷水滩区",
      "id": "431103"
    }, {
      "name": "祁阳县",
      "id": "431121"
    }, {
      "name": "东安县",
      "id": "431122"
    }, {
      "name": "双牌县",
      "id": "431123"
    }, {
      "name": "道县",
      "id": "431124"
    }, {
      "name": "江永县",
      "id": "431125"
    }, {
      "name": "宁远县",
      "id": "431126"
    }, {
      "name": "蓝山县",
      "id": "431127"
    }, {
      "name": "新田县",
      "id": "431128"
    }, {
      "name": "江华瑶族自治县",
      "id": "431129"
    }]
  }, {
    "name": "怀化市",
    "area": [{
      "name": "鹤城区",
      "id": "431202"
    }, {
      "name": "中方县",
      "id": "431221"
    }, {
      "name": "沅陵县",
      "id": "431222"
    }, {
      "name": "辰溪县",
      "id": "431223"
    }, {
      "name": "溆浦县",
      "id": "431224"
    }, {
      "name": "会同县",
      "id": "431225"
    }, {
      "name": "麻阳苗族自治县",
      "id": "431226"
    }, {
      "name": "新晃侗族自治县",
      "id": "431227"
    }, {
      "name": "芷江侗族自治县",
      "id": "431228"
    }, {
      "name": "靖州苗族侗族自治县",
      "id": "431229"
    }, {
      "name": "通道侗族自治县",
      "id": "431230"
    }, {
      "name": "洪江市",
      "id": "431281"
    }]
  }, {
    "name": "娄底市",
    "area": [{
      "name": "娄星区",
      "id": "431302"
    }, {
      "name": "双峰县",
      "id": "431321"
    }, {
      "name": "新化县",
      "id": "431322"
    }, {
      "name": "冷水江市",
      "id": "431381"
    }, {
      "name": "涟源市",
      "id": "431382"
    }]
  }, {
    "name": "湘西土家族苗族自治州",
    "area": [{
      "name": "吉首市",
      "id": "433101"
    }, {
      "name": "泸溪县",
      "id": "433122"
    }, {
      "name": "凤凰县",
      "id": "433123"
    }, {
      "name": "花垣县",
      "id": "433124"
    }, {
      "name": "保靖县",
      "id": "433125"
    }, {
      "name": "古丈县",
      "id": "433126"
    }, {
      "name": "永顺县",
      "id": "433127"
    }, {
      "name": "龙山县",
      "id": "433130"
    }]
  }]
}, {
  "name": "广东省",
  "city": [{
    "name": "广州市",
    "area": [{
      "name": "荔湾区",
      "id": "440103"
    }, {
      "name": "越秀区",
      "id": "440104"
    }, {
      "name": "海珠区",
      "id": "440105"
    }, {
      "name": "天河区",
      "id": "440106"
    }, {
      "name": "白云区",
      "id": "440111"
    }, {
      "name": "黄埔区",
      "id": "440112"
    }, {
      "name": "番禺区",
      "id": "440113"
    }, {
      "name": "花都区",
      "id": "440114"
    }, {
      "name": "南沙区",
      "id": "440115"
    }, {
      "name": "从化区",
      "id": "440117"
    }, {
      "name": "增城区",
      "id": "440118"
    }]
  }, {
    "name": "韶关市",
    "area": [{
      "name": "武江区",
      "id": "440203"
    }, {
      "name": "浈江区",
      "id": "440204"
    }, {
      "name": "曲江区",
      "id": "440205"
    }, {
      "name": "始兴县",
      "id": "440222"
    }, {
      "name": "仁化县",
      "id": "440224"
    }, {
      "name": "翁源县",
      "id": "440229"
    }, {
      "name": "乳源瑶族自治县",
      "id": "440232"
    }, {
      "name": "新丰县",
      "id": "440233"
    }, {
      "name": "乐昌市",
      "id": "440281"
    }, {
      "name": "南雄市",
      "id": "440282"
    }]
  }, {
    "name": "深圳市",
    "area": [{
      "name": "罗湖区",
      "id": "440303"
    }, {
      "name": "福田区",
      "id": "440304"
    }, {
      "name": "南山区",
      "id": "440305"
    }, {
      "name": "宝安区",
      "id": "440306"
    }, {
      "name": "龙岗区",
      "id": "440307"
    }, {
      "name": "盐田区",
      "id": "440308"
    }, {
      "name": "光明新区",
      "id": "440309"
    }, {
      "name": "坪山新区",
      "id": "440310"
    }, {
      "name": "大鹏新区",
      "id": "440311"
    }, {
      "name": "龙华新区",
      "id": "440312"
    }]
  }, {
    "name": "珠海市",
    "area": [{
      "name": "香洲区",
      "id": "440402"
    }, {
      "name": "斗门区",
      "id": "440403"
    }, {
      "name": "金湾区",
      "id": "440404"
    }]
  }, {
    "name": "汕头市",
    "area": [{
      "name": "龙湖区",
      "id": "440507"
    }, {
      "name": "金平区",
      "id": "440511"
    }, {
      "name": "濠江区",
      "id": "440512"
    }, {
      "name": "潮阳区",
      "id": "440513"
    }, {
      "name": "潮南区",
      "id": "440514"
    }, {
      "name": "澄海区",
      "id": "440515"
    }, {
      "name": "南澳县",
      "id": "440523"
    }]
  }, {
    "name": "佛山市",
    "area": [{
      "name": "禅城区",
      "id": "440604"
    }, {
      "name": "南海区",
      "id": "440605"
    }, {
      "name": "顺德区",
      "id": "440606"
    }, {
      "name": "三水区",
      "id": "440607"
    }, {
      "name": "高明区",
      "id": "440608"
    }]
  }, {
    "name": "江门市",
    "area": [{
      "name": "蓬江区",
      "id": "440703"
    }, {
      "name": "江海区",
      "id": "440704"
    }, {
      "name": "新会区",
      "id": "440705"
    }, {
      "name": "台山市",
      "id": "440781"
    }, {
      "name": "开平市",
      "id": "440783"
    }, {
      "name": "鹤山市",
      "id": "440784"
    }, {
      "name": "恩平市",
      "id": "440785"
    }]
  }, {
    "name": "湛江市",
    "area": [{
      "name": "赤坎区",
      "id": "440802"
    }, {
      "name": "霞山区",
      "id": "440803"
    }, {
      "name": "坡头区",
      "id": "440804"
    }, {
      "name": "麻章区",
      "id": "440811"
    }, {
      "name": "遂溪县",
      "id": "440823"
    }, {
      "name": "徐闻县",
      "id": "440825"
    }, {
      "name": "廉江市",
      "id": "440881"
    }, {
      "name": "雷州市",
      "id": "440882"
    }, {
      "name": "吴川市",
      "id": "440883"
    }]
  }, {
    "name": "茂名市",
    "area": [{
      "name": "茂南区",
      "id": "440902"
    }, {
      "name": "电白区",
      "id": "440904"
    }, {
      "name": "高州市",
      "id": "440981"
    }, {
      "name": "化州市",
      "id": "440982"
    }, {
      "name": "信宜市",
      "id": "440983"
    }]
  }, {
    "name": "肇庆市",
    "area": [{
      "name": "端州区",
      "id": "441202"
    }, {
      "name": "鼎湖区",
      "id": "441203"
    }, {
      "name": "广宁县",
      "id": "441223"
    }, {
      "name": "怀集县",
      "id": "441224"
    }, {
      "name": "封开县",
      "id": "441225"
    }, {
      "name": "德庆县",
      "id": "441226"
    }, {
      "name": "高要市",
      "id": "441283"
    }, {
      "name": "四会市",
      "id": "441284"
    }]
  }, {
    "name": "惠州市",
    "area": [{
      "name": "惠城区",
      "id": "441302"
    }, {
      "name": "惠阳区",
      "id": "441303"
    }, {
      "name": "博罗县",
      "id": "441322"
    }, {
      "name": "惠东县",
      "id": "441323"
    }, {
      "name": "龙门县",
      "id": "441324"
    }]
  }, {
    "name": "梅州市",
    "area": [{
      "name": "梅江区",
      "id": "441402"
    }, {
      "name": "梅县区",
      "id": "441403"
    }, {
      "name": "大埔县",
      "id": "441422"
    }, {
      "name": "丰顺县",
      "id": "441423"
    }, {
      "name": "五华县",
      "id": "441424"
    }, {
      "name": "平远县",
      "id": "441426"
    }, {
      "name": "蕉岭县",
      "id": "441427"
    }, {
      "name": "兴宁市",
      "id": "441481"
    }]
  }, {
    "name": "汕尾市",
    "area": [{
      "name": "城区",
      "id": "441502"
    }, {
      "name": "海丰县",
      "id": "441521"
    }, {
      "name": "陆河县",
      "id": "441523"
    }, {
      "name": "陆丰市",
      "id": "441581"
    }]
  }, {
    "name": "河源市",
    "area": [{
      "name": "源城区",
      "id": "441602"
    }, {
      "name": "紫金县",
      "id": "441621"
    }, {
      "name": "龙川县",
      "id": "441622"
    }, {
      "name": "连平县",
      "id": "441623"
    }, {
      "name": "和平县",
      "id": "441624"
    }, {
      "name": "东源县",
      "id": "441625"
    }]
  }, {
    "name": "阳江市",
    "area": [{
      "name": "江城区",
      "id": "441702"
    }, {
      "name": "阳东区",
      "id": "441704"
    }, {
      "name": "阳西县",
      "id": "441721"
    }, {
      "name": "阳春市",
      "id": "441781"
    }]
  }, {
    "name": "清远市",
    "area": [{
      "name": "清城区",
      "id": "441802"
    }, {
      "name": "清新区",
      "id": "441803"
    }, {
      "name": "佛冈县",
      "id": "441821"
    }, {
      "name": "阳山县",
      "id": "441823"
    }, {
      "name": "连山壮族瑶族自治县",
      "id": "441825"
    }, {
      "name": "连南瑶族自治县",
      "id": "441826"
    }, {
      "name": "英德市",
      "id": "441881"
    }, {
      "name": "连州市",
      "id": "441882"
    }]
  }, {
    "name": "东莞市",
    "area": [{
      "name": "莞城区",
      "id": "441901"
    }, {
      "name": "南城区",
      "id": "441902"
    }, {
      "name": "万江区",
      "id": "441904"
    }, {
      "name": "石碣镇",
      "id": "441905"
    }, {
      "name": "石龙镇",
      "id": "441906"
    }, {
      "name": "茶山镇",
      "id": "441907"
    }, {
      "name": "石排镇",
      "id": "441908"
    }, {
      "name": "企石镇",
      "id": "441909"
    }, {
      "name": "横沥镇",
      "id": "441910"
    }, {
      "name": "桥头镇",
      "id": "441911"
    }, {
      "name": "谢岗镇",
      "id": "441912"
    }, {
      "name": "东坑镇",
      "id": "441913"
    }, {
      "name": "常平镇",
      "id": "441914"
    }, {
      "name": "寮步镇",
      "id": "441915"
    }, {
      "name": "大朗镇",
      "id": "441916"
    }, {
      "name": "麻涌镇",
      "id": "441917"
    }, {
      "name": "中堂镇",
      "id": "441918"
    }, {
      "name": "高埗镇",
      "id": "441919"
    }, {
      "name": "樟木头镇",
      "id": "441920"
    }, {
      "name": "大岭山镇",
      "id": "441921"
    }, {
      "name": "望牛墩镇",
      "id": "441922"
    }, {
      "name": "黄江镇",
      "id": "441923"
    }, {
      "name": "洪梅镇",
      "id": "441924"
    }, {
      "name": "清溪镇",
      "id": "441925"
    }, {
      "name": "沙田镇",
      "id": "441926"
    }, {
      "name": "道滘镇",
      "id": "441927"
    }, {
      "name": "塘厦镇",
      "id": "441928"
    }, {
      "name": "虎门镇",
      "id": "441929"
    }, {
      "name": "厚街镇",
      "id": "441930"
    }, {
      "name": "凤岗镇",
      "id": "441931"
    }, {
      "name": "长安镇",
      "id": "441932"
    }]
  }, {
    "name": "中山市",
    "area": [{
      "name": "石岐区",
      "id": "442001"
    }, {
      "name": "南区",
      "id": "442004"
    }, {
      "name": "五桂山区",
      "id": "442005"
    }, {
      "name": "火炬开发区",
      "id": "442006"
    }, {
      "name": "黄圃镇",
      "id": "442007"
    }, {
      "name": "南头镇",
      "id": "442008"
    }, {
      "name": "东凤镇",
      "id": "442009"
    }, {
      "name": "阜沙镇",
      "id": "442010"
    }, {
      "name": "小榄镇",
      "id": "442011"
    }, {
      "name": "东升镇",
      "id": "442012"
    }, {
      "name": "古镇镇",
      "id": "442013"
    }, {
      "name": "横栏镇",
      "id": "442014"
    }, {
      "name": "三角镇",
      "id": "442015"
    }, {
      "name": "民众镇",
      "id": "442016"
    }, {
      "name": "南朗镇",
      "id": "442017"
    }, {
      "name": "港口镇",
      "id": "442018"
    }, {
      "name": "大涌镇",
      "id": "442019"
    }, {
      "name": "沙溪镇",
      "id": "442020"
    }, {
      "name": "三乡镇",
      "id": "442021"
    }, {
      "name": "板芙镇",
      "id": "442022"
    }, {
      "name": "神湾镇",
      "id": "442023"
    }, {
      "name": "坦洲镇",
      "id": "442024"
    }]
  }, {
    "name": "潮州市",
    "area": [{
      "name": "湘桥区",
      "id": "445102"
    }, {
      "name": "潮安区",
      "id": "445103"
    }, {
      "name": "饶平县",
      "id": "445122"
    }]
  }, {
    "name": "揭阳市",
    "area": [{
      "name": "榕城区",
      "id": "445202"
    }, {
      "name": "揭东区",
      "id": "445203"
    }, {
      "name": "揭西县",
      "id": "445222"
    }, {
      "name": "惠来县",
      "id": "445224"
    }, {
      "name": "普宁市",
      "id": "445281"
    }]
  }, {
    "name": "云浮市",
    "area": [{
      "name": "云城区",
      "id": "445302"
    }, {
      "name": "云安区",
      "id": "445303"
    }, {
      "name": "新兴县",
      "id": "445321"
    }, {
      "name": "郁南县",
      "id": "445322"
    }, {
      "name": "罗定市",
      "id": "445381"
    }]
  }]
}, {
  "name": "广西壮族自治区",
  "city": [{
    "name": "南宁市",
    "area": [{
      "name": "兴宁区",
      "id": "450102"
    }, {
      "name": "青秀区",
      "id": "450103"
    }, {
      "name": "江南区",
      "id": "450105"
    }, {
      "name": "西乡塘区",
      "id": "450107"
    }, {
      "name": "良庆区",
      "id": "450108"
    }, {
      "name": "邕宁区",
      "id": "450109"
    }, {
      "name": "武鸣县",
      "id": "450122"
    }, {
      "name": "隆安县",
      "id": "450123"
    }, {
      "name": "马山县",
      "id": "450124"
    }, {
      "name": "上林县",
      "id": "450125"
    }, {
      "name": "宾阳县",
      "id": "450126"
    }, {
      "name": "横县",
      "id": "450127"
    }, {
      "name": "埌东新区",
      "id": "450128"
    }]
  }, {
    "name": "柳州市",
    "area": [{
      "name": "城中区",
      "id": "450202"
    }, {
      "name": "鱼峰区",
      "id": "450203"
    }, {
      "name": "柳南区",
      "id": "450204"
    }, {
      "name": "柳北区",
      "id": "450205"
    }, {
      "name": "柳江县",
      "id": "450221"
    }, {
      "name": "柳城县",
      "id": "450222"
    }, {
      "name": "鹿寨县",
      "id": "450223"
    }, {
      "name": "融安县",
      "id": "450224"
    }, {
      "name": "融水苗族自治县",
      "id": "450225"
    }, {
      "name": "三江侗族自治县",
      "id": "450226"
    }, {
      "name": "柳东新区",
      "id": "450227"
    }]
  }, {
    "name": "桂林市",
    "area": [{
      "name": "秀峰区",
      "id": "450302"
    }, {
      "name": "叠彩区",
      "id": "450303"
    }, {
      "name": "象山区",
      "id": "450304"
    }, {
      "name": "七星区",
      "id": "450305"
    }, {
      "name": "雁山区",
      "id": "450311"
    }, {
      "name": "临桂区",
      "id": "450312"
    }, {
      "name": "阳朔县",
      "id": "450321"
    }, {
      "name": "灵川县",
      "id": "450323"
    }, {
      "name": "全州县",
      "id": "450324"
    }, {
      "name": "兴安县",
      "id": "450325"
    }, {
      "name": "永福县",
      "id": "450326"
    }, {
      "name": "灌阳县",
      "id": "450327"
    }, {
      "name": "龙胜各族自治县",
      "id": "450328"
    }, {
      "name": "资源县",
      "id": "450329"
    }, {
      "name": "平乐县",
      "id": "450330"
    }, {
      "name": "荔浦县",
      "id": "450331"
    }, {
      "name": "恭城瑶族自治县",
      "id": "450332"
    }]
  }, {
    "name": "梧州市",
    "area": [{
      "name": "万秀区",
      "id": "450403"
    }, {
      "name": "长洲区",
      "id": "450405"
    }, {
      "name": "龙圩区",
      "id": "450406"
    }, {
      "name": "苍梧县",
      "id": "450421"
    }, {
      "name": "藤县",
      "id": "450422"
    }, {
      "name": "蒙山县",
      "id": "450423"
    }, {
      "name": "岑溪市",
      "id": "450481"
    }]
  }, {
    "name": "北海市",
    "area": [{
      "name": "海城区",
      "id": "450502"
    }, {
      "name": "银海区",
      "id": "450503"
    }, {
      "name": "铁山港区",
      "id": "450512"
    }, {
      "name": "合浦县",
      "id": "450521"
    }]
  }, {
    "name": "防城港市",
    "area": [{
      "name": "港口区",
      "id": "450602"
    }, {
      "name": "防城区",
      "id": "450603"
    }, {
      "name": "上思县",
      "id": "450621"
    }, {
      "name": "东兴市",
      "id": "450681"
    }]
  }, {
    "name": "钦州市",
    "area": [{
      "name": "钦南区",
      "id": "450702"
    }, {
      "name": "钦北区",
      "id": "450703"
    }, {
      "name": "灵山县",
      "id": "450721"
    }, {
      "name": "浦北县",
      "id": "450722"
    }]
  }, {
    "name": "贵港市",
    "area": [{
      "name": "港北区",
      "id": "450802"
    }, {
      "name": "港南区",
      "id": "450803"
    }, {
      "name": "覃塘区",
      "id": "450804"
    }, {
      "name": "平南县",
      "id": "450821"
    }, {
      "name": "桂平市",
      "id": "450881"
    }]
  }, {
    "name": "玉林市",
    "area": [{
      "name": "玉州区",
      "id": "450902"
    }, {
      "name": "福绵区",
      "id": "450903"
    }, {
      "name": "玉东新区",
      "id": "450904"
    }, {
      "name": "容县",
      "id": "450921"
    }, {
      "name": "陆川县",
      "id": "450922"
    }, {
      "name": "博白县",
      "id": "450923"
    }, {
      "name": "兴业县",
      "id": "450924"
    }, {
      "name": "北流市",
      "id": "450981"
    }]
  }, {
    "name": "百色市",
    "area": [{
      "name": "右江区",
      "id": "451002"
    }, {
      "name": "田阳县",
      "id": "451021"
    }, {
      "name": "田东县",
      "id": "451022"
    }, {
      "name": "平果县",
      "id": "451023"
    }, {
      "name": "德保县",
      "id": "451024"
    }, {
      "name": "靖西县",
      "id": "451025"
    }, {
      "name": "那坡县",
      "id": "451026"
    }, {
      "name": "凌云县",
      "id": "451027"
    }, {
      "name": "乐业县",
      "id": "451028"
    }, {
      "name": "田林县",
      "id": "451029"
    }, {
      "name": "西林县",
      "id": "451030"
    }, {
      "name": "隆林各族自治县",
      "id": "451031"
    }]
  }, {
    "name": "贺州市",
    "area": [{
      "name": "八步区",
      "id": "451102"
    }, {
      "name": "昭平县",
      "id": "451121"
    }, {
      "name": "钟山县",
      "id": "451122"
    }, {
      "name": "富川瑶族自治县",
      "id": "451123"
    }, {
      "name": "平桂管理区",
      "id": "451124"
    }]
  }, {
    "name": "河池市",
    "area": [{
      "name": "金城江区",
      "id": "451202"
    }, {
      "name": "南丹县",
      "id": "451221"
    }, {
      "name": "天峨县",
      "id": "451222"
    }, {
      "name": "凤山县",
      "id": "451223"
    }, {
      "name": "东兰县",
      "id": "451224"
    }, {
      "name": "罗城仫佬族自治县",
      "id": "451225"
    }, {
      "name": "环江毛南族自治县",
      "id": "451226"
    }, {
      "name": "巴马瑶族自治县",
      "id": "451227"
    }, {
      "name": "都安瑶族自治县",
      "id": "451228"
    }, {
      "name": "大化瑶族自治县",
      "id": "451229"
    }, {
      "name": "宜州市",
      "id": "451281"
    }]
  }, {
    "name": "来宾市",
    "area": [{
      "name": "兴宾区",
      "id": "451302"
    }, {
      "name": "忻城县",
      "id": "451321"
    }, {
      "name": "象州县",
      "id": "451322"
    }, {
      "name": "武宣县",
      "id": "451323"
    }, {
      "name": "金秀瑶族自治县",
      "id": "451324"
    }, {
      "name": "合山市",
      "id": "451381"
    }]
  }, {
    "name": "崇左市",
    "area": [{
      "name": "江州区",
      "id": "451402"
    }, {
      "name": "扶绥县",
      "id": "451421"
    }, {
      "name": "宁明县",
      "id": "451422"
    }, {
      "name": "龙州县",
      "id": "451423"
    }, {
      "name": "大新县",
      "id": "451424"
    }, {
      "name": "天等县",
      "id": "451425"
    }, {
      "name": "凭祥市",
      "id": "451481"
    }]
  }]
}, {
  "name": "海南省",
  "city": [{
    "name": "海口市",
    "area": [{
      "name": "秀英区",
      "id": "460105"
    }, {
      "name": "龙华区",
      "id": "460106"
    }, {
      "name": "琼山区",
      "id": "460107"
    }, {
      "name": "美兰区",
      "id": "460108"
    }]
  }, {
    "name": "三亚市",
    "area": [{
      "name": "海棠区",
      "id": "460202"
    }, {
      "name": "吉阳区",
      "id": "460203"
    }, {
      "name": "天涯区",
      "id": "460204"
    }, {
      "name": "崖州区",
      "id": "460205"
    }]
  }, {
    "name": "三沙市",
    "area": [{
      "name": "西沙群岛",
      "id": "460321"
    }, {
      "name": "南沙群岛",
      "id": "460322"
    }, {
      "name": "中沙群岛",
      "id": "460323"
    }]
  }, {
    "name": "直辖县级",
    "area": [{
      "name": "五指山市",
      "id": "469001"
    }, {
      "name": "琼海市",
      "id": "469002"
    }, {
      "name": "儋州市",
      "id": "469003"
    }, {
      "name": "文昌市",
      "id": "469005"
    }, {
      "name": "万宁市",
      "id": "469006"
    }, {
      "name": "东方市",
      "id": "469007"
    }, {
      "name": "定安县",
      "id": "469021"
    }, {
      "name": "屯昌县",
      "id": "469022"
    }, {
      "name": "澄迈县",
      "id": "469023"
    }, {
      "name": "临高县",
      "id": "469024"
    }, {
      "name": "白沙黎族自治县",
      "id": "469025"
    }, {
      "name": "昌江黎族自治县",
      "id": "469026"
    }, {
      "name": "乐东黎族自治县",
      "id": "469027"
    }, {
      "name": "陵水黎族自治县",
      "id": "469028"
    }, {
      "name": "保亭黎族苗族自治县",
      "id": "469029"
    }, {
      "name": "琼中黎族苗族自治县",
      "id": "469030"
    }]
  }]
}, {
  "name": "重庆",
  "city": [{
    "name": "重庆市",
    "area": [{
      "name": "万州区",
      "id": "500101"
    }, {
      "name": "涪陵区",
      "id": "500102"
    }, {
      "name": "渝中区",
      "id": "500103"
    }, {
      "name": "大渡口区",
      "id": "500104"
    }, {
      "name": "江北区",
      "id": "500105"
    }, {
      "name": "沙坪坝区",
      "id": "500106"
    }, {
      "name": "九龙坡区",
      "id": "500107"
    }, {
      "name": "南岸区",
      "id": "500108"
    }, {
      "name": "北碚区",
      "id": "500109"
    }, {
      "name": "綦江区",
      "id": "500110"
    }, {
      "name": "大足区",
      "id": "500111"
    }, {
      "name": "渝北区",
      "id": "500112"
    }, {
      "name": "巴南区",
      "id": "500113"
    }, {
      "name": "黔江区",
      "id": "500114"
    }, {
      "name": "长寿区",
      "id": "500115"
    }, {
      "name": "江津区",
      "id": "500116"
    }, {
      "name": "合川区",
      "id": "500117"
    }, {
      "name": "永川区",
      "id": "500118"
    }, {
      "name": "南川区",
      "id": "500119"
    }, {
      "name": "璧山区",
      "id": "500120"
    }, {
      "name": "铜梁区",
      "id": "500151"
    }, {
      "name": "潼南县",
      "id": "500223"
    }, {
      "name": "荣昌县",
      "id": "500226"
    }, {
      "name": "梁平县",
      "id": "500228"
    }, {
      "name": "城口县",
      "id": "500229"
    }, {
      "name": "丰都县",
      "id": "500230"
    }, {
      "name": "垫江县",
      "id": "500231"
    }, {
      "name": "武隆县",
      "id": "500232"
    }, {
      "name": "忠县",
      "id": "500233"
    }, {
      "name": "开县",
      "id": "500234"
    }, {
      "name": "云阳县",
      "id": "500235"
    }, {
      "name": "奉节县",
      "id": "500236"
    }, {
      "name": "巫山县",
      "id": "500237"
    }, {
      "name": "巫溪县",
      "id": "500238"
    }, {
      "name": "石柱土家族自治县",
      "id": "500240"
    }, {
      "name": "秀山土家族苗族自治县",
      "id": "500241"
    }, {
      "name": "酉阳土家族苗族自治县",
      "id": "500242"
    }, {
      "name": "彭水苗族土家族自治县",
      "id": "500243"
    }]
  }, {
    "name": "两江新区",
    "area": [{
      "name": "北部新区",
      "id": "500301"
    }, {
      "name": "保税港区",
      "id": "500302"
    }, {
      "name": "工业园区",
      "id": "500303"
    }]
  }]
}, {
  "name": "四川省",
  "city": [{
    "name": "成都市",
    "area": [{
      "name": "锦江区",
      "id": "510104"
    }, {
      "name": "青羊区",
      "id": "510105"
    }, {
      "name": "金牛区",
      "id": "510106"
    }, {
      "name": "武侯区",
      "id": "510107"
    }, {
      "name": "成华区",
      "id": "510108"
    }, {
      "name": "龙泉驿区",
      "id": "510112"
    }, {
      "name": "青白江区",
      "id": "510113"
    }, {
      "name": "新都区",
      "id": "510114"
    }, {
      "name": "温江区",
      "id": "510115"
    }, {
      "name": "金堂县",
      "id": "510121"
    }, {
      "name": "双流县",
      "id": "510122"
    }, {
      "name": "郫县",
      "id": "510124"
    }, {
      "name": "大邑县",
      "id": "510129"
    }, {
      "name": "蒲江县",
      "id": "510131"
    }, {
      "name": "新津县",
      "id": "510132"
    }, {
      "name": "都江堰市",
      "id": "510181"
    }, {
      "name": "彭州市",
      "id": "510182"
    }, {
      "name": "邛崃市",
      "id": "510183"
    }, {
      "name": "崇州市",
      "id": "510184"
    }]
  }, {
    "name": "自贡市",
    "area": [{
      "name": "自流井区",
      "id": "510302"
    }, {
      "name": "贡井区",
      "id": "510303"
    }, {
      "name": "大安区",
      "id": "510304"
    }, {
      "name": "沿滩区",
      "id": "510311"
    }, {
      "name": "荣县",
      "id": "510321"
    }, {
      "name": "富顺县",
      "id": "510322"
    }]
  }, {
    "name": "攀枝花市",
    "area": [{
      "name": "东区",
      "id": "510402"
    }, {
      "name": "西区",
      "id": "510403"
    }, {
      "name": "仁和区",
      "id": "510411"
    }, {
      "name": "米易县",
      "id": "510421"
    }, {
      "name": "盐边县",
      "id": "510422"
    }]
  }, {
    "name": "泸州市",
    "area": [{
      "name": "江阳区",
      "id": "510502"
    }, {
      "name": "纳溪区",
      "id": "510503"
    }, {
      "name": "龙马潭区",
      "id": "510504"
    }, {
      "name": "泸县",
      "id": "510521"
    }, {
      "name": "合江县",
      "id": "510522"
    }, {
      "name": "叙永县",
      "id": "510524"
    }, {
      "name": "古蔺县",
      "id": "510525"
    }]
  }, {
    "name": "德阳市",
    "area": [{
      "name": "旌阳区",
      "id": "510603"
    }, {
      "name": "中江县",
      "id": "510623"
    }, {
      "name": "罗江县",
      "id": "510626"
    }, {
      "name": "广汉市",
      "id": "510681"
    }, {
      "name": "什邡市",
      "id": "510682"
    }, {
      "name": "绵竹市",
      "id": "510683"
    }]
  }, {
    "name": "绵阳市",
    "area": [{
      "name": "涪城区",
      "id": "510703"
    }, {
      "name": "游仙区",
      "id": "510704"
    }, {
      "name": "三台县",
      "id": "510722"
    }, {
      "name": "盐亭县",
      "id": "510723"
    }, {
      "name": "安县",
      "id": "510724"
    }, {
      "name": "梓潼县",
      "id": "510725"
    }, {
      "name": "北川羌族自治县",
      "id": "510726"
    }, {
      "name": "平武县",
      "id": "510727"
    }, {
      "name": "江油市",
      "id": "510781"
    }]
  }, {
    "name": "广元市",
    "area": [{
      "name": "利州区",
      "id": "510802"
    }, {
      "name": "昭化区",
      "id": "510811"
    }, {
      "name": "朝天区",
      "id": "510812"
    }, {
      "name": "旺苍县",
      "id": "510821"
    }, {
      "name": "青川县",
      "id": "510822"
    }, {
      "name": "剑阁县",
      "id": "510823"
    }, {
      "name": "苍溪县",
      "id": "510824"
    }]
  }, {
    "name": "遂宁市",
    "area": [{
      "name": "船山区",
      "id": "510903"
    }, {
      "name": "安居区",
      "id": "510904"
    }, {
      "name": "蓬溪县",
      "id": "510921"
    }, {
      "name": "射洪县",
      "id": "510922"
    }, {
      "name": "大英县",
      "id": "510923"
    }]
  }, {
    "name": "内江市",
    "area": [{
      "name": "市中区",
      "id": "511002"
    }, {
      "name": "东兴区",
      "id": "511011"
    }, {
      "name": "威远县",
      "id": "511024"
    }, {
      "name": "资中县",
      "id": "511025"
    }, {
      "name": "隆昌县",
      "id": "511028"
    }]
  }, {
    "name": "乐山市",
    "area": [{
      "name": "市中区",
      "id": "511102"
    }, {
      "name": "沙湾区",
      "id": "511111"
    }, {
      "name": "五通桥区",
      "id": "511112"
    }, {
      "name": "金口河区",
      "id": "511113"
    }, {
      "name": "犍为县",
      "id": "511123"
    }, {
      "name": "井研县",
      "id": "511124"
    }, {
      "name": "夹江县",
      "id": "511126"
    }, {
      "name": "沐川县",
      "id": "511129"
    }, {
      "name": "峨边彝族自治县",
      "id": "511132"
    }, {
      "name": "马边彝族自治县",
      "id": "511133"
    }, {
      "name": "峨眉山市",
      "id": "511181"
    }]
  }, {
    "name": "南充市",
    "area": [{
      "name": "顺庆区",
      "id": "511302"
    }, {
      "name": "高坪区",
      "id": "511303"
    }, {
      "name": "嘉陵区",
      "id": "511304"
    }, {
      "name": "南部县",
      "id": "511321"
    }, {
      "name": "营山县",
      "id": "511322"
    }, {
      "name": "蓬安县",
      "id": "511323"
    }, {
      "name": "仪陇县",
      "id": "511324"
    }, {
      "name": "西充县",
      "id": "511325"
    }, {
      "name": "阆中市",
      "id": "511381"
    }]
  }, {
    "name": "眉山市",
    "area": [{
      "name": "东坡区",
      "id": "511402"
    }, {
      "name": "彭山区",
      "id": "511403"
    }, {
      "name": "仁寿县",
      "id": "511421"
    }, {
      "name": "洪雅县",
      "id": "511423"
    }, {
      "name": "丹棱县",
      "id": "511424"
    }, {
      "name": "青神县",
      "id": "511425"
    }]
  }, {
    "name": "宜宾市",
    "area": [{
      "name": "翠屏区",
      "id": "511502"
    }, {
      "name": "南溪区",
      "id": "511503"
    }, {
      "name": "宜宾县",
      "id": "511521"
    }, {
      "name": "江安县",
      "id": "511523"
    }, {
      "name": "长宁县",
      "id": "511524"
    }, {
      "name": "高县",
      "id": "511525"
    }, {
      "name": "珙县",
      "id": "511526"
    }, {
      "name": "筠连县",
      "id": "511527"
    }, {
      "name": "兴文县",
      "id": "511528"
    }, {
      "name": "屏山县",
      "id": "511529"
    }]
  }, {
    "name": "广安市",
    "area": [{
      "name": "广安区",
      "id": "511602"
    }, {
      "name": "前锋区",
      "id": "511603"
    }, {
      "name": "岳池县",
      "id": "511621"
    }, {
      "name": "武胜县",
      "id": "511622"
    }, {
      "name": "邻水县",
      "id": "511623"
    }, {
      "name": "华蓥市",
      "id": "511681"
    }]
  }, {
    "name": "达州市",
    "area": [{
      "name": "通川区",
      "id": "511702"
    }, {
      "name": "达川区",
      "id": "511703"
    }, {
      "name": "宣汉县",
      "id": "511722"
    }, {
      "name": "开江县",
      "id": "511723"
    }, {
      "name": "大竹县",
      "id": "511724"
    }, {
      "name": "渠县",
      "id": "511725"
    }, {
      "name": "万源市",
      "id": "511781"
    }]
  }, {
    "name": "雅安市",
    "area": [{
      "name": "雨城区",
      "id": "511802"
    }, {
      "name": "名山区",
      "id": "511803"
    }, {
      "name": "荥经县",
      "id": "511822"
    }, {
      "name": "汉源县",
      "id": "511823"
    }, {
      "name": "石棉县",
      "id": "511824"
    }, {
      "name": "天全县",
      "id": "511825"
    }, {
      "name": "芦山县",
      "id": "511826"
    }, {
      "name": "宝兴县",
      "id": "511827"
    }]
  }, {
    "name": "巴中市",
    "area": [{
      "name": "巴州区",
      "id": "511902"
    }, {
      "name": "恩阳区",
      "id": "511903"
    }, {
      "name": "通江县",
      "id": "511921"
    }, {
      "name": "南江县",
      "id": "511922"
    }, {
      "name": "平昌县",
      "id": "511923"
    }]
  }, {
    "name": "资阳市",
    "area": [{
      "name": "雁江区",
      "id": "512002"
    }, {
      "name": "安岳县",
      "id": "512021"
    }, {
      "name": "乐至县",
      "id": "512022"
    }, {
      "name": "简阳市",
      "id": "512081"
    }]
  }, {
    "name": "阿坝藏族羌族自治州",
    "area": [{
      "name": "汶川县",
      "id": "513221"
    }, {
      "name": "理县",
      "id": "513222"
    }, {
      "name": "茂县",
      "id": "513223"
    }, {
      "name": "松潘县",
      "id": "513224"
    }, {
      "name": "九寨沟县",
      "id": "513225"
    }, {
      "name": "金川县",
      "id": "513226"
    }, {
      "name": "小金县",
      "id": "513227"
    }, {
      "name": "黑水县",
      "id": "513228"
    }, {
      "name": "马尔康县",
      "id": "513229"
    }, {
      "name": "壤塘县",
      "id": "513230"
    }, {
      "name": "阿坝县",
      "id": "513231"
    }, {
      "name": "若尔盖县",
      "id": "513232"
    }, {
      "name": "红原县",
      "id": "513233"
    }]
  }, {
    "name": "甘孜藏族自治州",
    "area": [{
      "name": "康定县",
      "id": "513321"
    }, {
      "name": "泸定县",
      "id": "513322"
    }, {
      "name": "丹巴县",
      "id": "513323"
    }, {
      "name": "九龙县",
      "id": "513324"
    }, {
      "name": "雅江县",
      "id": "513325"
    }, {
      "name": "道孚县",
      "id": "513326"
    }, {
      "name": "炉霍县",
      "id": "513327"
    }, {
      "name": "甘孜县",
      "id": "513328"
    }, {
      "name": "新龙县",
      "id": "513329"
    }, {
      "name": "德格县",
      "id": "513330"
    }, {
      "name": "白玉县",
      "id": "513331"
    }, {
      "name": "石渠县",
      "id": "513332"
    }, {
      "name": "色达县",
      "id": "513333"
    }, {
      "name": "理塘县",
      "id": "513334"
    }, {
      "name": "巴塘县",
      "id": "513335"
    }, {
      "name": "乡城县",
      "id": "513336"
    }, {
      "name": "稻城县",
      "id": "513337"
    }, {
      "name": "得荣县",
      "id": "513338"
    }]
  }, {
    "name": "凉山彝族自治州",
    "area": [{
      "name": "西昌市",
      "id": "513401"
    }, {
      "name": "木里藏族自治县",
      "id": "513422"
    }, {
      "name": "盐源县",
      "id": "513423"
    }, {
      "name": "德昌县",
      "id": "513424"
    }, {
      "name": "会理县",
      "id": "513425"
    }, {
      "name": "会东县",
      "id": "513426"
    }, {
      "name": "宁南县",
      "id": "513427"
    }, {
      "name": "普格县",
      "id": "513428"
    }, {
      "name": "布拖县",
      "id": "513429"
    }, {
      "name": "金阳县",
      "id": "513430"
    }, {
      "name": "昭觉县",
      "id": "513431"
    }, {
      "name": "喜德县",
      "id": "513432"
    }, {
      "name": "冕宁县",
      "id": "513433"
    }, {
      "name": "越西县",
      "id": "513434"
    }, {
      "name": "甘洛县",
      "id": "513435"
    }, {
      "name": "美姑县",
      "id": "513436"
    }, {
      "name": "雷波县",
      "id": "513437"
    }]
  }]
}, {
  "name": "贵州省",
  "city": [{
    "name": "贵阳市",
    "area": [{
      "name": "南明区",
      "id": "520102"
    }, {
      "name": "云岩区",
      "id": "520103"
    }, {
      "name": "花溪区",
      "id": "520111"
    }, {
      "name": "乌当区",
      "id": "520112"
    }, {
      "name": "白云区",
      "id": "520113"
    }, {
      "name": "观山湖区",
      "id": "520115"
    }, {
      "name": "开阳县",
      "id": "520121"
    }, {
      "name": "息烽县",
      "id": "520122"
    }, {
      "name": "修文县",
      "id": "520123"
    }, {
      "name": "清镇市",
      "id": "520181"
    }]
  }, {
    "name": "六盘水市",
    "area": [{
      "name": "钟山区",
      "id": "520201"
    }, {
      "name": "六枝特区",
      "id": "520203"
    }, {
      "name": "水城县",
      "id": "520221"
    }, {
      "name": "盘县",
      "id": "520222"
    }]
  }, {
    "name": "遵义市",
    "area": [{
      "name": "红花岗区",
      "id": "520302"
    }, {
      "name": "汇川区",
      "id": "520303"
    }, {
      "name": "遵义县",
      "id": "520321"
    }, {
      "name": "桐梓县",
      "id": "520322"
    }, {
      "name": "绥阳县",
      "id": "520323"
    }, {
      "name": "正安县",
      "id": "520324"
    }, {
      "name": "道真仡佬族苗族自治县",
      "id": "520325"
    }, {
      "name": "务川仡佬族苗族自治县",
      "id": "520326"
    }, {
      "name": "凤冈县",
      "id": "520327"
    }, {
      "name": "湄潭县",
      "id": "520328"
    }, {
      "name": "余庆县",
      "id": "520329"
    }, {
      "name": "习水县",
      "id": "520330"
    }, {
      "name": "赤水市",
      "id": "520381"
    }, {
      "name": "仁怀市",
      "id": "520382"
    }]
  }, {
    "name": "安顺市",
    "area": [{
      "name": "西秀区",
      "id": "520402"
    }, {
      "name": "平坝区",
      "id": "520421"
    }, {
      "name": "普定县",
      "id": "520422"
    }, {
      "name": "镇宁布依族苗族自治县",
      "id": "520423"
    }, {
      "name": "关岭布依族苗族自治县",
      "id": "520424"
    }, {
      "name": "紫云苗族布依族自治县",
      "id": "520425"
    }]
  }, {
    "name": "毕节市",
    "area": [{
      "name": "七星关区",
      "id": "520502"
    }, {
      "name": "大方县",
      "id": "520521"
    }, {
      "name": "黔西县",
      "id": "520522"
    }, {
      "name": "金沙县",
      "id": "520523"
    }, {
      "name": "织金县",
      "id": "520524"
    }, {
      "name": "纳雍县",
      "id": "520525"
    }, {
      "name": "威宁彝族回族苗族自治县",
      "id": "520526"
    }, {
      "name": "赫章县",
      "id": "520527"
    }]
  }, {
    "name": "铜仁市",
    "area": [{
      "name": "碧江区",
      "id": "520602"
    }, {
      "name": "万山区",
      "id": "520603"
    }, {
      "name": "江口县",
      "id": "520621"
    }, {
      "name": "玉屏侗族自治县",
      "id": "520622"
    }, {
      "name": "石阡县",
      "id": "520623"
    }, {
      "name": "思南县",
      "id": "520624"
    }, {
      "name": "印江土家族苗族自治县",
      "id": "520625"
    }, {
      "name": "德江县",
      "id": "520626"
    }, {
      "name": "沿河土家族自治县",
      "id": "520627"
    }, {
      "name": "松桃苗族自治县",
      "id": "520628"
    }]
  }, {
    "name": "黔西南布依族苗族自治州",
    "area": [{
      "name": "兴义市 ",
      "id": "522301"
    }, {
      "name": "兴仁县",
      "id": "522322"
    }, {
      "name": "普安县",
      "id": "522323"
    }, {
      "name": "晴隆县",
      "id": "522324"
    }, {
      "name": "贞丰县",
      "id": "522325"
    }, {
      "name": "望谟县",
      "id": "522326"
    }, {
      "name": "册亨县",
      "id": "522327"
    }, {
      "name": "安龙县",
      "id": "522328"
    }]
  }, {
    "name": "黔东南苗族侗族自治州",
    "area": [{
      "name": "凯里市",
      "id": "522601"
    }, {
      "name": "黄平县",
      "id": "522622"
    }, {
      "name": "施秉县",
      "id": "522623"
    }, {
      "name": "三穗县",
      "id": "522624"
    }, {
      "name": "镇远县",
      "id": "522625"
    }, {
      "name": "岑巩县",
      "id": "522626"
    }, {
      "name": "天柱县",
      "id": "522627"
    }, {
      "name": "锦屏县",
      "id": "522628"
    }, {
      "name": "剑河县",
      "id": "522629"
    }, {
      "name": "台江县",
      "id": "522630"
    }, {
      "name": "黎平县",
      "id": "522631"
    }, {
      "name": "榕江县",
      "id": "522632"
    }, {
      "name": "从江县",
      "id": "522633"
    }, {
      "name": "雷山县",
      "id": "522634"
    }, {
      "name": "麻江县",
      "id": "522635"
    }, {
      "name": "丹寨县",
      "id": "522636"
    }]
  }, {
    "name": "黔南布依族苗族自治州",
    "area": [{
      "name": "都匀市",
      "id": "522701"
    }, {
      "name": "福泉市",
      "id": "522702"
    }, {
      "name": "荔波县",
      "id": "522722"
    }, {
      "name": "贵定县",
      "id": "522723"
    }, {
      "name": "瓮安县",
      "id": "522725"
    }, {
      "name": "独山县",
      "id": "522726"
    }, {
      "name": "平塘县",
      "id": "522727"
    }, {
      "name": "罗甸县",
      "id": "522728"
    }, {
      "name": "长顺县",
      "id": "522729"
    }, {
      "name": "龙里县",
      "id": "522730"
    }, {
      "name": "惠水县",
      "id": "522731"
    }, {
      "name": "三都水族自治县",
      "id": "522732"
    }]
  }]
}, {
  "name": "云南省",
  "city": [{
    "name": "昆明市",
    "area": [{
      "name": "五华区",
      "id": "530102"
    }, {
      "name": "盘龙区",
      "id": "530103"
    }, {
      "name": "官渡区",
      "id": "530111"
    }, {
      "name": "西山区",
      "id": "530112"
    }, {
      "name": "东川区",
      "id": "530113"
    }, {
      "name": "呈贡区",
      "id": "530114"
    }, {
      "name": "晋宁县",
      "id": "530122"
    }, {
      "name": "富民县",
      "id": "530124"
    }, {
      "name": "宜良县",
      "id": "530125"
    }, {
      "name": "石林彝族自治县",
      "id": "530126"
    }, {
      "name": "嵩明县",
      "id": "530127"
    }, {
      "name": "禄劝彝族苗族自治县",
      "id": "530128"
    }, {
      "name": "寻甸回族彝族自治县 ",
      "id": "530129"
    }, {
      "name": "安宁市",
      "id": "530181"
    }]
  }, {
    "name": "曲靖市",
    "area": [{
      "name": "麒麟区",
      "id": "530302"
    }, {
      "name": "马龙县",
      "id": "530321"
    }, {
      "name": "陆良县",
      "id": "530322"
    }, {
      "name": "师宗县",
      "id": "530323"
    }, {
      "name": "罗平县",
      "id": "530324"
    }, {
      "name": "富源县",
      "id": "530325"
    }, {
      "name": "会泽县",
      "id": "530326"
    }, {
      "name": "沾益县",
      "id": "530328"
    }, {
      "name": "宣威市",
      "id": "530381"
    }]
  }, {
    "name": "玉溪市",
    "area": [{
      "name": "红塔区",
      "id": "530402"
    }, {
      "name": "江川县",
      "id": "530421"
    }, {
      "name": "澄江县",
      "id": "530422"
    }, {
      "name": "通海县",
      "id": "530423"
    }, {
      "name": "华宁县",
      "id": "530424"
    }, {
      "name": "易门县",
      "id": "530425"
    }, {
      "name": "峨山彝族自治县",
      "id": "530426"
    }, {
      "name": "新平彝族傣族自治县",
      "id": "530427"
    }, {
      "name": "元江哈尼族彝族傣族自治县",
      "id": "530428"
    }]
  }, {
    "name": "保山市",
    "area": [{
      "name": "隆阳区",
      "id": "530502"
    }, {
      "name": "施甸县",
      "id": "530521"
    }, {
      "name": "腾冲县",
      "id": "530522"
    }, {
      "name": "龙陵县",
      "id": "530523"
    }, {
      "name": "昌宁县",
      "id": "530524"
    }]
  }, {
    "name": "昭通市",
    "area": [{
      "name": "昭阳区",
      "id": "530602"
    }, {
      "name": "鲁甸县",
      "id": "530621"
    }, {
      "name": "巧家县",
      "id": "530622"
    }, {
      "name": "盐津县",
      "id": "530623"
    }, {
      "name": "大关县",
      "id": "530624"
    }, {
      "name": "永善县",
      "id": "530625"
    }, {
      "name": "绥江县",
      "id": "530626"
    }, {
      "name": "镇雄县",
      "id": "530627"
    }, {
      "name": "彝良县",
      "id": "530628"
    }, {
      "name": "威信县",
      "id": "530629"
    }, {
      "name": "水富县",
      "id": "530630"
    }]
  }, {
    "name": "丽江市",
    "area": [{
      "name": "古城区",
      "id": "530702"
    }, {
      "name": "玉龙纳西族自治县",
      "id": "530721"
    }, {
      "name": "永胜县",
      "id": "530722"
    }, {
      "name": "华坪县",
      "id": "530723"
    }, {
      "name": "宁蒗彝族自治县",
      "id": "530724"
    }]
  }, {
    "name": "普洱市",
    "area": [{
      "name": "思茅区",
      "id": "530802"
    }, {
      "name": "宁洱哈尼族彝族自治县",
      "id": "530821"
    }, {
      "name": "墨江哈尼族自治县",
      "id": "530822"
    }, {
      "name": "景东彝族自治县",
      "id": "530823"
    }, {
      "name": "景谷傣族彝族自治县",
      "id": "530824"
    }, {
      "name": "镇沅彝族哈尼族拉祜族自治县",
      "id": "530825"
    }, {
      "name": "江城哈尼族彝族自治县",
      "id": "530826"
    }, {
      "name": "孟连傣族拉祜族佤族自治县",
      "id": "530827"
    }, {
      "name": "澜沧拉祜族自治县",
      "id": "530828"
    }, {
      "name": "西盟佤族自治县",
      "id": "530829"
    }]
  }, {
    "name": "临沧市",
    "area": [{
      "name": "临翔区",
      "id": "530902"
    }, {
      "name": "凤庆县",
      "id": "530921"
    }, {
      "name": "云县",
      "id": "530922"
    }, {
      "name": "永德县",
      "id": "530923"
    }, {
      "name": "镇康县",
      "id": "530924"
    }, {
      "name": "双江拉祜族佤族布朗族傣族自治县",
      "id": "530925"
    }, {
      "name": "耿马傣族佤族自治县",
      "id": "530926"
    }, {
      "name": "沧源佤族自治县",
      "id": "530927"
    }]
  }, {
    "name": "楚雄彝族自治州",
    "area": [{
      "name": "楚雄市",
      "id": "532301"
    }, {
      "name": "双柏县",
      "id": "532322"
    }, {
      "name": "牟定县",
      "id": "532323"
    }, {
      "name": "南华县",
      "id": "532324"
    }, {
      "name": "姚安县",
      "id": "532325"
    }, {
      "name": "大姚县",
      "id": "532326"
    }, {
      "name": "永仁县",
      "id": "532327"
    }, {
      "name": "元谋县",
      "id": "532328"
    }, {
      "name": "武定县",
      "id": "532329"
    }, {
      "name": "禄丰县",
      "id": "532331"
    }]
  }, {
    "name": "红河哈尼族彝族自治州",
    "area": [{
      "name": "个旧市",
      "id": "532501"
    }, {
      "name": "开远市",
      "id": "532502"
    }, {
      "name": "蒙自市",
      "id": "532503"
    }, {
      "name": "弥勒市",
      "id": "532504"
    }, {
      "name": "屏边苗族自治县",
      "id": "532523"
    }, {
      "name": "建水县",
      "id": "532524"
    }, {
      "name": "石屏县",
      "id": "532525"
    }, {
      "name": "泸西县",
      "id": "532527"
    }, {
      "name": "元阳县",
      "id": "532528"
    }, {
      "name": "红河县",
      "id": "532529"
    }, {
      "name": "金平苗族瑶族傣族自治县",
      "id": "532530"
    }, {
      "name": "绿春县",
      "id": "532531"
    }, {
      "name": "河口瑶族自治县",
      "id": "532532"
    }]
  }, {
    "name": "文山壮族苗族自治州",
    "area": [{
      "name": "文山市",
      "id": "532601"
    }, {
      "name": "砚山县",
      "id": "532622"
    }, {
      "name": "西畴县",
      "id": "532623"
    }, {
      "name": "麻栗坡县",
      "id": "532624"
    }, {
      "name": "马关县",
      "id": "532625"
    }, {
      "name": "丘北县",
      "id": "532626"
    }, {
      "name": "广南县",
      "id": "532627"
    }, {
      "name": "富宁县",
      "id": "532628"
    }]
  }, {
    "name": "西双版纳傣族自治州",
    "area": [{
      "name": "景洪市",
      "id": "532801"
    }, {
      "name": "勐海县",
      "id": "532822"
    }, {
      "name": "勐腊县",
      "id": "532823"
    }]
  }, {
    "name": "大理白族自治州",
    "area": [{
      "name": "大理市",
      "id": "532901"
    }, {
      "name": "漾濞彝族自治县",
      "id": "532922"
    }, {
      "name": "祥云县",
      "id": "532923"
    }, {
      "name": "宾川县",
      "id": "532924"
    }, {
      "name": "弥渡县",
      "id": "532925"
    }, {
      "name": "南涧彝族自治县",
      "id": "532926"
    }, {
      "name": "巍山彝族回族自治县",
      "id": "532927"
    }, {
      "name": "永平县",
      "id": "532928"
    }, {
      "name": "云龙县",
      "id": "532929"
    }, {
      "name": "洱源县",
      "id": "532930"
    }, {
      "name": "剑川县",
      "id": "532931"
    }, {
      "name": "鹤庆县",
      "id": "532932"
    }]
  }, {
    "name": "德宏傣族景颇族自治州",
    "area": [{
      "name": "瑞丽市",
      "id": "533102"
    }, {
      "name": "芒市",
      "id": "533103"
    }, {
      "name": "梁河县",
      "id": "533122"
    }, {
      "name": "盈江县",
      "id": "533123"
    }, {
      "name": "陇川县",
      "id": "533124"
    }]
  }, {
    "name": "怒江傈僳族自治州",
    "area": [{
      "name": "泸水县",
      "id": "533321"
    }, {
      "name": "福贡县",
      "id": "533323"
    }, {
      "name": "贡山独龙族怒族自治县",
      "id": "533324"
    }, {
      "name": "兰坪白族普米族自治县",
      "id": "533325"
    }]
  }, {
    "name": "迪庆藏族自治州",
    "area": [{
      "name": "香格里拉市",
      "id": "533421"
    }, {
      "name": "德钦县",
      "id": "533422"
    }, {
      "name": "维西傈僳族自治县",
      "id": "533423"
    }]
  }]
}, {
  "name": "西藏自治区",
  "city": [{
    "name": "拉萨市",
    "area": [{
      "name": "城关区",
      "id": "540102"
    }, {
      "name": "林周县",
      "id": "540121"
    }, {
      "name": "当雄县",
      "id": "540122"
    }, {
      "name": "尼木县",
      "id": "540123"
    }, {
      "name": "曲水县",
      "id": "540124"
    }, {
      "name": "堆龙德庆县",
      "id": "540125"
    }, {
      "name": "达孜县",
      "id": "540126"
    }, {
      "name": "墨竹工卡县",
      "id": "540127"
    }]
  }, {
    "name": "日喀则市",
    "area": [{
      "name": "桑珠孜区",
      "id": "540202"
    }, {
      "name": "南木林县",
      "id": "540221"
    }, {
      "name": "江孜县",
      "id": "540222"
    }, {
      "name": "定日县",
      "id": "540223"
    }, {
      "name": "萨迦县",
      "id": "540224"
    }, {
      "name": "拉孜县",
      "id": "540225"
    }, {
      "name": "昂仁县",
      "id": "540226"
    }, {
      "name": "谢通门县",
      "id": "540227"
    }, {
      "name": "白朗县",
      "id": "540228"
    }, {
      "name": "仁布县",
      "id": "540229"
    }, {
      "name": "康马县",
      "id": "540230"
    }, {
      "name": "定结县",
      "id": "540231"
    }, {
      "name": "仲巴县",
      "id": "540232"
    }, {
      "name": "亚东县",
      "id": "540233"
    }, {
      "name": "吉隆县",
      "id": "540234"
    }, {
      "name": "聂拉木县",
      "id": "540235"
    }, {
      "name": "萨嘎县",
      "id": "540236"
    }, {
      "name": "岗巴县",
      "id": "540237"
    }]
  }, {
    "name": "昌都市",
    "area": [{
      "name": "卡若区",
      "id": "540302"
    }, {
      "name": "江达县",
      "id": "540321"
    }, {
      "name": "贡觉县",
      "id": "540322"
    }, {
      "name": "类乌齐县",
      "id": "540323"
    }, {
      "name": "丁青县",
      "id": "540324"
    }, {
      "name": "察雅县",
      "id": "540325"
    }, {
      "name": "八宿县",
      "id": "540326"
    }, {
      "name": "左贡县",
      "id": "540327"
    }, {
      "name": "芒康县",
      "id": "540328"
    }, {
      "name": "洛隆县",
      "id": "540329"
    }, {
      "name": "边坝县",
      "id": "540330"
    }]
  }, {
    "name": "山南地区",
    "area": [{
      "name": "乃东县",
      "id": "542221"
    }, {
      "name": "扎囊县",
      "id": "542222"
    }, {
      "name": "贡嘎县",
      "id": "542223"
    }, {
      "name": "桑日县",
      "id": "542224"
    }, {
      "name": "琼结县",
      "id": "542225"
    }, {
      "name": "曲松县",
      "id": "542226"
    }, {
      "name": "措美县",
      "id": "542227"
    }, {
      "name": "洛扎县",
      "id": "542228"
    }, {
      "name": "加查县",
      "id": "542229"
    }, {
      "name": "隆子县",
      "id": "542231"
    }, {
      "name": "错那县",
      "id": "542232"
    }, {
      "name": "浪卡子县",
      "id": "542233"
    }]
  }, {
    "name": "那曲地区",
    "area": [{
      "name": "那曲县",
      "id": "542421"
    }, {
      "name": "嘉黎县",
      "id": "542422"
    }, {
      "name": "比如县",
      "id": "542423"
    }, {
      "name": "聂荣县",
      "id": "542424"
    }, {
      "name": "安多县",
      "id": "542425"
    }, {
      "name": "申扎县",
      "id": "542426"
    }, {
      "name": "索县",
      "id": "542427"
    }, {
      "name": "班戈县",
      "id": "542428"
    }, {
      "name": "巴青县",
      "id": "542429"
    }, {
      "name": "尼玛县",
      "id": "542430"
    }, {
      "name": "双湖县",
      "id": "542431"
    }]
  }, {
    "name": "阿里地区",
    "area": [{
      "name": "普兰县",
      "id": "542521"
    }, {
      "name": "札达县",
      "id": "542522"
    }, {
      "name": "噶尔县",
      "id": "542523"
    }, {
      "name": "日土县",
      "id": "542524"
    }, {
      "name": "革吉县",
      "id": "542525"
    }, {
      "name": "改则县",
      "id": "542526"
    }, {
      "name": "措勤县",
      "id": "542527"
    }]
  }, {
    "name": "林芝地区",
    "area": [{
      "name": "林芝县",
      "id": "542621"
    }, {
      "name": "工布江达县",
      "id": "542622"
    }, {
      "name": "米林县",
      "id": "542623"
    }, {
      "name": "墨脱县",
      "id": "542624"
    }, {
      "name": "波密县",
      "id": "542625"
    }, {
      "name": "察隅县",
      "id": "542626"
    }, {
      "name": "朗县",
      "id": "542627"
    }]
  }]
}, {
  "name": "陕西省",
  "city": [{
    "name": "西安市",
    "area": [{
      "name": "新城区",
      "id": "610102"
    }, {
      "name": "碑林区",
      "id": "610103"
    }, {
      "name": "莲湖区",
      "id": "610104"
    }, {
      "name": "灞桥区",
      "id": "610111"
    }, {
      "name": "未央区",
      "id": "610112"
    }, {
      "name": "雁塔区",
      "id": "610113"
    }, {
      "name": "阎良区",
      "id": "610114"
    }, {
      "name": "临潼区",
      "id": "610115"
    }, {
      "name": "长安区",
      "id": "610116"
    }, {
      "name": "蓝田县",
      "id": "610122"
    }, {
      "name": "周至县",
      "id": "610124"
    }, {
      "name": "户县",
      "id": "610125"
    }, {
      "name": "高陵区",
      "id": "610126"
    }]
  }, {
    "name": "铜川市",
    "area": [{
      "name": "王益区",
      "id": "610202"
    }, {
      "name": "印台区",
      "id": "610203"
    }, {
      "name": "耀州区",
      "id": "610204"
    }, {
      "name": "宜君县",
      "id": "610222"
    }]
  }, {
    "name": "宝鸡市",
    "area": [{
      "name": "渭滨区",
      "id": "610302"
    }, {
      "name": "金台区",
      "id": "610303"
    }, {
      "name": "陈仓区",
      "id": "610304"
    }, {
      "name": "凤翔县",
      "id": "610322"
    }, {
      "name": "岐山县",
      "id": "610323"
    }, {
      "name": "扶风县",
      "id": "610324"
    }, {
      "name": "眉县",
      "id": "610326"
    }, {
      "name": "陇县",
      "id": "610327"
    }, {
      "name": "千阳县",
      "id": "610328"
    }, {
      "name": "麟游县",
      "id": "610329"
    }, {
      "name": "凤县",
      "id": "610330"
    }, {
      "name": "太白县",
      "id": "610331"
    }]
  }, {
    "name": "咸阳市",
    "area": [{
      "name": "秦都区",
      "id": "610402"
    }, {
      "name": "杨陵区",
      "id": "610403"
    }, {
      "name": "渭城区",
      "id": "610404"
    }, {
      "name": "三原县",
      "id": "610422"
    }, {
      "name": "泾阳县",
      "id": "610423"
    }, {
      "name": "乾县",
      "id": "610424"
    }, {
      "name": "礼泉县",
      "id": "610425"
    }, {
      "name": "永寿县",
      "id": "610426"
    }, {
      "name": "彬县",
      "id": "610427"
    }, {
      "name": "长武县",
      "id": "610428"
    }, {
      "name": "旬邑县",
      "id": "610429"
    }, {
      "name": "淳化县",
      "id": "610430"
    }, {
      "name": "武功县",
      "id": "610431"
    }, {
      "name": "兴平市",
      "id": "610481"
    }]
  }, {
    "name": "渭南市",
    "area": [{
      "name": "临渭区",
      "id": "610502"
    }, {
      "name": "华县",
      "id": "610521"
    }, {
      "name": "潼关县",
      "id": "610522"
    }, {
      "name": "大荔县",
      "id": "610523"
    }, {
      "name": "合阳县",
      "id": "610524"
    }, {
      "name": "澄城县",
      "id": "610525"
    }, {
      "name": "蒲城县",
      "id": "610526"
    }, {
      "name": "白水县",
      "id": "610527"
    }, {
      "name": "富平县",
      "id": "610528"
    }, {
      "name": "韩城市",
      "id": "610581"
    }, {
      "name": "华阴市",
      "id": "610582"
    }]
  }, {
    "name": "延安市",
    "area": [{
      "name": "宝塔区",
      "id": "610602"
    }, {
      "name": "延长县",
      "id": "610621"
    }, {
      "name": "延川县",
      "id": "610622"
    }, {
      "name": "子长县",
      "id": "610623"
    }, {
      "name": "安塞县",
      "id": "610624"
    }, {
      "name": "志丹县",
      "id": "610625"
    }, {
      "name": "吴起县",
      "id": "610626"
    }, {
      "name": "甘泉县",
      "id": "610627"
    }, {
      "name": "富县",
      "id": "610628"
    }, {
      "name": "洛川县",
      "id": "610629"
    }, {
      "name": "宜川县",
      "id": "610630"
    }, {
      "name": "黄龙县",
      "id": "610631"
    }, {
      "name": "黄陵县",
      "id": "610632"
    }]
  }, {
    "name": "汉中市",
    "area": [{
      "name": "汉台区",
      "id": "610702"
    }, {
      "name": "南郑县",
      "id": "610721"
    }, {
      "name": "城固县",
      "id": "610722"
    }, {
      "name": "洋县",
      "id": "610723"
    }, {
      "name": "西乡县",
      "id": "610724"
    }, {
      "name": "勉县",
      "id": "610725"
    }, {
      "name": "宁强县",
      "id": "610726"
    }, {
      "name": "略阳县",
      "id": "610727"
    }, {
      "name": "镇巴县",
      "id": "610728"
    }, {
      "name": "留坝县",
      "id": "610729"
    }, {
      "name": "佛坪县",
      "id": "610730"
    }]
  }, {
    "name": "榆林市",
    "area": [{
      "name": "榆阳区",
      "id": "610802"
    }, {
      "name": "神木县",
      "id": "610821"
    }, {
      "name": "府谷县",
      "id": "610822"
    }, {
      "name": "横山县",
      "id": "610823"
    }, {
      "name": "靖边县",
      "id": "610824"
    }, {
      "name": "定边县",
      "id": "610825"
    }, {
      "name": "绥德县",
      "id": "610826"
    }, {
      "name": "米脂县",
      "id": "610827"
    }, {
      "name": "佳县",
      "id": "610828"
    }, {
      "name": "吴堡县",
      "id": "610829"
    }, {
      "name": "清涧县",
      "id": "610830"
    }, {
      "name": "子洲县",
      "id": "610831"
    }]
  }, {
    "name": "安康市",
    "area": [{
      "name": "汉滨区",
      "id": "610902"
    }, {
      "name": "汉阴县",
      "id": "610921"
    }, {
      "name": "石泉县",
      "id": "610922"
    }, {
      "name": "宁陕县",
      "id": "610923"
    }, {
      "name": "紫阳县",
      "id": "610924"
    }, {
      "name": "岚皋县",
      "id": "610925"
    }, {
      "name": "平利县",
      "id": "610926"
    }, {
      "name": "镇坪县",
      "id": "610927"
    }, {
      "name": "旬阳县",
      "id": "610928"
    }, {
      "name": "白河县",
      "id": "610929"
    }]
  }, {
    "name": "商洛市",
    "area": [{
      "name": "商州区",
      "id": "611002"
    }, {
      "name": "洛南县",
      "id": "611021"
    }, {
      "name": "丹凤县",
      "id": "611022"
    }, {
      "name": "商南县",
      "id": "611023"
    }, {
      "name": "山阳县",
      "id": "611024"
    }, {
      "name": "镇安县",
      "id": "611025"
    }, {
      "name": "柞水县",
      "id": "611026"
    }]
  }, {
    "name": "西咸新区",
    "area": [{
      "name": "空港新城",
      "id": "611101"
    }, {
      "name": "沣东新城",
      "id": "611102"
    }, {
      "name": "秦汉新城",
      "id": "611103"
    }, {
      "name": "沣西新城",
      "id": "611104"
    }, {
      "name": "泾河新城",
      "id": "611105"
    }]
  }]
}, {
  "name": "甘肃省",
  "city": [{
    "name": "兰州市",
    "area": [{
      "name": "城关区",
      "id": "620102"
    }, {
      "name": "七里河区",
      "id": "620103"
    }, {
      "name": "西固区",
      "id": "620104"
    }, {
      "name": "安宁区",
      "id": "620105"
    }, {
      "name": "红古区",
      "id": "620111"
    }, {
      "name": "永登县",
      "id": "620121"
    }, {
      "name": "皋兰县",
      "id": "620122"
    }, {
      "name": "榆中县",
      "id": "620123"
    }]
  }, {
    "name": "嘉峪关市",
    "area": [{
      "name": "雄关区",
      "id": "620201"
    }, {
      "name": "长城区",
      "id": "620202"
    }, {
      "name": "镜铁区",
      "id": "620203"
    }]
  }, {
    "name": "金昌市",
    "area": [{
      "name": "金川区",
      "id": "620302"
    }, {
      "name": "永昌县",
      "id": "620321"
    }]
  }, {
    "name": "白银市",
    "area": [{
      "name": "白银区",
      "id": "620402"
    }, {
      "name": "平川区",
      "id": "620403"
    }, {
      "name": "靖远县",
      "id": "620421"
    }, {
      "name": "会宁县",
      "id": "620422"
    }, {
      "name": "景泰县",
      "id": "620423"
    }]
  }, {
    "name": "天水市",
    "area": [{
      "name": "秦州区",
      "id": "620502"
    }, {
      "name": "麦积区",
      "id": "620503"
    }, {
      "name": "清水县",
      "id": "620521"
    }, {
      "name": "秦安县",
      "id": "620522"
    }, {
      "name": "甘谷县",
      "id": "620523"
    }, {
      "name": "武山县",
      "id": "620524"
    }, {
      "name": "张家川回族自治县",
      "id": "620525"
    }]
  }, {
    "name": "武威市",
    "area": [{
      "name": "凉州区",
      "id": "620602"
    }, {
      "name": "民勤县",
      "id": "620621"
    }, {
      "name": "古浪县",
      "id": "620622"
    }, {
      "name": "天祝藏族自治县",
      "id": "620623"
    }]
  }, {
    "name": "张掖市",
    "area": [{
      "name": "甘州区",
      "id": "620702"
    }, {
      "name": "肃南裕固族自治县",
      "id": "620721"
    }, {
      "name": "民乐县",
      "id": "620722"
    }, {
      "name": "临泽县",
      "id": "620723"
    }, {
      "name": "高台县",
      "id": "620724"
    }, {
      "name": "山丹县",
      "id": "620725"
    }]
  }, {
    "name": "平凉市",
    "area": [{
      "name": "崆峒区",
      "id": "620802"
    }, {
      "name": "泾川县",
      "id": "620821"
    }, {
      "name": "灵台县",
      "id": "620822"
    }, {
      "name": "崇信县",
      "id": "620823"
    }, {
      "name": "华亭县",
      "id": "620824"
    }, {
      "name": "庄浪县",
      "id": "620825"
    }, {
      "name": "静宁县",
      "id": "620826"
    }]
  }, {
    "name": "酒泉市",
    "area": [{
      "name": "肃州区",
      "id": "620902"
    }, {
      "name": "金塔县",
      "id": "620921"
    }, {
      "name": "瓜州县",
      "id": "620922"
    }, {
      "name": "肃北蒙古族自治县",
      "id": "620923"
    }, {
      "name": "阿克塞哈萨克族自治县",
      "id": "620924"
    }, {
      "name": "玉门市",
      "id": "620981"
    }, {
      "name": "敦煌市",
      "id": "620982"
    }]
  }, {
    "name": "庆阳市",
    "area": [{
      "name": "西峰区",
      "id": "621002"
    }, {
      "name": "庆城县",
      "id": "621021"
    }, {
      "name": "环县",
      "id": "621022"
    }, {
      "name": "华池县",
      "id": "621023"
    }, {
      "name": "合水县",
      "id": "621024"
    }, {
      "name": "正宁县",
      "id": "621025"
    }, {
      "name": "宁县",
      "id": "621026"
    }, {
      "name": "镇原县",
      "id": "621027"
    }]
  }, {
    "name": "定西市",
    "area": [{
      "name": "安定区",
      "id": "621102"
    }, {
      "name": "通渭县",
      "id": "621121"
    }, {
      "name": "陇西县",
      "id": "621122"
    }, {
      "name": "渭源县",
      "id": "621123"
    }, {
      "name": "临洮县",
      "id": "621124"
    }, {
      "name": "漳县",
      "id": "621125"
    }, {
      "name": "岷县",
      "id": "621126"
    }]
  }, {
    "name": "陇南市",
    "area": [{
      "name": "武都区",
      "id": "621202"
    }, {
      "name": "成县",
      "id": "621221"
    }, {
      "name": "文县",
      "id": "621222"
    }, {
      "name": "宕昌县",
      "id": "621223"
    }, {
      "name": "康县",
      "id": "621224"
    }, {
      "name": "西和县",
      "id": "621225"
    }, {
      "name": "礼县",
      "id": "621226"
    }, {
      "name": "徽县",
      "id": "621227"
    }, {
      "name": "两当县",
      "id": "621228"
    }]
  }, {
    "name": "临夏回族自治州",
    "area": [{
      "name": "临夏市",
      "id": "622901"
    }, {
      "name": "临夏县",
      "id": "622921"
    }, {
      "name": "康乐县",
      "id": "622922"
    }, {
      "name": "永靖县",
      "id": "622923"
    }, {
      "name": "广河县",
      "id": "622924"
    }, {
      "name": "和政县",
      "id": "622925"
    }, {
      "name": "东乡族自治县",
      "id": "622926"
    }, {
      "name": "积石山保安族东乡族撒拉族自治县",
      "id": "622927"
    }]
  }, {
    "name": "甘南藏族自治州",
    "area": [{
      "name": "合作市",
      "id": "623001"
    }, {
      "name": "临潭县",
      "id": "623021"
    }, {
      "name": "卓尼县",
      "id": "623022"
    }, {
      "name": "舟曲县",
      "id": "623023"
    }, {
      "name": "迭部县",
      "id": "623024"
    }, {
      "name": "玛曲县",
      "id": "623025"
    }, {
      "name": "碌曲县",
      "id": "623026"
    }, {
      "name": "夏河县",
      "id": "623027"
    }]
  }]
}, {
  "name": "青海省",
  "city": [{
    "name": "西宁市",
    "area": [{
      "name": "城东区",
      "id": "630102"
    }, {
      "name": "城中区",
      "id": "630103"
    }, {
      "name": "城西区",
      "id": "630104"
    }, {
      "name": "城北区",
      "id": "630105"
    }, {
      "name": "大通回族土族自治县",
      "id": "630121"
    }, {
      "name": "湟中县",
      "id": "630122"
    }, {
      "name": "湟源县",
      "id": "630123"
    }]
  }, {
    "name": "海东市",
    "area": [{
      "name": "乐都区",
      "id": "630202"
    }, {
      "name": "平安县",
      "id": "630221"
    }, {
      "name": "民和回族土族自治县",
      "id": "630222"
    }, {
      "name": "互助土族自治县",
      "id": "630223"
    }, {
      "name": "化隆回族自治县",
      "id": "630224"
    }, {
      "name": "循化撒拉族自治县",
      "id": "630225"
    }]
  }, {
    "name": "海北藏族自治州",
    "area": [{
      "name": "门源回族自治县",
      "id": "632221"
    }, {
      "name": "祁连县",
      "id": "632222"
    }, {
      "name": "海晏县",
      "id": "632223"
    }, {
      "name": "刚察县",
      "id": "632224"
    }]
  }, {
    "name": "黄南藏族自治州",
    "area": [{
      "name": "同仁县",
      "id": "632321"
    }, {
      "name": "尖扎县",
      "id": "632322"
    }, {
      "name": "泽库县",
      "id": "632323"
    }, {
      "name": "河南蒙古族自治县",
      "id": "632324"
    }]
  }, {
    "name": "海南藏族自治州",
    "area": [{
      "name": "共和县",
      "id": "632521"
    }, {
      "name": "同德县",
      "id": "632522"
    }, {
      "name": "贵德县",
      "id": "632523"
    }, {
      "name": "兴海县",
      "id": "632524"
    }, {
      "name": "贵南县",
      "id": "632525"
    }]
  }, {
    "name": "果洛藏族自治州",
    "area": [{
      "name": "玛沁县",
      "id": "632621"
    }, {
      "name": "班玛县",
      "id": "632622"
    }, {
      "name": "甘德县",
      "id": "632623"
    }, {
      "name": "达日县",
      "id": "632624"
    }, {
      "name": "久治县",
      "id": "632625"
    }, {
      "name": "玛多县",
      "id": "632626"
    }]
  }, {
    "name": "玉树藏族自治州",
    "area": [{
      "name": "玉树市",
      "id": "632701"
    }, {
      "name": "杂多县",
      "id": "632722"
    }, {
      "name": "称多县",
      "id": "632723"
    }, {
      "name": "治多县",
      "id": "632724"
    }, {
      "name": "囊谦县",
      "id": "632725"
    }, {
      "name": "曲麻莱县",
      "id": "632726"
    }]
  }, {
    "name": "海西蒙古族藏族自治州",
    "area": [{
      "name": "格尔木市",
      "id": "632801"
    }, {
      "name": "德令哈市",
      "id": "632802"
    }, {
      "name": "乌兰县",
      "id": "632821"
    }, {
      "name": "都兰县",
      "id": "632822"
    }, {
      "name": "天峻县",
      "id": "632823"
    }]
  }]
}, {
  "name": "宁夏回族自治区",
  "city": [{
    "name": "银川市",
    "area": [{
      "name": "兴庆区",
      "id": "640104"
    }, {
      "name": "西夏区",
      "id": "640105"
    }, {
      "name": "金凤区",
      "id": "640106"
    }, {
      "name": "永宁县",
      "id": "640121"
    }, {
      "name": "贺兰县",
      "id": "640122"
    }, {
      "name": "灵武市",
      "id": "640181"
    }]
  }, {
    "name": "石嘴山市",
    "area": [{
      "name": "大武口区",
      "id": "640202"
    }, {
      "name": "惠农区",
      "id": "640205"
    }, {
      "name": "平罗县",
      "id": "640221"
    }]
  }, {
    "name": "吴忠市",
    "area": [{
      "name": "利通区",
      "id": "640302"
    }, {
      "name": "红寺堡区",
      "id": "640303"
    }, {
      "name": "盐池县",
      "id": "640323"
    }, {
      "name": "同心县",
      "id": "640324"
    }, {
      "name": "青铜峡市",
      "id": "640381"
    }]
  }, {
    "name": "固原市",
    "area": [{
      "name": "原州区",
      "id": "640402"
    }, {
      "name": "西吉县",
      "id": "640422"
    }, {
      "name": "隆德县",
      "id": "640423"
    }, {
      "name": "泾源县",
      "id": "640424"
    }, {
      "name": "彭阳县",
      "id": "640425"
    }]
  }, {
    "name": "中卫市",
    "area": [{
      "name": "沙坡头区",
      "id": "640502"
    }, {
      "name": "中宁县",
      "id": "640521"
    }, {
      "name": "海原县",
      "id": "640522"
    }]
  }]
}, {
  "name": "新疆维吾尔自治区",
  "city": [{
    "name": "乌鲁木齐市",
    "area": [{
      "name": "天山区",
      "id": "650102"
    }, {
      "name": "沙依巴克区",
      "id": "650103"
    }, {
      "name": "新市区",
      "id": "650104"
    }, {
      "name": "水磨沟区",
      "id": "650105"
    }, {
      "name": "头屯河区",
      "id": "650106"
    }, {
      "name": "达坂城区",
      "id": "650107"
    }, {
      "name": "米东区",
      "id": "650109"
    }, {
      "name": "乌鲁木齐县",
      "id": "650121"
    }]
  }, {
    "name": "克拉玛依市",
    "area": [{
      "name": "独山子区",
      "id": "650202"
    }, {
      "name": "克拉玛依区",
      "id": "650203"
    }, {
      "name": "白碱滩区",
      "id": "650204"
    }, {
      "name": "乌尔禾区",
      "id": "650205"
    }]
  }, {
    "name": "吐鲁番地区",
    "area": [{
      "name": "吐鲁番市",
      "id": "652101"
    }, {
      "name": "鄯善县",
      "id": "652122"
    }, {
      "name": "托克逊县",
      "id": "652123"
    }]
  }, {
    "name": "哈密地区",
    "area": [{
      "name": "哈密市",
      "id": "652201"
    }, {
      "name": "巴里坤哈萨克自治县",
      "id": "652222"
    }, {
      "name": "伊吾县",
      "id": "652223"
    }]
  }, {
    "name": "昌吉回族自治州",
    "area": [{
      "name": "昌吉市",
      "id": "652301"
    }, {
      "name": "阜康市",
      "id": "652302"
    }, {
      "name": "呼图壁县",
      "id": "652323"
    }, {
      "name": "玛纳斯县",
      "id": "652324"
    }, {
      "name": "奇台县",
      "id": "652325"
    }, {
      "name": "吉木萨尔县",
      "id": "652327"
    }, {
      "name": "木垒哈萨克自治县",
      "id": "652328"
    }]
  }, {
    "name": "博尔塔拉蒙古自治州",
    "area": [{
      "name": "博乐市",
      "id": "652701"
    }, {
      "name": "阿拉山口市",
      "id": "652702"
    }, {
      "name": "精河县",
      "id": "652722"
    }, {
      "name": "温泉县",
      "id": "652723"
    }]
  }, {
    "name": "巴音郭楞蒙古自治州",
    "area": [{
      "name": "库尔勒市",
      "id": "652801"
    }, {
      "name": "轮台县",
      "id": "652822"
    }, {
      "name": "尉犁县",
      "id": "652823"
    }, {
      "name": "若羌县",
      "id": "652824"
    }, {
      "name": "且末县",
      "id": "652825"
    }, {
      "name": "焉耆回族自治县",
      "id": "652826"
    }, {
      "name": "和静县",
      "id": "652827"
    }, {
      "name": "和硕县",
      "id": "652828"
    }, {
      "name": "博湖县",
      "id": "652829"
    }]
  }, {
    "name": "阿克苏地区",
    "area": [{
      "name": "阿克苏市",
      "id": "652901"
    }, {
      "name": "温宿县",
      "id": "652922"
    }, {
      "name": "库车县",
      "id": "652923"
    }, {
      "name": "沙雅县",
      "id": "652924"
    }, {
      "name": "新和县",
      "id": "652925"
    }, {
      "name": "拜城县",
      "id": "652926"
    }, {
      "name": "乌什县",
      "id": "652927"
    }, {
      "name": "阿瓦提县",
      "id": "652928"
    }, {
      "name": "柯坪县",
      "id": "652929"
    }]
  }, {
    "name": "克孜勒苏柯尔克孜自治州",
    "area": [{
      "name": "阿图什市",
      "id": "653001"
    }, {
      "name": "阿克陶县",
      "id": "653022"
    }, {
      "name": "阿合奇县",
      "id": "653023"
    }, {
      "name": "乌恰县",
      "id": "653024"
    }]
  }, {
    "name": "喀什地区",
    "area": [{
      "name": "喀什市",
      "id": "653101"
    }, {
      "name": "疏附县",
      "id": "653121"
    }, {
      "name": "疏勒县",
      "id": "653122"
    }, {
      "name": "英吉沙县",
      "id": "653123"
    }, {
      "name": "泽普县",
      "id": "653124"
    }, {
      "name": "莎车县",
      "id": "653125"
    }, {
      "name": "叶城县",
      "id": "653126"
    }, {
      "name": "麦盖提县",
      "id": "653127"
    }, {
      "name": "岳普湖县",
      "id": "653128"
    }, {
      "name": "伽师县",
      "id": "653129"
    }, {
      "name": "巴楚县",
      "id": "653130"
    }, {
      "name": "塔什库尔干塔吉克自治县",
      "id": "653131"
    }]
  }, {
    "name": "和田地区",
    "area": [{
      "name": "和田市",
      "id": "653201"
    }, {
      "name": "和田县",
      "id": "653221"
    }, {
      "name": "墨玉县",
      "id": "653222"
    }, {
      "name": "皮山县",
      "id": "653223"
    }, {
      "name": "洛浦县",
      "id": "653224"
    }, {
      "name": "策勒县",
      "id": "653225"
    }, {
      "name": "于田县",
      "id": "653226"
    }, {
      "name": "民丰县",
      "id": "653227"
    }]
  }, {
    "name": "伊犁哈萨克自治州",
    "area": [{
      "name": "伊宁市",
      "id": "654002"
    }, {
      "name": "奎屯市",
      "id": "654003"
    }, {
      "name": "霍尔果斯市",
      "id": "654004"
    }, {
      "name": "伊宁县",
      "id": "654021"
    }, {
      "name": "察布查尔锡伯自治县",
      "id": "654022"
    }, {
      "name": "霍城县",
      "id": "654023"
    }, {
      "name": "巩留县",
      "id": "654024"
    }, {
      "name": "新源县",
      "id": "654025"
    }, {
      "name": "昭苏县",
      "id": "654026"
    }, {
      "name": "特克斯县",
      "id": "654027"
    }, {
      "name": "尼勒克县",
      "id": "654028"
    }]
  }, {
    "name": "塔城地区",
    "area": [{
      "name": "塔城市",
      "id": "654201"
    }, {
      "name": "乌苏市",
      "id": "654202"
    }, {
      "name": "额敏县",
      "id": "654221"
    }, {
      "name": "沙湾县",
      "id": "654223"
    }, {
      "name": "托里县",
      "id": "654224"
    }, {
      "name": "裕民县",
      "id": "654225"
    }, {
      "name": "和布克赛尔蒙古自治县",
      "id": "654226"
    }]
  }, {
    "name": "阿勒泰地区",
    "area": [{
      "name": "阿勒泰市",
      "id": "654301"
    }, {
      "name": "布尔津县",
      "id": "654321"
    }, {
      "name": "富蕴县",
      "id": "654322"
    }, {
      "name": "福海县",
      "id": "654323"
    }, {
      "name": "哈巴河县",
      "id": "654324"
    }, {
      "name": "青河县",
      "id": "654325"
    }, {
      "name": "吉木乃县",
      "id": "654326"
    }]
  }, {
    "name": "直辖县级",
    "area": [{
      "name": "石河子市",
      "id": "659001"
    }, {
      "name": "阿拉尔市",
      "id": "659002"
    }, {
      "name": "图木舒克市",
      "id": "659003"
    }, {
      "name": "五家渠市",
      "id": "659004"
    }, {
      "name": "北屯市",
      "id": "659005"
    }, {
      "name": "铁门关市",
      "id": "659006"
    }, {
      "name": "双河市",
      "id": "659007"
    }]
  }]
}, {
  "name": "台湾",
  "city": [{
    "name": "台北市",
    "area": [{
      "name": "松山区",
      "id": "710101"
    }, {
      "name": "信义区",
      "id": "710102"
    }, {
      "name": "大安区",
      "id": "710103"
    }, {
      "name": "中山区",
      "id": "710104"
    }, {
      "name": "中正区",
      "id": "710105"
    }, {
      "name": "大同区",
      "id": "710106"
    }, {
      "name": "万华区",
      "id": "710107"
    }, {
      "name": "文山区",
      "id": "710108"
    }, {
      "name": "南港区",
      "id": "710109"
    }, {
      "name": "内湖区",
      "id": "710110"
    }, {
      "name": "士林区",
      "id": "710111"
    }, {
      "name": "北投区",
      "id": "710112"
    }]
  }, {
    "name": "高雄市",
    "area": [{
      "name": "盐埕区",
      "id": "710201"
    }, {
      "name": "鼓山区",
      "id": "710202"
    }, {
      "name": "左营区",
      "id": "710203"
    }, {
      "name": "楠梓区",
      "id": "710204"
    }, {
      "name": "三民区",
      "id": "710205"
    }, {
      "name": "新兴区",
      "id": "710206"
    }, {
      "name": "前金区",
      "id": "710207"
    }, {
      "name": "苓雅区",
      "id": "710208"
    }, {
      "name": "前镇区",
      "id": "710209"
    }, {
      "name": "旗津区",
      "id": "710210"
    }, {
      "name": "小港区",
      "id": "710211"
    }, {
      "name": "凤山区",
      "id": "710212"
    }, {
      "name": "林园区",
      "id": "710213"
    }, {
      "name": "大寮区",
      "id": "710214"
    }, {
      "name": "大树区",
      "id": "710215"
    }, {
      "name": "大社区",
      "id": "710216"
    }, {
      "name": "仁武区",
      "id": "710217"
    }, {
      "name": "鸟松区",
      "id": "710218"
    }, {
      "name": "冈山区",
      "id": "710219"
    }, {
      "name": "桥头区",
      "id": "710220"
    }, {
      "name": "燕巢区",
      "id": "710221"
    }, {
      "name": "田寮区",
      "id": "710222"
    }, {
      "name": "阿莲区",
      "id": "710223"
    }, {
      "name": "路竹区",
      "id": "710224"
    }, {
      "name": "湖内区",
      "id": "710225"
    }, {
      "name": "茄萣区",
      "id": "710226"
    }, {
      "name": "永安区",
      "id": "710227"
    }, {
      "name": "弥陀区",
      "id": "710228"
    }, {
      "name": "梓官区",
      "id": "710229"
    }, {
      "name": "旗山区",
      "id": "710230"
    }, {
      "name": "美浓区",
      "id": "710231"
    }, {
      "name": "六龟区",
      "id": "710232"
    }, {
      "name": "甲仙区",
      "id": "710233"
    }, {
      "name": "杉林区",
      "id": "710234"
    }, {
      "name": "内门区",
      "id": "710235"
    }, {
      "name": "茂林区",
      "id": "710236"
    }, {
      "name": "桃源区",
      "id": "710237"
    }, {
      "name": "那玛夏区",
      "id": "710238"
    }]
  }, {
    "name": "基隆市",
    "area": [{
      "name": "中正区",
      "id": "710301"
    }, {
      "name": "七堵区",
      "id": "710302"
    }, {
      "name": "暖暖区",
      "id": "710303"
    }, {
      "name": "仁爱区",
      "id": "710304"
    }, {
      "name": "中山区",
      "id": "710305"
    }, {
      "name": "安乐区",
      "id": "710306"
    }, {
      "name": "信义区",
      "id": "710307"
    }]
  }, {
    "name": "台中市",
    "area": [{
      "name": "中区",
      "id": "710401"
    }, {
      "name": "东区",
      "id": "710402"
    }, {
      "name": "南区",
      "id": "710403"
    }, {
      "name": "西区",
      "id": "710404"
    }, {
      "name": "北区",
      "id": "710405"
    }, {
      "name": "西屯区",
      "id": "710406"
    }, {
      "name": "南屯区",
      "id": "710407"
    }, {
      "name": "北屯区",
      "id": "710408"
    }, {
      "name": "丰原区",
      "id": "710409"
    }, {
      "name": "东势区",
      "id": "710410"
    }, {
      "name": "大甲区",
      "id": "710411"
    }, {
      "name": "清水区",
      "id": "710412"
    }, {
      "name": "沙鹿区",
      "id": "710413"
    }, {
      "name": "梧栖区",
      "id": "710414"
    }, {
      "name": "后里区",
      "id": "710415"
    }, {
      "name": "神冈区",
      "id": "710416"
    }, {
      "name": "潭子区",
      "id": "710417"
    }, {
      "name": "大雅区",
      "id": "710418"
    }, {
      "name": "新社区",
      "id": "710419"
    }, {
      "name": "石冈区",
      "id": "710420"
    }, {
      "name": "外埔区",
      "id": "710421"
    }, {
      "name": "大安区",
      "id": "710422"
    }, {
      "name": "乌日区",
      "id": "710423"
    }, {
      "name": "大肚区",
      "id": "710424"
    }, {
      "name": "龙井区",
      "id": "710425"
    }, {
      "name": "雾峰区",
      "id": "710426"
    }, {
      "name": "太平区",
      "id": "710427"
    }, {
      "name": "大里区",
      "id": "710428"
    }, {
      "name": "和平区",
      "id": "710429"
    }]
  }, {
    "name": "台南市",
    "area": [{
      "name": "东区",
      "id": "710501"
    }, {
      "name": "南区",
      "id": "710502"
    }, {
      "name": "北区",
      "id": "710504"
    }, {
      "name": "安南区",
      "id": "710506"
    }, {
      "name": "安平区",
      "id": "710507"
    }, {
      "name": "中西区",
      "id": "710508"
    }, {
      "name": "新营区",
      "id": "710509"
    }, {
      "name": "盐水区",
      "id": "710510"
    }, {
      "name": "白河区",
      "id": "710511"
    }, {
      "name": "柳营区",
      "id": "710512"
    }, {
      "name": "后壁区",
      "id": "710513"
    }, {
      "name": "东山区",
      "id": "710514"
    }, {
      "name": "麻豆区",
      "id": "710515"
    }, {
      "name": "下营区",
      "id": "710516"
    }, {
      "name": "六甲区",
      "id": "710517"
    }, {
      "name": "官田区",
      "id": "710518"
    }, {
      "name": "大内区",
      "id": "710519"
    }, {
      "name": "佳里区",
      "id": "710520"
    }, {
      "name": "学甲区",
      "id": "710521"
    }, {
      "name": "西港区",
      "id": "710522"
    }, {
      "name": "七股区",
      "id": "710523"
    }, {
      "name": "将军区",
      "id": "710524"
    }, {
      "name": "北门区",
      "id": "710525"
    }, {
      "name": "新化区",
      "id": "710526"
    }, {
      "name": "善化区",
      "id": "710527"
    }, {
      "name": "新市区",
      "id": "710528"
    }, {
      "name": "安定区",
      "id": "710529"
    }, {
      "name": "山上区",
      "id": "710530"
    }, {
      "name": "玉井区",
      "id": "710531"
    }, {
      "name": "楠西区",
      "id": "710532"
    }, {
      "name": "南化区",
      "id": "710533"
    }, {
      "name": "左镇区",
      "id": "710534"
    }, {
      "name": "仁德区",
      "id": "710535"
    }, {
      "name": "归仁区",
      "id": "710536"
    }, {
      "name": "关庙区",
      "id": "710537"
    }, {
      "name": "龙崎区",
      "id": "710538"
    }, {
      "name": "永康区",
      "id": "710539"
    }]
  }, {
    "name": "新竹市",
    "area": [{
      "name": "东区",
      "id": "710601"
    }, {
      "name": "北区",
      "id": "710602"
    }, {
      "name": "香山区",
      "id": "710603"
    }]
  }, {
    "name": "嘉义市",
    "area": [{
      "name": "东区",
      "id": "710701"
    }, {
      "name": "西区",
      "id": "710702"
    }]
  }, {
    "name": "新北市",
    "area": [{
      "name": "板桥区",
      "id": "710801"
    }, {
      "name": "三重区",
      "id": "710802"
    }, {
      "name": "中和区",
      "id": "710803"
    }, {
      "name": "永和区",
      "id": "710804"
    }, {
      "name": "新庄区",
      "id": "710805"
    }, {
      "name": "新店区",
      "id": "710806"
    }, {
      "name": "树林区",
      "id": "710807"
    }, {
      "name": "莺歌区",
      "id": "710808"
    }, {
      "name": "三峡区",
      "id": "710809"
    }, {
      "name": "淡水区",
      "id": "710810"
    }, {
      "name": "汐止区",
      "id": "710811"
    }, {
      "name": "瑞芳区",
      "id": "710812"
    }, {
      "name": "土城区",
      "id": "710813"
    }, {
      "name": "芦洲区",
      "id": "710814"
    }, {
      "name": "五股区",
      "id": "710815"
    }, {
      "name": "泰山区",
      "id": "710816"
    }, {
      "name": "林口区",
      "id": "710817"
    }, {
      "name": "深坑区",
      "id": "710818"
    }, {
      "name": "石碇区",
      "id": "710819"
    }, {
      "name": "坪林区",
      "id": "710820"
    }, {
      "name": "三芝区",
      "id": "710821"
    }, {
      "name": "石门区",
      "id": "710822"
    }, {
      "name": "八里区",
      "id": "710823"
    }, {
      "name": "平溪区",
      "id": "710824"
    }, {
      "name": "双溪区",
      "id": "710825"
    }, {
      "name": "贡寮区",
      "id": "710826"
    }, {
      "name": "金山区",
      "id": "710827"
    }, {
      "name": "万里区",
      "id": "710828"
    }, {
      "name": "乌来区",
      "id": "710829"
    }]
  }, {
    "name": "宜兰县",
    "area": [{
      "name": "宜兰市",
      "id": "712201"
    }, {
      "name": "罗东镇",
      "id": "712221"
    }, {
      "name": "苏澳镇",
      "id": "712222"
    }, {
      "name": "头城镇",
      "id": "712223"
    }, {
      "name": "礁溪乡",
      "id": "712224"
    }, {
      "name": "壮围乡",
      "id": "712225"
    }, {
      "name": "员山乡",
      "id": "712226"
    }, {
      "name": "冬山乡",
      "id": "712227"
    }, {
      "name": "五结乡",
      "id": "712228"
    }, {
      "name": "三星乡",
      "id": "712229"
    }, {
      "name": "大同乡",
      "id": "712230"
    }, {
      "name": "南澳乡",
      "id": "712231"
    }]
  }, {
    "name": "桃园县",
    "area": [{
      "name": "桃园市",
      "id": "712301"
    }, {
      "name": "中坜市",
      "id": "712302"
    }, {
      "name": "平镇市",
      "id": "712303"
    }, {
      "name": "八德市",
      "id": "712304"
    }, {
      "name": "杨梅市",
      "id": "712305"
    }, {
      "name": "芦竹市",
      "id": "712306"
    }, {
      "name": "大溪镇",
      "id": "712321"
    }, {
      "name": "大园乡",
      "id": "712324"
    }, {
      "name": "龟山乡",
      "id": "712325"
    }, {
      "name": "龙潭乡",
      "id": "712327"
    }, {
      "name": "新屋乡",
      "id": "712329"
    }, {
      "name": "观音乡",
      "id": "712330"
    }, {
      "name": "复兴乡",
      "id": "712331"
    }]
  }, {
    "name": "新竹县",
    "area": [{
      "name": "竹北市",
      "id": "712401"
    }, {
      "name": "竹东镇",
      "id": "712421"
    }, {
      "name": "新埔镇",
      "id": "712422"
    }, {
      "name": "关西镇",
      "id": "712423"
    }, {
      "name": "湖口乡",
      "id": "712424"
    }, {
      "name": "新丰乡",
      "id": "712425"
    }, {
      "name": "芎林乡",
      "id": "712426"
    }, {
      "name": "横山乡",
      "id": "712427"
    }, {
      "name": "北埔乡",
      "id": "712428"
    }, {
      "name": "宝山乡",
      "id": "712429"
    }, {
      "name": "峨眉乡",
      "id": "712430"
    }, {
      "name": "尖石乡",
      "id": "712431"
    }, {
      "name": "五峰乡",
      "id": "712432"
    }]
  }, {
    "name": "苗栗县",
    "area": [{
      "name": "苗栗市",
      "id": "712501"
    }, {
      "name": "苑里镇",
      "id": "712521"
    }, {
      "name": "通霄镇",
      "id": "712522"
    }, {
      "name": "竹南镇",
      "id": "712523"
    }, {
      "name": "头份镇",
      "id": "712524"
    }, {
      "name": "后龙镇",
      "id": "712525"
    }, {
      "name": "卓兰镇",
      "id": "712526"
    }, {
      "name": "大湖乡",
      "id": "712527"
    }, {
      "name": "公馆乡",
      "id": "712528"
    }, {
      "name": "铜锣乡",
      "id": "712529"
    }, {
      "name": "南庄乡",
      "id": "712530"
    }, {
      "name": "头屋乡",
      "id": "712531"
    }, {
      "name": "三义乡",
      "id": "712532"
    }, {
      "name": "西湖乡",
      "id": "712533"
    }, {
      "name": "造桥乡",
      "id": "712534"
    }, {
      "name": "三湾乡",
      "id": "712535"
    }, {
      "name": "狮潭乡",
      "id": "712536"
    }, {
      "name": "泰安乡",
      "id": "712537"
    }]
  }, {
    "name": "彰化县",
    "area": [{
      "name": "彰化市",
      "id": "712701"
    }, {
      "name": "鹿港镇",
      "id": "712721"
    }, {
      "name": "和美镇",
      "id": "712722"
    }, {
      "name": "线西乡",
      "id": "712723"
    }, {
      "name": "伸港乡",
      "id": "712724"
    }, {
      "name": "福兴乡",
      "id": "712725"
    }, {
      "name": "秀水乡",
      "id": "712726"
    }, {
      "name": "花坛乡",
      "id": "712727"
    }, {
      "name": "芬园乡",
      "id": "712728"
    }, {
      "name": "员林镇",
      "id": "712729"
    }, {
      "name": "溪湖镇",
      "id": "712730"
    }, {
      "name": "田中镇",
      "id": "712731"
    }, {
      "name": "大村乡",
      "id": "712732"
    }, {
      "name": "埔盐乡",
      "id": "712733"
    }, {
      "name": "埔心乡",
      "id": "712734"
    }, {
      "name": "永靖乡",
      "id": "712735"
    }, {
      "name": "社头乡",
      "id": "712736"
    }, {
      "name": "二水乡",
      "id": "712737"
    }, {
      "name": "北斗镇",
      "id": "712738"
    }, {
      "name": "二林镇",
      "id": "712739"
    }, {
      "name": "田尾乡",
      "id": "712740"
    }, {
      "name": "埤头乡",
      "id": "712741"
    }, {
      "name": "芳苑乡",
      "id": "712742"
    }, {
      "name": "大城乡",
      "id": "712743"
    }, {
      "name": "竹塘乡",
      "id": "712744"
    }, {
      "name": "溪州乡",
      "id": "712745"
    }]
  }, {
    "name": "南投县",
    "area": [{
      "name": "南投市",
      "id": "712801"
    }, {
      "name": "埔里镇",
      "id": "712821"
    }, {
      "name": "草屯镇",
      "id": "712822"
    }, {
      "name": "竹山镇",
      "id": "712823"
    }, {
      "name": "集集镇",
      "id": "712824"
    }, {
      "name": "名间乡",
      "id": "712825"
    }, {
      "name": "鹿谷乡",
      "id": "712826"
    }, {
      "name": "中寮乡",
      "id": "712827"
    }, {
      "name": "鱼池乡",
      "id": "712828"
    }, {
      "name": "国姓乡",
      "id": "712829"
    }, {
      "name": "水里乡",
      "id": "712830"
    }, {
      "name": "信义乡",
      "id": "712831"
    }, {
      "name": "仁爱乡",
      "id": "712832"
    }]
  }, {
    "name": "云林县",
    "area": [{
      "name": "斗六市",
      "id": "712901"
    }, {
      "name": "斗南镇",
      "id": "712921"
    }, {
      "name": "虎尾镇",
      "id": "712922"
    }, {
      "name": "西螺镇",
      "id": "712923"
    }, {
      "name": "土库镇",
      "id": "712924"
    }, {
      "name": "北港镇",
      "id": "712925"
    }, {
      "name": "古坑乡",
      "id": "712926"
    }, {
      "name": "大埤乡",
      "id": "712927"
    }, {
      "name": "莿桐乡",
      "id": "712928"
    }, {
      "name": "林内乡",
      "id": "712929"
    }, {
      "name": "二仑乡",
      "id": "712930"
    }, {
      "name": "仑背乡",
      "id": "712931"
    }, {
      "name": "麦寮乡",
      "id": "712932"
    }, {
      "name": "东势乡",
      "id": "712933"
    }, {
      "name": "褒忠乡",
      "id": "712934"
    }, {
      "name": "台西乡",
      "id": "712935"
    }, {
      "name": "元长乡",
      "id": "712936"
    }, {
      "name": "四湖乡",
      "id": "712937"
    }, {
      "name": "口湖乡",
      "id": "712938"
    }, {
      "name": "水林乡",
      "id": "712939"
    }]
  }, {
    "name": "嘉义县",
    "area": [{
      "name": "太保市",
      "id": "713001"
    }, {
      "name": "朴子市",
      "id": "713002"
    }, {
      "name": "布袋镇",
      "id": "713023"
    }, {
      "name": "大林镇",
      "id": "713024"
    }, {
      "name": "民雄乡",
      "id": "713025"
    }, {
      "name": "溪口乡",
      "id": "713026"
    }, {
      "name": "新港乡",
      "id": "713027"
    }, {
      "name": "六脚乡",
      "id": "713028"
    }, {
      "name": "东石乡",
      "id": "713029"
    }, {
      "name": "义竹乡",
      "id": "713030"
    }, {
      "name": "鹿草乡",
      "id": "713031"
    }, {
      "name": "水上乡",
      "id": "713032"
    }, {
      "name": "中埔乡",
      "id": "713033"
    }, {
      "name": "竹崎乡",
      "id": "713034"
    }, {
      "name": "梅山乡",
      "id": "713035"
    }, {
      "name": "番路乡",
      "id": "713036"
    }, {
      "name": "大埔乡",
      "id": "713037"
    }, {
      "name": "阿里山乡",
      "id": "713038"
    }]
  }, {
    "name": "屏东县",
    "area": [{
      "name": "屏东市",
      "id": "713301"
    }, {
      "name": "潮州镇",
      "id": "713321"
    }, {
      "name": "东港镇",
      "id": "713322"
    }, {
      "name": "恒春镇",
      "id": "713323"
    }, {
      "name": "万丹乡",
      "id": "713324"
    }, {
      "name": "长治乡",
      "id": "713325"
    }, {
      "name": "麟洛乡",
      "id": "713326"
    }, {
      "name": "九如乡",
      "id": "713327"
    }, {
      "name": "里港乡",
      "id": "713328"
    }, {
      "name": "盐埔乡",
      "id": "713329"
    }, {
      "name": "高树乡",
      "id": "713330"
    }, {
      "name": "万峦乡",
      "id": "713331"
    }, {
      "name": "内埔乡",
      "id": "713332"
    }, {
      "name": "竹田乡",
      "id": "713333"
    }, {
      "name": "新埤乡",
      "id": "713334"
    }, {
      "name": "枋寮乡",
      "id": "713335"
    }, {
      "name": "新园乡",
      "id": "713336"
    }, {
      "name": "崁顶乡",
      "id": "713337"
    }, {
      "name": "林边乡",
      "id": "713338"
    }, {
      "name": "南州乡",
      "id": "713339"
    }, {
      "name": "佳冬乡",
      "id": "713340"
    }, {
      "name": "琉球乡",
      "id": "713341"
    }, {
      "name": "车城乡",
      "id": "713342"
    }, {
      "name": "满州乡",
      "id": "713343"
    }, {
      "name": "枋山乡",
      "id": "713344"
    }, {
      "name": "三地门乡",
      "id": "713345"
    }, {
      "name": "雾台乡",
      "id": "713346"
    }, {
      "name": "玛家乡",
      "id": "713347"
    }, {
      "name": "泰武乡",
      "id": "713348"
    }, {
      "name": "来义乡",
      "id": "713349"
    }, {
      "name": "春日乡",
      "id": "713350"
    }, {
      "name": "狮子乡",
      "id": "713351"
    }, {
      "name": "牡丹乡",
      "id": "713352"
    }]
  }, {
    "name": "台东县",
    "area": [{
      "name": "台东市",
      "id": "713401"
    }, {
      "name": "成功镇",
      "id": "713421"
    }, {
      "name": "关山镇",
      "id": "713422"
    }, {
      "name": "卑南乡",
      "id": "713423"
    }, {
      "name": "鹿野乡",
      "id": "713424"
    }, {
      "name": "池上乡",
      "id": "713425"
    }, {
      "name": "东河乡",
      "id": "713426"
    }, {
      "name": "长滨乡",
      "id": "713427"
    }, {
      "name": "太麻里乡",
      "id": "713428"
    }, {
      "name": "大武乡",
      "id": "713429"
    }, {
      "name": "绿岛乡",
      "id": "713430"
    }, {
      "name": "海端乡",
      "id": "713431"
    }, {
      "name": "延平乡",
      "id": "713432"
    }, {
      "name": "金峰乡",
      "id": "713433"
    }, {
      "name": "达仁乡",
      "id": "713434"
    }, {
      "name": "兰屿乡",
      "id": "713435"
    }]
  }, {
    "name": "花莲县",
    "area": [{
      "name": "花莲市",
      "id": "713501"
    }, {
      "name": "凤林镇",
      "id": "713521"
    }, {
      "name": "玉里镇",
      "id": "713522"
    }, {
      "name": "新城乡",
      "id": "713523"
    }, {
      "name": "吉安乡",
      "id": "713524"
    }, {
      "name": "寿丰乡",
      "id": "713525"
    }, {
      "name": "光复乡",
      "id": "713526"
    }, {
      "name": "丰滨乡",
      "id": "713527"
    }, {
      "name": "瑞穗乡",
      "id": "713528"
    }, {
      "name": "富里乡",
      "id": "713529"
    }, {
      "name": "秀林乡",
      "id": "713530"
    }, {
      "name": "万荣乡",
      "id": "713531"
    }, {
      "name": "卓溪乡",
      "id": "713532"
    }]
  }, {
    "name": "澎湖县",
    "area": [{
      "name": "马公市",
      "id": "713601"
    }, {
      "name": "湖西乡",
      "id": "713621"
    }, {
      "name": "白沙乡",
      "id": "713622"
    }, {
      "name": "西屿乡",
      "id": "713623"
    }, {
      "name": "望安乡",
      "id": "713624"
    }, {
      "name": "七美乡",
      "id": "713625"
    }]
  }, {
    "name": "金门县",
    "area": [{
      "name": "金城镇",
      "id": "713701"
    }, {
      "name": "金湖镇",
      "id": "713702"
    }, {
      "name": "金沙镇",
      "id": "713703"
    }, {
      "name": "金宁乡",
      "id": "713704"
    }, {
      "name": "烈屿乡",
      "id": "713705"
    }, {
      "name": "乌丘乡",
      "id": "713706"
    }]
  }, {
    "name": "连江县",
    "area": [{
      "name": "南竿乡",
      "id": "713801"
    }, {
      "name": "北竿乡",
      "id": "713802"
    }, {
      "name": "莒光乡",
      "id": "713803"
    }, {
      "name": "东引乡",
      "id": "713804"
    }]
  }]
}, {
  "name": "香港特别行政区",
  "city": [{
    "name": "香港岛",
    "area": [{
      "name": "中西区",
      "id": "810101"
    }, {
      "name": "湾仔区",
      "id": "810102"
    }, {
      "name": "东区",
      "id": "810103"
    }, {
      "name": "南区",
      "id": "810104"
    }]
  }, {
    "name": "九龙",
    "area": [{
      "name": "油尖旺区",
      "id": "810201"
    }, {
      "name": "深水埗区",
      "id": "810202"
    }, {
      "name": "九龙城区",
      "id": "810203"
    }, {
      "name": "黄大仙区",
      "id": "810204"
    }, {
      "name": "观塘区",
      "id": "810205"
    }]
  }, {
    "name": "新界",
    "area": [{
      "name": "荃湾区",
      "id": "810301"
    }, {
      "name": "屯门区",
      "id": "810302"
    }, {
      "name": "元朗区",
      "id": "810303"
    }, {
      "name": "北区",
      "id": "810304"
    }, {
      "name": "大埔区",
      "id": "810305"
    }, {
      "name": "西贡区",
      "id": "810306"
    }, {
      "name": "沙田区",
      "id": "810307"
    }, {
      "name": "葵青区",
      "id": "810308"
    }, {
      "name": "离岛区",
      "id": "810309"
    }]
  }]
}, {
  "name": "澳门特别行政区",
  "city": [{
    "name": "澳门半岛",
    "area": [{
      "name": "花地玛堂区",
      "id": "820101"
    }, {
      "name": "圣安多尼堂区",
      "id": "820102"
    }, {
      "name": "大堂区",
      "id": "820103"
    }, {
      "name": "望德堂区",
      "id": "820104"
    }, {
      "name": "风顺堂区",
      "id": "820105"
    }]
  }, {
    "name": "氹仔岛",
    "area": [{
      "name": "嘉模堂区",
      "id": "820201"
    }]
  }, {
    "name": "路环岛",
    "area": [{
      "name": "圣方济各堂区",
      "id": "820301"
    }]
  }]
}];
/**
 * 获取所有省份
 */

function getProvinces() {
  var provinces = [];
  for (var i = 0; i < AreaJson.length; i++) {
    provinces.push(AreaJson[i].name);
  }
  return provinces;
}
/**
 * 获取省对应的所有城市
 */

function getMyCity(provinceIndex) {
  var citys = [];
  for (var i = 0; i < AreaJson[provinceIndex].city.length; i++) {
    citys.push(AreaJson[provinceIndex].city[i].name);
  }
  return citys;
}
/**
 * 获取省市对应的所有地区
 */

function getAreas(provinceIndex, cityIndex) {
  var areas = [];
  //areas = AreaJson[provinceIndex].city[cityIndex].area;
  for (var i = 0; i < AreaJson[provinceIndex].city[cityIndex].area.length; i++) {
    areas.push(AreaJson[provinceIndex].city[cityIndex].area[i].name);
  }
  return areas;
}
function getAreasCode(provinceIndex, cityIndex, areaIndex) {
  return AreaJson[provinceIndex].city[cityIndex].area[areaIndex].id;
}

/***/ }),

/***/ 43:
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 431:
/*!***************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/function/colorGradient.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorGradient = colorGradient;
exports.colorToRgba = colorToRgba;
exports.hexToRgb = hexToRgb;
exports.rgbToHex = rgbToHex;
/**
 * 求两个颜色之间的渐变值
 * @param {string} startColor 开始的颜色
 * @param {string} endColor 结束的颜色
 * @param {number} step 颜色等分的份额
 * */
function colorGradient() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); // 转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];
  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];
  var sR = (endR - startR) / step; // 总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    // 计算每一步的hex值
    var hex = rgbToHex("rgb(".concat(Math.round(sR * i + startR), ",").concat(Math.round(sG * i + startG), ",").concat(Math.round(sB * i + startB), ")"));
    // 确保第一个颜色值为startColor的值
    if (i === 0) hex = rgbToHex(startColor);
    // 确保最后一个颜色值为endColor的值
    if (i === step - 1) hex = rgbToHex(endColor);
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = String(sColor).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i, _i + 2))));
    }
    if (!str) {
      return sColorChange;
    }
    return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
  }
  if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    return arr.map(function (val) {
      return Number(val);
    });
  }
  return sColor;
}

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    var strHex = '#';
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? "".concat(0, hex) : hex; // 保证每个rgb的值为2位
      if (hex === '0') {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  }
  if (reg.test(_this)) {
    var aNum = _this.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return _this;
    }
    if (aNum.length === 3) {
      var numHex = '#';
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
* JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
* sHex为传入的十六进制的色值
* alpha为rgba的透明度
*/
function colorToRgba(color, alpha) {
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = String(color).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i3, _i3 + 2))));
    }
    // return sColorChange.join(',')
    return "rgba(".concat(sColorChange.join(','), ",").concat(alpha, ")");
  }
  return sColor;
}

/***/ }),

/***/ 432:
/*!************************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-loading-icon/components/uv-loading-icon/props.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default2 = {
  props: _objectSpread({
    // 是否显示组件
    show: {
      type: Boolean,
      default: true
    },
    // 颜色
    color: {
      type: String,
      default: '#909193'
    },
    // 提示文字颜色
    textColor: {
      type: String,
      default: '#909193'
    },
    // 文字和图标是否垂直排列
    vertical: {
      type: Boolean,
      default: false
    },
    // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
    mode: {
      type: String,
      default: 'spinner'
    },
    // 图标大小，单位默认px
    size: {
      type: [String, Number],
      default: 24
    },
    // 文字大小
    textSize: {
      type: [String, Number],
      default: 15
    },
    // 文字样式
    textStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 文字内容
    text: {
      type: [String, Number],
      default: ''
    },
    // 动画模式 https://www.runoob.com/cssref/css3-pr-animation-timing-function.html
    timingFunction: {
      type: String,
      default: 'linear'
    },
    // 动画执行周期时间
    duration: {
      type: [String, Number],
      default: 1200
    },
    // mode=circle时的暗边颜色
    inactiveColor: {
      type: String,
      default: ''
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.loadingIcon)
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 44:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 45);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 440:
/*!********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-icon/components/uv-icon/icons.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'uvicon-level': 'e68f',
  'uvicon-checkbox-mark': 'e659',
  'uvicon-folder': 'e694',
  'uvicon-movie': 'e67c',
  'uvicon-star-fill': 'e61e',
  'uvicon-star': 'e618',
  'uvicon-phone-fill': 'e6ac',
  'uvicon-phone': 'e6ba',
  'uvicon-apple-fill': 'e635',
  'uvicon-backspace': 'e64d',
  'uvicon-attach': 'e640',
  'uvicon-empty-data': 'e671',
  'uvicon-empty-address': 'e68a',
  'uvicon-empty-favor': 'e662',
  'uvicon-empty-car': 'e657',
  'uvicon-empty-order': 'e66b',
  'uvicon-empty-list': 'e672',
  'uvicon-empty-search': 'e677',
  'uvicon-empty-permission': 'e67d',
  'uvicon-empty-news': 'e67e',
  'uvicon-empty-history': 'e685',
  'uvicon-empty-coupon': 'e69b',
  'uvicon-empty-page': 'e60e',
  'uvicon-empty-wifi-off': 'e6cc',
  'uvicon-reload': 'e627',
  'uvicon-order': 'e695',
  'uvicon-server-man': 'e601',
  'uvicon-search': 'e632',
  'uvicon-more-dot-fill': 'e66f',
  'uvicon-scan': 'e631',
  'uvicon-map': 'e665',
  'uvicon-map-fill': 'e6a8',
  'uvicon-tags': 'e621',
  'uvicon-tags-fill': 'e613',
  'uvicon-eye': 'e664',
  'uvicon-eye-fill': 'e697',
  'uvicon-eye-off': 'e69c',
  'uvicon-eye-off-outline': 'e688',
  'uvicon-mic': 'e66d',
  'uvicon-mic-off': 'e691',
  'uvicon-calendar': 'e65c',
  'uvicon-trash': 'e623',
  'uvicon-trash-fill': 'e6ce',
  'uvicon-play-left': 'e6bf',
  'uvicon-play-right': 'e6b3',
  'uvicon-minus': 'e614',
  'uvicon-plus': 'e625',
  'uvicon-info-circle': 'e69f',
  'uvicon-info-circle-fill': 'e6a7',
  'uvicon-question-circle': 'e622',
  'uvicon-question-circle-fill': 'e6bc',
  'uvicon-close': 'e65a',
  'uvicon-checkmark': 'e64a',
  'uvicon-checkmark-circle': 'e643',
  'uvicon-checkmark-circle-fill': 'e668',
  'uvicon-setting': 'e602',
  'uvicon-setting-fill': 'e6d0',
  'uvicon-heart': 'e6a2',
  'uvicon-heart-fill': 'e68b',
  'uvicon-camera': 'e642',
  'uvicon-camera-fill': 'e650',
  'uvicon-more-circle': 'e69e',
  'uvicon-more-circle-fill': 'e684',
  'uvicon-chat': 'e656',
  'uvicon-chat-fill': 'e63f',
  'uvicon-bag': 'e647',
  'uvicon-error-circle': 'e66e',
  'uvicon-error-circle-fill': 'e655',
  'uvicon-close-circle': 'e64e',
  'uvicon-close-circle-fill': 'e666',
  'uvicon-share': 'e629',
  'uvicon-share-fill': 'e6bb',
  'uvicon-share-square': 'e6c4',
  'uvicon-shopping-cart': 'e6cb',
  'uvicon-shopping-cart-fill': 'e630',
  'uvicon-bell': 'e651',
  'uvicon-bell-fill': 'e604',
  'uvicon-list': 'e690',
  'uvicon-list-dot': 'e6a9',
  'uvicon-zhifubao-circle-fill': 'e617',
  'uvicon-weixin-circle-fill': 'e6cd',
  'uvicon-weixin-fill': 'e620',
  'uvicon-qq-fill': 'e608',
  'uvicon-qq-circle-fill': 'e6b9',
  'uvicon-moments-circel-fill': 'e6c2',
  'uvicon-moments': 'e6a0',
  'uvicon-car': 'e64f',
  'uvicon-car-fill': 'e648',
  'uvicon-warning-fill': 'e6c7',
  'uvicon-warning': 'e6c1',
  'uvicon-clock-fill': 'e64b',
  'uvicon-clock': 'e66c',
  'uvicon-edit-pen': 'e65d',
  'uvicon-edit-pen-fill': 'e679',
  'uvicon-email': 'e673',
  'uvicon-email-fill': 'e683',
  'uvicon-minus-circle': 'e6a5',
  'uvicon-plus-circle': 'e603',
  'uvicon-plus-circle-fill': 'e611',
  'uvicon-file-text': 'e687',
  'uvicon-file-text-fill': 'e67f',
  'uvicon-pushpin': 'e6d1',
  'uvicon-pushpin-fill': 'e6b6',
  'uvicon-grid': 'e68c',
  'uvicon-grid-fill': 'e698',
  'uvicon-play-circle': 'e6af',
  'uvicon-play-circle-fill': 'e62a',
  'uvicon-pause-circle-fill': 'e60c',
  'uvicon-pause': 'e61c',
  'uvicon-pause-circle': 'e696',
  'uvicon-gift-fill': 'e6b0',
  'uvicon-gift': 'e680',
  'uvicon-kefu-ermai': 'e660',
  'uvicon-server-fill': 'e610',
  'uvicon-coupon-fill': 'e64c',
  'uvicon-coupon': 'e65f',
  'uvicon-integral': 'e693',
  'uvicon-integral-fill': 'e6b1',
  'uvicon-home-fill': 'e68e',
  'uvicon-home': 'e67b',
  'uvicon-account': 'e63a',
  'uvicon-account-fill': 'e653',
  'uvicon-thumb-down-fill': 'e628',
  'uvicon-thumb-down': 'e60a',
  'uvicon-thumb-up': 'e612',
  'uvicon-thumb-up-fill': 'e62c',
  'uvicon-lock-fill': 'e6a6',
  'uvicon-lock-open': 'e68d',
  'uvicon-lock-opened-fill': 'e6a1',
  'uvicon-lock': 'e69d',
  'uvicon-red-packet': 'e6c3',
  'uvicon-photo-fill': 'e6b4',
  'uvicon-photo': 'e60d',
  'uvicon-volume-off-fill': 'e6c8',
  'uvicon-volume-off': 'e6bd',
  'uvicon-volume-fill': 'e624',
  'uvicon-volume': 'e605',
  'uvicon-download': 'e670',
  'uvicon-arrow-up-fill': 'e636',
  'uvicon-arrow-down-fill': 'e638',
  'uvicon-play-left-fill': 'e6ae',
  'uvicon-play-right-fill': 'e6ad',
  'uvicon-arrow-downward': 'e634',
  'uvicon-arrow-leftward': 'e63b',
  'uvicon-arrow-rightward': 'e644',
  'uvicon-arrow-upward': 'e641',
  'uvicon-arrow-down': 'e63e',
  'uvicon-arrow-right': 'e63c',
  'uvicon-arrow-left': 'e646',
  'uvicon-arrow-up': 'e633',
  'uvicon-skip-back-left': 'e6c5',
  'uvicon-skip-forward-right': 'e61f',
  'uvicon-arrow-left-double': 'e637',
  'uvicon-man': 'e675',
  'uvicon-woman': 'e626',
  'uvicon-en': 'e6b8',
  'uvicon-twitte': 'e607',
  'uvicon-twitter-circle-fill': 'e6cf'
};
exports.default = _default;

/***/ }),

/***/ 441:
/*!********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-icon/components/uv-icon/props.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 图标类名
    name: {
      type: String,
      default: ''
    },
    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: '#606266'
    },
    // 字体大小，单位px
    size: {
      type: [String, Number],
      default: '16px'
    },
    // 是否显示粗体
    bold: {
      type: Boolean,
      default: false
    },
    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [String, Number],
      default: null
    },
    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: ''
    },
    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: 'uvicon'
    },
    // 图标右边或者下面的文字
    label: {
      type: [String, Number],
      default: ''
    },
    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: 'right'
    },
    // label的大小
    labelSize: {
      type: [String, Number],
      default: '15px'
    },
    // label的颜色
    labelColor: {
      type: String,
      default: '#606266'
    },
    // label与图标的距离
    space: {
      type: [String, Number],
      default: '3px'
    },
    // 图片的mode
    imgMode: {
      type: String,
      default: 'aspectFit'
    },
    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: ''
    },
    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: ''
    },
    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: 0
    },
    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: false
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.icon)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 449:
/*!**********************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-swiper/components/uv-swiper-indicator/props.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 轮播的长度
    length: {
      type: [String, Number],
      default: 0
    },
    // 当前处于活动状态的轮播的索引
    current: {
      type: [String, Number],
      default: 0
    },
    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: ''
    },
    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: ''
    },
    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: ''
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.swiperIndicator)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 45:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 457:
/*!***********************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-notice-bar/components/uv-column-notice/props.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 显示的内容，字符串
    text: {
      type: [Array],
      default: ''
    },
    // 是否显示左侧的音量图标
    icon: {
      type: [String, Boolean, null],
      default: 'volume'
    },
    // 通告模式，link-显示右箭头，closable-显示右侧关闭图标
    mode: {
      type: String,
      default: ''
    },
    // 文字颜色，各图标也会使用文字颜色
    color: {
      type: String,
      default: '#f9ae3d'
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#fdf6ec'
    },
    // 字体大小，单位px
    fontSize: {
      type: [String, Number],
      default: 14
    },
    // 水平滚动时的滚动速度，即每秒滚动多少px(px)，这有利于控制文字无论多少时，都能有一个恒定的速度
    speed: {
      type: [String, Number],
      default: 80
    },
    // direction = row时，是否使用步进形式滚动
    step: {
      type: Boolean,
      default: false
    },
    // 滚动一个周期的时间长，单位ms
    duration: {
      type: [String, Number],
      default: 1500
    },
    // 是否禁止用手滑动切换，仅`direction="column"生效`
    // 目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序
    disableTouch: {
      type: Boolean,
      default: true
    },
    // 是否禁止滚动，仅`direction="column"生效`
    disableScroll: {
      type: Boolean,
      default: false
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.columnNotice)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 46:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 465:
/*!********************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-notice-bar/components/uv-row-notice/props.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    // 显示的内容，字符串
    text: {
      type: String,
      default: ''
    },
    // 是否显示左侧的音量图标
    icon: {
      type: [String, Boolean, null],
      default: 'volume'
    },
    // 通告模式，link-显示右箭头，closable-显示右侧关闭图标
    mode: {
      type: String,
      default: ''
    },
    // 文字颜色，各图标也会使用文字颜色
    color: {
      type: String,
      default: '#f9ae3d'
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#fdf6ec'
    },
    // 字体大小，单位px
    fontSize: {
      type: [String, Number],
      default: 14
    },
    // 水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度
    speed: {
      type: [String, Number],
      default: 80
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.rowNotice)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 47:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 46);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 48);
var construct = __webpack_require__(/*! ./construct.js */ 15);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 48:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 480:
/*!******************************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-transition/components/uv-transition/createAnimation.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimation = createAnimation;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {
    (0, _classCallCheck2.default)(this, MPAnimation);
    this.options = options;
    // 在iOS10+QQ小程序平台下，传给原生的对象一定是个普通对象而不是Proxy对象，否则会报parameter should be Object instead of ProxyObject的错误
    this.animation = uni.createAnimation(_objectSpread({}, options));
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  (0, _createClass2.default)(MPAnimation, [{
    key: "_nvuePushAnimates",
    value: function _nvuePushAnimates(type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    }
  }, {
    key: "_animateRun",
    value: function _animateRun() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles
        }, config), function (res) {
          resolve();
        });
      });
    }
  }, {
    key: "_nvueNextAnimate",
    value: function _nvueNextAnimate(animates) {
      var _this2 = this;
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {
        var styles = obj.styles,
          config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.animation.step(config);
      return this;
    }
  }, {
    key: "run",
    value: function run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);
    }
  }]);
  return MPAnimation;
}();
var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];
var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {
    var _this$animation;
    (_this$animation = this.animation)[type].apply(_this$animation, arguments);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 486:
/*!********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-line/components/uv-line/props.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _uni$$uv, _uni$$uv$props;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  props: _objectSpread({
    color: {
      type: String,
      default: '#d6d7d9'
    },
    // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
    length: {
      type: [String, Number],
      default: '100%'
    },
    // 线条方向，col-竖向，row-横向
    direction: {
      type: String,
      default: 'row'
    },
    // 是否显示细边框
    hairline: {
      type: Boolean,
      default: true
    },
    // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
    margin: {
      type: [String, Number],
      default: 0
    },
    // 是否虚线，true-虚线，false-实线
    dashed: {
      type: Boolean,
      default: false
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.line)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 57:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 58)();
module.exports = runtime;

/***/ }),

/***/ 58:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 59:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!*******************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/function/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$parent = $parent;
exports.addStyle = addStyle;
exports.addUnit = addUnit;
exports.deepClone = deepClone;
exports.deepMerge = deepMerge;
exports.error = error;
exports.formValidate = formValidate;
exports.getDuration = getDuration;
exports.getHistoryPage = getHistoryPage;
exports.getProperty = getProperty;
exports.getPx = getPx;
exports.guid = guid;
exports.os = os;
exports.padZero = padZero;
exports.page = page;
exports.pages = pages;
exports.priceFormat = priceFormat;
exports.queryParams = queryParams;
exports.random = random;
exports.randomArray = randomArray;
exports.range = range;
exports.setConfig = setConfig;
exports.setProperty = setProperty;
exports.sleep = sleep;
exports.sys = sys;
exports.timeFormat = timeFormat;
exports.timeFrom = timeFrom;
exports.toast = toast;
exports.trim = trim;
exports.type2icon = type2icon;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _test = __webpack_require__(/*! ./test.js */ 61);
var _digit = __webpack_require__(/*! ./digit.js */ 62);
/**
 * @description 如果value小于min，取min；如果value大于max，取max
 * @param {number} min
 * @param {number} max
 * @param {number} value
 */
function range() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return Math.max(min, Math.min(max, Number(value)));
}

/**
 * @description 用于获取用户传递值的px值  如果用户传递了"xxpx"或者"xxrpx"，取出其数值部分，如果是"xxxrpx"还需要用过uni.upx2px进行转换
 * @param {number|string} value 用户传递值的px值
 * @param {boolean} unit
 * @returns {number|string}
 */
function getPx(value) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if ((0, _test.number)(value)) {
    return unit ? "".concat(value, "px") : Number(value);
  }
  // 如果带有rpx，先取出其数值部分，再转为px值
  if (/(rpx|upx)$/.test(value)) {
    return unit ? "".concat(uni.upx2px(parseInt(value)), "px") : Number(uni.upx2px(parseInt(value)));
  }
  return unit ? "".concat(parseInt(value), "px") : parseInt(value);
}

/**
 * @description 进行延时，以达到可以简写代码的目的 比如: await uni.$uv.sleep(20)将会阻塞20ms
 * @param {number} value 堵塞时间 单位ms 毫秒
 * @returns {Promise} 返回promise
 */
function sleep() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, value);
  });
}
/**
 * @description 运行期判断平台
 * @returns {string} 返回所在平台(小写)
 * @link 运行期判断平台 https://uniapp.dcloud.io/frame?id=判断平台
 */
function os() {
  return uni.getSystemInfoSync().platform.toLowerCase();
}
/**
 * @description 获取系统信息同步接口
 * @link 获取系统信息同步接口 https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync
 */
function sys() {
  return uni.getSystemInfoSync();
}

/**
 * @description 取一个区间数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  }
  return 0;
}

/**
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;
  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return "u".concat(uuid.join(''));
  }
  return uuid.join('');
}

/**
* @description 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
   this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
   这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
   值(默认为undefined)，就是查找最顶层的$parent
*  @param {string|undefined} name 父组件的参数名
*/
function $parent() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/**
 * @description 样式转换
 * 对象转字符串，或者字符串转对象
 * @param {object | string} customStyle 需要转换的目标
 * @param {String} target 转换的目的，object-转为对象，string-转为字符串
 * @returns {object|string}
 */
function addStyle(customStyle) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'object';
  // 字符串转字符串，对象转对象情形，直接返回
  if ((0, _test.empty)(customStyle) || (0, _typeof2.default)(customStyle) === 'object' && target === 'object' || target === 'string' && typeof customStyle === 'string') {
    return customStyle;
  }
  // 字符串转对象
  if (target === 'object') {
    // 去除字符串样式中的两端空格(中间的空格不能去掉，比如padding: 20px 0如果去掉了就错了)，空格是无用的
    customStyle = trim(customStyle);
    // 根据";"将字符串转为数组形式
    var styleArray = customStyle.split(';');
    var style = {};
    // 历遍数组，拼接成对象
    for (var i = 0; i < styleArray.length; i++) {
      // 'font-size:20px;color:red;'，如此最后字符串有";"的话，会导致styleArray最后一个元素为空字符串，这里需要过滤
      if (styleArray[i]) {
        var item = styleArray[i].split(':');
        style[trim(item[0])] = trim(item[1]);
      }
    }
    return style;
  }
  // 这里为对象转字符串形式
  var string = '';
  for (var _i2 in customStyle) {
    // 驼峰转为中划线的形式，否则css内联样式，无法识别驼峰样式属性名
    var key = _i2.replace(/([A-Z])/g, '-$1').toLowerCase();
    string += "".concat(key, ":").concat(customStyle[_i2], ";");
  }
  // 去除两端空格
  return trim(string);
}

/**
 * @description 添加单位，如果有rpx，upx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
 * @param {string|number} value 需要添加单位的值
 * @param {string} unit 添加的单位名 比如px
 */
function addUnit() {
  var _uni, _uni$$uv, _uni$$uv$config, _uni2, _uni2$$uv, _uni2$$uv$config;
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_uni = uni) !== null && _uni !== void 0 && (_uni$$uv = _uni.$uv) !== null && _uni$$uv !== void 0 && (_uni$$uv$config = _uni$$uv.config) !== null && _uni$$uv$config !== void 0 && _uni$$uv$config.unit ? (_uni2 = uni) === null || _uni2 === void 0 ? void 0 : (_uni2$$uv = _uni2.$uv) === null || _uni2$$uv === void 0 ? void 0 : (_uni2$$uv$config = _uni2$$uv.config) === null || _uni2$$uv$config === void 0 ? void 0 : _uni2$$uv$config.unit : 'px';
  value = String(value);
  // 用uvui内置验证规则中的number判断是否为数值
  return (0, _test.number)(value) ? "".concat(value).concat(unit) : value;
}

/**
 * @description 深度克隆
 * @param {object} obj 需要深度克隆的对象
 * @param cache 缓存
 * @returns {*} 克隆后的对象或者原值（不是对象）
 */
function deepClone(obj) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
  if (obj === null || (0, _typeof2.default)(obj) !== 'object') return obj;
  if (cache.has(obj)) return cache.get(obj);
  var clone;
  if (obj instanceof Date) {
    clone = new Date(obj.getTime());
  } else if (obj instanceof RegExp) {
    clone = new RegExp(obj);
  } else if (obj instanceof Map) {
    clone = new Map(Array.from(obj, function (_ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      return [key, deepClone(value, cache)];
    }));
  } else if (obj instanceof Set) {
    clone = new Set(Array.from(obj, function (value) {
      return deepClone(value, cache);
    }));
  } else if (Array.isArray(obj)) {
    clone = obj.map(function (value) {
      return deepClone(value, cache);
    });
  } else if (Object.prototype.toString.call(obj) === '[object Object]') {
    clone = Object.create(Object.getPrototypeOf(obj));
    cache.set(obj, clone);
    for (var _i3 = 0, _Object$entries = Object.entries(obj); _i3 < _Object$entries.length; _i3++) {
      var _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i3], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      clone[key] = deepClone(value, cache);
    }
  } else {
    clone = Object.assign({}, obj);
  }
  cache.set(obj, clone);
  return clone;
}

/**
 * @description JS对象深度合并
 * @param {object} target 需要拷贝的对象
 * @param {object} source 拷贝的来源对象
 * @returns {object|boolean} 深度合并后的对象或者false（入参有不是对象）
 */
function deepMerge() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = deepClone(target);
  if ((0, _typeof2.default)(target) !== 'object' || target === null || (0, _typeof2.default)(source) !== 'object' || source === null) return target;
  var merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    var sourceValue = source[prop];
    var targetValue = merged[prop];
    if (sourceValue instanceof Date) {
      merged[prop] = new Date(sourceValue);
    } else if (sourceValue instanceof RegExp) {
      merged[prop] = new RegExp(sourceValue);
    } else if (sourceValue instanceof Map) {
      merged[prop] = new Map(sourceValue);
    } else if (sourceValue instanceof Set) {
      merged[prop] = new Set(sourceValue);
    } else if ((0, _typeof2.default)(sourceValue) === 'object' && sourceValue !== null) {
      merged[prop] = deepMerge(targetValue, sourceValue);
    } else {
      merged[prop] = sourceValue;
    }
  }
  return merged;
}

/**
 * @description error提示
 * @param {*} err 错误内容
 */
function error(err) {
  // 开发环境才提示，生产环境不会提示
  if (true) {
    console.error("uvui\u63D0\u793A\uFF1A".concat(err));
  }
}

/**
 * @description 打乱数组
 * @param {array} array 需要打乱的数组
 * @returns {array} 打乱后的数组
 */
function randomArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {
    return Math.random() - 0.5;
  });
}

// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {
    var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== '[object String]') {
      throw new TypeError('fillString must be String');
    }
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);
    var fillLength = maxLength - str.length;
    var times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

/**
 * @description 格式化时间
 * @param {String|Number} dateTime 需要格式化的时间戳
 * @param {String} fmt 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd
 * @returns {string} 返回格式化后的字符串
 */
function timeFormat() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var formatStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  var date;
  // 若传入时间为假值，则取当前时间
  if (!dateTime) {
    date = new Date();
  }
  // 若为unix秒时间戳，则转为毫秒时间戳（逻辑有点奇怪，但不敢改，以保证历史兼容）
  else if (/^\d{10}$/.test(dateTime === null || dateTime === void 0 ? void 0 : dateTime.toString().trim())) {
    date = new Date(dateTime * 1000);
  }
  // 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
  else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
    date = new Date(Number(dateTime));
  }
  // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
  // 处理 '2022-07-10 01:02:03'，跳过 '2022-07-10T01:02:03'
  else if (typeof dateTime === 'string' && dateTime.includes('-') && !dateTime.includes('T')) {
    date = new Date(dateTime.replace(/-/g, '/'));
  }
  // 其他都认为符合 RFC 2822 规范
  else {
    date = new Date(dateTime);
  }
  var timeSource = {
    'y': date.getFullYear().toString(),
    // 年
    'm': (date.getMonth() + 1).toString().padStart(2, '0'),
    // 月
    'd': date.getDate().toString().padStart(2, '0'),
    // 日
    'h': date.getHours().toString().padStart(2, '0'),
    // 时
    'M': date.getMinutes().toString().padStart(2, '0'),
    // 分
    's': date.getSeconds().toString().padStart(2, '0') // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var key in timeSource) {
    var _ref3 = new RegExp("".concat(key, "+")).exec(formatStr) || [],
      _ref4 = (0, _slicedToArray2.default)(_ref3, 1),
      ret = _ref4[0];
    if (ret) {
      // 年可能只需展示两位
      var beginIndex = key === 'y' && ret.length === 2 ? 2 : 0;
      formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
    }
  }
  return formatStr;
}

/**
 * @description 时间戳转为多久之前
 * @param {String|Number} timestamp 时间戳
 * @param {String|Boolean} format
 * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 * @returns {string} 转化后的内容
 */
function timeFrom() {
  var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  if (timestamp == null) timestamp = Number(new Date());
  timestamp = parseInt(timestamp);
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var timer = new Date().getTime() - timestamp;
  timer = parseInt(timer / 1000);
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = "".concat(parseInt(timer / 60), "\u5206\u949F\u524D");
      break;
    case timer >= 3600 && timer < 86400:
      tips = "".concat(parseInt(timer / 3600), "\u5C0F\u65F6\u524D");
      break;
    case timer >= 86400 && timer < 2592000:
      tips = "".concat(parseInt(timer / 86400), "\u5929\u524D");
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = "".concat(parseInt(timer / (86400 * 30)), "\u4E2A\u6708\u524D");
        } else {
          tips = "".concat(parseInt(timer / (86400 * 365)), "\u5E74\u524D");
        }
      } else {
        tips = timeFormat(timestamp, format);
      }
  }
  return tips;
}

/**
 * @description 去除空格
 * @param String str 需要去除空格的字符串
 * @param String pos both(左右)|left|right|all 默认both
 */
function trim(str) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  str = String(str);
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, '');
  }
  if (pos == 'left') {
    return str.replace(/^\s*/, '');
  }
  if (pos == 'right') {
    return str.replace(/(\s*$)/g, '');
  }
  if (pos == 'all') {
    return str.replace(/\s+/g, '');
  }
  return str;
}

/**
 * @description 对象转url参数
 * @param {object} data,对象
 * @param {Boolean} isPrefix,是否自动加上"?"
 * @param {string} arrayFormat 规则 indices|brackets|repeat|comma
 */
function queryParams() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';
  var _loop = function _loop(key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push("".concat(key, "[").concat(i, "]=").concat(value[i]));
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "=").concat(_value));
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = '';
          value.forEach(function (_value) {
            commaStr += (commaStr ? ',' : '') + _value;
          });
          _result.push("".concat(key, "=").concat(commaStr));
          break;
        default:
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });
      }
    } else {
      _result.push("".concat(key, "=").concat(value));
    }
  };
  for (var key in data) {
    var _ret = _loop(key);
    if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}

/**
 * 显示消息提示框
 * @param {String} title 提示的内容，长度与 icon 取值有关。
 * @param {Number} duration 提示的延迟时间，单位毫秒，默认：2000
 */
function toast(title) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  uni.showToast({
    title: String(title),
    icon: 'none',
    duration: duration
  });
}

/**
 * @description 根据主题type值,获取对应的图标
 * @param {String} type 主题名称,primary|info|error|warning|success
 * @param {boolean} fill 是否使用fill填充实体的图标
 */
function type2icon() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';
  var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';
  }
  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}

/**
 * @description 数字格式化
 * @param {number|string} number 要格式化的数字
 * @param {number} decimals 保留几位小数
 * @param {string} decimalPoint 小数点符号
 * @param {string} thousandsSeparator 千分位符号
 * @returns {string} 格式化后的数字
 */
function priceFormat(number) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var decimalPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  var thousandsSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';
  number = "".concat(number).replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  var sep = typeof thousandsSeparator === 'undefined' ? ',' : thousandsSeparator;
  var dec = typeof decimalPoint === 'undefined' ? '.' : decimalPoint;
  var s = '';
  s = (prec ? (0, _digit.round)(n, prec) + '' : "".concat(Math.round(n))).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1".concat(sep, "$2"));
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

/**
 * @description 获取duration值
 * 如果带有ms或者s直接返回，如果大于一定值，认为是ms单位，小于一定值，认为是s单位
 * 比如以30位阈值，那么300大于30，可以理解为用户想要的是300ms，而不是想花300s去执行一个动画
 * @param {String|number} value 比如: "1s"|"100ms"|1|100
 * @param {boolean} unit  提示: 如果是false 默认返回number
 * @return {string|number}
 */
function getDuration(value) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var valueNum = parseInt(value);
  if (unit) {
    if (/s$/.test(value)) return value;
    return value > 30 ? "".concat(value, "ms") : "".concat(value, "s");
  }
  if (/ms$/.test(value)) return valueNum;
  if (/s$/.test(value)) return valueNum > 30 ? valueNum : valueNum * 1000;
  return valueNum;
}

/**
 * @description 日期的月或日补零操作
 * @param {String} value 需要补零的值
 */
function padZero(value) {
  return "00".concat(value).slice(-2);
}

/**
 * @description 在uv-form的子组件内容发生变化，或者失去焦点时，尝试通知uv-form执行校验方法
 * @param {*} instance
 * @param {*} event
 */
function formValidate(instance, event) {
  var formItem = $parent.call(instance, 'uv-form-item');
  var form = $parent.call(instance, 'uv-form');
  // 如果发生变化的input或者textarea等，其父组件中有uv-form-item或者uv-form等，就执行form的validate方法
  // 同时将form-item的pros传递给form，让其进行精确对象验证
  if (formItem && form) {
    form.validateField(formItem.prop, function () {}, event);
  }
}

/**
 * @description 获取某个对象下的属性，用于通过类似'a.b.c'的形式去获取一个对象的的属性的形式
 * @param {object} obj 对象
 * @param {string} key 需要获取的属性字段
 * @returns {*}
 */
function getProperty(obj, key) {
  if (!obj) {
    return;
  }
  if (typeof key !== 'string' || key === '') {
    return '';
  }
  if (key.indexOf('.') !== -1) {
    var keys = key.split('.');
    var firstObj = obj[keys[0]] || {};
    for (var i = 1; i < keys.length; i++) {
      if (firstObj) {
        firstObj = firstObj[keys[i]];
      }
    }
    return firstObj;
  }
  return obj[key];
}

/**
 * @description 设置对象的属性值，如果'a.b.c'的形式进行设置
 * @param {object} obj 对象
 * @param {string} key 需要设置的属性
 * @param {string} value 设置的值
 */
function setProperty(obj, key, value) {
  if (!obj) {
    return;
  }
  // 递归赋值
  var inFn = function inFn(_obj, keys, v) {
    // 最后一个属性key
    if (keys.length === 1) {
      _obj[keys[0]] = v;
      return;
    }
    // 0~length-1个key
    while (keys.length > 1) {
      var k = keys[0];
      if (!_obj[k] || (0, _typeof2.default)(_obj[k]) !== 'object') {
        _obj[k] = {};
      }
      var _key = keys.shift();
      // 自调用判断是否存在属性，不存在则自动创建对象
      inFn(_obj[k], keys, v);
    }
  };
  if (typeof key !== 'string' || key === '') {} else if (key.indexOf('.') !== -1) {
    // 支持多层级赋值操作
    var keys = key.split('.');
    inFn(obj, keys, value);
  } else {
    obj[key] = value;
  }
}

/**
 * @description 获取当前页面路径
 */
function page() {
  var _pages;
  var pages = getCurrentPages();
  var route = (_pages = pages[pages.length - 1]) === null || _pages === void 0 ? void 0 : _pages.route;
  // 某些特殊情况下(比如页面进行redirectTo时的一些时机)，pages可能为空数组
  return "/".concat(route ? route : '');
}

/**
 * @description 获取当前路由栈实例数组
 */
function pages() {
  var pages = getCurrentPages();
  return pages;
}

/**
 * 获取页面历史栈指定层实例
 * @param back {number} [0] - 0或者负数，表示获取历史栈的哪一层，0表示获取当前页面实例，-1 表示获取上一个页面实例。默认0。
 */
function getHistoryPage() {
  var back = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var pages = getCurrentPages();
  var len = pages.length;
  return pages[len - 1 + back];
}

/**
 * @description 修改uvui内置属性值
 * @param {object} props 修改内置props属性
 * @param {object} config 修改内置config属性
 * @param {object} color 修改内置color属性
 * @param {object} zIndex 修改内置zIndex属性
 */
function setConfig(_ref5) {
  var _ref5$props = _ref5.props,
    props = _ref5$props === void 0 ? {} : _ref5$props,
    _ref5$config = _ref5.config,
    config = _ref5$config === void 0 ? {} : _ref5$config,
    _ref5$color = _ref5.color,
    color = _ref5$color === void 0 ? {} : _ref5$color,
    _ref5$zIndex = _ref5.zIndex,
    zIndex = _ref5$zIndex === void 0 ? {} : _ref5$zIndex;
  var deepMerge = uni.$uv.deepMerge;
  uni.$uv.config = deepMerge(uni.$uv.config, config);
  uni.$uv.props = deepMerge(uni.$uv.props, props);
  uni.$uv.color = deepMerge(uni.$uv.color, color);
  uni.$uv.zIndex = deepMerge(uni.$uv.zIndex, zIndex);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 61:
/*!******************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/function/test.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.amount = amount;
exports.array = array;
exports.carNo = carNo;
exports.chinese = chinese;
exports.code = code;
exports.contains = contains;
exports.date = date;
exports.dateISO = dateISO;
exports.digits = digits;
exports.email = email;
exports.empty = empty;
exports.enOrNum = enOrNum;
exports.func = func;
exports.idCard = idCard;
exports.image = image;
exports.jsonString = jsonString;
exports.landline = landline;
exports.letter = letter;
exports.mobile = mobile;
exports.number = number;
exports.object = object;
exports.promise = promise;
exports.range = range;
exports.rangeLength = rangeLength;
exports.regExp = regExp;
exports.string = string;
exports.url = url;
exports.video = video;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 验证电子邮箱格式
 */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
  return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
}

/**
 * 验证URL格式
 */
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
}

/**
 * 验证日期格式
 */
function date(value) {
  if (!value) return false;
  // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
  if (number(value)) value = +value;
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
 * 验证十进制数字
 */
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}

/**
 * 验证字符串
 */
function string(value) {
  return typeof value === 'string';
}

/**
 * 验证整数
 */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
 * 验证身份证号码
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
}

/**
 * 是否车牌号
 */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  }
  if (value.length === 8) {
    return xreg.test(value);
  }
  return false;
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
  // 金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
  // 英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
 * 是否固定电话
 */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
  switch ((0, _typeof2.default)(value)) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (value === 0 || isNaN(value)) return true;
      break;
    case 'object':
      if (value === null || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
  if (typeof value === 'string') {
    try {
      var obj = JSON.parse(value);
      if ((0, _typeof2.default)(obj) === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 是否数组
 */
function array(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value) === '[object Array]';
}

/**
 * 是否对象
 */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}

/**
 * 是否函数方法
 * @param {Object} value
 */
function func(value) {
  return typeof value === 'function';
}

/**
 * 是否promise对象
 * @param {Object} value
 */
function promise(value) {
  return object(value) && func(value.then) && func(value.catch);
}

/** 是否图片格式
 * @param {Object} value
 */
function image(value) {
  var newValue = value.split('?')[0];
  var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return IMAGE_REGEXP.test(newValue);
}

/**
 * 是否视频格式
 * @param {Object} value
 */
function video(value) {
  var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
  return VIDEO_REGEXP.test(value);
}

/**
 * 是否为正则对象
 * @param {Object}
 * @return {Boolean}
 */
function regExp(o) {
  return o && Object.prototype.toString.call(o) === '[object RegExp]';
}

/***/ }),

/***/ 62:
/*!*******************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-ui-tools/libs/function/digit.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.divide = divide;
exports.enableBoundaryChecking = enableBoundaryChecking;
exports.minus = minus;
exports.plus = plus;
exports.round = round;
exports.times = times;
var _toArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toArray */ 63));
var _boundaryCheckingState = true; // 是否进行越界检查的全局开关

/**
 * 把错误的数据转正
 * @private
 * @example strip(0.09999999999999998)=0.1
 */
function strip(num) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  return +parseFloat(Number(num).toPrecision(precision));
}

/**
 * Return digits length of a number
 * @private
 * @param {*number} num Input number
 */
function digitLength(num) {
  // Get digit length of e
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}

/**
 * 把小数转成整数,如果是小数则放大成整数
 * @private
 * @param {*number} num 输入数
 */
function float2Fixed(num) {
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}

/**
 * 检测数字是否越界，如果越界给出提示
 * @private
 * @param {*number} num 输入数
 */
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn("".concat(num, " \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E"));
    }
  }
}

/**
 * 把递归操作扁平迭代化
 * @param {number[]} arr 要操作的数字数组
 * @param {function} operation 迭代操作
 * @private
 */
function iteratorOperation(arr, operation) {
  var _arr = (0, _toArray2.default)(arr),
    num1 = _arr[0],
    num2 = _arr[1],
    others = _arr.slice(2);
  var res = operation(num1, num2);
  others.forEach(function (num) {
    res = operation(res, num);
  });
  return res;
}

/**
 * 高精度乘法
 * @export
 */
function times() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }
  var num1 = nums[0],
    num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;
  checkBoundary(leftValue);
  return leftValue / Math.pow(10, baseNum);
}

/**
 * 高精度加法
 * @export
 */
function plus() {
  for (var _len2 = arguments.length, nums = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    nums[_key2] = arguments[_key2];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, plus);
  }
  var num1 = nums[0],
    num2 = nums[1];
  // 取最大的小数位
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  // 把小数都转为整数然后再计算
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}

/**
 * 高精度减法
 * @export
 */
function minus() {
  for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    nums[_key3] = arguments[_key3];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, minus);
  }
  var num1 = nums[0],
    num2 = nums[1];
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}

/**
 * 高精度除法
 * @export
 */
function divide() {
  for (var _len4 = arguments.length, nums = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    nums[_key4] = arguments[_key4];
  }
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }
  var num1 = nums[0],
    num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  // 重要，这里必须用strip进行修正
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}

/**
 * 四舍五入
 * @export
 */
function round(num, ratio) {
  var base = Math.pow(10, ratio);
  var result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  // 位数不足则补0
  return result;
}

/**
 * 是否进行边界检查，默认开启
 * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
 * @export
 */
function enableBoundaryChecking() {
  var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  _boundaryCheckingState = flag;
}
var _default = {
  times: times,
  plus: plus,
  minus: minus,
  divide: divide,
  round: round,
  enableBoundaryChecking: enableBoundaryChecking
};
exports.default = _default;

/***/ }),

/***/ 63:
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toArray.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}
module.exports = _toArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 64:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/电子产品.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 65:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/儿童玩具.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADICAYAAAAeEIaEAAAAAXNSR0IArs4c6QAAHHNJREFUeF7tXQmYJEWVfi+7StoZHBhBF+VY7lMQBEEGFhuRYxy6KiOLEjxGDnE8AFcXvJBdBxVwFY9VVFjlUg616IzsbqBxEMEdOQRmFbkPkRHBYV25r5nuzLf1eqvGnqZnKqsqj8isF9+XX3V3vXjHH/l35BHxHoI0QUAQSBUBTNW6GBcEBAEQEspJIAikjICQMOUBEPOCgJBQzgFBIGUEhIQpD4CYFwSEhHIOCAIpIyAkTHkAxLwgICSUc0AQSBkBIWHKAyDmBQEhoZwDgkDKCAgJUx4AMS8ICAnlHBAEEkJgYGCgsOmmm8566aWXZgdBMCsIgtmFQmGWkDChARAz+UJgcHBwFiJuXiwWNw+CYHMAmDyIaHNE3AAAZs9wzMg3IWG+zg2JJmIEbNveGxH3I6JtLcuaJFmDcBtFZUpIGBWSoifzCFSr1Q1WrVq1n2VZ8wBgX0Tch4h4Rou1CQljhVeUm4zA4ODgxsVicSAIgrcx4RqkKybts5AwacTFXqoIDA4ObtXX13cwABwCAAcj4pxUHQKQ/YRpD4DYjx+BUqm0m2VZTDwmHX9a8VsNb0FmwvBYiWSGEKhUKjv6vn9Ug3h8j2dsExIaOzTiWCcIKKUOBwAm35EAUOhER9J9hIRJIy72IkfAcZw3ENFRiHgkEe0TuYGYFQoJYwZY1MeHQLlc3hkRT0BEnvleG5+leDULCePFV7THgMDChQtnP//88ycDwL8AAK9OyXQTEmZ6+HrPeaXU0Q3y7ZZS9PcDwP1E9FtEZB/42KYbX4SE3aAnfRNDwHGcA4mIZz5+8JJGu8GyrM8ODQ39ZrpxpdQJ9Rn5mwDQ0Yt+IWEawyk2QyMwf/789fr7+89szH6h+0UpSESne563uJVOpdRSANi/ldz074WE7SIm8okhoJTiE/qsTk7sCJ1cqrU+IIy+arX6qomJiT8CwBvDyDdlhITtoCWyiSGglOJLT54B10vM6DRDiPjCxMTEniMjI3wfGKoppcoA4IUSbggJCdtBS2RjR6BSqWzt+/6Z/M4vdmOtDdymtd67tdjfJRrvLB9vp4+QsB20RDZWBJRS7wCA7wPA9rEaCqkcES9yXffYkOKrxZRSf2rsOQzVVUgYCiYRihsBpdQHAODiuO20qf9srfWn2uwDSqllAPCWsP2EhGGRErnYEFBKfQ0ATonNQOeKl2itD22ne+Np7nPtvK4QEraDsMhGjoBS6j4A2CFyxdEofEJrvUk7qo444oh5vu/f2E4fIWE7aIlspAgopZ4BgNQ31a4rKCL6lud5nwwbuFKKL6n50jp0ExKGhkoEo0RAKXUPAOwUpc64dBUKhe1qtdpDrfTXZ3VeSH55K7np3wsJ20VM5LtGQCm1hDfbdq0oQQVE9E7P865bm0ml1A8A4PhOXBISdoKa9OkYAdu2L0TEYzpWkG7HHwLAzUR0h+d5y2zb3hMA9kREfo3xtk5dExJ2ipz0axsBx3G+RESntd0x5x2EhDkfYFPCcxznw0R0rin+mOSHkNCk0cipL47jHEBEv8ppeF2HJSTsGkJR0AqBLD6IaRVTlN8LCaNEU3S9AgGlFC/7+qpAs3YEhIRydsSGgG3buyMiX4Ya/UI+NgBCKhYShgRKxNpHwHGcK4io0n7P3uohJOyt8U4sWnkaGh5qIWF4rEQyJAK8MTcIAr4M3Sxkl54WExL29PDHE7xS6hwA4Axk0kIgICQMAZKIhEdAKcUVbB/Ickbs8NFGIykkjAZH0dJAQO4F2z8VhITtY7ZGD9u2N+zr69vU9/1NEHF9RJwdBAF/rg8Akwf/3Pgbl17mv72qXbNEtBIRVwLA5MG/82fzb43fnwaAGQ/P8/jvsTfHcW7JYlGW2IFZhwEh4TrAGRgYKMydO3dHROQHDZsiIj9o2LTxwKH5yaTKSnsMEf9MRI/xYVnW6p8B4BHP8x7pJhCl1L71Crg3daOjF/sKCQGAa5cXCgUm245ExKkWmj9v24MnBRPxkfp2o0eCIFgOAHcGQXBXmNybSqlLAOB9PYhZVyH3JAkb/7F5/xf/5+ZDHqW3Po1WAcBdjeNOIvr9ypUrbxkbG3uWuzYqJT3fWo1ITEegJ0iolNqJiI5ERE7kykUkM1vLzsBT+Aki+h0A3IKIXzDQP+NdyjUJGynJOZMzH5bxoyEO9iQCuSMh39/19fUdh4jv5tQDPTmqEnSmEMgVCZVSH2okkTUijXqmzgRxNjUEckFC27YPQkTO4HxYakiKYUGgQwQyT0LHcc6sv6j+XIfxSzdBIHUEMktCLsjo+/55RJTV9HmpD744YAYCmSShbdtbIuJ59dUZh5gBo3hhGgKIOEpEg6b5NZM/RpOwUqm8MwiCASKai4hzAYCPfgDglfq7ZgFg8TE1BJiAo6lZb8OwcSS0bXs+IpZ4NVljnWYb4YioIDCJwANa6x2UUj8GgPebjokxJCyXy7talnUyABxtOmjin/EInKa1PsNxnP2I6Jed7FpJMkIjSGjb9mJEZAJmaUdCkuMktkIigIgv9/X1bVGr1f7KXWzb/jYinhSyeypiqZKwUdX0ewBwXCrRi9E8InCB1vqDzcAa+W5uBoDXmxpsaiTkijaIeLupwIhf2URgphJmSqnP1B/ofcXUiFIhYblc3tmyrLtNBUX8yiYCiPgL13VfUfewWq32cQlrU3f8J07CarX6Wt/3f0tEW2RzqMVrgxE4Tmt94Uz+OY5zBBHVTPQ9cRIqpVwAUCaCIT5lGoFbtda8V3StzbbtSxHxvaZFmSgJlVJVAPiZaSCIP9lHgKvluq570boiUUq9GQCuBYDXmRRx0iTkrMwHmASA+JILBJZqrUOdV47jfJCIuOy1MS0xEjqOczwR/cCYyMWR3CBARO/1PO/ysAEppbhi8IfDysctlxgJlVJXA8D8uAMS/b2FABH9wvO8VzwRbYWCUopfjxmReSERElar1W0nJiYebAWMfC8IdIBARWvND/vaavPnz5/T39//TFudYhJOhIS2bX8aEf89phhEbe8icJXW+vBOwy+Xy4dalnVNp/2j6pcICZVSSwFg/6icFj2CACMQBMFhw8PDP+8Gjca65VRTNSZFwjsB4E3dgCV9BYGpCBDR+Z7nHR8FKmm/OkuKhI9KlusoThfRwQgQ0bNEtO/w8PA9USHSIOLpALBTVDrD6kmKhM/JNqWwQyJyrRAgosWe5zFhIm+2bQ8AwECS2cSFhJEPoyiMGYG7X3755XnNGhhx2FJKcVEbLm6TSEuEhI7j8Ar2eYlEJEZyjQARHe953vlxBtlIJPbHOG1M1Z0ICZVS3weAjyQVlNjJJwL1+8Cfe56XSIJn27YfRMRESuMlQkLbtk9ExO/k89SQqJJCgIgO9DzvhiTsOY7DOW0XJWErERIqpXhZ0ZIkAhIb+USAiE73PG9xUtE5jnMkEf0kCXuJkLBcLm9uWdafkghIbOQSgRu01gcmHZlS6g8AsHXcdhMhIQfhOM5VRPSuuAMS/flDIMnL0KnoNV5XxA5oYiS0bbuCiFfEHpEYyBUCRPQdz/M+nqugpgWTGAnZrlLqen4RmmdAJbZIEXiyUCjsU6vVHopUq2HKEiWh4zgLiehHhmEg7hiKQNIPY9KCIVESNmbD3wDA3mkFLHYzg8DzRLS753n8cCTXLXESNu4NLzO9PkCuRz0bwZ2rtf5oNlztzsvESdiYDXnVAxORS51JEwRegQARKa/+YrAXoEmFhA0ivr2xSHazXgBaYmwPAa5J6Xne0+31yqZ0aiRkuOrvDt9KRLxafftswidex4VAEAS7RLlfMC4/o9CbKgk5gEqlsksQBJ/NQjHHKAAXHeEQSGK3RDhP4pdKnYTNEB3HWUBEp8h7xPgHPQsWokxfYXq8xpCwCZRS6ihE/FL9MjWRbSSmD1Cv+oeILxDRYVrrX+cdA+NI2Hhok+jO5rwPcobju61QKBxWq9WezHAMLV03lYQ/lnvElmPXEwKIeJHrusfmOVhTSchrBbfJM/ASW1sIfFpr/bW2emRI2DgSchHRiYmJv2UIQ3E1AQQsy1owNDTE9Uxy14wjoW3bNiLq3CEtAXWLwP38oMbzvEe6VWRaf+NI6DjON4noE6YBJf4YgYDWWjtGeBKhE8aRUCn1WwDYPcIYRVWOECCiUz3POytHIYFRJLRte0NEfCpPAEss0SMQBMHbhoeHeUtcLpppJJT7wVycVrEHcanW+v2xW0nIgFEkVEr9BwDkOp9IQuOaezOcNMzzvLE8BGoaCbnKTuJVcfIwkD0Yw7DW2s5D3MaQ0HGczYiIS6hJEwRCIYCI73Bdl5OHZboZQ0KlFC9NuiDTaIrziSJARD/2PO8DiRqNwZhJJOR0F++JIUZRmWMEfN9/68jIyO1ZDtEYEtq2vRwRt8gymOJ78gjkITmwESSsVCp7BEHw38kPoVjMAQJPI+Lu9Z0Wy7MaixEkVErxjvrcrpLP6smRFb8R8d9c1/1SVvyd7qcRJHQcRxNRLh43Z/VEyLLfRPSQ7/tvHh0dfTGLcZhAQlRKPQEAr8sigOKzMQh8VGt9rjHetOFI6iS0bfsgRPxFGz6LqCAwEwJLtNaHZhGa1EnoOM6/EtEXswie+GwWAkEQ7DY8PHynWV619iZ1Etq2fQ0iZvI/WGt4RSJJBLK6zSlVEjqO8wYAeJiI+pMcLLGVWwRu1lrPy1p0qZLQtu33ICKvlJEmCESCQBAEBwwPDy+NRFlCSlIlYX0mPI+IFiUUq5jpAQSI6Fue530yS6GmSkKl1P1SDKbl6cI7Sx4EgJWIuDIIgsnP6b8TkY+I/Xxpz5+Nn18NAM2//SMAbNfSWvYFlk9MTOycpXeGqZHQcZz9iCj3Kc7bOKdXEdHvLcu6gz/5mDVr1h2XXXZZZOk+lFIbEdGeALAnIr4VAPYCgM3b8DETokS00PM8rvaViZYaCZVSnweAL2cCpZicJCJ+P+oi4g1a63tjMrNOteVyede+vr6DiKgEAAem4UMMNl2tdSUGvbGoTI2E9Znw2vpM+M5YojJX6f8AwHVEtGTlypXu2NjYsya5WiqV9rIsq4SIg1nPeOf7/o4jIyN8u2N8S4WE5XJ5c8uy/ggAfcYj1L2D47xZGRGvXr58+diyZcv4d+ObUupgAKgCwIeMd3ZmBzOTOj8VEjqOs5CIfpTRwQ3rNpd6vsCyrAuGhobuDtvJNLnGvfsJGdxwvVRrfYBpeM7kTyokVEqdDwDHZQGgDnx8jIgu8H3/wtHRUZ7tc9EqlcqhRHQCEfGlaiYaIu7ruu4tpjubCglt234YEbcyHZw2/XugkSPnQq013/vlstm2XUFEnhmNf4iDiGe5rnuq6QOROAmVUm+vl8S+wXRgwvpHRJy2/8IXX3zxgiVLlrwQtl/W5ZRSRwMAk5FfdZja7tZav8lU55p+JU5C27YXI+IXTAcmjH9EdJbnecb/pw0TS6cyjuOcTUQnd9o/7n5ZSBKcOAmVUjcBwL5xgx+zfn7Q8nmt9XDMdjKh3rbtYxDxbADYyDSHs7CMLVES2ra9OyLy5VuW24WFQuHUWq22IstBRO27bdu8CoeJOBC17i713aO13qVLHbF2T5SESqnP1NcyfiXWiOJT/iQinuq67nnxmci25mq1+irf979ORCeaFAkRHeh5nrHPIZIm4XUA8A6TBiikL2O+739+ZGQk67N4yHC7E7Nte1FjVnxNd5qi6W36U9LESFipVHYMgiCV9ZHdDCURne553uJudPRiX6UU3/f/AABMuBRcprXmxepGtsRIqJTikmdc+ixL7WSt9Tey5LBJvpbL5Z0ty/qZCUQ0ubBoYiTMYG7RRVpr/k8urQsEDCLiaVrrM7oIJbaubZGwVCq9plAo7Ob7/lN9fX1PzZkz56mLLrro5VbeNcpg8yqSYitZE75HxKNc1/2pCb7kwQdDiHi91trI5xEtSdh49HwYAPC2o5kePz/C++GCILgZAJZ5nrds+olj23ZmymAHQbBgeHj46jyc/CbFYAIRfd/fbmRk5KE4cKlUKlsDwNa+72+NiBtYlnX3+Pj4H9Zbb72HarWavy6bayUhk8+yrEXt5oBBxN8AwLdd112dwKleAPSH9QKgH4wj+Ch1mv4oO8pY09CVNhER8SNRvmLieBCxysfa7nsR8QUiuh8RL3Jd9zsz4T4jCSNaWnYVIn6dK6kqpThFw4ZpDHxYm0LAsEh1J5cyEa/QWjNhumqNq0N+592WLiL6abFYPKlWq/11qgOvIGFEBJxqg6vvGr1tiYg+5nne97saGekcGoFyuXyoZVnXhO4QnSBPBttprf/WqUql1OEAwAs23tihDk7c9bH6K5Mrm/3XIGEMBOzQz+S6IeKQ67pHJGdRLDECKa6eOkZrfXEno9BYhBDFiqn7JyYm9h8dHf1f9mM1CR3HWUBEq9nZiZNZ64OIt7uua/JWnKxB2pa/SqnLAeCotjp1L9zRJalt219AxMgWbSDiV13X5Uva/yfhwMBAYe7cuf+Vg90N7QzRilWrVu181VVXRZZSsB3jIgvQyDW0BAB2TBCPl8fHx3e48sor/xTGpm3b2yAiF7BVYeTbkalXI9vfdd0bJ0nYi5ehHLZsRWrnlIlH1nGcEhEluiWMMwO4rvu9VhE5jqOIiAm4TSvZDr8f0VqXJ0lY3+1+vYFbUDqMK1S3E7XW3w0lKUKxI6CU+rf6VdnpsRv6u4ExrfW71mUvoYnpr1rr16Nt21siYm4SErUaSEQ8x3Xdk1rJyffJIqCU8gCgnJRVItrK87xHpttzHOctRMT/FBLxhct8o+M4HyOiXpkVHg2CYL/h4WF+TCzNIATK5fI8y7K4mpKVhFuI+PHpL8+VUp+q2+eCtUmW6jua68VzBZue2ClARCd5nndOEoMsNtpHwHGcM4noc+337KjH6kvSRm5VLsmQeFYATr/BM2EvJOLlUbpWa31IR8MlnRJBoLHQn2fDRDKkaa15EjoLAD6bSIAzG7kBy+XyuyzLuipFJ5IyfYjW+tqkjImdzhCwbXshIiaVnf2+hF+PzATKBTg4OLhVoVB4uDPIstFLHsZkY5yaXiqleBvZu7PldcfentZ8RcFPR7fsWI3ZHR9v7KqWhzFmj9Nq7xoLpPmylIuc5roFQXBU82X9pYj43jxGKzlisjmqCb2nSxUc3uYUBMGbmjPhsY06Cqk6FYPxxxFxL9d1/xKDblEZIwKNJW28Qfx1MZpJVXVjj+GxUxdwX0FEmaluGgY9mQXDoGSujAFPLmMFx7KsBUNDQ1evsZXJcZyXiCjJF5VxBimzYJzoJqC7UqlsFwQBz4ZG5C+NOOTbtNZ7s841SFipVPYJgsD4em5hwJBZMAxK5svYtv1NRPyE+Z625yERKa+e0PYVJOQ/VKvVLSYmJm4EgM3aU2uc9J8B4HLf9y+XzNnGjU1ohyqVym715Fu3AcCrQncyXBARv+W6Lq9Um2wz5phZsGDB3GKxeDEiZqYqawvceRAvR0TXdd3lho+RuDcNAaXUuQDw4ZwA87tGPiMup752EjZmxL6JiYn/ND0/TLsDg4ijQRDUisXiSK1We6bd/iKfDAKVSmUwCAJ+UMi7GYxOEtYOIlMvQ1uSsCmQ4/c1z9eXLP3EsqyRoaGh0XaAFNnoERgcHJzV19fHpbhLAMB5bteP3krqGt9dL9NWm+5Fy+S/3EEpdSwifi9HT07XwIGIHkJEj2dJ13U5zYe0BBAolUpv7OvrKyHioUTExMvLk/mZ0JuRgGu9J5xJg23bBzERAWD7BMYnTRO3AsDNQRDcWigUbhkaGsr1utqkgS6VSttalnUYE68x4xWS9iEFe2slYFskZGF+b0NEPCNySvxeab8HgFs5s/jExMTSkZGR+3sl8CjirFarO/i+z+/D9iaiyc8o9GZFR5i6JqEuR6cGPH/+/PX6+/t5RjQ6oW+Mg/SHRqr/GxHxV0NDQ1y/XloDgVKptFehUGDC7YOI84ho2x4G55+11t9uFX/bJGwqzPEDm1aYTf9+BSLeSER8L/krrfUd7SrIqnzjYcq+lmUx2ebVN07vl9PVLZ0M0ae01meH6dgxCVm5UopLTXGWrP3DGOsRmRcBgCsS84bRe4noPiK6d4899rhv8eLFQVYxaOTf3AkRdyYiPnZDxD2yGk+cfhPRoZ7ncT7VUK0rErKFRuJgJuKpoSz2ttADUwla30t236pVq+4dGxt71hRYGvdwTaJxpd2dmHQAsJ4pPhrsx4O+7//TyMjIE+342DUJm8YqlQo/Zj6d7wXacUBkJxF4vElORHwMAPgd5nP8iYjPEdHkp2VZk3+bPXv2c2GKs7LiarW6/sqVK+f09fVxzbw5vu9PfgZBsAEiziEi/twJAJhofCSS7Sxv486vuFzX7ShLd2QkZFD5HqFQKPCseEreQDYwnokmUad8rqpnzpsDABtM+RRSxT94Z2itT+vUTKQkbDpRLpcHEfF0uWfodFikX0YQ+AsRnex5Hhe26bjFQsLGZdAGvu+fwrk+G/+ZO3ZSOgoCpiHAJfUQ8YtDQ0P8HrmrFhsJm16VSqUdCoXCiUR0YleeSmdBwAwEHrUs68tDQ0O8uSGSFjsJm17atr23ZVlMxoWReC5KBIGEEUDE88fHx88YHR2NtHZLYiScQkbOgn1ijvYqJnwqiLkUELgLEb/sui7nQ428JU7CZgRKqSqTEQAOiDwqUSgIRIPA05w4ur+//xuXXXZZbMVkUyNhEyPHcY4nomMaS56igU60CALdIcArm7hw0He11rzAItaWOgmnkJErtr6vh9KfxzqworxjBC62LOucoaGh2zvW0GZHY0g45Z5xT0RkMr4/z4lf2xwnEY8fAc2zn9b6l/GbWtOCcSRsuletVjfxff999V3vTMbdkwZG7PUEAj4AXAIAl6ZZsctYEk49BWzbfk9jdlzQE6eGBBk3Ao8i4iW+718yPDx8T9zGWunPBAmbQZTLZV7Vz2kY+eC9a9IEgXYQuIWILuXZz/O81SkH21EQh2ymSDgVAKXUvkTEa1QPB4Bd4wBHdOYCgScBYAwAXK21a2JEmSXhVDB5G1W9ZsFgg5RbmAi0+JQoAk3ijRUKhbFarca/G9tyQcImusccc0z/M888w7MjX64eTESbGIu8OBY1Apki3tTgc0XCqYFVq9VXj4+PD1iWNUBEA72W5SvqM9xQfQ8CwK8B4LoszHhrwzC3JJwecKVS2SUIAiYjHwcCwEaGnlji1toRGEfEa+r/VG9AxKWu63KNkcy3niHh1JEqlUqvKRaLA0xKLs4hm4+NPo/vAgAm3rW+7/96dHSUE2nlqvUkCaePoFLqzY1LVk7fxzkzt8rVKGcrGN4kexMR3WRZ1vWu63KJu1w3IeEMw8s18YiIX4FwtmhOXLVLrs+C9ILjhFaThOPSA8Vi8aZarcZ/66kmJAwx3KVS6R8KhcJkgttGVmlOdCutPQReqq964gcpdzRmuZuiSA3RngtmSgsJOxwXrstRX3O4ne/7XCBnO0Sc/B0AtuxQZR66TRKNq1zxYVnWg0EQPFQsFh+s1WqcylHaDAgICSM+LRYtWlR84oknmJTbTyEmk3PjKUcWKxERAKwgIk77v6L5s2VZDwvRujuJhITd4ddRb9u2NywWixv7vr8xEW1c3709+ckknfLzhohYJKICERX5ZwBg8q7rk7/jPKPjAMB5SZufU39e4ztEHCei5vdrkMyyrBVBEKzwfX9Fu1mlOwKmRzv9H4INOo60WyNFAAAAAElFTkSuQmCC"

/***/ }),

/***/ 66:
/*!*********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/图书.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 67:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/数码产品.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 68:
/*!*********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/家具.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 69:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/体育用品.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 70:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/宠物用品.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 71:
/*!*********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/服装.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 72:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/母婴用品.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 73:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/健身器材.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 74:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/美妆用品.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAEVBJREFUeF7tnX2UXGV9x7/P3Z07S8I5RKwN4WTuLBAyd8JbeDm8VI8FPUc0oQUraj1K/6i21vZA5bW2ahN6wunRWrHScuoLR1sstWjLi6LQN9JTT00ASQOyOxsC2bkTgaBHU0sCe2f3PnWWpCxxN/N9Zmdnc5/5zr/5/p77PN/f75vPzsudMdBjQR3YNoxlQ5ODazEQHBvAHmutOTaAeREGT09N2SQM0+Skp/E/C7oJLd6xA6bjShXO6cD25VgahuHvG4N3Aljb1iqLO4LA3LG6PnFfW60EPXVAAemy3WNR4YoM5gYDnOq+tPkOTPbluN68zb1WFQvhgALSRVdrpfDPYHBdF5Z8wFpzc7Ux8UAX1tIS83BAAZmHeTNLa1F4JzD9J1X3HtbcNtCc+MOTn8MPu7eoVnJxQAFxcWsO7YKE45VrPWqz7Nrq7snNXdiqlnB0QAFxNOxQ+VipeI019s/nuUy78glj7TWVRvPWdkL9e3cdUEDm4efICUPlYCr7LwDHz2MZutRY+5eVRvNKukDCeTuggMzDwtGo8FkD09OBNbD/Ukmab5nHtlXq4IAC4mDWTOmO0uAbMxP8R4fl8y1rxEkazXcR1bd3QAFp79GsiloU3gPgVzss70bZ/jhJl3ZjIa0xtwMKSAfTMVIKTw0MHnctNTCfz2CfDYCyBS4EMOy6xky9BbZVk/Ss+ayh2sM7oIB0MCG1UvhRGGxyLH1XnKRfm1lTi8IbAHM9YH/Bca3/l1uDr1br6Xs6rVedAtL1GahF4VYA57ILW9gPVpPm52fT104oVjBpb4DBb7LrHar72f9yGytJemOn9arTn1hdm4HRlYMXmiB40GHB78VJek47fS0KLzfA7RYYaqed7d+tMddV6xML/X5MJ1vLdY3+xHJs32i58GljzdVsWWbt760h3+AbKxfXWWtvB3Asu/6rn5PY36kmzc91Uqua2R1QQBwnoxaFjwE4jSx7ZipLTztlN35M6vH48UeVCoNTrTcfV7I1rwqJwXur9fSOTmpV8/MOKCAOUzFeXrLiJTv5DFtijf10td68ltXP1DkGcWbpPoPsrZVk8judXFc1r3ZAAXGYiB1R8ZIM9htsiTXZL1Xrk99l9YfqaqXCgzCm9XKw6+OhFOlbT0/wE9dC6RWQjmdgNAo3GmADs4CF3VNNmscx2sNpOg6JwZfietrxK2Pz3bcv9SKIQydrUXgvgF8hS74RJ2lX3mnvNCTGmOsqemWLbNfsMgXEwb5aFP6A/eSutea6aqM7L7vuGsayCVu8G9b+ssN2X5Zm5m3x7on7netUMO2AAkIOwiMn4pijJ8O9pBwms+dVdjcfYvXtdI+XiicVjL0b7ve6jw5ODly86pkXG+2uoX//eQcUEHIqXD9/9WKQvubMcdCBYrYxFg29OUN2vwEGGf1BjQW+Xk3S7t4O7LKBHGsVELJ5I+XiusBa8mt57PNx0lxOLu0kG42KVxrYzzoVAbDAjdUk3eha1+96BYScgNGo8EED89eM3MD8ZyWZeCOj7URTKxdvhbUfcqzdP2DsG06uN7c51vW1XAEh218rh5tg8VFKbs1tcWPiA5S2A9GuYQxN2OL9rk/a9clfd7MVENKzWhT+LYArKLnFx+JGehOl7VA0Ui6cFSBoheR1LksYi/dUGulXXWr6WauAkN13eS/CojcfGhyLCr9hYf6GPMK0rHWT1b7J9A3nPIP9LnX9qlVAyM673AMSGFy+up7+I7n0vGS1cvGvYO3vuiyiJ+y8WwoI6VUtClu32FLft2uz7KJefdFb69vjj8rCfwVwNnmUlkxP2EmzFBDSqFoUPgXgREaeWZy2ppF+n9F2QzNaKl5sjHV6t1xP2DnnFRDOJ9SisPUx9xWMPDODx6+p73+W0XZLMxqFf2wAp9tu9YS9vfsKSHuPphVjUbjXAscw8hdel4bnfA9NRttNzVgUftMC69k19YS9vVMKSHuPphW1KEwBFAh5GidpkdB1XfJkuXDmlDWtuxHp+9r1hQ+Hb4MCQozpI2ejcPQPpwPCPH4aJylFGmYxV81IKdwUGPINzZcX1xP2w5isgBAT6PJJXgO7p9KFG6WIbc0qmf5ofBa2KFJl19AT9rmdUkCIKRopL1kR8Pei1+Mkndc3JhJbOqykVi68H9Z80WUdPWGf3S0FhJiiHdHQiRmy1su8zGMsTtKYES6kphaFrU8er3O4xsNxktJfhuewbq6lCgjRPqd7QSy2x420/S/bEtedj6RWHnoTbPZvLmsYi7dXGmnrpiw9DjiggBCjMLaycK4NTOvrRts+jMWWSiO9oK2wB4JaKbzN8StN74yT9N092FpuLqGAEK1y+rpRazfHjeZFxLILLqmVhy6Czf7d5UJmwK6t7Gpud6nxWauAEN3Na0BaR6uVwm/B4G3EMQ9KPhEn6Ucc9F5LFRCivXkOyFgpvMwa3EUc86BkL/anUfwj/K9DjbdSBYRobZ4DMk2RKGzdZku/cNDLTyMT9i+qRAEh7M99QMrhe2HxFeKo0xIF5BWnFBBiavIekAMUscRRFZBDTFJAiKlRQAiTPJUoIERjFRDCJE8lCgjRWAWEMMlTiQJCNFYBIUzyVKKAEI1VQAiTPJUoIERjFRDCJE8lCgjRWAWEMMlTiQJCNFYBIUzyVKKAEI1VQAiTPJUoIERjFRDCJE8lCgjRWAWEMMlTiQJCNFYBIUzyVKKAEI1VQAiTPJUoIERjFRDCJE8lCgjRWAWEMMlTiQJCNFYBIUzyVKKAEI1VQAiTPJUoIERjFRDCJE8lCgjRWAWEMMlTiQJCNFYBIUzyVKKAEI1VQAiTPJUoIERjXQNCLNl7iTEXshfV1/684pQCQkyNU0CI9Y50iQKigDjNaC0K3wfgdqeifIuviJOU/qK5fB/18LsXQQ7jj70Qg2O7wq/B4jKfh2DWsxncXTkhfafZjMm+O/uMAysgc3S/D6kxVw76miYKyCxj4fp7477/D2uA+ypJeonv55ztfArIIa7USuEmuP2Mcn/MjcVNcSP9WH8cVk/SZ+1zLQrf9bOfT/6HfhsCh/O+O07SOx30uZeKIAda2MnPleW++50cwARviusvPdhJaR5rFBAAB37F9h4AJ+axiT3e89OZxaVrGun3e3zdRbmcAtL6BaZy8VZY+6FF6UAOL2qMvblSb16Tw607b7nvA/JEFK4ZAB4FUHR2D4Ax2JpZ+5AxZqudyn7QyRq9rAkCU7IIXg/Y1wM4tZNrG9g9A4Xi6aueeuH5TurzVNP3ARktFT5ljLm2g6b93VRmbzlld5P6/fQO1l/wktFy+Gsms1fC4XNaM17fuTpOJj6z4Jtc5Av0dUBGh4eGkWWPGuA1bB8ssDMw5qpKfeLbbM2RrhsrFz5grfmCyz4N8HAlSc91qcmjtq8DUiuFfwKDjzs07sdBYNetHs8vNeY6aychCQzesbqe/pODf7mT9ndAovBhAOfQXbPm0rgxcS+tz5lwtBT+kTG4id+2/Ys4aX6Y1+dP2e8B+RGA11Jts/h23EjXUdqcip5cheJUGtYADJNHuCdOUq8/yNm3AXlieOlxA1nzWXIQEMBctTqZuIXV51VXi8JPArie2r/BY3E9PYPS5lTUtwEZGS6cH2Tmu2zfWjcRsdq860wQUO+UG+CnlSQ9Ju/nPdz++zcgpfDXA4O/97m5vTjbVFBYccr4vud6ca3FuEbfBmQ0Cj9igD9dDNN9umYW2AvWjDe3+HSmmWfp54BsNMAGXxvbq3P5fv+6AtKrSfL0OgqIp40djUIRpAu9VUC6YOKRuIQC0p2uKCDd8fGIW0UB6U5LFJDu+HjEreIUEGs3W2tvPOIOsUAbMsZsYD/hq4AsUBMWe1nXgMSNZt+8UVgrFR5UQF6eUL2KxSTV2s0KyOxGiSDMAOVQI4LM3TQR5BVvRBAm3CLInC6JIMwA5VAjgoggzNiKIIxLIogIwsyJTxoRRARh5lkEYVwSQUQQZk580oggIggzzyII45IIIoIwc+KTRgQRQZh5FkEYl0QQEYSZE580IogIwsyzCMK4JIKIIMyc+KQRQUQQZp5FEMYlEUQEYebEJ40IIoIw8yyCMC6JICIIMyc+aUQQEYSZZxGEcUkEEUGYOfFJI4KIIMw8iyCMSyKICMLMiU8aEUQEYeZZBGFcEkFEEGZOfNKIICIIM88iCOOSCCKCMHPik0YEEUGYeRZBGJdEEBGEmROfNCKICMLMswjCuCSCiCDMnPikEUFEEGaeRRDGJRFEBGHmxCeNCCKCMPMsgjAuiSAiCDMnPmlEEBGEmWcRhHFJBBFBmDnxSSOCiCDMPIsgjEsiiAjCzIlPGhFEBGHmWQRhXBJBRBBmTnzSiCAiCDPPIgjjkggigjBz4pNGBBFBmHkWQRiXRBARhJkTnzQiiAjCzLMIwrgkgoggzJz4pBFBRBBmnkUQxiURRARh5sQnjQgigjDzLIIwLokgIggzJz5pRBARhJlnEYRxSQQRQZg58UkjgoggzDyLIIxLIogIwsyJTxoRRARh5lkEYVwSQUQQZk580oggIggzzyII45IIIoIwc+KTRgQRQZh5FkEYl0QQEYSZE580IogIwsyzCMK4JIKIIMyc+KQRQUQQZp5FEMYlEUQEYebEJ40IIoIw8yyCMC6JICIIMyc+aUQQEYSZZxGEcUkEEUGYOfFJI4KIIMw8iyCMSyKICMLMiU8aEUQEYeZZBGFcEkFEEGZOfNKIICIIM88iCOOSCCKCMHPik0YEEUGYeRZBGJdEEBGEmROfNCKICMLMswjCuCSCiCDMnPikEUFEEGaeRRDGJRFEBGHmxCeNCCKCMPMsgjAuiSAiCDMnPmlEEBGEmee+JchIVPxwAHszYxIsdsSNtEJpPRDVSuEYDFYzR8kCe8Ga8eYWRptHTf8GpBReFhjcxTZtsBAuX/XUC8+z+rzqdp509C9ONtM97P5NgGplPK2x+rzp+jYgTwwX1g5kZhvbsMyYS9bUJ+5j9XnVjZSL6wNrv8nufyoorDhlfN9zrD5vur4NyLZhLDsqC3/CNswCN1aTdCOrz6tuLAo3WIA+ZzFIjzphHC/l9bzt9t23AWkZUyuH22FxejuTDv67MWZ9pT7xLVafN91YubjOWstT0uCxuJ6ekbdzuuy3vwMShTcA+ARrmAGeqiTpKlafN91YFO60wEkO+/6DOEk/6aDPnbSvA7JjuLA2c3ge0uqur39qOb3sfWDMg8CeuXq8+d+5m3qHDfd1QFo+jZbDLcbiPAfPYAy2ZlP4reru9HGXuiNRO7oyPC0YwBesowfWYGu1np5/JJ6pm3tSQKLCbxuYz3ViaosmgcH2KQxuWVPf/2wnayxGzUh5yYoBTJ6fWZxhgA0d7uGKOEm/0mFtbsr6PiDTT9aj8BEAZ8+na63nJ9baxnzW6EWtMabk+Dxjtm3dGyfppb3Y72JfQwFp/Zk1D4osdgMX4/o2yy6q7p7cvBjX7vU1FZADjtei8AEAb+l1A3J3PYtPxY30+tztu8MNKyAHjGt9xKLZnHjMwCzv0Mt+KPvnOEkv7oeDHjyjAjKj2ztL4amTBrl/ZWohBtjC7qkmzeMWYu0jeU0F5JDuPLGycN5AYLz9dGonw2iBndUkPbmT2rzXKCCzdHC8vGTFBCbvcn1vIO/DMNv+Lewt1aR5lY9nY86kgMzh0vblWFoshl8GcDljpJcai01xI/24l2cjD6WAtDGqFoXvA3A1gLNIT32Q3Wuz7OZ+eSn3cA1TQIhxfnIVilkaXp0B7zeAtx9WBPAQgFv64R1you3TEgWEdeqAbiwaejPM1HoLsx6Wuy3V8RK9ltcMcPdUYO/x+dbZTk1VQDp1DsCuYQztx9Jlg2gum4JdZibt0DyW60mpHTQvDcDsnURh7xLs2+vzzU7dMFQB6YaLWsNbB/4PBqJmX6koyaoAAAAASUVORK5CYII="

/***/ }),

/***/ 75:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/家用电器.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 92:
/*!****************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/common/allSchool.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function all(e, that) {
  var data = {
    multiArray: that.multiArray,
    multiIndex: that.multiIndex
  };
  data.multiIndex[e.detail.column] = e.detail.value;
  switch (e.detail.column) {
    case 0:
      switch (data.multiIndex[0]) {
        case 0:
          data.multiArray[1] = ['北京市'];
          data.multiArray[2] = ['北京大学', '中国人民大学', '清华大学', '北京交通大学', '北京工业大学', '北京航空航天大学', '北京理工大学', '北京科技大学', '北方工业大学', '北京化工大学', '北京工商大学', '北京服装学院', '北京邮电大学', '北京印刷学院', '北京建筑大学', '北京石油化工学院', '北京电子科技学院', '中国农业大学', '北京农学院', '北京林业大学', '北京协和医学院', '首都医科大学', '北京中医药大学', '北京师范大学', '首都师范大学', '首都体育学院', '北京外国语大学', '北京第二外国语学院', '北京语言大学', '中国传媒大学', '中央财经大学', '对外经济贸易大学', '北京物资学院', '首都经济贸易大学', '外交学院', '中国人民公安大学', '国际关系学院', '北京体育大学', '中央音乐学院', '中国音乐学院', '中央美术学院', '中央戏剧学院', '中国戏曲学院', '北京电影学院', '北京舞蹈学院', '中央民族大学', '中国政法大学', '华北电力大学', '中华女子学院', '北京信息科技大学', '中国矿业大学（北京）', '中国石油大学（北京）', '中国地质大学（北京）', '北京联合大学', '北京城市学院', '中国青年政治学院', '首钢工学院', '中国劳动关系学院', '北京吉利学院', '首都师范大学科德学院', '北京工商大学嘉华学院', '北京邮电大学世纪学院', '北京工业大学耿丹学院', '北京警察学院', '北京第二外国语学院中瑞酒店管理学院', '北京工业职业技术学院', '北京信息职业技术学院', '北京电子科技职业学院', '北京京北职业技术学院', '北京交通职业技术学院', '北京青年政治学院', '北京农业职业学院', '北京政法职业学院', '北京财贸职业学院', '北京北大方正软件职业技术学院', '北京经贸职业学院', '北京经济技术职业学院', '北京戏曲艺术职业学院', '北京汇佳职业学院', '北京科技经营管理学院', '北京科技职业学院', '北京培黎职业学院', '北京经济管理职业学院', '北京劳动保障职业学院', '北京社会管理职业学院', '北京艺术传媒职业学院', '北京体育职业学院', '北京交通运输职业学院', '北京卫生职业学院', '北京网络职业学院', '其他'];
          break;
        case 1:
          data.multiArray[1] = ['重庆市'];
          data.multiArray[2] = ['重庆大学', '重庆邮电大学', '重庆交通大学', '重庆医科大学', '西南大学', '重庆师范大学', '重庆文理学院', '重庆三峡学院', '重庆师范大学涉外商贸学院', '重庆工商大学融智学院', '重庆工商大学派斯学院', '重庆邮电大学移通学院', '长江师范学院', '四川外国语大学', '西南政法大学', '四川美术学院', '重庆科技学院', '重庆理工大学', '重庆工商大学', '重庆工程学院', '重庆大学城市科技学院', '重庆第二师范学院', '重庆人文科技学院', '四川外国语大学重庆南方翻译学院', '重庆航天职业技术学院', '重庆警察学院', '重庆电力高等专科学校', '重庆工业职业技术学院', '重庆三峡职业学院', '重庆工贸职业技术学院', '重庆机电职业技术学院', '重庆电子工程职业学院', '重庆海联职业技术学院', '重庆信息技术职业学院', '重庆传媒职业学院', '重庆城市管理职业学院', '重庆工程职业技术学院', '重庆房地产职业学院', '重庆城市职业学院', '重庆水利电力职业技术学院', '重庆工商职业学院', '重庆应用技术职业学院', '重庆三峡医药高等专科学校', '重庆医药高等专科学校', '重庆青年职业技术学院', '重庆财经职业学院', '重庆科创职业学院', '重庆建筑工程职业学院', '重庆电讯职业学院', '重庆能源职业学院', '重庆商务职业学院', '重庆交通职业学院', '重庆化工职业学院', '重庆旅游职业学院', '重庆安全技术职业学院', '重庆公共运输职业学院', '重庆艺术工程职业学院', '重庆轻工职业学院', '重庆电信职业学院', '重庆经贸职业学院', '重庆幼儿师范高等专科学校', '重庆文化艺术职业学院', '重庆服装工程职业学院', '重庆资源与环境保护职业学院', '庆护理职业学院', '其他'];
          break;
        case 2:
          data.multiArray[1] = ['漳州市', '厦门市', '三明市', '泉州市', '莆田市', '宁德市', '南平市', '龙岩市', '福州市'];
          data.multiArray[2] = ['闽南师范大学', '厦门大学嘉庚学院', '漳州职业技术学院', '漳州城市职业学院', '漳州科技职业学院', '漳州理工职业学院', '漳州卫生职业学院'];
          break;
        case 3:
          data.multiArray[1] = ['镇江市', '张家港市', '扬州市', '盐城市', '徐州市', '宿迁市', '无锡市', '泰州市', '苏州市', '南通市', '南京市', '连云港市', '淮安市', '常州市'];
          data.multiArray[2] = ['江苏大学京江学院', '南京财经大学红山学院', '金山职业技术学院', '江苏科技大学', '江苏大学', '镇江市高等专科学校', '江苏农林职业技术学院', '江苏航空职业技术学院'];
          break;
        case 4:
          data.multiArray[1] = ['珠海市', '中山市', '肇庆市', '湛江市', '云浮市', '阳江市', '深圳市', '韶关市', '汕尾市', '汕头市', '清远市', '梅州市', '茂名市', '揭阳市', '江门市', '惠州市', '河源市', '广州市', '佛山市', '东莞市', '潮州市'];
          data.multiArray[2] = ['北京师范大学珠海分校', '北京理工大学珠海学院', '吉林大学珠海学院', '京师范大学-香港浸会大学联合国际学院', '珠海艺术职业学院', '珠海城市职业技术学院'];
          break;
        case 5:
          data.multiArray[1] = ['营口市', '铁岭市', '沈阳市', '盘锦市', '辽阳市', '锦州市', '葫芦岛市', '阜新市', '抚顺市', '丹东市', '大连市', '朝阳市', '本溪市', '鞍山市'];
          data.multiArray[2] = ['营口理工学院', '营口职业技术学院', '辽宁农业职业技术学院'];
          break;
        case 6:
          data.multiArray[1] = ['兴安盟', '锡林郭勒盟', '乌兰察布市', '乌海市', '通辽市', '呼伦贝尔市', '呼和浩特市', '鄂尔多斯市', '赤峰市', '包头市', '巴彦淖尔市', '阿拉善盟'];
          data.multiArray[2] = ['兴安职业技术学院'];
          break;
        case 7:
          data.multiArray[1] = ['长治市', '运城市', '阳泉市', '忻州市', '太原市', '朔州市', '吕梁市', '临汾市', '晋中市', '晋城市', '大同市'];
          data.multiArray[2] = ['长治医学院', '长治学院', '长治职业技术学院', '山西机电职业技术学院', '潞安职业技术学院'];
          break;
        case 8:
          data.multiArray[1] = ['西宁市', '海东市', '海西蒙古族藏族自治州'];
          data.multiArray[2] = ['青海大学', '青海师范大学', '青海民族大学', '青海大学昆仑学院', '青海卫生职业技术学院', '青海警官职业学院', '青海畜牧兽医职业技术学院', '青海交通职业技术学院', '青海建筑职业技术学院', '西宁城市职业技术学院'];
          break;
        case 9:
          data.multiArray[1] = ['自贡市', '资阳市', '宜宾市', '雅安市', '遂宁市', '攀枝花市', '内江市', '南充市', '绵阳市', '眉山市', '泸州市', '凉山州', '凉山彝族自治州', '乐山市', '广元市', '广安市', '甘孜藏族自治州', '德阳市', '达州市', '成都市', '巴中市', '阿坝藏族羌族自治州'];
          data.multiArray[2] = ['四川理工学院', '四川卫生康复职业学院'];
          break;
        case 10:
          data.multiArray[1] = ['贵阳市', '遵义市', '铜仁市', '黔西南布依族苗族自治州', '黔南布依族苗族自治州', '黔东南苗族侗族自治州', '六盘水市', '毕节市', '安顺市'];
          data.multiArray[2] = ['贵州医科大学', '贵阳中医学院', '贵州师范大学', '贵州财经大学', '贵州民族大学', '贵阳学院', '贵州商学院', '贵阳中医学院时珍学院', '贵州财经大学商务学院', '贵州大学科技学院', '贵州大学明德学院', '贵州民族大学人文科技学院', '贵州师范大学求是学院', '贵州医科大学神奇民族医药学院', '贵州师范学院', '贵州理工学院', '贵州警官职业学院', '贵州交通职业技术学院', '贵州城市职业学院', '贵州工业职业技术学院', '贵州电力职业技术学院', '贵州轻工职业技术学院', '贵阳护理职业学院', '贵阳职业技术学院', '贵州职业技术学院', '贵州工商职业学院', '贵阳幼儿师范高等专科学校', '贵州建设职业技术学院', '贵州农业职业学院', '贵州水利水电职业技术学院', '贵州电子商务职业技术学院', '贵州电子科技职业学院', '贵州航空职业技术学院', '贵州大学'];
          break;
        case 11:
          data.multiArray[1] = ['昭通市', '玉溪市', '西双版纳傣族自治州', '文山壮族苗族自治州', '曲靖市', '普洱市', '临沧市', '丽江市', '昆明市', '红河哈尼族彝族自治州', '德宏傣族景颇族自治州', '大理白族自治州', '楚雄彝族自治州', '保山市'];
          data.multiArray[2] = ['昭通学院', '昭通卫生职业学院'];
          break;
        case 12:
          data.multiArray[1] = ['榆林市', '延安市', '咸阳市', '西安市', '渭南市', '铜川市', '商洛市', '汉中市', '宝鸡市', '安康市'];
          data.multiArray[2] = ['榆林学院', '榆林职业技术学院'];
          break;
        //西藏
        case 13:
          data.multiArray[1] = ['咸阳市', '拉萨市'];
          data.multiArray[2] = ['西藏民族大学'];
          break;
        case 14:
          data.multiArray[1] = ['银川市', '吴忠市', '石嘴山市', '固原市'];
          data.multiArray[2] = ['宁夏大学', '宁夏医科大学', '北方民族大学', '宁夏大学新华学院', '银川能源学院', '中国矿业大学银川学院', '宁夏工业职业学院', '宁夏职业技术学院', '宁夏工商职业技术学院', '宁夏财经职业技术学院', '宁夏司法警官职业学院', '宁夏建设职业技术学院', '宁夏葡萄酒与防沙治沙职业技术学院', '宁夏幼儿师范高等专科学校', '宁夏艺术职业学院'];
          break;
        case 15:
          data.multiArray[1] = ['乌鲁木齐市', '阿拉尔市', '伊犁哈萨克自治州', '五家渠市', '吐鲁番市', '石河子市', '克拉玛依市', '喀什地区', '和田地区', '哈密市', '昌吉回族自治州', '巴音郭楞蒙古自治州', '阿克苏地区'];
          data.multiArray[2] = ['新疆大学', '新疆医科大学', '新疆师范大学', '新疆财经大学', '新疆艺术学院', '新疆工程学院', '新疆警察学院', '新疆大学科学技术学院', '新疆农业大学科学技术学院', '新疆医科大学厚博学院', '新疆财经大学商务学院', '乌鲁木齐职业大学', '新疆机电职业技术学院', '新疆轻工职业技术学院', '新疆能源职业技术学院', '新疆建设职业技术学院', '新疆现代职业技术学院', '新疆天山职业技术学院', '新疆交通职业技术学院', '新疆职业大学', '新疆体育职业技术学院', '新疆师范高等专科学校', '新疆铁道职业技术学院', '新疆生产建设兵团兴新职业技术学院', '新疆科技职业技术学院', '新疆农业大学', '新疆工业职业技术学院'];
          break;
        case 16:
          data.multiArray[1] = ['玉林市', '梧州市', '钦州市', '南宁市', '柳州市', '来宾市', '贺州市', '河池市', '桂林市', '崇左市', '北海市', '百色市'];
          data.multiArray[2] = ['玉林师范学院', '玉柴职业技术学院'];
          break;
        case 17:
          data.multiArray[1] = ['文昌市', '三亚市', '琼海市', '海口市'];
          data.multiArray[2] = ['海南外国语职业学院'];
          break;
        case 18:
          data.multiArray[1] = ['株洲市', '长沙市', '张家界市', '岳阳市', '永州市', '益阳市', '湘西土家族苗族自治州', '湘潭市', '邵阳市', '娄底市', '怀化市', '衡阳市', '郴州市', '常德市'];
          data.multiArray[2] = ['湖南工业大学', '湖南工业大学科技学院', '株洲师范高等专科学校', '湖南冶金职业技术学院', '湖南铁道职业技术学院', '湖南化工职业技术学院', '湖南中医药高等专科学校', '湖南汽车工程职业学院', '湖南铁路科技职业技术学院', '湖南有色金属职业技术学院'];
          break;
        case 19:
          data.multiArray[1] = ['宜昌市', '孝感市', '襄阳市', '咸宁市', '仙桃市', '武汉市', '天门市', '随州市', '十堰市', '潜江市', '荆州市', '荆门市', '黄石市', '黄冈市', '恩施土家族苗族自治州', '鄂州市'];
          data.multiArray[2] = ['三峡大学', '三峡大学科技学院', '湖北三峡职业技术学院', '三峡电力职业学院', '三峡旅游职业技术学院'];
          break;
        case 20:
          data.multiArray[1] = ['驻马店市', '周口市', '郑州市', '许昌市', '信阳市', '新乡市', '商丘市', '三门峡市', '濮阳市', '平顶山市', '南阳市', '漯河市', '洛阳市', '开封市', '焦作市', '济源市', '鹤壁市', '安阳市'];
          data.multiArray[2] = ['黄淮学院', '驻马店职业技术学院'];
          break;
        case 21:
          data.multiArray[1] = ['淄博市', '枣庄市', '烟台市', '潍坊市', '威海市', '泰安市', '日照市', '青岛市', '临沂市', '聊城市', '莱芜市', '济宁市', '济南市', '菏泽市', '东营市', '德州市', '滨州市'];
          data.multiArray[2] = ['山东理工大学', '齐鲁医药学院', '淄博职业学院', '山东工业职业学院', '山东化工职业学院', '淄博师范高等专科学校', '山东铝业职业学院', '山东轻工职业学院'];
          break;
        case 22:
          data.multiArray[1] = ['鹰潭市', '宜春市', '新余市', '上饶市', '萍乡市', '南昌市', '九江市', '景德镇市', '吉安市', '赣州市', '抚州市'];
          data.multiArray[2] = ['鹰潭职业技术学院', '江西师范高等专科学校'];
          break;
        case 23:
          data.multiArray[1] = ['宣城市', '宿州市', '芜湖市', '铜陵市', '马鞍山市', '六安市', '黄山市', '淮南市', '淮北市', '合肥市', '阜阳市', '滁州市', '池州市', '亳州市', '蚌埠市', '安庆市'];
          data.multiArray[2] = ['宣城职业技术学院'];
          break;
        case 24:
          data.multiArray[1] = ['舟山市', '温州市', '台州市', '绍兴市', '衢州市', '宁波市', '丽水市', '金华市', '嘉兴市', '湖州市', '杭州市'];
          data.multiArray[2] = ['浙江海洋大学', '浙江海洋大学东海科学技术学院', '浙江国际海运职业技术学院', '浙江舟山群岛新区旅游与健康职业学院'];
          break;
        case 25:
          data.multiArray[1] = ['上海市'];
          data.multiArray[2] = ['复旦大学', '同济大学', '上海交通大学', '华东理工大学', '上海理工大学', '上海海事大学', '东华大学', '上海电力学院', '上海应用技术大学', '上海健康医学院', '上海海洋大学', '上海中医药大学', '华东师范大学', '上海师范大学', '上海外国语大学', '上海财经大学', '上海对外经贸大学', '上海海关学院', '华东政法大学', '上海体育学院', '上海音乐学院', '上海戏剧学院', '上海大学', '上海公安学院', '上海工程技术大学', '上海立信会计金融学院', '上海电机学院', '上海杉达学院', '上海政法学院', '上海第二工业大学', '上海商学院', '上海建桥学院', '上海兴伟学院', '上海视觉艺术学院', '上海外国语大学贤达经济人文学院', '上海师范大学天华学院', '上海科技大学', '上海纽约大学', '上海旅游高等专科学校', '上海东海职业技术学院', '上海工商职业技术学院', '上海出版印刷高等专科学校', '上海行健职业学院', '上海城建职业学院', '上海交通职业技术学院', '上海海事职业技术学院', '上海电子信息职业技术学院', '上海震旦职业学院', '上海民远职业技术学院', '上海欧华职业技术学院', '上海思博职业技术学院', '上海立达职业技术学院', '上海工艺美术职业学院', '上海济光职业技术学院', '上海工商外国语职业学院', '上海科学技术职业学院', '上海农林职业技术学院', '上海邦德职业技术学院', '上海中侨职业技术学院', '上海电影艺术职业学院', '上海中华职业技术学院', '上海工会管理职业学院', '上海体育职业学院', '上海民航职业技术学院'];
          break;
        case 26:
          data.multiArray[1] = ['伊春市', '绥化市', '双鸭山市', '齐齐哈尔市', '七台河市', '牡丹江市', '佳木斯市', '鸡西市', '黑河市', '鹤岗市', '哈尔滨市', '大兴安岭地区', '大庆市'];
          data.multiArray[2] = ['伊春职业学院'];
          break;
        case 27:
          data.multiArray[1] = ['长春市', '延边朝鲜族自治州', '通化市', '松原市', '四平市', '辽源市', '吉林市', '白山市', '白城市'];
          data.multiArray[2] = ['吉林大学', '长春理工大学', '长春工业大学', '吉林建筑大学', '吉林农业大学', '长春中医药大学', '东北师范大学', '吉林工程技术师范学院', '长春师范大学', '吉林财经大学', '吉林体育学院', '吉林艺术学院', '吉林华桥外国语学院', '吉林工商学院', '长春工程学院', '吉林警察学院', '长春大学', '长春光华学院', '长春工业大学人文信息学院', '长春理工大学光电信息学院', '长春财经学院', '吉林建筑大学城建学院', '长春建筑学院', '长春科技学院', '吉林动画学院', '长春大学旅游学院', '东北师范大学人文学院', '长春师范高等专科学校', '长春汽车工业高等专科学校', '长春金融高等专科学校', '长春医学高等专科学校', '吉林交通职业技术学院', '长春东方职业学院', '吉林司法警官职业学院', '长春职业技术学院', '长春信息技术职业学院', '吉林科技职业技术学院', '吉林城市职业技术学院'];
          break;
        case 28:
          data.multiArray[1] = ['张掖市', '武威市', '天水市', '庆阳市', '平凉市', '陇南市', '临夏州', '兰州市', '酒泉市', '金昌市', '嘉峪关市', '甘南藏族自治州', '定西市', '白银市'];
          data.multiArray[2] = ['河西学院'];
          break;
        case 29:
          data.multiArray[1] = ['天津市'];
          data.multiArray[2] = ['南开大学', '天津大学', '天津科技大学', '天津工业大学', '中国民航大学', '河北工业大学', '天津理工大学', '天津农学院', '天津医科大学', '天津中医药大学', '天津师范大学', '天津职业技术师范大学', '天津外国语大学', '天津商业大学', '天津财经大学', '天津体育学院', '天津音乐学院', '天津美术学院', '天津城建大学', '天津天狮学院', '天津中德应用技术大学', '天津外国语大学滨海外事学院', '天津体育学院运动与文化艺术学院', '天津商业大学宝德学院', '天津医科大学临床医学院', '南开大学滨海学院', '天津师范大学津沽学院', '天津理工大学中环信息学院', '北京科技大学天津学院', '天津大学仁爱学院', '天津财经大学珠江学院', '天津市职业大学', '天津滨海职业学院', '天津工程职业技术学院', '天津青年职业学院', '天津渤海职业技术学院', '天津电子信息职业技术学院', '天津机电职业技术学院', '天津现代职业技术学院', '天津公安警官职业学院', '天津轻工职业技术学院', '天津商务职业学院', '天津国土资源和房屋职业学院', '天津医学高等专科学校', '天津开发区职业技术学院', '天津艺术职业学院', '天津交通职业学院', '天津冶金职业技术学院', '天津石油职业技术学院', '天津城市职业学院', '天津铁道职业技术学院', '天津工艺美术职业学院', '天津城市建设管理职业技术学院', '天津生物工程职业技术学院', '天津海运职业学院', '天津广播影视职业学院'];
          break;
        case 30:
          data.multiArray[1] = ['张家口市', '邢台市', '唐山市', '石家庄市', '秦皇岛市', '廊坊市', '衡水市', '邯郸市', '承德市', '沧州市', '保定市'];
          data.multiArray[2] = ['河北建筑工程学院', '河北北方学院', '张家口学院', '张家口职业技术学院', '宣化科技职业学院'];
          break;
      }
      data.multiIndex[1] = 0;
      data.multiIndex[2] = 0;
      break;
    case 1:
      switch (data.multiIndex[0]) {
        case 0:
          break;
        case 1:
          break;
        //福建
        case 2:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['闽南师范大学', '厦门大学嘉庚学院', '漳州职业技术学院', '漳州城市职业学院', '漳州科技职业学院', '漳州理工职业学院', '漳州卫生职业学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['厦门大学', '集美大学', '厦门理工学院', '厦门医学院', '厦门华厦学院', '厦门工学院', '集美大学诚毅学院', '厦门海洋职业技术学院', '厦门演艺职业学院', '厦门华天涉外职业技术学院', '厦门城市职业学院', '厦门兴才职业技术学院', '厦门软件职业技术学院', '厦门南洋职业学院', '厦门东海职业技术学院', '厦门安防科技职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['三明学院', '福建水利电力职业技术学院', '三明职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['华侨大学', '泉州师范学院', '仰恩大学', '闽南理工学院', '福建师范大学闽南科技学院', '泉州信息工程学院', '黎明职业大学', '福建电力职业技术学院', '泉州医学高等专科学校', '泉州纺织服装职业学院', '泉州华光职业学院', '泉州理工职业学院', '泉州经贸职业技术学院', '泉州工艺美术职业学院', '泉州工程职业技术学院', '泉州海洋职业学院', '泉州轻工职业学院', '泉州幼儿师范高等专科学校', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['莆田学院', '湄洲湾职业技术学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['宁德师范学院', '宁德职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['武夷学院', '福建林业职业技术学院', '闽北职业技术学院', '武夷山职业学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['龙岩学院', '闽西职业技术学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['福州大学', '福建工程学院', '福建农林大学', '福建医科大学', '福建中医药大学', '福建师范大学', '闽江学院', '福建商学院', '福建警察学院', '福建农林大学东方学院', '阳光学院', '福州大学至诚学院', '福建师范大学协和学院', '福州外语外贸学院', '福建江夏学院', '福州理工学院', '福建农林大学金山学院', '福建船政交通职业学院', '福建华南女子职业学院', '福州职业技术学院', '福建信息职业技术学院', '福建农业职业技术学院', '福建卫生职业技术学院', '福州英华职业学院', '福建警官职业学院', '福州黎明职业技术学院', '福州科技职业技术学院', '福建对外经济贸易职业技术学院', '福建生物工程职业技术学院', '福建艺术职业学院', '福建幼儿师范高等专科学校', '福州软件职业技术学院', '福建体育职业技术学院', '闽江师范高等专科学校', '其他'];
              break;
          }
          break;
        //江苏
        case 3:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['江苏大学京江学院', '南京财经大学红山学院', '金山职业技术学院', '江苏科技大学', '江苏大学', '镇江市高等专科学校', '江苏农林职业技术学院', '江苏航空职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['江苏科技大学苏州理工学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['扬州大学广陵学院', '南京邮电大学通达学院', '江海职业技术学院', '扬州中瑞酒店职业学院', '扬州大学', '扬州市职业大学', '扬州环境资源职业技术学院', '扬州工业职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['民办明达职业技术学院', '盐城工学院', '盐城师范学院', '盐城幼儿师范高等专科学校', '盐城卫生职业技术学院', '盐城工业职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['中国矿业大学徐海学院', '江苏师范大学科文学院', '九州职业技术学院', '中国矿业大学', '徐州医科大学', '江苏师范大学', '徐州工程学院', '江苏建筑职业技术学院', '徐州工业职业技术学院', '徐州幼儿师范高等专科学校', '徐州生物工程职业技术学院', '江苏安全技术职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['宿迁学院', '宿迁泽达职业技术学院', '宿迁职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['无锡太湖学院', '太湖创意职业技术学院', '无锡南洋职业技术学院', '江南影视艺术职业学院', '江南大学', '无锡职业技术学院', '无锡科技职业学院', '无锡商业职业技术学院', '江苏信息职业技术学院', '江阴职业技术学院', '无锡城市职业技术学院', '无锡工艺职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['南京理工大学泰州科技学院', '南京师范大学泰州学院', '南京中医药大学翰林学院', '常州大学怀德学院', '泰州学院', '泰州职业技术学院', '江苏农牧科技职业学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['昆山杜克大学', '苏州大学文正学院', '苏州大学应用技术学院', '苏州科技大学天平学院', '硅湖职业技术学院', '西交利物浦大学', '苏州托普信息职业技术学院', '苏州港大思培科技职业学院', '昆山登云科技职业学院', '苏州高博软件技术职业学院', '苏州大学', '苏州科技大学', '常熟理工学院', '苏州幼儿师范高等专科学校', '苏州工艺美术职业技术学院', '苏州职业大学', '沙洲职业工学院', '苏州经贸职业技术学院', '苏州工业职业技术学院', '苏州卫生职业技术学院', '苏州农业职业技术学院', '苏州工业园区职业技术学院', '苏州健雄职业技术学院', '苏州信息职业技术学院', '苏州工业园区服务外包职业学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['南通理工学院', '南通大学杏林学院', '南通大学', '江苏工程职业技术学院', '南通职业大学', '南通科技职业学院', '南通航运职业技术学院', '江苏商贸职业学院', '南通师范高等专科学校'];
              break;
            case 10:
              data.multiArray[2] = ["三江学院", "东南大学成贤学院", "南京大学金陵学院", "南京理工大学紫金学院", "南京航空航天大学金城学院", "中国传媒大学南广学院", "南京工业大学浦江学院", "南京师范大学中北学院", "南京信息工程大学滨江学院", "南京晓庄学院", "南京审计大学", "南京工程学院", "南京艺术学院", "南京体育学院", "江苏警官学院", "南京财经大学", "南京师范大学", "中国药科大学", "南京中医药大学", "南京医科大学", "南京农业大学", "南京信息工程大学", "南京林业大学", "河海大学", "南京邮电大学", "南京工业大学", "南京理工大学", "南京航空航天大学", "东南大学", "南京大学", "南京视觉艺术职业学院", "金肯职业技术学院", "钟山职业技术学院", "正德职业技术学院", "应天职业技术学院", "南京审计大学金审学院", "南京特殊教育师范学院", "南京森林警察学院", "金陵科技学院", "江苏第二师范学院", "南京工业职业技术学院", "江苏经贸职业技术学院", "江苏联合职业技术学院", "江苏海事职业技术学院", "南京交通职业技术学院", "南京科技职业学院", "南京铁道职业技术学院", "南京信息职业技术学院", "江苏城市职业学院", "南京城市职业学院", "南京机电职业技术学院", "南京旅游职业学院", "江苏建康职业学院", '其他'];
              break;
            case 11:
              data.multiArray[2] = ['南京医科大学康达学院', '淮海工学院', '连云港职业技术学院', '连云港师范高等专科学校', '江苏财会职业学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['炎黄职业技术学院', '淮阴师范学院', '淮阴工学院', '淮安信息职业技术学院', '江苏食品药品职业技术学院', '江苏财经职业技术学院', '江苏护理职业学院', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['建东职业技术学院', '常州大学', '常州工学院', '江苏理工学院', '常州信息职业技术学院', '常州纺织服装职业技术学院', '常州轻工职业技术学院', '常州工程职业技术学院', '常州机电职业技术学院', '江苏城乡建设职业学院', '其他'];
              break;
          }
          break;
        //广东
        case 4:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['北京师范大学珠海分校', '北京理工大学珠海学院', '吉林大学珠海学院', '京师范大学-香港浸会大学联合国际学院', '珠海艺术职业学院', '珠海城市职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['电子科技大学中山学院', '中山火炬职业技术学院', '中山职业技术学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['肇庆学院', '广东理工学院', '广东工商职业学院', '肇庆医学高等专科学校', '广东信息工程职业学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['广东海洋大学', '广东医科大学', '岭南师范学院', '广东海洋大学寸金学院', '广东文理职业学院', '湛江幼儿师范专科学校', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['罗定职业技术学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['阳江职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['深圳大学', '南方科技大学', '香港中文大学（深圳）', '深圳职业技术学院', '广东新安职业技术学院', '深圳信息职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['韶关学院', '广东松山职业技术学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['汕尾职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['汕头大学', '汕头职业技术学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['清远职业技术学院', '广东碧桂园职业学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['嘉应学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['广东石油化工学院', '茂名职业技术学院', '广东茂名健康职业学院', '广东茂名幼儿师范专科学校', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['潮汕职业技术学院', '揭阳职业技术学院', '其他'];
              break;
            case 14:
              data.multiArray[2] = ['五邑大学', '江门职业技术学院', '广东南方职业学院', '其他'];
              break;
            case 15:
              data.multiArray[2] = ['惠州学院', '惠州经济职业技术学院', '惠州卫生职业技术学院', '惠州城市职业学院', '其他'];
              break;
            case 16:
              data.multiArray[2] = ['河源职业技术学院', '其他'];
              break;
            case 17:
              data.multiArray[2] = ['中山大学', '暨南大学', '华南理工大学', '华南农业大学', '广州医科大学', '广州中医药大学', '广东药科大学', '华南师范大学', '广州体育学院', '广州美术学院', '星海音乐学院', '广东技术师范学院', '华南理工大学广州学院', '南方医科大学', '广东培正学院', '广东外语外贸大学', '广东工业大学', '广东金融学院', '仲恺农业工程学院', '广东警官学院', '广州航海学院', '广东财经大学', '广东白云学院', '广州大学', '广州大学华软软件学院', '中山大学南方学院', '广东外语外贸大学南国商学院', '广东财经大学华商学院', '华南农业大学珠江学院', '广东技术师范学院天河学院', '广东工业大学华立学院', '广州大学松田学院', '广州商学院', '广州工商学院', '中山大学新华学院', '广东第二师范学院', '广东轻工职业技术学院', '广东交通职业技术学院', '广东水利电力职业技术学院', '民办南华工商学院', '私立华联学院', '广州民航职业技术学院', '广州番禺职业技术学院', '广东农工商职业技术学院', '广东科学技术职业学院', '广东食品药品职业学院', '广州康大职业技术学院', '广东行政职业学院', '广东体育职业技术学院', '广东建设职业技术学院', '广东女子职业技术学院', '广东机电职业技术学院', '广东岭南职业技术学院', '广东邮电职业技术学院', '广东工贸职业技术学院', '广东司法警官职业学院', '广东省外语艺术职业学院', '广东文艺职业学院', '广州体育职业技术学院', '广州工程技术职业学院', '广州涉外经济职业技术学院', '广州南洋理工职业学院', '广州科技职业技术学院', '广州现代信息工程职业技术学院', '广东理工职业学院', '广州华南商贸职业学院', '广州华立科技职业学院', '广州城市职业学院', '广东工程职业技术学院', '广州铁路职业技术学院', '广东科贸职业学院', '广州科技贸易职业学院', '广州珠江职业技术学院', '广州松田职业学院', '广州城建职业学院', '广州华商职业学院', '广州华夏职业学院', '广东青年职业学院', '广州东华职业学院', '广东舞蹈戏剧职业学院', '广东生态工程职业学院', '公安边防部队高等专科学校', '广州卫生职业技术学院', '其他'];
              break;
            case 18:
              data.multiArray[2] = ['佛山科学技术学院', '广东东软学院', '顺德职业技术学院', '佛山职业技术学院', '广东职业技术学院', '广东环境保护工程职业学院', '其他'];
              break;
            case 19:
              data.multiArray[2] = ['东莞理工学院', '广东科技学院', '东莞理工学院城市学院', '广东亚视演艺职业学院', '东莞职业技术学院', '广东创新科技职业学院', '广东酒店管理职业技术学院', '其他'];
              break;
            case 20:
              data.multiArray[2] = ['韩山师范学院', '其他'];
              break;
          }
          break;
        case 5:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['营口理工学院', '营口职业技术学院', '辽宁农业职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['铁岭师范高等专科学校', '辽宁职业学院', '辽宁工程职业学院', '铁岭卫生职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['辽宁大学', '沈阳工业大学', '沈阳航空航天大学', '沈阳理工大学', '东北大学', '沈阳化工大学', '沈阳建筑大学', '沈阳农业大学', '中国医科大学', '辽宁中医药大学', '沈阳药科大学', '沈阳医学院', '沈阳师范大学', '中国刑事警察学院', '沈阳体育学院', '沈阳音乐学院', '鲁迅美术学院', '沈阳大学', '沈阳工程学院', '沈阳航空航天大学北方科技学院', '沈阳工学院', '沈阳城市建设学院', '中国医科大学临床医药学院', '辽宁师范大学海华学院', '沈阳城市学院', '辽宁中医药大学杏林学院', '辽宁何氏医学院', '沈阳科技学院', '辽宁传媒学院', '辽宁省交通高等专科学校', '沈阳航空职业技术学院', '辽宁体育运动职业技术学院', '辽宁林业职业技术学院', '沈阳职业技术学院', '辽宁金融职业学院', '辽宁轨道交通职业学院', '辽宁广告职业学院', '辽宁经济职业技术学院', '辽宁商贸职业学院', '辽宁装备制造职业技术学院', '辽宁现代服务职业技术学院', '辽宁城市建设职业技术学院', '辽宁医药职业学院', '沈阳北软信息职业技术学院', '辽宁政法职业学院', '辽宁民族师范高等专科学校', '辽宁水利职业学院', '辽宁特殊教育师范高等专科学校', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['盘锦职业技术学院', '辽河石油职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['沈阳工业大学工程学院', '辽阳职业技术学院', '辽宁建筑职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['辽宁工业大学', '锦州医科大学', '渤海大学', '锦州医科大学医疗学院', '辽宁理工学院', '锦州师范高等专科学校', '辽宁理工职业学院', '辽宁石化职业技术学院', '辽宁铁道职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['辽宁财贸学院', '渤海船舶职业学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['辽宁工程技术大学', '阜新高等专科学校', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['辽宁石油化工大学', '辽宁石油化工大学顺华能源学院', '抚顺师范高等专科学校', '抚顺职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['辽东学院', '辽宁机电职业技术学院', '辽宁地质工程职业学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['大连理工大学', '大连交通大学', '大连海事大学', '大连工业大学', '大连海洋大学', '大连医科大学', '辽宁师范大学', '大连外国语大学', '东北财经大学', '辽宁对外经贸学院', '大连大学', '辽宁警察学院', '大连民族大学', '大连理工大学城市学院', '大连工业大学艺术与信息工程学院', '大连科技学院', '大连医科大学中山学院', '大连财经学院', '大连艺术学院', '大连东软信息学院', '大连职业技术学院', '辽宁税务高等专科学校', '大连商务职业学院', '大连软件职业学院', '大连翻译职业学院', '大连枫叶职业技术学院', '大连航运职业技术学院', '大连装备制造职业技术学院', '大连汽车职业技术学院', '辽宁轻工职业学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['朝阳师范高等专科学校', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['辽宁科技学院', '辽宁冶金职业技术学院', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['辽宁科技大学', '鞍山师范学院', '辽宁科技大学信息技术学院', '其他'];
              break;
          }
          break;
        //内蒙古
        case 6:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['兴安职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['锡林郭勒职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['集宁师范学院', '乌兰察布职业学院', '乌兰察布医学高等专科学校', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['乌海职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['内蒙古民族大学', '通辽职业学院', '科尔沁艺术职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['呼伦贝尔学院', '呼伦贝尔职业技术学院', '满洲里俄语职业学院', '扎兰屯职业学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['内蒙古大学', '内蒙古工业大学', '内蒙古农业大学', '内蒙古医科大学', '内蒙古师范大学', '内蒙古财经大学', '呼和浩特民族学院', '内蒙古大学创业学院', '内蒙古师范大学鸿德学院', '内蒙古艺术学院', '内蒙古建筑职业技术学院', '内蒙古丰州职业学院', '呼和浩特职业学院', '内蒙古电子信息职业技术学院', '内蒙古机电职业技术学院', '内蒙古化工职业学院', '内蒙古商贸职业学院', '内蒙古警察职业学院', '内蒙古体育职业学院', '内蒙古科技职业学院', '内蒙古北方职业技术学院', '内蒙古经贸外语职业学院', '内蒙古工业职业学院', '内蒙古能源职业学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['鄂尔多斯应用技术学院', '鄂尔多斯职业学院', '内蒙古民族幼儿师范高等专科学校', '鄂尔多斯生态环境职业学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['赤峰学院', '内蒙古交通职业技术学院', '赤峰职业技术学院', '赤峰工业职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['内蒙古科技大学', '包头职业技术学院', '包头轻工职业技术学院', '包头钢铁职业技术学院', '包头铁道职业技术学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['河套学院', '内蒙古美术职业学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['阿拉善职业技术学院', '其他'];
              break;
          }
          break;
        case 7:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['长治市', '运城市', '阳泉市', '忻州市', '太原市', '朔州市', '吕梁市', '临汾市', '晋中市', '晋城市', '大同市'];
              break;
            case 1:
              data.multiArray[2] = ['运城学院', '山西水利职业技术学院', '山西运城农业职业技术学院', '运城幼儿师范高等专科学校', '运城职业技术学院', '运城护理职业学院', '运城师范高等专科学校', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['山西工程技术学院', '阳泉职业技术学院', '阳泉师范高等专科学校', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['忻州师范学院', '忻州职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['山西大学', '太原科技大学', '中北大学', '太原理工大学', '山西医科大学', '太原师范学院', '山西财经大学', '山西中医学院', '太原学院', '山西警察学院', '山西应用科技学院', '山西大学商务学院', '太原理工大学现代科技学院', '中北大学信息商务学院', '太原科技大学华科学院', '山西医科大学晋祠学院', '山西财经大学华商学院', '山西工商学院', '太原工业学院', '山西传媒学院', '山西省财政税务专科学校', '山西艺术职业学院', '山西建筑职业技术学院', '山西药科职业学院', '山西工程职业技术学院', '山西交通职业技术学院', '山西戏剧职业学院', '山西财贸职业技术学院', '山西林业职业技术学院', '山西职业技术学院', '山西煤炭职业技术学院', '山西金融职业学院', '太原城市职业技术学院', '山西体育职业学院', '山西警官职业学院', '山西国际商务职业学院', '太原旅游职业学院', '山西旅游职业学院', '山西电力职业技术学院', '山西电力职业技术学院', '山西经贸职业学院', '山西轻工职业技术学院', '山西青年职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['朔州职业技术学院', '朔州师范高等专科学校', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['吕梁学院', '吕梁职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['山西师范大学', '山西师范大学现代文理学院', '临汾职业技术学院', '山西信息职业技术学院', '山西管理职业学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['山西农业大学', '晋中学院', '山西农业大学信息学院', '山西能源学院', '山西同文职业技术学院', '晋中职业技术学院', '山西华澳商贸职业学院', '晋中师范高等专科学校', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['晋城职业技术学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['山西大同大学', '大同煤炭职业技术学院', '其他'];
              break;
          }
          break;
        case 8:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['青海大学', '青海师范大学', '青海民族大学', '青海大学昆仑学院', '青海卫生职业技术学院', '青海警官职业学院', '青海畜牧兽医职业技术学院', '青海交通职业技术学院', '青海建筑职业技术学院', '西宁城市职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['青海高等职业技术学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['青海柴达木职业技术学院', '其他'];
              break;
          }
          break;
        case 9:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['四川理工学院', '四川卫生康复职业学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['四川希望汽车职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['宜宾学院', '宜宾职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['四川农业大学', '雅安职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['四川职业技术学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['攀枝花学院', '四川机电职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['内江师范学院', '内江职业技术学院', '川南幼儿师范高等1专科学校', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['川北医学院', '西华师范大学', '西南交通大学希望学院', '南充职业技术学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['西南科技大学', '绵阳师范学院', '西南财经大学天府学院', '四川文化艺术学院', '西南科技大学城市学院', '绵阳职业技术学院', '四川中医药高等专科学校', '四川幼儿师范高等专科学校', '四川汽车职业技术学院', '四川电子机械职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['四川大学锦江学院', '眉山职业技术学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['西南医科大学', '四川警察学院', '四川化工职业技术学院', '泸州职业技术学院', '四川三河职业学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['四川应用技术职业学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['西昌学院', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['乐山师范学院', '成都理工大学工程技术学院', '乐山职业技术学院', '其他'];
              break;
            case 14:
              data.multiArray[2] = ['四川信息职业技术学院', '川北幼儿师范高等专科学校', '其他'];
              break;
            case 15:
              data.multiArray[2] = ['广安职业技术学院', '其他'];
              break;
            case 16:
              data.multiArray[2] = ['四川民族学院', '其他'];
              break;
            case 17:
              data.multiArray[2] = ['中国民用航空飞行学院', '四川工业科技学院', '四川工程职业技术学院', '四川建筑职业技术学院', '四川司法警官职业学院', '四川护理职业学院', '其他'];
              break;
            case 18:
              data.multiArray[2] = ['四川文理学院', '达州职业技术学院', '其他'];
              break;
            case 19:
              data.multiArray[2] = ['四川大学', '西南交通大学', '电子科技大学', '西南石油大学', '成都理工大学', '成都信息工程大学', '西华大学', '成都中医药大学', '四川师范大学', '西南财经大学', '成都体育学院', '四川音乐学院', '西南民族大学', '成都大学', '成都工业学院', '四川旅游学院', '成都东软学院', '电子科技大学成都学院', '四川传媒学院', '成都信息工程大学银杏酒店管理学院', '成都文理学院', '四川工商学院', '四川外国语大学成都学院', '成都医学院', '四川大学锦城学院', '成都师范学院', '四川电影电视学院', '成都纺织高等专科学校', '民办四川天一学院', '成都航空职业技术学院', '四川电力职业技术学院', '成都职业技术学院', '四川水利职业技术学院', '四川航天职业技术学院', '四川邮电职业技术学院', '四川交通职业技术学院', '四川工商职业技术学院', '四川托普信息技术职业学院', '四川国际标榜职业学院', '成都农业科技职业学院', '成都艺术职业学院', '四川商务职业学院', '四川文化传媒职业学院', '四川华新现代职业学院', '四川管理职业学院', '四川艺术职业学院', '四川科技职业学院', '四川文化产业职业学院', '四川财经职业学院', '四川城市职业学院', '四川现代职业学院', '四川长江职业学院', '四川文轩职业学院', '成都工业职业技术学院', '四川西南航空职业学院', '成都工贸职业技术学院', '其他'];
              break;
            case 19:
              data.multiArray[2] = ['巴中职业技术学院', '其他'];
              break;
            case 20:
              data.multiArray[2] = ['阿坝师范学院', '其他'];
              break;
          }
          break;
        case 10:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['贵州医科大学', '贵阳中医学院', '贵州师范大学', '贵州财经大学', '贵州民族大学', '贵阳学院', '贵州商学院', '贵阳中医学院时珍学院', '贵州财经大学商务学院', '贵州大学科技学院', '贵州大学明德学院', '贵州民族大学人文科技学院', '贵州师范大学求是学院', '贵州医科大学神奇民族医药学院', '贵州师范学院', '贵州理工学院', '贵州警官职业学院', '贵州交通职业技术学院', '贵州城市职业学院', '贵州工业职业技术学院', '贵州电力职业技术学院', '贵州轻工职业技术学院', '贵阳护理职业学院', '贵阳职业技术学院', '贵州职业技术学院', '贵州工商职业学院', '贵阳幼儿师范高等专科学校', '贵州建设职业技术学院', '贵州农业职业学院', '贵州水利水电职业技术学院', '贵州电子商务职业技术学院', '贵州电子科技职业学院', '贵州航空职业技术学院', '贵州大学', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['遵义医学院', '遵义师范学院', '遵义医学院医学与科技学院', '贵州航天职业技术学院', '遵义职业技术学院', '遵义医药高等专科学校', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['铜仁学院', '铜仁职业技术学院', '铜仁幼儿师范高等专科学校', '贵州工程职业学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['兴义民族师范学院', '黔西南民族职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['黔南民族师范学院', '黔南民族医学高等专科学校', '黔南民族职业技术学院', '贵州盛华职业学院', '黔南民族幼儿师范高等专科学校', '贵州应用技术职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['凯里学院', '贵州电子信息职业技术学院', '黔东南民族职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['六盘水师范学院', '六盘水职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['贵州工程应用技术学院', '毕节职业技术学院', '毕节医学高等专科学校', '毕节幼儿师范高等专科学校', '贵州工贸职业学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['安顺学院', '安顺职业技术学院', '其他'];
              break;
          }
          break;
        case 11:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['昭通学院', '昭通卫生职业学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['玉溪师范学院', '玉溪农业职业技术学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['西双版纳职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['文山学院', '云南三鑫职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['曲靖师范学院', '云南能源职业技术学院', '曲靖医学高等专科学校', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['普洱学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['滇西科技师范学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['云南大学旅游文化学院', '丽江师范高等专科学校', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['云南大学', '昆明理工大学', '云南农业大学', '西南林业大学', '昆明医科大学', '云南中医学院', '云南师范大学', '云南财经大学', '云南艺术学院', '云南民族大学', '云南警官学院', '昆明学院', '云南经济管理学院', '云南大学滇池学院', '昆明理工大学津桥学院', '云南师范大学商学院', '云南师范大学文理学院', '昆明医科大学海源学院', '云南艺术学院文华学院', '云南工商学院', '昆明冶金高等专科学校', '云南国土资源职业学院', '云南交通职业技术学院', '昆明工业职业技术学院', '云南农业职业技术学院', '云南司法警官职业学院', '云南文化艺术职业学院', '云南体育运动职业技术学院', '云南科技信息职业学院', '昆明艺术职业学院', '云南国防工业职业技术学院', '云南机电职业技术学院', '云南林业职业技术学院', '云南城市建设职业学院', '云南工程职业学院', '云南新兴职业学院', '云南经贸外事职业学院', '云南商务职业学院', '昆明卫生职业学院', '云南旅游职业学院', '云南外事外语职业学院', '公安消防部队高等专科学校', '云南财经职业学院', '昆明铁道职业技术学院', '云南水利水电职业学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['红河学院', '云南锡业职业技术学院', '红河卫生职业学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['德宏师范高等专科学校', '德宏职业学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['大理大学', '大理农林职业技术学院', '大理护理职业学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['楚雄师范学院', '楚雄医药高等专科学校', '云南现代职业技术学院', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['保山学院', '保山中医药高等专科学校', '其他'];
              break;
          }
          break;
        case 12:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['榆林学院', '榆林职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['延安大学', '延安职业技术学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['西北农林科技大学', '陕西中医药大学', '咸阳师范学院', '西藏民族大学', '陕西国际商贸学院', '陕西服装工程学院', '陕西科技大学镐京学院', '陕西工业职业技术学院', '杨凌职业技术学院', '陕西能源职业技术学院', '陕西财经职业技术学院', '陕西邮电职业技术学院', '咸阳职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['西北大学', '西安交通大学', '西北工业大学', '西安理工大学', '西安电子科技大学', '西安工业大学', '西安建筑科技大学', '西安科技大学', '西安石油大学', '陕西科技大学', '西安工程大学', '长安大学', '陕西师范大学', '西安外国语大学', '西北政法大学', '西安体育学院', '西安音乐学院', '西安美术学院', '西安文理学院', '西安培华学院', '西安财经学院', '西安邮电大学', '西安航空学院', '西安医学院', '西安欧亚学院', '西安外事学院', '西安翻译学院', '西京学院', '西安思源学院', '西安交通工程学院', '西安交通大学城市学院', '西北大学现代学院', '西安建筑科技大学华清学院', '西安财经学院行知学院', '西安工业大学北方信息工程学院', '延安大学西安创新学院', '西安电子科技大学长安学院', '西北工业大学明德学院', '长安大学兴华学院', '西安理工大学高科学院', '西安科技大学高新学院', '陕西学前师范学院', '西安电力高等专科学校', '陕西国防工业职业技术学院', '西安航空职业技术学院', '陕西交通职业技术学院', '陕西职业技术学院', '西安高新科技职业学院', '西安城市建设职业学院', '陕西电子信息职业技术学院', '西安海棠职业学院', '西安汽车科技职业学院', '西安东方亚太职业技术学院', '陕西警官职业学院', '陕西经济管理职业技术学院', '西安铁路职业技术学院', '西安职业技术学院', '陕西青年职业学院', '陕西工商职业学院', '陕西电子科技职业学院', '陕西旅游烹饪职业学院', '西安医学高等专科学校', '陕西艺术职业学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['渭南师范学院', '陕西铁路工程职业技术学院', '渭南职业技术学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['铜川职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['商洛学院', '商洛职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['陕西理工学院', '陕西航空职业技术学院', '汉中职业技术学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['宝鸡文理学院', '宝鸡职业技术学院', '陕西机电职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['安康学院', '安康职业技术学院', '其他'];
              break;
          }
          break;
        case 13:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['西藏民族大学', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['西藏大学', '西藏藏医学院', '西藏警官高等专科学校', '拉萨师范高等专科学校', '西藏职业技术学院', '其他'];
              break;
          }
          break;
        case 14:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['宁夏大学', '宁夏医科大学', '北方民族大学', '宁夏大学新华学院', '银川能源学院', '中国矿业大学银川学院', '宁夏工业职业学院', '宁夏职业技术学院', '宁夏工商职业技术学院', '宁夏财经职业技术学院', '宁夏司法警官职业学院', '宁夏建设职业技术学院', '宁夏葡萄酒与防沙治沙职业技术学院', '宁夏幼儿师范高等专科学校', '宁夏艺术职业学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['宁夏民族职业技术学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['宁夏理工学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['宁夏师范学院', '其他'];
              break;
          }
          break;
        case 15:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['新疆大学', '新疆医科大学', '新疆师范大学', '新疆财经大学', '新疆艺术学院', '新疆工程学院', '新疆警察学院', '新疆大学科学技术学院', '新疆农业大学科学技术学院', '新疆医科大学厚博学院', '新疆财经大学商务学院', '乌鲁木齐职业大学', '新疆机电职业技术学院', '新疆轻工职业技术学院', '新疆能源职业技术学院', '新疆建设职业技术学院', '新疆现代职业技术学院', '新疆天山职业技术学院', '新疆交通职业技术学院', '新疆职业大学', '新疆体育职业技术学院', '新疆师范高等专科学校', '新疆铁道职业技术学院', '新疆生产建设兵团兴新职业技术学院', '新疆科技职业技术学院', '新疆农业大学', '新疆工业职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['塔里木大学', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['伊犁师范学院', '伊犁职业技术学院', '新疆应用职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['新疆兵团警官高等专科学校', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['吐鲁番职业技术学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['石河子大学', '石河子大学科技学院', '新疆石河子职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['克拉玛依职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['喀什大学', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['和田师范专科学校', '新疆维吾尔医学专科学校', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['哈密职业技术学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['昌吉学院', '新疆农业职业技术学院', '昌吉职业技术学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['巴音郭楞职业技术学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['阿克苏职业技术学院', '其他'];
              break;
          }
          break;
        case 16:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['玉林师范学院', '玉柴职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['梧州学院', '梧州职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['钦州学院', '广西英华国际职业学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['广西大学', '广西医科大学', '广西中医药大学', '广西师范学院', '广西艺术学院', '广西民族大学', '广西财经学院', '南宁学院', '广西警察学院', '广西大学行健文理学院', '广西民族大学相思湖学院', '广西师范学院师园学院', '广西中医药大学赛恩斯新医药学院', '广西外国语学院', '广西机电职业技术学院', '广西体育高等专科学校', '南宁职业技术学院', '广西水利电力职业技术学院', '广西职业技术学院', '广西交通职业技术学院', '广西工业职业技术学院', '广西国际商务职业技术学院', '广西农业职业技术学院', '广西建设职业技术学院', '广西经贸职业技术学院', '广西工商职业技术学院', '广西演艺职业学院', '广西电力职业技术学院', '广西经济职业学院', '广西幼儿师范高等专科学校', '广西卫生职业技术学院', '广西金融职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['广西科技大学', '广西科技大学鹿山学院', '柳州职业技术学院', '广西生态工程职业技术学院', '柳州铁道职业技术学院', '柳州城市职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['广西科技师范学院', '广西蓝天航空职业学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['贺州学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['河池学院', '广西现代职业技术学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['桂林电子科技大学', '桂林理工大学', '桂林医学院', '广西师范大学', '桂林航天工业学院', '桂林旅游学院', '广西师范大学漓江学院', '桂林电子科技大学信息科技学院', '桂林理工大学博文管理学院', '桂林师范高等专科学校', '桂林山水职业学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['广西民族师范学院', '广西城市职业学院', '广西理工职业技术学院', '广西科技职业学院', '广西中远职业学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['北海艺术设计学院', '北京航空航天大学北海学院', '北海职业学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['右江民族医学院', '百色学院', '百色职业学院', '广西工程职业学院', '广西培贤国际职业学院', '其他'];
              break;
          }
          break;
        case 17:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['海南外国语职业学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['海南热带海洋学院', '三亚学院', '三亚城市职业学院', '三亚航空旅游职业学院', '三亚理工职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['海南软件职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['海南大学', '海南师范大学', '海南医学院', '海口经济学院', '琼台师范学院', '海南职业技术学院', '海南政法职业学院', '海南经贸职业技术学院', '海南工商职业学院', '海南科技职业学院', '海南体育职业技术学院', '其他'];
              break;
          }
          break;
        case 18:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['湖南工业大学', '湖南工业大学科技学院', '株洲师范高等专科学校', '湖南冶金职业技术学院', '湖南铁道职业技术学院', '湖南化工职业技术学院', '湖南中医药高等专科学校', '湖南汽车工程职业学院', '湖南铁路科技职业技术学院', '湖南有色金属职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['湖南大学', '中南大学', '长沙理工大学', '湖南农业大学', '中南林业科技大学', '湖南中医药大学', '湖南师范大学', '湖南商学院', '长沙医学院', '长沙学院', '湖南财政经济学院', '湖南警察学院', '湖南女子学院', '湖南第一师范学院', '湖南涉外经济学院', '湖南商学院北津学院', '湖南师范大学树达学院', '湖南农业大学东方科技学院', '中南林业科技大学涉外学院', '湖南中医药大学湘杏学院', '长沙理工大学城南学院', '长沙师范学院', '长沙民政职业技术学院', '湖南工业职业技术学院', '湖南信息学院', '湖南信息职业技术学院', '湖南税务高等专科学校', '长沙航空职业技术学院', '湖南大众传媒职业技术学院', '湖南科技职业学院', '湖南生物机电职业技术学院', '湖南交通职业技术学院', '湖南商务职业技术学院', '湖南体育职业学院', '湖南工程职业技术学院', '保险职业学院', '湖南外贸职业学院', '湖南网络工程职业学院', '湖南司法警官职业学院', '长沙商贸旅游职业技术学院', '湖南邮电职业技术学院', '长沙环境保护职业技术学院', '湖南艺术职业学院', '湖南机电职业技术学院', '长沙职业技术学院', '长沙南方职业学院', '长沙电力职业技术学院', '湖南水利水电职业技术学院', '湖南现代物流职业技术学院', '湖南安全技术职业学院', '湖南外国语职业学院', '湖南都市职业学院', '湖南电子科技职业学院', '湖南三一工业职业技术学院', '长沙卫生职业学院', '', '湖南食品药品职业学院', '湖南劳动人事职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['吉首大学张家界学院', '张家界航空工业职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['湖南理工学院', '湖南理工学院南湖学院', '岳阳职业技术学院', '湖南石油化工职业技术学院', '湖南民族职业学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['湖南科技学院', '永州职业技术学院', '湖南九嶷职业技术学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['湖南城市学院', '益阳职业技术学院', '湖南工艺美术职业学院', '益阳医学高等专科学校', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['吉首大学', '湘西民族职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['湘潭大学', '湖南科技大学', '湖南工程学院', '湘潭大学兴湘学院', '湖南科技大学潇湘学院', '湖南工程学院应用技术学院', '湘潭医卫职业技术学院', '湖南城建职业技术学院', '湖南理工职业技术学院', '湖南软件职业学院', '湖南电气职业技术学院', '湖南国防工业职业技术学院', '湖南吉利汽车职业技术学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['邵阳学院', '邵阳职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['湖南人文科技学院', '娄底职业技术学院', '潇湘职业学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['怀化学院', '湖南医药学院', '怀化职业技术学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['衡阳师范学院', '南华大学', '湖南工学院', '南华大学船山学院', '衡阳师范学院南岳学院', '湖南交通工程学院', '湖南环境生物职业技术学院', '湖南财经工业职业技术学院', '湖南高速铁路职业技术学院', '湖南工商职业学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['湘南学院', '郴州职业技术学院', '湘南幼儿师范高等专科学校', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['湖南文理学院', '湖南文理学院芙蓉学院', '湖南应用技术学院', '常德职业技术学院', '湖南高尔夫旅游职业学院', '湖南幼儿师范高等专科学校', '其他'];
              break;
          }
          break;
        case 19:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['三峡大学', '三峡大学科技学院', '湖北三峡职业技术学院', '三峡电力职业学院', '三峡旅游职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['湖北工程学院', '湖北工程学院新技术学院', '湖北职业技术学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['湖北文理学院', '湖北文理学院理工学院', '襄阳职业技术学院', '襄阳汽车职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['湖北科技学院', '咸宁职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['仙桃职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['武汉大学', '华中科技大学', '武汉科技大学', '武汉工程大学', '中国地质大学（武汉）', '武汉纺织大学', '武汉轻工大学', '武汉理工大学', '湖北工业大学', '华中农业大学', '湖北中医药大学', '华中师范大学', '湖北大学', '中南财经政法大学', '武汉体育学院', '湖北美术学院', '中南民族大学', '江汉大学', '湖北警官学院', '武汉音乐学院', '湖北经济学院', '武汉商学院', '武汉东湖学院', '汉口学院', '武昌首义学院', '武昌理工学院', '武汉生物工程学院', '武汉铁路桥梁职业学院', '武汉晴川学院', '湖北大学知行学院', '武汉科技大学城市学院', '江汉大学文理学院', '湖北工业大学工程技术学院', '武汉工程大学邮电与信息工程学院', '武汉纺织大学外经贸学院', '武昌工学院', '武汉工商学院', '湖北商贸学院', '湖北经济学院法商学院', '武汉体育学院体育科技学院', '文华学院', '武汉学院', '武汉工程科技学院', '武汉华夏理工学院', '武汉传媒学院', '武汉设计工程学院', '湖北第二师范学院', '武汉职业技术学院', '长江职业学院', '武汉城市职业学院', '武汉船舶职业技术学院', '武汉工贸职业学院', '武汉工程职业技术学院', '湖北轻工职业技术学院', '湖北交通职业技术学院', '武汉航海职业技术学院', '武汉铁路职业技术学院', '武汉软件工程职业学院', '武汉电力职业技术学院', '湖北水利水电职业技术学院', '湖北城市建设职业技术学院', '武汉警官职业学院', '湖北生物科技职业学院', '湖北开放职业学院', '武汉科技职业学院', '武汉外语外事职业学院', '武汉信息传播职业技术学院', '武昌职业学院', '武汉商贸职业学院', '湖北艺术职业学院', '武汉交通职业学院', '长江工程职业技术学院', '武汉工业职业技术学院', '武汉民政职业学院', '湖北财税职业学院', '湖北国土资源职业学院', '湖北生态工程职业技术学院', '湖北科技职业学院', '湖北青年职业学院', '湖北体育职业学院', '湖北幼儿师范高等专科学校', '湖北铁道运输职业学院', '武汉海事职业学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['天门职业学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['随州职业技术学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['汉江师范学院', '湖北汽车工业学院', '湖北医药学院', '湖北汽车工业学院科技学院', '湖北医药学院药护学院', '湖北工业职业技术学院', '武当职业学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['江汉艺术职业学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['长江大学', '长江大学工程技术学院', '荆州理工职业学院', '长江大学文理学院', '', '荆州职业技术学院', '湖北中医药高等专科学校', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['荆楚理工学院', '荆门职业学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['湖北师范大学', '湖北理工学院', '湖北师范大学文理学院', '湖北工程职业学院', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['黄冈师范学院', '黄冈职业技术学院', '鄂东职业技术学院', '黄冈科技职业学院', '其他'];
              break;
            case 14:
              data.multiArray[2] = ['湖北民族学院', '湖北民族学院科技学院', '恩施职业技术学院', '其他'];
              break;
            case 15:
              data.multiArray[2] = ['鄂州职业大学', '其他'];
              break;
            case 16:
              data.multiArray[2] = ['黄淮学院', '驻马店职业技术学院', '其他'];
              break;
            case 17:
              data.multiArray[2] = ['周口师范学院', '周口职业技术学院', '周口科技职业学院', '其他'];
              break;
          }
          break;
        case 20:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['黄淮学院', '驻马店职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['周口师范学院', '周口职业技术学院', '周口科技职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['华北水利水电大学', '郑州大学', '郑州轻工业学院', '河南工业大学', '中原工学院', '河南农业大学', '河南牧业经济学院', '河南中医药大学', '河南财经政法大学', '郑州航空工业管理学院', '郑州工程技术学院', '河南工程学院', '河南财政金融学院', '河南警察学院', '黄河科技学院', '铁道警察学院', '郑州科技学院', '郑州工业应用技术学院', '郑州师范学院', '郑州财经学院', '河南师范大学新联学院', '郑州工商学院', '中原工学院信息商务学院', '郑州成功财经学院', '郑州升达经贸管理学院', '河南职业技术学院', '郑州铁路职业技术学院', '郑州电力高等专科学校', '河南水利与环境职业学院', '河南司法警官职业学院', '郑州澍青医学高等专科学校', '河南检察职业学院', '郑州信息科技职业学院', '郑州电子信息职业技术学院', '嵩山少林武术职业学院', '郑州工业安全职业学院', '河南经贸职业学院', '河南交通职业技术学院', '河南农业职业学院', '郑州旅游职业学院', '郑州职业技术学院', '河南信息统计职业学院', '河南工业贸易职业学院', '郑州电力职业技术学院', '河南建筑职业技术学院', '郑州城市职业学院', '郑州理工职业学院', '郑州信息工程职业学院', '河南应用技术职业学院', '河南艺术职业学院', '河南机电职业学院', '郑州商贸旅游职业学院', '郑州幼儿师范高等专科学校', '郑州黄河护理职业学院', '河南医学高等专科学校', '郑州财税金融职业学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['许昌学院', '许昌职业技术学院', '许昌陶瓷职业学院', '许昌电气职业学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['信阳师范学院', '信阳农林学院', '信阳学院', '信阳职业技术学院', '信阳涉外职业技术学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['河南科技学院', '新乡医学院', '河南师范大学', '新乡学院', '河南工学院', '新乡医学院三全学院', '河南科技学院新科学院', '新乡职业技术学院', '长垣烹饪职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['商丘师范学院', '商丘工学院', '商丘学院', '商丘职业技术学院', '商丘医学高等专科学校', '永城职业学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['三门峡职业技术学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['濮阳职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['平顶山学院', '河南城建学院', '平顶山工业职业技术学院', '河南质量工程职业学院', '平顶山文化艺术职业学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['南阳师范学院', '南阳理工学院', '河南工业职业技术学院', '南阳医学高等专科学校', '南阳职业学院', '南阳农业职业学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['漯河职业技术学院', '漯河医学高等专科学校', '漯河食品职业学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['河南科技大学', '洛阳师范学院', '洛阳理工学院', '河南林业职业学院', '河南推拿职业学院', '洛阳职业技术学院', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['洛阳科技职业学院', '河南大学', '河南大学民生学院', '开封大学', '黄河水利职业技术学院', '开封文化艺术职业学院', '其他'];
              break;
            case 14:
              data.multiArray[2] = ['河南理工大学', '黄河交通学院', '焦作大学', '河南工业和信息化职业学院', '焦作师范高等专科学校', '焦作工贸职业学院', '其他'];
              break;
            case 15:
              data.multiArray[2] = ['济源职业技术学院', '其他'];
              break;
            case 16:
              data.multiArray[2] = ['鹤壁职业技术学院', '鹤壁汽车工程职业学院', '鹤壁能源化工职业学院', '其他'];
              break;
            case 17:
              data.multiArray[2] = ['安阳师范学院', '安阳工学院', '安阳学院', '安阳职业技术学院', '河南护理职业学院', '安阳幼儿师范高等专科学校', '其他'];
              break;
          }
          break;
        case 21:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['山东理工大学', '齐鲁医药学院', '淄博职业学院', '山东工业职业学院', '山东化工职业学院', '淄博师范高等专科学校', '山东铝业职业学院', '山东轻工职业学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['枣庄学院', '枣庄科技职业学院', '枣庄职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['鲁东大学', '烟台大学', '山东工商学院', '烟台南山学院', '烟台大学文经学院', '青岛农业大学海都学院', '烟台职业学院', '烟台工程职业技术学院', '山东中医药高等专科学校', '山东商务职业学院', '烟台汽车工程职业学院', '山东文化产业职业学院', '烟台黄金职业学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['潍坊医学院', '潍坊学院', '潍坊科技学院', '潍坊职业学院', '山东科技职业学院', '山东畜牧兽医职业学院', '山东交通职业学院', '山东信息职业技术学院', '山东经贸职业学院', '潍坊工商职业学院', '山东海事职业学院', '潍坊护理职业学院', '潍坊工程职业学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['威海职业学院', '山东外事翻译职业学院', '山东药品食品职业学院', '威海海洋职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['山东农业大学', '泰山医学院', '泰山学院', '山东科技大学泰山科技学院', '山东财经大学东方学院', '山东服装职业学院', '山东力明科技职业学院', '泰山职业技术学院', '泰山护理职业学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['日照职业技术学院', '山东水利职业学院', '山东外国语职业学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['中国海洋大学', '山东科技大学', '中国石油大学（华东）', '青岛科技大学', '青岛理工大学', '青岛农业大学', '青岛滨海学院', '青岛大学', '青岛恒星科技学院', '青岛黄海学院', '青岛理工大学琴岛学院', '青岛工学院', '北京电影学院现代创意媒体学院', '青岛职业技术学院', '青岛飞洋职业技术学院', '山东外贸职业学院', '青岛酒店管理职业技术学院', '青岛港湾职业技术学院', '青岛求实职业技术学院', '青岛远洋船员职业学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['临沂大学', '山东医学高等专科学校', '临沂职业学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['聊城大学', '聊城大学东昌学院', '聊城职业技术学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['莱芜职业技术学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['济宁医学院', '曲阜师范大学', '济宁学院', '曲阜远东职业技术学院', '济宁职业技术学院', '山东理工职业学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['山东大学', '济南大学', '山东建筑大学', '山东中医药大学', '齐鲁工业大学', '山东师范大学', '山东财经大学', '山东体育学院', '山东艺术学院', '山东工艺美术学院', '山东警察学院', '山东交通学院', '山东女子学院', '山东英才学院', '山东现代学院', '山东协和学院', '山东师范大学历山学院', '山东财经大学燕山学院', '齐鲁理工学院', '济南大学泉城学院', '山东政法学院', '齐鲁师范学院', '山东青年政治学院', '山东管理学院', '山东农业工程学院', '山东商业职业技术学院', '山东电力高等专科学校', '山东职业学院', '山东劳动职业技术学院', '山东圣翰财贸职业学院', '济南职业学院', '山东凯文科技职业学院', '济南工程职业技术学院', '山东电子职业技术学院', '山东旅游职业学院', '山东杏林科技职业学院', '山东城市建设职业学院', '山东司法警官职业学院', '山东传媒职业学院', '济南幼儿师范高等专科学校', '济南护理职业学院', '山东艺术设计职业学院', '山东特殊教育职业学院', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['菏泽学院', '菏泽医学专科学校', '菏泽家政职业学院', '菏泽职业学院', '其他'];
              break;
            case 14:
              data.multiArray[2] = ['中国石油大学胜利学院', '东营职业学院', '东营科技职业学院', '山东胜利职业学院', '其他'];
              break;
            case 15:
              data.multiArray[2] = ['德州学院', '山东华宇工学院', '德州科技职业学院', '德州职业技术学院', '其他'];
              break;
            case 16:
              data.multiArray[2] = ['滨州医学院', '滨州学院', '滨州职业学院', '其他'];
              break;
          }
          break;
        case 22:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['鹰潭职业技术学院', '江西师范高等专科学校', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['宜春学院', '宜春职业技术学院', '江西农业工程职业学院', '宜春幼儿师范高等专科学校', '江西洪州职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['新余学院', '江西工程学院', '赣西科技职业学院', '江西新能源科技职业学院', '江西冶金职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['上饶师范学院', '江西医学高等专科学校', '上饶职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['萍乡学院', '江西工业工程职业技术学院', '江西应用工程职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['南昌大学', '华东交通大学', '南昌航空大学', '江西农业大学', '江西中医药大学', '江西师范大学', '江西财经大学', '江西科技学院', '江西科技师范大学', '南昌工程学院', '江西警察学院', '南昌理工学院', '江西应用科技学院', '江西服装学院', '南昌工学院', '南昌大学科学技术学院', '华东交通大学理工学院', '南昌航空大学科技学院', '江西农业大学南昌商学院', '江西中医药大学科技学院', '江西师范大学科学技术学院', '江西科技师范大学理工学院', '江西财经大学现代经济管理学院', '南昌师范学院', '江西工业职业技术学院', '江西司法警官职业学院', '江西旅游商贸职业学院', '江西电力职业技术学院', '江西艺术职业学院', '江西信息应用职业技术学院', '江西交通职业技术学院', '江西现代职业技术学院', '江西机电职业技术学院', '江西科技职业学院', '南昌职业学院', '江西外语外贸职业学院', '江西工业贸易职业技术学院', '江西生物科技职业学院', '江西建设职业技术学院', '南昌师范高等专科学校', '江西先锋软件职业技术学院', '江西经济管理职业学院', '江西制造职业技术学院', '江西工程职业学院', '江西青年职业学院', '江西航空职业技术学院', '江西卫生职业学院', '江西泰豪动漫职业学院', '江西管理职业学院', '江西传媒职业学院', '江西工商职业技术学院', '江西水利职业学院', '南昌影视传播职业学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['九江学院', '南昌大学共青学院', '九江职业大学', '九江职业技术学院', '江西财经职业学院', '江西枫林涉外经贸职业学院', '共青科技职业学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['景德镇陶瓷大学', '景德镇学院', '景德镇陶瓷大学科技艺术学院', '江西陶瓷工艺美术职业技术学院', '景德镇陶瓷职业技术学院'];
              break;
            case 8:
              data.multiArray[2] = ['井冈山大学', '吉安职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['江西理工大学', '赣南医学院', '赣南师范大学', '江西理工大学应用科学学院', '赣南师范大学科技学院', '江西环境工程职业学院', '江西应用技术职业学院', '赣州师范高等专科学校', '赣南卫生健康职业学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['东华理工大学', '东华理工大学长江学院', '抚州职业技术学院', '江西中医药高等专科学校', '其他'];
              break;
          }
          break;
        case 23:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['宣城职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['宿州学院', '宿州职业技术学院', '皖北卫生职业学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['安徽工程大学', '皖南医学院', '安徽师范大学', '安徽信息工程学院', '安徽师范大学皖江学院', '芜湖职业技术学院', '安徽商贸职业技术学院', '安徽中医药高等专科学校', '安徽机电职业技术学院', '安徽扬子职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['铜陵学院', '铜陵职业技术学院', '安徽工业职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['安徽工业大学', '安徽工业大学工商学院', '河海大学文天学院', '安徽冶金科技职业学院', '马鞍山师范高等专科学校', '马鞍山职业技术学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['皖西学院', '六安职业技术学院', '安徽国防科技职业学院', '安徽现代信息工程职业学院', '皖西卫生职业学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['黄山学院', '黄山职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['安徽理工大学', '淮南师范学院', '淮南联合大学', '淮南职业技术学院', '安徽工贸职业技术学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['淮北师范大学', '淮北师范大学信息学院', '淮北职业技术学院', '安徽矿业职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['安徽大学', '中国科学技术大学', '合肥工业大学', '安徽农业大学', '安徽医科大学', '安徽中医药大学', '巢湖学院', '安徽建筑大学', '安徽三联学院', '合肥学院', '安徽新华学院', '安徽文达信息工程学院', '安徽外国语学院', '安徽大学江淮学院', '安徽建筑大学城市建设学院', '安徽农业大学经济技术学院', '安徽医科大学临床医学院', '合肥师范学院', '安徽职业技术学院', '安徽水利水电职业技术学院', '民办万博科技职业学院', '安徽警官职业学院', '安徽工业经济职业技术学院', '合肥通用职业技术学院', '民办合肥经济技术职业学院', '安徽交通职业技术学院', '安徽体育运动职业技术学院', '安徽医学高等专科学校', '合肥职业技术学院', '安徽广播影视职业技术学院', '民办合肥滨湖职业技术学院', '安徽电气工程职业技术学院', '安徽城市管理职业学院', '安徽工商职业学院', '安徽中澳科技职业学院', '安徽艺术职业学院', '安徽财贸职业学院', '安徽国际商务职业学院', '安徽公安职业学院', '安徽林业职业技术学院', '安徽审计职业学院', '安徽新闻出版职业技术学院', '安徽邮电职业技术学院', '民办合肥财经职业学院', '安徽涉外经济职业学院', '安徽绿海商务职业学院', '合肥共达职业技术学院', '徽商职业学院', '合肥信息技术职业学院', '安徽汽车职业技术学院', '合肥幼儿师范高等专科学校', '安徽长江职业学院', '安徽粮食工程职业学院', '合肥科技职业学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['阜阳师范学院', '阜阳师范学院信息工程学院', '阜阳职业技术学院', '阜阳科技职业学院', '民办安徽旅游职业学院', '阜阳幼儿师范高等专科学校', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['滁州学院', '安徽科技学院', '滁州职业技术学院', '滁州城市职业学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['池州学院', '池州职业技术学院', '安徽人口职业学院', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['亳州学院', '亳州职业技术学院', '其他'];
              break;
            case 14:
              data.multiArray[2] = ['蚌埠医学院', '安徽财经大学', '蚌埠学院', '安徽财经大学商学院', '安徽电子信息职业技术学院', '蚌埠经济技术职业学院', '其他'];
              break;
            case 15:
              data.multiArray[2] = ['安庆师范大学', '安庆职业技术学院', '安庆医药高等专科学校', '桐城师范高等专科学校', '安徽黄梅戏艺术职业学院', '其他'];
              break;
          }
          break;
        case 24:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['浙江海洋大学', '浙江海洋大学东海科学技术学院', '浙江国际海运职业技术学院', '浙江舟山群岛新区旅游与健康职业学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['温州医科大学', '温州大学', '温州医科大学仁济学院', '温州大学瓯江学院', '温州商学院', '温州肯恩大学', '温州职业技术学院', '浙江工贸职业技术学院', '浙江东方职业技术学院', '温州科技职业学院', '浙江安防职业技术学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['台州学院', '台州职业技术学院', '台州科技职业学院', '浙江汽车职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['绍兴文理学院', '浙江越秀外国语学院', '浙江农林大学暨阳学院', '绍兴文理学院元培学院', '浙江工业职业技术学院', '绍兴职业技术学院', '浙江邮电职业技术学院', '浙江农业商贸职业学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['衢州学院', '衢州职业技术学院'];
              break;
            case 5:
              data.multiArray[2] = ['公安海警学院', '浙江万里学院', '宁波工程学院', '宁波大学', '宁波大红鹰学院', '浙江大学宁波理工学院', '宁波大学科学技术学院', '宁波诺丁汉大学', '宁波职业技术学院', '宁波城市职业技术学院', '浙江工商职业技术学院', '浙江医药高等专科学校', '浙江纺织服装职业技术学院', '宁波卫生职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['丽水学院', '丽水职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['浙江师范大学', '浙江师范大学行知学院', '上海财经大学浙江学院', '金华职业技术学院', '义乌工商职业技术学院', '浙江广厦建设职业技术学院', '浙江横店影视职业学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['嘉兴学院', '嘉兴学院南湖学院', '浙江财经大学东方学院', '同济大学浙江学院', '嘉兴职业技术学院', '嘉兴南洋职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['湖州师范学院', '湖州师范学院求真学院', '湖州职业技术学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['浙江大学', '杭州电子科技大学', '浙江工业大学', '浙江理工大学', '浙江农林大学', '浙江中医药大学', '杭州师范大学', '浙江工商大学', '中国美术学院', '中国计量大学', '浙江科技学院', '浙江水利水电学院', '浙江财经大学', '浙江警察学院', '浙江传媒学院', '浙江树人学院', '浙江大学城市学院', '杭州医学院', '浙江工业大学之江学院', '杭州电子科技大学信息工程学院', '浙江理工大学科技与艺术学院', '浙江中医药大学滨江学院', '杭州师范大学钱江学院', '浙江工商大学杭州商学院', '中国计量大学现代科技学院', '浙江外国语学院', '浙江音乐学院', '浙江交通职业技术学院', '浙江电力职业技术学院', '浙江同济科技职业学院', '浙江机电职业技术学院', '浙江建设职业技术学院', '浙江艺术职业学院', '浙江经贸职业技术学院', '浙江商业职业技术学院', '浙江经济职业技术学院', '浙江旅游职业学院', '浙江育英职业技术学院', '浙江警官职业学院', '浙江金融职业学院', '杭州职业技术学院', '杭州科技职业技术学院', '浙江长征职业技术学院', '杭州万向职业技术学院', '浙江体育职业技术学院', '浙江特殊教育职业学院', '其他'];
              break;
          }
          break;
        case 25:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['复旦大学', '同济大学', '上海交通大学', '华东理工大学', '上海理工大学', '上海海事大学', '东华大学', '上海电力学院', '上海应用技术大学', '上海健康医学院', '上海海洋大学', '上海中医药大学', '华东师范大学', '上海师范大学', '上海外国语大学', '上海财经大学', '上海对外经贸大学', '上海海关学院', '华东政法大学', '上海体育学院', '上海音乐学院', '上海戏剧学院', '上海大学', '上海公安学院', '上海工程技术大学', '上海立信会计金融学院', '上海电机学院', '上海杉达学院', '上海政法学院', '上海第二工业大学', '上海商学院', '上海建桥学院', '上海兴伟学院', '上海视觉艺术学院', '上海外国语大学贤达经济人文学院', '上海师范大学天华学院', '上海科技大学', '上海纽约大学', '上海旅游高等专科学校', '上海东海职业技术学院', '上海工商职业技术学院', '上海出版印刷高等专科学校', '上海行健职业学院', '上海城建职业学院', '上海交通职业技术学院', '上海海事职业技术学院', '上海电子信息职业技术学院', '上海震旦职业学院', '上海民远职业技术学院', '上海欧华职业技术学院', '上海思博职业技术学院', '上海立达职业技术学院', '上海工艺美术职业学院', '上海济光职业技术学院', '上海工商外国语职业学院', '上海科学技术职业学院', '上海农林职业技术学院', '上海邦德职业技术学院', '上海中侨职业技术学院', '上海电影艺术职业学院', '上海中华职业技术学院', '上海工会管理职业学院', '上海体育职业学院', '上海民航职业技术学院', '其他'];
              ;
              break;
          }
          break;
        case 26:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['伊春职业学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['绥化学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['黑龙江煤炭职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['齐齐哈尔大学', '齐齐哈尔医学院', '齐齐哈尔工程学院', '齐齐哈尔高等师范专科学校', '黑龙江交通职业技术学院', '齐齐哈尔理工职业学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['七台河职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['牡丹江医学院', '牡丹江师范学院', '牡丹江大学', '黑龙江林业职业技术学院', '黑龙江农业经济职业学院', '黑龙江商业职业学院', '黑龙江幼儿师范高等专科学校', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['佳木斯大学', '黑龙江农业职业技术学院', '黑龙江三江美术职业学院', '佳木斯职业学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['黑龙江工业学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['黑河学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['鹤岗师范高等专科学校', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['黑龙江大学', '哈尔滨工业大学', '哈尔滨理工大学', '哈尔滨工程大学', '黑龙江科技大学', '东北农业大学', '东北林业大学', '哈尔滨医科大学', '黑龙江中医药大学', '哈尔滨师范大学', '哈尔滨学院', '哈尔滨商业大学', '哈尔滨体育学院', '哈尔滨金融学院', '黑龙江东方学院', '哈尔滨信息工程学院', '黑龙江工程学院', '黑龙江外国语学院', '黑龙江财经学院', '哈尔滨石油学院', '黑龙江工商学院', '哈尔滨远东理工学院', '哈尔滨剑桥学院', '黑龙江工程学院昆仑旅游学院', '哈尔滨广厦学院', '哈尔滨华德学院', '哈尔滨音乐学院', '黑龙江职业学院', '黑龙江建筑职业技术学院', '黑龙江艺术职业学院', '黑龙江农业工程职业学院', '黑龙江农垦职业学院', '黑龙江司法警官职业学院', '哈尔滨电力职业技术学院', '哈尔滨铁道职业技术学院', '哈尔滨职业技术学院', '哈尔滨传媒职业学院', '黑龙江生物科技职业学院', '黑龙江公安警官职业学院', '黑龙江信息技术职业学院', '哈尔滨江南职业技术学院', '黑龙江农垦科技职业学院', '黑龙江旅游职业技术学院', '黑龙江生态工程职业学院', '黑龙江民族职业学院', '哈尔滨应用职业技术学院', '哈尔滨科学技术职业学院', '黑龙江粮食职业学院', '黑龙江护理高等专科学校', '哈尔滨工程技术职业学院', '哈尔滨幼儿师范高等专科学校', '黑龙江冰雪体育职业学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['大兴安岭职业学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['东北石油大学', '黑龙江八一农垦大学', '大庆师范学院', '大庆职业学院', '大庆医学高等专科学校', '其他'];
              break;
          }
          break;
        case 27:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['吉林大学', '长春理工大学', '长春工业大学', '吉林建筑大学', '吉林农业大学', '长春中医药大学', '东北师范大学', '吉林工程技术师范学院', '长春师范大学', '吉林财经大学', '吉林体育学院', '吉林艺术学院', '吉林华桥外国语学院', '吉林工商学院', '长春工程学院', '吉林警察学院', '长春大学', '长春光华学院', '长春工业大学人文信息学院', '长春理工大学光电信息学院', '长春财经学院', '吉林建筑大学城建学院', '长春建筑学院', '长春科技学院', '吉林动画学院', '长春大学旅游学院', '东北师范大学人文学院', '长春师范高等专科学校', '长春汽车工业高等专科学校', '长春金融高等专科学校', '长春医学高等专科学校', '吉林交通职业技术学院', '长春东方职业学院', '吉林司法警官职业学院', '长春职业技术学院', '长春信息技术职业学院', '吉林科技职业技术学院', '吉林城市职业技术学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['延边大学', '延边职业技术学院', '吉林职业技术学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['通化师范学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['松原职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['吉林师范大学', '吉林师范大学博达学院', '四平职业大学', '吉林工程职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['辽源职业技术学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['东北电力大学', '吉林化工学院', '北华大学', '吉林农业科技学院', '吉林医药学院', '吉林电子信息职业技术学院', '吉林工业职业技术学院', '吉林铁道职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['长白山职业技术学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['白城师范学院', '白城医学高等专科学校', '白城职业技术学院', '其他'];
              break;
          }
          break;
        case 28:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['河西学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['武威职业学院', '甘肃畜牧工程职业技术学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['天水师范学院', '甘肃林业职业技术学院', '甘肃工业职业技术学院', '甘肃机电职业技术学院', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['陇东学院', '庆阳职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['甘肃医学院', '平凉职业技术学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['陇南师范高等专科学校', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['临夏现代职业学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['兰州大学', '兰州理工大学', '兰州交通大学', '甘肃农业大学', '甘肃中医药大学', '西北师范大学', '兰州城市学院', '兰州财经大学', '西北民族大学', '甘肃政法学院', '兰州文理学院', '兰州工业学院', '西北师范大学知行学院', '兰州财经大学陇桥学院', '兰州财经大学长青学院', '兰州交通大学博文学院', '兰州理工大学技术工程学院', '兰州石化职业技术学院', '甘肃建筑职业技术学院', '兰州外语职业学院', '兰州职业技术学院', '甘肃警察职业学院', '甘肃交通职业技术学院', '兰州资源环境职业技术学院', '甘肃农业职业技术学院', '甘肃卫生职业学院', '兰州科技职业学院', '甘肃能源化工职业学院', '兰州现代职业学院', '甘肃财贸职业学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['酒泉职业技术学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['甘肃有色冶金职业技术学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['甘肃钢铁职业技术学院', '其他'];
              break;
            case 11:
              data.multiArray[2] = ['甘肃民族师范学院', '其他'];
              break;
            case 12:
              data.multiArray[2] = ['定西师范高等专科学校', '其他'];
              break;
            case 13:
              data.multiArray[2] = ['白银矿冶职业技术学院', '其他'];
              break;
          }
          break;
        case 29:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['南开大学', '天津大学', '天津科技大学', '天津工业大学', '中国民航大学', '河北工业大学', '天津理工大学', '天津农学院', '天津医科大学', '天津中医药大学', '天津师范大学', '天津职业技术师范大学', '天津外国语大学', '天津商业大学', '天津财经大学', '天津体育学院', '天津音乐学院', '天津美术学院', '天津城建大学', '天津天狮学院', '天津中德应用技术大学', '天津外国语大学滨海外事学院', '天津体育学院运动与文化艺术学院', '天津商业大学宝德学院', '天津医科大学临床医学院', '南开大学滨海学院', '天津师范大学津沽学院', '天津理工大学中环信息学院', '北京科技大学天津学院', '天津大学仁爱学院', '天津财经大学珠江学院', '天津市职业大学', '天津滨海职业学院', '天津工程职业技术学院', '天津青年职业学院', '天津渤海职业技术学院', '天津电子信息职业技术学院', '天津机电职业技术学院', '天津现代职业技术学院', '天津公安警官职业学院', '天津轻工职业技术学院', '天津商务职业学院', '天津国土资源和房屋职业学院', '天津医学高等专科学校', '天津开发区职业技术学院', '天津艺术职业学院', '天津交通职业学院', '天津冶金职业技术学院', '天津石油职业技术学院', '天津城市职业学院', '天津铁道职业技术学院', '天津工艺美术职业学院', '天津城市建设管理职业技术学院', '天津生物工程职业技术学院', '天津海运职业学院', '天津广播影视职业学院', '其他'];
              break;
          }
          break;
        case 30:
          switch (data.multiIndex[1]) {
            case 0:
              data.multiArray[2] = ['河北建筑工程学院', '河北北方学院', '张家口学院', '张家口职业技术学院', '宣化科技职业学院', '其他'];
              break;
            case 1:
              data.multiArray[2] = ['邢台学院', '邢台职业技术学院', '邢台医学高等专科学校', '河北机电职业技术学院', '其他'];
              break;
            case 2:
              data.multiArray[2] = ['华北理工大学', '唐山师范学院', '唐山学院', '华北理工大学轻工学院', '华北理工大学冀唐学院', '河北能源职业技术学院', '唐山职业技术学院', '唐山工业职业技术学院', '唐山科技职业技术学院', '唐山幼儿师范高等专科学校', '其他'];
              break;
            case 3:
              data.multiArray[2] = ['河北地质大学', '河北科技大学', '河北医科大学', '河北师范大学', '石家庄学院', '石家庄铁道大学', '河北体育学院', '河北经贸大学', '河北传媒学院', '河北工程技术学院', '河北美术学院', '河北外国语学院', '河北科技大学理工学院', '河北师范大学汇华学院', '河北经贸大学经济管理学院', '河北医科大学临床学院', '石家庄铁道大学四方学院', '河北地质大学华信学院', '河北中医学院', '河北工业职业技术学院', '石家庄职业技术学院', '河北政法职业学院', '石家庄铁路职业技术学院', '石家庄工程职业学院', '石家庄城市经济职业学院', '河北省艺术职业学院', '石家庄财经职业学院', '河北交通职业技术学院', '河北化工医药职业技术学院', '石家庄信息工程职业学院', '石家庄邮电职业技术学院', '河北公安警察职业学院', '石家庄工商职业学院', '石家庄理工职业学院', '石家庄科技信息职业学院', '河北女子职业技术学院', '石家庄医学高等专科学校', '石家庄经济职业学院', '石家庄人民医学高等专科学校', '石家庄科技工程职业学院', '河北劳动关系职业学院', '石家庄科技职业学院', '石家庄幼儿师范高等专科学校', '河北轨道运输职业技术学院', '其他'];
              break;
            case 4:
              data.multiArray[2] = ['燕山大学', '河北科技师范学院', '燕山大学里仁学院', '河北环境工程学院', '河北建材职业技术学院', '秦皇岛职业技术学院', '河北对外经贸职业学院', '其他'];
              break;
            case 5:
              data.multiArray[2] = ['廊坊师范学院', '华北科技学院', '中国人民武装警察部队学院', '北华航天工业学院', '防灾科技学院', '河北工业大学城市学院', '燕京理工学院', '北京中医药大学东方学院', '河北东方学院', '河北石油职业技术学院', '廊坊职业技术学院', '廊坊燕京职业技术学院', '廊坊卫生职业学院', '其他'];
              break;
            case 6:
              data.multiArray[2] = ['衡水学院', '衡水职业技术学院', '其他'];
              break;
            case 7:
              data.multiArray[2] = ['河北工程大学', '邯郸学院', '河北工程大学科信学院', '邯郸职业技术学院', '河北司法警官职业学院', '其他'];
              break;
            case 8:
              data.multiArray[2] = ['承德医学院', '河北民族师范学院', '承德石油高等专科学校', '河北旅游职业学院', '承德护理职业学院', '其他'];
              break;
            case 9:
              data.multiArray[2] = ['河北水利电力学院', '沧州师范学院', '北京交通大学海滨学院', '沧州职业技术学院', '渤海石油职业学院', '沧州医学高等专科学校', '泊头职业学院', '渤海理工职业学院', '其他'];
              break;
            case 10:
              data.multiArray[2] = ['河北大学', '河北农业大学', '保定学院', '河北金融学院', '中央司法警官学院', '河北科技学院', '河北大学工商学院', '华北电力大学科技学院', '河北农业大学现代科技学院', '中国地质大学长城学院', '河北软件职业技术学院', '保定职业技术学院', '保定电力职业技术学院', '冀中职业学院', '保定幼儿师范高等专科学校', '河北工艺美术职业学院', '其他'];
              break;
          }
          break;
      }
      data.multiIndex[2] = 0;
      break;
  }
  // that.setData(data);
  that.multiArray = data.multiArray;
  that.multiIndex = data.multiIndex;
}
;
var _default = {
  all: all
};
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map