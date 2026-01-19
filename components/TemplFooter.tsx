import React from 'react'
import { Wallpaper, AudioLines, Camera, Share2, Download } from 'lucide-react'

const TempFooter = () => {
  return (
    <div className="bg-linear-to-r from-white via-slate-50 to-white border-t-2 border-slate-200 
    shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.15)] px-8 py-6">

      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* leftside */}
        <div className="flex items-center gap-4">
          
          

          <button className="group flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white hover:bg-linear-to-br
           hover:from-pink-50 hover:to-rose-50 text-slate-700 hover:text-rose-600 font-semibold border-2 border-slate-200
            hover:border-rose-300 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Wallpaper size={20} strokeWidth={2.5} className="group-hover:rotate-6 transition-transform duration-300" />
            <span className="text-sm">Image</span>
          </button>

          <button className="group flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white hover:bg-linear-to-br 
          hover:from-purple-50 hover:to-indigo-50 text-slate-700 hover:text-purple-600 font-semibold border-2
           border-slate-200 hover:border-purple-300 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <AudioLines size={20} strokeWidth={2.5} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm">Audio</span>
          </button>

          <button className="group flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white hover:bg-linear-to-br
           hover:from-blue-50 hover:to-cyan-50 text-slate-700 hover:text-blue-600 font-semibold border-2
            border-slate-200 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Camera size={20} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm">Video</span>
          </button>

        </div>

        {/* rightside */}
        <div className="flex items-center gap-4">

          <button className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500
           hover:from-emerald-600 hover:to-teal-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300
            hover:scale-110 border-2 border-white/20">
            <Share2 size={20} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm">Share</span>
          </button>

          <button className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-linear-to-r from-indigo-600
           to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold shadow-lg hover:shadow-xl 
           transition-all duration-300 hover:scale-110 border-2 border-white/20">
            <Download size={20} strokeWidth={2.5} className="group-hover:translate-y-1 transition-transform duration-300" />
            <span className="text-sm">Export</span>
          </button>

        </div>

      </div>
    </div>
  )
}

export default TempFooter