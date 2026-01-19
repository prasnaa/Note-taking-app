'use client'
import React, { useState } from 'react'
import { Tag, TextCursor, PenTool, BrainCircuit, Download, CircleArrowLeftIcon, Plus, X } from 'lucide-react'
import Link from 'next/link'
import Backbtn from './Backbtnbar'

const TempHeader = () => {
  const [priority, setPriority] = useState('Medium')
  const [title, setTitle] = useState('Untitled Note')
  const [isEditing, setIsEditing] = useState(false)
  const [tags, setTags] = useState<string[]>([])
  const [showTagInput, setShowTagInput] = useState(false)
  const [newTag, setNewTag] = useState('')

const addTag = () => {
  const trimmed = newTag.trim()
  if (trimmed && !tags.includes(trimmed)) {
    setTags([...tags, trimmed])
    setNewTag('')
    setShowTagInput(false)
  }
}


  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="bg-linear-to-br from-slate-50 to-blue-50 shadow-sm">
      
      {/* Top Navigation Bar */}
      <div className="px-6 py-4 border-b border-slate-200 bg-white/60 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left - Back Button */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-white hover:shadow-sm transition-all duration-200 group">
            <Backbtn/>
          </button>

          {/* Right - Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="px-4 py-2.5 rounded-lg bg-white hover:bg-blue-50 text-blue-600 text-sm font-medium flex items-center gap-2 
            shadow-sm hover:shadow transition-all duration-200 border border-blue-200">
              <TextCursor size={18} /> 
              <span>Text</span>
            </button>

            <Link href="/tempnot/sketch">
            <button className="px-4 py-2.5 rounded-lg bg-white hover:bg-purple-50 text-slate-700 hover:text-purple-600 text-sm font-medium flex items-center gap-2 shadow-sm hover:shadow transition-all duration-200 border border-slate-200">
              <PenTool size={18} /> 
              <span>Drawing</span>
            </button>
            </Link>

            <button className="px-4 py-2.5 rounded-lg bg-white hover:bg-purple-50 text-purple-600 text-sm font-medium flex items-center gap-2 shadow-sm hover:shadow transition-all duration-200 border border-purple-200">
              <BrainCircuit size={18} /> 
              <span className="hidden sm:inline">AI Summarize</span>
              <span className="sm:hidden">AI</span>
            </button>

            <button className="px-4 py-2.5 rounded-lg bg-white hover:bg-green-50 text-green-600 text-sm font-medium flex items-center gap-2 shadow-sm hover:shadow transition-all duration-200 border border-green-200">
              <Tag size={18} /> 
              <span className="hidden sm:inline">Auto Tag</span>
            </button>

            <button className="px-5 py-2.5 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
             text-white text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200">
              <Download size={18} /> 
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Title and Metadata Section */}
      <div className="px-6 py-6">
        
        {/* Title */}
        <div className="mb-5">
          {isEditing ? (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setIsEditing(false)}
              autoFocus
              className="text-3xl font-bold text-slate-900 border-b-2 border-blue-500 outline-none w-full bg-transparent pb-2 placeholder-slate-400"
              placeholder="Enter note title..."
            />
          ) : (
            <h1
              onClick={() => setIsEditing(true)}
              className="text-2xl font-bold text-slate-900 cursor-text hover:text-blue-600 transition-colors pb-2 border-b-2 border-transparent hover:border-slate-200"
            >
              {title}
            </h1>
          )}
        </div>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-3 w-full px-1 h-8">
          
          {/* Category Selector */}
          <div className="relative">
            <select className="h-10 pl-4 pr-10 rounded-full border-2 border-slate-200 bg-white text-slate-700 
            text-sm font-medium cursor-pointer hover:border-blue-400 focus:border-blue-500 focus:outline-none transition-colors appearance-none shadow-sm">
              <option>📁 General</option>
              <option>🎓 Education</option>
              <option>💼 Work</option>
              <option>👤 Personal</option>
              <option>🔬 Research</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
          </div>

          {/* Priority Selector */}
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={`h-10 px-4 pr-10 rounded-full text-sm font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all appearance-none shadow-sm ${
              priority === 'Low'
                ? 'bg-green-100 text-green-700 border-2 border-green-300 focus:ring-green-500'
                : priority === 'Medium'
                ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-300 focus:ring-yellow-500'
                : 'bg-red-100 text-red-700 border-2 border-red-300 focus:ring-red-500'
            }`}
          >
            <option value="Low">🟢 Low Priority</option>
            <option value="Medium">🟡 Medium Priority</option>
            <option value="High">🔴 High Priority</option>
          </select>

          {/* Divider */}
          <div className="h-6 w-px bg-slate-300"></div>

          {/* Tags Section */}
          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm border border-blue-200"
              >
                <Tag size={14} />
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                >
                  <X size={14} />
                </button>
              </span>
            ))}

            {/* Add Tag Button/Input */}
            {showTagInput ? (
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onBlur={addTag}
                onKeyPress={(e) => e.key === 'Enter' && addTag()}
                autoFocus
                placeholder="Tag name..."
                className="h-9 px-3 rounded-full border-2 border-blue-400 bg-white text-sm outline-none w-32 shadow-sm"
              />
            ) : (
              <button
                onClick={() => setShowTagInput(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-600 hover:text-blue-600 text-sm font-medium border-2 border-dashed border-slate-300 hover:border-blue-400 transition-all shadow-sm"
              >
                <Plus size={16} />
                <span>Add tag</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TempHeader