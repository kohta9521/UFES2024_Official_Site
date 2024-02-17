import React from "react";

// scss import
import styles from "./styles/Question.module.scss";

// components import
import SectionTitle from "../atoms/SectionTitle";

// hooks import
import useAOS from "@/hooks/useAOS";
import Faq from "../molecules/Faq";
import Link from "next/link";

const Question = () => {
  useAOS();
  return (
    <div className={styles.question}>
      <div className={styles.container}>
        <SectionTitle
          id={8}
          text="Question"
          idName="question"
          color="pink"
          align="left"
        />
        <div className={styles.mainTextBox}>
          <p className={styles.titleText} data-aos="fade-up">
            よくある質問
          </p>
          <p className={styles.mainText} data-aos="fade-up">
            一般の来場様向け・団体様向け・企業様向けのよくある質問をまとめています。
            <br />
            ご不明点がございましたら、下記のコンタクトよりお気軽にお問い合わせください。
          </p>
          <p className={styles.enMainText} data-aos="fade-up">
            Frequently asked questions for general visitors, groups, and
            companies are listed below.
            <br />
            If you have any questions, please feel free to contact us using the
            contact information below.
          </p>
          <div className={styles.questionArea}>
            <Faq />
          </div>
        </div>
        <div className={styles.bottomBox} data-aos="fade-up">
          <Link href={"/question"} className={styles.moreButton}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question;
