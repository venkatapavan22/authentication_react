import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import { userRouter } from './routes/user.js'


const app=express()
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use("/auth",userRouter)




mongoose.connect("mongodb://127.0.0.1:27017/authentication").then(()=>{
    console.log("database is connected")
}).catch((err)=>{
    console.log(err)
})

app.listen(process.env.port,()=>{
    console.log(`server is running`)
})