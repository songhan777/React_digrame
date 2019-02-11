import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import deepOrange from '@material-ui/core/colors/deepOrange'
import Drawer from '@material-ui/core/Drawer'
import red from '@material-ui/core/colors/red'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InsertDriveFileOutlined from '@material-ui/icons/InsertDriveFileOutlined'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import SettinsOutlined from '@material-ui/icons/SettingsOutlined'
import PermIdentity from '@material-ui/icons/PermIdentity'
import { Link } from 'react-router-dom'

const drawerWidth = 250;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor:'rgba(59,76,113)',
        boxShadow:`inset 0 -2px 0 rgba(108,148,204)`
    }, 
    toolBarHeight: {
        minHeight:48
    },
    grow: {
        flexGrow: 1,
        textAlign:'center',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '90vh',
    },
    toolbar: {height:49} ,
    container: {
        height: '100%',
        backgroundColor: red[500],
        display: 'flex',
    },
    first: {
        flex: '1 1 auto',
        width: 100,
        backgroundColor: 'rgba(59,76,113)'
    },
    secondiry: {
        flex: '1 1 auto',
        width: 150,
        backgroundColor: theme.palette.grey[200],
        padding:theme.spacing.unit * 1
    },
    first_Ava: {
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    active: {
        backgroundColor: theme.palette.grey[200],
         borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50, 
        marginLeft:
        //boxShadow:'inset 10px 0 0 rgba(59,76,113)'
    },
    avatar: {
        color: '#fff',
        backgroundColor: deepOrange[500],
        width: 50,
        height: 50,
    },
    title: {
        marginTop: `${theme.spacing.unit * 2}px`
    },
    paper: {
        display: 'flex',
        alignItems:"center",
        marginTop: `${theme.spacing.unit * 2}px`
    },

} )

class ModleDrawer extends Component {
    static propTypes = {
        prop: PropTypes
    }   
    render() {
        const { classes } = this.props 
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolBarHeight}>
                    <Typography 
                        variant="h6" 
                        color="inherit" 
                        className={classes.grow}
                    >
                       QITQI
                    </Typography>
                    <IconButton color="inherit" aria-label="Menu" component={Link} to="/pro">
                        <SettinsOutlined /> 
                    </IconButton>
                    <IconButton color="inherit" aria-label="Menu">
                        <PermIdentity />
                    </IconButton>
                </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <div className={classes.container}>
                        <div className={classes.first}>
                            <div className={classNames(classes.first_Ava,classes.active)}>
                                <Avatar className={classes.avatar}>H</Avatar>
                            </div>
                            <div className={classes.first_Ava}>
                                <Avatar className={classes.avatar}>H</Avatar>
                            </div>
                        </div>
                        <div className={classes.secondiry}> 
                            <Typography className={classes.title}>
                                系统设计
                            </Typography>
                            <Paper className={classes.paper}                 draggable={true}
                //拖拽事件发生
                onDragStart={event => {
                    /*规定拖拽的位置带过去的数据生成节点，拖动的是数据不仅仅是眼睛可见的，通过方法将数据带出去*/
                    //文件名称和ID
                    event.dataTransfer.setData("storm-diagram-node",  JSON.stringify({
                        color: 111,
                        name: 2222,
                        out: 3,
                        outVal: 4,
                        in: 5,
                        inVal: 6
                    }));
                }}
                            >
                                <InsertDriveFileOutlined />
                                <Typography>
                                    系统规范设计
                                </Typography>
                            </Paper>
                        </div>
                    </div>
                </Drawer>

            </div>
        )
    }
}

ModleDrawer.propTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(ModleDrawer)