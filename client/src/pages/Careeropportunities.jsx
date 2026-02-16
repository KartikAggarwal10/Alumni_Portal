import React from "react";
import styles from "./CareerOpportunities.module.css";

const CareerOpportunities = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Director/Director (Outreach) ",
      company: "Ashoka University",
      jobType: "Full Time",
      location: "Mumbai(On-site)",
      experience: "9-10 years",
    },
    {
      id: 2,
      title: "Assistant Manager",
      company: "Ashoka University",
      jobType: "Full Time",
      location: "Okhla Ph - I(On-site)",
      experience: "2-4 years",
    },
    {
      id: 3,
      title: "Multiple Roles",
      company: "AshokaX",
      jobType: "Contractual / Freelance work",
      location: "India(On-site)",
      experience: "1-10 years",
    },
  ];

  return (
    <div className={styles.careerOpportunities}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Career Opportunities</h2>
        <a href="/OpportunitiesPage">
          <button className={styles.viewAllBtn}>View All</button>
        </a>
      </div>

      {/* Jobs Grid */}
      <div className={styles.jobsGrid}>
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className={styles.jobCard}
            style={{ "--index": index }}
          >
            {/* Title and Job Type */}
            <div className={styles.jobHeader}>
              <h3 className={styles.jobTitle}>
                {job.title} | {job.company}
              </h3>
              <span className={styles.jobType}>{job.jobType}</span>
            </div>

            {/* Location */}
            <div className={styles.jobInfo}>
              <span className={styles.icon}>📍</span>
              <span>{job.location}</span>
            </div>

            {/* Experience */}
            <div className={styles.jobInfo}>
              <span className={styles.icon}>💼</span>
              <span>{job.experience}</span>
            </div>

            {/* View Details Button */}
            <button className={styles.viewDetailsBtn}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerOpportunities;