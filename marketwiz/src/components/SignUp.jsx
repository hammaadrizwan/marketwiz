import React from 'react'
import image from '../assets/images/signupImage.png'

function SignUp() {
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
                            <input className='signup-left-info-input-field' placeholder='Enter Name'></input>
                            <input className='signup-left-info-input-field' placeholder='Enter Telephone No'></input>
                        </div>
                        <div className='signup-items-left-info-input-frame-two'>
                         <select className='drop-shadow-md signup-left-info-input-store'>
                            <option value="none" selected disabled hidden>Select store</option>
                            <option value="Udayagiri">Udayagiri</option>
                         </select>
                            <select className='drop-shadow-md signup-left-info-input-branch'>
                            <option value="none" selected disabled hidden>Select branch</option>
                            <option value="Maradana">Dematagoda</option>
                        </select>

                        </div>
                        <div className='signup-items-left-info-input-frame-three'>
                        <input className='signup-left-info-input-field' placeholder='Enter Email'></input>
                            <input className='signup-left-info-input-field' placeholder='Enter Password' type='password'></input>
                        </div>
                        <div className='signup-items-left-info-input-frame-footer'>
                            <input id="signup-bg-input" type="submit" value="Sign Up" className="contact-button hover:drop-shadow-2xl " />
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