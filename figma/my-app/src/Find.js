import React from 'react';
import './sass-files/Find.scss';
import Image10 from './icons/Image-10.png';
const Find = () => {
  return (
    <div className='find'>
      <div className='find-left'>
        <img className='find-left-img' src={Image10} alt='teamImage' />
      </div>
      <div className='find-right'>
        <div className='find-right-header'>
          Find your dream job in our company
        </div>
        <div className='find-right-subheader'>
          We hope that you will find a job that you have been dreaming about for
          a long time. If we don't have any vacancies send us your resume!
        </div>
      </div>
    </div>
  );
};
export default Find;
