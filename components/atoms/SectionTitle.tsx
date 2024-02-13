// scss import
import styles from "./styles/SectionTitle.module.scss";

export type SectionTitleProps = {
  id: number;
  text: string;
  idName: string;
  color?: "pink" | "black" | "white";
  align?: "left" | "center" | "right";
};

const SectionTitle = ({
  id,
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
      {text}
    </h2>
  );
};

export default SectionTitle;
