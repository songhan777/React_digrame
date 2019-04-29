webpackHotUpdate("home",{

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

var _ComputationalPage = __webpack_require__(/*! ./container/ComputationalPage */ "./src/container/ComputationalPage/index.js");

var _ComputationalPage2 = _interopRequireDefault(_ComputationalPage);

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

var _API = __webpack_require__(/*! ./API/API */ "./src/API/API.js");

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
            container: {}
        };

        _this.canvas = _react2.default.createRef();
        _this.store = props.store.themesChange;
        _this.setTheme = _this.store.setTheme;
        _this.authenticated = props.store.authenticated;
        (0, _API.getVerify)().then(function (data) {
            // BrowserRouter 每次路由都会从indx.html开始，所以在这判断是否在线
            if (data.code == 0) {
                _this.authenticated.authenticated(function () {
                    console.log('还在线');
                });
            } else {
                _this.authenticated.sigout(function () {
                    console.log('以下线');
                });
            }
        });
        return _this;
    }

    _createClass(APP, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
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
                        _react2.default.createElement(_PrivateRoute2.default, { path: '/pji', component: _ProjectItem2.default, authenticated: this.authenticated }),
                        _react2.default.createElement(_PrivateRoute2.default, { path: '/wf', component: _Workbench2.default, authenticated: this.authenticated }),
                        _react2.default.createElement(_PrivateRoute2.default, { path: '/com', component: _ComputationalPage2.default, authenticated: this.authenticated }),
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

/***/ })

})
//# sourceMappingURL=home.033ba7f4241e0d033643.hot-update.js.map