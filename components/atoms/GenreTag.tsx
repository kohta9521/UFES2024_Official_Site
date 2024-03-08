import React from "react";

// scss import
import styles from "./styles/GenreTag.module.scss";

// props type
export type GenreTagProps = {
  id: number;
};

const GenreTag = ({ id }: GenreTagProps) => {
  return (
    <div className={styles.tagBox}>
      <p className={styles.tagName}>genre name</p>
    </div>
  );
};

export default GenreTag;
