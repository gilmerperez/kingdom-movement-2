"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Banner from "../../../components/Banner/Banner";
import nutritionData from "../../../data/nutrition.json";

export default function NutritionDetail() {
  const router = useRouter();
  const params = useParams();
  const { itemId } = params;

  // * Find the menu item by ID - compute directly from static data
  const menuItem = nutritionData.menuItems.find((item) => item.id === itemId);

  // * Redirect if item not found
  useEffect(() => {
    if (!menuItem) {
      router.push("/");
    }
  }, [menuItem, router]);

  // If no menu item is found, show a loading message
  if (!menuItem) {
    return <div>Loading...</div>;
  }

  const BASE_URL = "https://kingdom-movement.vercel.app";

  // Structured Data for Product/Menu Item
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: menuItem.name,
    description: menuItem.description,
    image: `${BASE_URL}${menuItem.imagePath}`,
    category: menuItem.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nutrition",
        item: `${BASE_URL}/nutrition`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: menuItem.name,
        item: `${BASE_URL}/nutrition/${itemId}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
