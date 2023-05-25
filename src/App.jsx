// import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Features from './pages/Features'
import Download from './pages/Download'
import Contact from './pages/contact'
import Bookmark from './pages/Bookmark'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/bookmark" element={<Bookmark/>}/>
      <Route path='/Features' element={<Features/>}/>
      <Route path='/Download' element={<Download/>}/>
    <Route path="/login" element={<Login /> }/>
    <Route path='/Contact' element={<Contact/>}/>

    </Routes>
    <Footer />
    </BrowserRouter>
  
    </>
  )
}

export default App
