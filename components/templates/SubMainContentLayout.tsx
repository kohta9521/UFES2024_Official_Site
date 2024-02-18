import React from "react";

// scss import
import styles from "./styles/SubMainContentLayout.module.scss";

// components import

// props type
export type SubMainContentLayoutProps = {
  title: string;
  desc: string;
  children: React.ReactNode;
};

const SubMainContentLayout = ({
  title,
  desc,
  children,
}: SubMainContentLayoutProps) => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.hero}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SubMainContentLayout;
