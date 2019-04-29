import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import Clear from '@material-ui/icons/Clear';
import {getSearchTeam, pushTeam, handleTeamList} from "../../../API/API";

const styles = theme => ({
    rootBoxBig: {
        position: `fixed`,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10000,
    },
    rootBox: {
        display: "flex",
        flexDirection: `column`,
        alignItems: "center",
        width: 500,
        height: 570,
        position: `absolute`,
        top: "14%",
        left: "50%",
        marginLeft: -250,
        backgroundColor: "#ffffff",
        boxShadow: `0 8px 30px #888888`,
    },
    searchBox: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        marginTop: 40,
    },
    search: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputRootIcon: {
        width: 30,
        height: 30
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 270,
            '&:focus': {
                width: 270,
            },
        },
        borderBottom: `1px solid`
    },
    ackButton: {
        marginTop: 40,
        width: 300,
        backgroundColor: "RoyalBlue",
        color: `#ffffff`,
        '&:hover': {
            color: `#000000`,
        },
    },
    margin: {
        margin: 4,
        width: 300,
    },
    bootstrapFormLabel: {
        zIndex: 100,
        fontSize: 18,
    },
    bigAvatar: {
        margin: 10,
        width: 70,
        height: 70,
    },
    headImg: {
        marginTop: 80,
    },
    memberBox: {
        width: '100%',
        maxWidth: 300,
        height: 70,
        overflow: "auto",
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid #000000`,
        position: "absolute",
        top: 80,
        zIndex: 100
    },
    inline: {
        display: 'inline',
    },
    addIcon: {},
    addMemberList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    iconDelete: {
        cursor: "pointer",
        position: "absolute",
        top: 5,
        right: 12,
        width: 40,
        height: 40,
        color: "red"
    }
});

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: 10,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        borderBottom: '1px solid #ced4da',
        fontSize: 16,
        width: 300,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            color: `#000000`,
            borderRadius: 4,
        },
    },
}))(InputBase);

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

class AddTeam extends React.Component {
    state = {
        img: null,//图片是写死的
        name: "",
        mailbox: "",
        note: "",
        searchValue: "",
        searchListShow: false,
        searchShowList: []
    };

    componentDidMount() {
        let {data} = this.props;
        this.setState({
            name: data.name,
            mailbox: data.mailbox
        })
    }

    componentWillUnmount() {
        this.props.reset();
    }

    getSearchValue = (e) => {
        this.setState({
            searchValue: e.target.value
        });
        getSearchTeam().then((date) => {
                this.setState({searchShowList: date})
            }
        )
    };
    handleChangeName = (e) => {
        let name = e.target.value;
        this.setState({name})
    };
    handleChangeMailbox = (e) => {
        let mailbox = e.target.value;
        this.setState({mailbox})
    };
    handleChangeNote = (e) => {
        let note = e.target.value;
        this.setState({note})
    };
    searchList = () => {
        this.setState({
            searchListShow: !this.state.searchListShow
        })
    };
    setInformation = (index, e) => {
        e.preventDefault();
        let {searchShowList} = this.state;
        this.setState({
            name: searchShowList[index].name,
            mailbox: searchShowList[index].mailbox,
            searchListShow: false
        })
    };
    handleClick = () => {
        //处理list
        let taskAry = [];
        this.props.list.forEach((item, index) => {
            taskAry.push(item.taskId);
        });
        if (JSON.stringify(this.props.data) === "{}") {
            let {img, name, mailbox} = this.state;
            if (img !== "" && name !== "" && mailbox !== "") {
                console.log("数据的值");
                let taskId = taskShow(taskAry);
                console.log(taskId);//handle state img
                pushTeam({img: img, name: name, mailbox: mailbox, taskId: taskId}).then((data => {
                    if (data === 1) {
                        this.props.change(img, name, mailbox, taskId);
                    } else {
                        alert("修改失败")
                    }
                }));
            } else {
                alert("填的值不符合规范")
            }
        } else {
            let {name, mailbox, note, img} = this.state;
            let index = this.props.data.index;
            let newAry = {name: name, mailbox: mailbox, note: note, index: index, img: img};
            handleTeamList({userId: 111111, data: newAry}).then(
                (data) => {
                    if (data === 1) {
                        this.props.handleList(index, newAry);
                        this.props.shut();
                    } else {
                        alert("增加失败")
                    }
                },
            );
        }
    };
    closeBox = () => {
        this.props.shut()
    };

    render() {
        let {classes, data} = this.props;//图片
        let {searchListShow, searchShowList, name, mailbox, note} = this.state;
        let img = data.img || "../../../../static/images/remy.jpg";
        return (
            <div className={classes.rootBoxBig}>
                <Card className={classes.rootBox}>
                    <div style={{width: "100%"}} onClick={this.closeBox}>
                        <Clear className={classes.iconDelete}/>
                    </div>
                    <div className={classes.searchBox}>
                        <div className={classes.search}>
                            <Grid className={classes.search}>
                                <InputBase
                                    placeholder="搜索队伍"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    onBlur={this.getSearchValue}
                                />
                                <span>
              <SearchIcon className={classes.inputRootIcon} onClick={this.searchList}/>
            </span>
                            </Grid>
                        </div>
                    </div>
                    {searchListShow ? <List className={classes.memberBox}>
                        {searchShowList.map((item, index) => {
                            return (
                                <ListItem alignItems="flex-start" onClick={(e) => this.setInformation(index, e)}
                                          key={index}>
                                    <ListItemAvatar>
                                        <Avatar alt="../../../Remy Sharp" src={item.img}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline}
                                                            color="textPrimary">
                                                </Typography>
                                                {item.mailbox}
                                            </React.Fragment>
                                        }
                                    />
                                    <ListItemAvatar>
                                        <Icon className={classes.addIcon} color="primary">
                                            add_circle
                                        </Icon>
                                    </ListItemAvatar>
                                </ListItem>
                            )
                        })}
                    </List> : null}
                    <Grid container justify="center" alignItems="center" className={classes.headImg}>
                        <Avatar alt="Remy Sharp" src={img}
                                className={classes.bigAvatar}/>
                    </Grid>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
                            姓名
                        </InputLabel>
                        <BootstrapInput value={name} onChange={(e) => {
                            this.handleChangeName(e)
                        }}/>
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel placeholder="邮箱" htmlFor="age-customized-select"
                                    className={classes.bootstrapFormLabel}>
                            邮箱
                        </InputLabel>
                        <BootstrapInput value={mailbox} onChange={(e) => {
                            this.handleChangeMailbox(e)
                        }}/>
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel placeholder="备注" htmlFor="age-customized-select"
                                    className={classes.bootstrapFormLabel}>
                            备注
                        </InputLabel>
                        <BootstrapInput value={note} onChange={(e) => {
                            this.handleChangeNote(e)
                        }}/>
                    </FormControl>
                    <Button className={classes.ackButton} onClick={this.handleClick}>确认</Button>
                </Card>
            </div>
        )
    }
}

AddTeam.propTypes = {classes: PropTypes.object.isRequired,};

export default withStyles(styles)(AddTeam);
