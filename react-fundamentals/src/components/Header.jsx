import React from 'react'
import '../App.css'
import img from './images/cool-darth.jpg'


function Header() {


  return (
    <div className="image-container">
      <img src={img} alt="Darth Vader being cool" className='image'/>
      <div className="text-overlay">
        <h3 className='text'>Darth Vader</h3>
        <h5 className='smaller-text'>Formerly known as Anakin Skywalker</h5>
      </div>
    </div>
  )
}

export default Header;
