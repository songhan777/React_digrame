import DisplayObject from './DisplayObject'
export default class MenuUnitCircle extends DisplayObject {
    constructor(r = 15,text) {
        super()
        this.x = null
        this.y = null
        this.r = r
        this.text =text
        this.index = null//
        this.radian =null//小球走的弧度
    }

    addText() {

    }
    
    addIndex() {

    }

    addPoin() {

    }

    draw(point) {
        this.context.beginPath() 
        this.context.fillStyle = 'rgba(36, 36, 36, 1)' 
        this.context.strokeStyle= 'rgba(39, 248, 19, 1)' 
        this.context.lineWidth =6 
        this.context.arc(point.x, point.y, this.r, 0, Math.PI * 2, 0) 
        this.context.stroke() 
        this.context.fill() 
        this.context.beginPath()
    }
}
