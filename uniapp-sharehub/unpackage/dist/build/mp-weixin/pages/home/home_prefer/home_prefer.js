(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home_prefer/home_prefer"],{"0005":function(e,t,n){"use strict";n.r(t);var o=n("c131"),c=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=c.a},"8dbb":function(e,t,n){},9855:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={helangCheckbox:function(){return n.e("components/helang-checkbox/helang-checkbox").then(n.bind(null,"1623"))}},c=function(){var e=this.$createElement;this._self._c},i=[]},c131:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{token:"",tag:"",mode:"",suit:"",usage:"",delivery:"",preferenceVO:{tagList:[],modeList:[],suitList:[],usageList:[],deliveryList:[]}}},components:{"helang-checkbox":function(){n.e("components/helang-checkbox/helang-checkbox").then(function(){return resolve(n("1623"))}.bind(null,n)).catch(n.oe)}},mounted:function(){this.setCheckboxTag(),this.setCheckboxMode(),this.setCheckboxUsage(),this.setCheckboxSuit(),this.setCheckboxDelivery()},methods:{valueChange:function(e){},setCheckboxTag:function(){this.$refs.checkboxTag.set({type:"checkbox",column:3,list:[{text:"电子用品"},{text:"美妆用品"},{text:"图书"},{text:"数码影音"},{text:"家居日用"},{text:"儿童玩具"},{text:"宠物用品"},{text:"男装"},{text:"女装"},{text:"母婴用品"},{text:"运动户外"},{text:"家用电器"},{text:"家居家纺"},{text:"其他"}],maxSize:5,maxFn:function(){e.showToast({title:"最多只能选择5个",icon:"none",duration:1e3,mask:!1})}})},setCheckboxUsage:function(){this.$refs.checkboxUsage.set({type:"checkbox",column:3,list:[{text:"全新"},{text:"99新"},{text:"95新"},{text:"85新"},{text:"8新"},{text:"任意",checked:!0}],maxSize:5,maxFn:function(){e.showToast({title:"最多只能选择5个",icon:"none",duration:1e3,mask:!1})}})},setCheckboxMode:function(){this.$refs.checkboxMode.set({type:"checkbox",column:3,list:[{text:"免费共享",checked:!0},{text:"以物换物"},{text:"二手交易"}],maxSize:2,maxFn:function(){e.showToast({title:"最多只能选择2个",icon:"none",duration:1e3,mask:!1})}})},setCheckboxSuit:function(){this.$refs.checkboxSuit.set({type:"checkbox",column:4,list:[{text:"保密"},{text:"儿童"},{text:"成年人"},{text:"老年人"}],maxSize:1,maxFn:function(){e.showToast({title:"最多只能选择1个",icon:"none",duration:1e3,mask:!1})}})},setCheckboxDelivery:function(){this.$refs.checkboxDelivery.set({type:"checkbox",column:4,list:[{text:"任意",checked:!0},{text:"自提"},{text:"同城面交"},{text:"邮寄"}],maxSize:3,maxFn:function(){e.showToast({title:"最多只能选择2个",icon:"none",duration:1e3,mask:!1})}})},switchTab:function(){this.token=e.getStorageSync("token"),this.preferenceVO.tagList=this.$refs.checkboxTag.get(),this.preferenceVO.modeList=this.$refs.checkboxMode.get(),this.preferenceVO.suitList=this.$refs.checkboxSuit.get(),this.preferenceVO.usageList=this.$refs.checkboxUsage.get(),this.preferenceVO.deliveryList=this.$refs.checkboxDelivery.get();e.request({url:"http://localhost:8080/users/preference",method:"POST",header:{"content-type":"application/json",token:this.token},data:JSON.stringify(this.preferenceVO),success:function(t){1==t.data.code?e.switchTab({url:"/pages/home/home"}):e.showToast({title:"进入失败！",icon:"none",duration:2e3})},fail:function(t){console.error("请求失败",t),e.showToast({title:"进入失败！",icon:"none",duration:2e3})}})}}};t.default=o}).call(this,n("543d")["default"])},d426:function(e,t,n){"use strict";n.r(t);var o=n("9855"),c=n("0005");for(var i in c)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(i);n("e29d");var s=n("f0c5"),a=Object(s["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=a.exports},e29d:function(e,t,n){"use strict";var o=n("8dbb"),c=n.n(o);c.a},f3b7:function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("f4b8");o(n("66fd"));var c=o(n("d426"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(c.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["f3b7","common/runtime","common/vendor"]]]);