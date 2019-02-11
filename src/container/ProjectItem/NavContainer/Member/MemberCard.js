import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ImageAvatars from '../../../ProjectLits/ProjectCard/ImageAvatars'

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
    memtag: {
        display: 'flex',
        alignItems: 'center',
    },
    memtagColor: {
        display: 'inline-block',
        width: 15,
        height:15 ,
        borderRadius: 5,
        backgroundColor: theme.palette.error.main,
        marginRight:40
    }
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
                        avatar={
                            <ImageAvatars />
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        subheader={
                            <div>
                                <Typography component="p" color="textSecondary">
                                    104034343@qq.com
                                </Typography>
                            </div>
                        }
                    />
                    <CardContent>
                        <div className={classes.memtag}>
                            <span className={classes.memtagColor}></span>
                            创建者
                        </div>
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