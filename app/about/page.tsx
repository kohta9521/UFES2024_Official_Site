import React from "react";

// scss import
import styles from "./About.module.scss";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubMainContentLayout from "@/components/templates/SubMainContentLayout";
const About = () => {
  return (
    <div className={styles.about}>
      <SubPageLayout id={1}>
        <SubMainContentLayout
          title="About"
          desc="UFESについて、何故イベントを行うのか、どんなイベントにしたいのか、当日の流れなどご覧いただけます。"
        >
          <h1>sample</h1>
        </SubMainContentLayout>
      </SubPageLayout>
    </div>
  );
};

export default About;
