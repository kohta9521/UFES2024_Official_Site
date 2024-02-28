import React from "react";

// scss import
import styles from "./styles/SubPageHero.module.scss";

// type props
export type SubPageHeroProps = {
  title: string;
  desc: string;
};

const SubPageHero = ({ title, desc }: SubPageHeroProps) => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default SubPageHero;
