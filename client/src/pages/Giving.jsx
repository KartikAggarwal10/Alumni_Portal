import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import './Giving.css';

const Giving = () => {
    const [recentDonations, setRecentDonations] = useState([]);
    const [batchDonations, setBatchDonations] = useState({});
    const [expandedBatches, setExpandedBatches] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "https://texarkanafyi.com/wp-content/uploads/2016/10/collegedonation.jpg",
        "https://campusmagazine.wlu.ca/images/2019/fall-winter/alumni-donation-f.jpg"
    ];

    useEffect(() => {
        fetchDonations();
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const fetchDonations = async () => {
        try {
            const response = await api.get('/donationpi');
            const data = response.data.events || [];

            setRecentDonations([...data].reverse().slice(0, 3));

            const organized = {};
            data.forEach(donation => {
                if (!organized[donation.batch]) organized[donation.batch] = [];
                organized[donation.batch].push(donation);
            });
            setBatchDonations(organized);
        } catch (error) {
            console.error("Failed to fetch donations:", error);
        }
    };

    const toggleBatch = (batch) => {
        setExpandedBatches(prev => ({ ...prev, [batch]: !prev[batch] }));
    };

    const changeSlide = (n) => {
        let newIndex = currentSlide + n;
        if (newIndex >= slides.length) newIndex = 0;
        if (newIndex < 0) newIndex = slides.length - 1;
        setCurrentSlide(newIndex);
    };

    return (
        <div className="giving-page-container">
            {/* Slideshow */}
            <div className="slideshow-container">
                {slides.map((src, index) => (
                    <img
                        key={index}
                        className="slide"
                        src={src}
                        alt={`Giving ${index + 1}`}
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                    />
                ))}
                <button className="prev" onClick={() => changeSlide(-1)}>❮</button>
                <button className="next" onClick={() => changeSlide(1)}>❯</button>
            </div>

            {/* Header */}
            <div className="giving-section">
                <div className="header-section">
                    <h1>Alumni Contributions</h1>
                    <p>Building a Legacy, One Step at a Time</p>
                </div>
            </div>

            {/* Recent Donations */}
            <div className="recent-donations">
                <div id="recentList" className="recentList">
                    {recentDonations.length === 0 ? (
                        <p>No donations yet.</p>
                    ) : (
                        recentDonations.map((donation, index) => (
                            <div key={index} className="donation-item">
                                <div className="donation-details">
                                    <p><strong>Name:</strong> {donation.name}</p>
                                    <p><strong>Amount:</strong> ₹{donation.amount}</p>
                                    <p><strong>Purpose:</strong> {donation.purpose}</p>
                                    <p><strong>Email:</strong> {donation.email}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Batchwise Contributions */}
            <div className="batch-list" style={{ textAlign: 'center' }}>
                <h2 style={{ textAlign: 'center' }}>Batchwise Contributions</h2>
                <div id="batchList">
                    {Object.keys(batchDonations).map(batch => (
                        <div key={batch} className="batch-section">
                            <div className="batch-header" onClick={() => toggleBatch(batch)}>
                                Batch {batch}
                            </div>
                            {expandedBatches[batch] && (
                                <div className="batch-donations">
                                    {batchDonations[batch].map((donation, index) => (
                                        <div key={index} className="donation-item">
                                            <div className="donation-details">
                                                <p><strong>Name:</strong> {donation.name}</p>
                                                <p><strong>Amount:</strong> ₹{donation.amount}</p>
                                                <p><strong>Purpose:</strong> {donation.purpose}</p>
                                                <p><strong>Email:</strong> {donation.email}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Donate Button */}
            <div className="but">
                <Link to="/donation" className="donate-btn">Add Your Support</Link>
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

export default Giving;
