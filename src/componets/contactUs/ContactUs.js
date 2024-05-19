import React from 'react'
import './contactUs.css'

const ContactUs = () => {
  return (
    <div className='contact-us' id='contact-us'>
       <h1>Get In Touch</h1>
            <form className='contact-us-container'>
        <div className='contact-us-inputs'>
            <input type='text' placeholder='your name'/>
            <input type='email' placeholder='your email'/>
            <textarea rows='5' placeholder='write here...'/>
        </div>
        <button>sent</button>
      </form>
      <br/>
      <hr/>
    </div>
  )
}

export default ContactUs
