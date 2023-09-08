import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.garima2} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading  title="Chef's Word" />
      <h1 className='headtext__cormorant'>what We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Eat Fresh, Be Healthy</p>
        </div>
        <p className='p__opensans'>Garima Arora is the Chef and Owner of Restaurant Sukoon. Her cuisine is focused on applying traditional Indian cooking techniques onto locally sourced ingredients.</p>
        <p className='p__opensans'>In 2018, Arora became the first Indian female chef to earn a Michelin star at the age of 32.</p>
        <p className='p__opensans'>Today her mission is to rediscover and reform the narrative on Indian food.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Garima Arora</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.garima_sign} alt="chef's sign" />
      </div>
    </div>

  </div>
);

export default Chef;
