import React from "react";
import Link from "next/link";

// scss import
import styles from "./styles/EntryButton.module.scss";

const EntryButton = () => {
  return (
    <div className={styles.underBox}>
      <Link href={"/entryform"} className={styles.entryButton}>
        <p className={styles.buttonText}>参加フォームを記入する</p>
      </Link>
    </div>
  );
};

export default EntryButton;
