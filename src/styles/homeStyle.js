const homeStyle = (theme) => ({
	heading: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.secondary.dark,
		marginTop: theme.spacing.unit * 10,
		marginBottom: theme.spacing.unit * 10
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

export default homeStyle;
