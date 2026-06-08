"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About & Skills", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            id,
            // Offset the header size (approx 80px)
            top: rect.top - 100,
            bottom: rect.bottom - 100,
          };
        }
        return null;
      });

      const current = sections.find(
        (s) => s && s.top <= 0 && s.bottom > 0
      );
      if (current) {
        setActiveSection(current.id);
      } else if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
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
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
        mobileMenuOpen ? styles.menuOpen : ""
      }`}
    >
      <div className={`${styles.container} container`}>
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className={styles.logo}>
          <span>V</span>IN.DEV
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => {
            const id = item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`${styles.navLink} ${
                  activeSection === id ? styles.active : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              // Sun Icon
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.sunIcon}
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              // Moon Icon
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.moonIcon}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`${styles.burger} ${mobileMenuOpen ? styles.burgerActive : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.drawerOpen : ""}`}>
        <nav className={styles.mobileNav}>
          {navItems.map((item) => {
            const id = item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`${styles.mobileLink} ${
                  activeSection === id ? styles.mobileActive : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileResumeBtn}
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
