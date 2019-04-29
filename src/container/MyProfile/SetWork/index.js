import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import CalendarToday from '@material-ui/icons/CalendarToday';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {getWorkList, RecentlyWorkList} from "../../../API/API";

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        minWidth:1300
    },
    gridList: {
        width: `100%`,
        height: 100,
        backgroundColor: `lightskyblue`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: `#fff`,
        backgroundColor: `lightskyblue`,
        display: `flex`,
        alignItems: `baseline`,
        justifyContent: `center`,
        fontSize: `20px`,
        borderLeft: `1px solid`,
    },
    paperNum: {
        fontSize: 40,
        paddingRight: 25,
    },
    searching: {
        display: `flex`,
        justifyContent: `space-between`,
        backgroundColor: `#ffffff`,
        height: `70px`
    },
    searchingData: {
        display: `flex`,
        alignItems: `center`,
        height: `100%`,
        marginLeft: 20,
    },
    searchingDataIcon: {
        width: 50,
        height: 50,
    },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 32,
    },
    numIcon: {
        fontSize: 32,
    },
    searchingDataBox: {
        padding: 3,
        borderRadius: 4,
        border: `1px solid`,
        marginLeft: 10
    },
    textField: {
        width: 150,
        borderBottom: 0
    },
    searchingButton: {
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
    },
    button: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        margin: theme.spacing.unit,
        color: `#5d6b79`,
        marginLeft: `20px`,
        width: 100,
        height: 40,
        borderRadius: 4,
        cursor: `pointer`
    },
    data: {
        display: `flex`,
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 370,
            '&:focus': {
                width: 370,
            },
        },
        borderBottom: `1px solid`
    },

    adjustBox: {
        width: 22,
    },

    adjustButton: {
        fontSize: 28,
    },
    serialNumber: {
        fontSize: 28,
        position: `relative`,
        top: 5,
        marginLeft: 10,
    },
    adjustUpButton: {
        fontSize: 28,
        position: `relative`,
        top: 16,
        marginLeft: 10
    },
    adjustDownButton: {
        fontSize: 28,
        position: `relative`,
        top: -7,
        marginLeft: 10
    },
    search: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        marginRight: 30
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    state: {
        width: `100%`,
    },
    stateHeader: {
        backgroundColor: `LightGray`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        fontSize: `18px`,
        height: `60px`,
        borderBottom: `2px solid gray`,
       /* borderRight: `1px solid whitesmoke`,*/
        cursor: "pointer",
        userSelect: 'none'
    },
    stateDetailedBox: {
        width: `100%`,
        display: `flex`,
        height: "50%",
        overflow: `auto`
    },
    stateDetailedData: {
        fontSize: `18px`,
    },
    stateDetailedDataBox: {
        height: 60,
        width: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        border: `1px solid #c4ccd4`
    },
    pageNumber: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        background: `lightgray`
    },
    pageNumberButton: {
        margin: theme.spacing.unit,
        color: `GhostWhite`,
        backgroundColor: `RoyalBlue`,
        marginLeft: `20px`,
        width: 40,
        height: 40,
        borderRadius: 4,
        minWidth: 40
    },
    pageFormat: {
        textAlign: `center`,
        marginLeft: `3%`,
        display: `flex`,
        alignItems: `center`,
    },
    pageHanle: {
        marginRight: `3%`,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});


class SetWork extends React.Component {
    state = {
        age: 5,//当前页面的值的量
        labelWidth: 0,
        dataNumber: 1,
        inputValue: "",
        subscript: 0,
        workList: [],
        showWorkList: [],
        negationSign: -1,
        workNumber: 0,
        projectNumber: 0,
        startDate: "2018-4-11",
        endDate: "2018-6-11",
    };

    componentDidMount() {
        //这里的第一次请求将 ，发送所有的数据
        getWorkList({startDate: "2018-4-11", endDate: "2018-6-11", id: "111111"}).then((data) => {
            this.setState({
                    workList: data.task, workNumber: data.workNumber, projectNumber: data.projectNumber
                },
                () => {
                    let newWorkList = this.state.workList.slice(0, 5);
                    this.setState({
                        showWorkList: newWorkList
                    })
                }
            )
        })
    }

    handleChange = event => {
        let newWorkList = [];
        this.setState({
            [event.target.name]: event.target.value,
            age: event.target.value
        }, () => {
            if (this.state.subscript === 0) {
                newWorkList = this.state.workList.slice(0, this.state.age)
            } else {
                newWorkList = this.state.workList.slice(this.state.age * this.state.subscript, this.state.age * this.state.subscript + this.state.age)
            }
            this.setState({
                showWorkList: newWorkList
            })
        });
    };

    addSubscript = () => {
        if (this.state.subscript * this.state.age + this.state.age >= this.state.workList.length) {
            return
        }
        this.setState({subscript: this.state.subscript + 1}, () => {
            if (this.state.subscript * this.state.age >= this.state.workList.length) {
                return
            }
            let newWorkList = this.state.workList.slice(this.state.age * this.state.subscript, this.state.age * this.state.subscript + this.state.age);
            this.setState({
                showWorkList: newWorkList
            });
        })
    };

    reduceSubscript = () => {
        if (this.state.subscript === 0) {
            return
        }
        this.setState({subscript: this.state.subscript - 1}, () => {
            if (this.state.subscript <= 0) {
                let newWorkList = this.state.workList.slice(0, this.state.age);
                this.setState({
                    showWorkList: newWorkList
                });
                return
            }
            let newWorkList = this.state.workList.slice(this.state.age * this.state.subscript, this.state.age * this.state.subscript + this.state.age);
            this.setState({
                showWorkList: newWorkList
            })
        })
    };

    setSeven = () => {
        this.setState({dataNumber: 1});//现在需要一个结束时间。
        RecentlyWorkList({showDate: "Seven", id: "111111", data: this.state.endDate}).then((data) => {
            this.setState({
                    workList: data.task
                },
                () => {
                    let newWorkList = this.state.workList.slice(0, 5);
                    this.setState({
                        showWorkList: newWorkList
                    })
                }
            )
        })
    };

    setThirty = () => {
        this.setState({dataNumber: 2});
        RecentlyWorkList({showDate: "Thirty", id: "111111", data: this.state.endDate}).then((data) => {
            this.setState({
                    workList: data.task
                },
                () => {
                    let newWorkList = this.state.workList.slice(0, 5);
                    this.setState({
                        showWorkList: newWorkList
                    })
                }
            )
        })
    };

    setNinety = () => {
        this.setState({dataNumber: 3});
        RecentlyWorkList({showDate: "Ninety", id: "111111", data: this.state.endDate}).then((data) => {
            this.setState({
                    workList: data.task
                },
                () => {
                    let newWorkList = this.state.workList.slice(0, 5);
                    this.setState({
                        showWorkList: newWorkList
                    })
                }
            )
        })
    };

    handleSorting = event => {
        if (event.target.innerText === "") {
            return
        }
        let negationSign = this.state.negationSign;
        let newList = [];

        function compare(property) {
            return function (a, b) {
                let value1 = a[property];
                let value2 = b[property];
                return (value1 - value2) * negationSign;
            }
        }

        function textSort(property) {
            return function (item1, item2) {
                let value1 = item1[property];
                let value2 = item2[property];
                return value1.localeCompare(value2);
            }
        }

        console.log(event.target.innerText);
        let text = null;
        event.target.innerText ? text = event.target.innerText : event.target.children[0].innerText;
        if (event.target.innerText !== undefined && event.target.innerText !== null) {
            console.log("event.target.innerText");
            let aryKey = "";
            let ary = ['number', 'task', 'state', 'stateTime', 'endTime', 'participant'];
            switch (text) {
                case "编号":
                    aryKey = ary[0];
                    break;
                case "任务":
                    aryKey = ary[1];
                    break;
                case "状态":
                    aryKey = ary[2];
                    break;
                case "开始时间":
                    aryKey = ary[3];
                    break;
                case "结束时间":
                    aryKey = ary[4];
                    break;
                case "参与人数":
                    aryKey = ary[5];
                    break;
            }
            let oldList = this.state.workList;
            if (aryKey === "number" || aryKey === "participant") {
                newList = oldList.sort(compare(aryKey))
            }
            ; //编号和参与人员的排序
            if (aryKey === "stateTime" || aryKey === "endTime") {//开始时间的排序
                if (negationSign === -1) {
                    console.log("升序")
                    newList = oldList.sort(function (a, b) {
                        return a.stateTime < b.stateTime ? 1 : -1;
                    });
                } else {
                    console.log("降序")
                    newList = oldList.sort(function (a, b) {
                        return a.stateTime > b.stateTime ? 1 : -1;
                    });
                }

            }
            if (aryKey === "task" || aryKey === "state") {
                if (negationSign === -1) {
                    newList = oldList.sort(textSort(aryKey))
                } else {
                    newList = oldList.sort(textSort(aryKey));
                    for (let i = 0; i < newList.length / 2; i++) {
                        let temp = newList[i];
                        newList[i] = newList[newList.length - 1 - i];
                        newList[newList.length - 1 - i] = temp;
                    }
                }

            }
            newList = newList.slice(0, this.state.age)
            this.setState({
                negationSign: this.state.negationSign * -1,
                showWorkList: newList,
            });
            // this.setState({negationSign: {...this.state.negationSign,love:1}});
        }
    };

    getInputValue = (ev) => {
        this.setState({inputValue: ev.target.value})
    };

    checkAdult = (currentValue) => {
        let newShow = false;
        for (let i in currentValue) {
            if (currentValue[i] == this.state.inputValue) {
                newShow = true;
                break
            }
        }
        return newShow
    };

    getSearch = () => {
        let newList = this.state.workList.filter(
            this.checkAdult
        );
        this.setState({showWorkList: newList});
    };

    getStateTime = (ev) => {
        console.log(ev.target.value);
        this.setState({startDate: ev.target.value})
    };

    getEndTime = (ev) => {
        console.log(ev.target.value);
        this.setState({endDate: ev.target.value})
    };

    render() {
        const {classes} = this.props;
        const {dataNumber, showWorkList, workList, workNumber, projectNumber} = this.state;
        return (
            <div className={classes.root}>
                <Grid className={classes.gridList}>
                    <Grid item xs={4} className={classes.paper} style={{border: 0}}>
                        <span className={classes.paperNum}>{projectNumber}</span>工程数
                    </Grid>
                    <Grid item xs={4} className={classes.paper}>
                        <span className={classes.paperNum}>{workNumber}</span>工作流数
                    </Grid>
                    <Grid item xs={4} className={classes.paper}>
                        <span className={classes.paperNum}>{workList.length}</span>任务
                    </Grid>
                </Grid>
                <Grid className={classes.searching}>
                    <div className={classes.data}>
                        <Grid className={classes.searchingData}>
                            <div className={classes.searchingDataIcon}>
                                <CalendarToday className={classes.icon}/>
                            </div>
                            <div className={classes.searchingDataBox}>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        type="date"
                                        defaultValue="2018-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.getStateTime}
                                    />-
                                    <TextField
                                        id="date"
                                        type="date"
                                        defaultValue="2018-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.getEndTime}
                                    />
                                </form>
                            </div>
                        </Grid>
                        <Grid className={classes.searchingButton}>
                            <div className={classes.button}
                                 style={dataNumber === 1 ? {backgroundColor: `RoyalBlue`, color: `#fdfdfd`} : null}
                                 onClick={this.setSeven}>最近7天
                            </div>
                            <div className={classes.button}
                                 style={dataNumber === 2 ? {backgroundColor: `RoyalBlue`, color: `#fdfdfd`} : null}
                                 onClick={this.setThirty}>最近30天
                            </div>
                            <div className={classes.button}
                                 style={dataNumber === 3 ? {backgroundColor: `RoyalBlue`, color: `#fdfdfd`} : null}
                                 onClick={this.setNinety}>最近90天
                            </div>
                        </Grid>
                    </div>
                    <div className={classes.search}>
                        <Grid className={classes.search}>
                            <InputBase
                                placeholder=""
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onBlur={this.getInputValue}
                            />
                            <span>
              <SearchIcon onClick={this.getSearch}/>
            </span>
                        </Grid>
                    </div>
                </Grid>
                <Grid container className={classes.state} onClick={this.handleSorting}>
                    <Grid item xs={1} className={classes.stateHeader}>
                        <div>编号
                        </div>
                        <div className={classes.adjustBox}><ArrowDropDown
                            className={classes.serialNumber}/>
                        </div>
                    </Grid>
                    <Grid item xs={3} className={classes.stateHeader}>
                        <div>任务</div>
                        <div className={classes.adjustBox}><ArrowDropUp
                            className={classes.adjustUpButton}/><ArrowDropDown
                            className={classes.adjustDownButton}/>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={classes.stateHeader}>
                        <div>状态</div>
                        <div className={classes.adjustBox}><ArrowDropUp
                            className={classes.adjustUpButton}/><ArrowDropDown
                            className={classes.adjustDownButton}/>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={classes.stateHeader}>
                        <div>开始时间</div>
                        <div className={classes.adjustBox}><ArrowDropUp
                            className={classes.adjustUpButton}/><ArrowDropDown
                            className={classes.adjustDownButton}/>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={classes.stateHeader}>
                        <div>结束时间</div>
                        <div className={classes.adjustBox}><ArrowDropUp
                            className={classes.adjustUpButton}/><ArrowDropDown
                            className={classes.adjustDownButton}/>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={classes.stateHeader}>
                        <div>参与人数</div>
                        <div className={classes.adjustBox}><ArrowDropUp
                            className={classes.adjustUpButton}/><ArrowDropDown
                            className={classes.adjustDownButton}/>
                        </div>
                    </Grid>
                </Grid>
                <Grid className={classes.stateDetailedBox}>
                    <Grid item xs={1} className={classes.stateDetailedData}>
                        {showWorkList.map((item, index) => {
                            return (<div key={index} className={classes.stateDetailedDataBox}>{item.number}</div>
                            )
                        })}
                    </Grid>
                    <Grid item xs={3} className={classes.stateDetailedData}>
                        {showWorkList.map((item, index) => {
                            return (<div key={index} className={classes.stateDetailedDataBox}>{item.task}</div>
                            )
                        })}
                    </Grid>
                    <Grid item xs={2} className={classes.stateDetailedData}>
                        {showWorkList.map((item, index) => {
                            return (<div key={index} className={classes.stateDetailedDataBox}>{item.state}</div>
                            )
                        })}
                    </Grid>
                    <Grid item xs={2} className={classes.stateDetailedData}>
                        {showWorkList.map((item, index) => {
                            return (<div key={index} className={classes.stateDetailedDataBox}>{item.stateTime}</div>
                            )
                        })}
                    </Grid>
                    <Grid item xs={2} className={classes.stateDetailedData}>
                        {showWorkList.map((item, index) => {
                            return (<div key={index} className={classes.stateDetailedDataBox}>{item.endTime}</div>
                            )
                        })}
                    </Grid>
                    <Grid item xs={2} className={classes.stateDetailedData}>
                        {showWorkList.map((item, index) => {
                            return (
                                <div key={index} className={classes.stateDetailedDataBox}>{item.participant}</div>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid className={classes.pageNumber}>
                    <div className={classes.pageFormat}>每页显示
                        <FormControl className={classes.formControl}>
                            <Select
                                value={this.state.age}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={classes.pageHanle}>
                        <Button variant="contained" className={classes.pageNumberButton}
                                onClick={this.reduceSubscript}><ChevronLeft
                            className={classes.numIcon}/></Button>
                        <Button variant="contained" className={classes.pageNumberButton}
                                onClick={this.addSubscript}><ChevronRight
                            className={classes.numIcon}/></Button>
                    </div>
                </Grid>
            </div>
        );
    }
}

SetWork
    .propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)

(
    SetWork
)
;
