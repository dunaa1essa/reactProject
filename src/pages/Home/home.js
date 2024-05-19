import React, { useState } from 'react'
import './home.css'
import Header from '../../componets/Header/Header'
import ExprolMenu from '../../componets/ExploreMenu/ExploreMenu'
import  FoodDisplay from '../../componets/FoodDisplay/FoodDisplay'
import ContactUs from '../../componets/contactUs/ContactUs'
import AboutUs from '../../componets/aboutUs/AboutUs'


const Home = () => {

  const [category,setCategory] = useState('All');

  return (
    <div>
      <Header/>
      <ExprolMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <ContactUs/>
      <AboutUs/>
    </div>
  )
}

export default Home