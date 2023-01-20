const express= require("express")
const cors=require("cors")
const bodyParser= require("body-parser")
require('./database/connection')
require("dotenv").config()

const app=express()

const PORT= process.env.PORT || 5000

//connect server
app.listen(PORT,()=>{
    console.log("server started at port "+ PORT)
})