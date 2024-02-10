import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="content">
        <Filter className="Filter" />
        <Results className="Results" />
      </div>
    </div>
  );
}

export default App;
