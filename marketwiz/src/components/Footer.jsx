import React from 'react'
import logo from '../assets/images/logo.svg'

function Footer() {
  return (
    <footer className='footer'>
      <img className="footer-image" src={logo} alt='marketwiz-logo'></img>
      <p className='ml-20 footer-text'>
        COLOMBO | SRILANKA
      </p>
    </footer>
  )
}

export default Footer