import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = false; // Placeholder for auth state

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/people/logo.webp" alt="IIIT Sonepat Logo" style={{ height: '35px', marginRight: '10px', borderRadius: '5px' }} />
                IIIT Sonepat Alumni Portal
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/alumni">Alumni</Link></li>
                <li><Link to="/giving">Contributions</Link></li>
                <li><Link to="/glr">Gallery</Link></li>
                <li><Link to="/contct">Contact</Link></li>
                <li><Link to="/members">Members</Link></li>
                <li><Link to="/companies">Companies</Link></li>
                <li><Link to="/countries">Map</Link></li>
                <li><Link to="/ach">Achievements</Link></li>
                <li><Link to="/peopledisp">People</Link></li>
                <li id="authLink">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <button className="menu-toggle" id="menuToggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
        </nav>
    );
};

export default Navbar;
