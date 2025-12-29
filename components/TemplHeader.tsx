'use client'
import React, { useState } from 'react'
import { CircleArrowLeft, Tag, TextCursor, PenTool, BrainCircuit, Download } from 'lucide-react'
import clsx from 'clsx'
import Link from 'next/link'

const TempHeader = () => {
  const [priority, setPriority] = useState('Medium')

  return (
    <div className="bg-white px-6 py-4 border-b">

      {/* top bar */}
      <div className="flex items-center justify-between">

        {/* back button */}
        <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 ">
          <CircleArrowLeft size={20} />
          <span className="text-sm font-medium ">Back</span>
        </button>

        {/* right buttons */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-600 text-sm font-medium flex gap-1">
            <TextCursor size={18} /> Text
          </button>
         <Link href={'/tempnot/check'}>
            <button className="px-4 py-2 rounded-lg bg-blue-200 text-gray-700 text-sm flex gap-1">
              <PenTool size={18} /> Drawing
            </button>
         </Link>
          <button className="px-4 py-2 rounded-lg bg-purple-100 text-purple-600 text-sm flex gap-1">
            <BrainCircuit size={18} /> AI Summarize
          </button>
          <button className="px-4 py-2 rounded-lg bg-green-100 text-green-600 text-sm flex gap-1">
            <Tag size={18} /> Auto Tag
          </button>
          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium flex gap-1">
            <Download size={18} /> Save
          </button>
        </div>
      </div>

      {/* title */}
      <h1 className="mt-2 text-2xl font-semibold text-gray-900">
        Untitled Note
      </h1>

      {/* options row */}
      <div className="mt-4 flex items-center gap-4">

        {/* category */}
        <select className="h-9 px-3 rounded-full border bg-white text-gray-700 text-sm">
          <option>General</option>
          <option>Education</option>
          <option>Work</option>
          <option>Personal</option>
          <option>Research</option>
        </select>

        {/* priority */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={clsx(
            'h-9 px-4 rounded-full text-sm font-medium',
            {
              'bg-green-100 text-green-700': priority === 'Low',
              'bg-yellow-100 text-yellow-700': priority === 'Medium',
              'bg-red-100 text-red-700': priority === 'High',
            }
          )}
        >
          <option value="Low" className=''>Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>

        {/* tag */}
        <div className="flex items-center gap-2 text-gray-500 cursor-pointer underline">
          <Tag size={18} />
          <span className="text-sm">Add tag...</span>
        </div>

      </div>
    </div>
  )
}

export default TempHeader
