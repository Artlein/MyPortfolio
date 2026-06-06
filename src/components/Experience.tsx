"use client";

import React from "react";
import styles from "./Experience.module.css";

interface TimelineEvent {
  id: string;
  type: "work" | "education";
  role: string;
  organization: string;
  location: string;
  duration: string;
  bullets: string[];
  icon: React.ReactNode;
}

const timelineData: TimelineEvent[] = [
  {
    id: "remotasks",
    type: "work",
    role: "EQC Quality Assurance Auditor",
    organization: "Remotasks",
    location: "Remote / Hybrid (Large-Scale AI Clients)",
    duration: "2022 — 2026",
    bullets: [
      "Audited complex quality assurance and data validation workflows for large-scale AI 2D annotation and robotics datasets, ensuring 100% compliance with client specifications.",
      "Coordinated across cross-functional annotation teams to enforce global data standards, improving model training accuracy for next-generation computer vision and AI pipelines.",
      "Formulated feedback loops and resolved edge-case anomalies, sustaining high output quality across multiple concurrent machine learning datasets."
    ],
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  },
  {
    id: "umak",
    type: "education",
    role: "BS Information Technology & Capstone Developer",
    organization: "University of Makati",
    location: "Makati City, Philippines",
    duration: "2022 — 2026",
    bullets: [
      "Graduated with a Bachelor of Science in Information Technology, acquiring deep foundational knowledge in web systems, database design, and software engineering.",
      "Developed Capstone Project: ShineGuard Hulo — a smart streetlighting and security IoT portal utilizing ESP32 hardware and Firebase synchronization.",
      "Successfully integrated Zero Trust Architecture, Role-Based Access Control, and SHA-256 cryptographic audit logs into capstone application web portals."
    ],
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
      </svg>
    )
  }
];

export default function Experience() {
  return (
    <section id="experience" className={`${styles.experience} section`}>
      <div className="container">
        <h2 className="section-title">Experience & Journey</h2>
        
        <div className={styles.timeline}>
          {/* Vertical line */}
          <div className={styles.timelineLine}></div>
          
          <div className={styles.eventsContainer}>
            {timelineData.map((event, index) => (
              <div key={event.id} className={styles.timelineEvent}>
                {/* Node marker on the line */}
                <div className={`${styles.timelineNode} ${event.type === "work" ? styles.nodeWork : styles.nodeEdu}`}>
                  {event.icon}
                </div>
                
                {/* Content Card */}
                <div className={`${styles.timelineCard} glass-card`}>
                  <span className={`${styles.badge} badge ${event.type === "work" ? "badge-primary" : "badge-secondary"}`}>
                    {event.type === "work" ? "Professional Experience" : "Education & Projects"}
                  </span>
                  
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.roleTitle}>{event.role}</h3>
                      <h4 className={styles.orgName}>
                        {event.organization} <span className={styles.location}>({event.location})</span>
                      </h4>
                    </div>
                    <span className={styles.duration}>{event.duration}</span>
                  </div>
                  
                  <ul className={styles.bulletsList}>
                    {event.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
