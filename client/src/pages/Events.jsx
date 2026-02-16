import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import './Events.css';

const Events = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [previousEvents, setPreviousEvents] = useState([]);
    const [showEventModal, setShowEventModal] = useState(false);
    const [showOrganizeModal, setShowOrganizeModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [organizeFormData, setOrganizeFormData] = useState({
        organizerName: '',
        organizerEmail: '',
        organizerBatch: '',
        eventTopic: '',
        eventDate: '',
        eventType: '',
        eventDescription: ''
    });
    useEffect(() => {
        fetchEvents();
    }, []);
    const fetchEvents = async () => {
        try {
            const response = await api.get('/dmvnt-pi');
            const allEvents = response.data.events || [];
            const currentDate = new Date();
            setUpcomingEvents(allEvents.filter(evt => new Date(evt.eventDate) >= currentDate));
            setPreviousEvents(allEvents.filter(evt => new Date(evt.eventDate) < currentDate));
        } catch (error) {
            console.error("Failed to fetch events:", error);
        }
    };
    const handleEventClick = (evt, isUpcoming) => {
        setSelectedEvent({ ...evt, isUpcoming });
        setShowEventModal(true);
    };
    const handleOrganizeChange = (e) => {
        setOrganizeFormData({ ...organizeFormData, [e.target.name]: e.target.value });
    };

    const handleOrganizeSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/send-proposal', organizeFormData);
            alert(response.data.message);
            setShowOrganizeModal(false);
            setOrganizeFormData({
                organizerName: '', organizerEmail: '', organizerBatch: '',
                eventTopic: '', eventDate: '', eventType: '', eventDescription: ''
            });
        } catch (error) {
            alert("Failed to send proposal.");
            console.error("Error:", error);
        }
    };

    return (
        <div className="events-page-container">
            {/* Header Section */}
            <div className="header">
                <h1>Events</h1>
                <p>Stay connected through past and upcoming alumni events!</p>
            </div>

            {/* Upcoming Events */}
            <div className="timeline-section" style={{ backgroundColor: '#bbe4ee' }}>
                <div id="eventHadding"><h2>Upcoming Events</h2></div>
                <div className="timeline">
                    {upcomingEvents.length === 0 ? (
                        <p style={{ textAlign: 'center' }}>No upcoming events yet.</p>
                    ) : (
                        upcomingEvents.map((evt, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-badge">
                                    {new Date(evt.eventDate).toLocaleString('en-US', { month: 'short' })} {new Date(evt.eventDate).getDate()}
                                </div>
                                <div className="timeline-content" onClick={(e) => {
                                    if (e.target.className !== 'register-btn') handleEventClick(evt, true);
                                }}>
                                    <h3>{evt.eventTopic}</h3>
                                    <div className="date">
                                        {new Date(evt.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </div>
                                    <p>{evt.eventDescription}</p>
                                    <Link to="/register-event" className="register-btn">Register</Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <hr />

            {/* Previous Events */}
            <div className="timeline-section" style={{ backgroundColor: '#bbe4ee' }}>
                <div id="eventHadding"><h2>Previous Events</h2></div>
                <div className="timeline">
                    {previousEvents.length === 0 ? (
                        <p style={{ textAlign: 'center' }}>No previous events yet.</p>
                    ) : (
                        previousEvents.map((evt, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-badge">
                                    {new Date(evt.eventDate).toLocaleString('en-US', { month: 'short' })} {new Date(evt.eventDate).getDate()}
                                </div>
                                <div className="timeline-content" onClick={() => handleEventClick(evt, false)}>
                                    <h3>{evt.eventTopic}</h3>
                                    <div className="date">
                                        {new Date(evt.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </div>
                                    <p>{evt.eventDescription}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <hr />

            {/* Organize Section */}
            <div className="organize-section" style={{ backgroundColor: '#bbe4ee' }}>
                <div id="eventHadding"><h2>Organize an Event</h2></div>
                <p>Have an idea for an alumni event? Share it with us!</p>
                <button className="organize-btn" onClick={() => setShowOrganizeModal(true)}>Plan an Event</button>
            </div>

            {/* Event Details Modal */}
            {showEventModal && selectedEvent && (
                <div className="modal" onClick={() => setShowEventModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close-btn" onClick={() => setShowEventModal(false)}>×</span>
                        <h2>{selectedEvent.eventTopic}</h2>
                        <p><strong>Date:</strong> {new Date(selectedEvent.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                        <p>{selectedEvent.eventDescription}</p>
                        {selectedEvent.isUpcoming && (
                            <div id="modalRegister">
                                <Link to="/register-event" className="modal-register-btn">Register Now</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Organize Modal */}
            {showOrganizeModal && (
                <div className="modal organize-modal" onClick={() => setShowOrganizeModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close-btn" onClick={() => setShowOrganizeModal(false)}>×</span>
                        <h2>Propose an Event</h2>
                        <form onSubmit={handleOrganizeSubmit}>
                            <div className="form-group">
                                <label htmlFor="organizerName">Your Name</label>
                                <input type="text" name="organizerName" value={organizeFormData.organizerName} onChange={handleOrganizeChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="organizerEmail">Your Email</label>
                                <input type="email" name="organizerEmail" value={organizeFormData.organizerEmail} onChange={handleOrganizeChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="organizerBatch">Batch Year</label>
                                <select name="organizerBatch" value={organizeFormData.organizerBatch} onChange={handleOrganizeChange} required>
                                    <option value="">Select Batch Year</option>
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i} value={2015 + i}>{2015 + i}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventTopic">Event Title</label>
                                <input type="text" name="eventTopic" value={organizeFormData.eventTopic} onChange={handleOrganizeChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDate">Proposed Date</label>
                                <input type="date" name="eventDate" value={organizeFormData.eventDate} onChange={handleOrganizeChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventType">Event Type</label>
                                <select name="eventType" value={organizeFormData.eventType} onChange={handleOrganizeChange} required>
                                    <option value="">Select Event Type</option>
                                    <option value="In-Person">In-Person</option>
                                    <option value="Virtual">Virtual</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDescription">Event Description</label>
                                <textarea name="eventDescription" value={organizeFormData.eventDescription} onChange={handleOrganizeChange} required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Submit Proposal</button>
                        </form>
                    </div>
                </div>
            )}

            
        </div>
    );
};

export default Events;
