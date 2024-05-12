import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-conten-left'>
                <img src={assets.logo} alt=''/>
                <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>
            <div className='footer-content-center'>
            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+966-123-456-789</li>
                    <li>tomato@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>copyright 2024 tomato.com - All right reserved.</p>
      
    </div>
  )
}

export default Footer
