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
          <h1 className={styles.title}>UFES2024 ~春の陣~ 事前参加フォーム</h1>
          <span className={styles.underLine}></span>
          <p className={styles.desc}>
            先着フォーム記入限定200人!来場
            <br />
            特別ギフトプレゼント！ 総合来場想定人数3000人!
            <br />
            六本木ヒルズのホールで日本最大級の合同新歓フェスを開催します！！
            <br />
            50もの憧れの学生団体が1日限定で集い、05,04の代を迎え入れます。
            <br />
            また素敵なプログラムやイベント、スペシャルなゲストも呼ぶ予定です！
            <br />
            是非是非奮ってご参加ください！
            <br />
            <br />
            ［イベント詳細］ <br />
            日時: 4/5(金) 10:00〜18:00 (出入り自由) <br />
            会場: 六本木ヒルズハリウッドホール
            <br /> 値段: 500円
            <br />
            <br /> Instagram: https://www.instagram.com/ufes_2024/
            イベント詳細やお得情報は以下のアカウントで随時発信します。是非フォロー&拡散お願いいたします！
            <br />
            参加希望の方はこちらのフォームをご記入下さい 。 ↓<br />
            フォーム記入確認後、記入先のメールに登録完了メールを送付します。
            <br />
            また、イベント前の4月1日に当日の入場用QRを同じメールに送付いたしますので当日はそちらのメールを控えた状態で参加をお願いします。
            <br />
            尚、定員に達し次第締切致します。
            <br />
            <br /> 『UFES 2024-春の陣-』で新生活、新学期をスタートさせよう！⭐
          </p>
        </div>
        <div className={styles.entry}>
          <form className={styles.form}>
            <h1 className={styles.formTitle}>事前参加フォーム 入力欄</h1>
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
