import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className="article" onClick={() => {
        var win = window.open(this.props.url, '_blank');
        win.focus();
      }}>
        <img src={this.props.thumbnail}></img>
        <div className="article-description">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  };
};

export default Article;
