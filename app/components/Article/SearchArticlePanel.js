import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from 'Article';

@connect((store) => {
	return {
		articles: store.globalReducer.searchArticles
	};
})

class SearchArticlePanel extends Component {

	renderArticles() {
		if (this.props.articles.length == 0) {
			return;
		} else {
			var articles = this.props.articles;
			var articleList = articles.map((article) => {
				return (
						<Article key={article.title} thumbnail={article.thumbnail} title={article.title}
										 description={article.description} url={article.url} bookmarked={article.bookmarked}/>
				)
			});

			return (
					<div className="articleBox">
						{articleList}
					</div>
			)
		}
	}

	render() {
		return (
				<div>
					{this.renderArticles()}
				</div>
		)
	};
};

export default SearchArticlePanel;
