import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './EventRegistration.css';

const EventRegistration = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', college: '',
        batch: '', event: '', message: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/rst', formData);
            alert(response.data.message || 'Registration successful!');
            navigate('/events');
        } catch (error) {
            console.error('Error registering for event:', error);
            alert('Failed to register.');
        }
    };

    return (
        <div className="eventreg-page-container">
            <div className="header">
                <h1>Event Registration</h1>
                <p>Sign up for exciting alumni events</p>
            </div>

            <div className="registration-container">
                <h2>Register Now</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" placeholder="Enter your full name" required value={formData.name} onChange={handleChange} />

                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your phone number" required value={formData.phone} onChange={handleChange} />

                    <label htmlFor="college">College Name</label>
                    <input type="text" name="college" placeholder="Enter your college name" required value={formData.college} onChange={handleChange} />

                    <label htmlFor="batch">Batch Year</label>
                    <select name="batch" required value={formData.batch} onChange={handleChange}>
                        <option value="">Select Batch Year</option>
                        {[...Array(12)].map((_, i) => (
                            <option key={i} value={2014 + i}>{2014 + i}</option>
                        ))}
                    </select>

                    <label htmlFor="event">Select Event</label>
                    <select name="event" required value={formData.event} onChange={handleChange}>
                        <option value="">Select an Event</option>
                        <option value="Annual Alumni Meet">Annual Alumni Meet</option>
                        <option value="Career Webinar">Career Webinar</option>
                        <option value="AI & ML Workshop">AI & ML Workshop</option>
                        <option value="Startup Networking">Startup Networking</option>
                    </select>

                    <label htmlFor="message">Message (optional)</label>
                    <textarea name="message" placeholder="Share your thoughts or queries about the event..." rows="4" value={formData.message} onChange={handleChange}></textarea>

                    <button type="submit">Register</button>
                </form>
            </div>

            <footer className="footer">
                <div>
                    <h2>Mentored by:</h2>
                    Dr. Gourav Jain <br /> Assistant Professor at IIIT Sonepat
                </div>
                <div>© 2025 IIIT Sonepat Alumni Portal</div>
                <div>
                    <h2>Created by:</h2>
                    Vineet Kumar Yadav ( 1<sup>st</sup> Year , IT ) <br />
                    Kartik Aggrawal ( 1<sup>st</sup> Year , CSE ) <br />
                    Ritik Raj Soni ( 1<sup>st</sup> Year , IT )
                </div>
            </footer>
        </div>
    );
};

export default EventRegistration;
