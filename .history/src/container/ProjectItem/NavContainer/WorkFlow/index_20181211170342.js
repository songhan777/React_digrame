import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import WfCard from './Wfcard'
import Modal from '../../../../component/Modal'
import { observer, inject } from 'mobx-react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
//import Input from '@material-ui/core/Input';
//import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        position: 'relative',
        flexWrap: 'wrap',
    },
    add: {
        position: 'absolute',
        right: theme.spacing.unit * 2,
        top: theme.spacing.unit * 2 
    },
    addCircleIconHover: {
        color: theme.palette.primary.light,
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: theme.palette.primary.dark
        }
    },
    input: {
       height:100,
    },
    modaleContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        width: 100,
        margin: theme.spacing.unit *2,
        alignSelf: 'center'
    }
});


@inject('store')
@observer
class WorkFlow extends Component {
    constructor(props) {
        super(props)
        this.store = props.store.publicStore
        this.setModalState = this.store.setModalState
    }
    state = {
        weightRange: ''
    }

    handleModal= () => {
        this.setModalState(true)
    }

    handleChange = (e) => { 
        this.setState({weightRange:e.target.value})
    }
    render() {
        const { classes, match } = this.props
        return (
            <Paper className={classes.root} elevation={1}>
                <div className={classes.add}>
                    <Icon 
                        color="disbeld" 
                        fontSize="large" 
                        className={classes.addCircleIconHover}
                        onClick={this.handleModal}
                    >
                        add_circle
                    </Icon>
                </div>
                <WfCard />
                <Modal>
                    <div className={classes.modaleContainer}>
                        <Typography variant="h6" color="primary" align="left">
                            创建工作流
                        </Typography>
                        <Input placeholder="工作流名称" inputProps={{'aria-label': 'Description',}}/>
                        <Select
                            value={this.state.weightRange}
                            onChange={this.handleChange}
                            input={<Input id="age-simple" />}
                        >
                           <MenuItem value="">
                             <em>None</em>
                           </MenuItem>
                           <MenuItem value={10}>生物信息学科</MenuItem>
                           <MenuItem value={20}>计算机科学类</MenuItem>
                           <MenuItem value={30}>物理</MenuItem>
                        </Select>
                        <input type="text" className={classes.input} Maxlength="300"/>
                        <Button variant="contained" color="primary" className={classes.button} >确定</Button>
                    </div>
                </Modal>
            </Paper>
        )
    }
}

WorkFlow.propTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(WorkFlow)