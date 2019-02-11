import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from '../../component/Head'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import red from '@material-ui/core/colors/red'
import Icon from '@material-ui/core/Icon'
import ProjectCard from './ProjectCard/ProjectCard'
import CreateProjectCard from './CreateProjectCard'
import { postList, getList } from '../../API/API'
import {observer, inject} from 'mobx-react'


const styles = theme => ({
    firstRoot: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start'
    },
    search: {
        flexGrow: '2',
        marginTop:theme.spacing.unit * 2,
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
        color:theme.palette.primary.light,
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: theme.palette.primary.dark
        }
    },
    projectCard:{     
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        //position: 'relative',
        flexWrap: 'wrap',
    }
});

@inject("store")
@observer 
class ProjectLits extends Component {
    constructor(props){
        super(props)
        this.store = props.store.proListStore
        this.displayCreatCard = this.store.displayCreatCard
        this.setDisplayCreatCard = this.store.setDisplayCreatCard
    }
    state = {
        displayCreatCard:false,//创建新工程选项卡的生成
        list:[]
    }

    componentDidMount() {
        getList().then((data) => {
            this.setState({list:data.list})
        })
    }

    creatCard = () => {
        console.log(1)
       this.setDisplayCreatCard(true)
    }

    render() {
        const { classes } = this.props
        const displayCreatCard = this.props.store.proListStore.displayCreatCard
        return (<div>
            <Head />
            <Grid container spacing={0}>
                <Grid item xs ></Grid>
                <Grid item xs={8} >
                <div className={classes.firstRoot} >
                    <div className={classes.search} >
                        <div className={classes.searchIcon} >
                            <SearchIcon />
                        </div>
                        <InputBase 
                        placeholder="搜索"
                            classes={{
                                root:classes.inputRoot,
                                input:classes.inputInput,
                            }}
                        />
                    </div>
                    <div className={classes.addCircleRoot} onClick={this.creatCard}>
                        <Icon className={classes.addCircleIconHover} color="disbeld" fontSize="large">
                            add_circle
                        </Icon>
                    </div>
                </div>
                <div className={classes.projectCard}>
                {this.state.list.map(item => {
                   return <ProjectCard obj={item} />
                })}
                { displayCreatCard && <CreateProjectCard />} 
                </div>
            </Grid>
                <Grid item xs ></Grid>
            </Grid>
            </div> 
        )
    }
}

ProjectLits.propTypese = {
    classes: PropTypes.object.isRequired,
} 

export default withStyles(styles)(ProjectLits)