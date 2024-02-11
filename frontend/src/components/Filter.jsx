import React, { useState } from "react";
import FILTERCSS from "../css/Filter.module.css";

const Filter = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [gender, setGender] = useState({ male: false, female: false });
  const [includePrice, setIncludePrice] = useState({ min: false, max: false });
  const [size, setsize] = useState(0);

  const setSize = (event) => {
    size = 4;
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({ ...priceRange, [name]: Number(value) });
  };

  const handleGenderChange = (event) => {
    const { name, checked } = event.target;
    setGender({ ...gender, [name]: checked });
  };

  const handleIncludePriceChange = (event) => {
    const { name, checked } = event.target;
    setIncludePrice({ ...includePrice, [name]: checked });
  };

  return (
    <div className={FILTERCSS.filterContainer}>
      <h3>Filter</h3>

      <div>
        <h4>Prices:</h4>
        {/* Category Checkboxes */}
        {/* Existing category checkboxes */}
        <label>
          <input
            type="input"
            name="male"
            checked={gender["male"]}
            onChange={handleGenderChange}
          />
          Lowest Price
        </label>
        <br />
        <label>
          <input
            type="input"
            name="female"
            checked={gender["female"]}
            onChange={handleGenderChange}
          />
          Highest Price
        </label>
        <h4>Size </h4>

        <label>
          <input
            type="input"
            name="female"
            checked={gender["female"]}
            onChange={handleGenderChange}
          />
          Enter Size
        </label>

        <h4>Gender</h4>
        <label>
          <input
            type="checkbox"
            name="male"
            checked={gender["male"]}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="checkbox"
            name="female"
            checked={gender["female"]}
            onChange={handleGenderChange}
          />
          Female
        </label>
      </div>
    </div>
  );
};

export default Filter;
