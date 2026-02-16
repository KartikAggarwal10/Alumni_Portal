import React from "react";
import styles from "./AlumniCouncilinsidecontiner.module.css";

function AlumniCouncil() {
  const councilMembers = [
    {
      id: 1,
      name: "Akshay Barik",
      batch: "YIF 2015",
      position: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Vedika Bagla",
      batch: "UG 2025",
      position: "Director of External Partnerships & Alumni Benefits",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Vaibhav Sharma",
      batch: "YIF 2024",
      position: "Director of Fundraising & Treasury",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Nishant Singh",
      batch: "YIF 2016",
      position: "Director of International Chapters",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Priya Malhotra",
      batch: "UG 2023",
      position: "Director of Communications & Events",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Rahul Kapoor",
      batch: "YIF 2017",
      position: "Director of Mentorship Programs",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      name: "Ananya Desai",
      batch: "UG 2024",
      position: "Director of Student Engagement",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      name: "Arjun Mehta",
      batch: "YIF 2018",
      position: "Director of Career Development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    }
  ];

  const viewProfile = (memberId) => {
    // This will navigate to individual profile pages
    console.log('Viewing profile for member:', memberId);
    // You can use React Router here: navigate(`/profile/${memberId}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Alumni Council 2025–27</h1>

      <div className={styles.councilGrid}>
        {councilMembers.map((member) => (
          <div
            key={member.id}
            className={styles.councilCard}
            onClick={() => viewProfile(member.id)}
          >
            <div className={styles.cardImageContainer}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.memberName}>{member.name}</h2>
              <p className={styles.memberBatch}>{member.batch}</p>
              <p className={styles.memberPosition}>{member.position}</p>
              <a href="/ProfilePage">
                <button className={styles.viewProfileBtn}>View Profile</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlumniCouncil;