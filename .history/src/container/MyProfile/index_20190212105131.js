import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Head from '../../component/Head'
import SetTheme from './SetTheme'
import { Drawer } from '@material-ui/core';

import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import {styles} from './css'

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
                    <div className={classes.container}>
                      <div className={classes.first}>
                          <div className={classNames  (classes.first_Ava, classes.active)}>
                              <Avatar className=  {classes.avatar}>H</  Avatar>
                          </div>
                          <div className= {classes.first_Ava}>
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