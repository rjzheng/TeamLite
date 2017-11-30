/* Node Modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

/* Routes */
import routes from './routes';
/* Store */
import * as conf from 'configureStore';

// Init custom store configuration
var store = conf.configure();

import ReactGA from 'react-ga';
ReactGA.initialize('UA-110160894-1');

function fireTracking() {
    ReactGA.pageview(window.location.hash);
}

// Subscribe to state changes
// store.subscribe(() => {
//   console.log('Store changed', store.getState());
// });

// Render provider and routes to DOM
ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={fireTracking} history={browserHistory} routes={routes} />
  </Provider>
  ,document.getElementById('app')
);
