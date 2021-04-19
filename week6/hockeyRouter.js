const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const hockey = [

    {type: "left-wing", _id: uuidv4()},
    {type: "center", _id: uuidv4()},
    {type: "right-wing", _id: uuidv4()},
    {type: "left-defense", _id: uuidv4()},
    {type: "right-defense", _id: uuidv4()},
    {type: "goalie", _id: uuidv4()}
]

router.route("/").get((req,res) => {
    res.send(hockey)
})

router.route("/:id").get((req, res) => {
    const id = req.params.id
    const foundhockey = hockey.find(hockey => hockey._id === id)
    res.send(foundhockey)
})


router.route("/search/type").get((req, res) => {
    const type = req.query.type
    const filteredHockey = hockey.filter(hockey => hockey.type === type)
    res.send(filteredHockey)
})




module.exports = router