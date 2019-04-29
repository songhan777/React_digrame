import React from 'react' 
import CssBaseline from '@material-ui/core/CssBaseline'
import HomePage from './container/HomePage'
import ProjectLits from './container/ProjectLits'
import ProjectItem from './container/ProjectItem'
import WorkBench from './container/Workbench'
import Compute from './container/ComputationalPage'
import MyProfile from './container/MyProfile'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Register from "./container/HomePage/Register";
import ResetPassword from "./container/HomePage/ResetPassword/index";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';


const themDefault = createMuiTheme({
    palette: {
        primary: {main: '#e91e63'}
    }

}) 
const themeGreen = createMuiTheme({
    palette: {
        primary: {main: '#11cb5f'}
    }

})
const themeObj = {themDefault, themeGreen}
@inject('store')
@observer
class APP extends React.Component {
    constructor (props){
        super() 
        this.canvas = React.createRef()
        this.store = props.store.themesChange
        this.setTheme = this.store.setTheme

    }
    state = {
        container:{}
    }
    componentDidMount(){
    }

    render() {
        let theme = this.store.theme
        return (
            <MuiThemeProvider theme={themeObj[theme]}>
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
            </MuiThemeProvider>
            )
    }
}
export default  APP