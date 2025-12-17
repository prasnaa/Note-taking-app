import React from 'react'
import { CircleArrowLeft, Bell } from 'lucide-react' 

const Profilenav = () => {
  return (
    <div className='mt-5'>
      <CircleArrowLeft size={20} className="cursor-pointer" />

      <div className="flex flex-col items-end px-8 ">
            <Bell size={30} color="blue" className="cursor-pointer" />
    </div>
    </div>

  )
}

export default Profilenav
