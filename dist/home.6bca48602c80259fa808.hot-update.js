webpackHotUpdate("home",{

/***/ "./src/API/sessionApi.js":
/*!*******************************!*\
  !*** ./src/API/sessionApi.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = exports.postSession = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postSession = exports.postSession = function postSession(data) {
    //获取任务列表
    return _axios2.default.post("/session", data);
};
var get = exports.get = void 0;

/***/ })

})
//# sourceMappingURL=home.6bca48602c80259fa808.hot-update.js.map