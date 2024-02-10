// scss import
import Link from "next/link";
import styles from "./styles/Hero.module.scss";

// components import

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.circleBackground}></div>
        </div>
        <div className={styles.rightBox}>
          <h1 className={styles.heroTitle}>
            <span className={styles.blueAccentColor}>新歓</span>に革命を
          </h1>
          <h2 className={styles.heroSubTitle}>
            大学生活を充実させるためのファーストイベント
          </h2>
          <p className={styles.bgTextBox}>2024 / 4 / 7 16:00 ~</p>
          <Link href={"/"} className={styles.entryBtn}>
            申し込む
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
