import React from 'react'
const CustomImage = ({ image, alt }) => {
  return (
    <div className="custom-img">
      <img src={image} alt={alt} />
    </div>
  );
};
export default CustomImage 