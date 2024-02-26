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
              <label htmlFor="universityName">大学名・専門学校名</label>
              <input type="text" id="universityName" name="universityName" />
            </div>
            <div className={styles.field}>
              <p>学年</p>
              {["新大学1年生", "2年生", "その他"].map((year, index) => (
                <label key={index}>
                  <input type="radio" name="universityYear" value={year} />
                  {year}
                </label>
              ))}
            </div>
            <div className={styles.field}>
              <label htmlFor="discoveryMethod">
                どこの団体からこのイベントの紹介をされましたか。
              </label>
              <select name="" id="discoveryMethod">
                {["AFA", "HOKULEA", "NCA", "SpechTech"].map((group, index) => {
                  return (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.field}>
              <p>
                上記でその他と回答した方に質問です。UFESのことを、どのようにしてお知りになりましたか。(※その他以外の回答の方は未入力で大丈夫です。)
              </p>
              <select name="" id="">
                {["ウェブサイト", "友人", "チラシ", "広告"].map(
                  (organization, index) => (
                    <option key={index} value={organization}>
                      {organization}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className={styles.field}>
              <label>
                現在参加を検討しているインカレ・学生団体はありますか？
              </label>
              {["はい", "いいえ"].map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <input type="radio" value={value} /> {value}
                  </React.Fragment>
                );
              })}
            </div>
            <div className={styles.field}>
              <label>
                はいと答えた方に質問です。団体名を教えていただくことは可能でしょうか。可能な場合記入をお願いします。（当日実際にお呼びすることが可能かもしれません。）
              </label>
              <input type="text" />
            </div>
            <div className={styles.field}>
              <label>
                今ハマっている・当日来てくれたら嬉しいインフルエンサーの方などはいますか。
              </label>
              {["はい", "いいえ"].map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <input type="radio" value={value} />
                    {value}
                  </React.Fragment>
                );
              })}
            </div>
            <div className={styles.field}>
              <label>
                はいとか答えた方に質問です。そのインフルエンサーの方のお名前・アカウント名を教えていただくことは可能でしょうか。可能な場合は記入をお願いします。
              </label>
              <input type="text" />
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
