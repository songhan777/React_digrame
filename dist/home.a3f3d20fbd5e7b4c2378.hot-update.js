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
exports.repeatNameShow = exports.saveWorkflowData = exports.addworkflow = exports.addMemberSearch = exports.getUserSynopsis = exports.addDateSetList = exports.getProjectData = exports.removeMemberList = exports.handleMemberList = exports.removeTeamList = exports.handleTeamList = exports.nowPassword = exports.VerifyOldPassword = exports.LocalUpload = exports.uploadDataSet = exports.getDataSetDatabase = exports.getDataSet = exports.checkoutValidation = exports.getValidation = exports.retrievePassword = exports.registeredUser = exports.pushMember = exports.pushTeam = exports.recentlyMemberTeam = exports.searchMemberTeam = exports.getSearchTeam = exports.pushPersonalInformation = exports.getTeamList = exports.RecentlyWorkList = exports.getWorkList = exports.takeSearch = exports.postList = exports.getList = exports.getVerify = exports.postSession = exports.getOAuthJson = undefined;

var _userApi = __webpack_require__(/*! ./userApi */ "./src/API/userApi.js");

Object.defineProperty(exports, 'getOAuthJson', {
    enumerable: true,
    get: function get() {
        return _userApi.getOAuthJson;
    }
});

var _sessionApi = __webpack_require__(/*! ./sessionApi */ "./src/API/sessionApi.js");

Object.defineProperty(exports, 'postSession', {
    enumerable: true,
    get: function get() {
        return _sessionApi.postSession;
    }
});
Object.defineProperty(exports, 'getVerify', {
    enumerable: true,
    get: function get() {
        return _sessionApi.getVerify;
    }
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//'http://159.226.245.243:3000/apizn'

if (true) {
    _axios2.default.defaults.baseURL = 'http://flow.dv.ailab.win';
} else {}

_axios2.default.defaults.withCredentials = true; //允许跨域携带cookie
_axios2.default.interceptors.response.use(function (res) {
    if (res.data.offline) {
        window.location.href = '/';
        return;
    }
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
var addDateSetList = exports.addDateSetList = function addDateSetList(data) {
    //增加总数据集的数据
    return _axios2.default.post("/addDateSetList", data);
};
var getUserSynopsis = exports.getUserSynopsis = function getUserSynopsis(data) {
    //点击用户列表，获取成员粗略信息
    return _axios2.default.post("/getUserSynopsis", data);
};
var addMemberSearch = exports.addMemberSearch = function addMemberSearch(data) {
    //项目页面，成员用户，增加成员的搜索获取接口
    return _axios2.default.post("/addMemberSearch", data);
};
var addworkflow = exports.addworkflow = function addworkflow(data) {
    //项目页面，工作流的数据展示，
    return _axios2.default.post("/addworkflow", data);
};
var saveWorkflowData = exports.saveWorkflowData = function saveWorkflowData(data) {
    //项目页面，工作流的数据展示，
    return _axios2.default.post("/saveWorkflowData", data);
};
var repeatNameShow = exports.repeatNameShow = function repeatNameShow(data) {
    //项目页面，工作流的数据展示，
    return _axios2.default.post("/user/verify", data);
};

/***/ }),

/***/ "./src/APP.js":
/*!********************!*\
  !*** ./src/APP.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _CssBaseline = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _HomePage = __webpack_require__(/*! ./container/HomePage */ "./src/container/HomePage/index.js");

var _HomePage2 = _interopRequireDefault(_HomePage);

var _ProjectLits = __webpack_require__(/*! ./container/ProjectLits */ "./src/container/ProjectLits/index.js");

var _ProjectLits2 = _interopRequireDefault(_ProjectLits);

var _ProjectItem = __webpack_require__(/*! ./container/ProjectItem */ "./src/container/ProjectItem/index.js");

var _ProjectItem2 = _interopRequireDefault(_ProjectItem);

var _Workbench = __webpack_require__(/*! ./container/Workbench */ "./src/container/Workbench/index.js");

var _Workbench2 = _interopRequireDefault(_Workbench);

var _MyProfile = __webpack_require__(/*! ./container/MyProfile */ "./src/container/MyProfile/index.js");

var _MyProfile2 = _interopRequireDefault(_MyProfile);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _Register = __webpack_require__(/*! ./container/HomePage/Register */ "./src/container/HomePage/Register.js");

var _Register2 = _interopRequireDefault(_Register);

var _index = __webpack_require__(/*! ./container/HomePage/ResetPassword/index */ "./src/container/HomePage/ResetPassword/index.js");

var _index2 = _interopRequireDefault(_index);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _css = __webpack_require__(/*! ./css */ "./src/css.js");

var _PrivateRoute = __webpack_require__(/*! ./component/PrivateRoute */ "./src/component/PrivateRoute.js");

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APP = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(APP, _React$Component);

    function APP(props) {
        _classCallCheck(this, APP);

        var _this = _possibleConstructorReturn(this, (APP.__proto__ || Object.getPrototypeOf(APP)).call(this));

        _this.state = {
            container: {} //

        };

        _this.canvas = _react2.default.createRef();
        _this.store = props.store.themesChange;
        _this.setTheme = _this.store.setTheme;
        _this.authenticated = props.store.authenticated;
        return _this;
    }

    _createClass(APP, [{
        key: 'render',
        value: function render() {
            var theme = this.store.theme;
            return _react2.default.createElement(
                _styles.MuiThemeProvider,
                { theme: _css.themeObj[theme] },
                _react2.default.createElement(_CssBaseline2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.BrowserRouter,
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _HomePage2.default }),
                        _react2.default.createElement(_PrivateRoute2.default, { path: '/pjl', component: _ProjectLits2.default, authenticated: this.authenticated }),
                        _react2.default.createElement(_PrivateRoute2.default, { path: '/pji/:projectId', component: _ProjectItem2.default, authenticated: this.authenticated }),
                        _react2.default.createElement(_PrivateRoute2.default, { path: '/wf', component: _Workbench2.default, authenticated: this.authenticated }),
                        _react2.default.createElement(_PrivateRoute2.default, { path: '/pro', component: _MyProfile2.default, authenticated: this.authenticated }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/Register', component: _Register2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/Reset', component: _index2.default })
                    )
                )
            );
        }
    }]);

    return APP;
}(_react2.default.Component)) || _class) || _class);
exports.default = APP;

/***/ }),

/***/ "./src/Canvas/Widge.js":
/*!*****************************!*\
  !*** ./src/Canvas/Widge.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var componentName = function (_Component) {
    _inherits(componentName, _Component);

    function componentName() {
        _classCallCheck(this, componentName);

        var _this = _possibleConstructorReturn(this, (componentName.__proto__ || Object.getPrototypeOf(componentName)).call(this));

        _this.canvas = _react2.default.createRef();
        _this.div = _react2.default.createRef();
        _this.state = {
            container: {},
            width: 0,
            height: 0
        };
        return _this;
    }

    _createClass(componentName, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            console.log(this.div.current.height);
            var h = this.div.current.clientHeight;
            var w = this.div.current.clientWidth;
            this.setState({ width: w, height: h });
            // this.props.container
            console.log(this.props);
            var back = function back() {
                console.log(_this2.props);
                if (_this2.props == undefined || _this2.props.container === null || _this2.props.container.toString() === '{}') {
                    setTimeout(function () {
                        back();
                    }, 200);
                } else {
                    var animate = function animate() {
                        _this2.props.container.draw();
                        RAF(animate);
                    };
                    window.RAF = function () {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                            window.setTimeout(callback, 1000 / 60);
                        };
                    }();
                    _this2.setState({ container: _this2.props.container }, function () {
                        this.props.container.addCanvas(this.canvas.current);
                        RAF(animate);
                    });
                    console.log(_this2.props);
                }
            };
            back();
            /*        function animate(){
                    console.log('aaaaaaaaa')
                    nextProps.container.draw()
                    RAF(animate) 
                }
                window.RAF = (function(){
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };
                })();
                RAF(animate)
                console.log(this.props) */
        }
        /*     static getDerivedStateFromProps(nextProps, prevState) {
                let _this = this 
                console.log(nextProps)
                console.log(prevState)
                console.log(nextProps.container !== prevState.container)
                if (nextProps.container != prevState.container ) {
                    function animate(){
                        console.log('aaaaaaaaa')
                        nextProps.container.draw()
                        RAF(animate) 
                    }
                    window.RAF = (function(){
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };
                    })();
                    this.setState({container:nextProps.container},function(){
                        nextProps.container.addCanvas(this.canvas.current)
                        RAF(animate)
                    })
        
                }
                if(nextProps.height != prevState.height || nextProps.width !=prevState.width) {
                    return ({height: nextProps.height,width: nextProps.width})
                }
                return null
            } */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: this.div, style: { height: '100%', width: '100%', backgroundColor: "#fff" } },
                _react2.default.createElement('canvas', { ref: this.canvas, height: this.state.height, width: this.state.width })
            );
        }
    }]);

    return componentName;
}(_react.Component);

exports.default = componentName;

/***/ }),

/***/ "./src/container/HomePage/Register.js":
/*!********************************************!*\
  !*** ./src/container/HomePage/Register.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _HomeHead = __webpack_require__(/*! ../../container/HomePage/HomeHead */ "./src/container/HomePage/HomeHead/index.js");

var _HomeHead2 = _interopRequireDefault(_HomeHead);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _InputBase = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/InputBase/index.js");

var _InputBase2 = _interopRequireDefault(_InputBase);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _API = __webpack_require__(/*! ../../API/API */ "./src/API/API.js");

var _registeredBackground = __webpack_require__(/*! ../../../static/images/home/registeredBackground.jpg */ "./static/images/home/registeredBackground.jpg");

var _registeredBackground2 = _interopRequireDefault(_registeredBackground);

var _registered = __webpack_require__(/*! ../../../static/images/home/registered.png */ "./static/images/home/registered.png");

var _registered2 = _interopRequireDefault(_registered);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
            color: "#fff"
        },
        registerBox: {
            width: '100%',
            height: '95%',
            background: 'url(' + _registeredBackground2.default + ') no-repeat ',
            backgroundSize: '100% 100%'
        },
        decorationBox: {
            position: "absolute",
            right: "5%",
            top: "20%",
            width: '45%',
            height: '60%',
            background: 'url(' + _registered2.default + ') no-repeat ',
            backgroundSize: '100% 100%'
        },
        headerText: {
            fontSize: 40,
            position: "relative",
            left: " -35%",
            top: 0
        },
        listBox: {
            width: "30%",
            height: "70%",
            position: "relative",
            top: "10%",
            left: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: " space-evenly",
            alignItems: "center"
        },
        inputBox: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            border: "2px solid #fff",
            backgroundColor: "#7eb0e8;"
        },
        input: {
            marginLeft: 8,
            flex: 1,
            height: 40,
            color: "#fff"
        },
        button: {
            width: 400,
            height: 40,
            margin: theme.spacing.unit,
            color: "#2a2a2a",
            backgroundColor: "#fff"
        },
        loginBox: {
            position: "relative",
            top: 0,
            left: "25%",
            cursor: "pointer",
            color: "#fff"
        },
        promptBox: {
            position: "relative",
            top: 0,
            left: "60%",
            color: "#ef786d",
            fontSize: 20
        }
    };
};

var Register = (_temp2 = _class = function (_Component) {
    _inherits(Register, _Component);

    function Register() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Register);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Register.__proto__ || Object.getPrototypeOf(Register)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            userName: "",
            password: "",
            passwordEmpty: false,
            passwordPrompt: false,
            newPassword: "",
            newPasswordEmpty: false,
            newPasswordPrompt: false,
            newPasswordCompare: false,
            email: "",
            unit: "",
            registeredShow: true,
            repeatNameShow: false,
            showNameShow: false
        }, _this.changeUserName = function (e) {
            _this.setState({
                userName: e.target.value
            });
        }, _this.checkRepeatName = function (e) {
            if (e.target.value === "") {
                _this.setState({ showNameShow: true });
                return;
            }
            console.log("校验用户名是否存在");
            console.log(e.target.value);
            //发送请求校验接口。定义状态来控制提示的显示
            (0, _API.repeatNameShow)({ userName: e.target.value }).then(function (data) {
                console.log("注册的返回值");
                console.log(data);
                if (data.code === 1) {
                    console.log("用户存在");
                    _this.setState({ repeatNameShow: true });
                } else {
                    console.log("用户名可用");
                }
            });
        }, _this.changePassword = function (e) {
            _this.setState({
                password: e.target.value
            });
        }, _this.changeNewPassword = function (e) {
            _this.setState({
                newPassword: e.target.value
            });
        }, _this.changeEmail = function (e) {
            _this.setState({
                email: e.target.value
            });
        }, _this.changeUnit = function (e) {
            _this.setState({
                unit: e.target.value
            });
        }, _this.checkInput = function (show, e) {
            var str = e.target.value;
            var reg = /(^\s+)|(\s+$)|\s+/g;
            var empty = reg.test(str);
            if (empty) {
                //加空值校验。在这里判断跟新什么
                if (show === "password") {
                    _this.setState({
                        passwordEmpty: true
                    });
                } else if (show === "newPassword") {
                    _this.setState({
                        newPasswordEmpty: true
                    });
                }
                return;
            } else {
                if (show === "password") {
                    _this.setState({
                        passwordEmpty: false
                    });
                } else if (show === "newPassword") {
                    _this.setState({
                        newPasswordEmpty: false
                    });
                }
            }
            var result = /^[\w_-]{6,18}$/.test(str); //校验是否符合
            if (!result) {
                if (show === "password") {
                    _this.setState({
                        passwordPrompt: true
                    });
                } else if (show === "newPassword") {
                    _this.setState({
                        newPasswordPrompt: true
                    });
                }
            } else {
                if (show === "password") {
                    _this.setState({
                        passwordPrompt: false
                    });
                } else if (show === "newPassword") {
                    _this.setState({
                        newPasswordPrompt: false
                    });
                }
            }
            if (show === "newPassword") {
                str === _this.state.password ? _this.setState({ newPasswordCompare: false }) : _this.setState({ newPasswordCompare: true });
            }
            ;
        }, _this.prompt = function (show) {
            //这里是添加或者运算符
            var _this$state = _this.state,
                passwordEmpty = _this$state.passwordEmpty,
                passwordPrompt = _this$state.passwordPrompt,
                newPasswordEmpty = _this$state.newPasswordEmpty,
                newPasswordPrompt = _this$state.newPasswordPrompt,
                newPasswordCompare = _this$state.newPasswordCompare;

            var str = "";
            if (show === "password") {
                if (passwordEmpty) {
                    str = "输入值不能为空值";
                    return _react2.default.createElement(
                        'div',
                        null,
                        str
                    );
                }
                if (passwordPrompt) {
                    str = "密码不符合规定";
                }
            } else if (show === "newPassword") {
                if (newPasswordEmpty) {
                    str = "输入值不能为空值";
                    return _react2.default.createElement(
                        'div',
                        null,
                        str
                    );
                }
                if (newPasswordPrompt) {
                    str = "密码不符合规定";
                    return _react2.default.createElement(
                        'div',
                        null,
                        str
                    );
                }
                if (newPasswordCompare) {
                    str = "两次密码不同";
                    return _react2.default.createElement(
                        'div',
                        null,
                        str
                    );
                }
            } else if (show === "userName") {
                var _this$state2 = _this.state,
                    _repeatNameShow = _this$state2.repeatNameShow,
                    showNameShow = _this$state2.showNameShow;

                if (showNameShow) {
                    //
                    str = "用户不能为空";
                    return _react2.default.createElement(
                        'div',
                        null,
                        str
                    );
                }
                if (_repeatNameShow) {
                    str = "用户名已存在";
                    return _react2.default.createElement(
                        'div',
                        null,
                        str
                    );
                }
            }
            return _react2.default.createElement(
                'div',
                null,
                str
            );
        }, _this.setButtonColor = function () {
            var _this$state3 = _this.state,
                userName = _this$state3.userName,
                password = _this$state3.password,
                passwordEmpty = _this$state3.passwordEmpty,
                passwordPrompt = _this$state3.passwordPrompt,
                newPassword = _this$state3.newPassword,
                newPasswordEmpty = _this$state3.newPasswordEmpty,
                newPasswordPrompt = _this$state3.newPasswordPrompt,
                newPasswordCompare = _this$state3.newPasswordCompare,
                email = _this$state3.email,
                unit = _this$state3.unit;

            var color = "#fff";
            if (userName !== "" && password !== "" && newPassword !== "" && email !== "" && unit !== "" && !newPasswordCompare && !passwordPrompt && !newPasswordPrompt && !passwordEmpty && !newPasswordEmpty) {
                color = "#48C9B0";
            }
            return { backgroundColor: color };
        }, _this.pushRegister = function () {
            var _this$state4 = _this.state,
                userName = _this$state4.userName,
                password = _this$state4.password,
                newPassword = _this$state4.newPassword,
                email = _this$state4.email,
                unit = _this$state4.unit;

            if (userName !== "" && password !== "" && newPassword !== "" && email !== "" && unit !== "") {
                if (_this.state.registeredShow) {
                    _this.setState({ registeredShow: false }, function () {
                        (0, _API.registeredUser)({
                            userName: userName,
                            password: newPassword,
                            email: email,
                            unit: unit
                        }).then(function (data) {
                            _this.setState({ registeredShow: true });
                            if (data === 1) {
                                console.log("成功了");
                            } else {
                                alert("注册失败，请稍后再试");
                            }
                        });
                    });
                    //这里的注意是连续点击问题，解决方案是，在state 里面设置一个值，在onclick 的时候设置成false 然后在ajax 回调结果之后将值，再吃设置成true
                }
            } else {
                alert("数据格式有误");
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    //规则校验


    _createClass(Register, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = this.props.classes;
            var _state = this.state,
                passwordEmpty = _state.passwordEmpty,
                passwordPrompt = _state.passwordPrompt,
                newPasswordEmpty = _state.newPasswordEmpty,
                newPasswordPrompt = _state.newPasswordPrompt,
                newPasswordCompare = _state.newPasswordCompare,
                repeatNameShow = _state.repeatNameShow,
                showNameShow = _state.showNameShow;

            return _react2.default.createElement(
                'div',
                { className: classes.root },
                _react2.default.createElement(_HomeHead2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: classes.registerBox },
                    _react2.default.createElement(
                        'div',
                        { className: classes.listBox },
                        _react2.default.createElement(
                            'header',
                            { className: classes.headerText },
                            '\u6CE8\u518C'
                        ),
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.inputBox, elevation: 1,
                                style: repeatNameShow || showNameShow ? { borderColor: "#ef786d" } : null },
                            _react2.default.createElement(_InputBase2.default, { className: classes.input, placeholder: '\u7528\u6237\u540D', onBlur: function onBlur(e) {
                                    _this2.checkRepeatName(e);
                                }, onChange: function onChange(e) {
                                    _this2.changeUserName(e);
                                } }),
                            _react2.default.createElement(
                                'span',
                                { className: classes.promptBox },
                                this.prompt("userName")
                            )
                        ),
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.inputBox, elevation: 1,
                                style: passwordEmpty || passwordPrompt ? { borderColor: "#ef786d" } : null },
                            _react2.default.createElement(_InputBase2.default, { className: classes.input, placeholder: '\u5BC6\u7801(6-18\u4E2A\u5B57\u7B26\u533A\u5206\u5927\u5C0F\u5199)', type: 'password',
                                onChange: function onChange(e) {
                                    _this2.changePassword(e);
                                }, onBlur: function onBlur(e) {
                                    _this2.checkInput("password", e);
                                } }),
                            _react2.default.createElement(
                                'span',
                                { className: classes.promptBox },
                                this.prompt("password")
                            )
                        ),
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.inputBox, elevation: 1,
                                style: newPasswordEmpty || newPasswordPrompt || newPasswordCompare ? { borderColor: "#ef786d" } : null },
                            _react2.default.createElement(_InputBase2.default, { className: classes.input, placeholder: '\u786E\u8BA4\u5BC6\u7801', type: 'password', onChange: function onChange(e) {
                                    _this2.changeNewPassword(e);
                                }, onBlur: function onBlur(e) {
                                    _this2.checkInput("newPassword", e);
                                } }),
                            _react2.default.createElement(
                                'span',
                                { className: classes.promptBox },
                                this.prompt("newPassword")
                            )
                        ),
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.inputBox, elevation: 1 },
                            _react2.default.createElement(_InputBase2.default, { className: classes.input, placeholder: '\u90AE\u7BB1(\u586B\u5199\u5E38\u7528\u7684\u90AE\u7BB1)', onChange: function onChange(e) {
                                    _this2.changeEmail(e);
                                } })
                        ),
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.inputBox, elevation: 1 },
                            _react2.default.createElement(_InputBase2.default, { className: classes.input, placeholder: '\u5355\u4F4D(\u8BF7\u586B\u5199\u60A8\u7684\u5355\u4F4D\u6216\u516C\u53F8)', onChange: function onChange(e) {
                                    _this2.changeUnit(e);
                                } })
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { variant: 'contained', color: 'primary', className: classes.button,
                                style: this.setButtonColor(), onClick: this.pushRegister },
                            '\u6CE8 \u518C'
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { className: classes.loginBox, component: _reactRouterDom.Link, to: '/' },
                            '\u5DF2\u6709\u8D26\u6237\uFF0C\u76F4\u63A5\u767B\u5F55>>'
                        )
                    ),
                    _react2.default.createElement('div', { className: classes.decorationBox })
                )
            );
        }
    }]);

    return Register;
}(_react.Component), _class.propTypes = {
    clsses: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = (0, _core.withStyles)(styles)(Register);

/***/ })

})
//# sourceMappingURL=home.a3f3d20fbd5e7b4c2378.hot-update.js.map