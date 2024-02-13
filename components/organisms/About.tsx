// scss import
import SectionTitle from "../atoms/SectionTitle";
import styles from "./styles/About.module.scss";

// components import

const About = () => {
  return (
    <div className={styles.about}>
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
