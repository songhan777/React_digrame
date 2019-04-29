import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {Widge, Container, Circle, Rect} from '../../../Canvas'
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton'
import Save from '@material-ui/icons/Save'
import Refresh from '@material-ui/icons/Refresh'
import Edit from '@material-ui/icons/Edit'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Close from '@material-ui/icons/Close'
import {styles} from './css'

class WorSpace extends Component {
    constructor(props) {
        super(props);
        this.container = null;
        this.oUl = React.createRef()
    }

 /*   static propTypes = {
        prop: PropTypes,

    };*/
    state = {
        container: {},//数据容器池，
        hiddenButton: false
    };

    componentDidMount() {
        let container = new Container();
        this.setState({container});
        this.container = container
    }

    displayButton = () => {
        if (!window.RAF) {
            window.RAF = (function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
            })();
        }
        console.log(this.state.hiddenButton);

        this.setState({hiddenButton: !this.state.hiddenButton}, () => {
            let totle = 0;
            this.state.hiddenButton ? totle = 0 : totle = 290;
            let animation = () => {
                if (this.state.hiddenButton) {
                    totle += 10;
                } else {
                    totle -= 10;
                }
                this.oUl.current.style.left = (totle + 'px');
                if (totle >= 290 || totle <= 0) return;
                RAF(animation)
            };
            RAF(animation)
        });
        console.log(this.oUl.current);
        console.log(this.oUl.current.style);
        this.oUl.current.style.left += 1;
    };
    dropEvent = (event) => {
        console.log("拖拽完成");
        let data = JSON.parse(event.dataTransfer.getData("storm-diagram-node"));
        this.drawNode(data, event);
        console.log("容器");
        console.log(this.state.container);
        //这里就是数据的节点，这里就是this的问题，现在需要的是数据的节点,当前节点的this必须要通过点击
        //在整个拖拽过程中。是没有在节点里面生成。所以在拖拽的时候
    };
    drawNode = (data, pt) => {
        let lft = pt.targetgetBoundingClientRect().left;
        let tp = pt.targetgetBoundingClientRect().top;
        console.log(lft)
        console.log(tp)

        //console.log(cavans.getOffsetX());
        const x = pt.clientX - lft;
        const y = pt.clientY - tp ;
        console.log("x: y: ")
        console.log(x)
        console.log(y)
        console.log(pt.movementX);console.log(pt.movementY)
        console.log(pt.pageX)
        console.log(pt.screenX)
        console.log(pt.view)
        let circle = new Circle(x, y, 50);
        this.state.container.addChild(circle);
        let recIn = new Rect(circle);
        let recIn1 = new Rect(circle);
        let recIn2 = new Rect(circle);
        let recOut = new Rect(circle);
        let recOut1 = new Rect(circle);
        circle.addIn(recIn);
        circle.addIn(recIn1);
        circle.addIn(recIn2);
        circle.addOut(recOut);
        circle.addOut(recOut1)
    };
    love=()=>{
        console.log("数据对象");
        console.log(this.state.container)
    }

//这个是释放目标
    render() {
        const {classes} = this.props;
        return (
            <main className={classes.content}
                  onDrop={this.dropEvent}
                  onDragOver={(event) => {
                      console.log("拖拽过度事件");
                      event.preventDefault()
                  }}>
                <div className={classes.toolbar}/>
                <Widge container={this.state.container}/>{/*Widge是容器盒子*/}
                <div className={classes.tool}>
                    <ul className={classes.ul} ref={this.oUl}>
                        <li onClick={this.love}><Fab size="small" color="primary" className={classes.button}><Save/></Fab></li>
                        <li><Fab size="small" color="primary" className={classes.button}><Refresh/></Fab></li>
                        <li><Fab size="small" color="primary" className={classes.button}><Edit/></Fab></li>
                        <li><Fab size="small" color="primary" className={classes.button}><PlayArrow/></Fab></li>
                    </ul>
                    <div className={classes.largDiv}>
                        <Fab color="primary" onClick={this.displayButton}>
                            <Close fontSize="large"/>
                        </Fab>
                        {/*<IconButton className={classes.button} onClick={this.displayButton}>
                            <Close fontSize="large" />
                        </IconButton> */}
                    </div>
                </div>
            </main>
        )
    }
}

/*WorSpace.propTypes = {
    clsses: PropTypes.object.isRequired
};*/
export default withStyles(styles)(WorSpace)