import React, { Component } from 'react';
import BookmarkArticle from 'BookmarkArticle';

class BookmarkPanel extends Component {
  render() {
    return (
      <div className="articleBox">
        <BookmarkArticle thumbnail={'/images/Source-Of-Calcium1.jpg'} title={'18 Surprising Dairy-Free Sources of Calcium'} description={'Here’s a list of foods and beverages filled with calcium (no cows required), along with recipes to help make them an everyday occurrence in a variety of meals.'} url={'https://greatist.com/health/18-surprising-dairy-free-sources-calcium'}/>
        <BookmarkArticle thumbnail={'/images/lower-blood-pressure.jpg'} title={'Exercise: A drug-free approach to lowering high blood pressure'} description={'Having high blood pressure and not getting enough exercise are closely related. Discover how small changes in your daily routine can make a big difference.'} url={'https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/in-depth/high-blood-pressure/art-20045206'}/>
      </div>
    )
  };
};

export default BookmarkPanel;
