import React, {PureComponent} from 'react'

const box = {
    height: "100%",
};

const styles = theme => ({
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
        alignItems: "center",
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
        height: 400,
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
        background: "rgba(44,195,253,1)",
    }
});
import {withStyles} from '@material-ui/core'

class UploadFile extends PureComponent {
    state = {
        name: '',
        path: '',
        preview: null,
        data: null,
        time: null
    };

    setBox = () => {
        this.props.change()
    };

    changeName = (e) => {
        this.setState({name: e.target.value})
    };

    //选择文件
    changePath = (e) => {
        const file = e.target.files[0];
        let date = file.lastModifiedDate.toString().split(' ');
        if (!file) {
            return;
        }
        this.setState({time: date});
        let src, preview, type = file.type;
        //规定数据展示
        // 匹配类型为image/开头的字符串
        if (/^image\/\S+$/.test(type)) {
            src = URL.createObjectURL(file);
            preview = <img style={box} src={src} alt=''/>
        }
        // 匹配类型为video/开头的字符串
        else if (/^video\/\S+$/.test(type)) {
            src = URL.createObjectURL(file);
            preview = <video style={box} src={src} autoPlay loop controls/>
        }
        // 匹配类型为text/开头的字符串
        else if (/^text\/\S+$/.test(type)) {
            const self = this;
            const reader = new FileReader();
            reader.readAsText(file);
            //注：onload是异步函数，此处需独立处理
            reader.onload = function (e) {
                preview = <textarea style={box} value={this.result} readOnly></textarea>
                self.setState({path: file.name, data: file, preview: preview})
            };
            return;
        }
        this.setState({path: file.name, data: file, preview: preview})
    };

    // 上传文件
    upload = () => {
        const data = this.state.data;
        let {name, time} = this.state;
        if (!data || name === '') {
            console.log('未选择文件');
            return;
        }
        console.log("上传文件");
        console.log(this.state.time);
        let month = time[1].toLocaleUpperCase();
        this.props.LocalUpload({id:111111,data:{time: `${time[2]} ${month} ${time[3]}`, name: name}}).then((data) => {
            if (data === 1) {
                alert("成功");
                this.props.change();
            } else {
                alert("失败")
            }
        });
        this.props.addData([{time: `${time[2]} ${month} ${time[3]}`, name: name}]);
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
    };

    render() {
        const {classes} = this.props;
        const {name, path, preview} = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.rootBox}>
                    <div className={classes.shutDown} onClick={this.setBox}>关闭</div>
                    <h4>上传文件</h4>
                    <div className={classes.row}>
                        <input type='text' placeholder='请输入文件名' value={name} onChange={this.changeName}/>
                    </div>
                    <div className={classes.row}>
                        <div className='row-input'>
                            <input type='file' accept='video/*,image/*,text/plain' onChange={this.changePath}/>
                        </div>
                    </div>

                    <div className={classes.buttonBox}>
                        <button className={classes.upload} onClick={this.upload}>上传</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(UploadFile)