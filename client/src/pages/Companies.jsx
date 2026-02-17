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
            console.log("dt:+> ", uniqueCompanies)
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

  <section className="companies-section">
    <h2>Companies with IIIT Sonepat Alumni</h2>

    <div className="company-list">
      {companies.map((company, index) => (
        <div
          className="company-card"
          key={index}
          onClick={() => handleCompanyClick(company)}
        >
          <h3>{company}</h3>
        </div>
      ))}
    </div>
  </section>

  {/* Company Modal */}
  {showCompanyModal && selectedCompany && (
    <>
      <div className="overlay" onClick={() => {
        setShowCompanyModal(false);
        setShowAlumniModal(false);
      }}></div>

      <div className="alumni-popup">
        <h3>{selectedCompany.name}</h3>
        <ul className="alumni-list">
          {selectedCompany.alumni.map((alumnus, index) => (
            <li key={index} onClick={() => handleAlumniClick(alumnus)}>
              {alumnus.name}
            </li>
          ))}
        </ul>
        <button className="close-btn" onClick={() => setShowCompanyModal(false)}>
          Close
        </button>
      </div>
    </>
  )}

  {/* Alumni Detail Modal */}
  {showAlumniModal && selectedAlumni && (
    <>
      <div className="overlay" onClick={() => setShowAlumniModal(false)}></div>

      <div className="alumni-detail-popup">
        <img
          src={selectedAlumni.photo ? `${import.meta.env.VITE_API_URL}/people/${selectedAlumni.photo}` : "https://via.placeholder.com/100"}
          alt={selectedAlumni.name}
        />
        <h3>{selectedAlumni.name}</h3>
        <p><strong>Position:</strong> {selectedAlumni.position}</p>
        <p><strong>Company:</strong> {selectedAlumni.comp}</p>
        <p><strong>Batch:</strong> {selectedAlumni.batch}</p>
        <p><strong>Email:</strong> {selectedAlumni.email}</p>
        <p><strong>Location:</strong> {selectedAlumni.location}</p>
        <p><strong>Branch:</strong> {selectedAlumni.branch}</p>
        <p><strong>Journey:</strong> {selectedAlumni.summary}</p>

        <button className="close-btn" onClick={() => setShowAlumniModal(false)}>
          Close
        </button>
      </div>
    </>
  )}

</div>

    );
};
export default Companies;