webpackHotUpdate("home",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.themesChange = exports.publicStore = exports.ProjectListItem = exports.proListStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _descriptor, _dec2, _desc2, _value2, _class3, _descriptor2;

var _projectList = __webpack_require__(/*! ./projectList */ "./src/store/projectList.js");

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

//切换主题：
var ThemesChange = (_dec = _mobx.action.bound, (_class = function () {
    function ThemesChange() {
        _classCallCheck(this, ThemesChange);

        _initDefineProp(this, 'theme', _descriptor, this);
    }

    _createClass(ThemesChange, [{
        key: 'setTheme',
        value: function setTheme(str) {
            if (typeof str === 'string') this.theme = str;
        }
    }]);

    return ThemesChange;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'theme', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 'themDefault';
    }
}), _applyDecoratedDescriptor(_class.prototype, 'setTheme', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'setTheme'), _class.prototype)), _class));
//   检查是否登录登录

var PublicStore = (_dec2 = _mobx.action.bound, (_class3 = function () {
    function PublicStore() {
        _classCallCheck(this, PublicStore);

        _initDefineProp(this, 'modalState', _descriptor2, this);
    }

    _createClass(PublicStore, [{
        key: 'setModalState',
        value: function setModalState(bool) {
            this.modalState = bool;
        }
    }]);

    return PublicStore;
}(), (_descriptor2 = _applyDecoratedDescriptor(_class3.prototype, 'modalState', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _applyDecoratedDescriptor(_class3.prototype, 'setModalState', [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, 'setModalState'), _class3.prototype)), _class3));


var publicStore = new PublicStore();
var themesChange = new ThemesChange();
exports.proListStore = _projectList.proListStore;
exports.ProjectListItem = _projectList.ProjectListItem;
exports.publicStore = publicStore;
exports.themesChange = themesChange;

/***/ })

})
//# sourceMappingURL=home.6723f92fc4f7684d50d8.hot-update.js.map