import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'

function App() {
  

  return (
    <div className='bg-indigo-500 min-h-screen'>
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
