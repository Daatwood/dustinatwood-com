import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Avatar, Drawer, IconButton, Hidden } from '@material-ui/core';
import { Menu as MenuIcon, Close } from '@material-ui/icons';
import NavbarLink from './NavbarLink';
import navbarStyle from '../styles/navbarStyle';
import myself from '../images/myself.jpg';

class Navbar extends Component {
	state = {
		open: false
	};
	toggleDrawer = (open) => () => {
		this.setState({
			open: open
		});
	};

	renderLinks() {
		const { links } = this.props;
		return links.map((route, key) => {
			return <NavbarLink key={key} {...route} />;
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<AppBar position="static" className={classes.appBar}>
					<Toolbar className={classes.container}>
						<Avatar alt="myself" src={myself} className={classes.avatar} />
						<div className={classes.flex}>
							<Typography component={Link} to="/" variant="title" color="inherit">
								Dustin Atwood
							</Typography>
						</div>
						<div style={{ justifyContent: 'flex-end' }}>
							<Hidden only="xs">{this.renderLinks()}</Hidden>
							<Hidden smUp>
								<IconButton
									className={classes.menuButton}
									color="inherit"
									aria-label="Menu"
									onClick={this.toggleDrawer(true)}>
									<MenuIcon />
								</IconButton>
							</Hidden>
						</div>
					</Toolbar>
				</AppBar>
				<Drawer anchor="top" open={this.state.open} onClose={this.toggleDrawer(false)}>
					<div
						className={classes.drawer}
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer(false)}
						onKeyDown={this.toggleDrawer(false)}>
						<IconButton color="inherit" aria-label="Close" className={classes.closeButton}>
							<Close />
						</IconButton>
						{this.renderLinks()}
					</div>
				</Drawer>
			</div>
		);
	}
}

export default withStyles(navbarStyle)(Navbar);
