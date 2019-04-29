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
import {Link} from 'react-router-dom'
import {inject, observer} from "mobx-react/index";

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    card: {
        width: 250,
        //paddingTop: theme.spacing.unit * 2 
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

@inject('store')
@observer
class WfCard extends Component {
    /*  static propTypes = {
          prop: PropTypes
      };*/
    state = {
        expanded: false,
        data: [],
        showData: {},
        prevId: null,
        externalData: true
    };

    constructor(props) {
        super();
        this.store = props.store.DataList;//数据传递的时候
    }


    /* componentDidMount(){
         let {data}=this.props;
         this.setState({data:data},()=>{
             console.log("数据展示效果")
             console.log(data)
         })
     }*/

    render() {
        const {classes, data, match} = this.props;
        let newLove = JSON.parse(sessionStorage.getItem('projectId'));
        // let path = "/wb";//
        //let path = `/pji/${newLove}/wb/${item.workflowId}`;
        return (/*在mobx 里面请求的数据*/
            <div>
                {data.map((item, index) => {
                    return (
                        <Button className={classes.root} key={index} component={Link}
                                to={`/pji/${newLove}/wb/${item.workflowId}`}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title={
                                        <Typography variant="h6">
                                            {item.name}
                                        </Typography>
                                    }
                                    subheader={
                                        <div>
                                            <Typography component="p" color="textSecondary">
                                                修改时间：{item.time}
                                            </Typography>
                                            <Typography component="p" color="textSecondary">
                                                类别：{item.category}
                                            </Typography>
                                        </div>
                                    }
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={item.img}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography component="p">
                                        {item.describe}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Button>
                    )
                })}
            </div>
        )
    }
}

WfCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WfCard)