import React from "react";

// scss import
import styles from "./styles/Compnay.module.scss";

// components import
import SectionTitle from "../atoms/SectionTitle";

const Company = () => {
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
          <div className={styles.leftBox}></div>
          <div className={styles.rightBox}></div>
        </div>
      </div>
    </div>
  );
};

export default Company;
