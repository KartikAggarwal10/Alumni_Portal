import React, { useEffect, useState } from "react";
import styles from "./DualSlider.module.css";

const HomeSlider = () => {

  // ✅ LEFT SIDE IMAGES (PUT YOUR URLS HERE)
  const sliderImages = [
    "https://iiitsonepat.ac.in/uploads/1765907289212-Convocation%20Ceremony%20at%20IIIT%20Sonepat%20(3).jpg",
    "https://iiitsonepat.ac.in/uploads/1765902802061-Convocation%20Ceremony%20at%20IIIT%20Sonepat%20(1).jpg",
    "https://cdn.stayhappening.com/events5/banners/4ff0ff71bffb1947b5ee48370e3f289fd458c05d41a4176dfee22291fec89839-rimg-w1177-h652-gmir.jpg?v=1685402736",
    "https://ww2.comsats.edu.pk/internationaloffice/slides/banner-gr.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // ✅ RIGHT SIDE NOTICES with parsed dates
  const notices = [
  {
    title: "Alumni Meet 2026 – Registration Now Open",
    date: "2026-02-15"
  },
  {
    title: "Call for Mentors: Alumni Mentorship Program 2026",
    date: "2026-02-12"
  },
  {
    title: "Distinguished Alumni Award – Nominations Invited",
    date: "2026-02-09"
  },
  {
    title: "Campus Recruitment Drive – Alumni Referral Support",
    date: "2026-02-06"
  },
  {
    title: "Alumni Newsletter – February Edition Released",
    date: "2026-02-03"
  },
  {
    title: "Startup Collaboration Opportunities for Alumni",
    date: "2026-01-30"
  },
  {
    title: "Update Your Alumni Profile & Stay Connected",
    date: "2026-01-27"
  }
];


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en', { month: 'short' }).toUpperCase();
    return { day, month };
  };

  return (
    <div className={styles.container}>

      {/* ================= LEFT SLIDER ================= */}
      <div className={styles.leftSlider}>
        <img
          src={sliderImages[currentIndex]}
          alt="Slider"
          className={styles.sliderImage}
        />

        <div className={styles.dots}>
          {sliderImages.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* ================= RIGHT NOTICE BOARD ================= */}
      <div className={styles.noticeBoard}>
        <div className={styles.noticeHeader}>
          <h2>Notices</h2>
          <div className={styles.headerUnderline}></div>
        </div>

        <div className={styles.noticeWrapper}>
          <div className={styles.noticeTrack}>
            {[...notices, ...notices, ...notices].map((notice, index) => {
              const { day, month } = formatDate(notice.date);
              return (
                <div key={index} className={styles.noticeItem}>
                  <div className={styles.dateBox}>
                    <div className={styles.dateDay}>{day}</div>
                    <div className={styles.dateMonth}>{month}</div>
                  </div>
                  <div className={styles.noticeContent}>
                    <div className={styles.noticeTitle}>{notice.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.noticeFooter}>
          <a href="#" className={styles.viewAllLink}>View All Notices</a>
        </div>
      </div>

    </div>
  );
};

export default HomeSlider;