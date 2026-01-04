'use client'
import cardsdata from '@/lib/data/data'
import { useParams } from 'next/navigation'
import React, {  useState } from 'react'

const Page = () => {
  const params = useParams()
  const id = Number(params.id)

  const note = cardsdata.find((p) => p.id === id)

  const [content, setContent] = useState(note?.desc || '')

  //  run effect only when id changes
  // useEffect(() => {
  //   if (note?.desc) {
  //     setContent(note.desc)
  //   }
  // }, [id])

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-4 bg-gray-100 overflow-hidden">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start typing your notes..."
          className="w-full h-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>
    </div>
  )
}

export default Page

