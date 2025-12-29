import React from 'react'
import { CircleArrowLeft, Bell } from 'lucide-react' 

const Profilenav = () => {
  return (
    <div className="flex items-center justify-between mt-3 mx-44 mb-8 sm:mb-10">
      <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-200 group">
        <CircleArrowLeft size={20} className="text-gray-900  hover:text-blue-600 transition-colors" />
        
      </button>
      <div className="relative cursor-pointer group">
        <div className="p-2 rounded-full bg-white shadow-md group-hover:shadow-lg transition-all">
          <Bell size={20} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
        </div>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
      </div>
    </div>
  )
}

export default Profilenav
