(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uv-sticky/components/uv-sticky/uv-sticky"],{"0a21":function(t,e,i){"use strict";i.r(e);var s=i("f3f9"),n=i("4bbf");for(var c in n)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(c);i("445b");var o=i("f0c5"),u=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"64b3a89d",null,!1,s["a"],void 0);e["default"]=u.exports},"445b":function(t,e,i){"use strict";var s=i("86aa"),n=i.n(s);n.a},"4bbf":function(t,e,i){"use strict";i.r(e);var s=i("7de1"),n=i.n(s);for(var c in s)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(c);e["default"]=n.a},"7de1":function(t,e,i){"use strict";(function(t){var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("2eee")),c=s(i("c973")),o=s(i("42b4")),u=s(i("849b")),r=s(i("d6d1")),d={name:"uv-sticky",mixins:[o.default,u.default,r.default],data:function(){return{cssSticky:!1,stickyTop:0,elId:"",left:0,width:"auto",height:"auto",fixed:!1}},computed:{style:function(){var t={};return this.disabled?t.position="static":this.cssSticky?(t.position="sticky",t.zIndex=this.uZindex,t.top=this.$uv.addUnit(this.stickyTop)):t.height=this.fixed?this.height+"px":"auto",t.backgroundColor=this.bgColor,this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))},stickyContent:function(){var t={};return this.cssSticky||(t.position=this.fixed?"fixed":"static",t.top=this.stickyTop+"px",t.left=this.left+"px",t.width="auto"==this.width?"auto":this.width+"px",t.zIndex=this.uZindex),t},uZindex:function(){return this.zIndex?this.zIndex:970}},created:function(){this.elId=this.$uv.guid()},mounted:function(){this.init()},methods:{init:function(){this.getStickyTop(),this.checkSupportCssSticky(),this.cssSticky||!this.disabled&&this.initObserveContent()},initObserveContent:function(){var t=this;this.$uvGetRect("#"+this.elId).then((function(e){t.height=e.height,t.left=e.left,t.width=e.width,t.$nextTick((function(){t.observeContent()}))}))},observeContent:function(){var e=this;this.disconnectObserver("contentObserver");var i=t.createIntersectionObserver({thresholds:[.95,.98,1]});i.relativeToViewport({top:-this.stickyTop}),i.observe("#".concat(this.elId),(function(t){e.setFixed(t.boundingClientRect.top)})),this.contentObserver=i},setFixed:function(t){var e=t<=this.stickyTop;this.fixed=e},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()},getStickyTop:function(){this.stickyTop=this.$uv.getPx(this.offsetTop)+this.$uv.getPx(this.customNavHeight)},checkSupportCssSticky:function(){var t=this;return(0,c.default)(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"android"===t.$uv.os()&&Number(t.$uv.sys().system)>8&&(t.cssSticky=!0),e.next=3,t.checkComputedStyle();case 3:t.cssSticky=e.sent,"ios"===t.$uv.os()&&(t.cssSticky=!0);case 5:case"end":return e.stop()}}),e)})))()},checkComputedStyle:function(){var e=this;return new Promise((function(i){t.createSelectorQuery().in(e).select(".uv-sticky").fields({computedStyle:["position"]}).exec((function(t){i("sticky"===t[0].position)}))}))},checkCssStickyForH5:function(){}},beforeDestroy:function(){this.disconnectObserver("contentObserver")}};e.default=d}).call(this,i("543d")["default"])},"86aa":function(t,e,i){},f3f9:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var s=function(){var t=this.$createElement,e=(this._self._c,this.__get_style([this.style])),i=this.__get_style([this.stickyContent]);this.$mp.data=Object.assign({},{$root:{s0:e,s1:i}})},n=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uv-sticky/components/uv-sticky/uv-sticky-create-component',
    {
        'uni_modules/uv-sticky/components/uv-sticky/uv-sticky-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0a21"))
        })
    },
    [['uni_modules/uv-sticky/components/uv-sticky/uv-sticky-create-component']]
]);