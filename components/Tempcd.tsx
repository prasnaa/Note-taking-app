import React from 'react'
import { Bell, CircleArrowLeft, NotebookText, Languages, ClipboardCheck, Globe } from 'lucide-react'
import Backbtn from './Backbtn'


const cardsdata = [
  {
    id:"Notes",
    title:"Meeting notes",
    icons: NotebookText,
    desc:"Use this template to take organized notes during meetings.",
  },
  {
    id:"Notes",
    title:"Lecture notes",
    icons: NotebookText,
    desc:"Use this template to take organized notes during lecture.",
  },
  {
    id:"Notes",
    title:"Nepali Language",
    icons: NotebookText,
    desc:"Use this template to take organized notes during learning.",
  },
  {
    id:"Notes",
    title:"Weekly Goals",
    icons: NotebookText,
    desc:"Use this template to take organized notes during note keeping.",
  },
  {
    id:"Notes",
    title:"Untitled notes",
    icons: NotebookText,
    desc:"Use this template to take organized notes during meetings.",
  },
  {
    id:"Notes",
    title:"Untitled notes",
    icons: NotebookText,
    desc:"Use this template to take organized notes during meetings.",
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
  {cardsdata.map((card)=>(
    <div className="p-10 xl:w- xl  space-y-4 bg-gray-200 rounded-2xl" key={card.id}>
        <h3 className="text-lg font-semibold text-gray-900 mb-8 flex gap-1.5 ">{<card.icons/>} {card.title}</h3>
        <p className="text-gray-700 mb-20">{card.desc}</p>

        </div>
  )
  
  )}

</div>
</div>

     {/* <div className="mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-3">
          
    <div className="w-65 sm:w-70 bg-gray-200 rounded-xl overflow-hidden shadow-sm mt-10">
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-5 flex gap-2 "> <NotebookText size ={20} />Lecture Notes</h3>
        <p className="text-gray-700 mb-">Use this template to take organized notes during lectures.</p>

        <div className="flex items-center justify-between">    
        </div>
      </div>

      
      
        <div className="py-8 text-center text-sm text-gray-800">
          
        </div>
      </div>

       <div className="w-65 sm:w-70 bg-gray-200 rounded-xl overflow-hidden shadow-sm mt-10">
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-5 flex gap-2 "> <NotebookText size ={20} />Meeting Notes</h3>
        <p className="text-gray-700 mb-">Use this template to take organized notes during meetings.</p>

        <div className="flex items-center justify-between ">    
        </div>
      </div>

      
      
        <div className="py-8 text-center text-sm text-gray-800">
          
        </div>
        
      </div>


      <div className="w-65 sm:w-70 bg-gray-200 rounded-xl overflow-hidden shadow-sm mt-10">
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-5 flex gap-2 "> <Globe  size ={20} />Nepali Language</h3>
        <p className="text-gray-700 mb-">Use this template to take organized notes during meetings.</p>

        <div className="flex items-center justify-between ">    
        </div>
      </div>

     
      
        <div className="py-8 text-center text-sm text-gray-800">
          
        </div>
        
      </div>


      <div className="w-65 sm:w-70 bg-gray-200 rounded-xl overflow-hidden shadow-sm mt-10">
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-5 flex gap-2 "> <ClipboardCheck size ={20}/>Weekly Goals</h3>
        <p className="text-gray-700 mb-">Use this template to take organized notes during meetings.</p>

        <div className="flex items-center justify-between ">    
        </div>
      </div>

     
      
        <div className="py-8 text-center text-sm text-gray-800">
          
        </div>
        
      </div>


      <div className="w-65 sm:w-70 bg-gray-200 rounded-xl overflow-hidden shadow-sm mt-10">
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-5 flex gap-2 "> <NotebookText size ={20} />Meeting Notes</h3>
        <p className="text-gray-700 mb-">Use this template to take organized notes during meetings.</p>

        <div className="flex items-center justify-between ">    
        </div>
      </div>

      
      
        <div className="py-8 text-center text-sm text-gray-800">
          
        </div>
        
      </div>

      
      <div className="w-65 sm:w-70 bg-gray-200 rounded-xl overflow-hidden shadow-sm mt-10">
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-5 flex gap-2 "> <NotebookText size ={20} />Meeting Notes</h3>
        <p className="text-gray-700 mb-">Use this template to take organized notes during meetings.</p>

        <div className="flex items-center justify-between ">    
        </div>
      </div>

      
      
        <div className="py-8 text-center text-sm text-gray-800">
          
        </div>
        
      </div>
      
       
   
      </div> */}

    
    </div>
  )
}

export default Tempcd
