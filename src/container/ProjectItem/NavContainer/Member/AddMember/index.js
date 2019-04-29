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
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase';
import blue from "@material-ui/core/colors/blue";

import {addMemberSearch} from "../../../../../API/API"

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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 99999999999
    },
    contentBox: {
        width: 500,
        height: 500,
        backgroundColor: "#fff"
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
    },
    affirmButton: {
        backgroundColor: "#07E9FA",
        '&:hover': {
            backgroundColor: "#47FA07",
        },
    },
    inputRoot: {
        border: "1px solid #fff"
    }
});

class AddMember extends React.Component {
    state = {
        wholeList: [],
        textName: "",
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    shutBox = (e) => {
        if (e.target.id === "AddMember") {
            this.props.shut()
        }
    };

    addData = () => {
        let {textName} = this.state;
        if (textName !== "") {
            addMemberSearch({textName}).then((data) => {
                if (JSON.stringify(data) !== '{}') {// 数据返回效果，
                    this.props.shut()
                    this.props.shut()
                    console.log("增加数据")
                    this.props.add(data);
                } else {
                    alert("没有这个数据")
                }
            });
        }

    };

    onChangeTextName = (e) => {
        this.setState({textName: e.target.value})
    };

    render() {
        let {classes} = this.props;
        const {textName} = this.state;
        return (
            <div className={classes.root} id="AddMember" onClick={(e) => this.shutBox(e)}>
                <Grid className={classes.popupsBox}>
                    <Grid>
                        <ListItemText xs={1} primary={`新增成员`} className={classes.listHead}/>
                        <InputBase
                            placeholder="输入成员名" value={textName}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onChange={(e) => {
                                this.onChangeTextName(e)
                            }}
                        />
                    </Grid>
                    <Button onClick={this.addData} className={classes.affirmButton}>
                        确认
                    </Button>
                </Grid>
            </div>
        );
    }
}

/*
AddMember.propTypes = {
    classes: PropTypes.object.isRequired,
};
*/

export default withStyles(styles)(AddMember);
