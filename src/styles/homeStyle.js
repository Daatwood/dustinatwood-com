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
		fontSize: '1rem',
		textShadow: "1px 1px rgb(64 64 64 / 90%)"
	},
	colored: {
		color: theme.palette.primary.light,
		textShadow: "1px 1px rgb(64 64 64 / 90%)"
	},
	link: {
		color: theme.palette.secondary.dark,
		'&:hover': {
			color: theme.palette.secondary.main
		}
	},
	papers: {
		background: 'rgba(0,0,0,0.7)',
	},
	skills: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
		textShadow: "1px 0 black"
  },
	skillset: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
		flex: 1
  },
	skillList: {
		flex: 1
	},
	largeGap: {
		minHeight: '200px'
	},
	smallGap: {
		minHeight: '100px'
	}
});

export default homeStyle;
