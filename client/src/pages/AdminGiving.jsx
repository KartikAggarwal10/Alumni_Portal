import React, { useEffect, useState } from "react";
import "./AdminGiving.css";

const AdminGiving = () => {
  const [donations, setDonations] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    batch: "",
    amount: "",
    purpose: "",
    occupation: "",
    message: "",
  });

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const res = await fetch("http://localhost:3000/donationpi");
      const data = await res.json();
      setDonations(data.events || []);
    } catch (err) {
      console.error("Error fetching donations:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3000/admin-fill-giving", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);

    fetchDonations(); // refresh list after adding

    setFormData({
      name: "",
      email: "",
      batch: "",
      amount: "",
      purpose: "",
      occupation: "",
      message: "",
    });

  } catch (err) {
    console.error("Error submitting donation:", err);
    alert("Failed to submit donation");
  }
};


  return (
    <div className="add-achievement-container">
      <div className="page-header">
        <h1>Admin Donation Entry</h1>
        <p>Manage and review alumni contributions</p>
      </div>

      <div className="achievement-section">
        {/* Donation Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Batch</label>
              <input
                type="text"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                placeholder="e.g. 2020"
                required
              />
            </div>

            <div className="form-group">
              <label>Amount (₹)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Purpose</label>
              <input
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Occupation</label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any message from donor"
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Donation
          </button>
        </form>

        {/* Donation List */}
        <div className="donation-list">
          <h2>Existing Donations</h2>

          {donations.length === 0 && (
            <p className="empty-text">No donations yet.</p>
          )}

          {donations.map((donation, index) => (
            <div className="donation-card" key={index}>
              <h3>{donation.name}</h3>
              <p><strong>Email:</strong> {donation.email}</p>
              <p><strong>Batch:</strong> {donation.batch}</p>
              <p><strong>Amount:</strong> ₹{donation.amount}</p>
              <p><strong>Purpose:</strong> {donation.purpose}</p>
              <p><strong>Occupation:</strong> {donation.occupation}</p>
              {donation.message && (
                <p><strong>Message:</strong> {donation.message}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminGiving;
