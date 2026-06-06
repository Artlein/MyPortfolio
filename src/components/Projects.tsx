"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

interface Project {
  id: string;
  title: string;
  category: "fullstack" | "iot" | "aiqa";
  categoryLabel: string;
  summary: string;
  image: string;
  techStack: string[];
  highlights: string[];
  learned: string;
  github?: string;
  demo?: string;
}

const projectsData: Project[] = [
  {
    id: "shineguard",
    title: "ShineGuard Hulo (Smart Streetlight & Security IoT Portal)",
    category: "iot",
    categoryLabel: "IoT & Security",
    summary: "A smart streetlighting and security IoT portal connecting physical hardware nodes to a real-time municipal dashboard for monitoring and cryptographic audit logging.",
    image: "/images/shineguard_hulo.png",
    techStack: ["PHP", "MySQL", "Firebase Realtime DB", "JavaScript", "ESP32", "Arduino", "SHA-256"],
    highlights: [
      "Developed and configured an IoT system with ESP32 hardware, successfully monitoring real-time telemetry data across 32 physical streetlight nodes.",
      "Architected a secure full-stack dashboard integrating real-time Firebase syncing, reducing manual municipal operational overhead.",
      "Implemented a Zero Trust Architecture (ZTA) featuring a 3-tier Role-Based Access Control (RBAC) system, Secondary Authentication verification, and SHA-256 cryptographic audit logs—resulting in zero security breaches."
    ],
    learned: "Building ShineGuard Hulo taught me how to securely orchestrate IoT hardware telemetry with web services under tight latency requirements and strict data integrity constraints.",
    github: "https://github.com/SebastianArvinReyes/ShineGuard-Hulo", // Realistic links
    demo: "#"
  },
  {
    id: "sentinelai",
    title: "SentinelAI QA (Data Compliance & Automation Review)",
    category: "aiqa",
    categoryLabel: "AI & Data QA",
    summary: "An automated data review and compliance pipeline dashboard built for auditing large-scale AI annotations, 2D segmentation bounding boxes, and robotic datasets.",
    image: "/images/sentinelai_qa.png",
    techStack: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL", "QA Automation"],
    highlights: [
      "Audited complex quality assurance and data validation workflows for large-scale AI 2D annotation and robotics datasets.",
      "Coordinated across cross-functional annotation teams to enforce global standards, improving model training accuracy and consistency.",
      "Formulated automation feedback loops and resolved edge-case anomalies, sustaining 100% compliance with client specifications."
    ],
    learned: "This project deepened my understanding of data cleaning pipelines and QA automation, reinforcing the critical role of data integrity in building highly accurate machine learning models.",
    github: "#",
    demo: "#"
  },
  {
    id: "verisign",
    title: "Verisign SBA Hub (Zero Trust Access Portal)",
    category: "iot",
    categoryLabel: "IoT & Security",
    summary: "A lightweight enterprise security portal offering secondary verification and role-based authentication as a service, integrating cryptographic logging.",
    image: "/images/verisign_sba.png",
    techStack: ["Java", "Spring Boot", "React", "MySQL", "JWT", "SHA-256", "ZTA"],
    highlights: [
      "Implemented a secure JWT-based Role-Based Access Control model with 3 administrative tiers (Admin, Manager, Operator).",
      "Integrated secondary authentication challenge mechanics preventing unauthorized session hijacking.",
      "Audited application logs using cryptographic SHA-256 signatures for tamper-proof security tracking."
    ],
    learned: "Working on Verisign honed my skills in enterprise-grade security protocols, cryptography integration, and designing bulletproof backend access verification points.",
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    if (filter === "iot") return project.category === "iot";
    if (filter === "aiqa") return project.category === "aiqa";
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className="container">
        <h2 className="section-title">Projects Showcase</h2>
        
        {/* Filters */}
        <div className={styles.filterTabs}>
          <button
            onClick={() => setFilter("all")}
            className={`${styles.filterBtn} ${filter === "all" ? styles.activeFilter : ""}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("iot")}
            className={`${styles.filterBtn} ${filter === "iot" ? styles.activeFilter : ""}`}
          >
            IoT & Security
          </button>
          <button
            onClick={() => setFilter("aiqa")}
            className={`${styles.filterBtn} ${filter === "aiqa" ? styles.activeFilter : ""}`}
          >
            AI & Data QA
          </button>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={`${styles.projectCard} glass-card`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.projectImage}
                  priority={project.id === "shineguard"}
                />
                <span className={`${styles.categoryBadge} badge badge-accent`}>
                  {project.categoryLabel}
                </span>
              </div>
              
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSummary}>{project.summary}</p>
                
                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge badge-secondary">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.highlightsWrapper}>
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className={styles.toggleBtn}
                  >
                    <span>{expandedProject === project.id ? "Hide details" : "View key details & highlights"}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: expandedProject === project.id ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform var(--transition-fast)"
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  <div
                    className={`${styles.expandableContent} ${
                      expandedProject === project.id ? styles.expanded : ""
                    }`}
                  >
                    <ul className={styles.highlightsList}>
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    <div className={styles.learnedBlock}>
                      <strong>What I Learned:</strong>
                      <p>{project.learned}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.linksRow}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Repository
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
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
