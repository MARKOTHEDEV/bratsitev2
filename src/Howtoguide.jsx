import React from 'react'
import poap2 from '/poap.png'

import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Howtoguide = () => {
  return (
    <div className='bg-black px-10 md:px-20 flex flex-col md:flex-row py-24 justify-center gap-24 items-center border-t-4 border-[#9fd830]'>
    <div className='flex flex-col items-center gap-4'>
      <a target='_blank' href="https://x.com/intent/post?text=This+is+proof+of+my+entry++and+participation+in+%40BratCoinCTO+Whitelist+Giveaway.%0A%0ABrat+Launching+Soon%3A+Be+Early+or+Be+Forgotten.%0AOne+Minute+Now%2C+Change+Your+Life+Forever.%0A%0AID%3A+0032135%0A%0Apoap.brat.meme%0Ahttps://t.me/BratCoinCTO "><img src={poap2} alt="poap" /></a>
      <p className='font-bold text-white'>Click POAP to sign up for Early Access + Giveaway</p>
    </div>

    <div className='text-white flex items-center md:items-start flex-col gap-6'>
      <p className='text-[#9fd830]'><span className='font-bold text-[#9fd830]'>Launch date </span>- Very Soon</p>
      <p className='text-[#9fd830]'><span className='font-bold text-[#9fd830]'>Announcements </span>- Telegram</p>
      <a href="http://t.me/bratcoincto" className='font-bold underline text-[#9fd830]'>Join Now</a>

      <div className='text-[#c94ff2] text-3xl flex gap-4'>
         <a href="http://t.me/bratcoincto" target='_blank'><FaTelegramPlane className='cursor-pointer' /></a> 
        <a href="https://twitter.com/intent/tweet?text=Hello%20world%21"><FaXTwitter /></a>
      </div>
    </div>
  </div>
  )
}

export default Howtoguide