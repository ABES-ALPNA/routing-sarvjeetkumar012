
const express = require("express")
const app = express()
const data=require("./data")

app.get("/about",(req,res)=>{
    res.send(data[0])
})

app.get("/home",(req,res)=>{
    res.send("this is my about page")
})

app.get("/hello",(req,res)=>{
    res.send("this is my hello page")
})

app.listen(5000,() => {
  console.log("Server is running on")
})


// app.post("/sar", (req,res)=>{
//     res.send(user[0]);
// })
