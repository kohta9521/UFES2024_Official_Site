import React from "react";

// scss import
import styles from "./About.module.scss";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";
import BgImage from "@/components/organisms/BgImage";
import SubMainContentLayout from "@/components/templates/SubMainContentLayout";
import SubpageSectionTitle from "@/components/atoms/SubpageSectionTitle";
import SubpageMainText from "@/components/atoms/SubpageMainText";
const About = () => {
  return (
    <div className={styles.about}>
      <BgImage />
      <SubPageLayout id={1}>
        <SubMainContentLayout
          title="About"
          desc="UFESについて、何故イベントを行うのか、どんなイベントにしたいのか、当日の流れなどご覧いただけます。"
        >
          <SubpageSectionTitle id="about" title="UFESとは" />
          <SubpageMainText text="「新歓に革命を」新歓の全く新しい形態。UFES2024の公式サイト。大学生の新歓の新しいカルチャーを作る。4/5 に六本木ヒルズホールを貸切５０団体・２０社を集める" />
        </SubMainContentLayout>
      </SubPageLayout>
    </div>
  );
};

export default About;
