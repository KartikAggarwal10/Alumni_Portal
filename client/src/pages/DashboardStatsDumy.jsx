import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DashboardStats.module.css";
import api from "../api";
import { Link } from "react-router-dom";
export default function DashboardStats() {
    const navigate = useNavigate();

    useEffect(() => {
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
        // Fetch Dashboard Stats from /updte
        function loadDashboardStats() {
            api.get("/updte")
                .then(res => {
                    const data = res.data;
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

        // Orb animation — use styles.statItem (the hashed class name) so querySelector
        // finds the right elements even after CSS Modules renames the class
        function initMouseOrb() {
            const cards = document.querySelectorAll(`.${styles.statItem}`);
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

        loadDashboardStats();
        setTimeout(initMouseOrb, 100);
    }, []);

    return (
        <section className={styles.dashboardSection}>
            <h2>IIIT Sonepat Network</h2>
            <div className={styles.dashboardStats} id="dashboardStats">
                <div className={styles.statItem} style={{ "--index": 0 }}>
                    <img src="/people/photo1.jpg" alt="Members Icon" />
                    <h3 id="memberNumber" data-count="499">0+</h3>
                    <p>Members</p>
                    <Link to="/members" className={styles.btn}><span>View Details</span></Link>
                </div>
                <div className={styles.statItem} style={{ "--index": 1 }}>
                    <img src="/people/company.jpeg" alt="Companies Icon" />
                    <h3 id="companyNumber" data-count="49">0+</h3>
                    <p>Companies</p>
                    <Link to="/companies" className={styles.btn}><span>View Details</span></Link>
                </div>
                <div className={styles.statItem} style={{ "--index": 2 }}>
                    <img src="/people/achievementicon.jpg" alt="Achievements Icon" />
                    <h3 id="achievementNumber" data-count="19">0+</h3>
                    <p>Achievements</p>
                    <Link to="/ach" className={styles.btn}><span>View Details</span></Link>
                </div>
                <div className={styles.statItem} style={{ "--index": 3 }}>
                    <img src="/people/country.jpeg" alt="Countries Icon" />
                    <h3 id="countryNumber" data-count="9">0+</h3>
                    <p>Countries</p>
                    <Link to="/countries" className={styles.btn}><span>View Details</span></Link>
                </div>
            </div>
        </section>
    );
}