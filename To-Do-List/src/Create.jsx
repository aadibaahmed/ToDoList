import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()
  const add_task = () => {
    axios.post('http://localhost:8000/add', {task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  } 
  return(
    <div>
      <input type = "text" placeholder = 'Enter Task' onChange={(e) => setTask(e.target.value)}/> 
      <button type = "button" onClick={add_task}>Add</button>
    </div>
  ) 
}

export default Create