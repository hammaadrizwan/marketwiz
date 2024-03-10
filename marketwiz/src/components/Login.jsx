import React from 'react'
import image from '../assets/images/loginImage.png'
import '../App.css'
import {useState} from 'react';
import {auth} from '../firebase/config.js';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";

function Login() {
  const [loginType, setLoginType] = useState('login');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');//error is the value initialized to empty string, but it will be updated with the error message from the Firebase Authentication API, using setError() function.
  const [userCredentials,setUserCredentials] = useState({});//userCredentials is the value initialized to an empty object, but it will be updated with the user's email and password, using setUserCredentials() function.
  
  function handleCredentials(e){
    setError("");
    setPasswordError("");
    setUserCredentials({...userCredentials,[e.target.name]:e.target.value});
    console.log(userCredentials);
  }

  function handleLogin(e){
    e.preventDefault();
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        
        //dispatch(setUser({id:userCredential.user.uid,email:userCredential.user.email}));
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/missing-password).") {
          setPasswordError("Password is required");
        }else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found");
        }else if (error.message === "Firebase: Error (auth/invalid-email).") {
          setError("Email is invalid");
        }else if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Password is incorrect");
        }else if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setError("Invalid credentials");
        }
        else{
          setError(error.message);
        }
        
      });
  }
  
  function handlePasswordReset(){
    const email = prompt("Enter your email to reset your password");
    sendPasswordResetEmail(auth, email)
    if((email)==""){
      alert("Enter a valid email.")
    }else{
      alert("Email sent, check your inbox for further instructions.")
    }
    

  }

  


  return (
    <section classname="login">
      <div className='xl:pt-28 xl:pb-32 login-items'>
        <div className='login-right'>
          <form className='xl:mr-10 lg:mr-10 login-right-info'>
            <div className='login-right-info-title'>
              <h1>Welcome</h1>
            </div>
            <div className='login-right-info-input'>
              <input onChange={(e)=>{handleCredentials(e)}} className='login-right-info-input-field' placeholder='Enter your Email' type='text' name="email">
              </input>
              <input onChange={(e)=>{handleCredentials(e)}} className='login-right-info-input-field' placeholder='Enter your password'type='password' name="password">
              </input>
            </div>
            <div className='login-right-info-input-submit'>
              {
                
                error &&
                <div className="error">
                {error}
                <br></br>
                
                </div>
                
              }
              {
                passwordError &&
                <div>
                <p onClick={handlePasswordReset}  className='forgot-password'>Forgot Password</p>
                </div>
              }
            <input onClick={(e)=>{handleLogin(e)}} id="login-bg-input" type="submit" value="Login" className="contact-button hover:drop-shadow-2xl " />
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