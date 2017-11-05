import React, { Component } from 'react';

class HomePagePanel extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Good morning, John</h1>

        <div className="container-fluid">
          <h4>Recommended for you:</h4>
          <button>Lowering Blood Pressure</button>
          <br></br>
          <button>Raising Calcium Levels</button>
        </div>

        <div className="container articleBox">
          <img src="#"></img>
          <h5 className="articleTitle">ARTICLE</h5>
        </div>
      </div>
    )
  };
};

export default HomePagePanel;
