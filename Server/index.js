const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test') 

app.get("/get", (req,res) =>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(error => res.json(error))
})
app.post("/add", (req, res) =>{
    // get the task
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})
app.put("/update/:id", (req,res) =>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id:id}, {done: true}, {new : true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.delete("/delete/:id", (req, res) =>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.listen(8000, ()=> {
    console.log("Server running on port 8000")
})
