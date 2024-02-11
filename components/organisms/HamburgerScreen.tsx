import styles from "./styles/HamburgerScreen.module.scss";

// react icons

export type HamburgerScreenProps = {
  isOpen: boolean;
};

const HamburgerScreen = ({ isOpen }: HamburgerScreenProps) => {
  if (!isOpen) return null;
  return (
    <div className={`${styles.screen} ${isOpen ? styles.open : ""}`}></div>
  );
};

export default HamburgerScreen;
