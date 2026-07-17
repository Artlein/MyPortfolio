"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    // Mock API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>

        <div className={styles.contentGrid}>
          {/* Information & Socials */}
          <div className={styles.infoCol}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.3)", borderRadius: "999px", padding: "6px 14px", marginBottom: "1.25rem", fontSize: "0.8rem", fontWeight: 600, color: "#06b6d4", letterSpacing: "0.04em" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#06b6d4", boxShadow: "0 0 6px #06b6d4", animation: "pulse 2s ease-in-out infinite", display: "inline-block", flexShrink: 0 }}></span>
              Open to Opportunities
            </div>
            <h3 className={styles.ctaHeading}>
              Let&apos;s build something <span className="gradient-text">impactful together</span>.
            </h3>
            <p className={styles.ctaText}>
              Looking for a Full Stack Developer with a strong data engineering foundation?
              Whether it&apos;s a web application, data pipeline, or end-to-end system,
              let&apos;s connect and build something great.
            </p>

            <div className={styles.contactDetails}>
              {/* Email */}
              <a href="mailto:arvinsebastianreyes25@gmail.com" className={styles.detailRow}>
                <div className={styles.iconCircle}>
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className={styles.label}>Email Me</span>
                  <span className={styles.value}>arvinsebastianreyes25@gmail.com</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sebastian-arvin-reyes-/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailRow}
              >
                <div className={styles.iconCircle}>
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <span className={styles.label}>Connect on LinkedIn</span>
                  <span className={styles.value}>linkedin.com/in/sebastian-arvin-reyes-</span>
                </div>
              </a>

              {/* Location */}
              <div className={styles.detailRow}>
                <div className={styles.iconCircle}>
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className={styles.label}>Location</span>
                  <span className={styles.value}>Muntinlupa City, Philippines</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`${styles.formCol} glass-card`}>
            {submitSuccess ? (
              <div className={styles.successBlock}>
                <div className={styles.successIcon}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: "1.5rem" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h4 className={styles.formTitle}>Send a Message</h4>
                
                {errorMsg && <div className={styles.errorBanner}>{errorMsg}</div>}

                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="form-control"
                    style={{ minHeight: "130px", resize: "vertical" }}
                    placeholder=" "
                    required
                  ></textarea>
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: "100%", height: "50px" }}
                >
                  {isSubmitting ? (
                    <span className={styles.spinner}></span>
                  ) : (
                    <>
                      Send Message
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
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
