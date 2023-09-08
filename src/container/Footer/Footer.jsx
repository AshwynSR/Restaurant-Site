import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter /> 
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>46/1 Sukhumvit 53, Klong Tan Nuea, Wattana, 10110</p>
        <p className='p__opensans'>(+66)63-987-4747</p>
      </div>
      
      <div className='app__footer-links_logo'>
        <img src={images.sukoon} alt="footer_logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" style={{marginTop: '15px'}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Sukoon opens everyday for dinner at 5:30pm onwards and lunch at 12pm on the weekends.</p>
        
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Ashwin. All Right Reserved. </p>
    </div>
  </div>
);

export default Footer;
