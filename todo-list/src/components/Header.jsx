import React from 'react'

function Header() {
  return (
    // <!-- Header -->
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">My Todo List</h1>
      <button className="px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
        + Add Task
      </button>
    </div>
  )
}

export default Header
