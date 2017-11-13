import React, { Component } from 'react';
import Article from 'Article';

class BookmarkPanel extends Component {
  render() {
    return (
      <div className="articleBox">
        <Article thumbnail={'/images/Source-Of-Calcium1.jpg'} title={'18 Surprising Dairy-Free Sources of Calcium'} description={'Here’s a list of foods and beverages filled with calcium (no cows required), along with recipes to help make them an everyday occurrence in a variety of meals.'} url={'https://greatist.com/health/18-surprising-dairy-free-sources-calcium'}/>
        <Article thumbnail={'/images/lower-blood-pressure.jpg'} title={'Exercise: A drug-free approach to lowering high blood pressure'} description={'Having high blood pressure and not getting enough exercise are closely related. Discover how small changes in your daily routine can make a big difference.'} url={'https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/in-depth/high-blood-pressure/art-20045206'}/>
        {/* <Article thumbnail={'/images/lower-sugar-level.jpg'} title={'15 Easy Ways to Lower Blood Sugar Levels Naturally'} description={'One study from 2012 reported that 12–14% of US adults had type 2 diabetes, while 37–38% were classified as pre-diabetic. This means that 50% of all US adults have diabetes or pre-diabetes. Here are 15 easy ways to lower blood sugar levels naturally'} url={'https://www.healthline.com/nutrition/15-ways-to-lower-blood-sugar'}/>
        <Article thumbnail={'/images/raise-iron-level.jpg'} title={'How to Raise Your Iron Level Without Supplements'} description={'You can choose iron supplements to improve your levels, but following a healthy diet including iron-rich foods, and pairing foods for optimal absorption can help you increase your iron levels naturally.'} url={'http://healthyeating.sfgate.com/raise-iron-level-supplements-4850.html'}/> */}
      </div>
    )
  };
};

export default BookmarkPanel;
