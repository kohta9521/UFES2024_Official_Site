"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

// scss import
import styles from "./styles/Top.module.scss";

// components import
import TopVerticalText from "../atoms/TopVerticalText";
import ScrollDownText from "../atoms/ScrollDownText";
import TopListBox from "../molecules/TopListBox";
import SnsBox from "../molecules/SnsBox";
import HamburgerBtn from "../atoms/HamburgerBtn";

const Top = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.top}>
      <HamburgerBtn isOpen={false} toggle={toggle} />
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
          width={500}
          height={400}
        />
      </div>
      <TopListBox />
      <SnsBox />
      <ScrollDownText />
    </div>
  );
};

export default Top;
