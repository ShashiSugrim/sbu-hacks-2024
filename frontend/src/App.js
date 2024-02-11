import React from "react";
import PageTwo from "./PageTwo";
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
          <Route path="pagetwo" element={<Home />} />
          <Route path="*" element={<PageTwo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
