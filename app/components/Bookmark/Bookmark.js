import React, { Component } from 'react';
import Navigation from 'Navigation';
import BookmarkPanel from 'BookmarkPanel';

class Bookmark extends Component {
  render() {
    return (
      <div className="home-page">
        <Navigation />
        <h1>Below are your bookmarks</h1>
        <BookmarkPanel />
      </div>
    )
  };
};

export default Bookmark;
