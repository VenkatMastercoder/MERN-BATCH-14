const express = require("express");

// Created a HTTP Server
const app = express();

app.get("/", (req, res) => {
  // 1. Data from Frontend

  // 2. DB Logic

  // 3. Data from Frontend
  res.send("Hello Express.!");
});

app.get("/bus",(req,res)=>{
  // 1. Data from Frontend

  // 2. DB Logic
  
  // 3. Data to Frontend
  res.send("Hello Bus-1");
})

app.get("/bus",(req,res)=>{
  // 1. Data from Frontend

  // 2. DB Logic

  // 3. Data to Frontend
  res.send("Hello Bus-2")
})

app.listen(3000);
