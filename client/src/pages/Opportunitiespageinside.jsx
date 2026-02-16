import React, { useState } from 'react';
import styles from './Opportunitiesinside.module.css';

export default function OpportunitiesPage() {
  const [showOpenOnly, setShowOpenOnly] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState({
    opportunityType: true,
    locations: true,
    industry: false,
    workplaceType: false,
    salary: false,
    skills: false,
    workExperience: true
  });
  
  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const jobs = [
    {
      id: 1,
      title: "Senior Director/Director (Outreach) - Career Development Office",
      company: "IIIT Sonepat",
      location: "Mumbai",
      locationType: "On-site",
      experience: "9-10 years",
      salary: "Not specified",
      type: "Full Time",
      postedDays: 3,
      deadline: "Feb 20, 2026",
      tags: ["Leadership", "Career Development", "Higher Education", "Outreach"],
      description: "Lead career development initiatives and build industry partnerships for IIIT Sonepat students."
    },
    {
      id: 2,
      title: "Assistant Manager - Operations",
      company: "IIIT Sonepat",
      location: "Okhla Ph - I",
      locationType: "On-site",
      experience: "2-4 years",
      salary: "₹6-8 LPA",
      type: "Full Time",
      postedDays: 3,
      deadline: "Feb 20, 2026",
      tags: ["Operations", "Management", "Administration"],
      description: "Manage day-to-day operations and coordinate with various departments to ensure smooth functioning."
    },
    {
      id: 3,
      title: "Machine Learning Engineer",
      company: "IIIT Sonepat",
      location: "India",
      locationType: "Hybrid",
      experience: "3-5 years",
      salary: "₹15-25 LPA",
      type: "Full Time",
      postedDays: 5,
      deadline: "Feb 25, 2026",
      tags: ["Machine Learning", "Python", "AI", "Deep Learning", "TensorFlow"],
      description: "Build and deploy ML models for research projects. Experience with NLP and computer vision preferred."
    },
    {
      id: 4,
      title: "Full Stack Developer - EdTech Platform",
      company: "IIIT Sonepat",
      location: "Sonepat",
      locationType: "On-site",
      experience: "2-3 years",
      salary: "₹10-15 LPA",
      type: "Full Time",
      postedDays: 4,
      deadline: "3 days",
      tags: ["React", "Node.js", "MongoDB", "Full Stack", "EdTech"],
      description: "Develop and maintain the institute's learning management system and student portal."
    },
    {
      id: 5,
      title: "Research Associate - Computer Vision",
      company: "IIIT Sonepat",
      location: "Sonepat",
      locationType: "On-site",
      experience: "1-2 years",
      salary: "₹8-12 LPA",
      type: "Full Time",
      postedDays: 2,
      deadline: "Feb 28, 2026",
      tags: ["Computer Vision", "Research", "OpenCV", "Deep Learning", "Python"],
      description: "Work on cutting-edge computer vision research projects with faculty members and PhD students."
    },
    {
      id: 6,
      title: "UI/UX Designer - Digital Innovation Lab",
      company: "IIIT Sonepat",
      location: "Sonepat",
      locationType: "Hybrid",
      experience: "2-4 years",
      salary: "₹8-14 LPA",
      type: "Full Time",
      postedDays: 6,
      deadline: "Mar 5, 2026",
      tags: ["UI/UX", "Figma", "Design Systems", "User Research"],
      description: "Design intuitive interfaces for educational technology products and conduct user research."
    },
    {
      id: 7,
      title: "DevOps Engineer - Infrastructure Team",
      company: "IIIT Sonepat",
      location: "Remote",
      locationType: "Remote",
      experience: "3-6 years",
      salary: "₹12-20 LPA",
      type: "Full Time",
      postedDays: 7,
      deadline: "Mar 1, 2026",
      tags: ["DevOps", "AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
      description: "Manage cloud infrastructure and implement DevOps practices for the institute's technology stack."
    },
    {
      id: 8,
      title: "Data Analyst - Academic Insights",
      company: "IIIT Sonepat",
      location: "Sonepat",
      locationType: "On-site",
      experience: "1-3 years",
      salary: "₹6-10 LPA",
      type: "Full Time",
      postedDays: 4,
      deadline: "Feb 27, 2026",
      tags: ["Data Analysis", "SQL", "Python", "Tableau", "Statistics"],
      description: "Analyze academic data to generate insights for improving student performance and institutional effectiveness."
    },
    {
      id: 9,
      title: "Content Writer - Technical Documentation",
      company: "IIIT Sonepat",
      location: "India",
      locationType: "Remote",
      experience: "1-2 years",
      salary: "₹4-7 LPA",
      type: "Part Time",
      postedDays: 8,
      deadline: "Mar 10, 2026",
      tags: ["Content Writing", "Technical Writing", "Documentation", "Communication"],
      description: "Create technical documentation, course materials, and educational content for various programs."
    },
    {
      id: 10,
      title: "Summer Research Intern - AI Lab",
      company: "IIIT Sonepat",
      location: "Sonepat",
      locationType: "On-site",
      experience: "0-1 year",
      salary: "₹25,000/month",
      type: "Internship",
      postedDays: 2,
      deadline: "2 days",
      tags: ["Internship", "AI", "Research", "Python", "Machine Learning"],
      description: "Summer internship opportunity for students interested in AI research. Work with faculty on ongoing projects."
    },
    {
      id: 11,
      title: "Blockchain Developer - Research Project",
      company: "IIIT Sonepat",
      locationType: "Hybrid",
      location: "India",
      experience: "2-4 years",
      salary: "₹12-18 LPA",
      type: "Contract",
      postedDays: 5,
      deadline: "Mar 15, 2026",
      tags: ["Blockchain", "Solidity", "Web3", "Smart Contracts", "Ethereum"],
      description: "Develop blockchain solutions for academic credential verification and decentralized applications."
    },
    {
      id: 12,
      title: "Cybersecurity Analyst - IT Security",
      company: "IIIT Sonepat",
      location: "Sonepat",
      locationType: "On-site",
      experience: "3-5 years",
      salary: "₹10-16 LPA",
      type: "Full Time",
      postedDays: 6,
      deadline: "Mar 8, 2026",
      tags: ["Cybersecurity", "Network Security", "Penetration Testing", "SIEM"],
      description: "Ensure security of institutional IT infrastructure and conduct regular security audits and assessments."
    }
  ];

  const getBadgeClass = (type) => {
    switch(type.toLowerCase()) {
      case 'full time':
        return styles.badgeFullTime;
      case 'part time':
        return styles.badgePartTime;
      case 'contract':
        return styles.badgeContract;
      case 'internship':
        return styles.badgeInternship;
      default:
        return styles.badgeFullTime;
    }
  };

  const isDeadlineUrgent = (deadline) => {
    if (deadline.includes('day')) {
      const days = parseInt(deadline);
      return days <= 3;
    }
    return false;
  };

  return (
    <div className={styles.opportunitiesPage}>
      {/* Sidebar Filters */}
      <aside className={styles.sidebar}>
        <div className={styles.filtersHeader}>
          <span className={styles.filterIcon}>⚙️</span>
          Filters
        </div>

        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input 
            type="text" 
            className={styles.searchInput} 
            placeholder="Search by company, title"
          />
        </div>

        <div className={styles.checkboxContainer}>
          <input 
            type="checkbox" 
            id="open-only" 
            checked={showOpenOnly}
            onChange={(e) => setShowOpenOnly(e.target.checked)}
          />
          <label htmlFor="open-only" className={styles.checkboxLabel}>
            Show open opportunities only
          </label>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilter('opportunityType')}>
            <span>Opportunity type</span>
            <span className={`${styles.chevron} ${expandedFilters.opportunityType ? styles.rotated : ''}`}>
              ▼
            </span>
          </div>
          {expandedFilters.opportunityType && (
            <div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="full-time" />
                <label htmlFor="full-time" className={styles.checkboxLabel}>Full Time</label>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="part-time" />
                <label htmlFor="part-time" className={styles.checkboxLabel}>Part Time</label>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="internship" />
                <label htmlFor="internship" className={styles.checkboxLabel}>Internship</label>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="contract" />
                <label htmlFor="contract" className={styles.checkboxLabel}>Contract</label>
              </div>
            </div>
          )}
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilter('locations')}>
            <span>Locations</span>
            <span className={`${styles.chevron} ${expandedFilters.locations ? styles.rotated : ''}`}>▼</span>
          </div>
          {expandedFilters.locations && (
            <div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="sonepat" />
                <label htmlFor="sonepat" className={styles.checkboxLabel}>Sonepat</label>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="delhi" />
                <label htmlFor="delhi" className={styles.checkboxLabel}>Delhi NCR</label>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="remote" />
                <label htmlFor="remote" className={styles.checkboxLabel}>Remote</label>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="hybrid" />
                <label htmlFor="hybrid" className={styles.checkboxLabel}>Hybrid</label>
              </div>
            </div>
          )}
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilter('industry')}>
            <span>Industry</span>
            <span className={`${styles.chevron} ${expandedFilters.industry ? styles.rotated : ''}`}>▼</span>
          </div>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilter('workplaceType')}>
            <span>Workplace type</span>
            <span className={`${styles.chevron} ${expandedFilters.workplaceType ? styles.rotated : ''}`}>▼</span>
          </div>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilter('salary')}>
            <span>Salary</span>
            <span className={`${styles.chevron} ${expandedFilters.salary ? styles.rotated : ''}`}>▼</span>
          </div>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilter('skills')}>
            <span>Skills</span>
            <span className={`${styles.chevron} ${expandedFilters.skills ? styles.rotated : ''}`}>▼</span>
          </div>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilter('workExperience')}>
            <span>Work experience</span>
            <span className={`${styles.chevron} ${expandedFilters.workExperience ? styles.rotated : ''}`}>▼</span>
          </div>
          {expandedFilters.workExperience && (
            <div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="entry" />
                <label htmlFor="entry" className={styles.checkboxLabel}>0-2 years</label>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="mid" />
                <label htmlFor="mid" className={styles.checkboxLabel}>3-5 years</label>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="senior" />
                <label htmlFor="senior" className={styles.checkboxLabel}>6+ years</label>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentHeader}>
          <h1 className={styles.pageTitle}>Opportunities</h1>
          <p className={styles.opportunitiesCount}>
            Showing <strong>{jobs.length}</strong> opportunities
          </p>
        </div>

        <div className={styles.opportunitiesList}>
          {jobs.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <button className={styles.bookmarkBtn} aria-label="Bookmark job">
                🔖
              </button>

              <div className={styles.jobHeader}>
                <div className={styles.jobTitleSection}>
                  <h2 className={styles.jobTitle}>{job.title}</h2>
                  <div className={styles.jobCompany}>
                    <span className={styles.companyBadge}>{job.company}</span>
                  </div>
                </div>
                <div className={`${styles.jobTypeBadge} ${getBadgeClass(job.type)}`}>
                  {job.type}
                </div>
              </div>

              <div className={styles.jobMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📍</span>
                  <span>{job.location} ({job.locationType})</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>💼</span>
                  <span>{job.experience}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>💰</span>
                  <span>{job.salary}</span>
                </div>
              </div>

              {job.tags && (
                <div className={styles.jobTags}>
                  {job.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}

              <div className={styles.jobFooter}>
                <div className={styles.jobDates}>
                  <div className={styles.dateItem}>
                    <span>Posted {job.postedDays} days ago</span>
                  </div>
                  <div className={`${styles.dateItem} ${isDeadlineUrgent(job.deadline) ? styles.deadlineUrgent : ''}`}>
                    <span>Apply by {job.deadline}</span>
                  </div>
                </div>
                <button className={styles.applyButton}>
                  Apply Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}