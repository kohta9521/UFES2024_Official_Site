import React from "react";
import Image from "next/image";

// scss import
import styles from "./styles/Top.module.scss";

// components import
import TopVerticalText from "../atoms/TopVerticalText";
import ScrollDownText from "../atoms/ScrollDownText";
import TopListBox from "../molecules/TopListBox";
import SnsBox from "../molecules/SnsBox";

const Top = () => {
  return (
    <div className={styles.top}>
      <TopVerticalText
        id={1}
        text="春の大学生イベントを一つのカルチャーに"
        color="pink"
      />
      <div className={styles.centerTitleImage}>
        <Image
          className={styles.center}
          src="/images/bg_white_logo.png"
          alt="centerTitleImage"
          width={430}
          height={350}
        />
      </div>
      <TopListBox />
      <SnsBox />
      <ScrollDownText />
    </div>
  );
};

export default Top;
