import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import Datacard from './Datacard'
import PopupsAddSetData from './PopupsAddSetData'
import {observer, inject} from 'mobx-react'
import {dataListDate} from '../../../../store/index'


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
        top: theme.spacing.unit * 2,
        cursor: "pointer"
    }
});

@inject('store')
@observer
class Data extends Component {

    state = {
        expanded: false,
        popupsShow: false,
        data: []//数据的获取
    };

    constructor(props) {
        super();
        this.store = props.store.DataList;//数据传递的时候
        this.data = this.store.data;
    }

    componentDidMount() {
        let data = JSON.parse(sessionStorage.getItem('key'));
        this.setState({
            data: data.dataGather
        })
    }

    handleExpandClick = () => {
        this.setState(state => ({
            expanded: !state.expanded,
        }));
    };

    addDataSet = () => {
        console.log("增加数据展示");
        this.setState({
            popupsShow: !this.state.popupsShow
        })
    };

    setDataSet = (data) => {
        this.setState({
            data: [...this.state.data, data]
        })
    };

    render() {
        const {classes, match} = this.props;
        const {popupsShow, data} = this.state;
        return (
            <Paper className={classes.root} elevation={1}>
                {popupsShow ? <PopupsAddSetData shut={this.addDataSet} data={data} addData={this.setDataSet}/> : null}
                <div className={classes.add} onClick={this.addDataSet}>
                    <Icon color="inherit" fontSize="large">
                        add_circle
                    </Icon>
                </div>
                {data.map((item, index) => {
                    return (<div key={index}>
                        <Datacard data={item} match={match}/>
                    </div>)
                })}
            </Paper>
        )
    }
}

Data.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Data)