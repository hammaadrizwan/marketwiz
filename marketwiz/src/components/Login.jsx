import React from 'react'
import image from '../assets/images/loginImage.png'
import '../App.css'

function Login() {

  return (
    <section classname="login">
      <div className='xl:pt-28 xl:pb-32 login-items'>
        <div className='login-right'>
          <form className='xl:mr-10 lg:mr-10 login-right-info'>
            <div className='login-right-info-title'>
              <h1>Welcome</h1>
            </div>
            <div className='login-right-info-input'>
              <input className='login-right-info-input-field' placeholder='Enter your Email' type='text'>
              </input>
              <input className='login-right-info-input-field' placeholder='Enter your password'type='password'>
              </input>
            </div>
            <div className='login-right-info-input-submit'>
            <input id="login-bg-input" type="submit" value="Login" className="contact-button hover:drop-shadow-2xl " />
            <a href="/signup" className='login-right-info-input-option'>
            Create your account now
            </a>
            </div>
          </form>
        </div>
        <div className='hidden lg:flex login-left'>
                    <img src={image} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Login