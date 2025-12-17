import Profilebody from '@/components/Profilebody'
import Profilecrds from '@/components/Profilecrds'
import Profilenav from '@/components/Profilenav'
import React from 'react'

const page = () => {
  return (
    <div>
      <Profilenav/>
      <Profilebody/>
      <Profilecrds/>
    </div>
  )
}

export default page
 