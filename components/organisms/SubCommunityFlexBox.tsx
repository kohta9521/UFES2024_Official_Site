import React from "react";

// scss import
import styles from "./styles/SubCommunityFlexBox.module.scss";

// props
export type SubCommunityFlexBoxProps = {
  children: React.ReactNode;
};

const SubCommunityFlexBox = ({ children }: SubCommunityFlexBoxProps) => {
  return <div className={styles.flexBox}>{children}</div>;
};

export default SubCommunityFlexBox;
