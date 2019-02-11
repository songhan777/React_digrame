import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import { Link } from  'react-router-dom'
import bgheader from '../../../static/images/home/bg_header.png'
import bgfooter from '../../../static/images/home/bg_footer.png'
import bgcenter from '../../../static/images/home/bg_center.png'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SettinsOutlined from '@material-ui/icons/SettingsOutlined'
import PermIdentity from '@material-ui/icons/PermIdentity'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = (theme) =>({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },
    AppRoot: {
        zIndex: theme.zIndex.drawer + 1,
    },
    toolBar: {
        minHeight:48
    },
    grow: {
        textAlign:'center',
        display: 'flex',
        flexGrow: '1'
    },
    growLogo: {
        display:'flex',
        alignItems:'center',
        textAlign:'center'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    first: {
        position: 'relative',
        background:`url(${bgheader}) no-repeat `,
        backgroundSize: '100% 100%',
        width: '100%',
        height: '100%',
        color: theme.palette.primary.contrastText
    },
    footer: {
        position:'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '30%',
        background:`url(${bgfooter}) no-repeat `,
        backgroundSize: '100% 100%',
    },
    center: {
        width: '57%',
        height: '90%',
        position: 'absolute',
        background: `url(${bgcenter}) no-repeat`,
        backgroundSize: '100% 100%',
        right: '2%',
        bottom: '4%'
    },
    margin: {
        margin: theme.spacing.unit,
      },
    textField: {
        flexBasis: 200,
    },
    textColor: {
        color:theme.palette.primary.contrastText
    },
    modle: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        width: '50%',
        height: '50%',
        color: theme.palette.primary.contrastText
    },
    cssLabel: {
        color: theme.palette.primary.contrastText,
        '&$cssFocused': {
            color: theme.palette.primary.contrastText,
        },
    },
    cssFocused: {},
    cssUnderline: {
        color: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.contrastText,
        '&:after': {
            color: theme.palette.primary.contrastText,
            borderBottomColor: theme.palette.primary.contrastText,
        },
        '&:before': {
            color: theme.palette.primary.contrastText,
            borderBottomColor: theme.palette.primary.contrastText,
        },
    },
    loginButton: {
        marginTop:20,
        marginLeft:20,
        width:100,
        borderRadius: 50,
    },
    singUpButton: {

    }
})




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
                    <Tabs value={value} onChange={this.handleChange}>
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
                              <FormControl fullWidth className={classes.margin}></FormControl>
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
                        <div >
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <Lock />
                                </Grid>
                                <Grid item>
                                <FormControl fullWidth className={classes.margin}>
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
                                </FormControl>
                              </Grid>
                            </Grid>
                        </div>
                    </div>
                    <Button component={Link} variant="contained" size="medium" color="common.white" to="/pjl" >登  录</Button>
                    <input type="text" name="" type="text" style={{display:'none'}} />
                    <Button className={classes.loginButton} >注 册</Button>
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