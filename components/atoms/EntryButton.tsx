import React from "react";
import Link from "next/link";

// scss import
import styles from "./styles/EntryButton.module.scss";

const EntryButton = () => {
  return (
    <Link href={"/entryform"} className={styles.entryButton}>
      <p className={styles.buttonText}>参加フォームを記入する</p>
    </Link>
  );
};

export default EntryButton;
