import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddAchievement.css';

const AddAchievement = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        achievementTitle: '',
        achievement: '',
        currentRole: '',
        projects: '',
        story: '',
        photo: null,
        date: ''
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
            const response = await fetch('http://localhost:3000/add-ach', {
                method: 'POST',
                body: formDataToSend
            });

            if (response.ok) {
                alert('Achievement added successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    education: '',
                    achievementTitle: '',
                    achievement: '',
                    currentRole: '',
                    projects: '',
                    story: '',
                    photo: null,
                    date: ''
                });
                document.getElementById('photo').value = '';
            } else {
                alert('Failed to add achievement');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding achievement');
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="add-achievement-container">
            {/* Navigation Bar */}
            
           

            {/* Header */}
            <div className="page-header">
                <h1>Add Alumni Achievement</h1>
                <p>Celebrate and showcase alumni accomplishments</p>
            </div>

            {/* Form Section */}
            <div className="achievement-section">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Personal Information */}
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
                            <label htmlFor="email">Email Address *</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="example@iiitsonepat.ac.in"
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                placeholder="+91 98765 43210"
                                value={formData.phone}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="education">Education Details *</label>
                            <input 
                                type="text" 
                                id="education" 
                                name="education" 
                                placeholder="e.g., IIIT Sonepat, B.Tech CSE"
                                value={formData.education}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                    </div>

                    {/* Achievement Details */}
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="achievementTitle">Achievement Title *</label>
                            <input 
                                type="text" 
                                id="achievementTitle" 
                                name="achievementTitle" 
                                placeholder="e.g., Winner of National Hackathon 2024"
                                value={formData.achievementTitle}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Achievement Date *</label>
                            <input 
                                type="text" 
                                id="date" 
                                name="date" 
                                placeholder="e.g., April 2025"
                                value={formData.date}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="achievement">Achievement Description *</label>
                        <textarea 
                            id="achievement" 
                            name="achievement" 
                            placeholder="Provide a detailed description of the achievement..."
                            rows="4"
                            value={formData.achievement}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <small className="helper-text">Describe what was achieved and its significance</small>
                    </div>

                    {/* Professional Information */}
                    <div className="form-group full-width">
                        <label htmlFor="currentRole">Current Role *</label>
                        <input 
                            type="text" 
                            id="currentRole" 
                            name="currentRole" 
                            placeholder="e.g., Senior Software Engineer at Google"
                            value={formData.currentRole}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="projects">Notable Projects *</label>
                        <textarea 
                            id="projects" 
                            name="projects" 
                            placeholder="List and describe notable projects you've worked on..."
                            rows="4"
                            value={formData.projects}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <small className="helper-text">Share details about impactful work</small>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="story">Inspirational Story or Message *</label>
                        <textarea 
                            id="story" 
                            name="story" 
                            placeholder="Share your journey, challenges overcome, or advice for fellow alumni..."
                            rows="5"
                            value={formData.story}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <small className="helper-text">Inspire others with your experience</small>
                    </div>

                    {/* Photo Upload */}
                    <div className="form-group full-width">
                        <label htmlFor="photo">Profile Photo *</label>
                        <div className="file-input-wrapper">
                            <input 
                                type="file" 
                                id="photo" 
                                name="photo" 
                                accept="image/*" 
                                onChange={handleFileChange}
                                required
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
                        <small className="helper-text">Accepted formats: JPG, PNG (Max 5MB) - Professional photo recommended</small>
                    </div>

                    <button type="submit" className="submit-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12l7 7 7-7"/>
                        </svg>
                        Submit Achievement
                    </button>
                </form>
            </div>

            
        </div>
    );
};

export default AddAchievement;