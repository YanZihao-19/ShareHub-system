(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{3267:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{nickName:"未登录",headerUrl:"http://web-showhub.oss-cn-beijing.aliyuncs.com/users/default.png"}},onLoad:function(){},methods:{login:function(){var n=this;e.showModal({mask:!0,title:"温馨提示",content:"授权微信登录后才能正常使用小程序功能",success:function(t){t.confirm?e.getUserProfile({desc:"获取你的昵称、头像",success:function(t){if(console.log("getUserProfile方法获取到的用户信息："+t.userInfo.avatarUrl),console.log("getUserProfile方法获取到的用户信息："+t.userInfo.nickName),"getUserProfile:ok"==t.errMsg&&void 0!=t.userInfo){var a={avatarUrl:t.userInfo.avatarUrl,nickName:t.userInfo.nickName};n.nickName=t.userInfo.nickName,n.headerUrl=t.userInfo.avatarUrl,n.getUserOpenId(a)}else e.showToast({icon:"none",title:"获取失败，请重试"})},fail:function(e){}}):t.cancel}})},getUserOpenId:function(n){var t=this;e.login({provider:"weixin",success:function(a){var o={code:a.code};console.log("向login函数中传递的code"+o.code);e.request({url:"http://localhost:8080/user/getOpenId",method:"POST",data:o,success:function(e){console.log("后端请求完成后获取到的用户信息：",e.data.data),n["openid"]=e.data.data.openId,null!=e.data&&(t.nickName=e.data.data.username,t.headerUrl=e.data.data.image)},fail:function(e){console.error("请求失败",e)}})}})}}};n.default=t}).call(this,t("543d")["default"])},"43a1":function(e,n,t){"use strict";(function(e,n){var a=t("4ea4");t("f4b8");a(t("66fd"));var o=a(t("684d"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"56b6":function(e,n,t){},"684d":function(e,n,t){"use strict";t.r(n);var a=t("a3cd"),o=t("be5f");for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("6d6a");var c=t("f0c5"),i=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=i.exports},"6d6a":function(e,n,t){"use strict";var a=t("56b6"),o=t.n(a);o.a},a3cd:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},o=[]},be5f:function(e,n,t){"use strict";t.r(n);var a=t("3267"),o=t.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=o.a}},[["43a1","common/runtime","common/vendor"]]]);