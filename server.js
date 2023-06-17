const express=require('express')
const bodyParser=require('body-parser')
require('dotenv').config()
const app=express()
const PORT=process.env.PORT||3000


app.get('/',(req,res)=>{
    res.status(200).json("welcome to the voting app")
})


app.listen(PORT,console.log(`serverlistening on  http://localhost:${PORT}`))