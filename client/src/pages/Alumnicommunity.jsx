import React from "react";
import styles from "./AlumniCommunity.module.css";

const AlumniCommunity = () => {
  const sections = [
    {
      id: 1,
      title: "Alumni Council 2025-27",
      images: [
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg",
        "https://randomuser.me/api/portraits/men/3.jpg",
        "https://randomuser.me/api/portraits/men/4.jpg",
        "https://randomuser.me/api/portraits/women/3.jpg",
        "https://randomuser.me/api/portraits/women/4.jpg",
      ],
    },
    {
      id: 2,
      title: "Chapter Heads",
      images: [
        "https://randomuser.me/api/portraits/men/5.jpg",
        "https://randomuser.me/api/portraits/men/6.jpg",
        "https://randomuser.me/api/portraits/women/5.jpg",
        "https://randomuser.me/api/portraits/men/7.jpg",
        "https://randomuser.me/api/portraits/women/6.jpg",
        "https://randomuser.me/api/portraits/women/7.jpg",
        "https://randomuser.me/api/portraits/men/8.jpg",
        "https://randomuser.me/api/portraits/women/8.jpg",
      ],
    },
    {
      id: 3,
      title: "Batch Representatives 2025-27",
      images: [
        "https://randomuser.me/api/portraits/men/14.jpg",
        "https://randomuser.me/api/portraits/men/15.jpg",
        "https://randomuser.me/api/portraits/women/14.jpg",
        "https://randomuser.me/api/portraits/women/15.jpg",
        "https://randomuser.me/api/portraits/women/16.jpg",
        "https://randomuser.me/api/portraits/women/17.jpg",
        "https://randomuser.me/api/portraits/women/3.jpg",
        "https://randomuser.me/api/portraits/women/4.jpg",
      ],
    },
    {
      id: 4,
      title: "Alumni Board",
      images: [
        "https://randomuser.me/api/portraits/women/18.jpg",
        "https://randomuser.me/api/portraits/men/18.jpg",
        "https://randomuser.me/api/portraits/men/19.jpg",
        "https://randomuser.me/api/portraits/men/20.jpg",
        "https://randomuser.me/api/portraits/women/19.jpg",
        "https://randomuser.me/api/portraits/men/21.jpg",
        "https://randomuser.me/api/portraits/women/3.jpg",
        "https://randomuser.me/api/portraits/women/4.jpg",
      ],
    },
  ];

  return (
    <div className={styles.alumniCommunity}>
      <div className={styles.forpddign}>
        <div className={styles.alumniHeader}>
          {/* className="main-heading" removed — no matching CSS rule existed */}
          <h2>Alumni Community</h2>
          {/* <button className={styles.viewAllBtn}>View All</button> */}
        </div>

        <div className={styles.sectionsContainer}>
          {sections.map((section) => (
            <div key={section.id} className={styles.sectionCard}>
              <div className={styles.imagesGrid}>
                {section.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Alumni ${index + 1}`}
                    className={styles.alumniImg}
                  />
                ))}
              </div>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <a href="/AlumniCouncil">
                <button className={styles.seeMoreBtn}>See More</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniCommunity;