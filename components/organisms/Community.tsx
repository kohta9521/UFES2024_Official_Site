import React from "react";
import Link from "next/link";

// scss import
import styles from "./styles/Community.module.scss";

// components import
import SectionTitle from "../atoms/SectionTitle";
import CommunityCard, { CommunityCardProps } from "../molecules/CommunityCard";
// data import
import communitiesData from "@/data/CommunityData.json";

const Community = () => {
  const community = communitiesData[0] as CommunityCardProps;
  const community1 = communitiesData[1] as CommunityCardProps;
  const community2 = communitiesData[2] as CommunityCardProps;
  const community3 = communitiesData[3] as CommunityCardProps;
  return (
    <div className={styles.community}>
      <div className={styles.container}>
        <SectionTitle
          id={3}
          text="Community"
          idName="community"
          color="pink"
          align="right"
        />
        <div className={styles.mainTextBox}>
          <div className={styles.leftBox}>
            <div className={styles.flexBox} data-aos="fade-up">
              <CommunityCard
                id={community.id}
                img={community.img}
                genre={community.genre}
                name={community.name}
                snsLinks={community.snsLinks}
              />
              <CommunityCard
                key={community1.id}
                id={community1.id}
                img={community1.img}
                genre={community1.genre}
                name={community1.name}
                snsLinks={community1.snsLinks}
              />
            </div>
            <div className={styles.flexBox} data-aos="fade-up">
              <CommunityCard
                id={community2.id}
                img={community2.img}
                genre={community2.genre}
                name={community2.name}
                snsLinks={community2.snsLinks}
              />
              <CommunityCard
                key={community3.id}
                id={community3.id}
                img={community3.img}
                genre={community3.genre}
                name={community3.name}
                snsLinks={community3.snsLinks}
              />
            </div>
          </div>
          <div className={styles.rightBox} data-aos="fade-up">
            <p className={styles.titleText}>参加団体一覧</p>
            <p className={styles.mainText}>
              参加団体の一覧です。ジャンルなどはあえて制限をしていません。さまざまな団体が参加をすることでさらにUFESは楽しいものになると考えています。
              ここでは参加団体のジャンル・公式SNSを紹介しています。
            </p>
            <p className={styles.enMainText}>
              This is a list of participating organizations. We dare not limit
              the genres of music. We believe that UFES will be even more
              enjoyable with the participation of a variety of groups. Here we
              introduce the genres of the participating groups and their
              official SNS.
            </p>
          </div>
        </div>
        <div className={styles.bottomBox} data-aos="fade-up">
          <Link href={"/about"} className={styles.button}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Community;
