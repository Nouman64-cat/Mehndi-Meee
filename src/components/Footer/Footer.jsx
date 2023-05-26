import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
      {/* <h1 className='footer-header'>Thanks for Visiting....</h1> */}
      <div className='footer-content'>
            <h1>Mehndi & Meee</h1>
            <div className='whatsapp-contact'>
            <FaWhatsapp className='whats-app-icon' style={{ fontSize: '2rem'}}/>
                <p>+92 300 1610067</p>
            </div>
                
                <h2 className='follow'>Follow us on</h2>
            <div className='other-links'>
            <FaFacebook className='facebook-icon' style={{fontSize: '2rem'}} />
                <FaInstagram className='instagram-icon' style={{ fontSize: '2rem'}} />
            </div>
               
        </div>
    </div>
  )
}

export default Footer;
