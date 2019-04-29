import { observer, inject } from 'mobx-react'

class PubSub {
    onObj = {}
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