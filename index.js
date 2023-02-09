// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"

const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
  mongoose.connect("mongodb://localhost:27017/apnaDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log("DB connected")

  })

  const userschema =  new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    collegename: String,
    password : String
  })

//model create

const User = new mongoose.model("User,userSchema")

//Routes
  app.post("/signin", (req, res)=> {
    const {firstname, lastname, email,collegename,password} = req.body
    const user = new User()
    res.send("My API login")
  })

  app.post("/signup", (req, res)=> {
      const {firstname, lastname, email,collegename,password} = req.body
      User.findOne({email:email},  (err,user) => {
        if(user){
          res.send({message: "User already registered"})
        } else {
     
      const user = new User({
      firstname,
      lastname,
      email,
      collegename,
      password,
    })
    user.save( err =>  {
      if(err) {
        res.send(err)
      } else {
        res.send( {message : "Successfull Signup" })
      }
    })
  }
  })
})
  

  app.listen(9000,() => {
    console.log("BE started at port 9000")
  })

  
