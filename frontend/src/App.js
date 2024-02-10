import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Filter></Filter>
      <Results></Results>
    </div>
  );
}

export default App;
