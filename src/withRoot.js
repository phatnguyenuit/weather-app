import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
	palette: {
		primary: {
			light: green[500],
			main: green[600],
			dark: green[800],
		},
		secondary: {
			light: grey[300],
			main: grey[400],
			dark: grey[700],
		},
		text: {
			primary: grey[900],
			secondary: grey[800],
			disabled: grey[400],
			hint: grey[300],
		},
	},
	typography: {
		useNextVariants: true,
	},
});

function withRoot(Component) {
	function WithRoot(props) {
		// MuiThemeProvider makes the theme available down the React tree
		// thanks to React context.
		return (
			<MuiThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...props} />
			</MuiThemeProvider>
		);
	}

	return WithRoot;
}

export default withRoot;
