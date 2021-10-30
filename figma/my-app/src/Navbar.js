import React from 'react';
import './sass-files/navbar.scss';
import Logo from './icons/Logo.png';
import Icon from './icons/icon-chevron-down-2.png';
import menu from './icons/pngegg.png';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-center'>
        <img className='navbar-logo' src={Logo} alt='Logo' />
        <div className='navbar-lists'>
          <div className='navbar-lists-component'>
            <div className='navbar-lists-component-item'>Home</div>
            <img
              alt='navbar lists icon'
              src={Icon}
              className='navbar-lists-component-icon'
            />
          </div>
          <div className='navbar-lists-component'>
            <div className='navbar-lists-component-item'>Pages</div>
            <img
              alt='navbar lists icon'
              src={Icon}
              className='navbar-lists-component-icon'
            />
          </div>
          <div className='navbar-lists-component'>
            <div className='navbar-lists-component-item'>Blog</div>
            <img
              alt='navbar lists icon'
              src={Icon}
              className='navbar-lists-component-icon'
            />
          </div>
          <div className='navbar-lists-component'>
            <div className='navbar-lists-component-item'>Portfolio</div>
            <img
              alt='navbar lists icon'
              src={Icon}
              className='navbar-lists-component-icon'
            />
          </div>
        </div>
        <button className='navbar-button'>Get Started</button>
        <img className='navbar-menu' src={menu} alt='pngegg' />
      </div>
    </div>
  );
};

export default Navbar;
