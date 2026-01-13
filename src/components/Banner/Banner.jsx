import styles from "./Banner.module.css";
import Image from "next/image";

function Banner({ imageSrc, text, secondaryText }) {
  return (
    <>
      <section className={styles.bannerContainer}>
        <div className={styles.bannerImageContainer}>
          <Image src={imageSrc} alt="Banner image" fill className={styles.bannerImage} priority />
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
