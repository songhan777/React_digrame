import React from 'react' 
import {DispalyObject, Container} from './Canvas/index' 
import  Circle  from  './circle' 
import  Tentacle from './Tentacle'
import Rect  from './rect' 
import Line  from  './line'
import * as _ from 'lodash' 
import { Function } from 'core-js' 

export default class APP extends React.Component {
    constructor (){
        super() 
        this.canvas = React.createRef()
        this.state = {
            s : [] ,
            a : ""
        }
    }
    componentWillMount(){
        window.requestAnimationFrame(function(){
            console.log('@@@@')
        }) 
    }
    componentDidMount(){
        let  container = new Container (this.canvas.current) 
        container.enableMouse() 
        container.enableClick() 
        let circle = new Circle(200,200,50) 
        console.log(circle) 
        container.addChild(circle) 
        let fn  = (self,point,container)=>{
            let conT = container.Tentacle 
            let tenId = null 
            self.anastole = !self.anastole
            if (self.click == 0) {
                self.click = 1 
            } else if (self.click == 1) {
                self.click = 2 
            } else {
                self.click = 1 
            }
/*             for(let key in conT){
                if(conT[key].circleId == self.id){
                    conT[key].anastole = !conT[key].anastole 
                    return 
                }
            } */
        }
    let fn1 = (self,poin,container) =>{
        let conT = container.Tentacle 
        let tenId = null 
        self.anastole = !self.anastole
        if (self.click == 0) {
            self.click = 1 
        } else if (self.click == 1) {
            self.click = 2 
        } else {
            self.click = 1 
        }
        console.log(self.anastole);
/*         for(let key in conT){
            if(conT[key].circleId == self.id){
                conT[key].anastole = !conT[key].anastole 
                return 
            }
        } */
    }
        circle.on('mySelfClick',fn)
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
        circle1.on('mySelfClick',fn1)

        // let tentacle1 = new Tentacle(circle1)

        let recIn21 = new Rect(circle1) 
        let recOut21 = new  Rect(circle1) 
        circle1.addIn(recIn21) 
        circle1.addOut(recOut21) 
        //container.addTentacle(tentacle) 
        //container.addTentacle(tentacle1) 


      function animate(){
        container.draw()
        window.requestAnimationFrame(animate) 
      }
     
      window.requestAnimationFrame(animate) 
    }
    render() {
        return (<div>
            <canvas  ref ={this.canvas} height='800' width='1500' style={{border:'1px solid rgba(0,0,0,1)' }}></canvas>
            </div>)
    }
}
