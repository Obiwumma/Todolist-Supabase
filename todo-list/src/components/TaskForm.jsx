import React from 'react'
import { useState } from 'react'
import supabase from '../supabaseClient';

function TaskForm({ todo, setTodo, handleAdd }) {

  
  return (
    // <!-- Add Task Form -->
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <input 
        type="text" 
        value={todo}
        placeholder="Enter a new task..." 
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition" onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}

export default TaskForm
