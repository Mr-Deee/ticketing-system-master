import './hero.css';
import SearchBar from '../search/search';
import SearchResults from '../search/SearchResult';
import React, { useState } from 'react';

const Hero = () => {
  const [searchResults, setSearchResults] = useState([]);


  return (
    <div>
    <div className="hero-section">
      <div className="hero-content">
        <h1>let there be live</h1>
        <p className='p1'>Your next best-night-ever is waiting.</p>
        <p>And we have the tickets</p>
        <SearchBar setSearchResults={setSearchResults} />
      
      </div>
    </div>
    <SearchResults results={searchResults} />
    </div>
  );
};

export default Hero;
