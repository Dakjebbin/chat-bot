"use client"
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Chatbox from './Chatbox'



const Page = () => {
    const [isNavActive, setIsNavActive] = useState<boolean>(false);
    const handleSidebar = () => {
        setIsNavActive(!isNavActive)
      }

     
      
  return (
    <div>
        <Header handle={handleSidebar}/>
        <div className='main-container '>
        <Sidebar navbar={isNavActive} />
        <Chatbox/>
        </div>
    </div>
  )
}

export default Page