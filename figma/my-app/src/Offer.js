import React from 'react';
import './sass-files/offer.scss';
import Path1 from './icons/Path_1.png';
import Path2 from './icons/path-2.png';
import Path3 from './icons/Path_3.png';
import Path4 from './icons/Path_4.png';

const Offer = () => {
  return (
    <div className='offer'>
      <h1 className='offer-header'>What we offer</h1>
      <div className='offer-subtext'>
        We offer you a huge number of advantages when applying for a job with
        us. Check out a few basic but important ones below.
      </div>
      <div className='offer-definition'>
        <div className='offer-definition-item item1'>
          <img
            className='offer-definition-icon icon1'
            src={Path1}
            alt='path-1'
          />

          <div className='offer-definition-smheader'>Full social package</div>
          <div className='offer-definition-about'>
            Our company offers you a full social package when you apply for a
            job with us.
          </div>
        </div>
        <div className='offer-definition-item item2'>
          <img
            className='offer-definition-icon icon2'
            src={Path2}
            alt='path-1'
          />

          <div className='offer-definition-smheader'>Equipped workplace</div>
          <div className='offer-definition-about'>
            We will equip your workplace at the expense of the company. You can
            order everything you need for your work.
          </div>
        </div>
        <div className='offer-definition-item item3'>
          <img
            className='offer-definition-icon icon3'
            src={Path3}
            alt='path-1'
          />

          <div className='offer-definition-smheader'>Free meals</div>
          <div className='offer-definition-about'>
            During breaks between work, you can eat in our cafe for free. You
            will have a huge selection of food available.
          </div>
        </div>
        <div className='offer-definition-item item4'>
          <img
            className='offer-definition-icon icon4'
            src={Path4}
            alt='path-1'
          />

          <div className='offer-definition-smheader'>Game room</div>
          <div className='offer-definition-about'>
            If you are too tired you can distract yourself from thinking about
            working in the game room.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
