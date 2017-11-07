import React, { Component } from 'react';

class Article extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="article" onClick={() => {
        window.location=this.props.url;
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
