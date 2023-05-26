import React from 'react'
import {Link} from 'react-router-dom'
import './latest.css'
const Latest = () => {
  return (
    <div className='latest-container'>
        <div className='circle1'>
            <div className='lastest1'>
            </div>
            <div className='line1'></div>
        </div>

      <div className='circle2'>
        <div className='line2'></div>
      <div className='lastest2'>
      </div>
      </div>
      <div className='circle3'>
      <div className='lastest3'>
      </div>
      <div className='line3'></div>
      </div>
      <Link to='/gallery' className='btn-link'>
        <button className='latest-btn'>See More Designs</button>
      </Link>
    </div>
  )
}

export default Latest
