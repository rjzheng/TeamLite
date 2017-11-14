import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookmarkArticle from 'BookmarkArticle';

@connect((store) => {
  return {
    bookmarkedArticles: store.globalReducer.bookmarkedArticles
  };
})

class BookmarkPanel extends Component {

  renderBookmarkedArticles() {
    if (this.props.bookmarkedArticles.length == 0) {
      return;
    } else {
      var articles = this.props.bookmarkedArticles;
      console.log(articles);
      var articleList = articles.map((article) => {
        return (
          <BookmarkArticle key={article.title} thumbnail={article.thumbnail} title={article.title} description={article.description} url={article.url} />
        )
      });

      return (
        <div className="articleBox">
          {articleList}
        </div>
      )
    }
  };

  render() {
    return (
      <div>
        {this.renderBookmarkedArticles()}
      </div>
    )
  };
};

export default BookmarkPanel;
