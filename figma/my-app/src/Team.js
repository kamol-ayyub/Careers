import React from 'react';
import './sass-files/team.scss';
import IconArrow from './icons/icon-arrow.png';
import PhotoMan from './icons/photo-of.png';
import path from './icons/Path_106.png';
import ellipse from './icons/Ellipse-5.png';
const Header = () => {
  return (
    <>
      <div className='team'>
        <div className='team-left'>
          <div className='team-left-header'>
            We are a small team that thinks big!
          </div>
          <div className='team-left-resume'>
            Have you been looking for a job for a long time where you will be
            welcome? Send your resume to work with us!
          </div>
          <li href='udemy.com' className='team-left-link'>
            Find an opening{' '}
            <img
              className='team-left-link-icon'
              src={IconArrow}
              alt='arrow icon'
            />
          </li>
        </div>
        <div className='team-right'>
          <img className='team-right-main' src={PhotoMan} alt='photo_of_man' />
          <img className='team-right-icon' src={path} alt='path-icon' />
          <img
            className='team-right-icon-ellipse'
            src={ellipse}
            alt='path-icon'
          />
        </div>
      </div>
    </>
  );
};

export default Header;
