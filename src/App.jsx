import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Read from './Pages/Read'
import Update from './Pages/Update'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update:id' element={<Update />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
