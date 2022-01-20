import React from 'react';

const Card = (props) => {
    const { destination } = props;  
    return <li className= {'card ' + destination.size} key={destination.id}>
                <div className='pictureCard' style={{ backgroundImage:`url(${destination.image})` }}>
                    <span className='typeCard'>{destination.type}</span>
                </div>  
                <span className='titleCard'>{destination.title}</span>
          </li>;
};

export default Card;
