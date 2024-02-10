import React from "react";
import Shoe from "../components/Shoe";
import styles from "../css/Results.module.css"; // Assuming the export is default

const Results = ({ items }) => {
  return (
    <>
      {/* Assuming you have or will add a .title style */}
      <div className={styles.Results}>
        {/* {items.map((item, index) => (
          <Shoe key={index} {...item} /> // Spread item props into Shoe component
        ))} */}
        <Shoe></Shoe>
        <Shoe></Shoe>
        <Shoe></Shoe>
      </div>
    </>
  );
};

export default Results;
