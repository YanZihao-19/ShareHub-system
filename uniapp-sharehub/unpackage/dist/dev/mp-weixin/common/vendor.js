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

/***/ 100:
/*!*********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/其他.jpg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

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

/***/ 117:
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

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
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
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
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
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
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
    uniCompileVersion: "4.06",
    uniRuntimeVersion: "4.06",
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

/***/ 304:
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

/***/ 305:
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
var index = _interopRequireWildcard(__webpack_require__(/*! ../function/index.js */ 83));
var test = _interopRequireWildcard(__webpack_require__(/*! ../function/test.js */ 84));
var _route = _interopRequireDefault(__webpack_require__(/*! ../util/route.js */ 306));
var _debounce = _interopRequireDefault(__webpack_require__(/*! ../function/debounce.js */ 307));
var _throttle = _interopRequireDefault(__webpack_require__(/*! ../function/throttle.js */ 308));
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

/***/ 306:
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
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 43));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 45));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _index = __webpack_require__(/*! @/uni_modules/uv-ui-tools/libs/function/index.js */ 83);
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

/***/ 307:
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

/***/ 308:
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

/***/ 309:
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

/***/ 317:
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

/***/ 318:
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
var _notice = _interopRequireDefault(__webpack_require__(/*! ./modules/notice.js */ 36));
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
    user: _user.default,
    notice: _notice.default
  }
});
exports.default = _default;

/***/ }),

/***/ 334:
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

/***/ 350:
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

/***/ 358:
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

/***/ 36:
/*!********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/store/modules/notice.js ***!
  \********************************************************************/
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
    commentNum: 0,
    //待读评论数
    orderNum: 0,
    //待读订单数
    informNum: 0 //待读通知数
  },

  mutations: {
    setCommentNum: function setCommentNum(state, commentNum) {
      state.commentNum = commentNum;
    },
    setOrderNum: function setOrderNum(state, orderNum) {
      state.orderNum = orderNum;
    },
    setInformNum: function setInformNum(state, informNum) {
      state.informNum = informNum;
    }
  },
  getters: {},
  actions: {}
};
exports.default = _default;

/***/ }),

/***/ 366:
/*!****************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-textarea/components/uv-textarea/props.js ***!
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
var _default2 = {
  props: _objectSpread({
    value: {
      type: [String, Number],
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    // 输入框为空时占位符
    placeholder: {
      type: [String, Number],
      default: ''
    },
    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: 'textarea-placeholder'
    },
    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: 'color: #c0c4cc'
    },
    // 输入框高度
    height: {
      type: [String, Number],
      default: 70
    },
    // 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效
    confirmType: {
      type: String,
      default: 'return'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示统计字数
    count: {
      type: Boolean,
      default: false
    },
    // 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现
    focus: {
      type: Boolean,
      default: false
    },
    // 是否自动增加高度
    autoHeight: {
      type: Boolean,
      default: false
    },
    // 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true
    fixed: {
      type: Boolean,
      default: false
    },
    // 指定光标与键盘的距离
    cursorSpacing: {
      type: Number,
      default: 0
    },
    // 指定focus时的光标位置
    cursor: {
      type: [String, Number],
      default: ''
    },
    // 是否显示键盘上方带有”完成“按钮那一栏，
    showConfirmBar: {
      type: Boolean,
      default: true
    },
    // 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
    selectionStart: {
      type: Number,
      default: -1
    },
    // 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
    selectionEnd: {
      type: Number,
      default: -1
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: true
    },
    // 是否去掉 iOS 下的默认内边距，只微信小程序有效
    disableDefaultPadding: {
      type: Boolean,
      default: false
    },
    // focus时，点击页面的时候不收起键盘，只微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: 140
    },
    // 边框类型，surround-四周边框，bottom-底部边框
    border: {
      type: String,
      default: 'surround'
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
    },
    // 是否忽略组件内对文本合成系统事件的处理
    confirmHold: {
      type: Boolean,
      default: false
    },
    // 文本样式
    textStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    // 统计数字的样式
    countStyle: {
      type: [Object, String],
      default: function _default() {}
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.textarea)
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 381:
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

/***/ 389:
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

/***/ 390:
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

/***/ 391:
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

/***/ 399:
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

/***/ 415:
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

/***/ 425:
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

/***/ 43:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 44)();
module.exports = runtime;

/***/ }),

/***/ 44:
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
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 447:
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

/***/ 45:
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

/***/ 455:
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

/***/ 463:
/*!************************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-action-sheet/components/uv-action-sheet/props.js ***!
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
    // 标题，有值则显示，同时会显示关闭按钮
    title: {
      type: String,
      default: ''
    },
    // 选项上方的描述信息
    description: {
      type: String,
      default: ''
    },
    // 数据
    actions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 取消按钮的文字，不为空时显示按钮
    cancelText: {
      type: String,
      default: ''
    },
    // 点击某个菜单项时是否关闭弹窗
    closeOnClickAction: {
      type: Boolean,
      default: true
    },
    // 处理底部安全区（默认true）
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    // 小程序的打开方式
    openType: {
      type: String,
      default: ''
    },
    // 点击遮罩是否允许关闭 (默认true)
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    // 圆角值
    round: {
      type: [Boolean, String, Number],
      default: 0
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.actionSheet)
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 471:
/*!********************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-rate/components/uv-rate/props.js ***!
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
    value: {
      type: [String, Number],
      default: 0
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    // 要显示的星星数量
    count: {
      type: [String, Number],
      default: 5
    },
    // 是否不可选中
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 星星的大小，单位px
    size: {
      type: [String, Number],
      default: 18
    },
    // 未选中时的颜色
    inactiveColor: {
      type: String,
      default: '#b2b2b2'
    },
    // 选中的颜色
    activeColor: {
      type: String,
      default: '#FA3534'
    },
    // 星星之间的间距，单位px
    gutter: {
      type: [String, Number],
      default: 4
    },
    // 最少能选择的星星个数
    minCount: {
      type: [String, Number],
      default: 1
    },
    // 是否允许半星
    allowHalf: {
      type: Boolean,
      default: false
    },
    // 选中时的图标(星星)
    activeIcon: {
      type: String,
      default: 'star-fill'
    },
    // 未选中时的图标(星星)
    inactiveIcon: {
      type: String,
      default: 'star'
    },
    // 是否可以通过滑动手势选择评分
    touchable: {
      type: Boolean,
      default: false
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.rate)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 486:
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

/***/ 492:
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

/***/ 493:
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

/***/ 501:
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

/***/ 502:
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

/***/ 510:
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

/***/ 518:
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

/***/ 52:
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
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 53));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 54));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 56));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 57));
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

/***/ 526:
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

/***/ 53:
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

/***/ 534:
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

/***/ 54:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 55);
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

/***/ 549:
/*!******************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-gap/components/uv-gap/props.js ***!
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
    // 背景颜色（默认transparent）
    bgColor: {
      type: String,
      default: 'transparent'
    },
    // 分割槽高度，单位px（默认20）
    height: {
      type: [String, Number],
      default: 20
    },
    // 与上一个组件的距离
    marginTop: {
      type: [String, Number],
      default: 0
    },
    // 与下一个组件的距离
    marginBottom: {
      type: [String, Number],
      default: 0
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.gap)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 55:
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

/***/ 555:
/*!**************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-overlay/components/uv-overlay/props.js ***!
  \**************************************************************************************************/
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
    // 是否显示遮罩
    show: {
      type: Boolean,
      default: false
    },
    // 层级z-index
    zIndex: {
      type: [String, Number],
      default: 10070
    },
    // 遮罩的过渡时间，单位为ms
    duration: {
      type: [String, Number],
      default: 300
    },
    // 不透明度值，当做rgba的第四个参数
    opacity: {
      type: [String, Number],
      default: 0.5
    }
  }, (_uni$$uv = uni.$uv) === null || _uni$$uv === void 0 ? void 0 : (_uni$$uv$props = _uni$$uv.props) === null || _uni$$uv$props === void 0 ? void 0 : _uni$$uv$props.overlay)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 56:
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

/***/ 563:
/*!********************************************************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/uni_modules/uv-status-bar/components/uv-status-bar/props.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    bgColor: {
      type: String,
      default: 'transparent'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 57:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 56);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 58);
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

/***/ 58:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ 83:
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
var _test = __webpack_require__(/*! ./test.js */ 84);
var _digit = __webpack_require__(/*! ./digit.js */ 85);
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

/***/ 84:
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

/***/ 85:
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
var _toArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toArray */ 86));
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

/***/ 86:
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

/***/ 87:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/电子产品.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 88:
/*!*********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/男装.jpg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 89:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/数码影音.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

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

/***/ 90:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/运动户外.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 91:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/家居日用.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 92:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/儿童玩具.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 93:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/宠物用品.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 94:
/*!*********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/女装.jpg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 95:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/美妆用品.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 96:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/母婴用品.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 97:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/家用电器.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 98:
/*!*********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/图书.jpg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 99:
/*!***********************************************************************!*\
  !*** D:/.0学习/.毕设/ShareHub/uniapp-sharehub/static/itemImages/家纺家居.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map