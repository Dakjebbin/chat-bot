
"use client"
import React, { useState } from 'react'


import Header from '../../Header'
import Chatmessages from './Chatmessages'
import Sidebar from './Sidebar'
import { useAuthContext } from '@/app/context/authContext'
import { AlertDestructive } from '@/components/ui/alertpop'



const Page = () => {
    const [isNavActive, setIsNavActive] = useState<boolean>(false);
    const handleSidebar = () => {
        setIsNavActive(!isNavActive)
      }

      const AuthContext = useAuthContext()
      const userData = AuthContext?.userData
     
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
        {/* <div className='main-container '> */}
        <Sidebar navbar={isNavActive} />
        <Chatmessages/>
        {/* </div> */}
        </>
}
    </div>
  )
}

export default Page