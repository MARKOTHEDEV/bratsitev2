import React from 'react'
import moonshotapp from '/moonshotapp.jpg'


const Buybrat = () => {
  return (
    <div className='px-10 md:px-20 text-white flex flex-col gap-8 items-center justify-center font-bold bg-[#9fd830] py-16'>
    <h2 className='text-[#c94ff2] font-extrabold'>MOONSHOT APP</h2>
    <h2 className='font-bold'>IOS & GOOGLE SHOP</h2>
    <p>Step 1: Download app ( hyperlink this josh : <a href="https://moonshot.money/?ref=OMglvK7vbL" className='underline' target="_blank">Download app</a> )</p>
    <p>Step 2: Create Email</p>
    <p>Step 3: Press 'Search' </p>
    <p>Step 4: Enter ca: "adaifwodihfiowehfa"</p>
    <img src={moonshotapp} className='rounded-md' alt="" />
</div>
  )
}

export default Buybrat