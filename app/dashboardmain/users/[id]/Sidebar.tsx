import React from 'react'

type HeaderProps = {
    navbar: boolean;
   
}

const Sidebar = ({ navbar }: HeaderProps) => {

    
    
  return (
    <div className='bg-transparent flex fixed z-50'>
        {/* desktop view */}
   <div className='bg-[#1f2937] desktop border-t border-t-[#4b5563] h-screen'>

        <div className='mt-4 p-2'>
        <input type="text" placeholder='Search' className='py-2 px-2 rounded-md' />
        </div>

        <div className='h-[70%] overflow-y-scroll'>
            

                <div className='p-3 flex items-center hover:bg-slate-900 duration-300 justify-between'>
                    <div className='flex items-center'>
                    <div>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                </div>
                
                <div>
                <span className="flex-1 text-white ms-3 whitespace-nowrap">Kanban</span>
                <p className="flex-1 ms-3 truncate text-sm text-gray-500 whitespace-nowrap">How are you</p>
                </div>
                </div>

                <div>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </div>
                </div>

                <div className='p-3 flex items-center justify-between'>
                    <div className='flex items-center'>
                    <div>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                </div>
                
                <div>
                <span className="flex-1 text-white ms-3 whitespace-nowrap">Kanban</span>
                <p className="flex-1 ms-3 truncate text-sm text-gray-500 whitespace-nowrap">How are you</p>
                </div>
                </div>

                <div>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </div>
                </div>
                <div className='p-3 flex items-center justify-between'>
                    <div className='flex items-center'>
                    <div>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                </div>
                
                <div>
                <span className="flex-1 text-white ms-3 whitespace-nowrap">Kanban</span>
                <p className="flex-1 ms-3 truncate text-sm text-gray-500 whitespace-nowrap">How are you</p>
                </div>
                </div>

                <div>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </div>
                </div>
                <div className='p-3 flex items-center justify-between'>
                    <div className='flex items-center'>
                    <div>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                </div>
                
                <div>
                <span className="flex-1 text-white ms-3 whitespace-nowrap">Kanban</span>
                <p className="flex-1 ms-3 truncate text-sm text-gray-500 whitespace-nowrap">How are you</p>
                </div>
                </div>

                <div>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </div>
                </div>
                <div className='p-3 flex items-center justify-between'>
                    <div className='flex items-center'>
                    <div>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                </div>
                
                <div>
                <span className="flex-1 text-white ms-3 whitespace-nowrap">Kanban</span>
                <p className="flex-1 ms-3 truncate text-sm text-gray-500 whitespace-nowrap">How are you</p>
                </div>
                </div>

                <div>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </div>
                </div>


            
        </div>

    </div> 

{/* mobile view */}
{navbar ? 
<div className='bg-[#1f2937] border-t fixed left-0 w-[250px] border-t-[#4b5563] h-[100vh]'>

<div className='mt-4 p-2'>
<input type="text" placeholder='Search' className='py-2 px-2 rounded-md' />
</div>

<div className='h-[70%] overflow-y-scroll'>


<div className='p-3 flex items-center hover:bg-slate-900 duration-300 justify-between'>
<div className='flex items-center'>
<div>
<img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
</div>

<div>
<span className="flex-1 text-white ms-3 whitespace-nowrap">Kanban</span>
<p className="flex-1 ms-3 truncate text-sm text-gray-500 whitespace-nowrap">How are you</p>
</div>
</div>

<div>
<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
</div>
</div>

<div className='p-3 flex items-center justify-between'>
<div className='flex items-center'>
<div>
<img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
</div>

<div>
<span className="flex-1 text-white ms-3 whitespace-nowrap">Kanban</span>
<p className="flex-1 ms-3 truncate text-sm text-gray-500 whitespace-nowrap">How are you</p>
</div>
</div>

<div>
<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
</div>
</div>
<div className='p-3 flex items-center justify-between'>
<div className='flex items-center'>
<div>
<img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
</div>

<div>
<span className="flex-1 text-white ms-3 whitespace-nowrap">Kanban</span>
<p className="flex-1 ms-3 truncate text-sm text-gray-500 whitespace-nowrap">How are you</p>
</div>
</div>

<div>
<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
</div>
</div>
<div className='p-3 flex items-center justify-between'>
<div className='flex items-center'>
<div>
<img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
</div>

<div>
<span className="flex-1 text-white ms-3 whitespace-nowrap">Kanban</span>
<p className="flex-1 ms-3 truncate text-sm text-gray-500 whitespace-nowrap">How are you</p>
</div>
</div>

<div>
<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
</div>
</div>
<div className='p-3 flex items-center justify-between'>
<div className='flex items-center'>
<div>
<img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
</div>

<div>
<span className="flex-1 text-white ms-3 whitespace-nowrap">Kanban</span>
<p className="flex-1 ms-3 truncate text-sm text-gray-500 whitespace-nowrap">How are you</p>
</div>
</div>

<div>
<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
</div>
</div>



</div>

</div> : null }
    </div>
  )
}

export default Sidebar