import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Head from '../../component/Head'
import SetTheme from './SetTheme'


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

class MyProFile extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
               <Head />
                <SetTheme />
            </div>
        )
    }
}


MyProFile.propTypes = {
    clsses:PropTypes.object.isRequired
}
export default withStyles(styles)(MyProFile)