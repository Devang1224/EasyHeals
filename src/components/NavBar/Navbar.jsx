import React from 'react'
import logo from "../../assets/easyHealsLogo.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center shadow-lg py-3 px-10 lg:py-3 lg:px-20">
 
     <img src={logo} alt="EasyHeals" className='w-24 lg:w-32'/>

    <ul className='flex gap-3 lg:gap-8 '>
        <li className="cursor-pointer border-b-2 border-[#EA4E24] px-2 ">Home</li>
        <li className='cursor-pointer px-2'>About Us</li>
        <li className='cursor-pointer px-2'>Lab Test</li>
        <li className='cursor-pointer px-2'>Treatment</li>
     
     <button className='bg-[#EA4E24] rounded-[5px] px-[20px] py-[4px] text-white '>Contact Us</button>
    </ul>

    </div>
  )
}

export default Navbar