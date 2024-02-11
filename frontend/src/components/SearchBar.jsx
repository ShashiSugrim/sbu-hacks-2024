import React, { useState } from "react";
import SearchBarCSS from "../css/SearchBar.module.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Search for:", searchTerm);
    // Add search functionality here
  };

  return (
    <div className={SearchBarCSS.layout}>
      <header className={SearchBarCSS.header}>
        <input
          type="text"
          placeholder="Perfect Fit, Style & Happiness For Every Mile..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={SearchBarCSS.searchInput}
        />
        <button onClick={handleSearch} className={SearchBarCSS.searchButton}>
          Search
        </button>
      </header>
      <aside className={SearchBarCSS.filters}>
        {/* <h3>Filter</h3> */}
        {/* Add filter options here */}
      </aside>
      <main className={SearchBarCSS.searchResults}>
        {/* Map through search results and render them here */}
      </main>
    </div>
  );
};

export default SearchBar;
