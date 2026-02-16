import React, { useState } from "react";
import "./AdminDashboardStats.css";
const AdminDashboardStats = () => {
  const [stats, setStats] = useState({
  member: "",
  comp: "",
  ach: "",
  countries: "",
});

  const handleChange = (e) => {
  const { name, value } = e.target;
  setStats(prev => ({
    ...prev,
    [name]: value
  }));
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3000/dmin-upd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stats),
    });

    const data = await res.json();
    alert(data.message);

  } catch (error) {
    console.error("Error updating stats:", error);
    alert("Failed to update stats");
  }
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
  name="member"
  value={stats.member}
  onChange={handleChange}
  required
/>
            </div>

            <div className="form-group">
              <label>Total Companies</label>
            <input
  type="number"
  name="comp"
  value={stats.comp}
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
  name="ach"
  value={stats.ach}
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
