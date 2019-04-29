import React, {Component} from 'react'
import Head from '../../component/Head'
import InputBase from '@material-ui/core/InputBase'
import {fade} from '@material-ui/core/styles/colorManipulator'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import Icon from '@material-ui/core/Icon'
import ProjectCard from './ProjectCard/ProjectCard'
import CreateProjectCard from './CreateProjectCard'
import {getList} from '../../API/API'
import {observer, inject} from 'mobx-react'

const styles = theme => ({
    firstRoot: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start'
    },
    search: {
        flexGrow: '2',
        marginTop: theme.spacing.unit * 2,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.85),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '80%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.primary.light
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    addCircleRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    addCircleIconHover: {
        color: theme.palette.primary.light,
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: theme.palette.primary.dark
        }
    },
    projectCard: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        //position: 'relative',
        flexWrap: 'wrap',
        height: 550,
        overflow: "auto"
    }
});

@inject("store")
@observer
class ProjectLits extends Component {
    constructor(props) {
        super(props);
        this.store = props.store.proListStore
        this.displayCreatCard = this.store.displayCreatCard
        this.setDisplayCreatCard = this.store.setDisplayCreatCard
    }

    state = {
        displayCreatCard: false,//创建新工程选项卡的生成
        list: []
    }

    componentDidMount() {
        //  需要用户id
        getList().then((data) => {/**/
            console.log("获取的数据");
            /*在这个每个项目需要id里面，*/
            console.log(data);
            this.setState({list: data.list})
        }, () => {
        })
    }

    creatCard = () => {
        console.log(1)
        this.setDisplayCreatCard(true)
    }

    addDateList = (data) => {
        console.log("增加Data");
        console.log(data)
        this.setState({
            list: [...this.state.list, data]
        })
    };

    render() {
        const {classes} = this.props
        const displayCreatCard = this.props.store.proListStore.displayCreatCard
        return (<div>
                <Head/>
                <Grid container spacing={0}>
                    <Grid item xs></Grid>
                    <Grid item xs={8}>
                        <div className={classes.firstRoot}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <InputBase
                                    placeholder="搜索项目"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </div>
                            <div className={classes.addCircleRoot} onClick={this.creatCard}>
                                <Icon className={classes.addCircleIconHover} fontSize="large">
                                    add_circle
                                </Icon>
                            </div>
                        </div>
                        <div className={classes.projectCard}>
                            {this.state.list.map((item, index) => {
                                return <ProjectCard obj={item} key={index}/>
                            })}
                            {displayCreatCard && <CreateProjectCard addList={this.addDateList}/>}{/*展示的效果*/}
                        </div>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
            </div>
        )
    }
}

/*ProjectLits.propTypese = {
    classes: PropTypes.object.isRequired,
}*/

export default withStyles(styles)(ProjectLits)