import React from "react";

// scss import
import styles from "./Question.module.scss";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";

const Question = () => {
  return (
    <div className={styles.question}>
      <SubPageLayout id={3}>
        <h1>question page</h1>
      </SubPageLayout>
    </div>
  );
};

export default Question;
