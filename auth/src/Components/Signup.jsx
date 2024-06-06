import React, { useState } from 'react'
import '../Components/Signup.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
const Signup = () => {

    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate()

    const submitHandler=async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3000/auth/signup",{username,email,password}).then((response)=>{
           if (response.data.status){
            navigate("/login")
           }
        }).catch((err)=>{
            console.log(err)
        })
    }


  return (
    <div className='sign-up-container'>
        <form className='sign-up-form' onSubmit={submitHandler}>
            <h2>Signup</h2>
            <label htmlFor="username">Username : </label>
            <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)} />

            <label htmlFor="email">Email : </label>
            <input type="email" placeholder='Email' autoComplete='off' onChange={(e)=>setEmail(e.target.value)} />

            <label htmlFor="password">Password : </label>
            <input type="password" placeholder='*****' onChange={(e)=>setPassword(e.target.value)} />
            <button>signup</button>
            <p>Have an account <Link to="/login">Login</Link>
            </p>
        </form>
    </div>
  )
}

export default Signup
