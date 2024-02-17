// scss import
import styles from "./Contact.module.scss";

// components import
import SubPageLayout from "@/components/templates/SubPageLayout";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <SubPageLayout id={2}>
        <h1>contact page</h1>
      </SubPageLayout>
    </div>
  );
};

export default Contact;
