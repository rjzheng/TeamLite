import React, { Component, PropTypes } from 'react';
import ReactGA from 'react-ga';

class Navigation extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleClick(item) {
        ReactGA.event({
            category: item,
            action: 'click',
        });
    }

  render() {
    return (
      <div className="navigation">

        <img src="/images/Logo.png"></img>

        <div className="menu-items">
          <span onClick={() => {
            this.context.router.push('/home');
            this.handleClick('Home button - No Text');
          }}><i className="ion-ios-home icon"></i></span>

          <div className="dropdown">
            <span><i className="ion-android-person icon"></i></span>
            <div className="dropdown-content">
              <a onClick={() => {
                this.context.router.push('/profile');
                this.handleClick('Profile button - No Text');
              }}>Profile</a>
              <a onClick={() => {
                this.context.router.push('/');
                this.handleClick('Logout button - No Text');
              }}>Logout</a>
            </div>
          </div>
          {/* <span onClick={() => {
            this.context.router.push('/profile');
          }}><i className="ion-android-person icon"></i></span> */}

          <span onClick={() => {
            this.context.router.push('/bookmark');
            this.handleClick('Bookmark button - No Text');
          }}><i className="ion-android-bookmark icon"></i></span>
          <span onClick={() => {
            var txt;
            var pResponse = prompt("Search for articles:", "Blood Pressure");
            if (pResponse == null || pResponse == "") {
                txt = "User cancelled the prompt.";
            } else {
                txt = "Searching for " + pResponse;

            }
            this.context.router.push('/search');
            this.handleClick('Search button - No Text');
          }}><i className="ion-search icon"></i></span>
          <span onClick={() => {
            window.location.href = '/camera.html';
            this.handleClick('Camera button - No Text');
          }}><i className="ion-camera icon"></i></span>
        </div>

        {/* <div className="navigation-text">
          <span id="home-text">Home</span>
          <span id="profile-text">Profile</span>
          <span id="bookmark-text">Bookmarks</span>
          <span id="search-text">Search</span>
          <span id="upload-text">Upload</span>
        </div> */}

      </div>
    )
  };
};

export default Navigation;
