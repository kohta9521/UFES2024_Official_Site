import React from "react";

// scss import
import styles from "./styles/GenreTag.module.scss";

// props type
export type GenreTagProps = {
  id: string;
};

const GenreTag = ({ id }: GenreTagProps) => {
  return (
    <div className={styles.tagBox} id={id}>
      <p className={styles.tagName}>genre name</p>
    </div>
  );
};

export default GenreTag;
