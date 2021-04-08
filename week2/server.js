const express = require("express")
const app = express()
let hockey = [
    "Top 10 Best Records In Single Season",
    {name: "Montreal Canadieans, 1976-1977", rating :1},
    {name: "Detroit Red Wings, 1995-1996", rating :2},
    {name: "Montreal Canadieans, 1977-1978", rating :3},
    {name: "Tampa Bay Lightning, 2018-2019",rating  :4},
    {name: "Montreal Canadieans, 1975-1976", rating :5},
    {name: "Detroit Red Wings, 2005-2006, ", rating :6},
    {name: "Boston Bruins, 1970-1971", rating :7},
    {name: "Washington Capitals, 2009-1010", rating :8},
    {name: "Montreal Canadieans, 1972-1973", rating :9},
    {name: "Washington Capitals, 2015-2016", rating :10}
]
let goals =[
    "Top 10 Goal Scorers In NHL History",
    {Name: "Wayne Gretzky, 894", rating :1},
    {Name: "Gordie Howe, 801", rating :2},
    {Name: "Jarmoir Jagr, 766", rating :3},
    {Name: "Brett Hull, 741", rating :4},
    {Name: "Marcel Dionne, 731", rating :5},
    {Name: "Alex Ovechkin, 720", rating :6},
    {Name: "Phil Esposito, 717", rating :7},
    {Name: "Mike Gartner, 708", rating :8},
    {Name: "Mark Messier, 694", rating :9},
    {Name: "Steve Yzerman, 692", rating :10}
]
let points =[
    "Top 10 Career Points In NHL History",
    {Name: "Wayne Gretzky, 2,857", rating :1},
    {Name: "Jarmoir Jagr, 1,921", rating :2},
    {Name: "Mark Messier, 1,887", rating :3},
    {Name: "Gordie Howe, 1,850", rating :4},
    {Name: "Ron Francis, 1,798", rating :5},
    {Name: "Marcel Dionne, 1,771", rating :6},
    {Name: "Steve Yzerman, 1,755", rating :7},
    {Name: "Mario Lemieux, 1,723", rating :8},
    {Name: "Joe Sakic, 1,641", rating :9},
    {Name: "Phil Esposito, 1,590", rating :10}
]
app.get('/hockey',(req,res) =>{
    res.send(hockey)
})
app.get('/goals',(req,res) =>{
    res.send(goals)
})
app.get('/points',(req,res) =>{
    res.send(points)
})
app.listen(7030, () => {
    console.log(`App is listening on port 7030`)
  })