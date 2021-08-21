import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Fade, Paper, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import homeStyle from '../styles/homeStyle';
import { List, ListItem } from '@material-ui/core'
import dataSkills from '../data/skills.json'

const Home = ({ classes }) => {
	let skillChart = dataSkills.map((data) => 
		<div key={data.name} className={classes.skillList} >
			<div className={classes.skills}>
				<Typography variant="title" className={classes.colored}>
					{data.name}
				</Typography>
			</div>
			<List dense={true} >
				{
					data.list.map((skill) => 
						<ListItem key={skill} className={classes.skillset}>
							<Typography variant="caption" className={classes.body}>
								{skill}
							</Typography>
							{/* <ListItemText primary="Single-line item">{skill}</ListItemText> */}
						</ListItem>
					)
				}
			</List>
		</div>
	)

	return (
		<div>
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Typography className={classes.heading} variant="display4">
						Hello, I'm Dustin
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Fade in timeout={2000}>
						<Typography variant="subheading" className={classes.body}>
							I’m a software engineer with a focus on delivering high
							quality web solutions. Check out my latest 
							<Link to="/projects" className={classes.link}> Projects</Link>. 
							Feel free to 
							<Link to="/contact" className={classes.link}> reach out </Link> or email
							about new opportunities.
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12} className={classes.largeGap}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Divider />
					<div className={classes.skills}>
						<Fade in timeout={3000}>
							<Typography variant="subheading" className={classes.body}>
								Skills
							</Typography>
							</Fade>
					</div>
				</Grid>
				<Grid item xs={12} className={classes.smallGap}>
					<Divider />
				</Grid>
				<Grid item xs={12} >
					<Fade in timeout={4000}>
						<Paper className={classes.papers}>
							<div className={classes.skillset}>
								{ skillChart }
							</div>
						</Paper>
					</Fade>
					
					<div className={classes.skills}>
						<Fade in timeout={10000}>
							<Typography variant="caption" className={classes.body}>
								and more...
							</Typography>
						</Fade>
					</div>
					
				</Grid>
			</Grid>
		</div>
	);
};

export default withStyles(homeStyle)(Home);
