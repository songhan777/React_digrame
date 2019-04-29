import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class PubSub  {
    onObj = {}
    this.onObj = 
    on = function (key, fn) {
        if(this.onObj[key] === undefined) {
            this.onObj[key] = [];
        }
        this.onObj[key].push(fn)
    }
    trigger = function () {
        let key, args;
        if(argument.length === 0) {
            return false ;
        }
        key = arguments[0];
        args = 
    }
}