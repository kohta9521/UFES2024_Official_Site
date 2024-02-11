"use client";
import { useState } from "react";

// scss import
import styles from "./styles/ListBox.module.scss";

// components import
import HeaderListItem from "../atoms/HeaderListItem";
import ContactBtn from "../atoms/ContactBtn";
import HamburgerBtn from "../atoms/HamburgerBtn";
import HamburgerScreen from "../organisms/HamburgerScreen";

const ListBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.listBox}>
      <HeaderListItem id={1} text="Top" link="/" />
      <HeaderListItem id={1} text="New Waveとは" link="/about" />
      <HeaderListItem id={1} text="参加団体・企業" link="/" />
      <HeaderListItem id={1} text="当日の流れ" link="/" />
      <HeaderListItem id={1} text="よくある質問" link="/" />
      <ContactBtn id={1} text="申し込む" link="/contact" color="blue" />
      <ContactBtn id={1} text="資料ダウンロード" link="/contact" color="gray" />
      <HamburgerBtn isOpen={false} toggle={toggle} />
      <HamburgerScreen isOpen={isOpen} />
    </div>
  );
};

export default ListBox;
