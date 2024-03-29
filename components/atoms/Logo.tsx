import Link from "next/link";
import Image from "next/image";

// scss import
import styles from "./styles/Logo.module.scss";

export type LogoProps = {
  id: number;
  size?: "small" | "medium" | "large";
  link: string;
};

const Logo = ({ id, size = "medium", link }: LogoProps) => {
  return (
    <Link key={id} href={link} className={styles.logoLinkBox}>
      <Image
        className={`${styles.logoImg} ${styles[size]}`}
        src={"/images/rowTitle.png"}
        width={230}
        height={45}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
