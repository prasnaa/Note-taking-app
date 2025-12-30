import React from 'react'

const TaskNewForm = () => {
  return (
    <div className="w-8xl max-w-8xl bg-gray-200 rounded-xl p-6 mt-8 px-5">

      <h2 className="text-sm font-semibold mb-5 cursor-pointer">
        Create New Tasks
      </h2>

      <input
        type="text"
        placeholder="Task Title"
        className="w-full mb-6 p-3 rounded-lg border border-gray-400 bg-gray-100 focus:outline-none"
      />

      <select className="w-full mb-8 p-3 rounded-lg border border-gray-400 bg-gray-100 focus:outline-none cursor-pointer">
        <option>No Linked Notes</option>
      </select>

      <div className="flex gap-5 mb-8">
        <div className="flex-1">
          <label className="text-xs block mb-1 cursor-pointer">Due Date</label>
          <input
            type="date"
            className="w-full p-3 rounded-lg border border-gray-400 bg-gray-100 focus:outline-none"
          />
        </div>

        <div className="flex-1">
          <label className="text-xs block mb-1 cursor-pointer">Reminder</label>
          <input
            type="date"
            className="w-full p-3 rounded-lg border border-gray-400 bg-gray-100 focus:outline-none"
          />
        </div>
      </div>

      <select className="w-full mb-6 p-3 rounded-lg border border-gray-400 bg-gray-100 focus:outline-none cursor-pointer">
        <option>Medium Priority</option>
        <option>Low Priority</option>
        <option>High Priority</option>
      </select>

      <div className="flex gap-4">
        <button className="flex-1 bg-blue-400 py-3 rounded-lg font-medium hover:bg-blue-500 text-white cursor-pointer">
          Create Task
        </button>
        <button className="flex-1 bg-gray-300 py-3 rounded-lg font-medium hover:bg-gray-400 cursor-pointer">
          Cancel
        </button>
      </div>

    </div>
  )
}

export default TaskNewForm
