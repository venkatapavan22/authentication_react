import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import React from 'react'
import Home from './Components/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
