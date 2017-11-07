import React, { Component } from 'react';
import ArticlePanel from 'ArticlePanel';

class HomePagePanel extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Good morning, John</h1>

        {/* <div className="container-fluid">
          <h4>Recommended for you:</h4>
          <button>Lowering Blood Pressure</button>
          <br></br>
          <button>Raising Calcium Levels</button>
        </div> */}

        <ArticlePanel />
      </div>
    )
  };
};

export default HomePagePanel;
