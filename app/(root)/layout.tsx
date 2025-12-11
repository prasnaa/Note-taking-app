import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode})  => {
  return (

    <div className='flex gap-8 justify-between'>
      <Sidebar/>  
       <main className='container mx-auto '>{children}</main>
    </div>
  )
}

export default layout
 