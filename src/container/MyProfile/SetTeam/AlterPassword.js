import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import {VerifyOldPassword, nowPassword} from "../../../API/API";
import ListItemText from '@material-ui/core/ListItemText';
import Clear from '@material-ui/icons/Clear';

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
        zIndex:1000
    },
    registerBox: {
        width: '100%',
        height: '100%',
        background: `rgba(255,255,255,0.5) `,
        backgroundSize: '100% 100%',
        justifyContent:"center",
        display:"flex",
        alignItems:"center"
    },
    decorationBox: {
        position: "absolute",
        right: "5%",
        top: "40%",
        width: '27%',
        height: '45%',
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
        display: "flex",
        flexDirection: "column",
        justifyContent: " space-evenly",
        alignItems: "center",
        background:"#7eb0e8",
        borderRadius:15
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
        width: 400,
        border: "2px solid #fff",
        backgroundColor: "#7eb0e8;",
    },
    input: {
        marginLeft: 8,
        flex: 1,
        height: 40,
        color: "#fff",
        display:"flex"
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
    },
    dataNameFont: {
        fontSize: 26,
        color: `#5d6b79`,
        width: 100,
    },
    dataMailboxFont: {
        fontSize: 26,
        color: `#5d6b79`,
        width: 300,
    },
    clearBox:{
        width:40,
        height:40,
        color:"red",
        position:"absolute",
        fontSize:40,
        top:0,
        right:0,
    }
});

class AlterPassword extends Component {
    static propTypes = {
        clsses: PropTypes.object.isRequired
    };
    state = {
        oldPassword: "",
        password: "",
        newPassword: "",
        passwordEmpty: false,
        passwordPrompt: false,
        newPasswordEmpty: false,
        newPasswordPrompt: false,
        newPasswordCompare: false,
        registeredShow: true,
        checkoutValidationShow: null,
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

    changeOldPassword = (e) => {
        this.setState({
            oldPassword: e.target.value
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
            password,
            passwordEmpty,
            passwordPrompt,
            newPassword,
            newPasswordEmpty,
            newPasswordPrompt,
            newPasswordCompare,
            oldPassword
        } = this.state;
        let color = "#fff";
        if (password !== "" && newPassword !== "" && oldPassword !== "" && !newPasswordCompare && !passwordPrompt && !newPasswordPrompt && !passwordEmpty && !newPasswordEmpty) {
            color = "#48C9B0"
        }
        return ({backgroundColor: color})
    };

    pushRegister = () => {
        let {
            password,
            newPassword,
            oldPassword,
            checkoutValidationShow
        } = this.state;
        if (password !== "" &&
            newPassword !== "" &&
            oldPassword !== "" && checkoutValidationShow) {
            if (this.state.registeredShow) {
                this.setState({registeredShow: false}, () => {
                    nowPassword({//修改这个方法的
                        userId: 111111,
                        password: newPassword,
                    }).then(
                        (data) => {
                            this.setState({registeredShow: true});
                            if (data === 1) {
                                this.props.change();
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

    checkoutOldPassword = () => {//
        VerifyOldPassword({
            userId: 111111,
            password: this.state.oldPassword,
        }).then((data) => {
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

    setBoxShow=()=>{
        this.props.change()
    };

    render() {
        const {classes,userName} = this.props;
        const {passwordEmpty, passwordPrompt, newPasswordEmpty, newPasswordPrompt, newPasswordCompare} = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.registerBox}>
                    <div className={classes.listBox}>
                        <div className={classes.clearBox} onClick={this.setBoxShow}><Clear/></div>
                        <header className={classes.headerText}>修改密码</header>
                        <Paper className={classes.inputBox} elevation={1}>
                            <div className={classes.input}>
                                <ListItemText primary={'用户名:'} style={{flex: `none`, padding: 0}}
                                              classes={{primary: classes.dataNameFont}}/>
                                <ListItemText primary={`${userName}`}
                                              style={{flex: `none`, padding: 0}}
                                              classes={{primary: classes.dataMailboxFont}}/>
                            </div>
                        </Paper>
                        <Paper className={classes.inputBoxValidation}
                               style={this.validationBorderColor()}
                               elevation={1}>
                            <InputBase className={classes.inputValidation} placeholder="请输入旧密码(6-18个字符区分大小写)" type="password"
                                       onBlur={this.checkoutOldPassword}
                                       onChange={(e) => {
                                           this.changeOldPassword(e)
                                       }}/>
                        </Paper>
                        <Paper className={classes.inputBox} elevation={1}
                               style={passwordEmpty || passwordPrompt ? {borderColor: "#ef786d"} : null}>
                            <InputBase className={classes.input} placeholder="请输入新密码(6-18个字符区分大小写)" type="password"
                                       onChange={(e) => {
                                           this.changePassword(e)
                                       }} onBlur={(e) => {
                                this.checkInput("password", e)
                            }}/>
                            <span className={classes.promptBox}>{this.prompt("password")}</span>
                        </Paper>
                        <Paper className={classes.inputBox} elevation={1}
                               style={newPasswordEmpty || newPasswordPrompt || newPasswordCompare ? {borderColor: "#ef786d"} : null}>
                            <InputBase className={classes.input} placeholder="请确认新密码(6-18个字符区分大小写)" type="password" onChange={(e) => {
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

export default withStyles(styles)(AlterPassword)