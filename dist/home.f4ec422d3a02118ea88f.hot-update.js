webpackHotUpdate("home",{

/***/ "./src/container/ProjectLits/index.js":
/*!********************************************!*\
  !*** ./src/container/ProjectLits/index.js ***!
  \********************************************/
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

var _Head = __webpack_require__(/*! ../../component/Head */ "./src/component/Head.js");

var _Head2 = _interopRequireDefault(_Head);

var _InputBase = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/InputBase/index.js");

var _InputBase2 = _interopRequireDefault(_InputBase);

var _colorManipulator = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Search = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");

var _Search2 = _interopRequireDefault(_Search);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _ProjectCard = __webpack_require__(/*! ./ProjectCard/ProjectCard */ "./src/container/ProjectLits/ProjectCard/ProjectCard.js");

var _ProjectCard2 = _interopRequireDefault(_ProjectCard);

var _CreateProjectCard = __webpack_require__(/*! ./CreateProjectCard */ "./src/container/ProjectLits/CreateProjectCard/index.js");

var _CreateProjectCard2 = _interopRequireDefault(_CreateProjectCard);

var _API = __webpack_require__(/*! ../../API/API */ "./src/API/API.js");

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
    return {
        firstRoot: {
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start'
        },
        search: _defineProperty({
            flexGrow: '2',
            marginTop: theme.spacing.unit * 2,
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: (0, _colorManipulator.fade)(theme.palette.common.white, 0.85),
            '&:hover': {
                backgroundColor: (0, _colorManipulator.fade)(theme.palette.common.white, 0.25)
            },
            marginRight: theme.spacing.unit * 2,
            marginLeft: 0,
            width: '80%'
        }, theme.breakpoints.up('sm'), {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto'
        }),
        searchIcon: {
            width: theme.spacing.unit * 9,
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.primary.light
        },
        inputRoot: {
            color: 'inherit',
            width: '100%'
        },
        inputInput: _defineProperty({
            paddingTop: theme.spacing.unit,
            paddingRight: theme.spacing.unit,
            paddingBottom: theme.spacing.unit,
            paddingLeft: theme.spacing.unit * 10,
            transition: theme.transitions.create('width'),
            width: '100%'
        }, theme.breakpoints.up('md'), {
            width: 200
        }),
        addCircleRoot: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        addCircleIconHover: {
            color: theme.palette.primary.light,
            margin: theme.spacing.unit * 2,
            '&:hover': {
                color: theme.palette.primary.dark
            }
        },
        projectCard: _extends({}, theme.mixins.gutters(), {
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            display: 'flex',
            //position: 'relative',
            flexWrap: 'wrap',
            height: 550,
            overflow: "auto"
        })
    };
};

var ProjectLits = (_dec = (0, _mobxReact.inject)("store"), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(ProjectLits, _Component);

    function ProjectLits(props) {
        _classCallCheck(this, ProjectLits);

        var _this = _possibleConstructorReturn(this, (ProjectLits.__proto__ || Object.getPrototypeOf(ProjectLits)).call(this, props));

        _this.state = {
            displayCreatCard: false, //创建新工程选项卡的生成
            list: []
        };

        _this.creatCard = function () {
            console.log(1);
            _this.setDisplayCreatCard(true);
        };

        _this.addDateList = function (data) {
            console.log("增加Data");
            console.log(data);
            _this.setState({
                list: [].concat(_toConsumableArray(_this.state.list), [data])
            });
        };

        _this.store = props.store.proListStore;
        _this.displayCreatCard = _this.store.displayCreatCard;
        _this.setDisplayCreatCard = _this.store.setDisplayCreatCard;
        return _this;
    }

    _createClass(ProjectLits, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            //  需要用户id
            (0, _API.getList)().then(function (data) {
                /**/
                console.log("获取的数据");
                /*在这个每个项目需要id里面，*/
                console.log(data);
                _this2.setState({ list: data.list });
            }, function () {});
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            var displayCreatCard = this.props.store.proListStore.displayCreatCard;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Head2.default, null),
                _react2.default.createElement(
                    _Grid2.default,
                    { container: true, spacing: 0 },
                    _react2.default.createElement(_Grid2.default, { item: true, xs: true }),
                    _react2.default.createElement(
                        _Grid2.default,
                        { item: true, xs: 8 },
                        _react2.default.createElement(
                            'div',
                            { className: classes.firstRoot },
                            _react2.default.createElement(
                                'div',
                                { className: classes.search },
                                _react2.default.createElement(
                                    'div',
                                    { className: classes.searchIcon },
                                    _react2.default.createElement(_Search2.default, null)
                                ),
                                _react2.default.createElement(_InputBase2.default, {
                                    placeholder: '\u641C\u7D22\u9879\u76EE',
                                    classes: {
                                        root: classes.inputRoot,
                                        input: classes.inputInput
                                    }
                                })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: classes.addCircleRoot, onClick: this.creatCard },
                                _react2.default.createElement(
                                    _Icon2.default,
                                    { className: classes.addCircleIconHover, fontSize: 'large' },
                                    'add_circle'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: classes.projectCard },
                            this.state.list.map(function (item, index) {
                                return _react2.default.createElement(_ProjectCard2.default, { obj: item, key: index });
                            }),
                            displayCreatCard && _react2.default.createElement(_CreateProjectCard2.default, { addList: this.addDateList })
                        )
                    ),
                    _react2.default.createElement(_Grid2.default, { item: true, xs: true })
                )
            );
        }
    }]);

    return ProjectLits;
}(_react.Component)) || _class) || _class);

/*ProjectLits.propTypese = {
    classes: PropTypes.object.isRequired,
}*/

exports.default = (0, _styles.withStyles)(styles)(ProjectLits);

/***/ })

})
//# sourceMappingURL=home.f4ec422d3a02118ea88f.hot-update.js.map