import React from "react";

// scss import
import styles from "./Company.module.scss";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubMainContentLayout from "@/components/templates/SubMainContentLayout";
import SubpageMainText from "@/components/atoms/SubpageMainText";
import SubpageSectionTitle from "@/components/atoms/SubpageSectionTitle";

const Company = () => {
  return (
    <div className={styles.company}>
      <SubPageLayout id={1}>
        <SubMainContentLayout
          title="Company"
          desc="UFESの考え・ビジョンに賛同いただき協賛をしていただいていている企業です。"
        >
          <SubpageSectionTitle id="company" title="企業一覧" />
          <SubpageMainText text="このイベントを共に盛り上げてくれる企業様一覧です。" />
        </SubMainContentLayout>
      </SubPageLayout>
    </div>
  );
};

export default Company;
