import React from "react";

// scss import
import styles from "./styles/SnsBox.module.scss";

// react icons import
import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const SnsBox = () => {
  return (
    <div className={styles.box}>
      <span className={styles.verticalBorder}></span>
      {/* react icons */}
      <FiInstagram className={styles.snsIcon} />
      <FaSquareXTwitter className={styles.snsIcon} />
      <FaYoutube className={styles.snsIcon} />
      <FaTiktok className={styles.snsIcon} />
    </div>
  );
};

export default SnsBox;
