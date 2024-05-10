import React from 'react';
import Image1 from './images/doggy.jpg'

function ImageOne() {


    return (
      <div className="image-container">
        <h3 className="ImageOne-text">Dog</h3>
        <img src={Image1} alt="Good Dog" className='image'/>
      </div>
    )
  }
  
  export default ImageOne;
