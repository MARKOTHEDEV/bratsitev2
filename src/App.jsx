import { useState } from 'react'
import bratlogo from '/bratlogo.jpg'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [isActive, setIsActive] = useState(false);
  return (
    <div className='relative overflow-x-hidden'>
      <nav className='px-10 md:px-20 flex py-4 justify-between items-center bg-black text-white font-semibold'>
        <div className='bg-[#9fd830]'><img src={bratlogo} alt="bratlogo" className='w-32' /></div>
        <ul className='hidden lg:flex gap-6'>
          <li>About</li>
          <li>Brat Tools</li>
          <li>Shop</li>
          <li className='text-[#c94ff2]'>How to Guide</li>
          <li>FAQ</li>
        </ul>
        <div className='hidden lg:flex gap-2 items-center '>
          <p className='border-r-2 px-5'>cart</p>
          <button className='bg-[#c94ff2] px-4 py-2 rounded-xl text-green-400 text-sm'>Buy Brat</button>
        </div>
        <GiHamburgerMenu onClick={() => {setIsActive(!isActive)}} className='text-[#c94ff2]  lg:hidden' />
      </nav>


      <main className='bg-[#9fd830] px-10 md:px-20 flex flex-col md:flex-row  justify-center items-center gap-8 py-32'>
        <img src={bratlogo} alt="logo" />
        <div>
          <h1 className='text-[3rem] md:text-[4rem] text-white font-bold'>$BRAT</h1>
          <h1 className='text-[3rem] md:text-[4rem] text-white font-bold'>$BRAT</h1>
          <button className='bg-black px-6 py-3 rounded-xl  text-[#c94ff2]'>Order Brat</button>
          <div className='text-[#c94ff2] flex mt-5 text-2xl md:text-3xl gap-4'>
            <FaTelegramPlane />
            <FaXTwitter />
            <FiInstagram />
            <FaTiktok />
          </div>
        </div>
      </main>
      

      <section >
      <Marquee className='flex bg-[#c94ff2] text-white justify-between px-36 py-3 gap-5'>
        <p>365/365/365</p><br />
        <p>BRAT SUMMER</p><br />
        <p>24/7 BRAT</p><br />
        <p>THE RETAIL COIN</p><br />
        <p>BRAT IS FOREVER</p><br />
        <p>KAMALA IS BRAT</p><br />
        <p>BRAT IS FOREVER</p><br />
        </Marquee>
      </section>

      <div className='bg-black lg:px-28 md:px-20 px-10 flex-col-reverse lg:flex-row flex justify-between text-white py-20 gap-8'>
        <div className='flex flex-col gap-5'> 
          <h2 className='font-bold text-[4.2rem] '>WHAT IS <span className='text-[#9fd830]'>$BRAT</span> ?</h2>
          <h5 className='font-bold'><span className='text-[#9fd830]'>$BRAT</span> is the retail coin of the bull run</h5>
          <p>
            Brat is a movement that celebrates individuality, and being the bestv version of you , that you can be. <br /><br />
            In a world that pushes comformity, Brat community members push back. This community, formed organically, is made  up of winners who are unapologetically themselves, brave and commited for the long haul. <br /><br />
            There is so much untapped potential in the retail market <br />
            Those that have never bought crypto before. <br />
            Brat and it's community will brigde this gap. <br /><br />
            Brat is a way of life. <br />
            Be early, be Brat or be late <br />
            the choice is yours
          </p>
          <div className='flex flex-col md:flex-row gap-5'>
            <button className='border border-[#9fd830] text-[#9fd830] font-bold bg-gray-800 rounded-xl px-7 py-1'>Buy $BRAT</button>
            <button className='border border-[#c94ff2] text-[#c94ff2] font-bold bg-gray-800 rounded-xl px-7 py-1'> Join the community </button>
          </div>
        </div>

        <img src={bratlogo} alt="logo" />
      </div>

      <aside className='bg-[#9fd830] md:px-20 px-10 py-24 flex flex-col items-center gap-10'>
        <h2 className='text-[#c94ff2] text-[3rem] font-bold text-center'>HOW TO BUY $BRAT</h2>
        <div className='flex flex-col items-center lg:flex-row justify-between gap-5'>
          <div className='grid md:grid-cols-2 md:grid-rows-2 grid-rows-1 grid-cols-1 w-full md-w-2/3 lg:w-1/2 gap-4'>
            <img src={bratlogo} alt="logo" />
            <img src={bratlogo} alt="logo" />
            <img src={bratlogo} alt="logo" />
            <img src={bratlogo} alt="logo" />
          </div>

          <img src={bratlogo} alt="logo" />
        </div>
      </aside>

      <div  className='bg-[#9fd830] px-16 flex flex-col gap-9'>
          <h2 className='font-bold text-[3rem]'>SHOP $BRAT</h2>
          <div className='flex justify-center md:justify-end text-3xl'><IoIosGlobe /></div>
          <div className='flex justify-between flex-col lg:flex-row gap-4 lg:gap-0'>
            <div className='flex flex-col gap-8'>
                <img src={bratlogo} alt="logo" />
                <img src={bratlogo} alt="logo" />
            </div>
            <img src={bratlogo} alt="logo" />
          </div>
          <img src={bratlogo} className='self-center' alt="logo" />
          <div className='text-white font-bold flex md:justify-end justify-center items-center  gap-5 text-2xl'>
            <FaDiscord />
            <p>blur</p>
            <FaXTwitter />
          </div>
      </div>


        {isActive ?
          
          <div className='fixed top-0 left-0 h-screen w-screen bg-black z-50 text-white flex flex-col items-center pt-28 gap-5'>

          <ul className='flex flex-col gap-4 items-center'>
          <IoCloseSharp onClick={() => {setIsActive(!isActive)}} className='text-2xl' />
              <li>About</li>
              <li>Brat Tools</li>
              <li>Shop</li>
              <li className='text-[#c94ff2]'>How to Guide</li>
              <li>FAQ</li>
            </ul>
    
            <div className='flex gap-2 flex-col items-center '>
              <p>cart</p>
              <button className='bg-[#c94ff2] px-4 py-2 rounded-xl text-green-400 text-sm'>Buy Brat</button>
            </div>
          </div>:
          <></>
      }
    </div>
  )
}

export default App
