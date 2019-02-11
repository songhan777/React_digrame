import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Wf from './WorkFlow'
import Data from './Data'
import Compute from './Compute'
import Memeber from './Member'
import { Route } from 'react-router-dom'

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


class NavContainer extends Component {
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
            <div>
                <Route path={`${match.path}/wf`} component={Wf} />   
                <Route path={`${match.path}/dt`} component={Data} /> 
                <Route path={`${match.path}/com`} component={Compute} /> 
                <Route path={`${match.path}/mem`} component={Memeber} />   
                <Route
                    exact
                    path={match.path}
                    render={() =>  <Wf/>}
                    />
            </div>
        )
    }
}

NavContainer.propTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(NavContainer)