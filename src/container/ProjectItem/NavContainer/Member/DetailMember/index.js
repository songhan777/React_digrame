import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {getUserSynopsis} from "../../../../../API/API";
import Head from "../../../../../component/Head"


const styles = theme => ({
    root: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: "content",
        backgroundColor: "#FFF"
    },
    personageRoot: {
        width: '100%',
        height: '87%',
        position: `absolute`,
        left: 0,
    },
    search: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
    },
    personageHeader: {
        display: `flex`,
        width: `82%`,
        height: `10%`,
        position: `absolute`,
        top: 60,
        justifyContent: `space-between`,
        paddingLeft: 100
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
        width: 150,
        height: 150,
        borderRadius: `50%`,
        zIndex: 1
    },

    messageBoxBig: {
        position: `relative`,
        top: 250,
        left: 0
    },
    messageBox: {
        display: `flex`,
    },
    dataBox: {
        width: `50%`,
        height: `100%`,
        paddingLeft: 150
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
        width: 210,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    departmentFont: {
        fontSize: 26,
        color: `#5d6b79`,
        width: 300,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
});

class DetailMember extends React.Component {
    state = {
        wholeList: [],
    };
    constructor(props){
        super(props);
    }
    componentDidMount() {
        getUserSynopsis({userId: this.props.match.params.memberId}).then((data) => {
            this.setState({
                wholeList: data,
            })
        });
    }
    //
    render() {
        const {classes} = this.props;
        const {wholeList} = this.state;
        let Member =
            <div className={classes.personageRoot}>
                <Head/>
                <div className={classes.personageHeaderImgBox}>
                    <Avatar className={classes.personageHeaderImg}
                            src={wholeList.img}/>
                </div>
                <Card className={classes.personageRoot}>
                    <List className={classes.personageHeader}>
                        <ListItemText primary={'个人资料'} style={{flex: `initial`,}}
                                      classes={{primary: classes.personageHeaderFont}}/>
                    </List>
                    <div className={classes.messageBoxBig}>
                        <div className={classes.messageBox}>
                            <List className={classes.dataBox}>
                                <div className={classes.dataName}>
                                    <ListItemText primary={'姓名'} style={{flex: `none`, padding: 0}}
                                                  classes={{primary: classes.dataNameFont}}/>
                                    <ListItemText primary={wholeList.name}
                                                  style={{flex: `none`, padding: 0}}
                                                  classes={{primary: classes.dataMailboxFont}}/>
                                </div>
                                <div className={classes.dataEmail}>
                                    <ListItemText primary={"邮箱"} style={{flex: `none`, padding: 0}}
                                                  classes={{primary: classes.dataEmailFont}}/>
                                    <ListItemText primary={wholeList.mailbox}
                                                  style={{flex: `none`, padding: 0}}
                                                  classes={{primary: classes.dataEmailFont}}/>
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
                                            <ListItemText primary={wholeList.organization}
                                                          classes={{primary: classes.departmentFont}}/>
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
                                            <ListItemText primary={wholeList.department}
                                                          classes={{primary: classes.departmentFont}}/>
                                        </Grid>
                                    </div>
                                </div>
                            </List>
                        </div>
                    </div>
                </Card></div>;
        return (
            <div className={classes.root}>

                {Member}
            </div>
        );
    }
}

DetailMember.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailMember);
