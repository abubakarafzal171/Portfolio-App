import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    
     <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
     <Footer/>
     </>
  )
}

export default App