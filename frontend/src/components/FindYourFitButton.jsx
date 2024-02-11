// In your FindYourFitButton.jsx file
import React from "react";
import { useNavigate } from "react-router-dom";
import BUTTONCSS from "../css/Button.module.css";

const FindYourFitButton = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pagetwo"); // Use the path you've defined for PageTwo in your Router setup
  };

  return (
    <button className={BUTTONCSS.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default FindYourFitButton;
