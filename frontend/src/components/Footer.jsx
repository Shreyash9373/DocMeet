import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
        <div className='flex items-center mb-4'>
          <img className='w-16 h-16 cursor-pointer rounded-full' src={assets.logo} alt="" />
          <p className='m-2 font-medium text-lg border-b-gray-400 '>DocMeet</p>
          </div>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Welcome to DocMeet, your trusted partner in managing your healthcare needs conveniently and efficiently. At DocMeet, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 9373180056</li>
            <li>DocMeet@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ DocMeet.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
