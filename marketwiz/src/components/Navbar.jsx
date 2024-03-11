import React, { useState, useEffect } from 'react'; // Import useState
import logo from '../assets/images/logo.svg'
import { Routes, Route } from 'react-router-dom'

function Navbar() {
  const [loginSuccess, setLoginSuccess] = useState('');
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  
  useEffect(() => {
    if (userDetails && userDetails.name !== "") {
      setLoginSuccess("Success");
    }
  }, [userDetails]); // Run this effect whenever userDetails changes

  function onLogout() {
    localStorage.setItem('userDetails', JSON.stringify({name: ""}));
    setLoginSuccess("");
  }

  return (
    <nav className='nav'>
      <img className="nav-image" src={logo} alt='marketwiz-logo'></img>
      <ul className='nav-list '>
        <li><a href="/" className='hidden md:flex hover:font-bold'>Home</a></li>
        <li><a href="/contact" className='hidden md:flex hover:font-bold'>Contact</a></li>
        {
          loginSuccess === "Success" ?
          <a href="/login" className='ml-3 nav-login-button hover:animate-pulse' onClick={onLogout}>Log out</a>
          :
          <a href="/login" className='ml-3 nav-login-button hover:animate-pulse'>Login</a>
        }
      </ul>
    </nav>
  )
}

export default Navbar;
