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
import { ListItem } from '@material-ui/core'


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
		maxWidth: 900,
		minWidth:800,
		minHeight:400,
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
	main: {
		display: 'flex'
	},
	ListRoot: {
		width:400,
	},
	
	onetheme:{
		display:'flex',
		height: '20'
	},
	oneFirst:{
		width: 20,
		height: 20,
		marginRight: 20,
		backgroundColor:theme.palette.primary.dark
	},
	oneSecond: {
		width: 20,
		height: 20,
		marginRight: 20,
		backgroundColor:theme.palette.primary.main
	},
	onethrid: {
		width: 20,
		height: 20,
		marginRight: 20,
		backgroundColor:theme.palette.primary.light
	},
	twotheme:{
		display:'flex',
		height: '20'
	},
	twoFirst:{
		width: 20,
		height: 20,
		marginRight: 20,
		backgroundColor:theme.palette.primary.dark
	},
	twoSecond: {
		width: 20,
		height: 20,
		marginRight: 20,
		backgroundColor:theme.palette.primary.main
	},
	twothrid: {
		width: 20,
		height: 20,
		marginRight: 20,
		backgroundColor:theme.palette.primary.light
	}
});

class RecipeReviewCard extends React.Component {
	state = {
		selectedValue: 'a',
		selectedtheme: 'a',
	};

	hanleChange = (event) => {
		this.setState({selectedValue: event.target.value})
	}
	hanleThemeChange = (event) => {
		this.setState({selectedtheme: event.target.value})
	}
	render() {
		const {classes} = this.props;

		return (
			<div className={classes.root}>
			<Card className={classes.card}>
				<CardHeader
					avatar={
						<div></div>
					}
					title='设置'

				/>
				<CardContent>
					<div className={classes.main}>
						<div>
							<p>语言</p>
							<List dense className={classes.ListRoot}>
							<ListItem >
							<ListItemText primary={'汉语'} />
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
							<ListItem >
							<ListItemText primary={'English'} />
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
						<div>
							<p>主题颜色更改</p>
							<List dense className={classes.ListRoot}>
							<ListItem >
								<ListItemText >
									<div className={classes.onetheme}>
										<div className={classes.oneFirst}></div>
										<div className={classes.oneSecond}></div>
										<div className={classes.onethrid}></div>
									</div>
								</ListItemText>
								<ListItemSecondaryAction>
									<Radio
										checked={this.state.selectedtheme === 'a'}
										onChange={this.hanleThemeChange}
										value='a'
										name="radio-button-demo"
										aria-label="A" 
									/>
								</ListItemSecondaryAction>
							</ListItem>
							<ListItem >
								<ListItemText >
								<div className={classes.twotheme}>
										<div className={classes.twoFirst}></div>
										<div className={classes.twoSecond}></div>
										<div className={classes.twothrid}></div>
									</div>
								</ListItemText>
								<ListItemSecondaryAction>
									<Radio
										checked={this.state.selectedtheme === 'b'}
										onChange={this.hanleThemeChange}
										value='b'
										name="radio-button-demo"
										aria-label="B" 
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