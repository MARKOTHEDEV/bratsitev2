import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Navbar from './Navbar';
import About from './About'
import './App.css'
import Home from './Home';

function App() {

  return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
          </Routes>
        </BrowserRouter>
  )
}

export default App
