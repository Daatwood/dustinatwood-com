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
							discover things about technology including Ruby, Javascript, HTML and CSS. Technology is
							continually changing and I strive to challenge myself to stay up to date in the lastest
							releases and upcoming trends. When I'm not writing instructions for invisible robots, I
							enjoy cooking, attending concerts, traveling, and spending time in the great outdoors with
							my daughter.
						</Typography>
					</Paper>
				</Grid>
				<Grid item />
			</Grid>
		</div>
	);
};
export default withStyles(styles)(About);
