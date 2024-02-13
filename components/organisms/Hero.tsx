import Image from "next/image";

// spline
// import Spline from "@splinetool/react-spline";

// scss import
import styles from "./styles/Hero.module.scss";

// components import

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.titleBox}>
        <div className={styles.flexBox}>
          <div className={styles.leftBox}></div>
          <div className={styles.rightBox}></div>
        </div>
        <div className={styles.bottomBox}></div>
      </div>
    </div>
  );
};

export default Hero;
