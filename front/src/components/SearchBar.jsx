// SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
