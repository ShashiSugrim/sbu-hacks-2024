// src/App.js
import React from 'react';
import maincss from './css/main.module.css'
import finderShoeLogo from './FinderShoeLogos.png';
import NavBar from './components/NavBar';
import barcode from "./BarCode.png";
import Button from './components/FindYourFitButton.jsx';
import ShoeFinderImage from './components/ShoeFinderImage.jsx';
import BarCodeImage from "./components/BarCodeImage.jsx";

function App() {
  return (
    <div className="App">
      {/* <button className="button"><b></b></button> */}
      <NavBar />
      <ShoeFinderImage src={finderShoeLogo} />
      <h1>"Perfect Fit, Style & Happiness For Every Mile"</h1>
    <Button>Find your fit </Button>
      

     {/** <Image src={barcode}/> */} 
      <BarCodeImage src={barcode} />
    </div>
  );
}

export default App;
