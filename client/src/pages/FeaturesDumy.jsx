import { useEffect } from "react";
import "./Features.css";

export default function Features() {
    useEffect(() => {
        // Orb animation for feature cards
        function initMouseOrb() {
            const cards = document.querySelectorAll(".feature-card");
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

        // Feature card click handlers
        const featureCards = document.querySelectorAll(".feature-card");
        featureCards.forEach(card => {
            card.addEventListener("click", () => {
                const info = card.getAttribute("data-info");
                alert(info);
            });
        });

        setTimeout(initMouseOrb, 100);
    }, []);

    return (
        <section className="features-section section">
            <h2>Why Join Us?</h2>
            <div className="features">
                <div 
                    className="feature-card" 
                    style={{ "--index": 0 }} 
                    data-info="Networking helps alumni build professional connections, collaborate on projects, and explore career opportunities worldwide."
                >
                    <h3>Networking</h3>
                    <p>Link up with alumni across the globe.</p>
                </div>
                <div 
                    className="feature-card" 
                    style={{ "--index": 1 }} 
                    data-info="Events keep alumni engaged, offering opportunities to reconnect, share experiences, and stay updated with institute happenings."
                >
                    <h3>Events</h3>
                    <p>Stay in the loop with exciting events.</p>
                </div>
                <div 
                    className="feature-card" 
                    style={{ "--index": 2 }} 
                    data-info="Mentorship provides alumni with guidance from experienced peers, fostering personal growth and career development."
                >
                    <h3>Mentorship</h3>
                    <p>Grow with advice from the pros.</p>
                </div>
            </div>
        </section>
    );
}