import React from "react";
// import pagetwocss from "./css/PageTwo.module.css";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div>Search results</div>
      <div className="content">
        <Filter className="Filter" />
        <Results />
      </div>
    </div>
  );
}

export default App;
