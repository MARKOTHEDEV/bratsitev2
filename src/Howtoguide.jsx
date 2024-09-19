import React from 'react'
import poap from '/poap.jpg'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Howtoguide = () => {
  return (
    <div className='bg-black px-10 md:px-20 flex flex-col md:flex-row py-24 justify-center gap-24 items-center'>
    <div className='flex flex-col items-center gap-4'>
      <a target='_blank' href="https://x.com/intent/post?text=This+is+proof+of+my+entry++and+participation+in+%40BratCoinCTO+Whitelist+Giveaway.%0A%0ABrat+Launching+Soon%3A+Be+Early+or+Be+Forgotten.%0AOne+Minute+Now%2C+Change+Your+Life+Forever.%0A%0AID%3A+0032135%0A%0Apoap.brat.meme%0Ahttps://t.me/BratCoinCTO "><img src={poap} alt="poap" /></a>
      <p className='text-[#c94ff2]'>Press poap to enter giveaway</p>
    </div>

    <div className='text-white flex items-center md:items-start flex-col gap-6'>
      <p><span className='font-bold'>Launch date </span>- Very Soon</p>
      <p><span className='font-bold'>Announcements </span>- Telegram</p>
      <a href="" className='font-bold underline'>Join Now</a>

      <div className='text-[#c94ff2] text-3xl flex gap-4'>
        <FaTelegramPlane className='cursor-pointer' />
        <a href="https://twitter.com/intent/tweet?text=Hello%20world%21"><FaXTwitter /></a>
      </div>
    </div>
  </div>
  )
}

export default Howtoguide