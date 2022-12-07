import React from 'react'
import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='py-8 border-t-2 w-full'>
        <div className='flex gap-2 items-center m-auto justify-center'>
            <BsChatSquareDots size={30} className="text-[var(--primary-dark)]"/>
            <h1 className='font-bold text-xl text-gray-700'>WEEKAWAY</h1>
        </div>
    </div>
  )
}

export default Footer