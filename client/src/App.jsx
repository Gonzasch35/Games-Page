import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Landing from './Layouts/Landing'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <div className='bg-indigo-500 min-h-screen'>
      <NavBar />

      <Routes>
        <Route path='/' element={<Landing />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
