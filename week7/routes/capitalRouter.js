// File which handle all capital related task
const express = require("express");
const capitalRouter = express.Router(); // my router variable to handle routes, when constructor is called it returns router variable
const { v4: uuidv4 } = require('uuid'); // My variable importing uuid

// Here is an array of capital data for my server
const capitals = [
  {
    capital: "Captain America",
    active: "True",
    drafted: 1941,
    position: "Strength",
    _id: uuidv4(),
  },
  {
    capital: "Iron Man",
    active: "False",
    drafted: 1963,
    position: "Flight",
    _id: uuidv4(),
  },
  {
    capital: "Thor",
    active: "True",
    drafted: 1962,
    position: "Electric manipulation",
    _id: uuidv4(),
  },
  {
    capital: "Hulk",
    active: "True",
    drafted: 1962,
    position: "Strength",
    _id: uuidv4(),
  },
  {
    capital: "Vision",
    active: "false",
    drafted: 1968,
    position: "Flight",
    _id: uuidv4(),
  },
  {
    capital: "Scarlet Witch",
    active: "True",
    drafted: 1964,
    position: "Telekinesis",
    _id: uuidv4(),
  },
  {
    capital: "Falcon",
    active: "True",
    drafted: 1969,
    position: "Flight",
    _id: uuidv4(),
  },
  {
    capital: "Black Widow",
    active: "false",
    drafted: 1964,
    position: "Espionage",
    _id: uuidv4(),
  },
  {
    capital: "Captain Marvel",
    active: "True",
    drafted: 1964,
    position: "Flight",
    _id: uuidv4(),
  },
];

// Routes

//Get  all request
capitalRouter.get("/", (req, res) => { // a route to get the data from array
  res.send(capitals);
});
//Get one request
capitalRouter.get("/:capitalId", (req, res, next) => {
    const capitalId = req.params.capitalId
    const foundcapital = capitals.find(capital => capital._id === capitalId)
    if(!foundcapital) {
      const error = new Error(`The capital with id of ${capitalId} NOT FOUND.`)
      res.status(500)
      return next(error)
    }
    res.status(500).send(foundcapital)
})
// Search power
capitalRouter.get("/search/capital", (req, res) => {
  const capital = req.query.type.toLowerCase();
  console.log(capital)
  const filteredPower = capitals.filter(newCapital => newCapital.capital.toLowerCase().includes(capital) ? newCapital : null);
  res.send(filteredPower);
});
//Post request
capitalRouter.post("/", (req, res) => { // a route to post data to the array
  const newCapital = req.body; //to add an id to new objects added to array
  newCapital._id === uuidv4();
  capitals.push(newCapital);
  res.status(201).send(newCapital);
});
//Delete request
capitalRouter.delete("/:capitalId", (req, res) => {
const capitalId = req.params.capitalId // pulling & keeping track of Id 
const capitalIndex = capitals.findIndex(capital => capital._id === capitalId) //finding the index in the list
capitals.splice(capitalIndex, 1) // delete one item from list
res.send("Successfully deleted capital!")
})
//Put request
capitalRouter.put("/:capitalId", (req, res) => {
    const capitalId = req.params.capitalId
    const updateObject = req.body
    const capitalIndex = capitals.findIndex(capital => capital._id === capitalId)
    const updatedCapital = Object.assign(capitals[capitalIndex], updateObject) 
    //First param is finding the object and second is what we'd like to replace it with merging both params
    res.status(201).send(updatedCapital)
})

module.exports = capitalRouter; // exporting variable to server to handle request