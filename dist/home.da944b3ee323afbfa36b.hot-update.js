webpackHotUpdate("home",{

/***/ "./src/component/Upload.js":
/*!*********************************!*\
  !*** ./src/component/Upload.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var box = {
    height: "100%"
};

var styles = function styles(theme) {
    return {
        root: {
            position: "fixed",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        rootBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            width: 600,
            opacity: 1,
            zIndex: 2,
            backgroundColor: "#fff"
        },
        shutDown: {
            position: "absolute",
            top: 5,
            right: 5,
            cursor: "pointer"
        },
        media: {
            height: 400
        },
        mediaBox: {
            width: "100%",
            height: "100%",
            border: "1px solid #cdcdcd"
        },
        row: {
            width: 400,
            margin: "10px 0"
        },
        buttonBox: {
            height: 50,
            lineHeight: "50px"
        },
        cancel: {
            width: 90,
            height: 30,
            border: "1px solid #cdcdcd",
            color: "#808080",
            borderRadius: 5,
            marginLeft: 30,
            cursor: "pointer"
        },
        upload: {
            width: 90,
            height: 30,
            border: 0,
            color: "#ffffff",
            borderRadius: 5,
            marginLeft: 30,
            cursor: "pointer",
            background: "rgba(44,195,253,1)"
        }
    };
};

var UploadFile = function (_PureComponent) {
    _inherits(UploadFile, _PureComponent);

    function UploadFile() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UploadFile);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UploadFile.__proto__ || Object.getPrototypeOf(UploadFile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: '',
            path: '',
            preview: null,
            data: null,
            time: null
        }, _this.setBox = function () {
            _this.props.change();
        }, _this.changeName = function (e) {
            _this.setState({ name: e.target.value });
        }, _this.changePath = function (e) {
            var file = e.target.files[0];
            var date = file.lastModifiedDate.toString().split(' ');
            if (!file) {
                return;
            }
            _this.setState({ time: date });
            var src = void 0,
                preview = void 0,
                type = file.type;
            //规定数据展示
            // 匹配类型为image/开头的字符串
            if (/^image\/\S+$/.test(type)) {
                src = URL.createObjectURL(file);
                preview = _react2.default.createElement("img", { style: box, src: src, alt: "" });
            }
            // 匹配类型为video/开头的字符串
            else if (/^video\/\S+$/.test(type)) {
                    src = URL.createObjectURL(file);
                    preview = _react2.default.createElement("video", { style: box, src: src, autoPlay: true, loop: true, controls: true });
                }
                // 匹配类型为text/开头的字符串
                else if (/^text\/\S+$/.test(type)) {
                        var self = _this;
                        var reader = new FileReader();
                        reader.readAsText(file);
                        //注：onload是异步函数，此处需独立处理
                        reader.onload = function (e) {
                            preview = _react2.default.createElement("textarea", { style: box, value: this.result, readOnly: true });
                            self.setState({ path: file.name, data: file, preview: preview });
                        };
                        return;
                    }
            _this.setState({ path: file.name, data: file, preview: preview });
        }, _this.upload = function () {
            var data = _this.state.data;
            var _this$state = _this.state,
                name = _this$state.name,
                time = _this$state.time;

            if (!data || name === '') {
                console.log('未选择文件');
                return;
            }
            console.log("上传文件");
            console.log(_this.state.time);
            var month = time[1].toLocaleUpperCase();
            _this.props.LocalUpload({ id: 111111, data: { time: time[2] + " " + month + " " + time[3], name: name } }).then(function (data) {
                if (data === 1) {
                    alert("成功");
                    _this.props.change();
                } else {
                    alert("失败");
                }
            });
            _this.props.addData([{ time: time[2] + " " + month + " " + time[3], name: name }]);
            /*//此处的url应该是服务端提供的上传文件api
            const url = 'http://localhost:3000/api/upload';
            const form = new FormData();
              //此处的file字段由上传的api决定，可以是其它值
            form.append('file', data);
            //服务器路径有问题。
            fetch(url, {
                method: 'POST',
                body: form
            }).then(res => {
                console.log(res)
            })*/
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //选择文件


    // 上传文件


    _createClass(UploadFile, [{
        key: "render",
        value: function render() {
            var classes = this.props.classes;
            var _state = this.state,
                name = _state.name,
                path = _state.path,
                preview = _state.preview;

            return _react2.default.createElement(
                "div",
                { className: classes.root },
                _react2.default.createElement(
                    "div",
                    { className: classes.rootBox },
                    _react2.default.createElement(
                        "div",
                        { className: classes.shutDown, onClick: this.setBox },
                        "\u5173\u95ED"
                    ),
                    _react2.default.createElement(
                        "h4",
                        null,
                        "\u4E0A\u4F20\u6587\u4EF6"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: classes.row },
                        _react2.default.createElement("input", { type: "text", placeholder: "\u8BF7\u8F93\u5165\u6587\u4EF6\u540D", value: name, onChange: this.changeName })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: classes.row },
                        _react2.default.createElement(
                            "div",
                            { className: "row-input" },
                            _react2.default.createElement("input", { type: "file", accept: "video/*,image/*,text/plain", onChange: this.changePath })
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: classes.buttonBox },
                        _react2.default.createElement(
                            "button",
                            { className: classes.upload, onClick: this.upload },
                            "\u4E0A\u4F20"
                        )
                    )
                )
            );
        }
    }]);

    return UploadFile;
}(_react.PureComponent);

exports.default = (0, _core.withStyles)(styles)(UploadFile);

/***/ })

})
//# sourceMappingURL=home.da944b3ee323afbfa36b.hot-update.js.map