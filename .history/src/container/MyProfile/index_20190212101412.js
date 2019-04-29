import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Head from '../../component/Head'
import SetTheme from './SetTheme'
import { Drawer } from '@material-ui/core';

const drawerWidth = 100;
const styles = theme => ({
    root: {
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        //z-index: 1300,
        position: 'fixed',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        zIndex:-1,
        width: drawerWidth,
    },
    toolbar: {height:48} ,
})

class MyProFile extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
               <Head >
               <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
               >
                    <div className={classes.toolbar} />
                    <div className={class}>
                      <div className={classes.first}>
                          <div className={classNames  (classes.first_Ava, classes.active)}>
                              <Avatar className=  {classes.avatar}>H</  Avatar>
                          </div>
                          <div className= {classes.first_Ava}>
                              <Avatar className=  {classes.avatar}>H</  Avatar>
                          </div>
                      </div>
                    </div>
               </Drawer>
               </Head>
                <SetTheme />
            </div>
        )
    }
}


MyProFile.propTypes = {
    clsses:PropTypes.object.isRequired
}
export default withStyles(styles)(MyProFile)