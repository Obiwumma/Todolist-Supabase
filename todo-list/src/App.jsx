import { useState } from 'react'
import './App.css'
import supabase from './supabaseClient.js'

import Header from './components/header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
  const [todoList, setTodoList] = useState([])

  const [todo, setTodo] = useState("")

  console.log(todo);

  const handleAdd = async (e) => {
    e.preventDefault();

    const newTodoData = {
      name:todo,
      isCompleted: false
    }
    const {data, error} = await supabase.from('TodoListItem').insert(newTodoData).single()

    if (error) {
      console.error("Error adding Todo:", error);
    } else {
      setTodo(() => [data])
    }
    fetchTodos()
  }

    useEffect(() => {
      const fetchTodos =async () => {
         const {data, error} = await supabase
        .from("TodoListItem")
        .select("*");

        if (error) {
          console.error("Error fetching Todo:", error);
        } else {
          console.log("Fetched todos:", data);
          setTodoList(data);
        }
      }
      fetchTodos()
      }, []);

       useEffect(() => {
  console.log("Todo names:", todoList.map(todo => todo.name));
}, [todoList]);     


  return (
    <div className='p-8'>
      <Header/>
      <TaskForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TaskList todoList={todoList} setTodoList={setTodoList} />
      <Footer/>
    </div>
  )
}

export default App
