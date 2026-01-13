import styles from "./OurMission.module.css";

function OurMission() {
  return (
    <>
      <section className={styles.ourMissionContainer}>
        {/* Text */}
        <div className={styles.textContainer}>
          <p className={styles.text}>
            To become a leading global CrossFit and lifestyle brand known for building champions and inspiring
            purpose-driven transformation in every life we touch.
          </p>
        </div>
        {/* Seperator */}
        <div className={styles.seperator}></div>
        {/* Title */}
        <h2 className={styles.title}>OUR MISSION</h2>
      </section>
    </>
  );
}

export default OurMission;
