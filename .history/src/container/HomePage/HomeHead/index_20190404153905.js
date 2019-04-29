import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SettinsOutlined from '@material-ui/icons/SettingsOutlined'
import PermIdentity from '@material-ui/icons/PermIdentity'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import bgheader from '../../../../static/images/home/bg_header.png'
import bgfooter from '../../../../static/images/home/bg_footer.png'
import bgcenter from '../../../../static/images/home/bg_center.png'

const styles = (theme) => ({
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
        backgroundColor: 'rgba(59,76,113)',
        boxShadow: `inset 0 -2px 0 rgba(108,148,204)`
    },
    toolBar: {
        minHeight: 48
    },
    tabsIndicator: {
        backgroundColor: 'white'
    },
    grow: {
        textAlign: 'center',
        display: 'flex',
        flexGrow: '1'
    },
    growLogo: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    first: {
        position: 'relative',
        background: `url(${bgheader}) no-repeat `,
        backgroundSize: '100% 100%',
        width: '100%',
        height: '100%',
        color: theme.palette.primary.contrastText
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '30%',
        background: `url(${bgfooter}) no-repeat `,
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
        color: theme.palette.primary.contrastText
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
        width: 200,
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
        display: 'block',
        textAlign: 'center',
        width: 240,
        marginTop: 20,
        backgroundColor: 'white'
    },
    forgetButton: {
        marginTop: 10,
        width: 100,
        borderRadius: 50,
        color: 'white'
    },
    singUpButton: {
        marginTop: 10,
        marginLeft: 50,
        width: 100,
        borderRadius: 50,
        color: 'white'
    }
})


class HomeHead extends Component {
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
        foucse: false,
    }

    componentDidMount() {

    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props
        const {value} = this.state
        return (
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
        )
    }
}

export default withStyles(styles)(HomeHead)