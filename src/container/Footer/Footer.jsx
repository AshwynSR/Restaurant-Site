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
        <p className='p__opensans'>123 Cold Street</p>
        <p className='p__opensans'>1234567890</p>
        <p className='p__opensans'>0987654321</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer_logo" />
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
        <p className='p__opensans'>Mon - Fri: 08:00am - 12:00am</p>
        <p className='p__opensans'>Sat - Sun: 07:00am - 11:00pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Ashwin. All Right Reserved. </p>
    </div>
  </div>
);

export default Footer;
