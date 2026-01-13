import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
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

  // * Custom styles for active page
  const navLinkClass = ({ isActive }) => (isActive ? styles.activeLink : undefined);

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

  // Make media theme switch on phone's user settings
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
      <header className={`${isScrollingUp ? styles.visible : styles.hidden}`}>
        <div className={styles.headerContainer}>
          {/* Desktop header */}
          <div className={styles.desktopHeader}>
            {/* Logo */}
            <NavLink to="/" className={styles.logoContainer}>
              <img src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"} alt="Kingdom Movement Logo" />
            </NavLink>
            <div className={styles.navContainer}>
              {/* Site navigation */}
              <nav className={styles.navItems}>
                <NavLink to="/" className={navLinkClass}>
                  HOME
                </NavLink>
                <NavLink to="/nutrition" className={navLinkClass}>
                  NUTRITION
                </NavLink>
                <NavLink to="/schedule" className={navLinkClass}>
                  SCHEDULE
                </NavLink>
                <NavLink to="/membership" className={navLinkClass}>
                  MEMBERSHIP
                </NavLink>
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
                  to="https://kngdmmvmnt.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D236922%26LocationId%3D10458"
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
            <NavLink to="/" className={styles.mobileLogoContainer}>
              <img src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"} alt="Kingdom Movement Logo" />
            </NavLink>
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
                <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  HOME
                </NavLink>
                <NavLink to="/nutrition" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  NUTRITION
                </NavLink>
                <NavLink to="/schedule" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  SCHEDULE
                </NavLink>
                <NavLink to="/membership" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  MEMBERSHIP
                </NavLink>
                {/* Seperator */}
                <hr className={styles.sidebarSeperator} />
                {/* Free class button */}
                <button className={styles.sidebarFreeClassButton}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://kngdmmvmnt.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D236922%26LocationId%3D10458"
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
                <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-paper-plane"></i>
                  CONTACT
                </NavLink>
                <NavLink to="/privacy-policy" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-shield-halved"></i>
                  PRIVACY POLICY
                </NavLink>
                <NavLink to="/terms-of-service" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-asterisk"></i>
                  TERMS OF SERVICE
                </NavLink>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
