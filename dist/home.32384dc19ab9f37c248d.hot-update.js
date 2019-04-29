webpackHotUpdate("home",{

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
                data = _props.data;

            return _react2.default.createElement(
                _Button2.default,
                { className: classes.root, component: _reactRouterDom.Link, to: '/pji/ds' },
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

/***/ "./src/container/ProjectItem/NavContainer/Data/PopupsAddSetData/index.js":
/*!*******************************************************************************!*\
  !*** ./src/container/ProjectItem/NavContainer/Data/PopupsAddSetData/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

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

var _Add = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");

var _Add2 = _interopRequireDefault(_Add);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _InputBase = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/InputBase/index.js");

var _InputBase2 = _interopRequireDefault(_InputBase);

var _API = __webpack_require__(/*! ../../../../../API/API */ "./src/API/API.js");

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        root: {
            zIndex: 1,
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        popupsBox: {
            width: 500,
            height: 250,
            backgroundColor: "#C1FFC1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            borderRadius: 10
        },
        buttonRemove: {
            position: "absolute",
            top: 0,
            right: 0
        }
    };
};

var PopupsAddSetData = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(PopupsAddSetData, _Component);

    function PopupsAddSetData() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PopupsAddSetData);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopupsAddSetData.__proto__ || Object.getPrototypeOf(PopupsAddSetData)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            expanded: false,
            textName: ""
        }, _this.handleBox = function (e) {
            if (e.target.id === "box") {
                _this.props.shut();
            }
        }, _this.setDataList = function () {
            var textName = _this.state.textName;

            if (textName !== "") {
                //判断输入不为空
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
                //需要增加显示。是否需要连接mobx
                //dataSetId 通过父级算出来，
                var dataSetAry = [];
                _this.props.data.forEach(function (item, index) {
                    dataSetAry.push(item.dataSetId);
                });
                var dataSetId = taskShow(dataSetAry); //任务id mobx 里面存值  tackId
                var dataSetObj = { useId: "11111", tackId: "1111", name: textName, date: date, dataSetId: dataSetId };
                //state 里面的展示  这里发送的请求
                (0, _API.addDateSetList)(dataSetObj).then(function (data) {
                    if (data === 1) {
                        _this.props.addData(dataSetObj);
                        _this.props.shut(); //
                    } else {
                        alert("数据集增加失败");
                    }
                });
            }
        }, _this.onChangeTextName = function (e) {
            _this.setState({ textName: e.target.value });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    /* static propTypes = {
         prop: PropTypes
     };*/


    _createClass(PopupsAddSetData, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = this.props.classes;
            var textName = this.state.textName;

            return _react2.default.createElement(
                'div',
                { className: classes.root, id: 'box', onClick: function onClick(e) {
                        _this2.handleBox(e);
                    } },
                _react2.default.createElement(
                    _Grid2.default,
                    { className: classes.popupsBox },
                    _react2.default.createElement(
                        _Grid2.default,
                        null,
                        _react2.default.createElement(_ListItemText2.default, { xs: 1, primary: '\u65B0\u589E\u6570\u636E\u96C6', className: classes.listHead }),
                        _react2.default.createElement(_InputBase2.default, {
                            placeholder: '\u8F93\u5165\u540D\u79F0', value: textName,
                            classes: {
                                root: classes.inputRoot,
                                input: classes.inputInput
                            },
                            onChange: function onChange(e) {
                                _this2.onChangeTextName(e);
                            },
                            onBlur: this.getInputValue
                        })
                    ),
                    _react2.default.createElement(
                        _Button2.default,
                        { onClick: this.setDataList },
                        '\u786E\u8BA4'
                    )
                )
            );
        }
    }]);

    return PopupsAddSetData;
}(_react.Component)) || _class;

exports.default = (0, _core.withStyles)(styles)(PopupsAddSetData);

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
            var _this2 = this;

            if (this.store.data.dataGather !== undefined) {
                this.setState({ //时间异步问题
                    //data: this.data.dataGather//数据的获取
                    data: this.store.data.dataGather //数据的获取
                });
            } else {
                setTimeout(function () {
                    //这里刷新页面之后将，mobx里面的数据需要重新获取，这里需要延迟执行。【问题是刷新的时候可能会断网 ，就是数据请求会失败】
                    console.log("展示的数据");
                    if (_this2.store.data.dataGather !== undefined) {
                        _this2.setState({ //时间异步问题
                            //data: this.data.dataGather//数据的获取
                            data: _this2.store.data.dataGather //数据的获取
                        });
                        console.log(_this2.store.data.dataGather);
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
                        _react2.default.createElement(_Datacard2.default, { data: item })
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

/***/ })

})
//# sourceMappingURL=home.32384dc19ab9f37c248d.hot-update.js.map