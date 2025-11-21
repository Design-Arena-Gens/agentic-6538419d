"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.stage}>
      <div className={styles.aspectFrame}>
        <div className={styles.scene}>
          <div className={styles.lightGlow} />
          <div className={styles.sky} />
          <div className={styles.mountains}>
            <div className={`${styles.mountain} ${styles.mountainBack}`} />
            <div className={`${styles.mountain} ${styles.mountainMid}`} />
            <div className={`${styles.mountain} ${styles.mountainFront}`} />
          </div>
          <div className={styles.lake}>
            <div className={styles.waterSurface} />
            <div className={styles.waterRipples} />
          </div>
          <div className={styles.eagle}>
            <div className={styles.eagleBody}>
              <div className={styles.eagleWingLeft} />
              <div className={styles.eagleWingRight} />
              <div className={styles.eagleHead}>
                <div className={styles.eagleEye} />
                <div className={styles.eagleBeak} />
              </div>
              <div className={styles.eagleTail} />
            </div>
            <div className={styles.eagleTalons} />
          </div>
          <div className={styles.fish}>
            <div className={styles.fishBody}>
              <div className={styles.fishTexture} />
              <div className={styles.fishEye} />
              <div className={styles.fishFinTop} />
              <div className={styles.fishFinSide} />
              <div className={styles.fishTail} />
            </div>
          </div>
          <div className={styles.splash}>
            <div className={styles.splashRingOuter} />
            <div className={styles.splashRingInner} />
          </div>
        </div>
      </div>
    </main>
  );
}
