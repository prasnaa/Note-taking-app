import React from 'react'
import { Bell, CircleArrowLeft, NotebookText, Languages, ClipboardCheck, Globe } from 'lucide-react'
import Backbtn from './Backbtn'
import Link from 'next/link'


const cardsdata = [
  {
    id:"Notes",
    title:"Meeting notes",
    icons: NotebookText,
    desc:"Use this template to take organized notes during meetings.",
    link:"/tempnot"
  },
  {
    id:"Notes",
    title:"Lecture notes",
    icons: NotebookText,
    desc:"Use this template to take organized notes during lecture.",
    link:"/tempnot"
  },
  {
    id:"Notes",
    title:"Nepali Language",
    icons: NotebookText,
    desc:"Use this template to take organized notes during learning.",
    link:"/tempnot"
  },
  {
    id:"Notes",
    title:"Weekly Goals",
    icons: NotebookText,
    desc:"Use this template to take organized notes during note keeping.",
    link:"/tempnot"
  },
  {
    id:"Notes",
    title:"Untitled notes",
    icons: NotebookText,
    desc:"Use this template to take organized notes during meetings.",
    link:"/tempnot"
  },
  {
    id:"Notes",
    title:"Untitled notes",
    icons: NotebookText,
    desc:"Use this template to take organized notes during meetings.",
    link:"/tempnot"
  },
 
 
]

const Tempcd = () => {
  return (
    <div>
      <div className='mt-6 mb-8 container mx-auto px-4'>
       

     <div className='flex justify-between items-center px-1.5 mt-8'>
       <div>
        
        {/* back botton use process */}
        <Backbtn/>
          
          <h1>Note Templates</h1>
             <p>Choose a pre-built templates to start quickly</p>
       </div>
           <div className=" space-x-100">
           <Bell size={30} color="blue" className="cursor-pointer"/>
           </div>
      </div>

<div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-3 " >
  {cardsdata.map((card, idx)=>(
    <Link key={idx + 1} href={card?.link} >
      <div className="p-10 xl:w- xl  space-y-4 bg-gray-200 rounded-2xl" >
          <h3 className="text-lg font-semibold text-gray-900 mb-8 flex gap-1.5 ">{<card.icons/>} {card.title}</h3>
          <p className="text-gray-700 mb-20">{card.desc}</p>
  
          </div>
    </Link>
  )
  
  )}

</div>
</div>

    
    </div>
  )
}

export default Tempcd
