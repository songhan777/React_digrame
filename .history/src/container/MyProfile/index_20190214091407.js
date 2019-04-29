import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Head from '../../component/Head'
import SetTheme from './SetTheme'
import SetTeam from './SetTeam'
import SetWork from './SetWork'
import {Drawer} from '@material-ui/core';
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import {styles} from './css'

class MyProFile extends Component {
    state = {
        show: 1
    };

    static propTypes = {
        prop: PropTypes
    };

    setShowModule = () => {
        if (this.state.show === 1) {
            return <SetWork/>
        } else if (this.state.show === 2) {
            return <SetTeam/>
        } else if (this.state.show === 3) {
            return <SetTheme/>
        }
    };

    showWork = () => {
        this.setState({show: 1});
    };
    showTeam = () => {
        this.setState({show: 2});
    };
    showTheme = () => {
        this.setState({show: 3});
    };

    handleSidebar = (value) => {
        const {classes} = this.props;
        return this.state.show === value ? classNames(classes.first_Ava, classes.active) : classes.first_Ava
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Head>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar}/>
                        <div className={classes.container}>
                            <div className={classes.first}>
                                <div className={this.handleSidebar(1)} onClick={this.showWork}>
                                    <Avatar className={classes.avatar}>工程</  Avatar>
                                </div>
                                <div className={this.handleSidebar(2)} onClick={this.showTeam}>
                                    <Avatar className={classes.avatar}>个人</  Avatar>
                                </div>
                                <div className={this.handleSidebar(3)} onClick={this.showTheme}>
                                    <Avatar className={classes.avatar}>设置</  Avatar>
                                </div>
                            </div>
                        </div>
                    </Drawer>
                    <div className={classes.contentContainer}>
                        {this.setShowModule()}
                    </div>
                </Head>
            </div>
        )
    }
}


MyProFile.propTypes = {
    clsses: PropTypes.object.isRequired
}
export default withStyles(styles)(MyProFile)