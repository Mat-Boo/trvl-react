import React from 'react';
import Button from './Button';

const Header = () => {
  return <div className='header'>
            <video src='./videos/video-1.mp4' autoPlay loop muted className='videoStars'/>
            <div className='mainText'>
                <h1>ADVENTURE AWAITS</h1>
                <h2>What are you watching for?</h2>
                <div className='btnBox'>
                    <Button textBtn='GET STARTED' btnClass='emptyBtn btn'/>
                    <Button textBtn={<span>WATCH TRAILER<img src='./images/play-circle.svg' alt='play' className='play'></img></span>} btnClass='fullBtn btn'/>
                </div>
            </div>
        </div>;
};

export default Header;
