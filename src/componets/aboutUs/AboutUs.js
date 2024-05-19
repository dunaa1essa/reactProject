import React from 'react'
import './aboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us' id='about-us'>
      <h1>Our location</h1>
      <div className='about-us-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.964816302303!2d46.6817084!3d24.8308768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eef0fd3e8da41%3A0x4b8b83469e9ddb4d!2sEconomy%20and%20Planning!5e0!3m2!1sar!2ssa!4v1716112173376!5m2!1sar!2ssa"
       width="1000" height="450" 
       allowFullScreen
       loading="lazy" referrerpolicy="no-referrer-when-downgrade"
       title='Responsive googel map'></iframe>
      </div>
    </div>
  )
}

export default AboutUs
