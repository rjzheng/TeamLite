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
      return (
        <div className="articleBox">
          <h2 id="empty-message">There are currently no bookmarked articles... <br></br>To bookmark an article, please go to the home page and click the <span><img src="/images/bookmark-add.png" id="bookmark-inline"></img> icon.</span></h2>
        </div>
      )
    } else {
      var articles = this.props.bookmarkedArticles;
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
