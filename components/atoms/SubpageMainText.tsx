import React from "react";

// scss import
import styles from "./styles/SubpageMainText.module.scss";

// type
export type SubpageMainTextProps = {
  text: string;
};

export const SubpageMainText = ({ text }: SubpageMainTextProps) => {
  return (
    <div className={styles.textBox}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default SubpageMainText;
