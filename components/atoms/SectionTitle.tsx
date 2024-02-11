import styles from "./styles/SectionTitle.module.scss";

export type SectionTitleProps = {
  id: number;
  number: string;
  text: string;
  idName: string;
  color?: "blue" | "black" | "white";
  align?: "left" | "center" | "right";
};

const SectionTitle = ({
  id,
  number,
  text,
  idName,
  color = "black",
  align = "center",
}: SectionTitleProps) => {
  return (
    <h2
      key={id}
      id={idName}
      className={`${styles.sectionTitle} ${styles[color]} ${styles[align]}`}
    >
      <span className={`${styles.sectionNumber} ${styles[color]}`}>
        {number}
      </span>
      {text}
    </h2>
  );
};

export default SectionTitle;
