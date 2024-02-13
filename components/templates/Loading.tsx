import React, { useEffect, useState } from "react";
import styles from "./styles/Loading.module.scss";
import Image from "next/image";

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setAnimationStep(1);
    }, 1000); // ローディング終了

    setTimeout(() => {
      setAnimationStep(2);
    }, 4000); // カラースライド後に遷移
  }, []);

  if (animationStep === 2) {
    // メインコンテンツへの遷移処理をここに実装
  }

  return (
    <div className={styles.container}>
      {loading && (
        <div className={styles.logo}>
          <Image
            src="/images/heroTitle.png"
            alt="event logo"
            width={200}
            height={170}
          />
        </div>
      )}
      {animationStep === 1 && (
        <div className={styles.colorSlides}>
          <div
            className={styles.slide}
            style={{ backgroundColor: "#191ba9", animationDelay: "0s" }}
          ></div>
          <div
            className={styles.slide}
            style={{ backgroundColor: "#5cc2f2", animationDelay: "1s" }}
          ></div>
          <div
            className={styles.slide}
            style={{ backgroundColor: "#c1eaf2", animationDelay: "2s" }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Loading;
