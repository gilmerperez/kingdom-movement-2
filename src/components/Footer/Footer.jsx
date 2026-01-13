import styles from "./Footer.module.css";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footerContainer}>
          <section className={styles.topContainer}>
            {/* Legal text */}
            <p className={styles.legalDisclaimer}>
              Kingdom Movement offers fitness training and wellness guidance for educational and informational purposes
              only. This site does not provide medical advice, diagnosis, or treatment. Participation in classes is at
              your own risk. Always consult with a licensed medical professional before beginning any new exercise
              program.
            </p>
            {/* Copyright */}
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} Kingdom Movement. All rights reserved.</p>
          </section>

          {/* Seperator */}
          <hr className={styles.seperator} />

          <section className={styles.bottomContainer}>
            {/* Site navigation */}
            <section className={styles.siteNavigation}>
              <h6 className={styles.navHeader}>PAGES</h6>
              <nav className={styles.navItems}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/nutrition">Nutrition</NavLink>
                <NavLink to="/schedule">Schedule</NavLink>
                <NavLink to="/membership">Membership</NavLink>
              </nav>
            </section>
            {/* Social links */}
            <section className={styles.socialLinks}>
              <h6 className={styles.navHeader}>CONNECT</h6>
              <nav className={styles.navItems}>
                {/* Facebook */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.facebook.com/profile.php?id=61554804519847&ref=_ig_profile_ac"
                >
                  Facebook
                </Link>
                {/* Instagram */}
                <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/kngdm.mvmnt/">
                  Instagram
                </Link>
                {/* Google page */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.google.com/search?sca_esv=0683e8ae5cdf4a07&rlz=1C1RXQR_enUS1087US1087&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0ONNIBIqWCZYLnuJvqSSmbXspMabhiR6X7KrMQA8duDmzcltBxTBgPzXl5-XVa2OQN424Lz9glh6mQVQbDR6H8Y-KJeUYTCveXfwPcCVpwFYHgF-Q%3D%3D&q=KINGDOM+MOVEMENT+LLC+Reviews&sa=X&ved=2ahUKEwjfw-vrmaCQAxXBQTABHdAUJYEQ0bkNegQIMRAE&biw=1745&bih=828&dpr=1.1"
                >
                  Google Page
                </Link>
              </nav>
            </section>
            {/* Legal pages */}
            <section className={styles.legalPages}>
              <h6 className={styles.navHeader}>LEGAL</h6>
              <nav className={styles.navItems}>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                <NavLink to="/terms-of-service">Terms of Service</NavLink>
              </nav>
            </section>
            {/* Contact info */}
            <section className={styles.contactInfo}>
              <h6 className={styles.navHeader}>CONTACT</h6>
              <nav className={styles.navItems}>
                {/* Phone number */}
                <a href="tel:3213520639">(321) 352-0639</a>
                {/* Email */}
                <a href="mailto:kngdm.mvmnt.llc@gmail.com">kngdm.mvmnt.llc@gmail.com</a>
                {/* Address */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.google.com/maps/place/6881+Kingspointe+Pkwy+STE+4,+Orlando,+FL+32819/@28.459962,-81.4402133,868m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88e77e856aefbcb5:0x6a0399fabce84714!8m2!3d28.459962!4d-81.437633!16s%2Fg%2F11gg6dhpwy?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
                >
                  6881 Kingspointe Parkway Suite #4 Orlando, FL 32819
                </Link>
              </nav>
            </section>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
