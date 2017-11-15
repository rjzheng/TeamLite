import React, { Component } from 'react';
import Navigation from 'Navigation';
import ProfilePanel from 'ProfilePanel';
import PhotoPanel from 'PhotoPanel';

class Profile extends Component {
  render() {
    return (
      <div className="home-page">
        <Navigation />
        <ProfilePanel />
        <PhotoPanel />
      </div>
    )
  };
};

export default Profile;
