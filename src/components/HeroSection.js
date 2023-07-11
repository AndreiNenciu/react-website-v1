import React, { useEffect, useRef } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import backgroundMusic from './background-music.mp3';

function HeroSection() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <div className='hero-container'>
      <video src='/videos/generic.mp4' autoPlay loop muted />
      <h1>JOIN US!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          join.
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH NEWEST TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
      <audio ref={audioRef} src={backgroundMusic} autoPlay loop />
    </div>
  );
}

export default HeroSection;
