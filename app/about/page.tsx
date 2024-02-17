import React from "react";

// scss import
import styles from "./About.module.scss";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";
const About = () => {
  return (
    <div className={styles.about}>
      <SubPageLayout id={1}>
        <h1>about</h1>
      </SubPageLayout>
    </div>
  );
};

export default About;
