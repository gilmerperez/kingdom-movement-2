import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <main className={styles.pageNotFoundContainer}>
        {/* Introduction */}
        <section className={styles.pageNotFoundIntroduction}>
          {/* Title */}
          <h1 className={styles.pageNotFoundTitle}>PAGE NOT FOUND</h1>
          {/* Description */}
          <p className={styles.pageNotFoundDescription}>Sorry, the page you are looking for does not exist</p>
        </section>

        {/* Back home button */}
        <Link href="/" className={styles.backButton}>
          BACK TO HOME PAGE
        </Link>
      </main>
    </>
  );
}
