import { proListStore, ProjectListItem } from './projectList'
import { observable, action } from 'mobx'

//切换主题：
class Th

class PublicStore {
    @observable modalState = false
    
    @action.bound 
    setModalState(bool) {
        this.modalState = bool
    }
}

const publicStore = new PublicStore()
export { proListStore, ProjectListItem, publicStore }