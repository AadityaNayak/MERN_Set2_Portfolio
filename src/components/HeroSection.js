import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted/>
      <h1>Aaditya Nayak</h1>
      <p>Full Stack Developer specializes in MERN stack</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          My Profile
        </Button>
{/* 
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          LinkedIn <i class="fa fa-linkedin-square"></i>
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
