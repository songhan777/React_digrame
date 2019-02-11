import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 2 ,
        paddingRight: theme.spacing.unit * 2 ,
        paddingLeft: theme.spacing.unit * 2 ,
        paddingBottom: theme.spacing.unit * 2 ,
    },
    card: {
        maxWidth: 300,
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

class WfCard extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        expanded: false
    };

    handleExpandClick = () => {
        this.setState(state => ({
            expanded: !state.expanded
        }));
    };

    render() {
        const { classes } = this.props
        return (
            <Button className={classes.root} component={Link} to="/wf">
                <Card className={classes.card}>
                    <CardHeader
                        title={
                        <Typography variant="h6">
                            这是第一个工作流
                        </Typography>
                        }
                        subheader={
                            <div>
                                <Typography component="p" color="textSecondary">
                                    修改时间：2018/10/10
                                </Typography>
                                <Typography component="p" color="textSecondary">
                                    类别：生物
                                </Typography>
                            </div>
                        }
                    />
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography component="p">
                            项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，
                        </Typography>
                    </CardContent>
                </Card>
        
            </Button>
            )
    }
}

WfCard.propTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(WfCard)