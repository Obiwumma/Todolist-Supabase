import { useState } from 'react'
import './App.css'
import supabase from './supabaseClient.js'

import Header from './components/header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList.jsx'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
  const [todoList, setTodoList] = useState([])

  const [todo, setTodo] = useState("")


  const handleAdd = async (e) => {
    e.preventDefault();

    const newTodoData = {
      name:todo,
      isCompleted: false
    }
    const {data, error} = await supabase.from('TodoListItem').insert(newTodoData).single()
    fetchTodos()
    if (error) {
      console.error("Error adding Todo:", error);
    } else {
      setTodo(() => [data])
    }
    
  }
  const fetchTodos = async () => {
         const {data, error} = await supabase
        .from("TodoListItem")
        .select("*");

        if (error) {
          console.error("Error fetching Todo:", error);
        } else {
          // console.log("Fetched todos:", data);
          setTodoList(data);
        }
      }

    useEffect(() => {
      fetchTodos()
      }, []);

    const updateTodo = async () => {
      const { data, error } = await supabase.from('TodoListItem').update({name:"stop"}).eq("id",11).select()
      console.log(data);
      
    }
    const deleteTodo = async (id) => {
      const { data, error } = await supabase.from('TodoListItem').delete().eq("id",id).select()
      
       if (error) {
        console.error("Error deleting todo:", error);
      } else {
        console.log("Deleted row:", data);
      }
      fetchTodos()
    }

//   useEffect(() => {
//   console.log("Todo names:", todoList.map(todo => todo.name));
// }, [todoList]);     


  return (
    <div className='p-8'>
      <Header/>
      <TaskForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TaskList todoList={todoList} setTodoList={setTodoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <Footer/>
    </div>
  )
}

export default App
