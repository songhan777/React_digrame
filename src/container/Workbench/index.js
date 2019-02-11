import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ModleDrawer from './ModleDrawer'
import WorkSpace from './WorkSpace'


const styles = theme => ({
    root: {
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        //z-index: 1300,
        position: 'fixed',
    }
})

class Workbench extends Component {
    static propTypes = {
        prop: PropTypes
    }   
    render() {
        const { classes } = this.props 
        return (
            <div className={classes.root}>
                <ModleDrawer />
                <WorkSpace />
            </div>
        )
    }
}

Workbench.propTypes = {
    clsses:PropTypes.object.isRequired
}
export default withStyles(styles)(Workbench)