import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import Datacard from './Datacard'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        position: 'relative',
        flexWrap: 'wrap',
    },
    add: {
        position: 'absolute',
        right: theme.spacing.unit * 2,
        top: theme.spacing.unit * 2 
    }
});


class Data extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        expanded: false
    };

    handleExpandClick = () => {
        this.setState(state => ({
            expanded: !state.expanded
        }));
    };

    render() {
        const { classes, match } = this.props
        return (
            <Paper className={classes.root} elevation={1}>
                <div className={classes.add}>
                    <Icon color="disbeld" fontSize="large">
                        add_circle
                    </Icon>
                </div>
                <Datacard />
            </Paper>
        )
    }
}

Data.propTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(Data)