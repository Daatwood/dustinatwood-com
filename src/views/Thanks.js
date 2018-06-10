import React from 'react';
import { Typography } from '@material-ui/core';
import Header from '../components/Header';

const Thanks = () => {
	return (
		<div>
			<Header>Contact Me</Header>
			<Typography variant="title">Thank you for getting in touch!</Typography>
			<Typography variant="subheading">
				I appreciate you contacting me, I will get back to you shortly. Have a great day!
			</Typography>
		</div>
	);
};
export default Thanks;
