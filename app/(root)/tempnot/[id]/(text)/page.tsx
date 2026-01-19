'use client'
import cardsdata from '@/lib/data/data'

import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
  const params = useParams()
  const id = Number(params.id)

  const details = () => {
    return cardsdata.find(note => note.id === id)
  }

  console.log("details Data", details);

  const note = cardsdata.find((p) => p.id === id)

  const [content, setContent] = useState(note?.desc || '')

  return (
    <div className="flex flex-col h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50">
      
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing your notes here... ✍️"
        className="w-full h-full p-8 md:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-0 resize-none focus:outline-none focus:ring-4 focus:ring-blue-400/50
         text-slate-800 text-lg leading-relaxed placeholder:text-slate-400 placeholder:text-xl font-normal shadow-inner transition-all duration-300"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
      />
        
    </div>
  )
}

export default Page