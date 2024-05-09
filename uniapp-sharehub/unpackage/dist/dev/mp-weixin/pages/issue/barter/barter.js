(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/issue/barter/barter"],{

/***/ 52:
/*!***********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/main.js?{"page":"pages%2Fissue%2Fbarter%2Fbarter"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _barter = _interopRequireDefault(__webpack_require__(/*! ./pages/issue/barter/barter.vue */ 53));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_barter.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 53:
/*!**************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/pages/issue/barter/barter.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _barter_vue_vue_type_template_id_6673fb10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barter.vue?vue&type=template&id=6673fb10& */ 54);
/* harmony import */ var _barter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barter.vue?vue&type=script&lang=js& */ 56);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _barter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _barter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _barter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barter.vue?vue&type=style&index=0&lang=css& */ 58);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _barter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _barter_vue_vue_type_template_id_6673fb10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _barter_vue_vue_type_template_id_6673fb10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _barter_vue_vue_type_template_id_6673fb10___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/issue/barter/barter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/*!*********************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/pages/issue/barter/barter.vue?vue&type=template&id=6673fb10& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_template_id_6673fb10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./barter.vue?vue&type=template&id=6673fb10& */ 55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_template_id_6673fb10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_template_id_6673fb10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_template_id_6673fb10___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_template_id_6673fb10___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 55:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/.0学习/.毕设/ShareHub/uniapp-sharehub/pages/issue/barter/barter.vue?vue&type=template&id=6673fb10& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uvRadioGroup: function () {
      return Promise.all(/*! import() | uni_modules/uv-radio/components/uv-radio-group/uv-radio-group */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uv-radio/components/uv-radio-group/uv-radio-group")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uv-radio/components/uv-radio-group/uv-radio-group.vue */ 331))
    },
    uvRadio: function () {
      return Promise.all(/*! import() | uni_modules/uv-radio/components/uv-radio/uv-radio */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uv-radio/components/uv-radio/uv-radio")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uv-radio/components/uv-radio/uv-radio.vue */ 339))
    },
    uvToast: function () {
      return Promise.all(/*! import() | uni_modules/uv-toast/components/uv-toast/uv-toast */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uv-toast/components/uv-toast/uv-toast")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uv-toast/components/uv-toast/uv-toast.vue */ 347))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.formMsg.imgList.length
  var g1 = _vm.formMsg.imgList.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 56:
/*!***************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/pages/issue/barter/barter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./barter.vue?vue&type=script&lang=js& */ 57);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/.0学习/.毕设/ShareHub/uniapp-sharehub/pages/issue/barter/barter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var pickAdress = function pickAdress() {
  Promise.all(/*! require.ensure | components/john-pickAddress/pickAddress */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/john-pickAddress/pickAddress")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/john-pickAddress/pickAddress */ 355));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      province: null,
      //地址省
      city: null,
      //地址市
      district: null,
      //地址区

      // toas数组
      toastList: [{
        type: 'error',
        title: '失败主题',
        message: "请填写物品标题"
      }, {
        type: 'error',
        icon: false,
        title: '失败主题',
        message: "请填写物品描述信息"
      }, {
        type: 'error',
        icon: false,
        title: '失败主题',
        message: "请上传物品图片"
      }, {
        type: 'error',
        title: '失败主题',
        message: "请填写物品地址"
      }],
      order: {
        itemId: '',
        //当前物品id
        reason: '',
        // 申请理由
        contact: '',
        // 联系方式
        mode: '',
        //订单交易模式
        otherItemId: '',
        //另一个物品id（仅对以物换物生效）
        image: '' //订单图片
      },

      formMsg: {
        ownerUid: '',
        //暂时还未设置新增用户，故先默认设置
        itemTitle: '',
        //物品标题
        itemDesc: '',
        //物品描述
        imgList: [],
        //图片列表
        address: '',
        //地址
        sellPrice: '0',
        //出售价
        originalPrice: '',
        //原价
        tag: '',
        //物品种类
        usageLevel: '0',
        //新旧程度（默认全新），对应itemList数组的标
        deliveryStyle: '',
        //交送方式（）
        tradeMode: '1',
        //交易模式以物易物
        status: '0',
        //物品状态（0待交易，1以交易，2已下架）
        pageFlag: '' //作为判断是自主上传还是申请交换的标志
      },

      itemLists: ['全新', '99新', '95新', '85新'],
      //几次新
      modalName: '',
      //模态框开关
      radioTrade: [{
        name: "任意",
        value: 0,
        disabled: false
      }, {
        name: "自提",
        value: 1,
        disabled: false
      }, {
        name: "面交",
        value: 2,
        disabled: false
      }, {
        name: "邮寄",
        value: 3,
        disabled: false
      }],
      radioSuit: [{
        name: '任意',
        value: 0,
        disabled: false
      }, {
        name: '儿童',
        value: 1,
        disabled: false
      }, {
        name: '成人',
        value: 2,
        disabled: false
      }, {
        name: '老人',
        value: 3,
        disabled: false
      }],
      classify: '其他闲置',
      //分类选择默认
      picker: [{
        tag: 1,
        classify_name: '电子产品'
      }, {
        tag: 2,
        classify_name: '美妆用品'
      }, {
        tag: 3,
        classify_name: '图书'
      }, {
        tag: 4,
        classify_name: '数码影音'
      }, {
        tag: 5,
        classify_name: '家居日用'
      }, {
        tag: 6,
        classify_name: '儿童玩具'
      }, {
        tag: 7,
        classify_name: '宠物用品'
      }, {
        tag: 8,
        classify_name: '男装'
      }, {
        tag: 9,
        classify_name: '女装'
      }, {
        tag: 10,
        classify_name: '母婴用品'
      }, {
        tag: 11,
        classify_name: '运动户外'
      }, {
        tag: 12,
        classify_name: '家用电器'
      }, {
        tag: 13,
        classify_name: '家纺家具'
      }, {
        tag: 14,
        classify_name: '其他'
      }]
    };
  },
  components: {
    pickAdress: pickAdress
  },
  computed: {},
  methods: {
    //地址选择
    onPickAddress: function onPickAddress() {
      this.$refs.pickAdress.onOpen();
    },
    // 接收选择的地址数据，并存储起来
    onSelectAddress: function onSelectAddress(address) {
      this.province = address.province;
      this.city = address.city;
      this.district = address.district;
      // console.log('传来的省份：',this.province)
      // console.log('传来的省份：',this.city)
      // console.log('传来的省份：',this.district)
    },
    // 图片上传
    ChooseImage: function ChooseImage() {
      var _this = this;
      if (this.formMsg.imgList.length >= 3) {
        uni.showToast({
          title: '最多只能上传3张图片',
          icon: 'none'
        });
        return; // 如果已经上传了3张图片，则直接返回，不再执行上传操作
      }

      uni.chooseImage({
        count: 3 - this.formMsg.imgList.length,
        // 计算还能上传的图片数量
        sizeType: ['compressed'],
        //采用图片压缩
        sourceType: ['album'],
        success: function success(chooseImageRes) {
          //上传到oss服务器的代码：
          //本地图片临时路径
          var tempFilePaths = chooseImageRes.tempFilePaths;
          uni.uploadFile({
            // 生成 UUID
            url: 'http://localhost:8080/upload?flag=items',
            filePath: tempFilePaths[0],
            name: 'image',
            formData: {
              'token': 'test'
            },
            success: function success(uploadFileRes) {
              //接收后端返回的数据并转为json格式
              var imgData = JSON.parse(uploadFileRes.data);
              //将后端返回的url，追加到formMsg.imgList中
              _this.formMsg.imgList = _this.formMsg.imgList.concat(imgData.data);
              console.log(_this.formMsg.imgList);
            }
          });
        }
      });
    },
    ViewImage: function ViewImage(e) {
      uni.previewImage({
        urls: this.formMsg.imgList,
        current: e.currentTarget.dataset.url
      });
    },
    // 删除照片
    DelImg: function DelImg(e) {
      var _this2 = this;
      uni.showModal({
        title: '提示',
        content: '确定要删除这个照片吗？',
        cancelText: '再看看',
        confirmText: '删除',
        success: function success(res) {
          if (res.confirm) {
            _this2.formMsg.imgList.splice(e.currentTarget.dataset.index, 1);
            _this2.formMsg.imgList = _this2.formMsg.imgList;
          }
        }
      });
    },
    //提醒用户不可设置售价
    preventClick: function preventClick() {
      // 点击事件处理程序，防止输入框被点击
      uni.showToast({
        title: '以物易物售价为0',
        icon: 'none'
      });
    },
    //原价验证
    newInput: function newInput(e) {
      var money;
      if (/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value)) {
        //正则验证，提现金额小数点后不能大于两位数字
        money = e.detail.value;
      } else {
        money = e.detail.value.substring(0, e.detail.value.length - 1);
      }
      this.formMsg.originalPrice = money;
    },
    // 选择交送方式
    radioChange: function radioChange(e) {
      this.formMsg.deliveryStyle = e.mp.detail.value;
      console.log(this.formMsg.deliveryStyle);
    },
    // 新旧程度
    newState: function newState(e) {
      var that = this;
      uni.showActionSheet({
        itemList: that.itemLists,
        success: function success(e) {
          that.formMsg.usageLevel = e.tapIndex;
        }
      });
    },
    // 拦截模态框滚动事件
    modeMove: function modeMove() {},
    //显示toast
    showToast: function showToast(params) {
      this.$refs.toast.show(_objectSpread({}, params));
    },
    // 显示分类模态框
    showModal: function showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    // 隐藏分类模态框
    hideModal: function hideModal(e) {
      this.modalName = null;
    },
    // 得到分类的值
    getClassify: function getClassify(e) {
      //input框中回显类名
      this.classify = e.currentTarget.dataset.name;
      //传给表达
      this.formMsg.tag = e.currentTarget.dataset.value;
      this.hideModal();
    },
    onLoad: function onLoad(options) {
      // 获取页面参数
      this.formMsg.pageFlag = options.pageFlag;
      this.order = JSON.parse(decodeURIComponent(options.order));
      console.log('页面的flag', this.formMsg.pageFlag);
      console.log('页面的order', this.order);
    },
    formSubmit: function formSubmit() {
      // 表单验证
      if (!this.formMsg.itemTitle) {
        this.showToast(this.toastList[0]);
        return;
      }
      if (!this.formMsg.itemDesc) {
        this.showToast(this.toastList[1]);
        return;
      }
      if (this.formMsg.imgList.length == 0) {
        this.showToast(this.toastList[2]);
        return;
      }
      if (!this.province) {
        this.showToast(this.toastList[3]);
        return;
      }

      //最后处理form数据
      this.formMsg.ownerUid = this.$store.state.user.openid;
      //设置物品待交易
      this.formMsg.status = '0';
      //如果pageFlag==1，则给order赋值
      if (this.formMsg.pageFlag == 1) {
        this.order.reason = this.formMsg.itemTitle; //申请理由
        this.order.contact = this.formMsg.itemDesc; //联系方式
      }

      this.formMsg.address = this.province.name + ',' + this.city.name + ',' + this.district.name;
      console.log('即将发送的order', this.order);
      console.log('即将发送的item', this.formMsg);
      // 判断pageFlag的值来发送异步请求
      if (this.formMsg.pageFlag == 0) {
        uni.request({
          url: 'http://localhost:8080/items',
          method: 'POST',
          data: JSON.stringify(this.formMsg),
          header: {
            'token': '',
            // 根据实际情况设置 token
            'content-type': 'application/json' // 请求头部设置为 JSON 格式
          },

          success: function success(res) {
            // 处理响应结果，根据实际情况进行操作
            if (res.data.code == 1) {
              // 请求成功toast
              uni.showToast({
                title: '操作成功！',
                icon: 'success',
                duration: 1500
              });
              setTimeout(function () {
                uni.navigateBack();
              }, 2000);
              //跳转到订单页并刷新订单页
              // setTimeout(function() {
              //回到上一页，并在回调函数中执行页面刷新操作？？？？？
              // 	uni.navigateBack({
              // 		delta: 1, // 返回页面数，1表示返回上一页
              // 		success: function() {
              // 			// 在页面返回成功后执行刷新操作
              // 			uni.reLaunch({
              // 				url: '/pages/msg/msg_order_all/msg_order_all'
              // 			});
              // 		}
              // 	});
              // }, 1000);
            } else {
              uni.showToast({
                title: '上传失败！',
                icon: 'error',
                duration: 1500
              });
              console.log('失败！');
            }
          },
          fail: function fail(err) {
            uni.showToast({
              title: '上传失败！',
              icon: 'error',
              duration: 1500
            });
            console.error(err);
          }
        });
      } else {
        //如果pageFlag不为0，则生成易物订单(表示是申请易物)
        uni.request({
          url: 'http://localhost:8080/orders/addOrder',
          method: 'POST',
          data: {
            item: this.formMsg,
            order: this.order
          },
          header: {
            'token': this.token,
            // 根据实际情况设置 token
            'content-type': 'application/json' // 请求头部设置为 JSON 格式
          },

          success: function success(res) {
            // 处理响应结果，根据实际情况进行操作
            console.log(res.data);
            if (res.data.code == 1) {
              // 申请成功
              // 请求成功toast
              uni.showToast({
                title: '操作成功！',
                icon: 'success',
                duration: 1500
              });
              setTimeout(function () {
                uni.navigateBack();
              }, 2000);
            } else {
              // 您已经申请过了~
              // 请求成功toast
              uni.showToast({
                title: '您已经申请过了~',
                icon: 'error',
                duration: 1500
              });
              setTimeout(function () {
                uni.navigateBack();
              }, 2000);
            }
          }
        });
      }
    }
  },
  onShow: function onShow() {},
  onHide: function onHide() {},
  // 出发下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    // 模拟刷新完成
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 2000);
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 58:
/*!***********************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/pages/issue/barter/barter.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./barter.vue?vue&type=style&index=0&lang=css& */ 59);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_barter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 59:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/.0学习/.毕设/ShareHub/uniapp-sharehub/pages/issue/barter/barter.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[52,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/issue/barter/barter.js.map