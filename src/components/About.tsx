"use client";

import React from "react";
import styles from "./About.module.css";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    skills: ["Java", "Node.js", "PHP", "JavaScript", "Python", "TailwindCSS"],
    colorClass: styles.cyanGlow,
  },
  {
    title: "Databases & Cloud",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
      </svg>
    ),
    skills: ["MySQL", "Firebase Realtime DB", "Supabase"],
    colorClass: styles.indigoGlow,
  },
  {
    title: "QA & Data Intelligence",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    skills: [
      "2D Data Segmentation & Annotation",
      "Quality Assurance & Data Review",
      "Generative AI & Text Collection",
      "Transcription & Language Processing",
      "Data Validation and Compliance",
    ],
    colorClass: styles.pinkGlow,
  },
  {
    title: "Libraries & APIs",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    skills: ["Chart.js", "Leaflet.js", "TCPDF", "Firebase JS SDK", "Mailtrap API"],
    colorClass: styles.pinkGlow,
  },
  {
    title: "DevOps & Tools",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    ),
    skills: [
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "Git Bash",
      "XAMPP",
      "Software Testing & QA Automation",
    ],
    colorClass: styles.yellowGlow,
  },
];

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.contentGrid}>
          {/* Text Description */}
          <div className={styles.introText}>
            <h3 className={styles.subheading}>
              Crafting code with an <span className="gradient-text">auditor&apos;s precision</span>.
            </h3>
            <p>
              I am a forward-thinking IT graduate from the <strong>University of Makati</strong> (Class of 2026)
              who thrives at the intersection of full-stack engineering, secure systems architecture, and artificial intelligence.
              My professional experience as an EQC QA Auditor has trained my eye to spot microscopic anomalies in complex datasets,
              a precision I bring directly into my software development process.
            </p>
            <p>
              From designing Zero Trust Capstone systems with hardware integrations to writing modular web applications,
              I focus on building robust, secure, and scalable solutions. Driven by continuous learning and data compliance,
              I am actively targeting <strong>Full-Stack Developer</strong>, <strong>IoT Engineer</strong>, or <strong>Software QA Automation Engineer</strong> roles where precision and security are paramount.
            </p>
            <div className={styles.educationCard}>
              <div className={styles.eduIcon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <div className={styles.eduDetails}>
                <h4>Bachelor of Science in Information Technology</h4>
                <p className={styles.institution}>University of Makati</p>
                <span className={styles.years}>2022 — 2026</span>
              </div>
            </div>
          </div>

          {/* Graphic Side */}
          <div className={styles.skillsWrapper}>
            <h3 className={styles.skillsTitle}>Technical Expertise</h3>
            <div className={styles.skillsGrid}>
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className={`${styles.skillCard} glass-card ${category.colorClass}`}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>{category.icon}</div>
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
