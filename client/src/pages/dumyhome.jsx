import { useEffect } from "react";
import styles from "./DumyHome.module.css";
import DashboardStats from "./DashboardStatsDumy";
import RecentUpdates from "./RecentUpdatesDumy";
import Testimonials from "./TestimonialsDumy";
import Features from "./FeaturesDumy";
import HomeSlider from "./slider";
import AlumniStories from "./AlumniStories";
import CareerOpportunities from "./Careeropportunities";
import AlumniCommunity from "./Alumnicommunity";
export default function HomeDumy() {
    useEffect(() => {
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

        // Cleanup function to prevent memory leaks
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={styles.homePageContainer}>
            <HomeSlider />
            <DashboardStats />
            <AlumniStories />
            <RecentUpdates />
            <CareerOpportunities />
            <AlumniCommunity />
            <Testimonials />
            <Features />
        </div>
    );
}