import React from 'react'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <nav className='nav'>
      <img className="nav-image" src={logo} alt='marketwiz-logo'></img>
      <ul className='nav-list'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li className='nav-login-button'>Login</li>
      </ul>
      
    </nav>
  )
}

export default Navbar