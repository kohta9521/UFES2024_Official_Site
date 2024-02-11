// scss import
import SectionTitle from "../atoms/SectionTitle";
import styles from "./styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <SectionTitle
            id={1}
            number="01"
            text="About"
            idName="about"
            color="blue"
            align="left"
          />
          <h1 className={styles.aboutTitle}>
            大学の課外活動での
            <br />
            ミスマッチを減らす
          </h1>
        </div>
        <div className={styles.rightBox}></div>
      </div>
    </div>
  );
};

export default About;
