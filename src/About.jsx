import React from 'react'
import { useState } from 'react' 
import connectwallet from '/connectwallet.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const About = () => {
    const [count, setCount] = useState(0)

    const [isActive, setIsActive] = useState(false);

  return (
    <div>
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
    </div>
  )
}

export default About