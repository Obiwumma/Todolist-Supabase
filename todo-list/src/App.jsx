import { useState } from 'react'
import './App.css'
import supabase from './supabaseClient.js'

import Header from './components/header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <div className='p-8'>
      <Header/>
      <TaskForm/>
      <TaskList todoList={todoList} setTodoList={setTodoList} />
      <Footer/>
    </div>
  )
}

export default App
