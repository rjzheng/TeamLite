import React, { Component } from 'react';
import Article from 'Article';

class ArticlePanel extends Component {
  render() {
    return (
      <div className="articleBox">
        <Article thumbnail={'/images/Source-Of-Calcium1.jpg'} title={'18 Surprising Dairy-Free Sources of Calcium'} description={'Here’s a list of foods and beverages filled with calcium (no cows required), along with recipes to help make them an everyday occurrence in a variety of meals.'} url={'https://greatist.com/health/18-surprising-dairy-free-sources-calcium'}/>
        <Article thumbnail={'/images/lower-blood-pressure.jpg'} title={'Exercise: A drug-free approach to lowering high blood pressure'} description={'Having high blood pressure and not getting enough exercise are closely related. Discover how small changes in your daily routine can make a big difference.'} url={'https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/in-depth/high-blood-pressure/art-20045206'}/>
        <Article thumbnail={'/images/lower-sugar-level.jpg'} title={'15 Easy Ways to Lower Blood Sugar Levels Naturally'} description={'One study from 2012 reported that 12–14% of US adults had type 2 diabetes, while 37–38% were classified as pre-diabetic. This means that 50% of all US adults have diabetes or pre-diabetes. Here are 15 easy ways to lower blood sugar levels naturally'} url={'https://www.healthline.com/nutrition/15-ways-to-lower-blood-sugar'}/>
        <Article thumbnail={'/images/raise-iron-level.jpg'} title={'How to Raise Your Iron Level Without Supplements'} description={'You can choose iron supplements to improve your levels, but following a healthy diet including iron-rich foods, and pairing foods for optimal absorption can help you increase your iron levels naturally.'} url={'http://healthyeating.sfgate.com/raise-iron-level-supplements-4850.html'}/>
        <Article thumbnail={'/images/Source-Of-Calcium2.png'} title={'How to Increase Your Calcium Level'} description={'Calcium is a very important mineral that we need to stay strong and healthy. It is essential for bone and teeth health.'} url={'http://www.top10homeremedies.com/how-to/how-to-increase-your-calcium-level.html'}/>
        <Article thumbnail={'/images/lower-blood-pressure2.png'} title={'20 Ways to Lower Your Blood Pressure Naturally'} description={'For people who aren’t able to bring their levels down naturally, medication may be necessary.'} url={'http://www.health.com/heart-disease/lower-blood-pressure-naturally#1-blood-pressure-natural'}/>
        <Article thumbnail={'/images/lower-blood-pressure3.png'} title={'15 Natural Ways to Lower Your Blood Pressure'} description={'High blood pressure is a dangerous condition that can damage your heart. It affects one in three people in the US and 1 billion people worldwide. Here are 15 natural ways to combat high blood pressure.'} url={'https://www.healthline.com/nutrition/15-ways-to-lower-blood-pressure#section1'}/>
      </div>
    )
  };
};

export default ArticlePanel;
