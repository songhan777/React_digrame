webpackHotUpdate("home",{

/***/ "./src/container/HomePage/index.js":
/*!*****************************************!*\
  !*** ./src/container/HomePage/index.js ***!
  \*****************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _SettingsOutlined = __webpack_require__(/*! @material-ui/icons/SettingsOutlined */ "./node_modules/@material-ui/icons/SettingsOutlined.js");

var _SettingsOutlined2 = _interopRequireDefault(_SettingsOutlined);

var _PermIdentity = __webpack_require__(/*! @material-ui/icons/PermIdentity */ "./node_modules/@material-ui/icons/PermIdentity.js");

var _PermIdentity2 = _interopRequireDefault(_PermIdentity);

var _Tabs = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/Tabs/index.js");

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/Tab/index.js");

var _Tab2 = _interopRequireDefault(_Tab);

var _TextField = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");

var _TextField2 = _interopRequireDefault(_TextField);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Person = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");

var _Person2 = _interopRequireDefault(_Person);

var _Lock = __webpack_require__(/*! @material-ui/icons/Lock */ "./node_modules/@material-ui/icons/Lock.js");

var _Lock2 = _interopRequireDefault(_Lock);

var _InputAdornment = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/InputAdornment/index.js");

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _Visibility = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");

var _Visibility2 = _interopRequireDefault(_Visibility);

var _VisibilityOff = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");

var _VisibilityOff2 = _interopRequireDefault(_VisibilityOff);

var _API = __webpack_require__(/*! ../../API/API */ "./src/API/API.js");

var _css = __webpack_require__(/*! ./css */ "./src/container/HomePage/css.js");

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

        _this.state = {
            value: 0, //home页头上的三个导航栏值
            username: '', //输入的用户名
            password: '', //输入的密码
            showPassword: false,
            foucse: false
        };

        _this.formdataChange = function (prop) {
            return function (event) {
                _this.setState(_defineProperty({}, prop, event.target.value));
            };
        };

        _this.handleClickShowPassword = function () {
            _this.setState(function (state) {
                return { showPassword: !state.showPassword };
            });
        };

        _this.handleChange = function (event, value) {
            _this.setState({ value: value });
        };

        _this.handleType = function () {
            _this.setState({ foucse: true });
        };

        _this.login = function () {
            var data = { username: _this.state.username, password: _this.state.password };
            (0, _API.postSession)(data).then(function (resData) {
                if (resData.code == 0) {
                    _this.props.history.push('/pjl');
                } else {
                    alert("登录失败刷新页面重新登录");
                }
            }).catch(function (err) {
                console.log(err);
                alert("登录失败刷新页面重新登录");
            });
        };

        _this.oauth = function () {
            var redirect_uri = null;
            if (true) {
                redirect_uri = 'http://localhost:3000/user/oauth/gitcb';
            } else {}
            var authWin = window.open('https://github.com/login/oauth/authorize?client_id=aeba3b94f917b3653e41&redirect_uri=' + redirect_uri + '&scope=user:email', '_blank');

            var timerId = setInterval(function () {
                (0, _API.getOAuthJson)().then(function (data) {
                    if (data.code === 0) {
                        clearInterval(timerId);
                        authWin.close();
                        window.location.reload();
                    }
                });
            });
        };

        _this.store = props.store.authenticated; //加载仓库
        _this.isAuthenticated = _this.store.isAuthenticated; //仓库中变量
        _this.authenticated = _this.store.authenticated; // 登录修改变量方法
        _this.sigout = _this.store.sigout; // 退出

        return _this;
    }
    /**
     *
     *登录函数，点击登录发送数据
     * @memberof HomePage
     */

    /**
     *
     *github oauth
     * @memberof HomePage
     */


    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            var _React$createElement;

            var classes = this.props.classes;
            var value = this.state.value;

            return _react2.default.createElement(
                'div',
                { className: classes.root },
                _react2.default.createElement(
                    _AppBar2.default,
                    { position: 'static', className: classes.AppRoot },
                    _react2.default.createElement(
                        _Toolbar2.default,
                        { className: classes.toolBar },
                        _react2.default.createElement(
                            'div',
                            { className: classes.grow },
                            _react2.default.createElement(
                                _Typography2.default,
                                {
                                    variant: 'h6',
                                    color: 'inherit',
                                    className: classes.growLogo
                                },
                                'QITQI'
                            ),
                            _react2.default.createElement(
                                _Tabs2.default,
                                { value: value, onChange: this.handleChange,
                                    classes: { indicator: classes.tabsIndicator } },
                                _react2.default.createElement(_Tab2.default, { label: '\u9996 \u9875' }),
                                _react2.default.createElement(_Tab2.default, { label: '\u5E2E \u52A9' }),
                                _react2.default.createElement(_Tab2.default, { label: '\u65B0 \u95FB' })
                            )
                        ),
                        _react2.default.createElement(
                            _IconButton2.default,
                            { color: 'inherit', 'aria-label': 'Menu', component: _reactRouterDom.Link, to: '/pro' },
                            _react2.default.createElement(_SettingsOutlined2.default, null)
                        ),
                        _react2.default.createElement(
                            _IconButton2.default,
                            { color: 'inherit', 'aria-label': 'Menu' },
                            _react2.default.createElement(_PermIdentity2.default, null)
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: classes.first },
                    _react2.default.createElement(
                        'div',
                        { className: classes.modle },
                        _react2.default.createElement(
                            _Typography2.default,
                            { gutterBottom: true, variant: 'h5', component: 'h2', className: classes.textColor },
                            '\u5DE5 \u4F5C \u6D41 \u53EF \u89C6 \u5316 \u5E73 \u53F0'
                        ),
                        _react2.default.createElement(
                            _Typography2.default,
                            { component: 'p', className: classes.textColor },
                            'Workflow visualization platform'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: classes.loging },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true, spacing: 8, alignItems: 'flex-end' },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true },
                                        _react2.default.createElement(_Person2.default, null)
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true },
                                        _react2.default.createElement(_TextField2.default, { id: 'input-with-icon-grid', label: '\u7528\u6237\u540D', autoFocus: false,
                                            onChange: this.formdataChange('username'),
                                            InputLabelProps: {
                                                classes: {
                                                    root: classes.cssLabel,
                                                    focused: classes.cssFocused
                                                }
                                            },
                                            InputProps: {
                                                classes: {
                                                    underline: classes.cssUnderline
                                                }
                                            }
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement('input', (_React$createElement = { type: 'text', name: '' }, _defineProperty(_React$createElement, 'type', 'text'), _defineProperty(_React$createElement, 'style', { display: 'none' }), _React$createElement)),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _Grid2.default,
                                    { container: true, spacing: 8, alignItems: 'flex-end' },
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true },
                                        _react2.default.createElement(_Lock2.default, null)
                                    ),
                                    _react2.default.createElement(
                                        _Grid2.default,
                                        { item: true },
                                        _react2.default.createElement(_TextField2.default, {
                                            id: 'filled-adornment-password',
                                            type: !this.state.foucse || this.state.showPassword ? 'text' : 'password',
                                            label: '\u5BC6\u7801',
                                            value: this.state.password,
                                            onChange: this.formdataChange('password'),
                                            onFocus: this.handleType,
                                            InputLabelProps: {
                                                classes: {
                                                    root: classes.cssLabel,
                                                    focused: classes.cssFocused
                                                }
                                            },
                                            InputProps: {
                                                classes: {
                                                    underline: classes.cssUnderline
                                                },
                                                endAdornment: _react2.default.createElement(
                                                    _InputAdornment2.default,
                                                    { position: 'end' },
                                                    _react2.default.createElement(
                                                        _IconButton2.default,
                                                        {
                                                            'aria-label': 'Toggle password     visibility',
                                                            onClick: this.handleClickShowPassword
                                                        },
                                                        this.state.showPassword ? _react2.default.createElement(_VisibilityOff2.default, { className: classes.textColor }) : _react2.default.createElement(_Visibility2.default, { className: classes.textColor })
                                                    )
                                                )
                                            }
                                        })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { variant: 'contained', className: classes.loginButton, size: 'medium', onClick: this.login },
                            '\u767B \u5F55'
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { className: classes.forgetButton, onClick: this.oauth },
                            'github'
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { className: classes.forgetButton, component: _reactRouterDom.Link, to: '/Reset' },
                            '\u5FD8 \u8BB0 \u5BC6 \u7801'
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { className: classes.singUpButton, component: _reactRouterDom.Link, to: '/Register' },
                            '\u6CE8 \u518C'
                        )
                    ),
                    _react2.default.createElement('div', { className: classes.footer }),
                    _react2.default.createElement('div', { className: classes.center })
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component)) || _class) || _class);
exports.default = (0, _core.withStyles)(_css.styles)((0, _reactRouterDom.withRouter)(HomePage));

/***/ })

})
//# sourceMappingURL=home.e8375933024f5d8f450e.hot-update.js.map