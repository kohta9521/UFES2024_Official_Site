"use client";
import React from "react";

// scss import
import styles from "../styles/page.module.scss";

// components import
// import Loading from "../components/templates/Loading";
import Top from "@/components/organisms/Top";
import About from "@/components/organisms/About";
import BgImage from "@/components/organisms/BgImage";
import Why from "@/components/organisms/Why";
import Community from "@/components/organisms/Community";
import Company from "@/components/organisms/Compnay";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className={styles.main}>
      <BgImage />
      <Top />
      <About />
      <Why />
      <Community />
      <Company />
      <Footer />
    </div>
  );
}
