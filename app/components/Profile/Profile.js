import React, { Component } from 'react';
import Navigation from 'Navigation';
import ProfilePanel from 'ProfilePanel';

class Profile extends Component {
  render() {
    return (
      <div className="home-page">
        <Navigation />
        <ProfilePanel />
      </div>
    )
  };
};

export default Profile;
