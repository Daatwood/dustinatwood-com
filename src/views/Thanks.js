import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import contactStyle from '../styles/contactStyle';


const Thanks = ({classes}) => {
	return (
		<div>
			<Header>Contact Me</Header>
			<Typography variant="title" className={classes.body}>Thank you for getting in touch!</Typography>
			<Typography variant="subheading" className={classes.body}>
				I appreciate you contacting me, I will get back to you shortly. Have a great day!
			</Typography>
		</div>
	);
};
export default withStyles(contactStyle)(Thanks);
