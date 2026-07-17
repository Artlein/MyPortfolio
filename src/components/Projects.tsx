"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "fullstack" | "iot" | "data";
  categoryLabel: string;
  dateRange: string;
  summary: string;
  image: string;
  images?: string[];
  techStack: string[];
  highlights: string[];
  learned: string;
  github?: string;
  demo?: string;
}

interface ProjectImageProps {
  image: string;
  images?: string[];
  title: string;
  priority: boolean;
}

function ProjectImage({ image, images, title, priority }: ProjectImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageList = images && images.length > 0 ? images : [image];

  useEffect(() => {
    if (imageList.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [imageList]);

  return (
    <>
      {imageList.map((imgSrc, idx) => (
        <Image
          key={imgSrc}
          src={imgSrc}
          alt={`${title} - view ${idx + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${styles.projectImage} ${idx === currentIndex ? styles.visibleImage : styles.hiddenImage}`}
          priority={priority && idx === 0}
        />
      ))}
    </>
  );
}

const projectsData: Project[] = [
  {
    id: "shineguard",
    title: "ShineGuard Hulo",
    subtitle: "IoT Smart Streetlight Predictive Maintenance System",
    category: "iot",
    categoryLabel: "IoT & Security",
    dateRange: "Nov 2025 – May 2026",
    summary: "A smart streetlighting and security IoT portal connecting 32 physical hardware nodes to a real-time municipal dashboard with cryptographic audit logging.",
    image: "/images/shineguard_login.png",
    images: ["/images/shineguard_login.png", "/images/shineguard_map.png", "/images/shineguard_iot.png"],
    techStack: ["PHP", "MySQL", "Firebase Realtime DB", "JavaScript", "ESP32", "Arduino", "SHA-256", "AWS EC2"],
    highlights: [
      "Developed an IoT hardware streetlight monitoring system managing 32 physical nodes, integrating ESP32/Arduino microcontrollers with real-time telemetry data.",
      "Architected the system architecture of a full-stack municipal monitoring platform built on PHP, MySQL, Firebase Realtime Database, and AWS EC2 with a responsive JavaScript frontend.",
      "Integrated a Zero Trust Architecture (ZTA) security framework enforcing a 3-tier RBAC system, secondary authentication verification (SBA), and SHA-256 cryptographic audit logs — resulting in zero security breaches.",
    ],
    learned: "Building ShineGuard Hulo taught me how to securely orchestrate IoT hardware telemetry with web services under tight latency requirements and strict data integrity constraints.",
    github: "https://github.com/Artlein/ShineGuard.git",
    demo: "#",
  },
  {
    id: "deltech",
    title: "Deltech",
    subtitle: "E-Commerce Web Platform",
    category: "fullstack",
    categoryLabel: "Full Stack",
    dateRange: "Jan 2025 – May 2025",
    summary: "A full-stack PHP e-commerce platform with complete backend operations including user accounts, product catalog, order management, automated PDF receipts, and QR code verification.",
    image: "/images/deltech_ecommerce.png",
    techStack: ["PHP", "MySQL", "JavaScript", "TCPDF", "QR Code API"],
    highlights: [
      "Designed and implemented full CRUD functionality in PHP for core modules including user accounts, product catalog, and order management, backed by a relational SQL database.",
      "Handled core backend operations for authentication, cart management, and order tracking, along with a rule-based automated chat support feature, automated PDF receipt generation, QR code integration for order verification, and an admin dashboard for managing products and orders.",
    ],
    learned: "Deltech sharpened my PHP backend architecture skills and deepened my understanding of building cohesive e-commerce flows — from cart to checkout to admin management.",
    github: "https://github.com/Artlein/Deltech.git",
    demo: "#",
  },
  {
    id: "malaya",
    title: "Malaya Solar Accounting System",
    subtitle: "Accounting & Resource Planning App",
    category: "data",
    categoryLabel: "Data Engineering",
    dateRange: "Sept 2024 – Dec 2024",
    summary: "A responsive enterprise-grade accounting and resource-planning application featuring custom Java API handlers, React frontend dashboard analytics, payroll tracking, and live Supabase PostgreSQL synchronization.",
    image: "/images/malaya_solar.png",
    images: ["/images/malaya_solar.png", "/images/malaya_solar_login.png"],
    techStack: ["Java (HTTP Server)", "React (Vite)", "PostgreSQL (Supabase)", "CSS3", "JWT Auths"],
    highlights: [
      "Developed a responsive accounting and resource-planning application using React, Java HTTP Server, and Supabase PostgreSQL, improving project cost visibility and workflow management.",
      "Built a financial tracking module with full CRUD functionality that auto-calculated budgets, actuals, taxes, and variances, backed by an interactive dashboard and secured with custom token guards and prepared statements.",
    ],
    learned: "Malaya strengthened my ability to design data-driven financial interfaces end-to-end, balancing frontend chart UX with secure and efficient backend SQL design.",
    github: "https://github.com/Artlein/Malaya.git",
    demo: "#",
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const filterBtns = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "iot", label: "IoT & Security" },
    { key: "data", label: "Data Engineering" },
  ];

  return (
    <section id="projects" ref={sectionRef} className={`${styles.projects} section`}>
      <div className="container">
        <h2 className="section-title reveal">Projects Showcase</h2>

        {/* Filter Tabs */}
        <div className={`${styles.filterTabs} reveal reveal-delay-1`}>
          {filterBtns.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`${styles.filterBtn} ${filter === btn.key ? styles.activeFilter : ""}`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectCard} glass-card reveal reveal-delay-${(index % 3) + 1}`}
            >
              {/* Image */}
              <div className={styles.imageWrapper}>
                <ProjectImage
                  image={project.image}
                  images={project.images}
                  title={project.title}
                  priority={project.id === "shineguard"}
                />
                <div className={styles.imageMeta}>
                  <span className={`${styles.categoryBadge} badge badge-accent`}>
                    {project.categoryLabel}
                  </span>
                  <span className={styles.dateRange}>{project.dateRange}</span>
                </div>
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <div className={styles.titleBlock}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                </div>
                <p className={styles.projectSummary}>{project.summary}</p>

                {/* Tech Stack */}
                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge badge-secondary">{tech}</span>
                  ))}
                </div>

                {/* Expandable highlights */}
                <div className={styles.highlightsWrapper}>
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className={styles.toggleBtn}
                  >
                    <span>{expandedProject === project.id ? "Hide details" : "View highlights"}</span>
                    <svg
                      width="15" height="15" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{
                        transform: expandedProject === project.id ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform var(--transition-fast)",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  <div className={`${styles.expandableContent} ${expandedProject === project.id ? styles.expanded : ""}`}>
                    <ul className={styles.highlightsList}>
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                    <div className={styles.learnedBlock}>
                      <strong>What I Learned:</strong>
                      <p>{project.learned}</p>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className={styles.linksRow}>
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Repository
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
