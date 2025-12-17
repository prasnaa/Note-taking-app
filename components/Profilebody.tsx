import React from 'react'

const Profilebody = () => {
  return (
    <div>
      <p>Profile Settings</p>
      <div className="h-20 w-20 flex items-center justify-center rounded-full bg-gray-300 text-white font-bold mt-2">
        
      </div>
      <div className="flex flex-col w-2xl mt-6 ">
            <label className="text-sm font-medium mb-1 ">Full Name</label>
            <input
              type="text"
              placeholder="Enter your Full name"
              className="p-3 rounded-xl bg-gray-200 placeholder-gray-500 mt-2"
            />
          </div>

          <div className="flex flex-col w-2xl mt-6 ">
            <label className="text-sm font-medium mb-1 ">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="p-3 rounded-xl bg-gray-200 placeholder-gray-500 mt-2"
            />
          </div>

          <div className="flex flex-col w-2xl mt-6 ">
            <label className="text-sm font-medium mb-1 ">Role & Permission</label>
            <select className="p-3 rounded-xl text-gray-500 bg-gray-200">
               <option>Viewer</option> 
               <option>Editor</option> 
               <option>Admin</option> 
            </select>
           
          </div>
          <div className='h-8 w-25 bg-blue-500 mt-5 rounded-xl p-3 px-8 flex items-center justify-center cursor-pointer text-white'>
            <p>Save</p>

          </div>

          <div className='border w-7xl mt-7'></div>

    </div>
    
  )
}

export default Profilebody
