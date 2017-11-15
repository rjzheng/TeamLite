import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removePhoto } from 'actions';

class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <img src={this.props.src}></img>
        <h2>Uploaded {this.props.date}</h2>
        <span onClick={() => {
          this.props.removePhoto(this.props.src);
        }}><i className="ion-trash-a trash-icon"></i></span>
      </div>
    )
  };
};

export default connect(null, {removePhoto})(Photo);
