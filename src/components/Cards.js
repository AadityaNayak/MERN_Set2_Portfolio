import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Work Highlights</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/port1.jpg'
              text='APImpact - 
              It A web application with a refreshing user interface and energising style that displays content from APIs, like OMDB (movies), Jikan (anime), etc. that enables users to discover the vastness of API content.'
              label='ReactJS'
              path='/projects'
            />
            <CardItem
              src='images/port2.jpg'
              text='ShopMax - 
              A full fledged web application containing all the necessary e-commerce features along with user, admin accesses and payment gateway.'
              label='MERN'
              path='/projects'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
