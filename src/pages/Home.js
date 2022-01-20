import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {

  const destinations = [
    {
        id: 1,
        image: './images/card1.jpg',
        title: 'Explore the hidden waterfall deep inside the Amazon Jungle',
        type: 'Adventure',
        size: 'big'
    },
    {
      id: 2,
      image: './images/card2.jpg',
      title: 'Travel through the Islands of Bali in a private Cruise',
      type: 'Luxury',
      size: 'big'
    },
    {
      id: 3,
      image: './images/card3.jpg',
      title: 'Set sail in the Atlantic Ocean visiting Uncharted Waters',
      type: 'Mystery',
      size: 'small'
    },
    {
      id: 4,
      image: './images/card4.jpg',
      title: 'Experience Football on Top of the Himilayan Mountains',
      type: 'Adventure',
      size: 'small'
    },
    {
      id: 5,
      image: './images/card5.jpg',
      title: 'Ride through the Sahara Desert on a guided camel tour',
      type: 'Adrenaline',
      size: 'small'
    }
];

  return <div className='home'>
          <Header />
          <div className='pageFooter'>
            <div className='destiCards'>
              <h2>Choose out these EPIC Destinations!</h2>
              <ul className='cards'>
                {destinations.map((destination) => {
                  return (
                    <Card destination={destination} key={destination.id} />
                  )
                })}
              </ul>
            </div>
            <Footer />
          </div>
        </div>;
};

export default Home;
