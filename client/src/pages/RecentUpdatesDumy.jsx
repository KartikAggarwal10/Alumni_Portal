import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import styles from "./Recentupdates.module.css";

export default function RecentUpdates() {
    const navigate = useNavigate();

    useEffect(() => {
        // Load Recent Updates - ONLY 1 from each API (3 total)
        function loadRecentUpdates() {
            const updatesContainer = document.getElementById("recentUpdates");
            if (!updatesContainer) {
                console.error("Recent Updates container not found!");
                return;
            }

            // CRITICAL: Clear container BEFORE fetching
            updatesContainer.innerHTML = "";

            Promise.all([
                api.get("/dmvnt-pi").then(res => res.data),
                api.get("/donationpi").then(res => res.data),
                api.get("/add-ach-api").then(res => res.data)
            ])
                .then(([eventData, donationData, achievementData]) => {
                    // Clear again to ensure no duplicates
                    updatesContainer.innerHTML = "";

                    // --- EVENT: Get most recent upcoming event ---
                    const events = eventData.events || [];
                    const currentDate = new Date();
                    const upcoming = events.filter(e => new Date(e.eventDate) >= currentDate);
                    const topEvent = upcoming.length > 0
                        ? upcoming.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))[0]
                        : null;

                    const eventCard = document.createElement("div");
                    // "update-card" stays as a plain string — styled via :global(.update-card) in the module
                    eventCard.className = "update-card";
                    eventCard.style.cursor = "pointer";
                    eventCard.style.setProperty('--index', 0);
                    eventCard.innerHTML = `
                        <img src="https://img.icons8.com/ios-filled/50/000000/calendar.png" alt="Event Icon" class="icon">
                        <h3>${topEvent ? topEvent.eventTopic : "No Events Yet"}</h3>
                        <p>${topEvent ? `Upcoming on ${new Date(topEvent.eventDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}` : "Stay tuned for upcoming alumni events!"}</p>
                    `;
                    eventCard.addEventListener("click", () => navigate("/events"));
                    updatesContainer.appendChild(eventCard);

                    // --- DONATION: Get most recent donation ---
                    const donations = donationData.events || [];
                    const topContribution = donations.length > 0
                        ? donations.sort((a, b) => new Date(b.createdAt || Date.now()) - new Date(a.createdAt || Date.now()))[0]
                        : null;

                    const contributionCard = document.createElement("div");
                    contributionCard.className = "update-card";
                    contributionCard.style.cursor = "pointer";
                    contributionCard.style.setProperty('--index', 1);
                    contributionCard.innerHTML = `
                        <img src="https://img.icons8.com/ios-filled/50/000000/donate.png" alt="Contribution Icon" class="icon">
                        <h3>${topContribution ? `Contribution by ${topContribution.name}` : "No Contributions Yet"}</h3>
                        <p>${topContribution ? `₹${topContribution.amount} for ${topContribution.purpose}` : "Be the first to support our community!"}</p>
                    `;
                    contributionCard.addEventListener("click", () => navigate("/giving"));
                    updatesContainer.appendChild(contributionCard);

                    // --- ACHIEVEMENT: Get most recent achievement ---
                    const achievements = achievementData.events || [];
                    const topAchievement = achievements.length > 0
                        ? achievements.sort((a, b) => new Date(b.createdAt || Date.now()) - new Date(a.createdAt || Date.now()))[0]
                        : null;

                    const achievementCard = document.createElement("div");
                    achievementCard.className = "update-card";
                    achievementCard.style.cursor = "pointer";
                    achievementCard.style.setProperty('--index', 2);
                    achievementCard.innerHTML = `
                        <img src="https://img.icons8.com/ios-filled/50/000000/trophy.png" alt="Achievement Icon" class="icon">
                        <h3>${topAchievement ? topAchievement.achievementTitle : "No Achievements Yet"}</h3>
                        <p>${topAchievement ? `By ${topAchievement.name}` : "Share your success with us!"}</p>
                    `;
                    achievementCard.addEventListener("click", () => navigate("/ach"));
                    updatesContainer.appendChild(achievementCard);
                })
                .catch(err => console.error("Error loading recent updates:", err));
        }

        // Orb animation for update cards — querySelector uses plain "update-card" which matches :global
        function initMouseOrb() {
            const cards = document.querySelectorAll(".update-card");
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

        loadRecentUpdates();
        setTimeout(initMouseOrb, 100);
    }, [navigate]);

    return (
        <section className={styles.updatesSection}>
            <h2>Recent Updates</h2>
            <div className={styles.updates} id="recentUpdates">
                {/* Dynamic cards injected via DOM — styled via :global(.update-card) */}
            </div>
        </section>
    );
}