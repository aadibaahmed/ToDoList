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
  return(
    <div>
      <h2>To-Do List</h2>
      <Create />
      {

        todo.length === 0 
        ?
        <div><h2>No Tasks</h2></div>
        :
        todo.map(todo => (
            <div id ="task">
                {todo.task}
            </div>
        ))
      }
    </div>
  )
}

export default Home