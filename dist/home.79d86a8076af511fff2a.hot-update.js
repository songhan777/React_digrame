webpackHotUpdate("home",{

/***/ "./src/API/API.js":
/*!************************!*\
  !*** ./src/API/API.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProjectData = exports.removeMemberList = exports.handleMemberList = exports.removeTeamList = exports.handleTeamList = exports.nowPassword = exports.VerifyOldPassword = exports.LocalUpload = exports.uploadDataSet = exports.getDataSetDatabase = exports.getDataSet = exports.checkoutValidation = exports.getValidation = exports.retrievePassword = exports.registeredUser = exports.pushMember = exports.pushTeam = exports.recentlyMemberTeam = exports.searchMemberTeam = exports.getSearchTeam = exports.pushPersonalInformation = exports.getTeamList = exports.RecentlyWorkList = exports.getWorkList = exports.takeSearch = exports.postList = exports.getList = exports.getOAuthJson = undefined;

var _userApi = __webpack_require__(/*! ./userApi */ "./src/API/userApi.js");

Object.defineProperty(exports, 'getOAuthJson', {
    enumerable: true,
    get: function get() {
        return _userApi.getOAuthJson;
    }
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//'http://159.226.245.243:3000/apizn'

if (true) {
    _axios2.default.defaults.baseURL = 'http://localhost:3000';
} else {}

_axios2.default.defaults.withCredentials = true; //允许跨域携带cookie
_axios2.default.interceptors.response.use(function (res) {
    return res.data;
});
var getList = exports.getList = function getList() {
    //获取任务列表
    return _axios2.default.get("/list");
};
var postList = exports.postList = function postList(data) {
    //获取编辑工作流页面的详细信息
    return _axios2.default.post("http://rap2api.taobao.org/app/mock/data/708820", data);
};
var takeSearch = exports.takeSearch = function takeSearch(data) {
    return _axios2.default.post("/serch", data);
};
var getWorkList = exports.getWorkList = function getWorkList(data) {
    //获取工作列表
    return _axios2.default.post("/work", data);
};
var RecentlyWorkList = exports.RecentlyWorkList = function RecentlyWorkList(data) {
    //获取最近工作列表
    return _axios2.default.post("/recentlyWork", data);
};
var getTeamList = exports.getTeamList = function getTeamList(data) {
    //获取队伍的参数
    return _axios2.default.get("/team", data);
};
var pushPersonalInformation = exports.pushPersonalInformation = function pushPersonalInformation(data) {
    //个人设置往服务器推送上去，
    return _axios2.default.post("/work/pushPersonal", data);
};
var getSearchTeam = exports.getSearchTeam = function getSearchTeam(data) {
    //获取搜索队伍的参数，
    return _axios2.default.post("/work/searchTeam", data);
};
var searchMemberTeam = exports.searchMemberTeam = function searchMemberTeam(data) {
    //获取搜索队伍的参数，
    return _axios2.default.post("/work/searchMember", data);
};
var recentlyMemberTeam = exports.recentlyMemberTeam = function recentlyMemberTeam(data) {
    //获取最近合作者，
    return _axios2.default.post("/work/recentlyMember", data);
};
var pushTeam = exports.pushTeam = function pushTeam(data) {
    //增加工作队伍，
    return _axios2.default.post("/work/pushTeam", data);
};
var pushMember = exports.pushMember = function pushMember(data) {
    //增加合作者队伍，
    return _axios2.default.post("/work/pushMember", data);
};
var registeredUser = exports.registeredUser = function registeredUser(data) {
    //增加合作者队伍，
    return _axios2.default.post("/registeredUser", data);
};
var retrievePassword = exports.retrievePassword = function retrievePassword(data) {
    //找回密码，
    return _axios2.default.post("/retrievePassword", data);
};
var getValidation = exports.getValidation = function getValidation(data) {
    //验证码
    return _axios2.default.post("/getValidation", data);
};
var checkoutValidation = exports.checkoutValidation = function checkoutValidation(data) {
    //校验验证码
    return _axios2.default.post("/checkoutValidation", data);
};
var getDataSet = exports.getDataSet = function getDataSet(data) {
    //数据集数据获取
    return _axios2.default.post("/getDataSet", data);
};
var getDataSetDatabase = exports.getDataSetDatabase = function getDataSetDatabase(data) {
    //数据集服务器获取
    return _axios2.default.post("/getDataSetDatabase", data);
};
var uploadDataSet = exports.uploadDataSet = function uploadDataSet(data) {
    //将服务器上传到数据集
    return _axios2.default.post("/uploadDataSet", data);
};
var LocalUpload = exports.LocalUpload = function LocalUpload(data) {
    //将本地数据上传到数据集
    return _axios2.default.post("/LocalUpload", data);
};
var VerifyOldPassword = exports.VerifyOldPassword = function VerifyOldPassword(data) {
    //验证当前用户的旧密码
    return _axios2.default.post("/VerifyOldPassword", data);
};
var nowPassword = exports.nowPassword = function nowPassword(data) {
    //修改当前账号密码
    return _axios2.default.post("/nowPassword", data);
};
var handleTeamList = exports.handleTeamList = function handleTeamList(data) {
    //修改团队信息
    return _axios2.default.post("/handleTeamList", data);
};
var removeTeamList = exports.removeTeamList = function removeTeamList(data) {
    //删除团队信息
    return _axios2.default.post("/removeTeamList", data);
};
var handleMemberList = exports.handleMemberList = function handleMemberList(data) {
    //修改合作者信息
    return _axios2.default.post("/handleMemberList", data);
};
var removeMemberList = exports.removeMemberList = function removeMemberList(data) {
    //删除合作者信息
    return _axios2.default.post("/removeMemberList", data);
};
var getProjectData = exports.getProjectData = function getProjectData(data) {
    //获取项目详情
    return _axios2.default.post("/getProjectData", data);
};

/***/ }),

/***/ "./src/API/userApi.js":
/*!****************************!*\
  !*** ./src/API/userApi.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOAuthJson = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOAuthJson = exports.getOAuthJson = function getOAuthJson() {
    //获取任务列表
    return _axios2.default.get("/user/oauth");
};

/***/ })

})
//# sourceMappingURL=home.79d86a8076af511fff2a.hot-update.js.map