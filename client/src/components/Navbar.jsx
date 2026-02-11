import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== TOP HEADER ===== */}
      <header className="top-header">
        <img src="/Header.png" alt="Institute Header" />
      </header>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="navbar-inner">
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
          >
            ≡
          </button>

          <ul className={`nav-links ${open ? "active" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
            <li><Link to="/giving">Contributions</Link></li>
            <li><Link to="/glr">Gallery</Link></li>
            <li><Link to="/contct">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
