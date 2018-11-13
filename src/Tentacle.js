import * as _ from 'lodash' 

export  default class Tentacle  extends  cce.DisplayObject {
        constructor() {
        super() 
        this.In = {} 
        this.InAry = [] //排顺讯用的，通过存储的Id来确认顺序
        this.Out={} 
        this.OutAry = [] 
        // 是否是缩回状态，true是缩回状态表示缩回在节点的底部
        this.anastole = true
        // 代表当前动画状态，true表示动画正在运行，false表示动画结束了，container容器通过代理去触发下一段函数
        this.animtionState = false 
        this.Lins = [] //当前节点中触手的连线
    }
    addIn(ele) {
        this.In[ele.id] = ele 
        const flg = this.InAry.some((x) => {
            return x == ele.id 
        })
        !flg?this.InAry.push(ele.id):null 
        //之前没添加过，在去划线
        !flg?this.Lins.push({In:ele}):null 
    }
    addOut(ele) {
        this.Out[ele.id] = ele 
        const flg = this.OutAry.some((x) => {
            return x == ele.id 
        })
        !flg ? this.OutAry.push(ele.id) : null 
        !flg ? this.Lins.push({Out:ele}) : null 
    }
    _draw() {
        const self = this 
        function creatIoNode (self,str) {
            let strAry = str + 'Ary';
            _.forEach(self[str], (item,key) => {
                const index = self[strAry].indexOf(key) 
                item.draw(self,index,str) 
            })
        }
        //先在canvas上画线
        if (self.click == 0) {
            this.anastole = true
        } else if ( self.click == 3) {
            _.forEach(this.Lins,item => {
                this.context.beginPath()
                this.context.strokeStyle = 'rgba(36,36,36,1)'
                this.anastole = false 
                if (item[this.IO] !== undefined) {
                    this.context.moveTo(item[this.IO].node.x,item[this.IO].node.y)
                    this.context.lineTo(item[this.IO].minNode.x,item[this.IO].minNode.y)
                }
                this.context.lineWidth=2 
                this.context.stroke() 
                this.context.closePath() 
            })
            creatIoNode(this,this.IO)
            return 
        }
        
        _.forEach(this.Lins, item => {
            this.context.beginPath() 
            this.context.strokeStyle = 'rgba(36,36,36,1)' 
            for (let key in item) {
                this.context.moveTo(item[key].node.x, item[key].node.y)
                this.context.lineTo(item[key].minNode.x, item[key].minNode.y)
            }
            this.context.lineWidth=2 
            this.context.stroke() 
            this.context.closePath() 
        })
        creatIoNode(self,'In')
        creatIoNode(self,'Out')
    }
}