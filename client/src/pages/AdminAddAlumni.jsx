import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './AdminAddAlumni.css';

const AdminAddAlumni = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        batch: '',
        branch: '',
        dob: '',
        address: '',
        contact: '',
        email: '',
        photo: null
    });

    const [menuOpen, setMenuOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            photo: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            if (formData[key]) {
                formDataToSend.append(key, formData[key]);
            }
        });

        try {
            const response = await fetch('/eventreg', {
                method: 'POST',
                body: formDataToSend
            });

            if (response.ok) {
                alert('Alumni added successfully!');
                setFormData({
                    name: '',
                    batch: '',
                    branch: '',
                    dob: '',
                    address: '',
                    contact: '',
                    email: '',
                    photo: null
                });
                document.getElementById('photo').value = '';
            } else {
                alert('Failed to add alumni');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding alumni');
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="admin-add-alumni-container">
            {/* Navigation Bar */}
            

            {/* Header */}
            <div className="page-header">
                <h1>Add Alumni Member</h1>
                <p>Register new alumni to the IIIT Sonepat community</p>
            </div>

            {/* Admin Form Section */}
            <div className="admin-section">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Enter full name"
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="batch">Batch Year *</label>
                            <input 
                                type="text" 
                                id="batch" 
                                name="batch" 
                                placeholder="e.g., 2020" 
                                value={formData.batch}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="branch">Branch *</label>
                            <select 
                                id="branch" 
                                name="branch" 
                                value={formData.branch}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Branch</option>
                                <option value="CSE">Computer Science Engineering</option>
                                <option value="IT">Information Technology</option>
                                <option value="ECE">Electronics and Communication Engineering</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input 
                                type="date" 
                                id="dob" 
                                name="dob" 
                                value={formData.dob}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="contact">Contact Number</label>
                            <input 
                                type="tel" 
                                id="contact" 
                                name="contact" 
                                placeholder="+91 98765 43210" 
                                value={formData.contact}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="example@iiitsonepat.ac.in" 
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="address">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            name="address" 
                            placeholder="Enter complete address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="photo">Profile Photo</label>
                        <div className="file-input-wrapper">
                            <input 
                                type="file" 
                                id="photo" 
                                name="photo" 
                                accept="image/*" 
                                onChange={handleFileChange}
                            />
                            <label htmlFor="photo" className="file-input-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="17 8 12 3 7 8"></polyline>
                                    <line x1="12" y1="3" x2="12" y2="15"></line>
                                </svg>
                                <span>{formData.photo ? formData.photo.name : 'Choose file or drag here'}</span>
                            </label>
                        </div>
                        <small className="helper-text">Accepted formats: JPG, PNG, GIF (Max 5MB)</small>
                    </div>

                    <button type="submit" className="submit-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                            <polyline points="7 3 7 8 15 8"></polyline>
                        </svg>
                        Add Alumni Member
                    </button>
                </form>
            </div>

            
        </div>
    );
};

export default AdminAddAlumni;