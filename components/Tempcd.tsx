import React from 'react'
import { Bell, CircleArrowLeft } from 'lucide-react'

const Tempcd = () => {
  return (
    <div>
      <div className='mt-6 mb-8 container mx-auto px-2'>
     <div className='flex justify-between items-center px-1.5'>
       <div>
        <CircleArrowLeft size={20}/>
          <h1>Note Templates</h1>
             <p>Choose a pre-built templates to start quickly</p>
       </div>
           <div className=" space-x-100">
  
           <Bell size={30} color="blue" className="cursor-pointer"/>
           </div>
  
     </div>
    </div>
    </div>
  )
}

export default Tempcd
