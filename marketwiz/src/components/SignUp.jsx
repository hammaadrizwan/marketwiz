import React, { useState } from 'react';
import image from '../assets/images/signupImage.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config.js';
import { doc, setDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from '../firebase/config.js';
import Navbar from './Navbar';
import Footer from './Footer';

function SignUp() {
  const [error, setError] = useState('');
  const [userCredentials, setUserCredentials] = useState({});
  const [signinSuccess, setSiginInSuccess] = useState('');
  function handleCredentials(e) {
    setError("");
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleSignup(e) {
    e.preventDefault();
    if (userCredentials.name === "" || userCredentials.telephone === "" || userCredentials.store === "" || userCredentials.branch === "" || userCredentials.email === "" || userCredentials.password === "") {
      setError("All fields are required");
    }else{
      createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSiginInSuccess("Success");

        // Save additional user details to Firestore
        const userDetails = {
          name: userCredentials.name,
          telephone: userCredentials.telephone,
          store: userCredentials.store,
          branch: userCredentials.branch
        };

        const userDocRef = doc(collection(db, 'users'), user.uid);
        setDoc(userDocRef, userDetails)
          .then(() => {
            console.log("User details added to Firestore successfully!");
            // You may want to redirect the user to another page or do something else here
          })
          .catch((error) => {
            console.error("Error adding user details to Firestore: ", error);
          });
      })
      .catch((error) => {
        // Handle errors
        if (error.message === "Firebase: Error (auth/missing-password).") {
          setError("Password is required");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found");
        } else if (error.message === "Firebase: Error (auth/invalid-email).") {
          setError("Email is invalid");
        } else if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Password is incorrect");
        } else if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setError("Invalid credentials");
        } else if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("Email is already in use");
        } else {
          setError(error.message);
        }
      });
    }
    
  }

  return (
    <div>
      <Navbar />
    <section className='signup'>
      <div className='signup-items'>
        <div className='signup-items-left'>
          <form className='signup-items-left-info'>
            <div className='signup-items-left-info-title'>
              <h1>Create your account now</h1>
            </div>
            <div className='signup-items-left-info-input-frame'>
              <div className='signup-items-left-info-input-frame-one'>
                <input name="name" className='signup-left-info-input-field' placeholder='Enter Name' onChange={(e) => { handleCredentials(e) }} />
                <input name="telephone" className='signup-left-info-input-field' placeholder='Enter Telephone No' onChange={(e) => { handleCredentials(e) }} />
              </div>
              <div className='signup-items-left-info-input-frame-two'>
                <select name="store" className='drop-shadow-md signup-left-info-input-store' onChange={(e) => { handleCredentials(e) }}>
                  <option value="none" selected >Select store</option>
                  <option value="Udayagiri">Udayagiri</option>
                </select>
                <select name="branch" className='drop-shadow-md signup-left-info-input-branch' onChange={(e) => { handleCredentials(e) }}>
                  <option value="none" selected >Select branch</option>
                  <option value="Maradana">Dematagoda</option>
                </select>
              </div>
              <div className='signup-items-left-info-input-frame-three'>
                <input className='signup-left-info-input-field' placeholder='Enter Email' name="email" onChange={(e) => { handleCredentials(e) }} />
                <input className='signup-left-info-input-field' placeholder='Enter Password' type='password' name="password" onChange={(e) => { handleCredentials(e) }} />
              </div>
              <div className='signup-items-left-info-input-frame-footer'>
                {error && <div className="error">{error}</div>}
                {
                    signinSuccess == '' ?
                    <><input onClick={(e) => { handleSignup(e) }} id="signup-bg-input" type="submit" value="Sign Up" className="contact-button hover:drop-shadow-2xl " />
                    <a href="/login" className='login-right-info-input-option'>Already have an account? Login now</a></>
                    : 
                    <><a href="/login" id="signup-bg-input" className="contact-button hover:drop-shadow-2xl ">Login Now</a>
                    </>

                  }
                
              </div>
            </div>
          </form>
        </div>
        <div className='hidden lg:flex signup-items-right'>
          <img src={image} alt='' />
        </div>
      </div>
    </section>
    </div>
  );
}

export default SignUp;
