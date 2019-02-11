import React, { Component } from 'react'

export default class componentName extends Component {
    constructor () {
        super()
        this.canvas = React.createRef()
        this.div = React.createRef()
        this.state = {
            container:{},
            width:0,
            height:0
        }
    }
    componentDidMount() {
        console.log(this.div.current.height)
        let h = this.div.current.clientHeight
        let w = this.div.current.clientWidth
        this.setState ({width:w,height:h}) 
    console.log(this.props)
    }
    relifecyclesname-unsafe-(nextProps) {
        let _this = this 
        console.log(nextProps)
        console.log(this.props)
        console.log(nextProps.container != this.props.container)
        if (nextProps.container != this.props.container ) {
            this.setState({container:nextProps.container})
            nextProps.container.addCanvas(this.canvas.current)
            function animate(){
                console.log('aaaaaaaaa')
                nextProps.container.draw()
                RAF(animate) 
            }
            window.RAF = (function(){
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };
            })();
            RAF(animate)
        }
        if(nextProps.height != this.props.height || nextProps.width !=this.props.width) {
            this.setState({height: nextProps.height,width: nextProps.width})
        }
    }
    render() {
        return (
            <div ref = {this.div} style= {{height:'100%',width:'100%'}}  >
                <canvas  ref ={this.canvas} height={this.state.height} width={this.state.width} ></canvas>
            </div>
        )
    }
}
