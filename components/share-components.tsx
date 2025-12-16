import { CircleUserRound } from 'lucide-react'
import React from 'react'

const ShareWorkSpace = () => {
  return (
    <div>
         {/* BOX-1 */}
  <div className="bg-gray-200 rounded-2xl p-4 h-60 ">
  <div className="flex justify-between items-center mb-4">
    <h3 className="font-medium">Shared Workspace</h3>
    <button className="flex items-center gap-2 border px-6 py-2 rounded-xl text-sm hover:bg-blue-400 ">
     <CircleUserRound size={18} />Invite
    </button>
  </div>
  </div>

  {/* BOX-2 */}
<div className="bg-gray-200 rounded-2xl p-6 h-60 w-xl mt-6">
  <h3 className="font-medium">
    Active Collaborators
  </h3>
</div>



      
    </div>
  )
}

export default ShareWorkSpace
