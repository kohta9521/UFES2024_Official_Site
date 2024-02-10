// components import
import Logo from "../atoms/Logo";
import ListBox from "../molecules/ListBox";

// scss import
import styles from "./styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo id={1} link="/" />
        <ListBox />
      </div>
    </div>
  );
};

export default Header;
