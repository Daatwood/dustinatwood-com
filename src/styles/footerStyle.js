const footerStyle = (theme) => ({
	footer: {
		backgroundColor: '#e1e2e1',
		left: 0,
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '98px' /* Height of the footer */,
		paddingLeft: theme.spacing.unit * 4,
		paddingRight: theme.spacing.unit * 4,
		paddingTop: theme.spacing.unit * 4,
		paddingBottom: theme.spacing.unit * 2
	},
	padding: {
		padding: theme.spacing.unit * 2
	},
	link: {
		color: theme.palette.primary.dark,
		fontFamily: [ 'Nunito Sans', 'sans-serif' ],
		'&:hover': {
			color: theme.palette.secondary.dark
		}
	}
});
export default footerStyle;
