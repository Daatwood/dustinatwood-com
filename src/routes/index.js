import React from 'react';

import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';

const Projects = () => <h2>Projects</h2>;
const Social = () => <h2>Social</h2>;

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/about', name: 'About', component: About },
	{ path: '/contact', name: 'Contact', component: Contact }
];

export default routes;
