/* Node Modules */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Components */
import App from 'App';
import HomePage from 'HomePage';
import Login from 'Login';
import Bookmark from 'Bookmark';
import Profile from 'Profile';
import SearchResult from "./components/Home/SearchResult";

export default (
  <Route path="/" component={App}>
		<IndexRoute component={Login} />
		<Route path="/home" component={HomePage} />
    <Route path="/bookmark" component={Bookmark} />
    <Route path="/profile" component={Profile} />
		<Route path="/search" component={SearchResult} />
	</Route>
);
