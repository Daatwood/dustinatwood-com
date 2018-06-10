import React from 'react';

const Emj = ({ emoji, label }) => {
	return (
		<span role="img" aria-label={label}>
			{emoji}
		</span>
	);
};

export default Emj;
