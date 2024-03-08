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
  const community4 = communitiesData[4] as CommunityCardProps;
  const community5 = communitiesData[5] as CommunityCardProps;
  const community6 = communitiesData[6] as CommunityCardProps;
  const community7 = communitiesData[7] as CommunityCardProps;
  const community8 = communitiesData[8] as CommunityCardProps;
  const community9 = communitiesData[9] as CommunityCardProps;
  const community10 = communitiesData[10] as CommunityCardProps;
  const community11 = communitiesData[11] as CommunityCardProps;
  const community12 = communitiesData[12] as CommunityCardProps;
  const community13 = communitiesData[13] as CommunityCardProps;
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
            <div className={styles.flexBox} data-aos="fade-up">
              <CommunityCard
                id={community4.id}
                img={community4.img}
                genre={community4.genre}
                name={community4.name}
                snsLinks={community4.snsLinks}
              />
              <CommunityCard
                key={community5.id}
                id={community5.id}
                img={community5.img}
                genre={community5.genre}
                name={community5.name}
                snsLinks={community5.snsLinks}
              />
            </div>
            <div className={styles.flexBox} data-aos="fade-up">
              <CommunityCard
                id={community6.id}
                img={community6.img}
                genre={community6.genre}
                name={community6.name}
                snsLinks={community6.snsLinks}
              />
              <CommunityCard
                key={community7.id}
                id={community7.id}
                img={community7.img}
                genre={community7.genre}
                name={community7.name}
                snsLinks={community7.snsLinks}
              />
            </div>
            <div className={styles.flexBox} data-aos="fade-up">
              <CommunityCard
                id={community8.id}
                img={community8.img}
                genre={community8.genre}
                name={community8.name}
                snsLinks={community8.snsLinks}
              />
              <CommunityCard
                key={community9.id}
                id={community9.id}
                img={community9.img}
                genre={community9.genre}
                name={community9.name}
                snsLinks={community9.snsLinks}
              />
            </div>
            <div className={styles.flexBox} data-aos="fade-up">
              <CommunityCard
                id={community10.id}
                img={community10.img}
                genre={community10.genre}
                name={community10.name}
                snsLinks={community10.snsLinks}
              />
              <CommunityCard
                key={community11.id}
                id={community11.id}
                img={community11.img}
                genre={community11.genre}
                name={community11.name}
                snsLinks={community11.snsLinks}
              />
            </div>
            <div className={styles.flexBox} data-aos="fade-up">
              <CommunityCard
                id={community12.id}
                img={community12.img}
                genre={community12.genre}
                name={community12.name}
                snsLinks={community12.snsLinks}
              />
              <CommunityCard
                key={community13.id}
                id={community13.id}
                img={community13.img}
                genre={community13.genre}
                name={community13.name}
                snsLinks={community13.snsLinks}
              />
            </div>
          </div>
          <div className={styles.rightBox} data-aos="fade-up">
            <p className={styles.titleText}>参加団体一覧</p>
            <p className={styles.mainText}>
              参加団体の一覧です。ジャンルなどはあえて制限をしていません。さまざまな団体が参加をすることでさらにUFESは楽しいものになると考えています。
              ここでは参加団体のジャンル・公式SNSを紹介しています。
              <br />
              また、現時点での主要参加団体を紹介していますが、随時更新をしていきます。
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
          <Link href={"/community"} className={styles.button}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Community;
