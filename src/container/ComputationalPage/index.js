import React, { Component } from 'react'
import Head from '../../component/Head'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import CW from './computeWs'
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


class CoputationalPage extends Component {
    
    render() {
        const { classes }  = this.props 
        return (
            <div>
                <Head />
                <CW />
            </div>
        )
    }
}

CoputationalPage.propTypes = {
    clsses:PropTypes.object.isRequired
}
export default withStyles(styles)(CoputationalPage)