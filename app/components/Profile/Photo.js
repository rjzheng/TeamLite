import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removePhoto } from 'actions';

class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <img src={this.props.src} onClick={() => {
          var win = window.open(this.props.src, '_blank');
          win.focus();
        }}></img>
        <h2 onClick={() => {
          var win = window.open(this.props.src, '_blank');
          win.focus();
        }}>Health Evaluation: {this.props.date}</h2>
        <span onClick={() => {
          if(confirm("Are you sure you want to delete this document?")){
						this.props.removePhoto(this.props.src);
					} else{

          }
				}}><i className="ion-trash-a trash-icon"></i></span>
      </div>
    )
  };
};

export default connect(null, {removePhoto})(Photo);
