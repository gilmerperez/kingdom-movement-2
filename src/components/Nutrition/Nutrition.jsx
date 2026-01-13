import Link from "next/link";
import styles from "./Nutrition.module.css";
import Image from "next/image";

function Nutrition() {
  return (
    <>
      <section className={styles.nutritionComponentContainer}>
        {/* Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/nutrition.jpeg"
            className={styles.nutritionImage}
            alt="Fresh, healthy ingredients and nutrition preparation"
            width={600}
            height={650}
          />
        </div>

        {/* Content */}
        <div className={styles.contentContainer}>
          {/* Title */}
          <h2 className={styles.nutritionComponentTitle}>FUEL YOUR JOURNEY</h2>
          {/* Description */}
          <div className={styles.nutritionComponentDescription}>
            <p>
              We believe in ongoing support and regular check-ins to monitor your progress, identify areas for
              improvement, and celebrate your achievements. Your success is our commitment.
            </p>
            <p>
              Discover our extensive menu featuring over 30+ carefully crafted nutrition options designed to support
              your fitness goals. From protein-rich shakes to wholesome meals, every item is crafted with premium
              ingredients to fuel your performance.
            </p>
            <p>
              Beyond our menu, we offer comprehensive nutrition services and personalized wellness coaching. Our
              certified nutritionists work with you to create tailored profiles that evolve with your progress, ensuring
              continuous optimization of your nutrition strategy.
            </p>
          </div>
          {/* CTA button */}
          <Link href="/nutrition" className={styles.ctaButton}>
            EXPLORE MENU
          </Link>
        </div>
      </section>
    </>
  );
}

export default Nutrition;
