'use client'

import React, { useEffect, useState } from 'react'
import { Bell, Plus, Search, SlidersHorizontal } from 'lucide-react'
import { get } from 'http'
import { getUser } from '@/lib/auth'
import Link from 'next/link'

const DashNav = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [notificationCount, setNotificationCount] = useState(3)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Simulating getUser - replace with your actual function
      const user = getUser()
      if (user) {
        setTimeout(() => setEmail(user.email), 0)
      }
    }
  }, [])

  return (
    <div className='bg-linear-to-br from-blue-50 via-white to-purple-50 min-h-fit'>
      <div className='container mx-auto px-4 py-6'>
        
        {/* Header Section */}
        <div className='bg-white rounded-2xl shadow-sm border border-slate-200 p-5 mb-5'>
          <div className='flex justify-between items-center'>
            
            {/* Welcome Section */}
            <div>
              <h1 className='text-lg font-semibold text-slate-900 mb-1'>
                Welcome back, {email }
              </h1>
              <p className='text-sm text-slate-600'>
                You have <span className='font-medium text-blue-600'>0 notes</span> and <span className='font-medium text-amber-600'>0 pending tasks</span>
              </p>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button className="relative p-2.5 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
                <Bell size={20} strokeWidth={2} />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-pulse">
                    {notificationCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search and Actions Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
          <div className='flex flex-col lg:flex-row gap-3 items-stretch lg:items-center'>
            
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search notes, tasks, or tags..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl bg-slate-50 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white transition-all"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 items-center">
              
              {/* Mobile Create Button */}
              
              <button className="lg:hidden flex-1 lg:flex-none bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 px-4 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                <Plus size={18} strokeWidth={2.5} />
                <span className="text-sm">New Note</span>
              </button>
             

              {/* Desktop Create Button */}
              <Link href="/tempnot/9">
              <button className="hidden lg:flex bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 px-5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 items-center gap-2 hover:scale-105">
                <Plus size={18} strokeWidth={2.5} />
                <span className="text-sm">Create New Note</span>
              </button>
               </Link>

              {/* Sort Dropdown */}
              <div className="relative flex-1 lg:flex-none">
                <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
                <select className="w-full lg:w-auto pl-9 pr-8 py-2.5 bg-slate-100 border border-slate-300 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all appearance-none cursor-pointer">
                  <option>Sort by Priority</option>
                  <option>Sort by Title</option>
                  <option>Sort by Date</option>
                  <option>Sort by Category</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">▼</div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-3">
            
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-3 border border-blue-200">
              <div className="text-xs font-medium text-blue-700 mb-1">Total Notes</div>
              <div className="text-2xl font-bold text-blue-900">0</div>
            </div>

            <div className="bg-linear-to-br from-amber-50 to-amber-100 rounded-xl p-3 border border-amber-200">
              <div className="text-xs font-medium text-amber-700 mb-1">Pending Tasks</div>
              <div className="text-2xl font-bold text-amber-900">0</div>
            </div>

            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-xl p-3 border border-green-200">
              <div className="text-xs font-medium text-green-700 mb-1">Completed</div>
              <div className="text-2xl font-bold text-green-900">0</div>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-xl p-3 border border-purple-200">
              <div className="text-xs font-medium text-purple-700 mb-1">Categories</div>
              <div className="text-2xl font-bold text-purple-900">5</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashNav