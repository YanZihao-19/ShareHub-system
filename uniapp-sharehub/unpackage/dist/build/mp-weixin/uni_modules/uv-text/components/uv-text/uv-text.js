(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uv-text/components/uv-text/uv-text"],{"0eb8":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return i}));var i={uvIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uv-icon/components/uv-icon/uv-icon")]).then(n.bind(null,"0c70"))},uvLink:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uv-link/components/uv-link/uv-link")]).then(n.bind(null,"2696"))}},u=function(){var t=this,e=t.$createElement,n=(t._self._c,t.show&&"price"===t.mode?t.__get_style([t.valueStyle]):null),i=t.show&&t.prefixIcon?t.$uv.addStyle(t.iconStyle):null,u=t.show&&"link"!==t.mode&&t.openType&&t.isMp?t.__get_style([t.valueStyle]):null,l=!t.show||"link"===t.mode||t.openType&&t.isMp?null:t.__get_style([t.valueStyle]),o=t.show&&t.suffixIcon?t.$uv.addStyle(t.iconStyle):null;t.$mp.data=Object.assign({},{$root:{s0:n,g0:i,s1:u,s2:l,g1:o}})},l=[]},"51af":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(n("5b11")),l=i(n("42b4")),o=i(n("849b")),s=i(n("f820")),c=i(n("f268")),a=i(n("7c09")),r={name:"uv-text",emits:["click"],mixins:[l.default,o.default,u.default,s.default,c.default,a.default],computed:{valueStyle:function(){var t={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:this.$uv.addUnit(this.size)};return!this.type&&(t.color=this.color),this.isNvue&&this.lines&&(t.lines=this.lines),!this.isNvue||"price"==this.mode||this.prefixIcon||this.suffixIcon||(t.flex=1,t.textAlign="left"===this.align?"flex-start":"center"===this.align?"center":"right"),this.lineHeight&&(t.lineHeight=this.$uv.addUnit(this.lineHeight)),!this.isNvue&&this.block&&(t.display="block"),this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))},isNvue:function(){return!1},isMp:function(){return!0,!0}},data:function(){return{}},methods:{clickHandler:function(){this.call&&"phone"===this.mode&&t.makePhoneCall({phoneNumber:this.text}),this.$emit("click")}}};e.default=r}).call(this,n("543d")["default"])},"59a0":function(t,e,n){"use strict";var i=n("e35f"),u=n.n(i);u.a},"8c66":function(t,e,n){"use strict";n.r(e);var i=n("51af"),u=n.n(i);for(var l in i)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(l);e["default"]=u.a},c11f:function(t,e,n){"use strict";n.r(e);var i=n("0eb8"),u=n("8c66");for(var l in u)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(l);n("59a0");var o=n("f0c5"),s=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"0f377d1e",null,!1,i["a"],void 0);e["default"]=s.exports},e35f:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uv-text/components/uv-text/uv-text-create-component',
    {
        'uni_modules/uv-text/components/uv-text/uv-text-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c11f"))
        })
    },
    [['uni_modules/uv-text/components/uv-text/uv-text-create-component']]
]);
