import React, { useState, useEffect } from 'react';
import api from '../api';
import './Achievements.css';

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    useEffect(() => {
        fetchAchievements();
    }, []);

    const fetchAchievements = async () => {
        try {
            const response = await api.get('/add-ach-api');
            const data = response.data.events || [];
            setAchievements(data);
        } catch (error) {
            console.error("Error loading achievements:", error);
        }
    };

    const handleCardClick = (ach) => {
        setSelectedAchievement(ach);
    };

    const closeModal = () => {
        setSelectedAchievement(null);
    };

    return (
        <div className="achievements-page-container">
            {/* Navbar */}
            <div className="navbar">
                <div className="logo">
                    <img src="/people/logo.webp" alt="IIIT Sonepat Logo" />
                    IIIT Sonepat Alumni Portal
                </div>
                <button className="menu-toggle">≡</button>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/alumni">Alumni</a></li>
                    <li><a href="/giving">Contributions</a></li>
                    <li><a href="/glr">Gallery</a></li>
                    <li><a href="/contct">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>

            <section className="achievements-section">
                <h1>Alumni Achievements</h1>
                <div className="achievements-list">
                    {achievements.map((ach, index) => (
                        <div key={index} className="achievement-card" onClick={() => handleCardClick(ach)}>
                            <img
                                src={ach.photo ? `/people/${ach.photo}` : "https://via.placeholder.com/100"}
                                alt={ach.name}
                            />
                            <h2>{ach.achievementTitle}</h2>
                            <p><strong>Alumni Name:</strong> {ach.name}</p>
                            <p><strong>Achievement:</strong> {ach.achievement}</p>
                            <p className="date">{ach.date || "N/A"}</p>
                        </div>
                    ))}
                </div>
            </section>

            {selectedAchievement && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={closeModal}>×</span>
                        <img
                            src={selectedAchievement.photo ? `/people/${selectedAchievement.photo}` : "https://via.placeholder.com/150"}
                            alt={selectedAchievement.name}
                        />
                        <h2 style={{ textAlign: 'center' }}>{selectedAchievement.achievementTitle}</h2>
                        <div>
                            <p><strong>Name:</strong> {selectedAchievement.name}</p>
                            <p><strong>Email:</strong> {selectedAchievement.email}</p>
                            <p><strong>Phone:</strong> {selectedAchievement.phone}</p>
                            <p><strong>Education:</strong> {selectedAchievement.education}</p>
                            <p><strong>Achievements:</strong> {selectedAchievement.achievement}</p>
                            <p><strong>Current Role:</strong> {selectedAchievement.currentRole}</p>
                            <p><strong>Notable Projects:</strong> {selectedAchievement.projects}</p>
                            <p><strong>Story:</strong> {selectedAchievement.story}</p>
                        </div>
                    </div>
                </div>
            )}

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

export default Achievements;
