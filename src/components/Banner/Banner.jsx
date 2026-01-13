import styles from "./Banner.module.css";

function Banner({ imageSrc, text, secondaryText }) {
  return (
    <>
      <section className={styles.bannerContainer}>
        <div className={styles.bannerImageContainer}>
          <img src={imageSrc} alt="Banner image" />
          <div className={styles.gradientOverlay}></div>
        </div>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerText}>{text}</h1>
          {secondaryText && <h2 className={styles.bannerSecondaryText}>{secondaryText}</h2>}
        </div>
      </section>
    </>
  );
}

export default Banner;
