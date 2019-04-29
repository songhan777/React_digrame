import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import HomePage from './container/HomePage'
import ProjectLits from './container/ProjectLits'
import ProjectItem from './container/ProjectItem'
import WorkBench from './container/Workbench'
import Compute from './container/ComputationalPage'
import MyProfile from './container/MyProfile'
import { HashRouter as Router,  Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Register from "./container/HomePage/Register";
import ResetPassword from "./container/HomePage/ResetPassword/index";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { themeObj } from './css'
import PrivateRoute from './component/PrivateRoute'
@inject('store')
@observer
class APP extends React.Component {
    constructor(props) {
        super()
        this.canvas = React.createRef()
        this.store = props.store.themesChange
        this.setTheme = this.store.setTheme
        this.
    }
    state = {
        container: {}
    }
    componentDidMount() {}

    render() {
        let theme = this.store.theme
        return (
            <MuiThemeProvider theme={themeObj[theme]}>
                <CssBaseline />
                    <Router>
                        <div>
                            <Route path="/" exact component={HomePage} />
                            <PrivateRoute path="/pjl" component={ProjectLits} />
                            <PrivateRoute path="/pji" component={ProjectItem} />
                            <PrivateRoute path="/wf" component={WorkBench} />
                            <PrivateRoute path="/com" component={Compute} />
                            <PrivateRoute path="/pro" component={MyProfile} />
                            <Route path="/Register" component={Register}/>
                            <Route path="/Reset" component={ResetPassword}/>
                        </div>
                    </Router>
            </MuiThemeProvider>
        )
    }
}
export default  APP