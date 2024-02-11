import React from "react";

const Shoe = ({ source, title, price, gender, size }) => {
  return (
    <>
      <div style={{ width: "14rem" }}>
        <img src={source} alt="..." />
        <div>
          <h5>{title}</h5>
          <p>Price: {price}</p>
          <p>Gender: {gender}</p>
          <p>Size: US{size}</p>
          <a href="#" class="btn btn-primary">
            <b>Add to Cart</b>
          </a>
        </div>
      </div>
    </>
  );
};

export default Shoe;
