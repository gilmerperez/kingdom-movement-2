"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Banner from "../../../components/Banner/Banner";
import nutritionData from "../../../data/nutrition.json";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

export default function NutritionDetail() {
  const router = useRouter();
  const params = useParams();
  const { itemId } = params;
  const [menuItem, setMenuItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // * Find the menu item by ID
  const item = nutritionData.menuItems.find((item) => item.id === itemId);

  // * Set menu item
  useEffect(() => {
    if (item) {
      setMenuItem(item);
    } else {
      setNotFound(true);
      router.push("/");
    }
  }, [item, itemId, router]);

  // If no menu item is found, show a loading message
  if (!menuItem || notFound) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Banner */}
      <Banner imageSrc={menuItem.imagePath} text={menuItem.name} secondaryText={menuItem.description} />

      <main>
        <div className={styles.nutritionDetailContainer}>
          {/* Add-ons section */}
          {menuItem["add-ons"] && menuItem["add-ons"].length > 0 && (
            <section className={styles.optionsSection}>
              {/* Title */}
              <h2 className={styles.sectionTitle}>Want to enhance your {menuItem.name}?</h2>
              {/* Description */}
              <p className={styles.sectionDescription}>
                Here are some options that will help you achieve the result you are looking for
              </p>
              {/* Options list */}
              <ul className={styles.optionsList}>
                {menuItem["add-ons"].map((addon, index) => (
                  <li key={`addon-${index}`} className={styles.optionItem}>
                    {addon.name}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Extras section */}
          {menuItem.extras && menuItem.extras.length > 0 && (
            <section className={styles.optionsSection}>
              {/* Title */}
              <h2 className={styles.sectionTitle}>Want to add extra benefits to your {menuItem.name}?</h2>
              {/* Description */}
              <p className={styles.sectionDescription}>
                Here are some options that will help you achieve the result you are looking for
              </p>
              {/* Options list */}
              <ul className={styles.optionsList}>
                {menuItem.extras.map((extra, index) => (
                  <li key={`extra-${index}`} className={styles.optionItem}>
                    {extra.name}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Premium flavors section */}
          {menuItem["premium-flavors"] && menuItem["premium-flavors"].length > 0 && (
            <section className={styles.optionsSection}>
              {/* Title */}
              <h2 className={styles.sectionTitle}>Want to upgrade to one of our premium flavors?</h2>
              {/* Description */}
              <p className={styles.sectionDescription}>Here is a list of our premium flavors</p>
              {/* Options list */}
              <ul className={styles.optionsList}>
                {menuItem["premium-flavors"].map((flavor, index) => (
                  <li key={`flavor-${index}`} className={styles.optionItem}>
                    {flavor.name}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Back button */}
          <button onClick={() => router.push("/nutrition")} className={styles.backButton}>
            BACK TO MENU
          </button>
        </div>
      </main>
    </>
  );
}
