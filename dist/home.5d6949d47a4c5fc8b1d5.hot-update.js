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

exports.default = PrivateRoute;

/***/ })

})
//# sourceMappingURL=home.5d6949d47a4c5fc8b1d5.hot-update.js.map