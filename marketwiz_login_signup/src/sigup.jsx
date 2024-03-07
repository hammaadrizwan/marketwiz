import React, { useState } from 'react'
import singup from './assets/SignUp.png'
import './singup.css'

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
        <div className="wrapper" style={{ border: '1px solid white', borderRadius: '21px', width: 'fit-content', margin: '0 auto' }}>
            <div className="inner"></div>
            <div className="image-holder" style={{ float: 'left' }}>
                <img src={singup} alt="" style={{ width: '600px', borderRadius: '31px' }} />
            </div>
            <form action="" style={{ marginLeft: 'auto', marginRight: 0, float: 'right' }}>
                <h2><center>Login Form</center></h2>
                <div className="form-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="form-wrapper" style={{ textAlign: 'right', marginLeft: '20px' }}>
                        <input type="text" placeholder="Name" className="form-control" style={{ width: '250px' }} />
                        <i className="zmdi zmdi-account"></i>
                    </div>
                    <div className="form-wrapper" style={{ textAlign: 'right', marginLeft: '20px' }}>
                        <input type="text" placeholder="Telphone No" className="form-control" style={{ width: '250px' }} />
                        <i className="zmdi zmdi-email"></i>
                    </div>
                </div>
                <div className="form-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="form-wrapper" style={{ textAlign: 'right', marginLeft: '20px' }}>
                        <select name="" id="" className="form-control" style={{ width: '250px' }}>
                            <option value="" disabled selected>Choose your store</option>
                            <option value="male">c1</option>
                            <option value="femal">c2</option>
                            <option value="other">c3</option>
                        </select>
                        <i className="zmdi zmdi-caret-down" style={{ fontSize: '17px' }}></i>
                    </div>
                    <div className="form-wrapper" style={{ textAlign: 'right', marginLeft: '20px' }}>
                        <select name="" id="" className="form-control" style={{ width: '250px' }}>
                            <option value="" disabled selected>Choose your Branch</option>
                            <option value="COL 1">Male</option>
                            <option value="Gampha">Female</option>
                            <option value="COL @">Other</option>
                        </select>
                        <i className="zmdi zmdi-caret-down" style={{ fontSize: '17px' }}></i>
                    </div>
                </div>
                <div className="form-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="form-wrapper" style={{ textAlign: 'right', marginLeft: '20px' }}>
                        <input type="password" placeholder="Email" className="form-control" style={{ width: '250px' }} />
                        <i className="zmdi zmdi-lock"></i>
                    </div>
                    <div className="form-wrapper" style={{ textAlign: 'right', marginLeft: '20px' }}>
                        <input type="password" placeholder="Enter your Password" className="form-control" style={{ width: '250px' }} />
                        <i className="zmdi zmdi-lock"></i>
                    </div>
                </div>
                <button style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>Register
                    <i className="zmdi zmdi-arrow-right"></i>
                </button>
            </form>
        </div>
    );
};

export default Signup;