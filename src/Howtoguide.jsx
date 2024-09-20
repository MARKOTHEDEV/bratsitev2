import React from 'react'
import poap2 from '/poap.png'
import rabbit from '/rabbit.png'

import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Howtoguide = () => {
  return (
    <div className='bg-black px-10 md:px-20 flex flex-col md:flex-row py-24 justify-center  items-center border-t-4 border-[#9fd830]'>
    <div className='flex flex-col items-center gap-4'>
      <a target='_blank' href="https://x.com/intent/post?text=This+is+proof+of+my+entry+in+%40BratCoinCTO+Early+Access+and+5+SOL+Giveaway.%0A%0ALaunching+Soon.%0A%0ADrop+Sol+Wallet+On+Pinned+Post+and+Join+TG+Now%21%0A%0ABe+Early+For+Once.+%F0%9F%90%B0%0A%0Apoap.brat.meme">
      <img src={poap2} className='block w-[600px]' alt="poap" /></a>
      <p className='font-bold text-white'>Click POAP to sign up for Early Access + Giveaway</p>
    </div>

    <div className='text-white flex items-center md:items-start flex-col gap-6 md:translate-x-[200px]'>
      <p className='text-[#9fd830]'><span className='font-bold text-[#9fd830]'>Launch date </span>- Very Soon</p>
      <p className='text-[#9fd830]'><span className='font-bold text-[#9fd830]'>Announcements </span>- Telegram</p>
      <a href="http://t.me/bratcoincto" className='font-bold underline text-[#9fd830] flex gap-2 items-center'>
          Join Now
          <img src={rabbit} alt="rabbit" className='w-5' />
      </a>

      <div className='text-[#c94ff2] text-3xl flex gap-4'>
         <a href="http://t.me/bratcoincto" target='_blank'><FaTelegramPlane className='cursor-pointer' /></a> 
        <a href=" https://x.com/bratcoincto"><FaXTwitter /></a>
      </div>
    </div>
  </div>
  )
}

export default Howtoguide