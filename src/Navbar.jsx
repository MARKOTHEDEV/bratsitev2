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
    className='bg-[#9fd830] block'><img src={
      // !location.pathname.includes('Howtoguide')?
      // bratlogo:'/logo2.jpeg'
      bratlogo
    } alt="bratlogo" className={
      // location.pathname.includes('Howtoguide')?
        // 'w-[100px]':'w-14'
        'w-14'
      } /></a>
    {/* {
       false? */}
       <ul className='hidden lg:flex gap-6 transition-all ease-in translate-x-[100px]'>
       <li className='hover:text-[#c94ff2]'><Link to="/Home">Home</Link></li>
       <li className='hover:text-[#c94ff2]'><Link to="/About">About</Link></li>
         <li className=' cursor-pointer'> <a href="https://pfp.bratsummer.xyz/">Brat Tools</a></li>
         <li className='hover:text-[#c94ff2] cursor-pointer'><a 
      href='/?jup=1'
         >How to Guide</a></li>
   
       </ul>
       {/* :''
    } */}

    <div className='hidden lg:flex gap-2 items-center '>
      <p className='border-r-2 px-5 cursor-pointer flex items-center gap-2'>ca: <span className='text-[#c94ff2]'>Coming Soon</span>  <FiCopy className=' text-[#9fd830]' /></p>
      <button className='bg-[#c94ff2] px-4 py-2 rounded-xl text-green-400 text-sm'>
        <a 
      // to='/#jup'
      href='/?jup=1'
      // to={'https://t.me/bratcoincto'}
      // target='_blank'
      >Buy Brat</a></button>
    </div>
    <GiHamburgerMenu onClick={() => {setIsActive(!isActive)}} className='text-[#c94ff2]  lg:hidden' />


    {
    isActive?
     
    // false? 
          
          <div className='fixed top-0 left-0 h-screen w-screen bg-black z-50 text-white flex flex-col items-center pt-28 gap-5'>

          <ul className='flex flex-col gap-4 items-center'>
          <IoCloseSharp onClick={() => {setIsActive(!isActive)}} className='text-2xl' />
          <li ><Link to="/Home" onClick={() => {setIsActive(!isActive)}} >Home</Link></li>
          <li><Link to="/About" onClick={() => {setIsActive(!isActive)}}>About</Link></li>
              <li><a href="https://pfp.bratsummer.xyz/">Brat Tools</a></li>
              <li>Shop</li>
              <li className='text-[#c94ff2]' onClick={() => {setIsActive(!isActive)}}><Link 
              // to='/Howtoguide'
              // to='https://poap.brat.meme/'
      href='/?jup=1'
              
              // target='_blank'
              >How to Guide</Link></li>
              <li>FAQ</li>
            </ul>
    
            <div className='flex gap-2 flex-col items-center '>
            <p className='px-5 cursor-pointer flex items-center gap-2'>ca : <span className='text-green-400'>Comimg Soon</span>  <FiCopy /></p>
            <button className='bg-[#c94ff2] px-4 py-2 rounded-xl text-green-400 text-sm' onClick={() => {setIsActive(!isActive)}}><a 
      href='/?jup=1'
            >Buy Brat</a></button>
            </div>
          </div>:
          <></>
      }
  </nav>
  )
}

export default Navbar