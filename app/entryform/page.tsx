"use client";
import React from "react";

// scss import
import styles from "./Entry.module.scss";

// component import
import SubPageLayout from "@/components/templates/SubPageLayout";
import BgImage from "@/components/organisms/BgImage";

// React Form Hook

import { useForm, SubmitHandler } from "react-hook-form";
// zod
import { zodResolver } from "@hookform/resolvers/zod";
import contactSchema, {
  FormURL,
  Contact,
  FormFieldNames,
} from "@/scheme/contactScheme";
import { useRouter } from "next/navigation";

const Entry = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  // 送信ボタンの処理
  const onSubmit: SubmitHandler<Contact> = async (data) => {
    try {
      await fetch(FormURL, {
        method: "POST",
        body: provideUrlEncodedFormData(data, FormFieldNames),
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      router.push("/entryform/entrycomplete");
    } catch (e) {
      alert("送信に失敗しました。ネットワーク状況を確認してください");
    }
  };

  return (
    <div className={styles.entryform}>
      <BgImage />
      <SubPageLayout id={2}>
        <div className={styles.hero}>
          <h1 className={styles.title}>UFES2024 ~春の陣~ 事前参加フォーム</h1>
          <span className={styles.underLine}></span>
          <p className={styles.desc}>
            <br />
            20もの憧れの学生団体が1日限定で集い、05,04の代を迎え入れます。
            <br />
            また素敵なプログラムやイベント、スペシャルなゲストも呼ぶ予定です！
            <br />
            是非是非奮ってご参加ください！
            <br />
            <br />
            ［イベント詳細］ <br />
            日時: 5/2(木) 18:00-22:00 (出入り自由) <br />
            会場: Sloth 渋谷 2階
            <br /> 値段: 2000円 (飲食提供込み）
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
          {/* ここからForm */}
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.formTitle}>事前参加フォーム 入力欄</h1>

            <div className={styles.field}>
              <label>氏名（漢字）</label>
              <input type="text" {...register("name")} />
              <p className={styles.error__message}>{errors.name?.message}</p>
            </div>

            <div className={styles.field}>
              <label>氏名（カタカナ）</label>
              <input type="text" {...register("furigana")} />
              <p className={styles.error__message}>
                {errors.furigana?.message}
              </p>
            </div>

            <div className={styles.field}>
              <label>メールアドレス</label>
              <input type="text" {...register("email")} />
              <p className={styles.error__message}>{errors.email?.message}</p>
            </div>

            <div className={styles.field}>
              <label>大学名・専門学校名</label>
              <input type="text" {...register("school")} />
              <p className={styles.error__message}>{errors.school?.message}</p>
            </div>

            <div className={styles.field}>
              <label>学年</label>
              {["新大学1年生", "2年生", "その他"].map((year, index) => (
                <label key={index}>
                  <input type="radio" {...register("grade")} value={year} />
                  {year}
                </label>
              ))}
              <p className={styles.error__message}>{errors.grade?.message}</p>
            </div>

            <div className={styles.field}>
              <label>どこの団体からこのイベントの紹介をされましたか。</label>
              <select {...register("introduction")}>
                {[
                  "選択してください",
                  "AFA",
                  "HOKULEA",
                  "NCA",
                  "SpechTech",
                  "その他",
                ].map((group, index) => {
                  return (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  );
                })}
              </select>
              <p className={styles.error__message}>
                {errors.introduction?.message}
              </p>
            </div>

            <div className={styles.field}>
              <label>
                上記でその他と回答した方に質問です。UFESのことを、どのようにしてお知りになりましたか。(※その他以外の回答の方は未入力で大丈夫です。)
              </label>
              <select {...register("how_to_known")}>
                {[
                  "選択",
                  "ウェブサイト",
                  "友人",
                  "チラシ",
                  "広告",
                  "その他",
                ].map((organization, index) => (
                  <option key={index} value={organization}>
                    {organization}
                  </option>
                ))}
              </select>
              <p className={styles.error__message}>
                {errors.how_to_known?.message}
              </p>
            </div>

            <div className={styles.field}>
              <label>
                現在参加を検討しているインカレ・学生団体はありますか？
              </label>
              {["はい", "いいえ"].map((value, index) => {
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      value={value}
                      {...register("is_join_group")}
                    />{" "}
                    {value}
                  </label>
                );
              })}
              <p className={styles.error__message}>
                {errors.is_join_group?.message}
              </p>
            </div>

            <div className={styles.field}>
              <label>
                はいと答えた方に質問です。団体名を教えていただくことは可能でしょうか。可能な場合記入をお願いします。（当日実際にお呼びすることが可能かもしれません。）
              </label>
              <input type="text" {...register("group_name")} />
              <p className={styles.error__message}>
                {errors.group_name?.message}
              </p>
            </div>

            <div className={styles.field}>
              <label>
                今ハマっている・当日来てくれたら嬉しいインフルエンサーの方などはいますか。
              </label>
              {["はい", "いいえ"].map((value, index) => {
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      value={value}
                      {...register("influencer")}
                    />
                    {value}
                  </label>
                );
              })}
              <p className={styles.error__message}>
                {errors.influencer?.message}
              </p>
            </div>

            <div className={styles.field}>
              <label>
                はいと答えた方に質問です。そのインフルエンサーの方のお名前・アカウント名を教えていただくことは可能でしょうか。可能な場合は記入をお願いします。
              </label>
              <input type="text" {...register("who_is_influencer")} />
              <p className={styles.error__message}>
                {errors.who_is_influencer?.message}
              </p>
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

type FormTypes = {
  [key: string]: string;
};

function provideUrlEncodedFormData(
  originalFormData: FormTypes,
  formFieldNames: FormTypes
) {
  const result: FormTypes = {};

  for (const key of Object.keys(originalFormData)) {
    result[formFieldNames[key]] = originalFormData[key];
  }

  // TODO 相談 より厳密に管理したい場合entry番号で指定する
  Object.keys(result).map((k) => {
    if (result[k] === "選択") {
      delete result[k];
    }
  });

  return new URLSearchParams(result).toString();
}

export default Entry;
