webpackHotUpdate("home",{

/***/ "./src/container/HomePage/ResetPassword/index.js":
/*!*******************************************************!*\
  !*** ./src/container/HomePage/ResetPassword/index.js ***!
  \*******************************************************/
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

var _HomeHead = __webpack_require__(/*! ../../../container/HomePage/HomeHead */ "./src/container/HomePage/HomeHead/index.js");

var _HomeHead2 = _interopRequireDefault(_HomeHead);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _InputBase = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/InputBase/index.js");

var _InputBase2 = _interopRequireDefault(_InputBase);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _API = __webpack_require__(/*! ../../../API/API */ "./src/API/API.js");

var _registeredBackground = __webpack_require__(/*! ../../../../static/images/home/registeredBackground.jpg */ "./static/images/home/registeredBackground.jpg");

var _registeredBackground2 = _interopRequireDefault(_registeredBackground);

var _reset = __webpack_require__(/*! ../../../../static/images/home/reset.png */ "./static/images/home/reset.png");

var _reset2 = _interopRequireDefault(_reset);

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
            top: "40%",
            width: '27%',
            height: '45%',
            background: 'url(' + _reset2.default + ') no-repeat ',
            backgroundSize: '100% 100%'
        },
        headerText: {
            fontSize: 40,
            position: "relative",
            left: " -25%",
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
            backgroundColor: "#7eb0e8;",
            position: "relative"
        },
        inputBoxValidation: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 250,
            border: "2px solid #fff",
            backgroundColor: "#7eb0e8;",
            position: "relative",
            top: 0,
            left: -75
        },
        input: {
            marginLeft: 8,
            flex: 1,
            height: 40,
            color: "#fff"
        },
        inputValidation: {
            marginLeft: 8,
            flex: 1,
            height: 40,
            color: "#fff"
        },
        validationButton: {
            width: 130,
            height: 40,
            margin: theme.spacing.unit,
            color: "rgba(133,179,233,1)",
            backgroundColor: "#fff",
            position: "absolute",
            top: -6,
            left: 260
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

var ResetPassword = (_temp2 = _class = function (_Component) {
    _inherits(ResetPassword, _Component);

    function ResetPassword() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ResetPassword);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResetPassword.__proto__ || Object.getPrototypeOf(ResetPassword)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            userName: "",
            password: "",
            newPassword: "",
            passwordEmpty: false,
            passwordPrompt: false,
            newPasswordEmpty: false,
            newPasswordPrompt: false,
            newPasswordCompare: false,
            validation: "",
            registeredShow: true,
            checkoutValidationShow: null,

            repeatNameShow: false,
            showNameShow: false
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
        }, _this.changeUserName = function (e) {
            _this.setState({
                userName: e.target.value
            });
        }, _this.changePassword = function (e) {
            _this.setState({
                password: e.target.value
            });
        }, _this.changeNewPassword = function (e) {
            _this.setState({
                newPassword: e.target.value
            });
        }, _this.changeValidation = function (e) {
            _this.setState({
                validation: e.target.value
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
                validation = _this$state3.validation;

            var color = "#fff";
            if (userName !== "" && password !== "" && newPassword !== "" && validation !== "" && !newPasswordCompare && !passwordPrompt && !newPasswordPrompt && !passwordEmpty && !newPasswordEmpty) {
                color = "#48C9B0";
            }
            return { backgroundColor: color };
        }, _this.pushRegister = function () {
            var _this$state4 = _this.state,
                userName = _this$state4.userName,
                password = _this$state4.password,
                newPassword = _this$state4.newPassword,
                validation = _this$state4.validation,
                checkoutValidationShow = _this$state4.checkoutValidationShow;

            if (userName !== "" && password !== "" && newPassword !== "" && validation !== "" && checkoutValidationShow) {
                if (_this.state.registeredShow) {
                    _this.setState({ registeredShow: false }, function () {
                        (0, _API.retrievePassword)({
                            userName: userName,
                            newPassword: newPassword
                        }).then(function (data) {
                            _this.setState({ registeredShow: true });
                            if (data === 1) {
                                alert("修改成功");
                            } else {
                                alert("修改失败");
                            }
                        });
                    });
                }
            } else {
                alert("数据格式有误");
            }
        }, _this.getValidation = function () {
            (0, _API.getValidation)().then(function (data) {
                if (data !== "") {
                    alert("成功");
                } else {
                    alert("验证码返回失败");
                }
            });
        }, _this.checkoutValidation = function () {
            (0, _API.checkoutValidation)(_this.state.validation).then(function (data) {
                if (data === 1) {
                    _this.setState({ checkoutValidationShow: true });
                    alert("验证成功");
                } else {
                    _this.setState({ checkoutValidationShow: false });
                    alert("验证失败");
                }
            });
        }, _this.validationBorderColor = function () {
            var checkoutValidationShow = _this.state.checkoutValidationShow;

            if (checkoutValidationShow !== null) {
                if (!checkoutValidationShow) {
                    return { borderColor: "#ef786d" };
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    //规则校验


    _createClass(ResetPassword, [{
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
                checkoutValidationShow = _state.checkoutValidationShow,
                showNameShow = _state.showNameShow,
                repeatNameShow = _state.repeatNameShow;

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
                            '\u91CD\u7F6E\u5BC6\u7801'
                        ),
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.inputBox, elevation: 1,
                                style: showNameShow || repeatNameShow ? { borderColor: "#ef786d" } : null },
                            _react2.default.createElement(_InputBase2.default, { className: classes.input, placeholder: '\u7528\u6237\u540D',
                                onChange: function onChange(e) {
                                    _this2.changeUserName(e);
                                },
                                onBlur: function onBlur(e) {
                                    _this2.checkRepeatName(e);
                                } }),
                            _react2.default.createElement(
                                'span',
                                { className: classes.promptBox },
                                this.prompt("userName")
                            )
                        ),
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.inputBoxValidation,
                                style: this.validationBorderColor(),
                                elevation: 1 },
                            _react2.default.createElement(_InputBase2.default, { className: classes.inputValidation, placeholder: '\u8F93\u5165\u9A8C\u8BC1\u7801',
                                onBlur: this.checkoutValidation,
                                onChange: function onChange(e) {
                                    _this2.changeValidation(e);
                                } }),
                            _react2.default.createElement(
                                _Button2.default,
                                { variant: 'contained', className: classes.validationButton,
                                    onClick: this.getValidation },
                                '\u53D1\u9001\u9A8C\u8BC1\u7801'
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
                            _Button2.default,
                            { variant: 'contained', color: 'primary', className: classes.button,
                                style: this.setButtonColor(), onClick: this.pushRegister },
                            '\u786E \u8BA4'
                        )
                    ),
                    _react2.default.createElement('div', { className: classes.decorationBox })
                )
            );
        }
    }]);

    return ResetPassword;
}(_react.Component), _class.propTypes = {
    clsses: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = (0, _core.withStyles)(styles)(ResetPassword);

/***/ }),

/***/ "./src/container/ProjectItem/BasicStateBar/index.js":
/*!**********************************************************!*\
  !*** ./src/container/ProjectItem/BasicStateBar/index.js ***!
  \**********************************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _ImageAvatars = __webpack_require__(/*! ../../ProjectLits/ProjectCard/ImageAvatars */ "./src/container/ProjectLits/ProjectCard/ImageAvatars.js");

var _ImageAvatars2 = _interopRequireDefault(_ImageAvatars);

var _index = __webpack_require__(/*! mobx-react/index */ "./node_modules/mobx-react/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: {
            width: '100%',
            height: 100,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        shrinkFig: {
            width: 105,
            height: 100,
            overflow: 'hidden',
            // ⚠️ object-fit is not supported by IE 11.
            objectFit: 'cover',
            paddingLeft: 5
        },
        shrinkImg: {
            width: 100,
            height: 100
        },
        helper: {
            borderRight: '2px solid ' + theme.palette.divider,
            padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 2 + 'px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        data: {
            width: '230px'
        },
        avatars: {
            width: '230px',
            padding: '0px'
        },
        avatarsSecondry: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        date: {
            width: '230px'
        },
        state: {
            width: '230px'
        }
    };
};

var BasicStateBar = (_dec = (0, _index.inject)('store'), _dec(_class = (0, _index.observer)(_class = function (_Component) {
    _inherits(BasicStateBar, _Component);

    /*  static propTypes = {
          prop: PropTypes
      }   */
    function BasicStateBar(props) {
        _classCallCheck(this, BasicStateBar);

        var _this = _possibleConstructorReturn(this, (BasicStateBar.__proto__ || Object.getPrototypeOf(BasicStateBar)).call(this));

        _this.state = {
            data: {},
            membersAry: []
        };

        _this.store = props.store.DataList; //数据传递的时候
        _this.data = _this.store.data;
        return _this;
    }

    _createClass(BasicStateBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 这里需要替换的数据就是 图和节点
            var newValue = JSON.parse(sessionStorage.getItem('key'));
            var membersAry = newValue.members.slice(0, 3);
            this.setState({
                data: newValue,
                membersAry: membersAry
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = this.props.classes;
            var _state = this.state,
                data = _state.data,
                membersAry = _state.membersAry;

            return _react2.default.createElement(
                'div',
                { className: classes.root },
                _react2.default.createElement(
                    'div',
                    { className: classes.shrinkFig },
                    _react2.default.createElement('img', { className: classes.shrinkImg, src: data.img })
                ),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(classes.data, classes.helper) },
                    _react2.default.createElement(
                        _Typography2.default,
                        { variant: 'h6' },
                        data.name
                    ),
                    _react2.default.createElement(
                        _Typography2.default,
                        { component: 'p', color: 'textSecondary' },
                        'ID:123456789'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(classes.avatars, classes.helper) },
                    _react2.default.createElement(
                        _Typography2.default,
                        null,
                        '\u6210\u5458'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: classes.avatarsSecondry },
                        console.log(data.members),
                        membersAry.map(function (item, index) {
                            return _react2.default.createElement(_ImageAvatars2.default, { key: index, img: item.img });
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(classes.date, classes.helper) },
                    _react2.default.createElement(
                        _Typography2.default,
                        null,
                        '\u6700\u8FD1\u4FEE\u6539\u65E5\u671F'
                    ),
                    _react2.default.createElement(
                        _Typography2.default,
                        null,
                        data.data
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(classes.state, classes.helper) },
                    _react2.default.createElement(
                        _Typography2.default,
                        null,
                        '\u8FD0\u884C\u4E2D\u7684\u8BA1\u7B97'
                    ),
                    _react2.default.createElement(
                        _Typography2.default,
                        { variant: 'title', color: 'error' },
                        data.operationCalculateId
                    )
                )
            );
        }
    }]);

    return BasicStateBar;
}(_react.Component)) || _class) || _class);


BasicStateBar.propTypese = {
    /*  classes: PropTypes.object.isRequired,*/
};

exports.default = (0, _styles.withStyles)(styles)(BasicStateBar);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/Compute/ComputeCard.js":
/*!***********************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/Compute/ComputeCard.js ***!
  \***********************************************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Card = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/CardHeader/index.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");

var _red2 = _interopRequireDefault(_red);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _index = __webpack_require__(/*! mobx-react/index */ "./node_modules/mobx-react/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
    return {
        root: {
            paddingTop: theme.spacing.unit * 2,
            paddingRight: theme.spacing.unit * 2,
            paddingLeft: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2
        },
        card: {
            maxWidth: 300
            //paddingTop: theme.spacing.unit * 2 
        },
        media: {
            height: 0,
            paddingTop: '56.25%' // 16:9
        },
        actions: {
            display: 'flex'
        },
        expand: _defineProperty({
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest
            }),
            marginLeft: 'auto'
        }, theme.breakpoints.up('sm'), {
            marginRight: -8
        }),
        expandOpen: {
            transform: 'rotate(180deg)'
        },
        avatar: {
            backgroundColor: _red2.default[500]
        }
    };
};

var WfCard = (_dec = (0, _index.inject)('store'), _dec(_class = (0, _index.observer)(_class = function (_Component) {
    _inherits(WfCard, _Component);

    function WfCard(props) {
        _classCallCheck(this, WfCard);

        var _this = _possibleConstructorReturn(this, (WfCard.__proto__ || Object.getPrototypeOf(WfCard)).call(this));

        _this.state = {
            expanded: false,
            data: [] //数据的获取
        };

        _this.handleExpandClick = function () {
            _this.setState(function (state) {
                return {
                    expanded: !state.expanded
                };
            });
        };

        _this.store = props.store.DataList; //数据传递的时候
        _this.data = _this.store.data;
        return _this;
    }
    /* static propTypes = {
         prop: PropTypes
     }*/


    _createClass(WfCard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.store.data.calculate !== undefined) {
                this.setState({ //时间异步问题
                    //data: this.data.dataGather//数据的获取
                    data: this.store.data.calculate //数据的获取
                });
            } else {
                setTimeout(function () {
                    //这里刷新页面之后将，mobx里面的数据需要重新获取，这里需要延迟执行。【问题是刷新的时候可能会断网 ，就是数据请求会失败】
                    console.log("展示的数据");
                    if (_this2.store.data.calculate !== undefined) {
                        _this2.setState({ //时间异步问题
                            //data: this.data.dataGather//数据的获取
                            data: _this2.store.data.calculate //数据的获取
                        });
                        console.log(_this2.store.data.calculate);
                    } else {
                        alert("刷新失败");
                    }
                }, 100);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                data = _props.data,
                match = _props.match;

            console.log("路径数据++++++++++++++");
            console.log(data.calculateId);
            var path = '/pji/' + match.params.projectId + '/ccp/' + data.calculateId; // 数据展示
            return _react2.default.createElement(
                _Button2.default,
                { className: classes.root, component: _reactRouterDom.Link, to: path },
                _react2.default.createElement(
                    _Card2.default,
                    { className: classes.card },
                    _react2.default.createElement(_CardHeader2.default, {
                        title: _react2.default.createElement(
                            _Typography2.default,
                            { variant: 'h6' },
                            data.name
                        ),
                        subheader: _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _Typography2.default,
                                { component: 'p', color: 'textSecondary' },
                                '\u4FEE\u6539\u65F6\u95F4\uFF1A',
                                data.data
                            ),
                            _react2.default.createElement(
                                _Typography2.default,
                                { component: 'p', color: 'textSecondary' },
                                '\u7C7B\u522B\uFF1A',
                                data.category
                            )
                        )
                    }),
                    _react2.default.createElement(_CardMedia2.default, {
                        className: classes.media,
                        image: data.img,
                        title: 'Paella dish'
                    }),
                    _react2.default.createElement(
                        _CardContent2.default,
                        null,
                        _react2.default.createElement(
                            _Typography2.default,
                            { component: 'p' },
                            data.describe
                        )
                    )
                )
            );
        }
    }]);

    return WfCard;
}(_react.Component)) || _class) || _class);


WfCard.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _core.withStyles)(styles)(WfCard);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/Compute/ComputeCardPage.js":
/*!***************************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/Compute/ComputeCardPage.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _ModleDrawer = __webpack_require__(/*! ./ModleDrawer */ "./src/container/ProjectItem/NavContainer/Compute/ModleDrawer/index.js");

var _ModleDrawer2 = _interopRequireDefault(_ModleDrawer);

var _WorkSpace = __webpack_require__(/*! ./WorkSpace */ "./src/container/ProjectItem/NavContainer/Compute/WorkSpace/index.js");

var _WorkSpace2 = _interopRequireDefault(_WorkSpace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: {
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            //z-index: 1300,
            position: 'fixed',
            backgroundColor: "#fff"
        }
    };
};

var Workbench = function (_Component) {
    _inherits(Workbench, _Component);

    function Workbench() {
        _classCallCheck(this, Workbench);

        return _possibleConstructorReturn(this, (Workbench.__proto__ || Object.getPrototypeOf(Workbench)).apply(this, arguments));
    }

    _createClass(Workbench, [{
        key: 'componentDidMount',

        /*  static propTypes = {
              prop: PropTypes
          }*/

        value: function componentDidMount() {
            //需要请求 拉取工作的展示 【对于已存在的工作流的数据·1】
            var match = this.props.match;

            console.log("拉取的数据计算集");
            var projectId = match.params.projectId;
            var calculateId = match.params.calculateId;
            console.log(projectId);
            console.log(calculateId);
            // 
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                { className: classes.root },
                _react2.default.createElement(_ModleDrawer2.default, null),
                _react2.default.createElement(_WorkSpace2.default, null)
            );
        }
    }]);

    return Workbench;
}(_react.Component);

/*Workbench.propTypes = {
    clsses:PropTypes.object.isRequired
}*/


exports.default = (0, _styles.withStyles)(styles)(Workbench);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/Compute/index.js":
/*!*****************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/Compute/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _ComputeCard = __webpack_require__(/*! ./ComputeCard */ "./src/container/ProjectItem/NavContainer/Compute/ComputeCard.js");

var _ComputeCard2 = _interopRequireDefault(_ComputeCard);

var _index = __webpack_require__(/*! mobx-react/index */ "./node_modules/mobx-react/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: _extends({}, theme.mixins.gutters(), {
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            display: 'flex',
            position: 'relative',
            flexWrap: 'wrap'
        }),
        add: {
            position: 'absolute',
            right: theme.spacing.unit * 2,
            top: theme.spacing.unit * 2
        }
    };
};

var Compute = (_dec = (0, _index.inject)('store'), _dec(_class = (0, _index.observer)(_class = function (_Component) {
    _inherits(Compute, _Component);

    function Compute(props) {
        _classCallCheck(this, Compute);

        var _this = _possibleConstructorReturn(this, (Compute.__proto__ || Object.getPrototypeOf(Compute)).call(this));

        _this.state = {
            expanded: false,
            data: [] //数据的获取
        };

        _this.handleExpandClick = function () {
            _this.setState(function (state) {
                return {
                    expanded: !state.expanded
                };
            });
        };

        _this.store = props.store.DataList; //数据传递的时候
        _this.data = _this.store.data;
        return _this;
    }
    /*  static propTypes = {
          prop: PropTypes
      }*/


    _createClass(Compute, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var data = JSON.parse(sessionStorage.getItem('key'));
            this.setState({
                data: data.calculate
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                match = _props.match;
            var data = this.state.data;

            return _react2.default.createElement(
                _Paper2.default,
                { className: classes.root, elevation: 1 },
                data.map(function (item, index) {
                    return _react2.default.createElement(_ComputeCard2.default, { key: index, data: item, match: match });
                })
            );
        }
    }]);

    return Compute;
}(_react.Component)) || _class) || _class);


Compute.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _core.withStyles)(styles)(Compute);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/Data/DataSet.js":
/*!****************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/Data/DataSet.js ***!
  \****************************************************************/
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

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");

var _red2 = _interopRequireDefault(_red);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Head = __webpack_require__(/*! ../../../../component/Head */ "./src/component/Head.js");

var _Head2 = _interopRequireDefault(_Head);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Add = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");

var _Add2 = _interopRequireDefault(_Add);

var _List = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemSecondaryAction = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/index.js");

var _ListItemSecondaryAction2 = _interopRequireDefault(_ListItemSecondaryAction);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Checkbox = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/index.js");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Clear = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");

var _Clear2 = _interopRequireDefault(_Clear);

var _Upload = __webpack_require__(/*! ../../../../component/Upload */ "./src/component/Upload.js");

var _Upload2 = _interopRequireDefault(_Upload);

var _index = __webpack_require__(/*! ./AddDatabase/index */ "./src/container/ProjectItem/NavContainer/Data/AddDatabase/index.js");

var _index2 = _interopRequireDefault(_index);

var _API = __webpack_require__(/*! ../../../../API/API */ "./src/API/API.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#e9eff9"
        },
        contentBox: {
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundColor: "#e9eff9",
            display: "flex",
            justifyContent: "center"
        },
        headBackground: {
            width: "100%",
            height: "20%",
            backgroundColor: "#fff"
        },
        DateList: {
            position: "absolute",
            backgroundColor: "#fff",
            top: "5%",
            width: "90%",
            height: "80%"
        },
        button: {
            backgroundColor: "#6d93cc",
            width: 250,
            height: 50,
            alignItems: "center",
            fontSize: 20,
            color: "#fdfdfd",
            borderRadius: 25,
            marginLeft: 60,
            display: "flex",
            justifyContent: "space-around"
        },
        addButtonBox: {
            display: "flex",
            justifyContent: "space-between",
            height: 100
        },
        dataTitle: {
            display: "flex",
            alignItems: "center",
            height: 50,
            borderLeft: "2px solid #6d93cc",
            paddingLeft: 40
        },
        AddIcon: {
            fontSize: 40,
            width: 30,
            height: 30
        },
        addButton: {
            display: "flex"
        },
        listBox: {
            width: "100%",
            height: "92%",
            backgroundColor: "#f4f7f9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        dateListBox: {
            width: "98%",
            height: "97%",
            backgroundColor: "#FEFEFE",
            padding: 0,
            fontSize: 24,
            overflow: "auto"
        },
        dateListBox1: {
            width: "100%",
            height: "100%",
            backgroundColor: "#FEFEFE",
            padding: 0,
            fontSize: 24
        },
        icon: {
            color: "red",
            fontSize: 24
        },
        listHeadBox: {
            backgroundColor: " #f4f7f9",
            position: "relative"
        },
        listHead: {
            color: "#C9C9C9",
            fontSize: 20,
            width: 200
        },
        listFontSize: {
            fontSize: 20,
            width: 200
        }
    };
};

var DataSet = (_temp2 = _class = function (_Component) {
    _inherits(DataSet, _Component);

    function DataSet() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DataSet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataSet.__proto__ || Object.getPrototypeOf(DataSet)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            expanded: false,
            dataSet: [],
            uploadShow: false,
            databaseShow: false
        }, _this.handleToggle = function (index, e) {
            e.preventDefault();
            var ary = [].concat(_toConsumableArray(_this.state.dataSet));
            ary.splice(index, 1);
            //没有使用filter的原因是在之后的效果，如果匹配到了相同项的话怎么办
            _this.setState({ dataSet: ary });
        }, _this.handleLocalUpload = function () {
            _this.setState({ uploadShow: true });
        }, _this.ShutDownUpload = function () {
            _this.setState({ uploadShow: false });
        }, _this.handleDatabase = function () {
            _this.setState({ databaseShow: !_this.state.databaseShow });
        }, _this.setAddDatabase = function (ary) {
            var dataSet = _this.state.dataSet;
            _this.setState({ dataSet: [].concat(_toConsumableArray(dataSet), _toConsumableArray(ary)) });
        }, _this.LocalUpload = function () {
            return _this.state.uploadShow ? _react2.default.createElement(_Upload2.default, { change: _this.ShutDownUpload, LocalUpload: _API.LocalUpload, addData: _this.setAddDatabase }) : null;
        }, _this.showDatabase = function () {
            return _this.state.databaseShow ? _react2.default.createElement(_index2.default, { addData: _this.setAddDatabase, change: _this.handleDatabase }) : null;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DataSet, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var projectId = this.props.match.params.projectId;
            var dataSetId = this.props.match.params.dataSetId;
            (0, _API.getDataSet)({ id: 111111, projectId: projectId, dataSetId: dataSetId }).then(function (data) {
                _this2.setState({ dataSet: data });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var classes = this.props.classes;
            var dataSet = this.state.dataSet;

            var LocalUpload = this.LocalUpload();
            var showDatabase = this.showDatabase();
            return _react2.default.createElement(
                'div',
                { className: classes.root },
                LocalUpload,
                showDatabase,
                _react2.default.createElement(_Head2.default, null),
                _react2.default.createElement(
                    _Grid2.default,
                    { className: classes.contentBox },
                    _react2.default.createElement(_Grid2.default, { className: classes.headBackground }),
                    _react2.default.createElement(
                        _Grid2.default,
                        { className: classes.DateList },
                        _react2.default.createElement(
                            _Grid2.default,
                            { className: classes.addButtonBox },
                            _react2.default.createElement(
                                _Typography2.default,
                                { variant: 'h4', className: classes.dataTitle },
                                '\u6570\u636E\u5217\u8868'
                            ),
                            _react2.default.createElement(
                                _Grid2.default,
                                { className: classes.addButton },
                                _react2.default.createElement(
                                    _Button2.default,
                                    { variant: 'contained', className: classes.button, onClick: this.handleLocalUpload },
                                    _react2.default.createElement(_Add2.default, { className: classes.AddIcon }),
                                    _react2.default.createElement(
                                        _Typography2.default,
                                        { variant: 'button' },
                                        '\u672C\u5730\u6DFB\u52A0'
                                    )
                                ),
                                _react2.default.createElement(
                                    _Button2.default,
                                    { variant: 'contained', className: classes.button, onClick: this.handleDatabase },
                                    _react2.default.createElement(_Add2.default, { className: classes.AddIcon }),
                                    _react2.default.createElement(
                                        _Typography2.default,
                                        { variant: 'button' },
                                        '\u6570\u636E\u5E93\u6DFB\u52A0'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Grid2.default,
                            { className: classes.listBox },
                            _react2.default.createElement(
                                _Grid2.default,
                                { className: classes.dateListBox, container: true },
                                _react2.default.createElement(
                                    _List2.default,
                                    { className: classes.dateListBox1 },
                                    _react2.default.createElement(
                                        _ListItem2.default,
                                        { role: undefined, dense: true, button: true, spacing: 7, className: classes.listHeadBox },
                                        _react2.default.createElement(
                                            _Grid2.default,
                                            null,
                                            _react2.default.createElement(_Checkbox2.default, { xs: 1 })
                                        ),
                                        _react2.default.createElement(
                                            _Grid2.default,
                                            null,
                                            ' ',
                                            _react2.default.createElement(_ListItemText2.default, { xs: 1, primary: '\u540D\u79F0', className: classes.listHead })
                                        ),
                                        _react2.default.createElement(
                                            _Grid2.default,
                                            null,
                                            ' ',
                                            _react2.default.createElement(_ListItemText2.default, { xs: 2, primary: '\u521B\u5EFA\u65F6\u95F4',
                                                className: classes.listHead })
                                        ),
                                        _react2.default.createElement(
                                            _Grid2.default,
                                            null,
                                            ' ',
                                            _react2.default.createElement(_ListItemText2.default, { xs: 1, primary: '\u5220\u9664', className: classes.listHead, style: {
                                                    position: "absolute",
                                                    top: "16px",
                                                    right: 0
                                                } })
                                        )
                                    ),
                                    dataSet.map(function (item, index) {
                                        return _react2.default.createElement(
                                            _ListItem2.default,
                                            { key: index, role: undefined, dense: true, button: true
                                            },
                                            _react2.default.createElement(
                                                _Grid2.default,
                                                null,
                                                _react2.default.createElement(_Checkbox2.default, { xs: 1 })
                                            ),
                                            _react2.default.createElement(
                                                _Grid2.default,
                                                null,
                                                ' ',
                                                _react2.default.createElement(_ListItemText2.default, { xs: 1, primary: '' + item.name,
                                                    className: classes.listFontSize })
                                            ),
                                            _react2.default.createElement(
                                                _Grid2.default,
                                                null,
                                                ' ',
                                                _react2.default.createElement(_ListItemText2.default, { xs: 2, primary: '' + item.time,
                                                    className: classes.listFontSize })
                                            ),
                                            _react2.default.createElement(
                                                _Grid2.default,
                                                { onClick: function onClick(e) {
                                                        return _this3.handleToggle(index, e);
                                                    } },
                                                _react2.default.createElement(
                                                    _ListItemSecondaryAction2.default,
                                                    { xs: 1 },
                                                    _react2.default.createElement(
                                                        _IconButton2.default,
                                                        { 'aria-label': 'Comments' },
                                                        _react2.default.createElement(_Clear2.default, { className: classes.icon })
                                                    )
                                                )
                                            )
                                        );
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DataSet;
}(_react.Component), _class.propTypes = {
    prop: _propTypes2.default
}, _temp2);


DataSet.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _core.withStyles)(styles)(DataSet);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/Data/Datacard.js":
/*!*****************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/Data/Datacard.js ***!
  \*****************************************************************/
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

var _Card = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/CardHeader/index.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");

var _CardContent2 = _interopRequireDefault(_CardContent);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");

var _red2 = _interopRequireDefault(_red);

var _MoreVert = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");

var _MoreVert2 = _interopRequireDefault(_MoreVert);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
    return {
        root: {
            paddingTop: theme.spacing.unit * 2,
            paddingRight: theme.spacing.unit * 2,
            paddingLeft: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2
        },
        card: {
            //minWidth: 400,
            //paddingTop: theme.spacing.unit * 2 
        },
        media: {
            height: 0,
            paddingTop: '56.25%' // 16:9
        },
        actions: {
            display: 'flex'
        },
        expand: _defineProperty({
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest
            }),
            marginLeft: 'auto'
        }, theme.breakpoints.up('sm'), {
            marginRight: -8
        }),
        expandOpen: {
            transform: 'rotate(180deg)'
        },
        avatar: {
            backgroundColor: _red2.default[500]
        }
    };
};

var WfCard = (_temp2 = _class = function (_Component) {
    _inherits(WfCard, _Component);

    function WfCard() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WfCard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WfCard.__proto__ || Object.getPrototypeOf(WfCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            expanded: false
        }, _this.handleExpandClick = function () {
            _this.setState(function (state) {
                return {
                    expanded: !state.expanded
                };
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WfCard, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                data = _props.data,
                match = _props.match;

            console.log("数据集的数据");
            console.log(data);
            var path = '/pji/' + match.params.projectId + '/ds/' + data.dataSetId;
            return _react2.default.createElement(
                _Button2.default,
                { className: classes.root, component: _reactRouterDom.Link, to: path },
                _react2.default.createElement(
                    _Card2.default,
                    { className: classes.card },
                    _react2.default.createElement(_CardHeader2.default, {
                        title: _react2.default.createElement(
                            _Typography2.default,
                            { variant: 'h6' },
                            data.name
                        ),
                        action: _react2.default.createElement(
                            _IconButton2.default,
                            null,
                            _react2.default.createElement(_MoreVert2.default, null)
                        )
                    }),
                    _react2.default.createElement(
                        _CardContent2.default,
                        null,
                        _react2.default.createElement(
                            _Typography2.default,
                            { component: 'p', color: 'textSecondary' },
                            '\u4FEE\u6539\u65F6\u95F4\uFF1A ',
                            data.date
                        )
                    )
                )
            );
        }
    }]);

    return WfCard;
}(_react.Component), _class.propTypes = {
    prop: _propTypes2.default
}, _temp2);


WfCard.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _core.withStyles)(styles)(WfCard);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/Data/index.js":
/*!**************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/Data/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _Datacard = __webpack_require__(/*! ./Datacard */ "./src/container/ProjectItem/NavContainer/Data/Datacard.js");

var _Datacard2 = _interopRequireDefault(_Datacard);

var _PopupsAddSetData = __webpack_require__(/*! ./PopupsAddSetData */ "./src/container/ProjectItem/NavContainer/Data/PopupsAddSetData/index.js");

var _PopupsAddSetData2 = _interopRequireDefault(_PopupsAddSetData);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _index = __webpack_require__(/*! ../../../../store/index */ "./src/store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: _extends({}, theme.mixins.gutters(), {
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            display: 'flex',
            position: 'relative',
            flexWrap: 'wrap'
        }),
        add: {
            position: 'absolute',
            right: theme.spacing.unit * 2,
            top: theme.spacing.unit * 2,
            cursor: "pointer"
        }
    };
};

var Data = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(Data, _Component);

    function Data(props) {
        _classCallCheck(this, Data);

        var _this = _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).call(this));

        _this.state = {
            expanded: false,
            popupsShow: false,
            data: [] //数据的获取
        };

        _this.handleExpandClick = function () {
            _this.setState(function (state) {
                return {
                    expanded: !state.expanded
                };
            });
        };

        _this.addDataSet = function () {
            console.log("增加数据展示");
            _this.setState({
                popupsShow: !_this.state.popupsShow
            });
        };

        _this.setDataSet = function (data) {
            _this.setState({
                data: [].concat(_toConsumableArray(_this.state.data), [data])
            });
        };

        _this.store = props.store.DataList; //数据传递的时候
        _this.data = _this.store.data;
        return _this;
    }

    _createClass(Data, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var data = JSON.parse(sessionStorage.getItem('key'));
            this.setState({
                data: data.dataGather
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                match = _props.match;
            var _state = this.state,
                popupsShow = _state.popupsShow,
                data = _state.data;

            return _react2.default.createElement(
                _Paper2.default,
                { className: classes.root, elevation: 1 },
                popupsShow ? _react2.default.createElement(_PopupsAddSetData2.default, { shut: this.addDataSet, data: data, addData: this.setDataSet }) : null,
                _react2.default.createElement(
                    'div',
                    { className: classes.add, onClick: this.addDataSet },
                    _react2.default.createElement(
                        _Icon2.default,
                        { color: 'inherit', fontSize: 'large' },
                        'add_circle'
                    )
                ),
                data.map(function (item, index) {
                    return _react2.default.createElement(
                        'div',
                        { key: index },
                        _react2.default.createElement(_Datacard2.default, { data: item, match: match })
                    );
                })
            );
        }
    }]);

    return Data;
}(_react.Component)) || _class) || _class);


Data.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _core.withStyles)(styles)(Data);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/Member/DetailMember/index.js":
/*!*****************************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/Member/DetailMember/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Card = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");

var _Card2 = _interopRequireDefault(_Card);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _List = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");

var _List2 = _interopRequireDefault(_List);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");

var _Avatar2 = _interopRequireDefault(_Avatar);

var _API = __webpack_require__(/*! ../../../../../API/API */ "./src/API/API.js");

var _Head = __webpack_require__(/*! ../../../../../component/Head */ "./src/component/Head.js");

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
    var _dataPasswordInput;

    return {
        root: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            display: "flex",
            justifyContent: "content",
            backgroundColor: "#FFF"
        },
        personageRoot: {
            width: '100%',
            height: '87%',
            position: 'absolute',
            left: 0
        },
        search: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        personageHeader: {
            display: 'flex',
            width: '82%',
            height: '10%',
            position: 'absolute',
            top: 60,
            justifyContent: 'space-between',
            paddingLeft: 100
        },
        personageHeaderFont: {
            borderLeft: '8px solid #6d93cc',
            fontSize: 30,
            color: '#384149',
            padding: 0,
            paddingLeft: 20
        },
        personageHeaderImgBox: {
            display: 'flex',
            justifyContent: 'center'
        },
        personageHeaderImg: {
            position: 'absolute',
            width: 150,
            height: 150,
            borderRadius: '50%',
            zIndex: 1
        },

        messageBoxBig: {
            position: 'relative',
            top: 250,
            left: 0
        },
        messageBox: {
            display: 'flex'
        },
        dataBox: {
            width: '50%',
            height: '100%',
            paddingLeft: 150
        },
        dataInput: {
            width: '50%',
            height: '100%',
            paddingLeft: 150,
            borderLeft: '1px solid #5d6b79'
        },
        dataName: {
            display: 'flex',
            height: 120
        },
        dataNameFont: {
            fontSize: 26,
            color: '#5d6b79',
            width: 100
        },
        dataMailboxFont: {
            fontSize: 26,
            color: '#5d6b79',
            width: 300
        },
        dataEmail: {
            display: 'flex',
            height: 120
        },
        dataEmailFont: {
            fontSize: 26,
            color: '#5d6b79',
            width: 100
        },
        dataPassword: {
            display: 'flex'
        },
        dataPasswordFont: {
            fontSize: 26,
            color: '#5d6b79',
            width: 100
        },
        dataPasswordInput: (_dataPasswordInput = {
            paddingTop: theme.spacing.unit,
            paddingBottom: theme.spacing.unit,
            paddingLeft: theme.spacing.unit * 5,
            transition: theme.transitions.create('width'),
            width: '100%'
        }, _defineProperty(_dataPasswordInput, theme.breakpoints.up('sm'), {
            width: 230,
            '&:focus': {
                width: 230
            }
        }), _defineProperty(_dataPasswordInput, 'border', '1px solid'), _defineProperty(_dataPasswordInput, 'height', 40), _defineProperty(_dataPasswordInput, 'borderRadius', 4), _dataPasswordInput),
        dataPasswordButton: {
            fontSize: 18,
            color: '#6d93cc',
            marginLeft: 30
        },
        schoolInput: {
            display: 'flex',
            height: 120
        },
        schoolFont: {
            fontSize: 26,
            color: '#5d6b79',
            width: 210,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        },
        departmentFont: {
            fontSize: 26,
            color: '#5d6b79',
            width: 300,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        }
    };
};

var DetailMember = function (_React$Component) {
    _inherits(DetailMember, _React$Component);

    function DetailMember(props) {
        _classCallCheck(this, DetailMember);

        var _this = _possibleConstructorReturn(this, (DetailMember.__proto__ || Object.getPrototypeOf(DetailMember)).call(this, props));

        _this.state = {
            wholeList: []
        };
        return _this;
    }

    _createClass(DetailMember, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            (0, _API.getUserSynopsis)({ userId: this.props.match.params.memberId }).then(function (data) {
                _this2.setState({
                    wholeList: data
                });
            });
        }
        //

    }, {
        key: 'render',
        value: function render() {
            var classes = this.props.classes;
            var wholeList = this.state.wholeList;

            var Member = _react2.default.createElement(
                'div',
                { className: classes.personageRoot },
                _react2.default.createElement(_Head2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: classes.personageHeaderImgBox },
                    _react2.default.createElement(_Avatar2.default, { className: classes.personageHeaderImg,
                        src: wholeList.img })
                ),
                _react2.default.createElement(
                    _Card2.default,
                    { className: classes.personageRoot },
                    _react2.default.createElement(
                        _List2.default,
                        { className: classes.personageHeader },
                        _react2.default.createElement(_ListItemText2.default, { primary: '个人资料', style: { flex: 'initial' },
                            classes: { primary: classes.personageHeaderFont } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: classes.messageBoxBig },
                        _react2.default.createElement(
                            'div',
                            { className: classes.messageBox },
                            _react2.default.createElement(
                                _List2.default,
                                { className: classes.dataBox },
                                _react2.default.createElement(
                                    'div',
                                    { className: classes.dataName },
                                    _react2.default.createElement(_ListItemText2.default, { primary: '姓名', style: { flex: 'none', padding: 0 },
                                        classes: { primary: classes.dataNameFont } }),
                                    _react2.default.createElement(_ListItemText2.default, { primary: wholeList.name,
                                        style: { flex: 'none', padding: 0 },
                                        classes: { primary: classes.dataMailboxFont } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: classes.dataEmail },
                                    _react2.default.createElement(_ListItemText2.default, { primary: "邮箱", style: { flex: 'none', padding: 0 },
                                        classes: { primary: classes.dataEmailFont } }),
                                    _react2.default.createElement(_ListItemText2.default, { primary: wholeList.mailbox,
                                        style: { flex: 'none', padding: 0 },
                                        classes: { primary: classes.dataEmailFont } })
                                )
                            ),
                            _react2.default.createElement(
                                _List2.default,
                                { className: classes.dataInput },
                                _react2.default.createElement(
                                    'div',
                                    { className: classes.schoolInput },
                                    _react2.default.createElement(_ListItemText2.default, { primary: '学校/机构', style: {
                                            flex: 'none',
                                            padding: 0,
                                            display: 'flex'
                                        },
                                        classes: { primary: classes.schoolFont } }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: classes.search,
                                            style: { flex: 'none', padding: 0, alignItems: 'baseline' } },
                                        _react2.default.createElement(
                                            _Grid2.default,
                                            { className: classes.search },
                                            _react2.default.createElement(_ListItemText2.default, { primary: wholeList.organization,
                                                classes: { primary: classes.departmentFont } })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: classes.schoolInput },
                                    _react2.default.createElement(_ListItemText2.default, { primary: '学院/部门', style: {
                                            flex: 'none',
                                            padding: 0,
                                            display: 'flex'
                                        },
                                        classes: { primary: classes.schoolFont } }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: classes.search,
                                            style: { flex: 'none', padding: 0, alignItems: 'baseline' } },
                                        _react2.default.createElement(
                                            _Grid2.default,
                                            { className: classes.search },
                                            _react2.default.createElement(_ListItemText2.default, { primary: wholeList.department,
                                                classes: { primary: classes.departmentFont } })
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
            return _react2.default.createElement(
                'div',
                { className: classes.root },
                Member
            );
        }
    }]);

    return DetailMember;
}(_react2.default.Component);

DetailMember.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(DetailMember);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/Member/MemberCard.js":
/*!*********************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/Member/MemberCard.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Card = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/CardHeader/index.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");

var _CardContent2 = _interopRequireDefault(_CardContent);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");

var _red2 = _interopRequireDefault(_red);

var _MoreVert = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");

var _MoreVert2 = _interopRequireDefault(_MoreVert);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _ImageAvatars = __webpack_require__(/*! ../../../ProjectLits/ProjectCard/ImageAvatars */ "./src/container/ProjectLits/ProjectCard/ImageAvatars.js");

var _ImageAvatars2 = _interopRequireDefault(_ImageAvatars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
    return {
        root: {
            paddingTop: theme.spacing.unit * 2,
            paddingRight: theme.spacing.unit * 2,
            paddingLeft: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2
        },
        card: {
            maxWidth: 300
            //paddingTop: theme.spacing.unit * 2 
        },
        media: {
            height: 0,
            paddingTop: '56.25%' // 16:9
        },
        actions: {
            display: 'flex'
        },
        expand: _defineProperty({
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest
            }),
            marginLeft: 'auto'
        }, theme.breakpoints.up('sm'), {
            marginRight: -8
        }),
        expandOpen: {
            transform: 'rotate(180deg)'
        },
        avatar: {
            backgroundColor: _red2.default[500]
        },
        memtag: {
            display: 'flex',
            alignItems: 'center'
        },
        memtagColor: {
            display: 'inline-block',
            width: 15,
            height: 15,
            borderRadius: 5,
            backgroundColor: theme.palette.error.main,
            marginRight: 40
        },
        memberColor: {
            display: 'inline-block',
            width: 15,
            height: 15,
            borderRadius: 5,
            backgroundColor: "#00FF00",
            marginRight: 40
        }
    };
};

var WfCard = (_temp = _class = function (_Component) {
    _inherits(WfCard, _Component);

    function WfCard() {
        _classCallCheck(this, WfCard);

        return _possibleConstructorReturn(this, (WfCard.__proto__ || Object.getPrototypeOf(WfCard)).apply(this, arguments));
    }

    _createClass(WfCard, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                data = _props.data,
                match = _props.match;

            var color = data.rank !== "成员" ? _react2.default.createElement('span', { className: classes.memtagColor }) : _react2.default.createElement('span', { className: classes.memberColor });
            console.log("成员数");
            console.log(match);
            var path = '/pji/' + match.params.projectId + '/dm/' + data.memberId;
            return _react2.default.createElement(
                _Button2.default,
                { className: classes.root, component: _reactRouterDom.Link, to: path },
                _react2.default.createElement(
                    _Card2.default,
                    { className: classes.card },
                    _react2.default.createElement(_CardHeader2.default, {
                        title: _react2.default.createElement(
                            _Typography2.default,
                            { variant: 'h6' },
                            data.name
                        ),
                        avatar: _react2.default.createElement(_ImageAvatars2.default, { img: data.img }),
                        action: _react2.default.createElement(
                            _IconButton2.default,
                            null,
                            _react2.default.createElement(_MoreVert2.default, null)
                        ),
                        subheader: _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _Typography2.default,
                                { component: 'p', color: 'textSecondary' },
                                data.mailbox
                            )
                        )
                    }),
                    _react2.default.createElement(
                        _CardContent2.default,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: classes.memtag },
                            color,
                            data.rank
                        )
                    )
                )
            );
        }
    }]);

    return WfCard;
}(_react.Component), _class.propTypes = {
    prop: _propTypes2.default
}, _temp);


WfCard.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _core.withStyles)(styles)(WfCard);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/Member/index.js":
/*!****************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/Member/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _MemberCard = __webpack_require__(/*! ./MemberCard */ "./src/container/ProjectItem/NavContainer/Member/MemberCard.js");

var _MemberCard2 = _interopRequireDefault(_MemberCard);

var _index = __webpack_require__(/*! mobx-react/index */ "./node_modules/mobx-react/index.js");

var _AddMember = __webpack_require__(/*! ./AddMember */ "./src/container/ProjectItem/NavContainer/Member/AddMember/index.js");

var _AddMember2 = _interopRequireDefault(_AddMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: _extends({}, theme.mixins.gutters(), {
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            display: 'flex',
            position: 'relative',
            flexWrap: 'wrap'
        }),
        add: {
            position: 'absolute',
            right: theme.spacing.unit * 2,
            top: theme.spacing.unit * 2
        }
    };
};

var Member = (_dec = (0, _index.inject)('store'), _dec(_class = (0, _index.observer)(_class = function (_Component) {
    _inherits(Member, _Component);

    function Member(props) {
        _classCallCheck(this, Member);

        var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this));

        _this.state = {
            expanded: false,
            data: [], //数据
            showBox: false
        };

        _this.addMember = function (data) {
            _this.setState({ showBox: !_this.state.showBox, data: [].concat(_toConsumableArray(_this.state.data), [data]) });
        };

        _this.ShutMemberBox = function () {
            _this.setState({ showBox: !_this.state.showBox });
        };

        _this.store = props.store.DataList; //数据传递的时候
        _this.data = _this.store.data;
        return _this;
    }
    /*  static propTypes = {
          prop: PropTypes
      }*/


    _createClass(Member, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var data = JSON.parse(sessionStorage.getItem('key'));
            this.setState({
                data: data.member
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                match = _props.match;
            var _state = this.state,
                data = _state.data,
                showBox = _state.showBox;

            var box = showBox ? _react2.default.createElement(_AddMember2.default, { shut: this.ShutMemberBox, add: this.addMember }) : null;
            return _react2.default.createElement(
                _Paper2.default,
                { className: classes.root, elevation: 1 },
                box,
                _react2.default.createElement(
                    'div',
                    { className: classes.add, onClick: this.ShutMemberBox },
                    _react2.default.createElement(
                        _Icon2.default,
                        { color: 'inherit', fontSize: 'large' },
                        'add_circle'
                    )
                ),
                data.map(function (item, index) {
                    return _react2.default.createElement(_MemberCard2.default, { key: index, data: item, match: match });
                })
            );
        }
    }]);

    return Member;
}(_react.Component)) || _class) || _class);

/*
Member.propTypes = {
    classes:PropTypes.object.isRequired,
}
*/

exports.default = (0, _core.withStyles)(styles)(Member);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/WorkFlow/WfCard.js":
/*!*******************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/WorkFlow/WfCard.js ***!
  \*******************************************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Card = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/CardHeader/index.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");

var _red2 = _interopRequireDefault(_red);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _index = __webpack_require__(/*! mobx-react/index */ "./node_modules/mobx-react/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
    return {
        root: {
            paddingTop: theme.spacing.unit * 2,
            paddingRight: theme.spacing.unit * 2,
            paddingLeft: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2
        },
        card: {
            width: 250
            //paddingTop: theme.spacing.unit * 2 
        },
        media: {
            height: 0,
            paddingTop: '56.25%' // 16:9
        },
        actions: {
            display: 'flex'
        },
        expand: _defineProperty({
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest
            }),
            marginLeft: 'auto'
        }, theme.breakpoints.up('sm'), {
            marginRight: -8
        }),
        expandOpen: {
            transform: 'rotate(180deg)'
        },
        avatar: {
            backgroundColor: _red2.default[500]
        }
    };
};

var WfCard = (_dec = (0, _index.inject)('store'), _dec(_class = (0, _index.observer)(_class = function (_Component) {
    _inherits(WfCard, _Component);

    function WfCard(props) {
        _classCallCheck(this, WfCard);

        var _this = _possibleConstructorReturn(this, (WfCard.__proto__ || Object.getPrototypeOf(WfCard)).call(this));

        _this.state = {
            expanded: false,
            data: [],
            showData: {},
            prevId: null,
            externalData: true
        };

        _this.store = props.store.DataList; //数据传递的时候
        return _this;
    }

    /* componentDidMount(){
         let {data}=this.props;
         this.setState({data:data},()=>{
             console.log("数据展示效果")
             console.log(data)
         })
     }*/

    /*  static propTypes = {
          prop: PropTypes
      };*/


    _createClass(WfCard, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                data = _props.data,
                match = _props.match;

            var newLove = JSON.parse(sessionStorage.getItem('projectId'));
            // let path = "/wb";//
            //let path = `/pji/${newLove}/wb/${item.workflowId}`;
            return (/*在mobx 里面请求的数据*/
                _react2.default.createElement(
                    'div',
                    null,
                    data.map(function (item, index) {
                        return _react2.default.createElement(
                            _Button2.default,
                            { className: classes.root, key: index, component: _reactRouterDom.Link,
                                to: '/pji/' + newLove + '/wb/' + item.workflowId },
                            _react2.default.createElement(
                                _Card2.default,
                                { className: classes.card },
                                _react2.default.createElement(_CardHeader2.default, {
                                    title: _react2.default.createElement(
                                        _Typography2.default,
                                        { variant: 'h6' },
                                        item.name
                                    ),
                                    subheader: _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            _Typography2.default,
                                            { component: 'p', color: 'textSecondary' },
                                            '\u4FEE\u6539\u65F6\u95F4\uFF1A',
                                            item.time
                                        ),
                                        _react2.default.createElement(
                                            _Typography2.default,
                                            { component: 'p', color: 'textSecondary' },
                                            '\u7C7B\u522B\uFF1A',
                                            item.category
                                        )
                                    )
                                }),
                                _react2.default.createElement(_CardMedia2.default, {
                                    className: classes.media,
                                    image: item.img,
                                    title: 'Paella dish'
                                }),
                                _react2.default.createElement(
                                    _CardContent2.default,
                                    null,
                                    _react2.default.createElement(
                                        _Typography2.default,
                                        { component: 'p' },
                                        item.describe
                                    )
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return WfCard;
}(_react.Component)) || _class) || _class);


WfCard.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _core.withStyles)(styles)(WfCard);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/WorkFlow/index.js":
/*!******************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/WorkFlow/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//import Input from '@material-ui/core/Input';
//import MenuItem from '@material-ui/core/MenuItem';


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _Input = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");

var _Input2 = _interopRequireDefault(_Input);

var _TextField = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");

var _TextField2 = _interopRequireDefault(_TextField);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _WfCard = __webpack_require__(/*! ./WfCard */ "./src/container/ProjectItem/NavContainer/WorkFlow/WfCard.js");

var _WfCard2 = _interopRequireDefault(_WfCard);

var _Modal = __webpack_require__(/*! ../../../../component/Modal */ "./src/component/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _InputLabel = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _API = __webpack_require__(/*! ../../../../API/API */ "./src/API/API.js");

var _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Select = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");

var _Select2 = _interopRequireDefault(_Select);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function taskShow(ary) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    ary.forEach(function (item) {
        if (value === item) {
            value++;
        } else {
            return value;
        }
    });
    return value;
}

var styles = function styles(theme) {
    return {
        root: _extends({}, theme.mixins.gutters(), {
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            display: 'flex',
            position: 'relative',
            flexWrap: 'wrap'
        }),
        add: {
            position: 'absolute',
            right: theme.spacing.unit * 2,
            top: theme.spacing.unit * 2
        },
        addCircleIconHover: {
            color: theme.palette.primary.light,
            margin: theme.spacing.unit * 2,
            '&:hover': {
                color: theme.palette.primary.dark
            }
        },
        input: {
            height: 100
        },
        modaleContainer: {
            display: 'flex',
            flexDirection: 'column'
        },
        button: {
            width: 100,
            margin: theme.spacing.unit * 2,
            alignSelf: 'center'
        }
    };
};

//将数据的效果存在 mobx 里面
var WorkFlow = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(WorkFlow, _Component);

    function WorkFlow(props) {
        _classCallCheck(this, WorkFlow);

        var _this = _possibleConstructorReturn(this, (WorkFlow.__proto__ || Object.getPrototypeOf(WorkFlow)).call(this, props));

        _this.state = {
            weightRange: '',
            name: "",
            describe: "",
            data: []

            //在于返回的时候数据不存在。没有往数据里面存东西
        };

        _this.onChangeName = function (e) {
            _this.setState({ name: e.target.value });
        };

        _this.onChangeDescribe = function (e) {
            _this.setState({ describe: e.target.value });
        };

        _this.handleModal = function () {
            _this.setModalState(true);
        };

        _this.handleChange = function (e) {
            _this.setState({ weightRange: e.target.value });
        };

        _this.addWorkFlowList = function () {
            var date = new Date();
            var dateAry = date.toString().split(' ');
            var month = 1;
            switch (dateAry[1]) {
                case "Jan":
                    month = 1;
                    break;
                case "Feb":
                    month = 2;
                    break;
                case "Mar":
                    month = 3;
                    break;
                case "Apr":
                    month = 4;
                    break;
                case "May":
                    month = 5;
                    break;
                case "June":
                    month = 6;
                    break;
                case "July":
                    month = 7;
                    break;
                case "Aug":
                    month = 8;
                    break;
                case "Sept":
                    month = 9;
                    break;
                case "Oct":
                    month = 10;
                    break;
                case "Nov":
                    month = 11;
                    break;
                case "Dec":
                    month = 12;
                    break;
            }
            date = dateAry[3] + '/' + month + '/' + dateAry[2];
            var _this$state = _this.state,
                name = _this$state.name,
                weightRange = _this$state.weightRange,
                describe = _this$state.describe,
                data = _this$state.data;

            console.log("state 数据状态展示");
            console.log(data);

            var dataSetAry = [];
            data.forEach(function (item, index) {
                dataSetAry.push(item.workflowId);
            });
            var workflowId = taskShow(dataSetAry); //

            console.log(workflowId);
            if (name !== "" && weightRange !== "" && describe !== "") {
                //  计算数据id
                //　img的值是统一的【加一个上传功能】
                var Ary = {
                    category: weightRange,
                    time: date,
                    describe: describe,
                    img: "./static/images/cards/contemplative-reptile.jpg",
                    name: name,
                    workflowId: workflowId
                };
                (0, _API.addworkflow)(Ary).then(function (data) {
                    if (data === 1) {
                        _this.setModalState(false); //在这里跟新过后
                        _this.setState({
                            data: [].concat(_toConsumableArray(_this.state.data), [Ary]),
                            weightRange: '',
                            name: "",
                            describe: ""
                        });
                    } else {
                        alert("工作流保存失败");
                    }
                });
                //  需要一个增加后台的接口,请求成功之后。改变
            } else {
                alert("输入值不能为空");
            }
        };

        _this.store = props.store.publicStore;
        _this.setModalState = _this.store.setModalState;
        _this.DataList = props.store.DataList; //数据传递的时候
        return _this;
    }

    _createClass(WorkFlow, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var data = JSON.parse(sessionStorage.getItem('key'));
            this.setState({
                data: data.workflow
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                match = _props.match;
            var data = this.state.data;

            return _react2.default.createElement(
                _Paper2.default,
                { className: classes.root, elevation: 1 },
                _react2.default.createElement(
                    'div',
                    { className: classes.add },
                    _react2.default.createElement(
                        _Icon2.default,
                        {
                            color: 'inherit',
                            fontSize: 'large',
                            className: classes.addCircleIconHover,
                            onClick: this.handleModal
                        },
                        'add_circle'
                    )
                ),
                _react2.default.createElement(_WfCard2.default, { data: data, match: match }),
                _react2.default.createElement(
                    _Modal2.default,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: classes.modaleContainer },
                        _react2.default.createElement(
                            _Typography2.default,
                            { variant: 'h6', color: 'primary', align: 'left' },
                            '\u521B\u5EFA\u5DE5\u4F5C\u6D41'
                        ),
                        _react2.default.createElement(_Input2.default, { placeholder: '\u5DE5\u4F5C\u6D41\u540D\u79F0', inputProps: { 'aria-label': 'Description' }, onChange: function onChange(e) {
                                _this2.onChangeName(e);
                            } }),
                        _react2.default.createElement(
                            _Select2.default,
                            {
                                value: this.state.weightRange,
                                onChange: this.handleChange,
                                input: _react2.default.createElement(_Input2.default, { id: 'age-simple' })
                            },
                            _react2.default.createElement(
                                _MenuItem2.default,
                                { value: '' },
                                _react2.default.createElement(
                                    'em',
                                    null,
                                    'None'
                                )
                            ),
                            _react2.default.createElement(
                                _MenuItem2.default,
                                { value: "生物信息学科" },
                                '\u751F\u7269\u4FE1\u606F\u5B66\u79D1'
                            ),
                            _react2.default.createElement(
                                _MenuItem2.default,
                                { value: "计算机科学类" },
                                '\u8BA1\u7B97\u673A\u79D1\u5B66\u7C7B'
                            ),
                            _react2.default.createElement(
                                _MenuItem2.default,
                                { value: "物理" },
                                '\u7269\u7406'
                            )
                        ),
                        _react2.default.createElement('input', { type: 'text', value: this.state.describe, className: classes.input, maxLength: '300',
                            onChange: function onChange(e) {
                                _this2.onChangeDescribe(e);
                            } }),
                        _react2.default.createElement(
                            _Button2.default,
                            { variant: 'contained', color: 'primary', className: classes.button,
                                onClick: this.addWorkFlowList },
                            '\u786E\u5B9A'
                        )
                    )
                )
            );
        }
    }]);

    return WorkFlow;
}(_react.Component)) || _class) || _class);


WorkFlow.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _core.withStyles)(styles)(WorkFlow);

/***/ }),

/***/ "./src/container/ProjectItem/NavContainer/index.js":
/*!*********************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _WorkFlow = __webpack_require__(/*! ./WorkFlow */ "./src/container/ProjectItem/NavContainer/WorkFlow/index.js");

var _WorkFlow2 = _interopRequireDefault(_WorkFlow);

var _Data = __webpack_require__(/*! ./Data */ "./src/container/ProjectItem/NavContainer/Data/index.js");

var _Data2 = _interopRequireDefault(_Data);

var _DataSet = __webpack_require__(/*! ./Data/DataSet */ "./src/container/ProjectItem/NavContainer/Data/DataSet.js");

var _DataSet2 = _interopRequireDefault(_DataSet);

var _ComputeCardPage = __webpack_require__(/*! ./Compute/ComputeCardPage */ "./src/container/ProjectItem/NavContainer/Compute/ComputeCardPage.js");

var _ComputeCardPage2 = _interopRequireDefault(_ComputeCardPage);

var _Compute = __webpack_require__(/*! ./Compute */ "./src/container/ProjectItem/NavContainer/Compute/index.js");

var _Compute2 = _interopRequireDefault(_Compute);

var _index = __webpack_require__(/*! ./Member/index */ "./src/container/ProjectItem/NavContainer/Member/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./Member/DetailMember/index */ "./src/container/ProjectItem/NavContainer/Member/DetailMember/index.js");

var _index4 = _interopRequireDefault(_index3);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Workbench = __webpack_require__(/*! ../../Workbench */ "./src/container/Workbench/index.js");

var _Workbench2 = _interopRequireDefault(_Workbench);

var _index5 = __webpack_require__(/*! mobx-react/index */ "./node_modules/mobx-react/index.js");

var _ProjectLits = __webpack_require__(/*! ../../ProjectLits */ "./src/container/ProjectLits/index.js");

var _ProjectLits2 = _interopRequireDefault(_ProjectLits);

var _PrivateRoute = __webpack_require__(/*! ../../../component/PrivateRoute */ "./src/component/PrivateRoute.js");

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: _extends({}, theme.mixins.gutters(), {
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            display: 'flex',
            position: 'relative',
            flexWrap: 'wrap'
        }),
        add: {
            position: 'absolute',
            right: theme.spacing.unit * 2,
            top: theme.spacing.unit * 2
        }
    };
};

var NavContainer = (_dec = (0, _index5.inject)('store'), _dec(_class = (0, _index5.observer)(_class = (_temp = _class2 = function (_Component) {
    _inherits(NavContainer, _Component);

    function NavContainer(props) {
        _classCallCheck(this, NavContainer);

        var _this = _possibleConstructorReturn(this, (NavContainer.__proto__ || Object.getPrototypeOf(NavContainer)).call(this));

        _this.state = {
            expanded: false
        };

        _this.handleExpandClick = function () {
            _this.setState(function (state) {
                return {
                    expanded: !state.expanded
                };
            });
        };

        _this.authenticated = props.store.authenticated;
        return _this;
    }

    _createClass(NavContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var match = this.props.match;

            sessionStorage.removeItem('projectId');
            var projectId = JSON.stringify(match.params.projectId);
            sessionStorage.setItem('projectId', projectId);
        }
    }, {
        key: 'render',

        //
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                match = _props.match;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PrivateRoute2.default, { path: '/pjl', component: _ProjectLits2.default, authenticated: this.authenticated }),
                _react2.default.createElement(_PrivateRoute2.default, { path: match.path + '/wb/:workflowId', component: _Workbench2.default, authenticated: this.authenticated }),
                _react2.default.createElement(_PrivateRoute2.default, { path: match.path + '/ds/:dataSetId', component: _DataSet2.default, authenticated: this.authenticated }),
                _react2.default.createElement(_PrivateRoute2.default, { path: match.path + '/ccp/:calculateId', component: _ComputeCardPage2.default, authenticated: this.authenticated }),
                _react2.default.createElement(_PrivateRoute2.default, { path: match.path + '/dm/:memberId', component: _index4.default, authenticated: this.authenticated }),
                _react2.default.createElement(_PrivateRoute2.default, { path: match.path + '/wf', component: _WorkFlow2.default, authenticated: this.authenticated }),
                _react2.default.createElement(_PrivateRoute2.default, { path: match.path + '/dt', component: _Data2.default, authenticated: this.authenticated }),
                _react2.default.createElement(_PrivateRoute2.default, { path: match.path + '/com', component: _Compute2.default, authenticated: this.authenticated }),
                _react2.default.createElement(_PrivateRoute2.default, { path: match.path + '/mem', component: _index2.default, authenticated: this.authenticated }),
                _react2.default.createElement(_PrivateRoute2.default, { authenticated: this.authenticated,
                    exact: true,
                    path: match.path,
                    render: function render() {
                        return _react2.default.createElement(_WorkFlow2.default, null);
                    }
                })
            );
        }
    }]);

    return NavContainer;
}(_react.Component), _class2.propTypes = {
    prop: _propTypes2.default
}, _temp)) || _class) || _class);


NavContainer.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _core.withStyles)(styles)(NavContainer);

/***/ }),

/***/ "./src/container/ProjectItem/index.js":
/*!********************************************!*\
  !*** ./src/container/ProjectItem/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Head = __webpack_require__(/*! ../../component/Head */ "./src/component/Head.js");

var _Head2 = _interopRequireDefault(_Head);

var _BasicStateBar = __webpack_require__(/*! ./BasicStateBar */ "./src/container/ProjectItem/BasicStateBar/index.js");

var _BasicStateBar2 = _interopRequireDefault(_BasicStateBar);

var _NavBar = __webpack_require__(/*! ./NavBar */ "./src/container/ProjectItem/NavBar/index.js");

var _NavBar2 = _interopRequireDefault(_NavBar);

var _NavContainer = __webpack_require__(/*! ./NavContainer */ "./src/container/ProjectItem/NavContainer/index.js");

var _NavContainer2 = _interopRequireDefault(_NavContainer);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _API = __webpack_require__(/*! ../../API/API */ "./src/API/API.js");

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: {
            backgroundColor: theme.palette.grey[200]
        }
    };
};

var ProjectItem = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
    _inherits(ProjectItem, _Component);

    function ProjectItem(props) {
        _classCallCheck(this, ProjectItem);

        var _this = _possibleConstructorReturn(this, (ProjectItem.__proto__ || Object.getPrototypeOf(ProjectItem)).call(this));

        _this.store = props.store.DataList; //数据传递的时候
        _this.data = _this.store.data;
        return _this;
    }

    _createClass(ProjectItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            sessionStorage.removeItem('key');
            console.log(this.props.match.params.project);
            console.log("主页面数据");
            (0, _API.getProjectData)({ userId: 111111, projectId: this.props.match.params.project }).then(function (data) {
                var value = JSON.stringify(data);
                sessionStorage.setItem('key', value);
                _this2.store.handleSetData(data);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //
            var _props = this.props,
                match = _props.match,
                classes = _props.classes;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Head2.default, null),
                _react2.default.createElement(_BasicStateBar2.default, null),
                _react2.default.createElement(
                    _Grid2.default,
                    { container: true, className: classes.root },
                    _react2.default.createElement(_Grid2.default, { item: true, xs: 1 }),
                    _react2.default.createElement(
                        _Grid2.default,
                        { item: true, xs: 10 },
                        _react2.default.createElement(_NavBar2.default, { match: match }),
                        _react2.default.createElement(_NavContainer2.default, { match: match })
                    ),
                    _react2.default.createElement(_Grid2.default, { item: true, xs: 1 })
                )
            );
        }
    }]);

    return ProjectItem;
}(_react.Component), _class2.propTypes = {
    classes: _propTypes2.default.object.isRequired
}, _temp)) || _class) || _class);
exports.default = (0, _core.withStyles)(styles)(ProjectItem);

/***/ }),

/***/ "./src/container/ProjectLits/ProjectCard/ProjectCard.js":
/*!**************************************************************!*\
  !*** ./src/container/ProjectLits/ProjectCard/ProjectCard.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Card = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardActionArea = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/index.js");

var _CardActionArea2 = _interopRequireDefault(_CardActionArea);

var _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _List = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _ImageAvatars = __webpack_require__(/*! ./ImageAvatars */ "./src/container/ProjectLits/ProjectCard/ImageAvatars.js");

var _ImageAvatars2 = _interopRequireDefault(_ImageAvatars);

var _EditOutlined = __webpack_require__(/*! @material-ui/icons/EditOutlined */ "./node_modules/@material-ui/icons/EditOutlined.js");

var _EditOutlined2 = _interopRequireDefault(_EditOutlined);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    return {
        root: {

            paddingTop: theme.spacing.unit * 2,
            paddingRight: theme.spacing.unit * 2,
            paddingLeft: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2
        },
        card: {
            maxWidth: 250,
            position: 'relative'
        },
        media: {
            // ⚠️ object-fit is not supported by IE 11.
            objectFit: 'cover'
        },
        editBtn: {
            position: 'absolute',
            right: theme.spacing.unit * 2,
            top: theme.spacing.unit * 2,
            backgroundColor: theme.palette.common.white,
            width: 40,
            height: 40,
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '&:hover': {
                backgroundColor: "#58D68D"
            }
        }
    };
};

function ProjectCard(props) {
    var classes = props.classes;
    var obj = props.obj;

    var path = '/pji/' + obj.project;
    return _react2.default.createElement(
        _Button2.default,
        { className: classes.root, component: _reactRouterDom.Link, to: path },
        _react2.default.createElement(
            _Card2.default,
            { className: classes.card },
            _react2.default.createElement(
                _CardActionArea2.default,
                null,
                _react2.default.createElement(_CardMedia2.default, {
                    component: 'img',
                    alt: 'Contemplative Reptile',
                    className: classes.media,
                    height: '140',
                    image: obj.bg,
                    title: 'Contemplative Reptile'
                }),
                _react2.default.createElement(
                    _Card2.default,
                    { className: classes.editBtn, 'aria-label': 'Edit' },
                    _react2.default.createElement(_EditOutlined2.default, null)
                )
            ),
            _react2.default.createElement(
                _CardActions2.default,
                null,
                _react2.default.createElement(
                    _List2.default,
                    { dense: true },
                    _react2.default.createElement(
                        _ListItem2.default,
                        { disableGutters: true },
                        _react2.default.createElement(_ImageAvatars2.default, { img: obj.bg }),
                        _react2.default.createElement(_ListItemText2.default, { primary: obj.title })
                    )
                )
            )
        )
    );
}

ProjectCard.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ProjectCard);

/***/ }),

/***/ "./src/container/Workbench/WorkSpace/css.js":
/*!**************************************************!*\
  !*** ./src/container/Workbench/WorkSpace/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var styles = exports.styles = function styles(theme) {
    return {
        content: {
            flexGrow: 1,
            //padding: theme.spacing.unit * 3,
            paddingLeft: 250,
            height: '90vh',
            position: 'relative'
        },
        toolbar: { height: 48 },
        tool: {
            position: 'absolute',
            right: 10,
            bottom: 10,
            width: 320,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
        },
        WidgeBox: {
            width: "100%",
            height: "100%"

        },
        ul: {
            position: 'absolute',
            left: 0,
            top: 7,
            listStyle: 'none',
            width: 296,
            height: 48,
            '& li': {
                float: 'left'
            }
        },
        largDiv: {
            position: 'absolute',
            right: 0,
            width: 59,
            background: 'white'
        },
        button: {
            marginRight: theme.spacing.unit * 2

        }
    };
};

/***/ }),

/***/ "./src/container/Workbench/WorkSpace/index.js":
/*!****************************************************!*\
  !*** ./src/container/Workbench/WorkSpace/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Canvas = __webpack_require__(/*! ../../../Canvas */ "./src/Canvas/index.js");

var _Fab = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");

var _Fab2 = _interopRequireDefault(_Fab);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Save = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");

var _Save2 = _interopRequireDefault(_Save);

var _Refresh = __webpack_require__(/*! @material-ui/icons/Refresh */ "./node_modules/@material-ui/icons/Refresh.js");

var _Refresh2 = _interopRequireDefault(_Refresh);

var _Edit = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _PlayArrow = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "./node_modules/@material-ui/icons/PlayArrow.js");

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _Close = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");

var _Close2 = _interopRequireDefault(_Close);

var _css = __webpack_require__(/*! ./css */ "./src/container/Workbench/WorkSpace/css.js");

var _API = __webpack_require__(/*! ../../../API/API */ "./src/API/API.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorSpace = function (_Component) {
    _inherits(WorSpace, _Component);

    function WorSpace(props) {
        _classCallCheck(this, WorSpace);

        var _this = _possibleConstructorReturn(this, (WorSpace.__proto__ || Object.getPrototypeOf(WorSpace)).call(this, props));

        _this.state = {
            container: {}, //数据容器池，
            hiddenButton: false
        };

        _this.displayButton = function () {
            if (!window.RAF) {
                window.RAF = function () {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
                }();
            }
            console.log(_this.state.hiddenButton);

            _this.setState({ hiddenButton: !_this.state.hiddenButton }, function () {
                var totle = 0;
                _this.state.hiddenButton ? totle = 0 : totle = 290;
                var animation = function animation() {
                    if (_this.state.hiddenButton) {
                        totle += 10;
                    } else {
                        totle -= 10;
                    }
                    _this.oUl.current.style.left = totle + 'px';
                    if (totle >= 290 || totle <= 0) return;
                    RAF(animation);
                };
                RAF(animation);
            });
            _this.oUl.current.style.left += 1;
        };

        _this.dropEvent = function (event) {
            var data = JSON.parse(event.dataTransfer.getData("storm-diagram-node"));
            _this.drawNode(data, event);
            //这里就是数据的节点，这里就是this的问题，现在需要的是数据的节点,当前节点的this必须要通过点击
            //在整个拖拽过程中。是没有在节点里面生成。所以在拖拽的时候
            //事件的每一次执行的方案事件
        };

        _this.drawNode = function (data, pt) {
            var cavLeft = pt.target.getBoundingClientRect().left;
            var cavTop = pt.target.getBoundingClientRect().top;
            //console.log(cavans.getOffsetX());
            var x = pt.clientX - cavLeft;
            var y = pt.clientY - cavTop;
            var circle = new _Canvas.Circle(x, y, 50);
            _this.state.container.addChild(circle);
            var recIn = new _Canvas.Rect(circle);
            var recIn1 = new _Canvas.Rect(circle);
            var recIn2 = new _Canvas.Rect(circle);
            var recOut = new _Canvas.Rect(circle);
            var recOut1 = new _Canvas.Rect(circle);
            circle.addIn(recIn);
            circle.addIn(recIn1);
            circle.addIn(recIn2);
            circle.addOut(recOut);
            circle.addOut(recOut1);
        };

        _this.handleSave = function () {
            var container = _this.state.container;
            //  点击发送的数据，到后台。将当前start 里面的状态container 存起来

            console.log("保存数据");
            console.log(container); // 保存的数据而机构, 将节点节点 连接信息存储在在关系里面
            (0, _API.saveWorkflowData)(1).then(function (data) {
                if (data === 1) {
                    alert("成功");
                } else {
                    alert("保存失败");
                }
            });
        };

        _this.handleRefresh = function () {
            //重新发送 请求之前的数据。重新渲染数据
            console.log("刷新数据");
        };

        _this.handleRedact = function () {
            //数据展示效果。
            console.log("编写数据");
        };

        _this.handlePause = function () {
            //暂停数据的请求问题
            console.log("暂停数据");
        };

        _this.container = null;
        _this.oUl = _react2.default.createRef();
        return _this;
    }

    _createClass(WorSpace, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 在接口请求数据，传滴的当前的 工作流id
            console.log("存储数据展示");
            var container = new _Canvas.Container();
            this.setState({ container: container }); //  状态数据跟新
            this.container = container; //  this 数据的展示  状态的在this 里面的 。数据是否有效果。
            //this.drawNode()
            /*   setTimeout(()=>{
                   this.drawNode(100,100);
                   this.drawNode(400,400);
                   //  连接保存  请求数据结果之后展示效果，
               })*/
        }
    }, {
        key: 'render',


        //这个是释放目标
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'main',
                { className: classes.content,
                    onDrop: this.dropEvent,
                    onDragOver: function onDragOver(event) {
                        event.preventDefault();
                    } },
                _react2.default.createElement('div', { className: classes.toolbar }),
                _react2.default.createElement(_Canvas.Widge, { container: this.state.container }),
                _react2.default.createElement(
                    'div',
                    { className: classes.tool },
                    _react2.default.createElement(
                        'ul',
                        { className: classes.ul, ref: this.oUl },
                        _react2.default.createElement(
                            'li',
                            { onClick: this.handleSave },
                            _react2.default.createElement(
                                _Fab2.default,
                                { size: 'small', color: 'primary',
                                    className: classes.button },
                                _react2.default.createElement(_Save2.default, null)
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: this.handleRefresh },
                            _react2.default.createElement(
                                _Fab2.default,
                                { size: 'small', color: 'primary',
                                    className: classes.button },
                                _react2.default.createElement(_Refresh2.default, null)
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: this.handleRedact },
                            _react2.default.createElement(
                                _Fab2.default,
                                { size: 'small', color: 'primary',
                                    className: classes.button },
                                _react2.default.createElement(_Edit2.default, null)
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: this.handlePause },
                            _react2.default.createElement(
                                _Fab2.default,
                                { size: 'small', color: 'primary',
                                    className: classes.button },
                                _react2.default.createElement(_PlayArrow2.default, null)
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: classes.largDiv },
                        _react2.default.createElement(
                            _Fab2.default,
                            { color: 'primary', onClick: this.displayButton },
                            _react2.default.createElement(_Close2.default, { fontSize: 'large' })
                        )
                    )
                )
            );
        }
    }]);

    return WorSpace;
}(_react.Component);

/*WorSpace.propTypes = {
    clsses: PropTypes.object.isRequired
};*/


exports.default = (0, _styles.withStyles)(_css.styles)(WorSpace);

/***/ }),

/***/ "./src/container/Workbench/index.js":
/*!******************************************!*\
  !*** ./src/container/Workbench/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _ModleDrawer = __webpack_require__(/*! ./ModleDrawer */ "./src/container/Workbench/ModleDrawer/index.js");

var _ModleDrawer2 = _interopRequireDefault(_ModleDrawer);

var _WorkSpace = __webpack_require__(/*! ./WorkSpace */ "./src/container/Workbench/WorkSpace/index.js");

var _WorkSpace2 = _interopRequireDefault(_WorkSpace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: {
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            //z-index: 1300,
            position: 'fixed'
        }
    };
};

var Workbench = function (_Component) {
    _inherits(Workbench, _Component);

    function Workbench() {
        _classCallCheck(this, Workbench);

        return _possibleConstructorReturn(this, (Workbench.__proto__ || Object.getPrototypeOf(Workbench)).apply(this, arguments));
    }

    _createClass(Workbench, [{
        key: 'componentDidMount',

        /*  static propTypes = {
              prop: PropTypes
          }   */

        value: function componentDidMount() {
            console.log("工作流请求参数的传递");
            console.log(this.props.match.params);
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                { className: classes.root },
                _react2.default.createElement(_ModleDrawer2.default, null),
                _react2.default.createElement(_WorkSpace2.default, null)
            );
        }
    }]);

    return Workbench;
}(_react.Component);

/*Workbench.propTypes = {
    clsses:PropTypes.object.isRequired
}*/


exports.default = (0, _styles.withStyles)(styles)(Workbench);

/***/ })

})
//# sourceMappingURL=home.acfd115b21a24f247d62.hot-update.js.map