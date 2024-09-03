// src/components/HeroSection.js
import React from 'react';
import hero from '../assets/aldaz.png';
import herovid from '../assets/hero.mp4';

const HeroSection = () => {
  return (
    <div className="pt-24 grid grid-cols-2 gap-4 bg-black h-screen relative">
      <div className="flex justify-center items-center">
        <img src={hero} className="img-fluid rounded-lg" alt="Hero 1" />
      </div>
      <div className="flex justify-center items-center">
        <video 
          src={herovid} 
          className="img-fluid rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 h-96" 
          autoPlay
          loop
          muted
          playsInline
          alt="Hero Video"
        />
      </div>

     
    </div>
  );
};

export default HeroSection;
