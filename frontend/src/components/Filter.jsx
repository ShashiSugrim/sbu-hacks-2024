import React, { useState } from "react";
import FILTERCSS from "../css/Filter.module.css";

const Filter = () => {
  const [priceLow, setPriceLow] = useState(0);
  const [priceHigh, setPriceHigh] = useState(400);
  const [gender, setGender] = useState(""); // Simplified gender selection
  const [size, setSize] = useState(0);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(Number(event.target.value));
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    if (name === "priceLow") setPriceLow(Number(value));
    if (name === "priceHigh") setPriceHigh(Number(value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const requestData = {
      gender,
      priceLow,
      priceHigh,
      size,
    };

    try {
      const response = await fetch("http://localhost:8000/filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Response from server:", jsonResponse);
        // Store the response data in localStorage
        localStorage.setItem("filterResults", JSON.stringify(jsonResponse));

        // Optionally, if you need to notify other components about the update,
        // you can dispatch a custom event or use a state management solution
        // Here's how you might dispatch a custom event
        window.dispatchEvent(new Event("storageUpdate"));
      } else {
        console.error("Failed to fetch");
        // Handle error
      }
    } catch (error) {
      console.error("Error in fetch: ", error);
      // Handle error
    }
  };

  return (
    <div className={FILTERCSS.filterContainer}>
      <form onSubmit={handleSubmit}>
        <h3>Filter</h3>

        <div>
          <h4>Gender</h4>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>

        <div>
          <h4>Size</h4>
          <input
            type="number"
            value={size}
            onChange={handleSizeChange}
            placeholder="Enter Size"
          />
        </div>

        <div>
          <h4>Price Range</h4>
          <input
            type="number"
            name="priceLow"
            value={priceLow}
            onChange={handlePriceChange}
            placeholder="Lowest Price"
          />
          <input
            type="number"
            name="priceHigh"
            value={priceHigh}
            onChange={handlePriceChange}
            placeholder="Highest Price"
          />
        </div>

        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default Filter;
