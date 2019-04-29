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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrivateRoute = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(PrivateRoute, _Component);

  function PrivateRoute(props) {
    _classCallCheck(this, PrivateRoute);

    var _this = _possibleConstructorReturn(this, (PrivateRoute.__proto__ || Object.getPrototypeOf(PrivateRoute)).call(this, props));

    _this.store = props.store.authenticated; //加载仓库
    _this.isAuthenticated = _this.store.isAuthenticated; //仓库中变量
    _this.authenticated = _this.store.authenticated; // 登录修改变量方法
    _this.sigout = _this.store.sigout; // 退出
    return _this;
  }

  _createClass(PrivateRoute, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Com = _props.component,
          rest = _objectWithoutProperties(_props, ['component']);

      return _react2.default.createElement(Route, _extends({}, rest, {
        render: function render(props) {
          return _this2.isAuthenticated ? _react2.default.createElement(Com, _this2.props) : _react2.default.createElement(_reactRouterDom.Redirect, {
            to: {
              pathname: "/",
              state: { from: _this2.props.location }
            }
          });
        }
      }));
    }
  }]);

  return PrivateRoute;
}(_react.Component)) || _class) || _class);
exports.default = PrivateRoute;

/***/ })

})
//# sourceMappingURL=home.782596f3b31851739f9f.hot-update.js.map