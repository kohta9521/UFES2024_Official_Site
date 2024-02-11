import Link from "next/link";

// scss import
import styles from "./styles/ContactBtn.module.scss";

export type ContactBtnProps = {
  id: number;
  text: string;
  link: string;
  color?: "blue" | "gray";
};

const ContactBtn = ({ id, text, link, color = "blue" }: ContactBtnProps) => {
  return (
    <Link
      key={id}
      href={link}
      className={`${styles.contactBtn} ${styles[color]}`}
    >
      {text}
    </Link>
  );
};

export default ContactBtn;
