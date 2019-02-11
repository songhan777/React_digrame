import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import { Link } from  'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
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
import { styles } from './css'

class HomePage extends Component {
    static propTypes = {
        clsses: PropTypes.object.isRequired
    }
    state = {
        value: 0,
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        foucse:false,
    } 
    componentDidMount () {

    }
    handlePasswordChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleChange = (event, value) => {
        this.setState({ value });
      };
    
    handleType = () => {
        this.setState({foucse:true})
    }
    render() {
        const { classes } = this.props
        const { value } = this.state
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
                    <Tabs value={value} onChange={this.handleChange} classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }} >
                        <Tab label="首 页" />
                        <Tab label="帮 助" />
                        <Tab label="新 闻" />
                    </Tabs>
                    </div>
                    <IconButton color="inherit" aria-label="Menu" component={Link} to="/pro">
                        <SettinsOutlined /> 
                    </IconButton>
                    <IconButton color="inherit" aria-label="Menu">
                        <PermIdentity />
                    </IconButton>
                </Toolbar>
                </AppBar>
            <div className={classes.first}>
                <div className={classes.modle}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.textColor}>
                        工 作 流 可 视 化 平 台
                    </Typography>
                    <Typography component="p" className={classes.textColor}>
                    Workflow   visualization   platform
                    </Typography>
                    <div className={classes.loging} >
                        <div >
                            <Grid container spacing={8} alignItems="flex-end">
                              <Grid item>
                                <Person />
                              </Grid>
                              <Grid item>
                                <TextField id="input-with-icon-grid" label="用户名" autoFocus={false}
                                InputLabelProps={{
                                    classes:{
                                        root:classes.cssLabel,
                                        focused: classes.cssFocused
                                    }
                                }}
                                InputProps={{
                                    classes:{
                                        underline:classes.cssUnderline
                                    }
                                }}
                                 />
                              </Grid>
                            </Grid>
                        </div>
                        <input type="text" name="" type="text" style={{display:'none'}} />
                        <div >
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <Lock />
                                </Grid>
                                <Grid item>
                                <TextField
                                    id="filled-adornment-password"
                                    type={ !this.state.foucse || this.state.showPassword ? 'text' :    'password'}
                                    label="密码"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange ('password')}
                                    onFocus= {this.handleType}
                                    InputLabelProps={{
                                        classes:{
                                            root:classes.cssLabel,
                                            focused: classes.cssFocused
                                        }
                                    }}
                                    InputProps={{
                                        classes:{
                                            underline:classes.cssUnderline
                                        },
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password     visibility"
                                                onClick=    {this.handleClickShowPassword}
                                            >
                                            {this.state.showPassword ?  <VisibilityOff className={classes.textColor} /> : <Visibility className={classes.textColor} />}
                                            </IconButton>
                                        </InputAdornment>
                                        ),
                                    }}
                                />
                              </Grid>
                            </Grid>
                        </div>
                    </div>

                    <Button component={Link} variant="contained" className= {classes.loginButton} size="medium"  to="/pjl" >登  录</Button>
                    <Button className={classes.forgetButton} >忘 记 密 码</Button>
                    <Button className={classes.singUpButton} >注 册</Button>
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

export default withStyles(styles)(HomePage)