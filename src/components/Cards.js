import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC game recommandations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/inscryption.jpg'
              text='Battle a hidden opponent in this mysterious card game'
              label='Card Game'
              path='/services'
            />
            <CardItem
              src='images/stardew.jpg'
              text='Get rich, find happiness or explore the endless mines while farming in Stardew Valley'
              label='Farming Game'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tf2.jpg'
              text='Mann Up! Your team needs you in this personality filled shooter'
              label='First Person Shooter'
              path='/services'
            />
            <CardItem
              src='images/apex.jpg'
              text='Experience the heat and become a Champion in Apex Legends'
              label='First Person Shooter'
              path='/products'
            />
            <CardItem
              src='images/zomboid.jpg'
              text='This is the story of how you died in this hyperrealistic zombie survival game'
              label='Simulation Game'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
