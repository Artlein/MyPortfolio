"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Scroll-reveal for hero elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" ref={sectionRef} className={`${styles.hero} section`}>
      {/* Decorative Shapes */}
      <div className="bg-decorations">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="grid-overlay"></div>

      <div className={`${styles.container} container`}>
        {/* Left — Text Content */}
        <div className={styles.content}>
          <div className={`${styles.introBadge} reveal`}>
            <span className={styles.dot}></span>
            Available for Opportunities
          </div>

          <h1 className={`${styles.title} reveal reveal-delay-1`}>
            Hi, I&apos;m{" "}
            <span className="gradient-text">Sebastian Arvin</span>
          </h1>

          <h2 className={`${styles.subtitle} reveal reveal-delay-2`}>
            Full-Stack Developer &amp;{" "}
            <span className={styles.highlight}>AI Quality Auditor</span>
          </h2>

          <p className={`${styles.bio} reveal reveal-delay-3`}>
            Junior Software Engineer specializing in Java, C++, SQL, and Python. Experienced in full-stack
            development, IoT systems, and AI data pipelines — with a strong foundation in OOP principles,
            SQL querying, and data validation across production environments.
          </p>

          <div className={`${styles.ctaGroup} reveal reveal-delay-4`}>
            <button
              onClick={(e) => handleScrollTo(e, "projects")}
              className="btn btn-primary"
            >
              Explore My Projects
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              View Resume
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <button
              onClick={(e) => handleScrollTo(e, "contact")}
              className="btn btn-secondary"
            >
              Let&apos;s Connect
            </button>
          </div>

          {/* Quick stats row */}
          <div className={`${styles.statsRow} reveal reveal-delay-5`}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>3+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Projects Built</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>Dean&apos;s</span>
              <span className={styles.statLabel}>Lister 2022–26</span>
            </div>
          </div>
        </div>

        {/* Right — Profile Photo + Terminal Card */}
        <div className={`${styles.visual} reveal reveal-delay-2`}>
          {/* Profile Photo with glow ring */}
          <div className={styles.photoWrapper}>
            <div className={styles.glowRing}></div>
            <div className={styles.photoFrame}>
              <Image
                src="/images/profile.jpg"
                alt="Sebastian Arvin P. Reyes"
                fill
                sizes="(max-width: 768px) 200px, 320px"
                className={styles.profilePhoto}
                priority
              />
            </div>
            {/* Floating badge — current role */}
            <div className={styles.floatingBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>IT Graduate · UMak 2026</span>
            </div>
          </div>

          {/* Terminal card overlay */}
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <span className={`${styles.circle} ${styles.red}`}></span>
              <span className={`${styles.circle} ${styles.yellow}`}></span>
              <span className={`${styles.circle} ${styles.green}`}></span>
              <span className={styles.terminalTitle}>profile.json</span>
            </div>
            <div className={styles.terminalBody}>
              <pre className={styles.codeSnippet}>
                <code>
{`{
  "name": "Sebastian Arvin",
  "alias": "Vin",
  "role": [
    "Full Stack Developer",
    "AI QA Auditor"
  ],
  "stack": [
    "Java", "PHP", "JavaScript",
    "Python", "C++", "MySQL"
  ],
  "location": "Muntinlupa, PH",
  "status": "open_to_work"`}
                  <span className={styles.cursor}>█</span>
                  {`\n}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
