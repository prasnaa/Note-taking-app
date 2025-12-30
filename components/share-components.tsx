import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import React from 'react'

const ShareWorkSpace = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-10">

     {/* shared workspace */}
      <div className="bg-blue-50 rounded-2xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 ">Shared Workspace</h2>

        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <Dialog>
            <DialogTrigger className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-all cursor-pointer">
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
