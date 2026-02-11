import React, { useEffect, useState } from "react";
import "./AdminEvents.css";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    eventTopic: "",
    eventDate: "",
    eventDescription: "",
  });

  useEffect(() => {
    loadCurrentEvents();
  }, []);

  const loadCurrentEvents = async () => {
    try {
      const res = await fetch("http://localhost:3000/dmvnt-PI");
      const data = await res.json();

      const today = new Date();
      const upcomingEvents = (data.events || [])
        .filter(evt => new Date(evt.eventDate) > today)
        .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));

      setEvents(upcomingEvents);
    } catch (err) {
      console.error("Error loading events:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Submitted:", formData);
    setFormData({ eventTopic: "", eventDate: "", eventDescription: "" });
  };

  return (
    <div className="add-achievement-container">
      <div className="page-header">
        <h1>Manage Events</h1>
        <p>Add and monitor upcoming events easily</p>
      </div>

      <div className="achievement-section">
        {/* Add Event Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Event Topic</label>
              <input
                type="text"
                name="eventTopic"
                value={formData.eventTopic}
                onChange={handleChange}
                placeholder="Enter event topic"
                required
              />
            </div>

            <div className="form-group">
              <label>Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Event Description</label>
            <textarea
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleChange}
              placeholder="Describe the event"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Event
          </button>
        </form>

        {/* Events List */}
        <div className="events-list">
          <h2>Upcoming Events</h2>

          {events.length === 0 && (
            <p className="empty-text">No upcoming events found.</p>
          )}

          {events.map((event, index) => (
            <div className="event-item" key={index}>
              <h3>{event.eventTopic}</h3>
              <p className="event-date">
                {new Date(event.eventDate).toLocaleDateString()}
              </p>
              <p>{event.eventDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;
