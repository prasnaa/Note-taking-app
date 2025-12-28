import TempFooter from '@/components/TempFooter'
import TempHeader from '@/components/TempHeader'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TempHeader />

      <main className="flex-1 container mx-auto p-8 ">
        {children}
      </main>

      <footer>
        <TempFooter />
      </footer>
    </div>
  )
}

export default layout
