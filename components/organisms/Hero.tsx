// scss import
import styles from "./styles/Hero.module.scss";

// components import

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.circleBackground}></div>
        </div>
        <div className={styles.rightBox}></div>
      </div>
    </div>
  );
};

export default Hero;
