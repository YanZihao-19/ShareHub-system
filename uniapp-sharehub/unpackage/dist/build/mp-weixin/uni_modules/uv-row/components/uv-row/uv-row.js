(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uv-row/components/uv-row/uv-row"],{"1a7b":function(t,e,n){"use strict";n.r(e);var i=n("e148"),u=n("44ce");for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("bec1");var s=n("f0c5"),a=Object(s["a"])(u["default"],i["b"],i["c"],!1,null,"4a10e0f2",null,!1,i["a"],void 0);e["default"]=a.exports},"44ce":function(t,e,n){"use strict";n.r(e);var i=n("9bfc"),u=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=u.a},"9bfc":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(n("2eee")),r=i(n("c973")),s=i(n("42b4")),a=i(n("849b")),c=i(n("efe7")),f={name:"uv-row",emits:["click"],mixins:[s.default,a.default,c.default],data:function(){return{}},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},rowStyle:function(){var t={alignItems:this.uAlignItem,justifyContent:this.uJustify};return this.gutter&&(t.marginLeft=this.$uv.addUnit(-Number(this.gutter)/2),t.marginRight=this.$uv.addUnit(-Number(this.gutter)/2)),this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))}},methods:{clickHandler:function(t){this.$emit("click")},getComponentWidth:function(){var t=this;return(0,r.default)(u.default.mark((function e(){return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uv.sleep();case 2:return e.abrupt("return",new Promise((function(e){t.$uvGetRect(".uv-row").then((function(t){e(t.width)}))})));case 3:case"end":return e.stop()}}),e)})))()}}};e.default=f},a1c1:function(t,e,n){},bec1:function(t,e,n){"use strict";var i=n("a1c1"),u=n.n(i);u.a},e148:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=(this._self._c,this.__get_style([this.rowStyle]));this.$mp.data=Object.assign({},{$root:{s0:e}})},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uv-row/components/uv-row/uv-row-create-component',
    {
        'uni_modules/uv-row/components/uv-row/uv-row-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1a7b"))
        })
    },
    [['uni_modules/uv-row/components/uv-row/uv-row-create-component']]
]);