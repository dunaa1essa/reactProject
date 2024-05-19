import React, { useState } from 'react'
import './index.css'
import Navbar from "./componets/Navbar/Navbar";
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home'

import Footer from './componets/footer/Footer';
import Login from './componets/Login/Login'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
        <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
       <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    <Footer/>
    </>

  )
}

export default App