"use client";

import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Header() {
  const pathname = usePathname();

  // * Sticky header logic
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // * Theme switch
  const [theme, setTheme] = useState("dark");

  // Make theme be set in DOM
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle handler
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Make media theme switch on phone&apos;s user settings
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // * Mobile sidebar toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  // Handle hamburger click with spin animation
  const handleHamburgerClick = () => {
    setMenuOpen(true);
    setIsSpinning(true);
    // Reset spinning state after animation completes
    setTimeout(() => {
      setIsSpinning(false);
    }, 300);
  };

  // * WhatsApp handler
  const handlePhoneClick = () => {
    window.open("https://wa.me/4072169833", "_blank");
  };

  return (
    <>
      <header className={`${styles.header} ${isScrollingUp ? styles.visible : styles.hidden}`}>
        <div className={styles.headerContainer}>
          {/* Desktop header */}
          <div className={styles.desktopHeader}>
            {/* Logo */}
            <Link href="/" className={styles.logoContainer}>
              <Image
                src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
                alt="Kingdom Movement Logo"
                width={175}
                height={50}
                priority
              />
            </Link>
            <div className={styles.navContainer}>
              {/* Site navigation */}
              <nav className={styles.navItems}>
                <Link href="/" className={pathname === "/" ? styles.activeLink : undefined}>
                  HOME
                </Link>
                <Link
                  href="/nutrition"
                  className={pathname === "/nutrition" ? styles.activeLink : undefined}
                >
                  NUTRITION
                </Link>
                <Link
                  href="/schedule"
                  className={pathname === "/schedule" ? styles.activeLink : undefined}
                >
                  SCHEDULE
                </Link>
                <Link
                  href="/membership"
                  className={pathname === "/membership" ? styles.activeLink : undefined}
                >
                  MEMBERSHIP
                </Link>
              </nav>
              {/* Seperator */}
              <span className={styles.seperator}>|</span>
              {/* Theme button */}
              <button className={styles.themeButton} onClick={toggleTheme}>
                <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
              </button>
              {/* Free class button */}
              <button className={styles.freeClassButton}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kngdmmvmnt.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D236922%26LocationId%3D10458"
                >
                  FREE CLASS
                </Link>
              </button>
            </div>
          </div>

          {/* Mobile header */}
          <div className={styles.mobileHeader}>
            {/* Phone button */}
            <button className={styles.phoneButton} onClick={handlePhoneClick}>
              <i className="fa-brands fa-whatsapp"></i>
            </button>
            {/* Logo */}
            <Link href="/" className={styles.mobileLogoContainer}>
              <Image
                src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
                alt="Kingdom Movement Logo"
                width={125}
                height={36}
                priority
              />
            </Link>
            {/* Hamburger button */}
            <button className={styles.hamburger} onClick={handleHamburgerClick}>
              <i className={`fa-solid fa-bars ${isSpinning ? styles.spin : ""}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      {menuOpen &&
        createPortal(
          <div className={styles.sidebarOverlay} onClick={() => setMenuOpen(false)}>
            <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
              {/* Sidebar close button */}
              <button className={styles.sidebarClose} onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              {/* Sidebar site navigation */}
              <nav className={styles.sidebarNavItems}>
                <Link
                  href="/"
                  className={pathname === "/" ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/nutrition"
                  className={pathname === "/nutrition" ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  NUTRITION
                </Link>
                <Link
                  href="/schedule"
                  className={pathname === "/schedule" ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  SCHEDULE
                </Link>
                <Link
                  href="/membership"
                  className={pathname === "/membership" ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  MEMBERSHIP
                </Link>
                {/* Seperator */}
                <hr className={styles.sidebarSeperator} />
                {/* Free class button */}
                <button className={styles.sidebarFreeClassButton}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://kngdmmvmnt.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D236922%26LocationId%3D10458"
                  >
                    FREE CLASS
                  </Link>
                </button>
              </nav>
              {/* Sidebar footer */}
              <div className={styles.sidebarFooter}>
                {/* Sidebar theme button */}
                <button className={`${styles.themeButton} ${styles.sidebarThemeButton}`} onClick={toggleTheme}>
                  <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
                  <p>{theme === "dark" ? "DARK" : "LIGHT"}</p>
                </button>
                {/* Sidebar legal pages */}
                <Link
                  href="/contact"
                  className={pathname === "/contact" ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  CONTACT
                </Link>
                <Link
                  href="/privacy-policy"
                  className={pathname === "/privacy-policy" ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fa-solid fa-shield-halved"></i>
                  PRIVACY POLICY
                </Link>
                <Link
                  href="/terms-of-service"
                  className={pathname === "/terms-of-service" ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fa-solid fa-asterisk"></i>
                  TERMS OF SERVICE
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
