import React from 'react'
import { Bell, ClipboardCheck, Globe, Languages, NotebookText, ChevronLeft, Sparkles} from 'lucide-react'
import Link from 'next/link'

const cardsdata = [
  {
    id:1,
    title:"Meeting notes",
    icons: NotebookText,
    desc:"Use this template to take organized notes during meetings.",
    link:"/tempnot",
    color: "bg-blue-500"
  },
  {
    id:2,
    title:"Lecture notes",
    icons: Globe,
    desc:"Use this template to take organized notes during lecture.",
    color: "bg-purple-500"
  },
  {
    id:3,
    title:"Nepali Language",
    icons: Languages,
    desc:"Use this template to take organized notes during learning.",
    color: "bg-green-500 "
  },
  {
    id:4,
    title:"Weekly Goals",
    icons: ClipboardCheck,
    desc:"Use this template to take organized notes during note keeping.",
    color: "bg-amber-500"
  },
  {
    id:5,
    title:"Research notes",
    icons: NotebookText,
    desc:"Use this template to take organized notes during meetings.",
    color: "bg-rose-500"
  },
  {
    id:6,
    title:"Daily journal",
    icons: NotebookText,
    desc:"Use this template to take organized notes during meetings.",
    color: "bg-cyan-500"
  },
]

const Tempcd = () => {
  return (
    <div className="min-h-screen bg-slate-50 via-blue-50 to-indigo-50">
      <div className='container mx-auto px-4 py-6'>
       
        {/* Header Section */}
        <div className='bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6'>
          <div className='flex justify-between items-center'>
            <div className="flex-1">
              {/* Back Button */}
              <Link href="/dashboard">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-200 group mb-4">
                  <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                  <span className="text-sm font-medium">Back</span>
                </button>
              </Link>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-600 rounded-lg shadow-md">
                  <Sparkles size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <h1 className='text-xl font-bold text-slate-900'>Note Templates</h1>
              </div>
              <p className='text-sm text-slate-600 ml-1'>Choose a pre-built template to start quickly</p>
            </div>
              
            {/* Notification Bell */}
            <div className="relative">
              <button className="relative p-2.5 rounded-xl bg-blue-600  hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
                <Bell size={20} strokeWidth={2} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-pulse">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Template Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {cardsdata.map((card, idx) => (
            <Link key={idx} href={`/tempnot/${card?.id}`}>
              <div className="group relative bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${card.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative flex items-center gap-3">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg">
                      <card.icons size={24} className="text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{card.desc}</p>
                  
                  {/* Use Template Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Click to use
                    </span>
                    <div className="flex items-center gap-1 text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Start</span>
                      <ChevronLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State for More Templates */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm border border-dashed border-slate-300 p-8 text-center">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-slate-100 rounded-full">
              <Sparkles size={24} className="text-slate-400" />
            </div>
          </div>
          <h3 className="text-sm font-semibold text-slate-700 mb-1">More templates coming soon</h3>
          <p className="text-xs text-slate-500">We're working on adding more templates to help you be more productive</p>
        </div>
      </div>
    </div>
  )
}

export default Tempcd