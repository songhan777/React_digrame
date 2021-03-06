import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import {Link, withRouter, Redirect,} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SettinsOutlined from '@material-ui/icons/SettingsOutlined'
import PermIdentity from '@material-ui/icons/PermIdentity'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {getOAuthJson, postSession, getVerify, userLogout} from '../../API/API'
import {styles} from './css'
import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.store = props.store.authenticated//加载仓库
        this.isAuthenticated = this.store.isAuthenticated//仓库中变量
        this.authenticated = this.store.authenticated// 登录修改变量方法
        this.sigout = this.store.sigout// 退出
        getVerify().then((data) => {// BrowserRouter 每次路由都会从indx.html开始，所以在这判断是否在线
            if (data.code == 0) {
                console.log('应该重载下')
                this.authenticated(() => {
                    this.setState({redirectToReferrer: true})
                })
            } else {
                this.sigout(() => {
                    this.setState({redirectToReferrer: false})
                })
            }
        })
    }

    state = {
        value: 0,//home页头上的三个导航栏值
        username: '',//输入的用户名
        password: '',//输入的密码
        showPassword: false,
        foucse: false,
        redirectToReferrer: false,//跳转控制，是否登录
    }

    formdataChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    handleClickShowPassword = () => {
        this.setState(state => ({showPassword: !state.showPassword}));
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleType = () => {
        this.setState({foucse: true})
    }
    /**
     *
     *登录函数，点击登录发送数据
     * @memberof HomePage
     */
    login = () => {
        const data = {username: this.state.username, password: this.state.password}
        postSession(data).then((redata) => {
            if (redata.code === 0) {
                this.authenticated(() => {
                    this.setState({redirectToReferrer: true})
                })
            } else {
                this.sigout(() => {
                    this.setState({redirectToReferrer: false})
                })
                alert("登录失败刷新页面重新登录")
            }
        }).catch((err) => {
            console.log(err)
            this.sigout(() => {
                this.setState({redirectToReferrer: false})
            })
            alert("登录失败刷新页面重新登录")
        })
    }
    /**
     *
     *github oauth
     * @memberof HomePage
     */
    oauth = () => {
        let redirect_uri = null;
/*         if (DEV) {
            redirect_uri = 'http://localhost:3000/user/oauth/gitcb'
        } else {
            redirect_uri = 'http://flow.dv.ailab.win/user/oauth/gitcb'
        } */
        const authWin = window.open(`https://passport.escience.cn/oauth2/authorize?response_type=code&redirect_uri=http://flow.dv.ailab.win/user/oauth/cb&client_id=96478&theme=full`, '_blank')

        const timerId = setInterval(function () {
            getOAuthJson().then((data) => {
                if (data.code === 0) {
                    clearInterval(timerId)
                    authWin.close()
                    window.location.reload()
                }
            });
        })
    }

    handleUserLogout = () => {
        console.log("用户退出")
        //　用户的参数用户名
        userLogout().then((data) => {
            if (data.code===0) {
                alert("退出成功")
                //指定路由跳转去 主页
            }else {
                alert("退出失败")
            }
        })
    };


    render() {
        const {classes} = this.props
        let {value} = this.state
        let {from} = this.props.location.state || {from: {pathname: "/pjl"}};
        let {redirectToReferrer} = this.state;
        if (redirectToReferrer) return <Redirect to={from}/>;
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.AppRoot}>
                    <Toolbar className={classes.toolBar}>
                        <div className={classes.grow}>
                            <Typography
                                variant="h6"
                                color="inherit"
                                className={classes.growLogo}
                            >
                                QITQI
                            </Typography>
                            <Tabs value={value} onChange={this.handleChange}
                                  classes={{indicator: classes.tabsIndicator}}>
                                <Tab label="首 页"/>
                                <Tab label="帮 助"/>
                                <Tab label="新 闻"/>
                            </Tabs>
                        </div>
                        <IconButton color="inherit" aria-label="Menu" component={Link} to="/pro">
                            <SettinsOutlined/>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.handleUserLogout}>
                            <PermIdentity/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.first}>
                    <div className={classes.modle}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.textColor}>
                            工 作 流 可 视 化 平 台
                        </Typography>
                        <Typography component="p" className={classes.textColor}>
                            Workflow visualization platform
                        </Typography>
                        <div className={classes.loging}>
                            <div>
                                <Grid container spacing={8} alignItems="flex-end">
                                    <Grid item>
                                        <Person/>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="input-with-icon-grid" label="用户名" autoFocus={false}
                                                   onChange={this.formdataChange('username')}
                                                   InputLabelProps={{
                                                       classes: {
                                                           root: classes.cssLabel,
                                                           focused: classes.cssFocused
                                                       }
                                                   }}
                                                   InputProps={{
                                                       classes: {
                                                           underline: classes.cssUnderline
                                                       }
                                                   }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <input type="text" name="" type="text" style={{display: 'none'}}/>
                            <div>
                                <Grid container spacing={8} alignItems="flex-end">
                                    <Grid item>
                                        <Lock/>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            id="filled-adornment-password"
                                            type={!this.state.foucse || this.state.showPassword ? 'text' : 'password'}
                                            label="密码"
                                            value={this.state.password}
                                            onChange={this.formdataChange('password')}
                                            onFocus={this.handleType}
                                            InputLabelProps={{
                                                classes: {
                                                    root: classes.cssLabel,
                                                    focused: classes.cssFocused
                                                }
                                            }}
                                            InputProps={{
                                                classes: {
                                                    underline: classes.cssUnderline
                                                },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="Toggle password     visibility"
                                                            onClick={this.handleClickShowPassword}
                                                        >
                                                            {this.state.showPassword ?
                                                                <VisibilityOff className={classes.textColor}/> :
                                                                <Visibility className={classes.textColor}/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>

                        <Button  variant="contained" className={classes.loginButton} size="medium" onClick={this.login} >登 录</Button>
                        <Button className={classes.forgetButton} onClick={this.oauth} >科技云</Button>
                        <Button className={classes.forgetButton} component={Link} to="/Reset">忘 记 密 码</Button>
                        <Button className={classes.singUpButton} component={Link} to="/Register">注 册</Button>
                    </div>
                    <div className={classes.footer}>
                    </div>
                    <div className={classes.center}>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(HomePage))