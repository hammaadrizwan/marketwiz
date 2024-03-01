import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Info from './components/Info'
import Team from './components/Team'
import Contact from './components/Contact'
/* Add the navbar hero team contacts and footer here */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Team />
      <Contact/>
      
    </>
  )
}

export default App
