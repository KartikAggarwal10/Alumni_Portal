import { useEffect, useState } from "react";
import "./Home.css";

/* ---------- Counter Hook ---------- */
function useCounter(target, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target, duration]);

  return count;
}

export default function Dummy() {
  /* ---------- Backend Stats ---------- */
  const [stats, setStats] = useState({
    member: 0,
    comp: 0,
    ach: 0,
    countries: 0
  });

  /* ---------- Fetch from Backend ---------- */
  useEffect(() => {
    fetch("http://localhost:3000/updte")
      .then(res => res.json())
      .then(data => {
        if (data?.event) {
          setStats({
            member: data.event.member,
            comp: data.event.comp,
            ach: data.event.ach,
            countries: data.event.countries
          });
        } else {
          console.warn("No stats found in response");
        }
      })
      .catch(err => {
        console.error("Fetch failed:", err);
        // fallback values
        setStats({
          member: 499,
          comp: 49,
          ach: 19,
          countries: 9
        });
      });
  }, []);

  /* ---------- Animated Counters ---------- */
  const memberCount = useCounter(stats.member);
  const compCount = useCounter(stats.comp);
  const achCount = useCounter(stats.ach);
  const countryCount = useCounter(stats.countries);

  /* ---------- Menu Toggle ---------- */
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle?.addEventListener("click", () =>
      navLinks.classList.toggle("active")
    );

    return () =>
      menuToggle?.removeEventListener("click", () =>
        navLinks.classList.toggle("active")
      );
  }, []);

  return (
    <>
      {/* ---------------- Navbar ---------------- */}
      <div className="navbar">
        <div className="logo">
          <img src="/people/logo.webp" alt="IIIT Logo" />
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

      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <h1>Welcome to IIIT Sonepat Alumni Portal</h1>
        <p>Connect with your IIIT Sonepat Alumni Family</p>
        <a href="/signup" className="btn">Join the Community</a>
      </section>

      {/* ---------------- Dashboard ---------------- */}
      <section className="dashboard-section section">
        <h2>IIIT Sonepat By Numbers</h2>

        <div className="dashboard-stats">
          <div className="stat-item">
            <img src="/people/photo1.jpg" />
            <h3>{memberCount}+</h3>
            <p>Members</p>
            <a href="/members" className="btn">View Details</a>
          </div>

          <div className="stat-item">
            <img src="/people/company.jpeg" />
            <h3>{compCount}+</h3>
            <p>Companies</p>
            <a href="/companies" className="btn">View Details</a>
          </div>

          <div className="stat-item">
            <img src="/people/achievementicon.jpg" />
            <h3>{achCount}+</h3>
            <p>Achievements</p>
            <a href="/ach" className="btn">View Details</a>
          </div>

          <div className="stat-item">
            <img src="/people/country.jpeg" />
            <h3>{countryCount}+</h3>
            <p>Countries</p>
            <a href="/countries" className="btn">View Details</a>
          </div>
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="testimonial-section section">
        <h2>What Our Alumni Say</h2>

        <div className="testimonial-carousel">
          <div className="testimonial-item">
            <p>"This portal connected me with mentors who shaped my career."</p>
            <h4>Ankit Sharma, '18</h4>
          </div>

          <div className="testimonial-item">
            <p>"The events here are a great way to reconnect and network."</p>
            <h4>Priya Singh, '20</h4>
          </div>

          <div className="testimonial-item">
            <p>"I found lifelong friends through this community."</p>
            <h4>Rahul Verma, '19</h4>
          </div>
        </div>
      </section>

      {/* ---------------- Features ---------------- */}
      <section className="section">
        <h2>Why Join Us?</h2>

        <div className="features">
          <div className="feature-card">
            <h3>Networking</h3>
            <p>Link up with alumni across the globe.</p>
          </div>

          <div className="feature-card">
            <h3>Events</h3>
            <p>Stay updated with exciting alumni events.</p>
          </div>

          <div className="feature-card">
            <h3>Mentorship</h3>
            <p>Grow with guidance from experienced alumni.</p>
          </div>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="footer">
        <div>
          <h2>Mentored by</h2>
          Dr. Gourav Jain <br />
          Assistant Professor, IIIT Sonepat
        </div>

        <div>© 2025 IIIT Sonepat Alumni Portal</div>

        <div>
          <h2>Created by</h2>
          Vineet Kumar Yadav <br />
          Kartik Aggrawal <br />
          Ritik Raj Soni
        </div>
      </footer>
    </>
  );
}
