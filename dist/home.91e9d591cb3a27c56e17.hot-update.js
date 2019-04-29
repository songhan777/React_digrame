webpackHotUpdate("home",{

/***/ "./src/component/PrivateRoute.js":
/*!***************************************!*\
  !*** ./src/component/PrivateRoute.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function PrivateRoute(_ref) {
  var Component = _ref.component,
      fakeAuth = _ref.authenticated,
      rest = _objectWithoutProperties(_ref, ["component", "authenticated"]);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return fakeAuth.isAuthenticated ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, {
        to: {
          pathname: "/",
          state: { from: props.location }
        }
      });
    }
  }));
}
/* fucntion PrivateRoute() {
    constructor(props) {
        super(props)
        this.store = props.store.authenticated//加载仓库
        this.isAuthenticated = this.store.isAuthenticated//仓库中变量
        this.authenticated = this.store.authenticated// 登录修改变量方法
        this.sigout = this.store.sigout// 退出
    }
    render() {
        const { component:Com, ...rest } = this.props
        console.log(this.props)
        return (
            <Route
              {...rest}
              render={props => {
                  console.log(props)
                return this.isAuthenticated ? (
                    <Com {...props} />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                        state: { from: props.location }
                      }}
                    />
                  )
              }
              }
            />
          );
    }

  } */

exports.default = PrivateRoute;

/***/ })

})
//# sourceMappingURL=home.91e9d591cb3a27c56e17.hot-update.js.map