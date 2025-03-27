import React from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import NotFound from '../pages/NotFound/NotFound'
import Logout from '../pages/Logout/Logout'

export default function AppRouting() {
  return (
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/contact" element={<Contact />} /> 
            <Route  path="/login" element={<Login />} /> 
            <Route  path="/register" element={<Register />} />   
            <Route  path="*" element={<NotFound />} />  
            <Route  path="/logout" element={<Logout />} />
        </Routes>

  )
}
