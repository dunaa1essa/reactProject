import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu,setmenu] = useState('home');

  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
        <ul className='navbar-menu'>
            <li onClick={()=>setmenu('home')} className={menu==='home'?'active':''}>Home</li>
            <li onClick={()=>setmenu('menu')} className={menu==='menu'?'active':''}>Menu</li>
            <li onClick={()=>setmenu('contact us')} className={menu==='contact us'?'active':''}>Contact us</li>
            <li onClick={()=>setmenu('about us')} className={menu==='about us'?'active':''}>About us</li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=''/>
            <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt=''/>
            <div className='dot'></div>
            </div>
            <button>Sing In</button>
        </div>
    </div>
  )
}

export default Navbar
