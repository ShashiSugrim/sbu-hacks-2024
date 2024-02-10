import React, { useState } from "react";

const Filter = () => {
  const [selectedCategories, setSelectedCategories] = useState({});
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCategories({ ...selectedCategories, [name]: checked });
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({ ...priceRange, [name]: Number(value) });
  };

  return (
    <div style={{ padding: "10px", borderRight: "1px solid #ddd" }}>
      <h3>Filter</h3>

      <div>
        <h4>Categories</h4>
        <label>
          <input
            type="checkbox"
            name="sneakers"
            checked={selectedCategories["sneakers"] || false}
            onChange={handleCategoryChange}
          />
          Sneakers
        </label>
        <label>
          <input
            type="checkbox"
            name="boots"
            checked={selectedCategories["boots"] || false}
            onChange={handleCategoryChange}
          />
          Boots
        </label>
        <label>
          <input
            type="checkbox"
            name="sandals"
            checked={selectedCategories["sandals"] || false}
            onChange={handleCategoryChange}
          />
          Sandals
        </label>
        {/* Add more categories as needed */}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Price Range</h4>
        <input
          type="range"
          name="min"
          min="0"
          max="500" // Set the maximum value as needed
          value={priceRange.min}
          onChange={handlePriceChange}
        />
        <input
          type="range"
          name="max"
          min="0"
          max="500" // Set the maximum value as needed
          value={priceRange.max}
          onChange={handlePriceChange}
        />
        <div>
          ${priceRange.min} - ${priceRange.max}
        </div>
      </div>
    </div>
  );
};

export default Filter;
