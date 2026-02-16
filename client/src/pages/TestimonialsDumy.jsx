import { useEffect } from "react";
import "./Testimonials.css";

export default function Testimonials() {
    useEffect(() => {
        // Orb animation for testimonial cards
        function initMouseOrb() {
            const cards = document.querySelectorAll(".testimonial-item");
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

        setTimeout(initMouseOrb, 100);
    }, []);

    return (
        <section className="testimonial-section section">
            <h2>What Our Alumni Say</h2>
            <div className="testimonial-carousel">
                <div className="testimonial-item" style={{ "--index": 0 }}>
                    <img 
                        src="https://img.icons8.com/ios-filled/50/000000/quote.png" 
                        alt="Quote Icon" 
                        className="quote-icon" 
                    />
                    <p>"This portal connected me with mentors who shaped my career."</p>
                    <h4>Ankit Sharma, '18</h4>
                </div>
                <div className="testimonial-item" style={{ "--index": 1 }}>
                    <img 
                        src="https://img.icons8.com/ios-filled/50/000000/quote.png" 
                        alt="Quote Icon" 
                        className="quote-icon" 
                    />
                    <p>"The events here are a great way to reconnect and network."</p>
                    <h4>Priya Singh, '20</h4>
                </div>
                <div className="testimonial-item" style={{ "--index": 2 }}>
                    <img 
                        src="https://img.icons8.com/ios-filled/50/000000/quote.png" 
                        alt="Quote Icon" 
                        className="quote-icon" 
                    />
                    <p>"I found lifelong friends through this community."</p>
                    <h4>Rahul Verma, '19</h4>
                </div>
            </div>
        </section>
    );
}