
import Image from 'next/image'
import React from 'react'
import Messages from './Messages'

const Chats = () => {
  return (
    <div className="bg-slate-200 p-4 sm:ml-64">
        <div className='fixed bottom-0 width'>
            <form className='relative'>
        <input type="text" className='w-full py-3 rounded-md outline-blue-900 pl-6' placeholder='Enter Message'/>

        <div className='absolute right-4 flex top-3 z-50'>
            <div className='w-7 mr-5 cursor-pointer'> 
            <label htmlFor='image-upload' >  
                <Image className='w-full cursor-pointer' src="/image-icon.png" alt='image' width={1000} height={1000}/>
        </label>
        <input type="file" id="image-upload" className="hidden" accept="image/*"/>
        </div>

            <button type='submit' className='w-7'>
                <Image className='w-full' src="/message.png" alt='send' width={1000} height={1000}/>
            </button>
        </div>
        </form>
        </div>


    <div className=' h-screen flex flex-1 justify-end p-20 overflow-hidden '>
        <div className='flex self-end flex-col-reverse text-black max-w-[80vh] overflow-y-auto '>
      <div>
        <Messages/>
      </div>
        </div>

    </div>

   

    
    </div>
  )
}

export default Chats