import { CircleUserRound } from 'lucide-react'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

const ShareWorkSpace = () => {
  return (
    <div>
         {/* BOX-1 */}
  <div className="bg-gray-200 rounded-2xl p-4 h-60">
    <div className="flex justify-between items-center mb-4 ">
      <h3 className="font-medium">Shared Workspace</h3>
      <Dialog >
        <DialogTrigger className='flex item-center gap-2 px-4 py-2 bg-gray-300 rounded-lg hover:bg-blue-400 cursor-pointer'>
         <CircleUserRound size={18} />Invite
        </DialogTrigger>
        <DialogContent className='bg-white shadow-md'>
        <DialogHeader>
          <DialogTitle>ShareWorkSpace</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <form>
            <div>
            <div>
              
                <div className='mb-4'>
                  <label htmlFor='email' className="block mb-1 text-sm font-medium">Email Address</label>
                  <input 
                      id='email'
                      type='email'
                      placeholder='prashna@gmail.com'
                      className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-500'
                    />
                    </div>
                
            </div>
          <div>

          
                <div className='mb-4'>
                  <label htmlFor='message' className="block mb-1 text-sm font-medium">Message (optional)</label>
                  <input 
                      id='messageInput'
                      type='text'
                      placeholder='Your message...'
                      className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300'
                    />
                    </div>
          </div>

              
              <h1>OR Share Link</h1>
              <p>Anyone who has Link will be able to view this.</p>
            
            <div className="flex items-center gap-2 mb-4">
              <input
                  type="text"
                  placeholder="https://app.com/invite/XY547"
                  className="flex-1 p-2 rounded-lg border border-gray-300 bg-gray-200"
                />
                <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
                  Copy
                  </button>
            </div>
              
            

              



                  </div>


                </form>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
        </div>

  {/* BOX-2 */}
              <div className="bg-gray-200 rounded-2xl p-6 h-62 w-xl mt-6">
        <h3 className="font-medium mb-4">Active Collaborators</h3>
        <div className="flex flex-col gap-3">
          {/* collaboration1 */}
          <div className="flex items-center gap-3 border rounded-lg p-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
              P
            </div>
            <div>
              <p className="font-medium">pdhaulakoti18 (You)</p>
              <p className="text-green-500 text-sm">Online</p>
            </div>
          </div>

          {/* collaboration2 */}
          <div className="flex items-center gap-3 border rounded-lg p-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold">
              D
            </div>
            <div>
              <p className="font-medium">Demo Collaborator</p>
              <p className="text-gray-400 text-sm">Offline</p>
            </div>
          </div>
        </div>
        </div>



      
    </div>
  )
}

export default ShareWorkSpace
