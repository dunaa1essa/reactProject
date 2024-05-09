import React, { useState } from 'react'
import './home.css'
import Header from '../../componets/Header/Header'
import ExprolMenu from '../../componets/ExploreMenu/ExploreMenu'
import  FoodDisplay from '../../componets/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category,setCategory] = useState('All');

  return (
    <div>
      <Header/>
      <ExprolMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home