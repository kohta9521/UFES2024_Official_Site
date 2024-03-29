import React from "react";
// import Link from "next/link";

// scss import
import styles from "./styles/Footer.module.scss";

// components import

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <p className={styles.name}>主催 : UFES 2024 実行委員会</p>
          <p className={styles.site}>
            開催地 : 〒150-0041 東京都渋谷区神南１丁目１４−７ ワイズ神南ビル 2階
          </p>
          <p className={styles.mail}>
            E-mail : ufes.freshmenwelcomefes@gmail.com
          </p>
          <p className={styles.en}>© 2024 UFES</p>
          {/* en */}
          <p className={styles.enName}>
            Sponsors : UFES 2024 Executive Committee
          </p>
          <p className={styles.enSite}>
            Venue : 〒150-0041 shibuya jinnnan waise jinnnan building 2F
          </p>
          <p className={styles.enMail}>
            E-mail : ufes.freshemenwelcomefes@gmail.com
          </p>
        </div>
        <div className={styles.rightBox}>
          {/* <Link href={"/"}>TOP</Link> */}
          <h2 className={styles.title}>UNIVERSITY FRESHMEN WELCOME FES 2024</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
