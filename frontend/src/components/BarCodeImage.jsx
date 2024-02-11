// Image.jsx
import React from 'react';


const ImageComponent = ({ src }) => {
  return (
    <div>
      <img
        src={src}
        style={{
          width: '35%',
          height: 'auto',
          display: 'block',
          margin: 'auto'
          
        }}
        alt="Barcode"
      />
    </div>
  );
};

export default ImageComponent;

