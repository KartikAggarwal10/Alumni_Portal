import React, { useState } from "react";
import "./AdminDashboardStats.css";

const AdminDashboardStats = () => {
  const [stats, setStats] = useState({
    members: "",
    companies: "",
    achievements: "",
    countries: "",
  });

  const handleChange = (e) => {
    setStats({ ...stats, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Stats:", stats);

    // Later: send to backend API
    // fetch("/update-stats", { method: "POST", body: JSON.stringify(stats) })
  };

  return (
    <div className="add-achievement-container">
      <div className="page-header">
        <h1>Update Dashboard Stats</h1>
        <p>Maintain accurate statistics shown on the dashboard</p>
      </div>

      <div className="achievement-section">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Total Members</label>
              <input
                type="number"
                name="members"
                value={stats.members}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Total Companies</label>
              <input
                type="number"
                name="companies"
                value={stats.companies}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Total Achievements</label>
              <input
                type="number"
                name="achievements"
                value={stats.achievements}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Total Countries</label>
              <input
                type="number"
                name="countries"
                value={stats.countries}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Update Stats
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboardStats;
