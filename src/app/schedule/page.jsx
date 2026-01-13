"use client";

import styles from "./page.module.css";
import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import scheduleData from "../../data/schedule.json";

export default function Schedule() {
  // * State for managing selected day
  const [selectedDay, setSelectedDay] = useState("monday");
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  // * Handle day select
  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  // * Get day display name
  const getDayDisplayName = (day) => {
    const dayNames = {
      sunday: "SUNDAY",
      monday: "MONDAY",
      tuesday: "TUESDAY",
      wednesday: "WEDNESDAY",
      thursday: "THURSDAY",
      friday: "FRIDAY",
      saturday: "SATURDAY",
    };
    return dayNames[day];
  };
  // Get selected day data
  const selectedDayData = scheduleData.schedule[selectedDay];

  return (
    <>
      {/* Banner */}
      <Banner
        imageSrc="/images/group3.jpg"
        text="MORE THAN FITNESS — IT'S A MOVEMENT"
        secondaryText="WE BELIEVE MOVEMENT UNLOCKS POTENTIAL AND PURPOSE"
      />

      <main>
        <div className={styles.scheduleContainer}>
          {/* Introduction */}
          <section className={styles.scheduleIntroduction}>
            {/* Title */}
            <h1 className={styles.scheduleTitle}>CLASS SCHEDULE</h1>
            {/* Description */}
            <p className={styles.scheduleDescription}>
              Discover the perfect schedule to elevate your fitness journey. Each day offers unique activities designed
              to challenge and inspire you. Join us and unlock your potential through consistent movement and
              dedication.
            </p>
          </section>

          {/* Schedule */}
          <section className={styles.scheduleWrapper}>
            {/* Day tabs */}
            <div className={styles.dayTabs}>
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => handleDaySelect(day)}
                  className={`${styles.dayTab} ${selectedDay === day ? styles.activeTab : ""}`}
                >
                  {getDayDisplayName(day)}
                </button>
              ))}
            </div>
            {/* Closed message */}
            <div className={styles.scheduleContent}>
              {selectedDayData.status === "Closed" ? (
                <div className={styles.closedMessage}>
                  <h2 className={styles.closedMessageTitle}>CLOSED</h2>
                  <p className={styles.closedMessageText}>
                    We are closed on Sundays <br /> Come back tomorrow!
                  </p>
                </div>
              ) : (
                // Schedule table
                <div className={styles.scheduleTable}>
                  {/* Header */}
                  <div className={styles.tableHeader}>
                    <h3 className={styles.activityHeader}>ACTIVITY</h3>
                    <h3 className={styles.timeHeader}>TIME</h3>
                  </div>
                  <div>
                    {selectedDayData.activities.map((activity, index) => (
                      // Content
                      <div key={index} className={styles.tableRow}>
                        {/* Activity */}
                        <div className={styles.activityCell}>
                          <p className={styles.activityType}>{activity.type}</p>
                        </div>
                        {/* Time */}
                        <div className={styles.timeCell}>
                          <p className={styles.timeText}>{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
