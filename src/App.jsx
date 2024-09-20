import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Navbar from './Navbar';
import About from './About'
import Buybrat from './Buybrat'
import Howtoguide from './Howtoguide';
import './App.css'
import Home from './Home';
import WidgetTerminal from './Jupt';

function App() {

  return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            {/* <Route index element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Buybrat' element={<Buybrat/>}/> */}
            <Route path='/' element={<Howtoguide/>}/>
          </Routes>
        </BrowserRouter>
  )
}

export default App
