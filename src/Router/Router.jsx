import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Basket from '../Pages/Basket/Basket'
import Wishlist from '../Pages/Wish/Wishlist'
import Dashboard from '../Pages/Dashboard/Dashboard'
const Router = () => {
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Basket' element={<Basket/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/admin' element={<Dashboard/>}/>
        </Routes></BrowserRouter></div>
  )
}

export default Router