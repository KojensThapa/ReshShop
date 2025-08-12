import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import CartContents from '../Cart/CartContents';

const CardDrawer = ({drawerOpen, toggleCardDrawer}) => {

  
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform 
        duration-300 flex flex-col z-50 ${ drawerOpen? "translate-x-0" : "translate-x-full"}
        `}
    >
      {/* Close Button */}
      <div className='flex justify-end p-4'>
        <button onClick={toggleCardDrawer}>
          <RxCross2 className='w-6 h-6 text-gray-600'/>
        </button>
      </div>

      {/* Card content with scrollable area */}
      <div className='flex-grow overflow-y-auto p-4'>
        <h2 className='text-xl font-semibold mb-4'> Your Card</h2>
        {/* Component for Card */}
        <CartContents />
      </div>

      {/* checkout button fixed at the buttom */}
      <div className='p-4 bottom-0 sticky bg-white'>
        <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-custom-red hover:underline transition'>Checkout</button>
        <p className='text-sm mt-2 text-center tracking-tighter text-gray-500'>Shipping, taxes, and discount code calculated at Checkout.</p>
      </div>
      
    </div>
  )
}

export default CardDrawer
