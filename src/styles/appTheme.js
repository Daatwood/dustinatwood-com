import { createMuiTheme } from '@material-ui/core/styles';
const appTheme = createMuiTheme({
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

export default appTheme;
