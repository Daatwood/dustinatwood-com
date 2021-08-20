import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Thanks from '../views/Thanks';
import Projects from '../views/Projects';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/about', name: 'About', component: About },
	{ path: '/projects', name: 'Projects', component: Projects },
	{ path: '/contact', name: 'Contact', component: Contact },
	{ path: '/thanks', name: 'Thanks', component: Thanks, hidden: true }
];

export default routes;
