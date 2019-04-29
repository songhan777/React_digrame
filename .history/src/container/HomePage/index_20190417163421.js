import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Link, withRouter} from 'react-router-dom'
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
import { getOAuthJson, postSession} from '../../API/API'
import {styles} from './css'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        value: 0,//home页头上的三个导航栏值
        username:'',//输入的用户名
        password: '',//输入的密码
        showPassword: false,
        foucse: false,
    }

    componentDidMount() {

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
        const data = {username:this.state.username, password: this.state.password}
        postSession(data).then((resData) => {
            console.log(resData)
            console.log(resData.code == 0)
            if ( resData.code == 0) {
                this.props.history.push('/pjl')
            } else {
                alert("登录失败刷新页面重新登录")
            }
        }).catch((err) =>{
            console.log(err)
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
        if (DEV) {
            redirect_uri = 'http://localhost:3000/user/oauth/gitcb'
        } else {
            redirect_uri = 'http://flow.dv.ailab.win/user/oauth/gitcb'
        }
        const authWin = window.open(`https://github.com/login/oauth/authorize?client_id=aeba3b94f917b3653e41&redirect_uri=${redirect_uri}&scope=user:email`, '_blank')

        const timerId = setInterval(function () {
            getOAuthJson().then((data) =>{
                if(data.code === 0 ) {
                    clearInterval(timerId)
                    authWin.close()
                    window.location.reload()
                }
            });
        })
    }
    
    render() {
        const {classes} = this.props
        const {value} = this.state
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
                        <IconButton color="inherit" aria-label="Menu">
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
                        <Button className={classes.forgetButton} onClick={this.oauth} >github</Button>
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