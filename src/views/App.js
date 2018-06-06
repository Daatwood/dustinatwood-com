import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import classNames from 'classnames';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import routes from '../routes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NoMatch from '../components/NoMatch';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#6d6d6d',
			main: '#424242',
			dark: '#1b1b1b',
			contrastText: '#fff'
		},
		secondary: {
			light: '#80e27e',
			main: '#4caf50',
			dark: '#087f23',
			contrastText: '#000'
		}
	}
});

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<MuiThemeProvider theme={theme}>
						<div>
							<Navbar links={routes} />
							<div className="container">
								<Switch>
									{routes.map((prop, key) => {
										return <Route exact path={prop.path} key={key} component={prop.component} />;
									})}
									<Route component={NoMatch} />
								</Switch>
							</div>
							<Footer links={routes} />
						</div>
					</MuiThemeProvider>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
