import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Info from './components/Info'
/* Add the navbar hero team contacts and footer here */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
    </>
  )
}

export default App
