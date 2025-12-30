import React from 'react'
import { Bell, Plus } from 'lucide-react'
import Link from 'next/link'



const DashNav = () => {
  return (
    <div className='  mt-6 mb-8 container mx-auto px-2'>
     <div className='flex justify-between items-center px-1.5'>
       <div>
          <h1 className='font-semibold px-3'>Welcome back, User</h1>
             <p className='text-gray-600 px-6'>You have 0 note and 0 pending tasks</p>
       </div>
           <div className=" space-x-100">
  
           <Bell size={40} color="blue" className="cursor-pointer p-2 rounded-full bg-white shadow-md group-hover:shadow-lg transition-all"/>
          </div>
  
     </div>


          <div className="mt-4 w-full p-2">
       <div className='max-w-full flex flex-col gap-2 sm:gap-4 md:gap-6 lg:flex-row justify-between items-center py-4   '>
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full lg:w-xl p-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none 
              focus:ring focus:ring-blue-300" />
             <div className="flex space-x-4   ">
                <div className="flex space-x-100 "></div>
                  <button className=" lg:hidden bg-blue-500 text-white py-2 px-4 mt-0.5 rounded-2xl hover:bg-blue-600"><Plus/></button>
                 <Link href={'/tempnot'}>
                    <button className=" hidden lg:block bg-blue-500 text-white py-2 px-4 mt-0.5 rounded-2xl hover:bg-blue-600 cursor-pointer">
                      Create New Note</button>
                 </Link>
                  <select className="p-2 bg-gray-200 rounded-2xl hover:bg-gray-300">
                  <option>Sort by Priority</option>
                  <option>Sort by Title</option>
                  <option>Sort by Date</option>
                  <option>Sort by Category</option>
                </select>
                </div>
          </div>
          <div className="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-800 border-t pt-4 mt-2" />
            
             
       </div>

        
    </div>
  )
}

export default DashNav
