// import { CircleUserRound } from 'lucide-react'
// import React from 'react'
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

// const ShareWorkSpace = () => {
//   return (
//     <div>
//          {/* BOX-1 */}
//   <div className="bg-gray-200 rounded-2xl p-4 h-60">
//     <div className="flex justify-between items-center mb-4 ">
//       <h3 className="font-medium">Shared Workspace</h3>
//       <Dialog >
//         <DialogTrigger className='flex item-center gap-2 px-4 py-2 bg-gray-300 rounded-lg hover:bg-blue-400 cursor-pointer'>
//          <CircleUserRound size={18} />Invite
//         </DialogTrigger>
//         <DialogContent className='bg-white shadow-md'>
//         <DialogHeader>
//           <DialogTitle>ShareWorkSpace</DialogTitle>
//         </DialogHeader>
//         <DialogDescription>
//           <form>
//             <div>
//             <div>
              
//                 <div className='mb-4'>
//                   <label htmlFor='email' className="block mb-1 text-sm font-medium">Email Address</label>
//                   <input 
//                       id='email'
//                       type='email'
//                       placeholder='prashna@gmail.com'
//                       className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-500'
//                     />
//                     </div>
                
//             </div>
//           <div>

          
//                 <div className='mb-4'>
//                   <label htmlFor='message' className="block mb-1 text-sm font-medium">Message (optional)</label>
//                   <input 
//                       id='messageInput'
//                       type='text'
//                       placeholder='Your message...'
//                       className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-300'
//                     />
//                     </div>
//           </div>

              
//               <h1>OR Share Link</h1>
//               <p>Anyone who has Link will be able to view this.</p>
            
//             <div className="flex items-center gap-2 mb-4">
//               <input
//                   type="text"
//                   placeholder="https://app.com/invite/XY547"
//                   className="flex-1 p-2 rounded-lg border border-gray-300 bg-gray-200"
//                 />
//                 <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
//                   Copy
//                   </button>
//             </div>
              
            

              



//                   </div>


//                 </form>
//               </DialogDescription>
//             </DialogContent>
//           </Dialog>
//         </div>
//         </div>

//   {/* BOX-2 */}
//               <div className="bg-gray-200 rounded-2xl p-6 h-62 w-xl mt-6">
//         <h3 className="font-medium mb-4">Active Collaborators</h3>
//         <div className="flex flex-col gap-3">
//           {/* collaboration1 */}
//           <div className="flex items-center gap-3 border rounded-lg p-3">
//             <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
//               P
//             </div>
//             <div>
//               <p className="font-medium">pdhaulakoti18 (You)</p>
//               <p className="text-green-500 text-sm">Online</p>
//             </div>
//           </div>

//           {/* collaboration2 */}
//           <div className="flex items-center gap-3 border rounded-lg p-3">
//             <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold">
//               D
//             </div>
//             <div>
//               <p className="font-medium">Demo Collaborator</p>
//               <p className="text-gray-400 text-sm">Offline</p>
//             </div>
//           </div>
//         </div>
//         </div>



      
//     </div>
//   )
// }

// export default ShareWorkSpace
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import React from 'react'

const ShareWorkSpace = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-10">

     {/* shared workspace */}
      <div className="bg-blue-50 rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">Shared Workspace</h2>

        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <Dialog>
            <DialogTrigger className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-all ">
              Invite
            </DialogTrigger>
            <DialogContent className="bg-white rounded-xl p-6 shadow-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold text-gray-800">Invite Collaborator</DialogTitle>
                <DialogDescription className="text-gray-600">
                  Enter email address to invite or share link.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-4 mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message (optional)"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700 mb-2 font-medium">OR Share Link</p>
                <p className="text-gray-500 text-sm mb-2">Anyone who has the link will be able to view this.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
                  Copy
                </button>
              </div>
            </DialogContent>
          </Dialog>

          <span className="text-gray-700 font-medium mt-2 md:mt-0">ShareWorkSpace</span>
        </div>
      </div>






      {/* active collab */}
      <div className="bg-gray-50 rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Active Collaborators</h3>

        {/* Collaboration 1 */}
        <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all mb-3">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
            P
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900">pdhaulakoti18 (You)</p>
            <p className="text-sm text-green-600">Online</p>
          </div>
        </div>

        {/* Collaboration 2 */}
        <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-400 text-white rounded-full font-bold">
            D
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900">Demo Collaborator</p>
            <p className="text-sm text-gray-500">Offline</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ShareWorkSpace
