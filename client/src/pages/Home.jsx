import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        // Menu toggle
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");
        menuToggle?.addEventListener("click", () =>
            navLinks.classList.toggle("active")
        );

        // Animated Counter Logic
        const animateCounter = (counter, target) => {
            if (!counter) return;
            let count = 0;
            const speed = Math.max(1000 / target, 10);
            const updateCount = () => {
                count += Math.ceil(target / 100);
                if (count < target) {
                    counter.innerText = count + "+";
                    setTimeout(updateCount, speed);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        };

        // Fetch Dashboard Stats from /updte (via Vite proxy, no CORS issue)
        function loadDashboardStats() {
            fetch("/updte")
                .then(res => res.json())
                .then(data => {
                    const event = data.event;
                    console.log("event->", event);
                    if (event) {
                        animateCounter(document.getElementById("memberNumber"), event.member);
                        animateCounter(document.getElementById("companyNumber"), event.comp);
                        animateCounter(document.getElementById("achievementNumber"), event.ach);
                        animateCounter(document.getElementById("countryNumber"), event.countries);
                    } else {
                        console.warn("No stats found in /updte response");
                    }
                })
                .catch(err => {
                    console.error("Failed to fetch stats from /updte:", err);
                    // Fallback static values
                    animateCounter(document.getElementById("memberNumber"), 499);
                    animateCounter(document.getElementById("companyNumber"), 49);
                    animateCounter(document.getElementById("achievementNumber"), 19);
                    animateCounter(document.getElementById("countryNumber"), 9);
                });
        }

        // Load Recent Updates
        function loadRecentUpdates() {
            const updatesContainer = document.getElementById("recentUpdates");
            if (!updatesContainer) {
                console.error("Recent Updates container not found!");
                return;
            }
            updatesContainer.innerHTML = "";

            // Top Event from /dmvnt-PI
            fetch("/dmvnt-pi")
                .then((res) => res.json())
                .then((data) => {
                    const events = data.events || [];
                    const currentDate = new Date();
                    const upcoming = events.filter(e => new Date(e.eventDate) >= currentDate);
                    const topEvent = upcoming.length > 0 ? upcoming.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))[0] : null;

                    const eventCard = document.createElement("div");
                    eventCard.className = "update-card";
                    eventCard.style.cursor = "pointer";
                    eventCard.style.setProperty('--index', 0);
                    eventCard.innerHTML = `
            <img src="https://img.icons8.com/ios-filled/50/000000/calendar.png" alt="Event Icon" class="icon">
            <h3>${topEvent ? topEvent.eventTopic : "No Events Yet"}</h3>
            <p>${topEvent ? `Upcoming on ${new Date(topEvent.eventDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}` : "Stay tuned for upcoming alumni events!"}</p>
          `;
                    eventCard.addEventListener("click", () => {
                        navigate("/events");
                    });
                    updatesContainer.appendChild(eventCard);
                })
                .catch(err => console.error("Error fetching events:", err));

            // Top Contribution from /donationpi
            fetch("/donationpi")
                .then((res) => res.json())
                .then((data) => {
                    const donations = data.events || [];
                    const topContribution = donations.length > 0 ? donations[0] : null;

                    const contributionCard = document.createElement("div");
                    contributionCard.className = "update-card";
                    contributionCard.style.cursor = "pointer";
                    contributionCard.style.setProperty('--index', 1);
                    contributionCard.innerHTML = `
            <img src="https://img.icons8.com/ios-filled/50/000000/donate.png" alt="Contribution Icon" class="icon">
            <h3>${topContribution ? `Contribution by ${topContribution.name}` : "No Contributions Yet"}</h3>
            <p>${topContribution ? `₹${topContribution.amount} for ${topContribution.purpose}` : "Be the first to support our community!"}</p>
          `;
                    contributionCard.addEventListener("click", () => {
                        navigate("/giving");
                    });
                    updatesContainer.appendChild(contributionCard);
                })
                .catch(err => console.error("Error fetching donations:", err));

            // Top Achievement from /add-ach-api
            fetch("/add-ach-api")
                .then((res) => res.json())
                .then((data) => {
                    const achievements = data.events || [];
                    const topAchievement = achievements.length > 0 ? achievements[0] : null;

                    const achievementCard = document.createElement("div");
                    achievementCard.className = "update-card";
                    achievementCard.style.cursor = "pointer";
                    achievementCard.style.setProperty('--index', 2);
                    achievementCard.innerHTML = `
            <img src="https://img.icons8.com/ios-filled/50/000000/trophy.png" alt="Achievement Icon" class="icon">
            <h3>${topAchievement ? topAchievement.achievementTitle : "No Achievements Yet"}</h3>
            <p>${topAchievement ? `By ${topAchievement.name}` : "Share your success with us!"}</p>
          `;
                    achievementCard.addEventListener("click", () => {
                        navigate("/ach");
                    });
                    updatesContainer.appendChild(achievementCard);
                })
                .catch(err => console.error("Error fetching achievements:", err));
        }

        // Orb animation and feature card effects
        function initMouseOrb() {
            const cards = document.querySelectorAll(".stat-item, .update-card, .testimonial-item, .feature-card");
            cards.forEach(card => {
                card.addEventListener("mousemove", (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                });
            });
        }

        // Initialize on load
        loadDashboardStats();
        loadRecentUpdates();
        initMouseOrb();

        // Section fade-in on scroll
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll("section").forEach(sec =>
            observer.observe(sec)
        );

        // Feature card click handlers
        const featureCards = document.querySelectorAll(".feature-card");
        featureCards.forEach(card => {
            card.addEventListener("click", () => {
                const info = card.getAttribute("data-info");
                alert(info);
            });
        });
    }, [navigate]);

    return (
        <div className="home-page-container">
            {/* Navbar */}
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

            {/* Hero */}
            <section className="hero">
                <h1>Welcome to IIIT Sonepat Alumni Portal</h1>
                <p>Connect with your IIIT Sonepat Alumni Family</p>
                <a href="/signupt" className="btn"><span>Join the Community</span></a>
            </section>

            {/* Dashboard */}
            <section className="dashboard-section section">
                <h2>IIIT Sonepat Network</h2>
                <div className="dashboard-stats" id="dashboardStats">
                    <div className="stat-item" style={{ "--index": 0 }}>
                        <img src="/people/photo1.jpg" alt="Members Icon" />
                        <h3 id="memberNumber" data-count="499">0+</h3>
                        <p>Members</p>
                        <a href="/members" className="btn"><span>View Details</span></a>
                    </div>
                    <div className="stat-item" style={{ "--index": 1 }}>
                        <img src="/people/company.jpeg" alt="Companies Icon" />
                        <h3 id="companyNumber" data-count="49">0+</h3>
                        <p>Companies</p>
                        <a href="/companies" className="btn"><span>View Details</span></a>
                    </div>
                    <div className="stat-item" style={{ "--index": 2 }}>
                        <img src="/people/achievementicon.jpg" alt="Achievements Icon" />
                        <h3 id="achievementNumber" data-count="19">0+</h3>
                        <p>Achievements</p>
                        <a href="/ach" className="btn"><span>View Details</span></a>
                    </div>
                    <div className="stat-item" style={{ "--index": 3 }}>
                        <img src="/people/country.jpeg" alt="Countries Icon" />
                        <h3 id="countryNumber" data-count="9">0+</h3>
                        <p>Countries</p>
                        <a href="/countries" className="btn"><span>View Details</span></a>
                    </div>
                </div>
            </section>

            {/* Recent Updates */}
            <section className="updates-section section">
                <h2>Recent Updates</h2>
                <div className="updates" id="recentUpdates">
                    {/* Dynamic updates loaded via API */}
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonial-section section">
                <h2>What Our Alumni Say</h2>
                <div className="testimonial-carousel">
                    <div className="testimonial-item" style={{ "--index": 0 }}>
                        <img src="https://img.icons8.com/ios-filled/50/000000/quote.png" alt="Quote Icon" className="quote-icon" />
                        <p>"This portal connected me with mentors who shaped my career."</p>
                        <h4>Ankit Sharma, '18</h4>
                    </div>
                    <div className="testimonial-item" style={{ "--index": 1 }}>
                        <img src="https://img.icons8.com/ios-filled/50/000000/quote.png" alt="Quote Icon" className="quote-icon" />
                        <p>"The events here are a great way to reconnect and network."</p>
                        <h4>Priya Singh, '20</h4>
                    </div>
                    <div className="testimonial-item" style={{ "--index": 2 }}>
                        <img src="https://img.icons8.com/ios-filled/50/000000/quote.png" alt="Quote Icon" className="quote-icon" />
                        <p>"I found lifelong friends through this community."</p>
                        <h4>Rahul Verma, '19</h4>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section">
                <h2>Why Join Us?</h2>
                <div className="features">
                    <div className="feature-card" style={{ "--index": 0 }} data-info="Networking helps alumni build professional connections, collaborate on projects, and explore career opportunities worldwide.">
                        <h3>Networking</h3>
                        <p>Link up with alumni across the globe.</p>
                    </div>
                    <div className="feature-card" style={{ "--index": 1 }} data-info="Events keep alumni engaged, offering opportunities to reconnect, share experiences, and stay updated with institute happenings.">
                        <h3>Events</h3>
                        <p>Stay in the loop with exciting events.</p>
                    </div>
                    <div className="feature-card" style={{ "--index": 2 }} data-info="Mentorship provides alumni with guidance from experienced peers, fostering personal growth and career development.">
                        <h3>Mentorship</h3>
                        <p>Grow with advice from the pros.</p>
                    </div>
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
}
