import * as _ from 'lodash'
import img from './img/img_line_1.png'
import {accAdd, accSub, accMul, accDiv}  from './math.js'
export default class Line extends cce.DisplayObject {
    constructor(aa, bb) {
        super()
        this.from = aa
        this.to = bb
        this.cachCanvas = document.createElement("canvas")
        this.cachContxt = this.cachCanvas.getContext("2d")
        this.linImg = {}
        this.init()
    }
    init() {
        this.linImg = new Image()
        this.linImg.src = img
        this.linImg.onload = () => {
            this.cachContxt.drawImage(this.linImg, 0, 0)
            this.cachContxt.save();
        }
    }
    draw() {
        let x = null
        let y = null
        if (this.to.node == undefined) {
            x = this.to.x
            y = this.to.y
        } else {
            x = this.to.node.x
            y = this.to.node.y
        }

        /*         let  angle = Math.atan2((y-this.from.node.y),(x-this.from.node.x))
                console.log(angle)
                this.cachContxt.restore()
                this.cachContxt.rotate(angle);
                this.cachContxt.translate(100,100)
                this.context.drawImage(this.cachCanvas, 100, 100, x-this.from.node.x, y-this.from.node.y,this.from.node.x, this.from.node.y, x-this.from.node.x, y-this.from.node.y) */

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


        function createArrow(ctx, ary, sta, end) {
            //画箭头 
            ary.forEach(element => {
                ctx.save()
                ctx.globalCompositeOperation = "destination-out"; 
                ctx.translate(element[0], element[1]);
                //我的箭头本垂直向下，算出直线偏离Y的角，然后旋转 ,rotate是顺时针旋转的，所以加个负号
                var ang = (end[0] - sta[0]) / (end[1] - sta[1]);
                ang = Math.atan(ang)
                if (end[1] - sta[1] >= 0) {
                    ctx.rotate(-ang);
                } else {
                    ctx.rotate(Math.PI - ang); //加个180度，反过来
                }
                ctx.moveTo(-5,-5)
                ctx.lineTo(-5, -10)
                ctx.lineTo(0, -5)
                ctx.lineTo(5, -10)
                ctx.lineTo(5, -5)
                ctx.lineTo(0, 0)
                ctx.fill() //箭头是个封闭图形
               ctx.restore()
                 //恢复到堆的上一个状态，其实这里没什么用。
            });

        }
        function makeArrowsReference (ary,sta = [0,0],end = [0,0]) {
            let subx  = accAdd(sta[0],end[0])
            let divx = accDiv(subx,2)
            let suby = accAdd(sta[1],end[1])
            let divy = accDiv(suby,2)
            let x = divx
            let y = divy
            let center = [x,y]
            let a = accAdd(sta[0],x)
            let b = accAdd(sta[1],y)
            let c = accMul(a,a)
            let d = accMul(b,b)
            let e = accAdd(c,d)
                console.log(e)
            let length  = Math.sqrt(e)
            ary.push(center)
            console.log(length)
            if (length < 20)  return  
            makeArrowsReference(ary,sta,center)
            makeArrowsReference(ary,center,end)
        }
        this.context.beginPath()
        this.context.strokeStyle = 'rgba(36,36,36,1)'
        this.context.moveTo(this.from.node.x, this.from.node.y)
        this.context.lineTo(x, y)
        this.context.lineWidth = 10
        //this.context.closePath()
        this.context.stroke()
        this.context.save()
        let ary = [] 
        makeArrowsReference(ary,[this.from.node.x,this.from.node.y],[x,y])
        //this.context.restore()
        console.log(ary)
        createArrow(this.context, ary, [this.from.node.x, this.from.node.y], [x,y])
        this.context.restore()
        this.context.closePath();
    }
}