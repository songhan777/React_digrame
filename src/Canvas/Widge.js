import React, { Component } from 'react'

export default class componentName extends Component {
    constructor () {
        super()
        this.canvas = React.createRef()
        this.state = {
            container:{}
        }
    }
    componentDidMount() {
        this.setState({container:this.props.container})
        let _this = this 
        if(JSON.stringify(this.state.container) == '{}' ){
            return 
        }
        this.props.container.addCanvas(this.canvas.current)
        function animate(){
            _this.state.container.draw()
            RAF(animate) 
        }
      
        window.RAF = (function(){
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };
        })();
        RAF(animate)
    }
    componentWillReceiveProps(nextProps) {
        let _this = this 
        if (nextProps.container != this.props.container ) {
            this.setState({container:nextProps.container})
            nextProps.container.addCanvas(this.canvas.current)
            function animate(){
                nextProps.container.draw()
                RAF(animate) 
            }
            window.RAF = (function(){
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };
            })();
            RAF(animate)
        }
    }
    render() {
        return (
            <div>
                <canvas  ref ={this.canvas} height='800' width='800' style={{border:'1px solid rgba(0,0,0,1)' }}></canvas>
            </div>
        )
    }
}
