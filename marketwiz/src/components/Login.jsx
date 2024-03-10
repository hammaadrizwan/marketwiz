import React, { useState } from 'react';
import image from '../assets/images/loginImage.png';
import '../App.css';
import { auth } from '../firebase/config.js';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config.js';

function Login() {
  const [loginType, setLoginType] = useState('login');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const [userCredentials, setUserCredentials] = useState({});

  function handleCredentials(e) {
    setError("");
    setPasswordError("");
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then(async (userCredential) => {
        // Signed in
        console.log(userCredential.user);
        const userId = userCredential.user.uid;

        // Fetch user's name from Firestore
        const userDocRef = doc(db, 'users', userId);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          console.log("User data:", userData);
          // After successful login
        localStorage.setItem('userDetails', JSON.stringify(userData)); // Save user details in local storage
        setLoginSuccess("Suceess"); // Set login success message
          // Now you can pass the user's name to the Dashboard component or store it in state
          // For example, you can redirect to Dashboard with user's name as query parameter
        } else {
          console.log("User document not found in Firestore");
        }
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/missing-password).") {
          setPasswordError("Password is required");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found");
        } else if (error.message === "Firebase: Error (auth/invalid-email).") {
          setError("Email is invalid");
        } else if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Password is incorrect");
        } else if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setError("Invalid credentials");
        } else {
          setError(error.message);
        }
      });
  }

  function handlePasswordReset() {
    const email = prompt("Enter your email to reset your password");
    sendPasswordResetEmail(auth, email);
    if (!email) {
      alert("Enter a valid email.");
    } else {
      alert("Email sent, check your inbox for further instructions.");
    }
  }

  return (
    <section className="login">
      <div className='xl:pt-28 xl:pb-32 login-items'>
        <div className='login-right'>
          <form className='xl:mr-10 lg:mr-10 login-right-info'>
            <div className='login-right-info-title'>
              <h1>Welcome</h1>
            </div>
            <div className='login-right-info-input'>
              <input onChange={(e) => { handleCredentials(e) }} className='login-right-info-input-field' placeholder='Enter your Email' type='text' name="email" />
              <input onChange={(e) => { handleCredentials(e) }} className='login-right-info-input-field' placeholder='Enter your password' type='password' name="password" />
            </div>
            <div className='login-right-info-input-submit'>
              {error && <div className="error">{error}<br /></div>}
              {passwordError && <p onClick={handlePasswordReset} className='forgot-password'>Forgot Password</p>}
              {
                    loginSuccess == '' ?
                    <><input onClick={(e) => { handleLogin(e) }} id="login-bg-input" type="submit" value="Login" className="contact-button hover:drop-shadow-2xl " />
              <a href="/signup" className='login-right-info-input-option'>Create your account now</a></>
                    : 
                    <a href="/dashboard" id="login-bg-input" className="contact-button hover:drop-shadow-2xl ">Dashboard</a>
                  }
              
            </div>
          </form>
        </div>
        <div className='hidden lg:flex login-left'>
          <img src={image} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Login;
