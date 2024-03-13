import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

/* Add the navbar hero team contacts and footer here */
function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('/api/time')
      .then(res => res.json())
      .then(data => {
        setCurrentTime(data.time);
      });
  }, []);

  useEffect(() => {
    fetch('/api/ml').then(res => res.json()).then(data => {
      setData(data);
      console.log(data);
    }
    );
  }, []);

  return (
    <>
      <div><p className='api'>{currentTime}</p></div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
