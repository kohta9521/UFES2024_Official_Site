"use client";
import React, { useState } from "react";

// scss import
import styles from "./Contact.module.scss";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubMainContentLayout from "@/components/templates/SubMainContentLayout";

const Contact = () => {
  // formの切り替え
  const [form, setForm] = useState<"personal" | "company">("personal");

  return (
    <div className={styles.contact}>
      <SubPageLayout id={2}>
        <SubMainContentLayout
          title="Contect"
          desc="このページではお問い合わせをしていただけます。"
        >
          <h1>お問い合わせフォームは以下から</h1>
          <div className={styles.flexButton}>
            <button
              className={`${styles.personalButton} ${form === "personal" ? styles.active : ""}`}
              onClick={() => setForm("personal")}
            >
              学生団体・インカレの方
            </button>
            <button
              className={`${styles.companyButton} ${form === "company" ? styles.active : ""}`}
              onClick={() => setForm("company")}
            >
              企業の方
            </button>
          </div>
          <div className={styles.formContent}>
            {form === "personal" ? (
              <div className={styles.box}>
                <h1>学生団体・インカレ用お問い合わせフォーム</h1>
              </div>
            ) : (
              <div className={styles.box}>
                <h1>企業用お問い合わせフォーム</h1>
              </div>
            )}
          </div>
        </SubMainContentLayout>
      </SubPageLayout>
    </div>
  );
};

export default Contact;
