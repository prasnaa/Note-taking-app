'use client'
import cardsdata from '@/lib/data/data'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, {  useState } from 'react'

const Page = () => {
  const params = useParams()
  const id = Number(params.id)

  const details = () => {
  return cardsdata.find(note => note.id === id)
}

console.log("details Data", details);



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
      
        
       
          <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start typing your notes..."
          className="w-svw h-svh p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400  text-black"
        />
        
        </div>
      
   
  )
}

export default Page

