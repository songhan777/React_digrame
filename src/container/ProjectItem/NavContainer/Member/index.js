import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import MemberCard from './MemberCard'
import {inject, observer} from "mobx-react/index";
import AddMember from './AddMember'

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

@inject('store')
@observer
class Member extends Component {
    /*  static propTypes = {
          prop: PropTypes
      }*/
    state = {
        expanded: false,
        data: [],//数据
        showBox: false
    };

    constructor(props) {
        super();
        this.store = props.store.DataList;//数据传递的时候
        this.data = this.store.data;
    }

    componentDidMount() {
        let data = JSON.parse(sessionStorage.getItem('key'));
        this.setState({
            data: data.member
        });
    }

    addMember = (data) => {
        this.setState({showBox: !this.state.showBox, data: [...this.state.data, data]})
    };
    ShutMemberBox = () => {
        this.setState({showBox: !this.state.showBox})
    };

    render() {
        const {classes, match} = this.props;
        const {data, showBox} = this.state;
        let box = showBox ? <AddMember shut={this.ShutMemberBox} add={this.addMember}/> : null;
        return (
            <Paper className={classes.root} elevation={1}>
                {box}
                <div className={classes.add} onClick={this.ShutMemberBox}>
                    <Icon color="inherit" fontSize="large">
                        add_circle
                    </Icon>
                </div>
                {data.map((item, index) => {
                    return (<MemberCard key={index} data={item} match={match}/>)
                })}
            </Paper>
        )
    }
}

/*
Member.propTypes = {
    classes:PropTypes.object.isRequired,
}
*/

export default withStyles(styles)(Member)