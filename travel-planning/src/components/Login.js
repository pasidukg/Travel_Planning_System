import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Handle the Sign In button click
    const handleSignIn = (e) => {
        e.preventDefault(); // Prevent form submission refresh

        // Here you can add authentication logic (optional)
        if (username && password) {
            navigate('/welcome'); // Navigate to the Welcome Page
        } else {
            alert('Please enter a valid username and password!');
        }
    };

    // Handle the Register button click
    const handleRegister = () => {
        navigate('/register'); // Navigate to the Register Page
    };

    return (
        <div className="login-container">
            <div className="login-left">
            </div> 
            <div className="login-right">
                <div className="login-box">
                    <div className="logo">
                        <img src="assets/logo.png" alt="Travel Sri Lanka" className="logo" style={{ width: '200px', height: 'auto' }}/>
                    </div>
                    <h2>Member Login</h2>
                    <form onSubmit={handleSignIn}>
                        <div className="input-field">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn-signin">Sign In</button>
                    </form>
                    <div className="register-link">
                        <p>
                            Don't have an account?{' '}
                            <button
                                className="btn-register"
                                onClick={handleRegister}
                            >
                                Register
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
