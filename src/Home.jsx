import React from 'react'
import { useState } from 'react'
import videobrat2 from '/videobrat2.mp4'
import videobrat1 from '/videobrat1.mp4'
import {Link}  from 'react-router-dom'



import howto1 from '/howto1.png'
import howto2 from '/howto2.png'
import howto3 from '/howto3.png'
import howto4 from '/howto4.png'
import goblin from '/goblin.png'
import cap from '/cap.png'
import hat from '/hat.png'
import girlbrat from '/girlbrat.jpg'
import stackedbrat from '/stackedbrat.png'

import connectwallet from '/connectwallet.png'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './App.css'
import WidgetTerminal from './Jupt'
import BratifyText from './BratifyText'

const Home = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);  

  return (
    <div>
        <div className='relative overflow-x-hidden'>
      <main className='bg-[#9fd830] px-10 md:px-20 flex flex-col md:flex-row  justify-center items-center gap-8 py-32'>
        <img src={goblin} alt="logo" />
        <div className='flex flex-col gap-4 items-center'>
        <img src={stackedbrat} className='w-96' alt="stacked text" />
          <button className='bg-black px-6 py-3 rounded-xl  text-[#c94ff2]' ><Link to='/Buybrat'>Buy Brat</Link></button>
          <div className='text-[#c94ff2] flex mt-5 text-2xl md:text-3xl gap-4'>
            <a href="http://t.me/bratcoincto" target='_blank'><FaTelegramPlane /></a> 
            <a href="https://x.com/bratcoincto" target='_blank'><FaXTwitter /></a> 
            <FiInstagram />
            <FaTiktok />
          </div>
        </div>
      </main>
      

      <section >
      <Marquee className='flex bg-[#c94ff2] text-white justify-between px-36 py-3 gap-5 font-extrabold'>
        <p className='mr-5'>365/365/365</p>
        <p className='mr-5'>BRAT SUMMER</p>
        <p className='mr-5'>24/7 BRAT</p>
        <p className='mr-5'>THE RETAIL COIN</p>
        <p className='mr-5'>BRAT IS FOREVER</p>
        <p className='mr-5'>BRAT IS AUTHENTICITY</p>
        <p className='mr-5'>BRAT IS WINNING</p>
        <p className='mr-5'>BRAT IS BEING YOURSELF</p>
        <p className='mr-5'>BRAT IS THE RETAIL COIN</p>
        </Marquee>
      </section>

      <div className='bg-black lg:px-28 md:px-20 px-10 flex-col-reverse lg:flex-row flex justify-between text-white py-20 gap-8'>
        <div className='flex flex-col gap-12 lg:w-1/2'> 
          <h2 className='font-bold text-[4.2rem] '>WHAT IS <span className='text-[#9fd830]'>$BRAT</span> ?</h2>
          <h5 className='font-bold'><span className='text-[#9fd830]'>$BRAT</span> is the retail coin of the bull run</h5>
          <p>
            Brat is a movement that celebrates individuality, and being the bestv version of you , that you can be. <br /><br />
            In a world that pushes comformity, Brat community members push back. This community, formed organically, is made  up of winners who are unapologetically themselves, brave and commited for the long haul. <br /><br />
            There is so much untapped potential in the retail market <br />
            Those that have never bought crypto before. <br />
            Brat and it's community will brigde this gap. <br /><br />
            Brat is a way of life. <br />
            Be Early, Be Brat. Or... Be Late. <br />
            The Choice is Yours
          </p>
          <div className='flex flex-col md:flex-row md:gap-20 gap-5'>
            <button className='border border-[#9fd830] text-[#9fd830] font-bold bg-gray-800 rounded-xl px-7 py-1'>Buy $BRAT</button>
            <button className='border border-[#c94ff2] text-[#c94ff2] font-bold bg-gray-800 rounded-xl px-7 py-1'
            onClick={()=>{
              window.open('https://t.me/bratcoincto','_blank')
            }}
            > Join the community </button>
          </div>
        </div>

      <div className='lg:w-1/2 flex justify-center'>
      <video  className='self-center w-full' autoPlay muted loop>
          <source src={videobrat1} type="video/mp4"  />
        </video>
      </div>
      </div>

      <aside className='bg-[#9fd830] md:px-20 px-10 py-24 flex flex-col items-center gap-10'>
        <h2 className='text-[#c94ff2] text-[4.2rem] font-bold text-center'>HOW TO BUY $BRAT</h2>
        <div className='flex flex-col items-center justify-center'>
          {/* <div className='grid md:grid-cols-2 md:grid-rows-2 grid-rows-1 grid-cols-1 w-full md-w-2/3 lg:w-1/2 gap-4'>
            <img src={howto1} alt="pic" />
            <img src={howto2} alt="logo" />
            <img src={howto3} alt="logo" />
            <img src={howto4} alt="logo" />
          </div> */}

          {/* <img src={connectwallet} className='w-full md:w-1/2' alt="logo" /> */}
          <WidgetTerminal/>
        </div>
      </aside>



      <div  className='bg-[black] px-16 flex flex-col gap-9 items-center'>
          {/* <h2 className='font-bold text-[3rem]'>SHOP $BRAT</h2>
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
          </video> */}
          <BratifyText/>
          {/* <img src={stackedbrat} alt=""  className='w-1/2'/> */}
          <div className='text-white font-bold flex md:justify-end justify-center items-center py-8  gap-5 text-2xl'>
          <a href="http://t.me/bratcoincto" target='_blank'><FaTelegramPlane /></a> 
          <a href="https://x.com/bratcoincto" target='_blank'><FaXTwitter /></a> 
          </div>
      </div>

    </div>

    

    </div>
  )
}

export default Home