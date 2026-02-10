import React, { useState, useEffect } from 'react';
import api from '../api';
import './Companies.css';
const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [members, setMembers] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedAlumni, setSelectedAlumni] = useState(null);
    const [showCompanyModal, setShowCompanyModal] = useState(false);
    const [showAlumniModal, setShowAlumniModal] = useState(false);

    useEffect(() => {
        fetchMemberData();
    }, []);

    const fetchMemberData = async () => {
        try {
            const response = await api.get('/stdint');
            const data = response.data.documents || [];
            setMembers(data);
            const validMembers = data.filter(m => m.comp && m.position);
            const uniqueCompanies = [...new Set(validMembers.map(m => m.comp))];
            console.log("dt:+> ",uniqueCompanies)
            setCompanies(uniqueCompanies);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    const handleCompanyClick = (company) => {
        const companyAlumni = members.filter(m => m.comp === company && m.position);
        if (companyAlumni.length > 0) {
            setSelectedCompany({ name: company, alumni: companyAlumni });
            setShowCompanyModal(true);
        }
    };

    const handleAlumniClick = (alumnus) => {
        setSelectedAlumni(alumnus);
        setShowAlumniModal(true);
    };

    return (
        <div className="companies-page-container">
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

<section>
    <h2 >
        Companies with IIIT Sonepat Alumni
    </h2>
    <div >
        {companies.map((company, index) => (
            <div 
                key={index} 
                onClick={() => handleCompanyClick(company)}
            >
                <h3>
                    {company}
                </h3>
            </div>
        ))}
    </div>
</section>

                           <div>hello</div>
            {/* Company Modal */}
            {showCompanyModal && selectedCompany && (
                <>
                    <div className="overlay" onClick={() => { setShowCompanyModal(false); setShowAlumniModal(false); }}></div>
                    <div className="alumni-popup">
                        <h3>{selectedCompany.name}</h3>
                        <ul className="alumni-list">
                            {selectedCompany.alumni.map((alumnus, index) => (
                                <li key={index} onClick={() => handleAlumniClick(alumnus)}>
                                    {alumnus.name}
                                </li>
                            ))}
                        </ul>
                        <button className="close-btn" onClick={() => setShowCompanyModal(false)}>Close</button>
                    </div>
                </>
            )}

            {/* Alumni Detail Modal */}
            {showAlumniModal && selectedAlumni && (
                <>
                    <div className="overlay" onClick={() => setShowAlumniModal(false)}></div>
                    <div className="alumni-detail-popup" style={{ zIndex: 1001 }}>
                        <img
                            src={selectedAlumni.photo ? `/people/${selectedAlumni.photo}` : "https://via.placeholder.com/100"}
                            alt={selectedAlumni.name}
                        />
                        <h3>{selectedAlumni.name}</h3>
                        <p><strong>Position:</strong> {selectedAlumni.position || "Not specified"}</p>
                        <p><strong>Company:</strong> {selectedAlumni.comp || "Not specified"}</p>
                        <p><strong>Batch:</strong> {selectedAlumni.batch || "Not specified"}</p>
                        <p><strong>Email:</strong> {selectedAlumni.email || "Not specified"}</p>
                        <p><strong>Location:</strong> {selectedAlumni.location || "Not specified"}</p>
                        <p><strong>Branch:</strong> {selectedAlumni.branch || "Not specified"}</p>
                        <p><strong>Journey:</strong> {selectedAlumni.summary || "No journey available"}</p>
                        <button className="close-btn" onClick={() => setShowAlumniModal(false)}>Close</button>
                    </div>
                </>
            )}
            <h2 style={{ color: "red" }}>
  Companies count: {companies.length}
</h2>

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
export default Companies;