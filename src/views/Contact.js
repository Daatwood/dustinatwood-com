import React from 'react';
import { Grid, TextField, Button, Fade, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import contactStyle from '../styles/contactStyle';
import Header from '../components/Header';
import formFields from '../components/formFields';

const Contact = ({ classes }) => {
	return (
		<div>
			<Header>Contact Me</Header>
			<Fade in timeout={1500}>
				<Paper className={classes.padding}>
					<form action="https://formspree.io/atwood.dustin@gmail.com" method="POST" autoComplete="off">
						<Grid container direction="column" justify="center" alignItems="stretch">
							{formFields.map(({ label, name, placeholder, fieldType, multiline }) => {
								return (
									<Grid item key={name} className={classes.padding}>
										<TextField
											label={label}
											type={fieldType}
											name={name}
											placeholder={placeholder}
											multiline={multiline}
											required
											fullWidth
										/>
									</Grid>
								);
							})}
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
				</Paper>
			</Fade>
		</div>
	);
};
export default withStyles(contactStyle)(Contact);
