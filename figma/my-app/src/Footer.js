import React from 'react';
import globus from './icons/globus.png';
import facebook from './icons/facebook.png';
import twitter from './icons/twitter.png';
import youtube from './icons/youtube.png';
import logo from './icons/Logo.png';

import './sass-files/footer.scss';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logoside'>
        <img className='footer-logo' src={logo} alt='logo' />
        <div className='footer-logoside-text'>
          Move - Multipurpose Design Template will help you develop your website
          design.
        </div>
        <div className='footer-social'>
          <img className='footer-social-logo' src={globus} alt='logo' />
          <img className='footer-social-logo' src={facebook} alt='logo' />
          <img className='footer-social-logo' src={twitter} alt='logo' />
          <img className='footer-social-logo' src={youtube} alt='logo' />
        </div>
      </div>
      <div className='footer-rightside'>
        <div className='footer-rightside-items items-1'>
          <span className='footer-rightside-items-first'>Home</span>
          <span className='footer-rightside-items-other'>Desktop App</span>
          <span className='footer-rightside-items-other'>Mobile App</span>
          <span className='footer-rightside-items-other'>SaaS</span>
          <span className='footer-rightside-items-other'>Event</span>
          <span className='footer-rightside-items-other'>Software</span>
        </div>
        <div className='footer-rightside-items items-2'>
          <span className='footer-rightside-items-first'>Pages</span>
          <span className='footer-rightside-items-other'>About Us</span>
          <span className='footer-rightside-items-other'>Careers</span>
          <span className='footer-rightside-items-other'>Case Studies</span>
          <span className='footer-rightside-items-other'>Pricing</span>
        </div>
        <div className='footer-rightside-items items-3'>
          <span className='footer-rightside-items-first'>Blog</span>
          <span className='footer-rightside-items-other'>Blog Listing</span>
          <span className='footer-rightside-items-other'>Blog Article</span>
          <span className='footer-rightside-items-other'>Newsroom</span>
        </div>
        <div className='footer-rightside-items items-4'>
          <span className='footer-rightside-items-first'>Portfolio</span>
          <span className='footer-rightside-items-other'>Portfolio</span>
          <span className='footer-rightside-items-other'>Single Case</span>
        </div>
      </div>
      <div className='footer-bottom'>
        © 2019-2020 Move Multipurpose Design Template.
      </div>
    </footer>
  );
};
export default Footer;
