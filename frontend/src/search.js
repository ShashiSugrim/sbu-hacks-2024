// src/components/SearchBar.js
import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for shoes..." />
      <button type="button">Search</button>
    </div>
  );
}

export default SearchBar;
