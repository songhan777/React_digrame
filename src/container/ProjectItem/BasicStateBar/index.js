import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import ImageAvatars from '../../ProjectLits/ProjectCard/ImageAvatars'

const styles = theme => ({
    root: {
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    shrinkFig: {
        width: 105,
        height: 100,
        overflow: 'hidden',
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
        paddingLeft: 5,
    },
    shrinkImg: {
        width: 100,
        height:100,
    },
    helper: {
        borderRight: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    data: {
        width: '230px'
    },
    avatars: {
        width: '230px',
        padding:'0px'
    },
    avatarsSecondry:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    date: {
        width: '230px'
    },
    state: {
        width: '230px'
    }
})

class BasicStateBar extends Component {
    static propTypes = {
        prop: PropTypes
    }   
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.shrinkFig}>
                    <img  className={classes.shrinkImg}src="./static/images/uxceo-128.jpg"/>
                </div>
                <div className={classNames(classes.data,classes.helper)}>
                    <Typography variant="h7">
                        这是第一个项目
                    </Typography>
                    <Typography component="p" color="textSecondary">
                        ID:123456789
                    </Typography>
                </div>
                <div className={classNames(classes.avatars,classes.helper)}>
                    <Typography>
                        成员
                    </Typography>
                    <div className={classes.avatarsSecondry}>
                        <ImageAvatars />
                        <ImageAvatars />
                    </div>
                </div>
                <div className={classNames(classes.date,classes.helper)}>
                    <Typography>
                        最近修改日期
                    </Typography>
                    <Typography>
                        2018/10/10
                    </Typography>
                </div>
                <div className={classNames(classes.state,classes.helper)}>
                    <Typography>
                        运行中的计算
                    </Typography>
                    <Typography variant='title' color='error'>
                        1
                    </Typography>
                </div>
            </div>
        )
    }
}

BasicStateBar.propTypese = {
    classes: PropTypes.object.isRequired,
} 

export default withStyles(styles)(BasicStateBar)