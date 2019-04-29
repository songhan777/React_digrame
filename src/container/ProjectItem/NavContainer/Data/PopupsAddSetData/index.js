import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import Add from '@material-ui/icons/Add';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import {addDateSetList} from '../../../../../API/API';
import {observer, inject} from 'mobx-react'

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
        zIndex: 1,
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    popupsBox: {
        width: 500,
        height: 250,
        backgroundColor: "#C1FFC1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        borderRadius: 10
    },
    buttonRemove: {
        position: "absolute",
        top: 0,
        right: 0
    }
});

@observer
class PopupsAddSetData extends Component {
    /* static propTypes = {
         prop: PropTypes
     };*/
    state = {
        expanded: false,
        textName: "",
    };
    handleBox = (e) => {
        if (e.target.id === "box") {
            this.props.shut();
        }
    };
    setDataList = () => {
        let {textName} = this.state;
        if (textName !== "") {//判断输入不为空
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
            //需要增加显示。是否需要连接mobx
            //dataSetId 通过父级算出来，
            let dataSetAry = [];
            this.props.data.forEach((item, index) => {
                dataSetAry.push(item.dataSetId)
            });
            let dataSetId = taskShow(dataSetAry);//任务id mobx 里面存值  tackId
            let dataSetObj = {useId: "11111", tackId: "1111", name: textName, date: date, dataSetId: dataSetId};
            //state 里面的展示  这里发送的请求
            addDateSetList(dataSetObj).then((data) => {
                    if (data === 1) {
                        this.props.addData(dataSetObj);
                        this.props.shut();//
                    } else {
                        alert("数据集增加失败")
                    }
                }
            );
        }
    };

    onChangeTextName = (e) => {
        this.setState({textName: e.target.value})
    };

    render() {
        const {classes} = this.props;
        const {textName} = this.state;
        return (
            <div className={classes.root} id="box" onClick={(e) => {
                this.handleBox(e)
            }}>
                <Grid className={classes.popupsBox}>
                    <Grid>
                        <ListItemText xs={1} primary={`新增数据集`} className={classes.listHead}/>
                        <InputBase
                            placeholder="输入名称" value={textName}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onChange={(e) => {
                                this.onChangeTextName(e)
                            }}
                            onBlur={this.getInputValue}
                        />
                    </Grid>
                    <Button onClick={this.setDataList}>
                        确认
                    </Button>
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(PopupsAddSetData)