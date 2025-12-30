'use client'
import { CircleArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import React from 'react'

const Backbtn = () => { 
    const router = useRouter()
  return (
    <button onClick={()=>(router.push('/'))}>
      <CircleArrowLeft size={20} className="cursor-pointer hover:text-blue-400 transition-colors" />
    </button>
  )
}

export default Backbtn
