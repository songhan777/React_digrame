import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import HomeHead from '../../container/HomePage/HomeHead'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {registeredUser} from "../../API/API";
import background from "../../../static/images/home/registeredBackground.jpg"
import registered from "../../../static/images/home/registered.png"

const styles = theme => ({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        color: "#fff",
    },
    registerBox: {
        width: '100%',
        height: '95%',
        background:`url(${background}) no-repeat `,
        backgroundSize: '100% 100%',
    },
    decorationBox:{
        position:"absolute",
        right:"5%",
        top:"20%",
        width: '45%',
        height: '60%',
        background:`url(${registered}) no-repeat `,
        backgroundSize: '100% 100%',
    },
    headerText: {
        fontSize: 40,
        position: "relative",
        left: " -35%",
        top: 0,
    },
    listBox: {
        width: "30%",
        height: "70%",
        position: "relative",
        top: "10%",
        left: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: " space-evenly",
        alignItems: "center"
    },
    inputBox: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        border: "2px solid #fff",
        backgroundColor: "#7eb0e8;"
    },
    input: {
        marginLeft: 8,
        flex: 1,
        height: 40,
        color: "#fff"
    },
    button: {
        width: 400,
        height: 40,
        margin: theme.spacing.unit,
        color: "#2a2a2a",
        backgroundColor: "#fff",
    },
    loginBox: {
        position: "relative",
        top: 0,
        left: "25%",
        cursor: "pointer",
        color: "#fff"
    },
    promptBox: {
        position: "relative",
        top: 0,
        left: "60%",
        color: "#ef786d",
        fontSize: 20
    }
});

class Register extends Component {
    static propTypes = {
        clsses: PropTypes.object.isRequired
    };
    state = {
        userName: "",
        password: "",
        passwordEmpty: false,
        passwordPrompt: false,
        newPassword: "",
        newPasswordEmpty: false,
        newPasswordPrompt: false,
        newPasswordCompare: false,
        email: "",
        unit: "",
        registeredShow: true
    };

    changeUserName = (e) => {
        this.setState({
            userName: e.target.value
        })
    };
    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };
    changeNewPassword = (e) => {
        this.setState({
            newPassword: e.target.value
        })
    };
    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };
    changeUnit = (e) => {
        this.setState({
            unit: e.target.value
        })
    };
    //规则校验
    checkInput = (show, e) => {
        let str = e.target.value;
        let reg = /(^\s+)|(\s+$)|\s+/g;
        let empty = reg.test(str);
        if (empty) {//加空值校验。在这里判断跟新什么
            if (show === "password") {
                this.setState({
                    passwordEmpty: true
                });
            } else if (show === "newPassword") {
                this.setState({
                    newPasswordEmpty: true
                });
            }
            return
        } else {
            if (show === "password") {
                this.setState({
                    passwordEmpty: false
                });
            } else if (show === "newPassword") {
                this.setState({
                    newPasswordEmpty: false
                });
            }
        }
        let result = /^[\w_-]{6,18}$/.test(str);//校验是否符合
        if (!result) {
            if (show === "password") {
                this.setState({
                    passwordPrompt: true
                });
            } else if (show === "newPassword") {
                this.setState({
                    newPasswordPrompt: true
                });
            }
        } else {
            if (show === "password") {
                this.setState({
                    passwordPrompt: false
                });
            } else if (show === "newPassword") {
                this.setState({
                    newPasswordPrompt: false
                });
            }
        }
        if (show === "newPassword") {
            (str === this.state.password) ? this.setState({newPasswordCompare: false}) : this.setState({newPasswordCompare: true});
        }
        ;
    };
    prompt = (show) => {//这里是添加或者运算符
        const {passwordEmpty, passwordPrompt, newPasswordEmpty, newPasswordPrompt, newPasswordCompare} = this.state;
        let str = "";
        if (show === "password") {
            if (passwordEmpty) {
                str = "输入值不能为空值";
                return (<div>
                    {str}
                </div>)
            }
            if (passwordPrompt) {
                str = "密码不符合规定"
            }
        } else if (show === "newPassword") {
            if (newPasswordEmpty) {
                str = "输入值不能为空值";
                return (<div>
                    {str}
                </div>)
            }
            if (newPasswordPrompt) {
                str = "密码不符合规定";
                return (<div>
                    {str}
                </div>)
            }
            if (newPasswordCompare) {
                str = "两次密码不同";
                return (<div>
                    {str}
                </div>)
            }
        }
        return (<div>
            {str}
        </div>)
    };
    setButtonColor = () => {
        let {
            userName,
            password,
            passwordEmpty,
            passwordPrompt,
            newPassword,
            newPasswordEmpty,
            newPasswordPrompt,
            newPasswordCompare,
            email,
            unit
        } = this.state;
        let color = "#fff";
        if (userName !== "" && password !== "" && newPassword !== "" && email !== "" && unit !== "" && !newPasswordCompare && !passwordPrompt && !newPasswordPrompt && !passwordEmpty && !newPasswordEmpty) {
            color = "#48C9B0"
        }
        return ({backgroundColor: color})
    };

    pushRegister = () => {
        let {
            userName,
            password,
            newPassword,
            email,
            unit
        } = this.state;
        if (userName !== "" &&
            password !== "" &&
            newPassword !== "" &&
            email !== "" &&
            unit !== "") {
            if (this.state.registeredShow) {
                this.setState({registeredShow: false}, () => {
                    registeredUser({
                        userName: userName,
                        password: newPassword,
                        email: email,
                        unit: unit
                    }).then(
                        (data) => {
                            this.setState({registeredShow: true});
                            if (data === 1) {
                                console.log("成功了")
                            } else {
                                alert("注册失败，请稍后再试");
                            }
                        }
                    );
                });
                //这里的注意是连续点击问题，解决方案是，在state 里面设置一个值，在onclick 的时候设置成false 然后在ajax 回调结果之后将值，再吃设置成true
            }
        } else {
            alert("数据格式有误")
        }

    };

    render() {
        const {classes} = this.props;
        const {passwordEmpty, passwordPrompt, newPasswordEmpty, newPasswordPrompt, newPasswordCompare} = this.state;
        return (
            <div className={classes.root}>
                <HomeHead/>
                <div className={classes.registerBox}>{/*这里的使用值是再背景一个是在img中*/}
                    <div className={classes.listBox}>
                        <header className={classes.headerText}>注册</header>
                        <Paper className={classes.inputBox} elevation={1}>
                            <InputBase className={classes.input} placeholder="用户名" onChange={(e) => {
                                this.changeUserName(e)
                            }}/>
                        </Paper>
                        <Paper className={classes.inputBox} elevation={1}
                               style={passwordEmpty || passwordPrompt ? {borderColor: "#ef786d"} : null}>
                            <InputBase className={classes.input} placeholder="密码(6-18个字符区分大小写)" type="password"
                                       onChange={(e) => {
                                           this.changePassword(e)
                                       }} onBlur={(e) => {
                                this.checkInput("password", e)
                            }}/>
                            <span className={classes.promptBox}>{this.prompt("password")}</span>
                        </Paper>
                        <Paper className={classes.inputBox} elevation={1}
                               style={newPasswordEmpty || newPasswordPrompt || newPasswordCompare ? {borderColor: "#ef786d"} : null}>
                            <InputBase className={classes.input} placeholder="确认密码" type="password" onChange={(e) => {
                                this.changeNewPassword(e)
                            }} onBlur={(e) => {
                                this.checkInput("newPassword", e)
                            }}/>
                            <span className={classes.promptBox}>{this.prompt("newPassword")}</span>
                        </Paper>
                        <Paper className={classes.inputBox} elevation={1}>
                            <InputBase className={classes.input} placeholder="邮箱(填写常用的邮箱)" onChange={(e) => {
                                this.changeEmail(e)
                            }}/>
                        </Paper>
                        <Paper className={classes.inputBox} elevation={1}>
                            <InputBase className={classes.input} placeholder="单位(请填写您的单位或公司)" onChange={(e) => {
                                this.changeUnit(e)
                            }}/>
                        </Paper>
                        <Button variant="contained" color="primary" className={classes.button}
                                style={this.setButtonColor()} onClick={this.pushRegister}>
                            注 册
                        </Button>
                        <Button className={classes.loginBox} component={Link} to="/">已有账户，直接登录>></Button>
                    </div>
                    <div className={classes.decorationBox}>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Register)