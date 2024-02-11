import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";

function App() {
  const navigate = useNavigate();

  function handleLogo(event) {
    navigate("/");
  }
  return (
    <>
      <div className="App">
        {/* <Home /> */}
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
