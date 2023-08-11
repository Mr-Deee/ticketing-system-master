import React from 'react';
import './hero.css';
import SearchBar from '../search/search';

const Hero = () => {
  return (
    
    <div className="hero-section">
      <div className="hero-content">
        <h1>let there be live</h1>
        <p className='p1'>Your next best-night-ever is waiting.</p>
        <p>And we have the tickets</p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
