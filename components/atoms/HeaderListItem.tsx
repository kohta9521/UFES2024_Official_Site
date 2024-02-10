import Link from "next/link";

// scss import
import styles from "./styles/HeaderListItem.module.scss";

export type HeaderListItemProps = {
  id: number;
  text: string;
  link: string;
  size?: "small" | "medium" | "large";
};

const HeaderListItem = ({
  id,
  text,
  link,
  size = "medium",
}: HeaderListItemProps) => {
  return (
    <Link key={id} href={link} className={`${styles.linkBox} ${styles[size]}`}>
      <p className={styles.listText}>{text}</p>
    </Link>
  );
};

export default HeaderListItem;
