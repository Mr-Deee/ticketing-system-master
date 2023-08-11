import React, { useState } from 'react';
import './search.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you want to see live?"
        value={searchQuery}
        onChange={handleChange}
      />
     
    </form>
  );
};

export default SearchBar;
