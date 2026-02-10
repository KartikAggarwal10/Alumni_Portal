import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import './DonationForm.css';

const DonationForm = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', batch: '', amount: '',
        purpose: '', occupation: '', message: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/admin-fill-giving', formData);
            alert(response.data.message || 'Donation details submitted successfully!');
            navigate('/giving');
        } catch (error) {
            console.error('Error submitting donation:', error);
            alert('Failed to submit donation details.');
        }
    };

    return (
        <div className="donation-page-container">
            <nav className="donation-nav">
                <Link to="/giving">Back to Contributions Page</Link>
            </nav>

            <div className="donation-form-container">
                <h1>Thank You for Supporting Us!</h1>
                <p className="intro">
                    We deeply appreciate your willingness to contribute to IIIT Sonepat. Please share your details below, and our team will reach out to assist you further.
                </p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                    <input type="text" name="batch" placeholder="Batch (e.g., 2020)" required value={formData.batch} onChange={handleChange} />
                    <input type="number" name="amount" placeholder="Proposed Amount (₹)" required value={formData.amount} onChange={handleChange} />
                    <input type="text" name="purpose" placeholder="Purpose of Contribution" required value={formData.purpose} onChange={handleChange} />
                    <input type="text" name="occupation" placeholder="Occupation (e.g., Job, Business)" required value={formData.occupation} onChange={handleChange} />
                    <textarea name="message" placeholder="Your Message (optional)" value={formData.message} onChange={handleChange}></textarea>
                    <button type="submit">Send My Support Message</button>
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

export default DonationForm;
