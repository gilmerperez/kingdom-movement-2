"use client";

import styles from "./page.module.css";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState, useRef } from "react";
import membershipData from "../../data/membership.json";

export default function Membership() {
  // * State for managing memberships
  const [memberships, setMemberships] = useState([]);

  // * Membership order
  const reorderMemberships = (memberships) => {
    const diamond = memberships.find((m) => m.id === "diamond");
    const gold = memberships.find((m) => m.id === "gold");
    const silver = memberships.find((m) => m.id === "silver");
    const bronze = memberships.find((m) => m.id === "bronze");
    const hyrox = memberships.find((m) => m.id === "hyrox");
    const dropin = memberships.find((m) => m.id === "dropin");
    const freeclass = memberships.find((m) => m.id === "freeclass");
    return [diamond, gold, silver, bronze, hyrox, dropin, freeclass].filter(Boolean);
  };

  useEffect(() => {
    setMemberships(membershipData.memberships);
  }, []);

  // * Ref for additional info section
  const additionalInfoRef = useRef(null);
  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);

  // * Scroll animation for additional info section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAdditionalInfoVisible(true);
        }
      },
      {
        // Trigger when 10% of the component is visible
        threshold: 0.1,
        // Start animation slightly before component is fully in view
        rootMargin: "0px 0px -50px 0px",
      }
    );
    // Observe additional info section
    if (additionalInfoRef.current) {
      observer.observe(additionalInfoRef.current);
    }
    // Clean up observer
    return () => {
      if (additionalInfoRef.current) {
        observer.unobserve(additionalInfoRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Banner */}
      <Banner
        imageSrc="/images/home2.jpg"
        text="TRAIN HARD. LIVE BOLD. MOVE WITH PURPOSE"
        secondaryText="EVERY MOVEMENT HAS MEANING. WE TRAIN WITH DEEPER PURPOSE, FOR MORE THAN JUST PHYSICAL GAINS"
      />

      <main>
        <div className={styles.membershipContainer}>
          {/* Introduction */}
          <section className={styles.membershipIntroduction}>
            {/* Title */}
            <h1 className={styles.membershipTitle}>MEMBERSHIP TIERS</h1>
            {/* Description */}
            <p className={styles.membershipDescription}>
              Choose the plan that fits your fitness journey. Each membership tier is designed to support your goals,
              whether you&apos;re just starting out or ready to push your limits. Join our community and transform your life
              through movement.
            </p>
          </section>

          {/* Membership cards */}
          <section className={styles.membershipCards}>
            {reorderMemberships(memberships).map((membership) => (
              <div
                key={membership.id}
                className={`${styles.membershipCard} ${membership.isPopular ? styles.popular : ""} ${
                  membership.id === "gold" ? styles.gold : ""
                } ${membership.id === "silver" ? styles.silver : ""} ${
                  membership.id === "bronze" ? styles.bronze : ""
                }  ${membership.id === "hyrox" ? styles.hyrox : ""} ${
                  membership.id === "dropin" ? styles.dropin : ""
                } ${membership.id === "freeclass" ? styles.freeclass : ""}`}
              >
                {membership.isPopular && <div className={styles.popularBadge}>MOST POPULAR</div>}
                {/* Membership name */}
                <h3 className={styles.membershipName}>{membership.name}</h3>
                <div className={styles.priceContainer}>
                  {/* Monthly price */}
                  {membership.price !== null ? (
                    <p className={styles.price}>
                      ${membership.price}/{membership.priceUnit || "month"}
                    </p>
                  ) : (
                    <p className={styles.price}>FREE</p>
                  )}
                </div>
                {/* Seperator */}
                <div className={styles.separator}></div>
                {/* Membership benefits */}
                <p className={styles.featuresTitle}>{membership.customFeaturesTitle || "MEMBERSHIP BENEFITS"}</p>
                <ul className={styles.featuresList}>
                  {membership.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Sign up button */}
                <button
                  onClick={() => window.open(membership.signupLink, "_blank")}
                  className={`${styles.signUpButton} ${membership.isPopular ? styles.popularButton : ""}`}
                >
                  {membership.ctaText}
                </button>
              </div>
            ))}
          </section>

          {/* Additional info */}
          <section ref={additionalInfoRef} className={styles.additionalInfoContainer}>
            <div className={styles.additionalInfo}>
              {/* Heading */}
              <h2 className={`${styles.additionalInfoTitle} ${isAdditionalInfoVisible ? styles.fadeInElement : ""}`}>
                ADDITIONAL INFO
              </h2>
              {/* List of additional info */}
              <ul className={styles.additionalInfoList}>
                <li className={`${isAdditionalInfoVisible ? styles.fadeInElement : ""}`}>
                  Must be age 18 years or older to enroll.
                </li>
                <br />
                <li className={`${isAdditionalInfoVisible ? styles.fadeInElement : ""}`}>
                  The schedule is subject to change without prior notice.
                </li>
                <br />
                <li className={`${isAdditionalInfoVisible ? styles.fadeInElement : ""}`}>
                  All membership types are non-transferable, non-assignable, and non-saleable.
                </li>
                <br />
                <li className={`${isAdditionalInfoVisible ? styles.fadeInElement : ""}`}>
                  Prepaid memberships and sessions agreements are not subject to any hold options.
                </li>
                <br />
                <li className={`${isAdditionalInfoVisible ? styles.fadeInElement : ""}`}>
                  For a complete list of Kingdom Movement policies, rules, and regulations, feel free to contact us at
                  kngdm.mvmnt.llc@gmail.com
                </li>
                <br />
                <li className={`${isAdditionalInfoVisible ? styles.fadeInElement : ""}`}>
                  Month-to-Month membership holds may be placed two times per calendar year, up to three consecutive
                  months each time. Must be 30 days in duration at minimum.
                </li>
                <br />
                <li className={`${isAdditionalInfoVisible ? styles.fadeInElement : ""}`}>
                  Month-to-Month membership cancellations without penalty require fifteen days advance written notice.
                  Prepaid memberships and sessions memberships are not subject to any early termination options with
                  exception of death or disability.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
