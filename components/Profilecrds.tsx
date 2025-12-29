// 
import React from 'react'
import { FileText, CheckCircle, Share2, NotebookPen } from 'lucide-react'

const cardsdata = [
  {
    id: "1",
    title: "Total Notes",
    number: 24,
    icon: FileText,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "2",
    title: "Completed Tasks",
    number: 18,
    icon: CheckCircle,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "3",
    title: "Shared Notes",
    number: 12,
    icon: Share2,
    color: "from-indigo-600 to-blue-700"
  }
]

const Profilecrds = () => {
  return (
    <div className="mt-4 px-5 ">
      <h2 className="text-xl sm:text-xl font-bold text-gray-900 mb-2">Your Activity</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cardsdata.map((card) => {
          const IconComponent = card.icon
          return (
            <div
              key={card.id}
              className="bg-white rounded-xl p-5 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`inline-flex p- rounded-xl  ${card.color} mb-4 shadow-md group-hover:shadow-lg transition-all`}>
                <NotebookPen size={24} className="text-white" />
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-2xl font-bold text-gray-900">{card.number}</h3>
              </div>
              <p className="text-gray-600 font-medium">{card.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Profilecrds