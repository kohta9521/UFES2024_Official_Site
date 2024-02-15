// scss import
import styles from "./styles/About.module.scss";

// components import
import SectionTitle from "../atoms/SectionTitle";

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
        <div className={styles.mainTextBox}>
          <p className={styles.titleText}>UFESとは</p>
          <p className={styles.mainText}>
            UFESは「春の大学生フェス」を一つのカルチャーにすべく立ち上がった学生団体の合同新歓イベントです。
            <br />
            大学に属していない学生団体は各々がイベントを行っていました。様々なカラーの学生団体が集い、ともに一つのイベントを作り上げることで学生団体同士の新たな化学反応と横のつながりを目指します。
            <br />
            大学生活は有限です。所属するコミュニティによって学生生活はガラリと異なることでしょう。新入生には様々な学生団体を同じ場で比較することで、より自分とマッチする学生団体と出会い有意義な学生生活を送れる場を提供いたします。
            学生同士が新たな学生を想い生まれたイベントです。だからこそ主催側は思い入れと熱意があり、また参加者はカジュアルに楽しんでもらえるでしょう。企業考案の学生を入れたイベントとは全く異なること間違いなしです。
          </p>
          <p className={styles.enMainText}>
            UFES is a joint welcome event for student groups that was set up to
            make the "Spring University Student Fest" a part of the culture.
            Student groups that are not affiliated with a university have been
            holding their own events. We aim to create new chemical reactions
            and horizontal connections among student groups by bringing together
            student groups of various colors to create a single event together.
            University life is finite. Depending on the community you belong to,
            student life can be quite different. We provide a place for new
            students to compare various student groups in the same place, so
            that they can meet student groups that match their own needs and
            have a meaningful student life. This is an event born from the idea
            of students thinking of new students. That is why the organizers are
            passionate and enthusiastic, and the participants can enjoy the
            event in a casual manner. It is definitely different from a
            corporate event that includes students.
          </p>
        </div>
        <span className={styles.underBorder}></span>
        <div className={styles.underBox}>
          <div className={styles.leftBox}>
            <h3 className={styles.mainName}>Governing Body</h3>
            <p className={styles.name}>UFES 2024 実行委員会</p>
            <p className={styles.enName}>UFES 2024 Executive Committee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
