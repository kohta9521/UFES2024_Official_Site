import React from "react";

// scss import
import styles from "./styles/Compnay.module.scss";

// components import
import SectionTitle from "../atoms/SectionTitle";

// hooks import
import useAOS from "@/hooks/useAOS";
import Link from "next/link";

const Company = () => {
  useAOS();
  return (
    <div className={styles.company}>
      <div className={styles.container}>
        <SectionTitle
          id={5}
          text="Company"
          idName="company"
          color="pink"
          align="left"
        />
        <div className={styles.mainContent}>
          <p className={styles.titleText} data-aos="fade-up">
            協賛企業一覧
          </p>
          <p className={styles.mainText} data-aos="fade-up">
            UFESをご支援いただいている協賛企業の皆様に、心より感謝申し上げます。
          </p>
          <h2 className={styles.planTitle} data-aos="fade-up">
            Gold Sponser
          </h2>
          <div className={styles.companyFlexBox} data-aos="fade-up"></div>
          <h2 className={styles.planTitle} data-aos="fade-up">
            Silver Sponser
          </h2>
          <div className={styles.companyFlexBox} data-aos="fade-up"></div>
          <h2 className={styles.planTitle} data-aos="fade-up">
            Boronz Sponser
          </h2>
          <div className={styles.companyFlexBox} data-aos="fade-up"></div>
        </div>
        <div className={styles.bottomBox} data-aos="fade-up">
          <Link href={"/about"} className={styles.button}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Company;
