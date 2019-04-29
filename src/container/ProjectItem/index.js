import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import Head from '../../component/Head'
import BasicStateBar from './BasicStateBar'
import Navbar from './NavBar'
import NavContainer from './NavContainer'
import Grid from '@material-ui/core/Grid'
import {getProjectData} from "../../API/API"
import {observer, inject} from 'mobx-react'


const styles = theme => ({
    root: {
        backgroundColor: theme.palette.grey[200]
    }
});

@inject('store')
@observer
class ProjectItem extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    constructor(props) {
        super();
        this.store = props.store.DataList;//数据传递的时候
        this.data = this.store.data;
    }

    componentDidMount() {
        sessionStorage.removeItem('key');
        console.log(this.props.match.params.project);
        console.log("主页面数据")
        getProjectData({userId: 111111, projectId: this.props.match.params.project}).then((data) => {
            let value = JSON.stringify(data)
            sessionStorage.setItem('key', value);
            this.store.handleSetData(data)
        });
    }

    render() {//
        const {match, classes} = this.props;

        return (
            <div>
                <Head/>
                <BasicStateBar/>
                <Grid container className={classes.root}>
                    <Grid item xs={1}/>
                    <Grid item xs={10}>
                        <Navbar match={match}/>{/*导航栏数据的导入*/}
                        <NavContainer match={match}/>{/*数据导入*/}
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ProjectItem)