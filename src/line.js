import * as _ from 'lodash' 
import img  from  './img/chunse.png'
export  default class Line  extends  cce.DisplayObject {
    constructor(aa,bb){
        super() 
        this.from=aa 
        this.to = bb 
        this.cachCanvas = document.createElement("canvas")
        this.cachContxt = this.cachCanvas.getContext("2d")
        this.linImg 
    }
    draw (){
        let x = null 
        let y = null 
        if(this.to.node == undefined){
             x = this.to.x 
             y  = this.to.y 
        } else {
             x = this.to.node.x 
             y = this.to.node.y  
        }
       // let  angle = Math.atan2((y-this.from.node.y),(x-this.from.node.x))
        //console.log(angle)
       // let widt = Math.sqrt( Math.pow(this.from.node.x-x,2) + Math.pow(this.from.node.y-y,2) ).toFixed(2)
       // this.cachContxt.save();
       
/*         let linImg = new Image()
        linImg.src = img 
        const _this = this 
        linImg.onload = ()=>{
            console.log(1)
            _this.context.drawImage(linImg,0,0)
            //_this.context.drawImage(linImg,_this.from.node.x,_this.from.node.y,_this.from.node.x-x,_this.from.node.y-y)
    
        }
        this.context.drawImage(linImg,0,0) */
       this.context.beginPath() 
        this.context.strokeStyle = 'rgba(36,36,36,1)' 
        this.context.moveTo(this.from.node.x,this.from.node.y) 
        this.context.lineTo(x,y) 
        this.context.lineWidth=2 
        this.context.closePath() 
        this.context.stroke()  
    }
}