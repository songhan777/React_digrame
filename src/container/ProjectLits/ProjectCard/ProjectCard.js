import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ImageAvatars from './ImageAvatars'
import EditIcon from '@material-ui/icons/EditOutlined'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'


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
        objectFit: 'cover',
    },
    editBtn: {
        position: 'absolute',
        right: theme.spacing.unit * 2,
        top: theme.spacing.unit * 2,
        backgroundColor: theme.palette.common.white,
        width: 40,
        height: 40,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&:hover':{
            backgroundColor:"#58D68D"
        }
    }
});

function ProjectCard(props) {
    const {classes} = props
    let {obj} = props
    let path = `/pji/${obj.project}`;
    return (
        <Button className={classes.root} component={Link} to={path}>{/*传递的值在*/}
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={classes.media}
                        height="140"
                        image={obj.bg}
                        title="Contemplative Reptile"
                    />
                    <Card className={classes.editBtn} aria-label='Edit'>
                        <EditIcon/>
                    </Card>
                </CardActionArea>
                <CardActions>
                    <List dense>
                        <ListItem disableGutters>
                            <ImageAvatars img={obj.bg}/>
                            <ListItemText primary={obj.title}/>
                        </ListItem>
                    </List>
                </CardActions>
            </Card>
        </Button>
    )
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProjectCard);