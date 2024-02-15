// scss import
import styles from "./styles/About.module.scss";

// components import
import SectionTitle from "../atoms/SectionTitle";

const About = () => {
  return (
    <div className={styles.about} id="blurTarget">
      <div className={styles.container}>
        <SectionTitle
          id={1}
          text="About"
          idName="about"
          color="pink"
          align="left"
        />
      </div>
    </div>
  );
};

export default About;
