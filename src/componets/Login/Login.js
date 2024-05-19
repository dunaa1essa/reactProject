import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {

    const [currState,setCurrState] = useState('Sign Up')

  return (
    <div className='log-in'>
      <form className='log-in-container'>
        <div className='log-in-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
        </div>
        <div className='log-in-inputs'>
            {currState==='Login'?<></>:<input type='text' placeholder='your name'/>}
            <input type='email' placeholder='your email'/>
            <input type='password' placeholder='password'/>
        </div>
        <button>{currState==='Sign Up'?'Craet acount':'Login'}</button>
        <div className='log-in-condition'>
            <input type='checkbox' required/>
            <p>by continuing i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==='Login'
        ?<p>Create a new acount?<span onClick={()=>setCurrState('Sign Up')}>click here</span></p>
        : <p>already have an acount?<span onClick={()=>setCurrState('Login')}>login here</span></p>
        }
      </form>
    </div>
  )
}

export default Login
