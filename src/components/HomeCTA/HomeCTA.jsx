import { Link } from "react-router-dom";
import styles from "./HomeCTA.module.css";
import { useRef, useState, useEffect } from "react";

const HomeCTA = () => {
  // * State for component visibility
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // * Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        // Trigger when 10% of the component is visible
        threshold: 0.1,
        // Start animation slightly before component is fully in view
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <>
      <section ref={componentRef} className={styles.homeCTAContainer}>
        {/* Logo */}
        <div className={`${styles.logoContainer} ${isVisible ? styles.fadeInElement : ""}`}>
          <img src="/logo-white.png" alt="Kingdom Movement Logo" />
        </div>
        {/* Text */}
        <p className={`${styles.text} ${isVisible ? styles.fadeInElement : ""}`}>
          Nutrition is power. Whether you're chasing gains, energy, or recovery, our team will help you create a
          personalized plan that fuels every workout and drives real, lasting results.
        </p>
        <p className={`${styles.text} ${isVisible ? styles.fadeInElement : ""}`}>
          No matter your schedule — early mornings, mid-day breaks, or late-night grinds, we've got classes to match
          your pace. Get in, get after it, and get results on your time.
        </p>
        <p className={`${styles.text} ${isVisible ? styles.fadeInElement : ""}`}>
          We offer multiple membership levels to match your commitment and lifestyle. Each one unlocking new levels of
          support, perks, and access. Growth here compounds.
        </p>
        <p className={`${styles.text} ${isVisible ? styles.fadeInElement : ""}`}>
          You're not just joining a gym. You're joining a team that refuses to quit on you. Ready to move with purpose?
        </p>
        {/* CTA button */}
        <Link to="/membership" className={`${styles.ctaButton} ${isVisible ? styles.fadeInElement : ""}`}>
          VIEW MEMBERSHIPS
        </Link>
      </section>
    </>
  );
};

export default HomeCTA;
