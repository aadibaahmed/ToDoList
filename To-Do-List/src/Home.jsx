import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

function Home() {
    const [todo, setTodo] = useState([])

    useEffect(() =>{
      axios.get('http://localhost:8000/get')
      .then(result => setTodo(result.data))
      .catch(error => console.log(error))
    }, [])

    const handleEdit = (id) => {
      axios.put('http://localhost:8000/update/'+id)
      .then(result => 
        location.reload()
      )
      .catch(error => console.log(error))
    }
    const handleDelete = (id) => {
      axios.delete('http://localhost:8000/delete/'+id)
      .then(result => 
        location.reload()
      )
      .catch(error => console.log(error))
    }
  return(
    <div>
      <h2>To-Do List</h2>
      <Create />
      <br/>
      {
        todo.length === 0 
        ?
        <div><h2>No Tasks</h2></div>
        :
        todo.map(todo => (
            <div key = {todo.id}>
              <div id="tasks">
              <button class = "finished_tasks" onClick={() => handleEdit(todo._id)}></button>

                <div class = {todo.task ? "tasks" : ""} style = {{textDecoration: todo.done ? "line-through" : "none"}}>{todo.task}</div>
                <div>
                  <button onClick={() => handleDelete(todo._id)}></button> 
                </div> 
              </div>
            </div>
        ))
    }
    </div>
  )
}

export default Home