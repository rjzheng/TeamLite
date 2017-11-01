import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        {/* Menu dropdown */}
      	<div className="dropdown">
      		<img src="images/menuIcon.png" className="icon" height="30" width="30"></img>
      		<div className="dropdown-content">
      			<a href="#">Profile</a>
      			<a href="#">Bookmarks</a>
      		</div>
      	</div>

      	{/* Other nav icons */}
      	<img src="images/homeIcon.png" className="icon" height="30" width="30"></img>
      	<img src="images/searchIcon.png" className="icon-dark" height="30" width="30"></img>


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
      </div>
    )
  };
};

export default Home;
