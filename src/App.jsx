import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder'
import Cart from './Components/Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
         <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
