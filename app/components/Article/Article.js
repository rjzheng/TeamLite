import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBookmarkedArticle, toggleBookmark, removeBookmarkedArticle } from 'actions';

class Article extends Component {

  constructor(props) {
    super(props);


    this.state = {
      value: this.props.bookmarked,
      imgSrc: this.props.bookmarked ? '/images/bookmark-remove.png': '/images/bookmark-add.png'
    }
  }

  bookmarkArticle(thumbnail, title, description, url, bookmarked) {
    var article = {
      thumbnail: thumbnail,
      title: title,
      description: description,
      url: url
    }

    if (bookmarked == false) {
      this.props.addBookmarkedArticle(article);
    } else {
      this.props.removeBookmarkedArticle(article);
    }

    this.props.toggleBookmark(this.props.title);
  }


  render() {
    return (
      <div className="article">


        <img className="thumbnail" src={this.props.thumbnail} onClick={() => {
          var win = window.open(this.props.url, '_blank');
          win.focus();
        }}></img>
        <div className="article-description">

          <img className="bookmarkAdd" src={this.state.imgSrc} onClick={() => {
            this.setState({
              value : !this.state.value,
              imgSrc: !this.state.value ? '/images/bookmark-remove.png' : '/images/bookmark-add.png'
            });
            this.bookmarkArticle(this.props.thumbnail, this.props.title, this.props.description, this.props.url, this.state.value);
          }}></img>

          <h2  onClick={() => {
            var win = window.open(this.props.url, '_blank');
            win.focus();
          }}>{this.props.title}</h2>
          <p  onClick={() => {
            var win = window.open(this.props.url, '_blank');
            win.focus();
          }}>{this.props.description}</p>
        </div>

      </div>
    )
  };
};

export default connect(null, {addBookmarkedArticle, toggleBookmark, removeBookmarkedArticle})(Article);
