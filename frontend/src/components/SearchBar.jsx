import React from "react";
import SearchBarCSS from "../css/SearchBar.module.css";

const SearchBar = () => {
  return (
    <>
      <div className={SearchBarCSS.parent}>
        Search bar
        <button>
          <span>Search</span>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
