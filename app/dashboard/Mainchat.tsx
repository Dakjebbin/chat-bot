import Image from 'next/image'
import React from 'react'

const Mainchat = () => {
  return (
    <div className="bg-slate-200 p-4 sm:ml-64">
    <div className=' h-screen flex '>
        <div className='flex flex-col text-black justify-center items-center m-auto'>
        <Image className='w-[200px] m-auto' src="/logo_big-Cp0kVrXR.png" alt='icon' width={1000} height={1000}/>
        <p className='font-semibold text-xl '>Chat anytime and anywhere around the globe</p>
        </div>
    </div>
    </div>
  )
}

export default Mainchat