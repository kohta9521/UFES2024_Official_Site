import Image from "next/image";

// spline
// import Spline from "@splinetool/react-spline";

// scss import
import styles from "./styles/Hero.module.scss";

// components import

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftBox}></div>
      <div className={styles.rightBox}></div>
      {/* <div className={styles.container}>
        <div className={styles.topBox}>
          <h1 className={styles.title}>
            <span className={styles.accentBlue}>新歓</span>に革命を起こす
          </h1>
          <h2 className={styles.subTitle}>
            大学生活を充実させるためのファーストイベント
            <br />
            ４年間という大学生活を充実させる出会いを提供します
          </h2>
        </div>
      </div>
      <div className={styles.bottomBox}>
        <Image
          className={styles.heroImage}
          src="/images/sub.jpg"
          alt="hero"
          width={1000}
          height={1000}
        />
      </div> */}
    </div>
  );
};

export default Hero;
