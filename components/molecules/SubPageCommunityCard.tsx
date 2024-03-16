import React from "react";

// scss import
import styles from "./styles/SubPageCommunityCard.module.scss";

// props type
export type SubPageCommunityCardProps = {
  id: number;
  img: string;
  name: string;
  tagNumber: string;
};

const SubPageCommunityCard = () => {
  return <div className={styles.card}></div>;
};

export default SubPageCommunityCard;