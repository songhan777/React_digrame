import React from 'react' 
import {DispalyObject, Container} from './Canvas/index' 
import  Circle  from './Canvas/circle'
import  Tentacle from './Canvas/Tentacle'
import Rect  from './Canvas/rect'
import Line  from './Canvas/line'
import * as _ from 'lodash' 
import { Function } from 'core-js' 

export default class APP extends React.Component {
    constructor (){
        super() 
        this.canvas = React.createRef()
        this.container = this.container
        this.state = {
            s : [] ,
            a : ""
        }
    }
    componentWillMount(){
        window.requestAnimationFrame(function(){
        }) 
    }
    componentDidMount(){
        let  container = new Container (this.canvas.current) 
        this.container = container
        container.enableMouse() 
        container.enableClick() 
        let circle = new Circle(200,200,50) 
        container.addChild(circle) 

       // let tentacle = new Tentacle(circle) 
        let recIn = new Rect(circle) 
        let recIn1 = new Rect(circle) 
        let recIn2 = new Rect(circle) 
        let recIn3 = new Rect(circle) 
        let recIn4 = new Rect(circle) 
        let recIn5 = new Rect(circle) 
        let recOut = new Rect(circle) 
        let recOut1 = new Rect(circle) 
        let recOut2 = new Rect(circle) 
        let recOut3 = new Rect(circle) 
        let recOut4 = new Rect(circle) 
        let recOut5 = new Rect(circle) 

        circle.addIn(recIn) 
        circle.addIn(recIn1) 
        circle.addIn(recIn2) 
      /*   tentacle.addIn(recIn3) 
        tentacle.addIn(recIn4) 
        tentacle.addIn(recIn5)  */

        circle.addOut(recOut) 
        circle.addOut(recOut1) 
      /*   tentacle.addOut(recOut2) 
        tentacle.addOut(recOut3) 
        tentacle.addOut(recOut4) 
        tentacle.addOut(recOut5)  */ 

        let  circle1 = new Circle(500,500,50) 

        container.addChild(circle1)
    

        // let tentacle1 = new Tentacle(circle1)

        let recIn21 = new Rect(circle1) 
        let recOut21 = new  Rect(circle1) 
        circle1.addIn(recIn21) 
        circle1.addOut(recOut21) 
        //container.addTentacle(tentacle) 
        //container.addTentacle(tentacle1) 

        function animate(){
            container.draw()
            RAF(animate) 
        }
      
        window.RAF = (function(){
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };
        })();
        RAF(animate)
        }
        btnClick = () => {
            console.log(this.container.serialize())
        }
    render() {
        return (<div>
            <canvas  ref ={this.canvas} height='800' width='1500' style={{border:'1px solid rgba(0,0,0,1)' }}></canvas>
            <button onClick={this.btnClick}>序列化</button>
            </div>)
    }
}
