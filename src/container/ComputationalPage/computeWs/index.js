import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Widge } from '../../../Canvas'
import IconButton from '@material-ui/core/IconButton'
import Save from '@material-ui/icons/Save'
import Refresh from '@material-ui/icons/Refresh'
import Edit from '@material-ui/icons/Edit'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Close from '@material-ui/icons/Close'

const styles = (theme) => ({
    content: {
        flexGrow: 1,
        //padding: theme.spacing.unit * 3,
        height: '90vh',
        position:'relative',
    },
    toolbar: theme.mixins.toolbar,
    tool: {
        position: 'absolute',
        right: 10,
        bottom:10,
        display:'flex',
        alignItems:'center'
    },
    ul: {
        listStyle: 'none',
        display: 'flex'
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color:theme.palette.primary.contrastText,
        marginRight: theme.spacing.unit * 2,
    }
})

 class computeWs extends Component {
    static propTypes = {
        prop: PropTypes
    }   
    render() {
        const { classes } = this.props
        return (                
            <main className={classes.content}>
                <Widge />
                <div className={classes.tool}>
                    <ul className={classes.ul}>
                        <li><IconButton className={classes.button}><Save  /></IconButton></li>
                        <li><IconButton className={classes.button}><Refresh /></IconButton></li>
                        <li><IconButton className={classes.button}><Edit /></IconButton ></li>
                        <li><IconButton className={classes.button}><PlayArrow /></IconButton></li>
                    </ul>
                    <div>
                        <IconButton className={classes.button}>
                            <Close fontSize="large" />
                        </IconButton>
                        </div>
                    
                </div>
            </main>
        )
    }
}

computeWs.propTypes = {
    clsses:PropTypes.object.isRequired
}
export default withStyles(styles)(computeWs)