"use client";

import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className={`${styles.hero} section`}>
      {/* Decorative Blur Shapes */}
      <div className="bg-decorations">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="grid-overlay"></div>

      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={styles.introBadge}>
            <span className={styles.dot}></span>
            Available for Opportunities
          </div>
          
          <h1 className={styles.title}>
            Hi, I&apos;m <span className="gradient-text">Sebastian Arvin</span>
          </h1>
          
          <h2 className={styles.subtitle}>
            Bridging the Gap Between <span className={styles.highlight}>Intelligent AI Datasets</span> and <span className={styles.highlight}>Secure Full-Stack IoT Systems</span>
          </h2>
          
          <p className={styles.bio}>
            I&apos;m a Full-Stack Developer and AI Quality Auditor based in Muntinlupa City, Philippines.
            Blending my BS in Information Technology background with extensive experience auditing large-scale AI datasets
            and developing Zero Trust IoT platforms, I build secure, high-performance applications that connect software,
            hardware, and data intelligence.
          </p>

          <div className={styles.ctaGroup}>
            <button
              onClick={(e) => handleScrollTo(e, "projects")}
              className="btn btn-primary"
            >
              Explore My Projects
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            
            <button
              onClick={(e) => handleScrollTo(e, "contact")}
              className="btn btn-secondary"
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>

        {/* Hero Visual Block */}
        <div className={styles.visual}>
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <span className={`${styles.circle} ${styles.red}`}></span>
              <span className={`${styles.circle} ${styles.yellow}`}></span>
              <span className={`${styles.circle} ${styles.green}`}></span>
              <span className={styles.terminalTitle}>developer_profile.json</span>
            </div>
            <div className={styles.terminalBody}>
              <pre className={styles.codeSnippet}>
                <code>
{`{
  "name": "Sebastian Arvin P. Reyes",
  "alias": "Vin",
  "role": "Full Stack Developer",
  "education": {
    "degree": "BS Information Technology",
    "institution": "University of Makati",
    "timeline": "2022 - 2026"
  },
  "core_focus": [
    "IoT Smart Telemetry",
    "Zero Trust Architectures",
    "AI Data Validation & QA"
  ],
  "location": "Muntinlupa, PH"
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
