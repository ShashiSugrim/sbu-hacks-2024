// ShoeFinderImage.jsx
import React from 'react';
import SHOECSS from '../css/ShoeFinderImage.module.css';

const ShoeFinderImage = ({ src }) => {
  return (
    <div className={SHOECSS.imgx}>
      <img 
        src={src}
        alt="Shoe Finder Logo"
      />
    </div>
  );
};

export default ShoeFinderImage;
