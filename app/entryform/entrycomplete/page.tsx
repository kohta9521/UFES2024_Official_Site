import React from "react";
import Link from "next/link";
import styles from "./EntryComplete.module.scss";
import BgImage from "@/components/organisms/BgImage";
import SubPageLayout from "@/components/templates/SubPageLayout";

const EntryComplete = () => {
  return (
    <div className={styles.entryComplete}>
      <BgImage />
      <SubPageLayout id={2}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>エントリー完了のお知らせ</h1>
          <p className={styles.desc}>
            この度はエントリーいただき、誠にありがとうございます。
            <br />
            今後公式SNSなどで最新情報を発信していきますので、是非フォローをお願いいたします。
          </p>
          <Link href={"/"}>ホームに戻る</Link>
        </div>
      </SubPageLayout>
    </div>
  );
};

export default EntryComplete;
