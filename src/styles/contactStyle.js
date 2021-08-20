const contactStyle = (theme) => ({
	padding: {
		padding: theme.spacing.unit * 2
	},
	button: {
		'&:focus': {
			backgroundColor: theme.palette.secondary.light
		}
	},
	body: {
		color: '#d3d3d3'
	}
});
export default contactStyle;
