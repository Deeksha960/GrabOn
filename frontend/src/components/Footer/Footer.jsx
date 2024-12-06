import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
      <div className='footer' id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                  <img src={assets.logo} alt="" />
                  <p>Yumilicious</p>
                  <div className="footer-social-icons">
                      <h2>SOCIAL LINKS</h2>
                      <br />
                      <img src={assets.instagram_icon} alt="" />
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />                   
                      <img src={assets.linkedin_icon} alt="" />

                    
                  </div>
              </div>
              <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                      <li>History</li>
                      <li>Careers</li>
                      <li>What We Do</li>
                      <li>Privacy Security Terms</li>
                  </ul>
              </div>
              <div className="footer-content-right">
                  <h2>CONNECT WITH US</h2>
                  <ul>
                      <li>+91 123-4560-789</li>
                      <li>contact@GrabOn.com</li>
                  </ul>
              </div>
          </div>
          <hr/>
          <p className="footer-copyright">Copyright 2024 @ GrabOn.com - All Rights Reserved.</p> 
    </div>
  )
}

export default Footer
