import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Widge, Container, Circle, Rect } from '../../../Canvas'
import IconButton from '@material-ui/core/IconButton'
import Save from '@material-ui/icons/Save'
import Refresh from '@material-ui/icons/Refresh'
import Edit from '@material-ui/icons/Edit'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Close from '@material-ui/icons/Close'

const styles = (theme) => ({
    content: {
        flexGrow: 1,
        //padding: theme.spacing.unit * 3,
        paddingLeft:250,
        height: '90vh',
        position:'relative',
    },
    toolbar: {height:48} ,
    tool: {
        position: 'absolute',
        right: 10,
        bottom:10,
        display:'flex',
        alignItems:'center'
    },
    ul: {
        listStyle: 'none',
        display: 'flex'
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color:theme.palette.primary.contrastText,
        marginRight: theme.spacing.unit * 2,
    }
})

 class WorSpace extends Component {
    static propTypes = {
        prop: PropTypes
    }   
    state = {
        container:{}
    } 
    componentDidMount () {
        let  container = new Container() 
        this.setState({container:container})
    }
    dropEvent = (event) => {
        let data = JSON.parse(event.dataTransfer.getData("storm-diagram-node"));
        this.drawNode(data,event);
        //这里就是数据的节点，这里就是this的问题，现在需要的是数据的节点,当前节点的this必须要通过点击
        //在整个拖拽过程中。是没有在节点里面生成。所以在拖拽的时候
    }
    drawNode = (data, pt) => {
        console.log(data)
        console.log(pt.clientX);
        console.log(pt.clientY);
        const x  = pt.clientX;
        const y = pt.clientY;
  
        
        let circle = new Circle(x,y,50) 
        container.addChild(circle) 
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
        circle.addOut(recOut) 
        circle.addOut(recOut1) 
    };

    render() {
        const { classes } = this.props
        return (                
            <main className={classes.content}                     
            onDrop={this.dropEvent} 
            onDragOver={(event) => {event.preventDefault()}}>
                <div className={classes.toolbar} />
                <Widge container ={this.state.container} />
                <div className={classes.tool}>
                    <ul className={classes.ul}>
                        <li><IconButton className={classes.button}><Save  /></IconButton></li>
                        <li><IconButton className={classes.button}><Refresh /></IconButton></li>
                        <li><IconButton className={classes.button}><Edit /></IconButton ></li>
                        <li><IconButton className={classes.button}><PlayArrow /></IconButton></li>
                    </ul>
                    <div>
                        <IconButton className={classes.button}>
                            <Close fontSize="large" />
                        </IconButton>
                        </div>
                </div>
            </main>
        )
    }
}

WorSpace.propTypes = {
    clsses:PropTypes.object.isRequired
}
export default withStyles(styles)(WorSpace)