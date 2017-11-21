import React, { Component } from 'react';
import SearchArticlePanel from "SearchArticlePanel";

class SearchResultPanel extends Component {
	render() {
		return (
			<div className="container-fluid">
				<h1>Search Results</h1>

				<SearchArticlePanel />
			</div>
		)
	};
};

export default SearchResultPanel;