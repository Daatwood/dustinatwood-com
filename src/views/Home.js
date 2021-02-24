import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Fade } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import homeStyle from '../styles/homeStyle';

const Home = ({ classes }) => {
	return (
		<div>
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Typography className={classes.heading} variant="display4">
						Hello, I'm Dustin
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Fade in timeout={2000}>
						<Typography variant="subheading" className={classes.body}>
							I’m a passionate software engineer with a focus on delivering quality applications that are
							both highly efficient and security conscious. Check out
							<Link to="/about" className={classes.link}>
								{' about me '}
							</Link>to learn more or feel free to
							<Link to="/contact" className={classes.link}>
								{' contact me. '}
							</Link>
						</Typography>
					</Fade>
				</Grid>
			</Grid>
		</div>
	);
};

export default withStyles(homeStyle)(Home);
