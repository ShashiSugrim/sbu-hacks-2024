// src/App.js
import React from 'react';
import './App.css';
import finderShoeLogo from './FinderShoeLogo.png';
import NavBar from './components/NavBar';
import barcode from "./BarCode.png";
function App() {
  return (
    <div className="App">
      <button className="button"><b></b></button>
      <NavBar />
      <img src={finderShoeLogo} />
    <hr/>
      <button>Find Your Fit</button>
      <hr/>
      <img src={barcode}/>

    </div>
  );
}

export default App;
