import React from 'react'
import './index.css'
import Navbar from "./componets/Navbar/Navbar";
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/PlaceOrder/placeOrder';
import Footer from './componets/footer/Footer';

const App = () => {
  return (
    <>
        <div className='app'>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>

  )
}

export default App