import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div className="w-full p-2 px-5 bg-zinc-50 border-b-2">
      <div className='w-full flex justify-between items-center'>
     <div className='flex gap-4 items-center justify-center'>
     <div className="flex gap-2 items-center">
          <img
            src="https://avatars.githubusercontent.com/u/176706430?s=200&v=4"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="text-xl font-semibold">Im Rabo</p>
          </div>
        </div>
        <div className='my-4 border-r-2 h-4 hidden lg:block'></div>
        <div className='hidden lg:block'>
        <ul className=' flex gap-4 justify-center items-center'>
          <li><Link to=''><div className='text-center text-zinc-500 hover:text-black'>Dashboard</div></Link></li>
          <li><Link to=''><div className='text-center text-zinc-500 hover:text-black'>Devices</div></Link></li>
          <li><Link to=''><div className='text-center text-zinc-500 hover:text-black'>Network</div></Link></li>
          <li><Link to=''><div className='text-center text-zinc-500 hover:text-black'>logs</div></Link></li>
          <li><Link to=''><div className='text-center text-zinc-500 hover:text-black'>settings</div></Link></li>
        </ul>
        </div>
     </div>
      <div>
      <div className='flex gap-2 items-center'>
               <img src="https://photos.wellfound.com/users/18320732-medium_jpg?1723330532" alt=""  className='h-8 w-8 rounded-full'/>
               <div className='hidden lg:block'>
                <p className='text-xs font-semibold'>Prathamesh More</p>
                <p className='text-xs'> Bugs and Glitches </p>
               </div>
            </div>
      </div>
      </div>
    </div>
  )
}

export default NavigationBar