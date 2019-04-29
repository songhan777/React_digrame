import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import WfCard from './WfCard'
import Modal from '../../../../component/Modal'
import {observer, inject} from 'mobx-react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
//import Input from '@material-ui/core/Input';
//import MenuItem from '@material-ui/core/MenuItem';
import {addworkflow} from "../../../../API/API"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'

function taskShow(ary, value = 1) {
    ary.forEach((item) => {
        if (value === item) {
            value++;
        } else {
            return value
        }
    });
    return value
}

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
        height: 100,
    },
    modaleContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        width: 100,
        margin: theme.spacing.unit * 2,
        alignSelf: 'center'
    }
});


@inject('store')
@observer  //将数据的效果存在 mobx 里面
class WorkFlow extends Component {
    constructor(props) {
        super(props)
        this.store = props.store.publicStore
        this.setModalState = this.store.setModalState
        this.DataList = props.store.DataList;//数据传递的时候
    }

    state = {
        weightRange: '',
        name: "",
        describe: "",
        data: [],
    }

//在于返回的时候数据不存在。没有往数据里面存东西
    componentDidMount() {
        let data = JSON.parse(sessionStorage.getItem('key'));
        this.setState({
            data:data.workflow
        })
    }

    onChangeName = (e) => {
        this.setState({name: e.target.value})
    };
    onChangeDescribe = (e) => {
        this.setState({describe: e.target.value})
    };

    handleModal = () => {
        this.setModalState(true)
    }

    handleChange = (e) => {
        this.setState({weightRange: e.target.value})
    }

    addWorkFlowList = () => {
        let date = new Date();
        let dateAry = date.toString().split(' ');
        let month = 1;
        switch (dateAry[1]) {
            case "Jan":
                month = 1;
                break;
            case "Feb":
                month = 2;
                break;
            case "Mar":
                month = 3;
                break;
            case "Apr":
                month = 4;
                break;
            case "May":
                month = 5;
                break;
            case "June":
                month = 6;
                break;
            case "July":
                month = 7;
                break;
            case "Aug":
                month = 8;
                break;
            case "Sept":
                month = 9;
                break;
            case "Oct":
                month = 10;
                break;
            case "Nov":
                month = 11;
                break;
            case "Dec":
                month = 12;
                break;
        }
        date = `${dateAry[3]}/${month}/${dateAry[2]}`;
        let {name, weightRange, describe, data} = this.state;
        console.log("state 数据状态展示");
        console.log(data);

        let dataSetAry = [];
        data.forEach((item, index) => {
            dataSetAry.push(item.workflowId)
        });
        let workflowId = taskShow(dataSetAry);//

        console.log(workflowId);
        if (name !== "" && weightRange !== "" && describe !== "") {
            //  计算数据id
            //　img的值是统一的【加一个上传功能】
            let Ary = {
                category: weightRange,
                time: date,
                describe: describe,
                img: "./static/images/cards/contemplative-reptile.jpg",
                name: name,
                workflowId: workflowId
            };
            addworkflow(Ary).then((data) => {
                if (data === 1) {
                    this.setModalState(false);//在这里跟新过后
                    this.setState({
                        data: [...this.state.data, Ary],
                        weightRange: '',
                        name: "",
                        describe: "",
                    })
                } else {
                    alert("工作流保存失败")
                }
            });
            //  需要一个增加后台的接口,请求成功之后。改变
        } else {
            alert("输入值不能为空")
        }
    };

    render() {
        const {classes, match} = this.props;
        const {data} = this.state;
        return (
            <Paper className={classes.root} elevation={1}>
                <div className={classes.add}>
                    <Icon
                        color="inherit"
                        fontSize="large"
                        className={classes.addCircleIconHover}
                        onClick={this.handleModal}
                    >
                        add_circle
                    </Icon>
                </div>
                <WfCard data={data} match={match}/>{/*数据列表展示*/}
                <Modal>
                    <div className={classes.modaleContainer}>
                        <Typography variant="h6" color="primary" align="left">
                            创建工作流
                        </Typography>
                        <Input placeholder="工作流名称" inputProps={{'aria-label': 'Description',}} onChange={(e) => {
                            this.onChangeName(e)
                        }}/>
                        <Select
                            value={this.state.weightRange}
                            onChange={this.handleChange}
                            input={<Input id="age-simple"/>}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"生物信息学科"}>生物信息学科</MenuItem>
                            <MenuItem value={"计算机科学类"}>计算机科学类</MenuItem>
                            <MenuItem value={"物理"}>物理</MenuItem>
                        </Select>
                        <input type="text" value={this.state.describe} className={classes.input} maxLength="300"
                               onChange={(e) => {
                                   this.onChangeDescribe(e)
                               }}/>
                        <Button variant="contained" color="primary" className={classes.button}
                                onClick={this.addWorkFlowList}>确定</Button>
                    </div>
                </Modal>
            </Paper>
        )
    }
}

WorkFlow.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(WorkFlow)