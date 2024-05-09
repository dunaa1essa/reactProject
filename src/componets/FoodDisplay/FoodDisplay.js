import React from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = () => {
  return (
    <div className='food-disblay'>
      
      <div className='food-display-menu-list'>
      {StoreContext.map((item,index) => {
        return(
          <div key={index} className='explore-menu-list-itme'>
            <img src={item.image} alt=''/>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        )
      })}
      </div>

    </div>
  )
}

export default FoodDisplay
