import { proListStore, ProjectListItem } from './projectList'
import { observable, action } from 'mobx'
import { setReactionScheduler } from 'mobx/lib/internal';

//切换主题：
class ThemesChange {
    @observable theme = 'default'

    @action.bound 
    setTheme(str) {
        if( typeof str === 'string') this.theme = str
    }
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
export { proListStore, ProjectListItem, publicStore, themesChange }