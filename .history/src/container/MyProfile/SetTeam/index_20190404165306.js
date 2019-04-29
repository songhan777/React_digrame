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
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Reply from '@material-ui/icons/Reply';
import {getTeamList, pushPersonalInformation} from "../../../API/API";
import AddTeam from "./AddTeam"
import AddMember from "./AddMember"
import AlterPassword from "./AlterPassword"

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: "content"
    },
    personageRoot: {
        width: '100%',
        height: '87%',
        position: `absolute`,
        left: 0,
        top: 40,
        padding: `0 120px`
    },
    oneselfCardBox: {
        marginLeft: `18%`,
        position: `relative`,
        top: `30%`,
        left: 0,
    },
    oneselfCard: {
        position: `relative`,
        top: `5%`,
        left: 0,
        width: `100%`,
        height: `12%`,
        display: `flex`,
        justifyContent: `space-between`
    },
    specificCard: {
        position: `absolute`,
        zIndex: 1000,
        borderRadius: `50%`,
        overflow: `hidden`,
        top: 0,
        left: 70,
        width: 100,
        height: 100
    },
    specificCardImg: {
        width: `100%`,
        height: `100%`
    },
    specificName: {
        fontSize: 30
    },
    specificNumberBox: {
        display: `flex`,
        marginLeft: `20%`,
    },
    specificNumber: {
        width: 130,
        fontSize: 18
    },
    message: {
        height: `100%`,
        display: `flex`,
        alignItems: `baseline`,
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 200,
            '&:focus': {
                width: 200,
            },
        },
        borderBottom: `1px solid`
    },
    search: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
    },
    searchBox: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100%`,
        marginRight: `100px`,
    },
    teamButton: {
        color: `GhostWhite`,
        backgroundColor: `RoyalBlue`,
        width: 160,
        height: 50,
        borderRadius: 4,
        minWidth: 40,
        fontSize: 20
    },
    button: {
        width: 160,
        height: 50,
        borderRadius: 4,
        minWidth: 40,
        fontSize: 20
    },
    teamMessage: {
        position: `absolute`,
        left: 0,
        top: `20%`,
        width: `100%`,
        height: `100%`
    },
    teamCardBigBox: {
        display: `flex`,
        height: `60%`
    },
    teamCardBox: {
        display: `flex`,
        flexWrap: `wrap`,
        overflow: `auto`,
        width: `90%`,
        height: `100%`
    },
    cooperatorBox: {
        display: `flex`,
        flexWrap: `wrap`,
        overflow: `auto`,
    },
    teamCardList: {
        display: `flex`,
        flexWrap: `inherit`,
        width: `90%`,
        height: 450,
        overflow: `auto`,
    },
    cooperationBox: {
        width: `30%`,
        margin: `1% 0 0 3%`,
        height: 200,
    },
    card: {
        display: `flex`,
        width: `23%`,
        height: `27%`,
        marginTop: `2%`,
        marginLeft: `2%`,
        borderLeft: `4px solid blue`
    },
    cardBox: {
        display: `flex`
    },
    media: {
        height: 80,
        width: 80,
        borderRadius: `50%`,
    },
    cardBoxIcon: {
        position: `absolute`,
        right: 0,
        bottom: 0,
        width: 40,
        height: 40,
        minWidth: 40,
        borderRadius: `50%`
    },
    cardBoxIconColor: {
        margin: theme.spacing.unit,
        fontSize: 32,
    },
    fab: {
        margin: theme.spacing.unit,
        fontSize: 30
    },
    teamCardAdd: {
        margin: `2% 2%`,
        position: `absolute`,
        right: 0
    },
    partner: {
        height: `60%`
    },
    teamCard: {
        display: `flex`,
        flexDirection: `column`,
        width: `100%`,
        height: `28%`,
        borderTop: `4px solid #6d93cc`,
        borderRadius: 4,
        boxShadow: `0px 12px 8px -12px #B5B5B5`,
        paddingLeft: 20
    },
    teamCardImgBox: {
        display: `flex`,
        width: `70%`,
        height: 75
    },
    teamCardImg: {
        position: `absolute`,
        width: 75,
        height: 75,
        border: `5px solid #fff`,
        backgroundColor: `#fff`
    },
    teamCardImg1: {
        position: `absolute`,
        left: 65,
        width: 75,
        height: 75,
        border: `5px solid #fff`,
        backgroundColor: `#fff`
    },
    teamCardImg2: {
        position: `absolute`,
        left: 105,
        width: 75,
        height: 75,
        border: `5px solid #fff`
    },
    teamCardName: {
        fontSize: 22,
        color: `#5d6b79`
    },
    teamCardSerial: {
        fontSize: 20,
        color: `#a0a0a0`,
        padding: 0
    },
    cooperatorAdd: {
        margin: `2% 2%`,
        position: `absolute`,
        right: 0
    },
    personageHeader: {
        display: `flex`,
        width: `82%`,
        height: `10%`,
        position: `absolute`,
        top: 60,
        justifyContent: `space-between`
    },
    personageHeaderFont: {
        borderLeft: `8px solid #6d93cc`,
        fontSize: 30,
        color: `#384149`,
        padding: 0,
        paddingLeft: 20
    },
    personageHeaderImgBox: {
        display: `flex`,
        justifyContent: `center`,
    },
    personageHeaderImg: {
        position: `absolute`,
        top: `-50px`,
        width: 150,
        height: 150,
        borderRadius: `50%`,
        zIndex: 1
    },
    returnTeam: {
        position: `absolute`,
        right: 0,
        fontSize: 22,
        cursor: `pointer`
    },
    messageBoxBig: {
        position: `relative`,
        top: 150,
        left: 0
    },
    messageBox: {
        display: `flex`,
    },
    dataBox: {
        width: `50%`,
        height: `100%`
    },
    dataInput: {
        width: `50%`,
        height: `100%`,
        paddingLeft: 150,
        borderLeft: `1px solid #5d6b79`
    },
    dataName: {
        display: `flex`,
        height: 120,
    },
    dataNameFont: {
        fontSize: 26,
        color: `#5d6b79`,
        width: 100,
    },
    dataMailboxFont: {
        fontSize: 26,
        color: `#5d6b79`,
        width: 300,
    },
    dataEmail: {
        display: `flex`,
        height: 120,
    },
    dataEmailFont: {
        fontSize: 26,
        color: `#5d6b79`,
        width: 100,
    },
    dataPassword: {
        display: `flex`,
    },
    dataPasswordFont: {
        fontSize: 26,
        color: `#5d6b79`,
        width: 100
    },
    dataPasswordInput: {
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 5,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 230,
            '&:focus': {
                width: 230,
            },
        },
        border: `1px solid`,
        height: 40,
        borderRadius: 4,
    },
    dataPasswordButton: {
        fontSize: 18,
        color: `#6d93cc`,
        marginLeft: 30,
    },
    schoolInput: {
        display: `flex`,
        height: 120,
    },
    schoolFont: {
        fontSize: 26,
        color: `#5d6b79`,
        width: 210
    },
    schoolButton: {
        color: `GhostWhite`,
        backgroundColor: `RoyalBlue`,
        width: 230,
        height: 50,
        borderRadius: 4,
        minWidth: 40,
        fontSize: 20,
        marginLeft: 210
    },
    schoolInputRoot: {
        color: 'inherit',
        width: '100%',
        position: `relative`,
        left: 0,
        top: -12,
    },
});

class SetOneselfTeam extends React.Component {
    state = {
        value: true,
        show: true,
        teamShow: false,
        memberShow: false,
        inputValue: "",
        password: "",
        institutions: "",
        department: "",
        wholeList: [],
        teamList: [],
        cooperatorList: [],
        alterPasswordShow: false
    };

    componentDidMount() {
        getTeamList().then((data) => {
            this.setState({
                wholeList: data,
                teamList: data.team,
                cooperatorList: data.cooperator,
            }, () => {
                console.log(this.state.wholeList)
            })
        })
    }

    setValue = () => {
        this.setState({
            value: !this.state.value
        })
    };
    setShow = () => {
        this.setState({
            show: !this.state.show
        })
    };
    getInputValue = (ev) => {
        this.setState({
            inputValue: ev.target.value
        }, () => {

        })
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
        if (this.state.value) {
            let newList = this.state.teamList.filter(
                this.checkAdult
            );
            this.setState({teamList: newList});
        } else {
            let newList = this.state.cooperatorList.filter(
                this.checkAdult
            );
            this.setState({cooperatorList: newList});
        }
    };
    getPassword = (ev) => {
        this.setState({password: ev.target.value}, () => {
            console.log(this.state.password)
        })
    };

    setPassword = () => {//修改
        this.setState({alterPasswordShow: !this.state.alterPasswordShow});
    };
    getInstitutions = (ev) => {
        this.setState({institutions: ev.target.value})
    };
    getDepartment = (ev) => {
        console.log(ev);
        this.setState({department: ev.target.value})
    };

    saveData = () => {//修改密码的展示
        console.log("数据推送");
        const {institutions, department} = this.state;
        if (institutions !== "" && department !== "") {
            pushPersonalInformation({institutions: institutions, department: department}).then(
                (data) => {
                    console.log(data);
                }
            )
        } else {
            alert("输入的值有空值");
        }
    };

    closeTeam = () => {
        console.log("关闭盒子");
        this.setState({
            teamShow: !this.state.teamShow
        })
    };

    addTeam = (img, name, mailbox) => {
        this.setState({
            teamList: [...this.state.teamList, {
                img: img,
                name: name,
                mailbox: mailbox
            }], teamShow: !this.state.teamShow
        })
    };
    closeMember = () => {
        this.setState({memberShow: !this.state.memberShow})
    };

    addCooperator = (teamImg, teamName, cooperationNumber, cooperatorNumber, teamNumber) => {
        this.setState({
            cooperatorList: [...this.state.cooperatorList, {
                teamImg: teamImg,
                teamName: teamName,
                cooperationNumber: cooperationNumber,
                cooperatorNumber: cooperatorNumber,
                teamNumber: teamNumber,
            }], memberShow: !this.state.memberShow
        })
    };

    render() {
        const {classes} = this.props;
        const {value, show, teamList, wholeList, cooperatorList, memberShow, teamShow, alterPasswordShow} = this.state;
        return (
            <div className={classes.root}>
                {alterPasswordShow ? <AlterPassword change={this.setPassword} userName={wholeList.personageName}/> : null}
                {teamShow ? <AddTeam change={this.addTeam} shut={this.closeTeam} url={this.container}/> : null}
                {memberShow ?
                    <AddMember change={this.addCooperator} close={this.closeMember} url={this.container}
                               number={cooperatorList.length}/> : null}
                {show ?
                    <div className={classes.root}>
                        <div className={classes.specificCard}><img className={classes.specificCardImg}
                                                                   src={wholeList.personageImg}/>
                        </div>
                        <Card className={classes.oneselfCard}>
                            <div style={{width: `75%`, height: `100%`}} onClick={this.setShow}>
                                <div className={classes.oneselfCardBox}>
                                    <div className={classes.message}>
                                        <div
                                            className={classes.specificName}>{wholeList.personageName}</div>
                                        <div className={classes.specificNumberBox}>
                                            <span className={classes.specificNumber}>{wholeList.teamNumber}个团队</span>
                                            <span
                                                className={classes.specificNumber}>{wholeList.cooperatorNumber}个合作者</span>
                                        </div>
                                    </div>
                                </div>
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
                                            onBlur={this.getInputValue}
                                        />
                                        <span>
              <SearchIcon onClick={this.getSearch}/>
            </span>
                                    </Grid>
                                </div>
                            </div>
                        </Card>
                        <div className={classes.teamMessage}>
                            <Button color="primary" className={value ? classes.teamButton : classes.button}
                                    onClick={this.setValue}>
                                团队
                            </Button>
                            <Button color="primary" className={!value ? classes.teamButton : classes.button}
                                    onClick={this.setValue}>
                                合作者
                            </Button>
                            {value ?
                                <Card className={classes.teamCardBigBox}>
                                    <div className={classes.teamCardBox}>
                                        {teamList.map((item, index) => {
                                            return (
                                                <Card className={classes.card} key={index}>
                                                    <CardActionArea className={classes.cardBox}>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={item.img}
                                                            title="Contemplative Reptile"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                {item.name}
                                                            </Typography>
                                                            <Typography component="p">
                                                                {item.mailbox}
                                                            </Typography>
                                                        </CardContent>
                                                        <Button className={classes.cardBoxIcon}>
                                                            1
                                                        </Button>
                                                    </CardActionArea>
                                                </Card>
                                            )
                                        })}
                                    </div>
                                    <div className={classes.teamCardAdd} onClick={this.closeTeam}>
                                        <Fab color="primary" aria-label="Add" className={classes.fab}>
                                            <AddIcon/>
                                        </Fab>
                                    </div>
                                </Card> :
                                <Card className={classes.partner}>
                                    <div className={classes.cooperatorBox}>
                                        <List className={classes.teamCardList}>
                                            {cooperatorList.map((item, index) => {
                                                return (<Card key={index} className={classes.cooperationBox}>
                                                    <CardActionArea>
                                                        <ListItem alignItems="flex-start" className={classes.teamCard}>
                                                            <div style={{display: `flex`, width: `100%`}}>
                                                                <div className={classes.teamCardImgBox}>
                                                                    <ListItemAvatar className={classes.teamCardImgBox}>
                                                                        <Avatar className={classes.teamCardImg}
                                                                                alt="Remy Sharp"
                                                                                src={item.teamImg[2]}/>
                                                                    </ListItemAvatar>
                                                                    <ListItemAvatar className={classes.teamCardImgBox}>
                                                                        <Avatar className={classes.teamCardImg1}
                                                                                alt="Remy Sharp"
                                                                                src={item.teamImg[1]}/>
                                                                    </ListItemAvatar>
                                                                    <ListItemAvatar className={classes.teamCardImg2}>
                                                                        <Avatar className={classes.teamCardImg}
                                                                                alt="Remy Sharp"
                                                                                src={item.teamImg[0]}/>
                                                                    </ListItemAvatar>
                                                                </div>
                                                                <div style={{
                                                                    display: `flex`,
                                                                    alignItems: `flex-end`,
                                                                }}>
                                            <span className={classes.teamCardName}>
                                            共{item.cooperatorNumber}人
                                        </span>
                                                                </div>
                                                            </div>
                                                            <div style={{width: `100%`}}>
                                                                <p style={{
                                                                    fontSize: `22px`,
                                                                    margin: `7% 0`,
                                                                    color: `#5d6b79`
                                                                }}>{item.teamName}</p>
                                                                <div style={{display: `flex`}}>
                                                                    <ListItemText primary={`no.${item.teamNumber}`}
                                                                                  style={{
                                                                                      padding: 0,
                                                                                      width: `70%`,
                                                                                      flex: `initial`
                                                                                  }}
                                                                                  classes={{primary: classes.teamCardSerial}}/>
                                                                    <ListItemText
                                                                        primary={`合作次数${item.cooperationNumber}`}
                                                                        style={{
                                                                            padding: 0,
                                                                            flex: `initial`,
                                                                            display: `flex`,
                                                                            alignItems: `center`
                                                                        }}
                                                                        classes={{
                                                                            primary: {
                                                                                color: `#5d6b79`,
                                                                                padding: 0
                                                                            }
                                                                        }}/>
                                                                </div>
                                                            </div>
                                                        </ListItem>
                                                    </CardActionArea>
                                                </Card>)
                                            })}
                                        </List>
                                        <div className={classes.cooperatorAdd} onClick={this.closeMember}>
                                            <Fab color="primary" aria-label="Add" className={classes.fab}>
                                                <AddIcon/>
                                            </Fab>
                                        </div>
                                    </div>
                                </Card>}
                        </div>
                    </div> :
                    <div className={classes.personageRoot}>
                        <div className={classes.personageHeaderImgBox}>
                            <Avatar className={classes.personageHeaderImg}
                                    src={wholeList.personageImg}/>
                        </div>
                        <Card className={classes.personageRoot}>
                            <List className={classes.personageHeader}>
                                <ListItemText primary={'个人资料'} style={{flex: `initial`,}}
                                              classes={{primary: classes.personageHeaderFont}}/>
                                <div onClick={this.setShow}>
                                    <ListItemText primary={'我的团队'} style={{flex: `initial`,}}
                                                  classes={{primary: classes.returnTeam}}/>
                                    <Reply style={{position: `absolute`, top: `10`, right: `-30px`}}/>
                                </div>
                            </List>
                            <div className={classes.messageBoxBig}>
                                <div className={classes.messageBox}>
                                    <List className={classes.dataBox}>
                                        <div className={classes.dataName}>
                                            <ListItemText primary={'姓名'} style={{flex: `none`, padding: 0}}
                                                          classes={{primary: classes.dataNameFont}}/>
                                            <ListItemText primary={wholeList.personageName}
                                                          style={{flex: `none`, padding: 0}}
                                                          classes={{primary: classes.dataMailboxFont}}/>
                                        </div>
                                        <div className={classes.dataEmail}>
                                            <ListItemText primary={"邮箱"} style={{flex: `none`, padding: 0}}
                                                          classes={{primary: classes.dataEmailFont}}/>
                                            <ListItemText primary={wholeList.personageMailbox}
                                                          style={{flex: `none`, padding: 0}}
                                                          classes={{primary: classes.dataEmailFont}}/>
                                        </div>
                                        <div className={classes.dataPassword}>
                                            <ListItemText primary={'密码'} style={{
                                                flex: `none`,
                                                padding: 0,
                                                display: `flex`,
                                                alignItems: `center`
                                            }}
                                                          classes={{primary: classes.dataPasswordFont}}
                                            />
                                            {/*  <div className={classes.search} style={{flex: `none`, padding: 0}}>
                                                <Grid className={classes.search}>
                                                    <InputBase
                                                        classes={{
                                                            root: classes.inputRoot,
                                                            input: classes.dataPasswordInput,
                                                        }}
                                                        inputProps={{type: "password"}}
                                                        onBlur={this.getPassword}
                                                    />
                                                </Grid>
                                            </div>*/}
                                            <Button className={classes.dataPasswordButton} onClick={this.setPassword}>
                                                修改密码
                                            </Button>
                                        </div>
                                    </List>
                                    <List className={classes.dataInput}>
                                        <div className={classes.schoolInput}>
                                            <ListItemText primary={'学校/机构'} style={{
                                                flex: `none`,
                                                padding: 0,
                                                display: `flex`,
                                            }}
                                                          classes={{primary: classes.schoolFont}}/>
                                            <div className={classes.search}
                                                 style={{flex: `none`, padding: 0, alignItems: `baseline`}}>
                                                <Grid className={classes.search}>
                                                    <InputBase
                                                        classes={{
                                                            root: classes.schoolInputRoot,
                                                            input: classes.dataPasswordInput,
                                                        }}
                                                        inputProps={{type: "text"}}
                                                        onBlur={this.getInstitutions}
                                                    />
                                                </Grid>
                                            </div>
                                        </div>
                                        <div className={classes.schoolInput}>
                                            <ListItemText primary={'学院/部门'} style={{
                                                flex: `none`,
                                                padding: 0,
                                                display: `flex`,
                                            }}
                                                          classes={{primary: classes.schoolFont}}/>
                                            <div className={classes.search}
                                                 style={{flex: `none`, padding: 0, alignItems: `baseline`}}>
                                                <Grid className={classes.search}>
                                                    <InputBase
                                                        classes={{
                                                            root: classes.schoolInputRoot,
                                                            input: classes.dataPasswordInput,
                                                        }}
                                                        inputProps={{type: "text"}}
                                                        onBlur={this.getDepartment}
                                                    />
                                                </Grid>
                                            </div>
                                        </div>
                                        <div><Button className={classes.schoolButton} onClick={this.saveData}>
                                            保存修改
                                        </Button></div>
                                    </List>
                                </div>
                            </div>
                        </Card></div>}
                {true}
            </div>
        );
    }
}

SetOneselfTeam.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SetOneselfTeam);
