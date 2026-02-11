import React, { useEffect, useState } from "react";
import "./AdminGallery.css";

const AdminGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [formData, setFormData] = useState({
    image: null,
    caption: "",
    category: "",
  });

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const res = await fetch("http://localhost:3000/gallerypi");
      const data = await res.json();
      setGalleryItems(data.items || []);
    } catch (err) {
      console.error("Error loading gallery:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gallery Item:", formData);

    setFormData({
      image: null,
      caption: "",
      category: "",
    });
  };

  return (
    <div className="add-achievement-container">
      <div className="page-header">
        <h1>Manage Gallery</h1>
        <p>Add and organize gallery items</p>
      </div>

      <div className="achievement-section">
        {/* Add Gallery Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Upload Image</label>
            <input type="file" name="image" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Caption</label>
            <input
              type="text"
              name="caption"
              value={formData.caption}
              onChange={handleChange}
              placeholder="Enter caption"
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="alumni">Alumni</option>
              <option value="events">Events</option>
              <option value="contributions">Contributions</option>
              <option value="meetups">Meetups</option>
              <option value="achievements">Achievements</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Add Gallery Item
          </button>
        </form>

        {/* Gallery List */}
        <div className="gallery-list">
          <h2>Existing Gallery Items</h2>

          {galleryItems.length === 0 && (
            <p className="empty-text">No gallery items added yet.</p>
          )}

          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.imageUrl} alt={item.caption} />
              <div className="gallery-info">
                <h3>{item.caption}</h3>
                <span className="category-tag">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;
