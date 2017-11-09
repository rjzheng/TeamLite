import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="dropdown">
          <i className="ion-navicon-round icon"></i>
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Bookmarks</a>
          </div>
        </div>

        <span><i className="ion-ios-home icon"></i></span>
        <span><i className="ion-search icon"></i></span>
        <span onClick={() => {
          window.location.href = '/camera.html';
        }}><i className="ion-camera icon"></i></span>
      </div>
    )
  };
};

export default Navigation;
