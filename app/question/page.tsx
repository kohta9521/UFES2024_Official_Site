"use client";
import React, { useState } from "react";

// scss import
import styles from "./Question.module.scss";

// react icons import
import { FiPlus, FiMinus } from "react-icons/fi";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";
// import BgImage from "@/components/organisms/BgImage";
import SubMainContentLayout from "@/components/templates/SubMainContentLayout";
import SubpageSectionTitle from "@/components/atoms/SubpageSectionTitle";
import SubpageMainText from "@/components/atoms/SubpageMainText";

// data import
import FaqData from "../../data/faqDataDetail.json";
import { FaqData as FaqDataType } from "../../types/FaqDataTypes";

const Question = () => {
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
    <div className={styles.question}>
      <SubPageLayout id={1}>
        <SubMainContentLayout title="Question" desc="よくある質問">
          <SubpageSectionTitle id="question" title="よくある質問" />
          <SubpageMainText text="このイベントを開催するにあたって想定される質問をまとめました。一般の参加者向け・団体・インカレ向けと分かれているためご自身の関連する部分を参照ください。なおここに載っていない質問についてはお問い合わせフォームより質問をよろしくお願いします。" />
          <div className={styles.mainContent}>
            {Object.entries(faqData).map(([genre, questions], index) => (
              <div key={index} className={styles.faqSection}>
                <h3 className={styles.genreTitle}>{genre}</h3>
                {questions.map(({ id, question, answer }) => (
                  <div
                    // data-aos="fade-up"
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
        </SubMainContentLayout>
      </SubPageLayout>
    </div>
  );
};

export default Question;
