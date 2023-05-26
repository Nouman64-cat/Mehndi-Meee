import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import './hero.css'
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-header'>
        <p>Your imaginations, we innovate</p>
        <h1>Mehndi & Meee</h1>
        <p className='hero-header-p'>Make appointments with us on your precious occasions for mehndi designs.
            Innovative Designs / Creative Designs / Demanding Designs
        </p>
        <button className='hero-header-btn'>Explore More <FaArrowRight className='arrow-icon' style={{marginTop: '1rem', marginLeft: 'auto', marginRight: '1rem'}}/></button>
      </div>

    </div>
  )
}

export default Hero
