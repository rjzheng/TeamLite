import React, { Component } from 'react';

class ProfilePanel extends Component {
  render() {
    return (
      <div className="profile-panel">
        <img src="/images/old_man.jpeg"></img>
        <div>
          <h3>Name: John Smith</h3>
          <p>DOB: 04/01/1950</p>
        </div>

      </div>
    )
  };
};

export default ProfilePanel;
