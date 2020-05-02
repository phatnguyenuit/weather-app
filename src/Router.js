import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { Route, Switch } from 'react-router-dom';

import { history } from './redux/configStore';

import DetailContainer from './containers/DetailContainer';
import Base from './pages/Base';
import HomePage from './pages/HomePage/';

export default class Routes extends Component {
	render() {
		return (
			<ConnectedRouter history={history}>
				<Base>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/detail/:id" component={DetailContainer} />
					</Switch>
				</Base>
			</ConnectedRouter>
		);
	}
}
