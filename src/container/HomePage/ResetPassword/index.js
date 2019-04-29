import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import HomeHead from '../../../container/HomePage/HomeHead'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {retrievePassword, getValidation, checkoutValidation} from "../../../API/API";
import background from "../../../../static/images/home/registeredBackground.jpg"
import reset from "../../../../static/images/home/reset.png"
import {repeatNameShow} from "../../../API/API";

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
        background: `url(${background}) no-repeat `,
        backgroundSize: '100% 100%',
    },
    decorationBox: {
        position: "absolute",
        right: "5%",
        top: "40%",
        width: '27%',
        height: '45%',
        background: `url(${reset}) no-repeat `,
        backgroundSize: '100% 100%',
    },
    headerText: {
        fontSize: 40,
        position: "relative",
        left: " -25%",
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
        backgroundColor: "#7eb0e8;",
        position: "relative",
    },
    inputBoxValidation: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 250,
        border: "2px solid #fff",
        backgroundColor: "#7eb0e8;",
        position: "relative",
        top: 0,
        left: -75
    },
    input: {
        marginLeft: 8,
        flex: 1,
        height: 40,
        color: "#fff"
    },
    inputValidation: {
        marginLeft: 8,
        flex: 1,
        height: 40,
        color: "#fff"
    },
    validationButton: {
        width: 130,
        height: 40,
        margin: theme.spacing.unit,
        color: "rgba(133,179,233,1)",
        backgroundColor: "#fff",
        position: "absolute",
        top: -6,
        left: 260
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

class ResetPassword extends Component {
    static propTypes = {
        clsses: PropTypes.object.isRequired
    };
    state = {
        userName: "",
        password: "",
        newPassword: "",
        passwordEmpty: false,
        passwordPrompt: false,
        newPasswordEmpty: false,
        newPasswordPrompt: false,
        newPasswordCompare: false,
        validation: "",
        registeredShow: true,
        checkoutValidationShow: null,

        repeatNameShow: false,
        showNameShow: false
    };

    checkRepeatName = (e) => {
        if (e.target.value === "") {
            this.setState({showNameShow: true});
            return
        }
        //发送请求校验接口。定义状态来控制提示的显示
        repeatNameShow({userName: e.target.value}).then((data) => {
            if (data.code === 1) {
                this.setState({repeatNameShow: true})
            } else {
            }
        })

    }


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

    changeValidation = (e) => {
        this.setState({
            validation: e.target.value
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
        } else if (show === "userName") {
            let {repeatNameShow, showNameShow} = this.state;
            if (showNameShow) {//
                str = "用户不能为空";
                return (<div>
                    {str}
                </div>)
            }
            if (repeatNameShow) {
                str = "用户名已存在";
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
            validation
        } = this.state;
        let color = "#fff";
        if (userName !== "" && password !== "" && newPassword !== "" && validation !== "" && !newPasswordCompare && !passwordPrompt && !newPasswordPrompt && !passwordEmpty && !newPasswordEmpty) {
            color = "#48C9B0"
        }
        return ({backgroundColor: color})
    };

    pushRegister = () => {
        let {
            userName,
            password,
            newPassword,
            validation,
            checkoutValidationShow
        } = this.state;
        if (userName !== "" &&
            password !== "" &&
            newPassword !== "" &&
            validation !== "" && checkoutValidationShow) {
            if (this.state.registeredShow) {
                this.setState({registeredShow: false}, () => {
                    retrievePassword({
                        userName: userName,
                        newPassword: newPassword,
                    }).then(
                        (data) => {
                            this.setState({registeredShow: true});
                            if (data === 1) {
                                alert("修改成功")
                            } else {
                                alert("修改失败");
                            }
                        }
                    );
                });
            }
        } else {
            alert("数据格式有误")
        }
    };

    getValidation = () => {
        getValidation().then(data => {
                if (data !== "") {
                    alert("成功")
                } else {
                    alert("验证码返回失败")
                }
            }
        );
    };


    checkoutValidation = () => {
        checkoutValidation(this.state.validation).then((data) => {
            if (data === 1) {
                this.setState({checkoutValidationShow: true});
                alert("验证成功")
            } else {
                this.setState({checkoutValidationShow: false});
                alert("验证失败")
            }
        })
    };

    validationBorderColor = () => {
        let {checkoutValidationShow} = this.state;
        if (checkoutValidationShow !== null) {
            if (!checkoutValidationShow) {
                return ({borderColor: "#ef786d"})
            }
        }
    };

    render() {
        const {classes} = this.props;
        const {passwordEmpty, passwordPrompt, newPasswordEmpty, newPasswordPrompt, newPasswordCompare, checkoutValidationShow, showNameShow, repeatNameShow} = this.state;
        return (
            <div className={classes.root}>
                <HomeHead/>
                <div className={classes.registerBox}>{/*这里的使用值是再背景一个是在img中*/}
                    <div className={classes.listBox}>
                        <header className={classes.headerText}>重置密码</header>
                        <Paper className={classes.inputBox} elevation={1}
                               style={showNameShow || repeatNameShow ? {borderColor: "#ef786d"} : null}>
                            <InputBase className={classes.input} placeholder="用户名"
                                       onChange={(e) => {
                                           this.changeUserName(e)
                                       }}
                                       onBlur={(e) => {
                                           this.checkRepeatName(e)
                                       }
                                       }/>
                            <span className={classes.promptBox}>{this.prompt("userName")}</span>
                        </Paper>
                        <Paper className={classes.inputBoxValidation}
                               style={this.validationBorderColor()}
                               elevation={1}>
                            <InputBase className={classes.inputValidation} placeholder="输入验证码"
                                       onBlur={this.checkoutValidation}
                                       onChange={(e) => {
                                           this.changeValidation(e)
                                       }}/>
                            <Button variant="contained" className={classes.validationButton}
                                    onClick={this.getValidation}>
                                发送验证码
                            </Button>
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
                        <Button variant="contained" color="primary" className={classes.button}
                                style={this.setButtonColor()} onClick={this.pushRegister}>
                            确 认
                        </Button>
                    </div>
                    <div className={classes.decorationBox}>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ResetPassword)