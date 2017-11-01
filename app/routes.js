/* Node Modules */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Components */
import App from 'App';
import HomePage from 'HomePage';

export default (
  <Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		{/* <Route path="/home" component={HomePage} /> */}
	</Route>
);
