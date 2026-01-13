import styles from "./WhyUs.module.css";
import { useRef, useEffect } from "react";

function WhyUs() {
  // * Scroll animation refs
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  // * Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title
            if (entry.target === titleRef.current) {
              entry.target.classList.add(styles.animateTitle);
            }
            // Animate description
            else if (entry.target === descriptionRef.current) {
              entry.target.classList.add(styles.animateDescription);
            }
            // Animate cards
            else if (cardRefs.current.includes(entry.target)) {
              const cardIndex = cardRefs.current.indexOf(entry.target);
              const delay = cardIndex * 200; // 200ms delay between each card
              setTimeout(() => {
                entry.target.classList.add(styles.animateCard);
              }, delay);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    // Observe title and description
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    // Observe all cards
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // * Function to add card refs
  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <>
      <section ref={sectionRef} className={styles.whyUsContainer}>
        {/* Introduction */}
        <section className={styles.whyUsIntroduction}>
          {/* Title */}
          <h2 ref={titleRef} className={styles.whyUsTitle}>
            WHY WE STAND OUT
          </h2>
          {/* Description */}
          <p ref={descriptionRef} className={styles.whyUsDescription}>
            We strive for greatness, we never settle for less. Every aspect of our facility, training programs, and
            community is designed to push you beyond your limits and help you achieve extraordinary results.
          </p>
        </section>

        {/* Benefits grid */}
        <section className={styles.benefitsGrid}>
          {/* Nutrition & wellness coaching */}
          <div ref={addCardRef} className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Nutrition & Wellness Coaching</h3>
            <p className={styles.cardText}>
              Nutritious meals, nutrition plans and one on one coaching when it comes to a custom made wellness profile
              so we can achieve your personal goals. Our certified nutrition experts work with you to develop
              personalized plans that complement your fitness journey.
            </p>
          </div>
          {/* Intense classes & open gym */}
          <div ref={addCardRef} className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Intense Classes & Open Gym</h3>
            <p className={styles.cardText}>
              We offer classes throughout the entire day as well as open gym sessions where you can come in and get some
              work done. Our classes are specially made following workouts that elite and professional level athletes
              complete everyday.
            </p>
          </div>
          {/* Special events & community */}
          <div ref={addCardRef} className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Special Events & Community</h3>
            <p className={styles.cardText}>
              Access to our special events that we host, this can include anything from a special Saturday workout class
              in a special location, to a weekend getaway in nature, to parties and celebrations for any occasion. Build
              lasting friendships while achieving your fitness goals.
            </p>
          </div>
          {/* Expert level equipment */}
          <div ref={addCardRef} className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Expert Level Equipment</h3>
            <p className={styles.cardText}>
              Expert level equipment where you could come into a class as a complete beginner and we have everything
              there that takes you from beginner to elite level athlete. Our facility is equipped with the latest
              technology and equipment used by professional athletes.
            </p>
          </div>
          {/* Personalized training programs*/}
          <div ref={addCardRef} className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Personalized Training Programs</h3>
            <p className={styles.cardText}>
              Our one-on-one personalized training sessions are tailored to your specific fitness needs and goals.
              Whether you're a beginner or an experienced athlete, our expert trainers will create a custom workout plan
              to help you achieve optimum results.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default WhyUs;
