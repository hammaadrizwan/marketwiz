import React from 'react'
import image from '../assets/images/signupImage.png'
import {useState} from 'react';
import {auth} from '../firebase/config.js';

import {
  createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
    sendPasswordResetEmail,
   } 
   from "firebase/auth";
function SignUp() {
    const [error, setError] = useState('');//error is the value initialized to empty string, but it will be updated with the error message from the Firebase Authentication API, using setError() function.
    const [userCredentials,setUserCredentials] = useState({});//userCredentials is the value initialized to an empty object, but it will be updated with the user's email and password, using setUserCredentials() function.
    
    function handleCredentials(e){
      setError("");
      setUserCredentials({...userCredentials,[e.target.name]:e.target.value});
      console.log(userCredentials);
    }
  
    function handleSignup(e){
      e.preventDefault();
      createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
          // Signed up -successfull
          console.log(userCredential.user);
          //dispatch(setUser({id:userCredential.user.uid,email:userCredential.user.email}));
        })
        .catch((error) => {
            if (error.message === "Firebase: Error (auth/missing-password).") {
                setError("Password is required");
            }else if (error.message === "Firebase: Error (auth/user-not-found).") {
              setError("User not found");
            }else if (error.message === "Firebase: Error (auth/invalid-email).") {
              setError("Email is invalid");
            }else if (error.message === "Firebase: Error (auth/wrong-password).") {
              setError("Password is incorrect");
            }else if (error.message === "Firebase: Error (auth/invalid-credential).") {
              setError("Invalid credentials");
            }else if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                setError("Email is already in use");
            }
            else{
              setError(error.message);
            }
          // ..
        });
    }
    
    return(
        <section className='signup'>
            <div className='signup-items'>
                <div className='signup-items-left'>
                    <form className='signup-items-left-info'>
                        <div className='signup-items-left-info-title'>
                            <h1>Create your account now</h1>

                        </div>
                        <div className='signup-items-left-info-input-frame'>
                        <div className='signup-items-left-info-input-frame-one'>
                            <input name="name" className='signup-left-info-input-field' placeholder='Enter Name'></input>
                            <input name="telephone" className='signup-left-info-input-field' placeholder='Enter Telephone No'></input>
                        </div>
                        <div className='signup-items-left-info-input-frame-two'>
                         <select name="store" className='drop-shadow-md signup-left-info-input-store'>
                            <option value="none" selected disabled hidden>Select store</option>
                            <option value="Udayagiri">Udayagiri</option>
                         </select>
                            <select name="branch" className='drop-shadow-md signup-left-info-input-branch'>
                            <option value="none" selected disabled hidden>Select branch</option>
                            <option value="Maradana">Dematagoda</option>
                        </select>

                        </div>
                        <div className='signup-items-left-info-input-frame-three'>
                        <input onChange={(e)=>{handleCredentials(e)}} className='signup-left-info-input-field' placeholder='Enter Email' name="email"></input>
                            <input onChange={(e)=>{handleCredentials(e)}} className='signup-left-info-input-field' placeholder='Enter Password' type='password' name="password"></input>
                        </div>
                        <div className='signup-items-left-info-input-frame-footer'>
                                    {
                                error &&
                                <div className="error">
                                {error}
                                </div>
                                /* error message from the Firebase Authentication API, will be displayed here, if the use state is an error.
                            */
                            }
                            <input onClick={(e)=>{handleSignup(e)}} id="signup-bg-input" type="submit" value="Sign Up" className="contact-button hover:drop-shadow-2xl " />
                            <a href="/login" className='login-right-info-input-option'>
                            Already have an account? Login now
                            </a>
                            </div>
                        </div>
                                        
                    </form>
                </div>
                <div className='hidden lg:flex signup-items-right'>
                    <img src={image} alt='' />
                </div>

            </div>

        </section>
    )
}
export default SignUp