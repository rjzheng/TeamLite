import React, { Component } from 'react';
import Navigation from 'Navigation';
import HomePagePanel from 'HomePagePanel';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Navigation />
        <HomePagePanel />
      </div>
    )
  };
};

export default HomePage;
