import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        pswrd: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await api.post('/login', formData);
            if (response.data.success || response.status === 200) {
                // In the original app, it redirects. Here navigate to home or dashboard
                // We might need to handle the redirect URL from backend if we change backend to return it
                // For now, assume login successful leads to home
                navigate('/');
            } else {
                setError('Login failed');
            }
        } catch (err) {
            console.error(err);
            setError(err.response?.data.message || 'Login failed. Please check your credentials.');
        }
    };
    return (
        <div className="login-page-container">
            <div className="header">
                <h1>Login</h1>
                <p>Access your IIIT Sonepat Alumni account</p>
            </div>
            <div className="main-content">
                <div className="signup-container">
                    <div className="signup-image">
                         <section className="hero" style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/public/Campus.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            </section>
                    </div>
                    <div className="signup-form">
                        <h2>Login</h2>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Your Gmail"
                                required
                                onChange={handleChange}
                            />
                            <label htmlFor="pswrd">Password</label>
                            <input
                                type="password"
                                id="pswrd"
                                name="pswrd"
                                placeholder="Enter Your Password"
                                required
                                onChange={handleChange}
                            />
                            <button type="submit">Login</button>
                        </form>
                        <p>Don't have an account? <Link to="/signupt">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;