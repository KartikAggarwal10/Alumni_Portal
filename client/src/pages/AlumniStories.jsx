import React from "react";
import { Link } from "react-router-dom";
import styles from "./AlumniStories.module.css";

const AlumniStories = () => {
  const stories = [
    {
      id: 1,
      date: "Feb 10, 2026",
      title: "From Sonipat Skies to the Indian Air Force | Vedika Gupta, UG 2017",
      image: "https://images.pexels.com/photos/32323070/pexels-photo-32323070.jpeg",
      link: "#",
    },
    {
      id: 2,
      date: "Feb 06, 2026",
      title: "Building, Not Just Starting: Anamitra's Systems-Driven Journey from YIF to...",
      image: "https://images.pexels.com/photos/7944231/pexels-photo-7944231.jpeg",
      link: "#",
    },
    {
      id: 3,
      date: "Feb 02, 2026",
      title: "Fueling the Future from Ghaziabad to VC | Ritvik Sharma, UG 2020",
      image: "https://images.pexels.com/photos/7942520/pexels-photo-7942520.jpeg",
      link: "#",
    },
    {
      id: 4,
      date: "Jan 21, 2026",
      title: "Ashokans' Spice-Trail Adventure: Jaipur's Walled City Wonders",
      image: "https://images.pexels.com/photos/7942469/pexels-photo-7942469.jpeg",
      link: "#",
    },
  ];

  return (
    <div className={styles.alumniContainer}>
      <div className={styles.alumniHeader}>
        <h2>Alumni Stories and Updates</h2>
        <a href="/AlumniStoriesinsidecontiner">
          <button className={styles.viewAllBtn}>View All</button>
        </a>
      </div>

      <div className={styles.alumniGrid}>
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={styles.alumniCard}
            style={{ "--index": index }}
          >
            <img
              src={story.image}
              alt={story.title}
              className={styles.alumniImage}
            />
            <div className={styles.alumniMeta}>
              <p className={styles.date}>{story.date}</p>
              <h4 className={styles.title}>{story.title}</h4>
              <Link to={`/PostDetailPage/${story.id}`} className={styles.readMore}>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniStories;