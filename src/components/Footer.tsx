"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.leftCol}>
          <div className={styles.logo}>
            <span>V</span>IN.DEV
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Sebastian Arvin P. Reyes. All rights reserved.
          </p>
        </div>

        <div className={styles.rightCol}>
          <button onClick={handleScrollToTop} className={styles.topBtn} aria-label="Scroll to top">
            Back to Top
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
