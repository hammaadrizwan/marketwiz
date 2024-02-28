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
        <div className='nav-login-button'>Login</div>
      </ul>
      
    </nav>
  )
}

export default Navbar