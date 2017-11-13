import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className="article" onClick={() => {
        window.location=this.props.url;
      }}>


        <img className="thumbnail" src={this.props.thumbnail}></img>
        <div className="article-description">
          <img className="bookmarkAdd" src="/images/bookmark-add.png"></img>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>

      </div>
    )
  };
};

export default Article;
