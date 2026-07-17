"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
  accentColor?: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: "benchmark",
    type: "work",
    role: "Web Developer & Data Specialist Intern",
    organization: "Benchmark Valuers and Credit Solutions Inc.",
    location: "Muntinlupa City, Philippines",
    duration: "Feb 2026 — June 2026",
    bullets: [
      "Developed and maintained the company website using React and integrated APIs to streamline client feedback and inquiry handling.",
      "Sourced, organized, and validated comparable property data for land appraisal valuations, ensuring data accuracy and consistency across Excel and database records.",
    ],
    icon: (
      <Image
        src="/images/benchmark_logo.png"
        alt="Benchmark Valuers"
        width={34}
        height={34}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
    ),
    accentColor: "#06b6d4",
  },
  {
    id: "remotasks",
    type: "work",
    role: "EQC Quality Assurance Auditor",
    organization: "Remotasks",
    location: "Remote / Hybrid (Large-Scale AI Clients)",
    duration: "2022 — 2026",
    bullets: [
      "Audited quality assurance and data validation for large-scale AI 2D and robotics datasets, ensuring 100% compliance with client project specifications and improving overall model training accuracy.",
      "Coordinated with cross-functional teams to enforce data quality standards across large-scale AI training projects, helping the team sustain consistent output quality across multiple concurrent projects.",
    ],
    icon: (
      <Image
        src="/images/remotasks_logo.png"
        alt="Remotasks"
        width={34}
        height={34}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
    ),
    accentColor: "#8b5cf6",
  },
  {
    id: "umak",
    type: "education",
    role: "BS Information Technology — Dean's Lister",
    organization: "University of Makati",
    location: "Makati City, Philippines",
    duration: "2022 — 2026",
    bullets: [
      "Graduated with a Bachelor of Science in Information Technology, acquiring deep foundational knowledge in web systems, database design, and software engineering. Dean's Lister 2022–2026.",
      "Developed Capstone Project: ShineGuard Hulo — a smart streetlighting and security IoT portal utilizing ESP32 hardware, Firebase synchronization, and AWS EC2.",
      "Integrated Zero Trust Architecture, 3-tier Role-Based Access Control, and SHA-256 cryptographic audit logs into the capstone web portal.",
    ],
    icon: (
      <Image
        src="/images/umak_logo.png"
        alt="University of Makati"
        width={34}
        height={34}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
    ),
    accentColor: "#3b82f6",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className={`${styles.experience} section`}>
      <div className="container">
        <h2 className="section-title reveal">Experience &amp; Journey</h2>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>

          <div className={styles.eventsContainer}>
            {timelineData.map((event, index) => (
              <div
                key={event.id}
                className={`${styles.timelineEvent} reveal reveal-delay-${index + 1}`}
              >
                {/* Node */}
                <div
                  className={`${styles.timelineNode} ${event.type === "work" ? styles.nodeWork : styles.nodeEdu}`}
                  style={{ "--node-color": event.accentColor } as React.CSSProperties}
                >
                  {event.icon}
                </div>

                {/* Card */}
                <div className={`${styles.timelineCard} glass-card`}>
                  <div className={styles.cardTop}>
                    <span
                      className={`${styles.typeBadge} badge`}
                      style={{ color: event.accentColor, borderColor: event.accentColor + "33", background: event.accentColor + "18" }}
                    >
                      {event.type === "work" ? "Professional Experience" : "Education"}
                    </span>
                    <span className={styles.duration}>{event.duration}</span>
                  </div>

                  <h3 className={styles.roleTitle}>{event.role}</h3>
                  <h4 className={styles.orgName}>
                    {event.organization}
                    <span className={styles.location}> · {event.location}</span>
                  </h4>

                  <ul className={styles.bulletsList}>
                    {event.bullets.map((bullet, i) => (
                      <li key={i}>
                        <span
                          className={styles.bulletDot}
                          style={{ background: event.accentColor }}
                        ></span>
                        {bullet}
                      </li>
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
