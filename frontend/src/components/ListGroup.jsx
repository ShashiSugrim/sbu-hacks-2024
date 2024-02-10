import React, { useState } from "react";
import PropTypes from "prop-types"; // Correct import for PropTypes

function ListGroup({ items, heading }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1> {/* Use heading prop */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{ cursor: "pointer" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// Correct PropTypes definition
ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string, // Add PropTypes for heading if you use it
};

// Define default props
ListGroup.defaultProps = {
  items: [], // Default value for items
  heading: "Default Heading", // Default heading value
};

export default ListGroup;
