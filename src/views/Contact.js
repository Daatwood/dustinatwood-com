import React from 'react';
import { Typography, Avatar, Paper, Grid, TextField, Button } from '@material-ui/core';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

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
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit * 2
	},
	padding: {
		padding: theme.spacing.unit * 2
	},
	body: {
		fontFamily: [ 'Nunito Sans', 'sans-serif' ],
		fontSize: '1rem'
	},
	button: {
		'&:focus': {
			backgroundColor: theme.palette.secondary.light
		}
	}
});

const Contact = ({ classes }) => {
	return (
		<div>
			<Typography variant="display2" className={classes.heading}>
				Contact Me
			</Typography>
			<div className={classes.border} />
			<form action="https://formspree.io/atwood.dustin@gmail.com" method="POST" autoComplete="off">
				<Grid container direction="column" justify="center" alignItems="stretch">
					<Grid item className={classes.padding}>
						<TextField
							label="Name"
							type="text"
							name="name"
							placeholder="What's your name?"
							required
							fullWidth
						/>
					</Grid>
					<Grid item className={classes.padding}>
						<TextField
							label="Reply Email"
							type="email"
							name="_replyto"
							placeholder="Email to reply to?"
							required
							fullWidth
						/>
					</Grid>
					<Grid item className={classes.padding}>
						<TextField
							label="Message"
							type="text"
							name="message"
							placeholder="How can I help you?"
							required
							multiline
							fullWidth
						/>
					</Grid>
					<Grid item className={classes.padding}>
						<Button
							type="submit"
							variant="raised"
							size="large"
							color="secondary"
							className={classes.button}>
							Send
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};
export default withStyles(styles)(Contact);
