import React, { Component } from 'react';
import Photo from 'Photo';

class PhotoPanel extends Component {
  render() {
    return (
      <div className="photoBox">
        <Photo src={'/uploadedPhotos/immunization-records.jpg'} date={'07/20/2017'} />
        <Photo src={'/uploadedPhotos/missing-medical-records.jpg'} date={'09/12/2017'} />
        <Photo src={'/uploadedPhotos/Release-forms.jpg'} date={'11/11/2017'} />
        <div className="photo" onClick={() => {
          window.location.href = '/camera.html';
        }}>
          <img src='/images/upload-photo.png'></img>
          <h2>Upload new medical record</h2>
        </div>
      </div>
    )
  };
};

export default PhotoPanel;
