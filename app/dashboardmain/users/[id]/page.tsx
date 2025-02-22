
"use client"
import React, { useState } from 'react'


import Header from '../../Header'
import Chatmessages from './Chatmessages'
import Sidebar from './Sidebar'



const Page = () => {
    const [isNavActive, setIsNavActive] = useState<boolean>(false);
    const handleSidebar = () => {
        setIsNavActive(!isNavActive)
      }

     
      
  return (
    <div>
        <Header handle={handleSidebar}/>
        {/* <div className='main-container '> */}
        <Sidebar navbar={isNavActive} />
        <Chatmessages/>
        {/* </div> */}
    </div>
  )
}

export default Page