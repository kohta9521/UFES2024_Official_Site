import Link from "next/link";

// scss import
import styles from "./styles/ContactBtn.module.scss";

export type ContactBtnProps = {
  id: number;
  text: string;
  link: string;
};

const ContactBtn = ({ id, text, link }: ContactBtnProps) => {
  return (
    <Link key={id} href={link} className={styles.contactBtn}>
      {text}
    </Link>
  );
};

export default ContactBtn;
