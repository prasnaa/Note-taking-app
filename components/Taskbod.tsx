"use client"

import React from 'react'
import { CircleArrowLeft, Bell, Link, } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import TaskNewForm from './TaskNewForm'

const Taskbod = () => {
  const router = useRouter()

  const [showform, setShowform] = useState(false)


  return (
    <div>
      <div className="mt-5 mb-8 container mx-auto px-6">
        <div className="flex justify-between items-center mt-6">
          
          <div>
            <CircleArrowLeft size={20} className='hover:text-blue-600 transition-colors'/>
            <h1 className='mt-5 font-semibold'>Task Reminder</h1>
            <p className='px-3 text-gray-600'>You have 0 note creations and 0 pending tasks</p>
          </div>

          <div className="flex flex-col items-end  ">
            <Bell size={40} color="blue" className="cursor-pointer text-gray-700 group-hover:text-blue-600 
            p-2 rounded-full bg-white shadow-md group-hover:shadow-lg transition-all mb-3" />

      <button
        className="hidden lg:block bg-blue-500 text-white py-2 px-5 mt-4 rounded-2xl hover:bg-blue-600"
        onClick={() => setShowform(!showform)

  
        }
      >
        {showform ? 'Close Form' : 'Create New Note'}
      </button>
      
        </div>

        </div>

        

        {/* {showform &&  <TaskNewForm />} */}

        {showform ? (<TaskNewForm/>) : (
          <div className="mt-6 w-full">
          <p>Pending Task</p>
          <div className="max-w-full flex flex-col items-center justify-center py-6 border rounded-xl mt-4 text-center text-gray-600">
            <h1>No pending tasks</h1>
          </div>
        </div>)}
        
      </div>
    </div>
  )
}

export default Taskbod
