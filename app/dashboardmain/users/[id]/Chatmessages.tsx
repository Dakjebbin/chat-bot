import Image from 'next/image'
import React from 'react'

const Chatmessages = () => {
  return (
    <div className='bg-slate-200 h-[90vh]'>


    <div className='p-4 sm:ml-64 chat-msg '>
        <div className='flex items-end justify-end gap-1 p-[0px_15px]'>
            <p className="text-white bg-[#1f2937] p-2 max-w-[300px] text-[13px] font-[300]
             rounded-[8px_8px_0px_8px] mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque quasi illo impedit quidem debitis provident at sint, sapiente quam officia incidunt commodi tenetur unde totam porro optio odio et.</p>
            <div className='text-center text-[11px]'>
            <Image className="w-7 aspect-square rounded-full" width={1000} height={1000} src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>

        <div className='flex items-end justify-end gap-1 p-[0px_15px]'>
            <Image className='max-w-[230px] mb-7 rounded-[10px]' width={1000} height={1000} src="/chat-background.png" alt="" />
            <div className='text-center text-[11px]'>
            <Image className="w-7 aspect-square rounded-full" width={1000} height={1000} src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>


        <div className='flex items-end justify-end gap-1 p-[0px_15px] r-msg'>
            <p className='text-white bg-[#1f2937] p-2 max-w-[300px] text-[13px] font-[300]
             rounded-[8px_8px_8px_0px] mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque quasi illo impedit .</p>
            <div className='text-center text-[11px]'>
            <Image className="w-8 aspect-square rounded-full" width={1000} height={1000} src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>

     
    </div>


    <div className='flex items-center gap-3 p-[10px_15px] bg-white absolute bottom-0 left-0 md:left-[230px] right-0'>
        <input className='flex-1 border-none outline-none' type="text" placeholder='Send a message' />
        <input type="file" id="image" accept='image/png, image/jpeg' hidden />
        <label className='flex' htmlFor="image">
        <Image className='w-7 cursor-pointer' src="/image-icon.png" alt='image' width={1000} height={1000}/>
        </label>
        <Image className='w-7 cursor-pointer' src="/message.png" alt='send' width={1000} height={1000}/>
    </div>
    </div>
  )
}

export default Chatmessages