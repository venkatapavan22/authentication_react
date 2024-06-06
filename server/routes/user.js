import express from 'express'
import bcrypt from 'bcrypt'
import {User} from '../models/User.js'
const router=express.Router()
import jwt from 'jsonwebtoken'


router.post("/signup",async(req,res)=>{
    try {
    const {username,email,password}=req.body;
    const user=await User.findOne({email})
    if (user){
        return res.json({message:"user already exists"})
    }
    const hashedpass=await bcrypt.hash(password,10)
    const newUser= new User({
        username,
        password:hashedpass,
        email
    })
    await newUser.save()
    return res.json({status:true,message:"record registered"})
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

router.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email})
    if(!user){
        return res.json({message:"user is not registered"})
    }

    const validpass=await bcrypt.compare(password,user.password)
    if (!validpass){
        return res.json({message:"password is incorrect"})
    }
    const token=jwt.sign({username:user.username},process.env.key,{expiresIn:'1h'})
    res.cookie('token',token,{httpOnly:true,maxAge:360000})
    return res.json({status:true,message:"login successfully"})
})


export {router as userRouter}