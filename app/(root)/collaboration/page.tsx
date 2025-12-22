import ShareWorkSpace from '@/components/share-components'
import React, { Suspense } from 'react'
import { CircleArrowLeft } from 'lucide-react'
import Commentfeatures from '@/components/comments-features'


const collaboration = () => {
  return (
    <div id='parents-div' className='ml-8'>
      <header id="title">
        <div>
          <div className="flex items-center gap-2 mb-4 mt-4">
            <CircleArrowLeft size={20} className="cursor-pointer" />
            <span className="text-sm">Back</span>
          </div>

          <h1 className="text-lg font-semibold">Collaboration</h1>
          <p className="text-sm text-gray-600">
            Work together in real-time with your team
          </p>
        </div>

      </header>

      <section id='card-section' className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <Suspense fallback="loading....">
            <div id="card-1" className='h-60 w-xl mt-6'>
              <ShareWorkSpace />
            </div>
          </Suspense>
          <Suspense fallback="loading....">
            <div id="card-2" className='h-60 w-1xl'></div>
          </Suspense>
        </div>
        <div>
          <Suspense fallback="loading....">
            <div id="card-3" className='h-64 w-60'>
              <Commentfeatures />
            </div>
          </Suspense>
          <Suspense fallback="loading....">
            <div id="card-4" className='h-64 w-60'></div>
          </Suspense>
        </div>
      </section>
    </div>
  )
}

export default collaboration
