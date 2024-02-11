import React from "react";
import homecss from "./css/home.module.css";

import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
  return (
    <div className={homecss.overallStyle}>
      <SearchBar />
      <div style={{ textAlign: "center" }}>Search results</div>
      <div className={homecss.content}>
        <Filter className={homecss.Filter} />
        <Results />
      </div>
    </div>
  );
}

export default App;
