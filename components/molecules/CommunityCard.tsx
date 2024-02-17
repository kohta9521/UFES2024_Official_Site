import React from "react";
import Image from "next/image";

// scss import
import styles from "./styles/CommunityCard.module.scss";

// react icons import
import { FaTwitter, FaInstagram, FaFacebookF, FaGlobe } from "react-icons/fa";

// components import

// sns type
type SnsLink = {
  type: "Twitter" | "Instagram" | "Facebook" | "Website";
  url: string;
};

// props type
export type CommunityCardProps = {
  id: number;
  img: string;
  genre: string;
  name: string;
  snsLinks: SnsLink[];
};

const CommunityCard = ({
  id,
  img,
  genre,
  name,
  snsLinks,
}: CommunityCardProps) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "Twitter":
        return <FaTwitter className={styles.icon} />;
      case "Instagram":
        return <FaInstagram className={styles.icon} />;
      case "Facebook":
        return <FaFacebookF className={styles.icon} />;
      case "Website":
        return <FaGlobe className={styles.icon} />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.card} key={id}>
      <Image
        className={styles.image}
        src={img}
        width={320}
        height={180}
        alt="参加団体の画像"
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.genre}>{genre}</p>
      <div className={styles.flexBox}>
        {snsLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.snsLink}
          >
            {renderIcon(link.type)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CommunityCard;
