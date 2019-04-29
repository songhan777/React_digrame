import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import red from '@material-ui/core/colors/red'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Radio from '@material-ui/core/Radio'
import {ListItem} from '@material-ui/core'
import { observer, inject } from 'mobx-react'


const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flexShrink: '0',
        maxWidth: 1100,
        minWidth: 1000,
        minHeight: 500,
    },
    CardHeaderFont: {
        paddingLeft: 30,
        fontSize: 36,
        borderLeft: `5px solid #6b93cc`
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
        justifyContent: `center`,
    },
    button: {
        width: 200,
        height: 60,
        fontSize: 20,
        color: `#fdfdfd`,
        boxShadow: `0px 12px 8px -12px #B5B5B5`,
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
    main: {
        display: 'flex',
        justifyContent: `space-evenly`
    },
    languageFont: {
        margin: 0,
        fontSize: 30,
        color: `#384149`
    },
    themeFont: {
        margin: 0,
        fontSize: 30,
        color: `#384149`
    },
    boundaries: {
        height: 210,
        width: 2,
        backgroundColor: `#384149`
    },
    ListRoot: {
        width: 250,
    },
    ChineseFont: {
        color: `#384149`,
        fontSize: `26px`
    },
    onetheme: {
        display: 'flex',
        height: '20'
    },
    oneFirst: {
        width: 40,
        height: 40,
        marginRight: 20,
        backgroundColor: theme.palette.primary.dark
    },
    oneSecond: {
        width: 40,
        height: 40,
        marginRight: 20,
        backgroundColor: theme.palette.primary.main
    },
    onethrid: {
        width: 40,
        height: 40,
        marginRight: 20,
        backgroundColor: theme.palette.primary.light
    },
    twotheme: {
        display: 'flex',
        height: '20'
    },
    twoFirst: {
        width: 40,
        height: 40,
        marginRight: 20,
        backgroundColor: theme.palette.primary.dark
    },
    twoSecond: {
        width: 40,
        height: 40,
        marginRight: 20,
        backgroundColor: theme.palette.primary.main
    },
    twothrid: {
        width: 40,
        height: 40,
        marginRight: 20,
        backgroundColor: theme.palette.primary.light
    }
});

class RecipeReviewCard extends React.Component {
    state = {
        selectedValue: 'a',
        selectedtheme: 'themDefault',
    };

    hanleChange = (event) => {
        this.setState({selectedValue: event.target.value})
    }
    hanleThemeChange = (event) => {
        this.setState({selectedtheme: event.target.value})
    }
    hanleThreeChange = (event) => {
        this.setState({selectedtheme: event.target.value})
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader
                        classes={{title: classes.CardHeaderFont}}
                        avatar={
                            <div></div>
                        }
                        title='设置'
                    />
                    <CardContent>
                        <div className={classes.main}>
                            <div>
                                <p className={classes.languageFont}>语言</p>
                                <List dense className={classes.ListRoot}>
                                    <ListItem style={{height: `60px`}}>
                                        <ListItemText primary={'汉语'} style={{fontSize: `22px`, color: `#384149`,}}/>
                                        <ListItemSecondaryAction>
                                            <Radio
                                                checked={this.state.selectedValue === 'a'}
                                                onChange={this.hanleChange}
                                                value='a'
                                                name="radio-button-demo"
                                                aria-label="A"
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem style={{height: `60px`}}>
                                        <ListItemText primary={'English'}
                                                      style={{fontSize: `22px`, color: `#384149`,}}/>
                                        <ListItemSecondaryAction>
                                            <Radio
                                                checked={this.state.selectedValue === 'b'}
                                                onChange={this.hanleChange}
                                                value='b'
                                                name="radio-button-demo"
                                                aria-label="B"
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </List>
                            </div>
                            <div className={classes.boundaries}></div>
                            <div>
                                <p className={classes.themeFont}>主题颜色更改</p>
                                <List dense className={classes.ListRoot}>
                                    <ListItem style={{height: `60px`}}>
                                        <ListItemText>
                                            <div className={classes.onetheme}>
                                                <div className={classes.oneFirst}></div>
                                                <div className={classes.oneSecond}></div>
                                                <div className={classes.onethrid}></div>
                                            </div>
                                        </ListItemText>
                                        <ListItemSecondaryAction>
                                            <Radio
                                                checked={this.state.selectedtheme === 'themDefault'}
                                                onChange={this.hanleThemeChange}
                                                value='themDefault'
                                                name="radio-button-demo"
                                                aria-label="themDefault"
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem style={{height: `60px`}}>
                                        <ListItemText>
                                            <div className={classes.twotheme}>
                                                <div className={classes.twoFirst}></div>
                                                <div className={classes.twoSecond}></div>
                                                <div className={classes.twothrid}></div>
                                            </div>
                                        </ListItemText>
                                        <ListItemSecondaryAction>
                                            <Radio
                                                checked={this.state.selectedtheme === 'themeGreen'}
                                                onChange={this.hanleThemeChange}
                                                value='themeGreen'
                                                name="radio-button-demo"
                                                aria-label="themeGreen"
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem style={{height: `60px`}}>
                                        <ListItemText>
                                            <div className={classes.twotheme}>
                                                <div className={classes.twoFirst}></div>
                                                <div className={classes.twoSecond}></div>
                                                <div className={classes.twothrid}></div>
                                            </div>
                                        </ListItemText>
                                        <ListItemSecondaryAction>
                                            <Radio
                                                checked={this.state.selectedtheme === 'c'}
                                                onChange={this.hanleThreeChange}
                                                value='c'
                                                name="radio-button-demo"
                                                aria-label="C"
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <Button variant="contained" color="primary" className={classes.button}> 保存修改</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);