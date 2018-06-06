import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Grid, Avatar } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
//import mountains from '../images/mountains.jpg';

const styles = (theme) => ({
	heading: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.secondary.dark,
		marginTop: theme.spacing.unit * 10,
		marginBottom: theme.spacing.unit * 10
		// backgroundImage: `url(${mountains})`,
		// height: '100%',
		// position: 'relative',
		// backgroundPosition: 'center',
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: 'cover'
	},
	body: {
		color: theme.palette.primary.light,
		fontFamily: [ 'Nunito Sans', 'sans-serif' ],
		fontSize: '1rem'
	},
	link: {
		color: theme.palette.secondary.dark,
		'&:hover': {
			color: theme.palette.secondary.main
		}
	}
});
class Home extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className>
				<Grid container spacing={24}>
					<Grid item xs={12}>
						<Typography className={classes.heading} variant="display4">
							Hello, I'm Dustin
						</Typography>
						<Typography variant="subheading" className={classes.body}>
							I’m a passionate software engineer with a focus on delivering quality applications that are
							both highly efficient and security conscious. Check out
							<Link to="/about" className={classes.link}>
								{' about me '}
							</Link>to learn more or feel free to
							<Link to="/contact" className={classes.link}>
								{' contact me! '}
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
