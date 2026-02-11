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
        <p>Sign up for exciting alumni events and stay connected with your community</p>
    </div>

    <div className="registration-container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name" className="required">Full Name</label>
                <input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Enter your full name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="required">Email Address</label>
                <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="you@example.com" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                <span className="helper-text">We'll send event updates to this email</span>
            </div>

            <div className="form-group">
                <label htmlFor="phone" className="required">Phone Number</label>
                <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    placeholder="+91 98765 43210" 
                    required 
                    value={formData.phone} 
                    onChange={handleChange} 
                />
            </div>

            <div className="form-group">
                <label htmlFor="college" className="required">College Name</label>
                <input 
                    type="text" 
                    id="college"
                    name="college" 
                    placeholder="IIIT Sonepat" 
                    required 
                    value={formData.college} 
                    onChange={handleChange} 
                />
            </div>

            <div className="form-group">
                <label htmlFor="batch" className="required">Batch Year</label>
                <select 
                    id="batch"
                    name="batch" 
                    required 
                    value={formData.batch} 
                    onChange={handleChange}
                >
                    <option value="">Select Batch Year</option>
                    {[...Array(12)].map((_, i) => (
                        <option key={i} value={2014 + i}>{2014 + i}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="event" className="required">Select Event</label>
                <select 
                    id="event"
                    name="event" 
                    required 
                    value={formData.event} 
                    onChange={handleChange}
                >
                    <option value="">Choose an event</option>
                    <option value="Annual Alumni Meet">Annual Alumni Meet</option>
                    <option value="Career Webinar">Career Webinar</option>
                    <option value="AI & ML Workshop">AI & ML Workshop</option>
                    <option value="Startup Networking">Startup Networking</option>
                </select>
            </div>

            <div className="form-group full-width">
                <label htmlFor="message">Additional Message</label>
                <textarea 
                    id="message"
                    name="message" 
                    placeholder="Share your thoughts, expectations, or any questions about the event..." 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange}
                ></textarea>
                <span className="helper-text">Optional - Tell us what you're looking forward to</span>
            </div>

            <button type="submit">Complete Registration</button>
        </form>
    </div>
</div>
    );
};

export default EventRegistration;
