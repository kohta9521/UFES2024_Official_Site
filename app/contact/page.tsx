// scss import
import styles from "./Contact.module.scss";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";
import SubMainContentLayout from "@/components/templates/SubMainContentLayout";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <SubPageLayout id={2}>
        <SubMainContentLayout
          title="Contect"
          desc="このページではお問い合わせをしていただけます。"
        >
          <h1>お問い合わせフォームは以下から</h1>
        </SubMainContentLayout>
      </SubPageLayout>
    </div>
  );
};

export default Contact;
