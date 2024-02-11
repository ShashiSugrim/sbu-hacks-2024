import React, { useEffect, useState } from "react";
import Shoe from "../components/Shoe";
import styles from "../css/Results.module.css";

const Results = () => {
  const [shoes, setShoes] = useState([]); // Initialize state to hold shoes data

  useEffect(() => {
    const handleStorageUpdate = () => {
      // Retrieve and use the updated data from localStorage
      const updatedData = JSON.parse(localStorage.getItem("filterResults"));
      console.log("RESULT GOT DATA: ", JSON.stringify(updatedData));
      setShoes(updatedData || []); // Update state with new data or empty array if null
    };

    // Initial load in case the data is already in localStorage when component mounts
    handleStorageUpdate();

    window.addEventListener("storageUpdate", handleStorageUpdate);

    // Cleanup the event listener on component unmount
    return () =>
      window.removeEventListener("storageUpdate", handleStorageUpdate);
  }, []);

  return (
    <div className={styles.Results}>
      {shoes.map((shoe) => (
        <Shoe
          key={shoe.id}
          title={shoe.title}
          price={shoe.price}
          gender={shoe.gender}
          source={shoe.img_url} // Assuming `source` prop in Shoe component is for image URL
        />
      ))}
    </div>
  );
};

export default Results;
