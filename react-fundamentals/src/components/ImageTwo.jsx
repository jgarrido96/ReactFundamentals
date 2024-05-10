import React from 'react';
import Image2 from './images/cat.jpg';

function ImageTwo() {


    return (
      <div className="image-container">
        <h3 className="ImageTwo-text">Cat</h3>
        <img src={Image2} alt="Nice Cat" className='image'/>
      </div>
    )
  }
  
  export default ImageTwo;
  