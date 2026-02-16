import React from "react";
import styles from "./AlumniStoriesinsidecontiner.module.css";

function AlumniStoriesinsidecontiner() {
  return (
    <div className={styles.container}>
      
      <div className={styles.storyCard}>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=250&fit=crop"
          alt="Air Force Officer"
          className={styles.storyImage}
        />
        <div className={styles.storyContent}>
          <span className={styles.shareIcon}>⋮</span>
          <div className={styles.storyDate}>Feb 10, 2026</div>
          <h2 className={styles.storyTitle}>
            From Sonipat Skies to the Indian Air Force | Vedika Gupta, UG 2017
          </h2>
          <p className={styles.storyDescription}>
            Currently serving in the Flying Branch (Transport Stream) of the Indian Air Force, 
            Vedika Gupta, UG 2019, flies the Dornier aircraft, supporting missions that 
            require precision and dedication...
          </p>
          <span className={styles.storyTag}>Alumni Stories</span>
        </div>
      </div>

      <div className={styles.storyCard}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop"
          alt="Team Photo"
          className={styles.storyImage}
        />
        <div className={styles.storyContent}>
          <span className={styles.shareIcon}>⋮</span>
          <div className={styles.storyDate}>Feb 06, 2026</div>
          <h2 className={styles.storyTitle}>
            Building, Not Just Starting: Anamitra's Systems-Driven Journey from YIF to Sconto
          </h2>
          <p className={styles.storyDescription}>
            Anamitra Ghosh, YIF '21, grew up mostly on the enabling side of things, 
            helping ideas, people, and systems come together, until one day he 
            decided that he wanted to build something himself...
          </p>
          <span className={styles.storyTag}>Alumni Stories</span>
        </div>
      </div>

      <div className={styles.storyCard}>
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop"
          alt="Professional Portrait"
          className={styles.storyImage}
        />
        <div className={styles.storyContent}>
          <span className={styles.shareIcon}>⋮</span>
          <div className={styles.storyDate}>Feb 02, 2026</div>
          <h2 className={styles.storyTitle}>
            Breaking Barriers in Tech: Priya Sharma's Journey to Silicon Valley
          </h2>
          <p className={styles.storyDescription}>
            From a small town in India to leading engineering teams at a Fortune 500 
            company, Priya Sharma, UG 2018, shares her inspiring journey of perseverance, 
            learning, and breaking through the glass ceiling...
          </p>
          <span className={styles.storyTag}>Alumni Stories</span>
        </div>
      </div>

      <div className={styles.storyCard}>
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop"
          alt="Entrepreneur"
          className={styles.storyImage}
        />
        <div className={styles.storyContent}>
          <span className={styles.shareIcon}>⋮</span>
          <div className={styles.storyDate}>Jan 28, 2026</div>
          <h2 className={styles.storyTitle}>
            From Campus to Startup: Rahul's EdTech Revolution
          </h2>
          <p className={styles.storyDescription}>
            Rahul Verma, UG 2016, transformed his college project into a thriving 
            EdTech platform that now serves millions of students across India, 
            democratizing access to quality education...
          </p>
          <span className={styles.storyTag}>Alumni Stories</span>
        </div>
      </div>
    </div>
  );
}

export default AlumniStoriesinsidecontiner;