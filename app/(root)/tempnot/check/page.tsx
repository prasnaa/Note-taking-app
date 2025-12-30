'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Pencil, Eraser, Minus, Circle, Square, RotateCcw, RotateCw, Trash2, Save, Download } from 'lucide-react'

const Draw = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState('#000000')
  const [size, setSize] = useState(2)

  // Function to resize canvas dynamically
  const resizeCanvas = () => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // Save current drawing
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    // Resize canvas
    canvas.width = container.offsetWidth
    canvas.height = window.innerHeight * 0.5 // 50% of viewport height

    // Restore drawing
    ctx.putImageData(imageData, 0, 0)
  }

  // Resize canvas on mount and window resize
  useEffect(() => {
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.beginPath()
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    ctx.strokeStyle = color
    ctx.lineWidth = size
    ctx.lineCap = 'round'
    setIsDrawing(true)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    ctx.stroke()
  }

  const stopDrawing = () => setIsDrawing(false)

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <div className="w-full space-y-4 p-4" ref={containerRef}>
      {/* Tools */}
      <div className="w-full bg-gray-100 rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <ToolButton active><Pencil size={18} /></ToolButton>
          <ToolButton><Eraser size={18} /></ToolButton>
          <ToolButton><Minus size={18} /></ToolButton>
          <ToolButton><Circle size={18} /></ToolButton>
          <ToolButton><Square size={18} /></ToolButton>

          <div className="w-px h-6 bg-gray-300 mx-2" />

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Color:</span>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-8 h-8 border rounded-md" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Size:</span>
            <input type="range" min="1" max="10" value={size} onChange={(e) => setSize(Number(e.target.value))} className="accent-blue-500" />
            <span className="text-sm text-gray-700">{size}</span>
          </div>

          <div className="w-px h-6 bg-gray-300 mx-2" />

          <ToolButton><RotateCcw size={18} /></ToolButton>
          <ToolButton><RotateCw size={18} /></ToolButton>
          <ToolButton danger onClick={clearCanvas}><Trash2 size={18} /></ToolButton>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"><Save size={18} />Save</button>
          <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"><Download size={18} />Download</button>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full bg-white rounded-xl border shadow-md cursor-crosshair"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </div>
  )
}

function ToolButton({ children, active = false, danger = false, onClick }: { children: React.ReactNode; active?: boolean; danger?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg border ${active ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} ${danger ? 'text-red-500 hover:bg-red-100' : 'hover:bg-gray-200'} transition`}
    >
      {children}
    </button>
  )
}

export default Draw
