import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import social from '../routes/social';

const styles = (theme) => ({
	footer: {
		backgroundColor: '#e1e2e1',
		position: 'fixed',
		left: 0,
		bottom: 0,
		width: '100%',
		paddingLeft: theme.spacing.unit * 4,
		paddingRight: theme.spacing.unit * 4,
		paddingTop: theme.spacing.unit * 6,
		paddingBottom: theme.spacing.unit * 2
	},
	padding: {
		padding: theme.spacing.unit * 2
	},
	link: {
		color: theme.palette.primary.dark,
		fontFamily: [ 'Nunito Sans', 'sans-serif' ],
		'&:hover': {
			color: theme.palette.secondary.dark
		}
	}
});

const Footer = ({ classes, links }) => {
	return (
		<footer className={classes.footer}>
			<Grid container justify="space-around">
				<Grid item>
					{social.map((route, key) => {
						return (
							<Link
								key={key}
								to={route.path}
								target="_blank"
								className={classNames(classes.link, classes.padding)}
								style={{ color: route.color }}>
								{route.name}
							</Link>
						);
					})}
				</Grid>
				<Grid item>
					{links.map((route, key) => {
						return (
							<Link key={key} to={route.path} className={classNames(classes.link, classes.padding)}>
								{route.name}
							</Link>
						);
					})}
				</Grid>
			</Grid>
			<Typography variant="caption" style={{ textAlign: 'center' }}>
				© Copyright 2018. Dustin Atwood
			</Typography>
		</footer>
	);
};
export default withStyles(styles)(Footer);
