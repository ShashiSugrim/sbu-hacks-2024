import React from "react";

const Shoe = ({ source, title, price }) => {
  return (
    <>
      <div style={{ width: "14rem" }}>
        <img src={source} alt="..." />
        <div>
          <h5>{title}</h5>
          <p>Price: {price}</p>
          <a href="#" class="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Shoe;
