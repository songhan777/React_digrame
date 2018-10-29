/**
 * 图形类的父类，其中存储图形类所需要的2d句柄以及其他需要的变量
 * @class DisplayObject 
 * @extends EventTarget
 * @author Zhu Nan
 * 
 */
import  EventTarget from  './EventTarget'
  export default  class DisplayObject extends  EventTarget {

      /**
       *Creates an instance of DisplayObject.
       * @property {NodeList} canvas 
       * @property {Object} context
       * @property {Boolen} lastState
       * @property {Boolen} nowState
       * @memberof DisplayObject
       * 
       */
      constructor() {
            super() 
            this.canvas = null 
            this.context = null 
            this.lastState=null 
            this.nowState=null 
            this.id=null 
            this.init() 
        }
        init(){
            this.id = this.createOwnId() 
        }
        createOwnId() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                const r = (Math.random() * 16) | 0 
                const v = c === 'x' ? r : (r & 0x3) | 0x8 
                return v.toString(16) 
            }) 
        }
        getId() {
            return  this.id 
        }
    }