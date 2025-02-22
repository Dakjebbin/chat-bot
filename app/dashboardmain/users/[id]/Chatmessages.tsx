import Image from 'next/image'
import React from 'react'

const Chatmessages = () => {
  return (
    <div className='bg-slate-200 h-[90vh]'>


    <div className='p-4 sm:ml-64 chat-msg '>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque quasi illo impedit quidem debitis provident at sint, sapiente quam officia incidunt commodi tenetur unde totam porro optio odio et.</p>
            <div>
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>


        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque quasi illo impedit quidem debitis provident at sint, sapiente quam officia incidunt commodi tenetur unde totam porro optio odio et.</p>
            <div>
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>

        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque quasi illo impedit quidem debitis provident at sint, sapiente quam officia incidunt commodi tenetur unde totam porro optio odio et.</p>
            <div>
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>

        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque quasi illo impedit quidem debitis provident at sint, sapiente quam officia incidunt commodi tenetur unde totam porro optio odio et.</p>
            <div>
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>

        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque quasi illo impedit quidem debitis provident at sint, sapiente quam officia incidunt commodi tenetur unde totam porro optio odio et.</p>
            <div>
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>

        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque quasi illo impedit quidem debitis provident at sint, sapiente quam officia incidunt commodi tenetur unde totam porro optio odio et.</p>
            <div>
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>

        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque quasi illo impedit quidem debitis provident at sint, sapiente quam officia incidunt commodi tenetur unde totam porro optio odio et.</p>
            <div>
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>

        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio cumque quasi illo impedit quidem debitis provident at sint, sapiente quam officia incidunt commodi tenetur unde totam porro optio odio et.</p>
            <div>
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
            <p>2:30pm</p>
            </div>
        </div>  
    </div>


    <div className='flex items-center gap-3 p-[10px_15px] bg-white absolute bottom-0 left-0 md:left-[250px] right-0'>
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