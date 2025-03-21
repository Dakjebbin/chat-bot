"use client"
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Chatbox from './Chatbox'
import { useAuthContext } from '../context/authContext'
import { AlertDestructive } from '@/components/ui/alertpop'



const Page = () => {
    const [isNavActive, setIsNavActive] = useState<boolean>(false);
    const handleSidebar = () => {
        setIsNavActive(!isNavActive)
      }

     const authContext = useAuthContext();
     const userData = authContext?.userData;

        
     if (!userData) {
      return (<div className='bg-black h-screen flex items-center justify-center'>
        <AlertDestructive/>
      </div>)
    }
      
  return (
    <div>
      {userData && 
      <>
        <Header handle={handleSidebar}/>
        <div className='main-container '>
        <Sidebar navbar={isNavActive} />
        <Chatbox/>
        </div>
        </>
}
    </div>
  )
}

export default Page