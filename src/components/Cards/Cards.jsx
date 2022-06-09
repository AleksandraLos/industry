import React from 'react';
import '../../components/Cards/Cards.css';
import CardItem from '../../components/CardItem/CardItem.jsx';

function Cards() {
    return (
        <div className='cards'>
          <h1>Våra tjänster</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='/img/ISO 9001.png'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                  label='Certifering'
                  path='/iso9001'
                />
                <CardItem
                  src='/img/ISO 14001.png'
                  text='Lorem ipsum dolor'
                  label='Certifering'
                  path='/iso14001'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  src='/img/planering.jpg'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
                  label='Planering'
                  path='/planering'
                />
                <CardItem
                  src='/img/tools.jpg'
                  text='Lorem ipsum dolor'
                  label='Verktyg'
                  path='/tools'
                />
                <CardItem
                  src='/img/fräs.jpg'
                  text='Lorem ipsum dolor'
                  label='Fräsning'
                  path='/fräsning'
                />
              </ul>
            </div>
          </div>
        </div>
      );
}

export default Cards