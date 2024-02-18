import React from "react";

// scss import
import styles from "./styles/Header.module.scss";

// components import
import Logo from "../atoms/Logo";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo id={1} size="medium" link="/" />
      </div>
    </div>
  );
};

export default Header;
