import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g image" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img' />
        <p className='p__opensans'>Restaurant Sukoon is a Modern Indian fine dining restaurant situated in a traditional Thai house in the heart of Bangkok.</p>
        <p className='p__opensans'>
        The Sukoon experience is a perfect marriage between tradition and modernity where the world of exciting contemporary Indian flavors meets with a beautiful setting of renovated baan ruen thai.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife'>
        <img src={images.knife} alt="about knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img' />
        <p className='p__opensans'>In March 2019, Restaurant Sukoon made its debut on the Asia's 50Best Restaurants list at No. 16 with the Highest New Entry Award, and shortly after, claimed its place at No. 95 on the World's 50 Best Restaurants list.</p>
        <p className='p__opensans'>
          Sukoon is currently ranked at No. 33 on the Asia's 50 Best Restaurants 2020 list.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
