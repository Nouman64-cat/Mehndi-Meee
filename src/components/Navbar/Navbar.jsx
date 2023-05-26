import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      {/* <h3>Your imaginations, we innovate</h3> */}
      <div className='navbar-logo'>
        <h3>Mehndi & Meee</h3>
      </div>
      <div className='navbar-links'>
        <a href='#contact-area'>
          <button className='navbar-btn1'>Contact us</button>
        </a>
        <Link to='/gallery'>
          <button className='navbar-btn2'>Gallery</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
