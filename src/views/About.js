import React from 'react';
import { Typography, Avatar, Paper, Grid } from '@material-ui/core';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import daughter_and_I from '../images/daughter_and_I.jpg';

const styles = (theme) => ({
	heading: {
		textAlign: 'left',
		paddingTop: theme.spacing.unit * 4
	},
	tagline: {
		fontStyle: 'italic',
		letterSpacing: -theme.spacing.unit / 7
	},
	border: {
		width: theme.spacing.unit * 10,
		height: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.light,
		borderRadius: theme.spacing.unit * 2,
		marginTop: theme.spacing.unit
	},
	padding: {
		padding: theme.spacing.unit * 2
	},
	avatar: {
		margin: theme.spacing.unit,
		width: 120,
		height: 120,
		[theme.breakpoints.up('md')]: {
			width: 240,
			height: 240
		}
	},
	body: {
		fontFamily: [ 'Nunito Sans', 'sans-serif' ],
		fontSize: '1rem'
	}
});

const About = ({ classes }) => {
	return (
		<div>
			<Typography variant="display2" className={classes.heading}>
				About Me
			</Typography>
			<div className={classes.border} />
			<Grid container direction="column" justify="center" alignItems="center">
				<Grid item className={classes.padding}>
					<Avatar alt="my daughter and I" src={daughter_and_I} className={classes.avatar} />
				</Grid>
				<Grid item className={classes.padding}>
					<Typography variant="display1" className={classes.tagline}>
						Coding is my creative outlet to the world.
					</Typography>
				</Grid>

				<Grid item>
					<Paper className={classes.padding}>
						<Typography variant="body1" className={classes.body}>
							I'm Dustin Atwood, a Software Engineer with a passion for programming. I love to learn and
							discover all things Ruby, Javascript, HTML and CSS. I found coding a great way to express
							myself. With technology is always moving forward and continually changing, I am always
							learning about the new trends and staying up to date in the lastest releases. When I'm not
							writing code, I enjoy cooking 🌮, attending concerts 🎶, traveling 🏍, and spending time
							with my daughter in the great outdoors 🏔.
						</Typography>
					</Paper>
				</Grid>
				<Grid item />
			</Grid>
		</div>
	);
};
export default withStyles(styles)(About);
