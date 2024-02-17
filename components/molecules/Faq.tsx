"use client";
import React, { useState } from "react";

// react icons import
import { FiPlus, FiMinus } from "react-icons/fi";

// data import
import FaqData from "../../data/faqData.json";
import { FaqData as FaqDataType } from "../../types/FaqDataTypes";

// scss import
import styles from "./styles/Faq.module.scss";

// hooks import
import useAOS from "@/hooks/useAOS";

const Faq = () => {
  useAOS();
  // 現在開いている質問のIDを追跡するstate
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  // FaqDataの型をFaqDataTypeにキャスト
  const faqData: FaqDataType = FaqData as FaqDataType;

  // 質問の開閉を制御する関数
  const toggleQuestion = (id: number) => {
    if (openQuestionId === id) {
      setOpenQuestionId(null); // すでに開いている質問をクリックした場合は閉じる
    } else {
      setOpenQuestionId(id); // それ以外の場合は質問を開く
    }
  };
  return (
    <div className={styles.mainBox}>
      {Object.entries(faqData).map(([genre, questions], index) => (
        <div key={index} className={styles.faqSection}>
          <h3 className={styles.genreTitle} data-aos="fade-up">
            {genre}
          </h3>
          {questions.map(({ id, question, answer }) => (
            <div
              data-aos="fade-up"
              key={id}
              className={`${styles.questionItem} ${openQuestionId === id ? styles.open : ""}`}
              onClick={() => toggleQuestion(id)}
            >
              <div className={styles.question}>
                {question}
                <FiPlus className={styles.plusIcon} />
              </div>
              {openQuestionId === id && (
                <div className={styles.answer}>
                  {answer}
                  <FiMinus className={styles.minusIcon} />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Faq;
