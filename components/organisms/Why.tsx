import React from "react";

// scss import
import styles from "./styles/Why.module.scss";

// components import
import SectionTitle from "../atoms/SectionTitle";

// hooks import
import useAOS from "@/hooks/useAOS";

const Why = () => {
  useAOS();
  return (
    <div className={styles.why}>
      <div className={styles.container}>
        <SectionTitle
          id={2}
          text="Why?"
          idName="why"
          color="pink"
          align="center"
        />
        <div className={styles.mainTextBox}>
          <p className={styles.titleText} data-aos="fade-up">
            なぜ合同イベントなのか
          </p>
          <div className={styles.iconFlexBox}>
            <div className={styles.iconBox}>
              {/* icon */}
              <p className={styles.iconTitle}>見る</p>
            </div>
            <div className={styles.iconBox}>
              {/* icon */}
              <p className={styles.iconTitle}>体験する</p>
            </div>
            <div className={styles.iconBox}>
              {/* icon */}
              <p className={styles.iconTitle}>知る</p>
            </div>
          </div>
          <p className={styles.mainText} data-aos="fade-up">
            新歓は新入生が大学のサークルや部活動を知るためのイベントですが、皆さんは自信を持って自分に一番合った、居心地が良いサークルを見つけられる自信がありますか？
            また、サークル側からしても、新入生に自分たちのサークルを知ってもらうために、どのような活動をすれば良いか迷っていることでしょう。
            <br />
            <br />
            新歓を成功させる秘訣は様々な団体を
            <span className={styles.accentColor}>見て・体験して・知る</span>
            ことではないでしょうか？
            <br />
            <br />
            UFESはこの見て・体験して・知ることを提供できます。UFESをどうかあなたの貴重な大学生活にフル活用してください。
          </p>
          <p className={styles.enMainText} data-aos="fade-up">
            New students are invited to the New Welcome Party to get to know the
            universitys clubs and club activities. Are you confident that you
            can find a circle that best fits you and that you feel at home in?
            Also, the circle side may be wondering what kind of activities they
            should do to let new students get to know their circle. The secret
            to a successful welcome party is to see, experience, and learn about
            various groups, dont you think? UFES can provide you with this
            experience, and we hope you will make full use of it in your
            precious university life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
