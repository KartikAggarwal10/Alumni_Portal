import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        otp: '',
        id: '', // password
        idc: '' // confirm password
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendOTP = async () => {
        if (!formData.email) {
            alert("Please enter an email first.");
            return;
        }

        try {
            const res = await api.post("/send-otp", { email: formData.email });
            alert(res.data.message);
        } catch (err) {
            console.error("Failed to send OTP", err);
            alert("Failed to send OTP. Try again.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (formData.id !== formData.idc) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await api.post("/signupt", formData);
            if (res.status === 200 || res.data === "Registered successfully!") {
                alert("Registered successfully!");
                navigate('/login');
            } else {
                setMessage(res.data.message || "Registration failed");
            }
        } catch (err) {
            console.error(err);
            setMessage(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="signup-page-container">
            <div className="header">
                <h1>Sign Up</h1>
                <p>Join the IIIT Sonepat Alumni community</p>
            </div>
            <div className="main-content">
                <div className="signup-container">
                    <div className="signup-image"></div>
                    <div className="signup-form">
                        <h2>Create Account</h2>
                        {message && <p style={{ color: 'red' }}>{message}</p>}
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required onChange={handleChange} />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter Your College Gmail Id" required onChange={handleChange} />
                            <button type="button" onClick={sendOTP} style={{ marginTop: '10px', marginBottom: '10px' }}>Send OTP</button>

                            <label htmlFor="otp">Enter OTP:</label>
                            <input type="text" id="otp" name="otp" placeholder="Enter the OTP" required onChange={handleChange} />

                            <label htmlFor="id">Password</label>
                            <input type="password" id="id" name="id" placeholder="Create Password" required onChange={handleChange} />

                            <label htmlFor="idc">Confirm Password</label>
                            <input type="password" id="idc" name="idc" placeholder="Rewrite Password" required onChange={handleChange} />

                            <button type="submit">Sign Up</button>
                        </form>

                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
