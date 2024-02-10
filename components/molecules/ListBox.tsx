import HeaderListItem from "../atoms/HeaderListItem";
import styles from "./styles/ListBox.module.scss";

const ListBox = () => {
  return (
    <div className={styles.listBox}>
      <HeaderListItem id={1} text="Home" link="/" />
      <HeaderListItem id={1} text="Home" link="/" />
      <HeaderListItem id={1} text="Home" link="/" />
    </div>
  );
};

export default ListBox;
