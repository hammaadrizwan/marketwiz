import React from 'react'
import logo from '../assets/images/logo.svg'
import {Routes,Route} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
      <img className="nav-image" src={logo} alt='marketwiz-logo'></img>
      <ul className='nav-list '>
        <li ><a href="/" className='hidden md:flex hover:font-bold'>Home</a></li>
        <li><a href="/contact"className='hidden md:flex hover:font-bold'>Contact</a></li>
        <a  href="/login" className='ml-3 nav-login-button hover:animate-pulse'>Login</a>
      </ul>
    </nav>
  )
}

export default Navbar