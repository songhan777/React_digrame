import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton'
import Clear from '@material-ui/icons/Clear'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import PlayArrow from '@material-ui/icons/PlayArrow'
import TextField from '@material-ui/core/TextField';
import {observer, inject} from 'mobx-react'

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    card: {
        maxWidth: 250,
        position: 'relative',
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        //objectFit: 'cover',
        height: 140,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mediaImg: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    addCircle: {
        width:40,
        height:40,
        borderRadius:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color: theme.palette.primary.dark,
        '&:hover': {
            color: theme.palette.primary.light,
            backgroundColor:"#A3E4D7",
        }
    },
    editBtn: {
        width:40,
        height:40,
        borderRadius:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position: 'absolute',
        right: theme.spacing.unit * 2,
        top: theme.spacing.unit * 2,
        backgroundColor: theme.palette.common.white,
        '&:hover': {
            color: theme.palette.primary.light,
            backgroundColor:"#A3E4D7",
        }
    },
    List: {
        width: '100%'
    },
    ListItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding: 0
    },
    textField: {
        flexGrow: '2'
    },
    Arrow: {
        '&:hover': {
            color: theme.palette.error.light
        }
    }
})

@inject("store")
@observer
class CreateProjectCard extends Component {
    constructor(props) {
        super(props)
        this.store = props.store.proListStore
        this.setDisplayCreatCard = this.store.setDisplayCreatCard
        this.inputRef = React.createRef();
    }

    state = {
        upPreviewFlg: false,
        imgUrlResulat: '',
        form: {},//如果不知此fileReader，就通过formData方式传给后端图片信息
        name: '',//输入的项目名称
    }
    hanleCloseCreateCard = () => {
        this.setDisplayCreatCard(false)
    }

    handleAddImg = () => {
        this.inputRef.current.click()
    }

    fileChange = (e) => {
        console.log(1)
        const files = this.inputRef.current.files
        const length = files.length

        if (length == 0) return
        if (length > 1) {
            alert("你选择了超过一张图片，请重新选择")
            return
        }
        //判断是否支持FileReader
        if (window.FileReader) {
            let reader = new FileReader();
            //获取文件
            let file = files[0];
            let imageType = /^image\//;
            //是否是图片
            if (!imageType.test(file.type)) {
                alert("请选择图片！");
                return;
            }
            //读取完成
            reader.onload = (e) => {
                this.setState({
                    imgUrlResulat: e.target.result,
                    upPreviewFlg: true
                })
            };
            reader.readAsDataURL(file)
        } else {
            alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
            let form = new FormData();//FormData对象
            form.append("file", fileObj);//文件对象
            this.setState({form})

        }
        /*
                let form = new FormData(); // FormData 对象
                form.append("file", fileObj); // 文件对象 */
    }

    hanleChange = (e) => {
        console.log(2)
        this.setState({name: e.target.value})
    }

    actionInfoToServer = () => {
        console.log(3)
        if (this.state.name == '') {
            alert('请填写项目名称')
            return
        }
        //这里需要一个接口，来增加
        console.log("addDate");
        //这里需要将函数
        console.log(this.state.name)
        console.log(this.state.imgUrlResulat)
        // 这里需要的参数就是  需要推送add的参数, 将需要整理的参数处理好。
        // 这里需要
        let myDate=new Date();
        console.log("时间");
        console.log(myDate);
        let newObject = {
            bg: this.state.imgUrlResulat,
            class: "生物",//这个参数该怎么控制。
            mtime: myDate,//时间参数
            title: this.state.name
        };
        this.props.addList(newObject)
        this.setDisplayCreatCard(false)
    };

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <div className={classes.media} elevation={1}>
                            <input
                                type="file"
                                ref={this.inputRef}
                                style={{display: 'none'}}
                                onChange={this.fileChange}
                            />
                            {this.state.upPreviewFlg
                                ?
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    className={classes.mediaImg}
                                    height="140"
                                    image={this.state.imgUrlResulat}
                                    title="Contemplative Reptile"/>
                                :
                                <Card variant="fab" className={classes.addCircle} aria-label="Add"
                                        onClick={this.handleAddImg}>
                                    <AddIcon/>
                                </Card>
                            }
                        </div>
                        <Card className={classes.editBtn} aria-label='Edit' onClick={this.hanleCloseCreateCard}>
                            <Clear/>
                        </Card>
                    </CardActionArea>
                    <CardActions>
                        <List dense disablePadding={true} className={classes.List}>
                            <ListItem disableGutters className={classes.ListItem}>
                                <TextField
                                    id="standard-bare"
                                    className={classes.textField}
                                    placeholder="输入项目名称"
                                    margin="normal"
                                    value={this.state.name}
                                    onChange={this.hanleChange}
                                />
                                <PlayArrow className={classes.Arrow} onClick={this.actionInfoToServer}/>
                            </ListItem>
                        </List>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

CreateProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CreateProjectCard);