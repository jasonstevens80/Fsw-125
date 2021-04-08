// File which handle all todos related task
const express = require("express");
const todoRouter = express.Router(); // my router variable to handle routes, when constructor is called it returns router variable
const { v4: uuidv4 } = require('uuid'); // My variable importing uuid

// Here is an array of todos data for my server
const todos = [
  {
     title: "Clean House",
     description: "Dishes, Laundry, vacuum, dusting",
     image: "https://tse3.mm.bing.net/th?id=OIP.s3LUROxGbQQH_pHPut8VXwHaHq&pid=Api&P=0&w=300&h=300",
     completed: true,
    _id: uuidv4(),
  },
  {
    title: "Finish Homework",
    description: "Fsw-125, FSw-130",
    image: "http://i.huffpost.com/gen/823534/images/o-HOMEWORK-PRESCHOOL-facebook.jpg",
    completed: true,
    _id: uuidv4(),
  },
  {
    title: "Excercise Dog",
    description: "Walk, dog park, mental training",
    image: "https://uscanine.com/wp-content/uploads/workout-with-your-dog.png",
    completed: false,
    _id: uuidv4(),
  },
  {
    title: "Relax",
    description: "Hockey, Tv show, music",
    image: "https://tse1.mm.bing.net/th?id=OIP.xFvXMzDXgDBF3mhFR-VtmQHaDt&pid=Api&P=0&w=332&h=167",
    completed: false,
    _id: uuidv4(),
  },
];

// Routes

//Get  all request
todoRouter.get("/", (req, res) => { // a route to get the data from array
  res.send(todos);
});
//Get one request
todoRouter.get("/:todosId", (req, res) => {
    const todosId = req.params.todosId
    const foundtodos = todos.find(todos => todos._id === todosId)
    res.send(foundtodos)
})
//Post request
todoRouter.post("/", (req, res) => { // a route to post data to the array
  const newtodos = req.body; //to add an id to new objects added to array
  newtodos._id = uuidv4();
  todos.push(newtodos);
  res.send(
    `Successfully added ${newtodos.title} to the task list!`
  );
});
//Delete request
todoRouter.delete("/:todosId", (req, res) => {
const todosId = req.params.todosId // pulling & keeping track of Id 
const todosIndex = todos.findIndex(todos => todos._id === todosId) //finding the index in the list
todos.splice(todosIndex, 1) // delete one item from list
res.send("Successfully deleted todos!")
})
//Put request
todoRouter.put("/:todosId", (req, res) => {
    const todosId = req.params.todosId
    const updateObject = req.body
    const todosIndex = todos.findIndex(todos => todos._id === todosId)
    const updatedtodos = Object.assign(todos[todosIndex], updateObject) 
    //First param is finding the object and second is what we'd like to replace it with merging both params
    res.send(updatedtodos)
})

module.exports = todoRouter; // exporting variable to server to handle request