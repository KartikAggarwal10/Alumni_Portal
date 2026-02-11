import React, { useState, useEffect } from 'react';
import api from '../api';
import './Members.css';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [filters, setFilters] = useState({
        batch: '',
        location: '',
        branch: '',
        company: ''
    });
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSrc, setLightboxSrc] = useState('');

    useEffect(() => {
        fetchMembers();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [members, filters]);

    const fetchMembers = async () => {
        try {
            const response = await api.get('/stdint');
            const data = response.data.documents || [];
            const validMembers = data.filter(m => m.batch && m.comp);
            setMembers(validMembers);
        } catch (error) {
            console.error("Failed to fetch members:", error);
        }
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.id]: e.target.value });
    };

    const applyFilters = () => {
        let result = members;
        if (filters.batch) result = result.filter(m => m.batch === filters.batch);
        if (filters.location) result = result.filter(m => (m.location || "").toLowerCase().includes(filters.location.toLowerCase().trim()));
        if (filters.branch) result = result.filter(m => m.branch === filters.branch);
        if (filters.company) result = result.filter(m => (m.comp || "").toLowerCase().includes(filters.company.toLowerCase().trim()));
        setFilteredMembers(result);
    };

    const openLightbox = (src) => {
        setLightboxSrc(src);
        setLightboxOpen(true);
    };

    const toggleSummary = (index) => {
        const newMembers = [...filteredMembers];
        newMembers[index] = { ...newMembers[index], expanded: !newMembers[index].expanded };
        setFilteredMembers(newMembers);
    };

    return (
        <div className="members-page-container">
            {/* Container with filter sidebar and member list */}
            <div className="container">
                {/* Filter Sidebar */}
                <div className="filter-sidebar">
                    <h2>Filters</h2>
                    <select id="batch" onChange={handleFilterChange} value={filters.batch}>
                        <option value="">All Batches</option>
                        {[...Array(12)].map((_, i) => (
                            <option key={i} value={2014 + i}>{2014 + i}</option>
                        ))}
                    </select>
                    <input type="text" id="location" placeholder="Filter by Location" onChange={handleFilterChange} value={filters.location} />
                    <select id="branch" onChange={handleFilterChange} value={filters.branch}>
                        <option value="">All Branches</option>
                        <option value="IT">IT</option>
                        <option value="CS">CS</option>
                        <option value="DSA">DSA</option>
                        <option value="ECE">ECE</option>
                    </select>
                    <input type="text" id="company" placeholder="Filter by Company" onChange={handleFilterChange} value={filters.company} />
                </div>

                {/* Content / Members List */}
                <div className="content">
                    <h1>Members</h1>
                    <div className="members-list" id="membersList">
                        {filteredMembers.map((member, index) => {
                            const photoUrl = member.photo
                                ? `/people/${member.photo}`
                                : "https://tg-stockach.de/wp-content/uploads/2020/12/5f4d0f15338e20133dc69e95_dummy-profile-pic-300x300.png";
                            return (
                                <div key={index} className="member-block">
                                    <img
                                        src={photoUrl}
                                        alt={member.name}
                                        onClick={() => openLightbox(photoUrl)}
                                    />
                                    <div className="member-info">
                                        <h2>{member.name}</h2>
                                        <p><strong>Company:</strong> {member.comp || "Not specified"}</p>
                                        <p><strong>Position:</strong> {member.position || "Not specified"}</p>
                                        <p><strong>Email:</strong> {member.email || "Not specified"}</p>
                                        <p><strong>Batch:</strong> {member.batch || "Not specified"}</p>
                                        <p><strong>Branch:</strong> {member.branch || "Not specified"}</p>
                                        <p><strong>Location:</strong> {member.location || "Not specified"}</p>
                                        <div className={`summary ${member.expanded ? 'full' : ''}`}>
                                            {member.summary || "No summary available"}
                                        </div>
                                        {member.summary && member.summary.length > 100 && (
                                            <span className="read-more" style={{ display: 'block' }} onClick={() => toggleSummary(index)}>
                                                {member.expanded ? 'Read Less' : 'Read More'}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="lightbox active" onClick={() => setLightboxOpen(false)}>
                    <img src={lightboxSrc} alt="Enlarged Photo" onClick={(e) => e.stopPropagation()} />
                </div>
            )}

           
        </div>
    );
};

export default Members;
