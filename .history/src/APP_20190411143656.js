import React from 'react' 
import CssBaseline from '@material-ui/core/CssBaseline'
import HomePage from './container/HomePage'
import ProjectLits from './container/ProjectLits'
import ProjectItem from './container/ProjectItem'
import WorkBench from './container/Workbench'
import Compute from './container/ComputationalPage'
import MyProfile from './container/MyProfile'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'mobx-react'
import * as stores from './store/index'
import Register from "./container/HomePage/Register";
import ResetPassword from "./container/HomePage/ResetPassword/index";
import { createMuiTheme } from '@material-ui/core';

const themDefault = createMuiTheme({
    
}) 

export default class APP extends React.Component {
    constructor (){
        super() 
        this.canvas = React.createRef()
        this.state = {
            container:{}
        }
    }
    componentDidMount(){
        console.log(stores)
        }
/*  要增加的还差一个 个人页
       <Route path="/dt" component={} />
        <Route path="/com" component={} />
        <Route path="/mem" component={} /> */
    render() {
        return (<Provider store={stores} >
            <div>
                <CssBaseline />
                    <Router>
                        <div>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/pjl" component={ProjectLits} />
                            <Route path="/pji" component={ProjectItem} />
                            <Route path="/wf" component={WorkBench} />
                            <Route path="/com" component={Compute} />
                            <Route path="/pro" component={MyProfile} />
                            <Route path="/Register" component={Register}/>
                            <Route path="/Reset" component={ResetPassword}/>
                        </div>
                    </Router>
            </div>
            </Provider>)
    }
}
