import React from 'react';
import './sass-files/Vacancy.scss';

const Vacancy = () => {
  return (
    <div className='vacancy'>
      <div className='vacancy-header'>Free vacancy</div>
      <div className='vacancy-subheader'>
        Jobs that are available from us and looking for their own people! Browse
        our vacancies and find the one that is right for you!
      </div>
      <div className='vacancy-wrapper'>
        <div className='vacancy-head'>
          <span className='vacancy-head-span'>Position</span>
          <span className='vacancy-head-span'>Department</span>
          <span className='vacancy-head-span'>Location</span>
        </div>
        <div className='vacancy-items'>
          <span className='vacancy-items-span'>Motion Designer</span>
          <span className='vacancy-items-span'>Design</span>
          <span className='vacancy-items-span'>San Francisko</span>
        </div>
        <div className='vacancy-items'>
          <span className='vacancy-items-span'>Motion Designer</span>
          <span className='vacancy-items-span'>Design</span>
          <span className='vacancy-items-span'>San Francisko</span>
        </div>
        <div className='vacancy-items'>
          <span className='vacancy-items-span'>Motion Designer</span>
          <span className='vacancy-items-span'>Design</span>
          <span className='vacancy-items-span'>San Francisko</span>
        </div>
        <div className='vacancy-items'>
          <span className='vacancy-items-span'>Motion Designer</span>
          <span className='vacancy-items-span'>Design</span>
          <span className='vacancy-items-span'>San Francisko</span>
        </div>
      </div>
      <button className='vacancy-button'>
        Don't see a good fit? Submit your resume
      </button>
    </div>
  );
};
export default Vacancy;
