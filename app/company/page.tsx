import React from "react";

// scss import
import styles from "./Company.module.scss";

// components import
import BgImage from "@/components/organisms/BgImage";
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubMainContentLayout from "@/components/templates/SubMainContentLayout";
import SubpageMainText from "@/components/atoms/SubpageMainText";
import SubpageSectionTitle from "@/components/atoms/SubpageSectionTitle";

const Company = () => {
  return (
    <div className={styles.company}>
      <BgImage />
      <SubPageLayout id={1}>
        <SubMainContentLayout
          title="Company"
          desc="UFESの考え・ビジョンに賛同いただき協賛をしていただいていている企業です。"
        >
          <SubpageSectionTitle id="company" title="企業一覧" />
          <SubpageMainText text="「新歓に革命を」新歓の全く新しい形態。UFES2024の公式サイト。大学生の新歓の新しいカルチャーを作る。4/5 に六本木ヒルズホールを貸切５０団体・２０社を集める" />
        </SubMainContentLayout>
      </SubPageLayout>
    </div>
  );
};

export default Company;
