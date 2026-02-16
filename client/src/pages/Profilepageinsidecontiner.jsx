import React, { useEffect } from "react";
import styles from "./ProfilePageinsidecontiner.module.css";

function ProfilePage() {
  // Sample data - you can pass this as props or fetch from API
  const profileData = {
    name: "Akshay Barik",
    title: "President, Alumni Council 2025-27",
    currentRole: "Senior Product Manager at Google, Mountain View, CA",
    education: "B.Tech Computer Science • YIF 2015",
    email: "akshay.barik@alumni.edu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      website: "#"
    },
    stats: [
      { number: "8+", label: "Years Experience" },
      { number: "50+", label: "Projects Led" },
      { number: "200+", label: "Alumni Mentored" },
      { number: "15+", label: "Awards Received" }
    ],
    about: [
      "As President of the Alumni Council (2025-27), Akshay Barik leads strategic initiatives to strengthen the bond between alumni and the university. Under his leadership, the council has launched several transformative programs including the Alumni Mentorship Initiative, which has connected over 500 students with industry professionals, and the Career Accelerator Program, helping recent graduates secure positions at leading companies.",
      "Akshay spearheaded the creation of the Alumni Scholarship Fund, which has raised over $2 million to support underprivileged students. He also established regional alumni chapters in 15 cities globally, fostering a vibrant network of professionals who actively contribute to university development and student welfare. His vision for the council emphasizes giving back, lifelong learning, and creating meaningful opportunities for both students and alumni.",
      "Beyond his council duties, Akshay regularly returns to campus as a guest speaker, conducts workshops on career development and product management, and serves on the University's Industry Advisory Board. He has been instrumental in facilitating corporate partnerships that have resulted in internship programs, sponsored research projects, and campus recruitment drives from Fortune 500 companies. His dedication to the alumni community has set a new benchmark for engagement and impact."
    ],
    experience: [
      {
        date: "2022 - Present",
        title: "Senior Product Manager",
        company: "Google, Mountain View, CA",
        description: "Leading product strategy for Google Cloud Platform infrastructure services. Managed cross-functional teams of 30+ engineers and designers to deliver scalable cloud solutions serving Fortune 500 companies."
      },
      {
        date: "2019 - 2022",
        title: "Product Manager",
        company: "Microsoft, Redmond, WA",
        description: "Developed and launched Azure DevOps features that increased developer productivity by 40%. Collaborated with engineering teams across three continents to deliver enterprise-grade solutions."
      },
      {
        date: "2016 - 2019",
        title: "Associate Product Manager",
        company: "Amazon, Seattle, WA",
        description: "Worked on AWS EC2 and S3 services, focusing on improving customer experience and reducing operational costs. Contributed to features that generated $50M+ in annual revenue."
      },
      {
        date: "2015 - 2016",
        title: "Product Analyst",
        company: "Flipkart, Bangalore, India",
        description: "Analyzed user behavior data and provided actionable insights that improved conversion rates by 25%. Built dashboards and reporting tools for product and business teams."
      }
    ],
    skills: [
      {
        category: "Product Management",
        tags: ["Product Strategy", "Roadmapping", "Stakeholder Management", "Agile/Scrum"]
      },
      {
        category: "Technical Skills",
        tags: ["SQL", "Python", "API Design", "Cloud Architecture"]
      },
      {
        category: "Analytics & Tools",
        tags: ["Google Analytics", "Tableau", "Jira", "Figma"]
      },
      {
        category: "Leadership",
        tags: ["Team Building", "Mentorship", "Public Speaking", "Strategic Planning"]
      }
    ],
    achievements: [
      {
        icon: "fa-trophy",
        title: "Google Cloud Innovation Award",
        description: "Recognized for exceptional product innovation and leadership in developing next-generation cloud solutions (2024)."
      },
      {
        icon: "fa-users",
        title: "Alumni Mentor of the Year",
        description: "Awarded for outstanding contribution to alumni mentorship programs, helping 50+ students secure positions at top tech companies (2023)."
      },
      {
        icon: "fa-rocket",
        title: "Product Launch Excellence",
        description: "Successfully launched 5 major product features at Google that collectively generated $100M+ in revenue (2023)."
      },
      {
        icon: "fa-graduation-cap",
        title: "Distinguished Alumni Award",
        description: "Honored by the university for exceptional professional achievements and continued engagement with the alumni community (2022)."
      },
      {
        icon: "fa-book",
        title: "Published Author",
        description: "Co-authored \"Building Scalable Products\" - a guide for product managers working on enterprise software solutions (2021)."
      },
      {
        icon: "fa-certificate",
        title: "Certified Product Leader",
        description: "Holds advanced certifications in Product Management, Agile Leadership, and Cloud Architecture from top institutions."
      }
    ]
  };

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll(`.${styles.fadeIn}`).forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goBack = () => {
    window.history.back();
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      {/* Back Button */}
      <button className={styles.backButton} onClick={goBack}>
        <i className="fas fa-arrow-left"></i>
        Back to Council
      </button>

      {/* Hero Section */}
      <section className={styles.profileHero}>
        <div className={styles.heroContent}>
          <div className={styles.profileImageSection}>
            <div className={styles.profileImageWrapper}>
              <img src={profileData.image} alt={profileData.name} />
            </div>
            <button className={styles.aboutSectionBtn} onClick={scrollToAbout}>
              <span>About</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className={styles.profileInfo}>
            <h1 className={styles.profileName}>{profileData.name}</h1>
            <p className={styles.profileTitle}>
              {profileData.title}<br />
              {profileData.currentRole}
            </p>
            <p className={styles.profileEducation}>{profileData.education}</p>
            
            <div className={styles.profileContact}>
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.profileContent}>
        {/* Stats Section */}
        <div className={styles.statsSection}>
          {profileData.stats.map((stat, index) => (
            <div key={index} className={`${styles.statCard} ${styles.fadeIn}`}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className={`${styles.aboutSection} ${styles.fadeIn}`} id="about">
          <h2 className={styles.sectionTitle}>About</h2>
          {profileData.about.map((paragraph, index) => (
            <p key={index} className={styles.aboutText}>{paragraph}</p>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className={`${styles.timelineSection} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <div className={styles.timeline}>
            {profileData.experience.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{exp.date}</div>
                <div className={styles.timelineTitle}>{exp.title}</div>
                <div className={styles.timelineCompany}>{exp.company}</div>
                <p className={styles.timelineDescription}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={`${styles.skillsSection} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <div className={styles.skillsGrid}>
            {profileData.skills.map((skillGroup, index) => (
              <div key={index} className={styles.skillCategory}>
                <div className={styles.skillCategoryTitle}>{skillGroup.category}</div>
                <div className={styles.skillTags}>
                  {skillGroup.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.skillTag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className={`${styles.achievementsSection} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}>Key Achievements</h2>
          <div className={styles.achievementsGrid}>
            {profileData.achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementIcon}>
                  <i className={`fas ${achievement.icon}`}></i>
                </div>
                <div className={styles.achievementTitle}>{achievement.title}</div>
                <p className={styles.achievementDescription}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`${styles.contactCta} ${styles.fadeIn}`}>
          <h2>Let's Connect!</h2>
          <p>Interested in collaboration, mentorship, or just want to say hello? I'd love to hear from you.</p>
          <div className={styles.contactButtons}>
            <button 
              className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}
              onClick={() => window.location.href = `mailto:${profileData.email}`}
            >
              <i className="fas fa-envelope"></i>
              Send Email
            </button>
            <button 
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
              onClick={() => window.open(profileData.socialLinks.linkedin, '_blank')}
            >
              <i className="fab fa-linkedin-in"></i>
              Connect on LinkedIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;