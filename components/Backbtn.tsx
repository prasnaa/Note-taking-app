'use client'
import { CircleArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import React from 'react'

const Backbtn = () => { 
    const router = useRouter()
  return (
    <button onClick={()=>(router.back())}>
      <CircleArrowLeft size={20} className="cursor-pointer" />
    </button>
  )
}

export default Backbtn
