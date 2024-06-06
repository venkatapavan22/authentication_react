import React, { useState } from 'react'
import '../Components/Signup.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    const submitHandler=async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3000/auth/login",{email,password}).then((response)=>{
           if (response.data.status){
            navigate("/")
           }
           else{
            navigate("/signup")
           }
        }).catch((err)=>{
            console.log(err)
        })
    }


  return (
    <div className='sign-up-container'>
        <form className='sign-up-form' onSubmit={submitHandler}>
            <h2>Login</h2>


            <label htmlFor="email">Email : </label>
            <input type="email" placeholder='Email' autoComplete='off' onChange={(e)=>setEmail(e.target.value)} />

            <label htmlFor="password">Password : </label>
            <input type="password" placeholder='*****' onChange={(e)=>setPassword(e.target.value)} />
            <button>signup</button>
            <p>Dont have an account <Link to="/signup">Signup</Link>
            </p>
        </form>
    </div>
  )
}

export default Login
