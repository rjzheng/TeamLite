import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removePhoto } from 'actions';
import ReactGA from 'react-ga';


class Photo extends Component {

  handleClick(item) {
        ReactGA.event({
            category: item,
            action: 'click',
        });
    }

  render() {
    return (
      <div className="photo">
        <img src={this.props.src} onClick={() => {
          var win = window.open(this.props.src, '_blank');
          win.focus();
          this.handleClick('Medical Record');
        }}></img>
        <h2 onClick={() => {
          var win = window.open(this.props.src, '_blank');
          win.focus();
          this.handleClick('Medical Record');
        }}>Health Evaluation: {this.props.date}</h2>
        <span onClick={() => {
          this.handleClick('Delete Medical Record Button');
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
