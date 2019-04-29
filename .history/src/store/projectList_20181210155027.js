import { observable, action } from 'mobx'
import { getList } from '../API/API'


export class ProjectListItem {
    @observable avatar = ""

    @observable title = ""

    @observable bg = ""

    @observable id =""

    @action.bound
    setAvatar(av) {
        this.avatar = av
    }

    @action.bound 
    setTitle(tit) {
        this.title = tit
    }

    @action.bound
    setBg(bg) {
        this.bg = bg
    }

    @action.bound
    setId(id) {
        this.id = id
    }
}


class ProListStore {
    @observable displayCreatCard = false
    
    @observable projectList = []

    @action.bound 
    setUserName(name) {
      this.username = name 
    }
    
    @action.bound 
    setDisplayCreatCard(bol) {
        console.log(2)
        console.log(bol)
        this.displayCreatCard = bol
    }
}

export let  proListStore = new ProListStore() 