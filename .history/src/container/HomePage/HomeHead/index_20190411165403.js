import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SettinsOutlined from '@material-ui/icons/SettingsOutlined'
import PermIdentity from '@material-ui/icons/PermIdentity'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = (theme) => ({
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
;
    render() {
        const {classes} = this.props;
        const {value} = this.state;
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