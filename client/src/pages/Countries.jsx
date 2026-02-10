import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import api from '../api';
import './Countries.css';

// Fix Leaflet marker icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Countries = () => {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        loadMapMarkers();
    }, []);

    const geocodeAddress = async (address) => {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;
        try {
            const response = await fetch(url, {
                headers: { 'User-Agent': 'IIIT Sonepat Alumni Portal' }
            });
            const data = await response.json();
            if (data.length > 0) {
                return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
            }
            return null;
        } catch (error) {
            console.error("Geocoding error:", error);
            return null;
        }
    };

    const loadMapMarkers = async () => {
        try {
            const response = await api.get('/stdint');
            const data = response.data.documents || [];
            const newMarkers = [];

            for (const member of data) {
                if (member.location) {
                    await new Promise(r => setTimeout(r, 100));
                    const coords = await geocodeAddress(member.location);
                    if (coords) {
                        newMarkers.push({
                            ...member,
                            position: [coords.lat, coords.lon]
                        });
                    }
                }
            }
            setMarkers(newMarkers);
        } catch (error) {
            console.error("Failed to load alumni data:", error);
        }
    };

    return (
        <div className="countries-page-container">
            {/* Navbar */}
            <div className="navbar">
                <div className="logo">
                    <img src="/people/logo.webp" alt="IIIT Sonepat Logo" />
                    IIIT Sonepat Alumni Portal
                </div>
                <button className="menu-toggle">≡</button>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/alumni">Alumni</a></li>
                    <li><a href="/giving">Contributions</a></li>
                    <li><a href="/glr">Gallery</a></li>
                    <li><a href="/contct">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>

            <section className="countries-section">
                <h1>Alumni Locations Worldwide</h1>
                <div id="map">
                    <MapContainer center={[20.5937, 78.9629]} zoom={2} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {markers.map((marker, index) => (
                            <Marker key={index} position={marker.position}>
                                <Popup>
                                    <b>Name:</b> {marker.name}<br />
                                    <b>Company:</b> {marker.comp}<br />
                                    <b>Location:</b> {marker.location}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div>
                    <h2>Mentored by:</h2>
                    Dr. Gourav Jain <br /> Assistant Professor at IIIT Sonepat
                </div>
                <div>© 2025 IIIT Sonepat Alumni Portal</div>
                <div>
                    <h2>Created by:</h2>
                    Vineet Kumar Yadav ( 1<sup>st</sup> Year , IT ) <br />
                    Kartik Aggrawal ( 1<sup>st</sup> Year , CSE ) <br />
                    Ritik Raj Soni ( 1<sup>st</sup> Year , IT )
                </div>
            </footer>
        </div>
    );
};

export default Countries;
