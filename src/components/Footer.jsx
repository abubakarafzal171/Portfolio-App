import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full h-[14vh] flex flex-col md:flex-row justify-between items-center px-8 border-t border-gray-400 gap-6 md:gap-2 mb-5'>
<div className='flex flex-col gap-2 items-center justify-center'>
    <p className='font-bold text-xl'>Phone</p>
    <p className='text-sm'>123-456-789</p>
</div>
<div className='flex flex-col gap-2 items-center justify-center'>
    <p className='font-bold text-xl'>Email</p>
    <p className='text-sm'>info@mysite.com</p>
</div>
<div className='flex flex-col gap-2 items-center justify-center'>
    <p className='font-bold text-xl'>Follow Me</p>
    <div className="socials flex justify-center items-center gap-3">
<FaTwitter  className='cursor-pointer hover:text-blue-600 transition-all duration-500 text-xl'/>
<FaLinkedinIn  className='cursor-pointer hover:text-blue-600 transition-all duration-500 text-xl'/>
    </div>
</div>
<div className='flex flex-col items-center justify-center'>
    <p className='font-sans font-light text-sm'>&copy; 2025 By Nicol Rider.</p>
    <p className='font-sans font-light text-sm'>Powered and secured by <span className='underline'>Wix</span></p>
</div>
    </div>
  ) 
}

export default Footer