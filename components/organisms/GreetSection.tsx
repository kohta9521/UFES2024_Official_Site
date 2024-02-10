import styles from "./styles/GreetSection.module.scss";

const GreetSection = () => {
  return (
    <div className={styles.greetSection}>
      <div className={styles.container}>
        <p className={styles.text}>
          大学生活を全力で楽しみたい、でも何をすればいいか分からない。
          <br />
          漠然と「かっこいい」ことをしたい。でもどこで探せばいいか知らない、分からない。
          <br />
          当日は50を超えるインカレ・学生団体と企業とオフラインで交流。
          <br />
          新歓の合同イベントというあったく新しい形態
          <br />
          4年間という限りのある時間を費やす価値のあるものを見つけられる1日を提供します。
          <br />
        </p>
      </div>
    </div>
  );
};

export default GreetSection;
