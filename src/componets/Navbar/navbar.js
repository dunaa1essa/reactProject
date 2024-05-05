import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
const navbar = () => {

    const [menu,setmenu] = useState('menu');
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
        <ul className='navbar-menu'>
            <li onClick={()=>setmenu('home')} className={menu==='home'?'active':''}>home</li>
            <li onClick={()=>setmenu('menu')} className={menu==='menu'?'active':''}>menu</li>
            <li onClick={()=>setmenu('contact us')} className={menu==='contact us'?'active':''}>contact us</li>
            <li onClick={()=>setmenu('abot us')} className={menu==='abot us'?'active':''}>abot us</li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon}/>
            <div className='navbar-search-icon'>
            <img src={assets.basket_icon}/>
            <div className='dot'></div>
            </div>
            <button>sing in</button>
        </div>
    </div>
  )
}

export default navbar
