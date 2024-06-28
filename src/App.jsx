import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp'
import SignIn from './pages/Signin'
import Profile from './pages/Profile'
import About from './pages/About'
import Home from './pages/Home'


export default function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/sign-in' element={<SignIn />} />
  <Route path='/sign-up' element={<SignUp />} />
  <Route path='/profile' element={<Profile />} />
  <Route path='/about' element={<About />} />
   </Routes>
  </BrowserRouter>
      
    
  )
}
