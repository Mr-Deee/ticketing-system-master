import React from 'react';
import './sellhero.css';
import SearchBar from '../search/search';
import { Link } from 'react-router-dom';

const Sellhero = () => {
  return (
    
    <div className="sellhero-section">
      <div className="sellhero-content">
        <h1 className='h2'>Sell your seats</h1>
        <h1>Where the fans are</h1>   
        <Link to='/signup'><button>Start selling</button></Link>   
      </div>
    </div>
  );
};

export default Sellhero;
