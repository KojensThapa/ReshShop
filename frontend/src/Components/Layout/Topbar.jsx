import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
const Topbar = () => {
  return (
    <div className='bg-custom-red text-white'>
        <div className='container mx-auto flex justify-between items-center px-4 py-4'>
            <div className='hidden md:flex items-center space-x-4'>
                <a href='#' className='hover:text-gray-300'>
                    <TbBrandMeta className='w-5 h-5'/>
                </a>
                <a href='#' className='hover:text-gray-300'>
                    <IoLogoInstagram className='w-5 h-5'/>
                </a>
                <a href='#' className='hover:text-gray-300'>
                    <RiTwitterXFill className='w-5 h-5'/>
                </a>
            </div>

            <div className='text-sm text-center flex-grow'>
                <span>
                    We Deliver all Over Nepal and Outside Nepal with Reliable Shipping.
                </span>
            </div>

            <div className='text-sm hidden md:block'>
                <a href='#'>+977-9809367645</a>
            </div>
        </div>
    </div>
  )
}

export default Topbar
