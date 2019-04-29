import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
import Head from "../../../../../component/Head"
import Grid from '@material-ui/core/Grid'
import Add from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';
import {getDataSetDatabase, uploadDataSet} from "../../../../../API/API"


const styles = theme => ({
    root: {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background:" rgba(0,0,0,0.5)",
        zIndex: 1
    },
    contentBox: {
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "rbga(233,239,249,0.5)",
        display: "flex",
        justifyContent: "center",
    },
    DateList: {
        position: "absolute",
        backgroundColor: "#fff",
        top: "20%",
        width: "80%",
        height: "75%"
    },
    button: {
        backgroundColor: "#6d93cc",
        width: 250,
        height: 50,
        alignItems: "center",
        fontSize: 20,
        color: "#fdfdfd",
        borderRadius: 25,
        marginLeft: 60,
        display: "flex",
        justifyContent: "space-around",
    },
    addButtonBox: {
        display: "flex",
        justifyContent: "space-between",
        height: 100
    },
    buttonBox: {
        display: "flex"
    },
    dataTitle: {
        display: "flex",
        alignItems: "center",
        height: 50,
        borderLeft: "2px solid #6d93cc",
        paddingLeft: 40,
    },
    AddIcon: {
        fontSize: 40,
        width: 30,
        height: 30
    },
    addButton: {
        display: "flex",
    },
    listBox: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f4f7f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    dateListBox: {
        width: "98%",
        height: "90%",
        backgroundColor: "#FEFEFE",
        padding: 0,
        fontSize: 24
    },
    dateListBox1: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FEFEFE",
        padding: 0,
        fontSize: 24
    },
    icon: {
        color: "red",
        fontSize: 24,
    },
    listHeadBox: {
        backgroundColor: " #f4f7f9",
        position: "relative"
    },
    listHead: {
        color: "#C9C9C9",
        fontSize: 20,
        width:200,
    },
    listFontSize: {
        fontSize: 20,
        width:200,
    }
});

class addDatabase extends Component {
    static propTypes = {
        prop: PropTypes
    };

    state = {
        expanded: false,
        dataSet: [],
        uploadShow: true,
        databaseShow: false,
        pitchIndexAry: [],
    };

    componentDidMount() {
        getDataSetDatabase({id: 111111}).then(data => {//这里需要的用户ID
            this.setState({dataSet: data})
        })
    }

    handleToggle = (index, e) => {
        e.preventDefault();
        let ary = [...this.state.dataSet];
        ary.splice(index, 1);
        this.setState({dataSet: ary})
    };

    setBox = () => {
        this.props.change();
    };

    setPushDataS = (e) => {
        this.props.change();
        let {pitchIndexAry, dataSet} = this.state;
        let newAry = [];
        pitchIndexAry.forEach((item, index) => {
            newAry.push(dataSet[item])
        });
        uploadDataSet({id: 111111, data: newAry}).then((data) => {
            if (data) {
                alert("成功");
                this.props.addData(newAry);
            } else {
                alert("失败")
            }
        });
    };

    setChecked = (e, newIndex) => {
        let a = e.target.checked;
        let pitchIndexAry = this.state.pitchIndexAry;
        if (a) {
            this.setState({pitchIndexAry: [...pitchIndexAry, newIndex]})
        } else {
            let newAry = [...this.state.pitchIndexAry];//不能根据索引删，
            let show = newAry.indexOf(newIndex);
            newAry.splice(show, 1);
            this.setState({
                pitchIndexAry: newAry
            })
        }
    };

    render() {
        const {classes} = this.props;
        const {dataSet} = this.state;
        return (
            <div className={classes.root}>
                <Grid className={classes.contentBox}>
                    <Grid className={classes.DateList}>
                        <Grid className={classes.listBox}>
                            <Grid className={classes.dateListBox} container spacing={8}>
                                <List className={classes.dateListBox1}>
                                    <ListItem role={undefined} dense button className={classes.listHeadBox}>
                                        <Grid><Checkbox xs={1} onChange={(e) => {
                                            this.setChecked(e, 0)
                                        }}/></Grid>
                                        <Grid> <ListItemText xs={1} primary={`名称`} className={classes.listHead}/></Grid>
                                        <Grid> <ListItemText xs={2} primary={`创建时间`}
                                                             className={classes.listHead}/></Grid>
                                        <Grid> <ListItemText xs={1} primary={`删除`} className={classes.listHead} style={{
                                            position: "absolute",
                                            top: "16px",
                                            right: 0
                                        }}/></Grid>
                                    </ListItem>
                                    {dataSet.map((item, index) => (
                                        <ListItem key={index} role={undefined} dense button>
                                            <Grid><Checkbox xs={1} onChange={(e) => {
                                                this.setChecked(e, index)
                                            }}/></Grid>
                                            <Grid> <ListItemText xs={1} primary={`${item.name}`}
                                                                 className={classes.listFontSize}/>
                                            </Grid>
                                            <Grid> <ListItemText xs={2} primary={`${item.time}`}
                                                                 className={classes.listFontSize}/>
                                            </Grid>
                                            <Grid onClick={(e) => this.handleToggle(index, e)}>
                                                <ListItemSecondaryAction xs={1}>
                                                    <IconButton aria-label="Comments">
                                                        <Clear className={classes.icon}/>
                                                    </IconButton>
                                                </ListItemSecondaryAction></Grid>
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                            <Grid className={classes.buttonBox}>
                                <Button variant="contained" className={classes.button} onClick={this.setBox}>
                                    取消
                                </Button>
                                <Button variant="contained" className={classes.button} onClick={this.setPushDataS}>
                                    确认
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

addDatabase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(addDatabase)