import React from 'react'
import '../App.css'
import Hero from './Index/Hero.jsx'
import Info from './Index/Info.jsx'
import Team from './Index/Team.jsx'
import Navbar from './Navbar'
import Footer from './Footer'

import {Routes,Route} from 'react-router-dom'
/* Add the navbar hero team contacts and footer here */
function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Team />
    </>
  )
}

export default Index