import React from "react";

// scss import
import styles from "./Entry.module.scss";

// component import
import SubPageLayout from "@/components/templates/SubPageLayout";
import BgImage from "@/components/organisms/BgImage";

const Entry = () => {
  return (
    <div className={styles.entryform}>
      <BgImage />
      <SubPageLayout id={2}>
        <div className={styles.hero}>
          <h1 className={styles.title}>UFES2024 参加フォーム</h1>
          <p className={styles.desc}></p>
        </div>
        <div className={styles.entry}>
          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="nameKanji">氏名（漢字）</label>
              <input type="text" id="nameKanji" name="nameKanji" />
            </div>
            <div className={styles.field}>
              <label htmlFor="nameKana">氏名（カタカナ）</label>
              <input type="text" id="nameKana" name="nameKana" />
            </div>
            <div className={styles.field}>
              <p>大学何年生か</p>
              {["新大学一年生", "2年生", "3年生", "4年生", "その他"].map(
                (year, index) => (
                  <label key={index}>
                    <input type="checkbox" name="universityYear" value={year} />
                    {year}
                  </label>
                )
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="universityName">大学名</label>
              <input type="text" id="universityName" name="universityName" />
            </div>
            <div className={styles.field}>
              <label htmlFor="discoveryMethod">
                どうやってこのイベントを知ったか
              </label>
              <input type="text" id="discoveryMethod" name="discoveryMethod" />
            </div>
            <div className={styles.field}>
              <p>イベントを知った団体名</p>
              {["団体1", "団体2"].map((organization, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="referringOrganization"
                    value={organization}
                  />
                  {organization}
                </label>
              ))}
            </div>
            <div className={styles.submitButtonContainer}>
              <button type="submit" className={styles.submitButton}>
                送信
              </button>
            </div>
          </form>
        </div>
        {/* TODO: ここには応募する上での心配事や詳細を確認するための文章・モーダルを入れたい */}
      </SubPageLayout>
    </div>
  );
};

export default Entry;
