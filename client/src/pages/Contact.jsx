import React, { useState } from 'react';
import api from '../api';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/send-feedback', formData);
            alert('Feedback sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error sending feedback:', error);
            alert('Failed to send feedback.');
        }
    };

    return (
        <div className="contact-page-container">
            <div className="main-content">
                {/* Header */}
                <div className="header">
                    <h1>Contact Us</h1>
                    <p>Connect with IIIT Sonepat Alumni Network</p>
                </div>

                {/* Contact Section */}
                <section className="contact">
                    <h2>Reach Out</h2>
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>📧 Email: <a href="mailto:vineetit12412008@iiitsonepat.ac.in">vineetit12412008@iiitsonepat.ac.in</a></p>
                        <p>📧 Alumni-Cell Email: <a href="mailto:alumni.cell@iiitsonepat.ac.in">alumni.cell@iiitsonepat.ac.in</a></p>
                        <p>📞 Phone: <a href="tel:+916386177635"> 6386177635</a></p>
                        <p>🏢 Address: Indian Institute of Information Technology Sonepat,
                            IIT Delhi Techno park
                            Rajiv Gandhi Education City
                            Rai, Sonipat
                            Haryana-131001 (INDIA)</p>
                        <p>🌐 Website: <a href="http://iiitsonepat.ac.in" target="_blank" rel="noopener noreferrer">iiitsonepat.ac.in</a></p>
                    </div>

                    <div className="contact-form">
                        <h2>Feedback Counter</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Give Suggestions/Feedback !"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </div>

            {/* Footer */}
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

export default Contact;
