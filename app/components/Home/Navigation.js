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

        <i className="ion-ios-home icon"></i>
        <i className="ion-search icon"></i>
        <a href="camera.html"><i className="ion-camera icon"></i></a>
      </div>
    )
  };
};

export default Navigation;
