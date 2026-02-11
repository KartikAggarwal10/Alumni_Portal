import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './Alumni.css';
const Alumni = () => {
    const [alumniData, setAlumniData] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [expandedBatches, setExpandedBatches] = useState({});
    const [expandedBranches, setExpandedBranches] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchAlumni();
    }, []);

    const fetchAlumni = async () => {
        try {
            const response = await api.get('/eventreg-pi');
            const events = response.data.events || [];
            const filteredData = events.filter(alumni => alumni.name && alumni.batch && alumni.branch);
            const organized = organizeData(filteredData);
            setAlumniData(organized);
        } catch (error) {
            console.error("Error fetching alumni data:", error);
        } finally {
            setLoading(false);
        }
    };

    const organizeData = (data) => {
        const organized = {};
        data.forEach(alumni => {
            if (!organized[alumni.batch]) organized[alumni.batch] = {};
            if (!organized[alumni.batch][alumni.branch]) organized[alumni.batch][alumni.branch] = [];
            organized[alumni.batch][alumni.branch].push(alumni);
        });
        return organized;
    };

    const toggleBatch = async (batch) => {
        try {
            const isLoggedInResponse = await api.get('/is-logged-in');
            const isLoggedIn = isLoggedInResponse.data.loggedIn;

            if (!isLoggedIn) {
                if (window.confirm("You need to be logged in to view alumni details. Login now?")) {
                    navigate('/login');
                }
                return;
            }
        } catch (err) {
            console.error("Login check failed", err);
        }

        setExpandedBatches(prev => ({
            ...prev,
            [batch]: !prev[batch]
        }));
    };

    const toggleBranch = (batch, branch) => {
        const key = `${batch}-${branch}`;
        setExpandedBranches(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const openModal = (student) => {
        setSelectedStudent(student);
    };

    const closeModal = () => {
        setSelectedStudent(null);
    };

    if (loading) return <div className="alumni-page-container" style={{ padding: '50px', textAlign: 'center' }}>Loading...</div>;

    return (
        <div className="alumni-page-container">
            {/* Intro Section */}
            <div className="intro-section">
                <h1>Welcome to Our Alumni Network</h1>
                <p>Explore the vibrant community of IIIT Sonepat alumni, connect with past graduates, and celebrate the legacy of excellence that continues to shape our institute.</p>
            </div>

            {/* Alumni Directory Section */}
          <div className="alumni-container" id="alumniContainer">
    <h2 className="section-title">Alumni Directory</h2>

    {Object.keys(alumniData).length === 0 ? (
        <p>No alumni data available yet.</p>
    ) : (
        <div className="years-grid">
            {Object.keys(alumniData).map(batch => (
                <div key={batch} className="year-section">
                    <div className="year-header" onClick={() => toggleBatch(batch)}>
                        Batch {batch}
                    </div>
                    {expandedBatches[batch] && (
                        <div className="branch-list">
                            {Object.keys(alumniData[batch]).map(branch => (
                                <div key={branch} className="branch-section">
                                    <div className="branch-header" onClick={() => toggleBranch(batch, branch)}>
                                        {branch}
                                    </div>
                                    {(expandedBranches[`${batch}-${branch}`]) && (
                                        <div className="student-list">
                                            {alumniData[batch][branch].map((alumni, index) => (
                                                <div key={index} className="student-item" onClick={() => openModal(alumni)}>
                                                    {alumni.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )}
</div>
            {/* Modal for Alumni Details */}
            {selectedStudent && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close-btn" onClick={closeModal}>×</span>
                        <h2>{selectedStudent.name || "N/A"}</h2>
                        <img
                            src={selectedStudent.photo ? `/people/${selectedStudent.photo}` : ""}
                            alt="Student Photo"
                            id="studentPhoto"
                            onError={(e) => { e.target.style.display = 'none' }}
                        />
                        <p><strong>Batch:</strong> {selectedStudent.batch || "N/A"}</p>
                        <p><strong>Branch:</strong> {selectedStudent.branch || "N/A"}</p>
                        <p><strong>Date of Birth:</strong> {selectedStudent.dob || "N/A"}</p>
                        <p><strong>Address:</strong> {selectedStudent.address || "N/A"}</p>
                        <p><strong>Contact No:</strong> {selectedStudent.contact || "N/A"}</p>
                        <p><strong>Email ID:</strong> {selectedStudent.email || "N/A"}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Alumni;
