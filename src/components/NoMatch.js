import React from 'react';
import { Typography } from '@material-ui/core';

const NoMatch = ({ props }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<Typography variant="display4">404</Typography>
			<Typography variant="title">Uh oh. This is not the right web page.</Typography>
		</div>
	);
};
export default NoMatch;
