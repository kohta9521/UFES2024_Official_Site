import React from "react";

// scss import
import styles from "./About.module.scss";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";
import BgImage from "@/components/organisms/BgImage";
const About = () => {
  return (
    <div className={styles.about}>
      <BgImage />
      <SubPageLayout id={1}>
        <h1>about</h1>
      </SubPageLayout>
    </div>
  );
};

export default About;
