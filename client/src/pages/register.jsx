import { useEffect, useState } from "react";
import "./register.css";
import api from "../api";

export default function AlumniRegister() {
  const [formData, setFormData] = useState({
    name: "",
    batch: "",
    location: "",
    branch: "",
    comp: "",
    position: "",
    email: "",
    otp: "",
    photo: null,
    summary: "",
    password: "",
    confirmPassword: ""
  });
  const [batches, setBatches] = useState([]);
  useEffect(() => {
    const years = [];
    for (let year = 2014; year <= 2025; year++) {
      years.push(year);
    }
    setBatches(years);
  }, []);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };
  const sendOTP = async () => {
    if (!formData.email) {
      alert("Please enter an email first.");
      return;
    }

    try {
      const res = await api.post("/send-otp", { email: formData.email });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Form Submitted:", formData);
    // send to backend via fetch / axios
  };

  return (
    <>
      {/* REGISTRATION */}
      <section className="registration-section">
        <h1>Alumni Registration</h1>

        <div className="form-container">
          <form onSubmit={handleSubmit} encType="multipart/form-data">

            <div className="form-group">
              <label>Full Name</label>
              <input name="name" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Batch</label>
              <select name="batch" onChange={handleChange} required>
                <option value="">Select Batch</option>
                {batches.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Location</label>
              <input name="location" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Branch</label>
              <select name="branch" onChange={handleChange} required>
                <option value="">Select Branch</option>
                <option value="IT">IT</option>
                <option value="CS">CS</option>
                <option value="DSA">DSA</option>
                <option value="ECE">ECE</option>
              </select>
            </div>

            <div className="form-group">
              <label>Company</label>
              <input name="comp" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Position</label>
              <input name="position" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" onChange={handleChange} required />
              <button type="button" onClick={sendOTP}>Send OTP</button>
            </div>

            <div className="form-group">
              <label>OTP</label>
              <input name="otp" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Photo</label>
              <input type="file" name="photo" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Summary</label>
              <textarea name="summary" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Re-enter Password</label>
              <input type="password" name="confirmPassword" onChange={handleChange} required />
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
      </section>



    </>
  );
}
