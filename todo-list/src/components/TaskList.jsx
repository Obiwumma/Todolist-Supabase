
function TaskList({todoList}) {
  
  
  return (
    // <!-- Task List -->
    <ul className="space-y-3">
      {/* <!-- Task Item --> */}
      {todoList.map((todo) => (
        <li className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm transition " key={todo.id}>
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
          <span className="text-gray-700">{todo.name}</span>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition">Edit</button>
          <button className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white transition">Delete</button>
        </div>
      </li>
      ))}

    </ul>

  )
}

export default TaskList
