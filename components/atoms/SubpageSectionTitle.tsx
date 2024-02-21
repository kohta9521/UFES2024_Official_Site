import React from "react";

// scss import
import styles from "./styles/SubpageSectionTitle.module.scss";

// type props
export type SubpageSectionTitleProps = {
  id: string;
  title: string;
};

const SubpageSectionTitle = ({ id, title }: SubpageSectionTitleProps) => {
  return (
    <div className={styles.titleBox} id={id}>
      <p className={styles.titleText}>{title}</p>
    </div>
  );
};

export default SubpageSectionTitle;
