import styles from "./page.module.css";

export const metadata = {
  title: "Terms of Service",
  description:
    "Kingdom Movement Terms of Service. Read our terms and conditions that govern your use of our website and services.",
  keywords: ["terms of service", "terms and conditions", "Kingdom Movement terms"],
};

export default function TermsOfService() {
  // * Month names array
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // * Get current year and month
  const now = new Date();
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];

  return (
    <>
      <main>
        <div className={styles.termsOfServiceContainer}>
          {/* Introduction */}
          <section className={styles.termsOfServiceIntroduction}>
            {/* Title */}
            <h1 className={styles.termsOfServiceTitle}>TERMS OF SERVICE</h1>
            {/* Description */}
            <p className={styles.termsOfServiceDescription}>
              By accessing this website, you agree to comply with the following terms and conditions. It is important to
              thoroughly read and understand these terms as they govern your use of our services and website.
            </p>
          </section>

          {/* Terms of service */}
          <section className={styles.terms}>
            {/* Site usage */}
            <h3 className={styles.termsHeading}>SITE USAGE</h3>
            <p className={styles.termsText}>
              This website is intended for general informational purposes related to our CrossFit studio. All content is
              subject to change without notice. Unauthorized use of this site may give rise to a claim for damages.
            </p>
            {/* No liability */}
            <h3 className={styles.termsHeading}>NO LIABILITY</h3>
            <p className={styles.termsText}>
              We are not responsible for any loss or damage that may occur from using this website. All information is
              provided &quot;as is,&quot; without any warranties of any kind.
            </p>
            {/* Modifications */}
            <h3 className={styles.termsHeading}>MODIFICATIONS</h3>
            <p className={styles.termsText}>
              We may revise these terms at any time. By using this website, you agree to be bound by the current version
              of these terms. Last updated: {month} {year}.
            </p>
            {/* Membership and scheduling disclaimer */}
            <h3 className={styles.termsHeading}>MEMBERSHIP AND SCHEDULING DISCLAIMER</h3>
            <p className={styles.termsText}>
              Membership tiers, class schedules, and food menu offerings are subject to change without prior notice.
              While we strive to keep all information up-to-date, availability and tiers may vary. Please contact our
              team directly for the most current details.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
