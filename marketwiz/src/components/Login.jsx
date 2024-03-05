import React from 'react'
import image from '../assets/images/loginImage.png'
import '../App.css'

function Login() {

  return (
    <>
      <div className="bg-white h-screen flex items-center justify-center relative">
      <div className="container z-10 max-w-3xl w-full bg-white rounded-lg mx-4 shadow-md">
        <div className="content flex items-center justify-between px-5 py-4">
          <div className="image-box max-w-3xl">
            <img src={image} alt="Your Image" className="w-full" />
          </div>
          <form className="w-2/5">
            <h1>Welcome</h1>
            <div className="input-box mb-6 relative">
              <input type="text" required className="h-12 w-full px-4 border rounded-md focus:border-gray-700 focus:outline-none" />
              <label htmlFor="name" className="absolute left-4 top-1/2 text-sm text-gray-600 transform -translate-y-1/2 transition duration-300">Name</label>
            </div>
            <div className="input-box mb-6 relative">
              <input type="email" required className="h-12 w-full px-4 border rounded-md focus:border-gray-700 focus:outline-none" />
              <label htmlFor="email" className="absolute left-4 top-1/2 text-sm text-gray-600 transform -translate-y-1/2 transition duration-300">Email</label>
            </div>
          
            <input type="submit" value="Login" className="mt-6 bg-gray-700 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-800 transition duration-300" />
          </form>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-white" style={{ clipPath: 'polygon(86% 0, 100% 0, 100% 100%, 60% 100%)' }}></div>
    
    </div>
      
      
    </>
  )
}

export default Login