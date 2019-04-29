import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import ImageAvatars from '../../ProjectLits/ProjectCard/ImageAvatars'
import {inject, observer} from "mobx-react/index";

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
        height: 100,
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
        padding: '0px'
    },
    avatarsSecondry: {
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
});

@inject('store')
@observer

class BasicStateBar extends Component {
    /*  static propTypes = {
          prop: PropTypes
      }   */
    constructor(props) {
        super();
        this.store = props.store.DataList;//数据传递的时候
        this.data = this.store.data;
    }

    state = {
        data: {},
        membersAry: []
    };

    componentDidMount() {
        // 这里需要替换的数据就是 图和节点
        let newValue =JSON.parse(sessionStorage.getItem('key')) ;
        let membersAry =newValue.members.slice(0,3);
        this.setState({
            data: newValue,
            membersAry: membersAry
        })
    }

    render() {
        const {classes} = this.props;
        const {data, membersAry} = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.shrinkFig}>
                    <img className={classes.shrinkImg} src={data.img}/>
                </div>
                <div className={classNames(classes.data, classes.helper)}>
                    <Typography variant="h6">
                        {data.name}
                    </Typography>
                    <Typography component="p" color="textSecondary">
                        ID:123456789{/*这里的Id 是存在在全局的参数*/}
                    </Typography>
                </div>
                <div className={classNames(classes.avatars, classes.helper)}>
                    <Typography>
                        成员
                    </Typography>
                    <div className={classes.avatarsSecondry}>
                        {membersAry.map((item, index) => {
                            return (<ImageAvatars key={index} img={item.img}/>)
                        })}
                        {/*map 的数据获取展示问题数据在mobx dataList 里面*/}
                    </div>
                </div>
                <div className={classNames(classes.date, classes.helper)}>
                    <Typography>
                        最近修改日期
                    </Typography>
                    <Typography>
                        {data.data}
                    </Typography>
                </div>
                <div className={classNames(classes.state, classes.helper)}>
                    <Typography>
                        运行中的计算
                    </Typography>
                    <Typography variant='title' color='error'>
                        {data.operationCalculateId}
                    </Typography>
                </div>
            </div>
        )
    }
}

BasicStateBar.propTypese = {
    /*  classes: PropTypes.object.isRequired,*/
};

export default withStyles(styles)(BasicStateBar)