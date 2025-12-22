import React from 'react'
import { Camera } from 'lucide-react'
import Profilecrds from './Profilecrds'

const Profilebody = () => {
  return (
    <div className='p-6 rounded-2xl border max-w-6xl h-xl mx-auto'>
      <p>Profile Settings</p>
      <div className='relative md:flex w-full items-center justify-center gap-6 md:justify-between'>
        <div className="h-25 w-25 rounded-full bg-gray-300 text-blue-500 font-bold mt-2
        flex items-end justify-end">
          <div className='absolute top-20'><Camera size={20} /></div>

        </div>
        <div className='h-10 w-30 rounded-xl bg-blue-500 p-4 flex items-center justify-between text-white cursor-pointer mt-8 md:mt-0'>
          <button
          type='submit'>
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid border-gray-300 border shadow-sm rounded-lg grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-5xl mx-auto place-items-center">

        

        {/* form 1 */}
        <div className='p-3.5 max-w-fit flex flex-col justify-items-center-safe '>
          <div className="flex flex-col w-96 mt-4 ">
            <label className="text-sm font-medium mb-1 ">Full Name</label>
            <input
              type="text"
              placeholder="Enter your Full name"
              className="p-3 rounded-xl bg-gray-200 placeholder-gray-500 mt-2" 
            />
          </div>

          <div className="flex flex-col w-96 mt-4 ">
            <label className="text-sm font-medium mb-1 w-80">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="p-3 rounded-xl bg-gray-200 placeholder-gray-500 mt-2"
            />
          </div>
          <div className="flex flex-col w-96 mt-4 ">
            <label className="text-sm font-medium mb-1 ">Bio</label>
            <input
              type="text"
              placeholder="Add your bio"
              className="p-3 rounded-xl bg-gray-200 placeholder-gray-500 mt-2 "
            />
          </div>

          
        </div>

      
         {/* form2 */}
        <div className='p-5  max-w-fit py-8 flex flex-col justify-items-center-safe '>
          <div className="flex flex-col w-96 mt-4 ">
            <label className="text-sm font-medium mb-1 ">Contact</label>
            <input
              type="number"
              placeholder="97********"
              className="p-3 rounded-xl bg-gray-200 placeholder-gray-500 mt-2"
            />
          </div>

          <div className="flex flex-col w-96 mt-4 ">
            <label className="text-sm font-medium mb-1 ">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="p-3 rounded-xl bg-gray-200 placeholder-gray-500 mt-2"
            />
          </div>

          <div className="flex flex-col w-96 mt-6 ">
            <label className="text-sm font-medium mb-1 ">Role & Permission</label>
            <select className="p-3 rounded-xl text-gray-500 bg-gray-200">
              <option>Viewer</option>
              <option>Editor</option>
              <option>Admin</option>
            </select>

          </div>
          
        </div>


      </div>

      <div className='h-8 w-25 bg-blue-500 mt-4 rounded-xl p-3 px-8 flex items-center justify-center cursor-pointer text-white'>
        <button
        type='submit'
        >
          Save
        </button>

      </div>



<hr className='h-2 mt-7'/>
      

      <Profilecrds/>

    </div>

  )
}

export default Profilebody
