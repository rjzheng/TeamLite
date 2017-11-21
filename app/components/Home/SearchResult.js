import React, { Component } from 'react';
import Navigation from 'Navigation';
import SearchResultPanel from "SearchResultPanel";

class SearchResult extends Component {
	render() {
		return (
				<div className="home-page">
					<Navigation />
					<SearchResultPanel />
				</div>
		)
	};
};

export default SearchResult;
