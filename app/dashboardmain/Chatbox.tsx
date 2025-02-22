
import Image from 'next/image'
import React from 'react'

const Chatbox = () => {
  return (
    <div className="bg-slate-200">
    <div className='min-h-[100vh] flex '>
        <div className='flex flex-col text-black justify-center items-center m-auto'>
        <Image className='w-[200px] m-auto' src="/logo_big-Cp0kVrXR.png" alt='icon' width={1000} height={1000}/>
        <p className='font-semibold text-center text-xl '>Chat anytime and anywhere around the globe</p>
        </div>
    </div>
    </div>
  )
}

export default Chatbox