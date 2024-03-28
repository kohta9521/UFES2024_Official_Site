"use client";
// import { useState } from "react";
import React from "react";
import Image from "next/image";

// hooks import
import useAOS from "@/hooks/useAOS";

// scss import
import styles from "./styles/Top.module.scss";

// components import
import TopVerticalText from "../atoms/TopVerticalText";
import ScrollDownText from "../atoms/ScrollDownText";
import TopListBox from "../molecules/TopListBox";
import SnsBox from "../molecules/SnsBox";
// import HamburgerBtn from "../atoms/HamburgerBtn";
import EntryButton from "../atoms/EntryButton";

const Top = () => {
  useAOS();
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div className={styles.top}>
      {/* <HamburgerBtn isOpen={false} toggle={toggle} /> */}
      <TopVerticalText
        id={1}
        text="春の大学生イベントを一つのカルチャーに"
        color="pink"
      />
      <div className={styles.centerTitleImage}>
        <Image
          data-aos="fade-up"
          className={styles.center}
          src="/images/logo/logo-removebg.png"
          alt="centerTitleImage"
          width={900}
          height={500}
        />
      </div>
      <TopListBox />
      <SnsBox />
      <ScrollDownText />
      <EntryButton />
    </div>
  );
};

export default Top;
