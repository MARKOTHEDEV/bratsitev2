import { useState } from 'react'
import bratlogo from '/bratlogo.jpg'
import bratlogo2 from '/bratlogo2.jpg'
import videobrat2 from '/videobrat2.mp4'
import videobrat1 from '/videobrat1.mp4'

import howto1 from '/howto1.png'
import howto2 from '/howto2.png'
import howto3 from '/howto3.png'
import howto4 from '/howto4.png'
import goblin from '/goblin.png'
import cap from '/cap.png'
import hat from '/hat.png'
import girlbrat from '/girlbrat.jpg'

import connectwallet from '/connectwallet.png'
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
        <img src={goblin} alt="logo" />
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
        <p className='mr-5'>365/365/365</p>
        <p className='mr-5'>BRAT SUMMER</p>
        <p className='mr-5'>24/7 BRAT</p>
        <p className='mr-5'>THE RETAIL COIN</p>
        <p className='mr-5'>BRAT IS FOREVER</p>
        <p className='mr-5'>KAMALA IS BRAT</p>
        <p className='mr-5'>BRAT IS FOREVER</p>
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

        <video width="320" height="240" className='self-center' autoPlay muted loop>
          <source src={videobrat2} type="video/mp4"  />
        </video>
      </div>

      <aside className='bg-[#9fd830] md:px-20 px-10 py-24 flex flex-col items-center gap-10'>
        <h2 className='text-[#c94ff2] text-[3rem] font-bold text-center'>HOW TO BUY $BRAT</h2>
        <div className='flex flex-col items-center lg:flex-row justify-between gap-5'>
          <div className='grid md:grid-cols-2 md:grid-rows-2 grid-rows-1 grid-cols-1 w-full md-w-2/3 lg:w-1/2 gap-4'>
            <img src={howto1} alt="pic" />
            <img src={howto2} alt="logo" />
            <img src={howto3} alt="logo" />
            <img src={howto4} alt="logo" />
          </div>

          <img src={connectwallet} className='w-full md:w-1/2' alt="logo" />
        </div>
      </aside>

      <div  className='bg-[#9fd830] px-16 flex flex-col gap-9'>
          <h2 className='font-bold text-[3rem]'>SHOP $BRAT</h2>
          <div className='flex justify-center md:justify-end text-3xl'><IoIosGlobe /></div>
          <div className='flex justify-between  flex-col lg:flex-row gap-4 lg:gap-0'>
            <div className='flex flex-col items-center gap-8'>
                <img src={cap}  alt="logo" />
                <img src={hat} alt="logo" />
            </div>
            <img src={girlbrat} className='w-2/5 self-center' alt="logo" />
          </div>

          <video width="320" height="240" className='self-center' autoPlay muted loop>
            <source src={videobrat1} type="video/mp4"  />
          </video>
          <div className='text-white font-bold flex md:justify-end justify-center items-center  gap-5 text-2xl'>
            <FaDiscord />
            <p>blur</p>
            <FaXTwitter />
          </div>
      </div>


      <div className='px-10 md:px-20 bg-black py-20 text-white flex justify-between flex-col lg:flex-row gap-6'>
        <div>
          <h2 className='text-[3rem] font-bold mb-5'>ABOUT <br /> <span className='text-[#9fd830]'>$BRAT</span> </h2>
          <p className='font-semibold'>"the retail coin of this bull run and beyond"</p>
        </div>
        <div>
          <p className='font-bold text-2xl mb-8'><span className='text-[#9fd830]'>$BRAT</span> is the retail coin of the bull run.</p>
          <p>The Brat movement has existed since the 80s, permeating, <br />
              changing and freeing theb minds of our society. <br /><br />
              Brat is self defining: rather than having fit into a mold of what the zeitgeist has decided is cool. <br />
              This is integral in not just millenial and Zoomer culture but all of humankind that are 'free'. <br /><br />
              In the summer of 2024, CharliXCX released 'Brat Summer'. an album that brought the movement <br />
              Back to the forefront of the mindshare of the youth. it is the start of unlocking the minds of the youth <br /> <br />
              The cultural undermining of Brat, being the best version of yourself, unapologetically, is an idea <br />
              That anyone and everyone can adopt and can be applied to any situation in life.
          </p>
        </div>
      </div>

      <Marquee className='flex bg-[#c94ff2] text-white justify-between px-36 py-3 gap-5'>
        <p className='mr-5'>365/365/365</p>
        <p className='mr-5'>BRAT SUMMER</p>
        <p className='mr-5'>24/7 BRAT</p>
        <p className='mr-5'>THE RETAIL COIN</p>
        <p className='mr-5'>BRAT IS FOREVER</p>
        <p className='mr-5'>KAMALA IS BRAT</p>
        <p className='mr-5'>BRAT IS FOREVER</p>
      </Marquee>

      <div className='bg-black px-10 md:px-20 text-white py-20 flex flex-col gap-4'>
        <h2 className='font-bold'><span className='text-[#9fd830]'>$BRAT</span> Etymology</h2>
        <h2 className='font-bold'>Noun</h2>
        <p>"BRAT" refer to the concept that encapsulates a <span className='text-[#9fd830]'>carefree,</span> <span className='text-[#c94ff2]'>rebeilious</span> and <span className='text-[#9fd830]'>fun-loving attitude </span> </p>
        <p>1. The concept embraces one's inner "Brat", which can include being bold, outspoken, and unapologetically oneself </p>
        <p>2. The concept moves from a "Give a f*ck energy" to "DGAF" energy</p>
        <p>3. The concept that promotes authenticity, which is the most powerful force in the universe</p>
      </div>

      <Marquee className='flex bg-[#9fd830] text-[#c94ff2] justify-between px-36 py-3 gap-5'>
        <p className='font-bold'>BRAT IS AUTHENTICITY, AUTHENTICITY IS THE STRONGEST FORCE IN THE UNIVERSE, BRAT IS FOREVER.</p>
      </Marquee>

      <div className='bg-black flex justify-center px-10 py-16 gap-9 flex-col items-center'>
        <h2 className='text-[#c94ff2] text-[2rem] md:text-[3rem] font-bold'>BUY $BRAT EARLY</h2>
        <img src={connectwallet} className='w-2/3' alt="logo" />
      </div>

      <div className='bg-[#9fd830] px-20 flex justify-center  items-center flex-col py-16'>
        <div className='text-white text-[5rem] md:text-[8rem] font-bold '>
          <h2>$BRAT</h2>
          <h2 className=' -translate-y-20 translate-x-6 md:-translate-y-28 md:translate-x-9'>$BRAT</h2>
          <h2 className=' -translate-y-40 translate-x-14 md:-translate-y-56 md:translate-x-20'>$BRAT</h2>
        </div>
        <div className='text-white font-bold flex md:justify-end md:items-end justify-center items-center  gap-5 text-2xl w-full'>
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
