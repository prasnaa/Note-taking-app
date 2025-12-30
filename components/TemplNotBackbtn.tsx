'use client'
import { CircleArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import React from 'react'

const TemplNotBackbtn = () => { 
    const router = useRouter()
  return (
    <button onClick={()=>(router.back())}>
      <CircleArrowLeft size={20} className="cursor-pointer hover:text-blue-400 transition-colors" />
    </button>
  )
}

export default TemplNotBackbtn