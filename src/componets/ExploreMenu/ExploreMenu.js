import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExprolMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>choose from a diverse menu a delectable array of dishes. Our mission is to satisfy your cravings and elveate your dining experience, one delicious meal at a time.</p>
      <div className='exploer-menu-list'>
      {menu_list.map((item,index) => {
        return(
          <div key={index} className='explore-menu-itme'>
            <img src={item.menu_image} alt=''/>
            <p>{item.menu_name}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default ExprolMenu
