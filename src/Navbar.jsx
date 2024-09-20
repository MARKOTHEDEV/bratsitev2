import React from 'react'
import { useState } from 'react'
import {Link, useLocation}  from 'react-router-dom'
import bratlogo from '/bratlogo.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";



const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
      const location = useLocation()
  return (
    <nav className='px-10 md:px-20 flex py-2 justify-between items-center bg-black text-white font-semibold relative '>
    <a
    href='/'
    className='bg-[#9fd830] block'><img src={'/logo2.jpeg'} alt="bratlogo" className='w-[100px]' /></a>
    {
       !location.pathname.includes('Howtoguide')?
       <ul className='hidden lg:flex gap-6 transition-all ease-in'>
       <li className='hover:text-[#c94ff2]'><Link to="/Home">Home</Link></li>
       <li className='hover:text-[#c94ff2]'><Link to="/About">About</Link></li>
         <li className=' cursor-pointer'> <a href="https://pfp.bratsummer.xyz/">Brat Tools</a></li>
         <li className='hover:text-[#c94ff2] cursor-pointer'><Link to='/Howtoguide'>How to Guide</Link></li>
   
       </ul>:''
    }

    <div className='hidden lg:flex gap-2 items-center '>
      <p className='border-r-2 px-5 cursor-pointer flex items-center gap-2'>ca: <span className='text-[#c94ff2]'>Comimg Soon</span>  <FiCopy className=' text-[#9fd830]' /></p>
      <button className='bg-[#c94ff2] px-4 py-2 rounded-xl text-green-400 text-sm'><Link 
      // to='/Buybrat'
      to={'https://t.me/bratcoincto'}
      target='_blank'
      >JOIN TG</Link></button>
    </div>
    <GiHamburgerMenu onClick={() => {setIsActive(!isActive)}} className='text-[#c94ff2]  lg:hidden' />


    {isActive && location.pathname.includes('Howtoguide')?
          
          <div className='fixed top-0 left-0 h-screen w-screen bg-black z-50 text-white flex flex-col items-center pt-28 gap-5'>

          <ul className='flex flex-col gap-4 items-center'>
          <IoCloseSharp onClick={() => {setIsActive(!isActive)}} className='text-2xl' />
          <li ><Link to="/Home" onClick={() => {setIsActive(!isActive)}} >Home</Link></li>
          <li><Link to="/About" onClick={() => {setIsActive(!isActive)}}>About</Link></li>
              <li><a href="https://pfp.bratsummer.xyz/">Brat Tools</a></li>
              <li>Shop</li>
              <li className='text-[#c94ff2]' onClick={() => {setIsActive(!isActive)}}><Link to='/Howtoguide'>How to Guide</Link></li>
              <li>FAQ</li>
            </ul>
    
            <div className='flex gap-2 flex-col items-center '>
            <p className='px-5 cursor-pointer flex items-center gap-2'>ca : <span className='text-green-400'>Comimg Soon</span>  <FiCopy /></p>
            <button className='bg-[#c94ff2] px-4 py-2 rounded-xl text-green-400 text-sm' onClick={() => {setIsActive(!isActive)}}><Link to='/Buybrat'>Buy Brat</Link></button>
            </div>
          </div>:
          <></>
      }
  </nav>
  )
}

export default Navbar