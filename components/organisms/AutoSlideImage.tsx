import React from "react";
import styles from "./styles/AutoSlideImage.module.scss";

const AutoSlideImage: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {[...Array(2)].map((_, index) => (
          <div className={styles.slide} key={index}>
            <img src="/images/logo/community/hokuleaLogo.jpg" alt="Slide 1" />
            <img src="/images/logo/community/hokuleaLogo.jpg" alt="Slide 1" />
            <img src="/images/logo/community/hokuleaLogo.jpg" alt="Slide 1" />
            <img src="/images/logo/community/hokuleaLogo.jpg" alt="Slide 1" />
            <img src="/images/logo/community/hokuleaLogo.jpg" alt="Slide 1" />
            <img src="/images/logo/community/hokuleaLogo.jpg" alt="Slide 1" />
            <img src="/images/logo/community/hokuleaLogo.jpg" alt="Slide 1" />
            <img src="/images/logo/community/hokuleaLogo.jpg" alt="Slide 1" />
            <img src="/images/logo/community/hokuleaLogo.jpg" alt="Slide 1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlideImage;
