import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Slide } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import footerStyle from '../styles/footerStyle';
import social from '../routes/social';

const Footer = ({ classes, links }) => {
	return (
		<div>
			<Slide in direction="up" timeout={700}>
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
									<Link
										key={key}
										to={route.path}
										className={classNames(classes.link, classes.padding)}>
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
			</Slide>
		</div>
	);
};
export default withStyles(footerStyle)(Footer);
