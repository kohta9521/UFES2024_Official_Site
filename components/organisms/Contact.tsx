import React, { use } from "react";
import Link from "next/link";

// scss import
import styles from "./styles/Contact.module.scss";

// components import
import SectionTitle from "../atoms/SectionTitle";

// hooks import
import useAOS from "@/hooks/useAOS";

const Contact = () => {
  useAOS();
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <SectionTitle
          id={8}
          text="Contact"
          idName="contact"
          color="pink"
          align="center"
        />
        <div className={styles.mainTextBox}>
          <p className={styles.titleText} data-aos="fade-up">
            お問い合わせ
          </p>
          <p className={styles.mainText} data-aos="fade-up">
            お問い合わせはこちらからお願いします。
            <br />
            企業様向けと団体様向けで分かれているためお問合せの際はご注意ください。
          </p>
          <p className={styles.enMainText} data-aos="fade-up">
            Please click here to contact us.
            <br />
            Please note that we have separate sections for companies and for
            groups, so please be careful when making inquiries.
          </p>
          <div className={styles.btnFlexBox} data-aos="fade-up">
            <Link href={"/contact/#community"} className={styles.contactBtn}>
              団体様用
            </Link>
            <Link href={"/contact/#community"} className={styles.contactBtn}>
              企業様用
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
