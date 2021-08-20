import React from 'react';
import { Grid, Slide } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import aboutStyle from '../styles/aboutStyle';
import BasicCard from '../components/BasicCard';

import dataProjects from '../data/projects.json'

const images = require.context('../images', true);

const Projects = ({ classes }) => {
  let d=true;
  const projects = dataProjects.map((proj, i) => {
    d=!d 
    return (
    <Grid item key={proj.name}  className={classes.spacing}>
      <Slide in direction={d ? 'right' : 'left' } timeout={500 + 2000 * i}>
        <BasicCard {...proj} image={images(`./${proj.name}.png`) } />
      </Slide>
    </Grid>
    )
  })

	return (
		<div>
			<Header>Featured Projects</Header>
			<Grid container direction="column" justify="center" alignItems="center">
        { projects }
			</Grid>
		</div>
	);
};
export default withStyles(aboutStyle)(Projects);
