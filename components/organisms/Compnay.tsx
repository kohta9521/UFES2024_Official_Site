import React from "react";
import Link from "next/link";

// scss import
import styles from "./styles/Compnay.module.scss";

// components import
import SectionTitle from "../atoms/SectionTitle";

// hooks import
import useAOS from "@/hooks/useAOS";

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
            UFESをご支援いただいている協賛企業・団体の皆様に、心より感謝申し上げます。
          </p>
          <p className={styles.enMainText} data-aos="fade-up">
            We would like to thank all the sponsors and organizations that
            support UFES.
          </p>
          <h2 className={styles.planTitle} data-aos="fade-up">
            Gold Sponser
          </h2>
          <div className={styles.companyFlexBox} data-aos="fade-up">
            <p>comming soon ...</p>
          </div>
          <h2 className={styles.planTitle} data-aos="fade-up">
            Silver Sponser
          </h2>
          <div className={styles.companyFlexBox} data-aos="fade-up">
            <p>comming soon ...</p>
          </div>
          <h2 className={styles.planTitle} data-aos="fade-up">
            Boronz Sponser
          </h2>
          <div className={styles.companyFlexBox} data-aos="fade-up">
            <p>comming soon ...</p>
          </div>
        </div>
        <div className={styles.bottomBox} data-aos="fade-up">
          <Link href={"/company"} className={styles.button}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Company;
