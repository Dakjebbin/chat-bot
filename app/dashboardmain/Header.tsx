"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'


type HeaderProps = {
  handle: () => void;
}
const Header = ({ handle }: HeaderProps) => {
  
  const [isHovered, setIsHovered] = useState(false);
 

  const handleToggle = () => {
    setIsHovered(!isHovered)
  }

  return (
    <div className='bg-[#1f2937] sticky top-0 p-3 flex justify-between items-center pr-10'>
      <div className='w-14 flex items-center'>
      <div onClick={handle} className='mr-3 hover:bg-slate-600 duration-300 cursor-pointer block md:hidden p-2 rounded-lg'>
      <svg className="w-6 h-6" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path></svg>
      </div>
      <Link className='w-14 flex items-center' href="/dashboardmain">
        <Image src="/logo_big-Cp0kVrXR.png" className="w-full mr-3" height={1000} width={1000} alt="ChatApp Logo"/>
        <span className="text-xl sm:text-2xl font-semibold whitespace-nowrap text-white">ChatApp</span>
        </Link>
      </div>

      <div className='relative  cursor-pointer'>
        <div
        onClick={handleToggle}
        className='w-8 h-8'>
        <img className="w-full h-full rounded-full" height={1000} width={1000} src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
        </div>
     {isHovered ? <div className={'absolute -translate-x-28 w-44  rounded-md  translate-y-7 bg-[#374151]'}>
        <div className='p-3'>
        <p className="text-sm truncate text-white" role="none">
                  Neil Sims
                </p>
        <p className="text-sm font-medium  text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.commsrsktoihortgijo
                </p>
                </div>
        <hr className='border-[#4b5563]'/>
        <ul className='p-3'>
          <li className='px-4 py-2 text-sm hover:rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'>Dashboard</li>
          <li className=' px-4 py-2 text-sm text-gray-700 hover:rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'>Settings</li>
          <li className=' px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'>Billing</li>
          <li className=' px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'>LogOut</li>
        </ul>
      </div> : null}
      
      </div>
    </div>
  )
}

export default Header