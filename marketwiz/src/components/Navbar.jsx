import React from 'react'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <nav className='nav'>
      <img className="nav-image" src={logo} alt='marketwiz-logo'></img>
      <ul className='nav-list '>
        <li href="#"className='hidden md:flex hover:font-bold'><a href="#" class="">Home</a></li>
        <li><a href="#"className='hidden md:flex hover:font-bold'>Contact</a></li>
        <li><a href="#"className='hidden md:flex hover:font-bold'>About</a></li>
        <a  href="#" className='ml-3 nav-login-button hover:animate-pulse'>Login</a>
      </ul>
    </nav>
  )
}

export default Navbar