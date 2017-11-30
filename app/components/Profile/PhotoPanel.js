import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photo from 'Photo';
import ReactGA from 'react-ga';



@connect((store) => {
  return {
    photos: store.globalReducer.photos
  };
})

class PhotoPanel extends Component {

  renderPhotos() {
    if (this.props.photos.length == 0) {
      return;
    } else {
      var photos = this.props.photos;
      var photoList = photos.map((photo) => {
        return (
          <Photo key={photo.src} src={photo.src} date={photo.date}/>
        )
      });

      return (
        <div>{photoList}</div>

      )
    }
  }

  handleClick(item) {
        ReactGA.event({
            category: item,
            action: 'click',
        });
    }

  render() {
    return (
      <div className="photoBox">
        {this.renderPhotos()}
        <div className="photo click" onClick={() => {
          window.location.href = '/camera.html';
          this.handleClick('Upload Medical Record Button');
        }}>
          <img src='/images/upload-photo.png'></img>
          <h2>Upload new medical record</h2>
        </div>
      </div>
    )
  };
};

export default PhotoPanel;
