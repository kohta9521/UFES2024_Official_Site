// scss import
import styles from "./styles/ListBox.module.scss";

// components import
import HeaderListItem from "../atoms/HeaderListItem";
import ContactBtn from "../atoms/ContactBtn";

const ListBox = () => {
  return (
    <div className={styles.listBox}>
      <HeaderListItem id={1} text="Home" link="/" />
      <HeaderListItem id={1} text="Home" link="/" />
      <HeaderListItem id={1} text="Home" link="/" />
      <ContactBtn id={1} text="お問い合わせ" link="/contact" />
    </div>
  );
};

export default ListBox;
