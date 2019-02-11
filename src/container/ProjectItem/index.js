import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Head from '../../component/Head'
import BasicStateBar from './BasicStateBar'
import Navbar from './NavBar'
import NavContainer from './NavContainer'
import Grid from '@material-ui/core/Grid'



const styles = theme => ({
    root: {
        backgroundColor: theme.palette.grey[200]
    }
})

 class ProjectItem extends Component {
    static propTypes = {
       classes:PropTypes.object.isRequired
    }    
    render() {
        const { match, classes } = this.props
        return (
            <div>
                <Head />
                 <BasicStateBar />
                <Grid container  className={classes.root}>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={10} >
                        <Navbar match={match}/>
                        <NavContainer match={match}/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>     
            </div>
        )
    }
}

export default withStyles(styles)(ProjectItem)