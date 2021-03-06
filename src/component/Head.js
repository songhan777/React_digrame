import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SettinsOutlined from '@material-ui/icons/SettingsOutlined'
import PermIdentity from '@material-ui/icons/PermIdentity'
import {Link} from 'react-router-dom'
import {userLogout} from "../API/API";


const styles = (theme) => ({
    root: {
        //boxShadow:'0px 5px 3px #888888',
        flexGrown: 1,
    },
    AppRoot: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.primary.main,
        boxShadow: `inset 0 -2px 0 rgba(108,148,204)`
    },
    toolBar: {
        minHeight: 48
    },
    grow: {
        flexGrow: 1,
        textAlign: 'center',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});


class Head extends Component {
    handleUserLogout = () => {
        console.log("用户退出")
        //　用户的参数用户名
        userLogout().then((data) => {
            if (data.code === 0) {
                alert("退出成功")
                //指定路由跳转去 主页
            } else {
                alert("退出失败")
            }
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.AppRoot}>
                    <Toolbar className={classes.toolBar}>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.grow}
                        >
                            QITQI
                        </Typography>
                        <IconButton color="inherit" aria-label="Menu" component={Link} to="/pro">
                            <SettinsOutlined/>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.handleUserLogout}>
                            <PermIdentity/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {this.props.children}
            </div>
        )
    }
}

Head.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Head)
