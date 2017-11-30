import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';


import { removeBookmarkedArticle, toggleBookmark } from 'actions';

class BookmarkArticle extends Component {

  constructor(props) {
    super(props);

    let value = false;

    this.state = {
      value: value,
      imgSrc: value ? '/images/bookmark-add.png' : '/images/bookmark-remove.png'
    }
  }

  removeBookmarkArticle(thumbnail, title, description, url) {
    var article = {
      thumbnail: thumbnail,
      title: title,
      description: description,
      url: url
    }


    this.props.removeBookmarkedArticle(article);
    this.props.toggleBookmark(this.props.title);
  }

  handleClick(item) {
        ReactGA.event({
            category: item,
            action: 'click',
        });
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
              imgSrc: !this.state.value ? '/images/bookmark-add.png' : '/images/bookmark-remove.png'
            });
            this.removeBookmarkArticle(this.props.thumbnail, this.props.title, this.props.description, this.props.url);
            this.handleClick('Remove Bookmark Button');
          }}></img>

          <h2  onClick={() => {
            var win = window.open(this.props.url, '_blank');
            win.focus();
            this.handleClick('Bookmarked Article');
          }}>{this.props.title}</h2>
          <p  onClick={() => {
            var win = window.open(this.props.url, '_blank');
            win.focus();
            this.handleClick('Bookmark Article');
          }}>{this.props.description}</p>
        </div>

      </div>
    )
  };
};

export default connect(null, {removeBookmarkedArticle, toggleBookmark})(BookmarkArticle);
