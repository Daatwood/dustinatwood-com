import React from 'react';
import { Typography, Avatar, Paper, Grid, Slide, Zoom } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Tagline from '../components/Tagline';
import Emj from '../components/Emj';
import aboutStyle from '../styles/aboutStyle';
import wild_macbook from '../images/wild_macbook.png';

const About = ({ classes }) => {
	return (
		<div>
			<Header>About Me</Header>
			<Grid container direction="column" justify="center" alignItems="center">
				<Grid item className={classes.padding}>
					<Zoom in timeout={800}>
						<Avatar alt="macbook pro on tree stump" src={wild_macbook} className={classes.avatar} />
					</Zoom>
				</Grid>
				<Grid item className={classes.padding}>
					<Tagline>Coding is my creative outlet to the world.</Tagline>
				</Grid>
				<Grid item>
					<Slide in direction="right" timeout={1500}>
						<Paper className={classes.padding}>
							<Typography variant="body1" className={classes.body}>
								I'm a Software Engineer with a passion for programming<Emj emoji=" 💻" label="computer" />.
								I love to learn and discover all things Ruby, Javascript, HTML and CSS. I found coding a
								great way to express myself. With technology always moving forward and continually
								changing, I am always learning about the new trends and staying up to date in the
								lastest releases. When I'm not writing code, I enjoy cooking<Emj emoji=" 🌮" label="taco" />,
								attending concerts<Emj emoji=" 🎶" label="music" />, traveling<Emj emoji=" 🏍" label="motorcycle" />,
								and hiking in the great outdoors
								<Emj emoji=" 🏔" label="mountains" />.
							</Typography>
						</Paper>
					</Slide>
				</Grid>
			</Grid>
		</div>
	);
};
export default withStyles(aboutStyle)(About);
