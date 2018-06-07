import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import routes from '../routes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NoMatch from '../components/NoMatch';
import appTheme from '../styles/appTheme';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<MuiThemeProvider theme={appTheme}>
						<div>
							<Navbar links={routes} />
							<div id="container" className="container">
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
