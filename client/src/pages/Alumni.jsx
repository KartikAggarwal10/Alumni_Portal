import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import styles from './Alumni.module.css';

const Alumni = () => {
    const [alumniData, setAlumniData] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [expandedBatches, setExpandedBatches] = useState({});
    const [expandedBranches, setExpandedBranches] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
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

    const organizeIntoColumns = (data, numColumns = 3) => {
        const batches = Object.keys(data).sort((a, b) => b - a);
        const columns = Array.from({ length: numColumns }, () => []);
        
        batches.forEach((batch, index) => {
            const columnIndex = index % numColumns;
            columns[columnIndex].push(batch);
        });
        
        return columns;
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

    const getTotalAlumni = () => {
        let total = 0;
        Object.values(alumniData).forEach(branches => {
            Object.values(branches).forEach(students => {
                total += students.length;
            });
        });
        return total;
    };

    const getTotalBatches = () => {
        return Object.keys(alumniData).length;
    };

    if (loading) {
        return (
            <div className={styles.alumniPageContainer}>
                <div className={styles.loadingSpinner}>
                    <div className={styles.spinner}></div>
                    <p>Loading Alumni Data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.alumniPageContainer}>
            {/* Hero Section */}
            <div className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.heroLeft}>
                        <h1 className={styles.heroTitle}>Alumni Network</h1>
                    </div>
                    <div className={styles.heroRight}>
                        <p className={styles.heroSubtitle}>
                            Connect with thousands of accomplished alumni who are shaping the future across industries worldwide
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>{getTotalAlumni()}+</div>
                                <div className={styles.statLabel}>Alumni</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>{getTotalBatches()}</div>
                                <div className={styles.statLabel}>Batches</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>50+</div>
                                <div className={styles.statLabel}>Countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className={styles.ctaBanner}>
                <div className={styles.ctaContent}>
                    <div className={styles.ctaText}>
                        <h2>Join Our Growing Community</h2>
                        <p>Be part of a network that empowers, inspires, and creates opportunities</p>
                    </div>
                    <a href="/register" className={styles.ctaButton}>
                        <span>Register Now</span>
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            {/* Search Section */}
            <div className={styles.searchSection}>
                <div className={styles.searchContainer}>
                    <i className={`fas fa-search ${styles.searchIcon}`}></i>
                    <input
                        type="text"
                        placeholder="Search by name, batch, or branch..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Alumni Directory Section */}
            <div className={styles.alumniDirectory}>
                <div className={styles.directoryHeader}>
                    <h2 className={styles.directoryTitle}>Alumni Directory</h2>
                    <p className={styles.directorySubtitle}>Explore our alumni organized by batch and branch</p>
                </div>

                {Object.keys(alumniData).length === 0 ? (
                    <div className={styles.emptyState}>
                        <i className="fas fa-users"></i>
                        <h3>No Alumni Data Available</h3>
                        <p>Check back soon as we update our directory</p>
                    </div>
                ) : (
                    <div className={styles.yearsGrid}>
                        {organizeIntoColumns(alumniData).map((column, colIndex) => (
                            <div key={colIndex} className={styles.gridColumn}>
                                {column.map(batch => (
                                    <div key={batch} className={styles.batchCard}>
                                        <div
                                            className={`${styles.batchHeader} ${expandedBatches[batch] ? styles.expanded : ''}`}
                                            onClick={() => toggleBatch(batch)}
                                        >
                                            <div className={styles.batchInfo}>
                                                <span className={styles.batchLabel}>Batch</span>
                                                <span className={styles.batchYear}>{batch}</span>
                                            </div>
                                            <i className={`fas fa-chevron-${expandedBatches[batch] ? 'up' : 'down'} ${styles.batchIcon}`}></i>
                                        </div>
                                        
                                        {expandedBatches[batch] && (
                                            <div className={styles.batchContent}>
                                                {Object.keys(alumniData[batch]).map(branch => (
                                                    <div key={branch} className={styles.branchSection}>
                                                        <div
                                                            className={`${styles.branchHeader} ${expandedBranches[`${batch}-${branch}`] ? styles.expanded : ''}`}
                                                            onClick={() => toggleBranch(batch, branch)}
                                                        >
                                                            <div className={styles.branchInfo}>
                                                                <i className={`fas fa-graduation-cap ${styles.branchIcon}`}></i>
                                                                <span className={styles.branchName}>{branch}</span>
                                                                <span className={styles.studentCount}>
                                                                    ({alumniData[batch][branch].length})
                                                                </span>
                                                            </div>
                                                            <i className={`fas fa-chevron-${expandedBranches[`${batch}-${branch}`] ? 'up' : 'down'}`}></i>
                                                        </div>
                                                        
                                                        {expandedBranches[`${batch}-${branch}`] && (
                                                            <div className={styles.studentList}>
                                                                {alumniData[batch][branch].map((alumni, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className={styles.studentItem}
                                                                        onClick={() => openModal(alumni)}
                                                                    >
                                                                        <div className={styles.studentAvatar}>
                                                                            {alumni.name.charAt(0).toUpperCase()}
                                                                        </div>
                                                                        <span className={styles.studentName}>{alumni.name}</span>
                                                                        <i className={`fas fa-arrow-right ${styles.studentArrow}`}></i>
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
                        ))}
                    </div>
                )}
            </div>

            {/* Modal for Alumni Details */}
            {selectedStudent && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContainer} onClick={e => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </button>
                        
                        <div className={styles.modalHeader}>
                            <div className={styles.modalAvatarLarge}>
                                {selectedStudent.photo ? (
                                    <img
                                        src={`/people/${selectedStudent.photo}`}
                                        alt={selectedStudent.name}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                <div className={styles.modalAvatarPlaceholder}>
                                    {selectedStudent.name.charAt(0).toUpperCase()}
                                </div>
                            </div>
                            <h2 className={styles.modalName}>{selectedStudent.name}</h2>
                            <div className={styles.modalBatchBranch}>
                                <span className={styles.modalBadge}>{selectedStudent.batch}</span>
                                <span className={styles.modalBadge}>{selectedStudent.branch}</span>
                            </div>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.infoGrid}>
                                {selectedStudent.dob && (
                                    <div className={styles.infoItem}>
                                        <i className={`fas fa-birthday-cake ${styles.infoIcon}`}></i>
                                        <div className={styles.infoContent}>
                                            <span className={styles.infoLabel}>Date of Birth</span>
                                            <span className={styles.infoValue}>{selectedStudent.dob}</span>
                                        </div>
                                    </div>
                                )}
                                
                                {selectedStudent.email && (
                                    <div className={styles.infoItem}>
                                        <i className={`fas fa-envelope ${styles.infoIcon}`}></i>
                                        <div className={styles.infoContent}>
                                            <span className={styles.infoLabel}>Email</span>
                                            <a href={`mailto:${selectedStudent.email}`} className={`${styles.infoValue} ${styles.infoLink}`}>
                                                {selectedStudent.email}
                                            </a>
                                        </div>
                                    </div>
                                )}
                                
                                {selectedStudent.contact && (
                                    <div className={styles.infoItem}>
                                        <i className={`fas fa-phone ${styles.infoIcon}`}></i>
                                        <div className={styles.infoContent}>
                                            <span className={styles.infoLabel}>Contact</span>
                                            <a href={`tel:${selectedStudent.contact}`} className={`${styles.infoValue} ${styles.infoLink}`}>
                                                {selectedStudent.contact}
                                            </a>
                                        </div>
                                    </div>
                                )}
                                
                                {selectedStudent.address && (
                                    <div className={`${styles.infoItem} ${styles.infoItemFullWidth}`}>
                                        <i className={`fas fa-map-marker-alt ${styles.infoIcon}`}></i>
                                        <div className={styles.infoContent}>
                                            <span className={styles.infoLabel}>Address</span>
                                            <span className={styles.infoValue}>{selectedStudent.address}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button
                                className={`${styles.modalActionBtn} ${styles.modalActionBtnPrimary}`}
                                onClick={() => window.location.href = `mailto:${selectedStudent.email}`}
                            >
                                <i className="fas fa-envelope"></i>
                                Send Email
                            </button>
                            <button
                                className={`${styles.modalActionBtn} ${styles.modalActionBtnSecondary}`}
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Alumni;