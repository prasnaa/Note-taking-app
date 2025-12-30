import React from 'react'
import { Wallpaper, AudioLines, Camera, Share2, Download } from 'lucide-react'

const TempFooter = () => {
  return (
    <div className="bg-white border-t shadow-sm px-8 py-5 ">

      <div className="flex items-center justify-between">

        {/* leftside */}
        <div className="flex items-center gap-6 text-gray-700">

          <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
            <Wallpaper size={18} />
            <span className="text-sm font-medium">Image</span>
          </button>

          <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
            <AudioLines size={18} />
            <span className="text-sm font-medium">Audio</span>
          </button>

          <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
            <Camera size={18} />
            <span className="text-sm font-medium">Video</span>
          </button>

        </div>

        {/* rightside */}
        <div className="flex items-center gap-6 text-gray-700">

          <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
            <Share2 size={18} />
            <span className="text-sm font-medium">Share</span>
          </button>

          <button className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
            <Download size={18} />
            <span className="text-sm font-medium cursor-pointer">Export</span>
          </button>

        </div>

      </div>
    </div>
  )
}

export default TempFooter
