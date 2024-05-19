import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu,setmenu] = useState('home');

  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setmenu('home')} className={menu==='home'?'active':''}>Home</Link>
            <a href='#food-display' onClick={()=>setmenu('menu')} className={menu==='menu'?'active':''}>Menu</a>
            <a href='#contact-us' onClick={()=>setmenu('contact us')} className={menu==='contact us'?'active':''}>Contact us</a>
            <a href='#about-us' onClick={()=>setmenu('about us')} className={menu==='about us'?'active':''}>About us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=''/>
            <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt=''/>
            <div className='dot'></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sing In</button>
        </div>
    </div>
  )
}

export default Navbar
