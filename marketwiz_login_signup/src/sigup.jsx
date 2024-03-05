import React, { useState } from 'react'
import singup from './assets/SignUp.png'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
    };

    return (
            <div className="wrapper">
                <div className="inner"></div>
                    <div className="image-holder">
                        <img src={singup} alt="" />
                    </div>
                <form action="">
                    <h3>Login Form</h3>
                    
                    <div className="form-wrapper">
                        <input type="text" placeholder="Username" className="form-control" />
                        <i className="zmdi zmdi-account"></i>
                    </div>
                    <div className="form-wrapper">
                        <input type="text" placeholder="Email Address" className="form-control" />
                        <i className="zmdi zmdi-email"></i>
                    </div>
                    <div className="form-wrapper">
                        <select name="" id="" className="form-control">
                            <option value="" disabled selected>Choose your store</option>
                            <option value="male">c1</option>
                            <option value="femal">c2</option>
                            <option value="other">c3</option>
                        </select>
                        <i className="zmdi zmdi-caret-down" style={{ fontSize: '17px' }}></i>
                    </div>
                    <div className="form-wrapper">
                        <select name="" id="" className="form-control">
                            <option value="" disabled selected>Choose your Branch</option>
                            <option value="COL 1">Male</option>
                            <option value="Gampha">Female</option>
                            <option value="COL @">Other</option>
                        </select>
                        <i className="zmdi zmdi-caret-down" style={{ fontSize: '17px' }}></i>
                    </div>
                    <div className="form-wrapper">
                        <input type="password" placeholder="Email" className="form-control" />
                        <i className="zmdi zmdi-lock"></i>
                    </div>
                    <div className="form-wrapper">
                        <input type="password" placeholder="Confirm Password" className="form-control" />
                        <i className="zmdi zmdi-lock"></i>
                    </div>
                    <button>Register
                        <i className="zmdi zmdi-arrow-right"></i>
                    </button>
                </form>
            </div>
        
    );
};

export default Signup;