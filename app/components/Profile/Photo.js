import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <img src={this.props.src}></img>
        <h2>Uploaded {this.props.date}</h2>
      </div>
    )
  };
};

export default Photo;
