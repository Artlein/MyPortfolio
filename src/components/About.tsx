"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./About.module.css";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    skills: ["Java", "PHP", "JavaScript", "Python", "C++", "C#"],
    colorClass: styles.cyanGlow,
    accent: "#06b6d4",
  },
  {
    title: "Database & Cloud",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
      </svg>
    ),
    skills: ["MySQL", "Firebase Realtime DB", "Supabase", "AWS EC2"],
    colorClass: styles.indigoGlow,
    accent: "#3b82f6",
  },
  {
    title: "Data & Analytics",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    skills: ["SQL", "Excel", "Chart.js", "Quality Assurance & Validation", "Dataset Annotation & Labeling"],
    colorClass: styles.pinkGlow,
    accent: "#8b5cf6",
  },
  {
    title: "Libraries & APIs",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    skills: ["React", "Chart.js", "Leaflet.js", "Firebase JS SDK", "Bootstrap 5"],
    colorClass: styles.cyanGlow,
    accent: "#06b6d4",
  },
  {
    title: "DevOps & Tools",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"></path>
      </svg>
    ),
    skills: ["Docker", "Kubernetes", "Git", "GitHub", "Git Bash", "XAMPP"],
    colorClass: styles.yellowGlow,
    accent: "#f59e0b",
  },
  {
    title: "Software Testing & QA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"></polyline>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
    skills: ["Selenium", "Jenkins", "QA Automation", "Data Validation & Compliance"],
    colorClass: styles.pinkGlow,
    accent: "#ec4899",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`${styles.about} section`}>
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>

        <div className={styles.contentGrid}>
          {/* Left — Intro + Photo */}
          <div className={`${styles.introCol} reveal`}>
            {/* Profile snapshot */}
            <div className={styles.profileCard}>
              <div className={styles.photoThumb}>
                <Image
                  src="/images/profile.jpg"
                  alt="Sebastian Arvin P. Reyes"
                  fill
                  sizes="120px"
                  className={styles.thumbImg}
                />
              </div>
              <div className={styles.profileInfo}>
                <h3 className={styles.profileName}>Sebastian Arvin P. Reyes</h3>
                <p className={styles.profileRole}>Full Stack Developer · Data Engineering</p>
                <span className={styles.profileLocation}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Muntinlupa City, PH
                </span>
              </div>
            </div>

            <h3 className={styles.subheading}>
              Building scalable systems with{" "}
              <span className="gradient-text">engineering precision</span>.
            </h3>

            <p>
              I am a forward-thinking IT graduate from the{" "}
              <strong>University of Makati</strong> (Class of 2026, Dean&apos;s Lister) who thrives at the
              intersection of full-stack engineering, data pipeline architecture, and secure systems design.
              Most recently, I served as a <strong>Web Developer &amp; Data Specialist Intern</strong> at{" "}
              <strong>Benchmark Valuers and Credit Solutions Inc.</strong>, developing their company website and
              managing property data workflows.
            </p>
            <p>
              My hands-on experience spanning full-stack development, IoT systems, and AI data pipelines has
              sharpened my ability to build robust, data-driven solutions end-to-end — from database schema
              design and SQL querying to frontend dashboards and scalable backend services.
            </p>

            {/* Education card */}
            <div className={styles.educationCard}>
              <div className={styles.eduIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <div className={styles.eduDetails}>
                <h4>Bachelor of Science in Information Technology</h4>
                <p className={styles.institution}>University of Makati</p>
                <div className={styles.eduMeta}>
                  <span className={styles.years}>2022 — 2026</span>
                  <span className={`badge ${styles.deanBadge}`}>Dean&apos;s Lister</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Skills Bento Grid */}
          <div className={`${styles.skillsCol} reveal reveal-delay-2`}>
            <h3 className={styles.skillsTitle}>Technical Expertise</h3>
            <div className={styles.skillsGrid}>
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className={`${styles.skillCard} glass-card ${category.colorClass} reveal reveal-delay-${(index % 3) + 1}`}
                  style={{ "--card-accent": category.accent } as React.CSSProperties}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper} style={{ color: category.accent }}>
                      {category.icon}
                    </div>
                    <h4>{category.title}</h4>
                  </div>
                  <div className={styles.tagsContainer}>
                    {category.skills.map((skill) => (
                      <span key={skill} className={`${styles.skillTag} badge`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
