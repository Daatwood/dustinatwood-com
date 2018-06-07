import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import taglineStyle from '../styles/taglineStyle';

const Tagline = ({ classes, children }) => {
	return (
		<Typography variant="display1" className={classes.tagline}>
			{children}
		</Typography>
	);
};
export default withStyles(taglineStyle)(Tagline);
