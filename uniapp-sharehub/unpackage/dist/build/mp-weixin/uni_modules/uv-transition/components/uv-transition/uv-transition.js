(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uv-transition/components/uv-transition/uv-transition"],{"5a41":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},e=[]},9100:function(t,n,i){"use strict";i.r(n);var o=i("fc8b"),e=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(a);n["default"]=e.a},a63e:function(t,n,i){"use strict";i.r(n);var o=i("5a41"),e=i("9100");for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);var r=i("f0c5"),s=Object(r["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=s.exports},fc8b:function(t,n,i){"use strict";var o=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o(i("448a")),a=o(i("7037")),r=o(i("9523")),s=o(i("42b4")),c=o(i("849b")),u=i("02f5");function f(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,o)}return i}function l(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?f(Object(i),!0).forEach((function(n){(0,r.default)(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}var d={name:"uv-transition",mixins:[s.default,c.default],emits:["click","change"],props:{show:{type:Boolean,default:!1},mode:{type:[Array,String,null],default:function(){return"fade"}},duration:{type:[String,Number],default:300},timingFunction:{type:String,default:"ease-out"},customClass:{type:String,default:""},cellChild:{type:Boolean,default:!1}},data:function(){return{isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}},watch:{show:{handler:function(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{transformStyles:function(){var t=l(l({transform:this.transform,opacity:this.opacity},this.$uv.addStyle(this.customStyle)),{},{"transition-duration":"".concat(this.duration/1e3,"s")});return this.$uv.addStyle(t,"string")}},created:function(){this.config={duration:this.duration,timingFunction:this.timingFunction,transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.duration&&(this.durationTime=t.duration),this.animation=(0,u.createAnimation)(Object.assign(this.config,t),this)},onClick:function(){this.$emit("click",{detail:this.isShow})},step:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.animation){for(var i in t)try{var o;if("object"===(0,a.default)(t[i]))(o=this.animation)[i].apply(o,(0,e.default)(t[i]));else this.animation[i](t[i])}catch(r){console.error("方法 ".concat(i," 不存在"))}return this.animation.step(n),this}},run:function(t){this.animation&&this.animation.run(t)},open:function(){var t=this;clearTimeout(this.timer),this.transform="",this.isShow=!0;var n=this.styleInit(!1),i=n.opacity,o=n.transform;"undefined"!==typeof i&&(this.opacity=i),this.transform=o,this.$nextTick((function(){t.timer=setTimeout((function(){t.animation=(0,u.createAnimation)(t.config,t),t.tranfromInit(!1).step(),t.animation.run(),t.$emit("change",{detail:t.isShow})}),20)}))},close:function(t){var n=this;this.animation&&this.tranfromInit(!0).step().run((function(){n.isShow=!1,n.animationData=null,n.animation=null;var t=n.styleInit(!1),i=t.opacity,o=t.transform;n.opacity=i||1,n.transform=o,n.$emit("change",{detail:n.isShow})}))},styleInit:function(t){var n=this,i={transform:""},o=function(t,o){"fade"===o?i.opacity=n.animationType(t)[o]:i.transform+=n.animationType(t)[o]+" "};return"string"===typeof this.mode?o(t,this.mode):this.mode.forEach((function(n){o(t,n)})),i},tranfromInit:function(t){var n=this,i=function(t,i){var o=null;"fade"===i?o=t?0:1:(o=t?"-100%":"0","zoom-in"===i&&(o=t?.8:1),"zoom-out"===i&&(o=t?1.2:1),"slide-right"===i&&(o=t?"100%":"0"),"slide-bottom"===i&&(o=t?"100%":"0")),n.animation[n.animationMode()[i]](o)};return"string"===typeof this.mode?i(t,this.mode):this.mode.forEach((function(n){i(t,n)})),this.animation},animationType:function(t){return{fade:t?1:0,"slide-top":"translateY(".concat(t?"0":"-100%",")"),"slide-right":"translateX(".concat(t?"0":"100%",")"),"slide-bottom":"translateY(".concat(t?"0":"100%",")"),"slide-left":"translateX(".concat(t?"0":"-100%",")"),"zoom-in":"scaleX(".concat(t?1:.8,") scaleY(").concat(t?1:.8,")"),"zoom-out":"scaleX(".concat(t?1:1.2,") scaleY(").concat(t?1:1.2,")")}},animationMode:function(){return{fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};n.default=d}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uv-transition/components/uv-transition/uv-transition-create-component',
    {
        'uni_modules/uv-transition/components/uv-transition/uv-transition-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a63e"))
        })
    },
    [['uni_modules/uv-transition/components/uv-transition/uv-transition-create-component']]
]);