import styles from "./WhoWeAre.module.css";

function WhoWeAre() {
  return (
    <>
      <section className={styles.whoWeAreContainer}>
        {/* Title */}
        <h2 className={styles.title}>WHO WE ARE</h2>
        {/* Seperator */}
        <div className={styles.seperator}></div>
        {/* Text */}
        <div className={styles.textContainer}>
          <p className={styles.text}>
            We are dedicated in igniting a global movement of empowered individuals who train with purpose, live with
            passion, and move like champions inside and out. We transform lives through fitness, community, and
            relentless spirit.
          </p>
        </div>
      </section>
    </>
  );
}

export default WhoWeAre;
