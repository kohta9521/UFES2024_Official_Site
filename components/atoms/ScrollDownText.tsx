import React from "react";

// scss import
import styles from "./styles/ScrollDownText.module.scss";

// react icons
import { MdKeyboardArrowDown } from "react-icons/md";

const ScrollDownText = () => {
  return (
    <div className={styles.scroll}>
      <p className={styles.scroll__text}>Scroll</p>
      <MdKeyboardArrowDown className={styles.scroll__icon} />{" "}
    </div>
  );
};

export default ScrollDownText;
