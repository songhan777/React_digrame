import { observer, inject } from 'mobx-react'

class PubSub {
    onObj = {}
    on = function (key, fn) {
        if(this.onObj[key] === undefined) {
            this.onObj[key] = [];
        }
        this.onObj[key].push(fn)
    }
}