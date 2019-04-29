import { proListStore, ProjectListItem } from './projectList'
import { observable, action } from 'mobx'
import { withRouter } from 'react-router-dom'
//切换主题：
class ThemesChange {
    @observable theme = 'themDefault'

    @action.bound 
    setTheme(str) {
        if( typeof str === 'string') this.theme = str
    }
}
//   检查是否登录登录
class Authenticated {
    @observable isAuthenticated = false

    @action.bound
    authenticated(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    }
    @action.bound
    sigout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

// 暴露个全局的Router
class Router {
    @observable globalRouter = this.props;
}
class PublicStore {
    @observable modalState = false
    
    @action.bound 
    setModalState(bool) {
        this.modalState = bool
    }
}

const publicStore = new PublicStore()
const themesChange = new ThemesChange()
const authenticated = new Authenticated()
const router = new withRouter(Router)()
export { proListStore, ProjectListItem, publicStore, themesChange, authenticated, router}