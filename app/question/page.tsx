import React from "react";

// scss import
import styles from "./Question.module.scss";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";
import BgImage from "@/components/organisms/BgImage";
import SubMainContentLayout from "@/components/templates/SubMainContentLayout";
import SubpageSectionTitle from "@/components/atoms/SubpageSectionTitle";
import SubpageMainText from "@/components/atoms/SubpageMainText";

const Question = () => {
  return (
    <div className={styles.question}>
      <BgImage />
      <SubPageLayout id={1}>
        <SubMainContentLayout title="Question" desc="よくある質問">
          <SubpageSectionTitle id="question" title="よくある質問" />
          <SubpageMainText text="このイベントを開催するにあたって想定される質問をまとめました。一般の参加者向け・団体・インカレ向けと分かれているためご自身の関連する部分を参照ください。なおここに載っていない質問についてはお問い合わせフォームより質問をよろしくお願いします。" />
          <div className={styles.mainContent}>
            
          </div>
        </SubMainContentLayout>
      </SubPageLayout>
    </div>
  );
};

export default Question;
