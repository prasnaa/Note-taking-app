import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode})  => {
  return (

    <div className='flex gap-8  overflow-hidden mx-auto '>
     <div className='fixed top-0 left-0'> <Sidebar/> </div> 
       <main className='container mx-auto lg:ml-64 '>{children}</main>
    </div>
  )
}

export default layout
 