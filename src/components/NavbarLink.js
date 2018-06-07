import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classNames from 'classnames';
import navbarStyle from '../styles/navbarStyle';

const NavbarLink = ({ classes, path, name }) => {
	const active = path === window.location.pathname ? classes.active : '';
	return (
		<Button component={Link} to={path} color="inherit" className={classNames(classes.link, classes.flex, active)}>
			{name}
		</Button>
	);
};

export default withStyles(navbarStyle)(NavbarLink);
