import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import headPortrait from '../../../../static/images/uxceo-128.jpg';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moreVert from '@material-ui/icons/moreVert';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Reply from '@material-ui/icons/Reply';
import TextField from '@material-ui/core/TextField';
import {searchMemberTeam, recentlyMemberTeam, pushMember} from "../../../API/API";
import Icon from '@material-ui/core/Icon';
import Clear from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';


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
            height: 590,
            position: `absolute`,
            top: "14%",
            left: "50%",
            marginLeft: -250,
            backgroundColor: "#ffffff",
            boxShadow: `0 8px 30px #888888`,
            paddingTop: 40
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
            backgroundColor: "#DCDCDC",
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
        hasIncreased: {
            marginTop: 20,
            width: 420,
            height: 95,
            overflow: "auto",
            flexDirection: "inherit",
            flexWrap: "nowrap",
            justifyContent: "end"
        },
        hasIncreasedName: {
            width: "100%",
            margin: 0,
        },
        memberBox: {
            width: '100%',
            maxWidth: 300,
            backgroundColor: theme.palette.background.paper,
            borderBottom: `1px solid #000000`,
            padding: 0,
            zIndex: 100,
            position: "absolute",
            top: 180
        },
        hasIncreasedBox: {
            backgroundColor: theme.palette.background.paper,
            padding: 0,
            width: "100%",
            display: "flex",
            flexWrap: "wrap"
        },
        hasIncreasedList: {
            flexDirection: `column`,
            position: `relative`,
            alignItems: 'center',
            width: "20%",
            padding: 0
        },
        hasIncreasedListName: {
            fontSize: 12,
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: 'center',
            marginTop: 2
        },
        hasIncreasedImg: {
            width: 50,
            height: 50,
            '&:hover': {
                removeBox: {display: "flex"},
            }
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
        },
        removeBox: {
            width: 50,
            height: 50,
            display: `flex`,
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            opacity: 0,
            borderRadius: "50%",
            backgroundColor: '#cdcdcd',
            marginTop: 4,
            cursor: "pointer",
            '&:hover': {
                opacity: 0.5
            }
        },
        removeBoxFontSize: {
            fontSize: 32,
        },
        RecentlyBox: {
            width: "100%",
            padding: 0,
            display: "flex",
            backgroundColor: "#fff",
            flexWrap: "wrap"
        }
    })
;

class AddMember extends React.Component {   //这里最近的数据是通过父级传递过来的
    state = {
        personnelShow: false,
        teamValue: "",
        searchValue: "",
        searchList: [],//搜索框
        addList: [],//增加框
        recentlyList: []//
    };//在这个数据的展示组的位置是

    componentWillMount() {
        recentlyMemberTeam().then(data => {
            console.log("合作者");
            console.log(data);
            this.setState({recentlyList: data})
        })
    }

    handleClick = () => {
        this.props.close()
    };
    handleAdd = (e) => {
        e.preventDefault();
        if (this.state.teamValue !== "") {
            function padding(num, length) {
                if ((num + "").length >= length) {
                    return num;
                }
                return padding("0" + num, length)
            }

            let number = padding(this.props.number + 1, 6);//补全参数
            let ary = this.state.recentlyList;
            ary.filter(((currentValue) => currentValue.name == "img"));
            pushMember({
                teamImg: ary,
                teamName: this.state.teamValue,
                cooperationNumber: ary.length,//合作次数的问题这个值的问题。
                cooperatorNumber: 0,
                teamNumber: number,
            }).then(data => {
                console.log(ary.length);
                if (data === 1) {
                    this.props.change(ary, this.state.teamValue, ary.length, 1111111, number, e)
                } else {
                    alert("保存失败")
                }
            })
        }
    };

    searchPersonnelList = () => {
        //这里是需要向后台发送数据的
        this.setState({personnelShow: true});
    };
    disappearPersonnelList = (img, name, e) => {
        this.setState({
            addList: [...this.state.addList, {img: img, name: name}],
            personnelShow: false
        })
    };
    addPersonnel = (index, img, name, e) => {
        e.preventDefault();
        this.setState({
            addList: [...this.state.addList, {img: img, name: name}]
        })
    };
    //这里的方法需要的就是index 就行了，每一次的只是需要index,每一次的删除都会有新的节点index 被赋值上去。
    removePersonnel = (index, e) => {
        e.preventDefault();
        this.setState({
            addList: this.state.addList.filter((elem, i) => index !== i)
        })
    };
    getTeamValue = (ev) => {
        this.setState({
            teamValue: ev.target.value
        })
    };
    getSearchValue = (ev) => {
        console.log("搜索确认事件");

        this.setState({
            searchValue: ev.target.value
        }, () => {
            searchMemberTeam({text: this.state.searchValue}).then(data => {
                console.log(data);
                this.setState({
                    searchList: data
                })
            })
        })
    }

    render() {
        const {classes} = this.props;
        const {personnelShow, recentlyList, addList, searchList, teamValue} = this.state;
        return (
            <div className={classes.rootBoxBig}>
                <Card className={classes.rootBox}>
                    <div style={{width: "100%"}} onClick={this.handleClick}>
                        <Clear className={classes.iconDelete}></Clear>
                    </div>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
                            团队名称
                        </InputLabel>
                        <BootstrapInput onBlur={this.getTeamValue}/>
                    </FormControl>
                    <div className={classes.searchBox}>
                        <div className={classes.search}>
                            <Grid className={classes.search}>
                                <InputBase
                                    placeholder="搜索成员"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    onBlur={this.getSearchValue}
                                />
                                <span>
              <SearchIcon className={classes.inputRootIcon} onClick={this.searchPersonnelList}/>
            </span>
                            </Grid>
                        </div>
                    </div>
                    {personnelShow ? <List className={classes.memberBox}>
                        {searchList.map((item, index) => {
                            return (<ListItem alignItems="flex-start" key={index}>
                                <ListItemAvatar>
                                    <Avatar alt="../../../Remy Sharp" src={item.img}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography component="span" className={classes.inline} color="textPrimary">
                                            </Typography>
                                            {"thisIsMyLove.com"}
                                        </React.Fragment>
                                    }
                                />
                                <ListItemAvatar onClick={(e) => this.disappearPersonnelList(item.img, item.name, e)}>
                                    <Icon className={classes.addIcon} color="primary">
                                        add_circle
                                    </Icon>
                                </ListItemAvatar>
                            </ListItem>)
                        })}

                    </List> : null}
                    <Grid container justify="center" alignItems="center" className={classes.hasIncreased}
                          style={{height: "150px"}}>
                        <p className={classes.hasIncreasedName} style={{color: "#626269"}}>已添加成员</p>
                        <List className={classes.hasIncreasedBox}>
                            {addList.map((item, index) => {
                                return (
                                    <ListItem alignItems="flex-start" className={classes.hasIncreasedList} key={index}
                                              onClick={(e) => this.removePersonnel(index, e)}>
                                        <ListItemAvatar className={classes.hasIncreasedImg}>
                                            <Avatar alt="../../../Remy Sharp" src={item.img}/>
                                        </ListItemAvatar>
                                        <div className={classes.removeBox}>
                                            <ListItemAvatar>
                                                <Remove className={classes.removeBoxFontSize}>
                                                </Remove>
                                            </ListItemAvatar>
                                        </div>
                                        <span className={classes.hasIncreasedListName}>{item.name}</span>
                                    </ListItem>)
                            })}
                        </List>
                    </Grid>
                    <Grid container justify="center" alignItems="center" className={classes.hasIncreased}>
                        <p className={classes.hasIncreasedName} style={{color: "#626269"}}>最近合作</p>
                        <List className={classes.RecentlyBox}>
                            {recentlyList.map((item, index) => {
                                return (
                                    <ListItem alignItems="flex-start" className={classes.hasIncreasedList} key={index}
                                              onClick={(e) => this.addPersonnel(index, item.img, item.name, e)}>{/*这里的传值只需要有index 就好了*/}
                                        <ListItemAvatar className={classes.hasIncreasedImg}>
                                            <Avatar alt="../../../Remy Sharp" src={item.img}/>
                                        </ListItemAvatar>
                                        <div className={classes.removeBox}>
                                            <ListItemAvatar>
                                                <Add className={classes.removeBoxFontSize}>
                                                </Add>
                                            </ListItemAvatar>
                                        </div>
                                        <span className={classes.hasIncreasedListName}>{item.name}</span>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                    <Button className={classes.ackButton}
                            style={teamValue !== "" ? {backgroundColor: "RoyalBlue"} : {backgroundColor: "#DCDCDC"}}
                            onClick={(e) => {
                                this.handleAdd(e)
                            }}>确认</Button>
                </Card>
            </div>
        )
    }
}

AddMember.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddMember);
