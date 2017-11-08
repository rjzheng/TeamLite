/* Node Modules */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Components */
import App from 'App';
import HomePage from 'HomePage';
import Login from 'Login';

export default (
  <Route path="/" component={App}>
		<IndexRoute component={Login} />
		<Route path="/home" component={HomePage} />
	</Route>
);
