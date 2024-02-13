import React from "react";

// scss import
import styles from "./styles/TopVerticalText.module.scss";

// props
export type TopVerticalTextProps = {
  id: number;
  text: string;
  color?: "blue" | "pink";
};

const TopVerticalText = ({
  id,
  text,
  color = "pink",
}: TopVerticalTextProps) => {
  return (
    <div key={id} className={styles.verticalBox}>
      <p className={`${styles.verticalBox__text} ${styles[color]}`}>{text}</p>
    </div>
  );
};

export default TopVerticalText;
