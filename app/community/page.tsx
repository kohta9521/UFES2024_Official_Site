import React from "react";

// scss import
import styles from "./Community.module.scss";
import BgImage from "@/components/organisms/BgImage";
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubMainContentLayout from "@/components/templates/SubMainContentLayout";
import SubpageSectionTitle from "@/components/atoms/SubpageSectionTitle";
import SubpageMainText from "@/components/atoms/SubpageMainText";

const Community = () => {
  return (
    <div className={styles.community}>
      <BgImage />
      <SubPageLayout id={1}>
        <SubMainContentLayout
          title="Community"
          desc="当日参加をする学生団体・インカレの一覧です。多種多様な団体が参加します。"
        >
          <SubpageSectionTitle id="about" title="団体一覧" />
          <SubpageMainText text="以下団体の一覧です。各団体のロゴや参考画像、団体の公式SNSなどをこちらでは紹介をしています。" />
        </SubMainContentLayout>
      </SubPageLayout>
    </div>
  );
};

export default Community;
