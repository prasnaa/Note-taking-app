import React from 'react'
import { MessageCircleMore } from 'lucide-react'

const Commentfeatures = () => {
  return (
    <div>
      {/* BOX-3 */}
  <div className="bg-gray-100 shadow-md rounded-2xl p-6 h-58 w-xl ">
  <h3 className="font-medium mb-6 flex gap-2">
  <MessageCircleMore size={18} />Live Comments and Discussion
  </h3>

{/* type and send gap */}
  <div className="flex gap-4"> 
    <input
      type="text"
      placeholder="Type something..........."
      // inside the type
      className="flex-1.5 p-2 rounded-lg border"/>
    <button className="px-4 rounded-lg border">
      Send
    </button>
  </div>
</div>

 {/* BOX-4 */}
<div className="bg-blue-200 rounded-2xl p-8 h-65 w-xl mt-6">
  <h3 className="font-medium text-blue-600">
    Real Time Collaboration Features
  </h3>
  <ul className="list-disc list-inside text-blue-600 space-y-1">
    <li>Live editing with multiple users</li>
    <li>Instant comments and feedback</li>
    <li>Version control for teamwork</li>
    <li>Role-based access control</li>
    <li>Shared workspace organization</li>
  </ul>
</div>
    </div>
  )
}

export default Commentfeatures
