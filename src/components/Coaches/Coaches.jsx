import { Link } from "react-router-dom";
import styles from "./Coaches.module.css";
import coachesData from "../../data/coaches.json";
import { useRef, useEffect, useState } from "react";

const Coaches = () => {
  // * Scroll animation refs
  const coachesContentRef = useRef(null);
  const carouselContainerRef = useRef(null);

  // * Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate coaches content
            if (entry.target === coachesContentRef.current) {
              entry.target.classList.add(styles.animateCoachesContent);
            }
            // Animate carousel container
            else if (entry.target === carouselContainerRef.current) {
              entry.target.classList.add(styles.animateCarouselContainer);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    // Observe both elements
    if (coachesContentRef.current) observer.observe(coachesContentRef.current);
    if (carouselContainerRef.current) observer.observe(carouselContainerRef.current);
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // * State
  const [currentCoachIndex, setCurrentCoachIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // * Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleCoachChange((prevIndex) => (prevIndex === coachesData.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
    // Reset timer when user manually changes coach
  }, [currentCoachIndex]);

  // * Handle coach change with transition effect
  const handleCoachChange = (newIndexOrFunction) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCoachIndex(newIndexOrFunction);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  // * Carousel dots
  const handleDotClick = (index) => {
    handleCoachChange(index);
  };

  // * Previous button
  const handlePrevClick = () => {
    handleCoachChange((prevIndex) => (prevIndex === 0 ? coachesData.length - 1 : prevIndex - 1));
  };

  // * Next button
  const handleNextClick = () => {
    handleCoachChange((prevIndex) => (prevIndex === coachesData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <section className={styles.coachesContainer}>
        {/* Coaches content */}
        <div ref={coachesContentRef} className={styles.coachesContent}>
          <div className={styles.coachesInfo}>
            {/* Title */}
            <h2 className={styles.coachesTitle}>
              MEET THE <br /> EXPERT TRAINERS
            </h2>
            {/* Description */}
            <p className={styles.coachesDescription}>
              Our coaches are more than trainers — they're champions who've walked the path and know what it takes to
              transform lives. Each brings battle-tested experience from the highest levels of competition, combined
              with the heart of a mentor who refuses to let you settle for anything less than your absolute best.
              Whether you're taking your first step or chasing championship glory, they'll push you beyond your limits
              while building the mental toughness that separates champions from the rest. This isn't just coaching. This
              is movement leadership.
            </p>
            {/* CTA button */}
            <Link to="/schedule" className={styles.scheduleButton}>
              VIEW OUR SCHEDULE
            </Link>
          </div>

          {/* Carousel */}
          <div ref={carouselContainerRef} className={styles.carouselContainer}>
            <div className={styles.carousel}>
              <div className={styles.carouselCard}>
                {/* Carousel image */}
                <div className={styles.coachImageContainer}>
                  <img
                    alt={coachesData[currentCoachIndex].name}
                    src={coachesData[currentCoachIndex].image}
                    className={`${styles.coachImage} ${isTransitioning ? styles.transitioning : ""}`}
                  />
                </div>
                {/* Carousel dots */}
                <div className={styles.carouselDots}>
                  {coachesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to coach ${index + 1}`}
                      className={`${styles.dot} ${index === currentCoachIndex ? styles.activeDot : ""}`}
                    />
                  ))}
                </div>
                <div className={styles.coachInfo}>
                  {/* Coach name */}
                  <h3 className={styles.coachName}>{coachesData[currentCoachIndex].name}</h3>
                  {/* Coach description */}
                  <p className={styles.coachDescription}>{coachesData[currentCoachIndex].description}</p>
                </div>
              </div>
            </div>
            {/* Previous button */}
            <button
              onClick={handlePrevClick}
              aria-label="Previous coach"
              className={`${styles.carouselArrow} ${styles.prevArrow}`}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            {/* Next button */}
            <button
              aria-label="Next coach"
              onClick={handleNextClick}
              className={`${styles.carouselArrow} ${styles.nextArrow}`}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coaches;
