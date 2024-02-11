import React from "react";

// scss import
import styles from "./styles/News.module.scss";

const News = () => {
  return (
    <div className={styles.newsBox}>
      <div className={styles.container}>
        <div className={styles.flexBox}>
          <p className={styles.bold}>News</p>
          <p className={styles.date}>2024.02.10</p>
          <p className={styles.mainText}>サイトを公開しました！</p>
        </div>
        {/* <div className={styles.flexBox}>
          <p className={styles.bold}>News</p>
          <p className={styles.date}>2024.02.10</p>
          <p className={styles.mainText}>サイトを公開しました！</p>
        </div> */}
      </div>
    </div>
  );
};

export default News;
