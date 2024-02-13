// scss import
import styles from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topBox}></div>
        <div className={styles.centerBox}></div>
        <div className={styles.underBox}>
          {/* 運営団体の名称とコピーライト・利用規約・プライバシーポリシーを記述 */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
